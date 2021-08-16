var h = 'w'; var l = 8; var t = 'p';
var GG = ee.FeatureCollection("users/DavidTheobald8/GG/GG" + h + l + t).filterBounds(table.geometry());
// get a sub-set (smaller sample) of random quadrangles
var t = 10000; // gRRQRR numbers are in sequence, but not necessarily incremental by 1, so somewhat of a trial-and-error exercise
var GGf = GG.limit(12,'gRRQRR8')//.filterMetadata('gRRQRR' + l,'less_than',t);

// Import classified image
var riparian = ee.Image("users/VincentLandau/Jaguar/riparianTiles/riparianClean").rename('riparian');
var ripBuff100 = riparian.reduceNeighborhood(ee.Reducer.mean(),ee.Kernel.circle(100,'meters')).gt(0);

// Generate strata, the function below creates an image where riparian is 2, within 100m of riparian is 1, else 0
var strat = ripBuff100.where(riparian.eq(1),2).rename("stratum");
Map.addLayer(strat,{},"strat");

// Function to generate n points in each stratum within a feature collection ("f") designated to study area/region
var StratSample = function(f){
  var samples = ee.Image.pixelLonLat().addBands(strat).stratifiedSample({ // Add pixel Long Lat image so you get those values returned as well
                    numPoints: 15, // Number of points you want per stratum per region
                    classBand:'stratum',
                    seed:20,
                    region: f.geometry(),
                    scale:10,
                    tileScale:16,
                    geometries:true,
                    dropNulls: true
  });
  return samples;
};
// The above function returns a featureCollection of featureCollections
var fc = GGf.map(StratSample).flatten();

/// Create a unique ID for each point to reference later
var index = function(i){
  var f = fc.toList(fc.size()).get(i);
  return ee.Feature(f).set({'ID':i});
};

var fcI = ee.List.sequence(0,fc.size().subtract(1),1).map(index);
print(ee.FeatureCollection(fcI));
Export.table.toDrive({collection:ee.FeatureCollection(fcI),
                      fileFormat:'KML',
                      folder:'tempExports'
                      
});
