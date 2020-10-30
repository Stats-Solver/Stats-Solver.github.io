$("#explanation").hide(); $("#meansquare").hide(); $("#standarderror").hide(); $("#predict").hide();
$("#plus3").hide(); $("#b3").hide(); $("#x3").hide(); $("#plus4").hide(); $("#b4").hide(); $("#x4").hide();
$("#three2two").hide(); $("#three2four").hide(); $("#four2three").hide();
$("#xvalues").hide(); $("#msrmse").hide(); $("#sb1sb4").hide()
$("#sumsquares").hide();

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

function examplevalues(){
    document.getElementById('b0').value="29.1270"
    document.getElementById('b1').value=".5906"
    document.getElementById('b2').value=".4980"
    document.getElementById('b3').value=""
    document.getElementById('b4').value=""
    document.getElementById('x1value').value="180"
    document.getElementById('x2value').value="310"
    document.getElementById('x3value').value=""
    document.getElementById('x4value').value=""
    document.getElementById('sstvalue').value="6724.125"
    document.getElementById('ssrvalue').value="6216.375"
    document.getElementById('nvalue').value="10"
    document.getElementById('msrvalue').value="3108.19"
    document.getElementById('msevalue').value="72.54"
    document.getElementById("sb1value").value=".0813"
    document.getElementById("sb2value").value=".0567"
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
    document.getElementById('b0').value="17.6"
    document.getElementById('b1').value="3.8"
    document.getElementById('b2').value="-2.3"
    document.getElementById('b3').value="7.6"
    document.getElementById('b4').value="2.7"
    document.getElementById('x1value').value="10"
    document.getElementById('x2value').value="5"
    document.getElementById('x3value').value="1"
    document.getElementById('x4value').value="2"
    document.getElementById('sstvalue').value="1805"
    document.getElementById('ssrvalue').value="1760"
    document.getElementById('nvalue').value="30"
    document.getElementById('msrvalue').value="440"
    document.getElementById('msevalue').value="1.8"
    document.getElementById("sb1value").value=".8135"
    document.getElementById("sb2value").value=".5674"
    document.getElementById("sb3value").value=".2471"
    document.getElementById("sb4value").value=".9484"
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

