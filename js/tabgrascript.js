$("#input2").hide(); $("#explanation").hide(); $("#cumulative").hide();  $("#label3").hide();

$('.popover-dismiss').popover({
  trigger: 'focus'
})

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

function resizeCanvasToDisplaySize(canvas) {
   // look up the size the canvas is being displayed
   const width = canvas.clientWidth;
   const height = canvas.clientHeight;

   // If it's resolution does not match change it
   if (canvas.width !== width || canvas.height !== height) {
     canvas.width = width;
     canvas.height = height;
     return true;
   }

   return false;
}

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

function removeDuplicates(array) {
        return [...new Set(array)]
}

function inRange (x) {
  return this[0] <= x && x <= this[1]
}

function sortrem(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return a;
}

function countem(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return b;
}


function addnum(num){
    var str = document.getElementById("values").value;
    str = str+num
    document.getElementById("values").value = str;
}

function sum(input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
     
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }

function avg(input){
    return sum(input)/input.length
}

function showthings(){
    $("#cumulative").hide(); $("#input2").hide(); $("#label1").show(); $("#label3").hide();
    var x = document.getElementById("stat").value;
    if (x == "cumulative"){
        cumulative()
    } else if (x == "crosstabulation") {
        crosstabulation()
    } else if (x == "scatter") {
        scatter()
    }   
}

function stat(){
    $("#explanation").hide(); $("#charts").hide();
    $("#output").empty(); $("#output2").empty();
    var x = document.getElementById("stat").value;
    if (x == "frequency"){
        frequency()
    } else if (x == "relative"){
        relative()
    } else if (x == "percent") {
        percent()
    } else if (x == "bar") {
        bar()
    } else if (x == "pie") {
        pie()
    } else if (x == "histogram") {
        histogram()
    } else if (x == "cumulative") {
        calccum()
    } else if (x == "cumrelative") {
        cumrelative()
    } else if (x == "cumpercent") {
        cumpercent()
    } else if (x == "crosstabulation") {
        calccross()
    } else if (x == "scatter") {
        calcscatt()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function frequency(){
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    if (isnum == true) {
        frequencyquant()
    } else {
        frequencyqual()
    }
}

function frequencyqual(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A frequency distribution is a table showing the number of items in each class."
    document.getElementById("formulatext").innerHTML = "The frequency of a class is the number of items in that class."
    document.getElementById("explanationtext").innerHTML = "The sum of the frequencies is always equal to the sample size (n)."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$\\text{" + eachonesort[r] + "}$</td>";
        table += "<td>$" + counts[r] + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$"+ tot +"$</td></tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    MathJax.typeset();
}

function frequencyquant(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A frequency distribution is a table showing the number of items in each class."
    document.getElementById("formulatext").innerHTML = "The frequency of a class is the number of items in that class."
    document.getElementById("explanationtext").innerHTML = "The sum of the frequencies is always equal to the sample size (n)."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    var classwidth = Math.ceil((maxvalue - minvalue) / 4);
    
    var value1 = minvalue;
    var value2 = minvalue + classwidth - 1;
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    for (var i=0; i<4; i++) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
    }
    
    var quants = [];
    for (var i=0; i<4; i++) {
        quants[i] = each.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    var table = "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    for (var r = 0; r < 4; r++){
        table += "<tr>";
        table += "<td>$\\text{" + classlimits[r] + "}$</td>";
        table += "<td>$" + quants[r] + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$"+ tot +"$</td></tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    MathJax.typeset();
}

function relative(){
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    if (isnum == true) {
        relativequant()
    } else {
        relativequal()
    }
}

function relativequal(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A relative frequency distribution is a table showing the proportion of items in each class."
    document.getElementById("formulatext").innerHTML = "$$\\text{Relative Frequency} = \\frac{\\text{Frequency}}{n}$$"
    document.getElementById("explanationtext").innerHTML = "The sum of the relative frequencies is always equal to 1."
    $("#desrelative").show(); $("#exprelative").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr><td></td><td></td><td style='padding: 0px 0px'>$\\text{Relative}$</td></tr>";
    table = table + "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Frequency}$</td><td>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$\\text{" + eachonesort[r] + "}$</td>";
        table += "<td>$" + counts[r] + "$</td>";
        table += "<td>$" + counts[r]+ "\\mathbin{/}" + tot + "=" + parseFloat(relfreq[r].toFixed(3)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$"+ tot +"$</td><td>$1$</td></tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    MathJax.typeset();
}

function relativequant(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A relative frequency distribution is a table showing the proportion of items in each class."
    document.getElementById("formulatext").innerHTML = "$$\\text{Relative Frequency} = \\frac{\\text{Frequency}}{n}$$"
    document.getElementById("explanationtext").innerHTML = "The sum of the relative frequencies is always equal to 1."
    $("#desrelative").show(); $("#exprelative").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr><td></td><td></td><td style='padding: 0px 0px'>$\\text{Relative}$</td></tr>";
    table = table + "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Frequency}$</td><td>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    var classwidth = Math.ceil((maxvalue - minvalue) / 4);
    
    var value1 = minvalue;
    var value2 = minvalue + classwidth - 1;
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    for (var i=0; i<4; i++) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
    }
    
    var quants = [];
    for (var i=0; i<4; i++) {
        quants[i] = each.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    var rel = quants.map( function(value) {
        return value / tot;
    } );
    
    for (var r = 0; r < 4; r++){
        table += "<tr>";
        table += "<td>$\\text{" + classlimits[r] + "}$</td>";
        table += "<td>$" + quants[r] + "$</td>";
        table += "<td>$" + quants[r]+ "\\mathbin{/}" + tot + "=" + parseFloat(rel[r].toFixed(3)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$"+ tot +"$</td><td>$1$</td></tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    MathJax.typeset();
}

function percent(){
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    if (isnum == true) {
        percentquant()
    } else {
        percentqual()
    }
}

function percentqual(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A percent frequency distribution is a table showing the percentage of items in each class."
    document.getElementById("formulatext").innerHTML = "$$\\text{Percent Frequency} = \\text{Relative Frequency} \\times 100$$"
    document.getElementById("explanationtext").innerHTML = "The sum of the percent frequencies is always equal to 100."
    $("#despercent").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr><td></td><td style='padding: 0px 0px'>$\\text{Relative}$</td><td style='padding: 0px 0px'>$\\text{Percent}$</td></tr>";
    table = table + "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Frequency}$</td><td>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    var perfreq = relfreq.map( function(value) {
        return value * 100;
    } );
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$\\text{" + eachonesort[r] + "}$</td>";
        table += "<td>$" + parseFloat(relfreq[r].toFixed(3)) + "$</td>";
        table += "<td>$" + parseFloat(relfreq[r].toFixed(3)) + "\\times 100 = "+ parseFloat(perfreq[r].toFixed(1)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$1$</td><td>$100$</td></tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    MathJax.typeset();
}

function percentquant(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A percent frequency distribution is a table showing the percentage of items in each class."
    document.getElementById("formulatext").innerHTML = "$$\\text{Percent Frequency} = \\text{Relative Frequency} \\times 100$$"
    document.getElementById("explanationtext").innerHTML = "The sum of the percent frequencies is always equal to 100."
    $("#despercent").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr><td></td><td style='padding: 0px 0px'>$\\text{Relative}$</td><td style='padding: 0px 0px'>$\\text{Percent}$</td></tr>";
    table = table + "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Frequency}$</td><td>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    var perfreq = relfreq.map( function(value) {
        return value * 100;
    } );
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    var classwidth = Math.ceil((maxvalue - minvalue) / 4);
    
    var value1 = minvalue;
    var value2 = minvalue + classwidth - 1;
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    for (var i=0; i<4; i++) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
    }
    
    var quants = [];
    for (var i=0; i<4; i++) {
        quants[i] = each.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    var rel = quants.map( function(value) {
        return value / tot;
    } );
    
    var per = rel.map( function(value) {
        return value * 100;
    } );
    
    for (var r = 0; r < 4; r++){
        table += "<tr>";
        table += "<td>$\\text{" + classlimits[r] + "}$</td>";
        table += "<td>$" + parseFloat(rel[r].toFixed(3)) + "$</td>";
        table += "<td>$" + parseFloat(rel[r].toFixed(3)) + "\\times 100 = "+ parseFloat(per[r].toFixed(1)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$1$</td><td>$100$</td></tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    MathJax.typeset();
}

function bar(){
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    if (isnum == true) {
        document.getElementById("output").innerHTML = "Bar charts require <span class='examplelink' onclick='examplexvalues()'>qualitative data</span>."
    } else {
        calcbar()
    }
}

function calcbar(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "A bar chart is a graphical representation of a frequency distribution."
    document.getElementById("formulatext").innerHTML = "In a bar chart, a bar is drawn to the frequency for each class."
    document.getElementById("explanationtext").innerHTML = "There is distance between bars in a bar chart to signify the separation of the classes."
    $("#myCanvas").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var tot = sum(counts);
    var table = "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$\\text{" + eachonesort[r] + "}$</td>";
        table += "<td>$" + counts[r] + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$"+ tot +"$</td></tr>";
    
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');
      var x = ['Coke','Pepsi','Sprite']
      var y = [3,1,2]

      var data = google.visualization.arrayToDataTable([
        ['Class', 'Frequency'],
        [x[0], y[0]],
        [x[1], y[1]],
        [x[2], y[2]],
      ]);

      var options = {
          legend: 'none',
          vAxis: {title: 'Frequency'},
          hAxis: {title: 'Class'}
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('charts'));

      chart.draw(data, options);
    }
    
    MathJax.typeset();
}

function pie(){
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    if (isnum == true) {
        document.getElementById("output").innerHTML = "Pie charts require <span class='examplelink' onclick='examplexvalues()'>qualitative data</span>."
    } else {
        calcpie()
    }
}

function calcpie(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "A pie chart is a graphical representation of a percent frequency distribution."
    document.getElementById("formulatext").innerHTML = "In a pie chart, the pie is divided according to the percent frequencies for each class."
    document.getElementById("explanationtext").innerHTML = "Pie is tasty."
    $("#myCanvas").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var tot = sum(counts);
    var table = "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Percent Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    var perfreq = relfreq.map( function(value) {
        return value * 100;
    } );
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$\\text{" + eachonesort[r] + "}$</td>";
        table += "<td>$" + parseFloat(perfreq[r].toFixed(1)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$100$</td></tr>";
    
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    
    var perfreq = relfreq.map( function(value) {
        return value * 100;
    } );
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      
      var myArray = [['Class', 'Frequency'], [eachonesort[0], counts[0]],[eachonesort[1], counts[1]], [eachonesort[2], counts[2]]]

      function drawChart() {

        var data = google.visualization.arrayToDataTable(myArray);

        var chart = new google.visualization.PieChart(document.getElementById('charts'));

        chart.draw(data);
      }
    
    MathJax.typeset();

}

function histogram(){
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    if (isnum == false) {
        document.getElementById("output").innerHTML = "Histograms require <span class='examplelink' onclick='examplexvalues2()'>quantitative data</span>."
    } else {
        calchistogram()
    }
}

function calchistogram(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "A histogram is a graphical representation of a frequency distribution for quantitative data."
    document.getElementById("formulatext").innerHTML = "In a histogram, a bar is drawn to the frequency of each class."
    document.getElementById("explanationtext").innerHTML = "In a histogram, the bars are connected to signify the continuity from one class to the next."
    $("#myCanvas").show();
    var str = document.getElementById("values").value;
    var each = str.split(","); 
    var eachnums = each.map(function(v) {
  		return parseInt(v, 10);
    });
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var tot = sum(counts);
    
    var graphValues = counts;
    var maxval = Math.max.apply(Math, graphValues);
    var minval = Math.min.apply(Math, graphValues);
    var intervals = 90/maxval;
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    var classwidth = Math.ceil((maxvalue - minvalue) / 5);
    
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Value'],
          [eachnums[0]],
          [eachnums[1]],
          [eachnums[2]],
          [eachnums[3]],
          [eachnums[4]],
          [eachnums[5]],
          [eachnums[6]],
          [eachnums[7]],
          [eachnums[8]],
          [eachnums[9]]
          ]);

        var options = {
          legend: { position: 'none' },
          colors: ['blue'],
          vAxis: {title: 'Frequency'},
          hAxis: {title: 'Class'}
        };

        var chart = new google.visualization.Histogram(document.getElementById('charts'));
        chart.draw(data, options);
      }
    
    document.getElementById("output").innerHTML = ""
    
    MathJax.typeset();
}

function cumulative(){
    $("#cumulative").show();
}

function calccum(){
    var val = document.getElementById("cumtype").value;
    if (val=="frequency") {
        cumfrequency()
    } else if (val=="relative") {
        cumrelative()
    } else if (val=="percent") {
        cumpercent()
    }
}

function cumfrequency(){
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    if (isnum == false) {
        document.getElementById("output").innerHTML = "Cumulative frequency distributions require <span class='examplelink' onclick='examplexvalues2()'>quantitative data</span>."
    } else {
        cumfrequency2()()
    }
}

function cumfrequency2(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A cumulative frequency distribution is a table showing the number of values less than or equal to the upper limit of each class."
    document.getElementById("formulatext").innerHTML = "For each class, add the frequency of the class to the cumulative frequency of the previous class."
    document.getElementById("explanationtext").innerHTML = ""
    $("#descumfrequency").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each);
    let cumcounts = [counts[0]]
    for (let i=1; i<counts.length; i++) {
        cumcounts[i] = cumcounts[i-1] + counts[i]
    }
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    var classwidth = Math.ceil((maxvalue - minvalue) / 4);
    
    var value1 = minvalue;
    var value2 = minvalue + classwidth - 1;
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    for (var i=0; i<4; i++) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
    }
    
    var quants = [];
    for (var i=0; i<4; i++) {
        quants[i] = each.filter(inRange, [limits1[i], limits2[i]]).length
    }
    let cumquants = [quants[0]]
    for (let i=1; i<quants.length; i++) {
        cumquants[i] = cumquants[i-1] + quants[i]
    }
    
    
    var table = "<tr><td></td><td></td><td style='padding: 0px 0px'>$\\text{Cumulative}$</td></tr>";
    table = table + "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Frequency}$</td><td>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    for (var r = 0; r < 1; r++){
        table += "<tr>";
        table += "<td>$" + classlimits[r] + "$</td>";
        table += "<td>$" + quants[r] + "$</td>";
        table += "<td>$" + cumquants[r] + "$</td>";
        table += "</tr>";
    }
    for (var r = 1; r < 4; r++){
        table += "<tr>";
        table += "<td>$" + classlimits[r] + "$</td>";
        table += "<td>$" + quants[r] + "$</td>";
        table += "<td>$" + cumquants[r-1] + " + " + quants[r] +" = " + cumquants[r] + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$"+ tot +"$</td><td> $-$ </td></tr>";
    document.getElementById("output").innerHTML = " <table>" + table + "</table> <br>"
    MathJax.typeset();
}

function cumrelative(){
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    if (isnum == false) {
        document.getElementById("output").innerHTML = "Cumulative relative frequency distributions require <span class='examplelink' onclick='examplexvalues2()'>quantitative data</span>."
    } else {
        cumrelative2()()
    }
}

function cumrelative2(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A cumulative relative frequency distribution is a table showing the proportion of values less than or equal to the upper limit of each class."
    document.getElementById("formulatext").innerHTML = "For each class, add the relative frequency of the class to the cumulative relative frequency of the previous class."
    document.getElementById("explanationtext").innerHTML = ""
    $("#descumrelative").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var tot = sum(counts);
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    var classwidth = Math.ceil((maxvalue - minvalue) / 4);
    
    var value1 = minvalue;
    var value2 = minvalue + classwidth - 1;
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    for (var i=0; i<4; i++) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
    }
    
    var quants = [];
    for (var i=0; i<4; i++) {
        quants[i] = each.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    var rel = quants.map( function(value) {
        return value / tot;
    } );
    
    let cumquants = [quants[0]]
    for (let i=1; i<quants.length; i++) {
        cumquants[i] = cumquants[i-1] + quants[i]
    }
    
    var table = "<tr><td></td><td></td><td style='padding: 0px 0px'>$\\text{Cumulative}$</td></tr>";
    table = table + "<tr><td></td><td>$\\text{Relative}$</td><td style='padding: 0px 0px'>$\\text{Relative}$</td></tr>";
    table = table + "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Frequency}$</td><td>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    

    let cumrel = [rel[0]]
    for (let i=1; i<counts.length; i++) {
        cumrel[i] = cumrel[i-1] + rel[i]
    }
    
    for (var r = 0; r < 1; r++){
        table += "<tr>";
        table += "<td>$" + classlimits[r] + "$</td>";
        table += "<td>$" + parseFloat(rel[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(cumrel[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    for (var r = 1; r < 4; r++){
        table += "<tr>";
        table += "<td>$" + classlimits[r] + "$</td>";
        table += "<td>$" + parseFloat(rel[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(cumrel[r-1].toFixed(2))+ " + " + parseFloat(rel[r].toFixed(2)) + " = " + parseFloat(cumrel[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$1$</td><td>$-$</td></tr>";
    document.getElementById("output").innerHTML = " <table>" + table + "</table> <br>"
    MathJax.typeset();
}

function cumpercent(){
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    if (isnum == false) {
        document.getElementById("output").innerHTML = "Cumulative percent frequency distributions require <span class='examplelink' onclick='examplexvalues2()'>quantitative data</span>."
    } else {
        cumpercent2()()
    }
}

function cumpercent2(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A cumulative percent frequency distribution is a table showing the percentage of values less than or equal to the upper limit of each class."
    document.getElementById("formulatext").innerHTML = "For each class, add the relative frequency of the class to the cumulative relative frequency of the previous class."
    document.getElementById("explanationtext").innerHTML = ""
    $("#descumpercent").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var tot = sum(counts);
    
    var value1 = minvalue;
    var value2 = minvalue + classwidth - 1;
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    for (var i=0; i<4; i++) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
    }
    
    var quants = [];
    for (var i=0; i<4; i++) {
        quants[i] = each.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    var rel = quants.map( function(value) {
        return value / tot;
    } );
    
    var per = rel.map( function(value) {
        return value * 100;
    } );
    
    var table = "<tr><td></td><td></td><td style='padding: 0px 0px'>$\\text{Cumulative}$</td></tr>";
    table = table + "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Percent Frequency}$</td><td>$\\text{Percent Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    
    let cumper = [per[0]]
    for (let i=1; i<quants.length; i++) {
        cumper[i] = cumper[i-1] + per[i]
    }
    
    for (var r = 0; r < 1; r++){
        table += "<tr>";
        table += "<td>" + classlimits[r] + "</td>";
        table += "<td>" + parseFloat(per[r].toFixed(2)) + "</td>";
        table += "<td>" + parseFloat(cumperfreq[r].toFixed(2)) + "</td>";
        table += "</tr>";
    }
    for (var r = 1; r < 4; r++){
        table += "<tr>";
        table += "<td>" + classlimits[r] + "</td>";
        table += "<td>" + parseFloat(per[r].toFixed(2)) + "</td>";
        table += "<td>" + parseFloat(cumper[r-1].toFixed(2)) + " + " + parseFloat(per[r].toFixed(2)) + " = " + parseFloat(cumper[r].toFixed(2)) + "</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$100$</td><td>$-$</td></tr>";
    document.getElementById("output").innerHTML = " <table>" + table + "</table> <br>"
    MathJax.typeset();
}

function crosstabulation(){
    $("#input2").show();
}

function calccross(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A crosstabulation is a table summarizing data for two variables at the same time."
    document.getElementById("formulatext").innerHTML = "For each class, add the relative frequency of the class to the cumulative relative frequency of the previous class."
    document.getElementById("explanationtext").innerHTML = ""
    $("#input2").show(); $("#buttonscatt").hide();
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr>" + "<td>" + "x" + "</td>" + "<td>" + "Frequency" + "</td>" + "</tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>" + eachonesort[r] + "</td>";
        table += "<td>" + counts[r] + "</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "Total" + "</td>" + "<td>"+ tot +"</td>" + "</tr>";
    document.getElementById("output").innerHTML = " <table border=1>" + table + "</table>"
    MathJax.typeset();
}

function scatter(){
    $("#input2").show();  $("#label1").hide(); $("#label3").show();
}

function calcscatt(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "A scatter diagram is a graphical summary of two quantitative variables at the same time."
    document.getElementById("formulatext").innerHTML = "In a scatter diagram, a point is drawn on the graph for each pair of x and y values."
    document.getElementById("explanationtext").innerHTML = ""
    document.getElementById("explanationtext").innerHTML = ""
    $("#myCanvas").show();
    var str = document.getElementById("values").value;
    var str2 = document.getElementById("values2").value;
    var each = str.split(","); var each2 = str2.split(",")
    var eachnums = each.map(function(v) {
  		return parseInt(v, 10);
    });
    var eachnums2 = each2.map(function(v) {
  		return parseInt(v, 10);
    });
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]]
        ]);

        var options = {
          hAxis: {title: 'x'},
          vAxis: {title: 'y'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }
    
    
    document.getElementById("output").innerHTML = ""

    
    MathJax.typeset();
}

function relativeexp(){
    $("#exprel").show();
}

function examplexvalues(){
    document.getElementById('values').value="Coke, Sprite, Pepsi, Coke, Coke, Sprite"
}

function examplexvalues2(){
    document.getElementById('values').value="12, 15, 20, 22, 14, 14, 15, 27, 21, 18"
}

function examplevalues3(){
    document.getElementById('values').value="Good, VeryGood, Good, Excellent, VeryGood, Good, VeryGood, Good, VeryGood, VeryGood, VeryGood, Good"
    document.getElementById('values').value="Coke, Sprite, Pepsi, Coke, Coke, Pepsi"
}

function examplevalues4(){
    document.getElementById('values').value="12, 15, 20, 22, 14, 14, 15, 27, 21, 18"
}

function examplevalues5(){
    document.getElementById('values').value="2, 5, 1, 3, 4, 1, 5, 3, 4, 2"
    document.getElementById('values2').value="50, 57, 41, 54, 54, 38, 63, 48, 59, 46"
}

function examplevalues6(){
    document.getElementById('values').value="-22, -33, 2, 29, -13, 21, -13, -23, 14, 2"
    document.getElementById('values2').value="22, 49, 8, -16, 10, -28, 27, 35, -5, -3"
}
