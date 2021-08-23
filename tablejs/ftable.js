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

function compute(Z,DF) {
	if (DF<=0) {
		alert("Degrees of freedom must be positive")
	} else {
		Chisqcdf=Gammacdf(Z/2,DF/2)
	}
	Chisqcdf=Math.round(Chisqcdf*100000)/100000;
    return Chisqcdf;
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

function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob
	}
	return Prob
} 




d11 = [39.86, 49.50, 53.59, 55.83, 57.24, 58.20, 58.91, 59.44, 59.86, 60.19, 61.22, 61.74, 62.05, 62.26, 62.53, 62.79, 63.01, 63.30]
d12 = [161.45, 199.50, 215.71, 224.58, 230.16, 233.99, 236.77, 238.88, 240.54, 241.88, 245.95, 248.02, 249.26, 250.10, 251.14, 252.20, 253.04, 254.19]
d13 = [647.79, 799.48, 864.15, 899.60, 921.83, 937.11, 948.20, 956.64, 963.28, 968.63, 984.87, 993.08, 998.09, 1001.40, 1005.60, 1009.79, 1013.16, 1017.76]
d14 = [4052.18, 4999.34, 5403.53, 5624.26, 5763.96, 5858.95, 5928.33, 5980.95, 6022.40, 6055.93, 6156.97, 6208.66, 6239.86, 6260.35, 6286.43, 6312.97, 6333.92, 6362.80]

d21 = [8.53, 9.00, 9.16, 9.24, 9.29, 9.33, 9.35, 9.37, 9.38, 9.39, 9.42, 9.44, 9.45, 9.46, 9.47, 9.47, 9.48, 9.49]
d22 = [18.51, 19.00, 19.16, 19.25, 19.30, 19.33, 19.35, 19.37, 19.38, 19.40, 19.43, 19.45, 19.46, 19.46, 19.47, 19.48, 19.49, 19.49]
d23 = [38.51, 39.00, 39.17, 39.25, 39.30, 39.33, 39.36, 39.37, 39.39, 39.40, 39.43, 39.45, 39.46, 39.46, 39.47, 39.48, 39.49, 39.50]
d24 = [98.50, 99.00, 99.16, 99.25, 99.30, 99.33, 99.36, 99.38, 99.39, 99.40, 99.43, 99.45, 99.46, 99.47, 99.48, 99.48, 99.49, 99.50]

var d = [...d11, ...d12, ...d13, ...d14, ...d21, ...d22, ...d23, ...d24]

var d30 = [13.787, 14.953, 16.791, 18.493, 20.599, 40.256, 43.773, 46.979, 50.892, 53.672]
var d35 = [17.192, 18.509, 20.569, 22.465, 24.797, 46.059, 49.802, 53.203, 57.342, 60.275]
var d40 = [20.707, 22.164, 24.433, 26.509, 29.051, 51.805, 55.758, 59.342, 63.691, 66.766]
var d45 = [24.311, 25.901, 28.366, 30.612, 33.350, 57.505, 61.656, 65.410, 69.957, 73.166]
var d50 = [27.991, 29.707, 32.357, 34.764, 37.689, 63.167, 67.505, 71.420, 76.154, 79.490]

var d55 = [31.735, 33.571, 36.398, 38.958, 42.060, 68.796, 73.311, 77.380, 82.292, 85.749]
var d60 = [35.534, 37.485, 40.482, 43.188, 46.459, 74.397, 79.082, 83.298, 88.379, 91.952]
var d65 = [39.383, 41.444, 44.603, 47.450, 50.883, 79.973, 84.821, 89.177, 94.422, 98.105]
var d70 = [43.275, 45.442, 48.758, 51.739, 55.329, 85.527, 90.531, 95.023, 100.425, 104.215]
var d75 = [47.206, 49.475, 52.942, 56.054, 59.795, 91.061, 96.217, 100.839, 106.393, 110.285]

var d80 = [51.172, 53.540, 57.153, 60.391, 64.278, 96.578, 101.879, 106.629, 112.329, 116.321]
var d85 = [55.170, 57.634, 61.389, 64.749, 68.777, 102.079, 107.522, 112.393, 118.236, 122.324]
var d90 = [59.196, 61.754, 65.647, 69.126, 73.291, 107.565, 113.145, 118.136, 124.116, 128.299]
var d95 = [63.250, 65.898, 69.925, 73.520, 77.818, 113.038, 118.752, 123.858, 129.973, 134.247]
var d100 = [67.328, 70.065, 74.222, 77.929, 82.358, 118.498, 124.342, 129.561, 135.807, 140.170]

var d2 = [...d30, ...d35, ...d40, ...d45, ...d50, ...d55, ...d60, ...d65, ...d70, ...d75, ...d80, ...d85, ...d90, ...d95, ...d100]


    table00 = "<tr style='border-top: thin solid'><td>$\\textbf{Den.}$</td><td>$\\textbf{Area in}$</td><td colspan='10'></td></tr>"
    
    table0 = "<tr><td>$\\textbf{Deg.}$</td><td>$\\textbf{Upper}$</td><td colspan='18' style='border-bottom: thin solid;'>$\\textbf{Numerator Degrees of Freedom}$</td></tr>"
    
    table1 = "<tr style='border-bottom: thin solid;'><td>$\\textbf{of Fr.}$</td><td>$\\textbf{Tail}$</td><td>$\\mathbf{1}$</td><td>$\\mathbf{2}$</td><td>$\\mathbf{3}$</td><td>$\\mathbf{4}$</td><td>$\\mathbf{5}$</td><td>$\\mathbf{6}$</td><td>$\\mathbf{7}$</td><td>$\\mathbf{8}$</td><td>$\\mathbf{9}$</td><td>$\\mathbf{10}$</td><td>$\\mathbf{15}$</td><td>$\\mathbf{20}$</td><td>$\\mathbf{25}$</td><td>$\\mathbf{30}$</td><td>$\\mathbf{40}$</td><td>$\\mathbf{60}$</td><td>$\\mathbf{100}$</td><td>$\\mathbf{1000}$</td></tr>"

    table2 = []

    for (r = 1; r < 3; r++) {
        i = 72*(r-1)
        table2 += "<tr><td>$"+r+"$</td><td>$.10$</td><td>$"+d[i].toFixed(2)+"$</td><td>$"+d[i+1].toFixed(2)+"$</td><td>$"+d[i+2].toFixed(2)+"$</td><td>$"+d[i+3].toFixed(2)+"$</td><td>$"+d[i+4].toFixed(2)+"$</td><td>$"+d[i+5].toFixed(2)+"$</td><td>$"+d[i+6].toFixed(2)+"$</td><td>$"+d[i+7].toFixed(2)+"$</td><td>$"+d[i+8].toFixed(2)+"$</td><td>$"+d[i+9].toFixed(2)+"$</td><td>$"+d[i+10].toFixed(2)+"$</td><td>$"+d[i+11].toFixed(2)+"$</td><td>$"+d[i+12].toFixed(2)+"$</td><td>$"+d[i+13].toFixed(2)+"$</td><td>$"+d[i+14].toFixed(2)+"$</td><td>$"+d[i+15].toFixed(2)+"$</td><td>$"+d[i+16].toFixed(2)+"$</td><td>$"+d[i+17].toFixed(2)+"$</td></tr>"
        table2 += "<tr><td></td><td>$.05$</td><td>$"+d[i+18].toFixed(2)+"$</td><td>$"+d[i+19].toFixed(2)+"$</td><td>$"+d[i+20].toFixed(2)+"$</td><td>$"+d[i+21].toFixed(2)+"$</td><td>$"+d[i+22].toFixed(2)+"$</td><td>$"+d[i+23].toFixed(2)+"$</td><td>$"+d[i+24].toFixed(2)+"$</td><td>$"+d[i+25].toFixed(2)+"$</td><td>$"+d[i+26].toFixed(2)+"$</td><td>$"+d[i+27].toFixed(2)+"$</td><td>$"+d[i+28].toFixed(2)+"$</td><td>$"+d[i+29].toFixed(2)+"$</td><td>$"+d[i+30].toFixed(2)+"$</td><td>$"+d[i+31].toFixed(2)+"$</td><td>$"+d[i+32].toFixed(2)+"$</td><td>$"+d[i+33].toFixed(2)+"$</td><td>$"+d[i+34].toFixed(2)+"$</td><td>$"+d[i+35].toFixed(2)+"$</td></tr>"
        table2 += "<tr><td></td><td>$.025$</td><td>$"+d[i+36].toFixed(2)+"$</td><td>$"+d[i+37].toFixed(2)+"$</td><td>$"+d[i+38].toFixed(2)+"$</td><td>$"+d[i+39].toFixed(2)+"$</td><td>$"+d[i+40].toFixed(2)+"$</td><td>$"+d[i+41].toFixed(2)+"$</td><td>$"+d[i+42].toFixed(2)+"$</td><td>$"+d[i+43].toFixed(2)+"$</td><td>$"+d[i+44].toFixed(2)+"$</td><td>$"+d[i+45].toFixed(2)+"$</td><td>$"+d[i+46].toFixed(2)+"$</td><td>$"+d[i+47].toFixed(2)+"$</td><td>$"+d[i+48].toFixed(2)+"$</td><td>$"+d[i+49].toFixed(2)+"$</td><td>$"+d[i+50].toFixed(2)+"$</td><td>$"+d[i+51].toFixed(2)+"$</td><td>$"+d[i+52].toFixed(2)+"$</td><td>$"+d[i+53].toFixed(2)+"$</td></tr>"
        table2 += "<tr><td></td><td>$.01$</td><td>$"+d[i+54].toFixed(2)+"$</td><td>$"+d[i+55].toFixed(2)+"$</td><td>$"+d[i+56].toFixed(2)+"$</td><td>$"+d[i+57].toFixed(2)+"$</td><td>$"+d[i+58].toFixed(2)+"$</td><td>$"+d[i+59].toFixed(2)+"$</td><td>$"+d[i+60].toFixed(2)+"$</td><td>$"+d[i+61].toFixed(2)+"$</td><td>$"+d[i+62].toFixed(2)+"$</td><td>$"+d[i+63].toFixed(2)+"$</td><td>$"+d[i+64].toFixed(2)+"$</td><td>$"+d[i+65].toFixed(2)+"$</td><td>$"+d[i+66].toFixed(2)+"$</td><td>$"+d[i+67].toFixed(2)+"$</td><td>$"+d[i+68].toFixed(2)+"$</td><td>$"+d[i+69].toFixed(2)+"$</td><td>$"+d[i+70].toFixed(2)+"$</td><td>$"+d[i+71].toFixed(2)+"$</td></tr>"
    }
    
    var tablez = "<table style='column-gap: 20px;'>"+table00+table0+table1+table2+"</table>"
    
    
    document.getElementById("output").innerHTML = tablez

    table3 = []

    for (r = 1; r < 16; r++) {
      i = 10*(r-1)
      table3 += "<tr><td>$\\mathbf{"+(25 + 5*r)+"}$</td><td>$"+d2[i].toFixed(3)+"$</td><td>$"+d2[i+1].toFixed(3)+"$</td><td>$"+d2[i+2].toFixed(3)+"$</td><td>$"+d2[i+3].toFixed(3)+"$</td><td>$"+d2[i+4].toFixed(3)+"$</td><td>$"+d2[i+5].toFixed(3)+"$</td><td>$"+d2[i+6].toFixed(3)+"$</td><td>$"+d2[i+7].toFixed(3)+"$</td><td>$"+d2[i+8].toFixed(3)+"$</td><td>$"+d2[i+9].toFixed(3)+"$</td></tr>"
    }
    
    var tablez2 = "<table style='column-gap: 20px;'>"+table00+table0+table1+table3+"</table>"
    
    document.getElementById("output2").innerHTML = tablez2
    
    
    table4 = []

    for (i = 70; i < 101; i++) {
      table4 += "<tr><td>$\\mathbf{"+i+"}$</td><td>$"+tinv(.20, i).toFixed(3)+"$</td><td>$"+tinv(.10, i).toFixed(3)+"$</td><td>$"+tinv(.05, i).toFixed(3)+"$</td><td>$"+tinv(.025, i).toFixed(3)+"$</td><td>$"+tinv(.01, i).toFixed(3)+"$</td><td>$"+tinv(.005, i).toFixed(3)+"$</td></tr>"
    }

    table5 = "<tr style='border-bottom: thin solid;'><td>$\\mathbf{\\infty}$</td><td>$0.842$</td><td>$1.282$</td><td>$1.645$</td><td>$1.960$</td><td>$2.326$</td><td>$2.576$</td></tr>"
    
    var tablez3 = "<table style='column-gap: 20px;'>"+table00+table0+table1+table4+table5+"</table>"

    
    
    //document.getElementById("output3").innerHTML = tablez3

    
    MathJax.typeset();