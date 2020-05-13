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
    } else if (x == "sse") {
        sse()
    } else if (x == "equation") {
        equation()
    }else if (x == "sst") {
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
        var interpret = "Interpretation: For every one-unit increase in x, y is predicted to increase by "+ansslope.toFixed(2)+" units on average."
    } else if (ansslope < 0){
        var interpret = "Interpretation: For every one-unit increase in x, y is predicted to decrease by "+Math.abs(ansslope.toFixed(2))+" units on average."
    } else {
        var interpret = "Interpretation: For every one-unit increase in x, y is neither predicted to increase nor decrease on average."
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
    document.getElementById("output").innerHTML = "<table border=1>" + table + "</table><br>$$b_{1} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sum(x - \\bar{x})^2} = \\frac{"+sum_xxbminyyb.toFixed(2)+"}{"+sum_xminusx_bar2.toFixed(2)+"}="+ansslope.toFixed(2)+"$$" + interpret
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
    var interpret = "Interpretation: The predicted value of y when x = 0 is " + ansint.toFixed(2) + "."
    document.getElementById("output").innerHTML = "$$ \\begin{align} b_{0} &= \\bar{y} - b_{1} \\bar{x} \\\\ &= "+mean_y.toFixed(2)+" - (" +ansslope.toFixed(2) + ")(" + mean_x.toFixed(2)+ ") \\\\ &= "+ansint.toFixed(2)+" \\end{align} $$" + interpret
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
    document.getElementById("output").innerHTML = "Regression Equation $$ \\begin{align} \\hat{y} &= b_{0} + b_{1} x \\\\ \\hat{y} &= "+ansint.toFixed(2) +" + "+ansslope.toFixed(2)+"x \\end{align} $$"
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

function sst(){
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
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2;
    var table = "<tr>" + "<td>" + "$$x$$" + "</td>"+ "<td>" + "$$y$$" + "</td>" + "<td>" + "$$y - \\bar{y}$$" + "</td>"+ "<td>" + "$$(y - \\bar{y})^2$$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 4;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + x[r] + "$$</td>";
        table += "<td>$$" + y[r] + "$$</td>";
        table += "<td>$$" + yminusy_bar[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + yminusy_bar2[r].toFixed(2) + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>$$"+Math.round(sum_yminusy_bar)+"$$</td>" +"<td>$$"+sum_yminusy_bar2.toFixed(2)+"$$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "Total Sum of Squares <br><br> <table border=1>" + table + "</table><br>$$ \\text{SST} = \\sum(y - \\bar{y})^2 = "+anssst.toFixed(2)+"$$"
    MathJax.typeset();
}

function ssr(){
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
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2;
    var ansssr = anssst - anssse;
    document.getElementById("output").innerHTML = "Sum of Squares due to Regression $$ \\begin{align} \\text{SSR} &= \\text{SST} - \\text{SSE} \\\\ &= "+anssst.toFixed(2)+" - " +anssse.toFixed(2) +" \\\\ &= "+ansssr.toFixed(2)+" \\end{align} $$"
    MathJax.typeset();
}

function rsquared(){
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
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst;
    var ansrsquper = ansrsqu.toFixed(2) * 100;
    var interpret = "Interpretation: " + ansrsquper + "% of the variation in y is explained by the linear relationship between x and y."
    document.getElementById("output").innerHTML = "Coefficient of Determination $$ \\begin{align} r^2 &= \\frac{\\text{SSR}}{\\text{SST}} \\\\ &= \\frac{"+ansssr.toFixed(2)+"}{" +anssst.toFixed(2) +"} \\\\ &= "+ansrsqu.toFixed(2)+" \\end{align} $$" + interpret
    MathJax.typeset();
}

function correlation(){
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
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst;
    var ansrsquper = ansrsqu.toFixed(2) * 100;
    var signslope = ""
    if (ansslope > 0) {
        var signslope = "+"
        var signslopeval = +1
    } else if (ansslope < 0) {
        var signslope = "-"
        var signslopeval = -1
    } else {
        var signslope = ""
        var signslopeval = 0
    }
    var anscorcoef = signslopeval * Math.sqrt(ansrsqu)    
    var interpret = "Interpretation: " + ansrsquper + "% of the variation in y is explained by the linear relationship between x and y."
    document.getElementById("output").innerHTML = "Sample Correlation Coefficient $$ \\begin{align} r_{xy} &= (\\text{sign of } b_1) \\sqrt{r^2} \\\\ &= "+signslope+"\\sqrt{" +ansrsqu.toFixed(2) +"} \\\\ &= "+anscorcoef.toFixed(2)+" \\end{align} $$" + interpret
    MathJax.typeset();
}

function mse(){
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
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    document.getElementById("output").innerHTML = "Mean Square Error $$ \\begin{align} s^2 = \\text{MSE} &= \\frac{\\text{SSE}}{\\text{n-2}} \\\\ &= \\frac{"+anssse.toFixed(2)+"}{" + n_x +" - 2} \\\\ &= "+ansrsqu.toFixed(2)+" \\end{align} $$"
    MathJax.typeset();
}

function see(){
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
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    document.getElementById("output").innerHTML = "Standard Error of the Estimate $$ \\begin{align} s = \\sqrt{\\text{MSE}} &= \\sqrt{\\frac{\\text{SSE}}{\\text{n-2}}}\\\\ &= \\sqrt{"+ansmse.toFixed(2)+"} \\\\ &= " + anssee.toFixed(2) +" \\end{align} $$"
    MathJax.typeset();
}

function ses(){
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
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    document.getElementById("output").innerHTML = "Standard Error of the Slope $$ \\begin{align} s_{b_1} &= \\frac{s}{\\sqrt{\\sum(x - \\bar{x})^2}} \\\\ &= \\frac{"+anssee.toFixed(2)+"}{\\sqrt{"+sum_xminusx_bar2.toFixed(2)+"}} \\\\ &= " + anssee.toFixed(2) +" \\end{align} $$"
    MathJax.typeset();
}

function tstat(){
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
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    var anststat = ansslope / ansses;
    document.getElementById("output").innerHTML = "$$ \\begin{align} t &= \\frac{b_1}{s_{b_1}} \\\\ &= \\frac{"+ansslope.toFixed(2)+"}{"+ansses.toFixed(2)+"} \\\\ &= " + anststat.toFixed(2) +" \\end{align} $$"
    MathJax.typeset();
}

function msr(){
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
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    var anststat = ansslope / ansses;
    var ansmsr = ansssr;
    document.getElementById("output").innerHTML = "Mean Square Regression $$ \\begin{align} \\text{MSR} &= \\frac{\\text{SSR}}{1} \\\\ &= "+ansmsr.toFixed(2)+" \\end{align} $$"
    MathJax.typeset();
}

function fstat(){
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
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    var anststat = ansslope / ansses; var ansmsr = ansssr;
    var ansfstat = ansmsr / ansmse;
    document.getElementById("output").innerHTML = "$$ \\begin{align} F &= \\frac{\\text{MSR}}{\\text{MSE}} \\\\ &= \\frac{"+ansmsr.toFixed(2)+"}{"+ansmse.toFixed(2)+"} \\\\ &= "+ ansfstat.toFixed(2) + " \\end{align} $$"
    MathJax.typeset();
}



