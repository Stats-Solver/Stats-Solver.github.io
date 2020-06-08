$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#expected").hide(); $("#variance").hide(); $("#standard").hide(); $("#intersection").hide(); $("#conditional").hide();
$("#intersection2").hide(); $("#conditional2").hide(); $("#union2").hide(); $("#intersection3").hide(); $("#intersection4").hide();

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function showstuff(){
    $("#expected").hide(); $("#variance").hide(); $("#standard").hide(); $("#intersection").hide(); $("#conditional").hide();
    $("#intersection2").hide(); $("#conditional2").hide(); $("#union2").hide(); $("#intersection3").hide(); $("#intersection4").hide();
    $("#explanation").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#output").empty();
    var x = document.getElementById("stat").value;
    if (x == "expected"){
        expected()
    } else if (x == "variance"){
        variance()
    } else if (x == "standard") {
        standard()
    } else if (x == "union") {
        union()
    } else if (x == "intersection") {
        intersection()
    } else if (x == "conditional") {
        conditional()
    } else if (x == "bayes") {
        bayes()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function stat(){
    $("#output").empty(); $("#myCanvas").hide();
    var x = document.getElementById("stat").value;
    if (x == "expected"){
        compexpected()
    } else if (x == "variance"){
        compvariance()
    } else if (x == "standard") {
        compstandard()
    } else if (x == "union") {
        compunion()
    } else if (x == "intersection") {
        compintersection()
    } else if (x == "conditional") {
        compconditional()
    } else if (x == "bayes") {
        bayes()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function expected() {
    $("#expected").show();

}

function compexpected() {
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
    table = table + "<tr><td>$\\sum$</td><td>$1$</td><td>$"+parseFloat(ans.toFixed(2))+"$</td></tr></table>"
 
    document.getElementById("output").innerHTML = table + "$$ E(x) = " + parseFloat(ans.toFixed(2)) + "$$"
    MathJax.typeset();
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
    table = table + "<tr><td>$\\sum$</td><td>$1$</td><td>$0$</td><td>$-$</td><td>$"+parseFloat(ans.toFixed(2))+"$</td></tr></table>"
 
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