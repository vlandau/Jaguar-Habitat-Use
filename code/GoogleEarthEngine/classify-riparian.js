var geometry1 = /* color: #0b4a8b */ee.Geometry.Polygon(
        [[[-106.41357421875, 35.263561862152095],
          [-108.78662109375, 35.817813158696616],
          [-113.22509765625, 35.639441068973944],
          [-114.4775390625, 35.33529320309328],
          [-114.89501953125, 34.92197103616377],
          [-114.697265625, 34.25267611710151],
          [-114.45556640625, 33.578014746143985],
          [-114.45556640625, 32.731840896865684],
          [-114.9609375, 32.342841356393016],
          [-115.07080078125, 31.765537409484374],
          [-114.169921875, 31.44741029142872],
          [-113.6865234375, 31.39115752282472],
          [-113.13720703125, 31.090574094954192],
          [-113.18115234375, 30.581179257386985],
          [-112.939453125, 30.12612436422458],
          [-112.5439453125, 29.22889003019423],
          [-111.95068359375, 28.47834869222316],
          [-111.07177734375, 27.81964475509945],
          [-110.654296875, 27.196014383173306],
          [-110.0390625, 26.843677401113002],
          [-109.6875, 26.52956523826758],
          [-109.35791015625, 26.27371402440643],
          [-108.80859375, 26.254009699865737],
          [-108.23730068750001, 26.194876675795218],
          [-107.64403896875001, 26.391869671769022],
          [-107.20458584375001, 26.96124577052697],
          [-106.94091796875, 28.285033294640684],
          [-106.962890625, 30.06909396443887],
          [-106.50146484375, 30.29701788337205],
          [-105.88623046875, 30.486550842588482],
          [-105.3369140625, 34.66935854524542]]]),
    table = ee.FeatureCollection("users/VincentLandau/Jaguar/LocationData/mergedPresencePoints"),
    geometry2 = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-108.9404296875, 35.38188457595899],
          [-114.85107421875, 35.39979713315723],
          [-114.7412109375, 34.209076632611534],
          [-109.00634765625, 34.209076632611534]]]),
    geometry3 = /* color: #98ff00 */ee.Geometry.Polygon(
        [[[-108.97158864881646, 34.229670218004706],
          [-114.72008122898887, 34.229571323697485],
          [-114.72076166264907, 33.027315765297594],
          [-108.9708566401847, 33.11891461120593]]]),
    geometry4 = /* color: #0b4a8b */ee.Geometry.Polygon(
        [[[-109.05029296875, 33.189053428639305],
          [-114.76318359375, 33.115469627056356],
          [-114.98291015625, 32.060231403563776],
          [-109.05029296875, 32.04160788973359]]]),
    geometry5 = /* color: #ffc82d */ee.Geometry.Polygon(
        [[[-109.0283203125, 32.09746705799757],
          [-115.02685546875, 32.09746705799757],
          [-114.9609375, 31.105626023220424],
          [-109.0283203125, 31.030342827474055]]]),
    geometry6 = /* color: #00ffff */ee.Geometry.Polygon(
        [[[-107.68798828125, 31.011512719970742],
          [-113.26904296875, 31.16204928785336],
          [-113.26904296875, 29.970163452134702],
          [-107.6220703125, 29.970163452134702]]]),
    geometry7 = /* color: #bf04c2 */ee.Geometry.Polygon(
        [[[-107.90771484375, 30.008225351189157],
          [-113.04931640625, 30.046272652860303],
          [-112.9833984375, 28.937016016114764],
          [-107.8857421875, 28.898550048598313]]]),
    geometry8 = /* color: #ff0000 */ee.Geometry.Polygon(
        [[[-107.95166015625, 28.975467711303974],
          [-112.4560546875, 28.994688203019628],
          [-112.39013671875, 27.58230290829872],
          [-107.90771484375, 27.50437370046835]]]),
    geometry9 = /* color: #00ff00 */ee.Geometry.Polygon(
        [[[-107.95166015625, 27.58230290829872],
          [-110.76416015625, 27.621246769670776],
          [-110.67626953125, 25.776149970009268],
          [-107.86376953125, 25.875040556109578]]]),
    geometry10 = /* color: #0000ff */ee.Geometry.Polygon(
        [[[-106.76513671875, 35.38546735099584],
          [-109.22607421875, 35.38546735099584],
          [-109.18212890625, 33.29931330411715],
          [-106.69921875, 33.26257546740699]]]),
    geometry11 = /* color: #999900 */ee.Geometry.Polygon(
        [[[-106.7431640625, 33.336035674240094],
          [-109.22607421875, 33.37274256920851],
          [-109.13818359375, 31.030342827474055],
          [-106.85302734375, 30.955000077666483]]]),
    table2 = ee.FeatureCollection("users/VincentLandau/Jaguar/StudyAreaAlbers20180607"),
    geometry12 = /* color: #009999 */ee.Geometry.Polygon(
        [[[-107.64404296875, 29.97968029479088],
          [-108.08349609375, 30.01773854554856],
          [-108.03955078125, 26.643530937511425],
          [-107.578125, 26.663168711648808]]]),
    table3 = ee.FeatureCollection("users/VincentLandau/Jaguar/LocationData/SonoraMovement"),
    moreRiparian = /* color: #00d624 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-111.1482846736908, 28.950494451134073]),
            {
              "riparian": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.1490786075592, 28.948701300456758]),
            {
              "riparian": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.15017831325531, 28.954864539118372]),
            {
              "riparian": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.35827040678384, 28.676203171896027]),
            {
              "riparian": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.36144614225748, 28.676240823475162]),
            {
              "riparian": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.35784125334146, 28.67473474975454]),
            {
              "riparian": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.01633236859305, 28.894805873507003]),
            {
              "riparian": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.93495963069631, 28.861791755168177]),
            {
              "riparian": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.96787569972707, 28.866940729350244]),
            {
              "riparian": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.85715995088106, 28.83109557286766]),
            {
              "riparian": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.40914426237543, 28.803383953520047]),
            {
              "riparian": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.07837837413535, 27.560471043787658]),
            {
              "riparian": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.0122887440084, 27.586947475685747]),
            {
              "riparian": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.02979820445762, 27.571275416913103]),
            {
              "riparian": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1631790943502, 27.55712299403762]),
            {
              "riparian": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.15202110484825, 27.564275521837626]),
            {
              "riparian": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.3707899233392, 27.62118426299639]),
            {
              "riparian": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.35413876977475, 27.611449589631167]),
            {
              "riparian": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.38520947900327, 27.629093047924943]),
            {
              "riparian": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.50056834003652, 27.60909871565267]),
            {
              "riparian": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.50292868396963, 27.606474712637667]),
            {
              "riparian": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.50584692737783, 27.59749938671425]),
            {
              "riparian": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.18869188792632, 27.31448220482947]),
            {
              "riparian": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.83755851699965, 33.80499854543953]),
            {
              "riparian": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.83465636684554, 33.8058811234541]),
            {
              "riparian": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.91359481615348, 33.300945498243166]),
            {
              "riparian": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.78033443563413, 33.31470443337794]),
            {
              "riparian": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.77692803018522, 33.314686501919795]),
            {
              "riparian": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.77939029806089, 33.31530513509444]),
            {
              "riparian": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.17307958042966, 33.37097295729143]),
            {
              "riparian": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.17561158573972, 33.36891214741721]),
            {
              "riparian": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5236459537598, 32.20144289310254]),
            {
              "riparian": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94406870819415, 30.674258870149345]),
            {
              "riparian": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9450128457674, 30.674258870149345]),
            {
              "riparian": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94102171875323, 30.67230258345176]),
            {
              "riparian": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93926218963946, 30.678521961459982]),
            {
              "riparian": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95235886972273, 30.676673225048543]),
            {
              "riparian": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94392600457991, 30.674237149283186]),
            {
              "riparian": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94463410775984, 30.67415410016281]),
            {
              "riparian": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94132962625349, 30.672142444102246]),
            {
              "riparian": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.97793902117002, 30.700563217912304]),
            {
              "riparian": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.415484007256, 30.746305834710487]),
            {
              "riparian": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.41770700494749, 30.74496787946008]),
            {
              "riparian": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.67276658709847, 30.73196075556289]),
            {
              "riparian": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.67091049846016, 30.73184086744545]),
            {
              "riparian": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.85370409500052, 30.66490179731589]),
            {
              "riparian": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.85390794288566, 30.664698768612134]),
            {
              "riparian": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.89065271415177, 30.66448554933355]),
            {
              "riparian": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.2011132188569, 30.556439733661268]),
            {
              "riparian": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.19838809449777, 30.55888801381835]),
            {
              "riparian": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.22876506329737, 30.53128141597242]),
            {
              "riparian": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.59576971686306, 29.925537338341385]),
            {
              "riparian": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.64240019546065, 29.951638948149284]),
            {
              "riparian": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.64209978805098, 29.95113696454762]),
            {
              "riparian": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.63876467646651, 29.95597737396447]),
            {
              "riparian": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.64583235360317, 29.97822108129659]),
            {
              "riparian": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.64841800309352, 29.978229578071296]),
            {
              "riparian": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.64804517604045, 29.979240191890614]),
            {
              "riparian": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61163352901411, 30.00148664633651]),
            {
              "riparian": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61300606964141, 30.00004776433238]),
            {
              "riparian": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61405260275444, 29.998682398236763]),
            {
              "riparian": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.71961414057944, 30.029469863439125]),
            {
              "riparian": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.99073505694616, 30.02152940857368]),
            {
              "riparian": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.99158200973517, 30.017307501226924]),
            {
              "riparian": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.99372777694708, 30.01303689223371]),
            {
              "riparian": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.99858636008463, 30.004038685919802]),
            {
              "riparian": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.47889475098282, 29.976925954304917]),
            {
              "riparian": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.17987205815479, 29.98263338974326]),
            {
              "riparian": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.18461420369312, 29.980347268177823]),
            {
              "riparian": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.10529806581269, 29.963816859988828]),
            {
              "riparian": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.10499765840302, 29.963630963206196]),
            {
              "riparian": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.07288333184158, 29.964669393743442]),
            {
              "riparian": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.2820971695428, 29.49654691832408]),
            {
              "riparian": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28367967286158, 29.503760437881496]),
            {
              "riparian": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.31082566085115, 29.512183384749413]),
            {
              "riparian": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.3088821316125, 29.516173125022824]),
            {
              "riparian": 1,
              "system:index": "75"
            })]),
    moreNotRiparian = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-109.41680073738098, 29.771155457574437]),
            {
              "riparian": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.41314220428467, 29.771894890536853]),
            {
              "riparian": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.43389177322388, 29.806202688016622]),
            {
              "riparian": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.43384885787964, 29.8061822070637]),
            {
              "riparian": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.38711404800415, 29.72791613094136]),
            {
              "riparian": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.39003229141235, 29.72694717760151]),
            {
              "riparian": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.3864917755127, 29.727617992448785]),
            {
              "riparian": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.38589096069336, 29.702136924297903]),
            {
              "riparian": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.38443720340729, 29.701598271104878]),
            {
              "riparian": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.384925365448, 29.703668989309456]),
            {
              "riparian": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.40739154815674, 29.738400726952406]),
            {
              "riparian": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.40661907196045, 29.738996938962114]),
            {
              "riparian": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.34773111343384, 33.58051571747176]),
            {
              "riparian": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.36646366119385, 33.62095916587152]),
            {
              "riparian": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.36532640457153, 33.62040524970758]),
            {
              "riparian": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.32007217407227, 33.63911849895063]),
            {
              "riparian": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23033618927002, 33.66891836903359]),
            {
              "riparian": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2423095703125, 33.6634892882811]),
            {
              "riparian": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.24200916290283, 33.6589528857043]),
            {
              "riparian": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.24994850158691, 33.64726429799855]),
            {
              "riparian": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21872758865356, 33.65642025368925]),
            {
              "riparian": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.20825624465942, 33.65750975859198]),
            {
              "riparian": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.11526942253113, 32.098443142589375]),
            {
              "riparian": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.10663270950317, 32.1010370469361]),
            {
              "riparian": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.11774778366089, 32.10656633972036]),
            {
              "riparian": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.11547327041626, 32.10542124721624]),
            {
              "riparian": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.11590242385864, 32.10796587772489]),
            {
              "riparian": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.38063383102417, 31.866365383007718]),
            {
              "riparian": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.3915343284607, 31.866420053819688]),
            {
              "riparian": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.3677806854248, 31.87419755840096]),
            {
              "riparian": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.35087203979492, 31.87962757246748]),
            {
              "riparian": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.36984062194824, 31.89329594160258]),
            {
              "riparian": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.35245990753174, 31.90469623792411]),
            {
              "riparian": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.35497045516968, 31.839773302541406]),
            {
              "riparian": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.3524169921875, 31.84261696168014]),
            {
              "riparian": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5733289718628, 28.78033582628968]),
            {
              "riparian": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57259941101074, 28.780411054455055]),
            {
              "riparian": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56968116760254, 28.78217890072156]),
            {
              "riparian": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56843662261963, 28.784360456937087]),
            {
              "riparian": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56946659088135, 28.78590256397239]),
            {
              "riparian": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56702041625977, 28.788159264870377]),
            {
              "riparian": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56401634216309, 28.788159264870377]),
            {
              "riparian": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57766342163086, 28.7789064808392]),
            {
              "riparian": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57732009887695, 28.775483495017376]),
            {
              "riparian": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57302856445312, 28.77604773118055]),
            {
              "riparian": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57392978668213, 28.77537064741855]),
            {
              "riparian": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58349990844727, 28.77510733587994]),
            {
              "riparian": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58435821533203, 28.7756339582926]),
            {
              "riparian": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57272815704346, 28.77815418589296]),
            {
              "riparian": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57779216766357, 28.777477115802586]),
            {
              "riparian": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5797233581543, 28.777326655185746]),
            {
              "riparian": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5855598449707, 28.778455104522504]),
            {
              "riparian": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58448696136475, 28.777778036385303]),
            {
              "riparian": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56594753265381, 28.786353908059045]),
            {
              "riparian": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56933784484863, 28.788046430985414]),
            {
              "riparian": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57212734222412, 28.784285231620345]),
            {
              "riparian": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56144142150879, 28.791280953934695]),
            {
              "riparian": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57156944274902, 28.792108373920087]),
            {
              "riparian": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5526008605957, 28.798276206867797]),
            {
              "riparian": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54882431030273, 28.80023178501256]),
            {
              "riparian": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.55423164367676, 28.80008135722724]),
            {
              "riparian": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.522216796875, 28.785338381116965]),
            {
              "riparian": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5251350402832, 28.785112707120156]),
            {
              "riparian": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.55019760131836, 28.799855715142122]),
            {
              "riparian": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.48530960083008, 28.803541141356646]),
            {
              "riparian": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6144847869873, 28.78992697979415]),
            {
              "riparian": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61457061767578, 28.791882714575323]),
            {
              "riparian": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61482810974121, 28.793462319731404]),
            {
              "riparian": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61645889282227, 28.793011006414762]),
            {
              "riparian": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62212371826172, 28.795568422708385]),
            {
              "riparian": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6225528717041, 28.794741030184923]),
            {
              "riparian": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6236686706543, 28.794741030184923]),
            {
              "riparian": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62203788757324, 28.789325207865524]),
            {
              "riparian": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62032127380371, 28.790002201041027]),
            {
              "riparian": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61577224731445, 28.78940042954654]),
            {
              "riparian": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61422729492188, 28.78774554002852]),
            {
              "riparian": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61285400390625, 28.78797120832759]),
            {
              "riparian": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6112232208252, 28.787595094224493]),
            {
              "riparian": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.64931058883667, 28.756297650007472]),
            {
              "riparian": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65004014968872, 28.756391706868758]),
            {
              "riparian": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65089845657349, 28.75731345962532]),
            {
              "riparian": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65160655975342, 28.756749122168884]),
            {
              "riparian": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6501259803772, 28.755469945974607]),
            {
              "riparian": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.64943933486938, 28.755582815092737]),
            {
              "riparian": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60987138748169, 28.750221397241663]),
            {
              "riparian": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60961389541626, 28.749657021455295]),
            {
              "riparian": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60770416259766, 28.748735201111998]),
            {
              "riparian": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60740375518799, 28.746101383871014]),
            {
              "riparian": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60879850387573, 28.746176636713855]),
            {
              "riparian": 0,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60961389541626, 28.746214263114958]),
            {
              "riparian": 0,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6114592552185, 28.74628951587648]),
            {
              "riparian": 0,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61098718643188, 28.746270702691195]),
            {
              "riparian": 0,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6112232208252, 28.746270702691195]),
            {
              "riparian": 0,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58809185028076, 28.720738088668355]),
            {
              "riparian": 0,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58719062805176, 28.719307927314432]),
            {
              "riparian": 0,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58749103546143, 28.7210768082293]),
            {
              "riparian": 0,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5904951095581, 28.719910102900176]),
            {
              "riparian": 0,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5901517868042, 28.72141552669295]),
            {
              "riparian": 0,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58955097198486, 28.719985374604573]),
            {
              "riparian": 0,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59062385559082, 28.71893156581235]),
            {
              "riparian": 0,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58963680267334, 28.719646651508096]),
            {
              "riparian": 0,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59058094024658, 28.7210768082293]),
            {
              "riparian": 0,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58993721008301, 28.721227349904154]),
            {
              "riparian": 0,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59053802490234, 28.716974464166245]),
            {
              "riparian": 0,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59032344818115, 28.71802829268081]),
            {
              "riparian": 0,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59010887145996, 28.717275559111165]),
            {
              "riparian": 0,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58920764923096, 28.717990656130986]),
            {
              "riparian": 0,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58989429473877, 28.715619526186487]),
            {
              "riparian": 0,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59028053283691, 28.714640948950695]),
            {
              "riparian": 0,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58967971801758, 28.714640948950695]),
            {
              "riparian": 0,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58895015716553, 28.71539370148319]),
            {
              "riparian": 0,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5907096862793, 28.713662362558882]),
            {
              "riparian": 0,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58985137939453, 28.71381291490742]),
            {
              "riparian": 0,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54607772827148, 28.725818766866844]),
            {
              "riparian": 0,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54723644256592, 28.72510372338273]),
            {
              "riparian": 0,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5485668182373, 28.72532952711661]),
            {
              "riparian": 0,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5462064743042, 28.725781133121178]),
            {
              "riparian": 0,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54715061187744, 28.72634563788349]),
            {
              "riparian": 0,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54612064361572, 28.729657337755253]),
            {
              "riparian": 0,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54757976531982, 28.729318645993956]),
            {
              "riparian": 0,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54770851135254, 28.72826493127397]),
            {
              "riparian": 0,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54616355895996, 28.728603626449523]),
            {
              "riparian": 0,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54097080230713, 28.73323235052425]),
            {
              "riparian": 0,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53994083404541, 28.733119457254034]),
            {
              "riparian": 0,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5456485748291, 28.603550664493028]),
            {
              "riparian": 0,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5473222732544, 28.602853625314236]),
            {
              "riparian": 0,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54695749282837, 28.604059311786234]),
            {
              "riparian": 0,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54760122299194, 28.60138417622118]),
            {
              "riparian": 0,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.545090675354, 28.601327658538004]),
            {
              "riparian": 0,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54796600341797, 28.60046105025609]),
            {
              "riparian": 0,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54772996902466, 28.60262755756053]),
            {
              "riparian": 0,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54642105102539, 28.601836316592347]),
            {
              "riparian": 0,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54768705368042, 28.603927440502225]),
            {
              "riparian": 0,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33929824829102, 32.686764384394486]),
            {
              "riparian": 0,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33751726150513, 32.686739552523754]),
            {
              "riparian": 0,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33762454986572, 32.68664925475379]),
            {
              "riparian": 0,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.25113940238953, 27.41193813639486]),
            {
              "riparian": 0,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2518367767334, 27.411985757368374]),
            {
              "riparian": 0,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.25101065635681, 27.413623906358573]),
            {
              "riparian": 0,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.25524854660034, 27.41090951835696]),
            {
              "riparian": 0,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.25087118148804, 27.4103094867456]),
            {
              "riparian": 0,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.1589412689209, 25.87663906291584]),
            {
              "riparian": 0,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.15941333770752, 25.877971185672425]),
            {
              "riparian": 0,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.15924167633057, 25.87739200371126]),
            {
              "riparian": 0,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.67628574371338, 25.827842134331224]),
            {
              "riparian": 0,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6738395690918, 25.82490633883933]),
            {
              "riparian": 0,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.67411851882935, 25.82486770946601]),
            {
              "riparian": 0,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6737322807312, 25.823921285882257]),
            {
              "riparian": 0,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6646556854248, 25.827339963948273]),
            {
              "riparian": 0,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66838932037354, 25.82596864166653]),
            {
              "riparian": 0,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66841077804565, 25.826490132293376]),
            {
              "riparian": 0,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6898684501648, 25.826586704379594]),
            {
              "riparian": 0,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.68310928344727, 25.825891383600524]),
            {
              "riparian": 0,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.67654323577881, 25.827958019501697]),
            {
              "riparian": 0,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.67628574371338, 25.827610363649953]),
            {
              "riparian": 0,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66866827011108, 25.81315277060814]),
            {
              "riparian": 0,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6694085597992, 25.81315277060814]),
            {
              "riparian": 0,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.67019176483154, 25.812302837131345]),
            {
              "riparian": 0,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6688506603241, 25.81205171925523]),
            {
              "riparian": 0,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66989135742188, 25.81206137764492]),
            {
              "riparian": 0,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.67008447647095, 25.810342171874176]),
            {
              "riparian": 0,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65782141685486, 25.81538381696894]),
            {
              "riparian": 0,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65861535072327, 25.8153548426102]),
            {
              "riparian": 0,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65813255310059, 25.81536450073056]),
            {
              "riparian": 0,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65686655044556, 25.815345184489054]),
            {
              "riparian": 0,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65620136260986, 25.81536450073056]),
            {
              "riparian": 0,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65878701210022, 25.81651381143036]),
            {
              "riparian": 0,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.659108877182, 25.81651381143036]),
            {
              "riparian": 0,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6597740650177, 25.814302102769403]),
            {
              "riparian": 0,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65789651870728, 25.814572532245453]),
            {
              "riparian": 0,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65767121315002, 25.814842961104045]),
            {
              "riparian": 0,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65819692611694, 25.814688430403304]),
            {
              "riparian": 0,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.68984699249268, 25.807753657697912]),
            {
              "riparian": 0,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.67705821990967, 25.810902365258947]),
            {
              "riparian": 0,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6722731590271, 25.80151394704873]),
            {
              "riparian": 0,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.67270231246948, 25.801591221016444]),
            {
              "riparian": 0,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66315364837646, 25.806923003103197]),
            {
              "riparian": 0,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66489171981812, 25.80712583790207]),
            {
              "riparian": 0,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6647093296051, 25.8070968615235]),
            {
              "riparian": 0,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6627459526062, 25.807637752755202]),
            {
              "riparian": 0,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66256356239319, 25.807550823973788]),
            {
              "riparian": 0,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66299271583557, 25.806758803249778]),
            {
              "riparian": 0,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66159796714783, 25.807116179110004]),
            {
              "riparian": 0,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66256356239319, 25.806517332463706]),
            {
              "riparian": 0,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66318583488464, 25.80641108516195]),
            {
              "riparian": 0,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66780996322632, 25.804034984251903]),
            {
              "riparian": 0,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66271376609802, 25.805995753886407]),
            {
              "riparian": 0,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66411924362183, 25.80569632811022]),
            {
              "riparian": 0,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66298198699951, 25.80593780056942]),
            {
              "riparian": 0,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6629068851471, 25.80569632811022]),
            {
              "riparian": 0,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66289615631104, 25.80638210860858]),
            {
              "riparian": 0,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66318583488464, 25.806778120891387]),
            {
              "riparian": 0,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66124391555786, 25.807338331128495]),
            {
              "riparian": 0,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66107225418091, 25.807589458995622]),
            {
              "riparian": 0,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66485953330994, 25.801765087259543]),
            {
              "riparian": 0,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66508483886719, 25.801755428030518]),
            {
              "riparian": 0,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66558909416199, 25.8017747464878]),
            {
              "riparian": 0,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66576075553894, 25.801765087259543]),
            {
              "riparian": 0,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66539597511292, 25.80158156177322]),
            {
              "riparian": 0,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6634111404419, 25.802605437172065]),
            {
              "riparian": 0,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66761684417725, 25.803658280951588]),
            {
              "riparian": 0,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66765975952148, 25.803194644476488]),
            {
              "riparian": 0,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66494536399841, 25.800364490830308]),
            {
              "riparian": 0,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.70761394500732, 25.797041630331595]),
            {
              "riparian": 0,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7035584449768, 25.797138226428117]),
            {
              "riparian": 0,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.70014667510986, 25.78300538096325]),
            {
              "riparian": 0,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.69740009307861, 25.784879553035616]),
            {
              "riparian": 0,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6973786354065, 25.782889451821248]),
            {
              "riparian": 0,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7305736541748, 25.797959290070498]),
            {
              "riparian": 0,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.73038053512573, 25.797746780026216]),
            {
              "riparian": 0,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.73042345046997, 25.79732175879469]),
            {
              "riparian": 0,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.72943639755249, 25.79511935164135]),
            {
              "riparian": 0,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.72684001922607, 25.790366649425597]),
            {
              "riparian": 0,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.72651815414429, 25.79011548506542]),
            {
              "riparian": 0,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.72690439224243, 25.78775837822341]),
            {
              "riparian": 0,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76814603805542, 25.794423846144543]),
            {
              "riparian": 0,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76769542694092, 25.794906836505785]),
            {
              "riparian": 0,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76780271530151, 25.79467500137798]),
            {
              "riparian": 0,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76709461212158, 25.79397949327427]),
            {
              "riparian": 0,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7662148475647, 25.79397949327427]),
            {
              "riparian": 0,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76608610153198, 25.799118429059774]),
            {
              "riparian": 0,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76636505126953, 25.79896387784947]),
            {
              "riparian": 0,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76482009887695, 25.79896387784947]),
            {
              "riparian": 0,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7645411491394, 25.798770688553237]),
            {
              "riparian": 0,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76883268356323, 25.79482955818023]),
            {
              "riparian": 0,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76676201820374, 25.7884829037566]),
            {
              "riparian": 0,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7670087814331, 25.788424941876844]),
            {
              "riparian": 0,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7675666809082, 25.78852154499403]),
            {
              "riparian": 0,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7649917602539, 25.78959383430979]),
            {
              "riparian": 0,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76453042030334, 25.789429610448774]),
            {
              "riparian": 0,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76522779464722, 25.788627808332034]),
            {
              "riparian": 0,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76379013061523, 25.788927277226822]),
            {
              "riparian": 0,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76362919807434, 25.788724411283955]),
            {
              "riparian": 0,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.79230737686157, 25.78965179561819]),
            {
              "riparian": 0,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.79185676574707, 25.78930402734279]),
            {
              "riparian": 0,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.79119157791138, 25.7890528607318]),
            {
              "riparian": 0,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.79844427108765, 25.79701265148728]),
            {
              "riparian": 0,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.79829406738281, 25.796664904802963]),
            {
              "riparian": 0,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.80656599998474, 25.78420330879568]),
            {
              "riparian": 0,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.80545020103455, 25.784898874242963]),
            {
              "riparian": 0,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.80548238754272, 25.78476362572546]),
            {
              "riparian": 0,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.77242684364319, 25.7827155578958]),
            {
              "riparian": 0,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.77270579338074, 25.78292809488116]),
            {
              "riparian": 0,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.77244830131531, 25.78230980441169]),
            {
              "riparian": 0,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7727165222168, 25.781778458464547]),
            {
              "riparian": 0,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.77201914787292, 25.78223251787638]),
            {
              "riparian": 0,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76252949237823, 25.778445415960913]),
            {
              "riparian": 0,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7623256444931, 25.778387449175852]),
            {
              "riparian": 0,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76276016235352, 25.778063800772046]),
            {
              "riparian": 0,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76116156578064, 25.77899609900639]),
            {
              "riparian": 0,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76055002212524, 25.77932940592368]),
            {
              "riparian": 0,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76084506511688, 25.77879804662648]),
            {
              "riparian": 0,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76087725162506, 25.77902508225376]),
            {
              "riparian": 0,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.7620198726654, 25.77934389750754]),
            {
              "riparian": 0,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76260995864868, 25.779179659453522]),
            {
              "riparian": 0,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76229882240295, 25.77953228793659]),
            {
              "riparian": 0,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76214861869812, 25.77923762585147]),
            {
              "riparian": 0,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76154243946075, 25.780416269800465]),
            {
              "riparian": 0,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76142978668213, 25.78057084518746]),
            {
              "riparian": 0,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76141905784607, 25.780411439316374]),
            {
              "riparian": 0,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76146197319031, 25.778749741117828]),
            {
              "riparian": 0,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.76153707504272, 25.778657960597165]),
            {
              "riparian": 0,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.63744735717773, 25.784898874242963]),
            {
              "riparian": 0,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.62779140472412, 25.788647128928712]),
            {
              "riparian": 0,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.64294052124023, 25.78300538096325]),
            {
              "riparian": 0,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.63040924072266, 25.778638638373238]),
            {
              "riparian": 0,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.62942218780518, 25.778136259446633]),
            {
              "riparian": 0,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.6287784576416, 25.778638638373238]),
            {
              "riparian": 0,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.66379737854004, 25.77867728281793]),
            {
              "riparian": 0,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.65547180175781, 25.783507739269197]),
            {
              "riparian": 0,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.67392539978027, 25.781189144721186]),
            {
              "riparian": 0,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.59768629074097, 25.818764110166853]),
            {
              "riparian": 0,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.59684944152832, 25.81974920602842]),
            {
              "riparian": 0,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.60830783843994, 25.816542785505575]),
            {
              "riparian": 0,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.55831146240234, 25.790926937234932]),
            {
              "riparian": 0,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.55698108673096, 25.789110822304643]),
            {
              "riparian": 0,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.32201147079468, 25.908123335098328]),
            {
              "riparian": 0,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.31988716125488, 25.910092029524275]),
            {
              "riparian": 0,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.31988716125488, 25.911057063809434]),
            {
              "riparian": 0,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.31840658187866, 25.911250069718903]),
            {
              "riparian": 0,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.31907176971436, 25.911983489294265]),
            {
              "riparian": 0,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.3805103302002, 28.563133596999375]),
            {
              "riparian": 0,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.37990951538086, 28.565753168973462]),
            {
              "riparian": 0,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.39529466629028, 28.565055879204593]),
            {
              "riparian": 0,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.39492988586426, 28.564810884405205]),
            {
              "riparian": 0,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.39447927474976, 28.563849745453936]),
            {
              "riparian": 0,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.39737606048584, 28.565809705779255]),
            {
              "riparian": 0,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.39765501022339, 28.567411569321596]),
            {
              "riparian": 0,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.36895497121907, 28.795629371869698]),
            {
              "riparian": 0,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.36638005056477, 28.795196872304526]),
            {
              "riparian": 0,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.37477000036336, 28.79647556148105]),
            {
              "riparian": 0,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.37429793157673, 28.79707729213655]),
            {
              "riparian": 0,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.36580069341755, 28.795008828455586]),
            {
              "riparian": 0,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.48875566732227, 28.66505938757588]),
            {
              "riparian": 0,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.48826214086353, 28.66494642074353]),
            {
              "riparian": 0,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.4877900720769, 28.66428744512787]),
            {
              "riparian": 0,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47127839338123, 28.647898330793826]),
            {
              "riparian": 0,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47178264867603, 28.648067808552863]),
            {
              "riparian": 0,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47252293836414, 28.648058393129006]),
            {
              "riparian": 0,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47133203756152, 28.643730974937988]),
            {
              "riparian": 0,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53713237879163, 28.602632123042863]),
            {
              "riparian": 0,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53735768434888, 28.603423358018553]),
            {
              "riparian": 0,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53599512216931, 28.602773415439778]),
            {
              "riparian": 0,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.55338942603947, 28.72423151159027]),
            {
              "riparian": 0,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5545105894077, 28.724207990143707]),
            {
              "riparian": 0,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.55091642932774, 28.72914549625968]),
            {
              "riparian": 0,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54370298085013, 28.74206787412347]),
            {
              "riparian": 0,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.30122992078384, 28.807622612255937]),
            {
              "riparian": 0,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.30117627660354, 28.806701304009678]),
            {
              "riparian": 0,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.87844596162324, 28.822899370878424]),
            {
              "riparian": 0,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.63208847492552, 28.992120069855428]),
            {
              "riparian": 0,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.62899857014037, 28.996793378863952]),
            {
              "riparian": 0,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.63290386646605, 28.992270219613964]),
            {
              "riparian": 0,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.87286523384603, 33.785921543626046]),
            {
              "riparian": 0,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.88859956329031, 33.78963211667408]),
            {
              "riparian": 0,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.88912527625723, 33.79017156782254]),
            {
              "riparian": 0,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.8893344885604, 33.78988623871291]),
            {
              "riparian": 0,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.85291109764921, 33.811897332362626]),
            {
              "riparian": 0,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.31769899067285, 33.39012248214095]),
            {
              "riparian": 0,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.32383588489893, 33.404167434622]),
            {
              "riparian": 0,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.30662683185938, 33.39696609713131]),
            {
              "riparian": 0,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.33885625538232, 33.39714524211827]),
            {
              "riparian": 0,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.32696870502832, 33.404239086722534]),
            {
              "riparian": 0,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.3360238426626, 33.40355838938165]),
            {
              "riparian": 0,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.32379296955469, 33.39728855784194]),
            {
              "riparian": 0,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.30928758320215, 33.393239797677765]),
            {
              "riparian": 0,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.28413580760923, 33.3926556543905]),
            {
              "riparian": 0,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.22215141060724, 33.401699875142505]),
            {
              "riparian": 0,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.1799085937028, 33.4142160200672]),
            {
              "riparian": 0,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.1784494719987, 33.41425184198063]),
            {
              "riparian": 0,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.18381788861461, 33.411812580451915]),
            {
              "riparian": 0,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.22016718518444, 33.4247078729776]),
            {
              "riparian": 0,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.22018864285656, 33.42553167369888]),
            {
              "riparian": 0,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.2201242698402, 33.42542422187423]),
            {
              "riparian": 0,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.21980240475841, 33.425907754037766]),
            {
              "riparian": 0,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.1943915453462, 33.4355294242943]),
            {
              "riparian": 0,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.18831902413649, 33.43569058321677]),
            {
              "riparian": 0,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.2014511194734, 33.43619196461703]),
            {
              "riparian": 0,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.20243817239088, 33.436263590294885]),
            {
              "riparian": 0,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95459008337434, 32.064838035709066]),
            {
              "riparian": 0,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95167183996614, 32.064838035709066]),
            {
              "riparian": 0,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95055604101594, 32.05523624320138]),
            {
              "riparian": 0,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.96257233740266, 32.05443604833525]),
            {
              "riparian": 0,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95793748022493, 32.055527221417584]),
            {
              "riparian": 0,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95639252783235, 32.06454708710741]),
            {
              "riparian": 0,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95527672888215, 32.06396518712749]),
            {
              "riparian": 0,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95184350134309, 32.05581819870843]),
            {
              "riparian": 0,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95905327917512, 32.05421781215721]),
            {
              "riparian": 0,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.91660469147172, 31.982984916510127]),
            {
              "riparian": 0,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9159180459639, 31.98193838098834]),
            {
              "riparian": 0,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.91913669678178, 31.981911079901916]),
            {
              "riparian": 0,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.91604679199662, 31.983949538679997]),
            {
              "riparian": 0,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9224976335338, 31.995578802813185]),
            {
              "riparian": 0,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.99201047167878, 31.915650414897403]),
            {
              "riparian": 0,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.35790041635113, 30.72375197478443]),
            {
              "riparian": 0,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.38449503077749, 30.72691134672585]),
            {
              "riparian": 0,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.43273980771062, 30.739994373200684]),
            {
              "riparian": 0,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.45159687018992, 30.744259730073647]),
            {
              "riparian": 0,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.45190800643564, 30.744278172031944]),
            {
              "riparian": 0,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.45174707389475, 30.74431505593795]),
            {
              "riparian": 0,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.51436488006618, 30.734195581727388]),
            {
              "riparian": 0,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.51400009964016, 30.734204803670245]),
            {
              "riparian": 0,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.55169962788347, 30.74797139560491]),
            {
              "riparian": 0,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.55247210407975, 30.74861683717211]),
            {
              "riparian": 0,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.59047544153793, 30.746973729100674]),
            {
              "riparian": 0,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.7399849735798, 30.72039884639969]),
            {
              "riparian": 0,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.74015663495675, 30.721007579857446]),
            {
              "riparian": 0,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.74007080426827, 30.721570193726592]),
            {
              "riparian": 0,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.76151281010476, 30.72151477500846]),
            {
              "riparian": 0,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.76896238338401, 30.684948780605847]),
            {
              "riparian": 0,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.76896238338401, 30.6852071265344]),
            {
              "riparian": 0,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.76986360561301, 30.685308619388667]),
            {
              "riparian": 0,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.78171896945884, 30.676141539034667]),
            {
              "riparian": 0,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.78124153625419, 30.675873941333645]),
            {
              "riparian": 0,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.78260409843375, 30.67651525182473]),
            {
              "riparian": 0,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.94721247827567, 30.651359892575556]),
            {
              "riparian": 0,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.9479205814556, 30.65125836405373]),
            {
              "riparian": 0,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.94750215684928, 30.652079819035507]),
            {
              "riparian": 0,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.94780256425895, 30.65259668600841]),
            {
              "riparian": 0,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95076372301139, 30.65263360497217]),
            {
              "riparian": 0,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95179369127311, 30.650215383065635]),
            {
              "riparian": 0,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.94827463304557, 30.653565804134754]),
            {
              "riparian": 0,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.9474699703411, 30.65125836405373]),
            {
              "riparian": 0,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.94710518991508, 30.65075071984544]),
            {
              "riparian": 0,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.94731976663627, 30.65043690209263]),
            {
              "riparian": 0,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95732834217273, 30.643911408503136]),
            {
              "riparian": 0,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.9567275273534, 30.64440985809363]),
            {
              "riparian": 0,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95739271518909, 30.644594468401127]),
            {
              "riparian": 0,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95775749561511, 30.644188325259446]),
            {
              "riparian": 0,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.9560623395177, 30.64333911136079]),
            {
              "riparian": 0,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95621254322253, 30.644760617376573]),
            {
              "riparian": 0,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.96136238453113, 30.650326649505722]),
            {
              "riparian": 0,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.96237089512073, 30.64973593029901]),
            {
              "riparian": 0,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.96173859422515, 30.65026282315905]),
            {
              "riparian": 0,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.94770527665924, 30.651019677367984]),
            {
              "riparian": 0,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95695943020735, 30.644192767984304]),
            {
              "riparian": 0,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.01130642263934, 30.608855933886378]),
            {
              "riparian": 0,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.01055540411517, 30.608855933886378]),
            {
              "riparian": 0,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.00976147024676, 30.608449640737145]),
            {
              "riparian": 0,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.00997604696795, 30.60787713386113]),
            {
              "riparian": 0,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.02731384604022, 30.60357399000287]),
            {
              "riparian": 0,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.01214327185198, 30.608338833218813]),
            {
              "riparian": 0,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.01111330359026, 30.60979778872231]),
            {
              "riparian": 0,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.0737053331618, 30.594837835361183]),
            {
              "riparian": 0,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.073201077867, 30.594643894872668]),
            {
              "riparian": 0,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.07345856993243, 30.5943668363586]),
            {
              "riparian": 0,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.07357658712908, 30.594948658323197]),
            {
              "riparian": 0,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.07290067045733, 30.594690071214657]),
            {
              "riparian": 0,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.10820762165417, 30.570099623304383]),
            {
              "riparian": 0,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.4404211448732, 29.978831124889748]),
            {
              "riparian": 0,
              "system:index": "409"
            })]);


var notRiparian = ee.FeatureCollection("ft:1K8Mx4Hk8owCIV_9RBJwGhKAyz5r94f40VugKkOmp");
var riparian = ee.FeatureCollection("ft:1Pf1RWL-WzxPTGuaK1rMwzTQ_XGBK8JDv3I5gyu99");

print(notRiparian.toList(10000).length().add(riparian.toList(10000).length()));
print(notRiparian.toList(10000).length())
print(riparian.toList(10000).length())
Map.addLayer(notRiparian)
// get the Global Grid feature collection for GG<h><l><t>, where h=e or w hemisphere, l = 2 to 13 level, t=c centroid or p polygon, (note there is an i for image as well but different methods on it
var h = 'w'; var l = 9; var t = 'p';
var GG = ee.FeatureCollection("users/DavidTheobald8/GG/GG" + h + l + t).filterBounds(geometry1);
// get a sub-set (smaller sample) of random quadrangles
var t = 40000; // gRRQRR numbers are in sequence, but not necessarily incremental by 1, so somewhat of a trial-and-error exercise
var GGFilteredSubset = GG.filterMetadata('gRRQRR' + l,'less_than',t);
print(GGFilteredSubset.toList(100).length())


//sentinel 2
var sentinelDry = ee.ImageCollection("COPERNICUS/S2").filterDate('2016-01-01',"2018-01-01")
    .filter(ee.Filter.calendarRange(3, 7, "month"))
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
    .select("B.*"); // get any band starting with "B", dot is wildcard, star allows for any character following wildcard

var NDVI = ee.ImageCollection("COPERNICUS/S2").filterDate('2016-01-01',"2018-01-01")
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
    .select("B.*") // get any band starting with "B", dot is wildcard, star allows for any character following wildcard
    .map(function(image){return image.normalizedDifference(["B8","B4"])})
var NDVImedian = NDVI.median()
var NDVIcv = NDVI.reduce(ee.Reducer.stdDev()).divide(NDVImedian).rename("NDVI_CV")
Map.addLayer(NDVIcv,{},"NDVI CV",0)
Map.addLayer(sentinelDry.median(),{bands:['B4','B3','B2'],min:[200,20,-50],max:[2100,1900,1900]},"sentinel Dry")

//Map.addLayer(sentinelWet,{bands:['B4','B3','B2'],min:[200,20,-50],max:[2100,1900,1900]},"sentinel Wet")


/// Bands to include in classifier

// multi-scale Z
var dem = ee.Image('JAXA/ALOS/AW3D30_V1_1').select('MED');   //world DEM at 30 m

var m180 = dem.reduceNeighborhood(ee.Reducer.mean(), ee.Kernel.circle(180, "meters"));
var m270 = dem.reduceNeighborhood(ee.Reducer.mean(), ee.Kernel.circle(270, "meters"));
var m540 = dem.reduceNeighborhood(ee.Reducer.mean(), ee.Kernel.circle(540, "meters"));
var m810 = dem.reduceNeighborhood(ee.Reducer.mean(), ee.Kernel.circle(810, "meters"));

var d180 = dem.subtract(m180);
var d270 = dem.subtract(m270);
var d540 = dem.subtract(m540);
var d810 = dem.subtract(m810);

var s180 = dem.reduceNeighborhood(ee.Reducer.stdDev(), ee.Kernel.circle(180, "meters"));
var s270 = dem.reduceNeighborhood(ee.Reducer.stdDev(), ee.Kernel.circle(270, "meters"));
var s540 = dem.reduceNeighborhood(ee.Reducer.stdDev(), ee.Kernel.circle(540, "meters"));
var s810 = dem.reduceNeighborhood(ee.Reducer.stdDev(), ee.Kernel.circle(810, "meters"));

var z180 = d180.divide(s180).rename('z180');
var z270 = d270.divide(s270).rename('z270');
var z540 = d540.divide(s540).rename('z540');
var z810 = d810.divide(s810).rename('z810');

// slope
var slope = ee.Algorithms.Terrain(dem).select("slope");

// NDVI
var NDVIdry = sentinelDry.map(function(image){return image.normalizedDifference(["B8","B4"])}).median()

var NDVIdryd270 = NDVIdry.subtract(NDVIdry.reduceNeighborhood(ee.Reducer.mean(), ee.Kernel.circle(270, "meters")))
                         .divide(NDVIdry.reduceNeighborhood(ee.Reducer.stdDev(), ee.Kernel.circle(270, "meters"))).rename("NDVIdryz270")

var NDVIdryd540 = NDVIdry.subtract(NDVIdry.reduceNeighborhood(ee.Reducer.mean(), ee.Kernel.circle(540, "meters")))
                         .divide(NDVIdry.reduceNeighborhood(ee.Reducer.stdDev(), ee.Kernel.circle(540, "meters"))).rename("NDVIdryz540")

var NDVIdryd810 = NDVIdry.subtract(NDVIdry.reduceNeighborhood(ee.Reducer.mean(), ee.Kernel.circle(810, "meters")))
                         .divide(NDVIdry.reduceNeighborhood(ee.Reducer.stdDev(), ee.Kernel.circle(810, "meters"))).rename("NDVIdryz810")


var ALOS = ee.Image("JAXA/ALOS/AW3D30_V1_1").select("AVE").rename("elev");
var slope = ee.Algorithms.Terrain(ALOS).select('slope');

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
var lat = ee.Image.pixelLonLat().select('latitude');
var altitudeR = radians(lat);
var azimuthR = radians(ee.Image(202.5));   // folded by 22.5 degrees west of south

var chili = azimuthR.subtract(aspectR).cos().multiply(slopeR.sin()).multiply(altitudeR.sin()).add(altitudeR.cos().multiply(slopeR.cos())).multiply(1000);

var NDVIsmooth = NDVIdry.reduceNeighborhood(ee.Reducer.mean(),ee.Kernel.circle(10,"meters"))


var sentinelDryMed = sentinelDry.median()
var input = sentinelDryMed.addBands(NDVIcv)
                          .addBands(NDVIdry)
                          .addBands(d270)
                          .addBands(d540)
                          .addBands(d180)
                          .addBands(z270)
                          .addBands(z540)
                          .addBands(z180)
                          .addBands(NDVIdryd270)
                          .addBands(NDVIdryd540)
                          .addBands(NDVIdryd810)
                          .addBands(slope)
                          //.addBands(ee.Image.pixelLonLat())
                          .addBands(chili)
                          .addBands(ALOS)

var sample = riparian.merge(notRiparian).merge(moreNotRiparian).merge(moreRiparian);
Export.table.toDrive({
  collection: sample,
  description: "thesisRiparianClassificationPoints",
  fileFormat: "KML",
  folder: "TempExports"
})
var training = input.sampleRegions({
  collection:sample,
  properties:["riparian"],
  scale:10,
  tileScale: 16 //divides tile by that number
});
var classifier = ee.Classifier.randomForest(35) // 25 is number of trees. Default number of trees is 1
                              .train(training,"riparian");
var result = input.classify(classifier);

print(classifier.confusionMatrix())

Map.addLayer(result,{min:0,max:1,palette:['000000','00FF00']},"Riparian",0)

/*
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry2,
                      description:"riparian1"
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry3,
                      description:"riparian2"
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry4,
                      description:"riparian3"
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry5,
                      description:"riparian4"
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry6,
                      description:"riparian5"
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry7,
                      description:"riparian6"
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry8,
                      description:"riparian7"
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry9,
                      description:"riparian8"
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry10,
                      description:"riparian9"
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry11,
                      description:"riparian10"
})

Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry12,
                      description:"riparian11"
})


