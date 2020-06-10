$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#uniform").hide(); $("#normal").hide(); $("#snormal").hide(); $("#exponential").hide();
$("#lessthan").hide(); $("#greaterthan").hide(); $("#betweentwo").hide();
$("#lessthan2").hide(); $("#greaterthan2").hide(); $("#betweentwo2").hide();
$("#lessthan3").hide(); $("#greaterthan3").hide(); $("#betweentwo3").hide();
$("#lessthan4").hide(); $("#greaterthan4").hide(); $("#betweentwo4").hide();

function factorial(n) {
    if (n > 0) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    } else if (n == 0) {
        return 1
    }
  
}

function showstuff(){
    $("#uniform").hide(); $("#normal").hide(); $("#snormal").hide(); $("#exponential").hide();
    $("#lessthan").hide(); $("#greaterthan").hide(); $("#betweentwo").hide();
    $("#lessthan2").hide(); $("#greaterthan2").hide(); $("#betweentwo2").hide();
    $("#lessthan3").hide(); $("#greaterthan3").hide(); $("#betweentwo3").hide();
    $("#lessthan4").hide(); $("#greaterthan4").hide(); $("#betweentwo4").hide();
    $("#explanation").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#output").empty();
    var x = document.getElementById("stat").value;
    if (x == "uniform"){
        uniform()
    } else if (x == "normal"){
        normal()
    } else if (x == "snormal") {
        snormal()
    } else if (x == "exponential") {
        exponential()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function stat(){
    $("#output").empty(); $("#myCanvas").hide();
    var x = document.getElementById("stat").value;
    if (x == "uniform"){
        compuniform()
    } else if (x == "normal"){
        compnormal()
    } else if (x == "snormal") {
        compsnormal()
    } else if (x == "exponential") {
        compexponential()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function uniform() {
    $("#uniform").show();
    $("#lessthan").show();

}

function togreater() {
        $("#lessthan").hide();
        $("#greaterthan").show();
        $("#betweentwo").hide();
}

function toboth() {
        $("#lessthan").hide();
        $("#greaterthan").hide();
        $("#betweentwo").show();
}

function toless() {
        $("#lessthan").show();
        $("#greaterthan").hide();
        $("#betweentwo").hide();
}

function compuniform1() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ E(x) = \\mu = \\sum x f(x) $$"
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var f1 = document.getElementById('f1').value
    var f2 = document.getElementById('f2').value
    var f3 = document.getElementById('f3').value
    var ans = x1*f1 + x2*f2 + x3*f3;

    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$xf(x)$</td></tr>"
    table = table + "<tr><td>$"+x1+"$</td><td>$"+f1+"$</td><td>$"+x1*f1+"$</td></tr>"
    table = table + "<tr><td>$"+x2+"$</td><td>$"+f2+"$</td><td>$"+x2*f2+"$</td></tr>"
    table = table + "<tr><td>$"+x3+"$</td><td>$"+f3+"$</td><td>$"+x3*f3+"$</td></tr>"
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>$"+parseFloat(ans.toFixed(2))+"$</td></tr></table>"
 
    document.getElementById("output").innerHTML = table + "$$ E(x) = " + parseFloat(ans.toFixed(2)) + "$$"
    MathJax.typeset();
}

function compuniform2() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ E(x) = \\mu = \\sum x f(x) $$"
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var f1 = document.getElementById('f1').value
    var f2 = document.getElementById('f2').value
    var f3 = document.getElementById('f3').value
    var ans = x1*f1 + x2*f2 + x3*f3;

    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$xf(x)$</td></tr>"
    table = table + "<tr><td>$"+x1+"$</td><td>$"+f1+"$</td><td>$"+x1*f1+"$</td></tr>"
    table = table + "<tr><td>$"+x2+"$</td><td>$"+f2+"$</td><td>$"+x2*f2+"$</td></tr>"
    table = table + "<tr><td>$"+x3+"$</td><td>$"+f3+"$</td><td>$"+x3*f3+"$</td></tr>"
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>$"+parseFloat(ans.toFixed(2))+"$</td></tr></table>"
 
    document.getElementById("output").innerHTML = table + "$$ E(x) = " + parseFloat(ans.toFixed(2)) + "$$"
    MathJax.typeset();
}

function compuniform3() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ E(x) = \\mu = \\sum x f(x) $$"
    var x1 = document.getElementById('x1').value
    var x2 = document.getElementById('x2').value
    var x3 = document.getElementById('x3').value
    var f1 = document.getElementById('f1').value
    var f2 = document.getElementById('f2').value
    var f3 = document.getElementById('f3').value
    var ans = x1*f1 + x2*f2 + x3*f3;

    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$xf(x)$</td></tr>"
    table = table + "<tr><td>$"+x1+"$</td><td>$"+f1+"$</td><td>$"+x1*f1+"$</td></tr>"
    table = table + "<tr><td>$"+x2+"$</td><td>$"+f2+"$</td><td>$"+x2*f2+"$</td></tr>"
    table = table + "<tr><td>$"+x3+"$</td><td>$"+f3+"$</td><td>$"+x3*f3+"$</td></tr>"
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>$"+parseFloat(ans.toFixed(2))+"$</td></tr></table>"
 
    document.getElementById("output").innerHTML = table + "$$ E(x) = " + parseFloat(ans.toFixed(2)) + "$$"
    MathJax.typeset();
}

function normal() {
    $("#normal").show();
    $("#lessthan2").show();

}

function togreater2() {
        $("#lessthan2").hide();
        $("#greaterthan2").show();
        $("#betweentwo2").hide();
}

function toboth2() {
        $("#lessthan2").hide();
        $("#greaterthan2").hide();
        $("#betweentwo2").show();
}

function toless2() {
        $("#lessthan2").show();
        $("#greaterthan2").hide();
        $("#betweentwo2").hide();
}


function snormal() {
    $("#snormal").show();
    $("#lessthan3").show();

}

function togreater3() {
        $("#lessthan3").hide();
        $("#greaterthan3").show();
        $("#betweentwo3").hide();
}

function toboth3() {
        $("#lessthan3").hide();
        $("#greaterthan3").hide();
        $("#betweentwo3").show();
}

function toless3() {
        $("#lessthan3").show();
        $("#greaterthan3").hide();
        $("#betweentwo3").hide();
}

function exponential() {
    $("#exponential").show();
    $("#lessthan4").show();

}

function togreater4() {
        $("#lessthan4").hide();
        $("#greaterthan4").show();
        $("#betweentwo4").hide();
}

function toboth4() {
        $("#lessthan4").hide();
        $("#greaterthan4").hide();
        $("#betweentwo4").show();
}

function toless4() {
        $("#lessthan4").show();
        $("#greaterthan4").hide();
        $("#betweentwo4").hide();
}










function variance() {
    $("#variance").show();

}

function compvariance() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ Var(x) = \\sigma^2 = \\sum (x-f(x))^2 $$"
    var x1 = document.getElementById('x1v').value
    var x2 = document.getElementById('x2v').value
    var x3 = document.getElementById('x3v').value
    var f1 = document.getElementById('f1v').value
    var f2 = document.getElementById('f2v').value
    var f3 = document.getElementById('f3v').value
    var mu = x1*f1 + x2*f2 + x3*f3;
    var ans = (((x1-mu)**2)*f1) + (((x1-mu)**2)*f2) + (((x1-mu)**2)*f3);

    var table = "<table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$x-\\mu$</td><td>$(x-\\mu)^2$</td><td>$(x-\\mu)^2f(x)$</td></tr>"
    table = table + "<tr><td>$"+x1+"$</td><td>$"+f1+"$</td><td>$"+(x1-mu)+"$</td><td>$"+((x1-mu)**2)+"$</td><td>$"+(((x1-mu)**2)*f1)+"$</td></tr>"
    table = table + "<tr><td>$"+x2+"$</td><td>$"+f2+"$</td><td>$"+(x2-mu)+"$</td><td>$"+((x2-mu)**2)+"$</td><td>$"+(((x1-mu)**2)*f2)+"$</td></tr>"
    table = table + "<tr><td>$"+x3+"$</td><td>$"+f3+"$</td><td>$"+(x3-mu)+"$</td><td>$"+((x3-mu)**2)+"$</td><td>$"+(((x1-mu)**2)*f3)+"$</td></tr>"
    table = table + "<tr style='border-top: thin solid'><td>$\\sum$</td><td>$1$</td><td>$0$</td><td>$-$</td><td>$"+parseFloat(ans.toFixed(2))+"$</td></tr></table>"
 
    document.getElementById("output").innerHTML = table + "$$ \\text{Var}(x) = " + parseFloat(ans.toFixed(2)) + "$$"
    MathJax.typeset();
}

function standard() {
    $("#standard").show();

}

function compstandard() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The standard deviation is the square root of the variance."
    var vr = document.getElementById('vr').value
    var ans = Math.sqrt(vr);

    document.getElementById("output").innerHTML = "$$ \\begin{align} \\sigma &= \\sqrt{\\sigma^2} \\\\ &= \\sqrt{" + vr + "} \\\\ &=" + parseFloat(ans.toFixed(2)) + "\\end{align} $$"
    MathJax.typeset();
}

function binomial() {
    $("#binomial").show();

}

function compbinomial() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = {n \\choose x} p^x (1-p)^{(n-x)} $$"
    var trials = document.getElementById('trials').value
    var prob = document.getElementById('psuccess').value
    var num = document.getElementById('numsuc').value
    
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
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(" + num + ") &= {" + trials + " \\choose " + num + "} " + prob + "^" + num + " (1-" + prob + ")^{(" + trials + "-" + num + ")} \\\\ &= \\frac{"+topn+"!}{"+bottomn+"!("+topn+"-"+bottomn+")!}" + prob + "^" + num + " (" + (1-prob) + ")^{(" + (trials-num) + ")} \\\\ &= "+parseFloat(ansval.toFixed(2))+"\\times"+parseFloat((prob ** num).toFixed(2))+"\\times"+parseFloat((1-prob)**(trials-num).toFixed(2))+" \\\\ &= " + parseFloat(ans.toFixed(2))  + "   \\end{align} $$"
    MathJax.typeset();
}

function poisson() {
    $("#poisson").show();

}

function comppoisson() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ \\begin{align} f(x) = \\frac{\\mu^x e^{-\\mu}}{x!} $$"
    var ave = document.getElementById('meanocc').value;
    var num = document.getElementById('numocc').value;
    var exp = 2.71828;
    
    var ans = ((ave**num)*(exp**(-ave)))/factorial(num)
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(" + num + ") &= \\frac{" + ave + "^" + num + " e^{-" + ave + "}}{" + num + "!} \\\\ &= \\frac{" + (ave**num) + "\\times " + parseFloat((exp**(-ave)).toFixed(2)) + "}{" + factorial(num) + "} \\\\ &= " + parseFloat(ans.toFixed(2)) + " \\end{align} $$"
    MathJax.typeset();
}

function hypergeometric() {
    $("#hypergeometric").show();

}

function comphypergeometric() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\frac{{r \\choose x}{N-r \\choose n-x}}{{N \\choose n}} $$"
    var ntrials = document.getElementById('ntrials').value
    var popsize = document.getElementById('popsize').value
    var popsucc = document.getElementById('popsucc').value
    var numsucc = document.getElementById('numsucc').value
    
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
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} f("+numsucc+") &= \\frac{\\displaystyle{"+popsucc+" \\choose "+numsucc+"}{"+popsize+"-"+popsucc+" \\choose "+ntrials+"-"+numsucc+"}}{\\displaystyle{"+popsize+" \\choose "+ntrials+"}} \\\\ &= \\frac{\\displaystyle\\left(\\frac{"+topna+"!}{"+bottomna+"!"+(topna-bottomna)+"!}\\right)\\left(\\frac{"+topnb+"!}{"+bottomnb+"!"+(topnb-bottomnb)+"!}\\right)}{\\displaystyle\\left(\\frac{"+topnc+"!}{"+bottomnc+"!"+(topnc-bottomnc)+"!}\\right)} \\\\ &= \\frac{("+(factorial(topna)/(factorial(bottomna)*factorial(topna-bottomna)))+")("+(factorial(topnb)/(factorial(bottomnb)*factorial(topnb-bottomnb)))+")}{"+(factorial(topnc)/(factorial(bottomnc)*factorial(topnc-bottomnc)))+"} \\\\ &=" + parseFloat(ans.toFixed(2)) + "\\end{align} $$"
    MathJax.typeset();
}

function exampleexpected(){
    document.getElementById('x1').value="3"
    document.getElementById('x2').value="6"
    document.getElementById('x3').value="9"
    document.getElementById('f1').value=".25"
    document.getElementById('f2').value=".50"
    document.getElementById('f3').value=".25"
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
    document.getElementById('vr').value="9"
}

function examplebinomial(){
    document.getElementById('trials').value = 2
    document.getElementById('psuccess').value = .4
    document.getElementById('numsuc').value = 1
}

function examplepoisson(){
    document.getElementById('meanocc').value = 3
    document.getElementById('numocc').value = 2
}

function examplehypergeometric(){
    document.getElementById('ntrials').value = 4
    document.getElementById('popsize').value = 10
    document.getElementById('popsucc').value = 3
    document.getElementById('numsucc').value = 1
}


function make2(){
    $("#expected2").show();
    $("#expected").hide();
    $("#expected4").hide();
    $("#expected5").hide();
    $("#expected6").hide();
    $("#expected7").hide();
    $("#expected8").hide();
    $("#expected9").hide();
    $("#expected10").hide();
}

function make3(){
    $("#expected2").hide();
    $("#expected").show();
    $("#expected4").hide();
    $("#expected5").hide();
    $("#expected6").hide();
    $("#expected7").hide();
    $("#expected8").hide();
    $("#expected9").hide();
    $("#expected10").hide();
}

function make4(){
    $("#expected2").hide();
    $("#expected").hide();
    $("#expected4").show();
    $("#expected5").hide();
    $("#expected6").hide();
    $("#expected7").hide();
    $("#expected8").hide();
    $("#expected9").hide();
    $("#expected10").hide();
}

function make5(){
    $("#expected2").hide();
    $("#expected").hide();
    $("#expected4").hide();
    $("#expected5").show();
    $("#expected6").hide();
    $("#expected7").hide();
    $("#expected8").hide();
    $("#expected9").hide();
    $("#expected10").hide();
}

function make6(){
    $("#expected2").hide();
    $("#expected").hide();
    $("#expected4").hide();
    $("#expected5").hide();
    $("#expected6").show();
    $("#expected7").hide();
    $("#expected8").hide();
    $("#expected9").hide();
    $("#expected10").hide();
}

function make7(){
    $("#expected2").hide();
    $("#expected").hide();
    $("#expected4").hide();
    $("#expected5").hide();
    $("#expected6").hide();
    $("#expected7").show();
    $("#expected8").hide();
    $("#expected9").hide();
    $("#expected10").hide();
}

function make8(){
    $("#expected2").hide();
    $("#expected").hide();
    $("#expected4").hide();
    $("#expected5").hide();
    $("#expected6").hide();
    $("#expected7").hide();
    $("#expected8").show();
    $("#expected9").hide();
    $("#expected10").hide();
}

function make9(){
    $("#expected2").hide();
    $("#expected").hide();
    $("#expected4").hide();
    $("#expected5").hide();
    $("#expected6").hide();
    $("#expected7").hide();
    $("#expected8").hide();
    $("#expected9").show();
    $("#expected10").hide();
}

function make10(){
    $("#expected2").hide();
    $("#expected").hide();
    $("#expected4").hide();
    $("#expected5").hide();
    $("#expected6").hide();
    $("#expected7").hide();
    $("#expected8").hide();
    $("#expected9").hide();
    $("#expected10").show();
}






function make2v(){
    $("#variance2").show();
    $("#variance").hide();
    $("#variance4").hide();
    $("#variance5").hide();
    $("#variance6").hide();
    $("#variance7").hide();
    $("#variance8").hide();
    $("#variance9").hide();
    $("#variance10").hide();
}

function make3v(){
    $("#variance2").hide();
    $("#variance").show();
    $("#variance4").hide();
    $("#variance5").hide();
    $("#variance6").hide();
    $("#variance7").hide();
    $("#variance8").hide();
    $("#variance9").hide();
    $("#variance10").hide();
}

function make4v(){
    $("#variance2").hide();
    $("#variance").hide();
    $("#variance4").show();
    $("#variance5").hide();
    $("#variance6").hide();
    $("#variance7").hide();
    $("#variance8").hide();
    $("#variance9").hide();
    $("#variance10").hide();
}

function make5v(){
    $("#variance2").hide();
    $("#variance").hide();
    $("#variance4").hide();
    $("#variance5").show();
    $("#variance6").hide();
    $("#variance7").hide();
    $("#variance8").hide();
    $("#variance9").hide();
    $("#variance10").hide();
}

function make6v(){
    $("#variance2").hide();
    $("#variance").hide();
    $("#variance4").hide();
    $("#variance5").hide();
    $("#variance6").show();
    $("#variance7").hide();
    $("#variance8").hide();
    $("#variance9").hide();
    $("#variance10").hide();
}

function make7v(){
    $("#variance2").hide();
    $("#variance").hide();
    $("#variance4").hide();
    $("#variance5").hide();
    $("#variance6").hide();
    $("#variance7").show();
    $("#variance8").hide();
    $("#variance9").hide();
    $("#variance10").hide();
}

function make8v(){
    $("#variance2").hide();
    $("#variance").hide();
    $("#variance4").hide();
    $("#variance5").hide();
    $("#variance6").hide();
    $("#variance7").hide();
    $("#variance8").show();
    $("#variance9").hide();
    $("#variance10").hide();
}

function make9v(){
    $("#variance2").show();
    $("#variance").hide();
    $("#variance4").hide();
    $("#variance5").hide();
    $("#variance6").hide();
    $("#variance7").hide();
    $("#variance8").hide();
    $("#variance9").show();
    $("#variance10").hide();
}

function make10v(){
    $("#variance2").show();
    $("#variance").hide();
    $("#variance4").hide();
    $("#variance5").hide();
    $("#variance6").hide();
    $("#variance7").hide();
    $("#variance8").hide();
    $("#variance9").hide();
    $("#variance10").show();
}

