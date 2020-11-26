$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#expconf").hide();
$("#switchconfidence").hide(); $("#switchhypothesis").show();
$("#samplesize").hide(); $("#confidence").show();
$("#hypothesis").hide(); $("#confidence").show();
$("#greater").hide(); $("#notequal").hide(); $("#explanation").hide();

$(function () {
            $('[data-toggle="tooltip"]').tooltip()
    })

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

function toFixing(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

function showvals(){
    $("#values").show(); 
    $("#statistics").hide();
    $("#entervals").hide();
    $("#enterstats").show();
    
}

function showstats(){
    $("#values").hide(); 
    $("#statistics").show();
    $("#entervals").show();
    $("#enterstats").hide();
}





















function LogGamma(Z) {
	with (Math) {
		var S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
		var LG= (Z-.5)*log(Z+4.5)-(Z+4.5)+log(S*2.50662827465);
	}
	return LG
}

function Gcf(X,A) {        // Good for X>A+1
	with (Math) {
		var A0=0;
		var B0=1;
		var A1=1;
		var B1=X;
		var AOLD=0;
		var N=0;
		while (abs((A1-AOLD)/A1)>.00001) {
			AOLD=A1;
			N=N+1;
			A0=A1+(N-A)*A0;
			B0=B1+(N-A)*B0;
			A1=X*A0+N*A1;
			B1=X*B0+N*B1;
			A0=A0/B1;
			B0=B0/B1;
			A1=A1/B1;
			B1=1;
		}
		var Prob=exp(A*log(X)-X-LogGamma(A))*A1;
	}
	return 1-Prob
}

function Gser(X,A) {        // Good for X<A+1.
    with (Math) {
		var T9=1/A;
		var G=T9;
		var I=1;
		while (T9>G*.00001) {
			T9=T9*X/(A+I);
			G=G+T9;
			I=I+1;
		}
		G=G*exp(A*log(X)-X-LogGamma(A));
    }
    return G
}

function Gammacdf(x,a) {
	var GI;
	if (x<=0) {
		GI=0
	} else if (x<a+1) {
		GI=Gser(x,a)
	} else {
		GI=Gcf(x,a)
	}
	return GI
}

function compute(form) {
    Z=eval(form.argument.value)
    DF=eval(form.df.value)
	if (DF<=0) {
		alert("Degrees of freedom must be positive")
	} else {
		Chisqcdf=Gammacdf(Z/2,DF/2)
	}
	Chisqcdf=Math.round(Chisqcdf*100000)/100000;
    form.result.value = Chisqcdf;
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
    var x = document.getElementById("samplestat").value;
    if (x == "standard"){
        conint1()
    } else if (x == "variance"){
        conint2()
    } 
}


function conint1(){
    $("#explanation").hide();
    $("#expconf").hide();
    
    var chi1 = [.000, .001, .004, 3.841, 5.024, 7.879]
    var chi2 = [.010, .051, .103, 5.991, 7.378, 10.597]
    var chi3 = [.072, .216, .352, 7.815, 9.348, 12.838]
    var chi4 = [.207, .484, .711, 9.488, 11.143, 14.860]
    var chi5 = [.412, .831, 1.145, 11.070, 12.832, 16.750]
    var chi6 = [.676, 1.237, 1.635, 12.592, 14.449, 18.548]
    var chi7 = [.989, 1.690, 2.167, 14.067, 16.013, 20.278]
    var chi8 = [1.344, 2.180, 2.733, 15.507, 17.535, 21.955]
    var chi9 = [1.735, 2.700, 3.325, 16.919, 19.023, 23.589]
    var chi10 = [2.156, 3.247, 3.940, 18.307, 20.483, 25.188]
    var chi11 = [2.603, 3.816, 4.575, 19.675, 21.920, 26.757]
    var chi12 = [3.074, 4.404, 5.226, 21.026, 23.337, 26.757]
    var chi13 = [3.565, 5.009, 5.892, 22.362, 24.736, 29.819]
    var chi14 = [4.075, 5.629, 6.571, 23.685, 26.119, 31.319]
    var chi15 = [4.601, 6.262, 7.261, 24.996, 27.448, 32.801]
    var chi16 = [5.142, 6.908, 7.962, 26.296, 28.845, 34.267]
    var chi17 = [5.687, 7.564, 8.672, 27.587, 30.191, 35.718]
    var chi18 = [6.265, 8.231, 9.390, 28.869, 31.526, 37.156]
    var chi19 = [6.844, 8.907, 10.117, 30.144, 32.852, 38.582]
    var chi20 = [7.434, 9.591, 10.851, 31.410, 34.170, 39.997]
    var chi21 = [8.034, 10.283, 11.591, 32.671, 35.479, 41.401]
    var chi22 = [8.643, 10.982, 12.338, 33.924, 36.781, 42.796]
    var chi23 = [9.260, 11.689, 13.091, 35.172, 38.076, 44.181]
    var chi24 = [9.886, 12.401, 13.848, 36.415, 39.364, 45.558]
    var chi25 = [10.520, 13.120, 14.611, 37.652, 40.646, 46.928]
    var chi26 = [11.160, 13.844, 15.379, 38.885, 41.923, 48.928]
    var chi27 = [11.808, 14.573, 16.151, 40.113, 43.195, 49.645]
    var chi28 = [12.461, 15.308, 16.928, 41.337, 44.461, 50.994]
    var chi29 = [13.121, 16.047, 17.708, 42.557, 45.722, 52.335]
    var chi30 = [13.787, 16.791, 18.493, 43.773, 46.979, 53.672]
    var chi35 = [17.192, 20.569, 22.465, 49.802, 53.203, 60.275]
    var chi40 = [20.707, 24.433, 26.509, 55.758, 59.342, 66.766]
    var chi45 = [24.311, 28.366, 30.612, 61.656, 65.410, 73.166]
    var chi50 = [27.991, 32.357, 34.764, 67.505, 71.420, 79.490]
    var chi55 = [31.735, 36.398, 38.958, 73.311, 77.380, 85.749]
    var chi60 = [35.543, 40.482, 43.188, 79.082, 83.298, 91.942]
    var chi65 = [39.383, 44.603, 47.450, 84.821, 89.177, 98.105]
    var chi70 = [43.275, 48.758, 51.739, 90.531, 95.023, 104.215]
    var chi75 = [47.206, 52.942, 56.054, 96.217, 100.839, 110.285]
    var chi80 = [51.172, 57.153, 60.391, 101.879, 106.629, 116.321]
    var chi85 = [55.170, 61.389, 64.749, 107.522, 112.393, 122.342]
    var chi90 = [59.196, 65.647, 69.126, 113.145, 118.136, 128.299]
    var chi95 = [63.250, 69.925, 63.520, 118.752, 123.858, 134.247]
    var chi100 = [67.328, 74.222, 77.929, 124.342, 129.561, 140.170]
    
    var chi = [0, chi1, chi2, chi3, chi4, chi5, chi6, chi7, chi8, chi9, chi10, chi11, chi12, chi13, chi14, chi15, chi16, chi17, chi18, chi19, chi20, chi21, chi22, chi23, chi24, chi25, chi26, chi27, chi28, chi29, chi30, chi30, chi30, chi30, chi30, chi35, chi35, chi35, chi35, chi35, chi40, chi40, chi40, chi40, chi40, chi45, chi45, chi45, chi45, chi45, chi50, chi50, chi50, chi50, chi50, chi55, chi55, chi55, chi55, chi55, chi60, chi60, chi60, chi60, chi60, chi65, chi65, chi65, chi65, chi65, chi70, chi70, chi70, chi70, chi70, chi75, chi75, chi75, chi75, chi75, chi80, chi80, chi80, chi80, chi80, chi85, chi85, chi85, chi85, chi85, chi90, chi90, chi90, chi90, chi90, chi95, chi95, chi95, chi95, chi95, chi100]
    
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var stdev = document.getElementById("samplestatval").value;
    var conlev = document.getElementById("conlev").value;
    var confor = "variance"
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    
    chidf = chi[sizem1]
    
    if (conlev == 99) {
        lowindex = 0
        highindex = 5
    } else if (conlev == 95) {
        lowindex = 1
        highindex = 4
    } else if (conlev == 90) {
        lowindex = 2
        highindex = 3
    }
    
    var anslow = (sizem1*(stdev*stdev))/chidf[highindex]
    var anshigh = (sizem1*(stdev*stdev))/chidf[lowindex]
    
    if (confor == "variance") {
        document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that a population parameter, such as the population mean, is likely to be in."
        document.getElementById("formulatext").innerHTML = "$$ \\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} $$"
        document.getElementById("explanationtext").innerHTML = "Choosing a higher confidence level will increase the size of the confidence interval since a larger range of values is more likely to contain the population parameter."
        
        document.getElementById("output1").innerHTML = " $$  df = n - 1 = "+size+ " - 1 = "+sizem1+"  $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3).replace(/^0+/, '') +"$$ $$ 1 - \\alpha / 2 = 1 - " + alphahalf.toFixed(3).replace(/^0+/, '') + " = "+(1-alphahalf).toFixed(3).replace(/^0+/, '')+ " $$  "
    } else if (confor == "standard") {
        document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that a population parameter, such as the population mean, is likely to be in."
        document.getElementById("formulatext").innerHTML = "$$ \\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} $$"
        document.getElementById("explanationtext").innerHTML = "Choosing a higher confidence level will increase the size of the confidence interval since a larger range of values is more likely to contain the population parameter."
        
        document.getElementById("output1").innerHTML = "$$ \\sqrt{\\frac{(n-1)s^2}{\\chi_{\\alpha/2}^2}} \\leq \\sigma \\leq \\sqrt{\\frac{(n-1)s^2}{\\chi_{(1-\\alpha/2)}^2}} $$ $$ df &= n - 1 = "+size+ " - 1 = "+sizem1+" $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3).replace(/^0+/, '') +"$$ $$ 1 - \\alpha / 2 = 1 - " + alphahalf.toFixed(3).replace(/^0+/, '') + " = "+(1-alphahalf).toFixed(3).replace(/^0+/, '')+ " $$  $$ \\sqrt{\\frac{("+size+"-1)"+stdev+"^2}{\\chi_{" + alphahalf.toFixed(3).replace(/^0+/, '') + "}^2}} \\leq \\sigma \\leq \\sqrt{\\frac{("+size+"-1)"+stdev+"^2}{\\chi_{" + (1-alphahalf).toFixed(3).replace(/^0+/, '') + "}^2}} $$ "
    } 

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);

    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.quadraticCurveTo(50, 100, 53, 90);
    ctx.lineTo(53, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();

    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(210, 130);
    ctx.lineTo(210, 108);
    ctx.quadraticCurveTo(265, 120, 265, 120);
    ctx.lineTo(265, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();

    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.bezierCurveTo(80, 80, 60, 20, 100, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(100, 20);
    ctx.bezierCurveTo(140, 20, 120, 100, 265, 120);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 5);
    ctx.lineTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.stroke();
    
    ctx.fillText("χ²",285,132);
    ctx.fillText("χ²",207,145);
    ctx.fillText(alphahalf.toFixed(3).replace(/^0+/, ''),214,149);
    ctx.fillText("χ²",50,145);
    ctx.fillText((1-alphahalf).toFixed(3).replace(/^0+/, ''),57,149);
    
    ctx.fillText(alphahalf.toFixed(3).replace(/^0+/, ''),25,95);
    ctx.fillText(alphahalf.toFixed(3).replace(/^0+/, ''),230,108);
    
    ctx.beginPath();
    ctx.moveTo(53, 135);
    ctx.lineTo(53, 125);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(210, 135);
    ctx.lineTo(210, 125);
    ctx.stroke();

    table1 = "<td></td><td colspan='6'>$\\text{Area in Upper Tail}$</td>"
    
    table2 = "<td>$df$</td><td>$.995$</td><td>$.975$</td><td>$.95$</td><td>$.05$</td><td>$.025$</td><td>$.005$</td>"
    
    table3 = "<td>$"+ sizem1 +"$</td><td>$"+chidf[0]+"$</td><td>$"+chidf[1]+"$</td><td>$"+chidf[2]+"$</td><td>$"+chidf[3]+"$</td><td>$"+chidf[4]+"$</td><td>$"+chidf[5].toFixed(3)+"$</td>"
    
    
    var table = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table3+"</tr></table>"

    if (confor == "variance") {
        document.getElementById("output2").innerHTML = "<br>" + table + " $$ \\chi_{" + alphahalf.toFixed(3).replace(/^0+/, '') + "}^2 = " + chidf[highindex] + ", \\: \\chi_{" + (1-alphahalf).toFixed(3).replace(/^0+/, '') + "}^2 = " + chidf[lowindex] + "  $$ $$ \\frac{("+size+"-1)"+stdev+"^2}{" + chidf[highindex] + "} \\leq \\sigma^2 \\leq \\frac{("+size+"-1)"+stdev+"^2}{" + chidf[lowindex] + "} $$ $$ \\boxed{"+parseFloat(anslow.toFixed(2))+" \\leq \\sigma^2 \\leq " + parseFloat(anshigh.toFixed(2)) + "} $$"
    } else if (confor == "standard") {
        document.getElementById("output2").innerHTML = "<br>" + table + " $$ \\chi_{" + alphahalf.toFixed(3).replace(/^0+/, '') + "}^2 = " + chidf[highindex] + ", \\: \\chi_{" + (1-alphahalf).toFixed(3).replace(/^0+/, '') + "}^2 = " + chidf[lowindex] + " $$ "
    } 
    
    MathJax.typeset();
}

function conint2(){
    $("#explanation").hide();
    $("#expconf").hide();
    
    var chi1 = [.000, .001, .004, 3.841, 5.024, 7.879]
    var chi2 = [.010, .051, .103, 5.991, 7.378, 10.597]
    var chi3 = [.072, .216, .352, 7.815, 9.348, 12.838]
    var chi4 = [.207, .484, .711, 9.488, 11.143, 14.860]
    var chi5 = [.412, .831, 1.145, 11.070, 12.832, 16.750]
    var chi6 = [.676, 1.237, 1.635, 12.592, 14.449, 18.548]
    var chi7 = [.989, 1.690, 2.167, 14.067, 16.013, 20.278]
    var chi8 = [1.344, 2.180, 2.733, 15.507, 17.535, 21.955]
    var chi9 = [1.735, 2.700, 3.325, 16.919, 19.023, 23.589]
    var chi10 = [2.156, 3.247, 3.940, 18.307, 20.483, 25.188]
    var chi11 = [2.603, 3.816, 4.575, 19.675, 21.920, 26.757]
    var chi12 = [3.074, 4.404, 5.226, 21.026, 23.337, 26.757]
    var chi13 = [3.565, 5.009, 5.892, 22.362, 24.736, 29.819]
    var chi14 = [4.075, 5.629, 6.571, 23.685, 26.119, 31.319]
    var chi15 = [4.601, 6.262, 7.261, 24.996, 27.448, 32.801]
    var chi16 = [5.142, 6.908, 7.962, 26.296, 28.845, 34.267]
    var chi17 = [5.687, 7.564, 8.672, 27.587, 30.191, 35.718]
    var chi18 = [6.265, 8.231, 9.390, 28.869, 31.526, 37.156]
    var chi19 = [6.844, 8.907, 10.117, 30.144, 32.852, 38.582]
    var chi20 = [7.434, 9.591, 10.851, 31.410, 34.170, 39.997]
    var chi21 = [8.034, 10.283, 11.591, 32.671, 35.479, 41.401]
    var chi22 = [8.643, 10.982, 12.338, 33.924, 36.781, 42.796]
    var chi23 = [9.260, 11.689, 13.091, 35.172, 38.076, 44.181]
    var chi24 = [9.886, 12.401, 13.848, 36.415, 39.364, 45.558]
    var chi25 = [10.520, 13.120, 14.611, 37.652, 40.646, 46.928]
    var chi26 = [11.160, 13.844, 15.379, 38.885, 41.923, 48.928]
    var chi27 = [11.808, 14.573, 16.151, 40.113, 43.195, 49.645]
    var chi28 = [12.461, 15.308, 16.928, 41.337, 44.461, 50.994]
    var chi29 = [13.121, 16.047, 17.708, 42.557, 45.722, 52.335]
    var chi30 = [13.787, 16.791, 18.493, 43.773, 46.979, 53.672]
    var chi35 = [17.192, 20.569, 22.465, 49.802, 53.203, 60.275]
    var chi40 = [20.707, 24.433, 26.509, 55.758, 59.342, 66.766]
    var chi45 = [24.311, 28.366, 30.612, 61.656, 65.410, 73.166]
    var chi50 = [27.991, 32.357, 34.764, 67.505, 71.420, 79.490]
    var chi55 = [31.735, 36.398, 38.958, 73.311, 77.380, 85.749]
    var chi60 = [35.543, 40.482, 43.188, 79.082, 83.298, 91.942]
    var chi65 = [39.383, 44.603, 47.450, 84.821, 89.177, 98.105]
    var chi70 = [43.275, 48.758, 51.739, 90.531, 95.023, 104.215]
    var chi75 = [47.206, 52.942, 56.054, 96.217, 100.839, 110.285]
    var chi80 = [51.172, 57.153, 60.391, 101.879, 106.629, 116.321]
    var chi85 = [55.170, 61.389, 64.749, 107.522, 112.393, 122.342]
    var chi90 = [59.196, 65.647, 69.126, 113.145, 118.136, 128.299]
    var chi95 = [63.250, 69.925, 63.520, 118.752, 123.858, 134.247]
    var chi100 = [67.328, 74.222, 77.929, 124.342, 129.561, 140.170]
    
    var chi = [0, chi1, chi2, chi3, chi4, chi5, chi6, chi7, chi8, chi9, chi10, chi11, chi12, chi13, chi14, chi15, chi16, chi17, chi18, chi19, chi20, chi21, chi22, chi23, chi24, chi25, chi26, chi27, chi28, chi29, chi30, chi30, chi30, chi30, chi30, chi35, chi35, chi35, chi35, chi35, chi40, chi40, chi40, chi40, chi40, chi45, chi45, chi45, chi45, chi45, chi50, chi50, chi50, chi50, chi50, chi55, chi55, chi55, chi55, chi55, chi60, chi60, chi60, chi60, chi60, chi65, chi65, chi65, chi65, chi65, chi70, chi70, chi70, chi70, chi70, chi75, chi75, chi75, chi75, chi75, chi80, chi80, chi80, chi80, chi80, chi85, chi85, chi85, chi85, chi85, chi90, chi90, chi90, chi90, chi90, chi95, chi95, chi95, chi95, chi95, chi100]
    
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var stdev = document.getElementById("samplestatval").value;
    var conlev = document.getElementById("conlev").value;
    var confor = "variance"
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    
    chidf = chi[sizem1]
    
    if (conlev == 99) {
        lowindex = 0
        highindex = 5
    } else if (conlev == 95) {
        lowindex = 1
        highindex = 4
    } else if (conlev == 90) {
        lowindex = 2
        highindex = 3
    }
    
    var anslow = (sizem1*stdev)/chidf[highindex]
    var anshigh = (sizem1*stdev)/chidf[lowindex]
    
    if (confor == "variance") {
        document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that a population parameter, such as the population mean, is likely to be in."
        document.getElementById("formulatext").innerHTML = "$$ \\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} $$"
        document.getElementById("explanationtext").innerHTML = "Choosing a higher confidence level will increase the size of the confidence interval since a larger range of values is more likely to contain the population parameter."
        
        document.getElementById("output1").innerHTML = " $$ df = n - 1 = "+size+ " - 1 = "+sizem1+" $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3).replace(/^0+/, '') +"$$ $$ 1 - \\alpha / 2 = 1 - " + alphahalf.toFixed(3).replace(/^0+/, '') + " = "+(1-alphahalf).toFixed(3).replace(/^0+/, '')+ " $$  "
    } else if (confor == "standard") {
        document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that a population parameter, such as the population mean, is likely to be in."
        document.getElementById("formulatext").innerHTML = "$$ \\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} $$"
        document.getElementById("explanationtext").innerHTML = "Choosing a higher confidence level will increase the size of the confidence interval since a larger range of values is more likely to contain the population parameter."
        
        document.getElementById("output1").innerHTML = "$$ \\sqrt{\\frac{(n-1)s^2}{\\chi_{\\alpha/2}^2}} \\leq \\sigma \\leq \\sqrt{\\frac{(n-1)s^2}{\\chi_{(1-\\alpha/2)}^2}} $$ $$ df = n - 1 = "+size+ " - 1 = "+sizem1+" $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3).replace(/^0+/, '') +"$$ $$ 1 - \\alpha / 2 = 1 - " + alphahalf.toFixed(3).replace(/^0+/, '') + " = "+(1-alphahalf).toFixed(3).replace(/^0+/, '')+ " $$  $$ \\sqrt{\\frac{("+size+"-1)"+stdev+"}{\\chi_{" + alphahalf.toFixed(3).replace(/^0+/, '') + "}^2}} \\leq \\sigma \\leq \\sqrt{\\frac{("+size+"-1)"+stdev+"}{\\chi_{" + (1-alphahalf).toFixed(3).replace(/^0+/, '') + "}^2}} $$ "
    } 
    
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);

    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.quadraticCurveTo(50, 100, 53, 90);
    ctx.lineTo(53, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();

    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(210, 130);
    ctx.lineTo(210, 108);
    ctx.quadraticCurveTo(265, 120, 265, 120);
    ctx.lineTo(265, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();

    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.bezierCurveTo(80, 80, 60, 20, 100, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(100, 20);
    ctx.bezierCurveTo(140, 20, 120, 100, 265, 120);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 5);
    ctx.lineTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.stroke();
    
    ctx.fillText("χ²",285,132);
    ctx.fillText("χ²",207,145);
    ctx.fillText(alphahalf.toFixed(3).replace(/^0+/, ''),214,149);
    ctx.fillText("χ²",50,145);
    ctx.fillText((1-alphahalf).toFixed(3).replace(/^0+/, ''),57,149);
    
    ctx.fillText(alphahalf.toFixed(3).replace(/^0+/, ''),25,95);
    ctx.fillText(alphahalf.toFixed(3).replace(/^0+/, ''),230,108);
    
    ctx.beginPath();
    ctx.moveTo(53, 135);
    ctx.lineTo(53, 125);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(210, 135);
    ctx.lineTo(210, 125);
    ctx.stroke();
    
    table1 = "<td></td><td colspan='6'>$\\text{Area in Upper Tail}$</td>"
    
    table2 = "<td>$df$</td><td>$.995$</td><td>$.975$</td><td>$.95$</td><td>$.05$</td><td>$.025$</td><td>$.005$</td>"
    
    table3 = "<td>$"+ sizem1 +"$</td><td>$"+chidf[0]+"$</td><td>$"+chidf[1]+"$</td><td>$"+chidf[2]+"$</td><td>$"+chidf[3]+"$</td><td>$"+chidf[4]+"$</td><td>"+chidf[5].toFixed(3)+"</td>"
    
    var table = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table3+"</tr></table>"
    
    if (confor == "variance") {
        document.getElementById("output2").innerHTML = "<br>" + table + " $$ \\chi_{" + alphahalf.toFixed(3).replace(/^0+/, '') + "}^2 = " + chidf[highindex] + ", \\: \\chi_{" + (1-alphahalf).toFixed(3).replace(/^0+/, '') + "}^2 = " + chidf[lowindex] + "  $$ $$ \\frac{("+size+"-1)"+stdev+"}{" + chidf[highindex] + "} \\leq \\sigma^2 \\leq \\frac{("+size+"-1)"+stdev+"}{" + chidf[lowindex] + "} $$ $$ \\boxed{"+parseFloat(anslow.toFixed(2))+" \\leq \\sigma^2 \\leq " + parseFloat(anshigh.toFixed(2)) + "} $$ "
    } else if (confor == "standard") {
        document.getElementById("output2").innerHTML = "<br>" + table + " $$ \\chi_{" + alphahalf.toFixed(3).replace(/^0+/, '') + "}^2 = " + chidf[highindex] + ", \\: \\chi_{" + (1-alphahalf).toFixed(3).replace(/^0+/, '') + "}^2 = " + chidf[lowindex] + " $$ $$ \\sqrt{\\frac{("+size+"-1)"+stdev+"}{" + chidf[highindex] + "}} \\leq \\sigma \\leq \\sqrt{\\frac{("+size+"-1)"+stdev+"}{" + chidf[lowindex] + "}} $$ $$ \\boxed{"+parseFloat(Math.sqrt(anslow).toFixed(2))+" \\leq \\sigma \\leq " + parseFloat(Math.sqrt(anshigh).toFixed(2)) + "} $$"
    } 
    
    MathJax.typeset();
}






























function hyp(){
    $("#explanation").hide();
    $("#expconf").hide();
    
    var chi1 = [.000, .001, .004, 3.841, 5.024, 7.879]
    var chi2 = [.010, .051, .103, 5.991, 7.378, 10.597]
    var chi3 = [.072, .216, .352, 7.815, 9.348, 12.838]
    var chi4 = [.207, .484, .711, 9.488, 11.143, 14.860]
    var chi5 = [.412, .831, 1.145, 11.070, 12.832, 16.750]
    var chi6 = [.676, 1.237, 1.635, 12.592, 14.449, 18.548]
    var chi7 = [.989, 1.690, 2.167, 14.067, 16.013, 20.278]
    var chi8 = [1.344, 2.180, 2.733, 15.507, 17.535, 21.955]
    var chi9 = [1.735, 2.700, 3.325, 16.919, 19.023, 23.589]
    var chi10 = [2.156, 3.247, 3.940, 18.307, 20.483, 25.188]
    var chi11 = [2.603, 3.816, 4.575, 19.675, 21.920, 26.757]
    var chi12 = [3.074, 4.404, 5.226, 21.026, 23.337, 26.757]
    var chi13 = [3.565, 5.009, 5.892, 22.362, 24.736, 29.819]
    var chi14 = [4.075, 5.629, 6.571, 23.685, 26.119, 31.319]
    var chi15 = [4.601, 6.262, 7.261, 24.996, 27.448, 32.801]
    var chi16 = [5.142, 6.908, 7.962, 26.296, 28.845, 34.267]
    var chi17 = [5.687, 7.564, 8.672, 27.587, 30.191, 35.718]
    var chi18 = [6.265, 8.231, 9.390, 28.869, 31.526, 37.156]
    var chi19 = [6.844, 8.907, 10.117, 30.144, 32.852, 38.582]
    var chi20 = [7.434, 9.591, 10.851, 31.410, 34.170, 39.997]
    var chi21 = [8.034, 10.283, 11.591, 32.671, 35.479, 41.401]
    var chi22 = [8.643, 10.982, 12.338, 33.924, 36.781, 42.796]
    var chi23 = [9.260, 11.689, 13.091, 35.172, 38.076, 44.181]
    var chi24 = [9.886, 12.401, 13.848, 36.415, 39.364, 45.558]
    var chi25 = [10.520, 13.120, 14.611, 37.652, 40.646, 46.928]
    var chi26 = [11.160, 13.844, 15.379, 38.885, 41.923, 48.928]
    var chi27 = [11.808, 14.573, 16.151, 40.113, 43.195, 49.645]
    var chi28 = [12.461, 15.308, 16.928, 41.337, 44.461, 50.994]
    var chi29 = [13.121, 16.047, 17.708, 42.557, 45.722, 52.335]
    var chi30 = [13.787, 16.791, 18.493, 43.773, 46.979, 53.672]
    var chi35 = [17.192, 20.569, 22.465, 49.802, 53.203, 60.275]
    var chi40 = [20.707, 24.433, 26.509, 55.758, 59.342, 66.766]
    var chi45 = [24.311, 28.366, 30.612, 61.656, 65.410, 73.166]
    var chi50 = [27.991, 32.357, 34.764, 67.505, 71.420, 79.490]
    var chi55 = [31.735, 36.398, 38.958, 73.311, 77.380, 85.749]
    var chi60 = [35.543, 40.482, 43.188, 79.082, 83.298, 91.942]
    var chi65 = [39.383, 44.603, 47.450, 84.821, 89.177, 98.105]
    var chi70 = [43.275, 48.758, 51.739, 90.531, 95.023, 104.215]
    var chi75 = [47.206, 52.942, 56.054, 96.217, 100.839, 110.285]
    var chi80 = [51.172, 57.153, 60.391, 101.879, 106.629, 116.321]
    var chi85 = [55.170, 61.389, 64.749, 107.522, 112.393, 122.342]
    var chi90 = [59.196, 65.647, 69.126, 113.145, 118.136, 128.299]
    var chi95 = [63.250, 69.925, 63.520, 118.752, 123.858, 134.247]
    var chi100 = [67.328, 74.222, 77.929, 124.342, 129.561, 140.170]
    
    var chi = [0, chi1, chi2, chi3, chi4, chi5, chi6, chi7, chi8, chi9, chi10, chi11, chi12, chi13, chi14, chi15, chi16, chi17, chi18, chi19, chi20, chi21, chi22, chi23, chi24, chi25, chi26, chi27, chi28, chi29, chi30, chi30, chi30, chi30, chi30, chi35, chi35, chi35, chi35, chi35, chi40, chi40, chi40, chi40, chi40, chi45, chi45, chi45, chi45, chi45, chi50, chi50, chi50, chi50, chi50, chi55, chi55, chi55, chi55, chi55, chi60, chi60, chi60, chi60, chi60, chi65, chi65, chi65, chi65, chi65, chi70, chi70, chi70, chi70, chi70, chi75, chi75, chi75, chi75, chi75, chi80, chi80, chi80, chi80, chi80, chi85, chi85, chi85, chi85, chi85, chi90, chi90, chi90, chi90, chi90, chi95, chi95, chi95, chi95, chi95, chi100]
    
    var muknot = document.getElementById("muknot").value
    var size = document.getElementById("size2").value; var sizem1 = size - 1;
    var stdev = document.getElementById("xbar").value;
    var alpha = document.getElementById("alpha").value;
    var test = ((size-1)*(stdev*stdev))/muknot
    
    chidf = chi[sizem1]
    
    document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that a population parameter, such as the population mean, is likely to be in."
    document.getElementById("formulatext").innerHTML = "$$ \\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} $$"
    document.getElementById("explanationtext").innerHTML = "Choosing a higher confidence level will increase the size of the confidence interval since a larger range of values is more likely to contain the population parameter."
        
    document.getElementById("output1").innerHTML = "$$ \\begin{align} \\text{Test Statistic: } \\chi^2 &= \\frac{(n-1)s^2}{\\sigma_o^2} \\\\ &= \\frac{(" + size + "-1)" + stdev + "^2}{" + muknot + "^2} \\\\ &= " + parseFloat(test.toFixed(2)) + " \\\\ \\end{align} $$ $$ \\begin{align} \\text{Degrees of Freedom: } df &= n - 1 \\\\ &= "+size+ " - 1 \\\\ &= "+sizem1+" \\end{align}  $$  "
    
    
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    
    
    
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    ctx.moveTo(210, 130);
    ctx.lineTo(210, 108);
    ctx.quadraticCurveTo(265, 120, 265, 120);
    ctx.lineTo(265, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    
    
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.bezierCurveTo(80, 80, 60, 20, 100, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(100, 20);
    ctx.bezierCurveTo(140, 20, 120, 100, 265, 120);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 5);
    ctx.lineTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.stroke();
    
    ctx.fillText("χ²",285,132);
    ctx.fillText(parseFloat(test.toFixed(2)),200,145);
    ctx.fillText("0",19,142);
    
    ctx.fillText("p-value",223,105);
    
    ctx.beginPath();
    ctx.moveTo(210, 135);
    ctx.lineTo(210, 125);
    ctx.stroke();
    
    

    
    
    
    table1 = "<td></td><td colspan='6'>Area in Upper Tail</td>"
    
    table2 = "<td>df</td><td>.995</td><td>.975</td><td>.95</td><td>.05</td><td>.025</td><td>.005</td>"
    
    table3 = "<td>"+ sizem1 +"</td><td>"+chidf[0]+"</td><td>"+chidf[1]+"</td><td>"+chidf[2]+"</td><td>"+chidf[3]+"</td><td>"+chidf[4]+"</td><td>"+chidf[5].toFixed(3)+"</td>"
    
    
    var table = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table3+"</tr></table>"
    
    document.getElementById("output2").innerHTML = "<br>" + table

    MathJax.typeset();
}



































function example1(){
    document.getElementById("samplestat").value = "standard"
    document.getElementById("size").value = "20"
    document.getElementById("samplestatval").value = "5"
    conlev = document.getElementById("conlev").value = "95"
    confor = document.getElementById("confor").value = "variance"
}

function example2(){
    document.getElementById("samplestat").value = "variance"
    document.getElementById("samplestat").value;
    document.getElementById("size").value = "20"
    document.getElementById("samplestatval").value = ".25"
    conlev = document.getElementById("conlev").value = "90"
    confor = document.getElementById("confor").value = "standard"
}

function example3(){
    document.getElementById("tail").value = "upper"
    $("#less").hide(); $("#greater").show(); $("#notequal").hide();
    document.getElementById("muknot").value = "50"
    document.getElementById("muknotvalue").innerHTML = "50"
    document.getElementById("samplestat2").value = "standard"
    document.getElementById('size2').value="16"
    document.getElementById('xbar').value="9.5"
    document.getElementById('alpha').value=".05"
}

function example4(){
    document.getElementById("planning").value = "sigma"
    document.getElementById("planningvalue").value = "9.65"
    document.getElementById('margin').value="2"
    document.getElementById('conlev').value=95
}

function samplestat() {
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
        $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
    } else if (x == "proportion"){
        $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
    } 
}


function samplesize() {
    var planning = document.getElementById("planning").value
    if (planning == "sigma") {
        calcsize1()
    } else if (planning == "pstar") {
        calcsize2()
    }
}

function calcsize1() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that a population parameter, such as the population mean, is likely to be in."
    document.getElementById("formulatext").innerHTML = "$$ n = \\frac{(z_{\\alpha/2})^2 \\sigma^2}{E^2} $$"
    document.getElementById("explanationtext").innerHTML = "Choosing a higher confidence level will increase the size of the confidence interval since a larger range of values is more likely to contain the population parameter."
    var planval = document.getElementById("planningvalue").value
    var margerr = document.getElementById('margin').value
    var conlev = document.getElementById('conlev').value
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf);
    var ans = (zalphahalf*zalphahalf*planval*planval)/(margerr*margerr)
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} n &= \\frac{(z_{\\alpha/2})^2 \\sigma^2}{E^2} \\\\ &= \\frac{(" + parseFloat(zalphahalf.toFixed(2)) + ")^2 " + planval + "^2}{" + margerr + "^2} \\\\ &= " + parseFloat(ans.toFixed(2)) + " \\end{align}$$ $$ \\text{Round up to } n = \\boxed{" + Math.ceil(ans) + "} $$"
    
    MathJax.typeset();
}

function calcsize2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that a population parameter, such as the population mean, is likely to be in."
    document.getElementById("formulatext").innerHTML = "$$ n = \\frac{(z_{\\alpha/2})^2p^*(1-p^*)}{E^2} $$"
    document.getElementById("explanationtext").innerHTML = "Choosing a higher confidence level will increase the size of the confidence interval since a larger range of values is more likely to contain the population parameter."
    var planval = document.getElementById("planningvalue").value
    var margerr = document.getElementById('margin').value
    var conlev = document.getElementById('conlev').value
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf);
    var ans = (zalphahalf*zalphahalf*planval*(1-planval))/(margerr*margerr)
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} n &= \\frac{(z_{\\alpha/2})^2p^*(1-p^*)}{E^2} \\\\ &= \\frac{(" + parseFloat(zalphahalf.toFixed(2)) + ")^2 " + planval + " (1-" + planval + ")}{" + margerr + "^2} \\\\ &= " + parseFloat(ans.toFixed(2)) + " \\end{align}$$ $$ \\text{Round up to } n = \\boxed{" + Math.ceil(ans) + "} $$"
    
    MathJax.typeset();
}

function example5(){
    document.getElementById("planning").value = "pstar"
    document.getElementById("planningvalue").value = ".44"
    document.getElementById('margin').value=".025"
    document.getElementById('conlev').value=95
}

function switchhypothesis() {
    $("#hypothesis").show(); $("#confidence").hide();
    $("#switchhypothesis").hide(); $("#switchconfidence").show();
    $("#output1").empty(); $("#output2").empty(); $("#explanation").hide(); $("#canvascontainer").show();
}
 
function switchconfidence() {
    $("#hypothesis").hide(); $("#confidence").show();
    $("#switchhypothesis").show(); $("#switchconfidence").hide();
    $("#output").empty(); $("#explanation").hide(); $("#canvascontainer").show();
}
















