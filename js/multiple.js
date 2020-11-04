$("#explanation").hide(); $("#meansquare").hide(); $("#standarderror").hide(); $("#predict").hide();
$("#plus3").hide(); $("#b3").hide(); $("#x3").hide(); $("#plus4").hide(); $("#b4").hide(); $("#x4").hide();
$("#three2two").hide(); $("#three2four").hide(); $("#four2three").hide();
$("#xvalues").hide(); $("#msrmse").hide(); $("#sb1sb4").hide()
$("#sumsquares").hide(); 

$("#switchvalues").hide(); $("#switchdata").show(); $("#valuesinput").show(); $("#datainput").hide();

function make2(){
    $("#plus3").hide(); $("#b3").hide(); $("#x3").hide(); $("#plus4").hide(); $("#b4").hide(); $("#x4").hide();
    $("#two2three").show(); $("#three2two").hide(); $("#three2four").hide(); $("#four2three").hide();
    ind = 2
    var x = document.getElementById("stat").value;
    if (x == "prediction"){
        prediction()
    } else if (x == "tstat"){
        tstat()
    } 
}

function make3(){
    $("#plus3").show(); $("#b3").show(); $("#x3").show(); $("#plus4").hide(); $("#b4").hide(); $("#x4").hide();
    $("#two2three").hide(); $("#three2two").show(); $("#three2four").show(); $("#four2three").hide();
    ind = 3
    var x = document.getElementById("stat").value;
    if (x == "prediction"){
        prediction()
    } else if (x == "tstat"){
        tstat()
    } 
}

function make4(){
    $("#plus3").show(); $("#b3").show(); $("#x3").show(); $("#plus4").show(); $("#b4").show(); $("#x4").show();
    $("#two2three").hide(); $("#three2two").hide(); $("#three2four").hide(); $("#four2three").show();
    ind = 4
    var x = document.getElementById("stat").value;
    if (x == "prediction"){
        prediction()
    } else if (x == "tstat"){
        tstat()
    } 
}

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

function showthings(){
    $("#xvalues").hide(); $("#msrmse").hide(); $("#sb1sb4").hide(); $("#sumsquares").hide();
    var x = document.getElementById("stat").value;
    if (x == "prediction"){
        prediction()
    } else if (x == "sse"){
        sse()
    } else if (x == "rsquared"){
        rsquared()
    } else if (x == "adjusted"){
        adjusted()
    } else if (x == "msr"){
        msr()
    } else if (x == "mse"){
        mse()
    } else if (x == "fstat"){
        fstat()
    } else if (x == "tstat"){
        tstat()
    } 
}

function stat(){
    $("#output").empty(); $("#explanation").hide(); 
    $("#meansquare").hide(); $("#standarderror").hide();
    var x = document.getElementById("stat").value;
    if (x == "interpretation"){
        interpretation()
    } else if (x == "prediction"){
        calcprediction()
    } else if (x == "sse") {
        calcsse()
    } else if (x == "rsquared") {
        calcrsquared()
    } else if (x == "adjusted") {
        calcadjusted()
    } else if (x == "mse") {
        calcmse()
    } else if (x == "tstat") {
        calctstat()
    } else if (x == "msr") {
        calcmsr()
    } else if (x == "fstat") {
        calcfstat()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function interpretation(){
    $("#explanation").hide();
    document.getElementById("descriptiontext").innerHTML = "Each slope coefficient can be interpreted as the change in the dependent variable (y) corresponding to a one-unit increase in the independent variable (xᵢ), holding the other independent variables constant."
    document.getElementById("formulatext").innerHTML = "The formulas for estimating the coefficients in multiple regression involves the use of more advanced math. "
    document.getElementById("explanationtext").innerHTML = "The interpretation of the coefficients in a multiple regression is identical to that in a simple regression except for the addition of holding other independent variables constant."
    var b0 = document.getElementById("b1").value;
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    
    if (b1 >= 0) {
        var b1sign = "increase"
    } else {
        var b1sign = "decrease"
    }
    
    if (b2 >= 0) {
        var b2sign = "increase"
    } else {
        var b2sign = "decrease"
    }
    
    if (b3 >= 0) {
        var b3sign = "increase"
    } else {
        var b3sign = "decrease"
    }
    
    if (b4 >= 0) {
        var b4sign = "increase"
    } else {
        var b4sign = "decrease"
    }
    
    if (ind == 3) {
        document.getElementById("output").innerHTML = "$b_1$: For every one-unit increase in $x_1$, $y$ is predicted to "+ b1sign +" by " + Math.abs(b1) + " units, holding $x_2$ and $x_3$ constant.<br><br> $b_2$: For every one-unit increase in $x_2$, $y$ is predicted to "+ b2sign +" by " + Math.abs(b2) + " units, holding $x_1$ and $x_3$ constant. <br><br> $b_3$:  For every one-unit increase in $x_3$, $y$ is predicted to "+ b3sign +" by " + Math.abs(b3) + " units, holding $x_1$ and $x_2$ constant. <br><br>"
    } else if (ind == 4) {
        document.getElementById("output").innerHTML = "$b_1$: For every one-unit increase in $x_1$, $y$ is predicted to "+ b1sign +" by " + Math.abs(b1) + " units, holding $x_2$, $x_3$ and $x_4$ constant.<br><br> $b_2$:  For every one-unit increase in $x_2$, $y$ is predicted to "+ b2sign +" by " + Math.abs(b2) + " units, holding $x_1$, $x_3$ and $x_4$ constant. <br><br> $b_3$:  For every one-unit increase in $x_3$, $y$ is predicted to "+ b3sign +" by " + Math.abs(b3) + " units, holding $x_1$, $x_2$ and $x_4$ constant. <br><br> $b_4$:  For every one-unit increase in $x_4$, $y$ is predicted to "+ b4sign +" by " + Math.abs(b4) + " units, holding $x_1$, $x_2$ and $x_3$ constant. <br><br>"
    } else {
        document.getElementById("output").innerHTML = "$b_1$: For every one-unit increase in $x_1$, $y$ is predicted to "+ b1sign +" by " + Math.abs(b1) + " units, holding $x_2$ constant.<br><br> $b_2$: For every one-unit increase in $x_2$, $y$ is predicted to "+ b2sign +" by " + Math.abs(b2) + " units, holding $x_1$ constant. <br><br>"
    }
    
    MathJax.typeset();
}

function prediction(){
    $("#sumsquares").hide(); 
    $("#xvalues").show();
    $("#x3s").hide();
    $("#equal3").hide();  
    $("#x3value").hide(); 
    $("#x4s").hide();
    $("#equal4").hide();  
    $("#x4value").hide();
    if (ind == 3) {
        $("#x3s").show();
        $("#equal3").show();  
        $("#x3value").show(); 
        $("#x4s").hide();
        $("#equal4").hide();  
        $("#x4value").hide();
    } else if (ind == 4) {
        $("#x3s").show();
        $("#equal3").show();  
        $("#x3value").show(); 
        $("#x4s").show();
        $("#equal4").show();  
        $("#x4value").show();
    } else {
        $("#x3s").hide();
        $("#equal3").hide();  
        $("#x3value").hide(); 
        $("#x4s").hide();
        $("#equal4").hide();  
        $("#x4value").hide();
    }
}

function calcprediction(){
    $("#explanation").hide();
    document.getElementById("descriptiontext").innerHTML = "Predictions can be made by plugging in values of the independent variable into the estimated regression equation."
    if (ind == 3) {
        document.getElementById("formulatext").innerHTML = "$$ \\hat{y} = b_0 + b_1 x_1 + b_2 x_2 + b_3 x_3 $$ "
    } else if (ind == 4) {
        document.getElementById("formulatext").innerHTML = "$$ \\hat{y} = b_0 + b_1 x_1 + b_2 x_2 + b_3 x_3 + b_4 x_4 $$ "
    } else {
        document.getElementById("formulatext").innerHTML = "$$ \\hat{y} = b_0 + b_1 x_1 + b_2 x_2 $$ "
    }
    document.getElementById("explanationtext").innerHTML = "The interpretation of the coefficients in a multiple regression is identical to that in a simple regression except for the addition of holding other independent variables constant."
    var b0 = document.getElementById("b0").value;
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    
    var x1 = document.getElementById("x1value").value;
    var x2 = document.getElementById("x2value").value;
    var x3 = document.getElementById("x3value").value;
    var x4 = document.getElementById("x4value").value;
    
    if (ind == 3) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\hat{y} &= " + b0 + " + " + b1 + " (" + x1 + ") + " + b2 + " (" + x2 + ") + " + b3 + " (" + x3 + ") \\\\ &= \\boxed{" + (parseFloat(b0)+parseFloat(b1*x1)+parseFloat(b2*x2)+parseFloat(b3*x3)).toFixed(2) + "} \\end{align} $$"
    } else if (ind == 4) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\hat{y} &= " + b0 + " + " + b1 + " (" + x1 + ") + " + b2 + " (" + x2 + ") + " + b3 + " (" + x3 + ") + " + b4 + " (" + x4 + ") \\\\ &= \\boxed{" + (parseFloat(b0)+parseFloat(b1*x1)+parseFloat(b2*x2)+parseFloat(b3*x3)+parseFloat(b4*x4)).toFixed(2) + "} \\end{align} $$"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\hat{y} &= " + b0 + " + " + b1 + " (" + x1 + ") + " + b2 + " (" + x2 + ") \\\\ &= \\boxed{" + (parseFloat(b0)+parseFloat(b1*x1)+parseFloat(b2*x2)).toFixed(2) + "} \\end{align} $$"
    }
    
    MathJax.typeset();
}

function sse(){
    $("#sumsquares").show();
    $("#samplesize").hide(); $("#equal0s").hide(); $("#nvalue").hide();
    $("#sst").show(); $("#equal1s").show(); $("#sstvalue").show();
}

function calcsse(){
    $("#explanation").hide();
    document.getElementById("descriptiontext").innerHTML = "The sum of squares error measures the error between the data values and the estimated regression equation."
    document.getElementById("formulatext").innerHTML = "$$ \\text{SST} = \\text{SSR} + \\text{SSE} $$ "
    document.getElementById("explanationtext").innerHTML = "If two sum of squares are known, the third one is easy to find."
    var sst = document.getElementById('sstvalue').value
    var ssr = document.getElementById('ssrvalue').value
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{SSE} &= \\text{SST} - \\text{SSR} \\\\ &= "+sst+" - " +ssr +" \\\\ &= \\boxed{"+(sst-ssr).toFixed(2)+"} \\end{align} $$"
    MathJax.typeset();
}

function rsquared(){
    $("#sumsquares").show();
    $("#samplesize").hide(); $("#equal0s").hide(); $("#nvalue").hide();
    $("#sst").show(); $("#equal1s").show(); $("#sstvalue").show();
    $("#ssr").show(); $("#equal2s").show(); $("#ssrvalue").show();
}

function calcrsquared(){
    $("#explanation").hide();
    document.getElementById("descriptiontext").innerHTML = "The multiple coefficient of determination is a measure of goodness of fit for multiple regression."
    document.getElementById("formulatext").innerHTML = "$$ R^2 = \\frac{\\text{SSR}}{\\text{SST}} $$ "
    document.getElementById("explanationtext").innerHTML = "The coefficient of determination in multiple regression has the problem that its value increases automatically when independent variables are added."
    var sst = document.getElementById('sstvalue').value
    var ssr = document.getElementById('ssrvalue').value
    document.getElementById("output").innerHTML = "$$ \\begin{align} R^2 &= \\frac{\\text{SSR}}{\\text{SST}} \\\\ &= \\frac{"+ssr+"}{" +sst +"} \\\\ &= \\boxed{"+(ssr/sst).toFixed(2)+"} \\end{align} $$"
    MathJax.typeset();
}

function adjusted(){
    $("#sumsquares").show(); 
    $("#samplesize").show(); $("#equal0s").show(); $("#nvalue").show();
    $("#sst").show(); $("#equal1s").show(); $("#sstvalue").show();
    $("#ssr").show(); $("#equal2s").show(); $("#ssrvalue").show();
}

function calcadjusted(){
    $("#explanation").hide();
    document.getElementById("descriptiontext").innerHTML = "The adjusted coefficient of determination is a measure of goodness of fit for multiple regression that adjusts for the number of independent variables."
    document.getElementById("formulatext").innerHTML = "$$ R_a^2 = 1 - (1 - R^2) \\frac{n-1}{n-p-1} $$ "
    document.getElementById("explanationtext").innerHTML = "The adjusted coefficient of determination is preferred for measuring goodness of fit in multiple regression because it gives a penalty for each additional independent variable."
    var sst = document.getElementById('sstvalue').value
    var ssr = document.getElementById('ssrvalue').value
    var n = document.getElementById('nvalue').value
    var p = ind
    var rsquared = ssr/sst
    var adjans = 1 - (1 - rsquared)*(n-1)/(n-p-1)
    var ansrsquper = adjans.toFixed(2) * 100;
    var interpret = "<b>Interpretation:</b> <u>" + parseFloat(ansrsquper.toFixed(0)) + "% of the variation</u> in y is explained by the estimated regression equation."
    document.getElementById("output").innerHTML = "$$ \\begin{align} R_a^2 &= 1 - (1 - R^2) \\frac{n-1}{n-p-1} \\\\ &= 1 - (1 - " + rsquared.toFixed(2) + ") \\frac{" + n + " - 1}{" + n +" - " + p +" - 1} \\\\ &= \\boxed{"+adjans.toFixed(2)+"} \\end{align} $$"
    MathJax.typeset();
}

function msr(){
    $("#sumsquares").show();
    $("#samplesize").hide(); $("#equal0s").hide(); $("#nvalue").hide();
    $("#sst").hide(); $("#equal1s").hide(); $("#sstvalue").hide();
    $("#ssr").show(); $("#equal2s").show(); $("#ssrvalue").show();
}

function calcmsr(){
    $("#explanation").hide();
    document.getElementById("descriptiontext").innerHTML = "Like the mean square error, the mean square regression is an estimate of the error term."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSR} = \\frac{\\text{SSR}}{p} $$ "
    document.getElementById("explanationtext").innerHTML = "The MSR is divided by p because the SSR has p degrees of freedom."
    var ssr = document.getElementById('ssrvalue').value
    var p = ind
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{MSR} &= \\frac{\\text{SSR}}{p} \\\\ &= \\frac{"+ssr+"}{" +p +"} \\\\ &= \\boxed{"+parseFloat((ssr/p).toFixed(2))+"} \\end{align} $$"
    MathJax.typeset();
}hide

function mse(){
    $("#sumsquares").show(); 
    $("#samplesize").show(); $("#equal0s").show(); $("#nvalue").show();
    $("#sst").show(); $("#equal1s").show(); $("#sstvalue").show();
    $("#ssr").show(); $("#equal2s").show(); $("#ssrvalue").show();
}

function calcmse(){
    $("#explanation").hide();
    document.getElementById("descriptiontext").innerHTML = "Like the mean square regression, the mean square error is an estimate of the error term."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\text{SSE}}{n-p-1} $$ "
    document.getElementById("explanationtext").innerHTML = "The MSE is divided by n-p-1 because the SSE has n-p-1 degrees of freedom."
    var sst = document.getElementById('sstvalue').value;
    var ssr = document.getElementById('ssrvalue').value;
    var sse = sst - ssr;
    var n = document.getElementById('nvalue').value;
    var p = ind;
    var ans = sse/(n-p-1)
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{MSE} &= \\frac{\\text{SSE}}{n-p-1} \\\\ &= \\frac{"+sse+"}{" +n +"-" + p +"-1} \\\\ &= \\boxed{"+parseFloat(ans.toFixed(2))+"} \\end{align} $$"
    MathJax.typeset();
}

function fstat(){
    $("#msrmse").show(); $("#sumsquares").hide();
}

function calcfstat(){
    $("#explanation").hide();
    document.getElementById("descriptiontext").innerHTML = "The adjusted coefficient of determination is a measure of goodness of fit for multiple regression that adjusts for the number of independent variables."
    document.getElementById("formulatext").innerHTML = "$$ R_a^2 = 1 - (1 - R^2) \\frac{n-1}{n-p-1} $$ "
    document.getElementById("explanationtext").innerHTML = "The adjusted coefficient of determination is preferred for measuring goodness of fit in multiple regression because it gives a penalty for each additional independent variable."
    var msr = document.getElementById('msrvalue').value;
    var mse = document.getElementById('msevalue').value;
    document.getElementById("output").innerHTML = "$$ \\begin{align} F &= \\frac{\\text{MSR}}{\\text{MSE}} \\\\ &= \\frac{"+msr+"}{" +mse +"} \\\\ &= \\boxed{"+parseFloat((msr/mse).toFixed(2))+"} \\end{align} $$"
    MathJax.typeset();
}

function tstat(){
    $("#sumsquares").hide();
    $("#sb1sb4").show()
    $("#sb3").hide();
    $("#equal3b").hide();  
    $("#sb3value").hide(); 
    $("#sb4").hide();
    $("#equal4b").hide();  
    $("#sb4value").hide();
    if (ind == 3) {
        $("#sb3").show();
        $("#equal3b").show();  
        $("#sb3value").show(); 
        $("#sb4").hide();
        $("#equal4b").hide();  
        $("#sb4value").hide();
    } else if (ind == 4) {
        $("#sb3").show();
        $("#equal3b").show();  
        $("#sb3value").show(); 
        $("#sb4").show();
        $("#equal4b").show();  
        $("#sb4value").show();
    } else {
        $("#sb3").hide();
        $("#equal3b").hide();  
        $("#sb3value").hide(); 
        $("#sb4").hide();
        $("#equal4b").hide();  
        $("#sb4value").hide();
    }
}

function calctstat(){
    $("#explanation").hide();
    document.getElementById("descriptiontext").innerHTML = "The adjusted coefficient of determination is a measure of goodness of fit for multiple regression that adjusts for the number of independent variables."
    document.getElementById("formulatext").innerHTML = "$$ R_a^2 = 1 - (1 - R^2) \\frac{n-1}{n-p-1} $$ "
    document.getElementById("explanationtext").innerHTML = "The adjusted coefficient of determination is preferred for measuring goodness of fit in multiple regression because it gives a penalty for each additional independent variable."
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    
    var sb1 = document.getElementById("sb1value").value;
    var sb2 = document.getElementById("sb2value").value;
    var sb3 = document.getElementById("sb3value").value;
    var sb4 = document.getElementById("sb4value").value;
    
    
    if (ind == 3) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} t &= \\frac{b_1}{s_{b_1}} \\\\ &= \\frac{"+b1+"}{" +sb1 +"} \\\\ &= \\boxed{"+parseFloat((b1/sb1).toFixed(2))+"} \\end{align} $$ $$ \\begin{align} t &= \\frac{b_2}{s_{b_2}} \\\\ &= \\frac{"+b2+"}{" +sb2 +"} \\\\ &= \\boxed{"+parseFloat((b2/sb2).toFixed(2))+"} \\end{align} $$ $$ \\begin{align} t &= \\frac{b_3}{s_{b_3}} \\\\ &= \\frac{"+b3+"}{" +sb3 +"} \\\\ &= \\boxed{"+parseFloat((b3/sb3).toFixed(2))+"} \\end{align} $$"
    } else if (ind == 4) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} t &= \\frac{b_1}{s_{b_1}} \\\\ &= \\frac{"+b1+"}{" +sb1 +"} \\\\ &= \\boxed{"+parseFloat((b1/sb1).toFixed(2))+"} \\end{align} $$ $$ \\begin{align} t &= \\frac{b_2}{s_{b_2}} \\\\ &= \\frac{"+b2+"}{" +sb2 +"} \\\\ &= \\boxed{"+parseFloat((b2/sb2).toFixed(2))+"} \\end{align} $$ $$ \\begin{align} t &= \\frac{b_3}{s_{b_3}} \\\\ &= \\frac{"+b3+"}{" +sb3 +"} \\\\ &= \\boxed{"+parseFloat((b3/sb3).toFixed(2))+"} \\end{align} $$ $$ \\begin{align} t &= \\frac{b_4}{s_{b_4}} \\\\ &= \\frac{"+b4+"}{" +sb4 +"} \\\\ &= \\boxed{"+parseFloat((b4/sb4).toFixed(2))+"} \\end{align} $$"
    } else {
         document.getElementById("output").innerHTML = "$$ \\begin{align} t &= \\frac{b_1}{s_{b_1}} \\\\ &= \\frac{"+b1+"}{" +sb1 +"} \\\\ &= \\boxed{"+parseFloat((b1/sb1).toFixed(2))+"} \\end{align} $$ $$ \\begin{align} t &= \\frac{b_2}{s_{b_2}} \\\\ &= \\frac{"+b2+"}{" +sb2 +"} \\\\ &= \\boxed{"+parseFloat((b2/sb2).toFixed(2))+"} \\end{align} $$"
    }
    
    MathJax.typeset();
}
























function equation(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) corresponding to a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$$b_{1} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sum(x - \\bar{x})^2} $$"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x1 = document.getElementById("valuesx1").value;
    var str_x2 = document.getElementById("valuesx2").value;
    var str_y = document.getElementById("valuesy").value;
    var x1 = str_x1.split(",").map(Number); var n_x1 = x1.length;
    var x2 = str_x2.split(",").map(Number); var n_x2 = x2.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x1 = sum(x1); var sum_x2 = sum(x2); var sum_y = sum(y);
    var mean_x1 = avg(x); var mean_x2 = avg(x2); var mean_y = avg(y);
    var x1minusx1_bar = x1.map( function(value) {
        return value - mean_x1;
    } );
    var x2minusx2_bar = x2.map( function(value) {
        return value - mean_x2;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var x1x1bminyyb = [];
    for(var i = 0; i < n_x1; i++){
        x1x1bminyyb[i] = x1minusx1_bar[i] * yminusy_bar[i]
    }
    var x2x2bminyyb = [];
    for(var i = 0; i < n_x2; i++){
        x2x2bminyyb[i] = x2minusx2_bar[i] * yminusy_bar[i]
    }
    var x1x1bminx2x2b = [];
    for(var i = 0; i < n_x1; i++){
        x1x1bminx2x2b[i] = x1minusx1_bar[i] * x2minusx2_bar[i]
    }
    var x1minusx1_bar2 = x1minusx1_bar.map( function(value) {
        return value * value;
    } );
    var x2minusx2_bar2 = x1minusx1_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_x1minusx1_bar = sum(x1minusx1_bar); 
    var sum_x2minusx2_bar = sum(x2minusx2_bar); 
    var sum_yminusy_bar = sum(yminusy_bar);
    var sum_x1x1bminyyb = sum(x1x1bminyyb);
    var sum_x2x2bminyyb = sum(x2x2bminyyb);
    var sum_x1x1bminx2x2b = sum(x1x1bminx2x2b);
    var sum_x1minusx1_bar2 = sum(x1minusx1_bar2); 
    var sum_x2minusx2_bar2 = sum(x2minusx2_bar2); 
    var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope1 = (sum_x2minusx2_bar2 * sum_x1x1bminyyb - sum_x1x1bminx2x2b * sum_x2x2bminyyb) / (sum_x1minusx1_bar2 * sum_x2minusx2_bar2 - sum_x1x1bminx2x2b * sum_x1x1bminx2x2b); 
    var ansslope2 = (sum_x1minusx1_bar2 * sum_x2x2bminyyb - sum_x1x1bminx2x2b * sum_x1x1bminyyb) / (sum_x1minusx1_bar2 * sum_x2minusx2_bar2 - sum_x1x1bminx2x2b * sum_x1x1bminx2x2b);  
    var ansint = mean_y - ansslope1 * mean_x1 - ansslope2 * mean_x2;
    
    if (ansslope1 >= 0) {
        var signslope1 = "+"
    } else if (ansslope1 < 0) {
        var signslope1 = "-"
    } 
    
    if (ansslope2 >= 0) {
        var signslope2 = "+"
    } else if (ansslope2 < 0) {
        var signslope2 = "-"
    }
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x1, y is predicted to <u>increase by "+parseFloat(ansslope1.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x1, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope1.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x1, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$x - \\bar{x}$" + "</td>" + "<td>" + "$y - \\bar{y}$" + "</td>"+ "<td>" + "$(x - \\bar{x})(y - \\bar{y})$" + "</td>" +"<td>" + "$(x - \\bar{x})^2$" + "</td>"+ "</tr>";
    var rows = n_x; var cols = 6;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusy_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xxbminyyb[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sum_xminusx_bar)+"$</td>"+ "<td>$"+Math.round(sum_yminusy_bar)+"$</td>" +"<td>$"+parseFloat(sum_xxbminyyb.toFixed(2))+"$</td>"+"<td>$"+parseFloat(sum_xminusx_bar2.toFixed(2))+"$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table>$$b_{1}  = \\frac{"+parseFloat(sum_xxbminyyb.toFixed(2))+"}{"+parseFloat(sum_xminusx_bar2.toFixed(2))+"}="+parseFloat(ansslope.toFixed(2))+"$$ $$  b_{0} = "+parseFloat(mean_y.toFixed(2))+" - (" +parseFloat(ansslope.toFixed(2)) + ")(" + parseFloat(mean_x.toFixed(2))+ ") = "+parseFloat(ansint.toFixed(2))+" $$ $$\\boxed{ \\hat{y} = "+parseFloat(ansint.toFixed(2)) + signslope +parseFloat(Math.abs(ansslope).toFixed(2))+"x} $$"
    MathJax.typeset();
}
































function examplevalues(){
    document.getElementById('b0').value="25.38"
    document.getElementById('b1').value=".67"
    document.getElementById('b2').value=".39"
    document.getElementById('b3').value=""
    document.getElementById('b4').value=""
    document.getElementById('x1value').value="140"
    document.getElementById('x2value').value="290"
    document.getElementById('x3value').value=""
    document.getElementById('x4value').value=""
    document.getElementById('sstvalue').value="5893"
    document.getElementById('ssrvalue').value="5376"
    document.getElementById('nvalue').value="10"
    document.getElementById('msrvalue').value="2905"
    document.getElementById('msevalue').value="63.41"
    document.getElementById("sb1value").value=".072"
    document.getElementById("sb2value").value=".061"
    document.getElementById("sb3value").value=""
    document.getElementById("sb4value").value=""
    $("#plus3").hide(); 
    $("#b3").hide(); 
    $("#x3").hide(); 
    $("#plus4").hide(); 
    $("#b4").hide(); 
    $("#x4").hide();
    $("#two2three").show();
    $("#three2two").hide(); 
    $("#three2four").hide(); 
    $("#four2three").hide();
    ind = 2
    var x = document.getElementById("stat").value;
    if (x == "prediction"){
        prediction()
    } else if (x == "tstat"){
        tstat()
    } 
}

function examplevalues2(){
    document.getElementById('b0').value="16.5"
    document.getElementById('b1').value="4.3"
    document.getElementById('b2').value="-1.8"
    document.getElementById('b3').value="8.1"
    document.getElementById('b4').value="3.7"
    document.getElementById('x1value').value="11"
    document.getElementById('x2value').value="4"
    document.getElementById('x3value').value="3"
    document.getElementById('x4value').value="1"
    document.getElementById('sstvalue').value="1745"
    document.getElementById('ssrvalue').value="1629"
    document.getElementById('nvalue').value="40"
    document.getElementById('msrvalue').value="350"
    document.getElementById('msevalue').value="1.6"
    document.getElementById("sb1value").value=".73"
    document.getElementById("sb2value").value=".48"
    document.getElementById("sb3value").value=".31"
    document.getElementById("sb4value").value=".86"
    $("#plus3").show(); 
    $("#b3").show(); 
    $("#x3").show(); 
    $("#plus4").show(); 
    $("#b4").show(); 
    $("#x4").show();
    $("#two2three").hide();
    $("#three2two").hide(); 
    $("#three2four").hide(); 
    $("#four2three").show();
    ind = 4
    var x = document.getElementById("stat").value;
    if (x == "prediction"){
        prediction()
    } else if (x == "tstat"){
        tstat()
    } 
}








function examplevalues3() {
    document.getElementById('valuesx1').value="33, 45, 26, 60, 43, 52, 78, 31, 57, 79"
    document.getElementById('valuesx2').value="13, 11, 16, 14, 6, 18, 5, 14, 16, 12"
    document.getElementById('valuesy').value="96, 105, 114, 173, 95, 174, 173, 118, 141, 210"
}

function examplevalues4() {
    document.getElementById('valuesx1').value="6, 3, 5, 2, 4, 5, 3, 4"
    document.getElementById('valuesx2').value="2.5, 3, 1, 3.5, 4, 3, 2.5, 1.5"
    document.getElementById('valuesy').value="94, 88, 93, 90, 87, 85, 86, 89"
}


















function switchdata() {
    $("#switchvalues").show(); $("#switchdata").hide();
    $("#valuesinput").hide(); $("#datainput").show();
    $("#output1").empty(); $("#output2").empty(); $("#explanation").hide(); $("#canvascontainer").hide();
}
 
function switchvalues() {
    $("#switchvalues").hide(); $("#switchdata").show();
    $("#valuesinput").show(); $("#datainput").hide();
    $("#output").empty(); $("#explanation").hide(); $("#canvascontainer").hide();
}