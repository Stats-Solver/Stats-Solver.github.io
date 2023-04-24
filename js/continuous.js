$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide(); 
$("#uniform").hide(); $("#normal").hide(); $("#standard").hide(); $("#exponential").hide();
$("#lessthan").hide(); $("#greaterthan").hide(); $("#betweentwo").hide();
$("#lessthan2").hide(); $("#greaterthan2").hide(); $("#betweentwo2").hide();
$("#lessthan3").hide(); $("#greaterthan3").hide(); $("#betweentwo3").hide();
$("#lessthan4").hide(); $("#greaterthan4").hide(); $("#betweentwo4").hide();
$("#myCanvas").hide();
$("#uniformbetween").hide(); $("#standardbetween").hide(); $("#normalbetween").hide(); $("#exponentialbetween").hide(); 
$("#uniformexamples").show(); $("#standardexamples").hide(); $("#normalexamples").hide(); $("#exponentialexamples").hide(); 
$("#tdistexamples").hide(); $("#approxexamples").hide(); $("#fdistexamples").hide(); $("#chiexamples").hide();
$("#uniform").show(); $("#uniformab").hide(); 
$("#uniformprobability").hide(); $("#uniformexpected").hide(); $("#uniformvariance").hide(); $("#uniformstandard").hide(); $("#uniformpdf").hide();
$("#standardprob").show(); $("#standardarea").hide(); $("#standardarea2").hide();  $("#standardcurve").hide();
$("#normalprob").show(); $("#normalarea").hide(); $("#normalcurve").hide();
$("#tdistribution").hide(); $("#approximation").hide(); $("#fdistribution").hide(); $("#chidistribution").hide();
$("#myCanvas0").hide(); $("#581773186").hide();
$("#contoutputs").hide();

normaltype = "probability"; standardtype = "probability"; approxtype = "probability"; uniformtype = "probability"; tdisttype = "probability"
exponentialinput = "mu"; exponentialtype = "probability"

function fixnum(i){
    return parseFloat(i.toFixed(2))
}

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

function toFixing(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("myCanvas0");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas3");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas4");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

how1(); 
how2(); 
how3(); 
how4(); 

function how1(){
    var c = document.getElementById("howCanvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Uniform Probability Distribution",80,10);
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    
    
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    ctx.fillText("1",15,42);
    ctx.fillText("b-a",12,55);
    ctx.fillText("a",72,145);
    ctx.fillText("b",222,145);
    
    ctx.moveTo(10, 45);
    ctx.lineTo(30, 45);
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
    
    
    ctx.stroke();
}

function how2(){
    var exp = 2.71828;

    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("howCanvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Probability Distribution",80,10);
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.fillText("x",285,132);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("μ",148,145);
    
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
}

function how3(){
    var exp = 2.71828;

    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("howCanvas3");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Approximation of Binomial",75,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.fillStyle = "lightgray";
    ctx.beginPath();
    ctx.moveTo(100, 130);
    ctx.lineTo(100, 70);
    ctx.lineTo(116, 50);
    ctx.lineTo(116, 130);
    ctx.stroke(); 
    ctx.fill(); 
    
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.fillText("x",285,132);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("μ",148,145);
    
    ctx.moveTo(100, 135);
    ctx.lineTo(100, 125);
    
    ctx.moveTo(116, 135);
    ctx.lineTo(116, 125);
    
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
}

function how4() {
    var exp = 2.71828;
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/15)*Math.pow(exp,(-i/15))))
    }
    
    var c = document.getElementById("howCanvas4");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 200);
    
    ctx.fillText("Exponential Probability Distribution",75,20);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 40);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    
    
    ctx.fillText("f(x)",45,35);
    ctx.fillText("x",255,182);
    
    
    var points = []
    
    for (i = 0; i < 30; i++) {
      points[i] = {x:50 + 6.75*i, y:170 - 1700*f[i]}
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
    
    
    //MathJax.typeset();
    
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

function LogGamma(Z) {
	with (Math) {
		var S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
		var LG= (Z-.5)*log(Z+4.5)-(Z+4.5)+log(S*2.50662827465);
	}
	return LG
}

function Betinc(X,A,B) {
	var A0=0;
	var B0=1;
	var A1=1;
	var B1=1;
	var M9=0;
	var A2=0;
	var C9;
	while (Math.abs((A1-A2)/A1)>.00001) {
		A2=A1;
		C9=-(A+M9)*(A+B+M9)*X/(A+2*M9)/(A+2*M9+1);
		A0=A1+C9*A0;
		B0=B1+C9*B0;
		M9=M9+1;
		C9=M9*(B-M9)*X/(A+2*M9-1)/(A+2*M9);
		A1=A0+C9*A1;
		B1=B0+C9*B1;
		A0=A0/B1;
		B0=B0/B1;
		A1=A1/B1;
		B1=1;
	}
	return A1/A
}

function compute(X,df) {
    with (Math) {
		if (df<=0) {
			alert("Degrees of freedom must be positive")
		} else {
			A=df/2;
			S=A+.5;
			Z=df/(df+X*X);
			BT=exp(LogGamma(S)-LogGamma(.5)-LogGamma(A)+A*log(Z)+.5*log(1-Z));
			if (Z<(A+1)/(S+2)) {
				betacdf=BT*Betinc(Z,A,.5)
			} else {
				betacdf=1-BT*Betinc(1-Z,.5,A)
			}
			if (X<0) {
				tcdf=betacdf/2
			} else {
				tcdf=1-betacdf/2
			}
		}
		tcdf=round(tcdf*100000)/100000;
	}
    return tcdf;
}

function showstuff(){
    $("#uniformexamples").hide(); $("#standardexamples").hide(); $("#normalexamples").hide(); $("#exponentialexamples").hide(); 
    $("#uniform").hide(); $("#normal").hide(); $("#standard").hide(); $("#exponential").hide(); $("#tdistribution").hide();
    $("#approximation").hide(); $("#fdistribution").hide(); $("#chidistribution").hide();
    $("#lessthan").hide(); $("#greaterthan").hide(); $("#betweentwo").hide();
    $("#lessthan2").hide(); $("#greaterthan2").hide(); $("#betweentwo2").hide();
    $("#lessthan3").hide(); $("#greaterthan3").hide(); $("#betweentwo3").hide();
    $("#lessthan4").hide(); $("#greaterthan4").hide(); $("#betweentwo4").hide();
    $("#explanation").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    //$("#output").empty(); $("#output2").empty(); $("#myCanvas0").hide(); $("#myCanvas").hide();
    var x = document.getElementById("stat").value;
    if (x == "uniform"){
        $("#uniform").show();$("#uniformprob").show();$("#uniformbetween").hide();$("#uniformab").show(); 
        $("#uniformexamples").show(); $("#standardexamples").hide(); $("#normalexamples").hide(); $("#exponentialexamples").hide();
        $("#tdistexamples").hide(); $("#approxexamples").hide(); $("#fdistexamples").hide(); $("#chiexamples").hide();
        $("#uniformprobability").show();
    } else if (x == "normal"){
        $("#normal").show(); $("#normalprob").show(); $("#normalbetween").hide();
        $("#uniformexamples").hide(); $("#standardexamples").hide(); $("#normalexamples").show(); $("#exponentialexamples").hide(); 
        $("#tdistexamples").hide(); $("#approxexamples").hide(); $("#fdistexamples").hide(); $("#chiexamples").hide();
    } else if (x == "standard") {
        $("#standard").show(); $("#standardprob").show(); $("#standardbetween").hide();
        $("#standardarea").hide(); $("#standardarea2").hide(); $("#standardcurve").hide();
        $("#uniformexamples").hide(); $("#standardexamples").show(); $("#normalexamples").hide(); $("#exponentialexamples").hide(); 
        $("#tdistexamples").hide(); $("#approxexamples").hide(); $("#fdistexamples").hide(); $("#chiexamples").hide();
    } else if (x == "exponential") {
        $("#exponential").show(); $("#exponentialprob").show(); $("#exponentialbetween").hide(); $("#exponentialpdfinput").hide();
        $("#uniformexamples").hide(); $("#standardexamples").hide(); $("#normalexamples").hide(); $("#exponentialexamples").show(); 
        $("#tdistexamples").hide(); $("#approxexamples").hide(); $("#fdistexamples").hide(); $("#chiexamples").hide();
        $("#exponentialpdf").hide(); $("#exponentialprobformula").hide(); $("#exponentialcurve").hide();
    } else if (x == "tdistribution") {
        tdistribution()
        $("#uniformexamples").hide(); $("#standardexamples").hide(); $("#normalexamples").hide(); $("#exponentialexamples").hide(); 
        $("#tdistexamples").show(); $("#approxexamples").hide(); $("#fdistexamples").hide(); $("#chiexamples").hide();
    } else if (x == "approximation") {
        approximation()
        $("#uniformexamples").hide(); $("#standardexamples").hide(); $("#normalexamples").hide(); $("#exponentialexamples").hide(); 
        $("#tdistexamples").hide(); $("#approxexamples").show(); $("#fdistexamples").hide(); $("#chiexamples").hide();
    } else if (x == "fdistribution") {
        fdistribution()
        $("#uniformexamples").hide(); $("#standardexamples").hide(); $("#normalexamples").hide(); $("#exponentialexamples").hide(); 
        $("#tdistexamples").hide(); $("#approxexamples").hide(); $("#fdistexamples").show(); $("#chiexamples").hide();
    } else if (x == "chisquare") {
        chisquare()
        $("#uniformexamples").hide(); $("#standardexamples").hide(); $("#normalexamples").hide(); $("#exponentialexamples").hide(); 
        $("#tdistexamples").hide(); $("#approxexamples").hide(); $("#fdistexamples").hide(); $("#chiexamples").show();
    } else{
        $("#uniform").show(); $("#uniformab").hide();
        $("#uniformexamples").show(); $("#standardexamples").hide(); $("#normalexamples").hide(); $("#exponentialexamples").hide(); 
        $("#tdistexamples").hide(); $("#approxexamples").hide(); $("#fdistexamples").hide(); $("#chiexamples").hide();
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function stat(){
    $("#contoutputs").show(); $("#how").hide(); $("#output2").show(); $("#output0").hide();
    $("#output").empty(); $("#581773186").show();
    var x = document.getElementById("stat").value;
    if (x == "uniform"){
        uniform()
    } else if (x == "standard") {
        standard()
    }  else if (x == "normal"){
        normal()
    } else if (x == "approximation") {
        $("#myCanvas0").show(); $("#myCanvas").show(); 
        compapprox()
    } else if (x == "exponential") {
        exponential()
    } else if (x == "tdistribution") {
        comptdist()
    } else if (x == "fdistribution") {
        compfdist()
    } else if (x == "chisquare") {
        compchi()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// UNIFORM DISTRIBUTION////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function uniform(){
    if (uniformtype == "expected"){
        uniformexpected()
    } else if (uniformtype == "variance"){
        uniformvariance()
    } else if (uniformtype == "standard"){
        uniformstandard()
    } else if (uniformtype == "probability"){
        compuniformprob()
    } else if (uniformtype == "pdf"){
        uniformpdf()
    }
}

function compuniformprob() {
    var probtype = document.getElementById("probtype").value
    var probtypeb1 = document.getElementById("probtypeb1").value
    var probtypeb2 = document.getElementById("probtypeb2").value
    if (probtype == "lessequal" || probtype == "less") {
        uniformless() 
    } else if (probtype == "greaterequal" || probtype == "greater") {
        uniformgreater() 
    } else if (probtype == "equal") {
        uniformequal()
    } else {
        uniformbetween()
    }
}

function switchpdfu() {
    $("#uniformprob").hide(); 
    $("#uniformprobability").hide(); $("#uniformexpected").hide(); $("#uniformvariance").hide(); $("#uniformstandard").hide(); $("#uniformpdf").show(); 
    uniformtype = "pdf"
}

function switchexpectedu() {
    $("#uniformprob").hide(); 
    $("#uniformprobability").hide(); $("#uniformexpected").show(); $("#uniformvariance").hide(); $("#uniformstandard").hide(); $("#uniformpdf").hide();
    uniformtype = "expected"
}
 
function switchvarianceu() {
    $("#uniformprob").hide(); 
    $("#uniformprobability").hide(); $("#uniformexpected").hide(); $("#uniformvariance").show(); $("#uniformstandard").hide(); $("#uniformpdf").hide();
    uniformtype = "variance"
}

function switchstandardu() {
    $("#uniformprob").hide(); 
    $("#uniformprobability").hide(); $("#uniformexpected").hide(); $("#uniformvariance").hide(); $("#uniformstandard").show(); $("#uniformpdf").hide();
    uniformtype = "standard"
}
 
function switchprobabilityu() {
    $("#uniformprob").show(); 
    $("#uniformprobability").show(); $("#uniformexpected").hide(); $("#uniformvariance").hide(); $("#uniformstandard").hide(); $("#uniformpdf").hide();
    uniformtype = "probability"
}

function uniformpdf() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    var min = document.getElementById('minval').value; var max = document.getElementById('maxval').value
    if ((max-min) > 1) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\  &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+max+"-"+min+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(max-min)+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\  &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+max+"-"+min+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} "+1/(max-min)+" & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$ "
    }
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    ctx.fillText("f(x)",35,15);
    ctx.fillText("x",265,132);
    if ((max-min) > 1) {
        ctx.fillText("1/"+(max-min),10,48);
    } else {
        ctx.fillText(1/(max-min),25,48);
    }
    ctx.fillText(min,70,145);
    ctx.fillText(max,220,145);
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
    ctx.stroke();
    document.getElementById("output2").innerHTML = "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function uniformexpected() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#output2").hide();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$ E(x) = \\dfrac{a+b}{2} $"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    var minval = document.getElementById('minval').value; var maxval = document.getElementById('maxval').value
    document.getElementById("output").innerHTML = "$$ \\begin{align} E(x) &= \\frac{a+b}{2} \\\\ &= \\frac{" + parseFloat(minval)+ "+" + parseFloat(maxval) + "}{" + 2 + "} \\\\ &= \\boxed{" + parseFloat(((parseFloat(minval)+parseFloat(maxval))/2).toFixed(2)) + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function uniformvariance() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#output2").hide();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$ \\text{Var}(x) = \\dfrac{(b-a)^2}{12} $"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    var minval = document.getElementById('minval').value; var maxval = document.getElementById('maxval').value
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Var}(x) &= \\dfrac{(b-a)^2}{12} \\\\ &= \\frac{(" + maxval + "-" + minval + ")^2}{12} \\\\ &= \\boxed{" + parseFloat(((maxval-minval)*(maxval-minval)/12).toFixed(2)) + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function uniformstandard() {
    $("#explanation").show(); $("#output").show(); $("#myCanvas").hide(); $("#output2").hide();
    document.getElementById("explanationtext").innerHTML = "$$ \\text{Var}(x) = \\frac{(b-a)^2}{12} $$"
    var minval = document.getElementById('minval').value; var maxval = document.getElementById('maxval').value
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\sigma &= \\sqrt{\\text{Var}(x)} \\\\ &= \\sqrt{" + parseFloat(((maxval-minval)*(maxval-minval)/12).toFixed(2)) + "} \\\\ &= \\boxed{" + parseFloat((Math.sqrt((maxval-minval)*(maxval-minval)/12)).toFixed(2)) + "} \\end{align} $$  <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function uniformless() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    var min = parseFloat(document.getElementById('minval').value); 
    var max = parseFloat(document.getElementById('maxval').value); 
    var val0 = parseFloat(document.getElementById('unival').value); 
    var val = Math.max(Math.min(val0, max), min)
    var probtype = document.getElementById("probtype").value
    if (probtype == "lessequal"){
        var sign = "\\leq"
    } else if (probtype == "less") {
        var sign = "<"
    }
    if ((max-min) > 1) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\  &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+max+"-"+min+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(max-min)+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\  &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+max+"-"+min+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} "+1/(max-min)+" & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    }
    var c = document.getElementById("myCanvas"); 
    var ctx = c.getContext("2d"); 
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray'; 
    ctx.beginPath();
    ctx.moveTo(75, 130); 
    ctx.lineTo(75, 45);
    ctx.lineTo(75+((val-min)/(max-min))*150, 45);
    ctx.lineTo(75+((val-min)/(max-min))*150, 130);
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
    if ((max-min) > 1) {
        ctx.fillText("1/"+(max-min),10,48);
    } else {
        ctx.fillText(1/(max-min),25,48);
    }
    ctx.fillText(min,70,145); 
    ctx.fillText(max,220,145);
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
    
    ctx.moveTo(75+((val-min)/(max-min))*150, 135);
    ctx.lineTo(75+((val-min)/(max-min))*150, 125);
    ctx.fillText(val,75+((val-min)/(max-min))*150 - 5,145);
    if (val0 >= min) {
        if ((max-min) > 1) {
            ctx.fillText("1/"+(max-min),50,90);
        } else {
            ctx.fillText(1/(max-min),65,90);
        }
        ctx.fillText(fixnum(val - min),75+(((val-min)/(max-min))*150)/2 - 8,40);
    }
    ctx.stroke();
    
    if (val0 > min) {
        if ((max-min) > 1) {
            document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x "+sign+val0+") &= " + fixnum(val - min) + " \\times "+"1/"+(max-min)+" \\\\ &= \\boxed{"+parseFloat(((1/(max-min))*(val - min))).toFixed(2).replace(/^0+/, '')+"} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else {
            document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x "+sign+val0+") &= " + fixnum(val - min) + " \\times "+1/(max-min)+" \\\\ &= \\boxed{"+parseFloat(((1/(max-min))*(val - min))).toFixed(2).replace(/^0+/, '')+"} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        }
    } else {
        document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x "+sign+val0+") &= \\boxed{0} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    
    
    MathJax.typeset();
}

function uniformgreater() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    var min = parseFloat(document.getElementById('minval').value); 
    var max = parseFloat(document.getElementById('maxval').value);
    var val0 = parseFloat(document.getElementById('unival').value); 
    var val = Math.max(Math.min(val0, max), min)
    var probtype = document.getElementById("probtype").value
    if (probtype == "greaterequal"){
        var sign = "\\geq"
    } else if (probtype == "greater") {
        var sign = ">"
    }
    if ((max-min) > 1) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\  &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+max+"-"+min+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(max-min)+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\  &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+max+"-"+min+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} "+1/(max-min)+" & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    }
    var c = document.getElementById("myCanvas"); 
    var ctx = c.getContext("2d"); 
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray'; 
    ctx.beginPath();
    ctx.moveTo(225, 130); 
    ctx.lineTo(225, 45);
    ctx.lineTo(75+((val-min)/(max-min))*150, 45); 
    ctx.lineTo(75+((val-min)/(max-min))*150, 130);
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
    if ((max-min) > 1) {
        ctx.fillText("1/"+(max-min),10,48);
    } else {
        ctx.fillText(1/(max-min),25,48);
    }
    ctx.fillText(min,70,145);
    ctx.fillText(max,220,145);
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
    
    ctx.moveTo(75+((val-min)/(max-min))*150, 135);
    ctx.lineTo(75+((val-min)/(max-min))*150, 125);
    ctx.fillText(val,75+((val-min)/(max-min))*150 - 5,145);
    if (val0 < max) {
        if ((max-min) > 1) {
            ctx.fillText("1/"+(max-min),75+((val-min)/(max-min))*150 - 25,90);
        } else {
            ctx.fillText(1/(max-min),75+((val-min)/(max-min))*150 - 10,90);
        }
        ctx.fillText(fixnum(max - val),225-(((max-val)/(max-min))*150)/2 - 8,40);
    }
    ctx.stroke();
    
    if (val0 < max) {
        if ((max-min) > 1) {
            document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x "+sign+val+") &= " + fixnum(max - val) + " \\times 1/"+(max-min)+" \\\\  &= \\boxed{"+parseFloat(((1/(max-min))*(max - val))).toFixed(2).replace(/^0+/, '')+"} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else {
            document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x "+sign+val+") &= " + fixnum(max - val) + " \\times "+1/(max-min)+" \\\\  &= \\boxed{"+parseFloat(((1/(max-min))*(max - val))).toFixed(2).replace(/^0+/, '')+"} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        }
    } else {
        document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x "+sign+val+") &= \\boxed{0} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    
    MathJax.typeset();
}

function uniformequal() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    var min = parseFloat(document.getElementById('minval').value); var max = parseFloat(document.getElementById('maxval').value);
    var val = parseFloat(document.getElementById('unival').value);
    if ((max-min) > 1) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\  &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+max+"-"+min+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(max-min)+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\  &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+max+"-"+min+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} "+1/(max-min)+" & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    }
    var c = document.getElementById("myCanvas"); 
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150); 
    if (val > min && val < max) {
        ctx.strokeStyle = 'lightgray'; 
        ctx.beginPath();
        ctx.moveTo(75+((val-min)/(max-min))*150, 45); 
        ctx.lineTo(75+((val-min)/(max-min))*150, 130);
        ctx.stroke(); 
    }
    ctx.strokeStyle = 'black'; 
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 130);
    ctx.lineTo(260, 130);
    ctx.fillText("f(x)",35,15); 
    ctx.fillText("x",265,132); 
    if ((max-min) > 1) {
        ctx.fillText("1/"+(max-min),10,48);
    } else {
        ctx.fillText(1/(max-min),25,48);
    }
    ctx.fillText(min,70,145); 
    ctx.fillText(max,220,145);
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
    if (val >= min && val <= max) {
        ctx.moveTo(75+((val-min)/(max-min))*150, 135);
        ctx.lineTo(75+((val-min)/(max-min))*150, 125);
        ctx.fillText(val,75+((val-min)/(max-min))*150 - 5,145);
        if ((max-min) > 1) {
            ctx.fillText("1/"+(max-min),75+((val-min)/(max-min))*150 - 25,90);
        } else {
            ctx.fillText(1/(max-min),75+((val-min)/(max-min))*150 - 10,90);
        }
        ctx.fillText("0",75+((val-min)/(max-min))*150 - 2,40);
    }
    ctx.stroke();
    if (val >= min && val <= max) {
        if ((max-min) > 1) {
            document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x = "+val+") &= 0 \\times 1/"+(max-min)+"  \\\\ &= \\boxed{"+0+"} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else {
            document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x = "+val+") &= 0 \\times "+1/(max-min)+"  \\\\ &= \\boxed{"+0+"} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        }
    } else {
        document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x = "+val+") &= \\boxed{"+0+"} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    
    
    MathJax.typeset();
}

function uniformbetween() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "A random variable has a uniform distribution when it has the same probability of being in each possible interval of the same length. "
    document.getElementById("formulatext").innerHTML = "$ f(x) = \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases}$"
    document.getElementById("explanationtext").innerHTML = "To find the probability in a uniform distribution, calculate the area of the rectangle formed under the graph over the interval."
    var min = parseFloat(document.getElementById('minval').value); 
    var max = parseFloat(document.getElementById('maxval').value);
    var val10 = parseFloat(document.getElementById('twoval1').value); 
    var val20 = parseFloat(document.getElementById('twoval2').value);
    var val1 = Math.min(Math.max(document.getElementById('twoval1').value, min), max);
    var val2 = Math.max(Math.min(document.getElementById('twoval2').value, max), min);
    var probtypeb1 = document.getElementById("probtypeb1").value; var probtypeb2 = document.getElementById("probtypeb2").value
    if (probtypeb1 == "lessequal"){var sign1 = "\\leq"} else if (probtypeb1 == "less") {var sign1 = "<"}
    if (probtypeb2 == "lessequal"){var sign2 = "\\leq"} else if (probtypeb2 == "less") {var sign2 = "<"}
    
    if ((max-min) > 1) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\  &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+max+"-"+min+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+(max-min)+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    } else {
        document.getElementById("output").innerHTML = "$$ \\begin{align} f(x) &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle b-a} & \\text{for } a \\leq x \\leq b \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\  &= \\begin{cases} \\frac{\\displaystyle1}{\\displaystyle"+max+"-"+min+"} & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\\\ &= \\begin{cases} "+1/(max-min)+" & \\text{for } "+min+" \\leq x \\leq "+max+" \\\\ 0 & \\text{elsewhere} \\end{cases} \\end{align}$$"
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(75+((val1-min)/(max-min))*150, 130);
    ctx.lineTo(75+((val1-min)/(max-min))*150, 45);
    ctx.lineTo(75+((val2-min)/(max-min))*150, 45);
    ctx.lineTo(75+((val2-min)/(max-min))*150, 130);
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
    if ((max-min) > 1) {
        ctx.fillText("1/"+(max-min),10,48);
    } else {
        ctx.fillText(1/(max-min),25,48);
    }
    ctx.fillText(min,70,145);
    ctx.fillText(max,220,145);
    
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
    ctx.moveTo(75+((val1-min)/(max-min))*150, 135);
    ctx.lineTo(75+((val1-min)/(max-min))*150, 125);
    ctx.fillText(val1,75+((val1-min)/(max-min))*150 - 5,145);
    ctx.moveTo(75+((val2-min)/(max-min))*150, 135);
    ctx.lineTo(75+((val2-min)/(max-min))*150, 125);
    ctx.fillText(val2,75+((val2-min)/(max-min))*150 - 5,145);
    if (Math.max(val10,val20) <= min || Math.min(val10,val20) >= max){
        //nothing here
    } else {
        if ((max-min) > 1) {
            ctx.fillText("1/"+(max-min),75+((val1-min)/(max-min))*150 - 25,90);
        } else {
            ctx.fillText(1/(max-min),75+((val1-min)/(max-min))*150 - 10,90);
        }
        ctx.fillText(fixnum(val2 - val1),(75+((val1-min)/(max-min))*150 + 75+((val2-min)/(max-min))*150)/2 - 8,40);
    }
    ctx.stroke();
    
    if (Math.max(val10,val20) <= min || Math.min(val10,val20) >= max){
        document.getElementById("output2").innerHTML = "$$ \\begin{align} P("+val10+sign1+" x "+sign2+val20+") &= \\boxed{0} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    } else {
        if ((max-min) > 1) {
            document.getElementById("output2").innerHTML = "$$ \\begin{align} P("+val10+sign1+" x "+sign2+val20+") &= " + fixnum(val2 - val1) + " \\times 1/"+(max-min)+" \\\\ &= \\boxed{"+parseFloat(((1/(max-min))*(val2 - val1))).toFixed(2).replace(/^0+/, '')+"} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
        } else {
            document.getElementById("output2").innerHTML = "$$ \\begin{align} P("+val10+sign1+" x "+sign2+val20+") &= " + fixnum(val2 - val1) + " \\times "+1/(max-min)+" \\\\ &= \\boxed{"+parseFloat(((1/(max-min))*(val2 - val1))).toFixed(2).replace(/^0+/, '')+"} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
        }
    }
    
    MathJax.typeset();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// STANDARD NORMAL DISTRIBUTION////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function standard() {
    if (standardtype == "probability") {
        $("#myCanvas0").hide(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
        compstandardprob()
    } else if (standardtype == "area") {
        $("#myCanvas0").hide(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
        compstandardarea() 
    } else if (standardtype == "curve") {
        $("#myCanvas").hide(); $("#output").hide(); $("#output2").hide();
        standardcurve() 
    }  
}

function switchstandardarea() {
    $("#standardprob").hide(); $("#standardarea").show(); $("#standardcurve").hide();
    standardtype = "area"
}

function switchstandardprob() {
    $("#standardprob").show(); $("#standardarea").hide(); $("#standardcurve").hide();
    standardtype = "probability"
}

function switchstandardcurve() {
    $("#standardprob").hide(); $("#standardarea").hide(); $("#standardcurve").show();
    standardtype = "curve"
}




function switchstandard1() {
    var x = document.getElementById('standardareatype').value
    if (x == "between") {
        $("#standardarea").hide(); $("#standardarea2").show();
    }
}

function switchstandard2() {
    document.getElementById('standardareatype').value = "left"
    $("#standardarea").show(); $("#standardarea2").hide();
}


function compstandardarea() {
    var x = document.getElementById('standardareatype').value
    if (x == "left") {
        standardarealeft()
    } else if (x == "right") {
        standardarearight()
    } else if (x == "between") {
        standardareabetween()
    }     
}

function standardarealeft() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    var area = document.getElementById('standardareaval').value
    var z = NormSInv(area)
    var exp = 2.71828;
    var val = z.toFixed(2)
    var valz = 30+10*val
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
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    var points0 = []
    for (i = 0; i < valz; i++) {
        points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
    }
    // move to the first point
    ctx.moveTo(points0[0].x, points0[0].y);
    for (i = 1; i < points0.length - 2; i ++){
        var xc = (points0[i].x + points0[i + 1].x) / 2;
        var yc = (points0[i].y + points0[i + 1].y) / 2;
        ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[valz],points0[valz]);
    ctx.lineTo(20 + 4.4*valz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    ctx.fillText("z",285,132);
    ctx.fillText("z",18 + 4.4*(30+10*val),145);
    ctx.fillText(area,(50 + 4.4*(30+10*val))/2  - ctx.measureText(area).width + 25,125 - area * 50);
    ctx.moveTo(20 + 4.4*(30+10*val), 135);
    ctx.lineTo(20 + 4.4*(30+10*val), 125);
    var points = []
    for (i = 0; i < 60; i++) {
        points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
    }
    // move to the first point
    ctx.moveTo(points[0].x, points[0].y);
    for (i = 1; i < points.length - 2; i ++){
        var xc = (points[i].x + points[i + 1].x) / 2;
        var yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    ctx.stroke();
    var zvalue = toFixing(parseFloat(val),1);
    var zval = (zvalue - 0).toFixed(1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(val).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    if (val < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (val >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    if (val < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (val >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    if (val < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (val >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    var table = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid'><td>$z$</td>"+table1+"</tr><tr style='border-top: thin solid'><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zval+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    document.getElementById("output2").innerHTML = "<br>" + table + "$$ z = \\boxed{" + parseFloat(z.toFixed(2)) + "} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}


function standardarearight() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    var area = document.getElementById('standardareaval').value
    var z = NormSInv(1-area)
    var lessval = z
    var lessvalz = 30+10*lessval
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))  
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
        points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
    }
    // move to the first point
    ctx.moveTo(points0[0].x, points0[0].y);
    for (i = 1; i < points0.length - 2; i ++){
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    if (Math.abs(lessval) >= .25) {
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
    }
    ctx.fillText("z",285,132);
    ctx.fillText("z",18 + 4.4*(30+10*lessval),145);
    ctx.fillText(area,105 + (50 + 4.4*(30+10*lessval))/2  - ctx.measureText(area).width + 25,130 - area * 50);
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    var points = []
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
    }
    // move to the first point
    ctx.moveTo(points[0].x, points[0].y);
    for (i = 1; i < points.length - 2; i ++){
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    ctx.lineTo(283, 119);
    ctx.stroke();
    var zvalue = toFixing(parseFloat(lessval),1);
    var zval = (zvalue - 0).toFixed(1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
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
        if (r == colm) {
        table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
        } else {
            table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
        } 
    }
    if (lessval < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    if (lessval < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    var table = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid'><td>$z$</td>"+table1+"</tr><tr style='border-top: thin solid'><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zval+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    document.getElementById("output2").innerHTML = "$$ \\begin{align} \\text{Area to the left of } z &= 1 - " + area + " \\\\ &= " + parseFloat((1-area).toFixed(4)) + " \\end{align} $$" + table + " $$ z = \\boxed{" + parseFloat(z.toFixed(2)) + "} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function standardareabetween() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    var area = document.getElementById('standardareaval2').value
    var input1 = document.getElementById('standardareainput1').value
    var input2 = document.getElementById('standardareainput2').value
    if (input1 == "negz" && input2 == "posz") {
        var z1 = NormSInv((1 - area) / 2)
        var z2 = Math.abs(z1)
        var z = z2
    } else if (input1 == "zero" && input2 == "posz") {
        var z1 = 0
        var z2 = NormSInv(parseFloat(area) + .5)
        var z = z2
    } else if (input1 == "negz" && input2 == "zero") {
        var z1 = NormSInv(1 - (parseFloat(area) + .5))
        var z2 = 0
        var z = Math.abs(z1)
    }
    var exp = 2.71828;
    var val = z.toFixed(2)
    var valz = 30+10*val
    var lessval = z1.toFixed(2)
    var lessvalz = 30+10*lessval
    var greaterval = z2.toFixed(2)
    var greatervalz = 30+10*greaterval
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    var points0 = []
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:20 + 4.4*lessvalz + 4.4*i, y:120 - 250*f[i+Math.floor(lessvalz)]}
		}
    
    // move to the first point
    ctx.moveTo(points0[0].x, points0[0].y);
    for (i = 1; i < points0.length - 2; i ++) {
        var xc = (points0[i].x + points0[i + 1].x) / 2;
        var yc = (points0[i].y + points0[i + 1].y) / 2;
        ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.lineTo(points0[i+1].x, 130);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    if (Math.abs(lessval) >= .5 && Math.abs(greaterval) >= .5) {
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
    }
    ctx.fillText("z",285,132);
    if (input1 == "negz" && input2 == "posz") {
        ctx.fillText("-z",17 + 4.4*(30+10*lessval),145);
        ctx.fillText("z",18 + 4.4*(30+10*greaterval),145);
        ctx.fillText(area,150 - ctx.measureText(area).width/2,90);
    } else if (input1 == "zero" && input2 == "posz") {
        ctx.fillText(0,17 + 4.4*(30+10*lessval),145);
        ctx.fillText("z",18 + 4.4*(30+10*greaterval),145);
        ctx.fillText(area,(150 + 4.4*(30+10*greaterval))/2,95);
        ctx.fillText(".50",110,95);
    } else if (input1 == "negz" && input2 == "zero") {
        ctx.fillText("-z",17 + 4.4*(30+10*lessval),145);
        ctx.fillText(0,18 + 4.4*(30+10*greaterval),145);
        ctx.fillText(area,(150 + 4.4*(30+10*lessval))/2,95);
        ctx.fillText(".50",175,95);
    }
    //ctx.fillText(greaterval,points0[i+1].x - 10,145);
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    ctx.moveTo(points0[i+1].x, 135);
    ctx.lineTo(points0[i+1].x, 125);
    var points = []
    for (i = 0; i < 60; i++) {
        points[i] = {x:20 + 4.45*i, y:120 - 250*f[i]}
    }
    // move to the first point
    ctx.moveTo(points[0].x, points[0].y);
    for (i = 1; i < points.length - 2; i ++) {
        var xc = (points[i].x + points[i + 1].x) / 2;
        var yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    ctx.stroke();
    var zvalue = toFixing(parseFloat(lessval),1);
    var zval = (zvalue - 0).toFixed(1);
    var zvaluea = (zvalue - .1).toFixed(1);
    var zvalueb = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    if (lessval < 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvaluea) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvaluea) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvaluea) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvaluea) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    if (lessval < 0) {
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalueb) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalueb) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalueb) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalueb) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    var tablea = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvaluea+"$</td>"+table31+"</tr><tr><td bgcolor='lightgray'>$"+zval+"$</td>"+table3+"</tr><tr><td>$"+zvalueb+"$</td>"+table32+"</tr></table>"
    var zvalue2 = toFixing(parseFloat(greaterval),1);
    var zval2 = (zvalue2 - 0).toFixed(1);
    var zvalue2a = (zvalue2 - .1).toFixed(1);
    var zvalue2b = (parseFloat(zvalue2) + .1).toFixed(1);
    var zvaluer2 = parseFloat(greaterval).toFixed(2); 
    var zseconddec2 = +zvaluer2.toString().split('').pop();
    var colm2 = zseconddec2
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
        if (r == colm2) {
                table4 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    if (greaterval < 0) {
        table51 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table51 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2a) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table51 += "<td>$" + normalcdf(parseFloat(zvalue2a) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table51 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table51 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2a) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table51 += "<td>$" + normalcdf(parseFloat(zvalue2a) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    if (greaterval < 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table5 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table5 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table5 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table5 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    if (greaterval < 0) {
        table52 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table52 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2b) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table52 += "<td>$" + normalcdf(parseFloat(zvalue2b) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table52 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table52 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2b) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table52 += "<td>$" + normalcdf(parseFloat(zvalue2b) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    var tableb = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table4+"</tr><tr><td>$"+zvalue2a+"$</td>"+table51+"</tr><tr><td bgcolor='lightgray'>$"+zval2+"$</td>"+table5+"</tr><tr><td>$"+zvalue2b+"$</td>"+table52+"</tr></table>"
    if (input1 == "negz" && input2 == "posz") {
        document.getElementById("output2").innerHTML = "$$ \\begin{align} \\text{Area to the left of } -z &= (1 - " + area + ")/2 \\\\ &= " + parseFloat(((1-area)/2).toFixed(4)) + " \\end{align} $$" + tablea + "$$-z = " + parseFloat(z1.toFixed(2)) + " \\rightarrow z = \\boxed{" + parseFloat(z.toFixed(2)) + "} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (input1 == "zero" && input2 == "posz") {
        document.getElementById("output2").innerHTML = "$$ \\begin{align} \\text{Area to the left of } z &= .50 + " + area + " \\\\ &= " + parseFloat((parseFloat(area)+.5).toFixed(4)) + " \\end{align} $$" + tableb + "$$ z = \\boxed{" + parseFloat(z.toFixed(2)) + "} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (input1 == "negz" && input2 == "zero") {
        document.getElementById("output2").innerHTML = "$$ \\begin{align} \\text{Area to the left of } -z &= 1 - (" + area + " + .50) \\\\ &= " + parseFloat((1-(parseFloat(area)+.5)).toFixed(4)) + " \\end{align} $$" + tablea + "$$ -z = " + parseFloat(z1.toFixed(2)) + " \\rightarrow z = \\boxed{" + parseFloat(z.toFixed(2)) + "} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}

function standardcurve() {
    $("#explanation").show(); $("#myCanvas0").show(); $("#myCanvas").hide(); $("#output").show(); $("#output2").hide();
    
    document.getElementById("descriptiontext").innerHTML = "The normal distribution is the most important continuous distribution. "
    document.getElementById("formulatext").innerHTML = "$ z = \\dfrac{x-\\mu}{\\sigma} $"
    document.getElementById("explanationtext").innerHTML = "To calculate probabilities for a normal distribution, first convert to the standard normal distribution."

    var expval = 0
    var sd =  1
    var exp = 2.71828; 
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    //ctx.fillText("Normal Distribution",110,10);
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(30, 135);
    ctx.lineTo(30, 125);
    ctx.fillText(expval - 3 * sd,30 - ctx.measureText(expval - 3 * sd).width / 2,145);
    
    ctx.moveTo(70, 135);
    ctx.lineTo(70, 125);
    ctx.fillText(expval - 2 * sd,70 - ctx.measureText(expval - 2 * sd).width / 2,145);
    
    ctx.moveTo(110, 135);
    ctx.lineTo(110, 125);
    ctx.fillText(expval - 1 * sd,110 - ctx.measureText(expval - 1 * sd).width / 2,145);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(expval,150 - ctx.measureText(expval).width / 2,145);
    
    
    ctx.moveTo(190, 135);
    ctx.lineTo(190, 125);
    ctx.fillText(parseFloat(expval) + parseFloat(1 * sd),190 - ctx.measureText(parseFloat(expval) + parseFloat(1 * sd)).width / 2,145);
    
    ctx.moveTo(230, 135);
    ctx.lineTo(230, 125);
    ctx.fillText(parseFloat(expval) + parseFloat(2 * sd),230 - ctx.measureText(parseFloat(expval) + parseFloat(1 * sd)).width / 2,145);
    
    ctx.moveTo(270, 135);
    ctx.lineTo(270, 125);
    ctx.fillText(parseFloat(expval) + parseFloat(3 * sd),270 - ctx.measureText(parseFloat(expval) + parseFloat(1 * sd)).width / 2,145);
    
    ctx.fillText("z",285,132);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    document.getElementById("output").innerHTML = "$$ \\text{Common Percentages:} $$ $$ 68.3\\% \\text{ of values between } "+(parseFloat(expval) - parseFloat(1 * sd))+" \\text{ and } "+(parseFloat(expval) + parseFloat(1 * sd))+" $$ $$ 95.4\\% \\text{ of values between } "+(parseFloat(expval) - parseFloat(2 * sd))+" \\text{ and } "+(parseFloat(expval) + parseFloat(2 * sd))+" $$ $$ 99.7\\% \\text{ of values between } "+(parseFloat(expval) - parseFloat(3 * sd))+" \\text{ and } "+(parseFloat(expval) + parseFloat(3 * sd))+" $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function compstandardprob() {
    probtype = document.getElementById('probtype2').value
    if (probtype == "lessequal" || probtype == "less") {
        standardless() 
    } else if (probtype == "greaterequal" || probtype == "greater") {
        standardgreater() 
    } else if (probtype == "equal") {
        standardequal() 
    } else if (probtype == "between" || probtype == "between2" || probtype == "between3" || probtype == "between4") {
        standardbetween()
    }
}

function standardless() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show();
    
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    
    var probtype = document.getElementById('probtype2').value
    var val = document.getElementById('standardval').value
    var valz = 30+10*val
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
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < valz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[valz],points0[valz]);
    
    ctx.lineTo(20 + 4.4*valz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText(val,25 + 4.4*(30+10*val) - ctx.measureText(val).width,145);
    
    ctx.moveTo(20 + 4.4*(30+10*val), 135);
    ctx.lineTo(20 + 4.4*(30+10*val), 125);
    
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    var zvalue = toFixing(parseFloat(val),1);
    var zval = (zvalue - 0).toFixed(1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(val).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    if (val < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (val >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    if (val < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (val >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    if (val < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (val >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    var table = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid'><td>$z$</td>"+table1+"</tr><tr style='border-top: thin solid'><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zval+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    document.getElementById("output2").innerHTML = "<br>" + table + "$$ P(z"+ sign + val + ") = \\boxed{"+ parseFloat(normalcdf(parseFloat(val))).toFixed(4).replace(/^0+/, '') + "} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function standardgreater() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    var probtype = document.getElementById('probtype2').value
    var lessval = document.getElementById('standardval').value
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
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))  
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
        points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
    }
    // move to the first point
    ctx.moveTo(points0[0].x, points0[0].y);
    for (i = 1; i < points0.length - 2; i ++){
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    if (Math.abs(lessval) >= .25) {
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
    }
    ctx.fillText("z",285,132);
    ctx.fillText(lessval,25 + 4.4*(30+10*lessval) - ctx.measureText(lessval).width,145);
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    var points = []
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
    }
    // move to the first point
    ctx.moveTo(points[0].x, points[0].y);
    for (i = 1; i < points.length - 2; i ++){
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    ctx.lineTo(283, 119);
    ctx.stroke();
    var zvalue = toFixing(parseFloat(lessval),1);
    var zval = (zvalue - 0).toFixed(1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
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
        if (r == colm) {
        table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
        } else {
            table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
        } 
    }
    if (lessval < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    if (lessval < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    var table = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid'><td>$z$</td>"+table1+"</tr><tr style='border-top: thin solid'><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zval+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    document.getElementById("output2").innerHTML = "<br>" + table + "$$ \\begin{align} P(z"+ sign + lessval + ") &= 1 - P(z \\leq" + lessval + ") \\\\ &= 1 - " + parseFloat(normalcdf(parseFloat(lessval))).toFixed(4).replace(/^0+/, '') + " \\\\ &= \\boxed{"+ parseFloat(1-normalcdf(parseFloat(lessval))).toFixed(4).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function standardequal() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    var probtype = document.getElementById('probtype2').value
    var lessval = document.getElementById('standardval').value
    var lessvalz = 30+10*lessval
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);

    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval,25 + 4.4*(30+10*lessval) - ctx.measureText(lessval).width,145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
        table1 += "<td>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</td>";
    }
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    var table = "<table class='ztable'><tr style='border-top: thin solid'><td>z</td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(z = "+ lessval + ") = \\boxed{0} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function standardbetween() {
    $("#explanation").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "A standard normal distribution is a normal distribution with a mean of zero and standard deviation of one. "
    document.getElementById("formulatext").innerHTML = "$ f(z) = \\frac{1}{\\sqrt{2\\pi}}e^{-z^2/2} $"
    document.getElementById("explanationtext").innerHTML = "To find the probability that z will be less than or equal to a value, simply find the corresponding probability in the z-table for the given z-score."
    var lessval = document.getElementById('standardval1').value
    var lessvalz = 30+10*lessval
    var greaterval = document.getElementById('standardval2').value
    var greatervalz = 30+10*greaterval
    var exp = 2.71828;
    var sign1 = "\\leq"; var sign2 = "\\leq"
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    if ((greaterval - lessval) > .2) {
        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        var points0 = []
        for (i = 0; i < (greatervalz-lessvalz); i++) {
            points0[i] = {x:20 + 4.4*lessvalz + 4.4*i, y:120 - 250*f[i+Math.floor(lessvalz)]}
        }
        // move to the first point
        ctx.moveTo(points0[0].x, points0[0].y);
        for (i = 1; i < points0.length - 2; i ++) {
            var xc = (points0[i].x + points0[i + 1].x) / 2;
            var yc = (points0[i].y + points0[i + 1].y) / 2;
            ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
        }
        // curve through the last two points
        ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
        ctx.lineTo(points0[i+1].x, 130);
        ctx.lineTo(20 + 4.4*lessvalz, 130);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();
    } else {
        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(20 + 4.4*lessvalz, 130);
        ctx.lineTo(20 + 4.4*greatervalz, 130);
        ctx.lineTo(20 + 4.4*greatervalz, 120 - 250*f[Math.floor(greatervalz)]);
        ctx.lineTo(20 + 4.4*lessvalz, 120 - 250*f[Math.floor(lessvalz)]);
        ctx.lineTo(20 + 4.4*lessvalz, 130);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();
    }
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    if (Math.abs(lessval) >= .5 && Math.abs(greaterval) >= .5) {
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
    }
    ctx.fillText("z",285,132);
    if ((greaterval - lessval) >= .5) {
        ctx.fillText(lessval,25 + 4.4*(30+10*lessval) - ctx.measureText(lessval).width,145);
        ctx.fillText(greaterval,25 + 4.4*(30+10*greaterval) - ctx.measureText(greaterval).width,145);
    } else {
        ctx.fillText(lessval,25 + 4.4*(30+10*lessval) - 1.25 *ctx.measureText(lessval).width,145);
        ctx.fillText(greaterval,25 + 4.4*(30+10*greaterval)- .5 * ctx.measureText(greaterval).width,145);
    }
    if ((greaterval - lessval) > .2) {
        //ctx.fillText(greaterval,points0[i+1].x - 10,145);
        ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
        ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
        ctx.moveTo(points0[i+1].x, 135);
        ctx.lineTo(points0[i+1].x, 125);
        var points = []
        for (i = 0; i < 60; i++) {
            points[i] = {x:20 + 4.45*i, y:120 - 250*f[i]}
        }
        // move to the first point
        ctx.moveTo(points[0].x, points[0].y);
        for (i = 1; i < points.length - 2; i ++) {
            var xc = (points[i].x + points[i + 1].x) / 2;
            var yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
        // curve through the last two points
        ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    } else {
        //ctx.fillText(greaterval,points0[i+1].x - 10,145);
        ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
        ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
        ctx.moveTo(20 + 4.4*(30+10*greaterval), 135);
        ctx.lineTo(20 + 4.4*(30+10*greaterval), 125);
        var points = []
        for (i = 0; i < 60; i++) {
            points[i] = {x:20 + 4.45*i, y:120 - 250*f[i]}
        }
        // move to the first point
        ctx.moveTo(points[0].x, points[0].y);
        for (i = 1; i < points.length - 2; i ++) {
            var xc = (points[i].x + points[i + 1].x) / 2;
            var yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }
    }
    ctx.stroke();
    var zvalue = toFixing(parseFloat(lessval),1);
    var zval = (zvalue - 0).toFixed(1);
    var zvaluea = (zvalue - .1).toFixed(1);
    var zvalueb = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    if (lessval < 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvaluea) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvaluea) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvaluea) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvaluea) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    if (lessval < 0) {
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalueb) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalueb) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalueb) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalueb) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    var tablea = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvaluea+"$</td>"+table31+"</tr><tr><td bgcolor='lightgray'>$"+zval+"$</td>"+table3+"</tr><tr><td>$"+zvalueb+"$</td>"+table32+"</tr></table>"
    var zvalue2 = toFixing(parseFloat(greaterval),1);
    var zval2 = (zvalue2 - 0).toFixed(1);
    var zvalue2a = (zvalue2 - .1).toFixed(1);
    var zvalue2b = (parseFloat(zvalue2) + .1).toFixed(1);
    var zvaluer2 = parseFloat(greaterval).toFixed(2); 
    var zseconddec2 = +zvaluer2.toString().split('').pop();
    var colm2 = zseconddec2
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
        if (r == colm2) {
                table4 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    if (greaterval < 0) {
        table51 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table51 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2a) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table51 += "<td>$" + normalcdf(parseFloat(zvalue2a) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table51 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table51 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2a) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table51 += "<td>$" + normalcdf(parseFloat(zvalue2a) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    if (greaterval < 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table5 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table5 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table5 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table5 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    if (greaterval < 0) {
        table52 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table52 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2b) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table52 += "<td>$" + normalcdf(parseFloat(zvalue2b) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table52 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table52 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2b) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table52 += "<td>$" + normalcdf(parseFloat(zvalue2b) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    var tableb = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table4+"</tr><tr><td>$"+zvalue2a+"$</td>"+table51+"</tr><tr><td bgcolor='lightgray'>$"+zval2+"$</td>"+table5+"</tr><tr><td>$"+zvalue2b+"$</td>"+table52+"</tr></table>"
    document.getElementById("output2").innerHTML = "<br>" + tablea + "<br>" + tableb + "$$ \\begin{align}   & \\; P(" + lessval + sign1 + " z "+ sign2 + greaterval + ") \\\\  &= P( z "+ sign2 + greaterval + ") - P( z " + sign1 + lessval + ") \\\\ &= "+ parseFloat(normalcdf(parseFloat(greaterval))).toFixed(4).replace(/^0+/, '')  + " - "+ parseFloat(normalcdf(parseFloat(lessval))).toFixed(4).replace(/^0+/, '')  + " \\\\ &= \\boxed{"+ parseFloat(normalcdf(parseFloat(greaterval)).toFixed(4) - normalcdf(parseFloat(lessval)).toFixed(4)).toFixed(4).replace(/^0+/, '')  + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// Normal Distribution //////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function normal() {
    if (normaltype == "probability") {
        normalprob()
    } else if (normaltype == "area") {
        normalarea() 
    } else if (normaltype == "curve") {
        normalcurve() 
    }  
}

function normalprob() {
    probtype = document.getElementById('probtype3').value
    if (probtype == "lessequal" || probtype == "less") {
        normalless() 
    } if (probtype == "greaterequal" || probtype == "greater") {
        normalgreater() 
    } else if (probtype == "equal") {
        normalequal() 
    } else if (probtype == "between" || probtype == "between2" || probtype == "between3" || probtype == "between4") {
        normalbetween()
    }
}

function normalarea() {
    var x = document.getElementById('areatypen').value
    if (x == "lower") {
        normalarealower()
    } else if (x == "upper") {
        normalareaupper()
    }   
}

function normalless() {
    $("#explanation").show(); $("#myCanvas0").show(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "The normal distribution is the most important continuous distribution. "
    document.getElementById("formulatext").innerHTML = "$ z = \\dfrac{x-\\mu}{\\sigma} $"
    document.getElementById("explanationtext").innerHTML = "To calculate probabilities for a normal distribution, first convert to the standard normal distribution."
    var probtype = document.getElementById('probtype3').value
    var expval = document.getElementById('expval').value.replaceAll(",","")
    var sd =  document.getElementById('stdev').value.replaceAll(",","")
    var lessval0 = document.getElementById('normalval').value.replaceAll(",","")
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
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.fillText("Normal Distribution",110,10);
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(expval,155 - ctx.measureText(expval).width,145);
    
    ctx.fillText("x",285,132);
    ctx.fillText(lessval0,25 + 4.4*(30+10*lessval) - ctx.measureText(lessval0).width,145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval.toFixed(2),10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    document.getElementById("output").innerHTML = "$$ \\text{Convert to Standard Normal:} $$ $$ z =\\frac{x-\\mu}{\\sigma} =\\frac{"+lessval0+"-"+expval+"}{"+sd+"} = {\\color{RoyalBlue}" +lessval.toFixed(2)+ "} $$ "
    
    var table = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "<br>" + table + "$$ \\begin{align} P(x"+ sign + lessval0 + ") &= P(z"+ sign + lessval.toFixed(2) + ") \\\\ &= \\boxed{"+ parseFloat(normalcdf(parseFloat(lessval.toFixed(2)))).toFixed(4).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function normalgreater() {
    $("#explanation").show(); $("#myCanvas0").show(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "The normal distribution is the most important continuous distribution. "
    document.getElementById("formulatext").innerHTML = "$ z = \\dfrac{x-\\mu}{\\sigma} $"
    document.getElementById("explanationtext").innerHTML = "To calculate probabilities for a normal distribution, first convert to the standard normal distribution."
    
    var probtype = document.getElementById('probtype3').value
    var expval = document.getElementById('expval').value.replaceAll(",","")
    var sd =  document.getElementById('stdev').value.replaceAll(",","")
    var lessval0 = document.getElementById('normalval').value.replaceAll(",","")
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
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Distribution",110,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(expval,155 - ctx.measureText(expval).width,145);
    
    ctx.fillText("x",285,132);
    ctx.fillText(lessval0,25 + 4.4*(30+10*lessval) - ctx.measureText(lessval0).width,145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(283, points[i+1].y);
    
    
    ctx.stroke();
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval.toFixed(2),10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(283, points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    
    document.getElementById("output").innerHTML = "$$ \\text{Convert to Standard Normal:} $$ $$ z =\\frac{x-\\mu}{\\sigma} =\\frac{"+lessval0+"-"+expval+"}{"+sd+"} = {\\color{RoyalBlue}" +lessval.toFixed(2)+ "} $$ "
    
    var table = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "<br>" + table + "$$ \\begin{align} P(x"+ sign + lessval0 + ") &=  P(z"+ sign + lessval.toFixed(2) + ") \\\\ &= 1 - P(z \\leq" + lessval.toFixed(2) + ") \\\\ &= 1 - " + parseFloat(normalcdf(parseFloat(lessval.toFixed(2)))).toFixed(4).replace(/^0+/, '') + " \\\\ &= \\boxed{"+ parseFloat((1-normalcdf(parseFloat(lessval.toFixed(2))))).toFixed(4).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function normalequal() {
    $("#explanation").show(); $("#myCanvas").hide(); $("#output2").hide(); $("#myCanvas0").show(); $("#output").show();
    document.getElementById("descriptiontext").innerHTML = "The normal distribution is the most important continuous distribution. "
    document.getElementById("formulatext").innerHTML = "$ z = \\dfrac{x-\\mu}{\\sigma} $"
    document.getElementById("explanationtext").innerHTML = "To calculate probabilities for a normal distribution, first convert to the standard normal distribution."
    
    var probtype = document.getElementById('probtype3').value
    var expval = document.getElementById('expval').value.replaceAll(",","")
    var sd =  document.getElementById('stdev').value.replaceAll(",","")
    var lessval0 = document.getElementById('normalval').value.replaceAll(",","")
    var lessval = (lessval0 - expval)/sd
    var lessvalz = 30+10*lessval
    var exp = 2.71828;
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
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
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(expval,155 - ctx.measureText(expval).width,145);
    
    ctx.fillText("x",255,132);
    ctx.fillText(lessval0,40 + 3.36*(30+10*lessval) - ctx.measureText(lessval0).width,145);
    
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
    
    document.getElementById("output").innerHTML = "$$ P(x = "+ lessval0 + ") = \\boxed{0} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function normalbetween() {
    $("#explanation").show(); $("#myCanvas0").show(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "The normal distribution is the most important continuous distribution. "
    document.getElementById("formulatext").innerHTML = "$ z = \\dfrac{x-\\mu}{\\sigma} $"
    document.getElementById("explanationtext").innerHTML = "To calculate probabilities for a normal distribution, first convert to the standard normal distribution."
    
    var expval = document.getElementById('expval').value.replaceAll(",","")
    var sd =  document.getElementById('stdev').value.replaceAll(",","")
    var lessval0 = document.getElementById('normalval1').value.replaceAll(",","")
    var lessval = (lessval0 - expval)/sd
    var lessvalz = 30+10*lessval
    var greaterval0 = document.getElementById('normalval2').value.replaceAll(",","")
    var greaterval = (greaterval0 - expval)/sd
    var greatervalz = 30+10*greaterval
    var exp = 2.71828;
    

    var sign1 = "\\leq"; var sign2 = "\\leq"
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Distribution",110,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:20 + 4.4*lessvalz + 4.4*i, y:120 - 250*f[i+Math.floor(lessvalz)]}
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
    
    ctx.lineTo(20 + 4.4*greatervalz, 130);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(expval,155 - ctx.measureText(expval).width,145);
    
    ctx.fillText("x",285,132);
    ctx.fillText(lessval0,25 + 4.4*(30+10*lessval) - ctx.measureText(lessval0).width,145);
    ctx.fillText(greaterval0,25 + 4.4*(30+10*greaterval) - ctx.measureText(greaterval0).width,145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    ctx.moveTo(20 + 4.4*(30+10*greaterval), 135);
    ctx.lineTo(20 + 4.4*(30+10*greaterval), 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:20 + 4.4*lessvalz + 4.4*i, y:120 - 250*f[i+Math.floor(lessvalz)]}
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
    
    ctx.lineTo(20 + 4.4*greatervalz, 130);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval.toFixed(2),10 + 4.4*(30+10*lessval),145);
    ctx.fillText(greaterval.toFixed(2),10 + 4.4*(30+10*greaterval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    ctx.moveTo(20 + 4.4*(30+10*greaterval), 135);
    ctx.lineTo(20 + 4.4*(30+10*greaterval), 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    var zvaluea = (zvalue - .1).toFixed(1);
    var zvalueb = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvaluea) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvaluea) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvaluea) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvaluea) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (lessval < 0) {
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalueb) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalueb) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalueb) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalueb) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    var tablea = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvaluea+"$</td>"+table31+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalueb+"$</td>"+table32+"</tr></table>"
    
    var zvalue2 = toFixing(parseFloat(greaterval),1);
    var zvalue2a = (zvalue2 - .1).toFixed(1);
    var zvalue2b = (parseFloat(zvalue2) + .1).toFixed(1);
    var zvaluer2 = parseFloat(greaterval).toFixed(2); 
    var zseconddec2 = +zvaluer2.toString().split('').pop();
    var colm2 = zseconddec2
    
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
        if (r == colm2) {
                table4 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    
    
    if (greaterval < 0) {
        table51 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table51 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2a) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table51 += "<td>$" + normalcdf(parseFloat(zvalue2a) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table51 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table51 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2a) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table51 += "<td>$" + normalcdf(parseFloat(zvalue2a) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (greaterval < 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table5 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table5 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table5 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table5 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (greaterval < 0) {
        table52 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table52 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2b) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table52 += "<td>$" + normalcdf(parseFloat(zvalue2b) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table52 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table52 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2b) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table52 += "<td>$" + normalcdf(parseFloat(zvalue2b) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    
    var tableb = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table4+"</tr><tr><td>$"+zvalue2a+"$</td>"+table51+"</tr><tr><td bgcolor='lightgray'>$"+zvalue2+"$</td>"+table5+"</tr><tr><td>$"+zvalue2b+"$</td>"+table52+"</tr></table>"
    
    
    document.getElementById("output").innerHTML = "$$ \\text{Convert to Standard Normal:} $$ $$ z_1 =\\frac{x_1-\\mu}{\\sigma} =\\frac{"+lessval0+"-"+expval+"}{"+sd+"} = {\\color{RoyalBlue}" +lessval.toFixed(2)+ "} $$ $$ z_2 =\\frac{x_2-\\mu}{\\sigma} =\\frac{"+greaterval0+"-"+expval+"}{"+sd+"} = {\\color{RoyalBlue}" +greaterval.toFixed(2)+ "} $$ "
    
    document.getElementById("output2").innerHTML = "<br>" + tablea + "<br>" + tableb + "$$ \\begin{align}  & P(" + lessval0 + sign1 + " x "+ sign2 + greaterval0 + ") \\\\ &= P(" + lessval.toFixed(2) + sign1 + " z "+ sign2 + greaterval.toFixed(2) + ") \\\\ &= P( z "+ sign2 + greaterval.toFixed(2) + ") - P( z " + sign1 + lessval.toFixed(2) + ") \\\\ &= "+ parseFloat(normalcdf(parseFloat(greaterval.toFixed(2)))).toFixed(4).replace(/^0+/, '') + " - "+ parseFloat(normalcdf(parseFloat(lessval.toFixed(2)))).toFixed(4).replace(/^0+/, '') + " \\\\ &= \\boxed{"+ parseFloat(normalcdf(parseFloat(greaterval.toFixed(2))).toFixed(4) - normalcdf(parseFloat(lessval.toFixed(2))).toFixed(4)).toFixed(4).replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function normalarealower() {
    $("#myCanvas0").show(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
    var expval = document.getElementById('expval').value
    var sd =  document.getElementById('stdev').value
    var perc = document.getElementById('areavaln').value
    var area = .01 * perc
    var z = NormSInv(area)
    var ans = parseFloat(z.toFixed(2)) * sd + parseFloat(expval)
    var exp = 2.71828;
    
    var lessval = z
    var lessvalz = 30+10*lessval
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Distribution",110,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
        points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(expval,148,145);
    
    ctx.fillText("x",285,132);
    ctx.fillText("x",18 + 4.4*(30+10*lessval),145);
    ctx.fillText(perc + "%",20 + 4.4*(30+10*lessval)*.67,(130 + points0[i-5].y)/2);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(0,148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText("z",18 + 4.4*(30+10*lessval),145);
    ctx.fillText(perc + "%",20 + 4.4*(30+10*lessval)*.67,(130 + points0[i-5].y)/2);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    var table = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    
    document.getElementById("output").innerHTML = "$$ \\text{Find the corresponding } z \\text{-value:} $$"
    
    document.getElementById("output2").innerHTML = table + " $$ z = {\\color{RoyalBlue}" + parseFloat(z.toFixed(2)) + "} $$ $$ \\text{Solve for } x \\text{:} $$ $$ z =\\frac{x-\\mu}{\\sigma} \\rightarrow " + parseFloat(z.toFixed(2)) + " = \\frac{x-"+expval+"}{"+sd+"} $$ $$ \\begin{align} x &= " + parseFloat(z.toFixed(2)) + "("+sd+") + "+expval+" \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
    
}

function normalareaupper() {
    $("#myCanvas0").show(); $("#myCanvas").show(); $("#output").show(); $("#output2").show();
    var expval = document.getElementById('expval').value
    var sd =  document.getElementById('stdev').value
    var perc = document.getElementById('areavaln').value
    var area = .01 * perc
    var z = NormSInv(1-area)
    var ans = parseFloat(z.toFixed(2)) * sd + parseFloat(expval)
    var exp = 2.71828;
    
    var lessval = z
    var lessvalz = 30+10*lessval
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Distribution",110,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(expval,148,145);
    
    ctx.fillText("x",285,132);
    ctx.fillText("x",18 + 4.4*(30+10*lessval),145);
    ctx.fillText(perc + "%",25 + 4.4*(30+10*lessval),120);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(283, 119);
    
    ctx.stroke();
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText("z",18 + 4.4*(30+10*lessval),145);
    ctx.fillText(perc + "%",25 + 4.4*(30+10*lessval),120);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(283, 119);
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    var table = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    
    document.getElementById("output").innerHTML = "$$ \\text{Find the corresponding } z \\text{-value:} $$"
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} \\text{Area to the left of } z &= 1 - " + area + " \\\\ &= " + (1-area) + " \\end{align} $$" + table + " $$ z = {\\color{RoyalBlue}" + parseFloat(z.toFixed(2)) + "} $$ $$ \\text{Solve for } x \\text{:} $$ $$ z =\\frac{x-\\mu}{\\sigma} \\rightarrow " + parseFloat(z.toFixed(2)) + " = \\frac{x-"+expval+"}{"+sd+"} $$ $$ \\begin{align} x &= " + parseFloat(z.toFixed(2)) + "("+sd+") + "+expval+" \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "} \\end{align} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
    
}

function normalcurve() {
    $("#explanation").show(); $("#myCanvas0").show(); $("#myCanvas").hide(); $("#output").show(); $("#output2").hide();
    document.getElementById("descriptiontext").innerHTML = "The normal distribution is the most important continuous distribution. "
    document.getElementById("formulatext").innerHTML = "$ z = \\dfrac{x-\\mu}{\\sigma} $"
    document.getElementById("explanationtext").innerHTML = "To calculate probabilities for a normal distribution, first convert to the standard normal distribution."

    var expval = document.getElementById('expval').value
    var sd =  document.getElementById('stdev').value
    var exp = 2.71828; 
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    //ctx.fillText("Normal Distribution",110,10);
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(30, 135);
    ctx.lineTo(30, 125);
    ctx.fillText(expval - 3 * sd,30 - ctx.measureText(expval - 3 * sd).width / 2,145);
    
    ctx.moveTo(70, 135);
    ctx.lineTo(70, 125);
    ctx.fillText(expval - 2 * sd,70 - ctx.measureText(expval - 2 * sd).width / 2,145);
    
    ctx.moveTo(110, 135);
    ctx.lineTo(110, 125);
    ctx.fillText(expval - 1 * sd,110 - ctx.measureText(expval - 1 * sd).width / 2,145);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(expval,150 - ctx.measureText(expval).width / 2,145);
    
    
    ctx.moveTo(190, 135);
    ctx.lineTo(190, 125);
    ctx.fillText(parseFloat(expval) + parseFloat(1 * sd),190 - ctx.measureText(parseFloat(expval) + parseFloat(1 * sd)).width / 2,145);
    
    ctx.moveTo(230, 135);
    ctx.lineTo(230, 125);
    ctx.fillText(parseFloat(expval) + parseFloat(2 * sd),230 - ctx.measureText(parseFloat(expval) + parseFloat(1 * sd)).width / 2,145);
    
    ctx.moveTo(270, 135);
    ctx.lineTo(270, 125);
    ctx.fillText(parseFloat(expval) + parseFloat(3 * sd),270 - ctx.measureText(parseFloat(expval) + parseFloat(1 * sd)).width / 2,145);
    
    ctx.fillText("x",285,132);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    document.getElementById("output").innerHTML = "$$ \\text{Common Percentages:} $$ $$ 68.3\\% \\text{ of values between } "+(parseFloat(expval) - parseFloat(1 * sd))+" \\text{ and } "+(parseFloat(expval) + parseFloat(1 * sd))+" $$ $$ 95.4\\% \\text{ of values between } "+(parseFloat(expval) - parseFloat(2 * sd))+" \\text{ and } "+(parseFloat(expval) + parseFloat(2 * sd))+" $$ $$ 99.7\\% \\text{ of values between } "+(parseFloat(expval) - parseFloat(3 * sd))+" \\text{ and } "+(parseFloat(expval) + parseFloat(3 * sd))+" $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
    
}

function switchnormalarea() {
    $("#normalprob").hide(); $("#normalarea").show(); $("#normalcurve").hide();
    normaltype = "area"
}

function switchnormalprob() {
    $("#normalprob").show(); $("#normalarea").hide(); $("#normalcurve").hide();
    normaltype = "probability"
}

function switchnormalcurve() {
    $("#normalprob").hide(); $("#normalarea").hide(); $("#normalcurve").show();
    normaltype = "curve"
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// Approximation of Binomial ////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function approximation() {
    $("#approximation").show();
    $("#approxmean").hide();
    $("#approxstandard").hide();
    $("#approxprobability").show();
}

function switchstandard() {
    $("#approxmean").hide();
    $("#approxstandard").show();
    $("#approxprobability").hide();
    approxtype = "standard"
}

function switchprobab() {
    $("#approxmean").hide();
    $("#approxstandard").hide();
    $("#approxprobability").show();
    approxtype = "probability"
}

function switchmean() {
    $("#approxmean").show();
    $("#approxstandard").hide();
    $("#approxprobability").hide();
    approxtype = "mean"
}

function compapprox() {
    if (approxtype == "mean") {
        approxmean()
    } else if (approxtype == "standard") {
        approxstandard()
    } else if (approxtype == "probability") {
        approxprobability()
    }
}

function approxmean() {
    $("#explanation").show(); $("#myCanvas0").hide(); $("#myCanvas").hide();
    document.getElementById("explanationtext").innerHTML = "$ \\mu = np $"
    var trials = document.getElementById('trials').value
    var psuccess = document.getElementById('psuccess').value
    var ans = trials * psuccess
    
    document.getElementById("output2").innerHTML = "$$ \\mu = np = (" + trials + ") ( " + psuccess + ") = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$"
    
    MathJax.typeset();
}

function approxstandard() {
    $("#explanation").show(); $("#myCanvas0").hide(); $("#myCanvas").hide();
    document.getElementById("explanationtext").innerHTML = "$ \\sigma = \\sqrt{np(1-p)} $"
    var trials = document.getElementById('trials').value
    var psuccess = document.getElementById('psuccess').value
    var ans = Math.sqrt(trials * psuccess * (1 - psuccess))
    
    document.getElementById("output2").innerHTML = "$$ \\sigma = \\sqrt{np(1-p)} = \\sqrt{(" + trials + ") ( " + psuccess + ") ( 1 - " + psuccess + ")} = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$"
    
    MathJax.typeset();
}





function approxprobability() {
    var x = document.getElementById('probtypea').value
    if (x == "equal") {
        approxprobability1()
    } else if (x == "lessequal") {
        approxprobability2()
    } else if (x == "less") {
        approxprobability3()
    } else if (x == "greaterequal") {
        approxprobability4()
    } else if (x == "greater") {
        approxprobability5()
    }
}


function approxprobability1() {
    $("#myCanvas0").show(); $("#myCanvas").show(); $("#output0").show();
    var trials = document.getElementById('trials').value
    var psuccess = document.getElementById('psuccess').value
    var xval = document.getElementById('approxval').value
    var xval1 = parseFloat(xval) - .5
    var xval2 = parseFloat(xval) + .5
    var mean = trials * psuccess
    var stnd = parseFloat((Math.sqrt(trials * psuccess * (1 - psuccess))).toFixed(2))
    var z1 = parseFloat(((xval1 - mean)/stnd).toFixed(2))
    var z2 = parseFloat(((xval2 - mean)/stnd).toFixed(2))
    var prob1 = (normalcdf(z1)).toFixed(4)
    var prob2 = (normalcdf(z2)).toFixed(4)
    var ans = (prob2 - prob1).toFixed(4)
    var exp = 2.71828;
    
    var lessval = z1
    var greaterval = z2
    var lessvalz = 30+10*lessval
    var greatervalz = 30+10*greaterval
    var lessval0 = xval1
    var greaterval0 = xval2
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Distribution",110,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:20 + 4.4*lessvalz + 4.4*i, y:120 - 250*f[i+Math.floor(lessvalz)]}
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
    
    ctx.lineTo(20 + 4.4*greatervalz, 130);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(mean,148,145);
    
    ctx.fillText("x",285,132);
    ctx.fillText(lessval0,5 + 4.4*(30+10*lessval),145);
    ctx.fillText(greaterval0,15 + 4.4*(30+10*greaterval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    ctx.moveTo(20 + 4.4*(30+10*greaterval), 135);
    ctx.lineTo(20 + 4.4*(30+10*greaterval), 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:20 + 4.4*lessvalz + 4.4*i, y:120 - 250*f[i+Math.floor(lessvalz)]}
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
    
    ctx.lineTo(20 + 4.4*greatervalz, 130);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval.toFixed(2),5 + 4.4*(30+10*lessval),145);
    ctx.fillText(greaterval.toFixed(2),15 + 4.4*(30+10*greaterval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    ctx.moveTo(20 + 4.4*(30+10*greaterval), 135);
    ctx.lineTo(20 + 4.4*(30+10*greaterval), 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    var zvaluea = (zvalue - .1).toFixed(1);
    var zvalueb = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvaluea) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvaluea) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvaluea) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvaluea) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (lessval < 0) {
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalueb) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalueb) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalueb) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalueb) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    var tablea = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvaluea+"$</td>"+table31+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalueb+"$</td>"+table32+"</tr></table>"
    
    var zvalue2 = toFixing(parseFloat(greaterval),1);
    var zvalue2a = (zvalue2 - .1).toFixed(1);
    var zvalue2b = (parseFloat(zvalue2) + .1).toFixed(1);
    var zvaluer2 = parseFloat(greaterval).toFixed(2); 
    var zseconddec2 = +zvaluer2.toString().split('').pop();
    var colm2 = zseconddec2
    
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
        if (r == colm2) {
                table4 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    
    
    if (greaterval < 0) {
        table51 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table51 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2a) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table51 += "<td>$" + normalcdf(parseFloat(zvalue2a) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table51 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table51 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2a) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table51 += "<td>$" + normalcdf(parseFloat(zvalue2a) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (greaterval < 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table5 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table5 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table5 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table5 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (greaterval < 0) {
        table52 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table52 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2b) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table52 += "<td>$" + normalcdf(parseFloat(zvalue2b) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table52 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table52 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2b) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table52 += "<td>$" + normalcdf(parseFloat(zvalue2b) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    
    var tableb = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table4+"</tr><tr><td>$"+zvalue2a+"$</td>"+table51+"</tr><tr><td bgcolor='lightgray'>$"+zvalue2+"$</td>"+table5+"</tr><tr><td>$"+zvalue2b+"$</td>"+table52+"</tr></table>"
    
    document.getElementById("output0").innerHTML = "$$ \\text{Expected Value:} $$ $$ \\mu = np = (" + trials + ") ( " + psuccess + ") = {\\color{RoyalBlue}"+mean+"} $$ $$ \\text{Standard Deviation:} $$ $$ \\begin{align} \\sigma &= \\sqrt{np(1-p)} \\\\ &= \\sqrt{(" + trials + ") ( " + psuccess + ") ( 1 - " + psuccess + ")} \\\\ &= {\\color{RoyalBlue}" + stnd + "} \\end{align} $$ $$ \\text{Continuity Correction Factor} = {\\color{RoyalBlue}.5} $$ $$ "+xval+" \\pm .5 = {\\color{RoyalBlue}"+xval1+"} \\text{ to } {\\color{RoyalBlue}"+xval2+"} $$ "
    
    document.getElementById("output").innerHTML = "$$ \\text{Convert to Standard Normal:} $$ $$ z_1 = \\frac{x_1-\\mu}{\\sigma} = \\frac{" + xval1 + " - " + mean + "}{" + stnd + "} = {\\color{RoyalBlue}" + z1.toFixed(2) + "} $$ $$ z_2 = \\frac{x_2-\\mu}{\\sigma} = \\frac{" + xval2 + " - " + mean + "}{" + stnd + "} = {\\color{RoyalBlue}" + z2.toFixed(2) + "} $$"
    
    document.getElementById("output2").innerHTML = tablea + "<br>" + tableb + "$$ \\begin{align} & P(" + xval1 + " \\leq x \\leq " + xval2 + ") \\\\ &= P(" + z1.toFixed(2) + " \\leq z \\leq " + z2.toFixed(2) + ") \\\\ &= P(z \\leq " + z2.toFixed(2) + ") - P(z \\leq " + z1.toFixed(2) + ") \\\\ &= " + prob2.replace(/^0+/, '') + " - " + prob1.replace(/^0+/, '') + " \\\\ &= \\boxed{" + ans.replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function approxprobability2() {
    $("#myCanvas0").show(); $("#myCanvas").show(); $("#output0").show();
    var trials = document.getElementById('trials').value
    var psuccess = document.getElementById('psuccess').value
    var xval = document.getElementById('approxval').value
    var xval1 = parseFloat(xval) + .5
    var mean = trials * psuccess
    var stnd = parseFloat((Math.sqrt(trials * psuccess * (1 - psuccess))).toFixed(2))
    var z1 = parseFloat(((xval1 - mean)/stnd).toFixed(2))
    var prob1 = (normalcdf(z1)).toFixed(4)
    var exp = 2.71828;
    
    var lessval = z1
    var lessvalz = 30+10*lessval
    var lessval0 = xval1
    
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Distribution",110,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(mean,145,145);
    
    ctx.fillText("x",285,132);
    ctx.fillText(lessval0,18 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval.toFixed(2),10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    var tablea = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    
    document.getElementById("output0").innerHTML = "$$ \\text{Expected Value:} $$ $$ \\mu = np = (" + trials + ") ( " + psuccess + ") = {\\color{RoyalBlue}"+mean+"} $$ $$ \\text{Standard Deviation:} $$ $$ \\begin{align} \\sigma &= \\sqrt{np(1-p)} \\\\ &= \\sqrt{(" + trials + ") ( " + psuccess + ") ( 1 - " + psuccess + ")} \\\\ &= {\\color{RoyalBlue}" + stnd + "} \\end{align} $$ $$ \\text{Continuity Correction Factor} = {\\color{RoyalBlue}.5} $$ $$ "+xval+" + .5 = {\\color{RoyalBlue}"+xval1+"} $$ "
    
    document.getElementById("output").innerHTML = "$$ \\text{Convert to Standard Normal:} $$ $$ z = \\frac{x-\\mu}{\\sigma} = \\frac{" + xval1 + " - " + mean + "}{" + stnd + "} = {\\color{RoyalBlue}" + z1.toFixed(2) + "} $$ "
    
    document.getElementById("output2").innerHTML = tablea + "$$ \\begin{align} P(x \\leq " + xval1 + ") &= P(z \\leq " + z1.toFixed(2) + ") \\\\ &= \\boxed{" + prob1.replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function approxprobability3() {
    $("#myCanvas0").show(); $("#myCanvas").show(); $("#output0").show();
    var trials = document.getElementById('trials').value
    var psuccess = document.getElementById('psuccess').value
    var xval = document.getElementById('approxval').value
    var xval1 = parseFloat(xval) - .5
    var mean = trials * psuccess
    var stnd = parseFloat((Math.sqrt(trials * psuccess * (1 - psuccess))).toFixed(2))
    var z1 = parseFloat(((xval1 - mean)/stnd).toFixed(2))
    var prob1 = (normalcdf(z1)).toFixed(4)
    var exp = 2.71828;
    
    var lessval = z1
    var lessvalz = 30+10*lessval
    var lessval0 = xval1
    
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Distribution",110,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(mean,145,145);
    
    ctx.fillText("x",285,132);
    ctx.fillText(lessval0,18 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval.toFixed(2),10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    var tablea = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    
    document.getElementById("output0").innerHTML = "$$ \\text{Expected Value:} $$ $$ \\mu = np = (" + trials + ") ( " + psuccess + ") = {\\color{RoyalBlue}"+mean+"} $$ $$ \\text{Standard Deviation:} $$ $$ \\begin{align} \\sigma &= \\sqrt{np(1-p)} \\\\ &= \\sqrt{(" + trials + ") ( " + psuccess + ") ( 1 - " + psuccess + ")} \\\\ &= {\\color{RoyalBlue}" + stnd + "} \\end{align} $$ $$ \\text{Continuity Correction Factor} = {\\color{RoyalBlue}.5} $$ $$ "+xval+" - .5 = {\\color{RoyalBlue}"+xval1+"} $$ "
    
    //$$ \\text{Applying Continuity Correction Factor:}$$ $$ P(x < " + xval + ") \\rightarrow P(x < " + xval1 + ") $$ 
    
    
    document.getElementById("output").innerHTML = "$$ \\text{Convert to Standard Normal:} $$ $$ z = \\frac{x-\\mu}{\\sigma} = \\frac{" + xval1 + " - " + mean + "}{" + stnd + "} = {\\color{RoyalBlue}" + z1.toFixed(2) + "} $$ "
    
    document.getElementById("output2").innerHTML = tablea + "$$ \\begin{align} P(x < " + xval1 + ") &= P(z < " + z1.toFixed(2) + ") \\\\ &= \\boxed{" + prob1.replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function approxprobability4() {
    $("#myCanvas0").show(); $("#myCanvas").show(); $("#output0").show();
    var trials = document.getElementById('trials').value
    var psuccess = document.getElementById('psuccess').value
    var xval = document.getElementById('approxval').value
    var xval1 = parseFloat(xval) - .5
    var mean = trials * psuccess
    var stnd = parseFloat((Math.sqrt(trials * psuccess * (1 - psuccess))).toFixed(2))
    var z1 = parseFloat(((xval1 - mean)/stnd).toFixed(2))
    var prob1 = (normalcdf(z1)).toFixed(4)
    var ans = (1-prob1).toFixed(4)
    var exp = 2.71828;
    
    var lessval = z1
    var lessvalz = 30+10*lessval
    var lessval0 = xval1
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Distribution",110,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(mean,145,145);
    
    ctx.fillText("x",285,132);
    ctx.fillText(lessval0,18 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(283, points[i+1].y);
    
    
    ctx.stroke();
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval.toFixed(2),10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(283, points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    var tablea = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    
    document.getElementById("output0").innerHTML = "$$ \\text{Expected Value:} $$ $$ \\mu = np = (" + trials + ") ( " + psuccess + ") = {\\color{RoyalBlue}"+mean+"} $$ $$ \\text{Standard Deviation:} $$ $$ \\begin{align} \\sigma &= \\sqrt{np(1-p)} \\\\ &= \\sqrt{(" + trials + ") ( " + psuccess + ") ( 1 - " + psuccess + ")} \\\\ &= {\\color{RoyalBlue}" + stnd + "} \\end{align} $$ $$ \\text{Continuity Correction Factor} = {\\color{RoyalBlue}.5} $$ $$ "+xval+" - .5 = {\\color{RoyalBlue}"+xval1+"} $$ "
    
    document.getElementById("output").innerHTML = "$$ \\text{Convert to Standard Normal:} $$ $$ z = \\frac{x-\\mu}{\\sigma} = \\frac{" + xval1 + " - " + mean + "}{" + stnd + "} = {\\color{RoyalBlue}" + z1.toFixed(2) + "} $$ "
    
    document.getElementById("output2").innerHTML = tablea + "$$ \\begin{align} P(x \\geq " + xval1 + ") &= P(z \\geq " + z1.toFixed(2) + ") \\\\ &= 1 - P(z \\leq " + z1.toFixed(2) + ") \\\\ &= 1 - " + prob1.replace(/^0+/, '') + " \\\\ &= \\boxed{" + ans.replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function approxprobability5() {
    $("#myCanvas0").show(); $("#myCanvas").show(); $("#output0").show();
    var trials = document.getElementById('trials').value
    var psuccess = document.getElementById('psuccess').value
    var xval = document.getElementById('approxval').value
    var xval1 = parseFloat(xval) + .5
    var mean = trials * psuccess
    var stnd = parseFloat((Math.sqrt(trials * psuccess * (1 - psuccess))).toFixed(2))
    var z1 = parseFloat(((xval1 - mean)/stnd).toFixed(2))
    var prob1 = (normalcdf(z1)).toFixed(4)
    var ans = (1-prob1).toFixed(4)
    var exp = 2.71828;
    
    var lessval = z1
    var lessvalz = 30+10*lessval
    var lessval0 = xval1
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Normal Distribution",110,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(mean,145,145);
    
    ctx.fillText("x",285,132);
    ctx.fillText(lessval0,18 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(283, points[i+1].y);
    
    
    ctx.stroke();
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    
    for (i = 0; i < lessvalz2; i++) {
      points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval.toFixed(2),10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(283, points[i+1].y);
    
    
    ctx.stroke();
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table2 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    if (lessval < 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    } else if (lessval >= 0) {
        table4 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table4 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
    }
    
    var tablea = "<table class='ztable'><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table4+"</tr></table>"
    
    document.getElementById("output0").innerHTML = "$$ \\text{Expected Value:} $$ $$ \\mu = np = (" + trials + ") ( " + psuccess + ") = {\\color{RoyalBlue}"+mean+"} $$ $$ \\text{Standard Deviation:} $$ $$ \\begin{align} \\sigma &= \\sqrt{np(1-p)} \\\\ &= \\sqrt{(" + trials + ") ( " + psuccess + ") ( 1 - " + psuccess + ")} \\\\ &= {\\color{RoyalBlue}" + stnd + "} \\end{align} $$ $$ \\text{Continuity Correction Factor} = {\\color{RoyalBlue}.5} $$ $$ "+xval+" + .5 = {\\color{RoyalBlue}"+xval1+"} $$ "
    
    
    document.getElementById("output").innerHTML = "$$ \\text{Convert to Standard Normal:} $$ $$ z = \\frac{x-\\mu}{\\sigma} = \\frac{" + xval1 + " - " + mean + "}{" + stnd + "} = {\\color{RoyalBlue}" + z1.toFixed(2) + "} $$ "
    
    document.getElementById("output2").innerHTML = tablea + "$$ \\begin{align} P(x > " + xval1 + ") &= P(z > " + z1.toFixed(2) + ") \\\\ &= 1 - P(z < " + z1.toFixed(2) + ") \\\\ &= 1 - " + prob1.replace(/^0+/, '') + " \\\\ &= \\boxed{" + ans.replace(/^0+/, '') + "} \\end{align} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////// Exponential Distribution /////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function exponential() {
    if (exponentialtype == "probability"){
        var probtype = document.getElementById('probtype4').value
        if (probtype == "lessequal" || probtype == "less") {
            exponentialless() 
        } else if (probtype == "greaterequal" || probtype == "greater") {
            exponentialgreater() 
        } else if (probtype == "equal") {
            exponentialequal()
        } else if (probtype == "between" || probtype == "between2" || probtype == "between3" || probtype == "between4") {
            exponentialbetween()
        }
    } else if (exponentialtype == "pdf") {
        exponentialpdf()
    } else if (exponentialtype == "formula") {
        exponentialformula()
    } else if (exponentialtype == "curve") {
        exponentialcurve()
    }
    
}

function exponentialless() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show(); $("#myCanvas0").hide(); $("#output").hide();
    document.getElementById("descriptiontext").innerHTML = "The exponential distribution is commonly used when the random variable is time or distance. "
    document.getElementById("formulatext").innerHTML = "$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$"
    document.getElementById("explanationtext").innerHTML = "The probability that the random variable will be less than or equal to a value is found by using the formula."
    
    if (exponentialinput == "mu") {
        var expval = document.getElementById('expval2').value
    } else {
        var expval = document.getElementById('exponentialexpval2').value
    }
    var probtype = document.getElementById('probtype4').value
    var exp = 2.71828;
    var lessval = document.getElementById('exponentialval').value;
    var lessvalz = (lessval / expval) * 15
    var ans0 = Math.pow(exp,(-lessval/expval))
    var ans = 1 - Math.pow(exp,(-lessval/expval))
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/15)*Math.pow(exp,(-i/15))))
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
      points0[i] = {x:50 + 6*i, y:130 - 1500*f[i]}
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
    
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, 50 + 6*lessvalz,130 - 1500*f[lessvalz]);
    
    ctx.lineTo(50 + 6*lessvalz, 130);
    ctx.lineTo(50, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    
    
    ctx.fillText("f(x)",45,15);
    ctx.fillText("x",255,132);
    ctx.fillText(lessval,50 + 6*lessvalz - ctx.measureText(lessval).width/2,145);
    
    ctx.moveTo(50 + 6*lessvalz, 135);
    ctx.lineTo(50 + 6*lessvalz, 125);
    
    ctx.moveTo(45, 30);
    ctx.lineTo(55, 30);
    var intercept = "1/"+expval
    ctx.fillText(intercept,43 - ctx.measureText(intercept).width,33);
    
    
    var points = []
    
    for (i = 0; i < 30; i++) {
      points[i] = {x:50 + 6*i, y:130 - 1500*f[i]}
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
    
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x "+ sign + lessval + ") &= 1 - e^{-"+ lessval + "/"+ expval + "} \\\\ &= 1 - "+ parseFloat(ans0.toFixed(4)) + " \\\\ &= \\boxed{"+ parseFloat(ans.toFixed(4)) + "} \\end{align} $$"
    
    MathJax.typeset();
    
}

function exponentialgreater() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show(); $("#myCanvas0").hide(); $("#output").hide();
    document.getElementById("explanationtext").innerHTML = "$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$"
    
    var probtype = document.getElementById('probtype4').value
    if (exponentialinput == "mu") {
        var expval = document.getElementById('expval2').value
    } else {
        var expval = document.getElementById('exponentialexpval2').value
    }
    var exp = 2.71828;
    var lessval = document.getElementById('exponentialval').value;
    var lessvalz = (lessval / expval) * 15
    var ans0 = Math.pow(exp,(-lessval/expval))
    var ans = 1 - Math.pow(exp,(-lessval/expval))
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/15)*Math.pow(exp,(-i/15))))
    }
    
    if (probtype == "greaterequal") {
        var sign = "\\geq"
        var sign2 = "\\leq"
    } else if (probtype == "greater") {
        var sign = ">"
        var sign2 = "<"
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < 30; i++) {
      points0[i] = {x:50 + 6*lessvalz + 6*i, y:130 - 1500*f[i+Math.floor(lessvalz)]}
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
    
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, 50 + 6*30,130 - 1500*f[30]);
    
    ctx.lineTo(50 + 6*29, 130);
    
    ctx.lineTo(50 + 6*29, 130);
    ctx.lineTo(50 + 6*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    
    
    ctx.fillText("f(x)",45,15);
    ctx.fillText("x",255,132);
    ctx.fillText(lessval,50 + 6*lessvalz - ctx.measureText(lessval).width/2,145);
    
    ctx.moveTo(50 + 6*lessvalz, 135);
    ctx.lineTo(50 + 6*lessvalz, 125);
    
    ctx.moveTo(45, 30);
    ctx.lineTo(55, 30);
    var intercept = "1/"+expval
    ctx.fillText(intercept,43 - ctx.measureText(intercept).width,33);
    
    var points = []
    
    for (i = 0; i < 30; i++) {
      points[i] = {x:50 + 6*i, y:130 - 1500*f[i]}
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
    
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P(x"+ sign + lessval + ") &= 1 - P(x"+ sign2 + lessval + ") \\\\  &= 1 - (1 - e^{-"+ lessval + "/"+ expval + "}) \\\\ &= 1 - (1 - "+ parseFloat(ans0.toFixed(4))  + ") \\\\ &= 1 - "+ parseFloat(ans.toFixed(4)) + " \\\\ &= \\boxed{"+ parseFloat((1-ans.toFixed(4)).toFixed(4)) + "} \\end{align} $$"
    
    MathJax.typeset();
    
}

function exponentialequal() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show(); $("#myCanvas0").hide(); $("#output").hide();
    document.getElementById("explanationtext").innerHTML = "$$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$$"
    
    var probtype = document.getElementById('probtype4').value
    if (exponentialinput == "mu") {
        var expval = document.getElementById('expval2').value
    } else {
        var expval = document.getElementById('exponentialexpval2').value
    }
    var exp = 2.71828;
    var lessval = document.getElementById('exponentialval').value;
    var lessvalz = (lessval / expval) * 15
    var ans = 1 - Math.pow(exp,(-lessval/expval))
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/15)*Math.pow(exp,(-i/15))))
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
    ctx.fillText(lessval,68 + 5*lessvalz - ctx.measureText(lessval).width/2,145);
    
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

function exponentialbetween() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show(); $("#myCanvas0").hide(); $("#output").hide();
    document.getElementById("explanationtext").innerHTML = "$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$"
    
    var probtype1 = document.getElementById('probtype4b1').value
    var probtype2 = document.getElementById('probtype4b2').value
    if (exponentialinput == "mu") {
        var expval = document.getElementById('expval2').value
    } else {
        var expval = document.getElementById('exponentialexpval2').value
    }
    var exp = 2.71828;
    var lessval = document.getElementById('exponentialval1').value;
    var lessvalz = (lessval / expval) * 15
    var greaterval = document.getElementById('exponentialval2').value;
    var greatervalz = (greaterval / expval) * 15
    var ans10 = Math.pow(exp,(-lessval/expval))
    var ans20 = Math.pow(exp,(-greaterval/expval))
    var ans1 = 1 - Math.pow(exp,(-lessval/expval))
    var ans2 = 1 - Math.pow(exp,(-greaterval/expval))
    var ans = ans2.toFixed(4) - ans1.toFixed(4)
    
    if (probtype1 == "lessequal") {
        var sign1 = "\\leq"
    } else {
        var sign1 = "<"
    }
    
    if (probtype2 == "lessequal") {
        var sign2 = "\\leq"
    } else {
        var sign2 = "<"
    }
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/15)*Math.pow(exp,(-i/15))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:50 + 6*lessvalz + 6*i, y:130 - 1500*f[i+Math.floor(lessvalz)]}
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
    
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, 50 + 6*greatervalz,130 - 1500*f[greatervalz]);
    
    ctx.lineTo(50 + 6*greatervalz, 130);
    ctx.lineTo(50 + 6*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    
    
    ctx.fillText("f(x)",45,15);
    ctx.fillText("x",255,132);
    ctx.fillText(lessval,50 + 6*lessvalz - ctx.measureText(lessval).width/2,145);
    ctx.fillText(greaterval,50 + 6*greatervalz - ctx.measureText(lessval).width/2,145);
    
    ctx.moveTo(50 + 6*lessvalz, 135);
    ctx.lineTo(50 + 6*lessvalz, 125);
    ctx.moveTo(50 + 6*greatervalz, 135);
    ctx.lineTo(50 + 6*greatervalz, 125);
    
    ctx.moveTo(45, 30);
    ctx.lineTo(55, 30);
    var intercept = "1/"+expval
    ctx.fillText(intercept,43 - ctx.measureText(intercept).width,33);
    
    var points = []
    
    for (i = 0; i < 30; i++) {
      points[i] = {x:50 + 6*i, y:130 - 1500*f[i]}
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
    
    
    document.getElementById("output2").innerHTML = "$$ \\begin{align} P("+ lessval + sign1 + " x " + sign2 + greaterval + ") &= P(x"+ sign2 + greaterval+") - P(x" + sign1 + lessval + ") \\\\ &= (1 - e^{-"+ greaterval + "/"+ expval + "}) - (1 - e^{-"+ lessval + "/"+ expval + "}) \\\\ &= (1 - "+ parseFloat(ans20.toFixed(4)) + ") - (1 - "+ parseFloat(ans10.toFixed(4)) + ") \\\\ &= "+ parseFloat(ans2.toFixed(4)) + " - "+ parseFloat(ans1.toFixed(4)) + " \\\\ &= \\boxed{"+ parseFloat(ans.toFixed(4)) + "} \\end{align} $$"
    
    MathJax.typeset();
    
}

function exponentialpdf() {
    $("#explanation").show(); $("#myCanvas").hide(); $("#output2").show(); $("#myCanvas0").hide(); $("#output").hide();
    document.getElementById("descriptiontext").innerHTML = "The exponential distribution is commonly used when the random variable is time or distance. "
    document.getElementById("formulatext").innerHTML = "$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$"
    document.getElementById("explanationtext").innerHTML = "The probability that the random variable will be less than or equal to a value is found by using the formula."
    if (exponentialinput == "mu") {
        var mu = document.getElementById('expval2').value
    } else {
        var mu = document.getElementById('exponentialexpval2').value
    }
    document.getElementById("output2").innerHTML = "$$ f(x) = \\frac{1}{\\mu}e^{-x/\\mu} $$ $$ \\boxed{ f(x) = \\frac{1}{"+mu+"}e^{-x/"+mu+"} } $$"
    
    MathJax.typeset();
    
}

function exponentialformula() {
    $("#explanation").show(); $("#myCanvas").hide(); $("#output2").show(); $("#myCanvas0").hide(); $("#output").hide();
    document.getElementById("descriptiontext").innerHTML = "The exponential distribution is commonly used when the random variable is time or distance. "
    document.getElementById("formulatext").innerHTML = "$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$"
    document.getElementById("explanationtext").innerHTML = "The probability that the random variable will be less than or equal to a value is found by using the formula."
    if (exponentialinput == "mu") {
        var mu = document.getElementById('expval2').value
    } else {
        var mu = document.getElementById('exponentialexpval2').value
    }
    document.getElementById("output2").innerHTML = "$$ P(x \\leq x_0) = 1 - e^{-x_0/\\mu} $$ $$ \\boxed{ P(x \\leq x_0) = 1 - e^{-x_0/"+mu+"} }  $$"
    
    MathJax.typeset();
    
}

function exponentialcurve() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").hide(); $("#myCanvas0").hide(); $("#output").hide();
    document.getElementById("descriptiontext").innerHTML = "The exponential distribution is commonly used when the random variable is time or distance. "
    document.getElementById("formulatext").innerHTML = "$ P(x \\leq x_0) = 1 - e^{- x_0 / \\mu }$"
    document.getElementById("explanationtext").innerHTML = "The probability that the random variable will be less than or equal to a value is found by using the formula."
    
    if (exponentialinput == "mu") {
        var expval = document.getElementById('expval2').value
    } else {
        var expval = document.getElementById('exponentialexpval2').value
    }
    var exp = 2.71828;
    
    var f = [];
    var i;
    for (i = 0; i < 30; i++) {
      f[i] = parseFloat(((1/15)*Math.pow(exp,(-i/15))))
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    
    
    ctx.fillText("f(x)",45,15);
    ctx.fillText("x",255,132);
    
    val1 = parseFloat((expval/2).toFixed(2))
    ctx.moveTo(90, 135);
    ctx.lineTo(90, 125);
    ctx.fillText(val1,90 - ctx.measureText(val1).width/2,145);
    
    ctx.moveTo(130, 135);
    ctx.lineTo(130, 125);
    ctx.fillText(expval,130 - ctx.measureText(expval).width/2,145);
    
    val2 = parseFloat((parseFloat(expval)+parseFloat(expval/2)).toFixed(2))
    ctx.moveTo(170, 135);
    ctx.lineTo(170, 125);
    ctx.fillText(val2,170 - ctx.measureText(val2).width/2,145);
    
    val3 = parseFloat((parseFloat(expval)+parseFloat(expval)).toFixed(2))
    ctx.moveTo(210, 135);
    ctx.lineTo(210, 125);
    ctx.fillText(val3,210 - ctx.measureText(val3).width/2,145);
    
    ctx.moveTo(45, 30);
    ctx.lineTo(55, 30);
    var intercept = "1/"+expval
    ctx.fillText(intercept,43 - ctx.measureText(intercept).width,33);
    
    
    var points = []
    
    for (i = 0; i < 30; i++) {
      points[i] = {x:50 + 6*i, y:130 - 1500*f[i]}
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
    
    
}

function exponentialpdfinputshow() {
    exponentialinput = "pdf"
    $("#exponentialmuinput").hide(); $("#exponentialpdfinput").show();
}

function exponentialmuinputshow() {
    exponentialinput = "mu"
    $("#exponentialmuinput").show(); $("#exponentialpdfinput").hide();
}

function switchexponentialpdf() {
    exponentialtype = "pdf"
    $("#exponentialpdf").show(); $("#exponentialprobformula").hide(); $("#exponentialprob").hide(); $("#exponentialcurve").hide();
}

function switchexponentialprobformula() {
    exponentialtype = "formula"
    $("#exponentialpdf").hide(); $("#exponentialprobformula").show(); $("#exponentialprob").hide(); $("#exponentialcurve").hide();
}

function switchexponentialprob() {
    exponentialtype = "probability"
    $("#exponentialpdf").hide(); $("#exponentialprobformula").hide(); $("#exponentialprob").show(); $("#exponentialcurve").hide();
}

function switchexponentialcurve() {
    exponentialtype = "curve"
    $("#exponentialpdf").hide(); $("#exponentialprobformula").hide(); $("#exponentialprob").hide(); $("#exponentialcurve").show();
}































function tdistribution() {
    $("#tdistribution").show();
    $("#tdistprob").show(); $("#tdistprobbetween").hide(); $("#tdistprobarea").hide(); $("#tdistprobarea2").hide();
}

function switchtdistarea() {
    $("#tdistprob").hide(); $("#tdistprobarea").show();
    tdisttype = "area"
}

function switchtdistprob() {
    $("#tdistprob").show(); $("#tdistprobarea").hide();
    tdisttype = "probability"
}

function comptdist() {
    if (tdisttype == "probability") {
        comptdistprob()
    } else if (tdisttype == "area") {
        comptdistarea() 
    } 
}



function comptdistarea() {
    var areatype = document.getElementById('areatypet').value
    if (areatype == "upper") {
        comptarea1() 
    } else if (areatype == "lower") {
        comptarea2() 
    } 
}

function comptarea1() {
    
    var tdist = [[0, 0, 0, 0, 0, 0], [1.376, 3.078, 6.314, 12.706, 31.821, 63.656], [1.061, 1.886, 2.920, 4.303, 6.965, 9.925], [.978, 1.638, 2.353, 3.182, 4.541, 5.841], [.941, 1.533, 2.132, 2.776, 3.747, 4.604], [.920, 1.476, 2.015, 2.571, 3.365, 4.032], [.906, 1.440, 1.943, 2.447, 3.143, 3.707], [.896, 1.415, 1.895, 2.365, 2.998, 3.499], [.889, 1.397, 1.860, 2.306, 2.896, 3.355], [.883, 1.383, 1.833, 2.262, 2.821, 3.250], [.879, 1.372, 1.812, 2.228, 2.764, 3.169], [.876, 1.363, 1.796, 2.201, 2.718, 3.106], [.873, 1.356, 1.782, 2.179, 2.681, 3.055], [.870, 1.350, 1.771, 2.160, 2.650, 3.012], [.868, 1.345, 1.761, 2.145, 2.624, 2.977], [.866, 1.341, 1.753, 2.131, 2.602, 2.947], [.865, 1.337, 1.746, 2.120, 2.583, 2.921], [.863, 1.333, 1.740, 2.110, 2.567, 2.898], [.862, 1.330, 1.734, 2.101, 2.552, 2.878], [.861, 1.328, 1.729, 2.093, 2.539, 2.861], [.860, 1.325, 1.725, 2.086, 2.528, 2.845], [.859, 1.323, 1.721, 2.080, 2.518, 2.831], [.858, 1.321, 1.717, 2.074, 2.508, 2.819], [.858, 1.319, 1.714, 2.069, 2.500, 2.807], [.857, 1.318, 1.711, 2.064, 2.492, 2.797], [.856, 1.316, 1.708, 2.060, 2.485, 2.787], [.856, 1.315, 1.706, 2.056, 2.479, 2.779], [.855, 1.314, 1.703, 2.052, 2.473, 2.771], [.855, 1.313, 1.701, 2.048, 2.467, 2.763], [.854, 1.311, 1.688, 2.045, 2.462, 2.756], [.854, 1.310, 1.697, 2.042, 2.457, 2.750], [.853, 1.309, 1.696, 2.040, 2.453, 2.744], [.853, 1.309, 1.694, 2.037, 2.449, 2.738], [.853, 1.308, 1.692, 2.035, 2.445, 2.733], [.852, 1.307, 1.691, 2.032, 2.441, 2.728], [.852, 1.306, 1.690, 2.030, 2.438, 2.724], [.852, 1.306, 1.688, 2.028, 2.434, 2.719], [.851, 1.305, 1.687, 2.026, 2.431, 2.715], [.851, 1.304, 1.686, 2.024, 2.429, 2.712], [.851, 1.304, 1.685, 2.023, 2.426, 2.708], [.851, 1.303, 1.684, 2.021, 2.423, 2.704], [.850, 1.303, 1.683, 2.020, 2.421, 2.701], [.850, 1.302, 1.682, 2.018, 2.418, 2.698], [.850, 1.302, 1.681, 2.017, 2.416, 2.695], [.850, 1.301, 1.680, 2.015, 2.414, 2.692], [.850, 1.301, 1.679, 2.014, 2.412, 2.690], [.850, 1.300, 1.679, 2.013, 2.410, 2.687], [.849, 1.300, 1.678, 2.012, 2.408, 2.685], [.849, 1.299, 1.677, 2.011, 2.407, 2.682], [.849, 1.299, 1.677, 2.010, 2.405, 2.680], [.849, 1.299, 1.676, 2.009, 2.403, 2.678], [.849, 1.298, 1.675, 2.008, 2.402, 2.676], [.849, 1.298, 1.675, 2.007, 2.400, 2.674], [.848, 1.298, 1.674, 2.006, 2.399, 2.672], [.848, 1.297, 1.674, 2.005, 2.397, 2.670], [.848, 1.297, 1.673, 2.004, 2.396, 2.668], [.848, 1.297, 1.673, 2.003, 2.395, 2.667], [.848, 1.297, 1.672, 2.002, 2.394, 2.665], [.848, 1.296, 1.672, 2.002, 2.392, 2.663], [.848, 1.296, 1.671, 2.001, 2.391, 2.662], [.848, 1.296, 1.671, 2.000, 2.390, 2.660], [.848, 1.296, 1.670, 2.000, 2.389, 2.659], [.847, 1.295, 1.670, 1.999, 2.388, 2.657], [.847, 1.295, 1.669, 1.998, 2.387, 2.656], [.847, 1.295, 1.669, 1.998, 2.386, 2.655], [.847, 1.295, 1.669, 1.997, 2.385, 2.654], [.847, 1.295, 1.668, 1.997, 2.384, 2.652], [.847, 1.294, 1.668, 1.996, 2.383, 2.651], [.847, 1.294, 1.668, 1.995, 2.382, 2.650], [.847, 1.294, 1.667, 1.995, 2.382, 2.649], [.847, 1.294, 1.667, 1.994, 2.381, 2.648], [.847, 1.294, 1.667, 1.994, 2.380, 2.647], [.847, 1.293, 1.666, 1.993, 2.379, 2.646], [.847, 1.293, 1.666, 1.993, 2.379, 2.645], [.847, 1.293, 1.666, 1.993, 2.378, 2.644], [.846, 1.293, 1.665, 1.992, 2.377, 2.643], [.846, 1.293, 1.665, 1.992, 2.376, 2.642], [.846, 1.293, 1.665, 1.991, 2.376, 2.641], [.846, 1.292, 1.665, 1.991, 2.375, 2.640], [.846, 1.292, 1.664, 1.990, 2.374, 2.639], [.846, 1.292, 1.664, 1.990, 2.374, 2.639], [.846, 1.292, 1.664, 1.990, 2.373, 2.638], [.846, 1.292, 1.664, 1.989, 2.373, 2.637], [.846, 1.292, 1.663, 1.989, 2.372, 2.636], [.846, 1.292, 1.663, 1.989, 2.372, 2.636], [.846, 1.292, 1.663, 1.988, 2.371, 2.635], [.846, 1.291, 1.663, 1.988, 2.370, 2.634], [.846, 1.291, 1.663, 1.988, 2.370, 2.634], [.846, 1.291, 1.662, 1.987, 2.369, 2.633], [.846, 1.291, 1.662, 1.987, 2.369, 2.632],  [.846, 1.291, 1.662, 1.986, 2.368, 2.632], [.846, 1.291, 1.662, 1.986, 2.368, 2.631], [.846, 1.291, 1.662, 1.986, 2.368, 2.630], [.846, 1.291, 1.661, 1.986, 2.367, 2.630], [.845, 1.291, 1.661, 1.986, 2.367, 2.629], [.845, 1.291, 1.661, 1.985, 2.366, 2.629], [.845, 1.290, 1.661, 1.985, 2.366, 2.628], [.845, 1.290, 1.661, 1.985, 2.365, 2.627], [.845, 1.290, 1.661, 1.984, 2.365, 2.627], [.845, 1.290, 1.660, 1.984, 2.364, 2.626], [.845, 1.290, 1.660, 1.984, 2.364, 2.626], [.842, 1.282, 1.645, 1.960, 2.326, 2.576]]
    
    var area = document.getElementById('areat').value 
    var degf = document.getElementById('degfree').value
    var row = tdist[degf]
    var row101 = tdist[101]
    
    if (degf >= 0 && degf <= 100) {
        if (area == ".20") {
            tval = row[0]
        } else if (area == ".10") {
            tval = row[1]
        } else if (area == ".05") {
            tval = row[2]
        } else if (area == ".025") {
            tval = row[3]
        } else if (area == ".01") {
            tval = row[4]
        } else if (area == ".005") {
            tval = row[5]
        }
    } else if (degf > 100) {
        if (area == ".20") {
            tval = row101[0]
        } else if (area == ".10") {
            tval = row101[1]
        } else if (area == ".05") {
            tval = row101[2]
        } else if (area == ".025") {
            tval = row101[3]
        } else if (area == ".01") {
            tval = row101[4]
        } else if (area == ".005") {
            tval = row101[5]
        }
    }
    

    var table1 = "<td></td><td colspan='6'>$\\text{Area in Upper Tail}$</td>"
    
    var table2 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
    var table3 = "<td>$"+ degf +"$</td><td>$"+row[0]+"$</td><td>$"+row[1]+"$</td><td>$"+row[2]+"$</td><td>$"+row[3]+"$</td><td>$"+row[4]+"$</td><td>$"+row[5]+"$</td>"
    
    var table = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table3+"</tr></table>"
    

    document.getElementById("output2").innerHTML = table + "$$ t = " + tval + " $$"
    
    MathJax.typeset();
    
}


function comptarea2() {
    
    var tdist = [[0, 0, 0, 0, 0, 0], [1.376, 3.078, 6.314, 12.706, 31.821, 63.656], [1.061, 1.886, 2.920, 4.303, 6.965, 9.925], [.978, 1.638, 2.353, 3.182, 4.541, 5.841], [.941, 1.533, 2.132, 2.776, 3.747, 4.604], [.920, 1.476, 2.015, 2.571, 3.365, 4.032], [.906, 1.440, 1.943, 2.447, 3.143, 3.707], [.896, 1.415, 1.895, 2.365, 2.998, 3.499], [.889, 1.397, 1.860, 2.306, 2.896, 3.355], [.883, 1.383, 1.833, 2.262, 2.821, 3.250], [.879, 1.372, 1.812, 2.228, 2.764, 3.169], [.876, 1.363, 1.796, 2.201, 2.718, 3.106], [.873, 1.356, 1.782, 2.179, 2.681, 3.055], [.870, 1.350, 1.771, 2.160, 2.650, 3.012], [.868, 1.345, 1.761, 2.145, 2.624, 2.977], [.866, 1.341, 1.753, 2.131, 2.602, 2.947], [.865, 1.337, 1.746, 2.120, 2.583, 2.921], [.863, 1.333, 1.740, 2.110, 2.567, 2.898], [.862, 1.330, 1.734, 2.101, 2.552, 2.878], [.861, 1.328, 1.729, 2.093, 2.539, 2.861], [.860, 1.325, 1.725, 2.086, 2.528, 2.845], [.859, 1.323, 1.721, 2.080, 2.518, 2.831], [.858, 1.321, 1.717, 2.074, 2.508, 2.819], [.858, 1.319, 1.714, 2.069, 2.500, 2.807], [.857, 1.318, 1.711, 2.064, 2.492, 2.797], [.856, 1.316, 1.708, 2.060, 2.485, 2.787], [.856, 1.315, 1.706, 2.056, 2.479, 2.779], [.855, 1.314, 1.703, 2.052, 2.473, 2.771], [.855, 1.313, 1.701, 2.048, 2.467, 2.763], [.854, 1.311, 1.688, 2.045, 2.462, 2.756], [.854, 1.310, 1.697, 2.042, 2.457, 2.750], [.853, 1.309, 1.696, 2.040, 2.453, 2.744], [.853, 1.309, 1.694, 2.037, 2.449, 2.738], [.853, 1.308, 1.692, 2.035, 2.445, 2.733], [.852, 1.307, 1.691, 2.032, 2.441, 2.728], [.852, 1.306, 1.690, 2.030, 2.438, 2.724], [.852, 1.306, 1.688, 2.028, 2.434, 2.719], [.851, 1.305, 1.687, 2.026, 2.431, 2.715], [.851, 1.304, 1.686, 2.024, 2.429, 2.712], [.851, 1.304, 1.685, 2.023, 2.426, 2.708], [.851, 1.303, 1.684, 2.021, 2.423, 2.704], [.850, 1.303, 1.683, 2.020, 2.421, 2.701], [.850, 1.302, 1.682, 2.018, 2.418, 2.698], [.850, 1.302, 1.681, 2.017, 2.416, 2.695], [.850, 1.301, 1.680, 2.015, 2.414, 2.692], [.850, 1.301, 1.679, 2.014, 2.412, 2.690], [.850, 1.300, 1.679, 2.013, 2.410, 2.687], [.849, 1.300, 1.678, 2.012, 2.408, 2.685], [.849, 1.299, 1.677, 2.011, 2.407, 2.682], [.849, 1.299, 1.677, 2.010, 2.405, 2.680], [.849, 1.299, 1.676, 2.009, 2.403, 2.678], [.849, 1.298, 1.675, 2.008, 2.402, 2.676], [.849, 1.298, 1.675, 2.007, 2.400, 2.674], [.848, 1.298, 1.674, 2.006, 2.399, 2.672], [.848, 1.297, 1.674, 2.005, 2.397, 2.670], [.848, 1.297, 1.673, 2.004, 2.396, 2.668], [.848, 1.297, 1.673, 2.003, 2.395, 2.667], [.848, 1.297, 1.672, 2.002, 2.394, 2.665], [.848, 1.296, 1.672, 2.002, 2.392, 2.663], [.848, 1.296, 1.671, 2.001, 2.391, 2.662], [.848, 1.296, 1.671, 2.000, 2.390, 2.660], [.848, 1.296, 1.670, 2.000, 2.389, 2.659], [.847, 1.295, 1.670, 1.999, 2.388, 2.657], [.847, 1.295, 1.669, 1.998, 2.387, 2.656], [.847, 1.295, 1.669, 1.998, 2.386, 2.655], [.847, 1.295, 1.669, 1.997, 2.385, 2.654], [.847, 1.295, 1.668, 1.997, 2.384, 2.652], [.847, 1.294, 1.668, 1.996, 2.383, 2.651], [.847, 1.294, 1.668, 1.995, 2.382, 2.650], [.847, 1.294, 1.667, 1.995, 2.382, 2.649], [.847, 1.294, 1.667, 1.994, 2.381, 2.648], [.847, 1.294, 1.667, 1.994, 2.380, 2.647], [.847, 1.293, 1.666, 1.993, 2.379, 2.646], [.847, 1.293, 1.666, 1.993, 2.379, 2.645], [.847, 1.293, 1.666, 1.993, 2.378, 2.644], [.846, 1.293, 1.665, 1.992, 2.377, 2.643], [.846, 1.293, 1.665, 1.992, 2.376, 2.642], [.846, 1.293, 1.665, 1.991, 2.376, 2.641], [.846, 1.292, 1.665, 1.991, 2.375, 2.640], [.846, 1.292, 1.664, 1.990, 2.374, 2.639], [.846, 1.292, 1.664, 1.990, 2.374, 2.639], [.846, 1.292, 1.664, 1.990, 2.373, 2.638], [.846, 1.292, 1.664, 1.989, 2.373, 2.637], [.846, 1.292, 1.663, 1.989, 2.372, 2.636], [.846, 1.292, 1.663, 1.989, 2.372, 2.636], [.846, 1.292, 1.663, 1.988, 2.371, 2.635], [.846, 1.291, 1.663, 1.988, 2.370, 2.634], [.846, 1.291, 1.663, 1.988, 2.370, 2.634], [.846, 1.291, 1.662, 1.987, 2.369, 2.633], [.846, 1.291, 1.662, 1.987, 2.369, 2.632],  [.846, 1.291, 1.662, 1.986, 2.368, 2.632], [.846, 1.291, 1.662, 1.986, 2.368, 2.631], [.846, 1.291, 1.662, 1.986, 2.368, 2.630], [.846, 1.291, 1.661, 1.986, 2.367, 2.630], [.845, 1.291, 1.661, 1.986, 2.367, 2.629], [.845, 1.291, 1.661, 1.985, 2.366, 2.629], [.845, 1.290, 1.661, 1.985, 2.366, 2.628], [.845, 1.290, 1.661, 1.985, 2.365, 2.627], [.845, 1.290, 1.661, 1.984, 2.365, 2.627], [.845, 1.290, 1.660, 1.984, 2.364, 2.626], [.845, 1.290, 1.660, 1.984, 2.364, 2.626], [.842, 1.282, 1.645, 1.960, 2.326, 2.576]]
    
    var area = document.getElementById('areat').value 
    var degf = document.getElementById('degfree').value
    var row = tdist[degf]
    var row101 = tdist[101]
    
    if (degf >= 0 && degf <= 100) {
        if (area == ".20") {
            tval = row[0]
        } else if (area == ".10") {
            tval = row[1]
        } else if (area == ".05") {
            tval = row[2]
        } else if (area == ".025") {
            tval = row[3]
        } else if (area == ".01") {
            tval = row[4]
        } else if (area == ".005") {
            tval = row[5]
        }
    } else if (degf > 100) {
        if (area == ".20") {
            tval = row101[0]
        } else if (area == ".10") {
            tval = row101[1]
        } else if (area == ".05") {
            tval = row101[2]
        } else if (area == ".025") {
            tval = row101[3]
        } else if (area == ".01") {
            tval = row101[4]
        } else if (area == ".005") {
            tval = row101[5]
        }
    }

    var table1 = "<td></td><td colspan='6'>$\\text{Area in Upper Tail}$</td>"
    
    var table2 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
    var table3 = "<td>$"+ degf +"$</td><td>$"+row[0]+"$</td><td>$"+row[1]+"$</td><td>$"+row[2]+"$</td><td>$"+row[3]+"$</td><td>$"+row[4]+"$</td><td>$"+row[5]+"$</td>"
    
    var table = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table3+"</tr></table>"

    document.getElementById("output2").innerHTML = table + "$$ t = " + (-1 * tval) + " $$"
    
    MathJax.typeset();
    
}


function comptdistprob() {
    var probtype = document.getElementById('probtypet').value
    if (probtype == "right") {
        comptdist1() 
    } else if (probtype == "left") {
        comptdist2() 
    } 
}

function comptdist1() {
    $("#myCanvas").show();
    
    var tdist = [[0, 0, 0, 0, 0, 0], [1.376, 3.078, 6.314, 12.706, 31.821, 63.656], [1.061, 1.886, 2.920, 4.303, 6.965, 9.925], [.978, 1.638, 2.353, 3.182, 4.541, 5.841], [.941, 1.533, 2.132, 2.776, 3.747, 4.604], [.920, 1.476, 2.015, 2.571, 3.365, 4.032], [.906, 1.440, 1.943, 2.447, 3.143, 3.707], [.896, 1.415, 1.895, 2.365, 2.998, 3.499], [.889, 1.397, 1.860, 2.306, 2.896, 3.355], [.883, 1.383, 1.833, 2.262, 2.821, 3.250], [.879, 1.372, 1.812, 2.228, 2.764, 3.169], [.876, 1.363, 1.796, 2.201, 2.718, 3.106], [.873, 1.356, 1.782, 2.179, 2.681, 3.055], [.870, 1.350, 1.771, 2.160, 2.650, 3.012], [.868, 1.345, 1.761, 2.145, 2.624, 2.977], [.866, 1.341, 1.753, 2.131, 2.602, 2.947], [.865, 1.337, 1.746, 2.120, 2.583, 2.921], [.863, 1.333, 1.740, 2.110, 2.567, 2.898], [.862, 1.330, 1.734, 2.101, 2.552, 2.878], [.861, 1.328, 1.729, 2.093, 2.539, 2.861], [.860, 1.325, 1.725, 2.086, 2.528, 2.845], [.859, 1.323, 1.721, 2.080, 2.518, 2.831], [.858, 1.321, 1.717, 2.074, 2.508, 2.819], [.858, 1.319, 1.714, 2.069, 2.500, 2.807], [.857, 1.318, 1.711, 2.064, 2.492, 2.797], [.856, 1.316, 1.708, 2.060, 2.485, 2.787], [.856, 1.315, 1.706, 2.056, 2.479, 2.779], [.855, 1.314, 1.703, 2.052, 2.473, 2.771], [.855, 1.313, 1.701, 2.048, 2.467, 2.763], [.854, 1.311, 1.688, 2.045, 2.462, 2.756], [.854, 1.310, 1.697, 2.042, 2.457, 2.750], [.853, 1.309, 1.696, 2.040, 2.453, 2.744], [.853, 1.309, 1.694, 2.037, 2.449, 2.738], [.853, 1.308, 1.692, 2.035, 2.445, 2.733], [.852, 1.307, 1.691, 2.032, 2.441, 2.728], [.852, 1.306, 1.690, 2.030, 2.438, 2.724], [.852, 1.306, 1.688, 2.028, 2.434, 2.719], [.851, 1.305, 1.687, 2.026, 2.431, 2.715], [.851, 1.304, 1.686, 2.024, 2.429, 2.712], [.851, 1.304, 1.685, 2.023, 2.426, 2.708], [.851, 1.303, 1.684, 2.021, 2.423, 2.704], [.850, 1.303, 1.683, 2.020, 2.421, 2.701], [.850, 1.302, 1.682, 2.018, 2.418, 2.698], [.850, 1.302, 1.681, 2.017, 2.416, 2.695], [.850, 1.301, 1.680, 2.015, 2.414, 2.692], [.850, 1.301, 1.679, 2.014, 2.412, 2.690], [.850, 1.300, 1.679, 2.013, 2.410, 2.687], [.849, 1.300, 1.678, 2.012, 2.408, 2.685], [.849, 1.299, 1.677, 2.011, 2.407, 2.682], [.849, 1.299, 1.677, 2.010, 2.405, 2.680], [.849, 1.299, 1.676, 2.009, 2.403, 2.678], [.849, 1.298, 1.675, 2.008, 2.402, 2.676], [.849, 1.298, 1.675, 2.007, 2.400, 2.674], [.848, 1.298, 1.674, 2.006, 2.399, 2.672], [.848, 1.297, 1.674, 2.005, 2.397, 2.670], [.848, 1.297, 1.673, 2.004, 2.396, 2.668], [.848, 1.297, 1.673, 2.003, 2.395, 2.667], [.848, 1.297, 1.672, 2.002, 2.394, 2.665], [.848, 1.296, 1.672, 2.002, 2.392, 2.663], [.848, 1.296, 1.671, 2.001, 2.391, 2.662], [.848, 1.296, 1.671, 2.000, 2.390, 2.660], [.848, 1.296, 1.670, 2.000, 2.389, 2.659], [.847, 1.295, 1.670, 1.999, 2.388, 2.657], [.847, 1.295, 1.669, 1.998, 2.387, 2.656], [.847, 1.295, 1.669, 1.998, 2.386, 2.655], [.847, 1.295, 1.669, 1.997, 2.385, 2.654], [.847, 1.295, 1.668, 1.997, 2.384, 2.652], [.847, 1.294, 1.668, 1.996, 2.383, 2.651], [.847, 1.294, 1.668, 1.995, 2.382, 2.650], [.847, 1.294, 1.667, 1.995, 2.382, 2.649], [.847, 1.294, 1.667, 1.994, 2.381, 2.648], [.847, 1.294, 1.667, 1.994, 2.380, 2.647], [.847, 1.293, 1.666, 1.993, 2.379, 2.646], [.847, 1.293, 1.666, 1.993, 2.379, 2.645], [.847, 1.293, 1.666, 1.993, 2.378, 2.644], [.846, 1.293, 1.665, 1.992, 2.377, 2.643], [.846, 1.293, 1.665, 1.992, 2.376, 2.642], [.846, 1.293, 1.665, 1.991, 2.376, 2.641], [.846, 1.292, 1.665, 1.991, 2.375, 2.640], [.846, 1.292, 1.664, 1.990, 2.374, 2.639], [.846, 1.292, 1.664, 1.990, 2.374, 2.639], [.846, 1.292, 1.664, 1.990, 2.373, 2.638], [.846, 1.292, 1.664, 1.989, 2.373, 2.637], [.846, 1.292, 1.663, 1.989, 2.372, 2.636], [.846, 1.292, 1.663, 1.989, 2.372, 2.636], [.846, 1.292, 1.663, 1.988, 2.371, 2.635], [.846, 1.291, 1.663, 1.988, 2.370, 2.634], [.846, 1.291, 1.663, 1.988, 2.370, 2.634], [.846, 1.291, 1.662, 1.987, 2.369, 2.633], [.846, 1.291, 1.662, 1.987, 2.369, 2.632],  [.846, 1.291, 1.662, 1.986, 2.368, 2.632], [.846, 1.291, 1.662, 1.986, 2.368, 2.631], [.846, 1.291, 1.662, 1.986, 2.368, 2.630], [.846, 1.291, 1.661, 1.986, 2.367, 2.630], [.845, 1.291, 1.661, 1.986, 2.367, 2.629], [.845, 1.291, 1.661, 1.985, 2.366, 2.629], [.845, 1.290, 1.661, 1.985, 2.366, 2.628], [.845, 1.290, 1.661, 1.985, 2.365, 2.627], [.845, 1.290, 1.661, 1.984, 2.365, 2.627], [.845, 1.290, 1.660, 1.984, 2.364, 2.626], [.845, 1.290, 1.660, 1.984, 2.364, 2.626], [.842, 1.282, 1.645, 1.960, 2.326, 2.576]]
    
    var degf = parseFloat(document.getElementById('degfree').value)
    var tval = parseFloat(document.getElementById('tdistval').value)
    var tvalpos = -1 * tval
    var prob = 1 - compute(tval,degf)
    var probpos = 1 - compute(tvalpos,degf)
    
    var row = tdist[degf]

    var lessval = tval
    var lessvalz = 30+10*lessval
    var exp = 2.71828;
    
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2)))) 
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
      points0[i] = {x:283 - 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(283, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(283, 130);
    
    ctx.fillText("t",285,132);
    ctx.fillText(lessval,10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);

    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(283, 119);
    
    ctx.stroke();

    
    var table1 = "<td></td><td colspan='6'>$\\text{Area in Upper Tail}$</td>"
    
    var table2 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
    var table3 = "<td>$"+ degf +"$</td><td>$"+row[0]+"$</td><td>$"+row[1]+"$</td><td>$"+row[2]+"$</td><td>$"+row[3]+"$</td><td>$"+row[4]+"$</td><td>$"+row[5]+"$</td>"
    
    var table = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table3+"</tr></table>"

    
    if (tval >= 0) {
        
        if (prob < .005) {
            probval = "0 \\text{ to } .005"
        } else if (prob >= .005 && prob < .01) {
            probval = ".005 \\text{ to } .01"
        } else if (prob >= .01 && prob < .025) {
            probval = ".01 \\text{ to } .025"
        } else if (prob >= .025 && prob < .05) {
            probval = ".025 \\text{ to } .05"
        } else if (prob >= .05 && prob < .10) {
            probval = ".05 \\text{ to } .10"
        } else if (prob >= .10 && prob < .20) {
            probval = ".10 \\text{ to } .20"
        } else if (prob >= .20) {
            probval = ".20 \\text{ to } 1"
        }

        document.getElementById("output2").innerHTML = table + "$$ \\begin{align} P(t \\geq " + tval + ") &= " + probval + " \\end{align} $$"
        
    } else if (tval < 0) {
        
        if (probpos < .005) {
            probval = "0 \\text{ to } .005"
        } else if (probpos >= .005 && probpos < .01) {
            probval = ".005 \\text{ to } .01"
        } else if (probpos >= .01 && probpos < .025) {
            probval = ".01 \\text{ to } .025"
        } else if (probpos >= .025 && probpos < .05) {
            probval = ".025 \\text{ to } .05"
        } else if (probpos >= .05 && probpos < .10) {
            probval = ".05 \\text{ to } .10"
        } else if (probpos >= .10 && probpos < .20) {
            probval = ".10 \\text{ to } .20"
        } else if (probpos >= .20) {
            probval = ".20 \\text{ to } 1"
        }
        
        if (probpos < .005) {
            ansval = ".995 \\text{ to } 1"
        } else if (probpos >= .005 && probpos < .01) {
            ansval = ".99 \\text{ to } .995"
        } else if (probpos >= .01 && probpos < .025) {
            ansval = ".975 \\text{ to } .99"
        } else if (probpos >= .025 && probpos < .05) {
            ansval = ".95 \\text{ to } .975"
        } else if (probpos >= .05 && probpos < .10) {
            ansval = ".90 \\text{ to } .95"
        } else if (probpos >= .10 && probpos < .20) {
            ansval = ".80 \\text{ to } .90"
        } else if (probpos >= .20) {
            ansval = "0 \\text{ to } .80"
        }

        document.getElementById("output2").innerHTML = table + "$$ \\begin{align} P(t \\geq " + tval + ") &= 1 - P(t \\geq " + tvalpos + ") \\\\ &= 1 - ("+ probval + ") \\\\ &= " + ansval + " \\end{align} $$"
        
    }
    
    MathJax.typeset();
}

function comptdist2() {
    $("#myCanvas").show();
    
    var tdist = [[0, 0, 0, 0, 0, 0], [1.376, 3.078, 6.314, 12.706, 31.821, 63.656], [1.061, 1.886, 2.920, 4.303, 6.965, 9.925], [.978, 1.638, 2.353, 3.182, 4.541, 5.841], [.941, 1.533, 2.132, 2.776, 3.747, 4.604], [.920, 1.476, 2.015, 2.571, 3.365, 4.032], [.906, 1.440, 1.943, 2.447, 3.143, 3.707], [.896, 1.415, 1.895, 2.365, 2.998, 3.499], [.889, 1.397, 1.860, 2.306, 2.896, 3.355], [.883, 1.383, 1.833, 2.262, 2.821, 3.250], [.879, 1.372, 1.812, 2.228, 2.764, 3.169], [.876, 1.363, 1.796, 2.201, 2.718, 3.106], [.873, 1.356, 1.782, 2.179, 2.681, 3.055], [.870, 1.350, 1.771, 2.160, 2.650, 3.012], [.868, 1.345, 1.761, 2.145, 2.624, 2.977], [.866, 1.341, 1.753, 2.131, 2.602, 2.947], [.865, 1.337, 1.746, 2.120, 2.583, 2.921], [.863, 1.333, 1.740, 2.110, 2.567, 2.898], [.862, 1.330, 1.734, 2.101, 2.552, 2.878], [.861, 1.328, 1.729, 2.093, 2.539, 2.861], [.860, 1.325, 1.725, 2.086, 2.528, 2.845], [.859, 1.323, 1.721, 2.080, 2.518, 2.831], [.858, 1.321, 1.717, 2.074, 2.508, 2.819], [.858, 1.319, 1.714, 2.069, 2.500, 2.807], [.857, 1.318, 1.711, 2.064, 2.492, 2.797], [.856, 1.316, 1.708, 2.060, 2.485, 2.787], [.856, 1.315, 1.706, 2.056, 2.479, 2.779], [.855, 1.314, 1.703, 2.052, 2.473, 2.771], [.855, 1.313, 1.701, 2.048, 2.467, 2.763], [.854, 1.311, 1.688, 2.045, 2.462, 2.756], [.854, 1.310, 1.697, 2.042, 2.457, 2.750], [.853, 1.309, 1.696, 2.040, 2.453, 2.744], [.853, 1.309, 1.694, 2.037, 2.449, 2.738], [.853, 1.308, 1.692, 2.035, 2.445, 2.733], [.852, 1.307, 1.691, 2.032, 2.441, 2.728], [.852, 1.306, 1.690, 2.030, 2.438, 2.724], [.852, 1.306, 1.688, 2.028, 2.434, 2.719], [.851, 1.305, 1.687, 2.026, 2.431, 2.715], [.851, 1.304, 1.686, 2.024, 2.429, 2.712], [.851, 1.304, 1.685, 2.023, 2.426, 2.708], [.851, 1.303, 1.684, 2.021, 2.423, 2.704], [.850, 1.303, 1.683, 2.020, 2.421, 2.701], [.850, 1.302, 1.682, 2.018, 2.418, 2.698], [.850, 1.302, 1.681, 2.017, 2.416, 2.695], [.850, 1.301, 1.680, 2.015, 2.414, 2.692], [.850, 1.301, 1.679, 2.014, 2.412, 2.690], [.850, 1.300, 1.679, 2.013, 2.410, 2.687], [.849, 1.300, 1.678, 2.012, 2.408, 2.685], [.849, 1.299, 1.677, 2.011, 2.407, 2.682], [.849, 1.299, 1.677, 2.010, 2.405, 2.680], [.849, 1.299, 1.676, 2.009, 2.403, 2.678], [.849, 1.298, 1.675, 2.008, 2.402, 2.676], [.849, 1.298, 1.675, 2.007, 2.400, 2.674], [.848, 1.298, 1.674, 2.006, 2.399, 2.672], [.848, 1.297, 1.674, 2.005, 2.397, 2.670], [.848, 1.297, 1.673, 2.004, 2.396, 2.668], [.848, 1.297, 1.673, 2.003, 2.395, 2.667], [.848, 1.297, 1.672, 2.002, 2.394, 2.665], [.848, 1.296, 1.672, 2.002, 2.392, 2.663], [.848, 1.296, 1.671, 2.001, 2.391, 2.662], [.848, 1.296, 1.671, 2.000, 2.390, 2.660], [.848, 1.296, 1.670, 2.000, 2.389, 2.659], [.847, 1.295, 1.670, 1.999, 2.388, 2.657], [.847, 1.295, 1.669, 1.998, 2.387, 2.656], [.847, 1.295, 1.669, 1.998, 2.386, 2.655], [.847, 1.295, 1.669, 1.997, 2.385, 2.654], [.847, 1.295, 1.668, 1.997, 2.384, 2.652], [.847, 1.294, 1.668, 1.996, 2.383, 2.651], [.847, 1.294, 1.668, 1.995, 2.382, 2.650], [.847, 1.294, 1.667, 1.995, 2.382, 2.649], [.847, 1.294, 1.667, 1.994, 2.381, 2.648], [.847, 1.294, 1.667, 1.994, 2.380, 2.647], [.847, 1.293, 1.666, 1.993, 2.379, 2.646], [.847, 1.293, 1.666, 1.993, 2.379, 2.645], [.847, 1.293, 1.666, 1.993, 2.378, 2.644], [.846, 1.293, 1.665, 1.992, 2.377, 2.643], [.846, 1.293, 1.665, 1.992, 2.376, 2.642], [.846, 1.293, 1.665, 1.991, 2.376, 2.641], [.846, 1.292, 1.665, 1.991, 2.375, 2.640], [.846, 1.292, 1.664, 1.990, 2.374, 2.639], [.846, 1.292, 1.664, 1.990, 2.374, 2.639], [.846, 1.292, 1.664, 1.990, 2.373, 2.638], [.846, 1.292, 1.664, 1.989, 2.373, 2.637], [.846, 1.292, 1.663, 1.989, 2.372, 2.636], [.846, 1.292, 1.663, 1.989, 2.372, 2.636], [.846, 1.292, 1.663, 1.988, 2.371, 2.635], [.846, 1.291, 1.663, 1.988, 2.370, 2.634], [.846, 1.291, 1.663, 1.988, 2.370, 2.634], [.846, 1.291, 1.662, 1.987, 2.369, 2.633], [.846, 1.291, 1.662, 1.987, 2.369, 2.632],  [.846, 1.291, 1.662, 1.986, 2.368, 2.632], [.846, 1.291, 1.662, 1.986, 2.368, 2.631], [.846, 1.291, 1.662, 1.986, 2.368, 2.630], [.846, 1.291, 1.661, 1.986, 2.367, 2.630], [.845, 1.291, 1.661, 1.986, 2.367, 2.629], [.845, 1.291, 1.661, 1.985, 2.366, 2.629], [.845, 1.290, 1.661, 1.985, 2.366, 2.628], [.845, 1.290, 1.661, 1.985, 2.365, 2.627], [.845, 1.290, 1.661, 1.984, 2.365, 2.627], [.845, 1.290, 1.660, 1.984, 2.364, 2.626], [.845, 1.290, 1.660, 1.984, 2.364, 2.626], [.842, 1.282, 1.645, 1.960, 2.326, 2.576]]
    
    var degf = parseFloat(document.getElementById('degfree').value)
    var tval = parseFloat(document.getElementById('tdistval').value)
    var tvalpos = -1 * tval
    var prob = 1 - compute(tval,degf)
    var probpos = 1 - compute(tvalpos,degf)
    var ans = 1 - prob
    
    var row = tdist[degf]


    var lessval = tval
    var lessvalz = 30+10*lessval
    var exp = 2.71828;

    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2)))) 
    }
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.fillText("t",285,132);
    ctx.fillText(lessval,10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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

    var table1 = "<td></td><td colspan='6'>$\\text{Area in Upper Tail}$</td>"
    
    var table2 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
    var table3 = "<td>$"+ degf +"$</td><td>$"+row[0]+"$</td><td>$"+row[1]+"$</td><td>$"+row[2]+"$</td><td>$"+row[3]+"$</td><td>$"+row[4]+"$</td><td>$"+row[5]+"$</td>"
    
    var table = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table3+"</tr></table>"

    
    if (tval >= 0) {
        
        if (prob < .005) {
            probval = "0 \\text{ to } .005"
        } else if (prob >= .005 && prob < .01) {
            probval = ".005 \\text{ to } .01"
        } else if (prob >= .01 && prob < .025) {
            probval = ".01 \\text{ to } .025"
        } else if (prob >= .025 && prob < .05) {
            probval = ".025 \\text{ to } .05"
        } else if (prob >= .05 && prob < .10) {
            probval = ".05 \\text{ to } .10"
        } else if (prob >= .10 && prob < .20) {
            probval = ".10 \\text{ to } .20"
        } else if (prob >= .20) {
            probval = ".20 \\text{ to } 1"
        }

        if (ans < .005) {
            ansval = "0 \\text{ to } .005"
        } else if (ans >= .005 && ans < .01) {
            ansval = ".005 \\text{ to } .01"
        } else if (ans >= .01 && ans < .025) {
            ansval = ".01 \\text{ to } .025"
        } else if (ans >= .025 && ans < .05) {
            ansval = ".025 \\text{ to } .05"
        } else if (ans >= .05 && ans < .10) {
            ansval = ".05 \\text{ to } .10"
        } else if (ans >= .10 && ans < .20) {
            ansval = ".10 \\text{ to } .20"
        } else if (ans >= .20 && ans < .80) {
            ansval = ".20 \\text{ to } .80"
        } else if (ans >= .80 && ans < .90) {
            ansval = ".80 \\text{ to } .90"
        } else if (ans >= .90 && ans < .95) {
            ansval = ".90 \\text{ to } .95"
        } else if (ans >= .95 && ans < .975) {
            ansval = ".95 \\text{ to } .975"
        } else if (ans >= .975 && ans < .99) {
            ansval = ".975 \\text{ to } .99"
        } else if (ans >= .99 && ans < .995) {
            ansval = ".99 \\text{ to } .995"
        } 

        document.getElementById("output2").innerHTML = table + "$$ \\begin{align} P(t \\leq " + tval + ") &= 1 - P(t \\geq " + tval + ") \\\\ &= 1 - ("+ probval + ") \\\\ &= " + ansval + " \\end{align} $$"
        
    } else if (tval < 0) {
        
        if (probpos < .005) {
            probval = "0 \\text{ to } .005"
        } else if (probpos >= .005 && probpos < .01) {
            probval = ".005 \\text{ to } .01"
        } else if (probpos >= .01 && probpos < .025) {
            probval = ".01 \\text{ to } .025"
        } else if (probpos >= .025 && probpos < .05) {
            probval = ".025 \\text{ to } .05"
        } else if (probpos >= .05 && probpos < .10) {
            probval = ".05 \\text{ to } .10"
        } else if (probpos >= .10 && probpos < .20) {
            probval = ".10 \\text{ to } .20"
        } else if (probpos >= .20) {
            probval = ".20 \\text{ to } 1"
        }

        document.getElementById("output2").innerHTML = table + "$$ \\begin{align} P(t \\leq " + tval + ") &= P(t \\geq " + tvalpos + ") \\\\ &= " + probval + " \\end{align} $$"
        
    }
    
    
    MathJax.typeset();
}






























function chisquare() {
    $("#chidistribution").show();
}


function compchi() {
    var chidist = [[0,0,0,0,0,0,0,0,0,0],[.000,.000,.001,.004,.016,2.706,3.841,5.024,6.635,7.879],[.010,.020,.051,.103,.211,4.605,5.991,7.378,9.210,10.597],[.072,.115,.216,.352,.584,6.251,7.815,9.210,10.597],[.207,.297,.484,.711,1.064,7.779,9.448,11.143,13.277,14.860],[.412,.554,.831,1.145,1.610,9.236,11.070,12.832,15.086,16.750],[.676,.872,1.237,2.204,10.645,12.592,14.449,16.812,18.548],[.989,1.239,1.690,2.167,2.833,12.017,14.067,16.013,18.475,20.278],[1.344,1.647,2.180,2.733,3.490,13.362,15.507,17.535,20.090,21.955],[1.735,2.088,2.700,2.325,4.168,14.684,16.919,19.023,21.666,23.589],[2.156,2.558,3.247,3.940,4.865,15.987,18.307,20.483,23.209,25.188],[2.603,3.053,3.816,4.575,5.578,17.275,19.675,21.920,24.725,26.757],[3.074,3.571,4.404,5.226,6.304,18.549,21.026,23.337,26.217,28.300],[3.565,4.107,5.009,5.892,7.041,19.812,22.362,24.736,27.688,29.819],[4.075,4.660,5.629,6.571,7.790,21.064,23.685,26.119,29.141,31.319],[4.601,5.229,6.262,7.261,8.547,22.307,24.996,27.488,30.578,32.801],[5.142,5.812,6.908,7.962,9.312,23.542,26.296,28.845,32.000,34.267],[5.697,6.408,7.564,8.672,10.085,24.769,27.587,30.191,33.409,35.718],[6.265,7.015,8.231,9.390,10.865,25.989,28.869,31.526,34.805,37.156],[6.884,7.633,8.907,10.117,11.651,27.204,30.144,32.852,36.191,38.582],[7.434,8.260,9.591,10.851,12.443,28.412,31.410,34.170,37.566,39.997],[8.034,8.897,10.283,11.591,13.240,29.615,32.671,35.479,38.932,41.401],[8.643,9.542,10.982,12.338,14.041,30.813,33.924,36.781,40.289,42.796],[9.260,10.196,11.689,13.091,14.848,32.007,35.172,38.076,41.638,44.181],[9.886,10.856,12.401,13.848,15.659,33.196,36.415,39.364,42.980,45.558],[10.520,11.524,13.120,14.611,16.473,34.382,37.652,40.646,44.314,46.928],[11.160,12.198,13.844,15.379,17.292,35.563,38.885,41.923,45.642,48.290],[11.808,12.878,14.573,16.151,18.114,36.741,40.113,43.195,46.963,49.645],[12.461,13.565,15.308,16.928,18.939,37.916,41.337,44.461,48.378,50.994],[13.121,14.256,16.047,17.708,19.768,39.087,42.557,45.722,49.588,52.335],[13.787,14.953,16.791,18.493,20.599,40.256,43.773,46.979,50.892,53.672]]
    
    $("#myCanvas").show();
    var area = document.getElementById('areac').value 
    var degf = document.getElementById('degfreec').value
    var row = chidist[degf]
    var exp = 2.71828;
    
    var f = [];
        var i;
        for (i = 0; i < 20; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(Math.pow(i,8/2-1)*Math.pow(exp,-.5*i))
        }

        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(190, 130);
        ctx.lineTo(190, 106);
        ctx.quadraticCurveTo(210, 120, 247, 125);
        ctx.lineTo(247, 130);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 10);
        ctx.lineTo(20, 130);
        ctx.lineTo(280, 130);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(190, 135);
        ctx.lineTo(190, 125);
        ctx.stroke();

        ctx.fillText("χ²",285,132);
        ctx.fillText("χ²",185,145);
        ctx.fillText(area,193,149);

        ctx.fillText(area,205,108);


        var points = []

        for (i = 0; i < 20; i++) {
          points[i] = {x:20 + 12*i, y:130 - 10*f[i]}
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
    
    if (degf > 0 && degf <= 30) {
        if (area == ".995") {
            chi = row[0]
        } else if (area == ".99") {
            chi = row[1]
        } else if (area == ".975") {
            chi = row[2]
        } else if (area == ".95") {
            chi = row[3]
        } else if (area == ".90") {
            chi = row[4]
        } else if (area == ".10") {
            chi = row[5]
        } else if (area == ".05") {
            chi = row[6]
        } else if (area == ".025") {
            chi = row[7]
        } else if (area == ".01") {
            chi = row[8]
        } else if (area == ".005") {
            chi = row[9]
        }
    } 
    
    document.getElementById("output2").innerHTML = "$$ \\chi^2_{" + area + "} = " + chi + " $$"
    
    MathJax.typeset();
    
}


















function fdistribution() {
    $("#fdistribution").show();
}


function compfdist() {
    var fdist10 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,39.86,49.50,53.59,55.83,57.24,58.20,58.91,59.44,59.86,60.19,61.22,61.74,62.05,62.26,62.53,62.79,63.01,63.30],[0,8.53,9.00,9.16,9.24,9.29,9.33,9.35,9.37,9.38,9.39,9.42,9.44,9.45,9.46,9.47,9.47,9.48,9.49],[0,5.54,5.46,5.39,5.34,5.31,5.28,5.27,5.25,5.24,5.23,5.20,5.18,5.17,5.17,5.16,5.15,5.14,5.13],[0,4.54,4.32,4.19,4.11,4.05,4.01,3.98,3.95,3.94,3.92,3.87,3.84,3.83,3.82,3.80,3.79,3.78,3.76],[0,4.06,3.78,3.62,3.52,3.45,3.40,3.37,3.34,3.32,3.30,3.24,3.21,3.19,3.17,3.16,3.14,3.13,3.11],[0,3.78,3.46,3.29,3.18,3.11,3.05,3.01,2.98,2.96,2.94,2.87,2.84,2.81,2.80,2.78,2.76,2.75,2.72],[0,3.59,3.26,3.07,2.96,2.88,2.83,2.78,2.75,2.72,2.70,2.63,2.59,2.57,2.56,2.54,2.51,2.50,2.47],[0,3.46,3.11,2.92,2.81,2.73,2.67,2.62,2.59,2.56,2.54,2.46,2.42,2.40,2.38,2.36,2.34,2.32,2.30],[0,3.36,3.01,2.81,2.69,2.61,2.55,2.51,2.47,2.44,2.42,2.34,2.30,2.27,2.25,2.23,2.21,2.19,2.16],[0,3.29,2.92,2.73,2.61,2.52,2.46,2.41,2.38,2.35,2.32,2.24,2.20,2.17,2.16,2.13,2.11,2.09,2.06],[0,3.23,2.86,2.66,2.54,2.45,2.39,2.34,2.30,2.27,2.25,2.17,2.12,2.10,2.08,2.05,2.03,2.01,1.98],[0,3.18,2.81,2.61,2.48,2.39,2.33,2.28,2.24,2.21,2.19,2.10,2.06,2.03,2.01,1.99,1.96,1.94,1.91],[0,3.14,2.76,2.56,2.43,2.35,2.28,2.23,2.20,2.16,2.14,2.05,2.01,1.98,1.96,1.93,1.90,1.88,1.85],[0,3.10,2.73,2.52,2.39,2.31,2.24,2.19,2.15,2.12,2.10,2.01,1.96,1.93,1.91,1.89,1.86,1.83,1.80],[0,3.07,2.70,2.49,2.36,2.27,2.21,2.16,2.12,2.09,2.06,1.97,1.92,1.89,1.87,1.85,1.82,1.79,1.76],[0,3.05,2.67,2.46,2.33,2.24,2.18,2.13,2.09,2.06,2.03,1.94,1.89,1.86,1.84,1.81,1.78,1.76,1.72],[0,3.03,2.64,2.44,2.31,2.22,2.15,2.10,2.06,2.03,2.00,1.91,1.86,1.83,1.81,1.78,1.75,1.73,1.69],[0,3.01,2.62,2.42,2.29,2.20,2.13,2.08,2.04,2.00,1.98,1.89,1.84,1.80,1.78,1.75,1.72,1.70,1.66],[0,2.99,2.61,2.40,2.27,2.18,2.11,2.06,2.02,1.98,1.96,1.86,1.81,1.78,1.76,1.73,1.70,1.67,1.64],[0,2.97,2.59,2.38,2.25,2.16,2.09,2.04,2.00,1.96,1.94,1.84,1.79,1.76,1.74,1.71,1.68,1.65,1.61],[0,2.96,2.57,2.36,2.23,2.14,2.08,2.02,1.98,1.95,1.92,1.83,1.78,1.74,1.72,1.69,1.66,1.63,1.59],[0,2.95,2.56,2.35,2.22,2.13,2.06,2.01,1.97,1.93,1.90,1.81,1.76,1.73,1.70,1.67,1.64,1.61,1.57],[0,2.94,2.55,2.34,2.21,2.11,2.05,1.99,1.95,1.92,1.89,1.80,1.74,1.71,1.69,1.66,1.62,1.59,1.55],[0,2.93,2.54,2.33,2.19,2.10,2.04,1.98,1.94,1.91,1.88,1.78,1.73,1.70,1.67,1.64,1.61,1.58,1.54],[0,2.92,2.53,2.32,2.18,2.09,2.02,1.97,1.93,1.89,1.87,1.77,1.72,1.68,1.66,1.63,1.59,1.56,1.52],[0,2.91,2.52,2.31,2.17,2.08,2.01,1.96,1.92,1.88,1.86,1.76,1.71,1.67,1.65,1.61,1.58,1.55,1.51],[0,2.90,2.51,2.30,2.17,2.07,2.00,1.95,1.91,1.87,1.85,1.75,1.70,1.66,1.64,1.60,1.57,1.54,1.50],[0,2.89,2.50,2.29,2.16,2.06,2.00,1.94,1.90,1.87,1.84,1.74,1.69,1.65,1.63,1.59,1.56,1.53,1.48],[0,2.89,2.50,2.28,2.15,2.06,1.99,1.93,1.89,1.86,1.83,1.73,1.68,1.64,1.62,1.58,1.55,1.52,1.47],[0,2.88,2.49,2.28,2.14,2.05,1.98,1.93,1.88,1.85,1.82,1.72,1.67,1.63,1.61,1.57,1.54,1.51,1.46],[0,2.84,2.44,2.23,2.09,2.00,1.93,1.87,1.83,1.79,1.76,1.66,1.61,1.57,1.54,1.51,1.47,1.43,1.38],[0,2.79,2.39,2.18,2.04,1.95,1.87,1.82,1.77,1.74,1.71,1.60,1.54,1.50,1.48,1.44,1.40,1.36,1.30],[0,2.76,2.36,2.14,2.00,1.91,1.83,1.78,1.73,1.69,1.66,1.56,1.49,1.45,1.42,1.38,1.34,1.29,1.22],[0,2.71,2.31,2.09,1.95,1.85,1.78,1.72,1.68,1.64,1.61,1.49,1.43,1.38,1.35,1.30,1.25,1.20,1.08]]
    
    var fdist05 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,161.45,199.50,215.71,224.58,230.16,233.99,236.77,238.88,240.54,241.88,245.95,248.01,249.26,250.10,251.14,252.20,253.04,254.19],[0,18.51,19.00,19.16,19.25,19.30,19.33,19.35,19.37,19.38,19.40,19.43,19.45,19.46,19.46,19.47,19.48,19.49,19.49],[0,10.13,9.55,9.28,9.12,9.01,8.94,8.89,8.85,8.81,8.79,8.70,8.66,8.63,8.62,8.59,8.57,8.55,8.53],[0,7.71,6.94,6.59,6.39,6.26,6.16,6.09,6.04,6.00,5.96,5.86,5.80,5.77,5.75,5.72,5.69,5.66,5.63],[0,6.61,5.79,5.41,5.19,5.05,4.95,4.88,4.82,4.77,4.74,4.62,4.56,4.52,4.50,4.46,4.43,4.41,4.37],[0,5.99,5.14,4.76,4.53,4.39,4.28,4.21,4.15,4.10,4.06,3.94,3.87,3.83,3.81,3.77,3.74,3.71,3.67],[0,5.59,4.74,4.35,4.12,3.97,3.87,3.79,3.73,3.68,3.64,3.51,3.44,3.40,3.38,3.34,3.30,3.27,3.23],[0,5.32,4.46,4.07,3.84,3.69,3.58,3.50,3.44,3.39,3.35,3.22,3.15,3.11,3.08,3.04,3.01,2.97,2.93],[0,5.12,4.26,3.86,3.63,3.48,3.37,3.29,3.23,3.18,3.14,3.01,2.94,2.89,2.86,2.83,2.79,2.76,2.71],[0,4.96,4.10,3.71,3.48,3.33,3.22,3.14,3.07,3.02,2.98,2.85,2.77,2.73,2.70,2.66,2.62,2.59,2.54],[0,4.84,3.98,3.59,3.36,3.20,3.09,3.01,2.95,2.90,2.85,2.72,2.65,2.60,2.57,2.53,2.49,2.46,2.41],[0,4.75,3.89,3.49,3.26,3.11,3.00,2.91,2.85,2.80,2.75,2.62,2.54,2.50,2.47,2.43,2.38,2.35,2.30],[0,4.67,3.81,3.41,3.18,3.03,2.92,2.83,2.77,2.71,2.67,2.53,2.46,2.41,2.38,2.34,2.30,2.26,2.21],[0,4.60,3.74,3.34,3.11,2.96,2.85,2.76,2.70,2.65,2.60,2.46,2.39,2.34,2.31,2.27,2.22,2.19,2.14],[0,4.54,3.68,3.29,3.06,2.90,2.79,2.71,2.64,2.59,2.54,2.40,2.33,2.28,2.25,2.20,2.16,2.12,2.07],[0,4.49,3.63,3.24,3.01,2.85,2.74,2.66,2.59,2.54,2.49,2.35,2.28,2.23,2.19,2.15,2.11,2.07,2.02],[0,4.45,3.59,3.20,2.96,2.81,2.70,2.61,2.55,2.49,2.45,2.31,2.23,2.18,2.15,2.10,2.06,2.02,1.97],[0,4.41,3.55,3.16,2.93,2.77,2.66,2.58,2.51,2.46,2.41,2.27,2.19,2.14,2.11,2.06,2.02,1.98,1.92],[0,4.38,3.52,3.13,2.90,2.74,2.63,2.54,2.48,2.42,2.38,2.23,2.16,2.11,2.07,2.03,1.98,1.94,1.88],[0,4.35,3.49,3.10,2.87,2.71,2.60,2.51,2.45,2.39,2.35,2.20,2.12,2.07,2.04,1.99,1.95,1.91,1.85],[0,4.32,3.47,3.07,2.84,2.68,2.57,2.49,2.42,2.37,2.32,2.18,2.10,2.05,2.01,1.96,1.92,1.88,1.82],[0,4.30,3.44,3.05,2.82,2.66,2.55,2.46,2.40,2.34,2.30,2.15,2.07,2.02,1.98,1.94,1.89,1.85,1.79],[0,4.28,3.42,3.03,2.80,2.64,2.53,2.44,2.37,2.32,2.27,2.13,2.05,2.00,1.96,1.91,1.86,1.82,1.76],[0,4.26,3.40,3.01,2.78,2.62,2.51,2.42,2.36,2.30,2.25,2.11,2.03,1.97,1.94,1.89,1.84,1.80,1.74],[0,4.24,3.39,2.99,2.76,2.60,2.49,2.40,2.34,2.28,2.24,2.09,2.01,1.96,1.92,1.87,1.82,1.78,1.72],[0,4.23,3.37,2.98,2.74,2.59,2.47,2.39,2.32,2.27,2.22,2.07,1.99,1.94,1.90,1.85,1.80,1.76,1.70],[0,4.21,3.35,2.96,2.73,2.57,2.46,2.37,2.31,2.25,2.20,2.06,1.97,1.92,1.88,1.84,1.79,1.74,1.68],[0,4.20,3.34,2.95,2.71,2.56,2.45,2.36,2.29,2.24,2.19,2.04,1.96,1.91,1.87,1.82,1.77,1.73,1.66],[0,4.18,3.33,2.93,2.70,2.55,2.43,2.35,2.28,2.22,2.18,2.03,1.94,1.89,1.85,1.81,1.75,1.71,1.65],[0,4.17,3.32,2.92,2.69,2.53,2.42,2.33,2.27,2.21,2.16,2.01,1.93,1.88,1.84,1.79,1.74,1.70,1.63],[0,4.08,3.23,2.84,2.61,2.45,2.34,2.25,2.18,2.12,2.08,1.92,1.84,1.78,1.74,1.69,1.64,1.59,1.52],[0,4.00,3.15,2.76,2.53,2.37,2.25,2.17,2.10,2.04,1.99,1.84,1.75,1.69,1.65,1.59,1.53,1.48,1.40],[0,3.94,3.09,2.70,2.46,2.31,2.19,2.10,2.03,1.97,1.93,1.77,1.68,1.62,1.57,1.52,1.45,1.39,1.30],[0,3.85,3.00,2.61,2.38,2.22,2.11,2.02,1.95,1.89,1.84,1.68,1.58,1.52,1.47,1.41,1.33,1.26,1.11]]
    
    var fdist025 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,647.79,799.50,864.16,899.58,921.85,937.11,948.22,956.66,963.28,968.63,984.87,993.10,998.08,1001.41,1005.60,1009.80,1013.17,1017.75],[0,38.51,39.00,39.17,39.25,39.30,39.33,39.36,39.37,39.39,39.40,39.43,39.45,39.46,39.46,39.47,39.48,39.49,39.50],[0,17.44,16.04,15.44,15.10,14.88,14.73,14.62,14.54,14.47,14.42,14.25,14.17,14.12,14.08,14.04,13.99,13.96,13.91],[0,12.22,10.65,9.98,9.60,9.36,9.20,9.07,8.98,8.90,8.84,8.66,8.56,8.50,8.46,8.41,8.36,8.32,8.26],[0,10.01,8.43,7.76,7.39,7.15,6.98,6.85,6.76,6.68,6.62,6.43,6.33,6.27,6.23,6.18,6.12,6.08,6.02],[0,8.81,7.26,6.60,6.23,5.99,5.82,5.70,5.60,5.52,5.46,5.27,5.17,5.11,5.07,5.01,4.96,4.92,4.86],[0,8.07,6.54,5.89,5.52,5.29,5.12,4.99,4.90,4.82,4.76,4.57,4.47,4.40,4.36,4.31,4.25,4.21,4.15],[0,7.57,6.06,5.42,5.05,4.82,4.65,4.53,4.43,4.36,4.30,4.10,4.00,3.94,3.89,3.84,3.78,3.74,3.68],[0,7.21,5.71,5.08,4.72,4.48,4.32,4.20,4.10,4.03,3.96,3.77,3.67,3.60,3.56,3.51,3.45,3.40,3.34],[0,6.94,5.46,4.83,4.47,4.24,4.07,3.95,3.85,3.78,3.72,3.52,3.42,3.35,3.31,3.26,3.20,3.15,3.09],[0,6.72,5.26,4.63,4.28,4.04,3.88,3.76,3.66,3.59,3.53,3.33,3.23,3.16,3.12,3.06,3.00,2.96,2.89],[0,6.55,5.10,4.47,4.12,3.89,3.73,3.61,3.51,3.44,3.37,3.18,3.07,3.01,2.96,2.91,2.85,2.80,2.73],[0,6.41,4.97,4.35,4.00,3.77,3.60,3.48,3.39,3.31,3.25,3.05,2.95,2.88,2.84,2.78,2.72,2.67,2.60],[0,6.30,4.86,4.24,3.89,3.66,3.50,3.38,3.29,3.21,3.15,2.95,2.84,2.78,2.73,2.67,2.61,2.56,2.50],[0,6.20,4.77,4.15,3.80,3.58,3.41,3.29,3.20,3.12,3.06,2.86,2.76,2.69,2.64,2.59,2.52,2.47,2.40],[0,6.12,4.69,4.08,3.73,3.50,3.34,3.22,3.12,3.05,2.99,2.79,2.68,2.61,2.57,2.51,2.45,2.40,2.32],[0,6.04,4.62,4.01,3.66,3.44,3.28,3.16,3.06,2.98,2.92,2.72,2.62,2.55,2.50,2.44,2.38,2.33,2.26],[0,5.98,4.56,3.95,3.61,3.38,3.22,3.10,3.01,2.93,2.87,2.67,2.56,2.49,2.44,2.38,2.32,2.27,2.20],[0,5.92,4.51,3.90,3.56,3.33,3.17,3.05,2.96,2.88,2.82,2.62,2.51,2.44,2.39,2.33,2.27,2.22,2.14],[0,5.87,4.46,3.86,3.51,3.29,3.13,3.01,2.91,2.84,2.77,2.57,2.46,2.40,2.35,2.29,2.22,2.17,2.09],[0,5.83,4.42,3.82,3.48,3.25,3.09,2.97,2.87,2.80,2.73,2.53,2.42,2.36,2.31,2.25,2.18,2.13,2.05],[0,5.79,4.38,3.78,3.44,3.22,3.05,2.93,2.84,2.76,2.70,2.50,2.39,2.32,2.27,2.21,2.14,2.09,2.01],[0,5.75,4.35,3.75,3.41,3.18,3.02,2.90,2.81,2.73,2.67,2.47,2.36,2.29,2.24,2.18,2.11,2.06,1.98],[0,5.72,4.32,3.72,3.38,3.15,2.99,2.87,2.78,2.70,2.64,2.44,2.33,2.26,2.21,2.15,2.08,2.02,1.94],[0,5.69,4.29,3.69,3.35,3.13,2.97,2.85,2.75,2.68,2.61,2.41,2.30,2.23,2.18,2.12,2.05,2.00,1.91],[0,5.66,4.27,3.67,3.33,3.10,2.94,2.82,2.73,2.65,2.59,2.39,2.28,2.21,2.16,2.09,2.03,1.97,1.89],[0,5.63,4.24,3.65,3.31,3.08,2.92,2.80,2.71,2.63,2.57,2.36,2.25,2.18,2.13,2.07,2.00,1.94,1.86],[0,5.61,4.22,3.63,3.29,3.06,2.90,2.78,2.69,2.61,2.55,2.34,2.23,2.16,2.11,2.05,1.98,1.92,1.84],[0,5.59,4.20,3.61,3.27,3.04,2.88,2.76,2.67,2.59,2.53,2.32,2.21,2.14,2.09,2.03,1.96,1.90,1.82],[0,5.57,4.18,3.59,3.25,3.03,2.87,2.75,2.65,2.57,2.51,2.31,2.20,2.12,2.07,2.01,1.94,1.88,1.80],[0,5.42,4.05,3.46,3.13,2.90,2.74,2.62,2.53,2.45,2.39,2.18,2.07,1.99,1.94,1.88,1.80,1.74,1.65],[0,5.29,3.93,3.34,3.01,2.79,2.63,2.51,2.41,2.33,2.27,2.06,1.94,1.87,1.82,1.74,1.67,1.60,1.49],[0,5.18,3.83,3.25,2.92,2.70,2.54,2.42,2.32,2.24,2.18,1.97,1.85,1.77,1.71,1.64,1.56,1.48,1.36],[0,5.04,3.70,3.13,2.80,2.58,2.42,2.30,2.20,2.13,2.06,1.85,1.72,1.64,1.58,1.50,1.41,1.32,1.13]]
    
    var fdist01 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,4052.18,4999.50,5403.35,5624.58,5763.65,5858.99,5928.36,5981.07,6022.47,6055.85,6157.28,6208.73,6239.83,6260.65,6286.78,6313.03,6334.11,6362.68],[0,98.50,99.00,99.17,99.25,99.30,99.33,99.36,99.37,99.39,99.40,99.43,99.45,99.46,99.47,99.47,99.48,99.49,99.50],[0,34.12,30.82,29.46,28.71,28.24,27.91,27.67,27.49,27.35,27.23,26.87,26.69,26.58,26.50,26.41,26.32,26.24,26.14],[0,21.20,18.00,16.69,15.98,15.52,15.21,14.98,14.80,14.66,14.55,14.20,14.02,13.91,13.84,13.75,13.65,13.58,13.47],[0,16.26,13.27,12.06,11.39,10.97,10.67,10.46,10.29,10.16,10.05,9.72,9.55,9.45,9.38,9.29,9.20,9.13,9.03],[0,13.75,10.92,9.78,9.15,8.75,8.47,8.26,8.10,7.98,7.87,7.56,7.40,7.30,7.23,7.14,7.06,6.99,6.89],[0,12.25,9.55,8.45,7.85,7.46,7.19,6.99,6.84,6.72,6.62,6.31,6.16,6.06,5.99,5.91,5.82,5.75,5.66],[0,11.26,8.65,7.59,7.01,6.63,6.37,6.18,6.03,5.91,5.81,5.52,5.36,5.26,5.20,5.12,5.03,4.96,4.87],[0,10.56,8.02,6.99,6.42,6.06,5.80,5.61,5.47,5.35,5.26,4.96,4.81,4.71,4.65,4.57,4.48,4.41,4.32],[0,10.04,7.56,6.55,5.99,5.64,5.39,5.20,5.06,4.94,4.85,4.56,4.41,4.31,4.25,4.17,4.08,4.01,3.92],[0,9.65,7.21,6.22,5.67,5.32,5.07,4.89,4.74,4.63,4.54,4.25,4.10,4.01,3.94,3.86,3.78,3.71,3.61],[0,9.33,6.93,5.95,5.41,5.06,4.82,4.64,4.50,4.39,4.30,4.01,3.86,3.76,3.70,3.62,3.54,3.47,3.37],[0,9.07,6.70,5.74,5.21,4.86,4.62,4.44,4.30,4.19,4.10,3.82,3.66,3.57,3.51,3.43,3.34,3.27,3.18],[0,8.86,6.51,5.56,5.04,4.69,4.46,4.28,4.14,4.03,3.94,3.66,3.51,3.41,3.35,3.27,3.18,3.11,3.02],[0,8.68,6.36,5.42,4.89,4.56,4.32,4.14,4.00,3.89,3.80,3.52,3.37,3.28,3.21,3.13,3.05,2.98,2.88],[0,8.53,6.23,5.29,4.77,4.44,4.20,4.03,3.89,3.78,3.69,3.41,3.26,3.16,3.10,3.02,2.93,2.86,2.76],[0,8.40,6.11,5.18,4.67,4.34,4.10,3.93,3.79,3.68,3.59,3.31,3.16,3.07,3.00,2.92,2.83,2.76,2.66],[0,8.29,6.01,5.09,4.58,4.25,4.01,3.84,3.71,3.60,3.51,3.23,3.08,2.98,2.92,2.84,2.75,2.68,2.58],[0,8.18,5.93,5.01,4.50,4.17,3.94,3.77,3.63,3.52,3.43,3.15,3.00,2.91,2.84,2.76,2.67,2.60,2.50],[0,8.10,5.85,4.94,4.43,4.10,3.87,3.70,3.56,3.46,3.37,3.09,2.94,2.84,2.78,2.69,2.61,2.54,2.43],[0,8.02,5.78,4.87,4.37,4.04,3.81,3.64,3.51,3.40,3.31,3.03,2.88,2.79,2.72,2.64,2.55,2.48,2.37],[0,7.95,5.72,4.82,4.31,3.99,3.76,3.59,3.45,3.35,3.26,2.98,2.83,2.73,2.67,2.58,2.50,2.42,2.32],[0,7.88,5.66,4.76,4.26,3.94,3.71,3.54,3.41,3.30,3.21,2.93,2.78,2.69,2.62,2.54,2.45,2.37,2.27],[0,7.82,5.61,4.72,4.22,3.90,3.67,3.50,3.36,3.26,3.17,2.89,2.74,2.64,2.58,2.49,2.40,2.33,2.22],[0,7.77,5.57,4.68,4.18,3.85,3.63,3.46,3.32,3.22,3.13,2.85,2.70,2.60,2.54,2.45,2.36,2.29,2.18],[0,7.72,5.53,4.64,4.14,3.82,3.59,3.42,3.29,3.18,3.09,2.81,2.66,2.57,2.50,2.42,2.33,2.25,2.14],[0,7.68,5.49,4.60,4.11,3.78,3.56,3.39,3.26,3.15,3.06,2.78,2.63,2.54,2.47,2.38,2.29,2.22,2.11],[0,7.64,5.45,4.57,4.07,3.75,3.53,3.36,3.23,3.12,3.03,2.75,2.60,2.51,2.44,2.35,2.26,2.19,2.08],[0,7.60,5.42,4.54,4.04,3.73,3.50,3.33,3.20,3.09,3.00,2.73,2.57,2.48,2.41,2.33,2.23,2.16,2.05],[0,7.56,5.39,4.51,4.02,3.70,3.47,3.30,3.17,3.07,2.98,2.70,2.55,2.45,2.39,2.30,2.21,2.13,2.02],[0,7.31,5.18,4.31,3.83,3.51,3.29,3.12,2.99,2.89,2.80,2.52,2.37,2.27,2.20,2.11,2.02,1.94,1.82],[0,7.08,4.98,4.13,3.65,3.34,3.12,2.95,2.82,2.72,2.63,2.35,2.20,2.10,2.03,1.94,1.84,1.75,1.62],[0,6.90,4.82,3.98,3.51,3.21,2.99,2.82,2.69,2.59,2.50,2.22,2.07,1.97,1.89,1.80,1.69,1.60,1.45],[0,6.66,4.63,3.80,3.34,3.04,2.82,2.66,2.53,2.43,2.34,2.06,1.90,1.79,1.72,1.61,1.50,1.38,1.16]]
    
    $("#myCanvas").show();
    var area = document.getElementById('areaf').value 
    var numdf = document.getElementById('numdf').value
    var dendf = document.getElementById('dendf').value
    var exp = 2.71828;
    
    var f = [];
        var i;
        for (i = 0; i < 20; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(Math.pow(i,8/2-1)*Math.pow(exp,-.5*i))
        }

        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(190, 130);
        ctx.lineTo(190, 106);
        ctx.quadraticCurveTo(210, 120, 247, 125);
        ctx.lineTo(247, 130);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 10);
        ctx.lineTo(20, 130);
        ctx.lineTo(280, 130);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(190, 135);
        ctx.lineTo(190, 125);
        ctx.stroke();

        ctx.fillText("F",285,132);
        ctx.fillText("F",185,145);
        ctx.fillText(area,190,146);

        ctx.fillText(area,205,108);


        var points = []

        for (i = 0; i < 20; i++) {
          points[i] = {x:20 + 12*i, y:130 - 10*f[i]}
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
    
    if (area == ".10") {
        row = fdist10[dendf]
    } else if (area == ".05") {
        row = fdist05[dendf]
    } else if (area == ".025") {
        row = fdist025[dendf]
    } else if (area == ".01") {
        row = fdist01[dendf]
    }
    
    row1 = fdist10[dendf]
    row2 = fdist05[dendf]
    row3 = fdist025[dendf]
    row4 = fdist01[dendf]
    
    var table1 = "<td>$ \\text{Den. } $</td><td>$\\text{Upper}$</td></td><td style='border-bottom: thin solid;'>$\\text{Num. } df$</td>"
    
    var table2 = "<td>$ df$</td><td>$\\text{Area}$</td><td>$"+ numdf +"$</td>"
    
    var table3 = "<td>$"+ dendf +"$</td><td>$.10$</td><td>$"+ row1[numdf] +"$</td>"
    
    var table4 = "<td></td><td>$.05$</td><td>$"+ row2[numdf] +"$</td>"
        
    var table5 = "<td></td><td>$.025$</td><td>$"+ row3[numdf] +"$</td>"
    
    var table6 = "<td></td><td>$.01$</td><td>$"+ row4[numdf] +"$</td>"
    
    var table = "<table><tr style='border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table3+"</tr><tr>"+table4+"</tr><tr>"+table5+"</tr><tr>"+table6+"</tr></table>"
    
    
    
    
    
    document.getElementById("output2").innerHTML = table + "$$ F_{" + area + "} = " + row[numdf] + " $$"
    
    MathJax.typeset();
    
}




























function exampleuniform(){
    document.getElementById('minval').value="30"
    document.getElementById('maxval').value="60"
    document.getElementById('unival').value="40"
    document.getElementById('twoval1').value="38"
    document.getElementById('twoval2').value="52"
}

function exampleuniform2(){
    document.getElementById('minval').value="100"
    document.getElementById('maxval').value="200"
    document.getElementById('unival').value="150"
    document.getElementById('twoval1').value="125"
    document.getElementById('twoval2').value="175"
}

function examplestandard(){
    if (standardtype == "probability") {
        document.getElementById('standardval').value="-.71"
        document.getElementById('standardval1').value="-1.75"
        document.getElementById('standardval2').value="-1.04"
    } else if (standardtype == "area") {
        document.getElementById('standardareatype').value="left"
        document.getElementById('standardareaval').value=".6772"
    } 
    
}

function examplestandard2(){
    if (standardtype == "probability") {
        document.getElementById('standardval').value=".44"
        document.getElementById('standardval1').value=".52"
        document.getElementById('standardval2').value="1.22"
    } else if (standardtype == "area") {
        document.getElementById('standardareatype').value="right"
        document.getElementById('standardareaval').value=".2266"
    }
}

function examplenormal(){
    if (normaltype == "probability") {
        document.getElementById('expval').value="10"
        document.getElementById('stdev').value="2"
        document.getElementById('normalval').value="8"
        document.getElementById('normalval1').value="10"
        document.getElementById('normalval2').value="14"
    } else if (normaltype == "area") {
        document.getElementById('expval').value="10"
        document.getElementById('stdev').value="2"
        document.getElementById('areatypen').value="lower"
        document.getElementById('areavaln').value="30"
    }
}

function examplenormal2(){
    if (normaltype == "probability") {
        document.getElementById('expval').value="15"
        document.getElementById('stdev').value="3.5"
        document.getElementById('normalval').value="18"
        document.getElementById('normalval1').value="12"
        document.getElementById('normalval2').value="18"
    } else if (normaltype == "area") {
        document.getElementById('expval').value="15"
        document.getElementById('stdev').value="3.5"
        document.getElementById('areatypen').value="upper"
        document.getElementById('areavaln').value="20"
    }
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





function exampletdist(){
    if (tdisttype == "probability") {
        document.getElementById('degfree').value="14"
        document.getElementById('tdistval').value="1.452"
        document.getElementById('tdistval1').value="-1.75"
        document.getElementById('tdistval2').value="-1.04"
    } else if (tdisttype == "area") {
        document.getElementById('areatypet').value="left"
        document.getElementById('areaval').value=".6772"
    } 
    
}

function exampletdist2(){
    if (tdisttype == "probability") {
        document.getElementById('degfree').value="12"
        document.getElementById('tdistval').value="2.386"
        document.getElementById('tdistval1').value=".52"
        document.getElementById('tdistval2').value="1.22"
    } else if (tdisttype == "area") {
        document.getElementById('areatypet').value="right"
        document.getElementById('areaval').value=".2266"
    }
}





function exampleapprox() {
    document.getElementById('psuccess').value=".3"
    document.getElementById('trials').value="50"
    document.getElementById('approxval').value = "20"
}



function exampleapprox2() {
    document.getElementById('psuccess').value=".7"
    document.getElementById('trials').value="100"
    document.getElementById('approxval').value = "60"
}




function examplechi() {
    document.getElementById('degfreec').value="8"
    document.getElementById('areac').value=".05"
}



function examplechi2() {
    document.getElementById('degfreec').value="12"
    document.getElementById('areac').value=".025"
}


function examplefdist() {
    document.getElementById('numdf').value="4"
    document.getElementById('dendf').value="8"
    document.getElementById('areaf').value=".05"
}



function examplefdist2() {
    document.getElementById('numdf').value="6"
    document.getElementById('dendf').value="14"
    document.getElementById('areaf').value=".025"
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

function standardprob() {
    var probtype = document.getElementById('probtype2').value
    if (probtype == "between") {
        $("#standardprob").hide();
        $("#standardbetween").show();
        document.getElementById('probtype2b1').value = "lessequal"
        document.getElementById('probtype2b2').value = "lessequal"
    } else if (probtype == "between2") {
        $("#standardprob").hide();
        $("#standardbetween").show();
        document.getElementById('probtype2b1').value = "lessequal"
        document.getElementById('probtype2b2').value = "less"
    } else if (probtype == "between3") {
        $("#standardprob").hide();
        $("#standardbetween").show();
        document.getElementById('probtype2b1').value = "less"
        document.getElementById('probtype2b2').value = "lessequal"
    } else if (probtype == "between4") {
        $("#standardprob").hide();
        $("#standardbetween").show();
        document.getElementById('probtype2b1').value = "less"
        document.getElementById('probtype2b2').value = "less"
    }
}

function standardback() {
    document.getElementById('probtype2').value = "lessequal"
    $("#standardprob").show();
    $("#standardbetween").hide();
}

function normalprobtype() {
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



