$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#uniform").hide(); $("#normal").hide(); $("#snormal").hide(); $("#exponential").hide();
$("#lessthan").hide(); $("#greaterthan").hide(); $("#betweentwo").hide();
$("#lessthan2").hide(); $("#greaterthan2").hide(); $("#betweentwo2").hide();
$("#lessthan3").hide(); $("#greaterthan3").hide(); $("#betweentwo3").hide();
$("#lessthan4").hide(); $("#greaterthan4").hide(); $("#betweentwo4").hide();
$("#myCanvas").hide();

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
    $("#lessthan").show();
    probtype = "less"

}

function togreater() {
        $("#lessthan").hide();
        $("#greaterthan").show();
        $("#betweentwo").hide();
        probtype = "greater"
}

function toboth() {
        $("#lessthan").hide();
        $("#greaterthan").hide();
        $("#betweentwo").show();
        probtype = "between"
}

function toless() {
        $("#lessthan").show();
        $("#greaterthan").hide();
        $("#betweentwo").hide();
        probtype = "less"
}

function compuniform() {
    var probtype = document.getElementById("probtype").value
    if (probtype == "lessequal") {
        compuniform1() 
    } else if (probtype == "greaterequal") {
        compuniform2() 
    } else if (probtype == "between") {
        compuniform3()
    } else if (probtype == "less") {
        compuniform4() 
    } else if (probtype == "greater") {
        compuniform5()
    }
}

function compuniform1() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    
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

function compuniform4() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    
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

function compuniform2() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    
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

function compuniform5() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    
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

function compuniform3() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & 0 \\leq x \\leq 1 \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    
    var minval = document.getElementById('minval').value
    var maxval = document.getElementById('maxval').value
    var lessval = document.getElementById('lessval').value
    var greaterval = document.getElementById('greaterval').value
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
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x \\leq "+lessval+") &= \\frac{\\displaystyle 1}{\\displaystyle "+(maxval-minval)+"} \\times " + (twoval2 - twoval1) + " \\\\ &= \\boxed{"+((1/(maxval-minval))*(twoval2 - twoval1))+"} \\end{align}$$"

    
    MathJax.typeset();
}

function normal() {
    $("#normal").show();
    $("#lessthan2").show();
    probtype2 = "less"
}

function togreater2() {
        $("#lessthan2").hide();
        $("#greaterthan2").show();
        $("#betweentwo2").hide();
        probtype2 = "greater"
}

function toboth2() {
        $("#lessthan2").hide();
        $("#greaterthan2").hide();
        $("#betweentwo2").show();
        probtype2 = "both"
}

function toless2() {
        $("#lessthan2").show();
        $("#greaterthan2").hide();
        $("#betweentwo2").hide();
        probtype2 = "less"
}


function compnormal() {
    if (probtype2 == "less") {
        compnormal1() 
    } else if (probtype2 == "greater") {
        compnormal2() 
    } else if (probtype2 == "both") {
        compnormal3()
    }
}



function compnormal1() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ z = \\frac{x - \\mu}{\\sigma} $$"
    
    var expval = document.getElementById('expval').value
    var stdev = document.getElementById('stdev').value
    var lessval = document.getElementById('lessval2').value
    var greaterval = document.getElementById('greaterval2').value
    var twoval1 = document.getElementById('twoval12').value
    var twoval2 = document.getElementById('twoval22').value
    var zval = ((lessval-expval)/stdev);
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} z_{" + lessval + "} &= \\frac{" + lessval + " - " + expval + "}{" + stdev + "} \\\\ &= " + ((lessval-expval)/stdev) + " \\end{align} $$"
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(70, 94);
    ctx.lineTo(70, 130);
    ctx.lineTo(20, 130);
    ctx.lineTo(20, 120);
    ctx.quadraticCurveTo(40, 115, 70, 94);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 120);
    ctx.bezierCurveTo(120, 80, 100, 20, 150, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.bezierCurveTo(200, 20, 170, 80, 280, 120);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.moveTo(70, 135);
    ctx.lineTo(70, 125);
    ctx.stroke();        
    ctx.fillText("0",148,145);
    ctx.fillText("z",285,132);
    ctx.fillText("z = "+zval,68,145);
    
    
    
    var zvalue = toFixing(parseFloat(zval),1);
    var zvaluer = parseFloat(zval).toFixed(2); 
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
    
    document.getElementById("output2").innerHTML = "<br> " + table + "$$ P(z \\leq "+ zval + ") = \\boxed{"+ parseFloat(normalcdf(parseFloat(zval)).toFixed(4)) + "} $$"
    
    MathJax.typeset();
}

function compsnormal2() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & 0 \\leq x \\leq 1 \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    
    var expval = document.getElementById('expval').value
    var stdev = document.getElementById('stdev').value
    var lessval = document.getElementById('lessval2').value
    var greaterval = document.getElementById('greaterval2').value
    var twoval1 = document.getElementById('twoval12').value
    var twoval2 = document.getElementById('twoval22').value
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(70, 94);
    ctx.lineTo(70, 130);
    ctx.lineTo(20, 130);
    ctx.lineTo(20, 120);
    ctx.quadraticCurveTo(40, 115, 70, 94);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 120);
    ctx.bezierCurveTo(120, 80, 100, 20, 150, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.bezierCurveTo(200, 20, 170, 80, 280, 120);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.moveTo(70, 135);
    ctx.lineTo(70, 125);
    ctx.stroke();        
    ctx.fillText("0",148,145);
    ctx.fillText("z",285,132);
    ctx.fillText("z = "+lessval,68,145);
    
    var zvalue = toFixing(parseFloat(greaterval),1);
    var zvaluer = parseFloat(greaterval).toFixed(2); 
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
        table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    
    var table = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    document.getElementById("output2").innerHTML = table + "$$ \\begin{align} P(z \\geq "+ greaterval + ") &= 1 - P(z \\leq "+ greaterval + ") \\\\ &= 1 - "+ normalcdf(parseFloat(greaterval)).toFixed(4) + " \\\\ &= \\boxed{"+ parseFloat((1-normalcdf(parseFloat(greaterval))).toFixed(4)) + "} \\end{align}  $$"
    
    MathJax.typeset();
}

function compnormal3() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & 0 \\leq x \\leq 1 \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    
    var expval = document.getElementById('expval').value
    var stdev = document.getElementById('stdev').value
    var lessval = document.getElementById('lessval2').value
    var greaterval = document.getElementById('greaterval2').value
    var twoval1 = document.getElementById('twoval12').value
    var twoval2 = document.getElementById('twoval22').value
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(70, 94);
    ctx.lineTo(70, 130);
    ctx.lineTo(20, 130);
    ctx.lineTo(20, 120);
    ctx.quadraticCurveTo(40, 115, 70, 94);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 120);
    ctx.bezierCurveTo(120, 80, 100, 20, 150, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.bezierCurveTo(200, 20, 170, 80, 280, 120);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.moveTo(70, 135);
    ctx.lineTo(70, 125);
    ctx.stroke();        
    ctx.fillText("0",148,145);
    ctx.fillText("z",285,132);
    ctx.fillText("z = "+lessval,68,145);
    
    
    
    var zvalue1 = toFixing(parseFloat(twoval1),1);
    var zvaluer1 = parseFloat(twoval1).toFixed(2); 
    var zseconddec1 = +zvaluer1.toString().split('').pop();
    
    if (zseconddec1 == 0 || zseconddec1 == 1 || zseconddec1 == 2) {
         var valstart1 = 0; 
         var valend1 = 4;
    } else if (zseconddec1 == 3) {
         var valstart1 = 1; 
         var valend1 = 5;
    } else if (zseconddec1 == 4) {
         var valstart1 = 2; 
         var valend1 = 6;
    } else if ((zseconddec1 == 5)) {
         var valstart1 = 3; 
         var valend1 = 7;
    } else if (zseconddec1 == 6) {
         var valstart1 = 4; 
         var valend1 = 8;
    } else if (zseconddec1 == 7 || zseconddec1 == 8 || zseconddec1 == 9) {
         var valstart1 = 5; 
         var valend1 = 9;
    }
    
    var table11 = []
    for (var r = valstart1; r < valend1 + 1; r++){
        table11 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    var table31 = []
    for (var r = valstart1; r < valend1 + 1; r++){
        table31 += "<td>" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    var table1 = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table11+"</tr><tr style='border-top: thin solid'><td>"+zvalue1+"</td>"+table31+"</tr></table>"
    

    var zvalue2 = toFixing(parseFloat(twoval2),1);
    var zvaluer2 = parseFloat(twoval2).toFixed(2); 
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
    
    var table12 = []
    for (var r = valstart2; r < valend2 + 1; r++){
        table12 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    var table32 = []
    for (var r = valstart2; r < valend2 + 1; r++){
        table32 += "<td>" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    
    var table2 = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table12+"</tr><tr style='border-top: thin solid'><td>"+zvalue2+"</td>"+table32+"</tr></table>"
    
    
    
    document.getElementById("output2").innerHTML = "<br>" + table1 + "<br>" + table2 + "$$ \\begin{align} P("+ twoval1 + "\\leq z \\leq"+ twoval2 + ") &= P(z \\leq "+ twoval2 + ") - P(z \\leq "+ twoval1 + ") \\\\ &= "+ normalcdf(parseFloat(twoval2)).toFixed(4) + " - " + normalcdf(parseFloat(twoval1)).toFixed(4) + " \\\\ &= \\boxed{"+ parseFloat((normalcdf(parseFloat(twoval2)).toFixed(4) - normalcdf(parseFloat(twoval1))) .toFixed(4)) + "} \\end{align}  $$"
    
    MathJax.typeset();
}



function snormal() {
    $("#snormal").show();
    $("#lessthan3").show();
    probtype3 = "less"
}

function togreater3() {
        $("#lessthan3").hide();
        $("#greaterthan3").show();
        $("#betweentwo3").hide();
        probtype3 = "greater"
}

function toboth3() {
        $("#lessthan3").hide();
        $("#greaterthan3").hide();
        $("#betweentwo3").show();
        probtype3 = "both"
}

function toless3() {
        $("#lessthan3").show();
        $("#greaterthan3").hide();
        $("#betweentwo3").hide();
        probtype3 = "less"
}


function compsnormal() {
    if (probtype3 == "less") {
        compsnormal1() 
    } else if (probtype3 == "greater") {
        compsnormal2() 
    } else if (probtype3 == "both") {
        compsnormal3()
    }
}

function compsnormal1() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & 0 \\leq x \\leq 1 \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    
    var lessval = document.getElementById('lessval3').value
    var greaterval = document.getElementById('greaterval3').value
    var twoval1 = document.getElementById('twoval13').value
    var twoval2 = document.getElementById('twoval23').value
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
    
    document.getElementById("output2").innerHTML = "<br>" + table + "$$ P(z \\leq "+ lessval + ") = \\boxed{"+ parseFloat(normalcdf(parseFloat(lessval)).toFixed(4)) + "} $$"
    
    MathJax.typeset();
}

function compsnormal2() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & 0 \\leq x \\leq 1 \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    
    var lessval = document.getElementById('lessval3').value
    var greaterval = document.getElementById('greaterval3').value
    var twoval1 = document.getElementById('twoval13').value
    var twoval2 = document.getElementById('twoval23').value
    var exp = 2.71828; 
    var gval = parseFloat(greaterval)
    var greatervalz = 30+10*gval
    var gvalz = parseFloat(greatervalz)
    var gvalzp1 = parseFloat(gvalz + 1)
    
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
    
    for (i = gvalz; i < 60; i++) {
      points0[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[gvalz].x, points0[gvalz].y);


   for (i = gvalzp1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[60],points0[60]);
    
    ctx.lineTo(249, 130);
    ctx.lineTo(50 + 3.36*gvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 130);
    ctx.lineTo(249, 130);
    
    ctx.fillText("z",255,132);
    ctx.fillText(greaterval,48 + 3.36*(30+10*gval),145);
    
    ctx.moveTo(50 + 3.36*(30+10*greaterval), 135);
    ctx.lineTo(50 + 3.36*(30+10*greaterval), 125);
    
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
    
    var zvalue = toFixing(parseFloat(greaterval),1);
    var zvaluer = parseFloat(greaterval).toFixed(2); 
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
        table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    
    var table = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    document.getElementById("output2").innerHTML = table + "$$ \\begin{align} P(z \\geq "+ greaterval + ") &= 1 - P(z \\leq "+ greaterval + ") \\\\ &= 1 - "+ normalcdf(parseFloat(greaterval)).toFixed(4) + " \\\\ &= \\boxed{"+ parseFloat((1-normalcdf(parseFloat(greaterval))).toFixed(4)) + "} \\end{align}  $$"
    
    MathJax.typeset();
}

function compsnormal3() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & 0 \\leq x \\leq 1 \\\\ 0 & \\text{elsewhere} \\end{cases}$$"
    
    var lessval = document.getElementById('lessval3').value
    var greaterval = document.getElementById('greaterval3').value
    var twoval1 = document.getElementById('twoval13').value
    var twoval2 = document.getElementById('twoval23').value
    
    var twoval1z = 30+10*parseFloat(twoval1)
    var twoval2z = 30+10*parseFloat(twoval2)
    var twoval1zp1 = parseFloat(twoval1z + 1)
    var twoval2zp1 = parseFloat(twoval2z + 1)
    
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
    
    for (i = twoval1z; i < twoval2z; i++) {
      points0[i] = {x:50 + 3.36*i, y:120 - 220*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[twoval1z].x, points0[twoval1z].y);


   for (i = twoval1zp1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[twoval2z],points0[twoval2z]);
    
    ctx.lineTo(50 + 3.36*twoval2z, 130);
    ctx.lineTo(50 + 3.36*twoval1z, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 130);
    ctx.lineTo(249, 130);
    
    ctx.fillText("z",255,132);
    ctx.fillText(twoval1,48 + 3.36*(30+10*twoval1),145);
    ctx.fillText(twoval2,48 + 3.36*(30+10*twoval2),145);
    
    ctx.moveTo(50 + 3.36*(30+10*twoval1), 135);
    ctx.lineTo(50 + 3.36*(30+10*twoval1), 125);
    ctx.moveTo(50 + 3.36*(30+10*twoval2), 135);
    ctx.lineTo(50 + 3.36*(30+10*twoval2), 125);
    
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
    
    
    
    var zvalue1 = toFixing(parseFloat(twoval1),1);
    var zvaluer1 = parseFloat(twoval1).toFixed(2); 
    var zseconddec1 = +zvaluer1.toString().split('').pop();
    
    if (zseconddec1 == 0 || zseconddec1 == 1 || zseconddec1 == 2) {
         var valstart1 = 0; 
         var valend1 = 4;
    } else if (zseconddec1 == 3) {
         var valstart1 = 1; 
         var valend1 = 5;
    } else if (zseconddec1 == 4) {
         var valstart1 = 2; 
         var valend1 = 6;
    } else if ((zseconddec1 == 5)) {
         var valstart1 = 3; 
         var valend1 = 7;
    } else if (zseconddec1 == 6) {
         var valstart1 = 4; 
         var valend1 = 8;
    } else if (zseconddec1 == 7 || zseconddec1 == 8 || zseconddec1 == 9) {
         var valstart1 = 5; 
         var valend1 = 9;
    }
    
    var table11 = []
    for (var r = valstart1; r < valend1 + 1; r++){
        table11 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    var table31 = []
    for (var r = valstart1; r < valend1 + 1; r++){
        table31 += "<td>" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    var table1 = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table11+"</tr><tr style='border-top: thin solid'><td>"+zvalue1+"</td>"+table31+"</tr></table>"
    

    var zvalue2 = toFixing(parseFloat(twoval2),1);
    var zvaluer2 = parseFloat(twoval2).toFixed(2); 
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
    
    var table12 = []
    for (var r = valstart2; r < valend2 + 1; r++){
        table12 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    var table32 = []
    for (var r = valstart2; r < valend2 + 1; r++){
        table32 += "<td>" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    
    var table2 = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table12+"</tr><tr style='border-top: thin solid'><td>"+zvalue2+"</td>"+table32+"</tr></table>"
    
    
    
    document.getElementById("output2").innerHTML = "<br>" + table1 + "<br>" + table2 + "$$ \\begin{align} P("+ twoval1 + "\\leq z \\leq"+ twoval2 + ") &= P(z \\leq "+ twoval2 + ") - P(z \\leq "+ twoval1 + ") \\\\ &= "+ normalcdf(parseFloat(twoval2)).toFixed(4) + " - " + normalcdf(parseFloat(twoval1)).toFixed(4) + " \\\\ &= \\boxed{"+ parseFloat((normalcdf(parseFloat(twoval2)).toFixed(4) - normalcdf(parseFloat(twoval1))) .toFixed(4)) + "} \\end{align}  $$"
    
    MathJax.typeset();
}





function exponential() {
    $("#exponential").show();
    $("#lessthan4").show();
    probtype4 = "less"
}

function togreater4() {
        $("#lessthan4").hide();
        $("#greaterthan4").show();
        $("#betweentwo4").hide();
        probtype4 = "greater"
}

function toboth4() {
        $("#lessthan4").hide();
        $("#greaterthan4").hide();
        $("#betweentwo4").show();
        probtype4 = "both"
}

function toless4() {
        $("#lessthan4").show();
        $("#greaterthan4").hide();
        $("#betweentwo4").hide();
        probtype4 = "less"
}

function compexponential() {
    if (probtype4 == "less") {
        compexponential1() 
    } else if (probtype4 == "greater") {
        compexponential2() 
    } else if (probtype4 == "both") {
        compexponential3()
    }
}

function compexponential1() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$$"
    
    var expval = document.getElementById('expval2').value
    var lessval = document.getElementById('lessval4').value;
    var greaterval = document.getElementById('greaterval4').value
    var twoval1 = document.getElementById('twoval14').value
    var twoval2 = document.getElementById('twoval24').value
    var exp = 2.71828;
    var ans = 1 - exp**(-lessval/expval)
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/expval)*exp**(-i/expval)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessval; i++) {
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
    
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, 70 + 5*lessval,120 - 1300*f[lessval]);
    
    ctx.lineTo(70 + 5*lessval, 130);
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
    ctx.fillText(lessval,68 + 5*lessval,145);
    
    ctx.moveTo(70 + 5*lessval, 135);
    ctx.lineTo(70 + 5*lessval, 125);
    
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
    
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x \\leq "+ lessval + ") &= 1 - e^{-"+ lessval + "/"+ expval + "} \\\\ &= \\boxed{"+ parseFloat(ans.toFixed(2)) + "} \\end{align} $$"
    
    MathJax.typeset();
    
}

function compexponential2() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$$"
    
    var expval = document.getElementById('expval2').value
    var lessval = document.getElementById('lessval4').value;
    var greaterval = document.getElementById('greaterval4').value;
    var gval = parseFloat(greaterval); var gvalp1 = parseFloat(gval+1);
    var twoval1 = document.getElementById('twoval14').value
    var twoval2 = document.getElementById('twoval24').value
    var exp = 2.71828;
    var ans = 1 - exp**(-lessval/expval)
    var ans = exp**(-lessval/expval)
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/expval)*exp**(-i/expval)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = gval; i < 30; i++) {
      points0[i] = {x:70 + 5*i, y:120 - 1300*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[gval].x, points0[gval].y);


   for (i = gvalp1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    
    ctx.lineTo(70 + 5*30 - 5, 130);
    ctx.lineTo(70 + 5*greaterval, 130);
    
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
    ctx.fillText(greaterval,68 + 5*greaterval,145);
    
    ctx.moveTo(70 + 5*greaterval, 135);
    ctx.lineTo(70 + 5*greaterval, 125);
    
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
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x \\geq "+ greaterval + ") &= 1 - P(x \\leq "+ greaterval + ") \\\\ &= 1 - (1 - e^{-"+ lessval + "/"+ expval + "}) \\\\ &= \\boxed{"+ parseFloat(ans.toFixed(2)) + "} \\end{align} $$"
    
    MathJax.typeset();

}

function compexponential3() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("explanationtext").innerHTML = "$$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$$"
    
    var expval = document.getElementById('expval2').value
    var lessval = document.getElementById('lessval4').value;
    var greaterval = document.getElementById('greaterval4').value;
    var gval = parseFloat(greaterval); var gvalp1 = parseFloat(gval+1);
    var twoval1 = document.getElementById('twoval14').value
    var twoval2 = document.getElementById('twoval24').value
    var two1 = parseFloat(twoval1); var two1p1 = parseFloat(two1 + 1);
    var two2 = parseFloat(twoval2); var two2p1 = parseFloat(two2 + 1);
    var exp = 2.71828;
    var ans = (1 - exp**(-two2/expval)) - (1 - exp**(-two1/expval))
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/expval)*exp**(-i/expval)))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = two1; i < two2; i++) {
      points0[i] = {x:70 + 5*i, y:120 - 1300*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[two1].x, points0[two1].y);


   for (i = two1p1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, 70 + 5*two2,120 - 1300*f[two2]);
    
    ctx.lineTo(70 + 5*two2, 130);
    ctx.lineTo(70 + 5*two1, 130);
    
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
    ctx.fillText(two1,68 + 5*two1,145);
    ctx.fillText(two2,68 + 5*two2,145);
    
    ctx.moveTo(70 + 5*two1, 135);
    ctx.lineTo(70 + 5*two1, 125);
    ctx.moveTo(70 + 5*two2, 135);
    ctx.lineTo(70 + 5*two2, 125);
    
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
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P("+ twoval1 + " \\leq x \\leq "+ twoval2 + ") &= P(x \\leq "+ twoval2 + ") - P(x \\leq "+ twoval1 + ") \\\\ &= (1 - e^{-"+ twoval2 + "/"+ expval + "}) - (1 - e^{-"+ twoval1 + "/"+ expval + "}) \\\\ &= \\boxed{"+ parseFloat(ans.toFixed(2)) + "} \\end{align} $$"
    
    MathJax.typeset();
}





function exampleuniform(){
    document.getElementById('minval').value="120"
    document.getElementById('maxval').value="140"
    document.getElementById('unival').value="135"
    document.getElementById('twoval1').value="128"
    document.getElementById('twoval2').value="136"
}

function examplesnormal(){
    document.getElementById('lessval3').value="-.71"
    document.getElementById('greaterval3').value=".44"
    document.getElementById('twoval13').value="-1.98"
    document.getElementById('twoval23').value=".49"
}

function examplenormal(){
    document.getElementById('expval').value="10"
    document.getElementById('stdev').value="2"
    document.getElementById('lessval2').value="8"
    document.getElementById('greaterval2').value="11"
    document.getElementById('twoval12').value="10"
    document.getElementById('twoval22').value="14"
}

function exampleexponential(){
    document.getElementById('expval2').value="15"
    document.getElementById('lessval4').value="6"
    document.getElementById('greaterval4').value="12"
    document.getElementById('twoval14').value="6"
    document.getElementById('twoval24').value="18"
}

