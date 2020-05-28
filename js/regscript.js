$("#explanation").hide(); $("#sumsquares").hide(); $("#meansquare").hide(); $("#standarderror").hide();

function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob
	}
	return Prob
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
    $("#output").empty(); $("#explanation").hide(); 
    $("#sumsquares").hide(); $("#meansquare").hide(); $("#standarderror").hide();
    var x = document.getElementById("stat").value;
    if (x == "slope"){
        slope()
    } else if (x == "intercept"){
        intercept()
    } else if (x == "equation") {
        equation()
    } else if (x == "sumsquares") {
        sumsquares()
    } else if (x == "rsquared") {
        rsquared()
    } else if (x == "meansquare") {
        meansquare()
    } else if (x == "standarderror") {
        standarderror()
    } else if (x == "tstat") {
        tstat()
    } else if (x == "fstat") {
        fstat()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function slope(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The slope of the estimated regression equation can be interpreted as the average predicted change in y from a one-unit increase in x."
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
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to increase by "+ansslope.toFixed(2)+" units on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to decrease by "+Math.abs(ansslope.toFixed(2))+" units on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to increase nor decrease on average."
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
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>$$"+Math.round(sum_xminusx_bar)+"$$</td>"+ "<td>$$"+Math.round(sum_yminusy_bar)+"$$</td>" +"<td>$$"+sum_xxbminyyb.toFixed(2)+"$$</td>"+"<td>$$"+sum_xminusx_bar2.toFixed(2)+"$$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "<b>Slope</b> <br><br> <table border=1>" + table + "</table><br>$$b_{1} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sum(x - \\bar{x})^2} = \\frac{"+sum_xxbminyyb.toFixed(2)+"}{"+sum_xminusx_bar2.toFixed(2)+"}=\\boxed{"+ansslope.toFixed(2)+"}$$" + interpret + "<br><br>"
    MathJax.typeset();
}

function intercept(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The intercept of the estimated regression equation can be interpreted as the predicted value of y when x = 0."
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
    var interpret = "<b>Interpretation:</b> The predicted value of y when x = 0 is " + ansint.toFixed(2) + "."
    document.getElementById("output").innerHTML = "<b>Intercept</b>$$ \\begin{align} b_{0} &= \\bar{y} - b_{1} \\bar{x} \\\\ &= "+mean_y.toFixed(2)+" - (" +ansslope.toFixed(2) + ")(" + mean_x.toFixed(2)+ ") \\\\ &= \\boxed{"+ansint.toFixed(2)+"} \\end{align} $$" + interpret + "<br><br>"
    MathJax.typeset();
}

function equation(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The estimated regression equation is an equation relating y and x. It can be used to predict the value fo y for a given value of x."
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
    document.getElementById("output").innerHTML = "<b>Estimated Regression Equation</b>$$ \\hat{y} = b_{0} + b_{1} x $$ $$ \\boxed{ \\hat{y} = "+ansint.toFixed(2) +" + "+ansslope.toFixed(2)+"x}  $$ Predict $y$ when $x=$ <br><br>"
    MathJax.typeset();
}

function sumsquares() {
    $("#sumsquares").show();
}

function calcsumsquares() {
    var val = document.getElementById("sumsquaresval").value;
    if (val=="error") {
        sse()
    } else if (val=="total") {
        sst()
    } else if (val=="regression") {
        ssr()
    }
}

function sse(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The sum of squares error (SSE) measure the variability of the points around estimated regession line."
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
    document.getElementById("output").innerHTML = "<b>Sum of Squares Error</b> <br><br> <table border=1>" + table + "</table><br>$$ \\text{SSE} = \\sum(y - \\hat{y})^2 = \\boxed{"+anssse.toFixed(2)+"}$$"
    MathJax.typeset();
}

function sst(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The sum of squares total (SST) measure the variability of the points around the mean of y."
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
    document.getElementById("output").innerHTML = "<b>Sum of Squares Total</b> <br><br> <table border=1>" + table + "</table><br>$$ \\text{SST} = \\sum(y - \\bar{y})^2 = \\boxed{"+anssst.toFixed(2)+"}$$"
    MathJax.typeset();
}

function ssr(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The sum of squares regression (SSR) measures the distance between the estimated regression line and the mean of y."
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
    document.getElementById("output").innerHTML = "<b>Sum of Squares Regression</b> $$ \\begin{align} \\text{SSR} &= \\text{SST} - \\text{SSE} \\\\ &= "+anssst.toFixed(2)+" - " +anssse.toFixed(2) +" \\\\ &= \\boxed{"+ansssr.toFixed(2)+"} \\end{align} $$"
    MathJax.typeset();
}

function rsquared(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The coefficient of determination measures the variability of y that can be explained by the estimated regression equation. It is a value between 0 and 1, with a higher value indicating more explained variability."
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
    var interpret = "<b>Interpretation:</b> " + ansrsquper + "% of the variation in y is explained by the estimated regression equation."
    document.getElementById("output").innerHTML = "<b>Coefficient of Determination</b> $$ \\begin{align} r^2 &= \\frac{\\text{SSR}}{\\text{SST}} \\\\ &= \\frac{"+ansssr.toFixed(2)+"}{" +anssst.toFixed(2) +"} \\\\ &= \\boxed{"+ansrsqu.toFixed(2)+"} \\end{align} $$" + interpret + "<br><br>"
    MathJax.typeset();
}

function correlation(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = ""
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
    var interpret = "Interpretation: " + ansrsquper + "% of the variation in y is explained by the estimated regression equation."
    document.getElementById("output").innerHTML = "$$ \\begin{align} r_{xy} &= (\\text{sign of } b_1) \\sqrt{r^2} \\\\ &= "+signslope+"\\sqrt{" +ansrsqu.toFixed(2) +"} \\\\ &= \\boxed{"+anscorcoef.toFixed(2)+"} \\end{align} $$" + interpret + "<br><br>"
    MathJax.typeset();
}

function meansquare() {
    $("#meansquare").show(); 
}

function calcmeansquare() {
    var val = document.getElementById("meansquareval").value;
    if (val=="error") {
        mse()
    } else if (val=="regression") {
        msr()
    }
}

function mse(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The mean square error (MSE) is related to the SSE."
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
    document.getElementById("output").innerHTML = "<b>Mean Square Error</b> $$ \\begin{align} s^2 = \\text{MSE} &= \\frac{\\text{SSE}}{\\text{n-2}} \\\\ &= \\frac{"+anssse.toFixed(2)+"}{" + n_x +" - 2} \\\\ &= \\boxed{"+ansrsqu.toFixed(2)+"} \\end{align} $$"
    MathJax.typeset();
}

function standarderror() {
    $("#standarderror").show(); 
}

function calcstandarderror() {
    var val = document.getElementById("standarderrorval").value;
    if (val=="estimate") {
        see()
    } else if (val=="slope") {
        ses()
    }
}

function see(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The standard error of estimate (SEE) measure the error in the estimated regression equation."
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
    document.getElementById("output").innerHTML = "<b>Standard Error of Estimate</b>$$ \\begin{align} s = \\sqrt{\\text{MSE}} &= \\sqrt{\\frac{\\text{SSE}}{\\text{n-2}}}\\\\ &= \\sqrt{"+ansmse.toFixed(2)+"} \\\\ &= \\boxed{" + anssee.toFixed(2) +"} \\end{align} $$"
    MathJax.typeset();
}

function ses(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = ""
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
    document.getElementById("output").innerHTML = "<b>Standard Error of Slope</b> $$ \\begin{align} s_{b_1} &= \\frac{s}{\\sqrt{\\sum(x - \\bar{x})^2}} \\\\ &= \\frac{"+anssee.toFixed(2)+"}{\\sqrt{"+sum_xminusx_bar2.toFixed(2)+"}} \\\\ &= \\boxed{" + anssee.toFixed(2) +"} \\end{align} $$"
    MathJax.typeset();
}

function tstat(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The t-statistic is used a conduct a t test, which determines whether there is a significant linear relationship between x and y."
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
    var anststat = ansslope / ansses; var anststatneg = -Math.abs(anststat)
    var zptwo = normalcdf(anststatneg); var zptwo2 = 2 * zptwo;
    document.getElementById("output").innerHTML = "<b>t-Statistic</b>$$ \\begin{align} t &= \\frac{b_1}{s_{b_1}} \\\\ &= \\frac{"+ansslope.toFixed(2)+"}{"+ansses.toFixed(2)+"} \\\\ &= \\boxed{" + anststat.toFixed(2) +"} \\end{align} $$ $$ \\begin{align} \\text{p-value}&=2*P(t \\leq "+anststatneg.toFixed(2)+" ) \\\\ &= 2*" + zptwo.toFixed(4)+ " = "+zptwo2.toFixed(4)+" \\end{align} $$ $$\\text{p-value}="+zptwo2.toFixed(4)+"\\leq \\alpha = .05 $$ $$ \\textbf{Conclusion:} \\text{ There is a significant linear relationship between x and y} $$"
    MathJax.typeset();
}

function msr(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The mean square regression (MSR) is related to the SSR."
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
    document.getElementById("output").innerHTML = "<b>Mean Square Regression</b> $$ \\begin{align} \\text{MSR} &= \\frac{\\text{SSR}}{1} \\\\ &= \\boxed{"+ansmsr.toFixed(2)+"} \\end{align} $$"
    MathJax.typeset();
}

function fstat(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The F-statistic is used to conduct an F-test which, like the t-test, determines whether there is a significant relationshihp between x and y."
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
    document.getElementById("output").innerHTML = "<b>F-Statistic</b>$$ \\begin{align} F &= \\frac{\\text{MSR}}{\\text{MSE}} \\\\ &= \\frac{"+ansmsr.toFixed(2)+"}{"+ansmse.toFixed(2)+"} \\\\ &= \\boxed{"+ ansfstat.toFixed(2) + "} \\end{align} $$"
    MathJax.typeset();
}

function examplexvalues(){
    document.getElementById('valuesx').value="1, 2, 3, 4, 5"
    document.getElementById('valuesy').value="3, 7, 5, 11, 14"
}

function exampleyvalues(){
    document.getElementById('valuesy').value="3, 7, 5, 11, 14"
    document.getElementById('valuesx').value="1, 2, 3, 4, 5"
}

