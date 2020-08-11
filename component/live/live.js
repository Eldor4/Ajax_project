
var url = "";
var ListOfTheNamesOfAllTheCoins = [];
url = [...arrayForGraph] 
ListOfTheNamesOfAllTheCoins = [...url];
url = url.join();

var dataPoints1 = [];
var dataPoints2 = [];
var dataPoints3 = [];
var dataPoints4 = [];
var dataPoints5 = [];

var options = {
  theme: "light2",
  legend: {
    cursor: "pointer",
    itemclick: toggleDataSeries,
  },
  title: {
    text: "Live Data",
  },
  data: [
    {
      name: ListOfTheNamesOfAllTheCoins[0],
      type: "spline",
      yValueFormatString: "#0.## $",
      showInLegend: true,
      dataPoints: dataPoints1,
    },
    {
      name: ListOfTheNamesOfAllTheCoins[1],
      type: "spline",
      yValueFormatString: "#0.## $",
      showInLegend: true,
      dataPoints: dataPoints2,
    },
    {
      name: ListOfTheNamesOfAllTheCoins[2],
      type: "spline",
      yValueFormatString: "#0.## $",
      showInLegend: true,
      dataPoints: dataPoints3,
    },
    {
      name: ListOfTheNamesOfAllTheCoins[3],
      type: "spline",
      yValueFormatString: "#0.## $",
      showInLegend: true,
      dataPoints: dataPoints4,
    },
    {
      name: ListOfTheNamesOfAllTheCoins[4],
      type: "spline",
      yValueFormatString: "#0.## $",
      showInLegend: true,
      dataPoints: dataPoints5,
    },
  ],
};
$("#chartContainer").CanvasJSChart(options);

// Initial Values
var xValue1 = 0;
var yValue1 = 0;
var newDataCount1 = 1;

// initioal values 2

var xValue2 = 0;
var yValue2 = 0;
var newDataCount2 = 1;

// initioal values 3

var xValue3 = 0;
var yValue3 = 0;
var newDataCount3 = 1;

// initioal values 4

var xValue4 = 0;
var yValue4 = 0;
var newDataCount4 = 1;

// initioal values 5

var xValue5 = 0;
var yValue5 = 0;
var newDataCount5 = 1;

function addData(data) {
  if (data[Object.keys(data)[0]]) {
    if (newDataCount1 != 1) {
      $.each(data, function (key, value) {
        dataPoints1.push({ x: new Date(), y: value.BTC.USD });
        xValue1++;
        yValue1 = parseInt(value[1]);
      });
    } else {
      // dataPoints.shift();
      dataPoints1.push({ x: new Date(), y: data[Object.keys(data)[0]].USD });
      xValue1++;
      yValue1 = new Date();
    }
  }

  newDataCount1 = 1;
  if (data[Object.keys(data)[1]]) {
    if (newDataCount2 != 1) {
      $.each(data, function (key, value) {
        dataPoints2.push({ x: new Date(), y: value.ETH.USD });
        xValue2++;
        yValue2 = parseInt(value[1]);
      });
    } else {
      // dataPoints.shift();
      dataPoints2.push({ x: new Date(), y: data[Object.keys(data)[1]].USD });
      xValue2++;
      yValue2 = new Date();
    }

    newDataCount2 = 1;
  }

  if (data[Object.keys(data)[2]]) {
    if (newDataCount3 != 1) {
      $.each(data, function (key, value) {
        dataPoints3.push({ x: new Date(), y: value.XRP.USD });
        xValue3++;
        yValue3 = parseInt(value[1]);
      });
    } else {
      // dataPoints.shift();
      dataPoints3.push({ x: new Date(), y: data[Object.keys(data)[2]].USD });
      xValue3++;
      yValue3 = new Date();
    }

    newDataCount3 = 1;
  }

  if (data[Object.keys(data)[3]]) {
    if (newDataCount4 != 1) {
      $.each(data, function (key, value) {
        dataPoints4.push({ x: new Date(), y: value.BCH.USD });
        xValue4++;
        yValue4 = parseInt(value[1]);
      });
    } else {
      // dataPoints.shift();
      dataPoints4.push({ x: new Date(), y: data[Object.keys(data)[3]].USD });
      xValue4++;
      yValue4 = new Date();
    }

    newDataCount4 = 1;
  }

  if (data[Object.keys(data)[4]]) {
    if (newDataCount5 != 1) {
      $.each(data, function (key, value) {
        dataPoints5.push({ x: new Date(), y: value.LINK.USD });
        xValue5++;
        yValue5 = parseInt(value[1]);
      });
    } else {
      // dataPoints.shift();
      dataPoints5.push({ x: new Date(), y: data[Object.keys(data)[4]].USD });
      xValue5++;
      yValue5 = new Date();
    }

    newDataCount5 = 1;
  }

  $("#chartContainer").CanvasJSChart().render();
  setTimeout(updateData, 1500);
}

function toggleDataSeries(e) {
  if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
    e.dataSeries.visible = false;
  } else {
    e.dataSeries.visible = true;
  }
  e.chart.render();
}

function updateData() {
  $.getJSON(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${url}&tsyms=USD`,
    addData
  );
}
updateData();

////////////////////////////////////////
// var url = arrayForGraph.join();
// createCanvasElement(arrayForGraph);
// console.log(arrayForGraph);
// basicAjax(
//   `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${url}&tsyms=USD`,
//   makeGraph
// );
// var graphInterval;
// graphInterval = setInterval(() => {
//   basicAjax(
//     `https://min-api.cryptocompare.com//pricemulti?fsyms=${url}&tsyms=USD`,
//     makeGraph()
//   );
// }, 2000);

// function makeGraph() {
//   var objToPush;
//   var keys = Object.keys(this.response)
//   chart.render();

//   if (chart.data) {
//     for (var i = 0; i < keys.length; i++) {
//       var key = keys.indexOf
//       var coin = this.response[key].USD;
//       objToPush = { x: new Date(), y: coin };
//       if (chart.data[i].dataPoints.length > 15) {
//         chart.data[i].dataPoints.splice(0, 1);
//       }
//       chart.data[i].dataPoints.push(objToPush);
//     }
//   }
// }

// var chart;

// function createCanvasElement(arr) {
//   chart = new CanvasJS.Chart("chartContainer", {
//     animationEnabled: true,
//     title: {
//       text: "Coins to $",
//     },
//     axisX: {
//       valueFormatString: "hh:mm:ss",
//     },
//     axisY: {
//       title: "Worth in $",
//       includeZero: false,
//       suffix: " $",
//     },
//     legend: {
//       cursor: "pointer",
//       fontSize: 16,
//       itemclick: toggleDataSeries,
//     },
//     toolTip: {
//       shared: true,
//     },
//     data: [
//       {
//         name: arr[0],
//         type: "spline",
//         yValueFormatString: "#0.## $",
//         showInLegend: true,
//         dataPoints: [],
//       },

//       {
//         name: arr[1],
//         type: "spline",
//         yValueFormatString: "#0.## $",
//         showInLegend: true,
//         dataPoints: [],
//       },

//       {
//         name: arr[2],
//         type: "spline",
//         yValueFormatString: "#0.## $",
//         showInLegend: true,
//         dataPoints: [],
//       },
//       {
//         name: arr[3],
//         type: "spline",
//         yValueFormatString: "#0.## $",
//         showInLegend: true,
//         dataPoints: [],
//       },
//       {
//         name: arr[4],
//         type: "spline",
//         yValueFormatString: "#0.## $",
//         showInLegend: true,
//         dataPoints: [],
//       },
//     ],
//   });
//   function toggleDataSeries(e) {
//     if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
//       e.dataSeries.visible = false;
//     } else {
//       e.dataSeries.visible = true;
//     }
//     chart.render();
//   }
// }

// function basicAjax(url, cb) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.addEventListener("load", cb);
// }

// //////////////////////////////////////////////////////////////////////

// var gg = new Object

// var url = arrayForGraph.join();

// var dataPoints1 = [];
// var dataPoints2 = [];
// var dataPoints3 = [];
// var dataPoints4 = [];
// var dataPoints5 = [];

// var options = {
//   theme: "light2",
//   legend: {
//     cursor: "pointer",
//     itemclick: toggleDataSeries,
//   },
//   title: {
//     text: "Live Data",
//   },
//   data: [
//     {
//       name: arrayForGraph[0],
//       type: "spline",
//       yValueFormatString: "#0.## $",
//       showInLegend: true,
//       dataPoints: dataPoints1,
//     },
//     {
//       name: arrayForGraph[1],
//       type: "spline",
//       yValueFormatString: "#0.## $",
//       showInLegend: true,
//       dataPoints: dataPoints2,
//     },
//     {
//       name: arrayForGraph[2],
//       type: "spline",
//       yValueFormatString: "#0.## $",
//       showInLegend: true,
//       dataPoints: dataPoints3,
//     },
//     {
//       name: arrayForGraph[3],
//       type: "spline",
//       yValueFormatString: "#0.## $",
//       showInLegend: true,
//       dataPoints: dataPoints4,
//     },
//     {
//       name: arrayForGraph[4],
//       type: "spline",
//       yValueFormatString: "#0.## $",
//       showInLegend: true,
//       dataPoints: dataPoints5,
//     },
//   ],
// };
// $("#chartContainer").CanvasJSChart(options)

// // Initial Values
// var xValue1 = 0;
// var yValue1 = 0;
// var newDataCount1 = 1;

// // initioal values 2

// var xValue2 = 0;
// var yValue2 = 0;
// var newDataCount2 = 1;

// // initioal values 3

// var xValue3 = 0;
// var yValue3 = 0;
// var newDataCount3 = 1;

// // initioal values 4

// var xValue4 = 0;
// var yValue4 = 0;
// var newDataCount4 = 1;

// // initioal values 5

// var xValue5 = 0;
// var yValue5 = 0;
// var newDataCount5 = 1;

// function addData(data) {
//   // if (newDataCount1 != 1) {
//   //   $.each(data, function (key, value) {
//   //     dataPoints1.push({ x: new Date(), y: value.BTC.USD });
//   //     xValue1++;
//   //     yValue1 = parseInt(value[1]);
//   //   });
//   // } else {
//   //   // dataPoints.shift();
//     dataPoints1.push({ x: new Date(), y: data[Object.keys(data)[0]].USD });
//     xValue1++;
//     yValue1 = new Date();
//   //}

//   newDataCount1 = 1;

//   if (newDataCount2 != 1) {
//     $.each(data, function (key, value) {
//       dataPoints2.push({ x: new Date(), y: value.ETH.USD });
//       xValue2++;
//       yValue2 = parseInt(value[1]);
//     });
//   } else {
//     // dataPoints.shift();
//     dataPoints2.push({ x: new Date(), y: data[Object.keys(data)[1]].USD });
//     xValue2++;
//     yValue2 = new Date();
//   }

//   newDataCount2 = 1;

//   if (newDataCount3 != 1) {
//     $.each(data, function (key, value) {
//       dataPoints3.push({ x: new Date(), y: value.XRP.USD });
//       xValue3++;
//       yValue3 = parseInt(value[1]);
//     });
//   } else {
//     // dataPoints.shift();
//     dataPoints3.push({ x: new Date(), y: data[Object.keys(data)[2]].USD });
//     xValue3++;
//     yValue3 = new Date();
//   }

//   newDataCount3 = 1;

//   if (newDataCount4 != 1) {
//     $.each(data, function (key, value) {
//       dataPoints4.push({ x: new Date(), y: value.BCH.USD });
//       xValue4++;
//       yValue4 = parseInt(value[1]);
//     });
//   } else {
//     // dataPoints.shift();
//     dataPoints4.push({ x: new Date(), y: data[Object.keys(data)[3]].USD });
//     xValue4++;
//     yValue4 = new Date();
//   }

//   newDataCount4 = 1;

//   if (newDataCount5 != 1) {
//     $.each(data, function (key, value) {
//       dataPoints5.push({ x: new Date(), y: value.LINK.USD });
//       xValue5++;
//       yValue5 = parseInt(value[1]);
//     });
//   } else {
//     // dataPoints.shift();
//     dataPoints5.push({ x: new Date(), y: data[Object.keys(data)[4]].USD });
//     xValue5++;
//     yValue5 = new Date();
//   }

//   newDataCount5 = 1;

//   $("#chartContainer").CanvasJSChart().render();
//   setTimeout(updateData, 1500);
// }

// function toggleDataSeries(e) {
//   if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
//     e.dataSeries.visible = false;
//   } else {
//     e.dataSeries.visible = true;
//   }
//   e.chart.render();
// }

// function updateData() {
//   $.getJSON(
//     `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${url}&tsyms=USD`,
//     addData
//   );
// }
// updateData();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var url = arrayForGraph.join();
// createCanvasElement(url);
// console.log(arrayForGraph)
// basicAjax(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${url}&tsyms=USD`, makeGraph);
// var graphInterval;
// graphInterval = setInterval( ()=> {

//   basicAjax(`https://min-api.cryptocompare.com//pricemulti?fsyms=${url}&tsyms=USD`,makeGraph);}, 2000);

//   function makeGraph() {
//     var CoinsToInsert = Object.keys(this.response);
//     var objToPush;
//     chart.render();
//     if (chart.data) {
//       for (var i = 0; i < arrayForGraph.length; i++) {
//         var key = CoinsToInsert[i];
//         var coin = this.response[key].USD;
//         objToPush = { x: new Date(), y: coin };
//         if (chart.data[i].dataPoints.length > 15) {
//           chart.data[i].dataPoints.push(objToPush);
//           chart.data[i].dataPoints.splice(0, 1);

//         }
//         chart.data[i].dataPoints.push(objToPush);

//       }
//     }
//   }

//   var chart;

//   function createCanvasElement(arrayForGraph) {
//     chart = new CanvasJS.Chart("chartContainer", {
//       animationEnabled: true,
//       title: {
//         text: "Coins to $",
//       },
//       axisX: {
//         valueFormatString: "hh:mm:ss",
//       },
//       axisY: {
//         title: "Worth in $",
//         includeZero: false,
//         suffix: " $",
//       },
//       legend: {
//         cursor: "pointer",
//         fontSize: 16,
//         itemclick: toggleDataSeries,
//       },
//       toolTip: {
//         shared: true,
//       },
//       data: [
//         {
//           name: arrayForGraph[0],
//           type: "spline",
//           yValueFormatString: "#0.## $",
//           showInLegend: true,
//           dataPoints: [],
//         },

//         {
//           name: arrayForGraph[1],
//         type: "spline",
//         yValueFormatString: "#0.## $",
//         showInLegend: true,
//         dataPoints: [],
//       },

//       {
//         name: arrayForGraph[2],
//         type: "spline",
//         yValueFormatString: "#0.## $",
//         showInLegend: true,
//         dataPoints: [],
//       },
//       {
//         name: arrayForGraph[3],
//         type: "spline",
//         yValueFormatString: "#0.## $",
//         showInLegend: true,
//         dataPoints: [],
//       },
//       {
//         name: arrayForGraph[4],
//         type: "spline",
//         yValueFormatString: "#0.## $",
//         showInLegend: true,
//         dataPoints: [],
//       },
//     ],
//   });
//   function toggleDataSeries(e){
//     if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//       e.dataSeries.visible = false;
//     }
//     else{
//       e.dataSeries.visible = true;
//     }
//     chart.render();
//   }

// }

// function basicAjax(url, cb) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.responseType = "json";
//   xhr.send();
//   xhr.addEventListener("load", cb);
// }
