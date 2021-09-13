$("#greater").hide(); $("#notequal").hide(); $("#explanation").hide();$("#greatert").hide(); $("#notequalt").hide();
$("#typeexamples").hide(); $("#hypexamples").show(); $("#switchhypothesis").hide(); $("#switchtype").show();
$("#datainput").hide(); $("#valuesinput").show(); $("#hypothesis").show(); $("#type2error").hide(); $("#581773186").hide();
$("#hypoutputs").hide();


type = "hypothesis"
inputtype = "values"

$(function () {
            $('[data-toggle="tooltip"]').tooltip()
    })

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

function toFixing(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

function switchtype() {
    type = "type2error"
    $("#hypothesis").hide(); $("#type2error").show();
    $("#switchtype").hide(); $("#switchhypothesis").show();
    $("#hypoutputs").hide(); $("#typeoutputs").show();
    $("#hypexamples").hide(); $("#typeexamples").show();
}

function switchhypothesis() {
    type = "hypothesis"
    $("#hypothesis").show(); $("#type2error").hide();
    $("#switchhypothesis").hide(); $("#switchtype").show();
    $("#hypoutputs").show(); $("#typeoutputs").hide();
    $("#typeexamples").hide(); $("#hypexamples").show();
}



function switchdata() {
    $("#datainput").show(); $("#valuesinput").hide();
    inputtype = "data"
}

function switchvalues() {
    $("#datainput").hide(); $("#valuesinput").show();
    inputtype = "values"
}

var canvas = document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.167, 1.167);

var canvas = document.getElementById("howCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.167, 1.167);

var canvas = document.getElementById("howCanvas3");
var ctx = canvas.getContext("2d");
ctx.scale(1.167, 1.167);

var canvas = document.getElementById("howCanvas4");
var ctx = canvas.getContext("2d");
ctx.scale(1.167, 1.167);

var canvas = document.getElementById("howCanvas5");
var ctx = canvas.getContext("2d");
ctx.scale(1.167, 1.167);

var canvas = document.getElementById("howCanvas6");
var ctx = canvas.getContext("2d");
ctx.scale(1.167, 1.167);

how1(); how2(); how3(); 
how4(); how5(); how6();

function how1(){
        var exp = 2.71828;
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2)))) 
        }

        var c = document.getElementById("howCanvas1");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",25,105);

        ctx.fillText("z",285,132);
        ctx.fillText("z",68,145);
    
        ctx.fillText("Lower Tail Test",120,10);

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

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",240,100);


            ctx.fillText("z",285,132);
            ctx.fillText("z",228,145);
        var points = []
        
        ctx.fillText("Upper Tail Test",120,10);

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

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",25,105);
        ctx.fillText("p-value",245,105);

            ctx.fillText("z",285,132);
            ctx.fillText("-z",66,145);
            ctx.fillText("z",226,145);
        
        ctx.fillText("Two-Tailed Test",115,10);

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
















function how4(){
        var exp = 2.71828;
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2)))) 
        }

        var c = document.getElementById("howCanvas4");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("α",40,105);

        ctx.fillText("z",285,132);
        ctx.fillText("-z",65,145);
        ctx.fillText("α",74,146);
    
        ctx.fillText("Lower Tail Test",120,10);

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

function how5(){
        var exp = 2.71828;
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2)))) 
        }

        var c = document.getElementById("howCanvas5");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("α",255,105);


        ctx.fillText("z",285,132);
        ctx.fillText("z",227,145);
        ctx.fillText("α",233,146);
        
        var points = []
        
        ctx.fillText("Upper Tail Test",120,10);

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

function how6(){
        var exp = 2.71828;
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("howCanvas6");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("α/2",35,105);
        ctx.fillText("α/2",255,105);

        ctx.fillText("z",285,132);
        ctx.fillText("-z",65,145);
        ctx.fillText("α/2",74,146);
        ctx.fillText("z",228,145);
        ctx.fillText("α/2",234,146);
        
        ctx.fillText("Two-Tailed Test",115,10);

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


























function parameter() {
    var x = document.getElementById("parameter1").value;
    if (x == "mean"){
        document.getElementById("parameter2").innerHTML = "&mu;";
        document.getElementById("muknotvalue").innerHTML = "&mu;₀";
        $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
        document.getElementById("samplestat").innerHTML = "$\\bar{x}$";
    } else if (x == "proportion"){
        document.getElementById("parameter2").innerHTML = "p";
        document.getElementById("muknotvalue").innerHTML = "p₀";
        $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
        document.getElementById("samplestat").innerHTML = "$\\bar{p}$";
    } else if (x == "variance"){
        document.getElementById("parameter2").innerHTML = "&#963;²";
        document.getElementById("muknotvalue").innerHTML = "&#963;₀²";
        $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
        document.getElementById("samplestat").innerHTML = "$s$";
    } 
    MathJax.typeset();
}

function tailsigns() {
    var x = document.getElementById("tail").value;
    if (x == "lower"){
        $("#less").show();
        $("#greater").hide();
        $("#notequal").hide();
    } else if (x == "upper"){
        $("#less").hide();
        $("#greater").show();
        $("#notequal").hide();
    } else if (x == "two") {
        $("#less").hide();
        $("#greater").hide();
        $("#notequal").show();
    } 
}

function tailsignst() {
    var x = document.getElementById("tailt").value;
    if (x == "lower"){
        $("#lesst").show();
        $("#greatert").hide();
        $("#notequalt").hide();
    } else if (x == "upper"){
        $("#lesst").hide();
        $("#greatert").show();
        $("#notequalt").hide();
    } else if (x == "two") {
        $("#lesst").hide();
        $("#greatert").hide();
        $("#notequalt").show();
    } 
}

function muknotval() {
    var x = document.getElementById("muknot").value;
    document.getElementById("muknotvalue").innerHTML = x;
}

function muknotvalt() {
    var x = document.getElementById("muknott").value;
    document.getElementById("muknotvaluet").innerHTML = x;
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

function ibetainv(p, a, b) {
		var EPS = 1e-8,
			a1 = a - 1,
			b1 = b - 1,
			j = 0,
			lna, lnb, pp, t, u, err, x, al, h, w, afac;
		if(p <= 0) return 0;
		if(p >= 1) return 1;
		if(a >= 1 && b >= 1) {
			pp = (p < 0.5) ? p : 1 - p;
			t = Math.sqrt(-2 * Math.log(pp));
			x = (2.30753 + t * 0.27061) / (1 + t* (0.99229 + t * 0.04481)) - t;
			if(p < 0.5) x = -x;
			al = (x * x - 3) / 6;
			h = 2 / (1 / (2 * a - 1)  + 1 / (2 * b - 1));
			w = (x * Math.sqrt(al + h) / h) - (1 / (2 * b - 1) - 1 / (2 * a - 1)) * (al + 5 / 6 - 2 / (3 * h));
			x = a / (a + b * Math.exp(2 * w));
		} else {
			lna = Math.log(a / (a + b));
			lnb = Math.log(b / (a + b));
			t = Math.exp(a * lna) / a;
			u = Math.exp(b * lnb) / b;
			w = t + u;
			if(p < t / w) x = Math.pow(a * w * p, 1 / a);
			else x = 1 - Math.pow(b * w * (1 - p), 1 / b);
		}
		afac = -gammaln(a) - gammaln(b) + gammaln(a + b);
		for(; j < 10; j++) {
			if(x === 0 || x === 1) return x;
			err = ibeta(x, a, b) - p;
			t = Math.exp(a1 * Math.log(x) + b1 * Math.log(1 - x) + afac);
			u = err / t;
			x -= (t = u / (1 - 0.5 * Math.min(1, u * (a1 / x - b1 / (1 - x)))));
			if(x <= 0) x = 0.5 * (x + t);
			if(x >= 1) x = 0.5 * (x + t + 1);
			if(Math.abs(t) < EPS * x && j > 0) break;
		}
		return x;
	}
	
function ibeat(x, a, b) {
		// Factors in front of the continued fraction.
		var bt = (x === 0 || x === 1) ?  0 :
			Math.exp(gammaln(a + b) - gammaln(a) -
			gammaln(b) + a * Math.log(x) + b *
			Math.log(1 - x));
		if(x < 0 || x > 1) return false;
		if(x < (a + 1) / (a + b + 2))
			// Use continued fraction directly.
			return bt * betacf(x, a, b) / a;
		// else use continued fraction after making the symmetry transformation.
		return 1 - bt * betacf(1 - x, b, a) / b;
}

function gammaln(x) {
		var j = 0,
			cof = [
				76.18009172947146, -86.50532032941677, 24.01409824083091,
				-1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5
			],
			ser = 1.000000000190015,
			xx, y, tmp;
		tmp = (y = xx = x) + 5.5;
		tmp -= (xx + 0.5) * Math.log(tmp);
		for (; j < 6; j++) ser += cof[j] / ++y;
		return Math.log(2.5066282746310005 * ser / xx) - tmp;
	}

	// gamma of x
function gammafn(x) {
		var p = [
				-1.716185138865495, 24.76565080557592, -379.80425647094563,
				629.3311553128184, 866.9662027904133, -31451.272968848367,
				-36144.413418691176, 66456.14382024054
			],
			q = [
				-30.8402300119739, 315.35062697960416, -1015.1563674902192,
				-3107.771671572311, 22538.118420980151, 4755.8462775278811,
				-134659.9598649693, -115132.2596755535
			],
			fact = false,
			n = 0,
			xden = 0,
			xnum = 0,
			y = x,
			i, z, yi, res, sum, ysq;
		if(y <= 0) {
			res = y % 1 + 3.6e-16;
			if (res) {
				fact = (!(y & 1) ? 1 : -1) * Math.PI / Math.sin(Math.PI * res);
				y = 1 - y;
			} else {
				return Infinity;
			}
		}
		yi = y;
		if (y < 1) {
			z = y++;
		} else {
			z = (y -= n = (y | 0) - 1) - 1;
		}
		for (i = 0; i < 8; ++i) {
			xnum = (xnum + p[i]) * z;
			xden = xden * z + q[i];
		}
		res = xnum / xden + 1;
		if (yi < y) {
			res /= yi;
		} else if (yi > y) {
			for (i = 0; i < n; ++i) {
				res *= y;
				y++;
			}
		}
		if (fact) {
			res = fact / res;
		}
		return res;
	}
	
function betacf(x, a, b) {
		var fpmin = 1e-30,
			m = 1,
			m2, aa, c, d, del, h, qab, qam, qap;
		// These q's will be used in factors that occur in the coefficients
		qab = a + b;
		qap = a + 1;
		qam = a - 1;
		c = 1;
		d = 1 - qab * x / qap;
		if(Math.abs(d) < fpmin) d = fpmin;
		d = 1 / d;
		h = d;
		for (; m <= 100; m++) {
			m2 = 2 * m;
			aa = m * (b - m) * x / ((qam + m2) * (a + m2));
			// One step (the even one) of the recurrence
			d = 1 + aa * d;
			if(Math.abs(d) < fpmin) d = fpmin;
			c = 1 + aa / c;
			if(Math.abs(c) < fpmin) c = fpmin;
			d = 1 / d;
			h *= d * c;
			aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
			// Next step of the recurrence (the odd one)
			d = 1 + aa * d;
			if(Math.abs(d) < fpmin) d = fpmin;
			c = 1 + aa / c;
			if(Math.abs(c) < fpmin) c = fpmin;
			d = 1 / d;
			del = d * c;
			h *= del;
			if(Math.abs(del - 1.0) < 3e-7) break;
		}
		return h;
	}
	
	
	 function ibeta (x, a, b) {
		// Factors in front of the continued fraction.
		var bt = (x === 0 || x === 1) ?  0 :
			Math.exp(gammaln(a + b) - gammaln(a) -
			gammaln(b) + a * Math.log(x) + b *
			Math.log(1 - x));
		if(x < 0 || x > 1) return false;
		if(x < (a + 1) / (a + b + 2))
			// Use continued fraction directly.
			return bt * betacf(x, a, b) / a;
		// else use continued fraction after making the symmetry transformation.
		return 1 - bt * betacf(1 - x, b, a) / b;
	}

function tinv(p, dof) {
		var x = ibetainv(2 * Math.min(p, 1 - p), 0.5 * dof, 0.5);
		x = Math.sqrt(dof * (1 - x) / x);
		return (p > 0) ? x : -x;
	
}

function solve() {
    $("#explanation").show(); $("#samples").hide();
    $("#hypoutputs").show(); $("#how").hide();
    $("#581773186").show();
    if (type == "hypothesis") {
        hyptest()
    } else if (type == "type2error") {
        type2()
    }
}

function type2() {
    var tail = document.getElementById("tailt").value;
    var muknot = document.getElementById("muknott").value;
    var size = document.getElementById("sizet").value; var sizem1 = size - 1;
    var mu = document.getElementById("mut").value;
    var stdev = document.getElementById("stdevt").value;
    var alpha = document.getElementById("alphat").value;
    
    var zcless = (NormSInv(alpha)).toFixed(2)
    var xbarl = (zcless * (stdev / Math.sqrt(size)) + parseFloat(muknot)).toFixed(2)
    var zl = parseFloat(((xbarl - mu) / (stdev/Math.sqrt(size))).toFixed(2))
    var zlprob = (normalcdf(zl)).toFixed(4)
    var betal = (1 - zlprob).toFixed(4)
    
    var zcgreat = (NormSInv(1-alpha)).toFixed(2)
    var xbarg = parseFloat((zcgreat * (stdev / Math.sqrt(size)) + parseFloat(muknot)).toFixed(2)).toFixed(2)
    var zg = parseFloat(((xbarg - mu) / (stdev/Math.sqrt(size))).toFixed(2))
    var zgprob = (normalcdf(zg)).toFixed(4)
    var betag = zgprob
    
    var zcless2 = (NormSInv(alpha/2)).toFixed(2)
    var zcgreat2 = (NormSInv(1-alpha/2)).toFixed(2)
    var xbarl2 = (zcless2 * (stdev / Math.sqrt(size)) + parseFloat(muknot)).toFixed(2)
    var xbarg2 = parseFloat((zcgreat2 * (stdev / Math.sqrt(size)) + parseFloat(muknot)).toFixed(2))
    var zl2 = parseFloat(((xbarl2 - mu) / (stdev/Math.sqrt(size))).toFixed(2))
    var zg2 = parseFloat(((xbarg2 - mu) / (stdev/Math.sqrt(size))).toFixed(2))
    var zl2prob = (normalcdf(zl2)).toFixed(4)
    var zg2prob = (normalcdf(zg2)).toFixed(4)
    var beta2 = (zg2prob - zl2prob).toFixed(4)
    
    if (tail == "lower") {
        document.getElementById("output4").innerHTML = " $$ \\text{Reject } H_0 \\text{ if } z = \\frac{\\bar{x}-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}} \\leq "+zcless+"  $$  $$ \\bar{x} \\leq "+xbarl+"  $$ $$ z = \\frac{"+xbarl+"-"+mu+"}{"+stdev+"/ \\sqrt{"+size+"}} = "+zl+" $$ $$ \\begin{align} \\beta &= P(z \\geq "+zl+") = 1 - P(z \\leq "+zl+") \\\\ &= 1 - "+zlprob+" = \\boxed{"+betal+"} \\end{align} $$ "
    } else if (tail == "upper") {
        document.getElementById("output4").innerHTML = " $$ \\text{Reject } H_0 \\text{ if } z = \\frac{\\bar{x}-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}} \\geq "+zcgreat+"  $$ $$ \\bar{x} \\geq "+xbarg+"  $$ $$ z = \\frac{"+xbarg+"-"+mu+"}{"+stdev+"/ \\sqrt{"+size+"}} = "+zg+" $$ $$ \\begin{align} \\beta &= P(z \\leq "+zg+") = \\boxed{"+betag+"} \\end{align} $$ "
    } else if (tail == "two") {
        document.getElementById("output4").innerHTML = " $$ \\begin{align} \\text{Reject } H_0 \\text{ if } z &= \\frac{\\bar{x}-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}} \\leq "+zcless2+" \\\\ \\text{or } z &= \\frac{\\bar{x}-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}} \\geq "+zcgreat2+" \\end{align} $$  $$ \\bar{x} \\leq "+xbarl2+" \\text{ or } \\bar{x} \\geq "+xbarg2+" $$ $$ z = \\frac{"+xbarl2+"-"+mu+"}{"+stdev+"/ \\sqrt{"+size+"}}  = "+zl2+"  $$ $$ z = \\frac{"+xbarg2+"-"+mu+"}{"+stdev+"/ \\sqrt{"+size+"}} = "+zg2+" $$ $$ \\begin{align} \\beta &= P("+zl2+" \\leq z \\leq "+zg2+") \\\\ &= P(z \\leq "+zg2+") - P(z \\leq "+zl2+") \\\\ &= "+zg2prob+" - "+zl2prob+" = \\boxed{"+beta2+"} \\end{align} $$ "
    }
    
    
    
    MathJax.typeset();
    
}

function hyptest(){
    var x = document.getElementById("parameter1").value;
    if (x == "mean"){
        hyptest1()
    } else if (x == "proportion"){
        hyptest2()
    } else if (x == "variance"){
        hyptest3()
    } 
}

function hyptest1(){
    if (inputtype == "values") {
        var sigma = document.getElementById("sigma").value;
        var size = document.getElementById("size").value; var sizem1 = size - 1; var sizem2 = size - 2;
        var xbar = document.getElementById("xbar").value;
        var stdev = document.getElementById("stdev").value;
    } else if (inputtype == "data") {
        var str = document.getElementById("xvalues").value;
        var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
        var sumeach = sum(each);
        var mn = avg(each);
        var eachminus = each.map( function(value) {
            return value - mn;
        } );
        var eachminus2 = eachminus.map( function(value) {
            return value * value;
        } );
        var sumeachminus = sum(eachminus);
        var sumeachminus2 = sum(eachminus2);
        var ansvar = sumeachminus2 / lenmin1;
        var ansstd = Math.sqrt(ansvar);
        var size = len; var sizem1 = size - 1; var sizem2 = size - 2;
        var xbar = mn;
        var stdev = parseFloat(ansstd.toFixed(2));
        var sigma = "unknown"
    } 
    var tail = document.getElementById("tail").value;
    var muknot = document.getElementById("muknot").value;
    var alpha = document.getElementById("alpha").value;
    var test = (xbar-muknot)/(stdev/Math.sqrt(size));
    var testtwo = -Math.abs(test);
    var zpless = normalcdf(test); var zpmore = 1 - normalcdf(test);
    var zptwo = normalcdf(testtwo); var zptwo2 = 2 * zptwo;
    var zcless = NormSInv(alpha); var zcmore = Math.abs(NormSInv(alpha))
    var zctwo1 = NormSInv(alpha/2); var zctwo2 = Math.abs(NormSInv(alpha/2)); 
    var tcless = -tinv(alpha,sizem1); var tcmore = tinv(alpha,sizem1)
    var tctwo1 = -tinv(alpha/2,sizem1); var tctwo2 = tinv(alpha/2,sizem1); 
    var exp = 2.71828;
    
    if (sigma == "known") {
        document.getElementById("descriptiontext").innerHTML = "A hypothesis test is used to determine whether the population mean is less than, greater than or different than some value."
        document.getElementById("formulatext").innerHTML = "$ z =\\dfrac{\\bar{x}-\\mu_o}{\\sigma / \\sqrt{n}} $"
        document.getElementById("explanationtext").innerHTML = "Rejecting the null hypothesis means accepting the alternative hypothesis."
    } else if (sigma == "unknown") {
        document.getElementById("descriptiontext").innerHTML = "A hypothesis test is used to determine whether the population mean is less than, greater than or different than some value."
        document.getElementById("formulatext").innerHTML = "$ t =\\dfrac{\\bar{x}-\\mu_o}{s / \\sqrt{n}} $"
        document.getElementById("explanationtext").innerHTML = "Rejecting the null hypothesis means accepting the alternative hypothesis."
    } 
    
    if (sigma == "known" && tail == "lower"){
        var testtype = "<b>Lower Tail Test</b>"
        var testsymb = "z";
        var tailsign = "\\leq";
        var stndsymb = "\\sigma"
        var cvalsymb = "-z_\\alpha";
        var pvalue = normalcdf(test.toFixed(2));
        var pval = pvalue.toFixed(4);
        var cless = zcless;
    } else if (sigma == "known" && tail == "upper"){
        var testtype = "<b>Upper Tail Test</b>"
        var testsymb = "z";
        var tailsign = "\\geq";
        var stndsymb = "\\sigma"
        var cvalsymb = "z_\\alpha";
        var pvalue = 1 - normalcdf(test.toFixed(2));
        var pval = pvalue.toFixed(4);
        var cmore = zcmore;
    } else if (sigma == "known" && tail == "two"){
        var testtype = "<b>Two-Tailed Test</b>"
        var testsymb = "z";
        var tailsign = "=";
        var stndsymb = "\\sigma"
        var cvalsymb1 = "-z_{\\alpha / 2}";
        var cvalsymb2 = "z_{\\alpha / 2}";
        var pvalhalf = normalcdf(testtwo.toFixed(2));
        var pvalh = pvalhalf.toFixed(4);
        var pvalue = 2 * pvalhalf.toFixed(4);
        var pval = pvalue.toFixed(4);
        var ctwo1 = zctwo1; var ctwo2 = zctwo2; 
    } else if (sigma == "unknown" && tail == "lower"){
        var testtype = "<b>Lower Tail Test</b>"
        var testsymb = "t";
        var tailsign = "\\leq";
        var stndsymb = "s"
        var cvalsymb = "-t_\\alpha";
        var pvalue = compute(test,size-1);
        if (pvalue > .2) {
            var pval = ".20 \\text{ to } 1"
        } else if (pvalue <.2 && pvalue >.1) {
            var pval = ".10 \\text{ to } .20"
        } else if (pvalue <.1 && pvalue >.05) {
            var pval = ".05 \\text{ to } .10"
        } else if (pvalue <.05 && pvalue >.025) {
            var pval = ".025 \\text{ to } .05"
        } else if (pvalue <.025 && pvalue >.01) {
            var pval = ".01 \\text{ to } .025"
        } else if (pvalue <.01 && pvalue >.005) {
            var pval = ".005 \\text{ to } .01"
        } else if (pvalue <.005) {
            var pval = "0 \\text{ to } .005"
        } else {
            var pval = pvalue.toFixed(4);
        }
        var cless = tcless;
    } else if (sigma == "unknown" && tail == "upper"){
        var testtype = "<b>Upper Tail Test</b>"
        var testsymb = "t";
        var tailsign = "\\geq";
        var stndsymb = "s"
        var cvalsymb = "t_\\alpha";
        var pvalue = 1 - compute(test,size-1);
        if (pvalue > .2) {
            var pval = ".20 \\text{ to } 1"
        } else if (pvalue <.2 && pvalue >.1) {
            var pval = ".10 \\text{ to } .20"
        } else if (pvalue <.1 && pvalue >.05) {
            var pval = ".05 \\text{ to } .10"
        } else if (pvalue <.05 && pvalue >.025) {
            var pval = ".025 \\text{ to } .05"
        } else if (pvalue <.025 && pvalue >.01) {
            var pval = ".01 \\text{ to } .025"
        } else if (pvalue <.01 && pvalue >.005) {
            var pval = ".005 \\text{ to } .01"
        } else if (pvalue <.005) {
            var pval = "0 \\text{ to } .005"
        } else {
            var pval = pvalue.toFixed(4);
        } 
        var cmore = tcmore;
    } else if (sigma == "unknown" && tail == "two"){
        var testtype = "<b>Two-Tailed Test</b>"
        var testsymb = "t";
        var tailsign = "=";
        var stndsymb = "s"
        var cvalsymb1 = "-t_{\\alpha / 2}";
        var cvalsymb2 = "t_{\\alpha / 2}";
        var pvalhalf = normalcdf(testtwo);
        if (pvalhalf > .2) {
            var pvalh = ".20 \\text{ to } 1"
        } else if (pvalhalf <.2 && pvalhalf >.1) {
            var pvalh = ".10 \\text{ to } .20"
        } else if (pvalhalf <.1 && pvalhalf >.05) {
            var pvalh = ".05 \\text{ to } .10"
        } else if (pvalhalf <.05 && pvalhalf >.025) {
            var pvalh = ".025 \\text{ to } .05"
        } else if (pvalhalf <.025 && pvalhalf >.01) {
            var pvalh = ".01 \\text{ to } .025"
        } else if (pvalhalf <.01 && pvalhalf >.005) {
            var pvalh = ".005 \\text{ to } .01"
        } else if (pvalhalf <.005) {
            var pvalh = "0 \\text{ to } .005"
        } else {
            var pvalh = pvalhalf.toFixed(4);
        }     
        var pvalue = 2 * pvalhalf;
        if (pvalhalf > .2) {
            var pval = ".40 \\text{ to } 1"
        } else if (pvalhalf <.2 && pvalhalf >.1) {
            var pval = ".20 \\text{ to } .40"
        } else if (pvalhalf <.1 && pvalhalf >.05) {
            var pval = ".10 \\text{ to } .20"
        } else if (pvalhalf <.05 && pvalhalf >.025) {
            var pval = ".05 \\text{ to } .10"
        } else if (pvalhalf <.025 && pvalhalf >.01) {
            var pval = ".02 \\text{ to } .05"
        } else if (pvalhalf <.01 && pvalhalf >.005) {
            var pval = ".01 \\text{ to } .02"
        } else if (pvalhalf <.005) {
            var pval = "0 \\text{ to } .01"
        } else {
            var pval = pvalue.toFixed(4);
        }   
        var ctwo1 = tctwo1; var ctwo2 = tctwo2; 
    }
    
    if (pvalue <= alpha) {
        var pinequ = "\\leq"
        var concl = "\\text{Reject } H_o"
        var critsignlower = "\\leq"
        var critsignupper = "\\geq"
    } else if (pvalue > alpha) {
        var pinequ = ">"
        var concl = "\\text{Do Not Reject } H_o"
        var critsignlower = ">"
        var critsignupper = "<"
    }
    
    if (pvalue <= alpha) {
        if (tail == "lower") {
            var interpret = " $$ \\text{Interpretation: Conclude } \\mu <" + muknot + " $$ "
        } else if (tail == "upper") {
            var interpret = " $$ \\text{Interpretation: Conclude } \\mu >" + muknot + " $$ "
        } else if (tail == "two") {
            var interpret = " $$ \\text{Interpretation: Conclude } \\mu \\neq" + muknot + " $$ "
        }
    } else if (pvalue > alpha) {
        if (tail == "lower") {
            var interpret = " $$ \\text{Interpretation: Can't conclude } \\mu <" + muknot + " $$ "
        } else if (tail == "upper") {
            var interpret = " $$ \\text{Interpretation: Can't conclude } \\mu >" + muknot + " $$ "
        } else if (tail == "two") {
            var interpret = " $$ \\textInterpretation: Can't conclude } \\mu \\neq" + muknot + " $$ "
        }
    }
     
    if (testtwo <= zctwo1) {
        var twosign1 = "\\leq"
    } else if (testtwo > zctwo1) {
        var twosign1 = ">"
    }
    
    if (testtwo >= zctwo1) {
        var twosign2 = "\\geq"
    } else if (testtwo < zctwo1) {
        var twosign2 = "<"
    }
    
    if (test <= ctwo1) {
        var twocrit = testsymb + "="+test.toFixed(2) + "\\leq" +""+ cvalsymb1+" = "+ctwo1.toFixed(2);
    } else if (test >= ctwo2) {
        var twocrit = testsymb + "="+test.toFixed(2) + "\\geq" +" "+ cvalsymb2+" = "+ctwo2.toFixed(2);
    } else {
        var twocrit = "\\begin{align}"+testsymb+ "&="+test.toFixed(2) + ">" + cvalsymb1+" = "+zctwo1.toFixed(2)+" \\\\ \\text{ and }"+testsymb+ "&="+test.toFixed(2) + "< "+cvalsymb2+" = "+zctwo2.toFixed(2)+ " \\end{align}"
    }
    
    var zvalue = toFixing(parseFloat(test),1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(test).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colp = zseconddec
    
    var zcrit = toFixing(zcless,1);
    var zcrit1 = (zcrit - .1).toFixed(1);
    var zcrit2 = (parseFloat(zcrit) + .1).toFixed(1);
    var zcritr = zcless.toFixed(2); 
    var zcritseconddec = (""+zcritr)[4];
    var colc = zcritseconddec
    
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
    
    
    
    
    
    
    if (zseconddec == 0) {
         var colp1 = 1
    } else if (zseconddec == 1) {
         var colp1 = 2
    } else if (zseconddec == 2) {
         var colp1 = 3
    } else if ((zseconddec == 3 || zseconddec == 4 || zseconddec == 5 || zseconddec == 6)) {
         var colp1 = 3
    } else if (zseconddec == 7) {
         var colp1 = 3
    } else if (zseconddec == 8) {
         var colp1 = 4
    } else if (zseconddec == 9) {
         var colp1 = 5
    }
    
    
    
    
    
    
    
    
    if (zcritseconddec == 0 || zcritseconddec == 1 || zcritseconddec == 2) {
         var critstart = 0; 
         var critend = 4;
    } else if (zcritseconddec == 3) {
         var critstart = 1; 
         var critend = 5;
    } else if (zcritseconddec == 4) {
         var critstart = 2; 
         var critend = 6;
    } else if ((zcritseconddec == 5)) {
         var critstart = 3; 
         var critend = 7;
    } else if (zcritseconddec == 6) {
         var critstart = 4; 
         var critend = 8;
    } else if (zcritseconddec == 7 || zcritseconddec == 8 || zcritseconddec == 9) {
         var critstart = 5; 
         var critend = 9;
    }
    
    
    table1 = []
    for (var r = valstart; r < valend + 1; r++){
        if (r == colp) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (test < 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colp) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvalue1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colp) {
                table3 += "<td style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colp) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (test >= 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            //table31 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            if (r == colp) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            //table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            if (r == colp) {
                table3 += "<td style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
        }
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            //table32 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            if (r == colp) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    table12 = []
    for (var r = critstart; r < critend + 1; r++){
        if (r == colc) {
                table12 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table12 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    table21 = []
    for (var r = critstart; r < critend + 1; r++){
        if (r == colc) {
                table21 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zcrit1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table21 += "<td>$" + normalcdf(parseFloat(zcrit1) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
    }
    
    table2 = []
    for (var r = critstart; r < critend + 1; r++){
        if (r == colc) {
                table2 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zcrit) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zcrit) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
    }
    
    table22 = []
    for (var r = critstart; r < critend + 1; r++){
        if (r == colc) {
                table22 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zcrit2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table22 += "<td>$" + normalcdf(parseFloat(zcrit2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
    }
    
    table41 = "<td colspan='7'>$\\text{Student's t-Distribution Table}$</td>"
    
    table4 = "<td></td><td colspan='6' style='border-bottom: thin solid'>$\\text{Area in Upper Tail}$</td>"
    
    
    
    
    
    
    
    
    
    if (sigma == "unknown" && tail == "lower"){
        var testtype = "<b>Lower Tail Test</b>"
        var testsymb = "t";
        var tailsign = "\\leq";
        var stndsymb = "s"
        var cvalsymb = "-t_\\alpha";
        var pvalue = compute(test,size-1);
        if (pvalue > .2) {
            //var pval = ".20 \\text{ to } 1"
        } else if (pvalue <.2 && pvalue >.1) {
            //var pval = ".10 \\text{ to } .20"
        } else if (pvalue <.1 && pvalue >.05) {
            //var pval = ".05 \\text{ to } .10"
        } else if (pvalue <.05 && pvalue >.025) {
            //var pval = ".025 \\text{ to } .05"
            
        } else if (pvalue <.025 && pvalue >.01) {
            //var pval = ".01 \\text{ to } .025"
        } else if (pvalue <.01 && pvalue >.005) {
            //var pval = ".005 \\text{ to } .01"
        } else if (pvalue <.005) {
            //var pval = "0 \\text{ to } .005"
        } else {
            //var pval = pvalue.toFixed(4);
        }
        var cless = tcless;
    } else if (sigma == "unknown" && tail == "upper"){
        var testtype = "<b>Upper Tail Test</b>"
        var testsymb = "t";
        var tailsign = "\\geq";
        var stndsymb = "s"
        var cvalsymb = "t_\\alpha";
        var pvalue = 1 - compute(test,size-1);
        if (pvalue > .2) {
            //var pval = ".20 \\text{ to } 1"
            table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td bgcolor='lightgray'>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalue <.2 && pvalue >.1) {
            //var pval = ".10 \\text{ to } .20"
            table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td bgcolor='lightgray'>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td bgcolor='lightgray'>$"+tinv(.20,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalue <.1 && pvalue >.05) {
            //var pval = ".05 \\text{ to } .10"
            table5 = "<td>$df$</td><td>$.20$</td><td bgcolor='lightgray'>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalue <.05 && pvalue >.025) {
            //var pval = ".025 \\text{ to } .05"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalue <.025 && pvalue >.01) {
            //var pval = ".01 \\text{ to } .025"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td bgcolor='lightgray'>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalue <.01 && pvalue >.005) {
            //var pval = ".005 \\text{ to } .01"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td bgcolor='lightgray'>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalue <.005) {
            //var pval = "0 \\text{ to } .005"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else {
            //var pval = pvalue.toFixed(4);
        } 
        var cmore = tcmore;
    } else if (sigma == "unknown" && tail == "two"){
        var testtype = "<b>Two-Tailed Test</b>"
        var testsymb = "t";
        var tailsign = "=";
        var stndsymb = "s"
        var cvalsymb1 = "-t_{\\alpha / 2}";
        var cvalsymb2 = "t_{\\alpha / 2}";
        var pvalhalf = normalcdf(testtwo);
        if (pvalhalf > .2) {
            var pvalh = ".20 \\text{ to } 1"
        } else if (pvalhalf <.2 && pvalhalf >.1) {
            var pvalh = ".10 \\text{ to } .20"
        } else if (pvalhalf <.1 && pvalhalf >.05) {
            var pvalh = ".05 \\text{ to } .10"
        } else if (pvalhalf <.05 && pvalhalf >.025) {
            var pvalh = ".025 \\text{ to } .05"
        } else if (pvalhalf <.025 && pvalhalf >.01) {
            var pvalh = ".01 \\text{ to } .025"
        } else if (pvalhalf <.01 && pvalhalf >.005) {
            var pvalh = ".005 \\text{ to } .01"
        } else if (pvalhalf <.005) {
            var pvalh = "0 \\text{ to } .005"
        } else {
            var pvalh = pvalhalf.toFixed(4);
        }     
        var pvalue = 2 * pvalhalf;
        if (pvalhalf > .2) {
            var pval = ".40 \\text{ to } 1"
        } else if (pvalhalf <.2 && pvalhalf >.1) {
            var pval = ".20 \\text{ to } .40"
        } else if (pvalhalf <.1 && pvalhalf >.05) {
            var pval = ".10 \\text{ to } .20"
        } else if (pvalhalf <.05 && pvalhalf >.025) {
            var pval = ".05 \\text{ to } .10"
        } else if (pvalhalf <.025 && pvalhalf >.01) {
            var pval = ".02 \\text{ to } .05"
        } else if (pvalhalf <.01 && pvalhalf >.005) {
            var pval = ".01 \\text{ to } .02"
        } else if (pvalhalf <.005) {
            var pval = "0 \\text{ to } .01"
        } else {
            var pval = pvalue.toFixed(4);
        }   
        var ctwo1 = tctwo1; var ctwo2 = tctwo2; 
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if (alpha == ".1") {
        table52 = "<td>$df$</td><td>$.20$</td><td bgcolor='lightgray'>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
        table71 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table7 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

        table72 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
    } else if (alpha == ".05") {
        table52 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
        table71 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table7 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

        table72 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
    } else if (alpha == ".01") {
        table52 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td bgcolor='lightgray'>$.01$</td><td>$.005$</td>"
    
        table71 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table7 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

        table72 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
    }
    
    
    
    
    
    if (sigma == "known") {
        //var tablep = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
        var tablep = "<table><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid'><td>$z$</td>"+table1+"</tr><tr style='border-top: thin solid'><td>$"+zvalue1+"$</td>"+table31+"</tr><tr bgcolor='lightgray'><td>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table32+"</tr></table>"
        var tablec = "<table><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid'><td>$z$</td>"+table12+"</tr><tr style='border-top: thin solid'><td>$"+zcrit1+"$</td>"+table21+"</tr><tr><td bgcolor='lightgray'>$"+zcrit+"$</td>"+table2+"</tr><tr><td>$"+zcrit2+"$</td>"+table22+"</tr></table>"
        } else if (sigma == "unknown") {
            var tablep = "<table><tr>"+table41+"</tr><tr style='border-top: thin solid;'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table61+"</tr><tr>"+table6+"</tr><tr>"+table62+"</tr></table>"
            var tablec = "<table><tr>"+table41+"</tr><tr style='border-top: thin solid;'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table52+"</tr><tr>"+table71+"</tr><tr>"+table7+"</tr><tr>"+table72+"</tr></table>"
    }
    

    if (sigma == "known") {
        document.getElementById("output1").innerHTML = " $ \\text{Test Statistic:} $ $$ z =\\frac{\\bar{x}-\\mu_o}{\\sigma / \\sqrt{n}} = \\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}} = {\\color{NavyBlue} "+test.toFixed(2)+"} $$   $ \\text{p-Value Approach:} $"
    } else if (sigma == "unknown") {
        if (inputtype == "values") {
            document.getElementById("output1").innerHTML = " $ \\text{Test Statistic:} $ $$ t =\\frac{\\bar{x}-\\mu_o}{s / \\sqrt{n}} = \\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}} = "+test.toFixed(2)+" $$ $ \\text{Degrees of Freedom:} $ $$ df = n - 1 = "+size+" - 1 = "+(size-1)+" $$   $ \\text{p-Value Approach:} $"
        } else if (inputtype == "data") {
            document.getElementById("output1").innerHTML = " $ \\text{Sample Mean:} $ $$ \\bar{x} = \\frac{\\sum{x}}{n} =  \\frac{" + sumeach + "}{" + len + "}  = \\boxed{" + parseFloat(mn.toFixed(2)) + "} $$ $ \\text{Sample Standard Deviation:} $ $$ \\ s = \\sqrt{\\dfrac{\\sum{(x-\\bar{x})^2}}{n-1}} = \\sqrt{\\dfrac{"+parseFloat(sumeachminus2.toFixed(2))+"}{"+len+"-1}} = "+parseFloat(ansstd.toFixed(2))+" $$ $ \\text{Test Statistic:} $ $$ t =\\frac{\\bar{x}-\\mu_o}{s / \\sqrt{n}} = \\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}} = \\boxed{"+test.toFixed(2)+"} $$ $ \\text{Degrees of Freedom:} $ $$ df = n - 1 = "+size+" - 1 = "+(size-1)+" $$   $ \\text{p-Value Approach:} $"
        } 
    } 
    
    
    if (tail == "lower") {
        
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2)))) 
        }

        var c = document.getElementById("myCanvas1");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",25,105);

        if (sigma == "known") {
            ctx.fillText("z",285,132);
            ctx.fillText(test.toFixed(2),60,145);
        } else if (sigma == "unknown") {
            ctx.fillText("t",285,132);
            ctx.fillText(test.toFixed(2),60,145);   
            //ctx.fillText("df = "+sizem1,220,40); 
        }


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

        
    } else if (tail == "upper") {
        

        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2)))) 
        }

        var c = document.getElementById("myCanvas1");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",240,100);

        if (sigma == "known") {
            ctx.fillText("z",285,132);
            ctx.fillText(test.toFixed(2),220,145);
        } else if (sigma == "unknown") {
            ctx.fillText("t",285,132);
            ctx.fillText(test.toFixed(2),220,145); 
            //ctx.fillText("df = "+sizem1,220,40); 
        }
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

    } else if (tail == "two") {

        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("myCanvas1");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",25,105);
        ctx.fillText("p-value",245,105);

        if (sigma == "known") {
            ctx.fillText("z",285,132);
            ctx.fillText((-Math.abs(test.toFixed(2))),66,145);
            ctx.fillText(Math.abs(test.toFixed(2)),226,145);
        } else if (sigma == "unknown") {
            ctx.fillText("t",285,132);
            ctx.fillText((-Math.abs(test.toFixed(2))),66,145);
            ctx.fillText(Math.abs(test.toFixed(2)),226,145); 
            //ctx.fillText("df = "+sizem1,220,40); 
        }


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

    
    if (tail == "lower" && sigma == "known") {
        document.getElementById("output2").innerHTML = tablep+ "$$ p \\text{-value}=P("+testsymb+tailsign+test.toFixed(2)+" ) = {\\color{NavyBlue}" + pval.replace(/^0+/, '')+ "} $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } p\\text{-value} \\leq \\alpha $$ $$ p \\text{-value}="+pval.replace(/^0+/, '')+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{"+concl+"} $$ " + interpret + " $ \\text{Critical Value Approach:} $"
    } else if (tail == "upper" && sigma == "known") {
        document.getElementById("output2").innerHTML = tablep+" $$ \\begin{align} p \\text{-value} &= P("+testsymb+tailsign+test.toFixed(2)+" ) \\\\ &= 1 - P(z \\leq "+test.toFixed(2)+" ) \\\\ &= 1 - " + (1-pval).toFixed(4).replace(/^0+/, '') + " = " + pval.replace(/^0+/, '')+ " \\end{align} $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } p\\text{-value} \\leq \\alpha $$ $$ p \\text{-value}="+pval.replace(/^0+/, '')+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{"+concl+"} $$ " + interpret + " $ \\text{Critical Value Approach:} $ "
    } else if (tail == "two" && sigma == "known") {
        if (test < 0) {
            document.getElementById("output2").innerHTML = tablep+"$$ \\begin{align} p \\text{-value}&=2 \\times P("+testsymb+" \\leq "+test.toFixed(2)+" ) \\\\ &= 2 \\times " + pvalh.replace(/^0+/, '')+ " = "+pval.replace(/^0+/, '')+" \\end{align} $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } p\\text{-value} \\leq \\alpha $$ $$ p \\text{-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{" + concl +"} $$ " + interpret + " $ \\text{Critical Value Approach:} $"
        } else {
            document.getElementById("output2").innerHTML = tablep+"$$ \\begin{align} p \\text{-value}&=2 \\times P("+testsymb+" \\geq "+test.toFixed(2)+" ) \\\\ &=2 \\times [1 - P("+testsymb+" \\leq "+test.toFixed(2)+" ) ] \\\\ &=2 \\times [1 - "+(1-pvalh).toFixed(4).replace(/^0+/, '')+" ] \\\\ &= 2 \\times " + pvalh.replace(/^0+/, '')+ " = {\\color{Green}"+pval.replace(/^0+/, '')+"} \\end{align} $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } p\\text{-value} \\leq \\alpha $$ $$ p \\text{-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{" + concl +"} $$ " + interpret + " $ \\text{Critical Value Approach:} $"
        }
        
    } else if (tail == "lower" && sigma == "unknown") {
        document.getElementById("output2").innerHTML = tablep+ "$$ p \\text{-value}=P("+testsymb+tailsign+test.toFixed(2)+" ) = " + pval.replace(/^0+/, '')+ " $$ $$ ( \\text{Note: Exact value is } " + pvalue.toFixed(4).replace(/^0+/, '') + " ) $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } p\\text{-value} \\leq \\alpha $$ $$ p \\text{-value}="+pval.replace(/^0+/, '')+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{"+concl+"} $$ " + interpret + " $ \\text{Critical Value Approach:} $"
    } else if (tail == "upper" && sigma == "unknown") {
        document.getElementById("output2").innerHTML = tablep+" $$ p \\text{-value}=P("+testsymb+tailsign+test.toFixed(2)+" ) = " + pval.replace(/^0+/, '')+ " $$ $$ ( \\text{Note: Exact value is } " + pvalue.toFixed(4).replace(/^0+/, '') + " ) $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } p\\text{-value} \\leq \\alpha $$ $$ p \\text{-value}="+pval.replace(/^0+/, '')+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{"+concl+"} $$ " + interpret + " $ \\text{Critical Value Approach:} $ "
    } else if (tail == "two" && sigma == "unknown") {
        document.getElementById("output2").innerHTML = tablep+"$$ \\begin{align} p \\text{-value}&=2 \\times P("+testsymb+" \\leq "+testtwo.toFixed(2)+" ) \\\\ &= 2 \\times " + pvalh.replace(/^0+/, '')+ " = "+pval.replace(/^0+/, '')+" \\end{align} $$ $$ ( \\text{Note: Exact value is } " + pvalue.toFixed(4).replace(/^0+/, '') + " ) $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } p\\text{-value} \\leq \\alpha $$ $$ p \\text{-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{" + concl +"} $$ " + interpret + " $ \\text{Critical Value Approach:} $"
    }
    
    
    
    if (tail == "lower") {

        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        
        ctx.fillText(alpha,35,105);

        if (sigma == "known") {
            ctx.fillText("z",285,132);
            ctx.fillText("-z",65,145);
            ctx.fillText("α",74,146);
        } else if (sigma == "unknown") {
            ctx.fillText("t",285,132);
            ctx.fillText("-t",65,145); 
            ctx.fillText("α",72,146);   
            //ctx.fillText("df = "+sizem1,220,40); 
        }


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
        


    } else if (tail == "upper") {

        
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        
        ctx.fillText(alpha,250,105);

        if (sigma == "known") {
            ctx.fillText("z",285,132);
            ctx.fillText("z",227,145);
            ctx.fillText("α",233,146);
        } else if (sigma == "unknown") {
            ctx.fillText("t",285,132);
            ctx.fillText("t",229,145);
            ctx.fillText("α",233,146);  
            //ctx.fillText("df = "+sizem1,220,40); 
        }


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
        

    } else if (tail == "two") {

        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        
        ctx.fillText((alpha/2),30,105);
        ctx.fillText((alpha/2),245,105);

        if (sigma == "known") {
            ctx.fillText("z",285,132);
            ctx.fillText("-z",65,145);
            ctx.fillText("α/2",74,146);
            ctx.fillText("z",228,145);
            ctx.fillText("α/2",234,146);
        } else if (sigma == "unknown") {
            ctx.fillText("t",285,132);
            ctx.fillText("-t",65,145);
            ctx.fillText("α/2",72,146);
            ctx.fillText("t",228,145);
            ctx.fillText("α/2",232,146);
            //ctx.fillText("df = "+sizem1,220,40); 
        }


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
    
    
    
    if (tail == "lower" && sigma == "known") {
        document.getElementById("output3").innerHTML = tablec+" $$ \\text{Critical Value: }"+cvalsymb+" = {\\color{NavyBlue}" + cless.toFixed(2) + "} $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } z \\leq -z_\\alpha $$ $$"+testsymb+"="+test.toFixed(2) +critsignlower+cvalsymb+" = "+cless.toFixed(2)+"$$ $$ \\text{Conclusion: } \\boxed{" + concl + "} $$" + interpret + "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    } else if (tail == "upper" && sigma == "known") {
        document.getElementById("output3").innerHTML = tablec+"$$ \\text{Critical Value: }"+cvalsymb+" = " + cmore.toFixed(2) + " $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } z \\geq z_\\alpha $$ $$"+testsymb+"="+test.toFixed(2) +critsignupper +" "+ cvalsymb+" = "+cmore.toFixed(2)+"$$ $$ \\text{Conclusion: } \\boxed{" + concl + "} $$" + interpret + "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    } else if (tail == "two" && sigma == "known") {
        document.getElementById("output3").innerHTML = tablec+"$$ \\begin{align} \\text{Critical Values: } "+cvalsymb1+" &= " + ctwo1.toFixed(2) + " \\\\ \\text{ and } "+cvalsymb2+" &= "+ctwo2.toFixed(2) + " \\end{align} $$ $$ \\text{Rejection Rule:} $$ $$ \\text{Reject } H_0 \\text{ if } z \\leq -z_\\alpha \\text{ or if } z \\geq z_\\alpha $$ $$ " + twocrit+ " $$ $$ \\text{Conclusion: } \\boxed{" + concl + "} $$" + interpret + "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    } else if (tail == "lower" && sigma == "unknown") {
        document.getElementById("output3").innerHTML = tablec+" $$ \\text{Critical Value: }"+cvalsymb+" = " + cless.toFixed(3) + " $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } t \\leq -t_\\alpha $$ $$"+testsymb+"="+test.toFixed(2) +critsignlower+cvalsymb+" = "+cless.toFixed(3)+"$$ $$ \\text{Conclusion: } \\boxed{" + concl + "} $$" + interpret + "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    } else if (tail == "upper" && sigma == "unknown") {
        document.getElementById("output3").innerHTML = tablec+"$$ \\text{Critical Value: }"+cvalsymb+" = " + cmore.toFixed(3) + " $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } t \\geq t_\\alpha $$ $$"+testsymb+"="+test.toFixed(2) +critsignupper +" "+ cvalsymb+" = "+cmore.toFixed(3)+" $$ $$ \\text{Conclusion: } \\boxed{" + concl + "} $$" + interpret + "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    } else if (tail == "two" && sigma == "unknown") {
        document.getElementById("output3").innerHTML = tablec+"$$ \\begin{align} \\text{Critical Values: } "+cvalsymb1+" &= " + ctwo1.toFixed(3) + " \\\\ \\text{ and } "+cvalsymb2+" &= "+ctwo2.toFixed(3) + " \\end{align} $$ $$ \\text{Rejection Rule:} $$ $$ \\text{Reject } H_0 \\text{ if } t \\leq -t_\\alpha \\text{ or if } t \\geq t_\\alpha $$ $$ " + twocrit+ " $$ $$ \\text{Conclusion: } \\boxed{" + concl + "} $$" + interpret + "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    }
    
    
    
    
    MathJax.typeset();
}

function hyptest2(){
    var tail = document.getElementById("tail").value;
    var pknot = document.getElementById("muknot").value;
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var pbar = document.getElementById("xbar").value;
    var alpha = document.getElementById("alpha").value;
    var test = (pbar-pknot)/Math.sqrt(pknot*(1-pknot)/size);
    var testtwo = -Math.abs(test);
    var zpless = normalcdf(test); var zpmore = 1 - normalcdf(test);
    var zptwo = normalcdf(testtwo); var zptwo2 = 2 * zptwo;
    var zcless = NormSInv(alpha); var zcmore = Math.abs(NormSInv(alpha))
    var zctwo1 = NormSInv(alpha/2); var zctwo2 = Math.abs(NormSInv(alpha/2)); 
    var exp = 2.71828;

    if (tail == "lower"){
        var testtype = "<b>Lower Tail Test</b>"
        var testsymb = "z";
        var tailsign = "\\leq";
        var stndsymb = "\\sigma"
        var cvalsymb = "-z_\\alpha";
        var pvalue = normalcdf(test);
        var pval = pvalue.toFixed(4);
        var cless = zcless;
    } else if (tail == "upper"){
        var testtype = "<b>Upper Tail Test</b>"
        var testsymb = "z";
        var tailsign = "\\geq";
        var stndsymb = "\\sigma"
        var cvalsymb = "z_\\alpha";
        var pvalue = 1 - normalcdf(test);
        var pval = pvalue.toFixed(4);
        var cmore = zcmore;
    } else if (tail == "two"){
        var testtype = "<b>Two-Tailed Test</b>"
        var testsymb = "z";
        var tailsign = "=";
        var stndsymb = "\\sigma"
        var cvalsymb1 = "-z_{\\alpha / 2}";
        var cvalsymb2 = "z_{\\alpha / 2}";
        var pvalhalf = normalcdf(testtwo);
        var pvalh = pvalhalf.toFixed(4);
        var pvalue = 2 * pvalhalf.toFixed(4);
        var pval = pvalue.toFixed(4);
        var ctwo1 = zctwo1; var ctwo2 = zctwo2; 
    } 
    
    if (pvalue <= alpha) {
        var pinequ = "\\leq"
        var concl = "\\text{Reject } H_o"
        var critsignlower = "\\leq"
        var critsignupper = "\\geq"
    } else if (pvalue > alpha) {
        var pinequ = ">"
        var concl = "\\text{Do Not Reject } H_o"
        var critsignlower = ">"
        var critsignupper = "<"
    }
     
    if (testtwo <= zctwo1) {
        var twosign1 = "\\leq"
    } else if (testtwo > zctwo1) {
        var twosign1 = ">"
    }
    
    if (testtwo >= zctwo1) {
        var twosign2 = "\\geq"
    } else if (testtwo < zctwo1) {
        var twosign2 = "<"
    }
    
    if (test <= ctwo1) {
        var twocrit = testsymb + "="+test.toFixed(2) + "\\leq" +""+ cvalsymb1+" = "+ctwo1.toFixed(2);
    } else if (test >= ctwo2) {
        var twocrit = testsymb + "="+test.toFixed(2) + "\\geq" +" "+ cvalsymb2+" = "+ctwo2.toFixed(2);
    } else {
        var twocrit = "\\begin{align}"+testsymb+ "&="+test.toFixed(2) + ">" + cvalsymb1+" = "+zctwo1.toFixed(2)+" \\\\ \\text{ and }"+testsymb+ "&="+test.toFixed(2) + "< "+cvalsymb2+" = "+zctwo2.toFixed(2)+ " \\end{align}"
    }
    
    var zvalue = toFixing(test,1);
    var zvaluer = test.toFixed(2); 
    var zseconddec = (""+zvaluer)[4];
    var zcrit = toFixing(zcless,1);
    var zcritr = zcless.toFixed(2); 
    var zcritseconddec = (""+zcritr)[4];
    
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
    
    if (zcritseconddec == 0 || zcritseconddec == 1 || zcritseconddec == 2) {
         var critstart = 0; 
         var critend = 4;
    } else if (zcritseconddec == 3) {
         var critstart = 1; 
         var critend = 5;
    } else if (zcritseconddec == 4) {
         var critstart = 2; 
         var critend = 6;
    } else if ((zcritseconddec == 5)) {
         var critstart = 3; 
         var critend = 7;
    } else if (zcritseconddec == 6) {
         var critstart = 4; 
         var critend = 8;
    } else if (zcritseconddec == 7 || zcritseconddec == 8 || zcritseconddec == 9) {
         var critstart = 5; 
         var critend = 9;
    }
    
    
    table1 = []
    for (var r = valstart; r < valend + 1; r++){
        table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
    }
    
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        table3 += "<td>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
    }
    
    table12 = []
    for (var r = critstart; r < critend + 1; r++){
        table12 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
    }
    
    table2 = []
    for (var r = critstart; r < critend + 1; r++){
        table2 += "<td>$" + normalcdf(parseFloat(zcrit) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
    }
 

    var tablep = "<table><tr style='border-top: thin solid'><td>$z$</td>"+table1+"</tr><tr style='border-top: thin solid'><td>$"+zvalue+"$</td>"+table3+"</tr></table>"
    var tablec = "<table><tr style='border-top: thin solid'><td>$z$</td>"+table12+"</tr><tr style='border-top: thin solid'><td>$"+zcrit+"$</td>"+table2+"</tr></table>"

    document.getElementById("output1").innerHTML = " $ \\text{Test Statistic:} $ $$ z =\\frac{\\bar{p}-p_0}{\\sqrt{\\dfrac{p_0(1-p_0)}{n}}} =\\dfrac{"+pbar+"-"+pknot+"}{\\sqrt{\\dfrac{"+pknot+"(1-"+pknot+")}{ "+size+"}}} = "+test.toFixed(2)+"  $$ $ \\text{p-Value Approach:}$"

    if (tail == "lower") {
        
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("myCanvas1");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",25,105);

        ctx.fillText("z",285,132);
        ctx.fillText(test.toFixed(2),60,145);

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

        
    } else if (tail == "upper") {
        

        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("myCanvas1");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",240,100);

        ctx.fillText("z",285,132);
        ctx.fillText(test.toFixed(2),220,145);


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

    } else if (tail == "two") {
        

        
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("myCanvas1");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",25,105);
        ctx.fillText("p-value",245,105);

        ctx.fillText("z",285,132);
        ctx.fillText((-Math.abs(test.toFixed(2))),66,145);
        ctx.fillText(Math.abs(test.toFixed(2)),226,145);

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
    
    if (tail == "lower") {
        document.getElementById("output2").innerHTML = tablep+ "$$\\text{p-value}=P("+testsymb+tailsign+test.toFixed(2)+" ) = " + pval+ "$$ $$\\text{p-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{"+concl+"} $$ $ \\text{Critical Value Approach:}$"
    } else if (tail == "upper") {
        document.getElementById("output2").innerHTML = tablep+" $$\\text{p-value}=P("+testsymb+tailsign+test.toFixed(2)+" ) = " + pval+ " $$ $$\\text{p-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{"+concl+"} $$ $ \\text{Critical Value Approach:}$ "
    } else if (tail == "two") {
        document.getElementById("output2").innerHTML = tablep+"$$ \\begin{align} \\text{p-value}&=2*P("+testsymb+" \\leq "+testtwo.toFixed(2)+" ) \\\\ &= 2*" + pvalh+ " = "+pval+" \\end{align} $$ $$\\text{p-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{" + concl +"} $$ $ \\text{Critical Value Approach:}$"
    }

    if (tail == "lower") {

        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText(alpha,35,105);

        ctx.fillText("z",285,132);
        ctx.fillText("-z",65,145);
        ctx.fillText("α",74,146);



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
        


    } else if (tail == "upper") {

        
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText(alpha,250,105);

        ctx.fillText("z",285,132);
        ctx.fillText("z",227,145);
        ctx.fillText("α",233,146);



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
        

    } else if (tail == "two") {

        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
        }

        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(230, 100);
        ctx.lineTo(230, 130);
        ctx.lineTo(279, 130);
        ctx.lineTo(279, 118);
        ctx.quadraticCurveTo(260, 120, 230, 100);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText((alpha/2),30,105);
        ctx.fillText((alpha/2),245,105);

        ctx.fillText("z",285,132);
        ctx.fillText("-z",65,145);
        ctx.fillText("α/2",74,146);
        ctx.fillText("z",228,145);
        ctx.fillText("α/2",234,146);


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

    
    if (tail == "lower") {
        document.getElementById("output3").innerHTML = tablec+" $$ \\text{Critical Value: }"+cvalsymb+" = " + cless.toFixed(2) + " $$ $$"+testsymb+"="+test.toFixed(2) +critsignlower+cvalsymb+" = "+cless.toFixed(2)+"$$ $$ \\text{Conclusion: } \\boxed{" + concl + "} $$"
    } else if (tail == "upper") {
        document.getElementById("output3").innerHTML = tablec+"$$ \\text{Critical Value: }"+cvalsymb+" = " + cmore.toFixed(2) + " $$ $$"+testsymb+"="+test.toFixed(2) +critsignupper +" "+ cvalsymb+" = "+cmore.toFixed(2)+"$$ $$ \\text{Conclusion: } \\boxed{" + concl + "} $$"
    } else if (tail == "two") {
        document.getElementById("output3").innerHTML = tablec+"$$ \\begin{align} \\text{Critical Values: } "+cvalsymb1+" &= " + ctwo1.toFixed(2) + " \\\\ \\text{ and } "+cvalsymb2+" &= "+ctwo2.toFixed(2) + " \\end{align} $$ $$ " + twocrit+ " $$ $$ \\text{Conclusion: } \\boxed{" + concl + "} $$"
    }

    MathJax.typeset();
}

function example1(){
    if (inputtype == "values") {
            var x = document.getElementById("parameter1").value;
            if (x == "mean") {
                $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
                document.getElementById("parameter2").innerHTML = "&mu;"
                document.getElementById("samplestat").innerHTML = "$\\bar{x}$";
                $("#less").show();
                $("#greater").hide();
                $("#notequal").hide();
                document.getElementById('tail').value="lower"
                document.getElementById('muknot').value="30"
                document.getElementById('muknotvalue').innerHTML="30"
                document.getElementById('size').value="60"
                document.getElementById('xbar').value="29.3"
                document.getElementById('stdev').value="3"
                document.getElementById('sigma').value="known"
                document.getElementById('alpha').value=".05"
                MathJax.typeset();
            } else if (x == "proportion") {
                $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
                document.getElementById("parameter2").innerHTML = "p"
                document.getElementById("samplestat").innerHTML = "$\\bar{p}$";
                $("#less").hide();
                $("#greater").hide();
                $("#notequal").show();
                document.getElementById('tail').value="two"
                document.getElementById('muknot').value=".30"
                document.getElementById('muknotvalue').innerHTML=".30"
                document.getElementById('size').value="500"
                document.getElementById('xbar').value=".28"
                document.getElementById('alpha').value=".05"
                MathJax.typeset();
            } 
        } else if (inputtype == "data") {
                $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
                document.getElementById("parameter2").innerHTML = "&mu;"
                $("#less").show();
                $("#greater").hide();
                $("#notequal").hide();
                document.getElementById('tail').value="lower"
                document.getElementById('muknot').value="4"
                document.getElementById('muknotvalue').innerHTML="4"
                document.getElementById('xvalues').value="1,2,3,4,5"
                document.getElementById('sigma').value="unknown"
                document.getElementById('alpha').value=".05"
                MathJax.typeset();
        } 
}

function example2(){
    if (inputtype == "values") {
            var x = document.getElementById("parameter1").value;
            if (x == "mean") {
                $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
                document.getElementById("parameter1").value = "mean"
                document.getElementById("parameter2").innerHTML = "&mu;"
                document.getElementById("samplestat").innerHTML = "$\\bar{x}$";
                $("#less").hide();
                $("#greater").show();
                $("#notequal").hide();
                document.getElementById('tail').value="upper"
                document.getElementById('muknot').value="14"
                document.getElementById('muknotvalue').innerHTML="14"
                document.getElementById('size').value="23"
                document.getElementById('xbar').value="15.5"
                document.getElementById('stdev').value="3.61"
                document.getElementById('sigma').value="unknown"
                document.getElementById('alpha').value=".05"
                MathJax.typeset();
            } else if (x == "proportion") {
                $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
                document.getElementById("parameter2").innerHTML = "p"
                document.getElementById("samplestat").innerHTML = "$\\bar{p}$";
                $("#less").hide();
                $("#greater").hide();
                $("#notequal").show();
                document.getElementById('tail').value="lower"
                document.getElementById('muknot').value=".65"
                document.getElementById('muknotvalue').innerHTML=".65"
                document.getElementById('size').value="200"
                document.getElementById('xbar').value=".58"
                document.getElementById('alpha').value=".05"
                MathJax.typeset();
            } 
        } else if (inputtype == "data") {
                $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
                document.getElementById("parameter2").innerHTML = "&mu;"
                $("#less").hide();
                $("#greater").show();
                $("#notequal").hide();
                document.getElementById('tail').value="upper"
                document.getElementById('muknot').value="5"
                document.getElementById('muknotvalue').innerHTML="5"
                document.getElementById('xvalues').value="2,4,6,8,10"
                document.getElementById('sigma').value="unknown"
                document.getElementById('alpha').value=".05"
                MathJax.typeset();
        }
}


function example3(){
        $("#lesst").show();
        $("#greatert").hide();
        $("#notequalt").hide();
        document.getElementById('tailt').value="lower"
        document.getElementById('muknott').value="120"
        document.getElementById('muknotvaluet').innerHTML="120"
        document.getElementById('sizet').value="36"
        document.getElementById('mut').value="112"
        document.getElementById('stdevt').value="12"
        document.getElementById('alphat').value=".05"
        MathJax.typeset();
}

function example4(){
        $("#lesst").hide();
        $("#greatert").hide();
        $("#notequalt").show();
        document.getElementById('tailt').value="two"
        document.getElementById('muknott').value="15"
        document.getElementById('muknotvaluet').innerHTML="15"
        document.getElementById('sizet').value="100"
        document.getElementById('mut').value="12.5"
        document.getElementById('stdevt').value="7.5"
        document.getElementById('alphat').value=".05"
        MathJax.typeset();
}

function example5(){
    $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
    document.getElementById("parameter1").value = "proportion"
    document.getElementById("parameter2").innerHTML = "p"
    document.getElementById("samplestat").innerHTML = "$\\bar{p}$";
    $("#less").hide();
    $("#greater").hide();
    $("#notequal").show();
    document.getElementById('tail').value="two"
    document.getElementById('muknot').value=".20"
    document.getElementById('muknotvalue').innerHTML=".20"
    document.getElementById('size').value="400"
    document.getElementById('xbar').value=".175"
    document.getElementById('alpha').value=".05"
    MathJax.typeset();
}
