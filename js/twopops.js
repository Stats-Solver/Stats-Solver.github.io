$("#greater").hide(); $("#notequal").hide(); $("#explanation").hide(); $("#nullalternative").hide();
$("#switchconfidence").hide(); $("#hypothesistitle").hide(); $("#levelsignificance").hide();
$("#hypsolve").hide(); $("#confsolve").show(); $("#confidenceexamples").show(); $("#hypothesisexamples").hide();

$("#xbar1s").hide(); $("#pbar1s").hide(); $("#samplestat1").show(); $("#myCanvas2").hide();

$("#proportionzero").hide();



$(function () {
            $('[data-toggle="tooltip"]').tooltip()
    })

function toFixing(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

function samplestat() {
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
        $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
        $("#sd11").show(); $("#sd22").show(); $("#sd33").show();
        document.getElementById("samplestat2").innerHTML = "x&#772;₂";
    } else if (x == "proportion"){
        $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
        $("#sd11").hide(); $("#sd22").hide(); $("#sd33").hide();
        document.getElementById("samplestat2").innerHTML = "p₂";
    } 
}

function stdev() {
    var x = document.getElementById("sigma").value;
    if (x == "known"){
        document.getElementById("standdev2").innerHTML = "&sigma;₂";
    } else if (x == "unknown"){
        document.getElementById("standdev2").innerHTML = "s₂";
    }
}

function parameter() {
    var x = document.getElementById("parameter1").value;
    if (x == "mean"){
        $("#proportionzero").hide(); $("#muknot").show();
        $("#xbar1s").show(); $("#pbar1s").hide(); $("#samplestat1").hide();
        document.getElementById("parameter2").innerHTML = "&mu;₁ - &mu;₂";
        document.getElementById("muknotvalue").innerHTML = "$D_0$";
        $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
        $("#sd11").show(); $("#sd22").show(); $("#sd33").show();
        document.getElementById("samplestat1").innerHTML = "x&#772;₁";
        document.getElementById("samplestat2").innerHTML = "x&#772;₂";
    } else if (x == "proportion"){
        $("#proportionzero").show(); $("#muknot").hide();
        $("#xbar1s").hide(); $("#pbar1s").show(); $("#samplestat1").hide();
        document.getElementById("parameter2").innerHTML = "p₁ - p₂";
        document.getElementById("muknotvalue").innerHTML = "0";
        $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
        $("#sd11").hide(); $("#sd22").hide(); $("#sd33").hide();
        document.getElementById("samplestat1").innerHTML = "p&#772;₁";
        document.getElementById("samplestat2").innerHTML = "p&#772;₂";
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

function muknotval() {
    var x = document.getElementById("muknot").value;
    document.getElementById("muknotvalue").innerHTML = x;
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





















function conint(){
    $("#myCanvas2").hide(); $("#output3").hide();
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
        conint1()
    } else if (x == "proportion"){
        conint2()
    } 
}


function conint1(){
    $("#explanation").hide(); $("#canvascontainer").show();
    $("#expconf").show();
    var sigma = document.getElementById("sigma").value;
    var size1 = document.getElementById("size1").value; var size1m1 = size1 - 1;
    var size2 = document.getElementById("size2").value; var size2m1 = size2 - 1;
    var xbar1 = document.getElementById("xbar1").value;
    var xbar2 = document.getElementById("xbar2").value;
    var stdev1 = document.getElementById("stdev1").value;
    var stdev2 = document.getElementById("stdev2").value;
    var conlev = document.getElementById("conlev").value;
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf);
    var marginerror = zalphahalf * Math.sqrt((stdev1*stdev1/size1)+(stdev2*stdev2/size2)); 
    var anslow = (xbar1-xbar2) - marginerror; var anshigh = (parseFloat(xbar1-xbar2)+marginerror);
    
    var degreesfreedom = ((stdev1*stdev1/size1+stdev2*stdev2/size2)*(stdev1*stdev1/size1+stdev2*stdev2/size2)) / ((1/(size1-1))*(stdev1*stdev1/size1)*(stdev1*stdev1/size1) + (1/(size2-1))*(stdev2*stdev2/size2)*(stdev2*stdev2/size2))    
    var degreesfreedomf = Math.floor(degreesfreedom)
    
    var talphahalf = tinv(alphahalf,degreesfreedomf);
    var marginerrort = talphahalf * Math.sqrt((stdev1*stdev1/size1)+(stdev2*stdev2/size2));
    var anslowt = (xbar1-xbar2) - marginerrort; var anshight = (parseFloat(xbar1-xbar2)+marginerrort)
    
    if (sigma == "known") {
        document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that a population parameter, such as the population mean, is likely to be in."
        document.getElementById("formulatext").innerHTML = "$$ \\bar{x}_1 - \\bar{x}_2 \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} $$"
        document.getElementById("explanationtext").innerHTML = "Choosing a higher confidence level will increase the size of the confidence interval since a larger range of values is more likely to contain the population parameter."
        
        document.getElementById("output1").innerHTML = "$$ \\bar{x}_1 - \\bar{x}_2 \\pm z_{\\alpha/2} \\sqrt{\\frac{\\sigma_1^2}{n_1}+\\frac{\\sigma_2^2}{n_2}} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3).replace(/^0+/, '') +"$$ "
    } else if (sigma == "unknown") {
        document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that a population parameter, such as the population mean, is likely to be in."
        document.getElementById("formulatext").innerHTML = "$$ \\bar{x}_1 - \\bar{x}_2 \\pm z_{\\alpha/2} \\frac{s}{\\sqrt{n}} $$ $$ \\text{df} = n - 1 $$"
        document.getElementById("explanationtext").innerHTML = "Choosing a higher confidence level will increase the size of the confidence interval since a larger range of values is more likely to contain the population parameter."
        
        document.getElementById("output1").innerHTML = "$$ \\bar{x}_1 - \\bar{x}_2 \\pm t_{\\alpha/2} \\sqrt{\\frac{s_1^2}{n_1}+\\frac{s_2^2}{n_2}} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3).replace(/^0+/, '') +"$$ $$  \\text{Degrees of Freedom: } $$ $$ \\begin{align} df &= \\frac{\\left(\\dfrac{s_1^2}{n_1}+\\dfrac{s_2^2}{n_2}\\right)^2}{\\dfrac{1}{n_1-1}\\left(\\dfrac{s_1^2}{n_1}\\right)^2 + \\dfrac{1}{n_2-1}\\left(\\dfrac{s_2^2}{n_2}\\right)^2} \\\\ &= \\frac{\\left(\\dfrac{"+stdev1+"^2}{"+size1+"}+\\dfrac{"+stdev2+"^2}{"+size2+"}\\right)^2}{\\dfrac{1}{"+size1+"-1}\\left(\\dfrac{"+stdev1+"^2}{"+size1+"}\\right)^2 + \\dfrac{1}{"+size2+"-1}\\left(\\dfrac{"+stdev2+"^2}{"+size2+"}\\right)^2} \\\\ &= " + parseFloat(degreesfreedom.toFixed(2)) + " \\end{align} $$ $$ \\text{Round down to } df = " + Math.floor(degreesfreedom) + " $$"
    } 
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(230, 96);
    ctx.lineTo(230, 130);
    ctx.lineTo(280, 130);
    ctx.lineTo(279, 120);
    ctx.quadraticCurveTo(260, 115, 230, 96);
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
    
    ctx.fillText("0",148,145);
    ctx.fillText(alphahalf.toFixed(3).replace(/^0+/, ''),248,101);

    if (sigma == "known") {
        ctx.fillText("z",285,132);
        ctx.fillText("z",228,145);
        ctx.fillText("α/2",234,147);
    } else if (sigma == "unknown") {
        ctx.fillText("t",285,132);
        ctx.fillText("t",228,145);
        ctx.fillText("α/2",232,147);
        //ctx.fillText("df = "+sizem1,220,40); 
    }
    
    ctx.beginPath();
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(230, 135);
    ctx.lineTo(230, 125);
    ctx.stroke();
    
    var zvalue = toFixing(zalphahalf,1);
    var zalphahalfr = zalphahalf.toFixed(2); 
    var zseconddec = (""+zalphahalfr)[3];
    
    
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
        table1 += "<td>" + (0.01 * r).toFixed(2).replace(/^0+/, '') + "</td>";
    }
    
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    var tablez = "<table><tr style='border-bottom: thin solid; border-top: thin solid'><td>z</td>"+table1+"</tr><tr><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    table4 = "<td></td><td colspan='6'>Area in Upper Tail</td>"
    
    table5 = "<td>df</td><td>.20</td><td>.10</td><td>.05</td><td>.025</td><td>.01</td><td>.005</td>"
    
    table6 = "<td>"+ degreesfreedomf +"</td><td>"+tinv(.20,degreesfreedomf).toFixed(3)+"</td><td>"+tinv(.10,degreesfreedomf).toFixed(3)+"</td><td>"+tinv(.05,degreesfreedomf).toFixed(3)+"</td><td>"+tinv(.025,degreesfreedomf).toFixed(3)+"</td><td>"+tinv(.01,degreesfreedomf).toFixed(3)+"</td><td>"+tinv(.005,degreesfreedomf).toFixed(3)+"</td>"
    
    
    var tablet = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table6+"</tr></table>"
    
    
    if (sigma == "known") {
        document.getElementById("output2").innerHTML = "$$\\text{Area to Left} = 1 - \\alpha/2 = 1 - "+alphahalf.toFixed(3).replace(/^0+/, '')+" = "+(1-alphahalf).toFixed(3).replace(/^0+/, '') +"$$"+tablez + "$$ z_{\\alpha/2} = "+zalphahalf.toFixed(2)+" $$ $$" + xbar1 + " - " + xbar2 + "\\pm" + zalphahalf.toFixed(2) + "\\sqrt{\\frac{"+stdev1+"^2}{"+size1+"}+\\frac{"+stdev2+"^2}{"+size2+"}}$$ $$"+ (xbar1-xbar2) + "\\pm" +marginerror.toFixed(2) + "$$ $$ \\boxed{" + anslow.toFixed(2) + "\\text{ to }" + anshigh.toFixed(2) + "} $$"
    } else if (sigma == "unknown") {
        document.getElementById("output2").innerHTML = tablet + "$$ t_{\\alpha/2} = "+talphahalf.toFixed(3)+" $$ $$" + xbar1 + " - " + xbar2 + "\\pm" + talphahalf.toFixed(3) + "\\sqrt{\\frac{"+stdev1+"^2}{"+size1+"}+\\frac{"+stdev2+"^2}{"+size2+"}}$$ $$"+(xbar1-xbar2) + "\\pm" +parseFloat(marginerrort.toFixed(2)) + "$$ $$ \\boxed{" + parseFloat(anslowt.toFixed(2)) + "\\text{ to }" + parseFloat(anshight.toFixed(2)) + "} $$"
    } 
    
    MathJax.typeset();
}

function conint2(){
    $("#explanation").hide(); $("#canvascontainer").show();
    $("#expconf").show();
    var size1 = document.getElementById("size1").value; var size1m1 = size1 - 1;
    var size2 = document.getElementById("size2").value; var size2m1 = size2 - 1;
    var pbar1 = document.getElementById("xbar1").value;
    var pbar2 = document.getElementById("xbar2").value;
    var conlev = document.getElementById("conlev").value;
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf); var talphahalf = tinv(alphahalf,size1m1);
    var marginerror0 = parseFloat(pbar1)*parseFloat((1-parseFloat(pbar1)))/parseFloat(size1)
    var marginerror = zalphahalf * Math.sqrt((pbar2*(1-pbar2))/size2+(pbar2*(1-pbar2))/size2);
    var anslow = (pbar1-pbar2) - marginerror; var anshigh = (parseFloat(pbar1-pbar2)+marginerror);
    
    document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that a population parameter, such as the population mean, is likely to be in."
    document.getElementById("formulatext").innerHTML = "$$ \\bar{p} \\pm z_{\\alpha/2} \\sqrt{\\frac{\\bar{p}(1-\\bar{p})}{n}} $$"
    document.getElementById("explanationtext").innerHTML = "Choosing a higher confidence level will increase the size of the confidence interval since a larger range of values is more likely to contain the population parameter."
        
    document.getElementById("output1").innerHTML = "$$ \\bar{p}_1 - \\bar{p}_2 \\pm z_{\\alpha/2} \\sqrt{\\frac{\\bar{p}_1(1-\\bar{p}_1)}{n_1}+\\frac{\\bar{p}_2(1-\\bar{p}_2)}{n_2}} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = \\underline{"+ alphahalf.toFixed(3).replace(/^0+/, '') +"}$$ "

    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(230, 96);
    ctx.lineTo(230, 130);
    ctx.lineTo(280, 130);
    ctx.lineTo(279, 120);
    ctx.quadraticCurveTo(260, 115, 230, 96);
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
    
    ctx.fillText("0",148,145);
    ctx.fillText("α/2 = "+alphahalf.toFixed(3).replace(/^0+/, ''),235,95);

    ctx.fillText("z",285,132);
    ctx.fillText("zα/2",220,145);
    
    ctx.beginPath();
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(230, 135);
    ctx.lineTo(230, 125);
    ctx.stroke();
    
    var zvalue = toFixing(zalphahalf,1);
    var zalphahalfr = zalphahalf.toFixed(2); 
    var zseconddec = (""+zalphahalfr)[3];
    
    
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
        table1 += "<td> <b>" + (0.01 * r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    var tablez = "<table><tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    table4 = "<td></td><td colspan='6'><b>Area in Upper Tail</b></td>"
    
    table5 = "<td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td>"
    
    table6 = "<td>"+ size1m1 +"</td><td>"+tinv(.20,size1m1).toFixed(3)+"</td><td>"+tinv(.10,size1m1).toFixed(3)+"</td><td>"+tinv(.05,size1m1).toFixed(3)+"</td><td>"+tinv(.025,size1m1).toFixed(3)+"</td><td>"+tinv(.01,size1m1).toFixed(3)+"</td><td>"+tinv(.005,size1m1).toFixed(3)+"</td>"
    
    
    var tablet = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table6+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "$$\\textbf{Area to Left} = 1 - \\alpha/2 = 1 - "+alphahalf.toFixed(3).replace(/^0+/, '')+" = \\underline{"+(1-alphahalf).toFixed(3).replace(/^0+/, '') +"}$$"+tablez + "$$ z_{\\alpha/2} = \\underline{"+zalphahalf.toFixed(2)+"} $$ $$" + pbar1 + " - "+ pbar2 +"\\pm" + zalphahalf.toFixed(2) + "\\sqrt{\\frac{"+pbar1+"(1-"+pbar1+")}{"+size1+"}+\\frac{"+pbar2+"(1-"+pbar2+")}{"+size2+"}}$$ $$"+parseFloat((pbar1-pbar2).toFixed(2)) + "\\pm" +marginerror.toFixed(3) + "$$ $$ \\boxed{" + anslow.toFixed(3) + "\\text{ to }" + anshigh.toFixed(3) + "} $$"
    
    MathJax.typeset();
}



























function hyptest(){
    $("#myCanvas2").show(); $("#output3").show();
    var x = document.getElementById("parameter1").value;
    if (x == "mean"){
        hyptest1()
    } else if (x == "proportion"){
        hyptest2()
    } 
}

function hyptest1(){
    $("#explanation").hide(); $("#canvascontainer").show(); $("#canvascontainer2").show();
    var tail = document.getElementById("tail").value;
    var sigma = document.getElementById("sigma").value;
    var muknot = document.getElementById("muknot").value;
    var size1 = document.getElementById("size1").value; var size1m1 = size1 - 1;
    var size2 = document.getElementById("size2").value; var size2m1 = size2 - 1;
    var dfree = parseFloat(size1)+parseFloat(size2)-2
    var xbar1 = document.getElementById("xbar1").value;
    var xbar2 = document.getElementById("xbar2").value;
    var stdev1 = document.getElementById("stdev1").value;
    var stdev2 = document.getElementById("stdev2").value;
    var alpha = document.getElementById("alpha").value;
    var test = ((xbar1-xbar2)-muknot)/Math.sqrt((stdev1*stdev1/size1)+(stdev2*stdev2/size2));
    var testtwo = -Math.abs(test);
    var zpless = normalcdf(test); var zpmore = 1 - normalcdf(test);
    var zptwo = normalcdf(testtwo); var zptwo2 = 2 * zptwo;
    var zcless = NormSInv(alpha); var zcmore = Math.abs(NormSInv(alpha))
    var zctwo1 = NormSInv(alpha/2); var zctwo2 = Math.abs(NormSInv(alpha/2)); 
    
    var degreesfreedom = ((stdev1*stdev1/size1+stdev2*stdev2/size2)*(stdev1*stdev1/size1+stdev2*stdev2/size2)) / ((1/(size1-1))*(stdev1*stdev1/size1)*(stdev1*stdev1/size1) + (1/(size2-1))*(stdev2*stdev2/size2)*(stdev2*stdev2/size2))    
    var degreesfreedomf = Math.floor(degreesfreedom) 
    
    var tcless = -tinv(alpha,degreesfreedomf); var tcmore = tinv(alpha,degreesfreedomf)
    var tctwo1 = -tinv(alpha/2,degreesfreedomf); var tctwo2 = tinv(alpha/2,degreesfreedomf); 

    if (sigma == "known") {
            var degfree = ""
        } else if (sigma == "unknown") {
            var degfree = "$$  \\text{Degrees of Freedom: } $$ $$ \\begin{align} df &= \\frac{\\left(\\dfrac{s_1^2}{n_1}+\\dfrac{s_2^2}{n_2}\\right)^2}{\\dfrac{1}{n_1-1}\\left(\\dfrac{s_1^2}{n_1}\\right)^2 + \\dfrac{1}{n_2-1}\\left(\\dfrac{s_2^2}{n_2}\\right)^2} \\\\ &= \\frac{\\left(\\dfrac{"+stdev1+"^2}{"+size1+"}+\\dfrac{"+stdev2+"^2}{"+size2+"}\\right)^2}{\\dfrac{1}{"+size1+"-1}\\left(\\dfrac{"+stdev1+"^2}{"+size1+"}\\right)^2 + \\dfrac{1}{"+size2+"-1}\\left(\\dfrac{"+stdev2+"^2}{"+size2+"}\\right)^2} \\\\ &= " + parseFloat(degreesfreedom.toFixed(2)) + " \\end{align} $$ $$ \\text{Round down to } df = " + Math.floor(degreesfreedom) + " $$"
    }
    if (sigma == "known" && tail == "lower"){
        var testtype = "<b>Lower Tail Test</b>"
        var testsymb = "z";
        var tailsign = "\\leq";
        var stndsymb = "\\sigma"
        var cvalsymb = "-z_\\alpha";
        var pvalue = normalcdf(test);
        var pval = pvalue.toFixed(4);
        var cless = zcless;
    } else if (sigma == "known" && tail == "upper"){
        var testtype = "<b>Upper Tail Test</b>"
        var testsymb = "z";
        var tailsign = "\\geq";
        var stndsymb = "\\sigma"
        var cvalsymb = "z_\\alpha";
        var pvalue = 1 - normalcdf(test);
        var pval = pvalue.toFixed(4);
        var cmore = zcmore;
    } else if (sigma == "known" && tail == "two"){
        var testtype = "<b>Two-Tailed Test</b>"
        var testsymb = "z";
        var tailsign = "=";
        var stndsymb = "\\sigma"
        var cvalsymb1 = "-z_{\\alpha / 2}";
        var cvalsymb2 = "z_{\\alpha / 2}";
        var pvalhalf = normalcdf(testtwo);
        var pvalh = pvalhalf.toFixed(4);
        var pvalue = 2 * pvalhalf;
        var pval = pvalue.toFixed(4);
        var ctwo1 = zctwo1; var ctwo2 = zctwo2; 
    } else if (sigma == "unknown" && tail == "lower"){
        var testtype = "<b>Lower Tail Test</b>"
        var testsymb = "t";
        var tailsign = "\\leq";
        var stndsymb = "s"
        var cvalsymb = "-t_\\alpha";
        var pvalue = compute(test,size1-1);
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
        var pvalue = 1 - compute(test,size1-1);
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
    var zvaluer = parseFloat(test).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    
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
        table1 += "<td>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</td>";
    }
    
    if (test < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    } else if (test >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
        }
    }
    
    table12 = []
    for (var r = critstart; r < critend + 1; r++){
        table12 += "<td>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</td>";
    }
    
    table2 = []
    for (var r = critstart; r < critend + 1; r++){
        table2 += "<td>" + normalcdf(parseFloat(zcrit) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    
    
    table4 = "<td></td><td colspan='6'>Area in Upper Tail</td>"
    
    table5 = "<td>df</td><td>.20</td><td>.10</td><td>.05</td><td>.025</td><td>.01</td><td>.005</td>"
    
    table6 = "<td>"+ degreesfreedomf +"</td><td>"+tinv(.20,degreesfreedomf).toFixed(3)+"</td><td>"+tinv(.10,degreesfreedomf).toFixed(3)+"</td><td>"+tinv(.05,degreesfreedomf).toFixed(3)+"</td><td>"+tinv(.025,degreesfreedomf).toFixed(3)+"</td><td>"+tinv(.01,degreesfreedomf).toFixed(3)+"</td><td>"+tinv(.005,degreesfreedomf).toFixed(3)+"</td>"
    
    
    
    if (sigma == "known") {
        //var tablep = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
        var tablep = "<table><tr style='border-top: thin solid'><td>z</td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
        var tablec = "<table><tr style='border-top: thin solid'><td>z</td>"+table12+"</tr><tr style='border-top: thin solid'><td>"+zcrit+"</td>"+table2+"</tr></table>"
        } else if (sigma == "unknown") {
            var tablep = "<table><tr style='border-top: thin solid; border-bottom: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table6+"</tr></table>"
            var tablec = "<table><tr style='border-top: thin solid; border-bottom: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table6+"</tr></table>"
    }
    
    
    
    
    
    if (tail == "lower" && sigma == "known") {
        document.getElementById("descriptiontext").innerHTML = "A lower tail test is used to determine whether the population mean is less than the hypothesized value of the population mean."
        document.getElementById("formulatext").innerHTML = "$$ \\text{Test Statistic: } z =\\frac{\\bar{x}-\\mu_o}{\\sigma / \\sqrt{n}} $$ p-Value = probability of getting a value for the test statistic that's less than or equal to the value from the sample <br> p-Value Rejection Rule: reject the null hypothesis if the p-value is less than or equal to &alpha; <br><br> Critical Value = value of the test statistic corresponding to an area of &alpha; in the lower tail of the sampling distribution of the test statistic <br> Critical Value Rejection Rule: reject the null hypothesis if the test statistic is less than or equal to the critical value"
        document.getElementById("explanationtext").innerHTML = "By rejecting the null hypothesis, you are accepting the alternative hypothesis. By not rejecting the null hypothesis, you are not accepting the alternative hypothesis."
    } else if (tail == "upper" && sigma == "known") {
        document.getElementById("descriptiontext").innerHTML = "An upper tail test is used to determine whether the population mean is greater than the hypothesized value of the population mean."
        document.getElementById("formulatext").innerHTML = "$$ \\text{Test Statistic: } z =\\frac{\\bar{x}-\\mu_o}{\\sigma / \\sqrt{n}} $$ p-Value = probability of getting a value for the test statistic that's greater than or equal to the value from the sample <br> p-Value Rejection Rule: reject the null hypothesis if the p-value is less than or equal to &alpha; <br><br> Critical Value = value of the test statistic corresponding to an area of &alpha; in the upper tail of the sampling distribution of the test statistic <br> Critical Value Rejection Rule: reject the null hypothesis if the test statistic is less than or equal to the critical value"
        document.getElementById("explanationtext").innerHTML = "By rejecting the null hypothesis, you are accepting the alternative hypothesis. By not rejecting the null hypothesis, you are not accepting the alternative hypothesis."
    } else if (tail == "two" && sigma == "known") {
        document.getElementById("descriptiontext").innerHTML = "A two-tailed test is used to determine whether the population mean is different from the hypothesized value of the population mean."
        document.getElementById("formulatext").innerHTML = "$$ \\text{Test Statistic: } z =\\frac{\\bar{x}-\\mu_o}{\\sigma / \\sqrt{n}} $$ p-Value = probability of getting a value for the test statistic that's at least as unlikely as the value from the sample <br> p-Value Rejection Rule: reject the null hypothesis if the p-value is less than or equal to &alpha; <br><br> Critical Values = values of the test statistic corresponding to areas of &alpha;/2 in the lower and upper tails of the sampling distribution of the test statistic <br> Critical Value Rejection Rule: reject the null hypothesis if the test statistic is less than or equal to the negative critical value or if it's greater than or equal to the positive critical value"
        document.getElementById("explanationtext").innerHTML = "By rejecting the null hypothesis, you are accepting the alternative hypothesis. By not rejecting the null hypothesis, you are not accepting the alternative hypothesis."
    } else if (tail == "lower" && sigma == "unknown") {
        document.getElementById("descriptiontext").innerHTML = "A lower tail test is used to determine whether the population mean is less than the hypothesized value of the population mean."
        document.getElementById("formulatext").innerHTML = "$$ \\text{Test Statistic: } t =\\frac{\\bar{x}-\\mu_o}{s / \\sqrt{n}} $$ p-Value = probability of getting a value for the test statistic that's less than or equal to the value from the sample <br> p-Value Rejection Rule: reject the null hypothesis if the p-value is less than or equal to &alpha; <br><br> Critical Value = value of the test statistic corresponding to an area of &alpha; in the lower tail of the sampling distribution of the test statistic <br> Critical Value Rejection Rule: reject the null hypothesis if the test statistic is less than or equal to the critical value"
        document.getElementById("explanationtext").innerHTML = "By rejecting the null hypothesis, you are accepting the alternative hypothesis. By not rejecting the null hypothesis, you are not accepting the alternative hypothesis."
    } else if (tail == "upper" && sigma == "unknown") {
        document.getElementById("descriptiontext").innerHTML = "An upper tail test is used to determine whether the population mean is greater than the hypothesized value of the population mean."
        document.getElementById("formulatext").innerHTML = "$$ \\text{Test Statistic: } t =\\frac{\\bar{x}-\\mu_o}{s / \\sqrt{n}} $$ p-Value = probability of getting a value for the test statistic that's greater than or equal to the value from the sample <br> p-Value Rejection Rule: reject the null hypothesis if the p-value is less than or equal to &alpha; <br><br> Critical Value = value of the test statistic corresponding to an area of &alpha; in the upper tail of the sampling distribution of the test statistic <br> Critical Value Rejection Rule: reject the null hypothesis if the test statistic is less than or equal to the critical value"
        document.getElementById("explanationtext").innerHTML = "By rejecting the null hypothesis, you are accepting the alternative hypothesis. By not rejecting the null hypothesis, you are not accepting the alternative hypothesis."
    } else if (tail == "two" && sigma == "unknown") {
        document.getElementById("descriptiontext").innerHTML = "A two-tailed test is used to determine whether the population mean is different from the hypothesized value of the population mean."
        document.getElementById("formulatext").innerHTML = "$$ \\text{Test Statistic: } t =\\frac{\\bar{x}-\\mu_o}{s / \\sqrt{n}} $$ p-Value = probability of getting a value for the test statistic that's at least as unlikely as the value from the sample <br> p-Value Rejection Rule: reject the null hypothesis if the p-value is less than or equal to &alpha; <br><br> Critical Values = values of the test statistic corresponding to areas of &alpha;/2 in the lower and upper tails of the sampling distribution of the test statistic <br> Critical Value Rejection Rule: reject the null hypothesis if the test statistic is less than or equal to the negative critical value or if it's greater than or equal to the positive critical value"
        document.getElementById("explanationtext").innerHTML = "By rejecting the null hypothesis, you are accepting the alternative hypothesis. By not rejecting the null hypothesis, you are not accepting the alternative hypothesis."
    } 
    
    if (tail == "lower") {
        document.getElementById("output1").innerHTML = " $$ \\begin{align} \\text{Test Statistic: }"+testsymb+" &=\\frac{(\\bar{x}_1-\\bar{x}_2)-D_o}{\\sqrt{\\dfrac{"+stndsymb+"_1^2}{n_1}+\\dfrac{"+stndsymb+"_2^2}{n_2}}} \\\\ &=\\frac{("+xbar1+"-"+xbar2+")-"+muknot+"}{\\sqrt{\\dfrac{"+stdev1+"^2}{ "+size1+"}+\\dfrac{"+stdev2+"^2}{ "+size2+"}}} \\\\  &= "+test.toFixed(2)+" \\end{align} $$"+degfree+" $ \\underline{\\text{p-Value Approach}} $"
    } else if (tail == "upper") {
        document.getElementById("output1").innerHTML = " $$ \\begin{align} \\text{Test Statistic: }"+testsymb+" &=\\frac{(\\bar{x}_1-\\bar{x}_2)-D_o}{\\sqrt{\\dfrac{"+stndsymb+"_1^2}{n_1}+\\dfrac{"+stndsymb+"_2^2}{n_2}}} \\\\ &=\\frac{("+xbar1+"-"+xbar2+")-"+muknot+"}{\\sqrt{\\dfrac{"+stdev1+"^2}{ "+size1+"}+\\dfrac{"+stdev2+"^2}{ "+size2+"}}} \\\\    &= "+test.toFixed(2)+" \\end{align}  $$"+degfree+" $ \\underline{\\text{p-Value Approach}} $"
    } else if (tail == "two") {
        document.getElementById("output1").innerHTML = " $$ \\begin{align} \\text{Test Statistic: }"+testsymb+" &=\\frac{(\\bar{x}_1-\\bar{x}_2)-D_o}{\\sqrt{\\dfrac{"+stndsymb+"_1^2}{n_1}+\\dfrac{"+stndsymb+"_2^2}{n_2}}} \\\\ &=\\frac{("+xbar1+"-"+xbar2+")-"+muknot+"}{\\sqrt{\\dfrac{"+stdev1+"^2}{ "+size1+"}+\\dfrac{"+stdev2+"^2}{ "+size2+"}}} \\\\   &= "+test.toFixed(2)+" \\end{align} $$"+degfree+" $ \\underline{\\text{p-Value Approach}} $"
    }
    
    
    if (tail == "lower") {
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
        
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",25,95);
        
        if (sigma == "known") {
            ctx.fillText("z",285,132);
            ctx.fillText(test.toFixed(2),60,145);
        } else if (sigma == "unknown") {
            ctx.fillText("t",285,132);
            ctx.fillText(test.toFixed(2),60,145);  
            //ctx.fillText("df = "+sizem1,220,40);
        }
        
        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.stroke();
    } else if (tail == "upper") {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);
        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(230, 96);
        ctx.lineTo(230, 130);
        ctx.lineTo(280, 130);
        ctx.lineTo(280, 120);
        ctx.quadraticCurveTo(260, 115, 230, 96);
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
        
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",240,95);
        
        if (sigma == "known") {
            ctx.fillText("z",285,132);
            ctx.fillText(test.toFixed(2),220,145);
        } else if (sigma == "unknown") {
            ctx.fillText("t",285,132);
            ctx.fillText(test.toFixed(2),220,145);  
            //ctx.fillText("df = "+sizem1,215,40);
        }

        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);
        ctx.stroke();

    } else if (tail == "two") {
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
        ctx.beginPath();
        ctx.moveTo(230, 96);
        ctx.lineTo(230, 130);
        ctx.lineTo(280, 130);
        ctx.lineTo(280, 120);
        ctx.quadraticCurveTo(260, 115, 230, 96);
        ctx.stroke();
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
        
        ctx.fillText("0",148,145);
        
        ctx.fillText("p-value",25,95);
        ctx.fillText("p-value",240,95);
        
        if (sigma == "known") {
            ctx.fillText("z",285,132);
            ctx.fillText((-Math.abs(test.toFixed(2))),60,145);
            ctx.fillText(Math.abs(test.toFixed(2)),220,145);
        } else if (sigma == "unknown") {
            ctx.fillText("t",285,132);
            ctx.fillText((-Math.abs(test.toFixed(2))),60,145);
            ctx.fillText(Math.abs(test.toFixed(2)),220,145); 
            //ctx.fillText("df = "+sizem1,220,40);
        }

        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);
        ctx.stroke();

        


        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.stroke();

    }

    
    if (tail == "lower") {
        document.getElementById("output2").innerHTML = tablep+ "$$\\text{p-value}=P("+testsymb+tailsign+test.toFixed(2)+" ) = " + pval+ "$$ $$\\text{p-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{"+concl+"} $$ $ \\underline{\\text{Critical Value Approach}} $"
    } else if (tail == "upper") {
        document.getElementById("output2").innerHTML = tablep+" $$\\text{p-value}=P("+testsymb+tailsign+test.toFixed(2)+" ) = " + pval+ " $$ $$\\text{p-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{"+concl+"} $$ $ \\underline{\\text{Critical Value Approach}} $ "
    } else if (tail == "two") {
        document.getElementById("output2").innerHTML = tablep+"$$ \\begin{align} \\text{p-value}&=2*P("+testsymb+" \\leq "+testtwo.toFixed(2)+" ) \\\\ &= 2*" + pvalh+ " = "+pval+" \\end{align} $$ $$\\text{p-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{" + concl +"} $$ $ \\underline{\\text{Critical Value Approach}} $"
    }
    
    
    
    if (tail == "lower") {
        var c = document.getElementById("myCanvas2");
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
        
        ctx.fillText("0",148,145);
        ctx.fillText(alpha,35,100);
        
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

        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.stroke();

    } else if (tail == "upper") {
        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);
        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(230, 96);
        ctx.lineTo(230, 130);
        ctx.lineTo(280, 130);
        ctx.lineTo(280, 120);
        ctx.quadraticCurveTo(260, 115, 230, 96);
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
        
        ctx.fillText("0",148,145);
        ctx.fillText(alpha,250,100);
        
        if (sigma == "known") {
            ctx.fillText("z",285,132);
            ctx.fillText("z",228,145);
            ctx.fillText("α",234,146);
        } else if (sigma == "unknown") {
            ctx.fillText("t",285,132);
            ctx.fillText("t",229,145);
            ctx.fillText("α",233,146);
            //ctx.fillText("df = "+sizem1,215,40);
        }


        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);
        ctx.stroke();
        
    } else if (tail == "two") {
        var c = document.getElementById("myCanvas2");
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
        ctx.beginPath();
        ctx.moveTo(230, 96);
        ctx.lineTo(230, 130);
        ctx.lineTo(280, 130);
        ctx.lineTo(280, 120);
        ctx.quadraticCurveTo(260, 115, 230, 96);
        ctx.stroke();
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
        
        ctx.fillText("0",148,145);
        ctx.fillText((alpha/2),30,100);
        ctx.fillText((alpha/2),245,100);
        
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
            ctx.fillText("t",229,145);
            ctx.fillText("α/2",233,146);
            //ctx.fillText("df = "+sizem1,220,40);
        }


        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
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

function hyptest2(){
    $("#explanation").hide(); $("#canvascontainer").show(); $("#canvascontainer2").show();
    var tail = document.getElementById("tail").value;
    var pknot = document.getElementById("muknot").value;
    var size1 = document.getElementById("size1").value; var size1m1 = size1 - 1;
    var size2 = document.getElementById("size2").value; var size2m1 = size2 - 1;
    var pbar1 = document.getElementById("xbar1").value;
    var pbar2 = document.getElementById("xbar2").value;
    var ppool = (size1*pbar1+size2*pbar2)/(parseFloat(size1)+parseFloat(size2))
    var alpha = document.getElementById("alpha").value;
    var test = (pbar1-pbar2)/Math.sqrt(ppool*(1-ppool)*(1/size1+1/size2));
    var testtwo = -Math.abs(test);
    var zpless = normalcdf(test); var zpmore = 1 - normalcdf(test);
    var zptwo = normalcdf(testtwo); var zptwo2 = 2 * zptwo;
    var zcless = NormSInv(alpha); var zcmore = Math.abs(NormSInv(alpha))
    var zctwo1 = NormSInv(alpha/2); var zctwo2 = Math.abs(NormSInv(alpha/2)); 

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
        var pvalue = 2 * pvalhalf;
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
        table1 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        table3 += "<td>" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
    
    table12 = []
    for (var r = critstart; r < critend + 1; r++){
        table12 += "<td><b>" + (.01*r).toFixed(2).replace(/^0+/, '') + "</b></td>";
    }
    
    table2 = []
    for (var r = critstart; r < critend + 1; r++){
        table2 += "<td>" + normalcdf(parseFloat(zcrit) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "</td>";
    }
 

    var tablep = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table1+"</tr><tr style='border-top: thin solid'><td>"+zvalue+"</td>"+table3+"</tr></table>"
    var tablec = "<table><tr style='border-top: thin solid'><td><b>z</b></td>"+table12+"</tr><tr style='border-top: thin solid'><td>"+zcrit+"</td>"+table2+"</tr></table>"

    
    if (tail == "lower") {
        document.getElementById("descriptiontext").innerHTML = "A lower tail test is used to determine whether the population mean is less than the hypothesized value of the population mean."
        document.getElementById("formulatext").innerHTML = "$$ \\text{Test Statistic: } z =\\frac{\\bar{x}-\\mu_o}{\\sigma / \\sqrt{n}} $$ p-Value = probability of getting a value for the test statistic that's less than or equal to the value from the sample <br> p-Value Rejection Rule: reject the null hypothesis if the p-value is less than or equal to &alpha; <br><br> Critical Value = value of the test statistic corresponding to an area of &alpha; in the lower tail of the sampling distribution of the test statistic <br> Critical Value Rejection Rule: reject the null hypothesis if the test statistic is less than or equal to the critical value"
        document.getElementById("explanationtext").innerHTML = "By rejecting the null hypothesis, you are accepting the alternative hypothesis. By not rejecting the null hypothesis, you are not accepting the alternative hypothesis."
    } else if (tail == "upper") {
        document.getElementById("descriptiontext").innerHTML = "An upper tail test is used to determine whether the population mean is greater than the hypothesized value of the population mean."
        document.getElementById("formulatext").innerHTML = "$$ \\text{Test Statistic: } z =\\frac{\\bar{x}-\\mu_o}{\\sigma / \\sqrt{n}} $$ p-Value = probability of getting a value for the test statistic that's greater than or equal to the value from the sample <br> p-Value Rejection Rule: reject the null hypothesis if the p-value is less than or equal to &alpha; <br><br> Critical Value = value of the test statistic corresponding to an area of &alpha; in the upper tail of the sampling distribution of the test statistic <br> Critical Value Rejection Rule: reject the null hypothesis if the test statistic is less than or equal to the critical value"
        document.getElementById("explanationtext").innerHTML = "By rejecting the null hypothesis, you are accepting the alternative hypothesis. By not rejecting the null hypothesis, you are not accepting the alternative hypothesis."
    } else if (tail == "two") {
        document.getElementById("descriptiontext").innerHTML = "A two-tailed test is used to determine whether the population mean is different from the hypothesized value of the population mean."
        document.getElementById("formulatext").innerHTML = "$$ \\text{Test Statistic: } z =\\frac{\\bar{x}-\\mu_o}{\\sigma / \\sqrt{n}} $$ p-Value = probability of getting a value for the test statistic that's at least as unlikely as the value from the sample <br> p-Value Rejection Rule: reject the null hypothesis if the p-value is less than or equal to &alpha; <br><br> Critical Values = values of the test statistic corresponding to areas of &alpha;/2 in the lower and upper tails of the sampling distribution of the test statistic <br> Critical Value Rejection Rule: reject the null hypothesis if the test statistic is less than or equal to the negative critical value or if it's greater than or equal to the positive critical value"
        document.getElementById("explanationtext").innerHTML = "By rejecting the null hypothesis, you are accepting the alternative hypothesis. By not rejecting the null hypothesis, you are not accepting the alternative hypothesis."
    } 
    
    if (tail == "lower") {
        document.getElementById("output1").innerHTML = testtype + "$$ \\begin{align} \\bar{p} &= \\frac{n_1 \\bar{p}_1 + n_2 \\bar{p}_2}{n_1 + n_2} \\\\ &= \\frac{"+size1+" ("+pbar1+") + "+size2+" ("+pbar2+")}{"+size1+" + "+size2+"} \\\\ &= \\underline{" + parseFloat(ppool.toFixed(2)) + "} \\end{align} $$ $$ \\textbf{Test Statistic: } $$ $$ \\begin{align} z &=\\dfrac{(\\bar{p}_1-\\bar{p}_2)}{\\sqrt{\\bar{p}(1-\\bar{p})\\left(\\dfrac{1}{n_1}+\\dfrac{1}{n_2}\\right)}} \\\\ &=\\frac{("+pbar1+"-"+pbar2+")}{\\sqrt{"+parseFloat(ppool.toFixed(2))+"(1-"+parseFloat(ppool.toFixed(2))+")\\left(\\dfrac{1}{ "+size1+"}+\\dfrac{1}{ "+size2+"}\\right)}} \\\\  &= \\underline{"+test.toFixed(2)+"} \\end{align} $$ <b><u>p-Value Approach</u></b>"
    } else if (tail == "upper") {
        document.getElementById("output1").innerHTML = testtype + "$$ \\begin{align} \\bar{p} &= \\frac{n_1 \\bar{p}_1 + n_2 \\bar{p}_2}{n_1 + n_2} \\\\ &= \\frac{"+size1+" ("+pbar1+") + "+size2+" ("+pbar2+")}{"+size1+" + "+size2+"} \\\\ &= \\underline{" + parseFloat(ppool.toFixed(2)) + "} \\end{align} $$ $$ \\textbf{Test Statistic: } $$ $$ \\begin{align} z &=\\dfrac{(\\bar{p}_1-\\bar{p}_2)}{\\sqrt{\\bar{p}(1-\\bar{p})\\left(\\dfrac{1}{n_1}+\\dfrac{1}{n_2}\\right)}} \\\\ &=\\frac{("+pbar1+"-"+pbar2+")}{\\sqrt{"+parseFloat(ppool.toFixed(2))+"(1-"+parseFloat(ppool.toFixed(2))+")\\left(\\dfrac{1}{ "+size1+"}+\\dfrac{1}{ "+size2+"}\\right)}} \\\\  &= \\underline{"+test.toFixed(2)+"} \\end{align} $$ <b><u>p-Value Approach</u></b>"
    } else if (tail == "two") {
        document.getElementById("output1").innerHTML = testtype + "$$ \\begin{align} \\bar{p} &= \\frac{n_1 \\bar{p}_1 + n_2 \\bar{p}_2}{n_1 + n_2} \\\\ &= \\frac{"+size1+" ("+pbar1+") + "+size2+" ("+pbar2+")}{"+size1+" + "+size2+"} \\\\ &= \\underline{" + parseFloat(ppool.toFixed(2)) + "} \\end{align} $$ $$ \\textbf{Test Statistic: } $$ $$  \\begin{align} z &=\\dfrac{(\\bar{p}_1-\\bar{p}_2)}{\\sqrt{\\bar{p}(1-\\bar{p})\\left(\\dfrac{1}{n_1}+\\dfrac{1}{n_2}\\right)}} \\\\ &=\\frac{("+pbar1+"-"+pbar2+")}{\\sqrt{"+parseFloat(ppool.toFixed(2))+"(1-"+parseFloat(ppool.toFixed(2))+")\\left(\\dfrac{1}{ "+size1+"}+\\dfrac{1}{ "+size2+"}\\right)}} \\\\  &= \\underline{"+test.toFixed(2)+"} \\end{align} $$ <b><u>p-Value Approach</u></b>"
    }
    
    
    if (tail == "lower") {
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
        
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",20,95);

        ctx.fillText("z",285,132);
        ctx.fillText("z = "+test.toFixed(2),68,145);

        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.stroke();
    } else if (tail == "upper") {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);
        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(230, 96);
        ctx.lineTo(230, 130);
        ctx.lineTo(280, 130);
        ctx.lineTo(280, 120);
        ctx.quadraticCurveTo(260, 115, 230, 96);
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
        
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",240,90);

        ctx.fillText("z",285,132);
        ctx.fillText("z = "+test.toFixed(2),228,145);

        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);
        ctx.stroke();

    } else if (tail == "two") {
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
        ctx.beginPath();
        ctx.moveTo(230, 96);
        ctx.lineTo(230, 130);
        ctx.lineTo(280, 130);
        ctx.lineTo(280, 120);
        ctx.quadraticCurveTo(260, 115, 230, 96);
        ctx.stroke();
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
        
        ctx.fillText("0",148,145);
        
        ctx.fillText("p-value",20,90);
        ctx.fillText("p-value",245,90);
        
        ctx.fillText("z",285,132);
        ctx.fillText("-z = "+(-Math.abs(test.toFixed(2))),66,145);
        ctx.fillText("+z = "+Math.abs(test.toFixed(2)),226,145);

        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);
        ctx.stroke();

        


        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.stroke();

    }

    
    if (tail == "lower") {
        document.getElementById("output2").innerHTML = tablep+ "$$\\textbf{p-value}=P("+testsymb+tailsign+test.toFixed(2)+" ) = \\underline{" + pval+ "}$$ $$\\text{p-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\textbf{Conclusion: } \\boxed{"+concl+"} $$ <b><u>Critical Value Approach</u></b>"
    } else if (tail == "upper") {
        document.getElementById("output2").innerHTML = tablep+" $$\\textbf{p-value}=P("+testsymb+tailsign+test.toFixed(2)+" ) = \\underline{" + pval+ "} $$ $$\\text{p-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\textbf{Conclusion: } \\boxed{"+concl+"} $$ <b><u>Critical Value Approach</u></b> "
    } else if (tail == "two") {
        document.getElementById("output2").innerHTML = tablep+"$$ \\begin{align} \\textbf{p-value}&=2*P("+testsymb+" \\leq "+testtwo.toFixed(2)+" ) \\\\ &= 2*" + pvalh+ " = \\underline{"+pval+"} \\end{align} $$ $$\\text{p-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\textbf{Conclusion: } \\boxed{" + concl +"} $$ <b><u>Critical Value Approach</u></b>"
    }
    
    
    
    if (tail == "lower") {
        var c = document.getElementById("myCanvas2");
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
        
        ctx.fillText("0",148,145);
        ctx.fillText("α = "+alpha,20,100);
        
        ctx.fillText("z",285,132);
        ctx.fillText("-zα",65,145);

        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.stroke();

    } else if (tail == "upper") {
        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);
        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(230, 96);
        ctx.lineTo(230, 130);
        ctx.lineTo(280, 130);
        ctx.lineTo(280, 120);
        ctx.quadraticCurveTo(260, 115, 230, 96);
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
        
        ctx.fillText("0",148,145);
        ctx.fillText("α = "+alpha,250,100);
        
        ctx.fillText("z",285,132);
        ctx.fillText("zα",225,145);

        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);
        ctx.stroke();
        
    } else if (tail == "two") {
        var c = document.getElementById("myCanvas2");
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
        ctx.beginPath();
        ctx.moveTo(230, 96);
        ctx.lineTo(230, 130);
        ctx.lineTo(280, 130);
        ctx.lineTo(280, 120);
        ctx.quadraticCurveTo(260, 115, 230, 96);
        ctx.stroke();
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
        
        ctx.fillText("0",148,145);
        ctx.fillText("α/2 = "+(alpha/2),20,90);
        ctx.fillText("α/2 = "+(alpha/2),230,90);
        
        ctx.fillText("z",285,132);
        ctx.fillText("-zα",65,145);
        ctx.fillText("zα/2",225,145);


        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.stroke();
    }
    
    
    
    if (tail == "lower") {
        document.getElementById("output3").innerHTML = tablec+" $$ \\textbf{Critical Value: }"+cvalsymb+" = \\underline{" + cless.toFixed(2) + "} $$ $$"+testsymb+"="+test.toFixed(2) +critsignlower+cvalsymb+" = "+cless.toFixed(2)+"$$ $$ \\textbf{Conclusion: } \\boxed{" + concl + "} $$"
    } else if (tail == "upper") {
        document.getElementById("output3").innerHTML = tablec+"$$ \\textbf{Critical Value: }"+cvalsymb+" = \\underline{" + cmore.toFixed(2) + "} $$ $$"+testsymb+"="+test.toFixed(2) +critsignupper +" "+ cvalsymb+" = "+cmore.toFixed(2)+"$$ $$ \\textbf{Conclusion: } \\boxed{" + concl + "} $$"
    } else if (tail == "two") {
        document.getElementById("output3").innerHTML = tablec+"$$ \\begin{align} \\textbf{Critical Values: } "+cvalsymb1+" &= \\underline{" + ctwo1.toFixed(2) + "} \\\\ \\text{ and } "+cvalsymb2+" &= \\underline{"+ctwo2.toFixed(2) + "} \\end{align} $$ $$ " + twocrit+ " $$ $$ \\textbf{Conclusion: } \\boxed{" + concl + "} $$"
    }
    
    
    
    
    MathJax.typeset();
}

function example1(){
    document.getElementById("samplestat").value = "mean"
    $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
    $("#sd11").show(); $("#sd22").show(); $("#sd33").show();
    document.getElementById("samplestat2").innerHTML = "x&#772;₂";
    document.getElementById("standdev2").innerHTML = "&sigma;₂";
    document.getElementById('size1').value="25"
    document.getElementById('size2').value="64"
    document.getElementById('xbar1').value="42"
    document.getElementById('xbar2').value="36"
    document.getElementById('stdev1').value="7"
    document.getElementById('stdev2').value="8"
    document.getElementById('sigma').value="known"
    MathJax.typeset();
}

function example2(){
    document.getElementById("samplestat").value = "mean"
    $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
    $("#sd11").show(); $("#sd22").show(); $("#sd33").show();
    document.getElementById("samplestat2").innerHTML = "x&#772;₂";
    document.getElementById("standdev2").innerHTML = "s₂";
    document.getElementById('size1').value="30"
    document.getElementById('size2').value="20"
    document.getElementById('xbar1').value="135"
    document.getElementById('xbar2').value="94"
    document.getElementById('stdev1').value="14"
    document.getElementById('stdev2').value="11"
    document.getElementById('sigma').value="unknown"
    MathJax.typeset();
}

function example3(){
    document.getElementById("samplestat").value = "proportion"
    $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
    $("#sd11").hide(); $("#sd22").hide(); $("#sd33").hide();
    document.getElementById("samplestat2").innerHTML = "p&#772;₂";
    document.getElementById('size1').value="250"
    document.getElementById('size2').value="300"
    document.getElementById('xbar1').value=".14"
    document.getElementById('xbar2').value=".09"
    MathJax.typeset();
}

function switchhypothesis() {
    $("#xbar1s").show(); $("#pbar1s").hide(); $("#samplestat1").hide();
    $("#samplesize").show(); $("#confidence").hide();
    $("#switchhypothesis").hide(); $("#switchconfidence").show();
    $("#nullalternative").show();
    $("#hypothesistitle").show(); $("#confidencetitle").hide();
    $("#levelsignificance").show(); $("#confidencelevel").hide();
    $("#hypsolve").show(); $("#confsolve").hide();
    $("#confidenceexamples").hide(); $("#hypothesisexamples").show();
    $("#output1").empty(); $("#output2").empty(); $("#canvascontainer").hide();
}
 
function switchconfidence() {
    $("#xbar1s").hide(); $("#pbar1s").hide(); $("#samplestat1").show();
    $("#samplesize").hide(); $("#confidence").show();
    $("#switchhypothesis").show(); $("#switchconfidence").hide();
    $("#nullalternative").hide();
    $("#hypothesistitle").hide(); $("#confidencetitle").show();
    $("#levelsignificance").hide(); $("#confidencelevel").show();
    $("#hypsolve").hide(); $("#confsolve").show();
    $("#confidenceexamples").show(); $("#hypothesisexamples").hide();
    $("#output1").empty(); $("#output2").empty(); $("#output3").empty(); $("#canvascontainer").hide(); $("#canvascontainer2").hide();
}

function example4(){
    $("#proportionzero").hide(); $("#muknot").show();
    $("#xbar1s").show(); $("#pbar1s").hide(); $("#samplestat1").hide();
    $("#less").hide();
    $("#greater").hide();
    $("#notequal").show();
    document.getElementById('muknot').value="0"
    document.getElementById('muknotvalue').innerHTML="0"
    document.getElementById("samplestat").value = "mean"
    document.getElementById("parameter1").value = "mean"
    document.getElementById("parameter2").innerHTML = "&mu;₁ - &mu;₂"
    document.getElementById("tail").value = "two"
    $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
    $("#sd11").show(); $("#sd22").show(); $("#sd33").show();
    document.getElementById("samplestat2").innerHTML = "x&#772;₂";
    document.getElementById("standdev2").innerHTML = "&sigma;₂";
    document.getElementById('size1').value="35"
    document.getElementById('size2').value="45"
    document.getElementById('xbar1').value="83"
    document.getElementById('xbar2').value="76"
    document.getElementById('stdev1').value="12"
    document.getElementById('stdev2').value="12"
    document.getElementById('alpha').value=".05"
    document.getElementById('sigma').value="known"
    MathJax.typeset();
}

function example5(){
    $("#proportionzero").hide(); $("#muknot").show();
    $("#xbar1s").show(); $("#pbar1s").hide(); $("#samplestat1").hide();
    $("#less").hide();
    $("#greater").hide();
    $("#notequal").show();
    document.getElementById('muknot').value="0"
    document.getElementById('muknotvalue').innerHTML="0"
    document.getElementById("samplestat").value = "mean"
    document.getElementById("parameter1").value = "mean"
    document.getElementById("parameter2").innerHTML = "&mu;₁ - &mu;₂"
    document.getElementById("tail").value = "two"
    $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
    $("#sd11").show(); $("#sd22").show(); $("#sd33").show();
    document.getElementById("samplestat2").innerHTML = "x&#772;₂";
    document.getElementById("standdev2").innerHTML = "s₂";
    document.getElementById('size1').value="15"
    document.getElementById('size2').value="15"
    document.getElementById('xbar1').value="312"
    document.getElementById('xbar2').value="275"
    document.getElementById('stdev1').value="42"
    document.getElementById('stdev2').value="46"
    document.getElementById('alpha').value=".05"
    document.getElementById('sigma').value="unknown"
    MathJax.typeset();
}

function example6(){
    $("#proportionzero").show(); $("#muknot").hide();
    $("#xbar1s").hide(); $("#pbar1s").show(); $("#samplestat1").hide();
    $("#less").hide();
    $("#greater").hide();
    $("#notequal").show();
    document.getElementById('muknot').value="0"
    document.getElementById('muknotvalue').innerHTML="0"
    document.getElementById("samplestat").value = "proportion"
    document.getElementById("parameter1").value = "proportion"
    document.getElementById("parameter2").innerHTML = "p₁ - p₂"
    document.getElementById("tail").value = "two"
    $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
    $("#sd11").hide(); $("#sd22").hide(); $("#sd33").hide();
    document.getElementById("samplestat2").innerHTML = "p&#772;₂";
    document.getElementById('size1').value="250"
    document.getElementById('size2').value="300"
    document.getElementById('xbar1').value=".14"
    document.getElementById('xbar2').value=".09"
    document.getElementById('alpha').value=".05"
    MathJax.typeset();
}
