
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

