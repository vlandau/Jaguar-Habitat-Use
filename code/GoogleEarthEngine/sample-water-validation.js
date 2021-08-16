var h = 'w'; var l = 8; var t = 'p';
var GG = ee.FeatureCollection("users/DavidTheobald8/GG/GG" + h + l + t).filterBounds(table.geometry());
// get a sub-set (smaller sample) of random quadrangles
var t = 10000; // gRRQRR numbers are in sequence, but not necessarily incremental by 1, so somewhat of a trial-and-error exercise
var GGf = GG.limit(12,'gRRQRR8')//.filterMetadata('gRRQRR' + l,'less_than',t);
print(GGf.first())
Map.addLayer(GGf)
var alosmask = ee.Image('JAXA/ALOS/AW3D30_V1_1').select("AVE_MSK").neq(3)
var water = ee.Image("users/VincentLandau/Jaguar/water/waterMosaic").rename('water').mask(alosmask)
var waterBuff100 = water.reduceNeighborhood(ee.Reducer.mean(),ee.Kernel.circle(100,'meters')).gt(0)

var strat = waterBuff100.where(water.eq(1),2).rename("stratum")
Map.addLayer(strat,{},"stratum")

var StratSample = function(f){
  var samples = ee.Image.pixelLonLat().addBands(strat).stratifiedSample({
                    numPoints: 15,
                    classBand:'stratum',
                    seed:20,
                    region: f.geometry(),
                    scale:10,
                    tileScale:16,
                    dropNulls: true
  });
  var points = samples.map(function(point){
    var long = point.get("longitude"); //extract latitude
    var lat = point.get("latitude");
    var geom = ee.Algorithms.GeometryConstructors.Point([long, lat]);
  
   // convert geom from a geometry to a feature using ee.Feature(geom), then set the attributes that I want
   return ee.Feature(geom).set({'CLASS':-1, // add the property that I'll edit, I will overwrite the -1 values with the correct class for every point
                                 'Lat':lat,
                                 'Long':long
  });
  });
  return points;
};
var samplesList = GGf.map(StratSample).toList(12);
print(samplesList);
var fc = samplesList.get(0);

for (var i = 1; i <= 11; i+= 1) {
    var fc = ee.FeatureCollection(fc).merge(ee.FeatureCollection(samplesList.get(i)));
}
print(fc);
Map.addLayer(fc,{color:'red'})

var index = function(i){
  var f = fc.toList(540).get(i)
  return ee.Feature(f).set({'ID':i})
}
var fcI = ee.List.sequence(0,539,1).map(index)

Export.table.toDrive({collection:ee.FeatureCollection(fcI),
                      fileFormat:'KML',
                      folder:'tempExports'
                      
});
