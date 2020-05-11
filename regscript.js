//global variables




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
    $("#output").empty();
    var x = document.getElementById("stat").value;
    if (x == "slope"){
        slope()
    } else if (x == "intercept"){
        intercept()
    } else if (x == "equation"){
        equation()
    }
    else if (x == "sse") {
        sse()
    } else if (x == "sst") {
        sst()
    } else if (x == "ssr") {
        ssr()
    } else if (x == "rsquared") {
        rsquared()
    } else if (x == "correlation") {
        correlation()
    } else if (x == "mse") {
        mse()
    } else if (x == "see") {
        see()
    } else if (x == "ses") {
        ses()
    } else if (x == "tstat") {
        tstat()
    } else if (x == "msr") {
        msr()
    } else if (x == "fstat") {
        fstat()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function slope(){
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2;
    var interpret = ""
    if (ansslope > 0){
        var interpret = "Interpretation: For every one-unit increase in x, y is predicted to increas by "+ansslope+" units."
    } else if (ansslope < 0){
        var interpret = "Interpretation: For every one-unit increase in x, y is predicted to decrease by "+Math.abs(ansslope)+" units."
    } else {
        var interpret = "Interpretation: For every one-unit increase in x, y is neither predicted to increase nor decrease."
    }
    var table = "<tr>" + "<td>" + "$$x$$" + "</td>"+ "<td>" + "$$y$$" + "</td>" + "<td>" + "$$x - \\bar{x}$$" + "</td>" + "<td>" + "$$y - \\bar{y}$$" + "</td>"+ "<td>" + "$$(x - \\bar{x})(y - \\bar{y})$$" + "</td>" +"<td>" + "$$(x - \\bar{x})^2$$" + "</td>"+ "</tr>";
    var rows = n_x; var cols = 6;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + x[r] + "$$</td>";
        table += "<td>$$" + y[r] + "$$</td>";
        table += "<td>$$" + xminusx_bar[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + yminusy_bar[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + xxbminyyb[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + xminusx_bar2[r].toFixed(2) + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>$$"+Math.round(sum_xminusx_bar)+"$$</td>"+ "<td>$$"+Math.round(sum_yminusy_bar)+"$$</td>" +"<td>$$"+sum_xxbminyyb.toFixed(2)+"$$</td>"+"<td>$$"+sum_xxbminyyb.toFixed(2)+"$$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "Slope <br><br> <table border=1>" + table + "</table><br>$$b_{1} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sum(x - \\bar{x})^2} = \\frac{"+sum_xxbminyyb.toFixed(2)+"}{"+sum_xminusx_bar2.toFixed(2)+"}="+ansslope.toFixed(2)+"$$" + interpret
    MathJax.typeset();
}

function intercept(){
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var interpret = "Interpretation: The predicted value of y when x = 0 is " + ansint + "."
    document.getElementById("output").innerHTML = "Intercept $$ \\begin{align} b_{0} &= \\bar{y} - b_{1} \\bar{x} \\\\ &= "+mean_y+" - (" +ansslope + ")(" + mean_x+ ") \\\\ &= "+ansint+" \\end{align} $$" + interpret
    MathJax.typeset();
}

function equation(){
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var interpret = "Interpretation: The predicted value of y when x = 0 is " + ansint + "."
    document.getElementById("output").innerHTML = "Regression Equation <br> $$ \\begin{align} \\hat{y} &= b_{0} + b_{1} x \\\\ \\hat{y} &= "+ansint+" + " +ansslope + "x \\end{align} $$"
    MathJax.typeset();
}

function sse(){
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var table = "<tr>" + "<td>" + "$$x$$" + "</td>"+ "<td>" + "$$y$$" + "</td>" + "<td>" + "$$\\hat{y}$$" + "</td>" + "<td>" + "$$y - \\hat{y}$$" + "</td>"+ "<td>" + "$$(y - \\hat{y})^2$$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 5;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + x[r] + "$$</td>";
        table += "<td>$$" + y[r] + "$$</td>";
        table += "<td>$$" + yhat[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + yminusyhat[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + yminusyhat2[r].toFixed(2) + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+Math.round(sum_yminusyhat)+"$$</td>" +"<td>$$"+sum_yminusyhat2.toFixed(2)+"$$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "Sum of Squares due to Error <br><br> <table border=1>" + table + "</table><br>$$ \\text{SSE} = \\sum(y - \\hat{y})^2 = "+anssse.toFixed(2)+"$$"
    MathJax.typeset();
}


