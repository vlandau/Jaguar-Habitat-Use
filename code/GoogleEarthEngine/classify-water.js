var extent = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-112.6318359375, 35.99578538642032],
          [-115.3564453125, 35.817813158696616],
          [-115.224609375, 34.27083595165],
          [-115.0048828125, 31.914867503276223],
          [-114.08203125, 31.39115752282472],
          [-114.08203125, 30.902224705171438],
          [-113.5546875, 30.600093873550072],
          [-111.4892578125, 27.449790329784218],
          [-110.21484375, 25.16517336866393],
          [-106.875, 25.3241665257384],
          [-106.3037109375, 27.410785702577048],
          [-106.6552734375, 29.34387539941801],
          [-105.48010709332993, 32.34300772826189],
          [-105.64453125, 34.66935854524542],
          [-106.4794921875, 35.67514743608468],
          [-108.45703125, 35.81781315869664]]]),
    table = ee.FeatureCollection("users/VincentLandau/Jaguar/StudyAreaAlbers20180607"),
    geometry1 = /* color: #0b4a8b */ee.Geometry.Polygon(
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
    table2 = ee.FeatureCollection("users/VincentLandau/Jaguar/LocationData/mergedPresencePoints"),
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
    table22 = ee.FeatureCollection("users/VincentLandau/Jaguar/StudyAreaAlbers20180607"),
    geometry12 = /* color: #009999 */ee.Geometry.Polygon(
        [[[-107.64404296875, 29.97968029479088],
          [-108.08349609375, 30.01773854554856],
          [-108.03955078125, 26.643530937511425],
          [-107.578125, 26.663168711648808]]]),
    moreNotWater = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-112.08176761540244, 34.78154286270132]),
            {
              "water": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.0799434768129, 34.78085399817201]),
            {
              "water": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.0799434768129, 34.781065486401324]),
            {
              "water": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.05199515020286, 34.78382684897848]),
            {
              "water": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.05628668462668, 34.78315715681006]),
            {
              "water": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.05594336187278, 34.78312190970321]),
            {
              "water": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.05216681157981, 34.783573071103135]),
            {
              "water": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.0529392877761, 34.783150106959624]),
            {
              "water": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.08234297335241, 34.7808588126414]),
            {
              "water": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.08214985430334, 34.78082356455252]),
            {
              "water": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.08232151568029, 34.780788316448586]),
            {
              "water": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.081549039484, 34.78062969979452]),
            {
              "water": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.08086239397619, 34.78068257204642]),
            {
              "water": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.08069073259924, 34.78114079681022]),
            {
              "water": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.08204256594274, 34.781422780015184]),
            {
              "water": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57478810318685, 28.805502909321923]),
            {
              "water": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57457352646566, 28.8053524891454]),
            {
              "water": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57324315079427, 28.806255006947314]),
            {
              "water": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57367230423665, 28.805803749023514]),
            {
              "water": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57423020371175, 28.80576614410833]),
            {
              "water": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.6122961140511, 28.80681907660369]),
            {
              "water": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61216736801839, 28.806884884531375]),
            {
              "water": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61216736801839, 28.80682377717133]),
            {
              "water": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61225319870687, 28.80691778847959]),
            {
              "water": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61217809685445, 28.80662635314786]),
            {
              "water": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61238194473958, 28.8066310537242]),
            {
              "water": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61102474697805, 28.807176319139955]),
            {
              "water": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57291547094644, 28.805035087599016]),
            {
              "water": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.573017394889, 28.80563676883506]),
            {
              "water": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5734304550773, 28.805486348851762]),
            {
              "water": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57495928118306, 28.80553023225535]),
            {
              "water": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57410097429829, 28.80545502221397]),
            {
              "water": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57285642931538, 28.80459010283603]),
            {
              "water": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57285642931538, 28.80492855040416]),
            {
              "water": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57349486387943, 28.80340973249951]),
            {
              "water": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57306034601902, 28.804081933513025]),
            {
              "water": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57416341743868, 28.80517663530753]),
            {
              "water": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57372353516024, 28.805496278462538]),
            {
              "water": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57385764561099, 28.8056843033898]),
            {
              "water": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57354650936526, 28.805482176579318]),
            {
              "water": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5734821363489, 28.806159064821145]),
            {
              "water": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57460866413516, 28.805646698431485]),
            {
              "water": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57470522365969, 28.805505679716955]),
            {
              "water": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57500563106936, 28.805298851923755]),
            {
              "water": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57517192802828, 28.805491577835003]),
            {
              "water": 0,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57393120864617, 28.806283977074056]),
            {
              "water": 0,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57341086009728, 28.80651430582193]),
            {
              "water": 0,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57362543681847, 28.806382689456914]),
            {
              "water": 0,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57378636935937, 28.80606774962291]),
            {
              "water": 0,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57349669078576, 28.805964336335474]),
            {
              "water": 0,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.573180190122, 28.805762210068206]),
            {
              "water": 0,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57395266631829, 28.80537205825744]),
            {
              "water": 0,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57352887729394, 28.80541906457711]),
            {
              "water": 0,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57302998641717, 28.80526394364176]),
            {
              "water": 0,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57392047981011, 28.805964336335474]),
            {
              "water": 0,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57406531909692, 28.805734006371836]),
            {
              "water": 0,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57285700432419, 28.804856759020577]),
            {
              "water": 0,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57276044479966, 28.80442429774605]),
            {
              "water": 0,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57277117363572, 28.80471573923697]),
            {
              "water": 0,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57294283501267, 28.805477243801164]),
            {
              "water": 0,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5729857503569, 28.805994311629146]),
            {
              "water": 0,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5733988105452, 28.804400794364483]),
            {
              "water": 0,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57310913197159, 28.804367889621403]),
            {
              "water": 0,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57297517446568, 28.803799173002403]),
            {
              "water": 0,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57305564073613, 28.803996602382618]),
            {
              "water": 0,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57342042116215, 28.80400130307758]),
            {
              "water": 0,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57368327764561, 28.803963697511882]),
            {
              "water": 0,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57295371679356, 28.80358294039489]),
            {
              "water": 0,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57295371679356, 28.80335260516726]),
            {
              "water": 0,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57308246282628, 28.803310298641513]),
            {
              "water": 0,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57316884088164, 28.806393405662803]),
            {
              "water": 0,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5731259255374, 28.806318196244483]),
            {
              "water": 0,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5732130177015, 28.806341104827418]),
            {
              "water": 0,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57305439412409, 28.80643686229427]),
            {
              "water": 0,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57340308129602, 28.80634520084665]),
            {
              "water": 0,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57335748374277, 28.806258239911557]),
            {
              "water": 0,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57322069108301, 28.806512071626948]),
            {
              "water": 0,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57318045794779, 28.806591981483447]),
            {
              "water": 0,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57332529723459, 28.80643216170917]),
            {
              "water": 0,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57331456839853, 28.806349901435663]),
            {
              "water": 0,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57323141991907, 28.80616892860536]),
            {
              "water": 0,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5731294959765, 28.806251189021737]),
            {
              "water": 0,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57333334386163, 28.80615952741079]),
            {
              "water": 0,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57342453896814, 28.8062417878346]),
            {
              "water": 0,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5727707741375, 28.8043507411864]),
            {
              "water": 0,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57276809192848, 28.804212071060693]),
            {
              "water": 0,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5726634857769, 28.80422852345812]),
            {
              "water": 0,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57269030786705, 28.80434839084682]),
            {
              "water": 0,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57275199867439, 28.804623380217553]),
            {
              "water": 0,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.573144804337, 28.805982820005397]),
            {
              "water": 0,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57350690255402, 28.805707834222357]),
            {
              "water": 0,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57312871108292, 28.805604420577705]),
            {
              "water": 0,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5731608975911, 28.80536468855218]),
            {
              "water": 0,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57324672827957, 28.80519781593431]),
            {
              "water": 0,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57352031359909, 28.805167261764062]),
            {
              "water": 0,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57379658112762, 28.80514845919331]),
            {
              "water": 0,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57367319951294, 28.805141408228405]),
            {
              "water": 0,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57405139098404, 28.805113204364]),
            {
              "water": 0,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57308311352966, 28.805160210800434]),
            {
              "water": 0,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5734318007016, 28.80531533189021]),
            {
              "water": 0,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57379389891861, 28.80531768220798]),
            {
              "water": 0,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57331914792297, 28.805764241621635]),
            {
              "water": 0,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57415599713562, 28.80498393655445]),
            {
              "water": 0,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57415599713562, 28.804838216285948]),
            {
              "water": 0,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5744939554715, 28.804805311680983]),
            {
              "water": 0,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57491774449585, 28.80475830508445]),
            {
              "water": 0,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57471389661072, 28.804744203101336]),
            {
              "water": 0,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57431692967651, 28.804772407065638]),
            {
              "water": 0,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57395751366852, 28.80475360442363]),
            {
              "water": 0,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57426864991425, 28.805378790451307]),
            {
              "water": 0,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57452614197967, 28.805543312466725]),
            {
              "water": 0,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57395751366852, 28.805604420577705]),
            {
              "water": 0,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57379658112762, 28.80593346363624]),
            {
              "water": 0,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5737751234555, 28.80632361334486]),
            {
              "water": 0,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57332987675903, 28.80598517030811]),
            {
              "water": 0,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57331914792297, 28.80558091746234]),
            {
              "water": 0,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57331378350494, 28.80542109613723]),
            {
              "water": 0,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57291681657074, 28.805369389185444]),
            {
              "water": 0,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.5728739012265, 28.805214268176123]),
            {
              "water": 0,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57278270612, 28.805120255330817]),
            {
              "water": 0,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57290072331665, 28.80586765510766]),
            {
              "water": 0,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57334707603695, 28.805157511135796]),
            {
              "water": 0,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57333098278286, 28.805063498239296]),
            {
              "water": 0,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57343558893444, 28.805079950502304]),
            {
              "water": 0,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57374672518017, 28.80506819888612]),
            {
              "water": 0,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57355092392208, 28.805075249855985]),
            {
              "water": 0,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57333902940991, 28.804541725121872]),
            {
              "water": 0,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.57291255817654, 28.804522922438217]),
            {
              "water": 0,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.92266123191223, 29.07471422780775]),
            {
              "water": 0,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.92265050307617, 29.07484081535008]),
            {
              "water": 0,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.92257540122375, 29.074718916238037]),
            {
              "water": 0,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.9225646723877, 29.07484081535008]),
            {
              "water": 0,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.45620918985742, 35.400291841952715]),
            {
              "water": 0,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.45631647821801, 35.39915493962875]),
            {
              "water": 0,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47071457620996, 35.399522248286466]),
            {
              "water": 0,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47461987253564, 35.39822791509922]),
            {
              "water": 0,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47470570322412, 35.397633214506016]),
            {
              "water": 0,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47620774027246, 35.397510775604076]),
            {
              "water": 0,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47552109476464, 35.398210423967896]),
            {
              "water": 0,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47549963709253, 35.397825618119086]),
            {
              "water": 0,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47112227198022, 35.39910246682675]),
            {
              "water": 0,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.45650959726709, 35.40121884275134]),
            {
              "water": 0,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.49869737283927, 35.38886691002362]),
            {
              "water": 0,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50019940988761, 35.38876195099585]),
            {
              "water": 0,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.4960366214965, 35.39054623589229]),
            {
              "water": 0,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50230226175529, 35.3874324581554]),
            {
              "water": 0,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50698003427726, 35.388202167207666]),
            {
              "water": 0,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50371846811515, 35.390301336380894]),
            {
              "water": 0,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50685128824455, 35.392155557038464]),
            {
              "water": 0,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.49337587015373, 35.384318560211085]),
            {
              "water": 0,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47264775888664, 35.3860329683333]),
            {
              "water": 0,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47080239908439, 35.38879693735362]),
            {
              "water": 0,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.469472023413, 35.38617291840816]),
            {
              "water": 0,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46895703928215, 35.38330389334284]),
            {
              "water": 0,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46548089639884, 35.38718754918931]),
            {
              "water": 0,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47633847849113, 35.39953703166345]),
            {
              "water": 0,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47766885416252, 35.40016669963952]),
            {
              "water": 0,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46415052072746, 35.39932714124527]),
            {
              "water": 0,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50157270090324, 35.38452848969385]),
            {
              "water": 0,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50127229349357, 35.38277906064464]),
            {
              "water": 0,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.502431007788, 35.38221923533647]),
            {
              "water": 0,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50174436228019, 35.380574726027525]),
            {
              "water": 0,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51995516101192, 35.37935006966029]),
            {
              "water": 0,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52343130389522, 35.37396136081663]),
            {
              "water": 0,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52145719806026, 35.37508112214348]),
            {
              "water": 0,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52825928012203, 35.3761133883524]),
            {
              "water": 0,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52647829333614, 35.381012098796624]),
            {
              "water": 0,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53006172458004, 35.379804944195214]),
            {
              "water": 0,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52506208697628, 35.37887769723667]),
            {
              "water": 0,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53104877749752, 35.378947678510954]),
            {
              "water": 0,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53278684893917, 35.37700567562124]),
            {
              "water": 0,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53205728808712, 35.37585094904262]),
            {
              "water": 0,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53064108172725, 35.37695318840797]),
            {
              "water": 0,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53115606585811, 35.375745973079745]),
            {
              "water": 0,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53126335421871, 35.37455623595613]),
            {
              "water": 0,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52943945208858, 35.37432878421472]),
            {
              "water": 0,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52881717959713, 35.375133610574444]),
            {
              "water": 0,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52128553668331, 35.372806590674976]),
            {
              "water": 0,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5075955418713, 35.372806590674976]),
            {
              "water": 0,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47499150944066, 35.38182803224227]),
            {
              "water": 0,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47709436130833, 35.38235287112744]),
            {
              "water": 0,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50511808109593, 35.38581672213691]),
            {
              "water": 0,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46979875278782, 35.38336754995721]),
            {
              "water": 0,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52400083256077, 35.37129554362809]),
            {
              "water": 0,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5233571023972, 35.37241534194374]),
            {
              "water": 0,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50649137211155, 35.37773417176012]),
            {
              "water": 0,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52035302830052, 35.38469710979561]),
            {
              "water": 0,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52558870029759, 35.378748908677956]),
            {
              "water": 0,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52970408272449, 35.37008189114435]),
            {
              "water": 0,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5306053049535, 35.367037315152615]),
            {
              "water": 0,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52137850594227, 35.36283771155602]),
            {
              "water": 0,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52485464882557, 35.365077527328445]),
            {
              "water": 0,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52639960121815, 35.36651237665077]),
            {
              "water": 0,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53026198219959, 35.36598743473526]),
            {
              "water": 0,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5320644266576, 35.36584744964792]),
            {
              "water": 0,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50777434181873, 35.37214653825049]),
            {
              "water": 0,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47438620400135, 35.36427260068857]),
            {
              "water": 0,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.45462138815333, 35.35216759483124]),
            {
              "water": 0,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.45601613684107, 35.35250011534834]),
            {
              "water": 0,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.45841939611842, 35.35696275822216]),
            {
              "water": 0,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.4583979384463, 35.35817025448969]),
            {
              "water": 0,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.44623143835474, 35.35348016785589]),
            {
              "water": 0,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.45653112097193, 35.349822411256966]),
            {
              "water": 0,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.45193917913844, 35.347634678625894]),
            {
              "water": 0,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47770984335352, 35.350399962785346]),
            {
              "water": 0,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47421387324925, 35.35436523271103]),
            {
              "water": 0,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47387055049535, 35.354102722689554]),
            {
              "water": 0,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46846321712133, 35.353853337378794]),
            {
              "water": 0,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52985433500083, 35.36938960495396]),
            {
              "water": 0,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51706556241783, 35.3557054915289]),
            {
              "water": 0,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52221540372642, 35.3595904755988]),
            {
              "water": 0,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46259599175329, 35.33392613432553]),
            {
              "water": 0,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46602921929235, 35.333365970216974]),
            {
              "water": 0,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.44959264244909, 35.33669188770099]),
            {
              "water": 0,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.44860558953161, 35.33676190554532]),
            {
              "water": 0,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.44946389641638, 35.33567662214089]),
            {
              "water": 0,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.44894891228552, 35.33266575962161]),
            {
              "water": 0,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46478467430944, 35.3324556952601]),
            {
              "water": 0,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47645764794225, 35.32303724880145]),
            {
              "water": 0,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47057824578161, 35.34211809079722]),
            {
              "water": 0,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46701627220983, 35.33889742065495]),
            {
              "water": 0,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.45379834618444, 35.34432347564449]),
            {
              "water": 0,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28264966676306, 35.321240977350215]),
            {
              "water": 0,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28301444718909, 35.32160864062538]),
            {
              "water": 0,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28284278581214, 35.32430478689369]),
            {
              "water": 0,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28331485459876, 35.32463742208595]),
            {
              "water": 0,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28428044984412, 35.32568784002397]),
            {
              "water": 0,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28483834931922, 35.32544274372582]),
            {
              "water": 0,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28507438371253, 35.3246549291634]),
            {
              "water": 0,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28430190751624, 35.324970055909596]),
            {
              "water": 0,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28387275407385, 35.32535520915356]),
            {
              "water": 0,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28202739427161, 35.3206807253353]),
            {
              "water": 0,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28200593659949, 35.31986660220736]),
            {
              "water": 0,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28198447892737, 35.320164239570296]),
            {
              "water": 0,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.27825084397864, 35.31963899642594]),
            {
              "water": 0,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.2825852937467, 35.31939388179101]),
            {
              "water": 0,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28086867997717, 35.31907873331149]),
            {
              "water": 0,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.27983871171546, 35.31786189848925]),
            {
              "water": 0,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28262820909094, 35.31733664039033]),
            {
              "water": 0,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.284258992172, 35.31873732107268]),
            {
              "water": 0,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28549280831885, 35.32233520837186]),
            {
              "water": 0,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28543916413855, 35.321477332504735]),
            {
              "water": 0,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28305246219333, 35.317284222893235]),
            {
              "water": 0,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.2812285600632, 35.31674145225511]),
            {
              "water": 0,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28200103625949, 35.31710038163346]),
            {
              "water": 0,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28199567184146, 35.317367389040115]),
            {
              "water": 0,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28012593912689, 35.31909467531885]),
            {
              "water": 0,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.2845033042392, 35.32014078825395]),
            {
              "water": 0,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28478903158452, 35.32141448908001]),
            {
              "water": 0,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28541666849401, 35.32073605986577]),
            {
              "water": 0,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28243941648748, 35.32178215156622]),
            {
              "water": 0,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28328163011815, 35.320854238267344]),
            {
              "water": 0,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28402191980626, 35.32154142036539]),
            {
              "water": 0,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28402191980626, 35.3211781337418]),
            {
              "water": 0,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28540593965795, 35.32348475723455]),
            {
              "water": 0,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28371078356054, 35.32374736674253]),
            {
              "water": 0,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28612477167394, 35.32594449953612]),
            {
              "water": 0,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28612477167394, 35.32626837461933]),
            {
              "water": 0,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28239113672521, 35.32667978163789]),
            {
              "water": 0,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28639299257543, 35.32672354821879]),
            {
              "water": 0,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.27612229630392, 35.32793931521987]),
            {
              "water": 0,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.27403017327231, 35.32768109593353]),
            {
              "water": 0,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.27442177578848, 35.32770735555963]),
            {
              "water": 0,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.27479728505057, 35.32705523898675]),
            {
              "water": 0,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.27471681878012, 35.32666571718204]),
            {
              "water": 0,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.27622958466452, 35.32709025209075]),
            {
              "water": 0,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.27809103772086, 35.32743162905996]),
            {
              "water": 0,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28202729159437, 35.32096512811009]),
            {
              "water": 0,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28089003497206, 35.316841918536504]),
            {
              "water": 0,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28109388285719, 35.316666830674286]),
            {
              "water": 0,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.2842481606587, 35.3167456202592]),
            {
              "water": 0,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.28325037890517, 35.31664932186722]),
            {
              "water": 0,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52073791990142, 35.317600624584244]),
            {
              "water": 0,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51889256009918, 35.31954405616482]),
            {
              "water": 0,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52005127439361, 35.32087466706642]),
            {
              "water": 0,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5196006632791, 35.31593729019341]),
            {
              "water": 0,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52211121091705, 35.32477883319729]),
            {
              "water": 0,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52206829557281, 35.3170403473473]),
            {
              "water": 0,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52352741727691, 35.316287468697624]),
            {
              "water": 0,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52319482335906, 35.32186385703387]),
            {
              "water": 0,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51500872144561, 35.319719137797605]),
            {
              "water": 0,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51607087621551, 35.31852857521939]),
            {
              "water": 0,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51599439685344, 35.318377505700674]),
            {
              "water": 0,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51923450534343, 35.318193666926256]),
            {
              "water": 0,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51875170772075, 35.31758962229642]),
            {
              "water": 0,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51206764285564, 35.31639027393402]),
            {
              "water": 0,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51165994708538, 35.31648657263446]),
            {
              "water": 0,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51079091136455, 35.319699381724135]),
            {
              "water": 0,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51456746165752, 35.315488562357196]),
            {
              "water": 0,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52008955565111, 35.3145138109273]),
            {
              "water": 0,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5210229643883, 35.314583847982135]),
            {
              "water": 0,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52219240751879, 35.311650994406605]),
            {
              "water": 0,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51975696173326, 35.31243018080477]),
            {
              "water": 0,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.4941915809444, 35.304706963684865]),
            {
              "water": 0,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.4820787755429, 35.303107885444]),
            {
              "water": 0,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47962831837253, 35.30445527440704]),
            {
              "water": 0,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47970878464298, 35.305168862790055]),
            {
              "water": 0,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50371079829779, 35.304487407321986]),
            {
              "water": 0,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50936489490118, 35.306404887458235]),
            {
              "water": 0,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.68003439594077, 35.36776868542805]),
            {
              "water": 0,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.68002903152274, 35.36787804619536]),
            {
              "water": 0,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.68964314632342, 35.351788364619686]),
            {
              "water": 0,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.68291578795322, 35.341294968130455]),
            {
              "water": 0,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.68310354258426, 35.34098865679773]),
            {
              "water": 0,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50611407332923, 35.3126919911707]),
            {
              "water": 0,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50595314078834, 35.31278829427464]),
            {
              "water": 0,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50477296882178, 35.31019682532552]),
            {
              "water": 0,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47644336987776, 35.32266344472692]),
            {
              "water": 0,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.48044883922609, 35.32509704265052]),
            {
              "water": 0,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.48717581943544, 35.33012138972778]),
            {
              "water": 0,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.4961558552173, 35.328948486469685]),
            {
              "water": 0,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5045203384766, 35.33514798014567]),
            {
              "water": 0,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50324897140354, 35.335519956355114]),
            {
              "water": 0,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51356474727481, 35.33243906647035]),
            {
              "water": 0,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52006642192691, 35.334268359003914]),
            {
              "water": 0,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52055994838565, 35.32906860277661]),
            {
              "water": 0,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5200449642548, 35.32860468927146]),
            {
              "water": 0,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.522061985434, 35.32710789358371]),
            {
              "water": 0,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52163283199161, 35.32675776193774]),
            {
              "water": 0,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5208388981232, 35.32851715812286]),
            {
              "water": 0,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52345673412174, 35.32582115233102]),
            {
              "water": 0,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77274040532978, 35.28553831301722]),
            {
              "water": 0,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77304081273945, 35.28553831301722]),
            {
              "water": 0,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77293352437886, 35.285547070787715]),
            {
              "water": 0,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7757337505904, 35.28334884067259]),
            {
              "water": 0,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77341632200154, 35.28347145268881]),
            {
              "water": 0,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77616290403279, 35.2830072776484]),
            {
              "water": 0,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77300862623127, 35.28632650856761]),
            {
              "water": 0,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77577666593464, 35.285625890679526]),
            {
              "water": 0,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7757873947707, 35.28481141476403]),
            {
              "water": 0,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77588395429524, 35.28335759867992]),
            {
              "water": 0,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77264916529958, 35.272254683819384]),
            {
              "water": 0,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77270280947988, 35.271825481510646]),
            {
              "water": 0,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77296030154531, 35.271834240764164]),
            {
              "water": 0,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77517625474411, 35.285340232605456]),
            {
              "water": 0,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77402826928574, 35.28509501404712]),
            {
              "water": 0,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77263352059799, 35.28537526376745]),
            {
              "water": 0,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77322360658127, 35.286338614782586]),
            {
              "water": 0,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77386733674484, 35.284114132387025]),
            {
              "water": 0,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77428576135117, 35.2836324450785]),
            {
              "water": 0,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7740389981218, 35.2833259152993]),
            {
              "water": 0,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77651735925156, 35.2832646092042]),
            {
              "water": 0,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87667950338533, 34.91923932401055]),
            {
              "water": 0,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87641128248384, 34.91989031521248]),
            {
              "water": 0,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87656148618868, 34.91981993803416]),
            {
              "water": 0,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.88117488569429, 34.92195761790065]),
            {
              "water": 0,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8813572759073, 34.921948820978244]),
            {
              "water": 0,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.88620670980623, 34.91860592220928]),
            {
              "water": 0,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89212902731111, 34.925564276626716]),
            {
              "water": 0,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89222558683565, 34.925370752622314]),
            {
              "water": 0,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89563501875466, 34.928674401538096]),
            {
              "water": 0,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89571012060708, 34.92895587951439]),
            {
              "water": 0,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8956242899186, 34.929131802759166]),
            {
              "water": 0,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89504493277138, 34.930160946182895]),
            {
              "water": 0,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89476598303384, 34.93013455805125]),
            {
              "water": 0,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89486254255837, 34.930372050930515]),
            {
              "water": 0,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89463723700112, 34.93029288671381]),
            {
              "water": 0,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89357508223122, 34.9307766668451]),
            {
              "water": 0,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89316738646096, 34.93103174976564]),
            {
              "water": 0,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89118255178994, 34.93131321965404]),
            {
              "water": 0,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89348925154275, 34.9307590748903]),
            {
              "water": 0,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.91207427780694, 34.93436038352671]),
            {
              "water": 0,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.91063179559939, 34.93900942250436]),
            {
              "water": 0,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.91062643118136, 34.93913255372311]),
            {
              "water": 0,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89923159460125, 34.937053984079284]),
            {
              "water": 0,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89923159460125, 34.93718591352347]),
            {
              "water": 0,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.88502222731626, 34.91557389586443]),
            {
              "water": 0,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.88835889533078, 34.91430703080059]),
            {
              "water": 0,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.88845545485532, 34.91441260363603]),
            {
              "water": 0,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8895497961334, 34.91412227801188]),
            {
              "water": 0,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87456430412112, 34.928000564219325]),
            {
              "water": 0,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87501491523562, 34.9276751014324]),
            {
              "water": 0,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87446774459659, 34.928141304484086]),
            {
              "water": 0,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87432826972781, 34.92815010074262]),
            {
              "water": 0,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87422098136722, 34.92796537911541]),
            {
              "water": 0,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87506855941592, 34.92732324831854]),
            {
              "water": 0,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87578739143191, 34.92712972846275]),
            {
              "water": 0,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87442722530352, 34.927594326398186]),
            {
              "water": 0,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87468471736895, 34.92758553008005]),
            {
              "water": 0,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87457742900835, 34.92762071534687]),
            {
              "water": 0,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87115113457583, 34.92707912914466]),
            {
              "water": 0,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87126915177248, 34.92709672188852]),
            {
              "water": 0,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87184314450167, 34.92740899246453]),
            {
              "water": 0,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87988977154635, 34.92195508195476]),
            {
              "water": 0,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87246541699312, 34.927215472811]),
            {
              "water": 0,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.86480502804659, 34.925491368477665]),
            {
              "water": 0,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.86847428997896, 34.922465301855524]),
            {
              "water": 0,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87079171856783, 34.92179673720262]),
            {
              "water": 0,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.871542737092, 34.92155042253645]),
            {
              "water": 0,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87453092993377, 34.927535214646745]),
            {
              "water": 0,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87441291273711, 34.927535214646745]),
            {
              "water": 0,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87463821829436, 34.927535214646745]),
            {
              "water": 0,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87467040480254, 34.92741206601858]),
            {
              "water": 0,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87444509924529, 34.92742965869105]),
            {
              "water": 0,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87447728575347, 34.92765836309008]),
            {
              "water": 0,
              "system:index": "394"
            })]),
    moreWater = /* color: #01b8ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-110.92506885252027, 29.070645515825213]),
            {
              "water": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.9257769557002, 29.070645515825213]),
            {
              "water": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.92638313493757, 29.070547054853115]),
            {
              "water": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.92503130159406, 29.070551743472965]),
            {
              "water": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.89787569510185, 29.0450021931653]),
            {
              "water": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.89840140806876, 29.0457994529531]),
            {
              "water": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.89784350859367, 29.04558372444203]),
            {
              "water": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.89923825728141, 29.04516164561573]),
            {
              "water": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.89957085119926, 29.046399738609917]),
            {
              "water": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.8781097494035, 29.03772405118358]),
            {
              "water": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.90972590800806, 29.03749826733252]),
            {
              "water": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.89954334575043, 29.107094501937414]),
            {
              "water": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2115326052147, 29.975512491566384]),
            {
              "water": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21145213894425, 29.975526432170042]),
            {
              "water": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21152187637864, 29.975452082261306]),
            {
              "water": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.20862080893517, 29.952036302903334]),
            {
              "water": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.20852424941063, 29.952124614218206]),
            {
              "water": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.20683217618978, 29.941461577806354]),
            {
              "water": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.66525090324222, 33.69380645362506]),
            {
              "water": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.66376355309319, 33.699069659528675]),
            {
              "water": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65527662629029, 33.700732993684525]),
            {
              "water": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65433248871705, 33.702170039205015]),
            {
              "water": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65512475676792, 33.70598058216509]),
            {
              "water": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65211924289292, 33.71063176758567]),
            {
              "water": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65160218686901, 33.711756207531664]),
            {
              "water": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.67337736546529, 33.931033275618134]),
            {
              "water": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57048034144117, 35.28712367131811]),
            {
              "water": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62666266845156, 35.28514060195202]),
            {
              "water": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62635689662386, 35.285223801142145]),
            {
              "water": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62642663405825, 35.2849479298151]),
            {
              "water": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62677532123018, 35.284961066566254]),
            {
              "water": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62656074450899, 35.28538582037229]),
            {
              "water": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6266519396155, 35.28532013693968]),
            {
              "water": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62620669291903, 35.28496544548285]),
            {
              "water": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77449457002552, 35.28798607300016]),
            {
              "water": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.82123010567022, 34.91624358915892]),
            {
              "water": 1,
              "system:index": "35"
            })]),
    geometry = /* color: #ffc82d */ee.Geometry.Polygon(
        [[[-111.73975094248362, 34.959889440332944],
          [-111.99380820805396, 34.965227483512344],
          [-111.99239555843042, 34.86249708000227],
          [-111.74312410400967, 34.86080957360223]]]);
          
var notWaterPoints = ee.FeatureCollection('ft:1JWnZnhh-JUHuWWRLim353AorxVO8PPf-b3OzfOB-');
var waterPoints = ee.FeatureCollection('ft:110E0UAY9UuLTAyrDaaeawbBGSE6Fx7rRpNpGXzyd')

// Start
var sentinelDry = ee.ImageCollection("COPERNICUS/S2").filterDate('2016-01-01',"2018-01-01")
    .filter(ee.Filter.calendarRange(3, 7, "month")) 
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
    .select("B.*"); // get any band starting with "B", dot is wildcard, star allows for any character following wildcard
//print(notWaterPoints.first())
var dem = ee.Image('JAXA/ALOS/AW3D30_V1_1').select('MED');   //world DEM at 30 m
print(ee.Image(sentinelDry.first()).select(['B3']).projection())
var m180 = dem.reduceNeighborhood(ee.Reducer.mean(), ee.Kernel.circle(180, "meters"));
var m270 = dem.reduceNeighborhood(ee.Reducer.mean(), ee.Kernel.circle(270, "meters"));
var m540 = dem.reduceNeighborhood(ee.Reducer.mean(), ee.Kernel.circle(540, "meters"));

var d180 = dem.subtract(m180);
var d270 = dem.subtract(m270);
var d540 = dem.subtract(m540);

var s180 = dem.reduceNeighborhood(ee.Reducer.stdDev(), ee.Kernel.circle(180, "meters"));
var s270 = dem.reduceNeighborhood(ee.Reducer.stdDev(), ee.Kernel.circle(270, "meters"));
var s540 = dem.reduceNeighborhood(ee.Reducer.stdDev(), ee.Kernel.circle(540, "meters"));

var z180 = d180.divide(s180).rename('z180');
var z270 = d270.divide(s270).rename('z270');
var z540 = d540.divide(s540).rename('z540');

// slope
var slope = ee.Algorithms.Terrain(dem).select("slope");

Map.addLayer(sentinelDry.median(),{bands:['B11','B8','B3'],min:[0,0,0],max:[2100,2100,2100]},"sentinel")
var ndwi = sentinelDry.median().normalizedDifference(['B8','B11'])


var image = sentinelDry.median().addBands(slope).addBands(d180).addBands(d270).addBands(d540)
                                       
var points = waterPoints.merge(notWaterPoints).merge(moreNotWater).merge(moreWater);
Export.table.toDrive({
  collection: points,
  description: "waterClassificationPoints",
  fileFormat: "SHP",
  folder: "TempExports"
})
var training = image.sampleRegions({
  collection:points,
  properties:["water"],
  scale:10,
  tileScale: 16 //divides tile size by that number
});

var classifier = ee.Classifier.randomForest(40) // 25 is number of trees. Default number of trees is 1
                              .train(training,"water");
//print(classifier.confusionMatrix())
var result = image.classify(classifier);
print(classifier.confusionMatrix())

Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry2,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary1",
                      description:'waterBinary1'
})

Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry3,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary2",
                      description:'waterBinary2'
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry4,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary3",
                      description:'waterBinary3'
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry5,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary4",
                      description:'waterBinary4'
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry6,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary5",
                      description:'waterBinary5',
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry7,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary6",
                      description:'waterBinary6'
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry8,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary7",
                      description:'waterBinary7'
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry9,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary8",
                      description:'waterBinary8'
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry10,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary9",
                      description:'waterBinary9'
})
Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry11,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary10",
                      description:'waterBinary10'
})

Export.image.toAsset({image:result.byte(),
                      scale:10,
                      maxPixels:1e13,
                      region:geometry12,
                      assetId:"users/VincentLandau/Jaguar/water/waterBinary11",
                      description:'waterBinary11'
})

