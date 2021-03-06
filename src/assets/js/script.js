



var end = new Date('01/1/2018 10:1 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = '<div class="countdownItem"> <span class="num">' + days + '</span> <span class="desc">days</span></div> <div class="Separator">:</div>';
    document.getElementById('countdown').innerHTML += '<div class="countdownItem"><span class="num">' + hours + '</span> <span class="desc">hrs</span></div><div class="Separator">:</div>';
    document.getElementById('countdown').innerHTML += '<div class="countdownItem"><span class="num">' + minutes + '</span> <span class="desc">mins</span></div><div class="Separator">:</div>';
    document.getElementById('countdown').innerHTML += '<div class="countdownItem"><span class="num" style="color: green">' + seconds + '</span> <span class="desc">secs</span></div>';


}

timer = setInterval(showRemaining, 1000);




// 3d chart ----------------------------------------
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Total Profit'],
    ['Mining',  40],
    ['ICO',   33],
    ['Reserves',  15],
    ['Team',   11],
    ['Bounty',   1]
  ]);

  var options = {
    title: '',
    is3D: true,
    backgroundColor: 'none',
    width: '100%',
    height: '400',
    chartArea:{
        width: '100%',
        height: '360',
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}


google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart3d);
function drawChart3d() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Total Profit'],
    ['Development',  25],
    ['Operation',   25],
    ['Marketing',  30],
    ['Security Audits ',   10],
    ['Legal ',   10]
  ]);

  var options = {
    title: '',
    is3D: true,
    backgroundColor: 'none',
    width: '100%',
    height: '400',
    chartArea:{
        width: '100%',
        height: '360',
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d_2'));
  chart.draw(data, options);
}

// donut_single ----------------------------------------
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['fill', 0],
    ['empt', 100],
  ]);

  var options = {
    width: '100%',
    height: '200',
    chartArea:{
        width: '100%',
        height: '160',
    },
    legend: 'none',
    pieHole: 0.6,
    colors: ['#37ba67', '#ddd'],
    backgroundColor: 'none',
    pieSliceTextStyle: {
      color: 'fff',
    },
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single1'));
  chart.draw(data, options);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['fill', 0],
    ['empt', 100],
  ]);

  var options = {
    width: '100%',
    height: '200',
    chartArea:{
        width: '100%',
        height: '160',
    },
    legend: 'none',
    pieHole: 0.6,
    colors: ['#37ba67', '#ddd'],
    backgroundColor: 'none',
    pieSliceTextStyle: {
      color: 'fff',
    },
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single2'));
  chart.draw(data, options);
}


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['fill', 0],
    ['empt', 100],
  ]);

  var options = {
    width: '100%',
    height: '200',
    chartArea:{
        width: '100%',
        height: '160',
    },
    legend: 'none',
    pieHole: 0.6,
    colors: ['#37ba67', '#ddd'],
    backgroundColor: 'none',
    pieSliceTextStyle: {
      color: 'fff',
    },
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single3'));
  chart.draw(data, options);
}


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['fill', 0],
    ['empt', 100],
  ]);

  var options = {
    width: '100%',
    height: '200',
    chartArea:{
        width: '100%',
        height: '160',
    },
    legend: 'none',
    pieHole: 0.6,
    colors: ['#37ba67', '#ddd'],
    backgroundColor: 'none',
    pieSliceTextStyle: {
      color: 'fff',
    },
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single4'));
  chart.draw(data, options);
}



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart5);

function drawChart5() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['fill', 0],
    ['empt', 100],
  ]);

  var options = {
    width: '100%',
    height: '200',
    chartArea:{
        width: '100%',
        height: '160',
    },
    legend: 'none',
    pieHole: 0.6,
    colors: ['#37ba67', '#ddd'],
    backgroundColor: 'none',
    pieSliceTextStyle: {
      color: 'fff',
    },
    legend: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single5'));
  chart.draw(data, options);
}






//
