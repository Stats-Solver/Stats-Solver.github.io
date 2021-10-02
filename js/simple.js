$("#explanation").hide(); $("#sumsquares").hide(); $("#meansquares").hide(); $("#standarderror").hide(); $("#predict").hide();
$("#xval").hide(); $("#prediction").hide(); $("#prediction2").hide(); $("#alternative").hide(); $("#alternative2").hide();
$("#correlation").hide(); $("#correlation2").hide(); $("#xpval").hide(); $("#level").hide(); $("#residtype").hide(); $("#charts").hide();
$("#581773186").hide();

$("#myCanvas2").hide();

$("#sigtests").hide(); $("#standerr").hide();

$("#simpoutputs").hide();

$(function () {
            $('[data-toggle="tooltip"]').tooltip()
    })

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);


how1(); how2(); 




function how1(){
    var c = document.getElementById("howCanvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 200);
    
    ctx.fillText("Estimated Regression Line",90,10);
    
    ctx.fillText("y",37,15);
    ctx.fillText("x",265,182);
    ctx.fillText("ŷ",255,50);
    //ctx.fillText("b₀",25,130);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 180);
    ctx.lineTo(260, 180);
    
    ctx.moveTo(60, 130);
    ctx.lineTo(240, 50);
    
    //ctx.moveTo(33, 130);
    //ctx.lineTo(47, 130);
    
    //ctx.fillRect(70,130,3,3);
    ctx.fillRect(85,100,3,3);
    ctx.fillRect(100,140,3,3);
    ctx.fillRect(115,70,3,3);
    ctx.fillRect(130,110,3,3);
    ctx.fillRect(145,75,3,3);
    //ctx.fillRect(160,70,3,3);
    ctx.fillRect(175,110,3,3);
    ctx.fillRect(185,60,3,3);
    ctx.fillRect(205,40,3,3);
    ctx.fillRect(220,80,3,3);
    //ctx.fillRect(235,50,3,3);
    
    ctx.stroke();
}








function how2(){
    var c = document.getElementById("howCanvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 200);
    
    ctx.fillText("Prediction Interval",100,10);
    
    ctx.fillText("y",37,15);
    ctx.fillText("x",265,182);
    ctx.fillText("ŷ",255,50);
    //ctx.fillText("b₀",25,130);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 180);
    ctx.lineTo(260, 180);
    
    ctx.moveTo(60, 130);
    ctx.lineTo(240, 50);
    
    //ctx.moveTo(33, 130);
    //ctx.lineTo(47, 130);
    
    ctx.moveTo(60, 100);
    ctx.bezierCurveTo(120, 90, 180, 60, 240, 20);
    
    ctx.moveTo(60, 160);
    ctx.bezierCurveTo(120, 120, 180, 100, 240, 80);
    
    ctx.stroke();
}









function how3(){
    var c = document.getElementById("howCanvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 200);
    
    ctx.fillText("Sum of Squares",115,10);
    
    ctx.fillText("y",37,15);
    ctx.fillText("x",265,182);
    ctx.fillText("ŷ",265,50);
    ctx.fillText("ȳ",265,90);
    
    ctx.fillText("y-ŷ",200,50);
    ctx.fillText("ŷ-ȳ",200,82);
    ctx.fillText("y-ȳ",242,70);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 180);
    ctx.lineTo(260, 180);
    
    ctx.moveTo(40, 130);
    ctx.lineTo(255, 50);
    
    ctx.moveTo(40, 90);
    ctx.lineTo(255, 90);
    
    ctx.moveTo(223,32);
    ctx.bezierCurveTo(217, 40, 217, 50, 223,59);
    
    ctx.moveTo(223,63);
    ctx.bezierCurveTo(217, 70, 217, 80, 223,88);
    
    ctx.moveTo(230,32);
    ctx.bezierCurveTo(240, 45, 240, 75, 230,88);
    
    //ctx.moveTo(33, 130);
    //ctx.lineTo(47, 130);
    
    ctx.fillRect(70,130,3,3);
    ctx.fillRect(85,100,3,3);
    ctx.fillRect(100,140,3,3);
    ctx.fillRect(115,70,3,3);
    ctx.fillRect(130,110,3,3);
    ctx.fillRect(145,60,3,3);
    //ctx.fillRect(160,70,3,3);
    ctx.fillRect(175,110,3,3);
    //ctx.fillRect(190,60,3,3);
    ctx.fillRect(225,30,3,3);
    //ctx.fillRect(220,80,3,3);
    //ctx.fillRect(235,50,3,3);
    
    ctx.stroke();
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

function Betacdf(Z,A,B) {
    var S;
    var BT;
    var Bcdf;
	with (Math) {
		S=A+B;
		BT=exp(LogGamma(S)-LogGamma(B)-LogGamma(A)+A*log(Z)+B*log(1-Z));
		if (Z<(A+1)/(S+2)) {
			Bcdf=BT*Betinc(Z,A,B)
		} else {
			Bcdf=1-BT*Betinc(1-Z,B,A)
		}
	}
	return Bcdf
}

function computef(X,f1,f2) {
	if (f1<=0) {
		alert("Numerator degrees of freedom must be positive")
	} else if (f2<=0) {
		alert("Denominator degrees of freedom must be positive") 
	} else if (X<=0) {
		Fcdf=0
	} else {
		Z=X/(X+f2/f1);
		Fcdf=Betacdf(Z,f1/2,f2/2);
	}
	Fcdf=Math.round(Fcdf*100000)/100000;
    return Fcdf;
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




var fdist10 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,39.86,49.50,53.59,55.83,57.24,58.20,58.91,59.44,59.86,60.19,61.22,61.74,62.05,62.26,62.53,62.79,63.01,63.30],[0,8.53,9.00,9.16,9.24,9.29,9.33,9.35,9.37,9.38,9.39,9.42,9.44,9.45,9.46,9.47,9.47,9.48,9.49],[0,5.54,5.46,5.39,5.34,5.31,5.28,5.27,5.25,5.24,5.23,5.20,5.18,5.17,5.17,5.16,5.15,5.14,5.13],[0,4.54,4.32,4.19,4.11,4.05,4.01,3.98,3.95,3.94,3.92,3.87,3.84,3.83,3.82,3.80,3.79,3.78,3.76],[0,4.06,3.78,3.62,3.52,3.45,3.40,3.37,3.34,3.32,3.30,3.24,3.21,3.19,3.17,3.16,3.14,3.13,3.11],[0,3.78,3.46,3.29,3.18,3.11,3.05,3.01,2.98,2.96,2.94,2.87,2.84,2.81,2.80,2.78,2.76,2.75,2.72],[0,3.59,3.26,3.07,2.96,2.88,2.83,2.78,2.75,2.72,2.70,2.63,2.59,2.57,2.56,2.54,2.51,2.50,2.47],[0,3.46,3.11,2.92,2.81,2.73,2.67,2.62,2.59,2.56,2.54,2.46,2.42,2.40,2.38,2.36,2.34,2.32,2.30],[0,3.36,3.01,2.81,2.69,2.61,2.55,2.51,2.47,2.44,2.42,2.34,2.30,2.27,2.25,2.23,2.21,2.19,2.16],[0,3.29,2.92,2.73,2.61,2.52,2.46,2.41,2.38,2.35,2.32,2.24,2.20,2.17,2.16,2.13,2.11,2.09,2.06],[0,3.23,2.86,2.66,2.54,2.45,2.39,2.34,2.30,2.27,2.25,2.17,2.12,2.10,2.08,2.05,2.03,2.01,1.98],[0,3.18,2.81,2.61,2.48,2.39,2.33,2.28,2.24,2.21,2.19,2.10,2.06,2.03,2.01,1.99,1.96,1.94,1.91],[0,3.14,2.76,2.56,2.43,2.35,2.28,2.23,2.20,2.16,2.14,2.05,2.01,1.98,1.96,1.93,1.90,1.88,1.85],[0,3.10,2.73,2.52,2.39,2.31,2.24,2.19,2.15,2.12,2.10,2.01,1.96,1.93,1.91,1.89,1.86,1.83,1.80],[0,3.07,2.70,2.49,2.36,2.27,2.21,2.16,2.12,2.09,2.06,1.97,1.92,1.89,1.87,1.85,1.82,1.79,1.76],[0,3.05,2.67,2.46,2.33,2.24,2.18,2.13,2.09,2.06,2.03,1.94,1.89,1.86,1.84,1.81,1.78,1.76,1.72],[0,3.03,2.64,2.44,2.31,2.22,2.15,2.10,2.06,2.03,2.00,1.91,1.86,1.83,1.81,1.78,1.75,1.73,1.69],[0,3.01,2.62,2.42,2.29,2.20,2.13,2.08,2.04,2.00,1.98,1.89,1.84,1.80,1.78,1.75,1.72,1.70,1.66],[0,2.99,2.61,2.40,2.27,2.18,2.11,2.06,2.02,1.98,1.96,1.86,1.81,1.78,1.76,1.73,1.70,1.67,1.64],[0,2.97,2.59,2.38,2.25,2.16,2.09,2.04,2.00,1.96,1.94,1.84,1.79,1.76,1.74,1.71,1.68,1.65,1.61],[0,2.96,2.57,2.36,2.23,2.14,2.08,2.02,1.98,1.95,1.92,1.83,1.78,1.74,1.72,1.69,1.66,1.63,1.59],[0,2.95,2.56,2.35,2.22,2.13,2.06,2.01,1.97,1.93,1.90,1.81,1.76,1.73,1.70,1.67,1.64,1.61,1.57],[0,2.94,2.55,2.34,2.21,2.11,2.05,1.99,1.95,1.92,1.89,1.80,1.74,1.71,1.69,1.66,1.62,1.59,1.55],[0,2.93,2.54,2.33,2.19,2.10,2.04,1.98,1.94,1.91,1.88,1.78,1.73,1.70,1.67,1.64,1.61,1.58,1.54],[0,2.92,2.53,2.32,2.18,2.09,2.02,1.97,1.93,1.89,1.87,1.77,1.72,1.68,1.66,1.63,1.59,1.56,1.52],[0,2.91,2.52,2.31,2.17,2.08,2.01,1.96,1.92,1.88,1.86,1.76,1.71,1.67,1.65,1.61,1.58,1.55,1.51],[0,2.90,2.51,2.30,2.17,2.07,2.00,1.95,1.91,1.87,1.85,1.75,1.70,1.66,1.64,1.60,1.57,1.54,1.50],[0,2.89,2.50,2.29,2.16,2.06,2.00,1.94,1.90,1.87,1.84,1.74,1.69,1.65,1.63,1.59,1.56,1.53,1.48],[0,2.89,2.50,2.28,2.15,2.06,1.99,1.93,1.89,1.86,1.83,1.73,1.68,1.64,1.62,1.58,1.55,1.52,1.47],[0,2.88,2.49,2.28,2.14,2.05,1.98,1.93,1.88,1.85,1.82,1.72,1.67,1.63,1.61,1.57,1.54,1.51,1.46],[0,2.84,2.44,2.23,2.09,2.00,1.93,1.87,1.83,1.79,1.76,1.66,1.61,1.57,1.54,1.51,1.47,1.43,1.38],[0,2.79,2.39,2.18,2.04,1.95,1.87,1.82,1.77,1.74,1.71,1.60,1.54,1.50,1.48,1.44,1.40,1.36,1.30],[0,2.76,2.36,2.14,2.00,1.91,1.83,1.78,1.73,1.69,1.66,1.56,1.49,1.45,1.42,1.38,1.34,1.29,1.22],[0,2.71,2.31,2.09,1.95,1.85,1.78,1.72,1.68,1.64,1.61,1.49,1.43,1.38,1.35,1.30,1.25,1.20,1.08]]
    
    var fdist05 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,161.45,199.50,215.71,224.58,230.16,233.99,236.77,238.88,240.54,241.88,245.95,248.01,249.26,250.10,251.14,252.20,253.04,254.19],[0,18.51,19.00,19.16,19.25,19.30,19.33,19.35,19.37,19.38,19.40,19.43,19.45,19.46,19.46,19.47,19.48,19.49,19.49],[0,10.13,9.55,9.28,9.12,9.01,8.94,8.89,8.85,8.81,8.79,8.70,8.66,8.63,8.62,8.59,8.57,8.55,8.53],[0,7.71,6.94,6.59,6.39,6.26,6.16,6.09,6.04,6.00,5.96,5.86,5.80,5.77,5.75,5.72,5.69,5.66,5.63],[0,6.61,5.79,5.41,5.19,5.05,4.95,4.88,4.82,4.77,4.74,4.62,4.56,4.52,4.50,4.46,4.43,4.41,4.37],[0,5.99,5.14,4.76,4.53,4.39,4.28,4.21,4.15,4.10,4.06,3.94,3.87,3.83,3.81,3.77,3.74,3.71,3.67],[0,5.59,4.74,4.35,4.12,3.97,3.87,3.79,3.73,3.68,3.64,3.51,3.44,3.40,3.38,3.34,3.30,3.27,3.23],[0,5.32,4.46,4.07,3.84,3.69,3.58,3.50,3.44,3.39,3.35,3.22,3.15,3.11,3.08,3.04,3.01,2.97,2.93],[0,5.12,4.26,3.86,3.63,3.48,3.37,3.29,3.23,3.18,3.14,3.01,2.94,2.89,2.86,2.83,2.79,2.76,2.71],[0,4.96,4.10,3.71,3.48,3.33,3.22,3.14,3.07,3.02,2.98,2.85,2.77,2.73,2.70,2.66,2.62,2.59,2.54],[0,4.84,3.98,3.59,3.36,3.20,3.09,3.01,2.95,2.90,2.85,2.72,2.65,2.60,2.57,2.53,2.49,2.46,2.41],[0,4.75,3.89,3.49,3.26,3.11,3.00,2.91,2.85,2.80,2.75,2.62,2.54,2.50,2.47,2.43,2.38,2.35,2.30],[0,4.67,3.81,3.41,3.18,3.03,2.92,2.83,2.77,2.71,2.67,2.53,2.46,2.41,2.38,2.34,2.30,2.26,2.21],[0,4.60,3.74,3.34,3.11,2.96,2.85,2.76,2.70,2.65,2.60,2.46,2.39,2.34,2.31,2.27,2.22,2.19,2.14],[0,4.54,3.68,3.29,3.06,2.90,2.79,2.71,2.64,2.59,2.54,2.40,2.33,2.28,2.25,2.20,2.16,2.12,2.07],[0,4.49,3.63,3.24,3.01,2.85,2.74,2.66,2.59,2.54,2.49,2.35,2.28,2.23,2.19,2.15,2.11,2.07,2.02],[0,4.45,3.59,3.20,2.96,2.81,2.70,2.61,2.55,2.49,2.45,2.31,2.23,2.18,2.15,2.10,2.06,2.02,1.97],[0,4.41,3.55,3.16,2.93,2.77,2.66,2.58,2.51,2.46,2.41,2.27,2.19,2.14,2.11,2.06,2.02,1.98,1.92],[0,4.38,3.52,3.13,2.90,2.74,2.63,2.54,2.48,2.42,2.38,2.23,2.16,2.11,2.07,2.03,1.98,1.94,1.88],[0,4.35,3.49,3.10,2.87,2.71,2.60,2.51,2.45,2.39,2.35,2.20,2.12,2.07,2.04,1.99,1.95,1.91,1.85],[0,4.32,3.47,3.07,2.84,2.68,2.57,2.49,2.42,2.37,2.32,2.18,2.10,2.05,2.01,1.96,1.92,1.88,1.82],[0,4.30,3.44,3.05,2.82,2.66,2.55,2.46,2.40,2.34,2.30,2.15,2.07,2.02,1.98,1.94,1.89,1.85,1.79],[0,4.28,3.42,3.03,2.80,2.64,2.53,2.44,2.37,2.32,2.27,2.13,2.05,2.00,1.96,1.91,1.86,1.82,1.76],[0,4.26,3.40,3.01,2.78,2.62,2.51,2.42,2.36,2.30,2.25,2.11,2.03,1.97,1.94,1.89,1.84,1.80,1.74],[0,4.24,3.39,2.99,2.76,2.60,2.49,2.40,2.34,2.28,2.24,2.09,2.01,1.96,1.92,1.87,1.82,1.78,1.72],[0,4.23,3.37,2.98,2.74,2.59,2.47,2.39,2.32,2.27,2.22,2.07,1.99,1.94,1.90,1.85,1.80,1.76,1.70],[0,4.21,3.35,2.96,2.73,2.57,2.46,2.37,2.31,2.25,2.20,2.06,1.97,1.92,1.88,1.84,1.79,1.74,1.68],[0,4.20,3.34,2.95,2.71,2.56,2.45,2.36,2.29,2.24,2.19,2.04,1.96,1.91,1.87,1.82,1.77,1.73,1.66],[0,4.18,3.33,2.93,2.70,2.55,2.43,2.35,2.28,2.22,2.18,2.03,1.94,1.89,1.85,1.81,1.75,1.71,1.65],[0,4.17,3.32,2.92,2.69,2.53,2.42,2.33,2.27,2.21,2.16,2.01,1.93,1.88,1.84,1.79,1.74,1.70,1.63],[0,4.08,3.23,2.84,2.61,2.45,2.34,2.25,2.18,2.12,2.08,1.92,1.84,1.78,1.74,1.69,1.64,1.59,1.52],[0,4.00,3.15,2.76,2.53,2.37,2.25,2.17,2.10,2.04,1.99,1.84,1.75,1.69,1.65,1.59,1.53,1.48,1.40],[0,3.94,3.09,2.70,2.46,2.31,2.19,2.10,2.03,1.97,1.93,1.77,1.68,1.62,1.57,1.52,1.45,1.39,1.30],[0,3.85,3.00,2.61,2.38,2.22,2.11,2.02,1.95,1.89,1.84,1.68,1.58,1.52,1.47,1.41,1.33,1.26,1.11]]
    
    var fdist025 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,647.79,799.50,864.16,899.58,921.85,937.11,948.22,956.66,963.28,968.63,984.87,993.10,998.08,1001.41,1005.60,1009.80,1013.17,1017.75],[0,38.51,39.00,39.17,39.25,39.30,39.33,39.36,39.37,39.39,39.40,39.43,39.45,39.46,39.46,39.47,39.48,39.49,39.50],[0,17.44,16.04,15.44,15.10,14.88,14.73,14.62,14.54,14.47,14.42,14.25,14.17,14.12,14.08,14.04,13.99,13.96,13.91],[0,12.22,10.65,9.98,9.60,9.36,9.20,9.07,8.98,8.90,8.84,8.66,8.56,8.50,8.46,8.41,8.36,8.32,8.26],[0,10.01,8.43,7.76,7.39,7.15,6.98,6.85,6.76,6.68,6.62,6.43,6.33,6.27,6.23,6.18,6.12,6.08,6.02],[0,8.81,7.26,6.60,6.23,5.99,5.82,5.70,5.60,5.52,5.46,5.27,5.17,5.11,5.07,5.01,4.96,4.92,4.86],[0,8.07,6.54,5.89,5.52,5.29,5.12,4.99,4.90,4.82,4.76,4.57,4.47,4.40,4.36,4.31,4.25,4.21,4.15],[0,7.57,6.06,5.42,5.05,4.82,4.65,4.53,4.43,4.36,4.30,4.10,4.00,3.94,3.89,3.84,3.78,3.74,3.68],[0,7.21,5.71,5.08,4.72,4.48,4.32,4.20,4.10,4.03,3.96,3.77,3.67,3.60,3.56,3.51,3.45,3.40,3.34],[0,6.94,5.46,4.83,4.47,4.24,4.07,3.95,3.85,3.78,3.72,3.52,3.42,3.35,3.31,3.26,3.20,3.15,3.09],[0,6.72,5.26,4.63,4.28,4.04,3.88,3.76,3.66,3.59,3.53,3.33,3.23,3.16,3.12,3.06,3.00,2.96,2.89],[0,6.55,5.10,4.47,4.12,3.89,3.73,3.61,3.51,3.44,3.37,3.18,3.07,3.01,2.96,2.91,2.85,2.80,2.73],[0,6.41,4.97,4.35,4.00,3.77,3.60,3.48,3.39,3.31,3.25,3.05,2.95,2.88,2.84,2.78,2.72,2.67,2.60],[0,6.30,4.86,4.24,3.89,3.66,3.50,3.38,3.29,3.21,3.15,2.95,2.84,2.78,2.73,2.67,2.61,2.56,2.50],[0,6.20,4.77,4.15,3.80,3.58,3.41,3.29,3.20,3.12,3.06,2.86,2.76,2.69,2.64,2.59,2.52,2.47,2.40],[0,6.12,4.69,4.08,3.73,3.50,3.34,3.22,3.12,3.05,2.99,2.79,2.68,2.61,2.57,2.51,2.45,2.40,2.32],[0,6.04,4.62,4.01,3.66,3.44,3.28,3.16,3.06,2.98,2.92,2.72,2.62,2.55,2.50,2.44,2.38,2.33,2.26],[0,5.98,4.56,3.95,3.61,3.38,3.22,3.10,3.01,2.93,2.87,2.67,2.56,2.49,2.44,2.38,2.32,2.27,2.20],[0,5.92,4.51,3.90,3.56,3.33,3.17,3.05,2.96,2.88,2.82,2.62,2.51,2.44,2.39,2.33,2.27,2.22,2.14],[0,5.87,4.46,3.86,3.51,3.29,3.13,3.01,2.91,2.84,2.77,2.57,2.46,2.40,2.35,2.29,2.22,2.17,2.09],[0,5.83,4.42,3.82,3.48,3.25,3.09,2.97,2.87,2.80,2.73,2.53,2.42,2.36,2.31,2.25,2.18,2.13,2.05],[0,5.79,4.38,3.78,3.44,3.22,3.05,2.93,2.84,2.76,2.70,2.50,2.39,2.32,2.27,2.21,2.14,2.09,2.01],[0,5.75,4.35,3.75,3.41,3.18,3.02,2.90,2.81,2.73,2.67,2.47,2.36,2.29,2.24,2.18,2.11,2.06,1.98],[0,5.72,4.32,3.72,3.38,3.15,2.99,2.87,2.78,2.70,2.64,2.44,2.33,2.26,2.21,2.15,2.08,2.02,1.94],[0,5.69,4.29,3.69,3.35,3.13,2.97,2.85,2.75,2.68,2.61,2.41,2.30,2.23,2.18,2.12,2.05,2.00,1.91],[0,5.66,4.27,3.67,3.33,3.10,2.94,2.82,2.73,2.65,2.59,2.39,2.28,2.21,2.16,2.09,2.03,1.97,1.89],[0,5.63,4.24,3.65,3.31,3.08,2.92,2.80,2.71,2.63,2.57,2.36,2.25,2.18,2.13,2.07,2.00,1.94,1.86],[0,5.61,4.22,3.63,3.29,3.06,2.90,2.78,2.69,2.61,2.55,2.34,2.23,2.16,2.11,2.05,1.98,1.92,1.84],[0,5.59,4.20,3.61,3.27,3.04,2.88,2.76,2.67,2.59,2.53,2.32,2.21,2.14,2.09,2.03,1.96,1.90,1.82],[0,5.57,4.18,3.59,3.25,3.03,2.87,2.75,2.65,2.57,2.51,2.31,2.20,2.12,2.07,2.01,1.94,1.88,1.80],[0,5.42,4.05,3.46,3.13,2.90,2.74,2.62,2.53,2.45,2.39,2.18,2.07,1.99,1.94,1.88,1.80,1.74,1.65],[0,5.29,3.93,3.34,3.01,2.79,2.63,2.51,2.41,2.33,2.27,2.06,1.94,1.87,1.82,1.74,1.67,1.60,1.49],[0,5.18,3.83,3.25,2.92,2.70,2.54,2.42,2.32,2.24,2.18,1.97,1.85,1.77,1.71,1.64,1.56,1.48,1.36],[0,5.04,3.70,3.13,2.80,2.58,2.42,2.30,2.20,2.13,2.06,1.85,1.72,1.64,1.58,1.50,1.41,1.32,1.13]]
    
    var fdist01 = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,4052.18,4999.50,5403.35,5624.58,5763.65,5858.99,5928.36,5981.07,6022.47,6055.85,6157.28,6208.73,6239.83,6260.65,6286.78,6313.03,6334.11,6362.68],[0,98.50,99.00,99.17,99.25,99.30,99.33,99.36,99.37,99.39,99.40,99.43,99.45,99.46,99.47,99.47,99.48,99.49,99.50],[0,34.12,30.82,29.46,28.71,28.24,27.91,27.67,27.49,27.35,27.23,26.87,26.69,26.58,26.50,26.41,26.32,26.24,26.14],[0,21.20,18.00,16.69,15.98,15.52,15.21,14.98,14.80,14.66,14.55,14.20,14.02,13.91,13.84,13.75,13.65,13.58,13.47],[0,16.26,13.27,12.06,11.39,10.97,10.67,10.46,10.29,10.16,10.05,9.72,9.55,9.45,9.38,9.29,9.20,9.13,9.03],[0,13.75,10.92,9.78,9.15,8.75,8.47,8.26,8.10,7.98,7.87,7.56,7.40,7.30,7.23,7.14,7.06,6.99,6.89],[0,12.25,9.55,8.45,7.85,7.46,7.19,6.99,6.84,6.72,6.62,6.31,6.16,6.06,5.99,5.91,5.82,5.75,5.66],[0,11.26,8.65,7.59,7.01,6.63,6.37,6.18,6.03,5.91,5.81,5.52,5.36,5.26,5.20,5.12,5.03,4.96,4.87],[0,10.56,8.02,6.99,6.42,6.06,5.80,5.61,5.47,5.35,5.26,4.96,4.81,4.71,4.65,4.57,4.48,4.41,4.32],[0,10.04,7.56,6.55,5.99,5.64,5.39,5.20,5.06,4.94,4.85,4.56,4.41,4.31,4.25,4.17,4.08,4.01,3.92],[0,9.65,7.21,6.22,5.67,5.32,5.07,4.89,4.74,4.63,4.54,4.25,4.10,4.01,3.94,3.86,3.78,3.71,3.61],[0,9.33,6.93,5.95,5.41,5.06,4.82,4.64,4.50,4.39,4.30,4.01,3.86,3.76,3.70,3.62,3.54,3.47,3.37],[0,9.07,6.70,5.74,5.21,4.86,4.62,4.44,4.30,4.19,4.10,3.82,3.66,3.57,3.51,3.43,3.34,3.27,3.18],[0,8.86,6.51,5.56,5.04,4.69,4.46,4.28,4.14,4.03,3.94,3.66,3.51,3.41,3.35,3.27,3.18,3.11,3.02],[0,8.68,6.36,5.42,4.89,4.56,4.32,4.14,4.00,3.89,3.80,3.52,3.37,3.28,3.21,3.13,3.05,2.98,2.88],[0,8.53,6.23,5.29,4.77,4.44,4.20,4.03,3.89,3.78,3.69,3.41,3.26,3.16,3.10,3.02,2.93,2.86,2.76],[0,8.40,6.11,5.18,4.67,4.34,4.10,3.93,3.79,3.68,3.59,3.31,3.16,3.07,3.00,2.92,2.83,2.76,2.66],[0,8.29,6.01,5.09,4.58,4.25,4.01,3.84,3.71,3.60,3.51,3.23,3.08,2.98,2.92,2.84,2.75,2.68,2.58],[0,8.18,5.93,5.01,4.50,4.17,3.94,3.77,3.63,3.52,3.43,3.15,3.00,2.91,2.84,2.76,2.67,2.60,2.50],[0,8.10,5.85,4.94,4.43,4.10,3.87,3.70,3.56,3.46,3.37,3.09,2.94,2.84,2.78,2.69,2.61,2.54,2.43],[0,8.02,5.78,4.87,4.37,4.04,3.81,3.64,3.51,3.40,3.31,3.03,2.88,2.79,2.72,2.64,2.55,2.48,2.37],[0,7.95,5.72,4.82,4.31,3.99,3.76,3.59,3.45,3.35,3.26,2.98,2.83,2.73,2.67,2.58,2.50,2.42,2.32],[0,7.88,5.66,4.76,4.26,3.94,3.71,3.54,3.41,3.30,3.21,2.93,2.78,2.69,2.62,2.54,2.45,2.37,2.27],[0,7.82,5.61,4.72,4.22,3.90,3.67,3.50,3.36,3.26,3.17,2.89,2.74,2.64,2.58,2.49,2.40,2.33,2.22],[0,7.77,5.57,4.68,4.18,3.85,3.63,3.46,3.32,3.22,3.13,2.85,2.70,2.60,2.54,2.45,2.36,2.29,2.18],[0,7.72,5.53,4.64,4.14,3.82,3.59,3.42,3.29,3.18,3.09,2.81,2.66,2.57,2.50,2.42,2.33,2.25,2.14],[0,7.68,5.49,4.60,4.11,3.78,3.56,3.39,3.26,3.15,3.06,2.78,2.63,2.54,2.47,2.38,2.29,2.22,2.11],[0,7.64,5.45,4.57,4.07,3.75,3.53,3.36,3.23,3.12,3.03,2.75,2.60,2.51,2.44,2.35,2.26,2.19,2.08],[0,7.60,5.42,4.54,4.04,3.73,3.50,3.33,3.20,3.09,3.00,2.73,2.57,2.48,2.41,2.33,2.23,2.16,2.05],[0,7.56,5.39,4.51,4.02,3.70,3.47,3.30,3.17,3.07,2.98,2.70,2.55,2.45,2.39,2.30,2.21,2.13,2.02],[0,7.31,5.18,4.31,3.83,3.51,3.29,3.12,2.99,2.89,2.80,2.52,2.37,2.27,2.20,2.11,2.02,1.94,1.82],[0,7.08,4.98,4.13,3.65,3.34,3.12,2.95,2.82,2.72,2.63,2.35,2.20,2.10,2.03,1.94,1.84,1.75,1.62],[0,6.90,4.82,3.98,3.51,3.21,2.99,2.82,2.69,2.59,2.50,2.22,2.07,1.97,1.89,1.80,1.69,1.60,1.45],[0,6.66,4.63,3.80,3.34,3.04,2.82,2.66,2.53,2.43,2.34,2.06,1.90,1.79,1.72,1.61,1.50,1.38,1.16]]








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
    $("#sigtests").hide(); $("#standerr").hide();
    $("#xval").hide(); $("#blanky").show(); $("#sumsquares").hide(); $("#meansquares").hide(); 
    $("#xpval").hide(); $("#level").hide(); $("#blankx").show(); $("#residtype").hide();
    var x = document.getElementById("stat").value;
    if (x == "prediction"){
        $("#xval").show(); $("#blanky").hide();
    } else if (x == "sumsqu") {
        $("#sumsquares").show(); $("#blanky").hide();
    } else if (x == "standard") {
        $("#standerr").show(); $("#blanky").hide();
    }  else if (x == "meansqu") {
        $("#meansquares").show(); $("#blanky").hide();
    } else if (x == "significance") {
        $("#sigtests").show(); $("#blanky").hide();
    } else if (x == "confinterval" || x == "predinterval") {
        $("#xpval").show(); $("#blanky").hide(); $("#level").show(); $("#blankx").hide();
    } else if (x == "resplot" || x == "standardized") {
        $("#residtype").show(); $("#blanky").hide();
    } 
}

function stat(){
    $("#simpoutputs").show(); $("#how").hide(); $("#myCanvas2").hide();
    $("#581773186").show(); $("#output3").empty(); 
    $("#output").empty(); $("#explanation").hide(); $("#prediction").hide(); $("#prediction2").hide();
    $("#meansquare").hide(); $("#standarderror").hide(); $("#alternative").hide(); $("#alternative2").hide();
    $("#correlation").hide(); $("#correlation2").hide(); $("#output2").hide(); $("#myCanvas").hide(); $("#charts").hide();
    var x = document.getElementById("stat").value;
    if (x == "slope"){
        slope()
    } else if (x == "intercept"){
        intercept()
    } else if (x == "equation") {
        equation()
    } else if (x == "prediction") {
        prediction()
    } else if (x == "sumsqu") {
        sumsquares()
    } else if (x == "meansqu") {
        meansquares()
    } else if (x == "sse") {
        sse()
    } else if (x == "sst") {
        sst()
    } else if (x == "ssr") {
        ssr()
    } else if (x == "rsquared") {
        rsquared()
    } else if (x == "correlation") {
        correlation()
    } else if (x == "mse") {
        mse()
    } else if (x == "see") {
        see()
    } else if (x == "ses") {
        ses()
    } else if (x == "standard") {
        calcstandarderror()
    } else if (x == "tstat") {
        tstat()
        $("#output2").show(); $("#myCanvas").show();
    } else if (x == "msr") {
        msr()
    } else if (x == "significance") {
        calcsignificance()
    } else if (x == "confinterval") {
        confinterval()
    } else if (x == "predinterval") {
        predinterval()
    } else if (x == "predicted") {
        predicted()
    } else if (x == "resplot") {
        resplot()
    } else if (x == "standardized") {
        standardized()
    } else if (x == "leverage") {
        leverage()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function slope(){
    $("#explanation").show(); $("#prediction").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The regression equation desribes the relationship between x and y."
    document.getElementById("formulatext").innerHTML = "$\\hat{y} = b_{0} + b_{1} x $"
    //\\quad b_{0} = \\bar{y} - b_{1} \\bar{x}
    document.getElementById("explanationtext").innerHTML = "The coefficients of the regression equation are provided by the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$x - \\bar{x}$" + "</td>" + "<td>" + "$y - \\bar{y}$" + "</td>"+ "<td>" + "$(x - \\bar{x})(y - \\bar{y})$" + "</td>" +"<td>" + "$(x - \\bar{x})^2$" + "</td>"+ "</tr>";
    var rows = n_x; var cols = 6;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusy_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xxbminyyb[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sum_xminusx_bar)+"$</td>"+ "<td>$"+Math.round(sum_yminusy_bar)+"$</td>" +"<td>$ {\\color{RoyalBlue}"+parseFloat(sum_xxbminyyb.toFixed(2))+"}$</td>"+"<td>$ {\\color{RoyalBlue}"+parseFloat(sum_xminusx_bar2.toFixed(2))+"}$</td>"+ "</tr>";
    
    
    // $$ \\text{Sample Means:} $$
    //\\begin{align}  &= \\frac{\\sum{x}}{n} =  \\frac{" + sum_x + "}{" + n_x + "} = \\\\
    //&= \\frac{\\sum{y}}{n} =  \\frac{" + sum_y + "}{" + n_y + "} \\end{align}
    //$$ \\text{Slope:} $$
    //$$ \\text{Intercept:} $$
    //$$ \\text{Regression Equation:} $$
    
    
    document.getElementById("output").innerHTML = " $$  \\bar{x} = {\\color{RoyalBlue}" + parseFloat(mean_x.toFixed(2))+ "} \\quad \\quad  \\bar{y} =  {\\color{RoyalBlue}" + parseFloat(mean_y.toFixed(2))+ "}  $$ <table>" + table + "</table>  $$ b_{1} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sum(x - \\bar{x})^2} = \\frac{ "+parseFloat(sum_xxbminyyb.toFixed(2))+"}{ "+parseFloat(sum_xminusx_bar2.toFixed(2))+"}=  {\\color{RoyalBlue}"+parseFloat(ansslope.toFixed(2))+"} $$  $$ b_{0} = \\bar{y} - b_{1} \\bar{x} = { "+parseFloat(mean_y.toFixed(2))+"} - (" +parseFloat(ansslope.toFixed(2)) + ")( " + parseFloat(mean_x.toFixed(2))+ ") = {\\color{RoyalBlue}"+parseFloat(ansint.toFixed(2))+"} $$  $$ \\hat{y} = b_{0} + b_{1} x \\rightarrow \\boxed{ \\hat{y} = "+parseFloat(ansint.toFixed(2)) + signslope + parseFloat(Math.abs(ansslope).toFixed(2))+"x} $$ "
    
    // = \\frac{" + x[0] + " +  "+x[1]+" + \\cdots + "+x[n_x - 1]+"}{" + n_x + "}
    //  = \\frac{" + y[0] + " +  "+y[1]+" + \\cdots + "+y[n_y - 1]+"}{" + n_y + "}
    
    document.getElementById("output3").innerHTML = "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    
    
    
    MathJax.typeset();
    

    
    //var str = document.getElementById("values1").value;
    //var str2 = document.getElementById("values2").value;
    //var each = str.split(","); var each2 = str2.split(",")
    var eachnums = x.map(function(v) {
  		return parseInt(v, 10);
    });
    var eachnums2 = y.map(function(v) {
  		return parseInt(v, 10);
    });

    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          title: 'Regression Line',
          hAxis: {title: 'x'},
          vAxis: {title: 'y'},
          legend: 'none',
          trendlines: { 0: {} }    // Draw a trendline for data series 0. 
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
    

      }
}

function predictshow() {
    $("#xval").show(); $("#prediction").hide(); $("#prediction2").show(); $("#output2").show();
}

function predictdontshow() {
    $("#xval").hide(); $("#prediction").show(); $("#prediction2").hide(); $("#output2").hide();
}

function prediction(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The estimated regression equation is used to predict the value of y for a given value of x."
    document.getElementById("formulatext").innerHTML = "$\\hat{y} = b_{0} + b_{1} x$"
    document.getElementById("explanationtext").innerHTML = "The value of y is predicted by plugging x into the estimated regression equation."
    var xvalue = document.getElementById("xvalue").value;
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var ans = ansint + ansslope * xvalue
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    
    document.getElementById("output").innerHTML = " $$ \\hat{y} = b_{0} + b_{1} x = "+parseFloat(ansint.toFixed(2))+" + "+parseFloat(ansslope.toFixed(2))+" (" + xvalue + ") = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function sumsquares() {
    var x = document.getElementById("sumsquaresval").value;
    if (x == "error") {
        sse()
    } else if (x == "total") {
        sst()
    } else if (x == "regression") {
        ssr()
    }
}

function sse(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The sum of squares error meausure the variability of the observations around the estimation regression equation."
    document.getElementById("formulatext").innerHTML = "$ \\text{SSE} = \\sum(y - \\hat{y})^2 $"
    document.getElementById("explanationtext").innerHTML = "The closer the observations are to the estimate regression line, the smaller the SSE will be."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    
    var out = "$$ \\text{Predicted Values:} $$ $$ \\begin{align}"
    
    var rows = n_x; var cols = 5;
    for (var r = 0; r < rows; r++){
        out += " \\hat{y} &= "+parseFloat(ansint.toFixed(2)) + signslope +parseFloat(Math.abs(ansslope).toFixed(2))+"("+x[r]+") = "+parseFloat(yhat[r].toFixed(2))+" \\\\" 
    }
    
    out += "\\end{align} $$"

    
    
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$\\hat{y}$" + "</td>" + "<td>" + "$y - \\hat{y}$" + "</td>"+ "<td>" + "$(y - \\hat{y})^2$" + "</td>" + "</tr>";
    
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat(yhat[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusyhat[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusyhat2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+Math.round(sum_yminusyhat)+"$</td>" +"<td>${\\color{RoyalBlue}"+parseFloat(sum_yminusyhat2.toFixed(2))+"}$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "$$ \\hat{y} = "+parseFloat(ansint.toFixed(2)) + signslope + parseFloat(Math.abs(ansslope).toFixed(2))+"x $$ <table>" + table + "</table>$$  \\text{SSE} = \\sum(y - \\hat{y})^2 = \\boxed{"+parseFloat(anssse.toFixed(2))+"} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function sst(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The sum of squares total meausures the overall variability of the value of the dependent variable (y)."
    document.getElementById("formulatext").innerHTML = "$ \\text{SST} = \\sum(y - \\bar{y})^2 $"
    document.getElementById("explanationtext").innerHTML = "The closer the values of the dependent variable are to their mean, the smaller the SST will be."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2;
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$y - \\bar{y}$" + "</td>"+ "<td>" + "$(y - \\bar{y})^2$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 4;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat(yminusy_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusy_bar2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sum_yminusy_bar)+"$</td>" +"<td>${\\color{RoyalBlue}"+parseFloat(sum_yminusy_bar2.toFixed(2))+"}$</td>"+ "</tr>";
    
    //$$ \\text{Sample Mean:} $$ = \\frac{\\sum{y}}{n} =  \\frac{" + sum_y + "}{" + n_y + "} 
    
    document.getElementById("output").innerHTML = " $$ \\bar{y} =  " + parseFloat(mean_y.toFixed(2))+ " $$ <table>" + table + "</table>$$ \\text{SST} = \\sum(y - \\bar{y})^2 = \\boxed{"+parseFloat(anssst.toFixed(2))+"} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function ssr(){
    $("#explanation").show(); $("#alternative").show();
    document.getElementById("descriptiontext").innerHTML = "The sum of squares regression meausures the distance between the estimated regression line and the mean of the dependent variable (y)."
    document.getElementById("formulatext").innerHTML = "$ \\text{SSR} = \\text{SST} - \\text{SSE} $"
    document.getElementById("explanationtext").innerHTML = "The closer the estimated regression line is to the mean of the dependent variable, the smaller the SSR will be."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2;
    var ansssr = anssst - anssse;
    document.getElementById("output").innerHTML = "$$ \\text{SSR} = \\text{SST} - \\text{SSE} = "+parseFloat(anssst.toFixed(2))+" - " +parseFloat(anssse.toFixed(2)) +" = \\boxed{"+parseFloat(ansssr.toFixed(2))+"} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function rsquared(){
    $("#explanation").show(); $("#correlation").show();
    document.getElementById("descriptiontext").innerHTML = "The coefficient of determination is a measure of the goodness of fit for the estimated regression equation."
    document.getElementById("formulatext").innerHTML = "$ r^2 = \\dfrac{\\text{SSR}}{\\text{SST}} $"
    document.getElementById("explanationtext").innerHTML = "The coefficient of determination takes a value between 0 and 1, with a higher value indicating a better fit."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst;
    var ansrsquper = ansrsqu.toFixed(2) * 100;
    //$$ \\text{is explained by the regression equation.} $$" \\text{Interpretation: }
    var interpret = "$$ " + parseFloat(ansrsquper.toFixed(0)) + "\\% \\text{ of the Variation is Explained} $$" 
    document.getElementById("output").innerHTML = "$$ r^2 = \\frac{\\text{SSR}}{\\text{SST}} = \\frac{"+parseFloat(ansssr.toFixed(2))+"}{" +parseFloat(anssst.toFixed(2)) +"} = \\boxed{"+ansrsqu.toFixed(2).replace(/^0+/, '')+"} $$ $$ \\text{Interpretation:} $$" + interpret + "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function correlation(){
    $("#explanation").show(); $("#output2").hide(); $("#correlation").hide(); $("#correlation2").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationship between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ r_{xy} = (\\text{sign of } b_1) \\sqrt{r^2} $"
    document.getElementById("explanationtext").innerHTML = "An alternative formulation of the correlation coefficient that uses the coefficient of determination."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst;
    var ansrsquper = ansrsqu.toFixed(2) * 100;
    var signslope = ""
    if (ansslope > 0) {
        var signslope = "+"
        var signslopeval = +1
    } else if (ansslope < 0) {
        var signslope = "-"
        var signslopeval = -1
    } else {
        var signslope = ""
        var signslopeval = 0
    }
    var anscorcoef = signslopeval * Math.sqrt(ansrsqu)
    if (anscorcoef == 1){
        var intinside = "a <u>perfect positive"
    } else if (anscorcoef >= .75 && anscorcoef < 1){
        var intinside = "a <u>strong positive"
    } else if (anscorcoef > .25 && anscorcoef < .75){
        var intinside = "a <u>positive"
    } else if (anscorcoef > 0 && anscorcoef < .25){
        var intinside = "a <u>weak positive"
    } else if (anscorcoef < 0 && anscorcoef >= -.25){
        var intinside = "a <u>weak negative"
    } else if (anscorcoef < -.25 && anscorcoef > -.75){
        var intinside = "a <u>negative"
    } else if (anscorcoef <= -.75 && anscorcoef > -1){
        var intinside = "a <u>strong negative"
    } else if (anscorcoef == -1){
        var intinside = "a <u>perfect negative"
    } else {
        var intinside = "<u>no"
    }
    var interpret = "<b>Interpretation:</b> There is "+ intinside +" linear relationship</u> between x and y."
    document.getElementById("output").innerHTML = "$$ r_{xy} = (\\text{sign of } b_1) \\sqrt{r^2} = "+signslope+" \\sqrt{" +ansrsqu.toFixed(2).replace(/^0+/, '') +"} = \\boxed{"+anscorcoef.toFixed(2).replace(/^0+/, '')+"} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function hidecorrelation() {
    $("#output2").hide(); $("#correlation").show(); $("#correlation2").hide();
}


function meansquare() {
    $("#meansquare").show(); 
}

function calcmeansquare() {
    var val = document.getElementById("meansquareval").value;
    if (val=="error") {
        mse()
    } else if (val=="regression") {
        msr()
    }
}

function meansquares() {
    var x = document.getElementById("meansquaresval").value;
    if (x == "error") {
        mse()
    } else if (x == "regression") {
        msr()
    }
}

function mse(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationshhip between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ \\text{MSE} = \\dfrac{\\text{SSE}}{n-2} $"
    document.getElementById("explanationtext").innerHTML = "An alternative formulation of the correlation coefficient that uses the coefficient of determination."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    document.getElementById("output").innerHTML = "$$ \\text{MSE} = \\frac{\\text{SSE}}{n-2} = \\frac{"+parseFloat(anssse.toFixed(2))+"}{" + n_x +" - 2} = \\boxed{"+parseFloat(ansmse.toFixed(2))+"} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function msr(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationshhip between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ \\text{MSR} = \\dfrac{\\text{SSR}}{1} $"
    document.getElementById("explanationtext").innerHTML = "An alternative formulation of the correlation coefficient that uses the coefficient of determination."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2;
    var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    var anststat = ansslope / ansses;
    var ansmsr = ansssr;
    document.getElementById("output").innerHTML = "$$ \\text{MSR} = \\frac{\\text{SSR}}{1} = \\frac{\\text{"+parseFloat(ansssr.toFixed(2))+"}}{1} = \\boxed{"+parseFloat(ansmsr.toFixed(2))+"} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function standarderror() {
    $("#standarderror").show(); 
}

function calcstandarderror() {
    var val = document.getElementById("standarderrorval").value;
    if (val=="estimate") {
        see()
    } else if (val=="slope") {
        ses()
    }
}

function see(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationshhip between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ \\text{MSE} = \\dfrac{\\text{SSE}}{n-2} $"
    document.getElementById("explanationtext").innerHTML = "An alternative formulation of the correlation coefficient that uses the coefficient of determination."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    document.getElementById("output").innerHTML = "$$ s = \\sqrt{\\text{MSE}} = \\sqrt{"+parseFloat(ansmse.toFixed(2))+"} = \\boxed{" + parseFloat(anssee.toFixed(2)) +"} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function ses(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationshhip between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ \\text{MSE} = \\dfrac{\\text{SSE}}{n-2} $"
    document.getElementById("explanationtext").innerHTML = "An alternative formulation of the correlation coefficient that uses the coefficient of determination."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    document.getElementById("output").innerHTML = "$$ s_{b_1} = \\frac{s}{\\sqrt{\\sum(x-\\bar{x})^2}} = \\frac{" + parseFloat(anssee.toFixed(2)) +"}{\\sqrt{"+sum_xminusx_bar2+"}} = \\boxed{" + parseFloat(ansses.toFixed(2)) +"} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function calcsignificance() {
    var val = document.getElementById("sigval").value;
    if (val=="ttest") {
        ttest()
    } else if (val=="ftest") {
        ftest()
    }
}

function ttest(){
    $("#explanation").show(); $("#output2").show(); $("#myCanvas").show(); $("#myCanvas2").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationshhip between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ t = \\dfrac{b_1}{s_{b_1}} $"
    document.getElementById("explanationtext").innerHTML = "An alternative formulation of the correlation coefficient that uses the coefficient of determination."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length; var size = n_x; var sizem1 = size - 1;  var sizem2 = size - 2;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    var anststat = ansslope / ansses; var anststatneg = -Math.abs(anststat)
    var zptwo = normalcdf(anststatneg); var zptwo2 = 2 * zptwo;
    var test = anststat; var testtwo = Math.abs(test);
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


            ctx.fillText("t",285,132);
            ctx.fillText((-Math.abs(test.toFixed(2))),66,145);
            ctx.fillText(Math.abs(test.toFixed(2)),226,145); 
            //ctx.fillText("df = "+sizem1,220,40); 


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
        
        ctx.fillText(.025,30,105);
        ctx.fillText(.025,245,105);

            ctx.fillText("t",285,132);
            ctx.fillText("-t",65,145);
            ctx.fillText("α/2",72,146);
            ctx.fillText("t",228,145);
            ctx.fillText("α/2",232,146);
            //ctx.fillText("df = "+sizem1,220,40); 
        


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
   
        table41 = "<td colspan='7'>$\\text{Student's t-Distribution Table}$</td>"
    
        table4 = "<td></td><td colspan='6' style='border-bottom: thin solid'>$\\text{Area in Upper Tail}$</td>"
    
    
        var cvalsymb1 = "-t_{\\alpha / 2}";
        var cvalsymb2 = "t_{\\alpha / 2}";
        var pvalhalf = 1 - compute(testtwo,sizem1);
        if (pvalhalf > .2) {
            var pvalh = ".20 \\text{ to } 1"
            table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td bgcolor='lightgray'>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.2 && pvalhalf >.1) {
            var pvalh = ".10 \\text{ to } .20"
            table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td bgcolor='lightgray'>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td bgcolor='lightgray'>$"+tinv(.20,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.1 && pvalhalf >.05) {
            var pvalh = ".05 \\text{ to } .10"
            table5 = "<td>$df$</td><td>$.20$</td><td bgcolor='lightgray'>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.05 && pvalhalf >.025) {
            var pvalh = ".025 \\text{ to } .05"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.025 && pvalhalf >.01) {
            var pvalh = ".01 \\text{ to } .025"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td bgcolor='lightgray'>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.01 && pvalhalf >.005) {
            var pvalh = ".005 \\text{ to } .01"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td bgcolor='lightgray'>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.005) {
            var pvalh = "0 \\text{ to } .005"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,size).toFixed(3)+"$</td>"
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
        //var ctwo1 = tctwo1; var ctwo2 = tctwo2; 
    

    table52 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>"

    table71 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

    table7 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

    table72 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"

    
    if (2*pvalhalf <= .05) {
        var pinequ = "\\leq"
        var concl = "\\text{Reject } H_0"
        var interpret = "\\text{Significant Relationship}"
    } else if (2*pvalhalf > .05) {
        var pinequ = ">"
        var concl = "\\text{Do Not Reject } H_0"
        var interpret = " \\text{No Significant Relationship} "
    }
    
    var ctwo1 = -tinv(.025,size-1)
    var ctwo2 = tinv(.025,size-1)
    
    
    
    
    if (test <= ctwo1) {
        var twosign1 = "\\leq"
    } else if (test > ctwo1) {
        var twosign1 = ">"
    }
    
    if (test >= ctwo1) {
        var twosign2 = "\\geq"
    } else if (test < ctwo1) {
        var twosign2 = "<"
    }
    
    if (test <= ctwo1) {
        var twocrit = "t="+test.toFixed(2) + "\\leq" +" -t_{\\alpha / 2} = "+ctwo1.toFixed(2);
    } else if (test >= ctwo2) {
        var twocrit = "t="+test.toFixed(2) + "\\geq" +" t_{\\alpha / 2} = "+ctwo2.toFixed(2);
    } else {
        var twocrit = "\\begin{align} t &="+test.toFixed(2) + "> -t_{\\alpha / 2} = "+ctwo1.toFixed(2)+" \\\\ \\text{ and } t &="+test.toFixed(2) + "< t_{\\alpha / 2} = "+ctwo2.toFixed(2)+ " \\end{align}"
    }

    var tablep = "<table><tr>"+table41+"</tr><tr style='border-top: thin solid;'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table61+"</tr><tr>"+table6+"</tr><tr>"+table62+"</tr></table>"
    
    var tablec = "<table><tr>"+table41+"</tr><tr style='border-top: thin solid;'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table52+"</tr><tr>"+table71+"</tr><tr>"+table7+"</tr><tr>"+table72+"</tr></table>"

    
    //\\text{Interpretation: }
    
    document.getElementById("output").innerHTML = "$$ \\text{Test Statistic:} $$ $$ t = \\frac{b_1}{s_{b_1}} = \\frac{"+ansslope.toFixed(2)+"}{"+ansses.toFixed(2)+"} = {\\color{RoyalBlue}" + anststat.toFixed(2) +"} $$ $$ \\text{Degrees of Freedom:} $$ $$ df = n - 1 = "+size+" - 1 = {\\color{RoyalBlue}"+(size-1)+"} $$ $ \\text{p-Value Approach:} $ "
    
    document.getElementById("output2").innerHTML = tablep+"$$ \\begin{align} \\text{p-value}&=2 \\times P(t \\geq "+testtwo.toFixed(2)+" ) \\\\ &= 2 \\times " + pvalh+ " = {\\color{RoyalBlue}"+pval+"} \\end{align} $$ $$ (\\text{Note: Exact } p\\text{-value is } "+parseFloat((2*pvalhalf).toFixed(4))+") $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } p\\text{-value} \\leq \\alpha $$ $$ p \\text{-value}="+pval+pinequ + "\\alpha = .05 $$ $$ \\text{Conclusion: } " + concl +" $$ $$ \\boxed{" + interpret + "} $$ $ \\text{Critical Value Approach:} $"
    
    document.getElementById("output3").innerHTML = tablec+"$$ \\begin{align} \\text{Critical Values: } -t_{\\alpha / 2} &= {\\color{RoyalBlue} " + ctwo1.toFixed(3) + "} \\\\ \\text{ and } t_{\\alpha / 2} &= {\\color{RoyalBlue}"+ctwo2.toFixed(3) + "} \\end{align} $$ $$ \\text{Rejection Rule:} $$ $$ \\text{Reject } H_0 \\text{ if } t \\leq -t_{\\alpha / 2} \\text{ or if } t \\geq t_{\\alpha / 2} $$ $$ " + twocrit+ " $$ $$ \\text{Conclusion: } " + concl +" $$ $$ \\boxed{" + interpret +"} $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"

    
    MathJax.typeset();
}

function ftest(){
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show(); $("#myCanvas2").show(); 
    document.getElementById("descriptiontext").innerHTML = "The estimated regression equation is used to predict the dependent variable (y) for a given value of the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$ F = \\dfrac{MSR}{MSE} $ "
    document.getElementById("explanationtext").innerHTML = "The estimated regression equation is found by plugging in the values of the slope and intercept into the formula."
    
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length; var size = n_x; var sizem1 = size - 1;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2;
    var ansssr = anssst - anssse;

    
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    var anststat = ansslope / ansses; var ansmsr = ansssr;
    var ansfstat = ansmsr / ansmse;
    var exp = 2.71828;
    var numdf = 1; var dendf = size - 2
    
    var f = [];
        var i;
        for (i = 0; i < 22; i++) {
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
        ctx.quadraticCurveTo(210, 120, 271, 127);
        ctx.lineTo(271, 130);
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
        ctx.fillText(parseFloat(ansfstat.toFixed(2)),185,145);

        ctx.fillText("p-value",210,110);


        var points = []

        for (i = 0; i < 22; i++) {
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
    
    var f = [];
        var i;
        for (i = 0; i < 22; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(Math.pow(i,8/2-1)*Math.pow(exp,-.5*i))
        }

        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(190, 130);
        ctx.lineTo(190, 106);
        ctx.quadraticCurveTo(210, 120, 271, 127);
        ctx.lineTo(271, 130);
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
        ctx.fillText("α",190,146);

        ctx.fillText(".05",210,110);


        var points = []

        for (i = 0; i < 22; i++) {
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

    row = fdist05[dendf]
    
    row1 = fdist10[dendf]
    row2 = fdist05[dendf]
    row3 = fdist025[dendf]
    row4 = fdist01[dendf]
    
    //<td>$4$</td><td>$5$</td>
    //<td>$"+ row1[4] +"$</td><td>$"+ row1[5] +"$</td>
    //<td bgcolor='lightgray'>$"+ row2[4] +"$</td><td bgcolor='lightgray'>$"+ row2[5] +"$</td>
    //<td>$"+ row3[4] +"$</td><td>$"+ row3[5] +"$</td>
    //<td>$"+ row4[4] +"$</td><td>$"+ row4[5] +"$</td>
    
    var table0 = "<td colspan='6'>$ \\text{F-Distribution Table} $</td>"
    
    var table1 = "<td>$ \\text{Den} $</td><td>$\\text{Upper}$</td></td><td style='border-bottom: thin solid;' colspan='4'>$\\text{Numerator } df$</td>"
    
    var table2 = "<td>$df$</td><td>$\\text{Area}$</td><td bgcolor='lightgray'>$"+ numdf +"$</td><td>$2$</td><td>$3$</td><td>$4$</td>"
    
    var table3 = "<td>$"+ dendf +"$</td><td>$.10$</td><td bgcolor='lightgray'>$"+ row1[numdf] +"$</td><td>$"+ row1[2] +"$</td><td>$"+ row1[3] +"$</td><td>$"+ row1[4] +"$</td>"
    
    var table4 = "<td></td><td bgcolor='lightgray'>$.05$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+ row2[numdf] +"$</td><td bgcolor='lightgray'>$"+ row2[2] +"$</td><td bgcolor='lightgray'>$"+ row2[3] +"$</td><td bgcolor='lightgray'>$"+ row2[4] +"$</td>"
        
    var table5 = "<td></td><td>$.025$</td><td bgcolor='lightgray'>$"+ row3[numdf] +"$</td><td>$"+ row3[2] +"$</td><td>$"+ row3[3] +"$</td><td>$"+ row3[4] +"$</td>"
    
    var table6 = "<td></td><td>$.01$</td><td bgcolor='lightgray'>$"+ row4[numdf] +"$</td><td>$"+ row4[2] +"$</td><td>$"+ row4[3] +"$</td><td>$"+ row4[4] +"$</td>"
    
    var tablec = "<table><tr>"+table0+"</tr><tr style='border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table3+"</tr><tr>"+table4+"</tr><tr>"+table5+"</tr><tr>"+table6+"</tr></table>"

    
    if (ansfstat < row1[numdf]) {
        var concl = "$$ \\text{Conclusion: Do Not Reject } H_0 $$"
        var interpret = "$$ \\boxed{\\text{No Significant Relationship}} $$"
        var pvalue = ".10 \\text{ to } 1"
        var psign = ">"
        var fsign = "<"
        var table31 = "<td>$"+ dendf +"$</td><td bgcolor='lightgray'>$.10$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+ row1[numdf] +"$</td><td bgcolor='lightgray'>$"+ row1[2] +"$</td><td bgcolor='lightgray'>$"+ row1[3] +"$</td><td bgcolor='lightgray'>$"+ row1[4] +"$</td>"
    
        var table41 = "<td></td><td>$.05$</td><td bgcolor='lightgray'>$"+ row2[numdf] +"$</td><td>$"+ row2[2] +"$</td><td>$"+ row2[3] +"$</td><td>$"+ row2[4] +"$</td>"
        
        var table51 = "<td></td><td>$.025$</td><td bgcolor='lightgray'>$"+ row3[numdf] +"$</td><td>$"+ row3[2] +"$</td><td>$"+ row3[3] +"$</td><td>$"+ row3[4] +"$</td>"
    
        var table61 = "<td></td><td>$.01$</td><td bgcolor='lightgray'>$"+ row4[numdf] +"$</td><td>$"+ row4[2] +"$</td><td>$"+ row4[3] +"$</td><td>$"+ row4[4] +"$</td>"
    } else if (ansfstat > row1[numdf] && ansfstat < row2[numdf]) {
        var concl = "$$ \\text{Conclusion: Do Not Reject } H_0 $$"
        var interpret = "$$ \\boxed{\\text{No Significant Relationship}} $$"
        var pvalue = ".05 \\text{ to } .10"
        var psign = ">"
        var fsign = "<"
        var table31 = "<td>$"+ dendf +"$</td><td bgcolor='lightgray'>$.10$</td><td bgcolor='lightgray' style='border-top: thin solid; border-left: thin solid; border-right: thin solid'>$"+ row1[numdf] +"$</td><td bgcolor='lightgray'>$"+ row1[2] +"$</td><td bgcolor='lightgray'>$"+ row1[3] +"$</td><td bgcolor='lightgray'>$"+ row1[4] +"$</td>"
    
        var table41 = "<td></td><td bgcolor='lightgray'>$.05$</td><td bgcolor='lightgray' style='border-left: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+ row2[numdf] +"$</td><td bgcolor='lightgray'>$"+ row2[2] +"$</td><td bgcolor='lightgray'>$"+ row2[3] +"$</td><td bgcolor='lightgray'>$"+ row2[4] +"$</td>"
        
        var table51 = "<td></td><td>$.025$</td><td bgcolor='lightgray'>$"+ row3[numdf] +"$</td><td>$"+ row3[2] +"$</td><td>$"+ row3[3] +"$</td><td>$"+ row3[4] +"$</td>"
    
        var table61 = "<td></td><td>$.01$</td><td bgcolor='lightgray'>$"+ row4[numdf] +"$</td><td>$"+ row4[2] +"$</td><td>$"+ row4[3] +"$</td><td>$"+ row4[4] +"$</td>"
    } else if (ansfstat > row2[numdf] && ansfstat < row3[numdf]) {
        var concl = "$$ \\text{Conclusion: Reject } H_0 $$"
        var interpret = "$$ \\boxed{\\text{Significant Relationship}} $$"
        var pvalue = ".025 \\text{ to } .05"
        var psign = "\\leq"
        var fsign = "\\geq"
        var table31 = "<td>$"+ dendf +"$</td><td>$.10$</td><td bgcolor='lightgray'>$"+ row1[numdf] +"$</td><td>$"+ row1[2] +"$</td><td>$"+ row1[3] +"$</td><td>$"+ row1[4] +"$</td>"
    
        var table41 = "<td></td><td bgcolor='lightgray'>$.05$</td><td bgcolor='lightgray' style='border-top: thin solid; border-left: thin solid; border-right: thin solid'>$"+ row2[numdf] +"$</td><td bgcolor='lightgray'>$"+ row2[2] +"$</td><td bgcolor='lightgray'>$"+ row2[3] +"$</td><td bgcolor='lightgray'>$"+ row2[4] +"$</td>"
        
        var table51 = "<td></td><td bgcolor='lightgray'>$.025$</td><td bgcolor='lightgray' style='border-left: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+ row3[numdf] +"$</td><td bgcolor='lightgray'>$"+ row3[2] +"$</td><td bgcolor='lightgray'>$"+ row3[3] +"$</td><td bgcolor='lightgray'>$"+ row3[4] +"$</td>"
    
        var table61 = "<td></td><td>$.01$</td><td bgcolor='lightgray'>$"+ row4[numdf] +"$</td><td>$"+ row4[2] +"$</td><td>$"+ row4[3] +"$</td><td>$"+ row4[4] +"$</td>"
    } else if (ansfstat > row3[numdf] && ansfstat < row4[numdf]) {
        var concl = "$$ \\text{Conclusion: Reject } H_0 $$"
        var interpret = "$$ \\boxed{\\text{Significant Relationship}} $$"
        var pvalue = ".01 \\text{ to } .025"
        var psign = "\\leq"
        var fsign = "\\geq"
        var table31 = "<td>$"+ dendf +"$</td><td>$.10$</td><td bgcolor='lightgray'>$"+ row1[numdf] +"$</td><td>$"+ row1[2] +"$</td><td>$"+ row1[3] +"$</td><td>$"+ row1[4] +"$</td>"
    
        var table41 = "<td></td><td>$.05$</td><td bgcolor='lightgray'>$"+ row2[numdf] +"$</td><td>$"+ row2[2] +"$</td><td>$"+ row2[3] +"$</td><td>$"+ row2[4] +"$</td>"
        
        var table51 = "<td></td><td bgcolor='lightgray'>$.025$</td><td bgcolor='lightgray' style='border-top: thin solid; border-left: thin solid; border-right: thin solid'>$"+ row3[numdf] +"$</td><td bgcolor='lightgray'>$"+ row3[2] +"$</td><td bgcolor='lightgray'>$"+ row3[3] +"$</td><td bgcolor='lightgray'>$"+ row3[4] +"$</td>"
    
        var table61 = "<td></td><td bgcolor='lightgray'>$.01$</td><td bgcolor='lightgray' style='border-left: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+ row4[numdf] +"$</td><td bgcolor='lightgray'>$"+ row4[2] +"$</td><td bgcolor='lightgray'>$"+ row4[3] +"$</td><td bgcolor='lightgray'>$"+ row4[4] +"$</td>"
    }  else if (ansfstat > row4[numdf]) {
        var concl = "$$ \\text{Conclusion: Reject } H_0 $$"
        var interpret = "$$ \\boxed{\\text{Significant Relationship}} $$"
        var pvalue = "0 \\text{ to } .01"
        var psign = "\\leq"
        var fsign = "\\geq"
        var table31 = "<td>$"+ dendf +"$</td><td>$.10$</td><td bgcolor='lightgray'>$"+ row1[numdf] +"$</td><td>$"+ row1[2] +"$</td><td>$"+ row1[3] +"$</td><td>$"+ row1[4] +"$</td>"
    
        var table41 = "<td></td><td>$.05$</td><td bgcolor='lightgray'>$"+ row2[numdf] +"$</td><td>$"+ row2[2] +"$</td><td>$"+ row2[3] +"$</td><td>$"+ row2[4] +"$</td>"
        
        var table51 = "<td></td><td>$.025$</td><td bgcolor='lightgray'>$"+ row3[numdf] +"$</td><td>$"+ row3[2] +"$</td><td>$"+ row3[3] +"$</td><td>$"+ row3[4] +"$</td>"
    
        var table61 = "<td></td><td bgcolor='lightgray'>$.01$</td><td bgcolor='lightgray' style='border-left: thin solid; border-top: thin solid; border-right: thin solid'>$"+ row4[numdf] +"$</td><td bgcolor='lightgray'>$"+ row4[2] +"$</td><td bgcolor='lightgray'>$"+ row4[3] +"$</td><td bgcolor='lightgray'>$"+ row4[4] +"$</td>"
    }
    
    var tablep = "<table><tr>"+table0+"</tr><tr style='border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table31+"</tr><tr>"+table41+"</tr><tr>"+table51+"</tr><tr>"+table61+"</tr></table>"
    
    
    
    // <tr><td>$\\text{Source of}$</td><td>$\\text{Sum of}$</td><td>$\\text{Degrees of}$</td><td>$\\text{Mean}$</td><td></td><td></td></tr>
    
    
    var pexact = 1 - computef(ansfstat,1,size-2)
    
    var tablea = "<table><tr><td colspan='6'>$\\text{ANOVA Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$\\text{Source}$</td><td>$\\text{SS}$</td><td>$df$</td><td>$\\text{MS}$</td><td>$F$</td><td>$p\\text{-value}$</td></tr><tr><td>$\\text{Regression}$</td><td>$"+parseFloat(ansssr.toFixed(2))+"$</td><td>$1$</td><td>$"+parseFloat(ansssr.toFixed(2))+"$</td><td>$"+parseFloat(ansfstat.toFixed(2))+"$</td><td>$"+parseFloat(pexact.toFixed(4))+"$</td></tr><tr><td>$\\text{Error}$</td><td>$"+parseFloat(anssse.toFixed(2))+"$</td><td>$"+(size-2)+"$</td><td>$"+parseFloat(ansmse.toFixed(2))+"$</td></tr><tr><td>$\\text{Total}$</td><td>$"+parseFloat(anssst.toFixed(2))+"$</td><td>$"+(size-1)+"$</td></tr></table>"
    

    
    document.getElementById("output").innerHTML = "$$ \\text{Test Statistic:} $$ $$ F = \\frac{\\text{MSR}}{\\text{MSE}} = \\frac{"+ansmsr.toFixed(2)+"}{"+ansmse.toFixed(2)+"} = {\\color{RoyalBlue}"+ ansfstat.toFixed(2) + "} $$ $$ \\text{Degrees of Freedom:} $$ $$ \\begin{align} \\text{Numerator } df &= \\text{number of } x \\text{'s} = {\\color{RoyalBlue} 1 } \\\\ \\text{Denominator } df &= n - 2 = "+size+" - 2 = {\\color{RoyalBlue}"+(size-2)+"} \\end{align} $$ $ \\text{p-Value Approach:} $ "
    
    document.getElementById("output2").innerHTML = tablep+"$$ p \\text{-value} =  P(F \\geq "+ansfstat.toFixed(2)+" ) = {\\color{RoyalBlue} "+pvalue+"} $$ $$ (\\text{Note: Exact } p \\text{-value is } "+parseFloat(pexact.toFixed(4))+") $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } p\\text{-value} \\leq \\alpha $$ $$ p \\text{-value} = "+pvalue+psign+" \\alpha = .05 $$" + concl + interpret + "$ \\text{Critical Value Approach:} $ "
    
    document.getElementById("output3").innerHTML = tablec +"$$ \\text{Critical Value: } F_\\alpha = "+row2[numdf]+" $$ $$ \\text{Rejection Rule: } \\text{Reject } H_0 \\text{ if } F \\geq F_\\alpha $$ $$ F = "+ ansfstat.toFixed(2) + fsign+" F_\\alpha = "+row2[numdf]+"  $$" + concl + interpret + tablea + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>  "
    
    MathJax.typeset();
}

function confinterval() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "The confidence interval provides an interval estimate for the expected value of y."
    document.getElementById("formulatext").innerHTML = "$ \\hat{y}_p \\pm t_{\\alpha/2} s_{\\hat{y}_p} $ "
    document.getElementById("explanationtext").innerHTML = "The estimated regression equation is found by plugging in the values of the slope and intercept into the formula."
    var xvalue = document.getElementById("xpvalue").value;
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var conlev = document.getElementById("conlev").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var ans = ansint + ansslope * xvalue
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var size = n_x; var sizem1 = size - 1;  var sizem2 = size - 2; var sizem3 = size - 3;
    var talphahalf = tinv(alphahalf,sizem2);
    var exp = 2.71828;
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    var ansans = anssee * Math.sqrt(1/n_x + ((xvalue-mean_x)^2)/sum_xminusx_bar2)
    var marginerror = talphahalf * ansans
    var anslow = ans - marginerror; var anshigh = (parseFloat(ans)+marginerror);

    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))));
    }
    
    var c = document.getElementById("myCanvas");
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
    
    ctx.fillText(alphahalf.toFixed(3).replace(/^0+/, ''),246,105);


    ctx.fillText("t",285,132);
    ctx.fillText("t",228,145);
    ctx.fillText("α/2",232,147);
    //ctx.fillText("df = "+sizem1,220,40); 

    
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

    
    table41 = "<td colspan='7'>$\\text{Student's t-Distribution Table}$</td>"
    
    table4 = "<td></td><td colspan='6' style='border-bottom: thin solid;'>$\\text{Area in Upper Tail}$</td>"
    
    if (conlev == "90") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
        table61 = "<td>$"+ sizem3 +"$</td><td>$"+tinv(.20,sizem3).toFixed(3)+"$</td><td>$"+tinv(.10,sizem3).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem3).toFixed(3)+"$</td><td>$"+tinv(.025,sizem3).toFixed(3)+"$</td><td>$"+tinv(.01,sizem3).toFixed(3)+"$</td><td>$"+tinv(.005,sizem3).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table62 = "<td>$"+ sizem1 +"$</td><td>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"
    } else if (conlev == "95") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
        table61 = "<td>$"+ sizem3 +"$</td><td>$"+tinv(.20,sizem3).toFixed(3)+"$</td><td>$"+tinv(.10,sizem3).toFixed(3)+"$</td><td>$"+tinv(.05,sizem3).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem3).toFixed(3)+"$</td><td>$"+tinv(.01,sizem3).toFixed(3)+"$</td><td>$"+tinv(.005,sizem3).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table62 = "<td>$"+ sizem1 +"$</td><td>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"
    } else if (conlev == "99") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
        table61 = "<td>$"+ sizem3 +"$</td><td>$"+tinv(.20,sizem3).toFixed(3)+"$</td><td>$"+tinv(.10,sizem3).toFixed(3)+"$</td><td>$"+tinv(.05,sizem3).toFixed(3)+"$</td><td>$"+tinv(.025,sizem3).toFixed(3)+"$</td><td>$"+tinv(.01,sizem3).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem3).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table62 = "<td>$"+ sizem1 +"$</td><td>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"
    }

    var tablet = "<table><tr>"+table41+"</tr><tr style='border-top: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table61+"</tr><tr>"+table6+"</tr><tr>"+table62+"</tr></table>"
    
    document.getElementById("output").innerHTML = "$$ \\text{Point Estimate:} $$ $$ \\hat{y}_p = b_0 + b_1 x_p = "+parseFloat(ansint.toFixed(2))+" + "+parseFloat(ansslope.toFixed(2))+" (" + xvalue + ")  = {\\color{RoyalBlue}" + parseFloat(ans.toFixed(2)) + "} $$ $$ \\text{Standard Deviation:} $$ $$ \\begin{align} s_{\\hat{y}_p} &= s \\sqrt{ \\frac{1}{n} + \\frac{(x_p - \\bar{x})^2}{\\sum{(x-\\bar{x})^2}}} \\\\ &= "+parseFloat(anssee.toFixed(2))+" \\sqrt{ \\frac{1}{"+n_x+"} + \\frac{(" + xvalue + " - " + mean_x + ")^2}{"+sum_xminusx_bar2+"}}  = {\\color{RoyalBlue}" + parseFloat(ansans.toFixed(2)) + "} \\end{align} $$ $$ 1 - \\alpha = \\text{Confidence Coefficient} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = {\\color{RoyalBlue}"+ alphahalf.toFixed(3).replace(/^0+/, '') +"}$$ $$ \\text{Degrees of Freedom:} $$ $$ df = n - 2 = "+size+ " - 2 = {\\color{RoyalBlue}"+sizem2+"} $$"
    
    document.getElementById("output2").innerHTML = tablet + "$$ t_{\\alpha/2} = {\\color{RoyalBlue}"+talphahalf.toFixed(3)+"} $$ $$ " + conlev + "\\% \\text{ Confidence Interval:} $$ $$ \\hat{y}_p \\pm t_{\\alpha/2} s_{\\hat{y}_p} $$ $$" + parseFloat(ans.toFixed(2)) + "\\pm" + talphahalf.toFixed(3) + " ( "+parseFloat(ansans.toFixed(2))+") $$ $$"+parseFloat(ans.toFixed(2)) + "\\pm" +parseFloat(marginerror.toFixed(2)) + "$$ $$ \\boxed{" + parseFloat(anslow.toFixed(2)) + "\\text{ to }" + parseFloat(anshigh.toFixed(2)) + "} $$ $$ \\text{Interpretation:} $$ $$ "+conlev+"\\%  \\text{ confident } "+parseFloat(anslow.toFixed(2))+" \\leq E(y_p) \\leq "+parseFloat(anshigh.toFixed(2))+" $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a> "
        
    MathJax.typeset();
}

function predinterval() {
    $("#explanation").show(); $("#myCanvas").show(); $("#output2").show();
    document.getElementById("descriptiontext").innerHTML = "The estimated regression equation is used to predict the dependent variable (y) for a given value of the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$ \\hat{y}_p \\pm t_{\\alpha/2} s_{\\text{ind}} $ "
    document.getElementById("explanationtext").innerHTML = "The estimated regression equation is found by plugging in the values of the slope and intercept into the formula."
    var xvalue = document.getElementById("xpvalue").value;
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var conlev = document.getElementById("conlev").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var ans = ansint + ansslope * xvalue
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var size = n_x; var sizem1 = size - 1;  var sizem2 = size - 2; var sizem3 = size - 3;
    var talphahalf = tinv(alphahalf,sizem2);
    var exp = 2.71828;
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    var ansans = anssee * Math.sqrt(1 + 1/n_x + ((xvalue-mean_x)^2)/sum_xminusx_bar2)
    var marginerror = talphahalf * ansans
    var anslow = ans - marginerror; var anshigh = (parseFloat(ans)+marginerror);
    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))));
    }
    
    var c = document.getElementById("myCanvas");
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
    
    ctx.fillText(alphahalf.toFixed(3).replace(/^0+/, ''),246,105);


    ctx.fillText("t",285,132);
    ctx.fillText("t",228,145);
    ctx.fillText("α/2",232,147);
    //ctx.fillText("df = "+sizem1,220,40); 

    
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
    
    table41 = "<td colspan='7'>$\\text{Student's t-Distribution Table}$</td>"
    
    table4 = "<td></td><td colspan='6' style='border-bottom: thin solid;'>$\\text{Area in Upper Tail}$</td>"
    
    if (conlev == "90") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
        table61 = "<td>$"+ sizem3 +"$</td><td>$"+tinv(.20,sizem3).toFixed(3)+"$</td><td>$"+tinv(.10,sizem3).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem3).toFixed(3)+"$</td><td>$"+tinv(.025,sizem3).toFixed(3)+"$</td><td>$"+tinv(.01,sizem3).toFixed(3)+"$</td><td>$"+tinv(.005,sizem3).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table62 = "<td>$"+ sizem1 +"$</td><td>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"
    } else if (conlev == "95") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
        table61 = "<td>$"+ sizem3 +"$</td><td>$"+tinv(.20,sizem3).toFixed(3)+"$</td><td>$"+tinv(.10,sizem3).toFixed(3)+"$</td><td>$"+tinv(.05,sizem3).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem3).toFixed(3)+"$</td><td>$"+tinv(.01,sizem3).toFixed(3)+"$</td><td>$"+tinv(.005,sizem3).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table62 = "<td>$"+ sizem1 +"$</td><td>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"
    } else if (conlev == "99") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
        table61 = "<td>$"+ sizem3 +"$</td><td>$"+tinv(.20,sizem3).toFixed(3)+"$</td><td>$"+tinv(.10,sizem3).toFixed(3)+"$</td><td>$"+tinv(.05,sizem3).toFixed(3)+"$</td><td>$"+tinv(.025,sizem3).toFixed(3)+"$</td><td>$"+tinv(.01,sizem3).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem3).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table62 = "<td>$"+ sizem1 +"$</td><td>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"
    }
    
    var tablet = "<table><tr>"+table41+"</tr><tr style='border-top: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table61+"</tr><tr>"+table6+"</tr><tr>"+table62+"</tr></table>"
    
    document.getElementById("output").innerHTML = "$$ \\text{Point Estimate:} $$ $$ \\hat{y}_p = b_0 + b_1 x_p = "+parseFloat(ansint.toFixed(2))+" + "+parseFloat(ansslope.toFixed(2))+" (" + xvalue + ")  = {\\color{RoyalBlue}" + parseFloat(ans.toFixed(2)) + "} $$ $$ \\text{Standard Deviation:} $$ $$ \\begin{align} s_{\\text{ind}} &= s \\sqrt{1 + \\frac{1}{n} + \\frac{(x_p - \\bar{x})^2}{\\sum{(x-\\bar{x})^2}}} \\\\ &= "+parseFloat(anssee.toFixed(2))+" \\sqrt{1 + \\frac{1}{"+n_x+"} + \\frac{(" + xvalue + " - " + mean_x + ")^2}{"+sum_xminusx_bar2+"}} = {\\color{RoyalBlue}" + parseFloat(ansans.toFixed(2)) + "} \\end{align} $$ $$ 1 - \\alpha = \\text{Confidence Coefficient} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = {\\color{RoyalBlue}"+ alphahalf.toFixed(3).replace(/^0+/, '') +"} $$ $$ \\text{Degrees of Freedom:} $$ $$ df = n - 2 = "+size+ " - 2 = {\\color{RoyalBlue}"+sizem2+"}   $$"
    
    document.getElementById("output2").innerHTML = tablet + "$$ t_{\\alpha/2} = {\\color{RoyalBlue}"+talphahalf.toFixed(3)+"} $$ $$ " + conlev + "\\% \\text{ Prediction Interval:} $$ $$ \\hat{y}_p \\pm t_{\\alpha/2} s_{\\text{ind}} $$ $$" + parseFloat(ans.toFixed(2)) + "\\pm" + talphahalf.toFixed(3) + " ( "+parseFloat(ansans.toFixed(2))+") $$ $$"+parseFloat(ans.toFixed(2)) + "\\pm" +parseFloat(marginerror.toFixed(2)) + "$$ $$ \\boxed{" + parseFloat(anslow.toFixed(2)) + "\\text{ to }" + parseFloat(anshigh.toFixed(2)) + "} $$ $$ \\text{Interpretation:} $$ $$ "+conlev+"\\%  \\text{ confident } "+parseFloat(anslow.toFixed(2))+" \\leq \\hat{y}_p \\leq "+parseFloat(anshigh.toFixed(2))+" $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function resplot() {
    var x = document.getElementById("residtypeval").value
    if (x == "againstx") {
        resplotx()
    } else if (x == "againsty") {
        resploty()
    }
}

function resplotx(){
    $("#explanation").show(); $("#charts").show(); $("#output3").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$ \\text{Residual} = y - \\hat{y}$"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var interpret = ""
    if (ansslope > 0){
        var signslope = "+"
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var signslope = "-"
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$\\hat{y}$" + "</td>" + "<td>" + "$ y - \\hat{y} $" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6; var residuals = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2))  + " $</td>";
        table += "<td>$" + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "</tr>";
        residuals[r] = parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))
    }
    
    //" + y[r] + " - " + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2)) + " = 
    
    
    document.getElementById("output").innerHTML = "$$ \\hat{y} = "+parseFloat(ansint.toFixed(2)) + signslope + parseFloat(Math.abs(ansslope).toFixed(2))+"x $$"+table + "</table>"
    
    document.getElementById("output3").innerHTML = "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
    
    
    
    var eachnums = x.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = residuals.map(function(v) {
  		return parseFloat(v);
    });

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'x'},
          vAxis: {title: 'y-ŷ'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function resploty(){
    $("#explanation").show(); $("#charts").show(); $("#output3").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$\\text{Residual} = y - \\hat{y}$"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var interpret = ""
    if (ansslope > 0){
        var signslope = "+"
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var signslope = "-"
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$\\hat{y}$" + "</td>" + "<td>" + "$ y - \\hat{y} $" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6; var residuals = []; var predictedy = [];
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2))  + " $</td>";
        table += "<td>$" + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "</tr>";
        residuals[r] = parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))
        predictedy[r] = parseFloat(((parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))
    }
    
    //" + y[r] + " - " + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2)) + " = 
    
    document.getElementById("output").innerHTML = "$$ \\hat{y} = "+parseFloat(ansint.toFixed(2)) + signslope + parseFloat(Math.abs(ansslope).toFixed(2))+"x $$"+table + "</table>"
    
    document.getElementById("output3").innerHTML = "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
    
    
    
    var eachnums = predictedy.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = residuals.map(function(v) {
  		return parseFloat(v);
    });

    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'ŷ'},
          vAxis: {title: 'y-ŷ'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function standardized() {
    var x = document.getElementById("residtypeval").value
    if (x == "againstx") {
        standardizedx()
    } else if (x == "againsty") {
        standardizedy()
    }
}

function standardizedx(){
    $("#explanation").show(); $("#charts").show(); $("#output3").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$\\text{Standardized Residual} = \\dfrac{y - \\hat{y}}{s_{y - \\hat{y}}}$"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length; var size = n_x
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table><tr style='border-bottom: thin solid'><td><br>$x$</td><td><br>$x-\\bar{x}$</td><td><br>$(x-\\bar{x})^2$</td><td>$\\dfrac{(x-\\bar{x})^2}{\\sum (x-\\bar{x})^2}$</td><td><br>$h$</td><td><br>$s_{y - \\hat{y}}$</td><td><br>$y - \\hat{y}$</td><td>$\\text{Standardized}$<br>$\\text{Residuals}$</td></tr>";
    var rows = n_x; var cols = 6; var residuals = []; var standres = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + (x[r]-mean_x) + "$</td>";
        table += "<td>$" + (x[r]-mean_x)*(x[r]-mean_x) + "$</td>";
        table += "<td>$" + (x[r]-mean_x)*(x[r]-mean_x)/sum_xminusx_bar2 + "$</td>";
        table += "<td>$" + parseFloat((1/size + (x[r]-mean_x)*(x[r]-mean_x)/sum_xminusx_bar2).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "<td>$ " + parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))  + " $</td>";
        table += "</tr>";
        residuals[r] = parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))
        standres[r] = parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))
    }
    
    //\\dfrac{"+parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))+"}{"+parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2))+"} = 
    
    document.getElementById("output").innerHTML = "$$ \\bar{x} = "+parseFloat(mean_x.toFixed(2))+" $$" + table + "</table>"
    
    document.getElementById("output3").innerHTML = "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
    
    
    
    var eachnums = x.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = standres.map(function(v) {
  		return parseFloat(v);
    });

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'x'},
          vAxis: {title: 'Standardized Residuals'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function standardizedy(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$\\text{Standardized Residual} = \\dfrac{y - \\hat{y}}{s_{y - \\hat{y}}}$"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length; var size = n_x
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table><tr style='border-bottom: thin solid'><td><br>$x$</td><td><br>$x-\\bar{x}$</td><td><br>$(x-\\bar{x})^2$</td><td>$\\dfrac{(x-\\bar{x})^2}{\\sum (x-\\bar{x})^2}$</td><td><br>$h$</td><td><br>$s_{y - \\hat{y}}$</td><td><br>$y - \\hat{y}$</td><td>$\\text{Standardized}$<br>$\\text{Residuals}$</td></tr>";
    var rows = n_x; var cols = 6; var predictedy = []; var standres = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + (x[r]-mean_x) + "$</td>";
        table += "<td>$" + (x[r]-mean_x)*(x[r]-mean_x) + "$</td>";
        table += "<td>$" + (x[r]-mean_x)*(x[r]-mean_x)/sum_xminusx_bar2 + "$</td>";
        table += "<td>$" + parseFloat((1/size + (x[r]-mean_x)*(x[r]-mean_x)/sum_xminusx_bar2).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "<td>$" + parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))  + " $</td>";
        table += "</tr>";
        predictedy[r] = parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2))
        standres[r] = parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))
    }
    document.getElementById("output").innerHTML = "$$ \\bar{x} = "+parseFloat(mean_x.toFixed(2))+" $$" + table + "</table>"
    
    document.getElementById("output3").innerHTML = "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
    
    
    
    var eachnums = predictedy.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = standres.map(function(v) {
  		return parseFloat(v);
    });

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'ŷ'},
          vAxis: {title: 'Standardized Residuals'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function standardizedxx(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$\\hat{y} = b_{0} + b_{1} x$"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table style='margin-bottom:15px'>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$x - \\bar{x}$" + "</td>" +"<td>" + "$(x - \\bar{x})^2$" + "</td>"+"<td>" + "$\\dfrac{(x - \\bar{x})^2}{\\sum(x - \\bar{x})^2}$" + "</td>"+"<td>" + "$h$" + "</td>" + "<td>" + "$s_{y - \\hat{y}}$" + "</td>" + "<td>" + "$y - \\hat{y}$" + "</td>"+ "<td>" + "$\\text{Standardized}$<br>$\\text{Residuals}$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6; var residuals = []; var standres = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar2[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((xminusx_bar2[r]/sum_xminusx_bar2).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((1/n_x + xminusx_bar2[r]/sum_xminusx_bar2).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "<td>$" + parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))  + " $</td>";
        table += "</tr>";
        residuals[r] = parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))
        standres[r] = parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))
    }
    document.getElementById("output").innerHTML = table + "</table>"
    
    MathJax.typeset();
    
    
    
    var eachnums = x.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = standres.map(function(v) {
  		return parseFloat(v);
    });

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'x'},
          vAxis: {title: 'Standardized Residuals'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function standardizedyy(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$\\hat{y} = b_{0} + b_{1} x$"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table style='margin-bottom:15px'>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$x - \\bar{x}$" + "</td>" +"<td>" + "$(x - \\bar{x})^2$" + "</td>"+"<td>" + "$\\dfrac{(x - \\bar{x})^2}{\\sum(x - \\bar{x})^2}$" + "</td>"+"<td>" + "$h$" + "</td>" + "<td>" + "$s_{y - \\hat{y}}$" + "</td>" + "<td>" + "$y - \\hat{y}$" + "</td>"+ "<td>" + "$\\text{Standardized}$<br>$\\text{Residuals}$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6; var predictedy = []; var standres = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar2[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((xminusx_bar2[r]/sum_xminusx_bar2).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((1/n_x + xminusx_bar2[r]/sum_xminusx_bar2).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "<td>$" + parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))  + " $</td>";
        table += "</tr>";
        predictedy[r] = parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2))
        standres[r] = parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))
    }
    document.getElementById("output").innerHTML = table + "</table>"
    
    MathJax.typeset();
    
    
    
    var eachnums = predictedy.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = standres.map(function(v) {
  		return parseFloat(v);
    });

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'ŷ'},
          vAxis: {title: 'Standardized Residuals'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function leverage(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$ h = \\dfrac{1}{n} + \\dfrac{(x - \\bar{x})^2}{\\sum(x - \\bar{x})^2} $"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table><tr style='border-bottom: thin solid'><td><br>$x$</td><td><br>$x - \\bar{x}$</td><td><br>$(x - \\bar{x})^2$</td><td>$\\dfrac{(x-\\bar{x})^2}{\\sum (x-\\bar{x})^2}$</td><td><br>$ h $</td></tr>";
    var rows = n_x; var cols = 6; var residuals = []; var standres = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar2[r].toFixed(2)) + "$</td>";
        table += "<td>$" + (x[r]-mean_x)*(x[r]-mean_x)/sum_xminusx_bar2 + "$</td>";
        table += "<td>$" + parseFloat((1/n_x + xminusx_bar2[r]/sum_xminusx_bar2).toFixed(2)) + " $</td>";
    }
    
    //\\dfrac{1}{"+n_x+"}+\\dfrac{"+parseFloat(xminusx_bar[r].toFixed(2))+"}{"+parseFloat(xminusx_bar2[r].toFixed(2))+"}=
    
    document.getElementById("output").innerHTML = "$$ \\bar{x} = "+parseFloat(mean_x.toFixed(2))+" $$" + table + "</table> <br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();

}

function examplevalues(){
    var x = document.getElementById("stat").value;
    document.getElementById('valuesx').value="2, 4, 6, 8, 10"
    document.getElementById('valuesy').value="9, 14, 7, 18, 27"
    if (x == "prediction") {
        document.getElementById('xvalue').value="5"
    } else if (x == "confinterval" || x == "predinterval") {
        document.getElementById('xpvalue').value="5"
    } 
}

function examplevalues2(){
    var x = document.getElementById("stat").value;
    document.getElementById('valuesx').value="4, 12, 8, 16, 10"
    document.getElementById('valuesy').value="45, 35, 45, 15, 25"
    if (x == "prediction") {
        document.getElementById('xvalue').value="14"
    } else if (x == "confinterval" || x == "predinterval") {
        document.getElementById('xpvalue').value="14"
    } 
}

