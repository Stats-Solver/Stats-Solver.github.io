$("#input2").hide(); $("#myCanvas").hide();

function removeDuplicates(array) {
        return [...new Set(array)]
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
    $("#input2").hide(); $("#myCanvas").hide();
    $("#output").empty(); 
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
    } else if (x == "trend") {
        trend()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function frequency(){
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

function relative(){
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr>" + "<td>" + "x" + "</td>" + "<td>" + "Relative Frequency" + "</td>" + "</tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    var relfreq = counts.map( function(value) {
        return value / tot;
    } );
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>" + eachonesort[r] + "</td>";
        table += "<td>" + relfreq[r].toFixed(2) + "</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "Total" + "</td>" + "<td>"+ "1" +"</td>" + "</tr>";
    document.getElementById("output").innerHTML = " <table border=1>" + table + "</table>"
    MathJax.typeset();
}

function percent(){
    var str = document.getElementById("values").value;
    var each = str.split(",");
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr>" + "<td>" + "x" + "</td>" + "<td>" + "Percent Frequency" + "</td>" + "</tr>";
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
        table += "<td>" + perfreq[r].toFixed(2) + "</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "Total" + "</td>" + "<td>"+ "100" +"</td>" + "</tr>";
    document.getElementById("output").innerHTML = " <table border=1>" + table + "</table>"
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
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(100, 75);
    ctx.lineTo(100, 25);
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
        ctx.moveTo(100, 75);
        ctx.lineTo(100+50*Math.sin(h), 75-50*Math.cos(h));
        ctx.stroke();
        h += radvals[i+1];
    }
    var h = radvals[0];
    var k = h / 2;
    for (var i=0; i<radvals.length; i++) {
        ctx.fillText(eachonesort[i],100+25*Math.sin(k),75-25*Math.cos(k));
        ctx.fillText(perfreq[i].toFixed(2)+"%",100+65*Math.sin(k),75-65*Math.cos(k));
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
    
    var maxvalue = Math.max.apply(Math, each);
    var minvalue = Math.min.apply(Math, each);
    var classwidth = Math.ceil((maxvalue - minvalue) / 5);
    
    var value1 = minvalue;
    var value2 = minvalue + classwidth - 1;
    var classlimits = [];
    for (var i=0; i<5; i++) {
        classlimits[i] = value1 + "-" + value2
        value1 += classwidth;
        value2 += classwidth;
    }
    
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
    
    document.getElementById("output").innerHTML = maxvalue +""+ minvalue +""+ classwidth + "" + classlimits
    
    MathJax.typeset();
}