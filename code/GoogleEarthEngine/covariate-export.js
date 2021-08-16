///////////////////////////////////////////////////////
//  Script to extract covariate data for Jaguar RSF  //
//  Written by Vincent A. Landau, 2018-02-05         //
///////////////////////////////////////////////////////

// This script must be run from the Earth Engine ode editor at code.earthengine.google.com

var geometry = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-107.314453125, 35.24561909420681],
          [-110.21484375, 35.74651225991851],
          [-113.291015625, 36.03133177633187],
          [-115.751953125, 34.88593094075317],
          [-116.3671875, 32.39851580247402],
          [-115.751953125, 29.3055613255277],
          [-112.060546875, 25.72073513441211],
          [-108.80859375, 25.16517336866393],
          [-106.171875, 26.194876675795218],
          [-105.556640625, 29.53522956294847],
          [-106.81423093680428, 34.18414328848968]]]),
    geometry2 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry({
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -110.29188451130386,
                30.18499948557564
              ],
              [
                -110.34750279743668,
                30.20814485716681
              ],
              [
                -110.39556798298355,
                30.22535199024788
              ],
              [
                -110.40037450153824,
                30.187967144957323
              ],
              [
                -110.36878880817886,
                30.18203173678307
              ],
              [
                -110.28776463825699,
                30.135129443401624
              ],
              [
                -110.25411900837418,
                30.151161850355432
              ],
              [
                -110.25961217243668,
                30.170753476037063
              ]
            ]
          ],
          "evenOdd": true
        },
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -109.19652860875999,
                30.84647107634627
              ],
              [
                -109.18691557165062,
                30.804016566710313
              ],
              [
                -108.97954862829124,
                30.612739289806388
              ],
              [
                -108.92599027868187,
                30.641100586440746
              ],
              [
                -108.95070951696312,
                30.69897908129674
              ],
              [
                -109.14434355016624,
                30.886549759528954
              ]
            ]
          ],
          "geodesic": true,
          "evenOdd": true
        }
      ],
      "coordinates": []
    }),
    geometry3 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-111.61505480846267, 31.41912528310179],
          [-111.8141820057283, 31.12098235255862],
          [-111.82104846080642, 30.905595950029088],
          [-111.72766467174392, 30.970380717808148],
          [-111.55841861009623, 31.3610759907717],
          [-111.57764468431498, 31.395076962526403]]]);

var export_date = "10122020";

/// The following script extracts covarates for RSF modeling

////////////////////////////////////
///////    Import Assets     ///////
////////////////////////////////////

/// Static/non-dynamic covariates
var ALOS = ee.Image("JAXA/ALOS/AW3D30/V2_2").select("AVE_DSM").rename("elev");
var slope = ee.Algorithms.Terrain(ALOS).select('slope');
var roads = ee.FeatureCollection('users/VincentLandau/Jaguar/habitatCov/OSMroadsUpdated20180508'); // open street maps 2017 filtered 
var roadsSub = roads.filter(ee.Filter.and(ee.Filter.or(ee.Filter.eq('fclass','primary_link'),
                                         ee.Filter.eq('fclass','primary'),
                                         ee.Filter.eq('fclass','motorway'),
                                         ee.Filter.eq('fclass','trunk'),
                                         ee.Filter.eq('fclass','motorway_link'),
                                         ee.Filter.eq('fclass','secondary'),
                                         ee.Filter.eq('fclass','secondary_link'),
                                         ee.Filter.eq('fclass','tertiary'),
                                         ee.Filter.eq('fclass','tertiary_link'),
                                         ee.Filter.bounds(geometry2)),ee.Filter.bounds(geometry3).not()));
var sett = ee.Image("users/VincentLandau/Jaguar/settlements");
var settLine = ee.FeatureCollection("users/VincentLandau/Jaguar/StudyAreaSettlementLines");
var riparian = ee.Image('users/VincentLandau/Jaguar/riparianTiles/riparianClean');
var riparianDist = ee.Image("users/VincentLandau/Jaguar/riparianTiles/RiparianDistance30mAlbersInt").rename(['riparianDist']);
var waterDist = ee.Image("users/VincentLandau/Jaguar/water/water30mAlbersDistInt");
print(riparian)

Map.addLayer(riparian.mask(riparian.eq(1)),{palette:['00FF00']}, "Riparian Veg")
/// Occupancy Data
var jagOcc = ee.FeatureCollection("users/VincentLandau/Jaguar/LocationData/SonoraOccupancy");
/// Available Sample
var avail = ee.FeatureCollection("users/VincentLandau/Jaguar/LocationData/30000available20181025");

/// Presence Only Data
var usedJagInfo1 = ee.FeatureCollection("users/VincentLandau/Jaguar/LocationData/mergedPresencePoints").filterBounds(geometry);

// Edit year for data point 242
var usedJagInfo = usedJagInfo1.map(
  function(feature){
    return ee.Algorithms.If(ee.String(feature.get('IDcode')).compareTo('JagInfo242').eq(0),
                            feature.set({year:1990,
                                        //changed:1 used to double check that only one feature was edited
                            }),
                            feature//.set({changed:0})used to doulbe check that only one feature was edited
                            );
  });
Map.addLayer(usedJagInfo,{color:'red'}, "Presences")


////////////////////////////////////
//////    Define variables     /////
////////////////////////////////////

////////////////////////////////////
/////////      CHILI       /////////
////////////////////////////////////
function radians(img) {
  return img.toFloat().multiply(Math.PI).divide(180);
}
var terrain = ee.Algorithms.Terrain(ALOS);
var slope = terrain.select('slope');
var slopeR = radians(slope);
var aspectR = radians(terrain.select('aspect'));
var lat = ee.Image(30); //got rid of adjustment by latitude (only interested in morphologic diffs)
var altitudeR = radians(lat);
var azimuthR = radians(ee.Image(202.5));   // folded by 22.5 degrees west of south

var chili = azimuthR.subtract(aspectR).cos().multiply(slopeR.sin()).multiply(altitudeR.sin()).add(altitudeR.cos().multiply(slopeR.cos())).multiply(1000);

////////////////////////////////////
/////    Ruggedness Metric     /////
////////////////////////////////////
var CHILIsd1080 = chili.reduceNeighborhood(ee.Reducer.stdDev(),ee.Kernel.circle(1080,"meters")).rename(["chiliSD1080"]);
var CHILIsd2160 = chili.reduceNeighborhood(ee.Reducer.stdDev(),ee.Kernel.circle(2160,"meters")).rename(["chiliSD2160"]);
var CHILIsd3240 = chili.reduceNeighborhood(ee.Reducer.stdDev(),ee.Kernel.circle(3240,"meters")).rename(["chiliSD3240"]);

////////////////////////////////////
///  Distance to Roads and Sett. ///
////////////////////////////////////
var roadDist = roadsSub.distance().rename(['Dist_Road_m']); // currently using only highways and primary/secondary
var settDist = settLine.distance().where(sett.eq(1),1).rename(["Dist_Sett_m"]);


/// Function to dynamically extract covariates depending on date of jaguar location
var getCovariates = function(feature){
  
    ////////////////////////////////////
    //// Extract date from feature  ////
    ////////////////////////////////////
      
    var year = ee.Number(feature.get('year'));
    var startDate = ee.String(year).cat("-01-01");
    var endDate = ee.String(year).cat("-12-31");
    

    ////////////////////////////////////
    //////  Generate NDVI median  //////
    ////////////////////////////////////
      
    // Select Landsat tiles from appropriate landsat collcetion (5,7, or 8) based on the year of the point
    var LSAT = ee.Algorithms.If(ee.Number(year).lte(2011),ee.ImageCollection('LANDSAT/LT05/C01/T1_SR').filterDate(startDate,endDate),
               ee.Algorithms.If(ee.Number(year).gte(2014),ee.ImageCollection('LANDSAT/LC08/C01/T1_SR').filterDate(startDate,endDate),
                                                          ee.ImageCollection("LANDSAT/LE07/C01/T1_SR").filterDate(startDate,endDate)));
    /// Get NDVI using function robust to varying years
        /// Get NDVI using function robust to varying years
    var maskNDVI = function(image){
        // get bits for clouds and shadows
        var cloudShadowBitMask = ee.Number(2).pow(3).int();
        var cloudsBitMask = ee.Number(2).pow(7).int(); // high confidence of clouds

        // Get the pixel QA band.
        var qa = image.select('pixel_qa');

        // Both flags should be set to zero, indicating clear conditions.
        var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
                     .and(qa.bitwiseAnd(cloudsBitMask).eq(0));
  
        var masked = image.updateMask(mask);
        
        // Calculate NDVI, using appropriate bands depending on whether the LANDSAT collection is 5, 7, or 8
        // If year is lte 2013, then landsat 5 or 7 was used, thus bands 4 and 3 should be used,
        // if year is gte 2014, then LANDSAT 8 was used, thus bands 5 and 4 should be used.
        var NDVI = ee.Algorithms.If(year.lt(2013), masked.normalizedDifference(['B4','B3']),
                                                   masked.normalizedDifference(['B5','B4']));

        return NDVI;
      };
        
      
    // Apply get NDVI function to the Landsat collection
    var NDVIcol = ee.ImageCollection(LSAT).map(maskNDVI);
    var NDVImedian = NDVIcol.median();
    var NDVI = NDVImedian.rename(["NDVI"]);
    var NDVI540  = NDVI.reduceNeighborhood({reducer:ee.Reducer.mean(),kernel:ee.Kernel.circle(540,"meters"),skipMasked:false}).rename(["NDVI540"]);
    var NDVI1080 = NDVI.reduceNeighborhood({reducer:ee.Reducer.mean(),kernel:ee.Kernel.circle(1080,"meters"),skipMasked:false}).rename(["NDVI1080"]);
    var NDVI2160 = NDVI.reduceNeighborhood({reducer:ee.Reducer.mean(),kernel:ee.Kernel.circle(2160,"meters"),skipMasked:false}).rename(["NDVI2160"]);
    var NDVI3240 = NDVI.reduceNeighborhood({reducer:ee.Reducer.mean(),kernel:ee.Kernel.circle(3240,"meters"),skipMasked:false}).rename(["NDVI3240"]);

    ////////////////////////////////////
    ///////  Extract covariates  ///////
    ////////////////////////////////////
      
    // Create image with one variable per band
    var covariates = ee.Image(1).rename(["intercept"]).addBands(roadDist)
                                                      .addBands(NDVI1080)
                                                      .addBands(NDVI2160)
                                                      .addBands(NDVI3240)
                                                      .addBands(ALOS)
                                                      .addBands(CHILIsd1080)
                                                      .addBands(CHILIsd2160)
                                                      .addBands(CHILIsd3240)
                                                      .addBands(settDist)
                                                      .addBands(riparianDist)
                                                      .addBands(waterDist.rename((['waterDistm'])))
                                                      .addBands(slope);
      
    // Extract and return all bands from image created above using sampleRegions
    var sample = covariates.sampleRegions({
                                collection: ee.Feature(feature.geometry()),
                                scale: 30
                                });
    // Return feature with desired attribute information copied to properties, and set new properties, lat and long
    // Argument .first() is required to cast sample into correct format for properties to be correctly copied over, maybe a GEE bug
    
    var final = ee.Feature(ee.Algorithms.If(sample.first(),feature.copyProperties(sample.first()),feature));
    
    return final.set({longitude:feature.geometry().coordinates().get(0),
                      latitude: feature.geometry().coordinates().get(1)
                      });
};
///
var movement = ee.FeatureCollection("users/VincentLandau/Jaguar/LocationData/SonoraMovement")

var movement = movement.map(function(f){
  var ID = f.get("indiv_ID")
  var year = ee.Algorithms.If(ee.Number(ID).eq(43),2013,2012)
  return f.set({"year":year})
})

/// Extract covariate info for presence, occupancy, and background.available dataset
var UsedJagInfoAttr = ee.FeatureCollection(usedJagInfo.map(getCovariates));
var jagOccAttr = ee.FeatureCollection(jagOcc.map(getCovariates));
var availAttr = ee.FeatureCollection(avail.map(getCovariates));
var moveAttr = ee.FeatureCollection(movement.map(getCovariates));
/// Check to make sure exports worked correctly
print("avail",availAttr.first());
print("used",UsedJagInfoAttr.toList(57).get(38));
print("Occ",jagOccAttr.first());
print("Move",moveAttr.first());

////////////////////////////////////
///////  Export data to CSV  ///////
////////////////////////////////////

//// Note that geometry info is removed here to expedite export process and reduce file size, lat and long are recorded in columns of the CSV 

/// Presence
Export.table.toDrive({
  collection:UsedJagInfoAttr.map(function(feature){     
                                    return ee.Feature(feature.select(['.*'],null,false));
                                }),
  description: 'export_presence_covariates',
  fileNamePrefix:"PresenceAttr" + export_date,
  folder:'Thesis/cov_exports',
  fileFormat:"CSV"
});

/// Occupancy
Export.table.toDrive({
  collection: jagOccAttr.map(function(feature){     
                                    return ee.Feature(feature.select(['.*'],null,false));
                                }),
  description: 'export_Occupancy_covariates',
  fileNamePrefix:"jagOccAttr" + export_date,
  folder: 'Thesis/cov_exports',
  fileFormat: "CSV"
});

/// Available/Background
Export.table.toDrive({
  collection: availAttr.map(function(feature){     
                                    return ee.Feature(feature.select(['.*'],null,false));
                                }),
  description: 'export_background_covariates',
  fileNamePrefix:"backgroundAttr" + export_date,
  folder: 'Thesis/cov_exports',
  fileFormat: "CSV"
});

/// Available/Background
Export.table.toDrive({
  collection: moveAttr.map(function(feature){     
                                    return ee.Feature(feature.select(['.*'],null,false));
                                }),
  description: 'export_move_covariates',
  fileNamePrefix:"moveAttr" + export_date,
  folder: 'Thesis/cov_exports',
  fileFormat: "CSV"
});


