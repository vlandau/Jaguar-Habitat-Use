var fc = ee.FeatureCollection("users/VincentLandau/Jaguar/RSPFfixedoutput2/correctHabitatSummaries/0_499")
.merge(ee.FeatureCollection("users/VincentLandau/Jaguar/RSPFfixedoutput2/correctHabitatSummaries/500_999"))
.merge(ee.FeatureCollection("users/VincentLandau/Jaguar/RSPFfixedoutput2/correctHabitatSummaries/1500_1999"))
.merge(ee.FeatureCollection("users/VincentLandau/Jaguar/RSPFfixedoutput2/correctHabitatSummaries/2000_2499"))
.merge(ee.FeatureCollection("users/VincentLandau/Jaguar/RSPFfixedoutput2/correctHabitatSummaries/4000_4499")).map(
  function(f){
    var percentUS = ee.Number(f.get("probSumUS")).divide(ee.Number(f.get("probSumAll")))
    var percentI10 = ee.Number(f.get("probSumI10")).divide(ee.Number(f.get("probSumUS")))
    return f.set({"propUS": percentUS,
                  "propI10": percentI10
    })
  })

print(fc.first())
print("Total Hab",fc.reduceColumns({reducer:ee.Reducer.mean(),selectors:['probSumAll']}).get("mean"))
print("US Hab",fc.reduceColumns({reducer:ee.Reducer.mean(),selectors:['propUS']}).get("mean"))
print("US above I-10 Hab",fc.reduceColumns({reducer:ee.Reducer.mean(),selectors:['propI10']}).get("mean"))

var totalHab = ee.Array(fc.aggregate_array('probSumAll')).sort().get([124])
var USHab = ee.Array(fc.aggregate_array('propUS')).sort().get([4874])
var I10Hab = ee.Array(fc.aggregate_array('propI10')).sort().get([4874])
print("total lower", totalHab)
print("US lower", USHab)
print("I10 lower", I10Hab)


Export.table.toDrive({
  collection: fc,
  fileFormat: "CSV"
})

