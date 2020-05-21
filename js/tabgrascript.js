$("#input2").hide(); $("#myCanvas").hide(); $(".description").hide(); $(".explanation").hide();

$('.popover-dismiss').popover({
  trigger: 'focus'
})

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

function stat(){
    $("#input2").hide(); $("#myCanvas").hide(); $(".description").hide(); $(".explanation").hide();
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
    } else if (x == "cumfrequency") {
        cumfrequency()
    } else if (x == "cumrelative") {
        cumrelative()
    } else if (x == "cumpercent") {
        cumpercent()
    } else if (x == "crosstabulation") {
        crosstabulation()
    } else if (x == "scatter") {
        scatter()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function frequency(){
    $("#desfrequency").show(); $("#expfrequency").show();
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
    document.getElementById("output").innerHTML = " <table border=1>" + table + "</table> <br>"
    MathJax.typeset();
}

function relative(){
    $("#desrelative").show(); $("#exprelative").show();
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr>" + "<td>" + "x" + "</td>" + "<td>" + "Frequency" + "</td>" + "<td>" + "Relative<br>Frequency" + "</td>" + "</tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>" + eachonesort[r] + "</td>";
        table += "<td>" + counts[r] + "</td>";
        table += "<td>" + relfreq[r].toFixed(2) + "</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "Total" + "</td>" + "<td>"+ tot +"</td>" + "<td>"+ "1" +"</td>" + "</tr>";
    document.getElementById("output").innerHTML = " <table border=1>" + table + "</table> <br>"
    MathJax.typeset();
}

function percent(){
    $("#despercent").show();
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr>" + "<td>" + "x" + "</td>" +"<td>" + "Frequency" + "</td>" + "<td>" + "Relative<br>Frequency" + "</td>"+ "<td>" + "Percent<br>Frequency" + "</td>" + "</tr>";
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
        table += "<td>" + eachonesort[r] + "</td>";
        table += "<td>" + counts[r] + "</td>";
        table += "<td>" + relfreq[r].toFixed(2) + "</td>";
        table += "<td>" + perfreq[r].toFixed(2) + "</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "Total" + "</td>"+ "<td>" +tot +"</td>" + "<td>"+ "1" +"</td>"+ "<td>"+ "100" +"</td>" + "</tr>";
    document.getElementById("output").innerHTML = " <table border=1>" + table + "</table> <br>"
    MathJax.typeset();
}

function bar(){
    $("#myCanvas").show();
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var tot = sum(counts);
    
    var graphValues = counts;
    var maxval = Math.max.apply(Math, graphValues);
    var minval = Math.min.apply(Math, graphValues);
    var intervals = 230/maxval;
    
    var graphValuesScaled = graphValues.map( function(value) {
        return (value / maxval)*230
    } );
    
    var X=20;
    var Y=intervals;
    var width=30;
    var height=100;
    
    var xaxislen = 40 + 45*graphValues.length;
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 280);
    ctx.lineTo(xaxislen, 280);
    ctx.stroke();
    
    ctx.fillText("Frequency",5,15);
    ctx.fillText("x",xaxislen + 5,280);
    
    
    for (var i=0; i<graphValues.length; i++) {
        var k = graphValuesScaled[i];
        var m = eachonesort[i];
        ctx.fillRect(X+15,canvas.height-k-20,width,k);
        ctx.fillText(m,X+15+15,canvas.height-10);
        X += width+15;
    }
    
    for (var i=1; i<maxval+1; i++) {
        ctx.fillText(i+"-",10,canvas.height-16-Y);
        Y += intervals;
    }
    
    MathJax.typeset();
}

function pie(){
    $("#myCanvas").show();
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var tot = sum(counts);
    
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    
    var perfreq = relfreq.map( function(value) {
        return value * 100;
    } );
    
    var degvals = relfreq.map( function(value) {
        return value * 360;
    } );
    
    var radvals = degvals.map( function(value) {
        return value * (Math.PI / 180);
    } );
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.arc(200, 150, 100, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(200, 150);
    ctx.lineTo(200, 50);
    ctx.stroke();
    
    //var h = radvals[0];
    //ctx.beginPath();
    //ctx.moveTo(100, 75);
    //ctx.lineTo(100+50*Math.sin(h), 75-50*Math.cos(h));
    //ctx.stroke();
    //ctx.fillText(eachonesort[0],100+25*Math.sin(h/2),75-25*Math.cos(h/2));
    
    var h = radvals[0];
    for (var i=0; i<radvals.length-1; i++) {
        ctx.beginPath();
        ctx.moveTo(200, 150);
        ctx.lineTo(200+100*Math.sin(h), 150-100*Math.cos(h));
        ctx.stroke();
        h += radvals[i+1];
    }
    var h = radvals[0];
    var k = h / 2;
    for (var i=0; i<radvals.length; i++) {
        ctx.fillText(eachonesort[i],200+60*Math.sin(k),150-60*Math.cos(k));
        ctx.fillText(perfreq[i].toFixed(2)+"%",200+110*Math.sin(k),150-110*Math.cos(k));
        k = h + radvals[i+1]/2;
        h += radvals[i+1];
    }

    MathJax.typeset();
}

function histogram(){
    $("#myCanvas").show();
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var tot = sum(counts);
    
    var graphValues = counts;
    var maxval = Math.max.apply(Math, graphValues);
    var minval = Math.min.apply(Math, graphValues);
    var intervals = 230/maxval;
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    var classwidth = Math.ceil((maxvalue - minvalue) / 5);
    
    var value1 = minvalue;
    var value2 = minvalue + classwidth - 1;
    var classlimits = [];
    var limits1 = [];
    var limits2 = [];
    for (var i=0; i<5; i++) {
        classlimits[i] = value1 + "-" + value2
        limits1[i] = value1;
        limits2[i] = value2;
        value1 += classwidth;
        value2 += classwidth;
    }
    
    var quants = [];
    for (var i=0; i<5; i++) {
        quants[i] = each.filter(inRange, [limits1[i], limits2[i]]).length
    }
    
    var quantsscaled = quants.map( function(value) {
        return (value / maxval)*230
    } );
    
    var X=10;
    var Y=intervals;
    var width=50;
    var height=100;
    
    var xaxislen = 40 + 60*quants.length;
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 280);
    ctx.lineTo(xaxislen, 280);
    ctx.stroke();
    
    ctx.fillText("Frequency",5,15);
    ctx.fillText("x",xaxislen + 5,280);
    
    
    for (var i=0; i<quants.length; i++) {
        var k = quantsscaled[i];
        var m = classlimits[i];
        ctx.fillRect(X+20,canvas.height-k-20,width+9,k);
        ctx.fillText(m,X+2+20,canvas.height-10);
        X += width+10;
    }
    
    for (var i=1; i<maxval+1; i++) {
        ctx.fillText(i+"-",10,canvas.height-16-Y);
        Y += intervals;
    }
    
    MathJax.typeset();
}

function cumfrequency(){
    $("#descumfrequency").show();
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each);
    let cumcounts = [counts[0]]
    for (let i=1; i<counts.length; i++) {
        cumcounts[i] = cumcounts[i-1] + counts[i]
    }
    var table = "<tr>" + "<td>" + "x" + "</td>" + "<td>" + "Frequency" + "</td>" +"<td>" + "Cum. Frequency" + "</td>" + "</tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>" + eachonesort[r] + "</td>";
        table += "<td>" + counts[r] + "</td>";
        table += "<td>" + cumcounts[r] + "</td>";
        table += "</tr>";
    }

    document.getElementById("output").innerHTML = " <table border=1>" + table + "</table> <br>"
    MathJax.typeset();
}

function cumrelative(){
    $("#descumrelative").show();
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr>" + "<td>" + "x" + "</td>" +"<td>" + "Relative<br>Frequency" + "</td>" + "<td>" + "Cum. Relative<br>Frequency" + "</td>" + "</tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    let cumrelfreq = [relfreq[0]]
    for (let i=1; i<counts.length; i++) {
        cumrelfreq[i] = cumrelfreq[i-1] + relfreq[i]
    }
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>" + eachonesort[r] + "</td>";
        table += "<td>" + relfreq[r].toFixed(2) + "</td>";
        table += "<td>" + cumrelfreq[r].toFixed(2) + "</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = " <table border=1>" + table + "</table> <br>"
    MathJax.typeset();
}

function cumpercent(){
    $("#descumpercent").show();
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr>" + "<td>" + "x" + "</td>" + "<td>" + "Percent<br>Frequency" + "</td>" +"<td>" + "Cum. Percent<br>Frequency" + "</td>" + "</tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    var perfreq = relfreq.map( function(value) {
        return value * 100;
    } );
    let cumperfreq = [perfreq[0]]
    for (let i=1; i<counts.length; i++) {
        cumperfreq[i] = cumperfreq[i-1] + perfreq[i]
    }
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>" + eachonesort[r] + "</td>";
        table += "<td>" + perfreq[r].toFixed(2) + "</td>";
        table += "<td>" + cumperfreq[r].toFixed(2) + "</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = " <table border=1>" + table + "</table> <br>"
    MathJax.typeset();
}

function crosstabulation(){
    $("#input2").show(); $("#buttonscatt").hide();
}

function calccross(){
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
    $("#input2").show(); $("#buttoncross").hide();
}

function calcscatt(){
    $("#myCanvas").show();
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var tot = sum(counts);
    
    var graphValues = counts;
    var maxval = Math.max.apply(Math, graphValues);
    var minval = Math.min.apply(Math, graphValues);
    
    var graphValuesScaled = graphValues.map( function(value) {
        return 10 * value
    } );
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var X=10;
    var Y=0;
    var width=30;
    var height=100;
    
    var xaxislen = 15 + 45*graphValues.length;
    
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, 130);
    ctx.lineTo(xaxislen, 130);
    ctx.stroke();
    
    ctx.fillText("Frequency",5,15);
    ctx.fillText("x",xaxislen + 5,132);
    
    
    for (var i=0; i<graphValues.length; i++) {
        var k = graphValuesScaled[i];
        var m = eachonesort[i];
        ctx.fillRect(X+20,canvas.height-k-20,width,k);
        ctx.fillText(m,X+15+20,canvas.height-10);
        X += width+10;
    }
    
    for (var i=1; i<maxval+1; i++) {
        ctx.fillText(i+"-",10,canvas.height-30-Y);
        Y += 10;
    }
    
    MathJax.typeset();
}

function frequencyexp(){
    document.getElementById("output2").innerHTML = "hello"
}

function relativeexp(){
    document.getElementById("output2").innerHTML = "$$ \\text{Relative Frequency} = \\frac{\\text{Percent Frequency}}{n}$$"
    MathJax.typeset();
}
