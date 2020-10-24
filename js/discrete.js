$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#variance").hide(); $("#standard").hide();
$("#expected2").hide(); $("#expected4").hide(); $("#expected5").hide(); $("#expected6").hide();
$("#expected7").hide(); $("#expected8").hide(); $("#expected9").hide(); $("#expected10").hide();
$("#variance2").hide(); $("#variance4").hide(); $("#variance5").hide(); $("#variance6").hide();
$("#variance7").hide(); $("#variance8").hide(); $("#variance9").hide(); $("#variance10").hide();
$("#binomial").hide(); $("#poisson").hide(); $("#hypergeometric").hide();
$("#equal").hide(); $("#less").hide(); $("#greater").hide();
$("#equal2").hide(); $("#less2").hide(); $("#greater2").hide();
$("#equal3").hide(); $("#less3").hide(); $("#greater3").hide();

$("#expected").show(); $("#expectedprobs").show(); $("#expectedtable").hide(); 
$("#make2").hide(); $("#make3").show(); $("#make4").hide(); $("#make5").hide();
$("#make6").hide(); $("#make7").hide(); $("#make8").hide(); $("#make9").hide(); $("#make10").hide();
$("#row4").hide(); $("#row5").hide(); $("#row6").hide(); $("#row7").hide();
$("#row8").hide(); $("#row9").hide(); $("#row10").hide();

$("#expectedexamples").show(); $("#standardexamples").hide(); 
$("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();

$("#discreteprobs").show(); $("#discreteexpected").hide(); $("#discretevariance").hide(); $("#discretestandard").hide();
$("#probswitch").hide();

binomialtype = "probability"
discretekind = "probability"

$(function () {
            $('[data-toggle="tooltip"]').tooltip()
    })

function factorial(n) {
    if (n > 0) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    } else if (n == 0) {
        return 1
    }
  
}

function showstuff(){
    $("#expected").hide(); $("#variance").hide(); $("#standard").hide(); 
    $("#expected2").hide(); $("#expected4").hide(); $("#expected5").hide(); $("#expected6").hide();
    $("#expected7").hide(); $("#expected8").hide(); $("#expected9").hide(); $("#expected10").hide();
    $("#variance2").hide(); $("#variance4").hide(); $("#variance5").hide(); $("#variance6").hide();
    $("#variance7").hide(); $("#variance8").hide(); $("#variance9").hide(); $("#variance10").hide();
    $("#binomial").hide(); $("#poisson").hide(); $("#hypergeometric").hide();
    $("#equal").hide(); $("#less").hide(); $("#greater").hide();
    $("#equal2").hide(); $("#less2").hide(); $("#greater2").hide();
    $("#equal3").hide(); $("#less3").hide(); $("#greater3").hide();
    $("#explanation").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#output").empty();
    
    
    $("#expectedexamples").hide(); $("#standardexamples").hide(); 
    $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
    
    
    var x = document.getElementById("stat").value;
    if (x == "probabilities"){
        probabilities()
        $("#expectedtable").show();
        $("#expectedexamples").show(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
    } else if (x == "expected"){
        expected()
        $("#expectedtable").show();
        $("#expectedexamples").show(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
    } else if (x == "variance"){
        variance()
        $("#expectedtable").show();
        $("#expectedexamples").show(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
    } else if (x == "standard") {
        standard()
        $("#expectedexamples").hide(); $("#standardexamples").show(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
    } else if (x == "discrete") {
        discrete()
        $("#expectedtable").show();
        $("#expectedexamples").show(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
    } else if (x == "uniform") {
        uniform()
        $("#expectedexamples").hide(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
    } else if (x == "binomial") {
        binomial()
        $("#expectedexamples").hide(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").show(); $("#hypergeometricexamples").hide();
    } else if (x == "poisson") {
        poisson()
        $("#expectedexamples").hide(); $("#standardexamples").hide(); 
        $("#poissonexamples").show(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
    } else if (x == "hypergeometric") {
        hypergeometric()
        $("#expectedexamples").hide(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").show();
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
    }
   
}

function stat(){
    $("#output").empty(); $("#myCanvas").hide();
    var x = document.getElementById("stat").value;
    if (x == "probabilities"){
        compprobabilities()
    } else if (x == "expected"){
        compexpected()
    } else if (x == "variance"){
        compvariance()
    } else if (x == "standard") {
        compstandard()
    } else if (x == "discrete") {
        compdiscrete()
    } else if (x == "uniform") {
        compuniform()
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

function probabilities() {
    $("#expected").show(); $("#expectedprobs").show();
    $("#make2").hide(); $("#make3").show(); $("#make4").hide(); $("#make5").hide();
    $("#make6").hide(); $("#make7").hide(); $("#make8").hide(); $("#make9").hide(); $("#make10").hide();
    $("#row4").hide(); $("#row5").hide(); $("#row6").hide(); $("#row7").hide();
    $("#row8").hide(); $("#row9").hide(); $("#row10").hide();
    rows = 3
}

function compprobabilities() {
    var x = document.getElementById('probtype1').value
    if (x == "equal") {
        compprob1()
    } else if (x == "lessequal") {
        compprob2()
    } else if (x == "less") {
        compprob3()
    } else if (x == "greaterequal") {
        compprob4()
    } else if (x == "greater") {
        compprob5()
    }
}

function compprob1() {
    $("#explanation").show();
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
        ans = "\\text{Not Defined}"
    }
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + x + ") &= f(" + x + ") \\\\ &= \\boxed{" + ans + "}   \\end{align} $$"
    MathJax.typeset();
}

function compprob2() {
    $("#explanation").show();
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
    
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    
    var xaf = xa.filter(y => y <= x)
    var xaf2 = xaf.filter(y => y)
    
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    
    var adds2 = fa[0]
    var ans = parseFloat(fa[0])
    for (let i=1; i<xaf2.length; i++){
        adds2 += "+"+fa[i]+""
        ans += parseFloat(fa[i])
    }
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + ans + "}  \\end{align} $$"
    MathJax.typeset();
}

function compprob3() {
    $("#explanation").show();
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
    
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    
    var xaf = xa.filter(y => y < x)
    var xaf2 = xaf.filter(y => y)
    
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    
    var adds2 = fa[0]
    var ans = parseFloat(fa[0])
    for (let i=1; i<xaf2.length; i++){
        adds2 += "+"+fa[i]+""
        ans += parseFloat(fa[i])
    }
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x <" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + ans + "}  \\end{align} $$"
    MathJax.typeset();
}

function compprob4() {
    $("#explanation").show();
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
    
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    
    var xaf0 = xa.filter(y => y < x)
    var xaf02 = xaf0.filter(y => y)
    
    var xaf = xa.filter(y => y >= x)
    var xaf2 = xaf.filter(y => y)
    
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    
    var start = xaf02.length
    var start2 = xaf02.length + 1
    var end = xaf02.length + xaf2.length
    
    var adds2 = fa[start]
    var ans = parseFloat(fa[start])
    for (let i=start2; i<end; i++){
        adds2 += "+"+fa[i]+""
        ans += parseFloat(fa[i])
    }
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "}  \\end{align} $$"
    MathJax.typeset();
}

function compprob5() {
    $("#explanation").show();
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
    
    var xa = [x1, x2, x3, x4, x5, x6, x7, x8, x9, x10]
    var fa = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10]
    
    var xaf0 = xa.filter(y => y <= x)
    var xaf02 = xaf0.filter(y => y)
    
    var xaf = xa.filter(y => y > x)
    var xaf2 = xaf.filter(y => y)
    
    var adds = "f("+xaf2[0]+")"
    for (let i=1; i<xaf2.length; i++){
        adds += "+ f("+xaf[i]+")"
    }
    
    var start = xaf02.length
    var start2 = xaf02.length + 1
    var end = xaf02.length + xaf2.length
    
    var adds2 = fa[start]
    var ans = parseFloat(fa[start])
    for (let i=start2; i<end; i++){
        adds2 += "+"+fa[i]+""
        ans += parseFloat(fa[i])
    }
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x >" + x + ") &= " + adds + " \\\\ &= " + adds2 + "  \\\\ &= \\boxed{" + ans + "}  \\end{align} $$"
    MathJax.typeset();
}

function expected() {
    $("#expected").show(); $("#expectedprobs").hide();
    $("#make2").hide(); $("#make3").show(); $("#make4").hide(); $("#make5").hide();
    $("#make6").hide(); $("#make7").hide(); $("#make8").hide(); $("#make9").hide(); $("#make10").hide();
    $("#row4").hide(); $("#row5").hide(); $("#row6").hide(); $("#row7").hide();
    $("#row8").hide(); $("#row9").hide(); $("#row10").hide();
    rows = 3
}

function compexpected() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The expected value of a random variable measures the central location of the values of the random variable. "
    document.getElementById("formulatext").innerHTML = "$$ E(x) = \\mu = \\sum x f(x) $$"
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

    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$xf(x)$</td></tr>"
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var ans = 0
    for (i = 0; i < rows; i++) {
        table += "<tr><td>$"+x[i]+"$</td><td>$"+f[i]+"$</td><td>$"+parseFloat((x[i]*f[i]).toFixed(2))+"$</td></tr>"
        ans += x[i]*f[i]
    }
    
    //table = table + "<tr><td>$"+x1+"$</td><td>$"+f1+"$</td><td>$"+x1*f1+"$</td></tr>"
    //table = table + "<tr><td>$"+x2+"$</td><td>$"+f2+"$</td><td>$"+x2*f2+"$</td></tr>"
    //table = table + "<tr><td>$"+x3+"$</td><td>$"+f3+"$</td><td>$"+x3*f3+"$</td></tr>"
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>$"+parseFloat(ans.toFixed(2))+"$</td></tr></table>"
 
    document.getElementById("output").innerHTML = table + "$$ E(x) = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$"
    MathJax.typeset();
}

function variance() {
    $("#expected").show(); $("#expectedprobs").hide();
    $("#make2").hide(); $("#make3").show(); $("#make4").hide(); $("#make5").hide();
    $("#make6").hide(); $("#make7").hide(); $("#make8").hide(); $("#make9").hide(); $("#make10").hide();
    $("#row4").hide(); $("#row5").hide(); $("#row6").hide(); $("#row7").hide();
    $("#row8").hide(); $("#row9").hide(); $("#row10").hide();
    rows = 3
}

function compvariance() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The variance of a random variable measures the variability in the values of the random variable. "
    document.getElementById("formulatext").innerHTML = "$$ Var(x) = \\sigma^2 = \\sum (x-f(x))^2 $$"
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
    var ans = (((x1-mu)**2)*f1) + (((x1-mu)**2)*f2) + (((x1-mu)**2)*f3);

    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$x-\\mu$</td><td>$(x-\\mu)^2$</td><td>$(x-\\mu)^2f(x)$</td></tr>"
    
    
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var mu = 0
    for (i = 0; i < rows; i++) {
        mu += x[i]*f[i]
    }
    var ans = 0
    for (i = 0; i < rows; i++) {
        table += "<tr><td>$"+x[i]+"$</td><td>$"+f[i]+"$</td><td>$"+parseFloat((x[i]-mu).toFixed(2))+"$</td><td>$"+parseFloat(((x[i]-mu)**2).toFixed(2))+"$</td><td>$"+parseFloat((((x[i]-mu)**2)*f[i]).toFixed(2))+"$</td></tr>"
        ans += ((x[i]-mu)**2)*f[i]
    }
    
    
    
    
    
    
    //table = table + "<tr><td>$"+x1+"$</td><td>$"+f1+"$</td><td>$"+(x1-mu)+"$</td><td>$"+((x1-mu)**2)+"$</td><td>$"+(((x1-mu)**2)*f1)+"$</td></tr>"
    //table = table + "<tr><td>$"+x2+"$</td><td>$"+f2+"$</td><td>$"+(x2-mu)+"$</td><td>$"+((x2-mu)**2)+"$</td><td>$"+(((x1-mu)**2)*f2)+"$</td></tr>"
    //table = table + "<tr><td>$"+x3+"$</td><td>$"+f3+"$</td><td>$"+(x3-mu)+"$</td><td>$"+((x3-mu)**2)+"$</td><td>$"+(((x1-mu)**2)*f3)+"$</td></tr>"
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>$0$</td><td>$-$</td><td>$"+parseFloat(ans.toFixed(2))+"$</td></tr></table>"
 
    document.getElementById("output").innerHTML = table + "$$ \\text{Var}(x) = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$"
    MathJax.typeset();
}

function standard() {
    $("#standard").show();

}

function compstandard() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The standard deviation of a random variable measures the variability in the values of the random variable. "
    document.getElementById("formulatext").innerHTML = "$$ \\sigma = \\sqrt{Var(x)} $$"
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
    var ans = (((x1-mu)**2)*f1) + (((x1-mu)**2)*f2) + (((x1-mu)**2)*f3);

    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$x-\\mu$</td><td>$(x-\\mu)^2$</td><td>$(x-\\mu)^2f(x)$</td></tr>"
    
    
    var x = [x1,x2,x3,x4,x5,x6,x7,x8,x9,x10]
    var f = [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10]
    var mu = 0
    for (i = 0; i < rows; i++) {
        mu += x[i]*f[i]
    }
    var ans = 0
    for (i = 0; i < rows; i++) {
        table += "<tr><td>$"+x[i]+"$</td><td>$"+f[i]+"$</td><td>$"+parseFloat((x[i]-mu).toFixed(2))+"$</td><td>$"+parseFloat(((x[i]-mu)**2).toFixed(2))+"$</td><td>$"+parseFloat((((x[i]-mu)**2)*f[i]).toFixed(2))+"$</td></tr>"
        ans += ((x[i]-mu)**2)*f[i]
    }
    
    
    
    
    
    
    //table = table + "<tr><td>$"+x1+"$</td><td>$"+f1+"$</td><td>$"+(x1-mu)+"$</td><td>$"+((x1-mu)**2)+"$</td><td>$"+(((x1-mu)**2)*f1)+"$</td></tr>"
    //table = table + "<tr><td>$"+x2+"$</td><td>$"+f2+"$</td><td>$"+(x2-mu)+"$</td><td>$"+((x2-mu)**2)+"$</td><td>$"+(((x1-mu)**2)*f2)+"$</td></tr>"
    //table = table + "<tr><td>$"+x3+"$</td><td>$"+f3+"$</td><td>$"+(x3-mu)+"$</td><td>$"+((x3-mu)**2)+"$</td><td>$"+(((x1-mu)**2)*f3)+"$</td></tr>"
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>$0$</td><td>$-$</td><td>$"+parseFloat(ans.toFixed(2))+"$</td></tr></table>"

    document.getElementById("output").innerHTML = "$$ \\begin{align} \\sigma &= \\sqrt{\\text{Var}(x)} \\\\ &= \\sqrt{" + parseFloat(ans.toFixed(2)) + "} \\\\ &= \\boxed{" + parseFloat((Math.sqrt(ans)).toFixed(2)) + "} \\end{align} $$"
    MathJax.typeset();
}

function discrete() {
    $("#probswitch").show();
    $("#expected").show(); $("#discreteprobs").show(); 
    $("#make2").hide(); $("#make3").show(); $("#make4").hide(); $("#make5").hide();
    $("#make6").hide(); $("#make7").hide(); $("#make8").hide(); $("#make9").hide(); $("#make10").hide();
    $("#row4").hide(); $("#row5").hide(); $("#row6").hide(); $("#row7").hide();
    $("#row8").hide(); $("#row9").hide(); $("#row10").hide();
    rows = 3
}

function dswitchexpected() {
    $("#discreteprobs").hide(); $("#discreteexpected").show(); $("#discretevariance").hide(); $("#discretestandard").hide();
    discretekind = "expected"
}

function dswitchvariance() {
    $("#discreteprobs").hide(); $("#discreteexpected").hide(); $("#discretevariance").show(); $("#discretestandard").hide();
    discretekind = "variance"
}

function dswitchstandard() {
    $("#discreteprobs").hide(); $("#discreteexpected").hide(); $("#discretevariance").hide(); $("#discretestandard").show();
    discretekind = "standard"
}

function dswitchprobability() {
    $("#discreteprobs").show(); $("#discreteexpected").hide(); $("#discretevariance").hide(); $("#discretestandard").hide();
    discretekind = "probability"
}

function compdiscrete() {
    if (discretekind == "probability") {
        compprobabilities()
    } else if (discretekind == "expected") {
        compexpected()
    } else if (discretekind == "variance") {
        compvariance()
    } else if (discretekind == "standard") {
        compstandard()
    }
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
    } else {
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
    document.getElementById("explanationtext").innerHTML = "$$ E(x) = \\mu = np $$"
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} E(x) &= np \\\\ &= (" + trials + ")(" + prob + ") \\\\ &= \\boxed{" + parseFloat((trials*prob).toFixed(2)) + "} \\end{align} $$"
    MathJax.typeset();
}

function compbinomialvariance() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ \\text{Var}(x) = \\sigma^2 &= np(1-p) $$ $$ \\sigma = \\sqrt{\\text{Var}(x)} $$"
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Var}(x) &= np(1-p) \\\\ &= (" + trials + ")(" + prob + ")(1-" + prob + ") \\\\ &= \\boxed{" + parseFloat((trials*prob*(1-prob)).toFixed(2)) + "} \\end{align} $$"
    MathJax.typeset();
}

function compbinomialstandard() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ \\text{Var}(x) = \\sigma^2 &= np(1-p) $$ $$ \\sigma = \\sqrt{\\text{Var}(x)} $$"
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\sigma &= \\sqrt{\\text{Var}(x)} \\\\ &= \\sqrt{" + parseFloat((trials*prob*(1-prob)).toFixed(2)) + "} \\\\ &= \\boxed{" + parseFloat((Math.sqrt(trials*prob*(1-prob))).toFixed(2)) + "} \\end{align} $$"
    MathJax.typeset();
}

function compbinomial1() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $$"
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
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
        numerator2 = numerator2 + (topn - bottomn) + "!"
        denominator2 = denominator2 + (topn - bottomn) + "!"
        var denominator3 = bottomnfact
        var ansval = numerator3 / denominator3;
    }
    
    var ans = ansval * (prob ** num) * (1-prob)**(trials-num)
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + num + ") &= f(" + num + ") \\\\ &= {" + trials + " \\choose " + num + "} " + prob + "^" + num + " (1-" + prob + ")^{(" + trials + "-" + num + ")} \\\\ &= \\frac{"+topn+"!}{"+bottomn+"!("+topn+"-"+bottomn+")!}" + prob + "^" + num + " (" + parseFloat((1-prob).toFixed(2)) + ")^{(" + (trials-num) + ")} \\\\ &= "+parseFloat(ansval.toFixed(2))+"\\times"+parseFloat((prob ** num).toFixed(2))+"\\times"+parseFloat(((1-prob)**(trials-num)).toFixed(2))+" \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2))  + "}   \\end{align} $$"
    MathJax.typeset();
}

function compbinomial2() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $$"
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    var num = document.getElementById('binval').value
    
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

        var ans = ansval * (prob ** i) * (1-prob)**(trials-i)
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

    var ans = ansval * (prob ** num) * (1-prob)**(trials-num)
    
    ansplus = ansplus + parseFloat(ans.toFixed(2))
    finalans = finalans + parseFloat(ans.toFixed(2))
        
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + num + ") &=  " + fplus + " \\\\ &= " + ansplus + " \\\\ &= \\boxed{"+parseFloat(finalans.toFixed(2)) + "}   \\end{align} $$"
    MathJax.typeset();
}

function compbinomial4() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $$"
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    var num = document.getElementById('binval').value
    var numm1 = num - 1
    
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

        var ans = ansval * (prob ** i) * (1-prob)**(trials-i)
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

    var ans = ansval * (prob ** num) * (1-prob)**(trials-num)
    
    ansplus = ansplus + parseFloat(ans.toFixed(2))
    finalans = finalans + parseFloat(ans.toFixed(2))
        
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + num + ") &=  " + fplus + " \\\\ &= " + ansplus + " \\\\ &= \\boxed{"+parseFloat(finalans.toFixed(2)) + "}   \\end{align} $$"
    MathJax.typeset();
}

function compbinomial3() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $$"
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

            var ans = ansval * (prob ** i) * (1-prob)**(trials-i)
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

        var ans = ansval * (prob ** trials) * (1-prob)**(trials-trials)

        ansplus = ansplus + parseFloat(ans.toFixed(2))
        finalans = finalans + parseFloat(ans.toFixed(2))


        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + num + ") &=  " + fplus + " \\\\ &= " + ansplus + " \\\\ &= "+parseFloat(finalans.toFixed(2)) + "   \\end{align} $$" + (trials-num) + "-" + trials
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

            var ans = ansval * (prob ** i) * (1-prob)**(trials-i)
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

        var ans = ansval * (prob ** num) * (1-prob)**(trials-num)

        ansplus = ansplus + parseFloat(ans.toFixed(2))
        finalans = finalans + parseFloat(ans.toFixed(2))


        document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + num + ") &= 1 - P(x < " + num + ")\\\\ &= 1 - (" + fplus + ") \\\\ &= 1 - (" + ansplus + ") \\\\ &= 1 - "+parseFloat(finalans.toFixed(2)) + " \\\\ &= \\boxed{"+parseFloat((1-finalans).toFixed(2)) + "}   \\end{align} $$"
    }
    
    MathJax.typeset();
}

function compbinomial5() {
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

            var ans = ansval * (prob ** i) * (1-prob)**(trials-i)
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

        var ans = ansval * (prob ** trials) * (1-prob)**(trials-trials)

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

            var ans = ansval * (prob ** i) * (1-prob)**(trials-i)
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

        var ans = ansval * (prob ** num) * (1-prob)**(trials-num)

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
    
    var ans = ((ave**num)*(exp**(-ave)))/factorial(num)
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x=" + num + ") &= f(" + num + ") \\\\ &= \\frac{" + ave + "^" + num + " e^{-" + ave + "}}{" + num + "!} \\\\ &= \\frac{" + (ave**num) + "\\times " + parseFloat((exp**(-ave)).toFixed(2)) + "}{" + factorial(num) + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "} \\end{align} $$"
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
    
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < num; i++) {
        var ans = ((ave**i)*(exp**(-ave)))/factorial(i)
        ansplus += parseFloat(ans.toFixed(2)) + "+"
        finalans += parseFloat(ans.toFixed(2))
    }
    
    var ans = ((ave**i)*(exp**(-ave)))/factorial(i)
    
    ansplus = ansplus + parseFloat(ans.toFixed(2))
    
    finalans = finalans + parseFloat(ans.toFixed(2))
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq " + num + ") &= " + fplus + " \\\\ &= " + ansplus + " \\\\ &= \\boxed{" + parseFloat(finalans.toFixed(2)) + "} \\end{align} $$"
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
    
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < numm1; i++) {
        var ans = ((ave**i)*(exp**(-ave)))/factorial(i)
        ansplus += parseFloat(ans.toFixed(2)) + "+"
        finalans += parseFloat(ans.toFixed(2))
    }
    
    var ans = ((ave**i)*(exp**(-ave)))/factorial(i)
    
    ansplus = ansplus + parseFloat(ans.toFixed(2))
    
    finalans = finalans + parseFloat(ans.toFixed(2))
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < " + num + ") &= " + fplus + " \\\\ &= " + ansplus + " \\\\ &= \\boxed{" + parseFloat(finalans.toFixed(2)) + "} \\end{align} $$"
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
    
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < numm1; i++) {
        var ans = ((ave**i)*(exp**(-ave)))/factorial(i)
        ansplus += parseFloat(ans.toFixed(2)) + "+"
        finalans += parseFloat(ans.toFixed(2))
    }
    
    var ans = ((ave**i)*(exp**(-ave)))/factorial(i)
    
    ansplus = ansplus + parseFloat(ans.toFixed(2))
    
    finalans = finalans + parseFloat(ans.toFixed(2))
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq " + num + ") &= 1 - P(x < " + num + ") \\\\ &= 1 - (" + fplus + ") \\\\ &= 1 - (" + ansplus + ") \\\\ &= 1 - " + parseFloat(finalans.toFixed(2)) + " \\\\ &= \\boxed{" + parseFloat((1 - finalans).toFixed(2)) + "} \\end{align} $$"
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
    
    var ansplus = ""
    var finalans = 0
    for (i = 0; i < num; i++) {
        var ans = ((ave**i)*(exp**(-ave)))/factorial(i)
        ansplus += parseFloat(ans.toFixed(2)) + "+"
        finalans += parseFloat(ans.toFixed(2))
    }
    
    var ans = ((ave**i)*(exp**(-ave)))/factorial(i)
    
    ansplus = ansplus + parseFloat(ans.toFixed(2))
    
    finalans = finalans + parseFloat(ans.toFixed(2))
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > " + num + ") &= 1 - P(x \\leq " + num + ") \\\\ &= 1 - (" + fplus + ") \\\\ &= 1 - (" + ansplus + ") \\\\ &= 1 - " + parseFloat(finalans.toFixed(2)) + " \\\\ &= \\boxed{" + parseFloat((1 - finalans).toFixed(2)) + "} \\end{align} $$"
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
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x="+numsucc+") &=  f("+numsucc+") \\\\ &= \\frac{\\displaystyle{"+popsucc+" \\choose "+numsucc+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+numsucc+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} \\\\ &= \\frac{\\displaystyle\\left(\\frac{"+topna+"!}{"+bottomna+"!"+(topna-bottomna)+"!}\\right)\\left(\\frac{"+topnb+"!}{"+bottomnb+"!"+(topnb-bottomnb)+"!}\\right)}{\\displaystyle\\left(\\frac{"+topnc+"!}{"+bottomnc+"!"+(topnc-bottomnc)+"!}\\right)} \\\\ &= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "} \\end{align} $$"
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
        ansplus += parseFloat(ans.toFixed(2)) + "+"
        finalans += ans
        
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
    
    var ans = (ansvala*ansvalb)/ansvalc;
    
    ansplus = ansplus + parseFloat(ans.toFixed(2))
    finalans = finalans + ans
    
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\leq "+numsucc+") &= "+fplus+" \\\\ &= "+ansplus+" \\\\ &= \\boxed{"+parseFloat(finalans.toFixed(2))+"} \\end{align} $$"
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
        ansplus += parseFloat(ans.toFixed(2)) + "+"
        finalans += ans
        
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
    
    var ans = (ansvala*ansvalb)/ansvalc;
    
    ansplus = ansplus + parseFloat(ans.toFixed(2))
    finalans = finalans + ans
    
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x < "+numsucc+") &= "+fplus+" \\\\ &= "+ansplus+" \\\\ &= \\boxed{"+parseFloat(finalans.toFixed(2))+"} \\end{align} $$"
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
        ansplus += parseFloat(ans.toFixed(2)) + "+"
        finalans += ans
        
    }
    
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
    
    var ans = (ansvala*ansvalb)/ansvalc;
    
    ansplus = ansplus + parseFloat(ans.toFixed(2))
    finalans = finalans + ans
    
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x \\geq "+numsucc+") &= "+fplus+" \\\\ &= "+ansplus+" \\\\ &= \\boxed{"+parseFloat(finalans.toFixed(2))+"} \\end{align} $$"
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
        ansplus += parseFloat(ans.toFixed(2)) + "+"
        finalans += ans
        
    }
    
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
    
    var ans = (ansvala*ansvalb)/ansvalc;
    
    ansplus = ansplus + parseFloat(ans.toFixed(2))
    finalans = finalans + ans
    
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(x > "+numsucc+") &= "+fplus+" \\\\ &= "+ansplus+" \\\\ &= \\boxed{"+parseFloat(finalans.toFixed(2))+"} \\end{align} $$"
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



function make2v(){
    $("#row3v").hide();
    $("#make2v").show();
    $("#make3v").hide();
    rows=2
}

function make3v(){
    $("#row3v").show();
    $("#row4v").hide();
    $("#make2v").hide();
    $("#make3v").show();
    $("#make4v").hide();
    rows=3
}

function make4v(){
    $("#row4v").show();
    $("#row5v").hide();
    $("#make3v").hide();
    $("#make4v").show();
    $("#make5v").hide();
    rows=4
}

function make5v(){
    $("#row5v").show();
    $("#row6v").hide();
    $("#make4v").hide();
    $("#make5v").show();
    $("#make6v").hide();
    rows=5
}

function make6v(){
    $("#row6v").show();
    $("#row7v").hide();
    $("#make5v").hide();
    $("#make6v").show();
    $("#make7v").hide();
    rows=6
}

function make7v(){
    $("#row7v").show();
    $("#row8v").hide();
    $("#make6v").hide();
    $("#make7v").show();
    $("#make8v").hide();
    rows=7
}

function make8v(){
    $("#row8v").show();
    $("#row9v").hide();
    $("#make7v").hide();
    $("#make8v").show();
    $("#make9v").hide();
    rows=8
}

function make9v(){
    $("#row9v").show();
    $("#row10v").hide();
    $("#make8v").hide();
    $("#make9v").show();
    $("#make10v").hide();
    rows=9
}

function make10v(){
    $("#row10v").show();
    $("#make9v").hide();
    $("#make10v").show();
    rows=10
}