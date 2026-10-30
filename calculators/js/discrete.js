$("#expectedtable").show(); $("#explanation").hide();
$("#binomial").hide(); $("#poisson").hide(); $("#hypergeometric").hide();
$("#expected").show();
$("#row4").hide(); $("#row5").hide(); $("#row6").hide(); $("#row7").hide();
$("#row8").hide(); $("#row9").hide(); $("#row10").hide();
$("#expectedexamples").show(); $("#standardexamples").hide();
$("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
$("#tableprobs").hide();
$("#explanation").hide(); $("#formula").hide(); $("#uniform").hide();
$("#formulaexamples").hide(); $("#frequencyexamples").hide(); $("#uniformexamples").hide();
$("#discoutputs").hide();
$("#row4").hide(); $("#row5").hide(); $("#row6").hide(); $("#row7").hide();
$("#row8").hide(); $("#row9").hide(); $("#row10").hide();
$("#make2s").hide(); $("#make4s").hide(); $("#make5s").hide(); $("#make6s").hide();
$("#make7s").hide(); $("#make8s").hide(); $("#make9s").hide(); $("#make10s").hide();



tablekind = "probability"; frequencytype = "distribution"; formulatype = "probability"; uniformtype = "probability"; binomialtype = "probability"

function factorial(n) {
    if (n > 0) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    } else if (n == 0) {
        return 1
    }
  
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
function showstuff(){
    $("#expected").hide(); $("#variance").hide(); $("#standard").hide(); $("#discreteprobs").hide();
    $("#expected2").hide(); $("#expected4").hide(); $("#expected5").hide(); $("#expected6").hide();
    $("#expected7").hide(); $("#expected8").hide(); $("#expected9").hide(); $("#expected10").hide();
    $("#variance2").hide(); $("#variance4").hide(); $("#variance5").hide(); $("#variance6").hide();
    $("#variance7").hide(); $("#variance8").hide(); $("#variance9").hide(); $("#variance10").hide();
    $("#binomial").hide(); $("#poisson").hide(); $("#hypergeometric").hide();
    $("#equal").hide(); $("#less").hide(); $("#greater").hide(); $("#equal2").hide(); $("#less2").hide(); $("#greater2").hide();
    $("#equal3").hide(); $("#less3").hide(); $("#greater3").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#formula").hide(); $("#uniform").hide(); $("#frequency").hide();
    $("#expectedexamples").hide(); $("#standardexamples").hide(); 
    $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
    var x = document.getElementById("stat").value;
    if (x == "probability"){
        $("#expected").show(); $("#tableprobs").show();
        $("#tableexpected").hide(); $("#tablevariance").hide(); $("#tablestandard").hide(); $("#tablevalidity").hide(); $("#tablegraph").hide();
        $("#make2").hide(); $("#make3").show(); $("#make4").hide(); $("#make5").hide();
        $("#make6").hide(); $("#make7").hide(); $("#make8").hide(); $("#make9").hide(); $("#make10").hide();
        $("#row4").hide(); $("#row5").hide(); $("#row6").hide(); $("#row7").hide();
        $("#row8").hide(); $("#row9").hide(); $("#row10").hide();
        $("#expectedtable").show();
        $("#expectedexamples").show(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
        $("#formulaexamples").hide(); $("#frequencyexamples").hide(); $("#uniformexamples").hide();
    } else if (x == "frequency") {
        $("#frequency").show(); $("#frequencyvalidity").hide(); 
        $("#frequencyprobs").hide(); $("#frequencyexpected").hide(); $("#frequencyvariance").hide(); $("#frequencydist").show();
        $("#frequencyprobdist").hide(); $("#frequencystandard").hide(); $("#frequencygraph").hide();
        $("#make2f").hide(); $("#make3f").show(); $("#make4f").hide(); $("#make5f").hide();
        $("#make6f").hide(); $("#make7f").hide(); $("#make8f").hide(); $("#make9f").hide(); $("#make10f").hide();
        $("#row4f").hide(); $("#row5f").hide(); $("#row6f").hide(); $("#row7f").hide();
        $("#row8f").hide(); $("#row9f").hide(); $("#row10f").hide();
        $("#expectedexamples").hide(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
        $("#formulaexamples").hide(); $("#frequencyexamples").show(); $("#uniformexamples").hide();
        $("#make2f").hide(); $("#make3f").show(); $("#make4f").hide(); $("#make5f").hide();
        $("#make6f").hide(); $("#make7f").hide(); $("#make8f").hide(); $("#make9f").hide(); $("#make10f").hide();
        $("#row4f").hide(); $("#row5f").hide(); $("#row6f").hide(); $("#row7f").hide();
        $("#row8f").hide(); $("#row9f").hide(); $("#row10f").hide();
    } else if (x == "binomial") {
        binomial()
        $("#expectedexamples").hide(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").show(); $("#hypergeometricexamples").hide();
        $("#formulaexamples").hide(); $("#frequencyexamples").hide(); $("#uniformexamples").hide();
    } else if (x == "poisson") {
        poisson()
        $("#expectedexamples").hide(); $("#standardexamples").hide(); 
        $("#poissonexamples").show(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
        $("#formulaexamples").hide(); $("#frequencyexamples").hide(); $("#uniformexamples").hide();
    } else if (x == "hypergeometric") {
        hypergeometric()
        $("#expectedexamples").hide(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").show();
        $("#formulaexamples").hide(); $("#frequencyexamples").hide(); $("#uniformexamples").hide();
    } else if (x == "choose") {
        $("#expected").show(); $("#expectedprobs").hide();
        $("#make2").hide(); $("#make3").show(); $("#make4").hide(); $("#make5").hide();
        $("#make6").hide(); $("#make7").hide(); $("#make8").hide(); $("#make9").hide(); $("#make10").hide();
        $("#row4").hide(); $("#row5").hide(); $("#row6").hide(); $("#row7").hide();
        $("#row8").hide(); $("#row9").hide(); $("#row10").hide();
        $("#expectedexamples").show(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    } else if (x == "formula") {
        $("#formula").show();
        $("#formulaprobs").show(); $("#formulaexpected").hide(); $("#formulavariance").hide();
        $("#expectedexamples").hide(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
        $("#formulaexamples").show(); $("#frequencyexamples").hide(); $("#uniformexamples").hide();
    } else if (x == "uniform") {
        $("#uniform").show();
        $("#uniformprobability").show(); $("#uniformexpected").hide(); $("#uniformvariance").hide();
        $("#expectedexamples").hide(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
        $("#formulaexamples").hide(); $("#frequencyexamples").hide(); $("#uniformexamples").show();
    }
}
function stat(){
    $("#discoutputs").show(); $("#how").hide();
    $("#output").empty(); $("#myCanvas").hide(); 
    var x = document.getElementById("stat").value;
    if (x == "probability"){
        table()
    } else if (x == "frequency") {
        frequency()
    } else if (x == "uniform") {
        compuniform()
    } else if (x == "formula") {
        compformula()
    } else if (x == "binomial") {
        compbinomial()
    } else if (x == "poisson") {
        comppoisson()
    } else if (x == "hypergeometric") {
        comphypergeometric()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// Probability Distribution ////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function table() {
    if (tablekind == "probability") {
        tableprobabilities()
    } else if (tablekind == "graph") {
        tablegraph()
    } else if (tablekind == "validity") {
        tablevalidity()
    } else if (tablekind == "expected") {
        tableexpected()
    } else if (tablekind == "variance") {
        tablevariance()
    } else if (tablekind == "standard") {
        tablestandard()
    }
}
function tableprobabilities() {
    var x = document.getElementById('probtype1').value
    if (x == "equal") {
        tableprobequal()
    } else if (x == "lessequal") {
        tableproblessequal()
    } else if (x == "less") {
        tableprobless()
    } else if (x == "greaterequal") {
        tableprobgreaterequal()
    } else if (x == "greater") {
        tableprobgreater()
    }
}
function tableprobequal() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").hide();
    document.getElementById("descriptiontext").innerHTML = "Probabilities for a discrete random variable are provided by the probability function, f(x). "
    document.getElementById("formulatext").innerHTML = "$ P(x=x_0) = f(x_0) $"
    document.getElementById("explanationtext").innerHTML = "The probability function is sometimes given by P(x) instead of f(x)."
    var x = document.getElementById('probval').value
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var x4 = document.getElementById('x4').value
    var x5 = document.getElementById('x5').value
    var x6 = document.getElementById('x6').value
    var x7 = document.getElementById('x7').value
    var x8 = document.getElementById('x8').value
    var x9 = document.getElementById('x9').value
    var x10 = document.getElementById('x10').value
    var f1 = document.getElementById('f1').value
    var f2 = document.getElementById('f2').value
    var f3 = document.getElementById('f3').value
    var f4 = document.getElementById('f4').value
    var f5 = document.getElementById('f5').value
    var f6 = document.getElementById('f6').value
    var f7 = document.getElementById('f7').value
    var f8 = document.getElementById('f8').value
    var f9 = document.getElementById('f9').value
    var f10 = document.getElementById('f10').value
    var ans = ""
    if (x == x1) {
        ans = f1
    } else if (x == x2) {
        ans = f2
    } else if (x == x3) {
        ans = f3
    } else if (x == x4) {
        ans = f4
    } else if (x == x5) {
        ans = f5
    } else if (x == x6) {
        ans = f6
    } else if (x == x7) {
        ans = f7
    } else if (x == x8) {
        ans = f8
    } else if (x == x9) {
        ans = f9
    } else if (x == x10) {
        ans = f10
    } else {
        ans = "0"
    }
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\boxed{" + String(parseFloat(ans)).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}
function tableproblessequal() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").hide();
    document.getElementById("descriptiontext").innerHTML = "Probabilities for a discrete random variable are provided by the probability function, f(x). "
    document.getElementById("formulatext").innerHTML = "$ P(x=x_0) = f(x_0) $"
    document.getElementById("explanationtext").innerHTML = "The probability function is sometimes given by P(x) instead of f(x)."
    var x = document.getElementById('probval').value
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var x4 = document.getElementById('x4').value
    var x5 = document.getElementById('x5').value
    var x6 = document.getElementById('x6').value
    var x7 = document.getElementById('x7').value
    var x8 = document.getElementById('x8').value
    var x9 = document.getElementById('x9').value
    var x10 = document.getElementById('x10').value
    var f1 = parseFloat(document.getElementById('f1').value)
    var f2 = parseFloat(document.getElementById('f2').value)
    var f3 = parseFloat(document.getElementById('f3').value)
    var f4 = parseFloat(document.getElementById('f4').value)
    var f5 = parseFloat(document.getElementById('f5').value)
    var f6 = parseFloat(document.getElementById('f6').value)
    var f7 = parseFloat(document.getElementById('f7').value)
    var f8 = parseFloat(document.getElementById('f8').value)
    var f9 = parseFloat(document.getElementById('f9').value)
    var f10 = parseFloat(document.getElementById('f10').value)
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    var xaf = xa.filter(function(y) {return y <= x}) 
    var xaf2 = xaf.filter(function(y) {return y}) 
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    var adds2 = String(fa[0]).replace(/^0+/, '')
    var ans = parseFloat(fa[0])
    for (let i=1; i<xaf2.length; i++){
        adds2 += "+"+String(fa[i]).replace(/^0+/, '')+""
        ans += parseFloat(fa[i])
    }
    if (xaf2.length == 1) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq" + x + ") &= " + adds + " \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}
function tableprobless() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").hide();
    document.getElementById("descriptiontext").innerHTML = "Probabilities for a discrete random variable are provided by the probability function, f(x). "
    document.getElementById("formulatext").innerHTML = "$ P(x=x_0) = f(x_0) $"
    document.getElementById("explanationtext").innerHTML = "The probability function is sometimes given by P(x) instead of f(x)."
    var x = document.getElementById('probval').value
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var x4 = document.getElementById('x4').value
    var x5 = document.getElementById('x5').value
    var x6 = document.getElementById('x6').value
    var x7 = document.getElementById('x7').value
    var x8 = document.getElementById('x8').value
    var x9 = document.getElementById('x9').value
    var x10 = document.getElementById('x10').value
    var f1 = parseFloat(document.getElementById('f1').value)
    var f2 = parseFloat(document.getElementById('f2').value)
    var f3 = parseFloat(document.getElementById('f3').value)
    var f4 = parseFloat(document.getElementById('f4').value)
    var f5 = parseFloat(document.getElementById('f5').value)
    var f6 = parseFloat(document.getElementById('f6').value)
    var f7 = parseFloat(document.getElementById('f7').value)
    var f8 = parseFloat(document.getElementById('f8').value)
    var f9 = parseFloat(document.getElementById('f9').value)
    var f10 = parseFloat(document.getElementById('f10').value)
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    var xaf = xa.filter(function(y) {return y < x}) 
    var xaf2 = xaf.filter(function(y) {return y}) 
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    var adds2 = String(fa[0]).replace(/^0+/, '')
    var ans = parseFloat(fa[0])
    for (let i=1; i<xaf2.length; i++){
        adds2 += "+"+String(fa[i]).replace(/^0+/, '')+""
        ans += parseFloat(fa[i])
    }
    if (xaf2.length == 1) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x <" + x + ") &= " + adds + " \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x <" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}
function tableprobgreaterequal() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").hide();
    document.getElementById("descriptiontext").innerHTML = "Probabilities for a discrete random variable are provided by the probability function, f(x). "
    document.getElementById("formulatext").innerHTML = "$ P(x=x_0) = f(x_0) $"
    document.getElementById("explanationtext").innerHTML = "The probability function is sometimes given by P(x) instead of f(x)."
    var x = document.getElementById('probval').value
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var x4 = document.getElementById('x4').value
    var x5 = document.getElementById('x5').value
    var x6 = document.getElementById('x6').value
    var x7 = document.getElementById('x7').value
    var x8 = document.getElementById('x8').value
    var x9 = document.getElementById('x9').value
    var x10 = document.getElementById('x10').value
    var f1 = parseFloat(document.getElementById('f1').value)
    var f2 = parseFloat(document.getElementById('f2').value)
    var f3 = parseFloat(document.getElementById('f3').value)
    var f4 = parseFloat(document.getElementById('f4').value)
    var f5 = parseFloat(document.getElementById('f5').value)
    var f6 = parseFloat(document.getElementById('f6').value)
    var f7 = parseFloat(document.getElementById('f7').value)
    var f8 = parseFloat(document.getElementById('f8').value)
    var f9 = parseFloat(document.getElementById('f9').value)
    var f10 = parseFloat(document.getElementById('f10').value)
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    var xaf0 = xa.filter(function(y) {return y < x})
    var xaf02 = xaf0.filter(function(y) {return y})
    var xaf = xa.filter(function(y) {return y >= x})
    var xaf2 = xaf.filter(function(y) {return y})
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    var start = xaf02.length
    var start2 = xaf02.length + 1
    var end = xaf02.length + xaf2.length
    var adds2 = String(fa[start]).replace(/^0+/, '')
    var ans = parseFloat(fa[start])
    for (let i=start2; i<end; i++){
        adds2 += "+"+String(fa[i]).replace(/^0+/, '')+""
        ans += parseFloat(fa[i])
    }
    if (xaf2.length == 1) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq" + x + ") &= " + adds + " \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '')+ "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}
function tableprobgreater() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").hide();
    document.getElementById("descriptiontext").innerHTML = "Probabilities for a discrete random variable are provided by the probability function, f(x). "
    document.getElementById("formulatext").innerHTML = "$ P(x=x_0) = f(x_0) $"
    document.getElementById("explanationtext").innerHTML = "The probability function is sometimes given by P(x) instead of f(x)."
    var x = document.getElementById('probval').value
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var x4 = document.getElementById('x4').value
    var x5 = document.getElementById('x5').value
    var x6 = document.getElementById('x6').value
    var x7 = document.getElementById('x7').value
    var x8 = document.getElementById('x8').value
    var x9 = document.getElementById('x9').value
    var x10 = document.getElementById('x10').value
    var f1 = parseFloat(document.getElementById('f1').value)
    var f2 = parseFloat(document.getElementById('f2').value)
    var f3 = parseFloat(document.getElementById('f3').value)
    var f4 = parseFloat(document.getElementById('f4').value)
    var f5 = parseFloat(document.getElementById('f5').value)
    var f6 = parseFloat(document.getElementById('f6').value)
    var f7 = parseFloat(document.getElementById('f7').value)
    var f8 = parseFloat(document.getElementById('f8').value)
    var f9 = parseFloat(document.getElementById('f9').value)
    var f10 = parseFloat(document.getElementById('f10').value)
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    var xaf0 = xa.filter(function(y) {return y <= x}) //(y => y <= x)
    var xaf02 = xaf0.filter(function(y) {return y}) //(y => y)
    var xaf = xa.filter(function(y) {return y > x}) //(y => y > x)
    var xaf2 = xaf.filter(function(y) {return y}) //(y => y)
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    var start = xaf02.length
    var start2 = xaf02.length + 1
    var end = xaf02.length + xaf2.length
    var adds2 = String(fa[start]).replace(/^0+/, '')
    var ans = parseFloat(fa[start])
    for (let i=start2; i<end; i++){
        adds2 += "+"+String(fa[i]).replace(/^0+/, '')+""
        ans += parseFloat(fa[i])
    }
    if (xaf2.length == 1) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x >" + x + ") &= " + adds + " \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x >" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    
    MathJax.typeset();
}
function tablevalidity() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").hide();
    document.getElementById("descriptiontext").innerHTML = "The expected value measures the central location of the random variable. "
    document.getElementById("formulatext").innerHTML = "$ E(x) = \\mu = \\sum x f(x) $"
    document.getElementById("explanationtext").innerHTML = "The expected value is also known as the mean."
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var x4 = document.getElementById('x4').value
    var x5 = document.getElementById('x5').value
    var x6 = document.getElementById('x6').value
    var x7 = document.getElementById('x7').value
    var x8 = document.getElementById('x8').value
    var x9 = document.getElementById('x9').value
    var x10 = document.getElementById('x10').value
    var f1 = document.getElementById('f1').value
    var f2 = document.getElementById('f2').value
    var f3 = document.getElementById('f3').value
    var f4 = document.getElementById('f4').value
    var f5 = document.getElementById('f5').value
    var f6 = document.getElementById('f6').value
    var f7 = document.getElementById('f7').value
    var f8 = document.getElementById('f8').value
    var f9 = document.getElementById('f9').value
    var f10 = document.getElementById('f10').value
    var table = "<table><tr style='border-bottom: thin solid'><td style = 'padding: 5px 10px;'>$x$</td><td style = 'padding: 5px 10px;'>$f(x)$</td><td style = 'padding: 5px 10px;'>$xf(x)$</td></tr>"
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var sumfx = f1
    var ans = parseFloat(f1)
    for (i = 1; i < rows; i++) {
        sumfx += "+" + f[i]
        ans += parseFloat(f[i])
    }
    if (f1 < 0 || f2 < 0 || f3 < 0 || f4 < 0 || f5 < 0 || f6 < 0 || f7 < 0 || f8 < 0 || f9 < 0 || f10 < 0) {
        var lesszero = true
    } else {
        var lesszero = false
    }
    var answer = parseFloat(ans.toFixed(2))
    if (answer == 1 && lesszero == false){
        document.getElementById("output").innerHTML = "$$ \\text{Each } f(x) \\geq 0 $$ $$ \\sum f(x) = 1 $$ $$ \\boxed{\\text{Valid}} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (answer == 1 && lesszero == true) {
        document.getElementById("output").innerHTML = "$$ \\text{Each } f(x) \\ngeq 0 $$ $$ \\sum f(x) = 1 $$ $$ \\boxed{\\text{Not Valid}} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (answer != 1 && lesszero == false) {
        document.getElementById("output").innerHTML = "$$ \\text{Each } f(x) \\geq 0 $$ $$ \\sum f(x) \\neq 1 $$ $$ \\boxed{\\text{Not Valid}} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (answer != 1 && lesszero == true) {
        document.getElementById("output").innerHTML = "$$ \\text{Each } f(x) \\ngeq 0 $$ $$ \\sum f(x) \\neq 1  $$ $$ \\boxed{\\text{Not Valid}} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}
function tableexpected() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").hide();
    document.getElementById("descriptiontext").innerHTML = "The expected value measures the central location of the random variable. "
    document.getElementById("formulatext").innerHTML = "$ E(x) = \\mu = \\sum x f(x) $"
    document.getElementById("explanationtext").innerHTML = "The expected value is also known as the mean."
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var x4 = document.getElementById('x4').value
    var x5 = document.getElementById('x5').value
    var x6 = document.getElementById('x6').value
    var x7 = document.getElementById('x7').value
    var x8 = document.getElementById('x8').value
    var x9 = document.getElementById('x9').value
    var x10 = document.getElementById('x10').value
    var f1 = document.getElementById('f1').value
    var f2 = document.getElementById('f2').value
    var f3 = document.getElementById('f3').value
    var f4 = document.getElementById('f4').value
    var f5 = document.getElementById('f5').value
    var f6 = document.getElementById('f6').value
    var f7 = document.getElementById('f7').value
    var f8 = document.getElementById('f8').value
    var f9 = document.getElementById('f9').value
    var f10 = document.getElementById('f10').value
    var table = "<table><tr style='border-bottom: thin solid'><td style = 'padding: 5px 10px;'>$x$</td><td style = 'padding: 5px 10px;'>$f(x)$</td><td style = 'padding: 5px 10px;'>$xf(x)$</td></tr>"
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var ans = 0
    for (i = 0; i < rows; i++) {
        table += "<tr><td>$"+x[i]+"$</td><td>$"+String(parseFloat(f[i])).replace(/^0+/, '')+"$</td><td>$"+String(parseFloat((x[i]*f[i]).toFixed(2))).replace(/^0+/, '')+"$</td></tr>"
        ans += x[i]*f[i]
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>${\\color{RoyalBlue}"+parseFloat(ans.toFixed(2))+"}$</td></tr></table>"
    document.getElementById("output").innerHTML = table + "$$ E(x) = \\sum x f(x) = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}
function tablevariance() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").hide();
    document.getElementById("descriptiontext").innerHTML = "The variance measures the variability of the random variable. "
    document.getElementById("formulatext").innerHTML = "$ \\text{Var}(x) = \\sigma^2 = \\sum (x-\\mu)^2 f(x) $"
    document.getElementById("explanationtext").innerHTML = "Variance is not in the same units as the random variable."
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var x4 = document.getElementById('x4').value
    var x5 = document.getElementById('x5').value
    var x6 = document.getElementById('x6').value
    var x7 = document.getElementById('x7').value
    var x8 = document.getElementById('x8').value
    var x9 = document.getElementById('x9').value
    var x10 = document.getElementById('x10').value
    var f1 = document.getElementById('f1').value
    var f2 = document.getElementById('f2').value
    var f3 = document.getElementById('f3').value
    var f4 = document.getElementById('f4').value
    var f5 = document.getElementById('f5').value
    var f6 = document.getElementById('f6').value
    var f7 = document.getElementById('f7').value
    var f8 = document.getElementById('f8').value
    var f9 = document.getElementById('f9').value
    var f10 = document.getElementById('f10').value
    var ans = ((Math.pow((x1-mu),2))*f1) + ((Math.pow((x1-mu),2))*f2) + ((Math.pow((x1-mu),2))*f3);
    var table = "<table><tr style='border-bottom: thin solid'><td style = 'padding: 5px 10px;'>$x$</td><td style = 'padding: 5px 10px;'>$f(x)$</td><td style = 'padding: 5px 10px;'>$x-\\mu$</td><td style = 'padding: 5px 10px;'>$(x-\\mu)^2$</td><td style = 'padding: 5px 10px;'>$(x-\\mu)^2f(x)$</td></tr>"
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var mu = 0
    for (i = 0; i < rows; i++) {
        mu += x[i]*f[i]
    }
    var ans = 0
    for (i = 0; i < rows; i++) {
        table += "<tr><td>$"+x[i]+"$</td><td>$"+String(parseFloat(f[i])).replace(/^0+/, '')+"$</td><td>$"+String(parseFloat((x[i]-mu).toFixed(2))).replace(/^0+/, '')+"$</td><td>$"+String(parseFloat((Math.pow((x[i]-mu),2)).toFixed(2))).replace(/^0+/, '')+"$</td><td>$"+String(parseFloat(((Math.pow((x[i]-mu),2))*f[i]).toFixed(2))).replace(/^0+/, '')+"$</td></tr>" 
        ans += (Math.pow((x[i]-mu),2))*f[i]
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>$-$</td><td>$-$</td><td>${\\color{RoyalBlue}"+parseFloat(ans.toFixed(2))+"}$</td></tr></table>"
    document.getElementById("output").innerHTML = "$$ \\mu = "+parseFloat(mu.toFixed(2))+" $$" + table + " $$ \\text{Var}(x) = \\sum (x-\\mu)^2 f(x) = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}
function tablestandard() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").hide();
    document.getElementById("descriptiontext").innerHTML = "The standard deviation measures the variability of the random variable. "
    document.getElementById("formulatext").innerHTML = "$ \\sigma = \\sqrt{\\text{Var}(x)} $"
    document.getElementById("explanationtext").innerHTML = "The standard deviation is in the same units as the random variable."
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var x4 = document.getElementById('x4').value
    var x5 = document.getElementById('x5').value
    var x6 = document.getElementById('x6').value
    var x7 = document.getElementById('x7').value
    var x8 = document.getElementById('x8').value
    var x9 = document.getElementById('x9').value
    var x10 = document.getElementById('x10').value
    var f1 = document.getElementById('f1').value
    var f2 = document.getElementById('f2').value
    var f3 = document.getElementById('f3').value
    var f4 = document.getElementById('f4').value
    var f5 = document.getElementById('f5').value
    var f6 = document.getElementById('f6').value
    var f7 = document.getElementById('f7').value
    var f8 = document.getElementById('f8').value
    var f9 = document.getElementById('f9').value
    var f10 = document.getElementById('f10').value
    var ans = ((Math.pow((x1-mu),2))*f1) + ((Math.pow((x1-mu),2))*f2) + ((Math.pow((x1-mu),2))*f3);
    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$x-\\mu$</td><td>$(x-\\mu)^2$</td><td>$(x-\\mu)^2f(x)$</td></tr>"
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var mu = 0
    for (i = 0; i < rows; i++) {
        mu += x[i]*f[i]
    }
    var ans = 0
    for (i = 0; i < rows; i++) {
        table += "<tr><td>$"+x[i]+"$</td><td>$"+f[i]+"$</td><td>$"+parseFloat((x[i]-mu).toFixed(2))+"$</td><td>$"+parseFloat((Math.pow((x[i]-mu),2)).toFixed(2))+"$</td><td>$"+parseFloat(((Math.pow((x[i]-mu),2))*f[i]).toFixed(2))+"$</td></tr>"
        ans += (Math.pow((x[i]-mu),2))*f[i]
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>$-$</td><td>$-$</td><td>$"+parseFloat(ans.toFixed(2))+"$</td></tr></table>"
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\sigma &= \\sqrt{\\text{Var}(x)} \\\\ &= \\sqrt{" + parseFloat(ans.toFixed(2)) + "} \\\\ &= \\boxed{" + parseFloat((Math.sqrt(ans)).toFixed(2)) + "} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}
function tableswitchgraph() {
    $("#tableprobs").hide(); $("#tableexpected").hide(); $("#tablevariance").hide(); $("#tablestandard").hide(); $("#tablevalidity").hide();
    tablekind = "graph"; $("#tablegraph").show();
}
function tableswitchvalidity() {
    $("#tableprobs").hide(); $("#tableexpected").hide(); $("#tablevariance").hide(); $("#tablestandard").hide(); $("#tablevalidity").show();
    tablekind = "validity"; $("#tablegraph").hide();
}
function tableswitchexpected() {
    $("#tableprobs").hide(); $("#tableexpected").show(); $("#tablevariance").hide(); $("#tablestandard").hide(); $("#tablevalidity").hide();
    tablekind = "expected"; $("#tablegraph").hide();
}
function tableswitchvariance() {
    $("#tableprobs").hide(); $("#tableexpected").hide(); $("#tablevariance").show(); $("#tablestandard").hide(); $("#tablevalidity").hide();
    tablekind = "variance"; $("#tablegraph").hide();
}
function tableswitchstandard() {
    $("#tableprobs").hide(); $("#tableexpected").hide(); $("#tablevariance").hide(); $("#tablestandard").show(); $("#tablevalidity").hide();
    tablekind = "standard"; $("#tablegraph").hide();
}
function tableswitchprobability() {
    $("#tableprobs").show(); $("#tableexpected").hide(); $("#tablevariance").hide(); $("#tablestandard").hide(); $("#tablevalidity").hide();
    tablekind = "probability"; $("#tablegraph").hide();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// Frequency Distribution //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function frequency() {
    if (frequencytype == "distribution") {
        distributionf()
    } else if (frequencytype == "validity") {
        validityf()
    } else if (frequencytype == "probability") {
        probabilitiesf()
    } else if (frequencytype == "expected") {
        expectedf()
    } else if (frequencytype == "variance") {
        variancef()
    } else if (frequencytype == "standard") {
        standardf()
    }
}
function distributionf() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The expected value of a random variable measures the central location of the values of the random variable. "
    document.getElementById("formulatext").innerHTML = "$$ E(x) = \\mu = \\sum x f(x) $$"
    document.getElementById("explanationtext").innerHTML = "The expected value is also known as the mean."
    var x1 = document.getElementById('x1f').value
    var x2 = document.getElementById('x2f').value
    var x3 = document.getElementById('x3f').value
    var x4 = document.getElementById('x4f').value
    var x5 = document.getElementById('x5f').value
    var x6 = document.getElementById('x6f').value
    var x7 = document.getElementById('x7f').value
    var x8 = document.getElementById('x8f').value
    var x9 = document.getElementById('x9f').value
    var x10 = document.getElementById('x10f').value
    var f1 = document.getElementById('f1f').value
    var f2 = document.getElementById('f2f').value
    var f3 = document.getElementById('f3f').value
    var f4 = document.getElementById('f4f').value
    var f5 = document.getElementById('f5f').value
    var f6 = document.getElementById('f6f').value
    var f7 = document.getElementById('f7f').value
    var f8 = document.getElementById('f8f').value
    var f9 = document.getElementById('f9f').value
    var f10 = document.getElementById('f10f').value
    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td></tr>"
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var tot = sum(f)
    for (i = 0; i < rowsf; i++) {
        table += "<tr><td>$"+x[i]+"$</td><td>$"+String(parseFloat((f[i]/tot).toFixed(2))).replace(/^0+/, '')+"$</td></tr>"
    }
    table += "</table>"
    document.getElementById("output").innerHTML = table + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}
function frequencygraph() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The expected value measures the central location of the random variable. "
    document.getElementById("formulatext").innerHTML = "$ E(x) = \\mu = \\sum x f(x) $"
    document.getElementById("explanationtext").innerHTML = "The expected value is also known as the mean."
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var x4 = parseFloat(document.getElementById('x4').value)
    var x5 = parseFloat(document.getElementById('x5').value)
    var x6 = parseFloat(document.getElementById('x6').value)
    var x7 = parseFloat(document.getElementById('x7').value)
    var x8 = parseFloat(document.getElementById('x8').value)
    var x9 = parseFloat(document.getElementById('x9').value)
    var x10 = parseFloat(document.getElementById('x10').value)
    var f1 = parseFloat(document.getElementById('f1').value)
    var f2 = parseFloat(document.getElementById('f2').value)
    var f3 = parseFloat(document.getElementById('f3').value)
    var f4 = parseFloat(document.getElementById('f4').value)
    var f5 = parseFloat(document.getElementById('f5').value)
    var f6 = parseFloat(document.getElementById('f6').value)
    var f7 = parseFloat(document.getElementById('f7').value)
    var f8 = parseFloat(document.getElementById('f8').value)
    var f9 = parseFloat(document.getElementById('f9').value)
    var f10 = parseFloat(document.getElementById('f10').value)
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic);
        function drawBasic() {

          var data = new google.visualization.DataTable();
          data.addColumn('timeofday', 'Time of Day');
          data.addColumn('number', 'Motivation Level');


          var data = google.visualization.arrayToDataTable([
            ['Class', 'Frequency'],
            [x[0], f[0]],
            [x[1], f[1]],
            [x[2], f[2]],
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
function validityf() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#charts").hide();
    document.getElementById("descriptiontext").innerHTML = "The expected value measures the central location of the random variable. "
    document.getElementById("formulatext").innerHTML = "$ E(x) = \\mu = \\sum x f(x) $"
    document.getElementById("explanationtext").innerHTML = "The expected value is also known as the mean."
    var x1 = document.getElementById('x1f').value
    var x2 = document.getElementById('x2f').value
    var x3 = document.getElementById('x3f').value
    var x4 = document.getElementById('x4f').value
    var x5 = document.getElementById('x5f').value
    var x6 = document.getElementById('x6f').value
    var x7 = document.getElementById('x7f').value
    var x8 = document.getElementById('x8f').value
    var x9 = document.getElementById('x9f').value
    var x10 = document.getElementById('x10f').value
    var f1f = document.getElementById('f1f').value
    var f2f = document.getElementById('f2f').value
    var f3f = document.getElementById('f3f').value
    var f4f = document.getElementById('f4f').value
    var f5f = document.getElementById('f5f').value
    var f6f = document.getElementById('f6f').value
    var f7f = document.getElementById('f7f').value
    var f8f = document.getElementById('f8f').value
    var f9f = document.getElementById('f9f').value
    var f10f= document.getElementById('f10f').value
    var f = [f1f,f2f,f3f,f4f,f5f,f6f,f7f,f8f,f9f,f10f]
    var tot = sum(f)
    var f1 = f1f/tot
    var f2 = f2f/tot
    var f3 = f3f/tot
    var f4 = f4f/tot
    var f5 = f5f/tot
    var f6 = f6f/tot
    var f7 = f7f/tot
    var f8 = f8f/tot
    var f9 = f9f/tot
    var f10 = f10f/tot
    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td></tr>"
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var tot = sum(f)
    for (i = 0; i < rowsf; i++) {
        table += "<tr><td>$"+x[i]+"$</td><td>$"+String(parseFloat((f[i]/tot).toFixed(2))).replace(/^0+/, '')+"$</td></tr>"
    }
    table += "</table>"
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var sumfx = f1
    var ans = parseFloat(f1)
    var rows = rowsf
    for (i = 1; i < rows; i++) {
        sumfx += "+" + f[i]
        ans += parseFloat(f[i])
    }
    if (f1 < 0 || f2 < 0 || f3 < 0 || f4 < 0 || f5 < 0 || f6 < 0 || f7 < 0 || f8 < 0 || f9 < 0 || f10 < 0) {
        var lesszero = true
    } else {
        var lesszero = false
    }
    var answer = parseFloat(ans.toFixed(2))
    if (answer == 1 && lesszero == false){
        document.getElementById("output").innerHTML = table + "$$ \\text{Each } f(x) \\geq 0 $$ $$ \\sum f(x) = 1 $$ $$ \\boxed{\\text{Valid}} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (answer == 1 && lesszero == true) {
        document.getElementById("output").innerHTML = table + "$$ \\text{Each } f(x) \\ngeq 0 $$ $$ \\sum f(x) = 1 $$ $$ \\boxed{\\text{Not Valid}} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (answer != 1 && lesszero == false) {
        document.getElementById("output").innerHTML = table + "$$ \\text{Each } f(x) \\geq 0 $$ $$ \\sum f(x) \\neq 1 $$ $$ \\boxed{\\text{Not Valid}} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (answer != 1 && lesszero == true) {
        document.getElementById("output").innerHTML = table + "$$ \\text{Each } f(x) \\ngeq 0 $$ $$ \\sum f(x) \\neq 1  $$ $$ \\boxed{\\text{Not Valid}} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}
function probabilitiesf() {
    var x = document.getElementById('probtype1f').value
    if (x == "equal") {
        probequalf()
    } else if (x == "lessequal") {
        problessequalf()
    } else if (x == "less") {
        problessf()
    } else if (x == "greaterequal") {
        probgreaterequalf()
    } else if (x == "greater") {
        probgreaterf()
    }
}
function probequalf() {
    $("#explanation").show();
    var x = document.getElementById('probvalf').value
    var x1 = document.getElementById('x1f').value
    var x2 = document.getElementById('x2f').value
    var x3 = document.getElementById('x3f').value
    var x4 = document.getElementById('x4f').value
    var x5 = document.getElementById('x5f').value
    var x6 = document.getElementById('x6f').value
    var x7 = document.getElementById('x7f').value
    var x8 = document.getElementById('x8f').value
    var x9 = document.getElementById('x9f').value
    var x10 = document.getElementById('x10f').value
    var f1f = document.getElementById('f1f').value
    var f2f = document.getElementById('f2f').value
    var f3f = document.getElementById('f3f').value
    var f4f = document.getElementById('f4f').value
    var f5f = document.getElementById('f5f').value
    var f6f = document.getElementById('f6f').value
    var f7f = document.getElementById('f7f').value
    var f8f = document.getElementById('f8f').value
    var f9f = document.getElementById('f9f').value
    var f10f= document.getElementById('f10f').value
    var f = [f1f,f2f,f3f,f4f,f5f,f6f,f7f,f8f,f9f,f10f]
    var tot = sum(f)
    var f1 = f1f/tot
    var f2 = f2f/tot
    var f3 = f3f/tot
    var f4 = f4f/tot
    var f5 = f5f/tot
    var f6 = f6f/tot
    var f7 = f7f/tot
    var f8 = f8f/tot
    var f9 = f9f/tot
    var f10 = f10f/tot
    var ans = ""
    if (x == x1) {
        ans = f1
    } else if (x == x2) {
        ans = f2
    } else if (x == x3) {
        ans = f3
    } else if (x == x4) {
        ans = f4
    } else if (x == x5) {
        ans = f5
    } else if (x == x6) {
        ans = f6
    } else if (x == x7) {
        ans = f7
    } else if (x == x8) {
        ans = f8
    } else if (x == x9) {
        ans = f9
    } else if (x == x10) {
        ans = f10
    } else {
        ans = "0"
    }
    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td></tr>"
    var xs = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var tot = sum(f)
    for (i = 0; i < rowsf; i++) {
        table += "<tr><td>$"+xs[i]+"$</td><td>$"+String(parseFloat((f[i]/tot).toFixed(2))).replace(/^0+/, '')+"$</td></tr>"
    }
    table += "</table>"
    document.getElementById("output").innerHTML = table + "$$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}
function problessequalf() {
    $("#explanation").show();
    var x = document.getElementById('probvalf').value
    var x1 = document.getElementById('x1f').value
    var x2 = document.getElementById('x2f').value
    var x3 = document.getElementById('x3f').value
    var x4 = document.getElementById('x4f').value
    var x5 = document.getElementById('x5f').value
    var x6 = document.getElementById('x6f').value
    var x7 = document.getElementById('x7f').value
    var x8 = document.getElementById('x8f').value
    var x9 = document.getElementById('x9f').value
    var x10 = document.getElementById('x10f').value
    var f1f = document.getElementById('f1f').value
    var f2f = document.getElementById('f2f').value
    var f3f = document.getElementById('f3f').value
    var f4f = document.getElementById('f4f').value
    var f5f = document.getElementById('f5f').value
    var f6f = document.getElementById('f6f').value
    var f7f = document.getElementById('f7f').value
    var f8f = document.getElementById('f8f').value
    var f9f = document.getElementById('f9f').value
    var f10f= document.getElementById('f10f').value
    var f = [f1f,f2f,f3f,f4f,f5f,f6f,f7f,f8f,f9f,f10f]
    var tot = sum(f)
    var f1 = f1f/tot
    var f2 = f2f/tot
    var f3 = f3f/tot
    var f4 = f4f/tot
    var f5 = f5f/tot
    var f6 = f6f/tot
    var f7 = f7f/tot
    var f8 = f8f/tot
    var f9 = f9f/tot
    var f10 = f10f/tot
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    var xaf = xa.filter(function(y) {return y <= x})
    var xaf2 = xaf.filter(function(y) {return y}) 
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    var adds2 = String(parseFloat((fa[0]).toFixed(2))).replace(/^0+/, '')
    var ans = parseFloat(fa[0])
    for (let i=1; i<xaf2.length; i++){
        adds2 += "+"+String(parseFloat((fa[i]).toFixed(2))).replace(/^0+/, '')+""
        ans += parseFloat(fa[i])
    }
    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td></tr>"
    for (i = 0; i < rowsf; i++) {
        table += "<tr><td>$"+xa[i]+"$</td><td>$"+String(parseFloat((fa[i]).toFixed(2))).replace(/^0+/, '')+"$</td></tr>"
    }
    table += "</table>"
    if (xaf2.length == 1) {
        document.getElementById("output").innerHTML = table + "$$ \\begin{align} P(x \\leq" + x + ") &= " + adds + " \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = table + "$$ \\begin{align} P(x \\leq" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}
function problessf() {
    $("#explanation").show();
    var x = document.getElementById('probvalf').value
    var x1 = document.getElementById('x1f').value
    var x2 = document.getElementById('x2f').value
    var x3 = document.getElementById('x3f').value
    var x4 = document.getElementById('x4f').value
    var x5 = document.getElementById('x5f').value
    var x6 = document.getElementById('x6f').value
    var x7 = document.getElementById('x7f').value
    var x8 = document.getElementById('x8f').value
    var x9 = document.getElementById('x9f').value
    var x10 = document.getElementById('x10f').value
    var f1f = document.getElementById('f1f').value
    var f2f = document.getElementById('f2f').value
    var f3f = document.getElementById('f3f').value
    var f4f = document.getElementById('f4f').value
    var f5f = document.getElementById('f5f').value
    var f6f = document.getElementById('f6f').value
    var f7f = document.getElementById('f7f').value
    var f8f = document.getElementById('f8f').value
    var f9f = document.getElementById('f9f').value
    var f10f= document.getElementById('f10f').value
    var f = [f1f,f2f,f3f,f4f,f5f,f6f,f7f,f8f,f9f,f10f]
    var tot = sum(f)
    var f1 = f1f/tot
    var f2 = f2f/tot
    var f3 = f3f/tot
    var f4 = f4f/tot
    var f5 = f5f/tot
    var f6 = f6f/tot
    var f7 = f7f/tot
    var f8 = f8f/tot
    var f9 = f9f/tot
    var f10 = f10f/tot
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    var xaf = xa.filter(function(y) {return y < x})
    var xaf2 = xaf.filter(function(y) {return y})
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    var adds2 = String(parseFloat((fa[0]).toFixed(2))).replace(/^0+/, '')
    var ans = parseFloat(fa[0])
    for (let i=1; i<xaf2.length; i++){
        adds2 += "+"+String(parseFloat((fa[i]).toFixed(2))).replace(/^0+/, '')+""
        ans += parseFloat(fa[i])
    }
    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td></tr>"
    for (i = 0; i < rowsf; i++) {
        table += "<tr><td>$"+xa[i]+"$</td><td>$"+String(parseFloat((fa[i]).toFixed(2))).replace(/^0+/, '')+"$</td></tr>"
    }
    table += "</table>"
    if (xaf2.length == 1) {
        document.getElementById("output").innerHTML = table + "$$ \\begin{align} P(x <" + x + ") &= " + adds + " \\\\ &= \\boxed{" + String(parseFloat((ans).toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = table + "$$ \\begin{align} P(x <" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + String(parseFloat((ans).toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}
function probgreaterequalf() {
    $("#explanation").show();
    var x = document.getElementById('probvalf').value
    var x1 = document.getElementById('x1f').value
    var x2 = document.getElementById('x2f').value
    var x3 = document.getElementById('x3f').value
    var x4 = document.getElementById('x4f').value
    var x5 = document.getElementById('x5f').value
    var x6 = document.getElementById('x6f').value
    var x7 = document.getElementById('x7f').value
    var x8 = document.getElementById('x8f').value
    var x9 = document.getElementById('x9f').value
    var x10 = document.getElementById('x10f').value
    var f1f = document.getElementById('f1f').value
    var f2f = document.getElementById('f2f').value
    var f3f = document.getElementById('f3f').value
    var f4f = document.getElementById('f4f').value
    var f5f = document.getElementById('f5f').value
    var f6f = document.getElementById('f6f').value
    var f7f = document.getElementById('f7f').value
    var f8f = document.getElementById('f8f').value
    var f9f = document.getElementById('f9f').value
    var f10f= document.getElementById('f10f').value
    var f = [f1f,f2f,f3f,f4f,f5f,f6f,f7f,f8f,f9f,f10f]
    var tot = sum(f)
    var f1 = f1f/tot
    var f2 = f2f/tot
    var f3 = f3f/tot
    var f4 = f4f/tot
    var f5 = f5f/tot
    var f6 = f6f/tot
    var f7 = f7f/tot
    var f8 = f8f/tot
    var f9 = f9f/tot
    var f10 = f10f/tot
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    var xaf0 = xa.filter(function(y) {return y < x})
    var xaf02 = xaf0.filter(function(y) {return y})
    var xaf = xa.filter(function(y) {return y >= x})
    var xaf2 = xaf.filter(function(y) {return y})
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    var start = xaf02.length
    var start2 = xaf02.length + 1
    var end = xaf02.length + xaf2.length
    var adds2 = String(parseFloat((fa[start]).toFixed(2))).replace(/^0+/, '')
    var ans = parseFloat(fa[start])
    for (let i=start2; i<end; i++){
        adds2 += "+"+String(parseFloat((fa[i]).toFixed(2))).replace(/^0+/, '')+""
        ans += parseFloat(fa[i])
    }
    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td></tr>"
    for (i = 0; i < rowsf; i++) {
        table += "<tr><td>$"+xa[i]+"$</td><td>$"+String(parseFloat((fa[i]).toFixed(2))).replace(/^0+/, '')+"$</td></tr>"
    }
    table += "</table>"
    if (xaf2.length == 1) {
        document.getElementById("output").innerHTML = table + "$$ \\begin{align} P(x \\geq" + x + ") &= " + adds + " \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = table + "$$ \\begin{align} P(x \\geq" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}
function probgreaterf() {
    $("#explanation").show();
    var x = document.getElementById('probvalf').value
    var x1 = document.getElementById('x1f').value
    var x2 = document.getElementById('x2f').value
    var x3 = document.getElementById('x3f').value
    var x4 = document.getElementById('x4f').value
    var x5 = document.getElementById('x5f').value
    var x6 = document.getElementById('x6f').value
    var x7 = document.getElementById('x7f').value
    var x8 = document.getElementById('x8f').value
    var x9 = document.getElementById('x9f').value
    var x10 = document.getElementById('x10f').value
    var f1f = document.getElementById('f1f').value
    var f2f = document.getElementById('f2f').value
    var f3f = document.getElementById('f3f').value
    var f4f = document.getElementById('f4f').value
    var f5f = document.getElementById('f5f').value
    var f6f = document.getElementById('f6f').value
    var f7f = document.getElementById('f7f').value
    var f8f = document.getElementById('f8f').value
    var f9f = document.getElementById('f9f').value
    var f10f= document.getElementById('f10f').value
    var f = [f1f,f2f,f3f,f4f,f5f,f6f,f7f,f8f,f9f,f10f]
    var tot = sum(f)
    var f1 = f1f/tot
    var f2 = f2f/tot
    var f3 = f3f/tot
    var f4 = f4f/tot
    var f5 = f5f/tot
    var f6 = f6f/tot
    var f7 = f7f/tot
    var f8 = f8f/tot
    var f9 = f9f/tot
    var f10 = f10f/tot
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    var xaf0 = xa.filter(function(y) {return y <= x})
    var xaf02 = xaf0.filter(function(y) {return y})
    var xaf = xa.filter(function(y) {return y > x})
    var xaf2 = xaf.filter(function(y) {return y}) 
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    var start = xaf02.length
    var start2 = xaf02.length + 1
    var end = xaf02.length + xaf2.length
    var adds2 = String(parseFloat((fa[start]).toFixed(2))).replace(/^0+/, '')
    var ans = parseFloat(fa[start])
    for (let i=start2; i<end; i++){
        adds2 += "+"+String(parseFloat((fa[i]).toFixed(2))).replace(/^0+/, '')+""
        ans += parseFloat(fa[i])
    }
    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td></tr>"
    for (i = 0; i < rowsf; i++) {
        table += "<tr><td>$"+xa[i]+"$</td><td>$"+String(parseFloat((fa[i]).toFixed(2))).replace(/^0+/, '')+"$</td></tr>"
    }
    table += "</table>"
    if (xaf2.length == 1) {
        document.getElementById("output").innerHTML = table + "$$ \\begin{align} P(x >" + x + ") &= " + adds + " \\\\ &= \\boxed{" + String(parseFloat((ans).toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = table + "$$ \\begin{align} P(x >" + x + ") &= " + adds + " \\\\ &= " + adds2 + " \\\\ &= \\boxed{" + String(parseFloat((ans).toFixed(2))).replace(/^0+/, '') + "}  \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}
function expectedf() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The expected value of a random variable measures the central location of the values of the random variable. "
    document.getElementById("formulatext").innerHTML = "$ E(x) = \\sum x f(x) $"
    document.getElementById("explanationtext").innerHTML = "The expected value is also known as the mean."
    var x1 = document.getElementById('x1f').value
    var x2 = document.getElementById('x2f').value
    var x3 = document.getElementById('x3f').value
    var x4 = document.getElementById('x4f').value
    var x5 = document.getElementById('x5f').value
    var x6 = document.getElementById('x6f').value
    var x7 = document.getElementById('x7f').value
    var x8 = document.getElementById('x8f').value
    var x9 = document.getElementById('x9f').value
    var x10 = document.getElementById('x10f').value
    var f1 = document.getElementById('f1f').value
    var f2 = document.getElementById('f2f').value
    var f3 = document.getElementById('f3f').value
    var f4 = document.getElementById('f4f').value
    var f5 = document.getElementById('f5f').value
    var f6 = document.getElementById('f6f').value
    var f7 = document.getElementById('f7f').value
    var f8 = document.getElementById('f8f').value
    var f9 = document.getElementById('f9f').value
    var f10 = document.getElementById('f10f').value
    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$xf(x)$</td></tr>"
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var tot = sum(f)
    var ans = 0
    for (i = 0; i < rowsf; i++) {
        table += "<tr><td>$"+x[i]+"$</td><td>$"+String(parseFloat((f[i]/tot).toFixed(2))).replace(/^0+/, '')+"$</td><td>$"+String(parseFloat(((x[i]*f[i])/tot).toFixed(2))).replace(/^0+/, '')+"$</td></tr>"
        ans += (x[i]*f[i])/tot
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>${\\color{RoyalBlue}"+parseFloat(ans.toFixed(2))+"}$</td></tr></table>"
    document.getElementById("output").innerHTML = table + "$$  E(x) = \\sum x f(x) = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}
function variancef() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The variance of a random variable measures the variability in the values of the random variable. "
    document.getElementById("formulatext").innerHTML = "$ \\text{Var}(x) = \\sum (x-\\mu)^2f(x) $"
    document.getElementById("explanationtext").innerHTML = "Variance is not in the same units as the random variable."
    var x1 = document.getElementById('x1f').value
    var x2 = document.getElementById('x2f').value
    var x3 = document.getElementById('x3f').value
    var x4 = document.getElementById('x4f').value
    var x5 = document.getElementById('x5f').value
    var x6 = document.getElementById('x6f').value
    var x7 = document.getElementById('x7f').value
    var x8 = document.getElementById('x8f').value
    var x9 = document.getElementById('x9f').value
    var x10 = document.getElementById('x10f').value
    var f1f = document.getElementById('f1f').value
    var f2f = document.getElementById('f2f').value
    var f3f = document.getElementById('f3f').value
    var f4f = document.getElementById('f4f').value
    var f5f = document.getElementById('f5f').value
    var f6f = document.getElementById('f6f').value
    var f7f = document.getElementById('f7f').value
    var f8f = document.getElementById('f8f').value
    var f9f = document.getElementById('f9f').value
    var f10f= document.getElementById('f10f').value   
    var f = [f1f,f2f,f3f,f4f,f5f,f6f,f7f,f8f,f9f,f10f]
    var tot = sum(f)
    var f1 = f1f/tot
    var f2 = f2f/tot
    var f3 = f3f/tot
    var f4 = f4f/tot
    var f5 = f5f/tot
    var f6 = f6f/tot
    var f7 = f7f/tot
    var f8 = f8f/tot
    var f9 = f9f/tot
    var f10 = f10f/tot    
    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$x-\\mu$</td><td>$(x-\\mu)^2$</td><td>$(x-\\mu)^2f(x)$</td></tr>"
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var mu = 0
    for (i = 0; i < rowsf; i++) {
        mu += x[i]*f[i]
    }
    var ans = 0
    for (i = 0; i < rowsf; i++) {
        table += "<tr><td>$"+x[i]+"$</td><td>$"+String(parseFloat(f[i].toFixed(2))).replace(/^0+/, '')+"$</td><td>$"+String(parseFloat((x[i]-mu).toFixed(2))).replace(/^0+/, '')+"$</td><td>$"+String(parseFloat((Math.pow((x[i]-mu),2)).toFixed(2))).replace(/^0+/, '')+"$</td><td>$"+String(parseFloat(((Math.pow((x[i]-mu),2))*f[i]).toFixed(2))).replace(/^0+/, '')+"$</td></tr>"
        ans += (Math.pow((x[i]-mu),2))*f[i]
    }
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>$-$</td><td>$-$</td><td>${\\color{RoyalBlue}"+String(parseFloat(ans.toFixed(2))).replace(/^0+/, '')+"}$</td></tr></table>"
    document.getElementById("output").innerHTML = table + "$$ \\text{Var}(x) = \\sum (x-\\mu)^2 f(x) = \\boxed{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}
function standardf() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The variance of a random variable measures the variability in the values of the random variable. "
    document.getElementById("formulatext").innerHTML = "$ \\text{Var}(x) = \\sum (x - \\mu)^2 f(x) $"
    document.getElementById("explanationtext").innerHTML = "Variance is not in the same units as the random variable."
    var x1 = document.getElementById('x1f').value
    var x2 = document.getElementById('x2f').value
    var x3 = document.getElementById('x3f').value
    var x4 = document.getElementById('x4f').value
    var x5 = document.getElementById('x5f').value
    var x6 = document.getElementById('x6f').value
    var x7 = document.getElementById('x7f').value
    var x8 = document.getElementById('x8f').value
    var x9 = document.getElementById('x9f').value
    var x10 = document.getElementById('x10f').value
    var f1f = document.getElementById('f1f').value
    var f2f = document.getElementById('f2f').value
    var f3f = document.getElementById('f3f').value
    var f4f = document.getElementById('f4f').value
    var f5f = document.getElementById('f5f').value
    var f6f = document.getElementById('f6f').value
    var f7f = document.getElementById('f7f').value
    var f8f = document.getElementById('f8f').value
    var f9f = document.getElementById('f9f').value
    var f10f= document.getElementById('f10f').value   
    var f = [f1f,f2f,f3f,f4f,f5f,f6f,f7f,f8f,f9f,f10f]
    var tot = sum(f)
    var f1 = f1f/tot
    var f2 = f2f/tot
    var f3 = f3f/tot
    var f4 = f4f/tot
    var f5 = f5f/tot
    var f6 = f6f/tot
    var f7 = f7f/tot
    var f8 = f8f/tot
    var f9 = f9f/tot
    var f10 = f10f/tot    
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var mu = 0
    for (i = 0; i < rowsf; i++) {
        mu += x[i]*f[i]
    }
    var ans = 0
    for (i = 0; i < rowsf; i++) {
        ans += (Math.pow((x[i]-mu),2))*f[i]
    }
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\sigma &= \\sqrt{\\text{Var}(x)} \\\\ &= \\sqrt{" + String(parseFloat(ans.toFixed(2))).replace(/^0+/, '') + "} \\\\ &= \\boxed{" + String(parseFloat(Math.sqrt(ans.toFixed(2)).toFixed(2))).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}
function fswitchprobability() {
    $("#frequencyprobs").show(); $("#frequencyexpected").hide(); $("#frequencyvariance").hide(); $("#frequencydist").hide(); 
    $("#frequencystandard").hide(); $("#frequencyvalidity").hide(); 
    frequencytype = "probability"
}
function fswitchvalidity() {
    $("#frequencyprobs").hide(); $("#frequencyexpected").hide(); $("#frequencyvariance").hide(); $("#frequencydist").hide(); 
    $("#frequencystandard").hide(); $("#frequencyvalidity").show(); 
    frequencytype = "validity"
}
function fswitchexpected() {
    $("#frequencyprobs").hide(); $("#frequencyexpected").show(); $("#frequencyvariance").hide(); $("#frequencydist").hide(); 
    $("#frequencystandard").hide(); $("#frequencyvalidity").hide(); 
    frequencytype = "expected"
}
function fswitchvariance() {
    $("#frequencyprobs").hide(); $("#frequencyexpected").hide(); $("#frequencyvariance").show(); $("#frequencydist").hide();  
    $("#frequencystandard").hide(); $("#frequencyvalidity").hide();  
    frequencytype = "variance"
}
function fswitchstandard() {
    $("#frequencyprobs").hide(); $("#frequencyexpected").hide(); $("#frequencyvariance").hide(); $("#frequencydist").hide();  
    $("#frequencystandard").show(); $("#frequencyvalidity").hide();  
    frequencytype = "standard"
}
function fswitchdistribution() {
    $("#frequencyprobs").hide(); $("#frequencyexpected").hide(); $("#frequencyvariance").hide(); $("#frequencydist").show();  
    $("#frequencystandard").hide(); $("#frequencyvalidity").hide();  
    frequencytype = "distribution"
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// Uniform Distribution ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function switchexpectedu() {
    $("#uniformprobability").hide(); $("#uniformexpected").show(); $("#uniformvariance").hide(); 
    uniformtype = "expected"
}

function switchvarianceu() {
    $("#uniformprobability").hide(); $("#uniformexpected").hide(); $("#uniformvariance").show(); 
    uniformtype = "variance"
}

function switchprobabilityu() {
    $("#uniformprobability").show(); $("#uniformexpected").hide(); $("#uniformvariance").hide(); 
    uniformtype = "probability"
}

function compuniform() {
    if (uniformtype == "expected") {
        compexpecteduni()
    } else if (uniformtype == "variance") {
        compvarianceuni()
    } else {
        compprobuni()
    }
}

function compprobuni() {
    var x = document.getElementById('probtypeuni').value
    if (x == "equal") {
        compprobuni1()
    } else if (x == "lessequal") {
        compprobuni2()
    } else if (x == "less") {
        compprobuni3()
    } else if (x == "greaterequal") {
        compprobuni4()
    } else if (x == "greater") {
        compprobuni5()
    }
}

function compprobuni1() {
    $("#explanation").show();
    
    var uval = document.getElementById('uniformval').value
    var x = document.getElementById('unival').value
    var ans = 1/uval
    
    if (uval == 2) {
        if (x == 1 || x == 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\frac{1}{" + uval + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ P(x=" + x + ") = \\boxed{" + 0 + "} $$"
        }
    } else if (uval == 3) {
        if (x == 1 || x == 2 || x == 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\frac{1}{" + uval + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ P(x=" + x + ") = \\boxed{" + 0 + "} $$"
        }
    } else if (uval == 4) {
        if (x == 1 || x == 2 || x == 3 || x == 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\frac{1}{" + uval + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ P(x=" + x + ") = \\boxed{" + 0 + "} $$"
        }
    } else if (uval == 5) {
        if (x == 1 || x == 2 || x == 3 || x == 4 || x == 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\frac{1}{" + uval + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ P(x=" + x + ") = \\boxed{" + 0 + "} $$"
        }
    } else if (uval == 6) {
        if (x == 1 || x == 2 || x == 3 || x == 4 || x ==5 || x == 6) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\frac{1}{" + uval + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ P(x=" + x + ") = \\boxed{" + 0 + "} $$"
        }
    }

    MathJax.typeset();
}

function compprobuni2() {
    $("#explanation").show();
    
    var uval = document.getElementById('uniformval').value
    var x = document.getElementById('unival').value
    
    if (uval == 2) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) \\\\ &= \\frac{1}{2} \\\\ &= \\boxed{" + 1/2 + "}   \\end{align} $$"
        } else if (x >= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{2} + \\frac{1}{2} \\\\ &= \\frac{2}{3} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (uval == 3) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) \\\\ &= \\frac{1}{3} \\\\ &= \\boxed{" + parseFloat((1/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{3} + \\frac{1}{3} \\\\ &= \\frac{2}{3} \\\\ &= \\boxed{" + parseFloat((2/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3} \\\\ &= \\frac{3}{3} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (uval == 4) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) \\\\ &= \\frac{1}{4} \\\\ &= \\boxed{" + parseFloat((1/4).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{2}{4} \\\\ &= \\boxed{" + parseFloat((2/4).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{3}{4} \\\\ &= \\boxed{" + parseFloat((3/4).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{4}{4} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (uval == 5) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) \\\\ &= \\frac{1}{5} \\\\ &= \\boxed{" + parseFloat((1/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{2}{15} \\\\ &= \\boxed{" + parseFloat((2/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{3}{15} \\\\ &= \\boxed{" + parseFloat((3/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 4 && x < 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{4}{5} \\\\ &= \\boxed{" + parseFloat((4/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{5}{5} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (uval == 6) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) \\\\ &= \\frac{1}{6} \\\\ &= \\boxed{" + parseFloat((1/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{2}{6} \\\\ &= \\boxed{" + parseFloat((2/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{3}{6} \\\\ &= \\boxed{" + parseFloat((3/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 4 && x < 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{4}{6} \\\\ &= \\boxed{" + parseFloat((4/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 5 && x < 6) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{5}{6} \\\\ &= \\boxed{" + parseFloat((5/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 6) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{6}{6} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ P(x \\leq " + x + ") = 0 $$"
        }
    }

    MathJax.typeset();
}

function compprobuni3() {
    $("#explanation").show();
    
    var uval = document.getElementById('uniformval').value
    var x = document.getElementById('unival').value
    var ans = x/uval
    
    if (uval == 2) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) \\\\ &= \\frac{1}{2} \\\\ &= \\boxed{" + parseFloat((1/2).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{2} + \\frac{1}{2} \\\\ &= \\frac{2}{2} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (uval == 3) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) \\\\ &= \\frac{1}{3} \\\\ &= \\boxed{" + parseFloat((1/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{3} + \\frac{1}{3} \\\\ &= \\frac{2}{3} \\\\ &= \\boxed{" + parseFloat((2/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3} \\\\ &= \\frac{3}{3} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (uval == 4) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) \\\\ &= \\frac{1}{4} \\\\ &= \\boxed{" + parseFloat((1/4).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{2}{4} \\\\ &= \\boxed{" + parseFloat((2/4).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{3}{4} \\\\ &= \\boxed{" + parseFloat((3/4).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{4}{4} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (uval == 5) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) \\\\ &= \\frac{1}{5} \\\\ &= \\boxed{" + parseFloat((1/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{2}{5} \\\\ &= \\boxed{" + parseFloat((2/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{3}{5} \\\\ &= \\boxed{" + parseFloat((3/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 4 && x <= 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{4}{5} \\\\ &= \\boxed{" + parseFloat((4/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{5}{5} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (uval == 6) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) \\\\ &= \\frac{1}{6} \\\\ &= \\boxed{" + parseFloat((1/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{2}{6} \\\\ &= \\boxed{" + parseFloat((2/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{3}{6} \\\\ &= \\boxed{" + parseFloat((3/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 4 && x <= 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{4}{6} \\\\ &= \\boxed{" + parseFloat((4/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 5 && x <= 6) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{5}{6} \\\\ &= \\boxed{" + parseFloat((5/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 6) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{6}{6} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ P(x \\leq " + x + ") = 0 $$"
        }
    }

    MathJax.typeset();
}

function compprobuni4() {
    $("#explanation").show();
    
    var uval = document.getElementById('uniformval').value
    var x = document.getElementById('unival').value
    var ans = x/uval
    
    if (uval == 2) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(2) \\\\ &= \\frac{1}{2} \\\\ &= \\boxed{" + parseFloat((1/2).toFixed(2)) + "}   \\end{align} $$"
        } else if (x <= 1) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{2} + \\frac{1}{2} \\\\ &= \\frac{2}{2} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ P(x \\geq " + x + ") = 0 $$"
        }
    } else if (uval == 3) {
        if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(3) \\\\ &= \\frac{1}{3} \\\\ &= \\boxed{" + parseFloat((1/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(2) + f(3) \\\\ &= \\frac{1}{3} + \\frac{1}{3} \\\\ &= \\frac{2}{3} \\\\ &= \\boxed{" + parseFloat((2/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x <= 1) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3} \\\\ &= \\frac{3}{3} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ P(x \\geq " + x + ") = 0 $$"
        }
    } else if (uval == 4) {
        if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(4) \\\\ &= \\frac{1}{4} \\\\ &= \\boxed{" + parseFloat((4/10).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(3) + f(4) \\\\ &= \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{2}{4} \\\\ &= \\boxed{" + parseFloat((2/4).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(2) + f(3) + f(4) \\\\ &= \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{3}{4} \\\\ &= \\boxed{" + parseFloat((3/4).toFixed(2)) + "}   \\end{align} $$"
        } else if (x <= 1) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{4}{4} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ P(x \\geq " + x + ") = 0 $$"
        }
    } else if (uval == 5) {
        if (x > 4 && x <= 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(5) \\\\ &= \\frac{1}{5} \\\\ &= \\boxed{" + parseFloat((1/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(4) + f(5) \\\\ &= \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{2}{5} \\\\ &= \\boxed{" + parseFloat((2/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(3) + f(4) + f(5) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{3}{5} \\\\ &= \\boxed{" + parseFloat((3/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(2) + f(3) + f(4) + f(5) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{4}{5} \\\\ &= \\boxed{" + parseFloat((4/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x <= 1) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{5}{5} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ P(x \\geq " + x + ") = 0 $$"
        }
    } else if (uval == 6) {
        if (x > 5 && x <= 6) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(6) \\\\ &= \\frac{1}{6} \\\\ &= \\boxed{" + parseFloat((6/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 4 && x <= 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{2}{6} \\\\ &= \\boxed{" + parseFloat((2/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(4) + f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{3}{6} \\\\ &= \\boxed{" + parseFloat((3/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{4}{6} \\\\ &= \\boxed{" + parseFloat((4/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(2) + f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{5}{6} \\\\ &= \\boxed{" + parseFloat((5/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x <= 1) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x \\geq " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{6}{6} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ P(x \\geq " + x + ") = 0 $$"
        }
    }

    MathJax.typeset();
}

function compprobuni5() {
    $("#explanation").show();
    
    var uval = document.getElementById('uniformval').value
    var x = document.getElementById('unival').value
    var ans = x/uval
    
    if (uval == 2) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ \\begin{align} P(x > " + x + ") &= f(2) \\\\ &= \\frac{1}{2} \\\\ &= \\boxed{" + parseFloat((1/2).toFixed(2)) + "}   \\end{align} $$"
        } else if (x < 1) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ \\begin{align} P(x > " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{2} + \\frac{1}{2} \\\\ &= \\frac{2}{2} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{2} \\text{ for } x = 1,2 $$ $$ P(x > " + x + ") = 0 $$"
        }
    } else if (uval == 3) {
        if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x > " + x + ") &= f(3) \\\\ &= \\frac{1}{3} \\\\ &= \\boxed{" + 1/3 + "}   \\end{align} $$"
        } else if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x > " + x + ") &= f(2) + f(3) \\\\ &= \\frac{1}{3} + \\frac{1}{3} \\\\ &= \\frac{2}{3} \\\\ &= \\boxed{" + parseFloat((2/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x < 1) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ \\begin{align} P(x > " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3} \\\\ &= \\frac{3}{3} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{3} \\text{ for } x = 1,2,3 $$ $$ P(x > " + x + ") = 0 $$"
        }
    } else if (uval == 4) {
        if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x > " + x + ") &= f(4) \\\\ &= \\frac{1}{4} \\\\ &= \\boxed{" + 1/4 + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x > " + x + ") &= f(3) + f(4) \\\\ &= \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{2}{4} \\\\ &= \\boxed{" + 2/4 + "}   \\end{align} $$"
        } else if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x > " + x + ") &= f(2) + f(3) + f(4) \\\\ &= \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{3}{4} \\\\ &= \\boxed{" + 3/4 + "}   \\end{align} $$"
        } else if (x < 1) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ \\begin{align} P(x > " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} \\\\ &= \\frac{4}{4} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{4} \\text{ for } x = 1,2,3,4 $$ $$ P(x > " + x + ") = 0 $$"
        }
    } else if (uval == 5) {
        if (x >= 4 && x < 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x > " + x + ") &= f(5) \\\\ &= \\frac{1}{5} \\\\ &= \\boxed{" + parseFloat((1/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x > " + x + ") &= f(4) + f(5) \\\\ &= \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{2}{5} \\\\ &= \\boxed{" + 2/5 + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x > " + x + ") &= f(3) + f(4) + f(5) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{3}{5} \\\\ &= \\boxed{" + 3/5 + "}   \\end{align} $$"
        } else if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x > " + x + ") &= f(2) + f(3) + f(4) + f(5) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{4}{5} \\\\ &= \\boxed{" + parseFloat((4/5).toFixed(2)) + "}   \\end{align} $$"
        } else if (x < 1) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ \\begin{align} P(x > " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) \\\\ &= \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} \\\\ &= \\frac{5}{5} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{5} \\text{ for } x = 1,2,3,4,5 $$ $$ P(x > " + x + ") = 0 $$"
        }
    } else if (uval == 6) {
        if (x >= 5 && x < 6) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x > " + x + ") &= f(6) \\\\ &= \\frac{1}{6} \\\\ &= \\boxed{" + parseFloat((1/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 4 && x < 5) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x > " + x + ") &= f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{2}{6} \\\\ &= \\boxed{" + parseFloat((2/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x > " + x + ") &= f(4) + f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{3}{6} \\\\ &= \\boxed{" + parseFloat((3/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x > " + x + ") &= f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{4}{6} \\\\ &= \\boxed{" + parseFloat((4/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x > " + x + ") &= f(2) + f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{5}{6} \\\\ &= \\boxed{" + parseFloat((5/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x < 1) {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ \\begin{align} P(x > " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} \\\\ &= \\frac{6}{6} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ f(x) = \\frac{1}{6} \\text{ for } x = 1,2,3,4,5,6 $$ $$ P(x > " + x + ") = 0 $$"
        }
    }

    MathJax.typeset();
}








































function forvalues() {
    var x = document.getElementById('formulaval').value
    if (x == "3") {
        document.getElementById('forvalues').innerHTML = "$1,2$"
    } else if (x == "6") {
        document.getElementById('forvalues').innerHTML = "$1,2,3$"
    } else if (x == "10") {
        document.getElementById('forvalues').innerHTML = "$1,2,3,4$"
    } else if (x == "15") {
        document.getElementById('forvalues').innerHTML = "$1,2,3,4,5$"
    } else if (x == "21") {
        document.getElementById('forvalues').innerHTML = "$1,2,3,4,5,6$"
    }
    MathJax.typeset();
}

function frmlswitchexpected() {
    $("#formulaprobs").hide(); $("#formulaexpected").show(); $("#formulavariance").hide(); 
    formulatype = "expected"
}

function frmlswitchvariance() {
    $("#formulaprobs").hide(); $("#formulaexpected").hide(); $("#formulavariance").show(); 
    formulatype = "variance"
}

function frmlswitchprobability() {
    $("#formulaprobs").show(); $("#formulaexpected").hide(); $("#formulavariance").hide(); 
    formulatype = "probability"
}

function compformula() {
    if (formulatype == "expected") {
        compexpectedfrml()
    } else if (formulatype == "variance") {
        compvariancefrml()
    } else {
        compprobabilitiesfrml()
    }
}

function compprobabilitiesfrml() {
    var x = document.getElementById('probtypefrml1').value
    if (x == "equal") {
        compprobfrml1()
    } else if (x == "lessequal") {
        compprobfrml2()
    } else if (x == "less") {
        compprobfrml3()
    } else if (x == "greaterequal") {
        compprobfrml4()
    } else if (x == "greater") {
        compprobfrml5()
    }
}

function compprobfrml1() {
    $("#explanation").show();
    
    var frmval = document.getElementById('formulaval').value
    var x = document.getElementById('probvalfrml').value
    var ans = x/frmval
    
    if (frmval == 3) {
        if (x == 1 || x == 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\frac{" + x + "}{" + frmval + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x=" + x + ") = \\boxed{" + 0 + "} $$"
        }
    } else if (frmval == 6) {
        if (x == 1 || x == 2 || x == 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\frac{" + x + "}{" + frmval + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x=" + x + ") = \\boxed{" + 0 + "} $$"
        }
    } else if (frmval == 10) {
        if (x == 1 || x == 2 || x == 3 || x == 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\frac{" + x + "}{" + frmval + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x=" + x + ") = \\boxed{" + 0 + "} $$"
        }
    } else if (frmval == 15) {
        if (x == 1 || x == 2 || x == 3 || x == 4 || x == 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\frac{" + x + "}{" + frmval + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x=" + x + ") = \\boxed{" + 0 + "} $$"
        }
    } else if (frmval == 21) {
        if (x == 1 || x == 2 || x == 3 || x == 4 || x ==5 || x == 6) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\frac{" + x + "}{" + frmval + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x=" + x + ") = \\boxed{" + 0 + "} $$"
        }
    }

    MathJax.typeset();
}

function compprobfrml2() {
    $("#explanation").show();
    
    var frmval = document.getElementById('formulaval').value
    var x = document.getElementById('probvalfrml').value
    var ans = x/frmval
    
    if (frmval == 3) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) \\\\ &= \\frac{1}{3} \\\\ &= \\boxed{" + parseFloat((1/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{3} + \\frac{2}{3} \\\\ &= \\frac{3}{3} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (frmval == 6) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) \\\\ &= \\frac{1}{6} \\\\ &= \\boxed{" + parseFloat((1/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{6} + \\frac{2}{6} \\\\ &= \\frac{3}{6} \\\\ &= \\boxed{" + parseFloat((3/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{6} + \\frac{2}{6} + \\frac{3}{6} \\\\ &= \\frac{6}{6} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (frmval == 10) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) \\\\ &= \\frac{1}{10} \\\\ &= \\boxed{" + parseFloat((1/10).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{10} + \\frac{2}{10} \\\\ &= \\frac{3}{10} \\\\ &= \\boxed{" + parseFloat((3/10).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{10} + \\frac{2}{10} + \\frac{3}{10} \\\\ &= \\frac{6}{10} \\\\ &= \\boxed{" + parseFloat((6/10).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{10} + \\frac{2}{10} + \\frac{3}{10} + \\frac{4}{10} \\\\ &= \\frac{10}{10} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (frmval == 15) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) \\\\ &= \\frac{1}{15} \\\\ &= \\boxed{" + parseFloat((1/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{15} + \\frac{2}{15} \\\\ &= \\frac{3}{15} \\\\ &= \\boxed{" + parseFloat((3/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{15} + \\frac{2}{15} + \\frac{3}{15} \\\\ &= \\frac{6}{15} \\\\ &= \\boxed{" + parseFloat((6/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 4 && x < 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{15} + \\frac{2}{15} + \\frac{3}{15} + \\frac{4}{15} \\\\ &= \\frac{10}{15} \\\\ &= \\boxed{" + parseFloat((10/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{15} + \\frac{2}{15} + \\frac{3}{15} + \\frac{4}{15} + \\frac{5}{15} \\\\ &= \\frac{15}{15} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (frmval == 21) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) \\\\ &= \\frac{1}{21} \\\\ &= \\boxed{" + parseFloat((1/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{21} + \\frac{2}{21} \\\\ &= \\frac{3}{21} \\\\ &= \\boxed{" + parseFloat((3/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{21} + \\frac{2}{21} + \\frac{3}{21} \\\\ &= \\frac{6}{21} \\\\ &= \\boxed{" + parseFloat((6/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 4 && x < 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{21} + \\frac{2}{21} + \\frac{3}{21} + \\frac{4}{21} \\\\ &= \\frac{10}{21} \\\\ &= \\boxed{" + parseFloat((10/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 5 && x < 6) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) \\\\ &= \\frac{1}{21} + \\frac{2}{21} + \\frac{3}{21} + \\frac{4}{21} + \\frac{5}{21} \\\\ &= \\frac{15}{21} \\\\ &= \\boxed{" + parseFloat((15/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 6) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{1}{21} + \\frac{2}{21} + \\frac{3}{21} + \\frac{4}{21} + \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{21}{21} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    }

    MathJax.typeset();
}

function compprobfrml3() {
    $("#explanation").show();
    
    var frmval = document.getElementById('formulaval').value
    var x = document.getElementById('probvalfrml').value
    var ans = x/frmval
    
    if (frmval == 3) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) \\\\ &= \\frac{1}{3} \\\\ &= \\boxed{" + parseFloat((1/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{3} + \\frac{2}{3} \\\\ &= \\frac{3}{3} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (frmval == 6) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) \\\\ &= \\frac{1}{6} \\\\ &= \\boxed{" + parseFloat((1/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{6} + \\frac{2}{6} \\\\ &= \\frac{3}{6} \\\\ &= \\boxed{" + parseFloat((3/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{6} + \\frac{2}{6} + \\frac{3}{6} \\\\ &= \\frac{6}{6} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (frmval == 10) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) \\\\ &= \\frac{1}{10} \\\\ &= \\boxed{" + parseFloat((1/10).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{10} + \\frac{2}{10} \\\\ &= \\frac{3}{10} \\\\ &= \\boxed{" + parseFloat((3/10).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{10} + \\frac{2}{10} + \\frac{3}{10} \\\\ &= \\frac{6}{10} \\\\ &= \\boxed{" + parseFloat((6/10).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{10} + \\frac{2}{10} + \\frac{3}{10} + \\frac{4}{10} \\\\ &= \\frac{10}{10} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (frmval == 15) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) \\\\ &= \\frac{1}{15} \\\\ &= \\boxed{" + parseFloat((1/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{15} + \\frac{2}{15} \\\\ &= \\frac{3}{15} \\\\ &= \\boxed{" + parseFloat((3/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{15} + \\frac{2}{15} + \\frac{3}{15} \\\\ &= \\frac{16}{15} \\\\ &= \\boxed{" + parseFloat((6/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 4 && x <= 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{15} + \\frac{2}{15} + \\frac{3}{15} + \\frac{4}{15} \\\\ &= \\frac{10}{15} \\\\ &= \\boxed{" + parseFloat((10/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{15} + \\frac{2}{15} + \\frac{3}{15} + \\frac{4}{15} + \\frac{5}{15} \\\\ &= \\frac{15}{15} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    } else if (frmval == 21) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) \\\\ &= \\frac{1}{21} \\\\ &= \\boxed{" + parseFloat((1/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{21} + \\frac{2}{21} \\\\ &= \\frac{3}{21} \\\\ &= \\boxed{" + parseFloat((3/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{21} + \\frac{2}{21} + \\frac{3}{21} \\\\ &= \\frac{6}{21} \\\\ &= \\boxed{" + parseFloat((6/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 4 && x <= 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{21} + \\frac{2}{21} + \\frac{3}{21} + \\frac{4}{21} \\\\ &= \\frac{10}{21} \\\\ &= \\boxed{" + parseFloat((10/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 5 && x <= 6) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{21} + \\frac{2}{21} + \\frac{3}{21} + \\frac{4}{21} + \\frac{5}{21} \\\\ &= \\frac{15}{21} \\\\ &= \\boxed{" + parseFloat((15/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 6) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{21} + \\frac{2}{21} + \\frac{3}{21} + \\frac{4}{21} + \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{21}{21} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\leq " + x + ") = 0 $$"
        }
    }

    MathJax.typeset();
}

function compprobfrml4() {
    $("#explanation").show();
    
    var frmval = document.getElementById('formulaval').value
    var x = document.getElementById('probvalfrml').value
    var ans = x/frmval
    
    if (frmval == 3) {
        if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(2) \\\\ &= \\frac{1}{3} \\\\ &= \\boxed{" + parseFloat((1/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x <= 1) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{3} + \\frac{2}{3} \\\\ &= \\frac{3}{3} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\geq " + x + ") = 0 $$"
        }
    } else if (frmval == 6) {
        if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(3) \\\\ &= \\frac{3}{6} \\\\ &= \\boxed{" + parseFloat((3/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(2) + f(3) \\\\ &= \\frac{2}{6} + \\frac{3}{6} \\\\ &= \\frac{3}{6} \\\\ &= \\boxed{" + parseFloat((5/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x <= 1) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{6} + \\frac{2}{6} + \\frac{3}{6} \\\\ &= \\frac{6}{6} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\geq " + x + ") = 0 $$"
        }
    } else if (frmval == 10) {
        if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(4) \\\\ &= \\frac{4}{10} \\\\ &= \\boxed{" + parseFloat((4/10).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(3) + f(4) \\\\ &= \\frac{3}{10} + \\frac{4}{10} \\\\ &= \\frac{3}{10} \\\\ &= \\boxed{" + parseFloat((7/10).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(2) + f(3) + f(4) \\\\ &= \\frac{2}{10} + \\frac{3}{10} + \\frac{4}{10} \\\\ &= \\frac{6}{10} \\\\ &= \\boxed{" + parseFloat((9/10).toFixed(2)) + "}   \\end{align} $$"
        } else if (x <= 1) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{10} + \\frac{2}{10} + \\frac{3}{10} + \\frac{4}{10} \\\\ &= \\frac{10}{10} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\geq " + x + ") = 0 $$"
        }
    } else if (frmval == 15) {
        if (x > 4 && x <= 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(5) \\\\ &= \\frac{5}{15} \\\\ &= \\boxed{" + parseFloat((5/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(4) + f(5) \\\\ &= \\frac{4}{15} + \\frac{5}{15} \\\\ &= \\frac{9}{15} \\\\ &= \\boxed{" + parseFloat((9/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(3) + f(4) + f(5) \\\\ &= \\frac{3}{15} + \\frac{4}{15} + \\frac{5}{15} \\\\ &= \\frac{12}{15} \\\\ &= \\boxed{" + parseFloat((12/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(2) + f(3) + f(4) + f(5) \\\\ &= \\frac{2}{15} + \\frac{3}{15} + \\frac{4}{15} + \\frac{5}{15} \\\\ &= \\frac{14}{15} \\\\ &= \\boxed{" + parseFloat((14/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x <= 1) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) \\\\ &= \\frac{1}{15} + \\frac{2}{15} + \\frac{3}{15} + \\frac{4}{15} + \\frac{5}{15} \\\\ &= \\frac{15}{15} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\geq " + x + ") = 0 $$"
        }
    } else if (frmval == 21) {
        if (x > 5 && x <= 6) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(6) \\\\ &= \\frac{6}{21} \\\\ &= \\boxed{" + parseFloat((6/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 4 && x <= 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(5) + f(6) \\\\ &= \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{11}{21} \\\\ &= \\boxed{" + parseFloat((3/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 3 && x <= 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(4) + f(5) + f(6) \\\\ &= \\frac{4}{21} + \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{15}{21} \\\\ &= \\boxed{" + parseFloat((15/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 2 && x <= 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{3}{21} + \\frac{4}{21} + \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{18}{21} \\\\ &= \\boxed{" + parseFloat((18/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x > 1 && x <= 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(2) + f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{2}{21} + \\frac{3}{21} + \\frac{4}{21} + \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{20}{21} \\\\ &= \\boxed{" + parseFloat((20/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x <= 1) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{1}{21} + \\frac{2}{21} + \\frac{3}{21} + \\frac{4}{21} + \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{21}{21} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x \\geq " + x + ") = 0 $$"
        }
    }

    MathJax.typeset();
}

function compprobfrml5() {
    $("#explanation").show();
    
    var frmval = document.getElementById('formulaval').value
    var x = document.getElementById('probvalfrml').value
    var ans = x/frmval
    
    if (frmval == 3) {
        if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(2) \\\\ &= \\frac{1}{3} \\\\ &= \\boxed{" + parseFloat((1/3).toFixed(2)) + "}   \\end{align} $$"
        } else if (x < 1) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(1) + f(2) \\\\ &= \\frac{1}{3} + \\frac{2}{3} \\\\ &= \\frac{3}{3} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x > " + x + ") = 0 $$"
        }
    } else if (frmval == 6) {
        if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(3) \\\\ &= \\frac{3}{6} \\\\ &= \\boxed{" + 3/6 + "}   \\end{align} $$"
        } else if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(2) + f(3) \\\\ &= \\frac{2}{6} + \\frac{3}{6} \\\\ &= \\frac{5}{6} \\\\ &= \\boxed{" + parseFloat((5/6).toFixed(2)) + "}   \\end{align} $$"
        } else if (x < 1) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(1) + f(2) + f(3) \\\\ &= \\frac{1}{6} + \\frac{2}{6} + \\frac{3}{6} \\\\ &= \\frac{6}{6} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x > " + x + ") = 0 $$"
        }
    } else if (frmval == 10) {
        if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(4) \\\\ &= \\frac{4}{10} \\\\ &= \\boxed{" + 4/10 + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(3) + f(4) \\\\ &= \\frac{3}{10} + \\frac{4}{10} \\\\ &= \\frac{3}{10} \\\\ &= \\boxed{" + 7/10 + "}   \\end{align} $$"
        } else if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(2) + f(3) + f(4) \\\\ &= \\frac{2}{10} + \\frac{3}{10} + \\frac{4}{10} \\\\ &= \\frac{6}{10} \\\\ &= \\boxed{" + 9/10 + "}   \\end{align} $$"
        } else if (x < 1) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(1) + f(2) + f(3) + f(4) \\\\ &= \\frac{1}{10} + \\frac{2}{10} + \\frac{3}{10} + \\frac{4}{10} \\\\ &= \\frac{10}{10} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x > " + x + ") = 0 $$"
        }
    } else if (frmval == 15) {
        if (x >= 4 && x < 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(5) \\\\ &= \\frac{5}{15} \\\\ &= \\boxed{" + parseFloat((5/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(4) + f(5) \\\\ &= \\frac{4}{15} + \\frac{5}{15} \\\\ &= \\frac{9}{15} \\\\ &= \\boxed{" + 9/15 + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(3) + f(4) + f(5) \\\\ &= \\frac{3}{15} + \\frac{4}{15} + \\frac{5}{15} \\\\ &= \\frac{12}{15} \\\\ &= \\boxed{" + 12/15 + "}   \\end{align} $$"
        } else if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(2) + f(3) + f(4) + f(5) \\\\ &= \\frac{2}{15} + \\frac{3}{15} + \\frac{4}{15} + \\frac{5}{15} \\\\ &= \\frac{14}{15} \\\\ &= \\boxed{" + parseFloat((14/15).toFixed(2)) + "}   \\end{align} $$"
        } else if (x < 1) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) \\\\ &= \\frac{1}{15} + \\frac{2}{15} + \\frac{3}{15} + \\frac{4}{15} + \\frac{5}{15} \\\\ &= \\frac{15}{15} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x > " + x + ") = 0 $$"
        }
    } else if (frmval == 21) {
        if (x >= 5 && x < 6) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(6) \\\\ &= \\frac{6}{21} \\\\ &= \\boxed{" + parseFloat((6/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 4 && x < 5) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(5) + f(6) \\\\ &= \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{11}{21} \\\\ &= \\boxed{" + parseFloat((11/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 3 && x < 4) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(4) + f(5) + f(6) \\\\ &= \\frac{4}{21} + \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{15}{21} \\\\ &= \\boxed{" + parseFloat((15/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 2 && x < 3) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{3}{21} + \\frac{4}{21} + \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{18}{21} \\\\ &= \\boxed{" + parseFloat((18/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x >= 1 && x < 2) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(2) + f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{2}{21} + \\frac{3}{21} + \\frac{4}{21} + \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{20}{21} \\\\ &= \\boxed{" + parseFloat((20/21).toFixed(2)) + "}   \\end{align} $$"
        } else if (x < 1) {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + x + ") &= f(1) + f(2) + f(3) + f(4) + f(5) + f(6) \\\\ &= \\frac{1}{21} + \\frac{2}{21} + \\frac{3}{21} + \\frac{4}{21} + \\frac{5}{21} + \\frac{6}{21} \\\\ &= \\frac{21}{21} \\\\ &= \\boxed{" + 1 + "}   \\end{align} $$"
        } else {
            document.getElementById("output").innerHTML = "$$ P(x > " + x + ") = 0 $$"
        }
    }

    MathJax.typeset();
}





























function binomial() {
    $("#binomial").show();
    $("#equal").show();
    $("#binomialprobability").show(); $("#binomialexpected").hide(); $("#binomialvariance").hide(); $("#binomialstandard").hide();
}

function toless() {
        $("#equal").hide();
        $("#less").show();
        $("#greater").hide();
        probtype = "less"
}

function togreater() {
        $("#equal").hide();
        $("#less").hide();
        $("#greater").show();
        probtype = "greater"
}

function toequal() {
        $("#equal").show();
        $("#less").hide();
        $("#greater").hide();
        probtype = "equal"
}

function compbinomial() {
    if (binomialtype == "expected") {
        compbinomialexpected()
    } else if (binomialtype == "variance") {
        compbinomialvariance()
    } else if (binomialtype == "standard") {
        compbinomialstandard()
    }  else {
        compbinomialprob()
    }
}

function compbinomialprob() {
    var probtype = document.getElementById("probtype").value
    if (probtype == "equal") {
        compbinomial1()
    } else if (probtype == "lessequal") {
        compbinomial2()
    } else if (probtype == "greaterequal") {
        compbinomial3()
    } else if (probtype == "less") {
        compbinomial4()
    } else if (probtype == "greater") {
        compbinomial5()
    } 
}

function switchexpected() {
    $("#binomialprobability").hide(); $("#binomialexpected").show(); $("#binomialvariance").hide(); $("#binomialstandard").hide();
    binomialtype = "expected"
}
 
function switchvariance() {
    $("#binomialprobability").hide(); $("#binomialexpected").hide(); $("#binomialvariance").show(); $("#binomialstandard").hide();
    binomialtype = "variance"
}

function switchstandard() {
    $("#binomialprobability").hide(); $("#binomialexpected").hide(); $("#binomialvariance").hide(); $("#binomialstandard").show();
    binomialtype = "standard"
}
 
function switchprobability() {
    $("#binomialprobability").show(); $("#binomialexpected").hide(); $("#binomialvariance").hide(); $("#binomialstandard").hide();
    binomialtype = "probability"
}

function compbinomialexpected() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = ""
    document.getElementById("formulatext").innerHTML = "$ E(x) = np $"
    document.getElementById("explanationtext").innerHTML = ""
    var trials = document.getElementById('trials').value
    var prob = parseFloat(document.getElementById('psuccess').value)
    
    document.getElementById("output").innerHTML = "$$ E(x) = np  = " + trials + "(" + prob.toFixed(4).replace(/^0+|0+$/g, "") + ") = \\boxed{" + (trials*prob).toFixed(4).replace(/^0+|0+$/g, "") + "}  $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function compbinomialvariance() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = ""
    document.getElementById("formulatext").innerHTML = "$ \\text{Var}(x) = np(1-p) $"
    document.getElementById("explanationtext").innerHTML = ""
    var trials = document.getElementById('trials').value
    var prob = parseFloat(document.getElementById('psuccess').value)
    var ans = trials*prob*(1-prob)
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Var}(x) &= np(1-p) \\\\ &= " + trials + "(" + prob.toFixed(4).replace(/^0+|0+$/g, "") + ")(1-" + prob.toFixed(4).replace(/^0+|0+$/g, "") + ") \\\\ &= \\boxed{" + (trials*prob*(1-prob)).toFixed(4).replace(/^0+|0+$/g, "") + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function compbinomialstandard() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = ""
    document.getElementById("formulatext").innerHTML = "$ \\text{Var}(x) = np(1-p) $"
    document.getElementById("explanationtext").innerHTML = ""
    var trials = document.getElementById('trials').value
    var prob = parseFloat(document.getElementById('psuccess').value)
    var variance = trials*prob*(1-prob)
    var ans = Math.sqrt(variance)
    
    document.getElementById("output").innerHTML = "$$ \\sigma = \\sqrt{\\sigma^2}  = \\sqrt{"+variance.toFixed(4).replace(/^0+|0+$/g, "")+"} = \\boxed{"+ans.toFixed(4).replace(/^0+|0+$/g, "")+"} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function compbinomial1() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = ""
    document.getElementById("formulatext").innerHTML = "$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $"
    document.getElementById("explanationtext").innerHTML = ""
    var trials = document.getElementById('trials').value
    var prob = parseFloat(document.getElementById('psuccess').value)
    var num = document.getElementById('binval').value
    
    var topn = trials;
    var bottomn = num;
    var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
    var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
    var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
    if (bottomn >= topn - bottomn) {
        denominator2 = denominator2 + bottomn + "!"
        for (var r = 0; r < topn - bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += "\\cdot" + (topn - bottomn - r)
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + bottomn + "!"
        var denominator3 = topbotfact
        var ansval = numerator3 / denominator3;
    } else {
        for (var r = 0; r < bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += (bottomn - r) + "\\cdot"
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + "\\cancel{"+(topn - bottomn) + "!}"
        denominator2 = denominator2 + "\\cancel{"+(topn - bottomn) + "!}"
        var denominator3 = bottomnfact
        var ansval = numerator3 / denominator3;
    }
    
    var ans = ansval * Math.pow(prob,num) * Math.pow((1-prob),(trials-num))
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + num + ") &= f(" + num + ") \\\\ &= {" + trials + " \\choose " + num + "} " + prob.toFixed(4).replace(/^0+|0+$/g, "") + "^" + num + " (1-" + prob.toFixed(4).replace(/^0+|0+$/g, "") + ")^{(" + trials + "-" + num + ")} \\\\ &= \\frac{" + trials + "! }{" + num + "! (" + trials + " - " + num + ")!} ( " + Math.pow(prob,num).toFixed(4).replace(/^0+|0+$/g, "") + " )( " + (1-prob).toFixed(4).replace(/^0+|0+$/g, "") + ")^{" + (trials-num) + "} \\\\ &= \\frac{" + numerator2 + " }{" + denominator2 + "} ( " + Math.pow(prob,num).toFixed(4).replace(/^0+|0+$/g, "") + ") ( " + Math.pow((1-prob),(trials-num)).toFixed(4).replace(/^0+|0+$/g, "")  + ") \\\\ &= "+parseFloat(ansval.toFixed(2))+"("+(Math.pow(prob,num)*Math.pow(1-prob,trials-num)).toFixed(4).replace(/^0+|0+$/g, "")+") \\\\ &= \\boxed{" + ans.toFixed(4).replace(/^0+|0+$/g, "")  + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function compbinomial2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = ""
    document.getElementById("formulatext").innerHTML = "$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $"
    document.getElementById("explanationtext").innerHTML = ""
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    var num = document.getElementById('binval').value
    
    var fplus = ""
    for (i = 0; i < num; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+num+")"
    
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < num; i++) {
        var topn = trials;
        var bottomn = i;
        var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
        var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
        var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
        if (bottomn >= topn - bottomn) {
            denominator2 = denominator2 + bottomn + "!"
            for (var r = 0; r < topn - bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += "\\cdot" + (topn - bottomn - r)
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + bottomn + "!"
            var denominator3 = topbotfact
            var ansval = numerator3 / denominator3;
        } else {
            for (var r = 0; r < bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += (bottomn - r) + "\\cdot"
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + (topn - bottomn) + "!"
            denominator2 = denominator2 + (topn - bottomn) + "!"
            var denominator3 = bottomnfact
            var ansval = numerator3 / denominator3;
        }
        var ans = ansval * Math.pow(prob,i) * Math.pow((1-prob),(trials-i))
        var work = "$$ f("+i+") = {" + trials + " \\choose " + i + "} " + parseFloat(prob).toFixed(2).replace(/^0+/, '') + "^" + i + " (1-" + parseFloat(prob).toFixed(2).replace(/^0+/, '') + ")^{(" + trials + "-" + i + ")} = {\\color{RoyalBlue}"+parseFloat(ans).toFixed(2).replace(/^0+/, '')+"} $$"
        workplus += work
        ansplus += ans.toFixed(4).replace(/^0+|0+$/g, "") + "+"
        finalans += parseFloat(ans.toFixed(4))
        
    }
    
    var topn = trials;
    var bottomn = i;
    var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
    var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
    var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
    if (bottomn >= topn - bottomn) {
        denominator2 = denominator2 + bottomn + "!"
        for (var r = 0; r < topn - bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += "\\cdot" + (topn - bottomn - r)
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + bottomn + "!"
        var denominator3 = topbotfact
        var ansval = numerator3 / denominator3;
    } else {
        for (var r = 0; r < bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += (bottomn - r) + "\\cdot"
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + (topn - bottomn) + "!"
        denominator2 = denominator2 + (topn - bottomn) + "!"
        var denominator3 = bottomnfact
        var ansval = numerator3 / denominator3;
    }

    var ans = ansval * Math.pow(prob,num) * Math.pow((1-prob),(trials-num))
    workplus = workplus + "$$ f("+num+") = {" + trials + " \\choose " + num + "} " + parseFloat(prob).toFixed(2).replace(/^0+/, '') + "^" + num + " (1-" + parseFloat(prob).toFixed(2).replace(/^0+/, '') + ")^{(" + trials + "-" + num + ")} = {\\color{RoyalBlue}"+parseFloat(ans).toFixed(2).replace(/^0+/, '')+"} $$"
    ansplus = ansplus + ans.toFixed(4).replace(/^0+|0+$/g, "")
    finalans = finalans + parseFloat(ans.toFixed(4))
        
    
    
    
    if (i == 0) {
        document.getElementById("output").innerHTML = "$$  P(x \\leq " + num + ") =  " + fplus + " = \\boxed{"+parseFloat(finalans).toFixed(2).replace(/^0+/, '') + "}    $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + num + ") &=  " + fplus + " \\\\ &= " + ansplus + " \\\\ &= \\boxed{"+finalans.toFixed(4).replace(/^0+|0+$/g, "") + "}   \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    }
    
    MathJax.typeset();
}

function compbinomial4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = ""
    document.getElementById("formulatext").innerHTML = "$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $"
    document.getElementById("explanationtext").innerHTML = ""
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    var num = document.getElementById('binval').value
    var numm1 = num - 1
    
    var fplus = ""
    for (i = 0; i < numm1; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+numm1+")"
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < numm1; i++) {
        var topn = trials;
        var bottomn = i;
        var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
        var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
        var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
        if (bottomn >= topn - bottomn) {
            denominator2 = denominator2 + bottomn + "!"
            for (var r = 0; r < topn - bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += "\\cdot" + (topn - bottomn - r)
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + bottomn + "!"
            var denominator3 = topbotfact
            var ansval = numerator3 / denominator3;
        } else {
            for (var r = 0; r < bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += (bottomn - r) + "\\cdot"
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + (topn - bottomn) + "!"
            denominator2 = denominator2 + (topn - bottomn) + "!"
            var denominator3 = bottomnfact
            var ansval = numerator3 / denominator3;
        }

        var ans = ansval * Math.pow(prob,i) * Math.pow((1-prob),(trials-i))
        var work = "$$ f("+i+") = {" + trials + " \\choose " + i + "} " + parseFloat(prob).toFixed(2).replace(/^0+/, '') + "^" + i + " (1-" + parseFloat(prob).toFixed(2).replace(/^0+/, '') + ")^{(" + trials + "-" + i + ")} = {\\color{RoyalBlue}"+parseFloat(ans).toFixed(2).replace(/^0+/, '')+"} $$"
        workplus += work
        ansplus += ans.toFixed(4).replace(/^0+|0+$/g, "") + "+"
        finalans += parseFloat(ans.toFixed(4))
        
    }
    
    var topn = trials;
    var bottomn = i;
    var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
    var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
    var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
    if (bottomn >= topn - bottomn) {
        denominator2 = denominator2 + bottomn + "!"
        for (var r = 0; r < topn - bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += "\\cdot" + (topn - bottomn - r)
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + bottomn + "!"
        var denominator3 = topbotfact
        var ansval = numerator3 / denominator3;
    } else {
        for (var r = 0; r < bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += (bottomn - r) + "\\cdot"
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + (topn - bottomn) + "!"
        denominator2 = denominator2 + (topn - bottomn) + "!"
        var denominator3 = bottomnfact
        var ansval = numerator3 / denominator3;
    }

    var ans = ansval * Math.pow(prob,numm1) * Math.pow((1-prob),(trials-numm1))
    workplus = workplus + "$$ f("+numm1+") = {" + trials + " \\choose " + numm1 + "} " + parseFloat(prob).toFixed(2).replace(/^0+/, '') + "^" + numm1 + " (1-" + parseFloat(prob).toFixed(2).replace(/^0+/, '') + ")^{(" + trials + "-" + numm1 + ")} = {\\color{RoyalBlue}"+parseFloat(ans).toFixed(2).replace(/^0+/, '')+"} $$"
    ansplus = ansplus + ans.toFixed(4).replace(/^0+|0+$/g, "")
    finalans = finalans + parseFloat(ans.toFixed(4))
    
    if (i == 0) {
        document.getElementById("output").innerHTML = "$$ P(x < " + num + ") =  " + fplus + " = \\boxed{"+finalans.toFixed(4).replace(/^0+|0+$/g, "") + "}  $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + num + ") &=  " + fplus + " \\\\ &= " + ansplus + " \\\\ &= \\boxed{"+finalans.toFixed(4).replace(/^0+|0+$/g, "") + "}   \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    }
    
    
    MathJax.typeset();
}

function compbinomial3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = ""
    document.getElementById("formulatext").innerHTML = "$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $"
    document.getElementById("explanationtext").innerHTML = ""
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    var num = document.getElementById('binval').value
    
    var fplus = ""
    for (i = num; i < trials; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+trials+")"
    
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = num; i < trials; i++) {
        var topn = trials;
        var bottomn = i;
        var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
        var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
        var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
        if (bottomn >= topn - bottomn) {
            denominator2 = denominator2 + bottomn + "!"
            for (var r = 0; r < topn - bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += "\\cdot" + (topn - bottomn - r)
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + bottomn + "!"
            var denominator3 = topbotfact
            var ansval = numerator3 / denominator3;
        } else {
            for (var r = 0; r < bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += (bottomn - r) + "\\cdot"
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + (topn - bottomn) + "!"
            denominator2 = denominator2 + (topn - bottomn) + "!"
            var denominator3 = bottomnfact
            var ansval = numerator3 / denominator3;
        }
        var ans = ansval * Math.pow(prob,i) * Math.pow((1-prob),(trials-i))
        var work = "$$ f("+i+") = {" + trials + " \\choose " + i + "} " + parseFloat(prob).toFixed(2).replace(/^0+/, '') + "^" + i + " (1-" + parseFloat(prob).toFixed(2).replace(/^0+/, '') + ")^{(" + trials + "-" + i + ")} = {\\color{RoyalBlue}"+parseFloat(ans).toFixed(2).replace(/^0+/, '')+"} $$"
        workplus += work
        ansplus += ans.toFixed(4).replace(/^0+|0+$/g, "") + "+"
        finalans += parseFloat(ans.toFixed(4))
        
    }
    
    var topn = trials;
    var bottomn = i;
    var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
    var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
    var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
    if (bottomn >= topn - bottomn) {
        denominator2 = denominator2 + bottomn + "!"
        for (var r = 0; r < topn - bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += "\\cdot" + (topn - bottomn - r)
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + bottomn + "!"
        var denominator3 = topbotfact
        var ansval = numerator3 / denominator3;
    } else {
        for (var r = 0; r < bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += (bottomn - r) + "\\cdot"
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + (topn - bottomn) + "!"
        denominator2 = denominator2 + (topn - bottomn) + "!"
        var denominator3 = bottomnfact
        var ansval = numerator3 / denominator3;
    }

    var ans = ansval * Math.pow(prob,trials) * Math.pow((1-prob),(trials-trials))
    workplus = workplus + "$$ f("+trials+") = {" + trials + " \\choose " + trials + "} " + parseFloat(prob).toFixed(2).replace(/^0+/, '') + "^" + trials + " (1-" + parseFloat(prob).toFixed(2).replace(/^0+/, '') + ")^{(" + trials + "-" + trials + ")} = {\\color{RoyalBlue}"+parseFloat(ans).toFixed(2).replace(/^0+/, '')+"} $$"
    ansplus = ansplus + ans.toFixed(4).replace(/^0+|0+$/g, "")
    finalans = finalans + parseFloat(ans.toFixed(4))
        
    
    
    
    if (i == num) {
        document.getElementById("output").innerHTML = "$$  P(x \\geq " + num + ") =  " + fplus + " = \\boxed{"+finalans.toFixed(4).replace(/^0+|0+$/g, "") + "}    $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + num + ") &=  " + fplus + " \\\\ &= " + ansplus + " \\\\ &= \\boxed{"+finalans.toFixed(4).replace(/^0+|0+$/g, "") + "}   \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    }
    
    MathJax.typeset();
}

function compbinomial5() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = ""
    document.getElementById("formulatext").innerHTML = "$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $"
    document.getElementById("explanationtext").innerHTML = ""
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    var num = document.getElementById('binval').value
    var nump1 = parseFloat(num) + 1
    
    var fplus = ""
    for (i = nump1; i < trials; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+trials+")"
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = nump1; i < trials; i++) {
        var topn = trials;
        var bottomn = i;
        var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
        var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
        var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
        if (bottomn >= topn - bottomn) {
            denominator2 = denominator2 + bottomn + "!"
            for (var r = 0; r < topn - bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += "\\cdot" + (topn - bottomn - r)
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + bottomn + "!"
            var denominator3 = topbotfact
            var ansval = numerator3 / denominator3;
        } else {
            for (var r = 0; r < bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += (bottomn - r) + "\\cdot"
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + (topn - bottomn) + "!"
            denominator2 = denominator2 + (topn - bottomn) + "!"
            var denominator3 = bottomnfact
            var ansval = numerator3 / denominator3;
        }

        var ans = ansval * Math.pow(prob,i) * Math.pow((1-prob),(trials-i))
        var work = "$$ f("+i+") = {" + trials + " \\choose " + i + "} " + parseFloat(prob).toFixed(2).replace(/^0+/, '') + "^" + i + " (1-" + parseFloat(prob).toFixed(2).replace(/^0+/, '') + ")^{(" + trials + "-" + i + ")} = {\\color{RoyalBlue}"+parseFloat(ans).toFixed(2).replace(/^0+/, '')+"} $$"
        workplus += work
        ansplus += ans.toFixed(4).replace(/^0+|0+$/g, "") + "+"
        finalans += parseFloat(ans.toFixed(4))
        
    }
    
    var topn = trials;
    var bottomn = i;
    var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
    var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
    var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
    if (bottomn >= topn - bottomn) {
        denominator2 = denominator2 + bottomn + "!"
        for (var r = 0; r < topn - bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += "\\cdot" + (topn - bottomn - r)
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + bottomn + "!"
        var denominator3 = topbotfact
        var ansval = numerator3 / denominator3;
    } else {
        for (var r = 0; r < bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += (bottomn - r) + "\\cdot"
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + (topn - bottomn) + "!"
        denominator2 = denominator2 + (topn - bottomn) + "!"
        var denominator3 = bottomnfact
        var ansval = numerator3 / denominator3;
    }

    var ans = ansval * Math.pow(prob,trials) * Math.pow((1-prob),(trials-trials))
    workplus = workplus + "$$ f("+trials+") = {" + trials + " \\choose " + trials + "} " + parseFloat(prob).toFixed(2).replace(/^0+/, '') + "^" + trials + " (1-" + parseFloat(prob).toFixed(2).replace(/^0+/, '') + ")^{(" + trials + "-" + trials + ")} = {\\color{RoyalBlue}"+parseFloat(ans).toFixed(2).replace(/^0+/, '')+"} $$"
    ansplus = ansplus + ans.toFixed(4).replace(/^0+|0+$/g, "")
    finalans = finalans + parseFloat(ans.toFixed(4))
    
    if (i == nump1) {
        document.getElementById("output").innerHTML = "$$ P(x > " + num + ") =  " + fplus + " = \\boxed{"+finalans.toFixed(4).replace(/^0+|0+$/g, "") + "}  $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + num + ") &=  " + fplus + " \\\\ &= " + ansplus + " \\\\ &= \\boxed{"+finalans.toFixed(4).replace(/^0+|0+$/g, "") + "}   \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    }
    
    
    MathJax.typeset();
}

function compbinomial31() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = ""
    document.getElementById("formulatext").innerHTML = "$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $"
    document.getElementById("explanationtext").innerHTML = ""
    var trials = parseInt(document.getElementById('trials').value)
    var prob = document.getElementById('psuccess').value
    var num = document.getElementById('binval').value
    var numm1 = num - 1
    
    
    if (trials-num < num) {
        var fplus = ""
        for (i = num; i < trials; i++) {
            fplus += "f("+i+")+"
        }
        fplus = fplus + "f("+trials+")" 

        var ansplus = ""
        var finalans = 0
        for (i = num; i < trials; i++) {
            var topn = trials;
            var bottomn = i;
            var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
            var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
            var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
            if (bottomn >= topn - bottomn) {
                denominator2 = denominator2 + bottomn + "!"
                for (var r = 0; r < topn - bottomn; r++){
                    numerator2 += (topn - r)+"\\cdot"
                    denominator2 += "\\cdot" + (topn - bottomn - r)
                    numerator3 = numerator3 * (topn - r)
                }
                numerator2 = numerator2 + bottomn + "!"
                var denominator3 = topbotfact
                var ansval = numerator3 / denominator3;
            } else {
                for (var r = 0; r < bottomn; r++){
                    numerator2 += (topn - r)+"\\cdot"
                    denominator2 += (bottomn - r) + "\\cdot"
                    numerator3 = numerator3 * (topn - r)
                }
                numerator2 = numerator2 + (topn - bottomn) + "!"
                denominator2 = denominator2 + (topn - bottomn) + "!"
                var denominator3 = bottomnfact
                var ansval = numerator3 / denominator3;
            }

            var ans = ansval * Math.pow(prob,i) * Math.pow((1-prob),(trials-i))
            ansplus += parseFloat(ans.toFixed(2)) + "+"
            finalans += parseFloat(ans.toFixed(2))

        }

        var topn = trials;
        var bottomn = trials;
        var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
        var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
        var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
        if (bottomn >= topn - bottomn) {
            denominator2 = denominator2 + bottomn + "!"
            for (var r = 0; r < topn - bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += "\\cdot" + (topn - bottomn - r)
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + bottomn + "!"
            var denominator3 = topbotfact
            var ansval = numerator3 / denominator3;
        } else {
            for (var r = 0; r < bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += (bottomn - r) + "\\cdot"
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + (topn - bottomn) + "!"
            denominator2 = denominator2 + (topn - bottomn) + "!"
            var denominator3 = bottomnfact
            var ansval = numerator3 / denominator3;
        }

        var ans = ansval * Math.pow(prob,trials) * Math.pow((1-prob),(trials-trials))

        ansplus = ansplus + parseFloat(ans.toFixed(2))
        finalans = finalans + parseFloat(ans.toFixed(2))


        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + num + ") &=  " + fplus + " \\\\ &= " + ansplus + " \\\\ &= "+parseFloat(finalans.toFixed(2)) + "   \\end{align} $$"
        //+ (trials-num) + "-" + trials
    } else if (trials-num >= num) {
        var fplus = ""
        for (i = 0; i < numm1; i++) {
            fplus += "f("+i+")+"
        }
        fplus = fplus + "f("+numm1+")"

        var ansplus = ""
        var finalans = 0
        for (i = 0; i < numm1; i++) {
            var topn = trials;
            var bottomn = i;
            var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
            var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
            var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
            if (bottomn >= topn - bottomn) {
                denominator2 = denominator2 + bottomn + "!"
                for (var r = 0; r < topn - bottomn; r++){
                    numerator2 += (topn - r)+"\\cdot"
                    denominator2 += "\\cdot" + (topn - bottomn - r)
                    numerator3 = numerator3 * (topn - r)
                }
                numerator2 = numerator2 + bottomn + "!"
                var denominator3 = topbotfact
                var ansval = numerator3 / denominator3;
            } else {
                for (var r = 0; r < bottomn; r++){
                    numerator2 += (topn - r)+"\\cdot"
                    denominator2 += (bottomn - r) + "\\cdot"
                    numerator3 = numerator3 * (topn - r)
                }
                numerator2 = numerator2 + (topn - bottomn) + "!"
                denominator2 = denominator2 + (topn - bottomn) + "!"
                var denominator3 = bottomnfact
                var ansval = numerator3 / denominator3;
            }

            var ans = ansval * Math.pow(prob,i) * Math.pow((1-prob),(trials-i))
            ansplus += parseFloat(ans.toFixed(2)) + "+"
            finalans += parseFloat(ans.toFixed(2))

        }

        var topn = trials;
        var bottomn = i;
        var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
        var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
        var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
        if (bottomn >= topn - bottomn) {
            denominator2 = denominator2 + bottomn + "!"
            for (var r = 0; r < topn - bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += "\\cdot" + (topn - bottomn - r)
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + bottomn + "!"
            var denominator3 = topbotfact
            var ansval = numerator3 / denominator3;
        } else {
            for (var r = 0; r < bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += (bottomn - r) + "\\cdot"
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + (topn - bottomn) + "!"
            denominator2 = denominator2 + (topn - bottomn) + "!"
            var denominator3 = bottomnfact
            var ansval = numerator3 / denominator3;
        }

        var ans = ansval * Math.pow(prob,num) * Math.pow((1-prob),(trials-num))

        ansplus = ansplus + parseFloat(ans.toFixed(2))
        finalans = finalans + parseFloat(ans.toFixed(2))


        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + num + ") &= 1 - P(x < " + num + ")\\\\ &= 1 - (" + fplus + ") \\\\ &= 1 - (" + ansplus + ") \\\\ &= 1 - "+parseFloat(finalans.toFixed(2)) + " \\\\ &= \\boxed{"+parseFloat((1-finalans).toFixed(2)) + "}   \\end{align} $$"
    }
    
    MathJax.typeset();
}

function compbinomial51() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $$"
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    var num = document.getElementById('binval').value
    var nump1 = parseFloat(num) + 1
    
    if (trials-num < num) {
        var fplus = ""
        for (i = nump1; i < trials; i++) {
            fplus += "f("+i+")+"
        }
        fplus = fplus + "f("+trials+")"

        var ansplus = ""
        var finalans = 0
        for (i = nump1; i < trials; i++) {
            var topn = trials;
            var bottomn = i;
            var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
            var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
            var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
            if (bottomn >= topn - bottomn) {
                denominator2 = denominator2 + bottomn + "!"
                for (var r = 0; r < topn - bottomn; r++){
                    numerator2 += (topn - r)+"\\cdot"
                    denominator2 += "\\cdot" + (topn - bottomn - r)
                    numerator3 = numerator3 * (topn - r)
                }
                numerator2 = numerator2 + bottomn + "!"
                var denominator3 = topbotfact
                var ansval = numerator3 / denominator3;
            } else {
                for (var r = 0; r < bottomn; r++){
                    numerator2 += (topn - r)+"\\cdot"
                    denominator2 += (bottomn - r) + "\\cdot"
                    numerator3 = numerator3 * (topn - r)
                }
                numerator2 = numerator2 + (topn - bottomn) + "!"
                denominator2 = denominator2 + (topn - bottomn) + "!"
                var denominator3 = bottomnfact
                var ansval = numerator3 / denominator3;
            }

            var ans = ansval * Math.pow(prob,i) * Math.pow((1-prob),(trials-i))
            ansplus += parseFloat(ans.toFixed(2)) + "+"
            finalans += parseFloat(ans.toFixed(2))

        }

        var topn = trials;
        var bottomn = trials;
        var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
        var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
        var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
        if (bottomn >= topn - bottomn) {
            denominator2 = denominator2 + bottomn + "!"
            for (var r = 0; r < topn - bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += "\\cdot" + (topn - bottomn - r)
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + bottomn + "!"
            var denominator3 = topbotfact
            var ansval = numerator3 / denominator3;
        } else {
            for (var r = 0; r < bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += (bottomn - r) + "\\cdot"
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + (topn - bottomn) + "!"
            denominator2 = denominator2 + (topn - bottomn) + "!"
            var denominator3 = bottomnfact
            var ansval = numerator3 / denominator3;
        }

        var ans = ansval * Math.pow(prob,trials) * Math.pow((1-prob),(trials-trials))

        ansplus = ansplus + parseFloat(ans.toFixed(2))
        finalans = finalans + parseFloat(ans.toFixed(2))

        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + num + ") &=  " + fplus + " \\\\ &= " + ansplus + " \\\\ &= "+parseFloat(finalans.toFixed(2)) + "   \\end{align} $$"
    } else if (trials-num >= num) {
        var fplus = ""
        for (i = 0; i < num; i++) {
            fplus += "f("+i+")+"
        }
        fplus = fplus + "f("+num+")"

        var ansplus = ""
        var finalans = 0
        for (i = 0; i < num; i++) {
            var topn = trials;
            var bottomn = i;
            var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
            var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
            var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
            if (bottomn >= topn - bottomn) {
                denominator2 = denominator2 + bottomn + "!"
                for (var r = 0; r < topn - bottomn; r++){
                    numerator2 += (topn - r)+"\\cdot"
                    denominator2 += "\\cdot" + (topn - bottomn - r)
                    numerator3 = numerator3 * (topn - r)
                }
                numerator2 = numerator2 + bottomn + "!"
                var denominator3 = topbotfact
                var ansval = numerator3 / denominator3;
            } else {
                for (var r = 0; r < bottomn; r++){
                    numerator2 += (topn - r)+"\\cdot"
                    denominator2 += (bottomn - r) + "\\cdot"
                    numerator3 = numerator3 * (topn - r)
                }
                numerator2 = numerator2 + (topn - bottomn) + "!"
                denominator2 = denominator2 + (topn - bottomn) + "!"
                var denominator3 = bottomnfact
                var ansval = numerator3 / denominator3;
            }

            var ans = ansval * Math.pow(prob,i) * Math.pow((1-prob),(trials-i))
            ansplus += parseFloat(ans.toFixed(2)) + "+"
            finalans += parseFloat(ans.toFixed(2))

        }

        var topn = trials;
        var bottomn = i;
        var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
        var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
        var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
        if (bottomn >= topn - bottomn) {
            denominator2 = denominator2 + bottomn + "!"
            for (var r = 0; r < topn - bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += "\\cdot" + (topn - bottomn - r)
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + bottomn + "!"
            var denominator3 = topbotfact
            var ansval = numerator3 / denominator3;
        } else {
            for (var r = 0; r < bottomn; r++){
                numerator2 += (topn - r)+"\\cdot"
                denominator2 += (bottomn - r) + "\\cdot"
                numerator3 = numerator3 * (topn - r)
            }
            numerator2 = numerator2 + (topn - bottomn) + "!"
            denominator2 = denominator2 + (topn - bottomn) + "!"
            var denominator3 = bottomnfact
            var ansval = numerator3 / denominator3;
        }

        var ans = ansval * Math.pow(prob,num) * Math.pow((1-prob),(trials-num))

        ansplus = ansplus + parseFloat(ans.toFixed(2))
        finalans = finalans + parseFloat(ans.toFixed(2))


        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + num + ") &= 1 - P(x \\leq " + num + ") \\\\ &= 1 - (" + fplus + ") \\\\ &= 1 - (" + ansplus + ") \\\\ &= 1 - "+parseFloat(finalans.toFixed(2)) + " \\\\ &= \\boxed{"+parseFloat((1-finalans).toFixed(2)) + "}   \\end{align} $$"
    }
        
    MathJax.typeset();
}

function poisson() {
    $("#poisson").show();
    $("#equal2").show();
}

function toless2() {
        $("#equal2").hide();
        $("#less2").show();
        $("#greater2").hide();
        probtype2 = "less"
}

function togreater2() {
        $("#equal2").hide();
        $("#less2").hide();
        $("#greater2").show();
        probtype2 = "greater"
}

function toequal2() {
        $("#equal2").show();
        $("#less2").hide();
        $("#greater2").hide();
        probtype2 = "equal"
}

function comppoisson() {
    var probtype2 = document.getElementById("probtype2").value
    if (probtype2 == "equal") {
        comppoisson1()
    } else if (probtype2 == "lessequal") {
        comppoisson2()
    } else if (probtype2 == "greaterequal") {
        comppoisson3()
    } else if (probtype2 == "less") {
        comppoisson4()
    } else if (probtype2 == "greater") {
        comppoisson5()
    }
}

function comppoisson1() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{\\mu^x e^{-\\mu}}{x!} $$"
    var ave = document.getElementById('meanocc').value;
    var num = document.getElementById('poissval').value;
    var exp = 2.71828;
    
    var ans = (Math.pow(ave,num)*Math.pow(exp,(-ave)))/factorial(num)
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + num + ") &= f(" + num + ") \\\\ &= \\frac{" + ave + "^" + num + " e^{-" + ave + "}}{" + num + "!} \\\\ &= \\frac{" + Math.pow(ave,num) + "(" + parseFloat((Math.pow(exp,(-ave)))).toFixed(4).replace(/^0+/, '') + ")}{" + factorial(num) + "} \\\\ &= \\boxed{" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function comppoisson2() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{\\mu^x e^{-\\mu}}{x!} $$"
    var ave = document.getElementById('meanocc').value;
    var num = document.getElementById('poissval').value;
    var exp = 2.71828;
    
    var fplus = ""
    for (i = 0; i < num; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+num+")"
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < num; i++) {
        var ans = (Math.pow(ave,i)*Math.pow(exp,(-ave)))/factorial(i)
        ansplus += parseFloat(ans).toFixed(4).replace(/^0+/, '') + "+"
        finalans += parseFloat(ans.toFixed(4))
        var work = " $$ f(" + i + ") = \\frac{" + ave + "^" + i + " e^{-" + ave + "}}{" + i + "!} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$ "
        workplus += work
    }
    
    //= \\frac{" + Math.pow(ave,i) + "\\times " + parseFloat((Math.pow(exp,(-ave)))).toFixed(4).replace(/^0+/, '') + "}{" + factorial(i) + "} 
    //= \\frac{" + Math.pow(ave,num) + "\\times " + parseFloat((Math.pow(exp,(-ave)))).toFixed(4).replace(/^0+/, '') + "}{" + factorial(num) + "} 
    
    var ans = (Math.pow(ave,i)*Math.pow(exp,(-ave)))/factorial(i)
    
    ansplus = ansplus + parseFloat(ans).toFixed(4).replace(/^0+/, '')
    
    finalans = finalans + parseFloat(ans.toFixed(4))
    
    workplus = workplus + " $$ f(" + num + ") = \\frac{" + ave + "^" + num + " e^{-" + ave + "}}{" + i + "!} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$ "
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + num + ") &= " + fplus + " \\\\ &= " + ansplus + " \\\\ &= \\boxed{" + parseFloat(finalans).toFixed(4).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function comppoisson4() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{\\mu^x e^{-\\mu}}{x!} $$"
    var ave = document.getElementById('meanocc').value;
    var num = document.getElementById('poissval').value;
    var numm1 = num - 1
    var exp = 2.71828;
    
    var fplus = ""
    for (i = 0; i < numm1; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+numm1+")"
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < numm1; i++) {
        var ans = (Math.pow(ave,i)*Math.pow(exp,(-ave)))/factorial(i)
        ansplus += parseFloat(ans).toFixed(4).replace(/^0+/, '') + "+"
        finalans += parseFloat(ans.toFixed(4))
        var work = " $$ f(" + i + ") = \\frac{" + ave + "^" + i + " e^{-" + ave + "}}{" + i + "!} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$ "
        workplus += work
    }
    
    //= \\frac{" + Math.pow(ave,i) + "\\times " + parseFloat((Math.pow(exp,(-ave)))).toFixed(4).replace(/^0+/, '') + "}{" + factorial(i) + "} 
    //= \\frac{" + Math.pow(ave,numm1) + "\\times " + parseFloat((Math.pow(exp,(-ave)))).toFixed(4).replace(/^0+/, '') + "}{" + factorial(numm1) + "} 
    
    var ans = (Math.pow(ave,i)*Math.pow(exp,(-ave)))/factorial(i)
    
    ansplus = ansplus + parseFloat(ans).toFixed(4).replace(/^0+/, '')
    
    finalans = finalans + parseFloat(ans.toFixed(4))
    
    workplus = workplus + " $$ f(" + numm1 + ") = \\frac{" + ave + "^" + numm1 + " e^{-" + ave + "}}{" + i + "!} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$ "
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + num + ") &= " + fplus + " \\\\ &= " + ansplus + " \\\\ &= \\boxed{" + parseFloat(finalans).toFixed(4).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function comppoisson3() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{\\mu^x e^{-\\mu}}{x!} $$"
    var ave = document.getElementById('meanocc').value;
    var num = document.getElementById('poissval').value;
    var numm1 = num - 1;
    var exp = 2.71828;
    
    var fplus = ""
    for (i = 0; i < numm1; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+numm1+")"
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < numm1; i++) {
        var ans = (Math.pow(ave,i)*Math.pow(exp,(-ave)))/factorial(i)
        ansplus += parseFloat(ans).toFixed(4).replace(/^0+/, '') + "+"
        finalans += parseFloat(ans.toFixed(4))
        var work = " $$ f(" + i + ") = \\frac{" + ave + "^" + i + " e^{-" + ave + "}}{" + i + "!} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$ "
        workplus += work
    }
    
    //= \\frac{" + Math.pow(ave,i) + "\\times " + parseFloat((Math.pow(exp,(-ave)))).toFixed(4).replace(/^0+/, '') + "}{" + factorial(i) + "} 
    //= \\frac{" + Math.pow(ave,numm1) + "\\times " + parseFloat((Math.pow(exp,(-ave)))).toFixed(4).replace(/^0+/, '') + "}{" + factorial(numm1) + "} 
    
    var ans = (Math.pow(ave,i)*Math.pow(exp,(-ave)))/factorial(i)
    
    ansplus = ansplus + parseFloat(ans).toFixed(4).replace(/^0+/, '')
    
    finalans = finalans + parseFloat(ans.toFixed(4))
    
    workplus = workplus + " $$ f(" + numm1 + ") = \\frac{" + ave + "^" + numm1 + " e^{-" + ave + "}}{" + i + "!} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$ "

    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + num + ") &= 1 - P(x < " + num + ") \\\\ &= 1 - [" + fplus + "] \\\\ &= 1 - [" + ansplus + "] \\\\ &= 1 - " + parseFloat(finalans).toFixed(4).replace(/^0+/, '') + " \\\\ &= \\boxed{" + parseFloat((1 - finalans)).toFixed(4).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function comppoisson5() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{\\mu^x e^{-\\mu}}{x!} $$"
    var ave = document.getElementById('meanocc').value;
    var num = document.getElementById('poissval').value;
    var numm1 = num - 1;
    var numm2 = numm1 - 1;
    var exp = 2.71828;
    
    var fplus = ""
    for (i = 0; i < num; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+num+")"
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < num; i++) {
        var ans = (Math.pow(ave,i)*Math.pow(exp,(-ave)))/factorial(i)
        ansplus += parseFloat(ans).toFixed(4).replace(/^0+/, '') + "+"
        finalans += parseFloat(ans.toFixed(4))
        var work = " $$ f(" + i + ") = \\frac{" + ave + "^" + i + " e^{-" + ave + "}}{" + i + "!} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$ "
        workplus += work
    }
    
    //= \\frac{" + Math.pow(ave,i) + "\\times " + parseFloat((Math.pow(exp,(-ave)))).toFixed(4).replace(/^0+/, '') + "}{" + factorial(i) + "} 
    //= \\frac{" + Math.pow(ave,num) + "\\times " + parseFloat((Math.pow(exp,(-ave)))).toFixed(4).replace(/^0+/, '') + "}{" + factorial(num) + "} 
    
    var ans = (Math.pow(ave,i)*Math.pow(exp,(-ave)))/factorial(i)
    
    ansplus = ansplus + parseFloat(ans).toFixed(4).replace(/^0+/, '')
    
    finalans = finalans + parseFloat(ans.toFixed(4))
    
    workplus = workplus + " $$ f(" + num + ") = \\frac{" + ave + "^" + num + " e^{-" + ave + "}}{" + i + "!} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$ "

    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + num + ") &= 1 - P(x \\leq " + num + ") \\\\ &= 1 - [" + fplus + "] \\\\ &= 1 - [" + ansplus + "] \\\\ &= 1 - " + parseFloat(finalans).toFixed(4).replace(/^0+/, '') + " \\\\ &= \\boxed{" + parseFloat((1 - finalans)).toFixed(4).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function hypergeometric() {
    $("#hypergeometric").show();
    $("#equal3").show();
}

function toless3() {
        $("#equal3").hide();
        $("#less3").show();
        $("#greater3").hide();
        probtype3 = "less"
}

function togreater3() {
        $("#equal3").hide();
        $("#less3").hide();
        $("#greater3").show();
        probtype3 = "greater"
}

function toequal3() {
        $("#equal3").show();
        $("#less3").hide();
        $("#greater3").hide();
        probtype3 = "equal"
}

function comphypergeometric() {
    var probtype3 = document.getElementById("probtype3").value
    if (probtype3 == "equal") {
        comphypergeometric1()
    } else if (probtype3 == "lessequal") {
        comphypergeometric2()
    } else if (probtype3 == "greaterequal") {
        comphypergeometric3()
    } else if (probtype3 == "less") {
        comphypergeometric4()
    } else if (probtype3 == "greater") {
        comphypergeometric5()
    }
}

function comphypergeometric1() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{{r \\choose x}{N-r \\choose n-x}}{{N \\choose n}} $$"
    var ntrials = document.getElementById('ntrials').value
    var popsize = document.getElementById('popsize').value
    var popsucc = document.getElementById('popsucc').value
    var numsucc = document.getElementById('hypval').value
    
    var topna = popsucc;
    var bottomna = numsucc;
    var bottomnfacta = factorial(bottomna); var topbotfacta = factorial(topna - bottomna);
    var numerator2a = ""; var numerator3a = 1; var denominator3a = ""; 
    var denominatora = bottomna + "!" + (topna - bottomna) + "!"; var denominator2a = ""
    if (bottomna >= topna - bottomna) {
        denominator2a = denominator2a + bottomna + "!"
        for (var r = 0; r < topna - bottomna; r++){
            numerator2a += (topna - r)+"\\cdot"
            denominator2a += "\\cdot" + (topna - bottomna - r)
            numerator3a = numerator3a * (topna - r)
        }
        numerator2a = numerator2a + bottomna + "!"
        var denominator3a = topbotfacta
        var ansvala = numerator3a / denominator3a;
    } else {
        for (var r = 0; r < bottomna; r++){
            numerator2a += (topna - r)+"\\cdot"
            denominator2a += (bottomna - r) + "\\cdot"
            numerator3a = numerator3a * (topna - r)
        }
        numerator2a = numerator2a + (topna - bottomna) + "!"
        denominator2a = denominator2a + (topna - bottomna) + "!"
        var denominator3a = bottomnfacta
        var ansvala = numerator3a / denominator3a;
    }
    
    var topnb = popsize-popsucc;
    var bottomnb = ntrials-numsucc;
    var bottomnfactb = factorial(bottomnb); var topbotfactb = factorial(topnb - bottomnb);
    var numerator2b = ""; var numerator3b = 1; var denominator3b = ""; 
    var denominatorb = bottomnb + "!" + (topnb - bottomnb) + "!"; var denominator2b = ""
    if (bottomnb >= topnb - bottomnb) {
        denominator2b = denominator2b + bottomnb + "!"
        for (var r = 0; r < topnb - bottomnb; r++){
            numerator2b += (topnb - r)+"\\cdot"
            denominator2b += "\\cdot" + (topnb - bottomnb - r)
            numerator3b = numerator3b * (topnb - r)
        }
        numerator2b = numerator2b + bottomnb + "!"
        var denominator3b = topbotfactb
        var ansvalb = numerator3b / denominator3b;
    } else {
        for (var r = 0; r < bottomnb; r++){
            numerator2b += (topnb - r)+"\\cdot"
            denominator2b += (bottomnb - r) + "\\cdot"
            numerator3b = numerator3b * (topnb - r)
        }
        numerator2b = numerator2b + (topnb - bottomnb) + "!"
        denominator2b = denominator2b + (topnb - bottomnb) + "!"
        var denominator3b = bottomnfactb
        var ansvalb = numerator3b / denominator3b;
    }
    
    var topnc = popsize;
    var bottomnc = ntrials;
    var bottomnfactc = factorial(bottomnc); var topbotfactc = factorial(topnc - bottomnc);
    var numerator2c = ""; var numerator3c = 1; var denominator3c = ""; 
    var denominatorc = bottomnc + "!" + (topnc - bottomnc) + "!"; var denominator2c = ""
    if (bottomnc >= topnc - bottomnc) {
        denominator2c = denominator2c + bottomnc + "!"
        for (var r = 0; r < topnc - bottomnc; r++){
            numerator2c += (topnc - r)+"\\cdot"
            denominator2c += "\\cdot" + (topnc - bottomnc - r)
            numerator3c = numerator3c * (topnc - r)
        }
        numerator2c = numerator2c + bottomnc + "!"
        var denominator3c = topbotfactc
        var ansvalc = numerator3c / denominator3c;
    } else {
        for (var r = 0; r < bottomnc; r++){
            numerator2c += (topnc - r)+"\\cdot"
            denominator2c += (bottomnc - r) + "\\cdot"
            numerator3c = numerator3c * (topnc - r)
        }
        numerator2c = numerator2c + (topnc - bottomnc) + "!"
        denominator2c = denominator2c + (topnc - bottomnc) + "!"
        var denominator3c = bottomnfactc
        var ansvalc = numerator3c / denominator3c;
    }
    
    var ans = (ansvala*ansvalb)/ansvalc;
    
    // \\\\ &= \\frac{\\displaystyle{"+popsucc+" \\choose "+numsucc+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+numsucc+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}}
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x="+numsucc+") &=  f("+numsucc+") \\\\ &= \\frac{\\displaystyle{"+popsucc+" \\choose "+numsucc+"}{"+(popsize-popsucc)+" \\choose "+(ntrials-numsucc)+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} \\\\ &=  \\dfrac{ \\left( \\dfrac{"+popsucc+"!}{"+numsucc+"!("+popsucc+"-"+numsucc+")!} \\right) \\left( \\dfrac{"+(popsize-popsucc)+"!}{"+(ntrials-numsucc)+"!("+(popsize-popsucc)+"-"+(ntrials-numsucc)+")!}\\right)}{\\dfrac{"+popsize+"!}{"+ntrials+"!("+popsize+"-"+ntrials+")!}} \\\\ &= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"} \\\\ &= \\boxed{" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function comphypergeometric2() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{{r \\choose x}{N-r \\choose n-x}}{{N \\choose n}} $$"
    var ntrials = document.getElementById('ntrials').value
    var popsize = document.getElementById('popsize').value
    var popsucc = document.getElementById('popsucc').value
    var numsucc = document.getElementById('hypval').value
    
    var fplus = ""
    for (i = 0; i < numsucc; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+numsucc+")"
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < numsucc; i++) {
        var topna = popsucc;
        var bottomna = i;
        var bottomnfacta = factorial(bottomna); var topbotfacta = factorial(topna - bottomna);
        var numerator2a = ""; var numerator3a = 1; var denominator3a = ""; 
        var denominatora = bottomna + "!" + (topna - bottomna) + "!"; var denominator2a = ""
        if (bottomna >= topna - bottomna) {
            denominator2a = denominator2a + bottomna + "!"
            for (var r = 0; r < topna - bottomna; r++){
                numerator2a += (topna - r)+"\\cdot"
                denominator2a += "\\cdot" + (topna - bottomna - r)
                numerator3a = numerator3a * (topna - r)
            }
            numerator2a = numerator2a + bottomna + "!"
            var denominator3a = topbotfacta
            var ansvala = numerator3a / denominator3a;
        } else {
            for (var r = 0; r < bottomna; r++){
                numerator2a += (topna - r)+"\\cdot"
                denominator2a += (bottomna - r) + "\\cdot"
                numerator3a = numerator3a * (topna - r)
            }
            numerator2a = numerator2a + (topna - bottomna) + "!"
            denominator2a = denominator2a + (topna - bottomna) + "!"
            var denominator3a = bottomnfacta
            var ansvala = numerator3a / denominator3a;
        }

        var topnb = popsize-popsucc;
        var bottomnb = ntrials-i;
        var bottomnfactb = factorial(bottomnb); var topbotfactb = factorial(topnb - bottomnb);
        var numerator2b = ""; var numerator3b = 1; var denominator3b = ""; 
        var denominatorb = bottomnb + "!" + (topnb - bottomnb) + "!"; var denominator2b = ""
        if (bottomnb >= topnb - bottomnb) {
            denominator2b = denominator2b + bottomnb + "!"
            for (var r = 0; r < topnb - bottomnb; r++){
                numerator2b += (topnb - r)+"\\cdot"
                denominator2b += "\\cdot" + (topnb - bottomnb - r)
                numerator3b = numerator3b * (topnb - r)
            }
            numerator2b = numerator2b + bottomnb + "!"
            var denominator3b = topbotfactb
            var ansvalb = numerator3b / denominator3b;
        } else {
            for (var r = 0; r < bottomnb; r++){
                numerator2b += (topnb - r)+"\\cdot"
                denominator2b += (bottomnb - r) + "\\cdot"
                numerator3b = numerator3b * (topnb - r)
            }
            numerator2b = numerator2b + (topnb - bottomnb) + "!"
            denominator2b = denominator2b + (topnb - bottomnb) + "!"
            var denominator3b = bottomnfactb
            var ansvalb = numerator3b / denominator3b;
        }

        var topnc = popsize;
        var bottomnc = ntrials;
        var bottomnfactc = factorial(bottomnc); var topbotfactc = factorial(topnc - bottomnc);
        var numerator2c = ""; var numerator3c = 1; var denominator3c = ""; 
        var denominatorc = bottomnc + "!" + (topnc - bottomnc) + "!"; var denominator2c = ""
        if (bottomnc >= topnc - bottomnc) {
            denominator2c = denominator2c + bottomnc + "!"
            for (var r = 0; r < topnc - bottomnc; r++){
                numerator2c += (topnc - r)+"\\cdot"
                denominator2c += "\\cdot" + (topnc - bottomnc - r)
                numerator3c = numerator3c * (topnc - r)
            }
            numerator2c = numerator2c + bottomnc + "!"
            var denominator3c = topbotfactc
            var ansvalc = numerator3c / denominator3c;
        } else {
            for (var r = 0; r < bottomnc; r++){
                numerator2c += (topnc - r)+"\\cdot"
                denominator2c += (bottomnc - r) + "\\cdot"
                numerator3c = numerator3c * (topnc - r)
            }
            numerator2c = numerator2c + (topnc - bottomnc) + "!"
            denominator2c = denominator2c + (topnc - bottomnc) + "!"
            var denominator3c = bottomnfactc
            var ansvalc = numerator3c / denominator3c;
        }

        var ans = (ansvala*ansvalb)/ansvalc;
        ansplus += parseFloat(ans).toFixed(4).replace(/^0+/, '') + "+"
        finalans += ans
        var work = "$$ f("+i+") = \\frac{\\displaystyle{"+popsucc+" \\choose "+i+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+i+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$"
        workplus += work
        
    }
    
    var topna = popsucc;
    var bottomna = numsucc;
    var bottomnfacta = factorial(bottomna); var topbotfacta = factorial(topna - bottomna);
    var numerator2a = ""; var numerator3a = 1; var denominator3a = ""; 
    var denominatora = bottomna + "!" + (topna - bottomna) + "!"; var denominator2a = ""
    if (bottomna >= topna - bottomna) {
        denominator2a = denominator2a + bottomna + "!"
        for (var r = 0; r < topna - bottomna; r++){
            numerator2a += (topna - r)+"\\cdot"
            denominator2a += "\\cdot" + (topna - bottomna - r)
            numerator3a = numerator3a * (topna - r)
        }
        numerator2a = numerator2a + bottomna + "!"
        var denominator3a = topbotfacta
        var ansvala = numerator3a / denominator3a;
    } else {
        for (var r = 0; r < bottomna; r++){
            numerator2a += (topna - r)+"\\cdot"
            denominator2a += (bottomna - r) + "\\cdot"
            numerator3a = numerator3a * (topna - r)
        }
        numerator2a = numerator2a + (topna - bottomna) + "!"
        denominator2a = denominator2a + (topna - bottomna) + "!"
        var denominator3a = bottomnfacta
        var ansvala = numerator3a / denominator3a;
    }
    
    var topnb = popsize-popsucc;
    var bottomnb = ntrials-numsucc;
    var bottomnfactb = factorial(bottomnb); var topbotfactb = factorial(topnb - bottomnb);
    var numerator2b = ""; var numerator3b = 1; var denominator3b = ""; 
    var denominatorb = bottomnb + "!" + (topnb - bottomnb) + "!"; var denominator2b = ""
    if (bottomnb >= topnb - bottomnb) {
        denominator2b = denominator2b + bottomnb + "!"
        for (var r = 0; r < topnb - bottomnb; r++){
            numerator2b += (topnb - r)+"\\cdot"
            denominator2b += "\\cdot" + (topnb - bottomnb - r)
            numerator3b = numerator3b * (topnb - r)
        }
        numerator2b = numerator2b + bottomnb + "!"
        var denominator3b = topbotfactb
        var ansvalb = numerator3b / denominator3b;
    } else {
        for (var r = 0; r < bottomnb; r++){
            numerator2b += (topnb - r)+"\\cdot"
            denominator2b += (bottomnb - r) + "\\cdot"
            numerator3b = numerator3b * (topnb - r)
        }
        numerator2b = numerator2b + (topnb - bottomnb) + "!"
        denominator2b = denominator2b + (topnb - bottomnb) + "!"
        var denominator3b = bottomnfactb
        var ansvalb = numerator3b / denominator3b;
    }
    
    var topnc = popsize;
    var bottomnc = ntrials;
    var bottomnfactc = factorial(bottomnc); var topbotfactc = factorial(topnc - bottomnc);
    var numerator2c = ""; var numerator3c = 1; var denominator3c = ""; 
    var denominatorc = bottomnc + "!" + (topnc - bottomnc) + "!"; var denominator2c = ""
    if (bottomnc >= topnc - bottomnc) {
        denominator2c = denominator2c + bottomnc + "!"
        for (var r = 0; r < topnc - bottomnc; r++){
            numerator2c += (topnc - r)+"\\cdot"
            denominator2c += "\\cdot" + (topnc - bottomnc - r)
            numerator3c = numerator3c * (topnc - r)
        }
        numerator2c = numerator2c + bottomnc + "!"
        var denominator3c = topbotfactc
        var ansvalc = numerator3c / denominator3c;
    } else {
        for (var r = 0; r < bottomnc; r++){
            numerator2c += (topnc - r)+"\\cdot"
            denominator2c += (bottomnc - r) + "\\cdot"
            numerator3c = numerator3c * (topnc - r)
        }
        numerator2c = numerator2c + (topnc - bottomnc) + "!"
        denominator2c = denominator2c + (topnc - bottomnc) + "!"
        var denominator3c = bottomnfactc
        var ansvalc = numerator3c / denominator3c;
    }
    
    //= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"}
    //= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"} 
    
    var ans = (ansvala*ansvalb)/ansvalc;
    
    ansplus = ansplus + parseFloat(ans).toFixed(4).replace(/^0+/, '')
    finalans = finalans + ans
    
    workplus = workplus + "$$ f("+numsucc+") = \\frac{\\displaystyle{"+popsucc+" \\choose "+numsucc+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+numsucc+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$"
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq "+numsucc+") &= "+fplus+" \\\\ &= "+ansplus+" \\\\ &= \\boxed{"+parseFloat(finalans).toFixed(4).replace(/^0+/, '')+"} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function comphypergeometric4() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{{r \\choose x}{N-r \\choose n-x}}{{N \\choose n}} $$"
    var ntrials = document.getElementById('ntrials').value
    var popsize = document.getElementById('popsize').value
    var popsucc = document.getElementById('popsucc').value
    var numsucc = document.getElementById('hypval').value
    var numsuccm1 = numsucc - 1
    
    var fplus = ""
    for (i = 0; i < numsuccm1; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+numsuccm1+")"
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < numsuccm1; i++) {
        var topna = popsucc;
        var bottomna = i;
        var bottomnfacta = factorial(bottomna); var topbotfacta = factorial(topna - bottomna);
        var numerator2a = ""; var numerator3a = 1; var denominator3a = ""; 
        var denominatora = bottomna + "!" + (topna - bottomna) + "!"; var denominator2a = ""
        if (bottomna >= topna - bottomna) {
            denominator2a = denominator2a + bottomna + "!"
            for (var r = 0; r < topna - bottomna; r++){
                numerator2a += (topna - r)+"\\cdot"
                denominator2a += "\\cdot" + (topna - bottomna - r)
                numerator3a = numerator3a * (topna - r)
            }
            numerator2a = numerator2a + bottomna + "!"
            var denominator3a = topbotfacta
            var ansvala = numerator3a / denominator3a;
        } else {
            for (var r = 0; r < bottomna; r++){
                numerator2a += (topna - r)+"\\cdot"
                denominator2a += (bottomna - r) + "\\cdot"
                numerator3a = numerator3a * (topna - r)
            }
            numerator2a = numerator2a + (topna - bottomna) + "!"
            denominator2a = denominator2a + (topna - bottomna) + "!"
            var denominator3a = bottomnfacta
            var ansvala = numerator3a / denominator3a;
        }

        var topnb = popsize-popsucc;
        var bottomnb = ntrials-i;
        var bottomnfactb = factorial(bottomnb); var topbotfactb = factorial(topnb - bottomnb);
        var numerator2b = ""; var numerator3b = 1; var denominator3b = ""; 
        var denominatorb = bottomnb + "!" + (topnb - bottomnb) + "!"; var denominator2b = ""
        if (bottomnb >= topnb - bottomnb) {
            denominator2b = denominator2b + bottomnb + "!"
            for (var r = 0; r < topnb - bottomnb; r++){
                numerator2b += (topnb - r)+"\\cdot"
                denominator2b += "\\cdot" + (topnb - bottomnb - r)
                numerator3b = numerator3b * (topnb - r)
            }
            numerator2b = numerator2b + bottomnb + "!"
            var denominator3b = topbotfactb
            var ansvalb = numerator3b / denominator3b;
        } else {
            for (var r = 0; r < bottomnb; r++){
                numerator2b += (topnb - r)+"\\cdot"
                denominator2b += (bottomnb - r) + "\\cdot"
                numerator3b = numerator3b * (topnb - r)
            }
            numerator2b = numerator2b + (topnb - bottomnb) + "!"
            denominator2b = denominator2b + (topnb - bottomnb) + "!"
            var denominator3b = bottomnfactb
            var ansvalb = numerator3b / denominator3b;
        }

        var topnc = popsize;
        var bottomnc = ntrials;
        var bottomnfactc = factorial(bottomnc); var topbotfactc = factorial(topnc - bottomnc);
        var numerator2c = ""; var numerator3c = 1; var denominator3c = ""; 
        var denominatorc = bottomnc + "!" + (topnc - bottomnc) + "!"; var denominator2c = ""
        if (bottomnc >= topnc - bottomnc) {
            denominator2c = denominator2c + bottomnc + "!"
            for (var r = 0; r < topnc - bottomnc; r++){
                numerator2c += (topnc - r)+"\\cdot"
                denominator2c += "\\cdot" + (topnc - bottomnc - r)
                numerator3c = numerator3c * (topnc - r)
            }
            numerator2c = numerator2c + bottomnc + "!"
            var denominator3c = topbotfactc
            var ansvalc = numerator3c / denominator3c;
        } else {
            for (var r = 0; r < bottomnc; r++){
                numerator2c += (topnc - r)+"\\cdot"
                denominator2c += (bottomnc - r) + "\\cdot"
                numerator3c = numerator3c * (topnc - r)
            }
            numerator2c = numerator2c + (topnc - bottomnc) + "!"
            denominator2c = denominator2c + (topnc - bottomnc) + "!"
            var denominator3c = bottomnfactc
            var ansvalc = numerator3c / denominator3c;
        }

        var ans = (ansvala*ansvalb)/ansvalc;
        ansplus += parseFloat(ans).toFixed(4).replace(/^0+/, '') + "+"
        finalans += ans
        var work = "$$ f("+i+") = \\frac{\\displaystyle{"+popsucc+" \\choose "+i+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+i+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$"
        workplus += work
        
    }
    
    var topna = popsucc;
    var bottomna = numsuccm1;
    var bottomnfacta = factorial(bottomna); var topbotfacta = factorial(topna - bottomna);
    var numerator2a = ""; var numerator3a = 1; var denominator3a = ""; 
    var denominatora = bottomna + "!" + (topna - bottomna) + "!"; var denominator2a = ""
    if (bottomna >= topna - bottomna) {
        denominator2a = denominator2a + bottomna + "!"
        for (var r = 0; r < topna - bottomna; r++){
            numerator2a += (topna - r)+"\\cdot"
            denominator2a += "\\cdot" + (topna - bottomna - r)
            numerator3a = numerator3a * (topna - r)
        }
        numerator2a = numerator2a + bottomna + "!"
        var denominator3a = topbotfacta
        var ansvala = numerator3a / denominator3a;
    } else {
        for (var r = 0; r < bottomna; r++){
            numerator2a += (topna - r)+"\\cdot"
            denominator2a += (bottomna - r) + "\\cdot"
            numerator3a = numerator3a * (topna - r)
        }
        numerator2a = numerator2a + (topna - bottomna) + "!"
        denominator2a = denominator2a + (topna - bottomna) + "!"
        var denominator3a = bottomnfacta
        var ansvala = numerator3a / denominator3a;
    }
    
    var topnb = popsize-popsucc;
    var bottomnb = ntrials-numsuccm1;
    var bottomnfactb = factorial(bottomnb); var topbotfactb = factorial(topnb - bottomnb);
    var numerator2b = ""; var numerator3b = 1; var denominator3b = ""; 
    var denominatorb = bottomnb + "!" + (topnb - bottomnb) + "!"; var denominator2b = ""
    if (bottomnb >= topnb - bottomnb) {
        denominator2b = denominator2b + bottomnb + "!"
        for (var r = 0; r < topnb - bottomnb; r++){
            numerator2b += (topnb - r)+"\\cdot"
            denominator2b += "\\cdot" + (topnb - bottomnb - r)
            numerator3b = numerator3b * (topnb - r)
        }
        numerator2b = numerator2b + bottomnb + "!"
        var denominator3b = topbotfactb
        var ansvalb = numerator3b / denominator3b;
    } else {
        for (var r = 0; r < bottomnb; r++){
            numerator2b += (topnb - r)+"\\cdot"
            denominator2b += (bottomnb - r) + "\\cdot"
            numerator3b = numerator3b * (topnb - r)
        }
        numerator2b = numerator2b + (topnb - bottomnb) + "!"
        denominator2b = denominator2b + (topnb - bottomnb) + "!"
        var denominator3b = bottomnfactb
        var ansvalb = numerator3b / denominator3b;
    }
    
    var topnc = popsize;
    var bottomnc = ntrials;
    var bottomnfactc = factorial(bottomnc); var topbotfactc = factorial(topnc - bottomnc);
    var numerator2c = ""; var numerator3c = 1; var denominator3c = ""; 
    var denominatorc = bottomnc + "!" + (topnc - bottomnc) + "!"; var denominator2c = ""
    if (bottomnc >= topnc - bottomnc) {
        denominator2c = denominator2c + bottomnc + "!"
        for (var r = 0; r < topnc - bottomnc; r++){
            numerator2c += (topnc - r)+"\\cdot"
            denominator2c += "\\cdot" + (topnc - bottomnc - r)
            numerator3c = numerator3c * (topnc - r)
        }
        numerator2c = numerator2c + bottomnc + "!"
        var denominator3c = topbotfactc
        var ansvalc = numerator3c / denominator3c;
    } else {
        for (var r = 0; r < bottomnc; r++){
            numerator2c += (topnc - r)+"\\cdot"
            denominator2c += (bottomnc - r) + "\\cdot"
            numerator3c = numerator3c * (topnc - r)
        }
        numerator2c = numerator2c + (topnc - bottomnc) + "!"
        denominator2c = denominator2c + (topnc - bottomnc) + "!"
        var denominator3c = bottomnfactc
        var ansvalc = numerator3c / denominator3c;
    }
    
    //= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"}
    
    //= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"} 
    
    var ans = (ansvala*ansvalb)/ansvalc;
    
    ansplus = ansplus + parseFloat(ans).toFixed(4).replace(/^0+/, '')
    finalans = finalans + ans
    
    workplus = workplus + "$$ f("+numsuccm1+") = \\frac{\\displaystyle{"+popsucc+" \\choose "+numsuccm1+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+numsuccm1+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$"
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < "+numsucc+") &= "+fplus+" \\\\ &= "+ansplus+" \\\\ &= \\boxed{"+parseFloat(finalans).toFixed(4).replace(/^0+/, '')+"} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function comphypergeometric3() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{{r \\choose x}{N-r \\choose n-x}}{{N \\choose n}} $$"
    var ntrials = document.getElementById('ntrials').value
    var popsize = document.getElementById('popsize').value
    var popsucc = document.getElementById('popsucc').value
    var numsucc = document.getElementById('hypval').value
    
    var fplus = ""
    for (i = numsucc; i < popsucc; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+popsucc+")"
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = numsucc; i < popsucc; i++) {
        var topna = popsucc;
        var bottomna = i;
        var bottomnfacta = factorial(bottomna); var topbotfacta = factorial(topna - bottomna);
        var numerator2a = ""; var numerator3a = 1; var denominator3a = ""; 
        var denominatora = bottomna + "!" + (topna - bottomna) + "!"; var denominator2a = ""
        if (bottomna >= topna - bottomna) {
            denominator2a = denominator2a + bottomna + "!"
            for (var r = 0; r < topna - bottomna; r++){
                numerator2a += (topna - r)+"\\cdot"
                denominator2a += "\\cdot" + (topna - bottomna - r)
                numerator3a = numerator3a * (topna - r)
            }
            numerator2a = numerator2a + bottomna + "!"
            var denominator3a = topbotfacta
            var ansvala = numerator3a / denominator3a;
        } else {
            for (var r = 0; r < bottomna; r++){
                numerator2a += (topna - r)+"\\cdot"
                denominator2a += (bottomna - r) + "\\cdot"
                numerator3a = numerator3a * (topna - r)
            }
            numerator2a = numerator2a + (topna - bottomna) + "!"
            denominator2a = denominator2a + (topna - bottomna) + "!"
            var denominator3a = bottomnfacta
            var ansvala = numerator3a / denominator3a;
        }

        var topnb = popsize-popsucc;
        var bottomnb = ntrials-i;
        var bottomnfactb = factorial(bottomnb); var topbotfactb = factorial(topnb - bottomnb);
        var numerator2b = ""; var numerator3b = 1; var denominator3b = ""; 
        var denominatorb = bottomnb + "!" + (topnb - bottomnb) + "!"; var denominator2b = ""
        if (bottomnb >= topnb - bottomnb) {
            denominator2b = denominator2b + bottomnb + "!"
            for (var r = 0; r < topnb - bottomnb; r++){
                numerator2b += (topnb - r)+"\\cdot"
                denominator2b += "\\cdot" + (topnb - bottomnb - r)
                numerator3b = numerator3b * (topnb - r)
            }
            numerator2b = numerator2b + bottomnb + "!"
            var denominator3b = topbotfactb
            var ansvalb = numerator3b / denominator3b;
        } else {
            for (var r = 0; r < bottomnb; r++){
                numerator2b += (topnb - r)+"\\cdot"
                denominator2b += (bottomnb - r) + "\\cdot"
                numerator3b = numerator3b * (topnb - r)
            }
            numerator2b = numerator2b + (topnb - bottomnb) + "!"
            denominator2b = denominator2b + (topnb - bottomnb) + "!"
            var denominator3b = bottomnfactb
            var ansvalb = numerator3b / denominator3b;
        }

        var topnc = popsize;
        var bottomnc = ntrials;
        var bottomnfactc = factorial(bottomnc); var topbotfactc = factorial(topnc - bottomnc);
        var numerator2c = ""; var numerator3c = 1; var denominator3c = ""; 
        var denominatorc = bottomnc + "!" + (topnc - bottomnc) + "!"; var denominator2c = ""
        if (bottomnc >= topnc - bottomnc) {
            denominator2c = denominator2c + bottomnc + "!"
            for (var r = 0; r < topnc - bottomnc; r++){
                numerator2c += (topnc - r)+"\\cdot"
                denominator2c += "\\cdot" + (topnc - bottomnc - r)
                numerator3c = numerator3c * (topnc - r)
            }
            numerator2c = numerator2c + bottomnc + "!"
            var denominator3c = topbotfactc
            var ansvalc = numerator3c / denominator3c;
        } else {
            for (var r = 0; r < bottomnc; r++){
                numerator2c += (topnc - r)+"\\cdot"
                denominator2c += (bottomnc - r) + "\\cdot"
                numerator3c = numerator3c * (topnc - r)
            }
            numerator2c = numerator2c + (topnc - bottomnc) + "!"
            denominator2c = denominator2c + (topnc - bottomnc) + "!"
            var denominator3c = bottomnfactc
            var ansvalc = numerator3c / denominator3c;
        }

        var ans = (ansvala*ansvalb)/ansvalc;
        ansplus += parseFloat(ans).toFixed(4).replace(/^0+/, '') + "+"
        finalans += ans
        var work = "$$ f("+i+") = \\frac{\\displaystyle{"+popsucc+" \\choose "+i+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+i+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$"
        workplus += work
    }
    
    //= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"} 
    
    var topna = popsucc;
    var bottomna = popsucc;
    var bottomnfacta = factorial(bottomna); var topbotfacta = factorial(topna - bottomna);
    var numerator2a = ""; var numerator3a = 1; var denominator3a = ""; 
    var denominatora = bottomna + "!" + (topna - bottomna) + "!"; var denominator2a = ""
    if (bottomna >= topna - bottomna) {
        denominator2a = denominator2a + bottomna + "!"
        for (var r = 0; r < topna - bottomna; r++){
            numerator2a += (topna - r)+"\\cdot"
            denominator2a += "\\cdot" + (topna - bottomna - r)
            numerator3a = numerator3a * (topna - r)
        }
        numerator2a = numerator2a + bottomna + "!"
        var denominator3a = topbotfacta
        var ansvala = numerator3a / denominator3a;
    } else {
        for (var r = 0; r < bottomna; r++){
            numerator2a += (topna - r)+"\\cdot"
            denominator2a += (bottomna - r) + "\\cdot"
            numerator3a = numerator3a * (topna - r)
        }
        numerator2a = numerator2a + (topna - bottomna) + "!"
        denominator2a = denominator2a + (topna - bottomna) + "!"
        var denominator3a = bottomnfacta
        var ansvala = numerator3a / denominator3a;
    }
    
    var topnb = popsize-popsucc;
    var bottomnb = ntrials-popsucc;
    var bottomnfactb = factorial(bottomnb); var topbotfactb = factorial(topnb - bottomnb);
    var numerator2b = ""; var numerator3b = 1; var denominator3b = ""; 
    var denominatorb = bottomnb + "!" + (topnb - bottomnb) + "!"; var denominator2b = ""
    if (bottomnb >= topnb - bottomnb) {
        denominator2b = denominator2b + bottomnb + "!"
        for (var r = 0; r < topnb - bottomnb; r++){
            numerator2b += (topnb - r)+"\\cdot"
            denominator2b += "\\cdot" + (topnb - bottomnb - r)
            numerator3b = numerator3b * (topnb - r)
        }
        numerator2b = numerator2b + bottomnb + "!"
        var denominator3b = topbotfactb
        var ansvalb = numerator3b / denominator3b;
    } else {
        for (var r = 0; r < bottomnb; r++){
            numerator2b += (topnb - r)+"\\cdot"
            denominator2b += (bottomnb - r) + "\\cdot"
            numerator3b = numerator3b * (topnb - r)
        }
        numerator2b = numerator2b + (topnb - bottomnb) + "!"
        denominator2b = denominator2b + (topnb - bottomnb) + "!"
        var denominator3b = bottomnfactb
        var ansvalb = numerator3b / denominator3b;
    }
    
    var topnc = popsize;
    var bottomnc = ntrials;
    var bottomnfactc = factorial(bottomnc); var topbotfactc = factorial(topnc - bottomnc);
    var numerator2c = ""; var numerator3c = 1; var denominator3c = ""; 
    var denominatorc = bottomnc + "!" + (topnc - bottomnc) + "!"; var denominator2c = ""
    if (bottomnc >= topnc - bottomnc) {
        denominator2c = denominator2c + bottomnc + "!"
        for (var r = 0; r < topnc - bottomnc; r++){
            numerator2c += (topnc - r)+"\\cdot"
            denominator2c += "\\cdot" + (topnc - bottomnc - r)
            numerator3c = numerator3c * (topnc - r)
        }
        numerator2c = numerator2c + bottomnc + "!"
        var denominator3c = topbotfactc
        var ansvalc = numerator3c / denominator3c;
    } else {
        for (var r = 0; r < bottomnc; r++){
            numerator2c += (topnc - r)+"\\cdot"
            denominator2c += (bottomnc - r) + "\\cdot"
            numerator3c = numerator3c * (topnc - r)
        }
        numerator2c = numerator2c + (topnc - bottomnc) + "!"
        denominator2c = denominator2c + (topnc - bottomnc) + "!"
        var denominator3c = bottomnfactc
        var ansvalc = numerator3c / denominator3c;
    }
    
    //= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"} 
    
    var ans = (ansvala*ansvalb)/ansvalc;
    
    ansplus = ansplus + parseFloat(ans).toFixed(4).replace(/^0+/, '')
    finalans = finalans + ans
    
    workplus = workplus + "$$ f("+popsucc+") = \\frac{\\displaystyle{"+popsucc+" \\choose "+popsucc+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+popsucc+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$"

    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq "+numsucc+") &= "+fplus+" \\\\ &= "+ansplus+" \\\\ &= \\boxed{"+parseFloat(finalans).toFixed(4).replace(/^0+/, '')+"} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function comphypergeometric5() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{{r \\choose x}{N-r \\choose n-x}}{{N \\choose n}} $$"
    var ntrials = document.getElementById('ntrials').value
    var popsize = document.getElementById('popsize').value
    var popsucc = document.getElementById('popsucc').value
    var numsucc = document.getElementById('hypval').value
    var numsuccp1 = parseFloat(numsucc) + 1
    
    var fplus = ""
    for (i = numsuccp1; i < popsucc; i++) {
        fplus += "f("+i+")+"
    }
    fplus = fplus + "f("+popsucc+")"
    var workplus = ""
    var ansplus = ""
    var finalans = 0
    for (i = numsuccp1; i < popsucc; i++) {
        var topna = popsucc;
        var bottomna = i;
        var bottomnfacta = factorial(bottomna); var topbotfacta = factorial(topna - bottomna);
        var numerator2a = ""; var numerator3a = 1; var denominator3a = ""; 
        var denominatora = bottomna + "!" + (topna - bottomna) + "!"; var denominator2a = ""
        if (bottomna >= topna - bottomna) {
            denominator2a = denominator2a + bottomna + "!"
            for (var r = 0; r < topna - bottomna; r++){
                numerator2a += (topna - r)+"\\cdot"
                denominator2a += "\\cdot" + (topna - bottomna - r)
                numerator3a = numerator3a * (topna - r)
            }
            numerator2a = numerator2a + bottomna + "!"
            var denominator3a = topbotfacta
            var ansvala = numerator3a / denominator3a;
        } else {
            for (var r = 0; r < bottomna; r++){
                numerator2a += (topna - r)+"\\cdot"
                denominator2a += (bottomna - r) + "\\cdot"
                numerator3a = numerator3a * (topna - r)
            }
            numerator2a = numerator2a + (topna - bottomna) + "!"
            denominator2a = denominator2a + (topna - bottomna) + "!"
            var denominator3a = bottomnfacta
            var ansvala = numerator3a / denominator3a;
        }

        var topnb = popsize-popsucc;
        var bottomnb = ntrials-i;
        var bottomnfactb = factorial(bottomnb); var topbotfactb = factorial(topnb - bottomnb);
        var numerator2b = ""; var numerator3b = 1; var denominator3b = ""; 
        var denominatorb = bottomnb + "!" + (topnb - bottomnb) + "!"; var denominator2b = ""
        if (bottomnb >= topnb - bottomnb) {
            denominator2b = denominator2b + bottomnb + "!"
            for (var r = 0; r < topnb - bottomnb; r++){
                numerator2b += (topnb - r)+"\\cdot"
                denominator2b += "\\cdot" + (topnb - bottomnb - r)
                numerator3b = numerator3b * (topnb - r)
            }
            numerator2b = numerator2b + bottomnb + "!"
            var denominator3b = topbotfactb
            var ansvalb = numerator3b / denominator3b;
        } else {
            for (var r = 0; r < bottomnb; r++){
                numerator2b += (topnb - r)+"\\cdot"
                denominator2b += (bottomnb - r) + "\\cdot"
                numerator3b = numerator3b * (topnb - r)
            }
            numerator2b = numerator2b + (topnb - bottomnb) + "!"
            denominator2b = denominator2b + (topnb - bottomnb) + "!"
            var denominator3b = bottomnfactb
            var ansvalb = numerator3b / denominator3b;
        }

        var topnc = popsize;
        var bottomnc = ntrials;
        var bottomnfactc = factorial(bottomnc); var topbotfactc = factorial(topnc - bottomnc);
        var numerator2c = ""; var numerator3c = 1; var denominator3c = ""; 
        var denominatorc = bottomnc + "!" + (topnc - bottomnc) + "!"; var denominator2c = ""
        if (bottomnc >= topnc - bottomnc) {
            denominator2c = denominator2c + bottomnc + "!"
            for (var r = 0; r < topnc - bottomnc; r++){
                numerator2c += (topnc - r)+"\\cdot"
                denominator2c += "\\cdot" + (topnc - bottomnc - r)
                numerator3c = numerator3c * (topnc - r)
            }
            numerator2c = numerator2c + bottomnc + "!"
            var denominator3c = topbotfactc
            var ansvalc = numerator3c / denominator3c;
        } else {
            for (var r = 0; r < bottomnc; r++){
                numerator2c += (topnc - r)+"\\cdot"
                denominator2c += (bottomnc - r) + "\\cdot"
                numerator3c = numerator3c * (topnc - r)
            }
            numerator2c = numerator2c + (topnc - bottomnc) + "!"
            denominator2c = denominator2c + (topnc - bottomnc) + "!"
            var denominator3c = bottomnfactc
            var ansvalc = numerator3c / denominator3c;
        }

        var ans = (ansvala*ansvalb)/ansvalc;
        ansplus += parseFloat(ans).toFixed(4).replace(/^0+/, '') + "+"
        finalans += ans
        var work = "$$ f("+i+") = \\frac{\\displaystyle{"+popsucc+" \\choose "+i+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+i+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$"
        workplus += work
        
    }
    
    //= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"} 
    
    var topna = popsucc;
    var bottomna = popsucc;
    var bottomnfacta = factorial(bottomna); var topbotfacta = factorial(topna - bottomna);
    var numerator2a = ""; var numerator3a = 1; var denominator3a = ""; 
    var denominatora = bottomna + "!" + (topna - bottomna) + "!"; var denominator2a = ""
    if (bottomna >= topna - bottomna) {
        denominator2a = denominator2a + bottomna + "!"
        for (var r = 0; r < topna - bottomna; r++){
            numerator2a += (topna - r)+"\\cdot"
            denominator2a += "\\cdot" + (topna - bottomna - r)
            numerator3a = numerator3a * (topna - r)
        }
        numerator2a = numerator2a + bottomna + "!"
        var denominator3a = topbotfacta
        var ansvala = numerator3a / denominator3a;
    } else {
        for (var r = 0; r < bottomna; r++){
            numerator2a += (topna - r)+"\\cdot"
            denominator2a += (bottomna - r) + "\\cdot"
            numerator3a = numerator3a * (topna - r)
        }
        numerator2a = numerator2a + (topna - bottomna) + "!"
        denominator2a = denominator2a + (topna - bottomna) + "!"
        var denominator3a = bottomnfacta
        var ansvala = numerator3a / denominator3a;
    }
    
    var topnb = popsize-popsucc;
    var bottomnb = ntrials-popsucc;
    var bottomnfactb = factorial(bottomnb); var topbotfactb = factorial(topnb - bottomnb);
    var numerator2b = ""; var numerator3b = 1; var denominator3b = ""; 
    var denominatorb = bottomnb + "!" + (topnb - bottomnb) + "!"; var denominator2b = ""
    if (bottomnb >= topnb - bottomnb) {
        denominator2b = denominator2b + bottomnb + "!"
        for (var r = 0; r < topnb - bottomnb; r++){
            numerator2b += (topnb - r)+"\\cdot"
            denominator2b += "\\cdot" + (topnb - bottomnb - r)
            numerator3b = numerator3b * (topnb - r)
        }
        numerator2b = numerator2b + bottomnb + "!"
        var denominator3b = topbotfactb
        var ansvalb = numerator3b / denominator3b;
    } else {
        for (var r = 0; r < bottomnb; r++){
            numerator2b += (topnb - r)+"\\cdot"
            denominator2b += (bottomnb - r) + "\\cdot"
            numerator3b = numerator3b * (topnb - r)
        }
        numerator2b = numerator2b + (topnb - bottomnb) + "!"
        denominator2b = denominator2b + (topnb - bottomnb) + "!"
        var denominator3b = bottomnfactb
        var ansvalb = numerator3b / denominator3b;
    }
    
    var topnc = popsize;
    var bottomnc = ntrials;
    var bottomnfactc = factorial(bottomnc); var topbotfactc = factorial(topnc - bottomnc);
    var numerator2c = ""; var numerator3c = 1; var denominator3c = ""; 
    var denominatorc = bottomnc + "!" + (topnc - bottomnc) + "!"; var denominator2c = ""
    if (bottomnc >= topnc - bottomnc) {
        denominator2c = denominator2c + bottomnc + "!"
        for (var r = 0; r < topnc - bottomnc; r++){
            numerator2c += (topnc - r)+"\\cdot"
            denominator2c += "\\cdot" + (topnc - bottomnc - r)
            numerator3c = numerator3c * (topnc - r)
        }
        numerator2c = numerator2c + bottomnc + "!"
        var denominator3c = topbotfactc
        var ansvalc = numerator3c / denominator3c;
    } else {
        for (var r = 0; r < bottomnc; r++){
            numerator2c += (topnc - r)+"\\cdot"
            denominator2c += (bottomnc - r) + "\\cdot"
            numerator3c = numerator3c * (topnc - r)
        }
        numerator2c = numerator2c + (topnc - bottomnc) + "!"
        denominator2c = denominator2c + (topnc - bottomnc) + "!"
        var denominator3c = bottomnfactc
        var ansvalc = numerator3c / denominator3c;
    }
    
    //= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"} 
    
    var ans = (ansvala*ansvalb)/ansvalc;
    
    ansplus = ansplus + parseFloat(ans).toFixed(4).replace(/^0+/, '')
    finalans = finalans + ans
    
    workplus = workplus + "$$ f("+popsucc+") = \\frac{\\displaystyle{"+popsucc+" \\choose "+popsucc+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+popsucc+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} = {\\color{RoyalBlue}" + parseFloat(ans).toFixed(4).replace(/^0+/, '') + "} $$"
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > "+numsucc+") &= "+fplus+" \\\\ &= "+ansplus+" \\\\ &= \\boxed{"+parseFloat(finalans).toFixed(4).replace(/^0+/, '')+"} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function exampleexpected(){
    $("#row3").show(); $("#row4").hide(); $("#row5").hide(); $("#row6").hide(); 
    $("#row7").hide(); $("#row8").hide(); $("#row9").hide(); $("#row10").hide();
    $("#make2").hide(); $("#make3").show(); $("#make4").hide(); $("#make5").hide();
    $("#make6").hide(); $("#make7").hide(); $("#make8").hide(); $("#make9").hide(); $("#make10").hide(); 
    document.getElementById('x1').value="2"
    document.getElementById('x2').value="6"
    document.getElementById('x3').value="8"
    document.getElementById('x4').value=""
    document.getElementById('x5').value=""
    document.getElementById('x6').value=""
    document.getElementById('x7').value=""
    document.getElementById('x8').value=""
    document.getElementById('x9').value=""
    document.getElementById('x10').value=""
    document.getElementById('f1').value=".30"
    document.getElementById('f2').value=".60"
    document.getElementById('f3').value=".10"
    document.getElementById('f4').value=""
    document.getElementById('f5').value=""
    document.getElementById('f6').value=""
    document.getElementById('f7').value=""
    document.getElementById('f8').value=""
    document.getElementById('f9').value=""
    document.getElementById('f10').value=""
    document.getElementById('probval').value="6"
    rows=3
}

function exampleexpected2(){
    $("#row3").show(); $("#row4").show(); $("#row5").hide(); $("#row6").hide(); 
    $("#row7").hide(); $("#row8").hide(); $("#row9").hide(); $("#row10").hide();
    $("#make2").hide(); $("#make3").hide(); $("#make4").show(); $("#make5").hide();
    $("#make6").hide(); $("#make7").hide(); $("#make8").hide(); $("#make9").hide(); $("#make10").hide();
    document.getElementById('x1').value="3"
    document.getElementById('x2').value="5"
    document.getElementById('x3').value="6"
    document.getElementById('x4').value="9"
    document.getElementById('x5').value=""
    document.getElementById('x6').value=""
    document.getElementById('x7').value=""
    document.getElementById('x8').value=""
    document.getElementById('x9').value=""
    document.getElementById('x10').value=""
    document.getElementById('f1').value=".25"
    document.getElementById('f2').value=".25"
    document.getElementById('f3').value=".35"
    document.getElementById('f4').value=".15"
    document.getElementById('f5').value=""
    document.getElementById('f6').value=""
    document.getElementById('f7').value=""
    document.getElementById('f8').value=""
    document.getElementById('f9').value=""
    document.getElementById('f10').value=""
    document.getElementById('probval').value="5"
    rows=4
}

function examplefrequency(){
    $("#row3f").show(); $("#row4f").hide(); $("#row5f").hide(); $("#row6f").hide(); 
    $("#row7f").hide(); $("#row8f").hide(); $("#row9f").hide(); $("#row10f").hide();
    $("#make2f").hide(); $("#make3f").show(); $("#make4f").hide(); $("#make5f").hide();
    $("#make6f").hide(); $("#make7f").hide(); $("#make8f").hide(); $("#make9f").hide(); $("#make10f").hide(); 
    document.getElementById('x1f').value="1"
    document.getElementById('x2f').value="2"
    document.getElementById('x3f').value="3"
    document.getElementById('x4f').value=""
    document.getElementById('x5f').value=""
    document.getElementById('x6f').value=""
    document.getElementById('x7f').value=""
    document.getElementById('x8f').value=""
    document.getElementById('x9f').value=""
    document.getElementById('x10f').value=""
    document.getElementById('f1f').value="40"
    document.getElementById('f2f').value="60"
    document.getElementById('f3f').value="20"
    document.getElementById('f4f').value=""
    document.getElementById('f5f').value=""
    document.getElementById('f6f').value=""
    document.getElementById('f7f').value=""
    document.getElementById('f8f').value=""
    document.getElementById('f9f').value=""
    document.getElementById('f10f').value=""
    document.getElementById('probvalf').value="2"
    rowsf=3
}

function examplefrequency2(){
    $("#row3f").show(); $("#row4f").show(); $("#row5f").hide(); $("#row6f").hide(); 
    $("#row7f").hide(); $("#row8f").hide(); $("#row9f").hide(); $("#row10f").hide();
    $("#make2f").hide(); $("#make3f").hide(); $("#make4f").show(); $("#make5f").hide();
    $("#make6f").hide(); $("#make7f").hide(); $("#make8f").hide(); $("#make9f").hide(); $("#make10f").hide();
    document.getElementById('x1f').value="1"
    document.getElementById('x2f').value="2"
    document.getElementById('x3f').value="3"
    document.getElementById('x4f').value="4"
    document.getElementById('x5f').value=""
    document.getElementById('x6f').value=""
    document.getElementById('x7f').value=""
    document.getElementById('x8f').value=""
    document.getElementById('x9f').value=""
    document.getElementById('x10f').value=""
    document.getElementById('f1f').value="20"
    document.getElementById('f2f').value="45"
    document.getElementById('f3f').value="80"
    document.getElementById('f4f').value="55"
    document.getElementById('f5f').value=""
    document.getElementById('f6f').value=""
    document.getElementById('f7f').value=""
    document.getElementById('f8f').value=""
    document.getElementById('f9f').value=""
    document.getElementById('f10f').value=""
    document.getElementById('probvalf').value="3"
    rowsf=4
}

function examplevariance(){
    document.getElementById('x1v').value="3"
    document.getElementById('x2v').value="6"
    document.getElementById('x3v').value="9"
    document.getElementById('f1v').value=".25"
    document.getElementById('f2v').value=".50"
    document.getElementById('f3v').value=".25"
}

function examplestandard(){
    document.getElementById('vr').value="4.2"
}

function examplestandard2(){
    document.getElementById('vr').value="3.55"
}

function examplebinomial(){
    document.getElementById('trials').value = 3
    document.getElementById('psuccess').value = .2
    document.getElementById('binval').value = 1
}

function examplebinomial2(){
    document.getElementById('trials').value = 8
    document.getElementById('psuccess').value = .15
    document.getElementById('binval').value = 2
}

function examplepoisson(){
    document.getElementById('meanocc').value = 5
    document.getElementById('poissval').value = 2
}

function examplepoisson2(){
    document.getElementById('meanocc').value = 3
    document.getElementById('poissval').value = 2
}

function examplehypergeometric(){
    document.getElementById('ntrials').value = 5
    document.getElementById('popsize').value = 12
    document.getElementById('popsucc').value = 4
    document.getElementById('hypval').value = 2
}

function examplehypergeometric2(){
    document.getElementById('ntrials').value = 6
    document.getElementById('popsize').value = 10
    document.getElementById('popsucc').value = 3
    document.getElementById('hypval').value = 1
}

function exampleformula() {
    document.getElementById('formulaval').value = "10"
    document.getElementById('probvalfrml').value = 3
}

function exampleformula2() {
    document.getElementById('formulaval').value = "6"
    document.getElementById('probvalfrml').value = 2
}

function exampleuniform() {
    document.getElementById('uniformval').value = "2"
    document.getElementById('unival').value = 1
}

function exampleuniform2() {
    document.getElementById('uniformval').value = "6"
    document.getElementById('unival').value = 3
}


function make2(){
    $("#row3").hide();
    $("#make2").show();
    $("#make3").hide();
    rows=2
}

function make3(){
    $("#row3").show();
    $("#row4").hide();
    $("#make2").hide();
    $("#make3").show();
    $("#make4").hide();
    rows=3
}

function make4(){
    $("#row4").show();
    $("#row5").hide();
    $("#make3").hide();
    $("#make4").show();
    $("#make5").hide();
    rows=4
}

function make5(){
    $("#row5").show();
    $("#row6").hide();
    $("#make4").hide();
    $("#make5").show();
    $("#make6").hide();
    rows=5
}

function make6(){
    $("#row6").show();
    $("#row7").hide();
    $("#make5").hide();
    $("#make6").show();
    $("#make7").hide();
    rows=6
}

function make7(){
    $("#row7").show();
    $("#row8").hide();
    $("#make6").hide();
    $("#make7").show();
    $("#make8").hide();
    rows=7
}

function make8(){
    $("#row8").show();
    $("#row9").hide();
    $("#make7").hide();
    $("#make8").show();
    $("#make9").hide();
    rows=8
}

function make9(){
    $("#row9").show();
    $("#row10").hide();
    $("#make8").hide();
    $("#make9").show();
    $("#make10").hide();
    rows=9
}

function make10(){
    $("#row10").show();
    $("#make9").hide();
    $("#make10").show();
    rows=10
}



function make2f(){
    $("#row3f").hide();
    $("#make2f").show();
    $("#make3f").hide();
    rowsf=2
}

function make3f(){
    $("#row3f").show();
    $("#row4f").hide();
    $("#make2f").hide();
    $("#make3f").show();
    $("#make4f").hide();
    rowsf=3
}

function make4f(){
    $("#row4f").show();
    $("#row5f").hide();
    $("#make3f").hide();
    $("#make4f").show();
    $("#make5f").hide();
    rowsf=4
}

function make5f(){
    $("#row5f").show();
    $("#row6f").hide();
    $("#make4f").hide();
    $("#make5f").show();
    $("#make6f").hide();
    rowsf=5
}

function make6f(){
    $("#row6f").show();
    $("#row7f").hide();
    $("#make5f").hide();
    $("#make6f").show();
    $("#make7f").hide();
    rowsf=6
}

function make7f(){
    $("#row7f").show();
    $("#row8f").hide();
    $("#make6f").hide();
    $("#make7f").show();
    $("#make8f").hide();
    rowsf=7
}

function make8f(){
    $("#row8f").show();
    $("#row9f").hide();
    $("#make7f").hide();
    $("#make8f").show();
    $("#make9f").hide();
    rowsf=8
}

function make9f(){
    $("#row9f").show();
    $("#row10f").hide();
    $("#make8f").hide();
    $("#make9f").show();
    $("#make10f").hide();
    rowsf=9
}

function make10v(){
    $("#row10v").show();
    $("#make9v").hide();
    $("#make10v").show();
    rowsf=10
}