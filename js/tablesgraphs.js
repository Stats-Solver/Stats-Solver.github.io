$("#input2").hide(); $("#explanation").hide(); $("#cumulative").hide(); $("#label3").hide();
$("#firstclass").hide(); $("#label2").hide();
$("#firstclasscross").hide(); $("#label4").hide();

$("#rowcol").hide(); $("#rowcol2").hide(); $("#rowcol3").hide();
$("#trendline").hide(); $("#notrendline").hide(); $("#581773186").hide();

$('.popover-dismiss').popover({
  trigger: 'focus'
})


$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

//function removeDuplicates(array) {return [...new Set(array)]}

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
    $("#cumulative").hide(); $("#input2").hide(); $("#label1").show(); $("#label2").hide(); $("#label3").hide();  $("#firstclass").hide();
    $("#firstclasscross").hide(); $("#firstclassx").hide(); $("#firstclassy").hide(); $("#input1").show(); $("#label4").hide(); $("#blankx").show();
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    var x = document.getElementById("stat").value;
    if (x == "frequency") {
        if (isnum == true) {
            $("#firstclass").show();
        } else {
            $("#firstclass").hide();
        }
    } else if (x == "relative") {
        if (isnum == true) {
            $("#firstclass").show();
        } else {
            $("#firstclass").hide();
        }
    } else if (x == "percent") {
        if (isnum == true) {
            $("#firstclass").show();
        } else {
            $("#firstclass").hide();
        }
    } else if (x == "histogram") {
        $("#firstclass").hide(); $("#go").hide();
    } else if (x == "boxplot") {
        $("#firstclass").hide(); $("#go").hide();
    } else if (x == "cumfrequency") {
        $("#firstclass").show(); $("#go").hide();
    } else if (x == "cumrelative") {
        $("#firstclass").show(); $("#go").hide();
    } else if (x == "cumpercent") {
        $("#firstclass").show(); $("#go").hide();
    } else if (x == "crosstabulation") {
        crosstabulation()
    } else if (x == "rowpercent") {
        rowpercent()
    } else if (x == "colpercent") {
        colpercent()
    } else if (x == "scatter") {
        scatter()
    } else if (x == "trendline") {
        trendline()
    } else if (x == "timeplot") {
        timeplot()
    } else if (x == "cumulative") {
        cumulative()
    }  
}

function stat(){
    $("#581773186").show();
    $("#rowcol").hide(); $("#rowcol2").hide(); $("#rowcol3").hide();
    $("#trendline").hide(); $("#notrendline").hide(); 
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
    } else if (x == "boxplot") {
        boxplot()
    } else if (x == "cumulative") {
        calccum()
    } else if (x == "cumfrequency") {
        cumfrequency()
    } else if (x == "cumrelative") {
        cumrelative()
    } else if (x == "cumpercent") {
        cumpercent()
    } else if (x == "crosstabulation") {
        calccross()
    } else if (x == "rowpercent") {
        calcrow()
    } else if (x == "colpercent") {
        calccol()
    } else if (x == "scatter") {
        calcscatt()
    } else if (x == "trendline") {
        calctrend()
    } else if (x == "timeplot") {
        calctime()
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
    $("#explanation").show(); $("#firstclass").show();
    document.getElementById("descriptiontext").innerHTML = "A frequency distribution is a table showing the number of items in each class."
    document.getElementById("formulatext").innerHTML = "The frequency of a class is the number of items in that class."
    document.getElementById("explanationtext").innerHTML = "The sum of the frequencies is always equal to the sample size (n)."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    
    var lower = document.getElementById("lower").value
    var upper = document.getElementById("upper").value
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    
    var classwidth = upper - lower + 1;
    
    var value1 = parseFloat(lower);
    var value2 = parseFloat(upper);
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    
    var i = 0
    while (maxvalue > value2 - classwidth) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
        i += 1
    }
    
    var end = i;
    
    var quants = [];
    for (var i=0; i<end; i++) {
        quants[i] = each.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    var table = "<tr style='border-bottom: thin solid'><td>$\\text{Class}$</td><td>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    for (var r = 0; r < end; r++){
        table += "<tr>";
        table += "<td>$" + classlimits[r] + "$</td>";
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
    document.getElementById("formulatext").innerHTML = "$\\text{Relative Frequency} = \\dfrac{\\text{Frequency}}{n}$"
    document.getElementById("explanationtext").innerHTML = "The sum of the relative frequencies is always equal to 1."
    $("#desrelative").show(); $("#exprelative").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr style='border-bottom: thin solid'><td><br>$\\text{Class}$</td><td><br>$\\text{Frequency}$</td><td>$\\text{Relative}$ <br> $\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$\\text{" + eachonesort[r] + "}$</td>";
        table += "<td>$" + counts[r] + "$</td>";
        table += "<td>$" + counts[r]+ "/" + tot + "=" + parseFloat(relfreq[r].toFixed(3)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$"+ tot +"$</td><td>$1$</td></tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    MathJax.typeset();
}

function relativequant(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A relative frequency distribution is a table showing the proportion of items in each class."
    document.getElementById("formulatext").innerHTML = "$\\text{Relative Frequency} = \\dfrac{\\text{Frequency}}{n}$"
    document.getElementById("explanationtext").innerHTML = "The sum of the relative frequencies is always equal to 1."
    $("#desrelative").show(); $("#exprelative").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr style='border-bottom: thin solid'><td><br>$\\text{Class}$</td><td><br>$\\text{Frequency}$</td><td>$\\text{Relative}$<br>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    
    var lower = document.getElementById("lower").value
    var upper = document.getElementById("upper").value
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    
    var classwidth = upper - lower + 1;
    
    var value1 = parseFloat(lower);
    var value2 = parseFloat(upper);
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    
    var i = 0
    while (maxvalue > value2 - classwidth) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
        i += 1
    }
    
    var end = i;
    
    var quants = [];
    for (var i=0; i<end; i++) {
        quants[i] = each.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    var rel = quants.map( function(value) {
        return value / tot;
    } );
    
    for (var r = 0; r < end; r++){
        table += "<tr>";
        table += "<td>$" + classlimits[r] + "$</td>";
        table += "<td>$" + quants[r] + "$</td>";
        table += "<td>$" + quants[r]+ "/" + tot + "=" + parseFloat(rel[r].toFixed(3)) + "$</td>";
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
    document.getElementById("formulatext").innerHTML = "$\\text{Percent Frequency} = \\text{Relative Frequency} \\times 100$"
    document.getElementById("explanationtext").innerHTML = "The sum of the percent frequencies is always equal to 100."
    $("#despercent").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr style='border-bottom: thin solid'><td><br>$\\text{Class}$</td><td>$\\text{Relative}$<br>$\\text{Frequency}$</td><td>$\\text{Percent}$<br>$\\text{Frequency}$</td></tr>";
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
    document.getElementById("formulatext").innerHTML = "$\\text{Percent Frequency} = \\text{Relative Frequency} \\times 100$"
    document.getElementById("explanationtext").innerHTML = "The sum of the percent frequencies is always equal to 100."
    $("#despercent").show();
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr style='border-bottom: thin solid'><td><br>$\\text{Class}$</td><td>$\\text{Relative}$<br>$\\text{Frequency}$</td><td>$\\text{Percent}$<br>$\\text{Frequency}$</td></tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    var perfreq = relfreq.map( function(value) {
        return value * 100;
    } );
    
    var lower = document.getElementById("lower").value
    var upper = document.getElementById("upper").value
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    
    var classwidth = upper - lower + 1;
    
    var value1 = parseFloat(lower);
    var value2 = parseFloat(upper);
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    
    var i = 0
    while (maxvalue > value2 - classwidth) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
        i += 1
    }
    
    var end = i;
    
    var quants = [];
    for (var i=0; i<end; i++) {
        quants[i] = each.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    var rel = quants.map( function(value) {
        return value / tot;
    } );
    
    var per = rel.map( function(value) {
        return value * 100;
    } );
    
    for (var r = 0; r < end; r++){
        table += "<tr>";
        table += "<td>$" + classlimits[r] + "$</td>";
        table += "<td>$" + parseFloat(rel[r].toFixed(3)) + "$</td>";
        table += "<td>$" + parseFloat(rel[r].toFixed(3)) + "\\times 100 = "+ parseFloat(per[r].toFixed(1)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\text{Total}$</td><td>$1$</td><td>$100$</td></tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table>"
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
    
    if (len == 2) {
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
            [eachonesort[0], counts[0]],
            [eachonesort[1], counts[1]],
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
    } else if (len == 3) {
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
            [eachonesort[0], counts[0]],
            [eachonesort[1], counts[1]],
            [eachonesort[2], counts[2]],
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
    } else if (len == 4) {
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
            [eachonesort[0], counts[0]],
            [eachonesort[1], counts[1]],
            [eachonesort[2], counts[2]],
            [eachonesort[3], counts[3]],
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
    } else if (len == 5) {
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
            [eachonesort[0], counts[0]],
            [eachonesort[1], counts[1]],
            [eachonesort[2], counts[2]],
            [eachonesort[3], counts[3]],
            [eachonesort[4], counts[4]],
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
    } else if (len == 6) {
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
            [eachonesort[0], counts[0]],
            [eachonesort[1], counts[1]],
            [eachonesort[2], counts[2]],
            [eachonesort[3], counts[3]],
            [eachonesort[4], counts[4]],
            [eachonesort[5], counts[5]],
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
    } else if (len == 7) {
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
            [eachonesort[0], counts[0]],
            [eachonesort[1], counts[1]],
            [eachonesort[2], counts[2]],
            [eachonesort[3], counts[3]],
            [eachonesort[4], counts[4]],
            [eachonesort[5], counts[5]],
            [eachonesort[6], counts[6]],
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
    } else if (len == 8) {
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
            [eachonesort[0], counts[0]],
            [eachonesort[1], counts[1]],
            [eachonesort[2], counts[2]],
            [eachonesort[3], counts[3]],
            [eachonesort[4], counts[4]],
            [eachonesort[5], counts[5]],
            [eachonesort[6], counts[6]],
            [eachonesort[7], counts[7]],
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
    } else if (len == 9) {
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
            [eachonesort[0], counts[0]],
            [eachonesort[1], counts[1]],
            [eachonesort[2], counts[2]],
            [eachonesort[3], counts[3]],
            [eachonesort[4], counts[4]],
            [eachonesort[5], counts[5]],
            [eachonesort[6], counts[6]],
            [eachonesort[7], counts[7]],
            [eachonesort[8], counts[8]],
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
    } else if (len == 10) {
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
            [eachonesort[0], counts[0]],
            [eachonesort[1], counts[1]],
            [eachonesort[2], counts[2]],
            [eachonesort[3], counts[3]],
            [eachonesort[4], counts[4]],
            [eachonesort[5], counts[5]],
            [eachonesort[6], counts[6]],
            [eachonesort[7], counts[7]],
            [eachonesort[8], counts[8]],
            [eachonesort[9], counts[9]],
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
    }
    
    //document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"

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
    document.getElementById("formulatext").innerHTML = "In a pie chart, the circle is divided according to the percent frequencies of each class."
    document.getElementById("explanationtext").innerHTML = "Pie charts can also be made using relative frequency distributions."
    var str = document.getElementById("values").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var tot = sum(counts);
    var table = "<tr style='border-bottom: thin solid'><td><br>$\\text{Class}$</td><td>$\\text{Percent}$<br>$\\text{Frequency}$</td></tr>";
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
    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      
      var myArray = [['Class', 'Frequency'], [eachonesort[0], counts[0]],[eachonesort[1], counts[1]], [eachonesort[2], counts[2]], [eachonesort[3], counts[3]], [eachonesort[4], counts[4]], [eachonesort[5], counts[5]], [eachonesort[6], counts[6]], [eachonesort[7], counts[7]], [eachonesort[8], counts[8]], [eachonesort[9], counts[9]]]

      function drawChart() {

        var data = google.visualization.arrayToDataTable(myArray);

        var chart = new google.visualization.PieChart(document.getElementById('charts'));

        chart.draw(data);
      }
    
    //document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"

    MathJax.typeset();

}

function histogram(){
    $("#firstclass").hide();
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
    document.getElementById("explanationtext").innerHTML = "In a histogram, a bar is drawn to the frequency for eachh class."
    var str = document.getElementById("values").value;
    var each = str.split(","); 
    var eachnums = each.map(function(v) {
  		return parseInt(v, 10);
    });
    var lenn = eachnums.length
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
    
    if (lenn == 5) {
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Value'],
              [eachnums[0]],
              [eachnums[1]],
              [eachnums[2]],
              [eachnums[3]],
              [eachnums[4]]
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
    } else if (lenn == 6) {
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
              [eachnums[5]]
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
    } else if (lenn == 7) {
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
              [eachnums[6]]
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
    } else if (lenn == 8) {
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
              [eachnums[7]]
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
    } else if (lenn == 9) {
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
              [eachnums[8]]
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
    } else if (lenn == 10) {
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
    } else if (lenn == 11) {
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
              [eachnums[9]],
              [eachnums[10]]
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
    } else if (lenn == 12) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]]
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
    } else if (lenn == 13) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]]
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
    } else if (lenn == 14) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]]
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
    } else if (lenn == 15) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]]
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
    } else if (lenn == 16) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]]
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
    } else if (lenn == 17) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]]
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
    } else if (lenn == 18) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]]
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
    } else if (lenn == 19) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]]
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
    } else if (lenn == 20) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]]
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
    } else if (lenn == 21) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]],
              [eachnums[20]]
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
    } else if (lenn == 22) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]],
              [eachnums[20]],
              [eachnums[21]]
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
    } else if (lenn == 23) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]],
              [eachnums[20]],
              [eachnums[21]],
              [eachnums[22]]
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
    } else if (lenn == 24) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]],
              [eachnums[20]],
              [eachnums[21]],
              [eachnums[22]],
              [eachnums[23]]
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
    } else if (lenn == 25) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]],
              [eachnums[20]],
              [eachnums[21]],
              [eachnums[22]],
              [eachnums[23]],
              [eachnums[24]]
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
    } else if (lenn == 26) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]],
              [eachnums[20]],
              [eachnums[21]],
              [eachnums[22]],
              [eachnums[23]],
              [eachnums[24]],
              [eachnums[25]]
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
    } else if (lenn == 27) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]],
              [eachnums[20]],
              [eachnums[21]],
              [eachnums[22]],
              [eachnums[23]],
              [eachnums[24]],
              [eachnums[25]],
              [eachnums[26]]
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
    } else if (lenn == 28) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]],
              [eachnums[20]],
              [eachnums[21]],
              [eachnums[22]],
              [eachnums[23]],
              [eachnums[24]],
              [eachnums[25]],
              [eachnums[26]],
              [eachnums[27]]
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
    } else if (lenn == 29) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]],
              [eachnums[20]],
              [eachnums[21]],
              [eachnums[22]],
              [eachnums[23]],
              [eachnums[24]],
              [eachnums[25]],
              [eachnums[26]],
              [eachnums[27]],
              [eachnums[28]]
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
    } else if (lenn == 30) {
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
              [eachnums[9]],
              [eachnums[10]],
              [eachnums[11]],
              [eachnums[12]],
              [eachnums[13]],
              [eachnums[14]],
              [eachnums[15]],
              [eachnums[16]],
              [eachnums[17]],
              [eachnums[18]],
              [eachnums[19]],
              [eachnums[20]],
              [eachnums[21]],
              [eachnums[22]],
              [eachnums[23]],
              [eachnums[24]],
              [eachnums[25]],
              [eachnums[26]],
              [eachnums[27]],
              [eachnums[28]],
              [eachnums[29]]
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
    }
}


function boxplot(){
    $("#firstclass").hide();
    var str = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null;
    if (isnum == false) {
        document.getElementById("output").innerHTML = "Box Plots require <span class='examplelink' onclick='examplexvalues2()'>quantitative data</span>."
    } else {
        calcbox()
    }
}

function calcbox() {
    $("#explanation").show(); $("#charts").show();
    document.getElementById("explanationtext").innerHTML = "In a scatter diagram, a point is drawn on the graph for each pair of x and y values."
    
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);var len = each.length;
    var largest = Math.max.apply(null,each); var smallest = Math.min.apply(null,each)
    var eachsort = each.sort();
    
    var eachsort2 = each.sort(function(a,b) {
        return a - b;
    });
    var mid = (len-1)/2; var midr = len/2;  var midl = (len-2)/2;
    var valm = each[mid]; var valr = each[midr]; var vall = each[midl];
    var sumlr = vall + valr; var avelr = (vall + valr)/2;
    if (len % 2 != 0){
         var medianans = valm
    }else{
        var medianans = avelr
    }
    
    var indxval25 = (25/100)*len; var indxrnd25 = Math.ceil(indxval25);
    var indxval75 = (75/100)*len; var indxrnd75 = Math.ceil(indxval75);
    var val25indx = eachsort[indxval25-1]; var val25indxplus1 = eachsort[indxval25]; var val25avg = (val25indx + val25indxplus1) / 2;
    var val75indx = eachsort[indxval75-1]; var val75indxplus1 = eachsort[indxval75]; var val75avg = (val75indx + val75indxplus1) / 2;
    var indxint25 = Number.isInteger(indxval25); var indxint75 = Number.isInteger(indxval75);
    var answr25 = eachsort[indxrnd25-1]; var answr75 = eachsort[indxrnd75-1];
    var ansiqr1 = val75avg - val25avg; var ansiqr2 = answr75 - val25avg; var ansiqr3 = val75avg - answr25; var ansiqr4 = answr75 - answr25;
    if (indxint25 && indxint75){
        
        google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['x', smallest, val25avg, val75avg, largest]
              // Treat first row as data as well.
            ], true);

            var options = {
              legend:'none'
            };

            var chart = new google.visualization.CandlestickChart(document.getElementById('charts'));

            chart.draw(data, options);
          }
        
    } else if (indxint25 && !indxint75){
        
        google.charts.load('current', {'packages':['corechart']});
          google.charts.setOnLoadCallback(drawChart);

          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['x', smallest, val25avg, answr75, largest]
              // Treat first row as data as well.
            ], true);

            var options = {
              legend:'none'
            };

            var chart = new google.visualization.CandlestickChart(document.getElementById('charts'));

            chart.draw(data, options);
          }
        
    } else if (!indxint25 && indxint75){
        
        google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', smallest, answr25, val75avg, largest]
          // Treat first row as data as well.
        ], true);

        var options = {
          legend:'none'
        };

        var chart = new google.visualization.CandlestickChart(document.getElementById('charts'));

        chart.draw(data, options);
      }
        
    }
    else{
        
        google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', smallest, answr25, answr75, largest]
          // Treat first row as data as well.
        ], true);

        var options = {
          legend:'none'
        };

        var chart = new google.visualization.CandlestickChart(document.getElementById('charts'));

        chart.draw(data, options);
      }
        
    }
    
    //if (indxint25 && indxint75){
      //  document.getElementById("output").innerHTML = "$$ \\text{Five-Number Summary:}$$ $$ \\begin{align} \\text{Minimum} &= "+smallest+" \\\\ \\text{1st Quartile} &= "+val25avg+" \\\\ \\text{Median} &= "+medianans+" \\\\ \\text{3rd Quartile} &= "+val75avg+" \\\\ \\text{Maximum} &= "+largest+" \\end{align} $$"
    //} else if (indxint25 && !indxint75){
    //    document.getElementById("output").innerHTML = "$$ \\text{Five-Number Summary:}$$ $$ \\begin{align} \\text{Minimum} &= "+smallest+" \\\\ \\text{1st Quartile} &= "+val25avg+" \\\\ \\text{Median} &= "+medianans+" \\\\ \\text{3rd Quartile} &= "+answr75+" \\\\ \\text{Maximum} &= "+largest+" \\end{align} $$"
    //} else if (!indxint25 && indxint75){
    //    document.getElementById("output").innerHTML = "$$ \\text{Five-Number Summary:}$$ $$ \\begin{align} \\text{Minimum} &= "+smallest+" \\\\ \\text{1st Quartile} &= "+answr25+" \\\\ \\text{Median} &= "+medianans+" \\\\ \\text{3rd Quartile} &= "+val75avg+" \\\\ \\text{Maximum} &= "+largest+" \\end{align} $$"
    //}
    //else{
    //    document.getElementById("output").innerHTML = "$$ \\text{Five-Number Summary:}$$ $$ \\begin{align} \\text{Minimum} &= "+smallest+" \\\\ \\text{1st Quartile} &= "+answr25+" \\\\ \\text{Median} &= "+medianans+" \\\\ \\text{3rd Quartile} &= "+answr75+" \\\\ \\text{Maximum} &= "+largest+" \\end{align} $$"
    //}

    MathJax.typeset();
    
}


function cumulative(){
    $("#cumulative").show(); $("#blankx").hide();
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



function crosstabulation(){
    $("#input1").hide(); $("#input2").show(); $("#label2").show(); $("#label1").hide(); $("#label3").hide(); 
    var str = document.getElementById("values").value; var str2 = document.getElementById("values").value;
    var str1 = str.replace(/\s/g, ''); var str22 = str2.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null; var isnum2 = str22.match(/^[0-9+,]+$/) != null;
    if (isnum == false && isnum2 == false) {
        $("#firstclasscross").hide();
    } else if (isnum == false && isnum2 == true) {
        $("#firstclasscross").show();
    }  
}

function calccross(){
    $("#rowcol").show();
    var str = document.getElementById("values").value; var str2 = document.getElementById("values2").value;
    var str1 = str.replace(/\s/g, ''); var str22 = str2.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null; var isnum2 = str22.match(/^[0-9+,]+$/) != null;
    if (isnum == false && isnum2 == false) {
        calccross1()
    } else if (isnum == false && isnum2 == true) {
        calccross2()
    } else if (isnum == true && isnum2 == false) {
        calccross3()
    } else if (isnum == true && isnum2 == true) {
        calccross4()
    }  
}

function calccross1(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A crosstabulation is a table summarizing data for two variables."
    document.getElementById("formulatext").innerHTML = "Count the number of observations that fall into each pair of classes."
    document.getElementById("explanationtext").innerHTML = "Crosstabulations work for two quantitative, two qualitative and one qualitative/one quantitative variables."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    
    
    
    
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;

    
    
    
    
    
    //var counts = countem(each)
    var rows = len; var cols = len2;
    //var tot = sum(counts);
    
    let pairs0 = [];
    for (var i = 0; i < eachonesort.length; i++) {
      for (var j = 0; j < eachonesort2.length; j++) {
        pairs0.push(eachonesort[i] + eachonesort2[j]);
      }
    }

    let pairs = [];
    for (var i = 0; i < each.length; i++) {
        pairs.push(each[i] + each2[i]);
    }
    
    var x = new Array(pairs0.length).fill(0);

    for (var i = 0; i < pairs0.length; i++) {
        for (var j = 0; j < pairs.length; j++) {
        if (pairs0[i]==pairs[j]) {
            x[i]++;
        }
      }
    }
    
    
    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$\\text{" + eachonesort2[s] + "}$</td>";
    }  
    
    table = table + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$\\text{" + eachonesort[r] + "}$</td>";
        for (var t = 0; t < cols; t++){
            table += "<td>$" + x[t+h] + "$</td>";
            rowtot += x[t+h] 
        }
        table += "<td style='border-left: thin solid'>$" + rowtot + "$</td></tr>"; 
        coltot0 += x[h]; coltot1 += x[h+1]; coltot2 += x[h+2]; coltot3 += x[h+3]; coltot4 += x[h+4];
        coltot5 += x[h+5]; coltot6 += x[h+6]; coltot7 += x[h+7]; coltot8 += x[h+8]; coltot9 += x[h+9];
        h += len2
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table = table + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table = table + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";
    
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    
    MathJax.typeset();
}

function calccross2(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A crosstabulation is a table summarizing data for two variables."
    document.getElementById("formulatext").innerHTML = "Count the number of observations that fall into each pair of classes."
    document.getElementById("explanationtext").innerHTML = "Crosstabulations work for two quantitative, two qualitative and one qualitative/one quantitative variables."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    
    
    //var counts = countem(each)
    var rows = len; 
    //var tot = sum(counts);
    
    var lower = document.getElementById("lowery").value
    var upper = document.getElementById("uppery").value
    
    var maxvalue = Math.max.apply(Math, each2);
    var minvalue = Math.min.apply(Math, each2);
    
    var classwidth = upper - lower + 1;
    
    var value1 = parseFloat(lower);
    var value2 = parseFloat(upper);
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    
    var i = 0
    while (maxvalue > value2 - classwidth) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
        i += 1
    }
    
    var cols = classlimits.length;
    var end = i;
    
    var quants = [];
    for (var i=0; i<end; i++) {
        quants[i] = each2.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    
    
    
    var rowvals = [];
    for (var i=0; i<rows; i++) {
        for (var j=0; j<each.length; j++) {
            if (eachonesort[i] == each[j]) {
                rowvals.push(each2[j])
            }
        }
    }
    
    var rowvals0 = []; var rowvals1 = []; var rowvals2 = []; var rowvals3 = []; var rowvals4 = []; 
    var rowvals5 = []; var rowvals6 = []; var rowvals7 = []; var rowvals8 = []; var rowvals9 = [];
    for (var j=0; j<each.length; j++) {
        if (eachonesort[0] == each[j]) {
            rowvals0.push(each2[j])
        } else if (eachonesort[1] == each[j]) {
            rowvals1.push(each2[j])
        } else if (eachonesort[2] == each[j]) {
            rowvals2.push(each2[j])
        } else if (eachonesort[3] == each[j]) {
            rowvals3.push(each2[j])
        } else if (eachonesort[4] == each[j]) {
            rowvals4.push(each2[j])
        } else if (eachonesort[5] == each[j]) {
            rowvals5.push(each2[j])
        } else if (eachonesort[6] == each[j]) {
            rowvals6.push(each2[j])
        } else if (eachonesort[7] == each[j]) {
            rowvals7.push(each2[j])
        } else if (eachonesort[8] == each[j]) {
            rowvals8.push(each2[j])
        } else if (eachonesort[9] == each[j]) {
            rowvals9.push(each2[j])
        }
    }
    

    var quants0 = []; var quants1 = []; var quants2 = []; var quants3 = []; var quants4 = [];
    var quants5 = []; var quants6 = []; var quants7 = []; var quants8 = []; var quants9 = [];
    for (var i=0; i<cols; i++) {
        quants0[i] = rowvals0.filter(inRange, [limits1[i], limits2[i]]).length
        quants1[i] = rowvals1.filter(inRange, [limits1[i], limits2[i]]).length
        quants2[i] = rowvals2.filter(inRange, [limits1[i], limits2[i]]).length
        quants3[i] = rowvals3.filter(inRange, [limits1[i], limits2[i]]).length
        quants4[i] = rowvals4.filter(inRange, [limits1[i], limits2[i]]).length
        quants5[i] = rowvals5.filter(inRange, [limits1[i], limits2[i]]).length
        quants6[i] = rowvals6.filter(inRange, [limits1[i], limits2[i]]).length
        quants7[i] = rowvals7.filter(inRange, [limits1[i], limits2[i]]).length
        quants8[i] = rowvals8.filter(inRange, [limits1[i], limits2[i]]).length
        quants9[i] = rowvals9.filter(inRange, [limits1[i], limits2[i]]).length
    }

    //var quants = [...quants0,...quants1,...quants2,...quants3,...quants4,...quants5,...quants6,...quants7,...quants8,...quants9]
    
    var quants = []; Array.prototype.push.apply(quants, quants0); 
    Array.prototype.push.apply(quants, quants1); Array.prototype.push.apply(quants, quants2); Array.prototype.push.apply(quants, quants3); 
    Array.prototype.push.apply(quants, quants4); Array.prototype.push.apply(quants, quants5);  Array.prototype.push.apply(quants, quants6);
    Array.prototype.push.apply(quants, quants7); Array.prototype.push.apply(quants, quants8);  Array.prototype.push.apply(quants, quants9);
    
    let pairs0 = [];
    for (var i = 0; i < eachonesort.length; i++) {
      for (var j = 0; j < classlimits.length; j++) {
        pairs0.push(eachonesort[i] + classlimits[j]);
      }
    }

    let pairs = [];
    for (var i = 0; i < each.length; i++) {
        pairs.push(each[i] + each2[i]);
    }
    
    var x = new Array(pairs0.length).fill(0);

    for (var i = 0; i < pairs0.length; i++) {
        for (var j = 0; j < pairs.length; j++) {
            if (pairs0[i]==pairs[j]) {
                x[i]++;
        }
      }
    }
    
    
    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$" + classlimits[s] + "$</td>";
    }  
    
    table = table + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$\\text{" + eachonesort[r] + "}$</td>";
        for (var t = 0; t < cols; t++){
            table += "<td>$" + quants[t+h] + "$</td>";
            rowtot += quants[t+h] 
        }
        table += "<td style='border-left: thin solid'>$" + rowtot + "$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table = table + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table = table + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";
    
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    
    MathJax.typeset();
}

function calccross3(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A crosstabulation is a table summarizing data for two variables."
    document.getElementById("formulatext").innerHTML = "Count the number of observations that fall into each pair of classes."
    document.getElementById("explanationtext").innerHTML = "Crosstabulations work for two quantitative, two qualitative and one qualitative/one quantitative variables."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    
    
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    
    
    
    //var counts = countem(each)
    //var tot = sum(counts);
    
    var lower = document.getElementById("lowerx").value
    var upper = document.getElementById("upperx").value
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    
    var classwidth = upper - lower + 1;
    
    var value1 = parseFloat(lower);
    var value2 = parseFloat(upper);
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    
    var i = 0
    while (maxvalue > value2 - classwidth) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
        i += 1
    }
    
    var rows = classlimits.length; 
    var cols = eachonesort2.length
    var end = i;
    
    var quants = [];
    for (var i=0; i<end; i++) {
        quants[i] = each2.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    
    
    
    var rowvals = [];
    for (var i=0; i<rows; i++) {
        for (var j=0; j<each.length; j++) {
            if (eachonesort[i] == each[j]) {
                rowvals.push(each2[j])
            }
        }
    }
    
    var rowvals0 = []; var rowvals1 = []; var rowvals2 = []; var rowvals3 = []; var rowvals4 = []; 
    var rowvals5 = []; var rowvals6 = []; var rowvals7 = []; var rowvals8 = []; var rowvals9 = [];
    for (var j=0; j<each.length; j++) {
        if (each[j] >= limits1[0] && each[j] <= limits2[0]) {
            rowvals0.push(each2[j])
        } else if (each[j] >= limits1[1] && each[j] <= limits2[1]) {
            rowvals1.push(each2[j])
        } else if (each[j] >= limits1[2] && each[j] <= limits2[2]) {
            rowvals2.push(each2[j])
        } else if (each[j] >= limits1[3] && each[j] <= limits2[3]) {
            rowvals3.push(each2[j])
        } else if (each[j] >= limits1[4] && each[j] <= limits2[4]) {
            rowvals4.push(each2[j])
        } else if (each[j] >= limits1[5] && each[j] <= limits2[5]) {
            rowvals5.push(each2[j])
        } else if (each[j] >= limits1[6] && each[j] <= limits2[6]) {
            rowvals6.push(each2[j])
        } else if (each[j] >= limits1[7] && each[j] <= limits2[7]) {
            rowvals7.push(each2[j])
        } else if (each[j] >= limits1[8] && each[j] <= limits2[8]) {
            rowvals8.push(each2[j])
        } else if (each[j] >= limits1[9] && each[j] <= limits2[9]) {
            rowvals9.push(each2[j])
        }
    }
    
    var quants0 = new Array(cols).fill(0); var quants1 = new Array(cols).fill(0);
    var quants2 = new Array(cols).fill(0); var quants3 = new Array(cols).fill(0);
    var quants4 = new Array(cols).fill(0); var quants5 = new Array(cols).fill(0);
    var quants6 = new Array(cols).fill(0); var quants7 = new Array(cols).fill(0);
    var quants8 = new Array(cols).fill(0); var quants9 = new Array(cols).fill(0);

    for (var i=0; i<cols; i++) {
        for (var j=0; j<rowvals0.length; j++) {
            if (eachonesort2[i] == rowvals0[j]) {
                quants0[i]++
            }
        }
        for (var j=0; j<rowvals1.length; j++) {
            if (eachonesort2[i] == rowvals1[j]) {
                quants1[i]++
            }
        }
        for (var j=0; j<rowvals2.length; j++) {
            if (eachonesort2[i] == rowvals2[j]) {
                quants2[i]++
            }
        }
        for (var j=0; j<rowvals3.length; j++) {
            if (eachonesort2[i] == rowvals3[j]) {
                quants3[i]++
            }
        }
        for (var j=0; j<rowvals4.length; j++) {
            if (eachonesort2[i] == rowvals4[j]) {
                quants4[i]++
            }
        }
        for (var j=0; j<rowvals5.length; j++) {
            if (eachonesort2[i] == rowvals5[j]) {
                quants5[i]++
            }
        }
        for (var j=0; j<rowvals6.length; j++) {
            if (eachonesort2[i] == rowvals6[j]) {
                quants6[i]++
            }
        }
        for (var j=0; j<rowvals7.length; j++) {
            if (eachonesort2[i] == rowvals7[j]) {
                quants7[i]++
            }
        }
        for (var j=0; j<rowvals8.length; j++) {
            if (eachonesort2[i] == rowvals8[j]) {
                quants8[i]++
            }
        }
        for (var j=0; j<rowvals9.length; j++) {
            if (eachonesort2[i] == rowvals9[j]) {
                quants9[i]++
            }
        }

    }

    //var quants = [...quants0,...quants1,...quants2,...quants3,...quants4,...quants5,...quants6,...quants7,...quants8,...quants9]
    var quants = []; Array.prototype.push.apply(quants, quants0); 
    Array.prototype.push.apply(quants, quants1); Array.prototype.push.apply(quants, quants2); Array.prototype.push.apply(quants, quants3); 
    Array.prototype.push.apply(quants, quants4); Array.prototype.push.apply(quants, quants5);  Array.prototype.push.apply(quants, quants6);
    Array.prototype.push.apply(quants, quants7); Array.prototype.push.apply(quants, quants8);  Array.prototype.push.apply(quants, quants9);
    
    let pairs0 = [];
    for (var i = 0; i < eachonesort.length; i++) {
      for (var j = 0; j < classlimits.length; j++) {
        pairs0.push(eachonesort[i] + classlimits[j]);
      }
    }

    let pairs = [];
    for (var i = 0; i < each.length; i++) {
        pairs.push(each[i] + each2[i]);
    }
    
    var x = new Array(pairs0.length).fill(0);

    for (var i = 0; i < pairs0.length; i++) {
        for (var j = 0; j < pairs.length; j++) {
            if (pairs0[i]==pairs[j]) {
                x[i]++;
        }
      }
    }
    
    
    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$\\text{" + eachonesort2[s] + "}$</td>";
    }  
    
    table = table + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$" + classlimits[r] + "$</td>";
        for (var t = 0; t < cols; t++){
            table += "<td>$" + quants[t+h] + "$</td>";
            rowtot += quants[t+h] 
        }
        table += "<td style='border-left: thin solid'>$" + rowtot + "$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table = table + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table = table + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";
    
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    
    MathJax.typeset();
}

function calccross4(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A crosstabulation is a table summarizing data for two variables."
    document.getElementById("formulatext").innerHTML = "Count the number of observations that fall into each pair of classes."
    document.getElementById("explanationtext").innerHTML = "Crosstabulations work for two quantitative, two qualitative and one qualitative/one quantitative variables."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    //var counts = countem(each)
    //var tot = sum(counts);
    
    var lowerx = document.getElementById("lowerx").value; var lowery = document.getElementById("lowery").value
    var upperx = document.getElementById("upperx").value; var uppery = document.getElementById("uppery").value
    
    var maxvaluex = Math.max.apply(Math, each); var maxvaluey = Math.max.apply(Math, each2);
    var minvaluex = Math.min.apply(Math, each); var minvaluey = Math.min.apply(Math, each2);
    
    var classwidthx = upperx - lowerx + 1; var classwidthy = uppery - lowery + 1;
    
    var value1x = parseFloat(lowerx); var value1y = parseFloat(lowerx);
    var value2x = parseFloat(upperx); var value2y = parseFloat(uppery);
    var classlimitsx = []; var classlimitsy = [];
    var limits1x = []; var limits1y = [];
    var limits2x = []; var limits2y = [];

    var i = 0
    while (maxvaluex > value2x - classwidthx) {
        classlimitsx[i] = value1x + "-" + value2x
        limits1x[i] = value1x;
        limits2x[i] = value2x;
        value1x += classwidthx;
        value2x += classwidthx;
        i += 1
    }
    
    var j = 0
    while (maxvaluey > value2y - classwidthy) {
        classlimitsy[j] = value1y + "-" + value2y
        limits1y[j] = value1y;
        limits2y[j] = value2y;
        value1y += classwidthy;
        value2y += classwidthy;
        j += 1
    }
    
    var rows = classlimitsx.length; 
    var cols = classlimitsy.length
    var endx = i; var endy = j;
    
    var rowvals0 = []; var rowvals1 = []; var rowvals2 = []; var rowvals3 = []; var rowvals4 = []; 
    var rowvals5 = []; var rowvals6 = []; var rowvals7 = []; var rowvals8 = []; var rowvals9 = [];
    for (var j=0; j<each.length; j++) {
        if (each[j] >= limits1x[0] && each[j] <= limits2x[0]) {
            rowvals0.push(each2[j])
        } else if (each[j] >= limits1x[1] && each[j] <= limits2x[1]) {
            rowvals1.push(each2[j])
        } else if (each[j] >= limits1x[2] && each[j] <= limits2x[2]) {
            rowvals2.push(each2[j])
        } else if (each[j] >= limits1x[3] && each[j] <= limits2x[3]) {
            rowvals3.push(each2[j])
        } else if (each[j] >= limits1x[4] && each[j] <= limits2x[4]) {
            rowvals4.push(each2[j])
        } else if (each[j] >= limits1x[5] && each[j] <= limits2x[5]) {
            rowvals5.push(each2[j])
        } else if (each[j] >= limits1x[6] && each[j] <= limits2x[6]) {
            rowvals6.push(each2[j])
        } else if (each[j] >= limits1x[7] && each[j] <= limits2x[7]) {
            rowvals7.push(each2[j])
        } else if (each[j] >= limits1x[8] && each[j] <= limits2x[8]) {
            rowvals8.push(each2[j])
        } else if (each[j] >= limits1x[9] && each[j] <= limits2x[9]) {
            rowvals9.push(each2[j])
        }
    }
    
    var quants0 = []; var quants1 = []; var quants2 = []; var quants3 = []; var quants4 = [];
    var quants5 = []; var quants6 = []; var quants7 = []; var quants8 = []; var quants9 = [];
    for (var i=0; i<cols; i++) {
        quants0[i] = rowvals0.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants1[i] = rowvals1.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants2[i] = rowvals2.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants3[i] = rowvals3.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants4[i] = rowvals4.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants5[i] = rowvals5.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants6[i] = rowvals6.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants7[i] = rowvals7.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants8[i] = rowvals8.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants9[i] = rowvals9.filter(inRange, [limits1y[i], limits2y[i]]).length
    }

    //var quants = [...quants0,...quants1,...quants2,...quants3,...quants4,...quants5,...quants6,...quants7,...quants8,...quants9]
    var quants = []; Array.prototype.push.apply(quants, quants0); 
    Array.prototype.push.apply(quants, quants1); Array.prototype.push.apply(quants, quants2); Array.prototype.push.apply(quants, quants3); 
    Array.prototype.push.apply(quants, quants4); Array.prototype.push.apply(quants, quants5);  Array.prototype.push.apply(quants, quants6);
    Array.prototype.push.apply(quants, quants7); Array.prototype.push.apply(quants, quants8);  Array.prototype.push.apply(quants, quants9);

    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$" + classlimitsy[s] + "$</td>";
    }  
    
    table = table + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$" + classlimitsx[r] + "$</td>";
        for (var t = 0; t < cols; t++){
            table += "<td>$" + quants[t+h] + "$</td>";
            rowtot += quants[t+h] 
        }
        table += "<td style='border-left: thin solid'>$" + rowtot + "$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table = table + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table = table + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";
    
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table> <br>"
    
    MathJax.typeset();
}


function hideout2() {
    $("#output2").empty();
    $("#rowcol").show(); $("#rowcol2").hide(); $("#rowcol3").hide();
}

function rowpercent(){
    $("#input1").hide(); $("#input2").show(); $("#label2").show(); $("#label1").hide(); $("#label3").hide();
}

function calcrow(){
    $("#rowcol").hide(); $("#rowcol2").show(); $("#rowcol3").hide();
    var str = document.getElementById("values").value; var str2 = document.getElementById("values2").value;
    var str1 = str.replace(/\s/g, ''); var str22 = str2.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null; var isnum2 = str22.match(/^[0-9+,]+$/) != null;
    if (isnum == false && isnum2 == false) {
        calcrow1()
    } else if (isnum == false && isnum2 == true) {
        calcrow2()
    } else if (isnum == true && isnum2 == false) {
        calcrow3()
    } else if (isnum == true && isnum2 == true) {
        calcrow4()
    }  
}

function calcrow1(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "Row percetages are percent frequencies constructed using a crosstabulation."
    document.getElementById("formulatext").innerHTML = "$ \\text{Row Percentage} = \\dfrac{\\text{Frequency}}{\\text{Row Total}} \\times 100 $"
    document.getElementById("explanationtext").innerHTML = "Row percentages provide the percentage of a row belonging to a certain class."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    //var counts = countem(each)
    var rows = len; var cols = len2;
    //var tot = sum(counts);
    
    let pairs0 = [];
    for (var i = 0; i < eachonesort.length; i++) {
      for (var j = 0; j < eachonesort2.length; j++) {
        pairs0.push(eachonesort[i] + eachonesort2[j]);
      }
    }

    let pairs = [];
    for (var i = 0; i < each.length; i++) {
        pairs.push(each[i] + each2[i]);
    }
    
    let pairs2 = new Array(each.length).fill(0);
    
    for (var i = 0; i < each.length; i++) {
        pairs2[i] = each[i] + each2[i];
    }
    
    var x = new Array(pairs0.length).fill(0);

    for (var i = 0; i < pairs0.length; i++) {
        for (var j = 0; j < pairs.length; j++) {
        if (pairs0[i]==pairs[j]) {
            x[i]++;
        }
      }
    }

    var table0 = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table0 += "<td>$\\text{" + eachonesort2[s] + "}$</td>";
    }  
    
    table0 = table0 + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table0 += "<tr>";
        table0 += "<td style='border-right: thin solid'>$\\text{" + eachonesort[r] + "}$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += x[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table0 += "<td>$" + x[t+h] + "$</td>"; 
        }
        table0 += "<td style='border-left: thin solid'>$ " + rowtot + " $</td></tr>"; 
        coltot0 += x[h]; coltot1 += x[h+1]; coltot2 += x[h+2]; coltot3 += x[h+3]; coltot4 += x[h+4];
        coltot5 += x[h+5]; coltot6 += x[h+6]; coltot7 += x[h+7]; coltot8 += x[h+8]; coltot9 += x[h+9];
        h += len2
    } 
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table0 = table0 + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table0 += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table0 = table0 + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";

    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$\\text{" + eachonesort2[s] + "}$</td>";
    }  
    
    table = table + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$\\text{" + eachonesort[r] + "}$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += x[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table += "<td>$ \\dfrac{" + x[t+h] + "}{" + rowtot + "} \\times 100 = " + parseFloat(((x[t+h]/rowtot)*100).toFixed(2)) + " $</td>"; 
        }
        table += "<td style='border-left: thin solid'>$ 100 $</td></tr>"; 
        coltot0 += x[h]; coltot1 += x[h+1]; coltot2 += x[h+2]; coltot3 += x[h+3]; coltot4 += x[h+4];
        coltot5 += x[h+5]; coltot6 += x[h+6]; coltot7 += x[h+7]; coltot8 += x[h+8]; coltot9 += x[h+9];
        h += len2
    } 
    
    //document.getElementById("output").innerHTML = "<table>" + table0 + "</table><br>" + "<table>" + table + "</table>"
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table>"
    
    MathJax.typeset();
}

function calcrow2(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "Row percetages are percent frequencies constructed using a crosstabulation."
    document.getElementById("formulatext").innerHTML = "$ \\text{Row Percentage} = \\dfrac{\\text{Frequency}}{\\text{Row Total}} \\times 100 $"
    document.getElementById("explanationtext").innerHTML = "Row percentages provide the percentage of a row belonging to a certain class."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    //var counts = countem(each)
    var rows = len; 
    //var tot = sum(counts);
    
    var lower = document.getElementById("lowery").value
    var upper = document.getElementById("uppery").value
    
    var maxvalue = Math.max.apply(Math, each2);
    var minvalue = Math.min.apply(Math, each2);
    
    var classwidth = upper - lower + 1;
    
    var value1 = parseFloat(lower);
    var value2 = parseFloat(upper);
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    
    var i = 0
    while (maxvalue > value2 - classwidth) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
        i += 1
    }
    
    var cols = classlimits.length;
    var end = i;
    
    var quants = [];
    for (var i=0; i<end; i++) {
        quants[i] = each2.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    
    
    
    var rowvals = [];
    for (var i=0; i<rows; i++) {
        for (var j=0; j<each.length; j++) {
            if (eachonesort[i] == each[j]) {
                rowvals.push(each2[j])
            }
        }
    }
    
    var rowvals0 = []; var rowvals1 = []; var rowvals2 = []; var rowvals3 = []; var rowvals4 = []; 
    var rowvals5 = []; var rowvals6 = []; var rowvals7 = []; var rowvals8 = []; var rowvals9 = [];
    for (var j=0; j<each.length; j++) {
        if (eachonesort[0] == each[j]) {
            rowvals0.push(each2[j])
        } else if (eachonesort[1] == each[j]) {
            rowvals1.push(each2[j])
        } else if (eachonesort[2] == each[j]) {
            rowvals2.push(each2[j])
        } else if (eachonesort[3] == each[j]) {
            rowvals3.push(each2[j])
        } else if (eachonesort[4] == each[j]) {
            rowvals4.push(each2[j])
        } else if (eachonesort[5] == each[j]) {
            rowvals5.push(each2[j])
        } else if (eachonesort[6] == each[j]) {
            rowvals6.push(each2[j])
        } else if (eachonesort[7] == each[j]) {
            rowvals7.push(each2[j])
        } else if (eachonesort[8] == each[j]) {
            rowvals8.push(each2[j])
        } else if (eachonesort[9] == each[j]) {
            rowvals9.push(each2[j])
        }
    }
    

    var quants0 = []; var quants1 = []; var quants2 = []; var quants3 = []; var quants4 = [];
    var quants5 = []; var quants6 = []; var quants7 = []; var quants8 = []; var quants9 = [];
    for (var i=0; i<cols; i++) {
        quants0[i] = rowvals0.filter(inRange, [limits1[i], limits2[i]]).length
        quants1[i] = rowvals1.filter(inRange, [limits1[i], limits2[i]]).length
        quants2[i] = rowvals2.filter(inRange, [limits1[i], limits2[i]]).length
        quants3[i] = rowvals3.filter(inRange, [limits1[i], limits2[i]]).length
        quants4[i] = rowvals4.filter(inRange, [limits1[i], limits2[i]]).length
        quants5[i] = rowvals5.filter(inRange, [limits1[i], limits2[i]]).length
        quants6[i] = rowvals6.filter(inRange, [limits1[i], limits2[i]]).length
        quants7[i] = rowvals7.filter(inRange, [limits1[i], limits2[i]]).length
        quants8[i] = rowvals8.filter(inRange, [limits1[i], limits2[i]]).length
        quants9[i] = rowvals9.filter(inRange, [limits1[i], limits2[i]]).length
    }

    //var quants = [...quants0,...quants1,...quants2,...quants3,...quants4,...quants5,...quants6,...quants7,...quants8,...quants9]
    var quants = []; Array.prototype.push.apply(quants, quants0); 
    Array.prototype.push.apply(quants, quants1); Array.prototype.push.apply(quants, quants2); Array.prototype.push.apply(quants, quants3); 
    Array.prototype.push.apply(quants, quants4); Array.prototype.push.apply(quants, quants5);  Array.prototype.push.apply(quants, quants6);
    Array.prototype.push.apply(quants, quants7); Array.prototype.push.apply(quants, quants8);  Array.prototype.push.apply(quants, quants9);
    
    let pairs0 = [];
    for (var i = 0; i < eachonesort.length; i++) {
      for (var j = 0; j < classlimits.length; j++) {
        pairs0.push(eachonesort[i] + classlimits[j]);
      }
    }

    let pairs = [];
    for (var i = 0; i < each.length; i++) {
        pairs.push(each[i] + each2[i]);
    }
    
    var x = new Array(pairs0.length).fill(0);

    for (var i = 0; i < pairs0.length; i++) {
        for (var j = 0; j < pairs.length; j++) {
            if (pairs0[i]==pairs[j]) {
                x[i]++;
        }
      }
    }
    
    var table0 = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table0 += "<td>$" + classlimits[s] + "$</td>";
    }  
    
    table0 = table0 + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table0 += "<tr>";
        table0 += "<td style='border-right: thin solid'>$\\text{" + eachonesort[r] + "}$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += quants[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table0 += "<td>$" + quants[t+h] + "$</td>";
        }
        table0 += "<td style='border-left: thin solid'>$" + rowtot + "$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table0 = table0 + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table0 += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table0 = table0 + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";

    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$" + classlimits[s] + "$</td>";
    }  
    
    table = table + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$\\text{" + eachonesort[r] + "}$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += quants[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table += "<td>$ \\dfrac{" + quants[t+h] + "}{" + rowtot + "} \\times 100 = " + parseFloat((100*quants[t+h]/rowtot).toFixed(2)) + "$</td>";
        }
        table += "<td style='border-left: thin solid'>$100$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }

    //document.getElementById("output").innerHTML = "<table>" + table0 + "</table><br>" + "<table>" + table + "</table>"
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table>"
    
    MathJax.typeset();
}

function calcrow3(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "Row percetages are percent frequencies constructed using a crosstabulation."
    document.getElementById("formulatext").innerHTML = "$ \\text{Row Percentage} = \\dfrac{\\text{Frequency}}{\\text{Row Total}} \\times 100 $"
    document.getElementById("explanationtext").innerHTML = "Row percentages provide the percentage of a row belonging to a certain class."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    //var counts = countem(each)
    //var tot = sum(counts);
    
    var lower = document.getElementById("lowerx").value
    var upper = document.getElementById("upperx").value
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    
    var classwidth = upper - lower + 1;
    
    var value1 = parseFloat(lower);
    var value2 = parseFloat(upper);
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    
    var i = 0
    while (maxvalue > value2 - classwidth) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
        i += 1
    }
    
    var rows = classlimits.length; 
    var cols = eachonesort2.length
    var end = i;
    
    var quants = [];
    for (var i=0; i<end; i++) {
        quants[i] = each2.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    
    
    
    var rowvals = [];
    for (var i=0; i<rows; i++) {
        for (var j=0; j<each.length; j++) {
            if (eachonesort[i] == each[j]) {
                rowvals.push(each2[j])
            }
        }
    }
    
    var rowvals0 = []; var rowvals1 = []; var rowvals2 = []; var rowvals3 = []; var rowvals4 = []; 
    var rowvals5 = []; var rowvals6 = []; var rowvals7 = []; var rowvals8 = []; var rowvals9 = [];
    for (var j=0; j<each.length; j++) {
        if (each[j] >= limits1[0] && each[j] <= limits2[0]) {
            rowvals0.push(each2[j])
        } else if (each[j] >= limits1[1] && each[j] <= limits2[1]) {
            rowvals1.push(each2[j])
        } else if (each[j] >= limits1[2] && each[j] <= limits2[2]) {
            rowvals2.push(each2[j])
        } else if (each[j] >= limits1[3] && each[j] <= limits2[3]) {
            rowvals3.push(each2[j])
        } else if (each[j] >= limits1[4] && each[j] <= limits2[4]) {
            rowvals4.push(each2[j])
        } else if (each[j] >= limits1[5] && each[j] <= limits2[5]) {
            rowvals5.push(each2[j])
        } else if (each[j] >= limits1[6] && each[j] <= limits2[6]) {
            rowvals6.push(each2[j])
        } else if (each[j] >= limits1[7] && each[j] <= limits2[7]) {
            rowvals7.push(each2[j])
        } else if (each[j] >= limits1[8] && each[j] <= limits2[8]) {
            rowvals8.push(each2[j])
        } else if (each[j] >= limits1[9] && each[j] <= limits2[9]) {
            rowvals9.push(each2[j])
        }
    }
    
    var quants0 = new Array(cols).fill(0); var quants1 = new Array(cols).fill(0);
    var quants2 = new Array(cols).fill(0); var quants3 = new Array(cols).fill(0);
    var quants4 = new Array(cols).fill(0); var quants5 = new Array(cols).fill(0);
    var quants6 = new Array(cols).fill(0); var quants7 = new Array(cols).fill(0);
    var quants8 = new Array(cols).fill(0); var quants9 = new Array(cols).fill(0);

    for (var i=0; i<cols; i++) {
        for (var j=0; j<rowvals0.length; j++) {
            if (eachonesort2[i] == rowvals0[j]) {
                quants0[i]++
            }
        }
        for (var j=0; j<rowvals1.length; j++) {
            if (eachonesort2[i] == rowvals1[j]) {
                quants1[i]++
            }
        }
        for (var j=0; j<rowvals2.length; j++) {
            if (eachonesort2[i] == rowvals2[j]) {
                quants2[i]++
            }
        }
        for (var j=0; j<rowvals3.length; j++) {
            if (eachonesort2[i] == rowvals3[j]) {
                quants3[i]++
            }
        }
        for (var j=0; j<rowvals4.length; j++) {
            if (eachonesort2[i] == rowvals4[j]) {
                quants4[i]++
            }
        }
        for (var j=0; j<rowvals5.length; j++) {
            if (eachonesort2[i] == rowvals5[j]) {
                quants5[i]++
            }
        }
        for (var j=0; j<rowvals6.length; j++) {
            if (eachonesort2[i] == rowvals6[j]) {
                quants6[i]++
            }
        }
        for (var j=0; j<rowvals7.length; j++) {
            if (eachonesort2[i] == rowvals7[j]) {
                quants7[i]++
            }
        }
        for (var j=0; j<rowvals8.length; j++) {
            if (eachonesort2[i] == rowvals8[j]) {
                quants8[i]++
            }
        }
        for (var j=0; j<rowvals9.length; j++) {
            if (eachonesort2[i] == rowvals9[j]) {
                quants9[i]++
            }
        }

    }

    //var quants = [...quants0,...quants1,...quants2,...quants3,...quants4,...quants5,...quants6,...quants7,...quants8,...quants9]
    var quants = []; Array.prototype.push.apply(quants, quants0); 
    Array.prototype.push.apply(quants, quants1); Array.prototype.push.apply(quants, quants2); Array.prototype.push.apply(quants, quants3); 
    Array.prototype.push.apply(quants, quants4); Array.prototype.push.apply(quants, quants5);  Array.prototype.push.apply(quants, quants6);
    Array.prototype.push.apply(quants, quants7); Array.prototype.push.apply(quants, quants8);  Array.prototype.push.apply(quants, quants9);
    
    let pairs0 = [];
    for (var i = 0; i < eachonesort.length; i++) {
      for (var j = 0; j < classlimits.length; j++) {
        pairs0.push(eachonesort[i] + classlimits[j]);
      }
    }

    let pairs = [];
    for (var i = 0; i < each.length; i++) {
        pairs.push(each[i] + each2[i]);
    }
    
    var x = new Array(pairs0.length).fill(0);

    for (var i = 0; i < pairs0.length; i++) {
        for (var j = 0; j < pairs.length; j++) {
            if (pairs0[i]==pairs[j]) {
                x[i]++;
        }
      }
    }

    var table0 = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table0 += "<td>$\\text{" + eachonesort2[s] + "}$</td>";
    }  
    
    table0 = table0 + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table0 += "<tr>";
        table0 += "<td style='border-right: thin solid'>$" + classlimits[r] + "$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += quants[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table0 += "<td>$" + quants[t+h] + "$</td>";
        }
        table0 += "<td style='border-left: thin solid'>$" + rowtot + "$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table0 = table0 + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table0 += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table0 = table0 + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";

    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$\\text{" + eachonesort2[s] + "}$</td>";
    }  
    
    table = table + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$" + classlimits[r] + "$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += quants[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table += "<td>$ \\dfrac{" + quants[t+h] + "}{" + rowtot + "} \\times 100 = " + parseFloat((100*quants[t+h]/rowtot).toFixed(2)) + "$</td>";
        }
        table += "<td style='border-left: thin solid'>$100$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    
    //document.getElementById("output").innerHTML = "<table>" + table0 + "</table><br>" + "<table>" + table + "</table>"
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table>"
    
    MathJax.typeset();
}

function calcrow4(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "Row percetages are percent frequencies constructed using a crosstabulation."
    document.getElementById("formulatext").innerHTML = "$ \\text{Row Percentage} = \\dfrac{\\text{Frequency}}{\\text{Row Total}} \\times 100 $"
    document.getElementById("explanationtext").innerHTML = "Row percentages provide the percentage of a row belonging to a certain class."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    //var counts = countem(each)
    //var tot = sum(counts);
    
    var lowerx = document.getElementById("lowerx").value; var lowery = document.getElementById("lowery").value
    var upperx = document.getElementById("upperx").value; var uppery = document.getElementById("uppery").value
    
    var maxvaluex = Math.max.apply(Math, each); var maxvaluey = Math.max.apply(Math, each2);
    var minvaluex = Math.min.apply(Math, each); var minvaluey = Math.min.apply(Math, each2);
    
    var classwidthx = upperx - lowerx + 1; var classwidthy = uppery - lowery + 1;
    
    var value1x = parseFloat(lowerx); var value1y = parseFloat(lowerx);
    var value2x = parseFloat(upperx); var value2y = parseFloat(uppery);
    var classlimitsx = []; var classlimitsy = [];
    var limits1x = []; var limits1y = [];
    var limits2x = []; var limits2y = [];

    var i = 0
    while (maxvaluex > value2x - classwidthx) {
        classlimitsx[i] = value1x + "-" + value2x
        limits1x[i] = value1x;
        limits2x[i] = value2x;
        value1x += classwidthx;
        value2x += classwidthx;
        i += 1
    }
    
    var j = 0
    while (maxvaluey > value2y - classwidthy) {
        classlimitsy[j] = value1y + "-" + value2y
        limits1y[j] = value1y;
        limits2y[j] = value2y;
        value1y += classwidthy;
        value2y += classwidthy;
        j += 1
    }
    
    var rows = classlimitsx.length; 
    var cols = classlimitsy.length
    var endx = i; var endy = j;
    
    var rowvals0 = []; var rowvals1 = []; var rowvals2 = []; var rowvals3 = []; var rowvals4 = []; 
    var rowvals5 = []; var rowvals6 = []; var rowvals7 = []; var rowvals8 = []; var rowvals9 = [];
    for (var j=0; j<each.length; j++) {
        if (each[j] >= limits1x[0] && each[j] <= limits2x[0]) {
            rowvals0.push(each2[j])
        } else if (each[j] >= limits1x[1] && each[j] <= limits2x[1]) {
            rowvals1.push(each2[j])
        } else if (each[j] >= limits1x[2] && each[j] <= limits2x[2]) {
            rowvals2.push(each2[j])
        } else if (each[j] >= limits1x[3] && each[j] <= limits2x[3]) {
            rowvals3.push(each2[j])
        } else if (each[j] >= limits1x[4] && each[j] <= limits2x[4]) {
            rowvals4.push(each2[j])
        } else if (each[j] >= limits1x[5] && each[j] <= limits2x[5]) {
            rowvals5.push(each2[j])
        } else if (each[j] >= limits1x[6] && each[j] <= limits2x[6]) {
            rowvals6.push(each2[j])
        } else if (each[j] >= limits1x[7] && each[j] <= limits2x[7]) {
            rowvals7.push(each2[j])
        } else if (each[j] >= limits1x[8] && each[j] <= limits2x[8]) {
            rowvals8.push(each2[j])
        } else if (each[j] >= limits1x[9] && each[j] <= limits2x[9]) {
            rowvals9.push(each2[j])
        }
    }
    
    var quants0 = []; var quants1 = []; var quants2 = []; var quants3 = []; var quants4 = [];
    var quants5 = []; var quants6 = []; var quants7 = []; var quants8 = []; var quants9 = [];
    for (var i=0; i<cols; i++) {
        quants0[i] = rowvals0.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants1[i] = rowvals1.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants2[i] = rowvals2.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants3[i] = rowvals3.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants4[i] = rowvals4.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants5[i] = rowvals5.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants6[i] = rowvals6.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants7[i] = rowvals7.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants8[i] = rowvals8.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants9[i] = rowvals9.filter(inRange, [limits1y[i], limits2y[i]]).length
    }

    //var quants = [...quants0,...quants1,...quants2,...quants3,...quants4,...quants5,...quants6,...quants7,...quants8,...quants9]
    var quants = []; Array.prototype.push.apply(quants, quants0); 
    Array.prototype.push.apply(quants, quants1); Array.prototype.push.apply(quants, quants2); Array.prototype.push.apply(quants, quants3); 
    Array.prototype.push.apply(quants, quants4); Array.prototype.push.apply(quants, quants5);  Array.prototype.push.apply(quants, quants6);
    Array.prototype.push.apply(quants, quants7); Array.prototype.push.apply(quants, quants8);  Array.prototype.push.apply(quants, quants9);

    var table0 = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table0 += "<td>$" + classlimitsy[s] + "$</td>";
    }  
    
    table0 = table0 + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table0 += "<tr>";
        table0 += "<td style='border-right: thin solid'>$" + classlimitsx[r] + "$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += quants[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table0 += "<td>$" + quants[t+h] + " $</td>";
        }
        table0 += "<td style='border-left: thin solid'>$" + rowtot + "$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table0 = table0 + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table0 += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table0 = table0 + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";

    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$" + classlimitsy[s] + "$</td>";
    }  
    
    table = table + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$" + classlimitsx[r] + "$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += quants[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table += "<td>$ \\dfrac{" + quants[t+h] + "}{" + rowtot + "} \\times 100 = " + parseFloat((100*quants[t+h]/rowtot).toFixed(2)) + " $</td>";
        }
        table += "<td style='border-left: thin solid'>$100$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    
    //document.getElementById("output").innerHTML = "<table>" + table0 + "</table><br>" + "<table>" + table + "</table>"
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table>"
    
    MathJax.typeset();
}

function colpercent(){
    $("#input1").hide(); $("#input2").show(); $("#label2").show(); $("#label1").hide(); $("#label3").hide();
}

function calccol(){
    $("#rowcol").hide(); $("#rowcol2").hide(); $("#rowcol3").show();
    var str = document.getElementById("values").value; var str2 = document.getElementById("values2").value;
    var str1 = str.replace(/\s/g, ''); var str22 = str2.replace(/\s/g, '');
    var isnum = str1.match(/^[0-9+,]+$/) != null; var isnum2 = str22.match(/^[0-9+,]+$/) != null;
    if (isnum == false && isnum2 == false) {
        calccol1()
    } else if (isnum == false && isnum2 == true) {
        calccol2()
    } else if (isnum == true && isnum2 == false) {
        calccol3()
    } else if (isnum == true && isnum2 == true) {
        calccol4()
    }  
}

function calccol1(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "Column percetages are percent frequencies constructed using a crosstabulation."
    document.getElementById("formulatext").innerHTML = "$ \\text{Column Percentage} = \\dfrac{\\text{Frequency}}{\\text{Column Total}} \\times 100 $"
    document.getElementById("explanationtext").innerHTML = "Column percentages provide the percentage of a column belonging to a certain class."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    //var counts = countem(each)
    var rows = len; var cols = len2;
    //var tot = sum(counts);
    
    let pairs0 = [];
    for (var i = 0; i < eachonesort.length; i++) {
      for (var j = 0; j < eachonesort2.length; j++) {
        pairs0.push(eachonesort[i] + eachonesort2[j]);
      }
    }

    let pairs = [];
    for (var i = 0; i < each.length; i++) {
        pairs.push(each[i] + each2[i]);
    }
    
    let pairs2 = new Array(each.length).fill(0);
    
    for (var i = 0; i < each.length; i++) {
        pairs2[i] = each[i] + each2[i];
    }
    
    var x = new Array(pairs0.length).fill(0);

    for (var i = 0; i < pairs0.length; i++) {
        for (var j = 0; j < pairs.length; j++) {
        if (pairs0[i]==pairs[j]) {
            x[i]++;
        }
      }
    }
    
    var table0 = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table0 += "<td>$\\text{" + eachonesort2[s] + "}$</td>";
    }  
    
    table0 = table0 + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table0 += "<tr>";
        table0 += "<td style='border-right: thin solid'>$\\text{" + eachonesort[r] + "}$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += x[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table0 += "<td>$" + x[t+h] + "$</td>"; 
        }
        table0 += "<td style='border-left: thin solid'>$ " + rowtot + " $</td></tr>"; 
        coltot0 += x[h]; coltot1 += x[h+1]; coltot2 += x[h+2]; coltot3 += x[h+3]; coltot4 += x[h+4];
        coltot5 += x[h+5]; coltot6 += x[h+6]; coltot7 += x[h+7]; coltot8 += x[h+8]; coltot9 += x[h+9];
        h += len2
    } 
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table0 = table0 + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table0 += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table0 = table0 + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";
    
    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$\\text{" + eachonesort2[s] + "}$</td>";
    }  
    
    table = table + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var v = 0; v < rows; v++){
        coltot0 += x[h]; coltot1 += x[h+1]; coltot2 += x[h+2]; coltot3 += x[h+3]; coltot4 += x[h+4];
        coltot5 += x[h+5]; coltot6 += x[h+6]; coltot7 += x[h+7]; coltot8 += x[h+8]; coltot9 += x[h+9];
        h += len2
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    var h = 0
    
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$\\text{" + eachonesort[r] + "}$</td>";
        for (var t = 0; t < cols; t++){
            table += "<td>$ \\dfrac{" + x[t+h] + "}{" + coltot[t] + "} \\times 100 = " + parseFloat((x[t+h]*100/coltot[t]).toFixed(2)) + " $</td>";
        }
        table += "</tr>"; 
        h += len2
    }
    
    table = table + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table += "<td>$ 100 $</td>";
        totot += coltot[z]
    }
    
    table = table + "</tr>";
    
    
    //document.getElementById("output").innerHTML = "<table>" + table0 + "</table><br>" + "<table>" + table + "</table>"
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table>"
    
    MathJax.typeset();
}

function calccol2(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "Column percetages are percent frequencies constructed using a crosstabulation."
    document.getElementById("formulatext").innerHTML = "$ \\text{Column Percentage} = \\dfrac{\\text{Frequency}}{\\text{Column Total}} \\times 100 $"
    document.getElementById("explanationtext").innerHTML = "Column percentages provide the percentage of a column belonging to a certain class."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    //var counts = countem(each)
    var rows = len; 
    //var tot = sum(counts);
    
    var lower = document.getElementById("lowery").value
    var upper = document.getElementById("uppery").value
    
    var maxvalue = Math.max.apply(Math, each2);
    var minvalue = Math.min.apply(Math, each2);
    
    var classwidth = upper - lower + 1;
    
    var value1 = parseFloat(lower);
    var value2 = parseFloat(upper);
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    
    var i = 0
    while (maxvalue > value2 - classwidth) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
        i += 1
    }
    
    var cols = classlimits.length;
    var end = i;
    
    var quants = [];
    for (var i=0; i<end; i++) {
        quants[i] = each2.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    
    
    
    var rowvals = [];
    for (var i=0; i<rows; i++) {
        for (var j=0; j<each.length; j++) {
            if (eachonesort[i] == each[j]) {
                rowvals.push(each2[j])
            }
        }
    }
    
    var rowvals0 = []; var rowvals1 = []; var rowvals2 = []; var rowvals3 = []; var rowvals4 = []; 
    var rowvals5 = []; var rowvals6 = []; var rowvals7 = []; var rowvals8 = []; var rowvals9 = [];
    for (var j=0; j<each.length; j++) {
        if (eachonesort[0] == each[j]) {
            rowvals0.push(each2[j])
        } else if (eachonesort[1] == each[j]) {
            rowvals1.push(each2[j])
        } else if (eachonesort[2] == each[j]) {
            rowvals2.push(each2[j])
        } else if (eachonesort[3] == each[j]) {
            rowvals3.push(each2[j])
        } else if (eachonesort[4] == each[j]) {
            rowvals4.push(each2[j])
        } else if (eachonesort[5] == each[j]) {
            rowvals5.push(each2[j])
        } else if (eachonesort[6] == each[j]) {
            rowvals6.push(each2[j])
        } else if (eachonesort[7] == each[j]) {
            rowvals7.push(each2[j])
        } else if (eachonesort[8] == each[j]) {
            rowvals8.push(each2[j])
        } else if (eachonesort[9] == each[j]) {
            rowvals9.push(each2[j])
        }
    }
    

    var quants0 = []; var quants1 = []; var quants2 = []; var quants3 = []; var quants4 = [];
    var quants5 = []; var quants6 = []; var quants7 = []; var quants8 = []; var quants9 = [];
    for (var i=0; i<cols; i++) {
        quants0[i] = rowvals0.filter(inRange, [limits1[i], limits2[i]]).length
        quants1[i] = rowvals1.filter(inRange, [limits1[i], limits2[i]]).length
        quants2[i] = rowvals2.filter(inRange, [limits1[i], limits2[i]]).length
        quants3[i] = rowvals3.filter(inRange, [limits1[i], limits2[i]]).length
        quants4[i] = rowvals4.filter(inRange, [limits1[i], limits2[i]]).length
        quants5[i] = rowvals5.filter(inRange, [limits1[i], limits2[i]]).length
        quants6[i] = rowvals6.filter(inRange, [limits1[i], limits2[i]]).length
        quants7[i] = rowvals7.filter(inRange, [limits1[i], limits2[i]]).length
        quants8[i] = rowvals8.filter(inRange, [limits1[i], limits2[i]]).length
        quants9[i] = rowvals9.filter(inRange, [limits1[i], limits2[i]]).length
    }

    //var quants = [...quants0,...quants1,...quants2,...quants3,...quants4,...quants5,...quants6,...quants7,...quants8,...quants9]
    
    var quants = []; Array.prototype.push.apply(quants, quants0); 
    Array.prototype.push.apply(quants, quants1); Array.prototype.push.apply(quants, quants2); Array.prototype.push.apply(quants, quants3); 
    Array.prototype.push.apply(quants, quants4); Array.prototype.push.apply(quants, quants5);  Array.prototype.push.apply(quants, quants6);
    Array.prototype.push.apply(quants, quants7); Array.prototype.push.apply(quants, quants8);  Array.prototype.push.apply(quants, quants9);
    
    let pairs0 = [];
    for (var i = 0; i < eachonesort.length; i++) {
      for (var j = 0; j < classlimits.length; j++) {
        pairs0.push(eachonesort[i] + classlimits[j]);
      }
    }

    let pairs = [];
    for (var i = 0; i < each.length; i++) {
        pairs.push(each[i] + each2[i]);
    }
    
    var x = new Array(pairs0.length).fill(0);

    for (var i = 0; i < pairs0.length; i++) {
        for (var j = 0; j < pairs.length; j++) {
            if (pairs0[i]==pairs[j]) {
                x[i]++;
        }
      }
    }
    
    var table0 = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table0 += "<td>$" + classlimits[s] + "$</td>";
    }  
    
    table0 = table0 + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table0 += "<tr>";
        table0 += "<td style='border-right: thin solid'>$\\text{" + eachonesort[r] + "}$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += quants[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table0 += "<td>$" + quants[t+h] + "$</td>";
        }
        table0 += "<td style='border-left: thin solid'>$" + rowtot + "$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table0 = table0 + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table0 += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table0 = table0 + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";
    
    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$" + classlimits[s] + "$</td>";
    }  
    
    table = table + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    var h = 0
    
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$\\text{" + eachonesort[r] + "}$</td>";
        for (var t = 0; t < cols; t++){
            table += "<td>$ \\dfrac{" + quants[t+h] + "}{" + coltot[t] + "} \\times 100 = " +parseFloat((100*quants[t+h]/coltot[t]).toFixed(2)) + "$</td>";
        }
        table += "</tr>"; 
        h += cols
    }
    
    table = table + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table += "<td>$100$</td>";
        totot += coltot[z]
    }
    
    table = table + "</tr>";
    
    
    //document.getElementById("output").innerHTML = "<table>" + table0 + "</table><br>" + "<table>" + table + "</table>"
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table>"
    
    MathJax.typeset();
}

function calccol3(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "Column percetages are percent frequencies constructed using a crosstabulation."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Column Percentage} = \\frac{\\text{Frequency}}{\\text{Column Total}} \\times 100 $$"
    document.getElementById("explanationtext").innerHTML = "Column percentages provide the percentage of a column belonging to a certain class."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    //var counts = countem(each)
    //var tot = sum(counts);
    
    var lower = document.getElementById("lowerx").value
    var upper = document.getElementById("upperx").value
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    
    var classwidth = upper - lower + 1;
    
    var value1 = parseFloat(lower);
    var value2 = parseFloat(upper);
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    
    var i = 0
    while (maxvalue > value2 - classwidth) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
        i += 1
    }
    
    var rows = classlimits.length; 
    var cols = eachonesort2.length
    var end = i;
    
    var quants = [];
    for (var i=0; i<end; i++) {
        quants[i] = each2.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    
    
    
    var rowvals = [];
    for (var i=0; i<rows; i++) {
        for (var j=0; j<each.length; j++) {
            if (eachonesort[i] == each[j]) {
                rowvals.push(each2[j])
            }
        }
    }
    
    var rowvals0 = []; var rowvals1 = []; var rowvals2 = []; var rowvals3 = []; var rowvals4 = []; 
    var rowvals5 = []; var rowvals6 = []; var rowvals7 = []; var rowvals8 = []; var rowvals9 = [];
    for (var j=0; j<each.length; j++) {
        if (each[j] >= limits1[0] && each[j] <= limits2[0]) {
            rowvals0.push(each2[j])
        } else if (each[j] >= limits1[1] && each[j] <= limits2[1]) {
            rowvals1.push(each2[j])
        } else if (each[j] >= limits1[2] && each[j] <= limits2[2]) {
            rowvals2.push(each2[j])
        } else if (each[j] >= limits1[3] && each[j] <= limits2[3]) {
            rowvals3.push(each2[j])
        } else if (each[j] >= limits1[4] && each[j] <= limits2[4]) {
            rowvals4.push(each2[j])
        } else if (each[j] >= limits1[5] && each[j] <= limits2[5]) {
            rowvals5.push(each2[j])
        } else if (each[j] >= limits1[6] && each[j] <= limits2[6]) {
            rowvals6.push(each2[j])
        } else if (each[j] >= limits1[7] && each[j] <= limits2[7]) {
            rowvals7.push(each2[j])
        } else if (each[j] >= limits1[8] && each[j] <= limits2[8]) {
            rowvals8.push(each2[j])
        } else if (each[j] >= limits1[9] && each[j] <= limits2[9]) {
            rowvals9.push(each2[j])
        }
    }
    
    var quants0 = new Array(cols).fill(0); var quants1 = new Array(cols).fill(0);
    var quants2 = new Array(cols).fill(0); var quants3 = new Array(cols).fill(0);
    var quants4 = new Array(cols).fill(0); var quants5 = new Array(cols).fill(0);
    var quants6 = new Array(cols).fill(0); var quants7 = new Array(cols).fill(0);
    var quants8 = new Array(cols).fill(0); var quants9 = new Array(cols).fill(0);

    for (var i=0; i<cols; i++) {
        for (var j=0; j<rowvals0.length; j++) {
            if (eachonesort2[i] == rowvals0[j]) {
                quants0[i]++
            }
        }
        for (var j=0; j<rowvals1.length; j++) {
            if (eachonesort2[i] == rowvals1[j]) {
                quants1[i]++
            }
        }
        for (var j=0; j<rowvals2.length; j++) {
            if (eachonesort2[i] == rowvals2[j]) {
                quants2[i]++
            }
        }
        for (var j=0; j<rowvals3.length; j++) {
            if (eachonesort2[i] == rowvals3[j]) {
                quants3[i]++
            }
        }
        for (var j=0; j<rowvals4.length; j++) {
            if (eachonesort2[i] == rowvals4[j]) {
                quants4[i]++
            }
        }
        for (var j=0; j<rowvals5.length; j++) {
            if (eachonesort2[i] == rowvals5[j]) {
                quants5[i]++
            }
        }
        for (var j=0; j<rowvals6.length; j++) {
            if (eachonesort2[i] == rowvals6[j]) {
                quants6[i]++
            }
        }
        for (var j=0; j<rowvals7.length; j++) {
            if (eachonesort2[i] == rowvals7[j]) {
                quants7[i]++
            }
        }
        for (var j=0; j<rowvals8.length; j++) {
            if (eachonesort2[i] == rowvals8[j]) {
                quants8[i]++
            }
        }
        for (var j=0; j<rowvals9.length; j++) {
            if (eachonesort2[i] == rowvals9[j]) {
                quants9[i]++
            }
        }

    }

    //var quants = [...quants0,...quants1,...quants2,...quants3,...quants4,...quants5,...quants6,...quants7,...quants8,...quants9]
    
    var quants = []; Array.prototype.push.apply(quants, quants0); 
    Array.prototype.push.apply(quants, quants1); Array.prototype.push.apply(quants, quants2); Array.prototype.push.apply(quants, quants3); 
    Array.prototype.push.apply(quants, quants4); Array.prototype.push.apply(quants, quants5);  Array.prototype.push.apply(quants, quants6);
    Array.prototype.push.apply(quants, quants7); Array.prototype.push.apply(quants, quants8);  Array.prototype.push.apply(quants, quants9);
    
    let pairs0 = [];
    for (var i = 0; i < eachonesort.length; i++) {
      for (var j = 0; j < classlimits.length; j++) {
        pairs0.push(eachonesort[i] + classlimits[j]);
      }
    }

    let pairs = [];
    for (var i = 0; i < each.length; i++) {
        pairs.push(each[i] + each2[i]);
    }
    
    var x = new Array(pairs0.length).fill(0);

    for (var i = 0; i < pairs0.length; i++) {
        for (var j = 0; j < pairs.length; j++) {
            if (pairs0[i]==pairs[j]) {
                x[i]++;
        }
      }
    }

    var table0 = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table0 += "<td>$\\text{" + eachonesort2[s] + "}$</td>";
    }  
    
    table0 = table0 + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table0 += "<tr>";
        table0 += "<td style='border-right: thin solid'>$" + classlimits[r] + "$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += quants[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table0 += "<td>$" + quants[t+h] + "$</td>";
        }
        table0 += "<td style='border-left: thin solid'>$" + rowtot + "$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table0 = table0 + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table0 += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table0 = table0 + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";

    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$\\text{" + eachonesort2[s] + "}$</td>";
    }  
    
    table = table + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    var h = 0
    
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$" + classlimits[r] + "$</td>";
        for (var t = 0; t < cols; t++){
            table += "<td>$ \\dfrac{" + quants[t+h] + "}{" + coltot[t] + "} \\times 100 = " + parseFloat((100*quants[t+h]/coltot[t]).toFixed(2)) + " $</td>";
        }
        table += "</tr>"; 
        h += cols
    }
    
    
    table = table + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table += "<td>$100$</td>";
        totot += coltot[z]
    }
    
    table = table + "</tr>";
    
    
    //document.getElementById("output").innerHTML = "<table>" + table0 + "</table><br>" + "<table>" + table + "</table>"
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table>"
    
    MathJax.typeset();
}

function calccol4(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "Column percetages are percent frequencies constructed using a crosstabulation."
    document.getElementById("formulatext").innerHTML = "$ \\text{Column Percentage} = \\dfrac{\\text{Frequency}}{\\text{Column Total}} \\times 100 $"
    document.getElementById("explanationtext").innerHTML = "Column percentages provide the percentage of a column belonging to a certain class."
    $("#desfrequency").show(); $("#expfrequency").show();
    var str = document.getElementById("values1").value;
    var str2 = document.getElementById("values2").value;
    var each0 = str.replace(/\s/g, ''); var each = each0.split(",");
    var each00 = str2.replace(/\s/g, ''); var each2 = each00.split(",");
    //let eachonetrunc = [...new Set(each)]; 
    //const eachonesort = [...eachonetrunc].sort(); 

    var eachonetrunc = each.filter(function(item, pos) {
        return each.indexOf(item) == pos;
    })
    var eachonesort = eachonetrunc.slice();
    eachonesort.sort(); 
    var len = eachonesort.length;
    
    
    
    
    //let eachonetrunc2 = [...new Set(each2)]; 
    //const eachonesort2 = [...eachonetrunc2].sort(); 
    //var len2 = eachonesort2.length;
    
    var eachonetrunc2 = each2.filter(function(item, pos) {
        return each2.indexOf(item) == pos;
    })
    var eachonesort2 = eachonetrunc2.slice();
    eachonesort2.sort(); 
    var len2 = eachonesort2.length;
    //var counts = countem(each)
    //var tot = sum(counts);
    
    var lowerx = document.getElementById("lowerx").value; var lowery = document.getElementById("lowery").value
    var upperx = document.getElementById("upperx").value; var uppery = document.getElementById("uppery").value
    
    var maxvaluex = Math.max.apply(Math, each); var maxvaluey = Math.max.apply(Math, each2);
    var minvaluex = Math.min.apply(Math, each); var minvaluey = Math.min.apply(Math, each2);
    
    var classwidthx = upperx - lowerx + 1; var classwidthy = uppery - lowery + 1;
    
    var value1x = parseFloat(lowerx); var value1y = parseFloat(lowerx);
    var value2x = parseFloat(upperx); var value2y = parseFloat(uppery);
    var classlimitsx = []; var classlimitsy = [];
    var limits1x = []; var limits1y = [];
    var limits2x = []; var limits2y = [];

    var i = 0
    while (maxvaluex > value2x - classwidthx) {
        classlimitsx[i] = value1x + "-" + value2x
        limits1x[i] = value1x;
        limits2x[i] = value2x;
        value1x += classwidthx;
        value2x += classwidthx;
        i += 1
    }
    
    var j = 0
    while (maxvaluey > value2y - classwidthy) {
        classlimitsy[j] = value1y + "-" + value2y
        limits1y[j] = value1y;
        limits2y[j] = value2y;
        value1y += classwidthy;
        value2y += classwidthy;
        j += 1
    }
    
    var rows = classlimitsx.length; 
    var cols = classlimitsy.length
    var endx = i; var endy = j;
    
    var rowvals0 = []; var rowvals1 = []; var rowvals2 = []; var rowvals3 = []; var rowvals4 = []; 
    var rowvals5 = []; var rowvals6 = []; var rowvals7 = []; var rowvals8 = []; var rowvals9 = [];
    for (var j=0; j<each.length; j++) {
        if (each[j] >= limits1x[0] && each[j] <= limits2x[0]) {
            rowvals0.push(each2[j])
        } else if (each[j] >= limits1x[1] && each[j] <= limits2x[1]) {
            rowvals1.push(each2[j])
        } else if (each[j] >= limits1x[2] && each[j] <= limits2x[2]) {
            rowvals2.push(each2[j])
        } else if (each[j] >= limits1x[3] && each[j] <= limits2x[3]) {
            rowvals3.push(each2[j])
        } else if (each[j] >= limits1x[4] && each[j] <= limits2x[4]) {
            rowvals4.push(each2[j])
        } else if (each[j] >= limits1x[5] && each[j] <= limits2x[5]) {
            rowvals5.push(each2[j])
        } else if (each[j] >= limits1x[6] && each[j] <= limits2x[6]) {
            rowvals6.push(each2[j])
        } else if (each[j] >= limits1x[7] && each[j] <= limits2x[7]) {
            rowvals7.push(each2[j])
        } else if (each[j] >= limits1x[8] && each[j] <= limits2x[8]) {
            rowvals8.push(each2[j])
        } else if (each[j] >= limits1x[9] && each[j] <= limits2x[9]) {
            rowvals9.push(each2[j])
        }
    }
    
    var quants0 = []; var quants1 = []; var quants2 = []; var quants3 = []; var quants4 = [];
    var quants5 = []; var quants6 = []; var quants7 = []; var quants8 = []; var quants9 = [];
    for (var i=0; i<cols; i++) {
        quants0[i] = rowvals0.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants1[i] = rowvals1.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants2[i] = rowvals2.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants3[i] = rowvals3.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants4[i] = rowvals4.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants5[i] = rowvals5.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants6[i] = rowvals6.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants7[i] = rowvals7.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants8[i] = rowvals8.filter(inRange, [limits1y[i], limits2y[i]]).length
        quants9[i] = rowvals9.filter(inRange, [limits1y[i], limits2y[i]]).length
    }

    //var quants = [...quants0,...quants1,...quants2,...quants3,...quants4,...quants5,...quants6,...quants7,...quants8,...quants9]
    
    var quants = []; Array.prototype.push.apply(quants, quants0); 
    Array.prototype.push.apply(quants, quants1); Array.prototype.push.apply(quants, quants2); Array.prototype.push.apply(quants, quants3); 
    Array.prototype.push.apply(quants, quants4); Array.prototype.push.apply(quants, quants5);  Array.prototype.push.apply(quants, quants6);
    Array.prototype.push.apply(quants, quants7); Array.prototype.push.apply(quants, quants8);  Array.prototype.push.apply(quants, quants9);
    
    var table0 = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table0 += "<td>$" + classlimitsy[s] + "$</td>";
    }  
    
    table0 = table0 + "<td style='border-left: thin solid'>$\\text{Total}$</td>" + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        var rowtot = 0
        table0 += "<tr>";
        table0 += "<td style='border-right: thin solid'>$" + classlimitsx[r] + "$</td>";
        for (var t = 0; t < cols; t++){
            rowtot += quants[t+h] 
        }
        for (var t = 0; t < cols; t++){
            table0 += "<td>$" + quants[t+h] + " $</td>";
        }
        table0 += "<td style='border-left: thin solid'>$" + rowtot + "$</td></tr>"; 
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    table0 = table0 + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table0 += "<td>$" + coltot[z] + "$</td>";
        totot += coltot[z]
    }
    
    table0 = table0 + "<td style='border-left: thin solid'>$" + totot + "$</td>" + "</tr>";

    var table = "<tr style='border-bottom: thin solid'><td style='border-right: thin solid'>$\\text{Class}$</td>";
    
    for (var s = 0; s < cols; s++){
        table += "<td>$" + classlimitsy[s] + "$</td>";
    }  
    
    table = table + "</tr>";
    
    
    var h = 0
    
    //var coltot = new Array(len2).fill(0);
    var coltot0 = 0; var coltot1 = 0; var coltot2 = 0; var coltot3 = 0; var coltot4 = 0;
    var coltot5 = 0; var coltot6 = 0; var coltot7 = 0; var coltot8 = 0; var coltot9 = 0;
    
    for (var r = 0; r < rows; r++){
        coltot0 += quants[h]; coltot1 += quants[h+1]; coltot2 += quants[h+2]; coltot3 += quants[h+3]; coltot4 += quants[h+4];
        coltot5 += quants[h+5]; coltot6 += quants[h+6]; coltot7 += quants[h+7]; coltot8 += quants[h+8]; coltot9 += quants[h+9];
        h += cols
    }
    
    var coltot = [coltot0, coltot1, coltot2, coltot3, coltot4, coltot5, coltot6, coltot7, coltot8, coltot9]
    
    var h = 0
    
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td style='border-right: thin solid'>$" + classlimitsx[r] + "$</td>";
        for (var t = 0; t < cols; t++){
            table += "<td>$ \\dfrac{" + quants[t+h] + "}{" + coltot[t] + "} \\times 100 = " + parseFloat((100*quants[t+h]/coltot[t]).toFixed(2)) + "$</td>";
        }
        table += "</tr>"; 
        h += cols
    }
    
    table = table + "<tr style='border-top: thin solid'><td style='border-right: thin solid'>$\\text{Total}$</td>";
    
    var totot = 0
    
    for (var z = 0; z < cols; z++){
        table += "<td>$100$</td>";
        totot += coltot[z]
    }
    
    table = table + "</tr>";
    
    
    //document.getElementById("output").innerHTML = "<table>" + table0 + "</table><br>" + "<table>" + table + "</table>"
    
    document.getElementById("output").innerHTML = "<table>" + table + "</table>"
    
    MathJax.typeset();
}

function scatter(){
    $("#input1").hide(); $("#input2").show();  $("#label1").hide(); $("#label3").show();
}

function calcscatt(){
    $("#trendline").show(); $("#notrendline").hide();
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "A scatter diagram is a graph summarizing data for two quantitative variables."
    document.getElementById("formulatext").innerHTML = "Draw a point on the graph for each pair of x and y values."
    document.getElementById("explanationtext").innerHTML = "The scatter diagram will indicate whether there is a positive, negative or no relationship between x and y."
    var str = document.getElementById("values1").value;
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
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'x'},
          vAxis: {title: 'y'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

    
    MathJax.typeset();
}










function trendline(){
    $("#input1").hide(); $("#input2").show();  $("#label1").hide(); $("#label3").show();
}

function calctrend(){
    $("#trendline").hide(); $("#notrendline").show();
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "A trendline provides an approximation of the relationship between x and y."
    document.getElementById("formulatext").innerHTML = "$$\\hat{y} = b_{0} + b_{1} x$$"
    document.getElementById("explanationtext").innerHTML = "The equation of the trendline is estimated using the least squares method from simple regression."
    var str = document.getElementById("values1").value;
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
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'x'},
          vAxis: {title: 'y'},
          legend: 'none',
          trendlines: { 0: {} }    // Draw a trendline for data series 0. 
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

    
    MathJax.typeset();
}

function timeplot() {
    $("#input1").show(); $("#input2").hide();  $("#label1").hide(); $("#label4").show();
}

function calctime() {
    $("#explanation").show(); $("#charts").show();
    document.getElementById("explanationtext").innerHTML = "In a scatter diagram, a point is drawn on the graph for each pair of x and y values."
    var str2 = document.getElementById("values").value;
    var each2 = str2.split(",")
    var Y = each2.map(function(v) {
  		return parseInt(v, 10);
    });
    
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

          var data = new google.visualization.DataTable();
          data.addColumn('number', 'X');
          data.addColumn('number', 'Y');

          data.addRows([
            [1, Y[0]], [2, Y[1]], [3, Y[2]], [4, Y[3]], [5, Y[4]], [6, Y[5]], [7, Y[6]], [8, Y[7]], [9, Y[8]], [10, Y[9]],
            [11, Y[10]], [12, Y[11]], [13, Y[12]], [14, Y[13]], [15, Y[14]], [16, Y[15]], [17, Y[16]], [18, Y[17]], [19, Y[18]], [20, Y[19]],
            [21, Y[20]], [22, Y[21]], [23, Y[22]], [24, Y[23]], [25, Y[24]], [26, Y[25]], [27, Y[26]], [28, Y[27]], [29, Y[28]], [30, Y[29]],
            [31, Y[30]], [32, Y[31]], [33, Y[32]], [34, Y[33]], [35, Y[34]], [36, Y[35]], [37, Y[36]], [38, Y[37]], [39, Y[38]], [40, Y[39]],
            [41, Y[40]], [42, Y[41]], [43, Y[42]], [44, Y[43]], [45, Y[44]], [46, Y[45]], [47, Y[46]], [48, Y[47]], [49, Y[48]], [50, Y[49]]
          ]);

          var options = {
            hAxis: {
              title: 'Time'
            },
            vAxis: {
              title: 'Value'
            }
          };

          var chart = new google.visualization.LineChart(document.getElementById('charts'));

          chart.draw(data, options);
        }
}


function relativeexp(){
    $("#exprel").show();
}

function examplexvalues(){
    document.getElementById('values').value="B, A, B, B, C, A, C, B, A, B"
    $("#firstclass").hide();
}

function examplexvalues2(){
    var x = document.getElementById("stat").value;
    document.getElementById('values').value="11, 16, 21, 20, 16, 15, 12, 23, 19, 14"
    if (x == "histogram") {
        $("#firstclass").hide();
    } else if (x == "boxplot") {
        $("#firstclass").hide();
    } else {
        $("#firstclass").show();
        document.getElementById('lower').value="10"
        document.getElementById('upper').value="14"
    } 
}

function examplevalues3(){
    document.getElementById('values1').value="B, A, B, B, C, A, C, B, A, B"
    document.getElementById('values2').value="X, X, Y, X, Y, X, Y, Y, X, Y"
    $("#firstclasscross").hide(); $("#firstclassx").hide(); $("#firstclassy").hide();
}

function examplevalues4(){
    document.getElementById('values1').value="A, A, B, A, B, A, B, B, C, C"
    document.getElementById('values2').value="11, 16, 21, 20, 16, 15, 12, 23, 19, 14"
    $("#firstclasscross").show(); $("#firstclassx").hide(); $("#firstclassy").show();
    document.getElementById('lowery').value="10"
    document.getElementById('uppery').value="14"
}

function examplevalues33(){
    document.getElementById('values2').value="B, A, B, B, C, A, C, B, A, B"
    document.getElementById('values1').value="11, 16, 21, 20, 16, 15, 12, 23, 19, 14"
    $("#firstclasscross").show(); $("#firstclassx").show(); $("#firstclassy").hide();
    document.getElementById('lowerx').value="10"
    document.getElementById('upperx').value="14"
}

function examplevalues44(){
    document.getElementById('values1').value="11, 16, 21, 20, 16, 15, 12, 23, 19, 14"
    document.getElementById('values2').value="23, 18, 12, 14, 11, 21, 19, 11, 24, 17"
    $("#firstclasscross").show(); $("#firstclassx").show(); $("#firstclassy").show();
    document.getElementById('lowerx').value="10"
    document.getElementById('upperx').value="14"
    document.getElementById('lowery').value="10"
    document.getElementById('uppery').value="14"
}

function examplevalues5(){
    document.getElementById('values1').value="2, 5, 1, 3, 4, 1, 5, 3, 4, 2"
    document.getElementById('values2').value="50, 57, 41, 54, 54, 38, 63, 48, 59, 46"
}

function examplevalues6(){
    document.getElementById('values1').value="-22, -33, 2, 29, -13, 21, -13, -23, 14, 2"
    document.getElementById('values2').value="22, 49, 8, -16, 10, -28, 27, 35, -5, -3"
}

function examplevalues7(){
    document.getElementById('values').value="18, 13, 16, 11, 17, 14"
}

function examplevalues8(){
    document.getElementById('values').value="24, 13, 20, 12, 19, 23, 15"
}
