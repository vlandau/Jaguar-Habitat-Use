// Script to calculate Boyce Index for evaluation of RSPF model fit
var presence = ee.FeatureCollection("users/VincentLandau/Jaguar/LocationData/mergedPresencePoints"),
    SA = ee.FeatureCollection("users/VincentLandau/Jaguar/StudyAreaAlbers20180607"),
    move = ee.FeatureCollection("users/VincentLandau/Jaguar/LocationData/SonoraMovement"),
    habitat = ee.Image("users/VincentLandau/Jaguar/RSPFfixedoutput2/RSPFmeanProb_10000samples");

var presence = presence.filter(ee.Filter.neq("IDcode","JagInfo829")).filterBounds(SA.geometry())
print(presence.size())
var SA = ee.FeatureCollection("users/VincentLandau/Jaguar/StudyAreaAlbers20180607");
Map.addLayer(SA)
var habitat = habitat.rename('HS').clip(SA.geometry());
print(habitat.projection())
var max = ee.Number(habitat.reduceRegion({geometry:SA.geometry(),
                                reducer: ee.Reducer.max().setOutputs(['max']),
                                crs:'EPSG:4326',
                                crsTransform: [0.0002777777777777778,0,-114.7863888888889,0,-0.0002777777777777778,35.19583333333333],
                                maxPixels:1e13
}).get('HS'));
var min = ee.Number(habitat.reduceRegion({geometry:SA.geometry(),
                                reducer: ee.Reducer.min().setOutputs(['min']),
                                crs:'EPSG:4326',
                                crsTransform: [0.0002777777777777778,0,-114.7863888888889,0,-0.0002777777777777778,35.19583333333333],
                                maxPixels:1e13
}).get('HS'));

// Quantiles determined from QGIS quntiles and GEE and arc were not working
var q1 = ee.Number(0.000238);
var q2 = ee.Number(0.000519);
var q3 = ee.Number(0.001281);
var q4 = ee.Number(0.003972);
var q5 = ee.Number(0.012448);
var q6 = ee.Number(0.036756);
var q7 = ee.Number(0.093281);
var q8 = ee.Number(0.172516);
var q9 = ee.Number(0.230237);

var binSize = max.subtract(min).divide(10);
print(min.add(binSize.multiply(1)));
var classified = habitat.where(habitat.lte(q1),1)
                        .where(habitat.lte(q2).and(habitat.gt(q1)),2)
                        .where(habitat.lte(q3).and(habitat.gt(q2)),3)
                        .where(habitat.lte(q4).and(habitat.gt(q3)),4)
                        .where(habitat.lte(q5).and(habitat.gt(q4)),5)
                        .where(habitat.lte(q6).and(habitat.gt(q5)),6)
                        .where(habitat.lte(q7).and(habitat.gt(q6)),7)
                        .where(habitat.lte(q8).and(habitat.gt(q7)),8)
                        .where(habitat.lte(q9).and(habitat.gt(q8)),9)
                        .where(habitat.gt(q9),10)
Map.addLayer(classified,{min:1,max:10,palette:['ffcccc','edff5a','64ff6f','6a67ff','ff46df','074703','00c4ff','500fb8','ff3232','ffffff']});
var bins = ee.List([1,2,3,4,5,6,7,8,9,10]);
var totalArea = ee.Number(ee.Image.pixelArea().reduceRegion({geometry:SA.geometry(),
                                   reducer:ee.Reducer.sum(),
                                   crs:'EPSG:4326',
                                   crsTransform: [0.0002777777777777778,0,-114.7863888888889,0,-0.0002777777777777778,35.19583333333333],
                                   maxPixels:1e13
}).get('area'))

var presVals = classified.rename("class").sampleRegions({collection:presence,
                                         properties:[],
                                         projection:habitat.projection()
})
print("pres bin numbers",presVals.aggregate_histogram('class'))
var moveVals = classified.rename("class").sampleRegions({collection:move,
                                         properties:[],
                                         projection:habitat.projection()
})
print("move bin numbers",moveVals.aggregate_histogram('class'))
var percentArea = bins.map(function(i){
  var classPA = ee.Image.pixelArea().multiply(classified.eq(ee.Number(i)));
  var area = ee.Number(classPA.reduceRegion({geometry:SA.geometry(),
                                            reducer:ee.Reducer.sum(),
                                            crs:'EPSG:4326',
                                            crsTransform: [0.0002777777777777778,0,-114.7863888888889,0,-0.0002777777777777778,35.19583333333333],
                                            maxPixels:1e13
  }).get('area'))
  return area.divide(totalArea)
})
print(percentArea)















