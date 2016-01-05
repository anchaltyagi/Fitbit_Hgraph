app_hGraph.controller('ngxHGraphController', function($scope) {

   //INITIAL DATA
   var gender = 'male';
   var seedData = [{
      "gender": "male",
      "metrics": [{
         "name": "LDL",
         "features": {
            "healthyrange": [
               74,
               107
            ],
            "totalrange": [
               0,
               160
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 9,
            "unitlabel": "mg/dl"
         }
      }, {
         "name": "HDL",
         "features": {
            "healthyrange": [
               65,
               90
            ],
            "totalrange": [
               0,
               130
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 4,
            "unitlabel": "mg/dl"
         }
      }, {
         "name": "Triglycerides",
         "features": {
            "healthyrange": [
               348,
               492
            ],
            "totalrange": [
               0,
               600
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 3,
            "unitlabel": "mg/dl"
         }
      }, {
         "name": "Sleep",
         "features": {
            "healthyrange": [
               6,
               8
            ],
            "totalrange": [
               0,
               18
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "hours/night"
         }
      }, {
         "name": "Exercise",
         "features": {
            "healthyrange": [
               35,
               63
            ],
            "totalrange": [
               0,
               120
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "hours/week"
         }
      },  {
         "name": "Glucose",
         "features": {
            "healthyrange": [
               61,
               100
            ],
            "totalrange": [
               0,
               160
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 10,
            "unitlabel": "mg/dl"
         }
      }, {
         "name": "Blood Pressure Systolic",
         "features": {
            "healthyrange": [
               99,
               148
            ],
            "totalrange": [
               50,
               230
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "mm/Hg"
         }
      }, {
         "name": "Blood Pressure Diastolic",
         "features": {
            "healthyrange": [
               65,
               95
            ],
            "totalrange": [
               35,
               140
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "mm/Hg"
         }
      }, {
         "name": "Alcohol",
         "features": {
            "healthyrange": [
               2,
               4
            ],
            "totalrange": [
               0,
               20
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "drinks/week"
         }
      }, {
         "name": "Smoking",
         "features": {
            "healthyrange": [
               0,
               1
            ],
            "totalrange": [
               0,
               10
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "cigarettes/day"
         }
      }, {
         "name": "Waist Circumference",
         "features": {
            "healthyrange": [
               66,
               75
            ],
            "totalrange": [
               0,
               200
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 10,
            "unitlabel": "inches"
         }
      }, {
         "name": "Pain",
         "features": {
            "healthyrange": [
               1,
               4
            ],
            "totalrange": [
               0,
               10
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 3,
            "unitlabel": "pain scale"
         }
      }]
   }, {
      "gender": "female",
      "metrics": [{
         "name": "LDL",
         "features": {
            "healthyrange": [
               73,
               104
            ],
            "totalrange": [
               0,
               160
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 9,
            "unitlabel": "mg/dl"
         }
      }, {
         "name": "HDL",
         "features": {
            "healthyrange": [
               79,
               106
            ],
            "totalrange": [
               0,
               130
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 4,
            "unitlabel": "mg/dl"
         }
      }, {
         "name": "Triglycerides",
         "features": {
            "healthyrange": [
               355,
               501
            ],
            "totalrange": [
               0,
               600
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 3,
            "unitlabel": "mg/dl"
         }
      }, {
         "name": "Sleep",
         "features": {
            "healthyrange": [
               4,
               6
            ],
            "totalrange": [
               0,
               18
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "hours/night"
         }
      }, {
         "name": "Exercise",
         "features": {
            "healthyrange": [
               37,
               65
            ],
            "totalrange": [
               0,
               120
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "hours/week"
         }
      }, {
         "name": "Glucose",
         "features": {
            "healthyrange": [
               55,
               95
            ],
            "totalrange": [
               0,
               160
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 10,
            "unitlabel": "mg/dl"
         }
      }, {
         "name": "Blood Pressure Systolic",
         "features": {
            "healthyrange": [
               102,
               151
            ],
            "totalrange": [
               50,
               230
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "mm/Hg"
         }
      }, {
         "name": "Blood Pressure Diastolic",
         "features": {
            "healthyrange": [
               62,
               92
            ],
            "totalrange": [
               35,
               140
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "mm/Hg"
         }
      }, {
         "name": "Alcohol",
         "features": {
            "healthyrange": [
               1,
               3
            ],
            "totalrange": [
               0,
               20
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "drinks/week"
         }
      }, {
         "name": "Smoking",
         "features": {
            "healthyrange": [
               0,
               1
            ],
            "totalrange": [
               0,
               10
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 5,
            "unitlabel": "cigarettes/day"
         }
      }, {
         "name": "Waist Circumference",
         "features": {
            "healthyrange": [
               70,
               79
            ],
            "totalrange": [
               0,
               200
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 10,
            "unitlabel": "inches"
         }
      }, {
         "name": "Pain",
         "features": {
            "healthyrange": [
               0,
               3
            ],
            "totalrange": [
               0,
               10
            ],
            "boundayflags": [
               false,
               true
            ],
            "weight": 3,
            "unitlabel": "pain scale"
         }
      }]
   }];
   //END INITIAL DATA

   var randomBetween = function(min, max) {
      if (min < 0) {
         return min + Math.random() * (Math.abs(min) + max);
      } else {
         return min + Math.random() * max;
      }
   };
   var json = seedData;
   var factors_array = [];
   var factor_json;
   var cholesterol = {
      label: 'Total Cholesterol',
      score: 0,
      value: 0,
      actual: 0,
      weight: 0,
      details: []
   }
   var bp = {
      label: 'Blood Pressure',
      score: 0,
      value: 0,
      actual: 0,
      weight: 0,
      details: []
   }
   if (json[0].gender === gender)
      factor_json = json[0].metrics;
   else
      factor_json = json[1].metrics;

   console.log(factor_json);
   for (var i = 0; i < factor_json.length; i++) {
      var random = randomBetween(factor_json[i].features.totalrange[0], factor_json[i].features.totalrange[1]);
      console.log(factor_json[i].name);
      console.log(factor_json[i].features);
      console.log(random);
      if ((factor_json[i].name === 'LDL' || factor_json[i].name === 'HDL' || factor_json[i].name === 'Triglycerides') && cholesterol != null) {
         cholesterol.details.push({
            label: factor_json[i].name,
            score: HGraph.prototype.calculateScoreFromValue(factor_json[i].features, random),
            value: parseFloat(random).toFixed(2) + ' ' + factor_json[i].features.unitlabel,
            actual: random,
            weight: factor_json[i].features.weight
         });
         if (cholesterol.details.length >= 3) {
            for (var j = 0; j < cholesterol.details.length; j++) {
               cholesterol.score = cholesterol.score + cholesterol.details[j].score
               cholesterol.actual = cholesterol.actual + cholesterol.details[j].actual
               cholesterol.weight = cholesterol.weight + cholesterol.details[j].weight
            }
            cholesterol.score /= 3;
            cholesterol.weight /= 3;
            cholesterol.value = parseFloat(cholesterol.actual).toFixed(2) + ' ' + factor_json[i].features.unitlabel;
            factors_array.push(cholesterol);
            cholesterol = null
         }


      } else if ((factor_json[i].name === 'Blood Pressure Diastolic' || factor_json[i].name === 'Blood Pressure Systolic') && bp != null) {
         bp.details.push({
            label: factor_json[i].name.replace('Blood Pressure ', ''),
            score: HGraph.prototype.calculateScoreFromValue(factor_json[i].features, random),
            value: parseFloat(random).toFixed(2) + ' ' + factor_json[i].features.unitlabel,
            weight: factor_json[i].features.weight,
            actual: random
         });
         if (bp.details.length >= 2) {
            console.log(bp.score);
            for (var j = 0; j < bp.details.length; j++) {
               bp.score = bp.score + bp.details[j].score;
               bp.weight = bp.weight + bp.details[j].weight;
            }
            bp.score /= 2;
            bp.weight /= 2;
            bp.value = parseFloat(bp.details[0].actual).toFixed(2) + '/' + parseFloat(bp.details[1].actual).toFixed(2) + ' ' + factor_json[i].features.unitlabel;
            factors_array.push(bp);
            bp = null
         }


      } else
         factors_array.push({
            label: factor_json[i].name,
            score: HGraph.prototype.calculateScoreFromValue(factor_json[i].features, random),
            value: parseFloat(random).toFixed(2) + ' ' + factor_json[i].features.unitlabel,
            weight: factor_json[i].features.weight
         })
   }
   var opts = {
      container: document.getElementById("viz"),
      userdata: {
         hoverevents: true,
         factors: factors_array
      },
      showLabels: true
   };
   console.log(opts);
   graph = new HGraph(opts);
   graph.width = 760;
   graph.height = 602;
   graph.initialize();


});