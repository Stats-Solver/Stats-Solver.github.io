$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#uniform").hide(); $("#normal").hide(); $("#snormal").hide(); $("#exponential").hide();
$("#lessthan").hide(); $("#greaterthan").hide(); $("#betweentwo").hide();
$("#lessthan2").hide(); $("#greaterthan2").hide(); $("#betweentwo2").hide();
$("#lessthan3").hide(); $("#greaterthan3").hide(); $("#betweentwo3").hide();
$("#lessthan4").hide(); $("#greaterthan4").hide(); $("#betweentwo4").hide();
$("#myCanvas").hide();
$("#uniformbetween").hide(); $("#snormalbetween").hide(); $("#normalbetween").hide(); $("#exponentialbetween").hide(); 


function factorial(n) {
    if (n > 0) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    } else if (n == 0) {
        return 1
    }
  
}

function toFixing(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob
	}
	return Prob
} 

function NormSInv(p) {
    var a1 = -39.6968302866538, a2 = 220.946098424521, a3 = -275.928510446969;
    var a4 = 138.357751867269, a5 = -30.6647980661472, a6 = 2.50662827745924;
    var b1 = -54.4760987982241, b2 = 161.585836858041, b3 = -155.698979859887;
    var b4 = 66.8013118877197, b5 = -13.2806815528857, c1 = -7.78489400243029E-03;
    var c2 = -0.322396458041136, c3 = -2.40075827716184, c4 = -2.54973253934373;
    var c5 = 4.37466414146497, c6 = 2.93816398269878, d1 = 7.78469570904146E-03;
    var d2 = 0.32246712907004, d3 = 2.445134137143, d4 = 3.75440866190742;
    var p_low = 0.02425, p_high = 1 - p_low;
    var q, r;
    var retVal;

    if ((p < 0) || (p > 1))
    {
        alert("NormSInv: Argument out of range.");
        retVal = 0;
    }
    else if (p < p_low)
    {
        q = Math.sqrt(-2 * Math.log(p));
        retVal = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    else if (p <= p_high)
    {
        q = p - 0.5;
        r = q * q;
        retVal = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    }
    else
    {
        q = Math.sqrt(-2 * Math.log(1 - p));
        retVal = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }

    return retVal;
}

function showstuff(){
    $("#uniform").hide(); $("#normal").hide(); $("#snormal").hide(); $("#exponential").hide();
    $("#lessthan").hide(); $("#greaterthan").hide(); $("#betweentwo").hide();
    $("#lessthan2").hide(); $("#greaterthan2").hide(); $("#betweentwo2").hide();
    $("#lessthan3").hide(); $("#greaterthan3").hide(); $("#betweentwo3").hide();
    $("#lessthan4").hide(); $("#greaterthan4").hide(); $("#betweentwo4").hide();
    $("#explanation").hide(); $("#myCanvas").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#output").empty(); $("#output2").empty();
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
    $("#output").empty(); 
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
    $("#uniformprob").show();
    $("#uniformbetween").hide();
}

function compuniform() {
    var probtype = document.getElementById("probtype").value
    var probtypeb1 = document.getElementById("probtypeb1").value
    var probtypeb2 = document.getElementById("probtypeb2").value
    if (probtype == "lessequal") {
        compuniform1() 
    } else if (probtype == "less") {
        compuniform2() 
    } else if (probtype == "greaterequal") {
        compuniform3() 
    } else if (probtype == "greater") {
        compuniform4()
    } else if (probtype == "equal") {
        compuniform5()
    } else if (probtypeb1 == "lessequal" && probtypeb2 == "lessequal") {
        compuniform6()
    } else if (probtypeb1 == "lessequal" && probtypeb2 == "less") {
        compuniform7()
    } else if (probtypeb1 == "less" && probtypeb2 == "lessequal") {
        compuniform8()
    } else if (probtypeb1 == "less" && probtypeb2 == "less") {
        compuniform9()
    } 
}

function compuniform1() {
    $("#explanation").show(); $("#myCanvas").show();
    
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    
    var minval = document.getElementById('minval').value
    var maxval = document.getElementById('maxval').value
    var lessval = document.getElementById('unival').value
 
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+maxval+"-"+minval+"} & \\text{for } "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(maxval-minval)+"} & \\text{for } "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(75+((lessval-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((lessval-minval)/(maxval-minval))*150, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    
    
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    ctx.fillText("1/"+(maxval-minval),10,48);
    ctx.fillText(minval,70,145);
    ctx.fillText(maxval,220,145);
    
    ctx.moveTo(35, 45);
    ctx.lineTo(45, 45);
    ctx.moveTo(75, 135);
    ctx.lineTo(75, 125);
    ctx.moveTo(225, 135);
    ctx.lineTo(225, 125);
    
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(225, 45);
    ctx.lineTo(225, 130);
    
    ctx.moveTo(75+((lessval-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((lessval-minval)/(maxval-minval))*150, 125);
    ctx.fillText(lessval,75+((lessval-minval)/(maxval-minval))*150 - 5,145);
    
    ctx.fillText("1/"+(maxval-minval),50,90);
    ctx.fillText(lessval - minval,75+(((lessval-minval)/(maxval-minval))*150)/2 - 8,40);
    
    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x \\leq "+lessval+") &= \\frac{\\displaystyle 1}{\\displaystyle "+(maxval-minval)+"} \\times " + (lessval - minval) + " \\\\ &= \\boxed{"+((1/(maxval-minval))*(lessval - minval))+"} \\end{align}$$"
    
    MathJax.typeset();
}

function compuniform2() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    
    var minval = document.getElementById('minval').value
    var maxval = document.getElementById('maxval').value
    var lessval = document.getElementById('unival').value
 
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+maxval+"-"+minval+"} & \\text{for } "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(maxval-minval)+"} & \\text{for } "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(75+((lessval-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((lessval-minval)/(maxval-minval))*150, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    
    
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    ctx.fillText("1/"+(maxval-minval),10,48);
    ctx.fillText(minval,70,145);
    ctx.fillText(maxval,220,145);
    
    ctx.moveTo(35, 45);
    ctx.lineTo(45, 45);
    ctx.moveTo(75, 135);
    ctx.lineTo(75, 125);
    ctx.moveTo(225, 135);
    ctx.lineTo(225, 125);
    
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(225, 45);
    ctx.lineTo(225, 130);
    
    ctx.moveTo(75+((lessval-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((lessval-minval)/(maxval-minval))*150, 125);
    ctx.fillText(lessval,75+((lessval-minval)/(maxval-minval))*150 - 5,145);
    
    ctx.fillText("1/"+(maxval-minval),50,90);
    ctx.fillText(lessval - minval,75+(((lessval-minval)/(maxval-minval))*150)/2 - 8,40);
    
    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x < "+lessval+") &= \\frac{\\displaystyle 1}{\\displaystyle "+(maxval-minval)+"} \\times " + (lessval - minval) + " \\\\ &= \\boxed{"+((1/(maxval-minval))*(lessval - minval))+"} \\end{align}$$"
    
    MathJax.typeset();
}

function compuniform3() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    
    var minval = document.getElementById('minval').value
    var maxval = document.getElementById('maxval').value
    var greaterval = document.getElementById('unival').value
 
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+maxval+"-"+minval+"} & \\text{for } "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(maxval-minval)+"} & \\text{for } "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(225, 130);
    ctx.lineTo(225, 45);
    ctx.lineTo(75+((greaterval-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((greaterval-minval)/(maxval-minval))*150, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    
    
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    ctx.fillText("1/"+(maxval-minval),10,48);
    ctx.fillText(minval,70,145);
    ctx.fillText(maxval,220,145);
    
    ctx.moveTo(35, 45);
    ctx.lineTo(45, 45);
    ctx.moveTo(75, 135);
    ctx.lineTo(75, 125);
    ctx.moveTo(225, 135);
    ctx.lineTo(225, 125);
    
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(225, 45);
    ctx.lineTo(225, 130);
    
    ctx.moveTo(75+((greaterval-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((greaterval-minval)/(maxval-minval))*150, 125);
    ctx.fillText(greaterval,75+((greaterval-minval)/(maxval-minval))*150 - 5,145);
    
    ctx.fillText("1/"+(maxval-minval),75+((greaterval-minval)/(maxval-minval))*150 - 25,90);
    ctx.fillText(maxval - greaterval,225-(((maxval-greaterval)/(maxval-minval))*150)/2 - 8,40);
    
    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x \\geq "+greaterval+") &= \\frac{\\displaystyle 1}{\\displaystyle "+(maxval-minval)+"} \\times " + (maxval - greaterval) + " \\\\ &= \\boxed{"+((1/(maxval-minval))*(maxval - greaterval))+"} \\end{align}$$"
 
    
    
    
    MathJax.typeset();
}

function compuniform4() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    
    var minval = document.getElementById('minval').value
    var maxval = document.getElementById('maxval').value
    var greaterval = document.getElementById('unival').value
 
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+maxval+"-"+minval+"} & \\text{for } "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(maxval-minval)+"} & \\text{for } "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(225, 130);
    ctx.lineTo(225, 45);
    ctx.lineTo(75+((greaterval-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((greaterval-minval)/(maxval-minval))*150, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    
    
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    ctx.fillText("1/"+(maxval-minval),10,48);
    ctx.fillText(minval,70,145);
    ctx.fillText(maxval,220,145);
    
    ctx.moveTo(35, 45);
    ctx.lineTo(45, 45);
    ctx.moveTo(75, 135);
    ctx.lineTo(75, 125);
    ctx.moveTo(225, 135);
    ctx.lineTo(225, 125);
    
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(225, 45);
    ctx.lineTo(225, 130);
    
    ctx.moveTo(75+((greaterval-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((greaterval-minval)/(maxval-minval))*150, 125);
    ctx.fillText(greaterval,75+((greaterval-minval)/(maxval-minval))*150 - 5,145);
    
    ctx.fillText("1/"+(maxval-minval),75+((greaterval-minval)/(maxval-minval))*150 - 25,90);
    ctx.fillText(maxval - greaterval,225-(((maxval-greaterval)/(maxval-minval))*150)/2 - 8,40);
    
    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x > "+greaterval+") &= \\frac{\\displaystyle 1}{\\displaystyle "+(maxval-minval)+"} \\times " + (maxval - greaterval) + " \\\\ &= \\boxed{"+((1/(maxval-minval))*(maxval - greaterval))+"} \\end{align}$$"
 
    
    
    
    MathJax.typeset();
}

function compuniform5() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    
    var minval = document.getElementById('minval').value
    var maxval = document.getElementById('maxval').value
    var greaterval = document.getElementById('unival').value
 
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+maxval+"-"+minval+"} & \\text{for } "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(maxval-minval)+"} & \\text{for } "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(75+((greaterval-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((greaterval-minval)/(maxval-minval))*150, 130);
    ctx.stroke();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    
    
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    ctx.fillText("1/"+(maxval-minval),10,48);
    ctx.fillText(minval,70,145);
    ctx.fillText(maxval,220,145);
    
    ctx.moveTo(35, 45);
    ctx.lineTo(45, 45);
    ctx.moveTo(75, 135);
    ctx.lineTo(75, 125);
    ctx.moveTo(225, 135);
    ctx.lineTo(225, 125);
    
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(225, 45);
    ctx.lineTo(225, 130);
    
    ctx.moveTo(75+((greaterval-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((greaterval-minval)/(maxval-minval))*150, 125);
    ctx.fillText(greaterval,75+((greaterval-minval)/(maxval-minval))*150 - 5,145);
    
    ctx.fillText("1/"+(maxval-minval),75+((greaterval-minval)/(maxval-minval))*150 - 25,90);
    ctx.fillText("0",75+((greaterval-minval)/(maxval-minval))*150 - 2,40);
    
    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x = "+greaterval+") &= \\frac{\\displaystyle 1}{\\displaystyle "+(maxval-minval)+"} \\times " + 0 + " \\\\ &= \\boxed{"+0+"} \\end{align}$$"
 
    
    
    
    MathJax.typeset();
}

function compuniform6() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    
    var minval = document.getElementById('minval').value
    var maxval = document.getElementById('maxval').value
    var twoval1 = document.getElementById('twoval1').value
    var twoval2 = document.getElementById('twoval2').value
 
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+maxval+"-"+minval+"} & "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(maxval-minval)+"} & "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(75+((twoval1-minval)/(maxval-minval))*150, 130);
    ctx.lineTo(75+((twoval1-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    
    
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    ctx.fillText("1/"+(maxval-minval),10,48);
    ctx.fillText(minval,70,145);
    ctx.fillText(maxval,220,145);
    
    ctx.moveTo(35, 45);
    ctx.lineTo(45, 45);
    ctx.moveTo(75, 135);
    ctx.lineTo(75, 125);
    ctx.moveTo(225, 135);
    ctx.lineTo(225, 125);
    
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(225, 45);
    ctx.lineTo(225, 130);
    
    ctx.moveTo(75+((twoval1-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((twoval1-minval)/(maxval-minval))*150, 125);
    ctx.fillText(twoval1,75+((twoval1-minval)/(maxval-minval))*150 - 5,145);
    ctx.moveTo(75+((twoval2-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 125);
    ctx.fillText(twoval2,75+((twoval2-minval)/(maxval-minval))*150 - 5,145);
    
    ctx.fillText("1/"+(maxval-minval),75+((twoval1-minval)/(maxval-minval))*150 - 25,90);
    ctx.fillText(twoval2 - twoval1,(75+((twoval1-minval)/(maxval-minval))*150 + 75+((twoval2-minval)/(maxval-minval))*150)/2 - 8,40);
    
    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P("+twoval1+" \\leq x \\leq "+twoval2+") &= \\frac{\\displaystyle 1}{\\displaystyle "+(maxval-minval)+"} \\times " + (twoval2 - twoval1) + " \\\\ &= \\boxed{"+parseFloat(((1/(maxval-minval))*(twoval2 - twoval1)).toFixed(2))+"} \\end{align}$$"

    
    MathJax.typeset();
}

function compuniform7() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    
    var minval = document.getElementById('minval').value
    var maxval = document.getElementById('maxval').value
    var twoval1 = document.getElementById('twoval1').value
    var twoval2 = document.getElementById('twoval2').value
 
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+maxval+"-"+minval+"} & "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(maxval-minval)+"} & "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(75+((twoval1-minval)/(maxval-minval))*150, 130);
    ctx.lineTo(75+((twoval1-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    
    
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    ctx.fillText("1/"+(maxval-minval),10,48);
    ctx.fillText(minval,70,145);
    ctx.fillText(maxval,220,145);
    
    ctx.moveTo(35, 45);
    ctx.lineTo(45, 45);
    ctx.moveTo(75, 135);
    ctx.lineTo(75, 125);
    ctx.moveTo(225, 135);
    ctx.lineTo(225, 125);
    
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(225, 45);
    ctx.lineTo(225, 130);
    
    ctx.moveTo(75+((twoval1-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((twoval1-minval)/(maxval-minval))*150, 125);
    ctx.fillText(twoval1,75+((twoval1-minval)/(maxval-minval))*150 - 5,145);
    ctx.moveTo(75+((twoval2-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 125);
    ctx.fillText(twoval2,75+((twoval2-minval)/(maxval-minval))*150 - 5,145);
    
    ctx.fillText("1/"+(maxval-minval),75+((twoval1-minval)/(maxval-minval))*150 - 25,90);
    ctx.fillText(twoval2 - twoval1,(75+((twoval1-minval)/(maxval-minval))*150 + 75+((twoval2-minval)/(maxval-minval))*150)/2 - 8,40);
    
    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P("+twoval1+" \\leq x < "+twoval2+") &= \\frac{\\displaystyle 1}{\\displaystyle "+(maxval-minval)+"} \\times " + (twoval2 - twoval1) + " \\\\ &= \\boxed{"+parseFloat(((1/(maxval-minval))*(twoval2 - twoval1)).toFixed(2))+"} \\end{align}$$"

    
    MathJax.typeset();
}

function compuniform8() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    
    var minval = document.getElementById('minval').value
    var maxval = document.getElementById('maxval').value
    var twoval1 = document.getElementById('twoval1').value
    var twoval2 = document.getElementById('twoval2').value
 
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+maxval+"-"+minval+"} & "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(maxval-minval)+"} & "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(75+((twoval1-minval)/(maxval-minval))*150, 130);
    ctx.lineTo(75+((twoval1-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    
    
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    ctx.fillText("1/"+(maxval-minval),10,48);
    ctx.fillText(minval,70,145);
    ctx.fillText(maxval,220,145);
    
    ctx.moveTo(35, 45);
    ctx.lineTo(45, 45);
    ctx.moveTo(75, 135);
    ctx.lineTo(75, 125);
    ctx.moveTo(225, 135);
    ctx.lineTo(225, 125);
    
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(225, 45);
    ctx.lineTo(225, 130);
    
    ctx.moveTo(75+((twoval1-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((twoval1-minval)/(maxval-minval))*150, 125);
    ctx.fillText(twoval1,75+((twoval1-minval)/(maxval-minval))*150 - 5,145);
    ctx.moveTo(75+((twoval2-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 125);
    ctx.fillText(twoval2,75+((twoval2-minval)/(maxval-minval))*150 - 5,145);
    
    ctx.fillText("1/"+(maxval-minval),75+((twoval1-minval)/(maxval-minval))*150 - 25,90);
    ctx.fillText(twoval2 - twoval1,(75+((twoval1-minval)/(maxval-minval))*150 + 75+((twoval2-minval)/(maxval-minval))*150)/2 - 8,40);
    
    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P("+twoval1+" < x \\leq "+twoval2+") &= \\frac{\\displaystyle 1}{\\displaystyle "+(maxval-minval)+"} \\times " + (twoval2 - twoval1) + " \\\\ &= \\boxed{"+parseFloat(((1/(maxval-minval))*(twoval2 - twoval1)).toFixed(2))+"} \\end{align}$$"

    
    MathJax.typeset();
}

function compuniform9() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    
    var minval = document.getElementById('minval').value
    var maxval = document.getElementById('maxval').value
    var twoval1 = document.getElementById('twoval1').value
    var twoval2 = document.getElementById('twoval2').value
 
    document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+maxval+"-"+minval+"} & "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(maxval-minval)+"} & "+minval+" \\leq x \\leq "+maxval+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(75+((twoval1-minval)/(maxval-minval))*150, 130);
    ctx.lineTo(75+((twoval1-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 45);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    
    
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    ctx.fillText("1/"+(maxval-minval),10,48);
    ctx.fillText(minval,70,145);
    ctx.fillText(maxval,220,145);
    
    ctx.moveTo(35, 45);
    ctx.lineTo(45, 45);
    ctx.moveTo(75, 135);
    ctx.lineTo(75, 125);
    ctx.moveTo(225, 135);
    ctx.lineTo(225, 125);
    
    ctx.moveTo(75, 130);
    ctx.lineTo(75, 45);
    ctx.lineTo(225, 45);
    ctx.lineTo(225, 130);
    
    ctx.moveTo(75+((twoval1-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((twoval1-minval)/(maxval-minval))*150, 125);
    ctx.fillText(twoval1,75+((twoval1-minval)/(maxval-minval))*150 - 5,145);
    ctx.moveTo(75+((twoval2-minval)/(maxval-minval))*150, 135);
    ctx.lineTo(75+((twoval2-minval)/(maxval-minval))*150, 125);
    ctx.fillText(twoval2,75+((twoval2-minval)/(maxval-minval))*150 - 5,145);
    
    ctx.fillText("1/"+(maxval-minval),75+((twoval1-minval)/(maxval-minval))*150 - 25,90);
    ctx.fillText(twoval2 - twoval1,(75+((twoval1-minval)/(maxval-minval))*150 + 75+((twoval2-minval)/(maxval-minval))*150)/2 - 8,40);
    
    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P("+twoval1+" < x < "+twoval2+") &= \\frac{\\displaystyle 1}{\\displaystyle "+(maxval-minval)+"} \\times " + (twoval2 - twoval1) + " \\\\ &= \\boxed{"+parseFloat(((1/(maxval-minval))*(twoval2 - twoval1)).toFixed(2))+"} \\end{align}$$"

    
    MathJax.typeset();
}

function snormal() {
    $("#snormal").show();
    $("#snormalprob").show();
    $("#snormalbetween").hide();
}

function compsnormal() {
    probtype = document.getElementById('probtype2').value
    if (probtype == "lessequal" || probtype == "less") {
        compsnormal1() 
    } if (probtype == "greaterequal" || probtype == "greater") {
        compsnormal2() 
    } else if (probtype == "equal") {
        compsnormal3() 
    } else if (probtype == "between" || probtype == "between2" || probtype == "between3" || probtype == "between4") {
        compsnormal4()
    }
}

function compsnormal1() {
    $("#explanation").show(); $("#myCanvas").show();
    
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $$"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    
    var probtype = document.getElementById('probtype2').value
    var lessval = document.getElementById('snormval').value
    var lessvalz = 30+10*lessval
    var exp = 2.71828;
    
    
    
    if (probtype == "lessequal") {
        var sign = "\\leq"
    } else if (probtype == "less") {
        var sign = "<"
    }
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*exp**(-(j*j)/2)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(50 + 3.36*lessvalz, 130);
    ctx.lineTo(50 + 3.36*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 130);
    ctx.lineTo(250, 130);
    
    ctx.fillText("z",255,132);
    ctx.fillText(lessval,40 + 3.36*(30+10*lessval),145);
    
    ctx.moveTo(50 + 3.36*(30+10*lessval), 135);
    ctx.lineTo(50 + 3.36*(30+10*lessval), 125);
    
    
    ctx.fillText("0",148,145);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
        // move to the first point
       ctx.moveTo(points[0].x, points[0].y);
   
   


       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    
    if (zseconddec == 0 || zseconddec == 1 || zseconddec == 2) {
         var valstart = 0; 
         var valend = 4;
    } else if (zseconddec == 3) {
         var valstart = 1; 
         var valend = 5;
    } else if (zseconddec == 4) {
         var valstart = 2; 
         var valend = 6;
    } else if ((zseconddec == 5)) {
         var valstart = 3; 
         var valend = 7;
    } else if (zseconddec == 6) {
         var valstart = 4; 
         var valend = 8;
    } else if (zseconddec == 7 || zseconddec == 8 || zseconddec == 9) {
         var valstart = 5; 
         var valend = 9;
    }
    
    table1 = []
    for (var r = valstart; r < valend + 1; r++){
        table1 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    }
    
    
    
    var table = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "<br>" + table + "$$ P(z"+ sign + lessval + ") = \\boxed{"+ parseFloat(normalcdf(parseFloat(lessval)).toFixed(4)) + "} $$"
    
    MathJax.typeset();
}

function compsnormal2() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $$"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    
    var probtype = document.getElementById('probtype2').value
    var lessval = document.getElementById('snormval').value
    var lessvalz = 30+10*lessval
    var exp = 2.71828;
    
    
    
    if (probtype == "greaterequal") {
        var sign = "\\geq"
    } else if (probtype == "greater") {
        var sign = ">"
    }
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*exp**(-(j*j)/2)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:250 - 3.36*i, y:120 - 220*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(50 + 3.36*lessvalz, 130);
    ctx.lineTo(250, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 130);
    ctx.lineTo(250, 130);
    
    ctx.fillText("z",255,132);
    ctx.fillText(lessval,40 + 3.36*(30+10*lessval),145);
    
    ctx.moveTo(50 + 3.36*(30+10*lessval), 135);
    ctx.lineTo(50 + 3.36*(30+10*lessval), 125);
    
    
    ctx.fillText("0",148,145);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
        // move to the first point
       ctx.moveTo(points[0].x, points[0].y);
   
   


       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    
    if (zseconddec == 0 || zseconddec == 1 || zseconddec == 2) {
         var valstart = 0; 
         var valend = 4;
    } else if (zseconddec == 3) {
         var valstart = 1; 
         var valend = 5;
    } else if (zseconddec == 4) {
         var valstart = 2; 
         var valend = 6;
    } else if ((zseconddec == 5)) {
         var valstart = 3; 
         var valend = 7;
    } else if (zseconddec == 6) {
         var valstart = 4; 
         var valend = 8;
    } else if (zseconddec == 7 || zseconddec == 8 || zseconddec == 9) {
         var valstart = 5; 
         var valend = 9;
    }
    
    table1 = []
    for (var r = valstart; r < valend + 1; r++){
        table1 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    }
    
    
    var table = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "<br>" + table + "$$ \\begin{align} P(z"+ sign + lessval + ") &= 1 - P(z \\leq" + (1-lessval) + ") \\\\ &= 1 - " + parseFloat(normalcdf(parseFloat(lessval)).toFixed(4)) + " \\\\ &= \\boxed{"+ parseFloat((1-normalcdf(parseFloat(lessval))).toFixed(4)) + "} \\end{align} $$"
    
    MathJax.typeset();
}

function compsnormal3() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $$"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    
    var probtype = document.getElementById('probtype2').value
    var lessval = document.getElementById('snormval').value
    var lessvalz = 30+10*lessval
    var exp = 2.71828;
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*exp**(-(j*j)/2)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:250 - 3.36*i, y:120 - 220*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(50 + 3.36*lessvalz, 130);
    
    ctx.stroke();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 130);
    ctx.lineTo(250, 130);
    
    ctx.fillText("z",255,132);
    ctx.fillText(lessval,40 + 3.36*(30+10*lessval),145);
    
    ctx.moveTo(50 + 3.36*(30+10*lessval), 135);
    ctx.lineTo(50 + 3.36*(30+10*lessval), 125);
    
    
    ctx.fillText("0",148,145);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
        // move to the first point
       ctx.moveTo(points[0].x, points[0].y);
   
   


       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    
    if (zseconddec == 0 || zseconddec == 1 || zseconddec == 2) {
         var valstart = 0; 
         var valend = 4;
    } else if (zseconddec == 3) {
         var valstart = 1; 
         var valend = 5;
    } else if (zseconddec == 4) {
         var valstart = 2; 
         var valend = 6;
    } else if ((zseconddec == 5)) {
         var valstart = 3; 
         var valend = 7;
    } else if (zseconddec == 6) {
         var valstart = 4; 
         var valend = 8;
    } else if (zseconddec == 7 || zseconddec == 8 || zseconddec == 9) {
         var valstart = 5; 
         var valend = 9;
    }
    
    table1 = []
    for (var r = valstart; r < valend + 1; r++){
        table1 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    
    var table = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(z = "+ lessval + ") = \\boxed{0} \\end{align} $$"
    
    MathJax.typeset();
}

function compsnormal4() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $$"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    
    var probtype = document.getElementById('probtype2').value
    var probtype1 = document.getElementById('probtype2b1').value
    var probtype2 = document.getElementById('probtype2b2').value
    var lessval = document.getElementById('snormval1').value
    var lessvalz = 30+10*lessval
    var greaterval = document.getElementById('snormval2').value
    var greatervalz = 30+10*greaterval
    var exp = 2.71828;
    
    
    
    if (probtype1 == "lessequal" && probtype2 == "lessequal") {
        var sign1 = "\\leq"; var sign2 = "\\leq"
    } else if (probtype1 == "lessequal" && probtype2 == "less") {
        var sign1 = "\\leq"; var sign2 = "<"
    } else if (probtype1 == "less" && probtype2 == "lessequal") {
        var sign1 = "<"; var sign2 = "\\leq"
    } else if (probtype1 == "less" && probtype2 == "less") {
        var sign1 = "<"; var sign2 = "<"
    }
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*exp**(-(j*j)/2)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:50 + 3.36*lessvalz + 3.36*i, y:120 - 220*f[i+Math.floor(lessvalz)]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(50 + 3.36*greatervalz, 130);
    ctx.lineTo(50 + 3.36*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 130);
    ctx.lineTo(250, 130);
    
    ctx.fillText("z",255,132);
    ctx.fillText(lessval,40 + 3.36*(30+10*lessval),145);
    ctx.fillText(greaterval,40 + 3.36*(30+10*greaterval),145);
    
    ctx.moveTo(50 + 3.36*(30+10*lessval), 135);
    ctx.lineTo(50 + 3.36*(30+10*lessval), 125);
    ctx.moveTo(50 + 3.36*(30+10*greaterval), 135);
    ctx.lineTo(50 + 3.36*(30+10*greaterval), 125);
    
    
    ctx.fillText("0",148,145);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
        // move to the first point
       ctx.moveTo(points[0].x, points[0].y);
   
   


       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    
    if (zseconddec == 0 || zseconddec == 1 || zseconddec == 2) {
         var valstart = 0; 
         var valend = 4;
    } else if (zseconddec == 3) {
         var valstart = 1; 
         var valend = 5;
    } else if (zseconddec == 4) {
         var valstart = 2; 
         var valend = 6;
    } else if ((zseconddec == 5)) {
         var valstart = 3; 
         var valend = 7;
    } else if (zseconddec == 6) {
         var valstart = 4; 
         var valend = 8;
    } else if (zseconddec == 7 || zseconddec == 8 || zseconddec == 9) {
         var valstart = 5; 
         var valend = 9;
    }
    
    table1 = []
    for (var r = valstart; r < valend + 1; r++){
        table1 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    }
    
    var tablea = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    var zvalue2 = toFixing(parseFloat(greaterval),1);
    var zvaluer2 = parseFloat(greaterval).toFixed(2); 
    var zseconddec2 = +zvaluer2.toString().split('').pop();
    
    if (zseconddec2 == 0 || zseconddec2 == 1 || zseconddec2 == 2) {
         var valstart2 = 0; 
         var valend2 = 4;
    } else if (zseconddec2 == 3) {
         var valstart2 = 1; 
         var valend2 = 5;
    } else if (zseconddec2 == 4) {
         var valstart2 = 2; 
         var valend2 = 6;
    } else if ((zseconddec2 == 5)) {
         var valstart2 = 3; 
         var valend2 = 7;
    } else if (zseconddec2 == 6) {
         var valstart2 = 4; 
         var valend2 = 8;
    } else if (zseconddec2 == 7 || zseconddec2 == 8 || zseconddec2 == 9) {
         var valstart2 = 5; 
         var valend2 = 9;
    }
    
    table4 = []
    for (var r = valstart2; r < valend2 + 1; r++){
        table4 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    
    
    if (greaterval < 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            table5 += "<td>" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    } else if (greaterval >= 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            table5 += "<td>" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    }
    
    
    var tableb = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table4+"</tr><tr style='border-top: thin solid'><td>"+zvalue2+"</td>"+table5+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "<br>" + tablea + "<br>" + tableb + "$$ \\begin{align} P(" + lessval + sign1 + " z "+ sign2 + greaterval + ") &= P( z "+ sign2 + greaterval + ") - P( z " + sign1 + lessval + ") \\\\ &= "+ parseFloat(normalcdf(parseFloat(greaterval)).toFixed(4)) + " - "+ parseFloat(normalcdf(parseFloat(lessval)).toFixed(4)) + " \\\\ &= \\boxed{"+ parseFloat(normalcdf(parseFloat(greaterval)) - normalcdf(parseFloat(lessval))).toFixed(4) + "} \\end{align} $$"
    
    MathJax.typeset();
}

function normal() {
    $("#normal").show();
    $("#normalprob").show();
    $("#normalbetween").hide();
}

function compnormal() {
    probtype = document.getElementById('probtype3').value
    if (probtype == "lessequal" || probtype == "less") {
        compnormal1() 
    } if (probtype == "greaterequal" || probtype == "greater") {
        compnormal2() 
    } else if (probtype == "equal") {
        compnormal3() 
    } else if (probtype == "between" || probtype == "between2" || probtype == "between3" || probtype == "between4") {
        compnormal4()
    }
}

function compnormal1() {
    $("#explanation").show(); $("#myCanvas").show();
    
    document.getElementById("descriptiontext").innerHTML = "The normal distribution is the most important continuous distribution. "
    document.getElementById("formulatext").innerHTML = "$$ z = \\frac{x-\\mu}{\\sigma} $$"
    document.getElementById("explanationtext").innerHTML = "To calculate probabilities for a normal distribution, first convert to the standard normal distribution."
    
    var probtype = document.getElementById('probtype3').value
    var expval = document.getElementById('expval').value
    var sd =  document.getElementById('stdev').value
    var lessval0 = document.getElementById('normalval').value
    var lessval = (lessval0 - expval)/sd
    var lessvalz = 30+10*lessval
    var exp = 2.71828; 
    
    if (probtype == "lessequal") {
        var sign = "\\leq"
    } else if (probtype == "less") {
        var sign = "<"
    }
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*exp**(-(j*j)/2)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(50 + 3.36*lessvalz, 130);
    ctx.lineTo(50 + 3.36*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 130);
    ctx.lineTo(250, 130);
    
    ctx.fillText("z",255,132);
    ctx.fillText(lessval.toFixed(2),40 + 3.36*(30+10*lessval),145);
    
    ctx.moveTo(50 + 3.36*(30+10*lessval), 135);
    ctx.lineTo(50 + 3.36*(30+10*lessval), 125);
    
    
    ctx.fillText("0",148,145);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
        // move to the first point
       ctx.moveTo(points[0].x, points[0].y);
   
   


       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    
    if (zseconddec == 0 || zseconddec == 1 || zseconddec == 2) {
         var valstart = 0; 
         var valend = 4;
    } else if (zseconddec == 3) {
         var valstart = 1; 
         var valend = 5;
    } else if (zseconddec == 4) {
         var valstart = 2; 
         var valend = 6;
    } else if ((zseconddec == 5)) {
         var valstart = 3; 
         var valend = 7;
    } else if (zseconddec == 6) {
         var valstart = 4; 
         var valend = 8;
    } else if (zseconddec == 7 || zseconddec == 8 || zseconddec == 9) {
         var valstart = 5; 
         var valend = 9;
    }
    
    table1 = []
    for (var r = valstart; r < valend + 1; r++){
        table1 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    }
    
    document.getElementById("output").innerHTML = "$$\\begin{align} z &=\\frac{"+lessval0+"-"+expval+"}{"+sd+"}\\\\ &=" +lessval.toFixed(2)+ "\\end{align}$$"
    
    var table = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "<br>" + table + "$$ P(z"+ sign + lessval.toFixed(2) + ") = \\boxed{"+ parseFloat(normalcdf(parseFloat(lessval)).toFixed(4)) + "} $$"
    
    MathJax.typeset();
}

function compnormal2() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "The normal distribution is the most important continuous distribution. "
    document.getElementById("formulatext").innerHTML = "$$ z = \\frac{x-\\mu}{\\sigma} $$"
    document.getElementById("explanationtext").innerHTML = "To calculate probabilities for a normal distribution, first convert to the standard normal distribution."
    
    var probtype = document.getElementById('probtype3').value
    var expval = document.getElementById('expval').value
    var sd =  document.getElementById('stdev').value
    var lessval0 = document.getElementById('normalval').value
    var lessval = (lessval0 - expval)/sd
    var lessvalz = 30+10*lessval
    var exp = 2.71828;
    
    
    
    if (probtype == "greaterequal") {
        var sign = "\\geq"
    } else if (probtype == "greater") {
        var sign = ">"
    }
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*exp**(-(j*j)/2)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:250 - 3.36*i, y:120 - 220*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(50 + 3.36*lessvalz, 130);
    ctx.lineTo(250, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 130);
    ctx.lineTo(250, 130);
    
    ctx.fillText("z",255,132);
    ctx.fillText(lessval.toFixed(2),40 + 3.36*(30+10*lessval),145);
    
    ctx.moveTo(50 + 3.36*(30+10*lessval), 135);
    ctx.lineTo(50 + 3.36*(30+10*lessval), 125);
    
    
    ctx.fillText("0",148,145);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
        // move to the first point
       ctx.moveTo(points[0].x, points[0].y);
   
   


       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    
    if (zseconddec == 0 || zseconddec == 1 || zseconddec == 2) {
         var valstart = 0; 
         var valend = 4;
    } else if (zseconddec == 3) {
         var valstart = 1; 
         var valend = 5;
    } else if (zseconddec == 4) {
         var valstart = 2; 
         var valend = 6;
    } else if ((zseconddec == 5)) {
         var valstart = 3; 
         var valend = 7;
    } else if (zseconddec == 6) {
         var valstart = 4; 
         var valend = 8;
    } else if (zseconddec == 7 || zseconddec == 8 || zseconddec == 9) {
         var valstart = 5; 
         var valend = 9;
    }
    
    table1 = []
    for (var r = valstart; r < valend + 1; r++){
        table1 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    }
    
    document.getElementById("output").innerHTML = "$$\\begin{align} z &=\\frac{"+lessval0+"-"+expval+"}{"+sd+"}\\\\ &=" +lessval.toFixed(2)+ "\\end{align}$$"
    
    var table = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "<br>" + table + "$$ \\begin{align} P(z"+ sign + lessval.toFixed(2) + ") &= 1 - P(z \\leq" + (1-lessval.toFixed(2)) + ") \\\\ &= 1 - " + parseFloat(normalcdf(parseFloat(lessval)).toFixed(4)) + " \\\\ &= \\boxed{"+ parseFloat((1-normalcdf(parseFloat(lessval))).toFixed(4)) + "} \\end{align} $$"
    
    MathJax.typeset();
}

function compnormal3() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "The normal distribution is the most important continuous distribution. "
    document.getElementById("formulatext").innerHTML = "$$ z = \\frac{x-\\mu}{\\sigma} $$"
    document.getElementById("explanationtext").innerHTML = "To calculate probabilities for a normal distribution, first convert to the standard normal distribution."
    
    var probtype = document.getElementById('probtype3').value
    var expval = document.getElementById('expval').value
    var sd =  document.getElementById('stdev').value
    var lessval0 = document.getElementById('normalval').value
    var lessval = (lessval0 - expval)/sd
    var lessvalz = 30+10*lessval
    var exp = 2.71828;
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*exp**(-(j*j)/2)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:250 - 3.36*i, y:120 - 220*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(50 + 3.36*lessvalz, 130);
    
    ctx.stroke();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 130);
    ctx.lineTo(250, 130);
    
    ctx.fillText("z",255,132);
    ctx.fillText(lessval.toFixed(2),40 + 3.36*(30+10*lessval),145);
    
    ctx.moveTo(50 + 3.36*(30+10*lessval), 135);
    ctx.lineTo(50 + 3.36*(30+10*lessval), 125);
    
    
    ctx.fillText("0",148,145);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
        // move to the first point
       ctx.moveTo(points[0].x, points[0].y);
   
   


       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    
    if (zseconddec == 0 || zseconddec == 1 || zseconddec == 2) {
         var valstart = 0; 
         var valend = 4;
    } else if (zseconddec == 3) {
         var valstart = 1; 
         var valend = 5;
    } else if (zseconddec == 4) {
         var valstart = 2; 
         var valend = 6;
    } else if ((zseconddec == 5)) {
         var valstart = 3; 
         var valend = 7;
    } else if (zseconddec == 6) {
         var valstart = 4; 
         var valend = 8;
    } else if (zseconddec == 7 || zseconddec == 8 || zseconddec == 9) {
         var valstart = 5; 
         var valend = 9;
    }
    
    table1 = []
    for (var r = valstart; r < valend + 1; r++){
        table1 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    document.getElementById("output").innerHTML = "$$\\begin{align} z &=\\frac{"+lessval0+"-"+expval+"}{"+sd+"}\\\\ &=" +lessval.toFixed(2)+ "\\end{align}$$"
    
    var table = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(z = "+ lessval.toFixed(2) + ") = \\boxed{0} \\end{align} $$"
    
    MathJax.typeset();
}

function compnormal4() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "The normal distribution is the most important continuous distribution. "
    document.getElementById("formulatext").innerHTML = "$$ z = \\frac{x-\\mu}{\\sigma} $$"
    document.getElementById("explanationtext").innerHTML = "To calculate probabilities for a normal distribution, first convert to the standard normal distribution."
    
    var probtype = document.getElementById('probtype3').value
    var probtype1 = document.getElementById('probtype3b1').value
    var probtype2 = document.getElementById('probtype3b2').value
    var expval = document.getElementById('expval').value
    var sd =  document.getElementById('stdev').value
    var lessval0 = document.getElementById('normalval1').value
    var lessval = (lessval0 - expval)/sd
    var lessvalz = 30+10*lessval
    var greaterval0 = document.getElementById('normalval2').value
    var greaterval = (greaterval0 - expval)/sd
    var greatervalz = 30+10*greaterval
    var exp = 2.71828;
    
    
    
    if (probtype1 == "lessequal" && probtype2 == "lessequal") {
        var sign1 = "\\leq"; var sign2 = "\\leq"
    } else if (probtype1 == "lessequal" && probtype2 == "less") {
        var sign1 = "\\leq"; var sign2 = "<"
    } else if (probtype1 == "less" && probtype2 == "lessequal") {
        var sign1 = "<"; var sign2 = "\\leq"
    } else if (probtype1 == "less" && probtype2 == "less") {
        var sign1 = "<"; var sign2 = "<"
    }
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*exp**(-(j*j)/2)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:50 + 3.36*lessvalz + 3.36*i, y:120 - 220*f[i+Math.floor(lessvalz)]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(50 + 3.36*greatervalz, 130);
    ctx.lineTo(50 + 3.36*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 130);
    ctx.lineTo(250, 130);
    
    ctx.fillText("z",255,132);
    ctx.fillText(lessval.toFixed(2),40 + 3.36*(30+10*lessval),145);
    ctx.fillText(greaterval.toFixed(2),40 + 3.36*(30+10*greaterval),145);
    
    ctx.moveTo(50 + 3.36*(30+10*lessval), 135);
    ctx.lineTo(50 + 3.36*(30+10*lessval), 125);
    ctx.moveTo(50 + 3.36*(30+10*greaterval), 135);
    ctx.lineTo(50 + 3.36*(30+10*greaterval), 125);
    
    
    ctx.fillText("0",148,145);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
        // move to the first point
       ctx.moveTo(points[0].x, points[0].y);
   
   


       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    
    if (zseconddec == 0 || zseconddec == 1 || zseconddec == 2) {
         var valstart = 0; 
         var valend = 4;
    } else if (zseconddec == 3) {
         var valstart = 1; 
         var valend = 5;
    } else if (zseconddec == 4) {
         var valstart = 2; 
         var valend = 6;
    } else if ((zseconddec == 5)) {
         var valstart = 3; 
         var valend = 7;
    } else if (zseconddec == 6) {
         var valstart = 4; 
         var valend = 8;
    } else if (zseconddec == 7 || zseconddec == 8 || zseconddec == 9) {
         var valstart = 5; 
         var valend = 9;
    }
    
    table1 = []
    for (var r = valstart; r < valend + 1; r++){
        table1 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    }
    
    var tablea = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    var zvalue2 = toFixing(parseFloat(greaterval),1);
    var zvaluer2 = parseFloat(greaterval).toFixed(2); 
    var zseconddec2 = +zvaluer2.toString().split('').pop();
    
    if (zseconddec2 == 0 || zseconddec2 == 1 || zseconddec2 == 2) {
         var valstart2 = 0; 
         var valend2 = 4;
    } else if (zseconddec2 == 3) {
         var valstart2 = 1; 
         var valend2 = 5;
    } else if (zseconddec2 == 4) {
         var valstart2 = 2; 
         var valend2 = 6;
    } else if ((zseconddec2 == 5)) {
         var valstart2 = 3; 
         var valend2 = 7;
    } else if (zseconddec2 == 6) {
         var valstart2 = 4; 
         var valend2 = 8;
    } else if (zseconddec2 == 7 || zseconddec2 == 8 || zseconddec2 == 9) {
         var valstart2 = 5; 
         var valend2 = 9;
    }
    
    table4 = []
    for (var r = valstart2; r < valend2 + 1; r++){
        table4 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    if (greaterval < 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            table5 += "<td>" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    } else if (greaterval >= 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            table5 += "<td>" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    }
    
    
    document.getElementById("output").innerHTML = "$$\\begin{align} z_{"+lessval0+"} &=\\frac{"+lessval0+"-"+expval+"}{"+sd+"}\\\\ &=" +lessval.toFixed(2)+ "\\end{align}$$ $$\\begin{align} z_{"+greaterval0+"} &=\\frac{"+greaterval0+"-"+expval+"}{"+sd+"}\\\\ &=" +greaterval.toFixed(2)+ "\\end{align}$$"
    
    var tableb = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table4+"</tr><tr style='border-top: thin solid'><td>"+zvalue2+"</td>"+table5+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "<br>" + tablea + "<br>" + tableb + "$$ \\begin{align} P(" + lessval.toFixed(2) + sign1 + " z "+ sign2 + greaterval.toFixed(2) + ") &= P( z "+ sign2 + greaterval.toFixed(2) + ") - P( z " + sign1 + lessval.toFixed(2) + ") \\\\ &= "+ parseFloat(normalcdf(parseFloat(greaterval)).toFixed(4)) + " - "+ parseFloat(normalcdf(parseFloat(lessval)).toFixed(4)) + " \\\\ &= \\boxed{"+ parseFloat(normalcdf(parseFloat(greaterval)) - normalcdf(parseFloat(lessval))).toFixed(4) + "} \\end{align} $$"
    
    MathJax.typeset();
}


function exponential() {
    $("#exponential").show();
    $("#exponentialprob").show();
    $("#exponentialbetween").hide();
}

function compexponential() {
    var probtype = document.getElementById('probtype4').value
    if (probtype == "lessequal" || probtype == "less") {
        compexponential1() 
    } else if (probtype == "greaterequal" || probtype == "greater") {
        compexponential2() 
    } else if (probtype == "equal") {
        compexponential3()
    } else if (probtype == "between" || probtype == "between2" || probtype == "between3" || probtype == "between4") {
        compexponential4()
    }
}

function compexponential1() {
    $("#explanation").show(); $("#myCanvas").show();
    
    document.getElementById("descriptiontext").innerHTML = "The exponential distribution is commonly used when the random variable is time or distance. "
    document.getElementById("formulatext").innerHTML = "$$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$$"
    document.getElementById("explanationtext").innerHTML = "The probability that the random variable will be less than or equal to a value is found by using the formula."
    
    var probtype = document.getElementById('probtype4').value
    var expval = document.getElementById('expval2').value
    var exp = 2.71828;
    var lessval = document.getElementById('exponentialval').value;
    var lessvalz = (lessval / expval) * 15
    var ans = 1 - exp**(-lessval/expval)
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/15)*exp**(-i/15)))
    }
    
    if (probtype == "lessequal") {
        var sign = "\\leq"
    } else if (probtype == "less") {
        var sign = "<"
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:70 + 5*i, y:120 - 1300*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, 70 + 5*lessvalz,120 - 1300*f[lessvalz]);
    
    ctx.lineTo(70 + 5*lessvalz, 130);
    ctx.lineTo(70, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(70, 20);
    ctx.lineTo(70, 130);
    ctx.lineTo(215, 130);
    
    
    ctx.fillText("f(x)",65,15);
    ctx.fillText("x",220,132);
    ctx.fillText(lessval,68 + 5*lessvalz,145);
    
    ctx.moveTo(70 + 5*lessvalz, 135);
    ctx.lineTo(70 + 5*lessvalz, 125);
    
    var points = []
    
    for (i = 0; i < 30; i++) {
      points[i] = {x:70 + 5*i, y:120 - 1300*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points[0].x, points[0].y);
   
   


   for (i = 1; i < points.length - 2; i ++)
   {
      var xc = (points[i].x + points[i + 1].x) / 2;
      var yc = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
   }
 // curve through the last two points
 ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x "+ sign + lessval + ") &= 1 - e^{-"+ lessval + "/"+ expval + "} \\\\ &= \\boxed{"+ parseFloat(ans.toFixed(2)) + "} \\end{align} $$"
    
    MathJax.typeset();
    
}

function compexponential2() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$$"
    
    var probtype = document.getElementById('probtype4').value
    var expval = document.getElementById('expval2').value
    var exp = 2.71828;
    var lessval = document.getElementById('exponentialval').value;
    var lessvalz = (lessval / expval) * 15
    var ans = 1 - exp**(-lessval/expval)
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/15)*exp**(-i/15)))
    }
    
    if (probtype == "greaterequal") {
        var sign = "\\geq"
    } else if (probtype == "greater") {
        var sign = ">"
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < 30; i++) {
      points0[i] = {x:70 + 5*lessvalz + 5*i, y:120 - 1300*f[i+Math.floor(lessvalz)]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, 70 + 5*30,120 - 1300*f[30]);
    
    ctx.lineTo(70 + 5*29, 108);
    
    ctx.lineTo(70 + 5*29, 130);
    ctx.lineTo(70 + 5*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(70, 20);
    ctx.lineTo(70, 130);
    ctx.lineTo(215, 130);
    
    
    ctx.fillText("f(x)",65,15);
    ctx.fillText("x",220,132);
    ctx.fillText(lessval,68 + 5*lessvalz,145);
    
    ctx.moveTo(70 + 5*lessvalz, 135);
    ctx.lineTo(70 + 5*lessvalz, 125);
    
    var points = []
    
    for (i = 0; i < 30; i++) {
      points[i] = {x:70 + 5*i, y:120 - 1300*f[i]}
		}
    
    // move to the first point
       ctx.moveTo(points[0].x, points[0].y);




       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x"+ sign + lessval + ") &= 1 - (1 - e^{-"+ lessval + "/"+ expval + "}) \\\\ &= 1 - "+ parseFloat(ans.toFixed(2)) + "\\\\ &= \\boxed{"+ parseFloat((1-ans).toFixed(2)) + "} \\end{align} $$"
    
    MathJax.typeset();
    
}

function compexponential3() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$$"
    
    var probtype = document.getElementById('probtype4').value
    var expval = document.getElementById('expval2').value
    var exp = 2.71828;
    var lessval = document.getElementById('exponentialval').value;
    var lessvalz = (lessval / expval) * 15
    var ans = 1 - exp**(-lessval/expval)
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/15)*exp**(-i/15)))
    }
    
    if (probtype == "lessequal") {
        var sign = "\\leq"
    } else if (probtype == "less") {
        var sign = "<"
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:70 + 5*i, y:120 - 1300*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, 70 + 5*lessvalz,120 - 1300*f[lessvalz]);
    
    ctx.lineTo(70 + 5*lessvalz, 130);
    
    ctx.stroke();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(70, 20);
    ctx.lineTo(70, 130);
    ctx.lineTo(215, 130);
    
    
    ctx.fillText("f(x)",65,15);
    ctx.fillText("x",220,132);
    ctx.fillText(lessval,68 + 5*lessvalz,145);
    
    ctx.moveTo(70 + 5*lessvalz, 135);
    ctx.lineTo(70 + 5*lessvalz, 125);
    
    var points = []
    
    for (i = 0; i < 30; i++) {
      points[i] = {x:70 + 5*i, y:120 - 1300*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points[0].x, points[0].y);
   
   


   for (i = 1; i < points.length - 2; i ++)
   {
      var xc = (points[i].x + points[i + 1].x) / 2;
      var yc = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
   }
 // curve through the last two points
 ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    
    document.getElementById("output2").innerHTML = "$$  P(x = "+ lessval + ") = \\boxed{0}  $$"
    
    MathJax.typeset();
    
}

function compexponential4() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$$"
    
    var probtype = document.getElementById('probtype4').value
    var probtype1 = document.getElementById('probtype4b1').value
    var probtype2 = document.getElementById('probtype4b2').value
    var expval = document.getElementById('expval2').value
    var exp = 2.71828;
    var lessval = document.getElementById('exponentialval1').value;
    var lessvalz = (lessval / expval) * 15
    var greaterval = document.getElementById('exponentialval2').value;
    var greatervalz = (greaterval / expval) * 15
    var ans1 = 1 - exp**(-lessval/expval)
    var ans2 = 1 - exp**(-greaterval/expval)
    var ans = ans2 - ans1
    
    if (probtype1 == "lessequal" && probtype2 == "lessequal") {
        var sign1 = "\\leq"; var sign2 = "\\leq"
    } else if (probtype1 == "lessequal" && probtype2 == "less") {
        var sign1 = "\\leq"; var sign2 = "<"
    } else if (probtype1 == "less" && probtype2 == "lessequal") {
        var sign1 = "<"; var sign2 = "\\leq"
    } else if (probtype1 == "less" && probtype2 == "less") {
        var sign1 = "<"; var sign2 = "<"
    }
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/15)*exp**(-i/15)))
    }
    
    if (probtype == "greaterequal") {
        var sign = "\\geq"
    } else if (probtype == "greater") {
        var sign = ">"
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:70 + 5*lessvalz + 5*i, y:120 - 1300*f[i+Math.floor(lessvalz)]}
    }
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, 70 + 5*greatervalz,120 - 1300*f[greatervalz]);
    
    ctx.lineTo(70 + 5*greatervalz, 130);
    ctx.lineTo(70 + 5*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(70, 20);
    ctx.lineTo(70, 130);
    ctx.lineTo(215, 130);
    
    
    ctx.fillText("f(x)",65,15);
    ctx.fillText("x",220,132);
    ctx.fillText(lessval,68 + 5*lessvalz,145);
    ctx.fillText(greaterval,68 + 5*greatervalz,145);
    
    ctx.moveTo(70 + 5*lessvalz, 135);
    ctx.lineTo(70 + 5*lessvalz, 125);
    ctx.moveTo(70 + 5*greatervalz, 135);
    ctx.lineTo(70 + 5*greatervalz, 125);
    
    var points = []
    
    for (i = 0; i < 30; i++) {
      points[i] = {x:70 + 5*i, y:120 - 1300*f[i]}
		}
    
    // move to the first point
       ctx.moveTo(points[0].x, points[0].y);




       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke();
    
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P("+ lessval + sign1 + " x " + sign2 + greaterval + ") &= (1 - e^{-"+ greaterval + "/"+ expval + "}) - (1 - e^{-"+ lessval + "/"+ expval + "}) \\\\ &= "+ parseFloat(ans2.toFixed(2)) + " - "+ parseFloat(ans1.toFixed(2)) + " \\\\ &= \\boxed{"+ parseFloat(ans.toFixed(2)) + "} \\end{align} $$"
    
    MathJax.typeset();
    
}

function exampleuniform(){
    document.getElementById('minval').value="120"
    document.getElementById('maxval').value="140"
    document.getElementById('unival').value="135"
    document.getElementById('twoval1').value="128"
    document.getElementById('twoval2').value="136"
}

function exampleuniform2(){
    document.getElementById('minval').value="10"
    document.getElementById('maxval').value="20"
    document.getElementById('unival').value="15"
    document.getElementById('twoval1').value="12"
    document.getElementById('twoval2').value="18"
}

function examplesnormal(){
    document.getElementById('snormval').value="-.71"
    document.getElementById('snormval1').value="-1.75"
    document.getElementById('snormval2').value="-1.04"
}

function examplesnormal2(){
    document.getElementById('snormval').value=".44"
    document.getElementById('snormval1').value=".52"
    document.getElementById('snormval2').value="1.22"
}

function examplenormal(){
    document.getElementById('expval').value="10"
    document.getElementById('stdev').value="2"
    document.getElementById('normalval').value="8"
    document.getElementById('normalval1').value="10"
    document.getElementById('normalval2').value="14"
}

function examplenormal2(){
    document.getElementById('expval').value="15"
    document.getElementById('stdev').value="3.5"
    document.getElementById('normalval').value="18"
    document.getElementById('normalval1').value="12"
    document.getElementById('normalval2').value="18"
}

function exampleexponential(){
    document.getElementById('expval2').value="15"
    document.getElementById('exponentialval').value="12"
    document.getElementById('exponentialval1').value="6"
    document.getElementById('exponentialval2').value="18"
}

function exampleexponential2(){
    document.getElementById('expval2').value="8"
    document.getElementById('exponentialval').value="6"
    document.getElementById('exponentialval1').value="4"
    document.getElementById('exponentialval2').value="6"
}

function uniformprob() {
    var probtype = document.getElementById('probtype').value
    if (probtype == "between") {
        $("#uniformprob").hide();
        $("#uniformbetween").show();
        document.getElementById('probtypeb1').value = "lessequal"
        document.getElementById('probtypeb2').value = "lessequal"
    } else if (probtype == "between2") {
        $("#uniformprob").hide();
        $("#uniformbetween").show();
        document.getElementById('probtypeb1').value = "lessequal"
        document.getElementById('probtypeb2').value = "less"
    } else if (probtype == "between3") {
        $("#uniformprob").hide();
        $("#uniformbetween").show();
        document.getElementById('probtypeb1').value = "less"
        document.getElementById('probtypeb2').value = "lessequal"
    } else if (probtype == "between4") {
        $("#uniformprob").hide();
        $("#uniformbetween").show();
        document.getElementById('probtypeb1').value = "less"
        document.getElementById('probtypeb2').value = "less"
    }
    
}

function uniformback() {
    document.getElementById('probtype').value = "lessequal"
    $("#uniformprob").show();
    $("#uniformbetween").hide();
}

function snormalprob() {
    var probtype = document.getElementById('probtype2').value
    if (probtype == "between") {
        $("#snormalprob").hide();
        $("#snormalbetween").show();
        document.getElementById('probtype2b1').value = "lessequal"
        document.getElementById('probtype2b2').value = "lessequal"
    } else if (probtype == "between2") {
        $("#snormalprob").hide();
        $("#snormalbetween").show();
        document.getElementById('probtype2b1').value = "lessequal"
        document.getElementById('probtype2b2').value = "less"
    } else if (probtype == "between3") {
        $("#snormalprob").hide();
        $("#snormalbetween").show();
        document.getElementById('probtype2b1').value = "less"
        document.getElementById('probtype2b2').value = "lessequal"
    } else if (probtype == "between4") {
        $("#snormalprob").hide();
        $("#snormalbetween").show();
        document.getElementById('probtype2b1').value = "less"
        document.getElementById('probtype2b2').value = "less"
    }
}

function snormalback() {
    document.getElementById('probtype2').value = "lessequal"
    $("#snormalprob").show();
    $("#snormalbetween").hide();
}

function normalprob() {
    var probtype = document.getElementById('probtype3').value
    if (probtype == "between") {
        $("#normalprob").hide();
        $("#normalbetween").show();
        document.getElementById('probtype3b1').value = "lessequal"
        document.getElementById('probtype3b2').value = "lessequal"
    } else if (probtype == "between2") {
        $("#normalprob").hide();
        $("#normalbetween").show();
        document.getElementById('probtype3b1').value = "lessequal"
        document.getElementById('probtype3b2').value = "less"
    } else if (probtype == "between3") {
        $("#normalprob").hide();
        $("#normalbetween").show();
        document.getElementById('probtype3b1').value = "less"
        document.getElementById('probtype3b2').value = "lessequal"
    } else if (probtype == "between4") {
        $("#normalprob").hide();
        $("#normalbetween").show();
        document.getElementById('probtype3b1').value = "less"
        document.getElementById('probtype3b2').value = "less"
    }
    
}

function normalback() {
    document.getElementById('probtype3').value = "lessequal"
    $("#normalprob").show();
    $("#normalbetween").hide();
}

function exponentialprob() {
    var probtype = document.getElementById('probtype4').value
    if (probtype == "between") {
        $("#exponentialprob").hide();
        $("#exponentialbetween").show();
        document.getElementById('probtype4b1').value = "lessequal"
        document.getElementById('probtype4b2').value = "lessequal"
    } else if (probtype == "between2") {
        $("#exponentialprob").hide();
        $("#exponentialbetween").show();
        document.getElementById('probtype4b1').value = "lessequal"
        document.getElementById('probtype4b2').value = "less"
    } else if (probtype == "between3") {
        $("#exponentialprob").hide();
        $("#exponentialbetween").show();
        document.getElementById('probtype4b1').value = "less"
        document.getElementById('probtype4b2').value = "lessequal"
    } else if (probtype == "between4") {
        $("#exponentialprob").hide();
        $("#exponentialbetween").show();
        document.getElementById('probtype4b1').value = "less"
        document.getElementById('probtype4b2').value = "less"
    } 
}

function exponentialback() {
    document.getElementById('probtype4').value = "lessequal"
    $("#exponentialprob").show();
    $("#exponentialbetween").hide();
}



