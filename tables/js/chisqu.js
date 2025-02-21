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




var d1 = [.000, .000, .001, .004, .016, 2.706, 3.841, 5.024, 6.635, 7.879]
var d2 = [.010, .020, .051, .103, .211, 4.605, 5.991, 7.378, 9.210, 10.597]
var d3 = [.072, .115, .216, .352, .584, 6.251, 7.815, 9.348, 11.345, 12.838]
var d4 = [.207, .297, .484, .711, 1.064, 7.779, 9.488, 11.143, 13.277, 14.860]
var d5 = [.412, .554, .831, 1.145, 1.610, 9.236, 11.070, 12.832, 15.086, 16.750]

var d6 = [.676, .872, 1.237, 1.635, 2.204, 10.645, 12.592, 14.449, 16.812, 18.548]
var d7 = [.989, 1.239, 1.690, 2.167, 2.833, 12.017, 14.067, 16.013, 18.475, 20.278]
var d8 = [1.344, 1.647, 2.180, 2.733, 3.490, 13.362, 15.507, 17.535, 20.090, 21.955]
var d9 = [1.735, 2.088, 2.700, 3.325, 4.168, 14.684, 16.919, 19.023, 21.666, 23.589]
var d10 = [2.156, 2.558, 3.247, 3.940, 4.865, 15.987, 18.307, 20.483, 23.209, 25.188]

var d11 = [2.603, 3.053, 3.816, 4.575, 5.578, 17.275, 19.675, 21.920, 24.725, 26.757]
var d12 = [3.074, 3.571, 4.404, 5.226, 6.304, 18.549, 21.026, 23.337, 26.217, 28.300]
var d13 = [3.565, 4.107, 5.009, 5.892, 7.041, 19.812, 22.362, 24.736, 27.688, 29.819]
var d14 = [4.075, 4.660, 5.629, 6.571, 7.790, 21.064, 23.685, 26.119, 29.141, 31.319]
var d15 = [4.601, 5.229, 6.262, 7.261, 8.547, 22.307, 24.996, 27.488, 30.578, 32.801]

var d16 = [5.142, 5.812, 6.908, 7.962, 9.312, 23.542, 26.296, 28.845, 32.000, 34.267]
var d17 = [5.697, 6.408, 7.564, 8.672, 10.085, 24.769, 27.587, 30.191, 33.409, 35.718]
var d18 = [6.265, 7.015, 8.231, 9.390, 10.865, 25.989, 28.869, 31.526, 34.805, 37.156]
var d19 = [6.844, 7.633, 8.907, 10.117, 11.651, 27.204, 30.144, 32.852, 36.191, 38.582]
var d20 = [7.434, 8.260, 9.591, 10.851, 12.443, 28.412, 31.410, 34.170, 37.566, 39.997]

var d21 = [8.034, 8.897, 10.283, 11.591, 13.240, 29.615, 32.671, 35.479, 38.932, 41.401]
var d22 = [8.643, 9.542, 10.982, 12.338, 14.041, 30.813, 33.924, 36.781, 40.289, 42.796]
var d23 = [9.260, 10.196, 11.689, 13.091, 14.848, 32.007, 35.172, 38.076, 41.638, 44.181]
var d24 = [9.886, 10.856, 12.401, 13.848, 15.659, 33.196, 36.415, 39.364, 42.980, 45.558]

var d25 = [10.520, 11.524, 13.120, 14.611, 16.473, 34.382, 37.652, 40.646, 44.314, 46.928]
var d26 = [11.160, 12.198, 13.844, 15.379, 17.292, 35.563, 38.885, 41.923, 45.642, 48.290]
var d27 = [11.808, 12.878, 14.573, 16.151, 18.114, 36.741, 40.113, 43.195, 46.963, 49.645]
var d28 = [12.461, 13.565, 15.308, 16.928, 18.939, 37.916, 41.337, 44.461, 48.278, 50.994]
var d29 = [13.121, 14.256, 16.047, 17.708, 19.768, 39.087, 42.557, 45.722, 49.588, 52.335]

var d = [...d1, ...d2, ...d3, ...d4, ...d5, ...d6, ...d7, ...d8, ...d9, ...d10, ...d11, ...d12, ...d13, ...d14, ...d15, ...d16, ...d17, ...d18, ...d19, ...d20, ...d21, ...d22, ...d23, ...d24, ...d25, ...d26, ...d27, ...d28, ...d29]

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











table(1,0);

function table(d,s){
    if (z == 0) {
        table1 = "<tr><td colspan='8' style='color:black'><i>Click to Highlight</i></td></tr>";
    } else {
        table1 = "<tr><td colspan='8' style='cursor:pointer' style='cursor:pointer' onclick='table("+(d-10)+","+s+")' class='text-primary'>&#9650;</td></tr>";
    }
    if (s == 0) {
        table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>df</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.995</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.99</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.975</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.95</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.90</b></td><td></td></tr>";  
    } else {
        table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>df</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.10</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.05</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.025</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.01</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.005</b></td><td></td></tr>";  
    }
    table3 = [];
    for (i = d; i < d+10; i++) {
        if (d < 50) {
            if (i == d+4) {
                if (s == 0) {
                    table3 += "<tr><td style='color:white'>&#9664;</td><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight0"+i+"()'>"++"</td><td style='cursor:pointer' onclick = 'highlight1"+i+"()'>"+d[i]+"</td><td style='cursor:pointer' onclick = 'highlight2"+i+"()'>" +d[i+1]+ "</td><td style='cursor:pointer' onclick = 'highlight3"+i+"()'>"+d[i+2]+"</td><td style='cursor:pointer' onclick = 'highlight4"+i+"()'>"+d[i+3]+"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";                
                } else {
                    table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+d+",0)' >&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight0"+i+"()'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight1"+i+"()'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight2"+i+"()'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick = 'highlight3"+i+"()'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight4"+i+"()'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                }
            } else {
                if (zval < 0) {
                    table3 += "<tr><td></td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight0"+i+"()'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight1"+i+"()'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight2"+i+"()'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick = 'highlight3"+i+"()'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight4"+i+"()'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                } else {
                    table3 += "<tr><td></td><td><b>-"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight0"+i+"()'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight1"+i+"()'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight2"+i+"()'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick = 'highlight3"+i+"()'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight4"+i+"()'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                }
            }            
        } else {
            if (i == z+4) {
                if (s == 0) {
                    table3 += "<tr><td style='color:white'>&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight0"+i+"()'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight1"+i+"()'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight2"+i+"()'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick = 'highlight3"+i+"()'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight4"+i+"()'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";                
                } else {
                    table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight0"+i+"()'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight1"+i+"()'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight2"+i+"()'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick = 'highlight3"+i+"()'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight4"+i+"()'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                }
            } else {
                table3 += "<tr><td></td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight0"+i+"()'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight1"+i+"()'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight2"+i+"()'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick = 'highlight3"+i+"()'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick = 'highlight4"+i+"()'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
            }                  
        }
    }
    if (z < 50) {
        table4 = "<tr><td></td><td></td><td></td><td colspan='2' style='cursor:pointer' onclick='table("+(z+10)+","+s+")' class='text-primary'>&#9660;</td><td></td><td></td></tr>";
    } else {
        table4 = "<tr><td></td><td></td><td></td><td colspan='2' style='cursor:pointer; color:white'>&#9660;</td><td></td><td></td></tr>";
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+table4+"</table>";
    document.getElementById("output").innerHTML = tablez;
}











table2(d) {    
	table1 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
	table2 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
	table3 = []
	for (r = 1; r < 30; r++) {
		i = 10*(r-1)
		table3 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+i+"()'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+i+"()'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+i+"()'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+i+"()'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+i+"()'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+i+"()'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+i+"()'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+i+"()'>"+d[i+9].toFixed(3)+"</td></tr>"
	}
	var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
	document.getElementById("output").innerHTML = tablez
}
    


var highlight

function highlight01(){highlight0(); highlight = 1; graph1(0)}
function highlight02(){highlight0(); highlight = 2; graph1(0)}
function highlight03(){highlight0(); highlight = 3; graph1(0)}
function highlight04(){highlight0(); highlight = 4; graph1(0)}
function highlight05(){highlight0(); highlight = 5; graph1(0)}
function highlight06(){highlight0(); highlight = 6; graph1(0)}
function highlight07(){highlight0(); highlight = 7; graph1(0)}
function highlight08(){highlight0(); highlight = 8; graph1(0)}
function highlight09(){highlight0(); highlight = 9; graph1(0)}
function highlight010(){highlight0(); highlight = 10; graph1(0)}
function highlight011(){highlight0(); highlight = 11; graph1(0)}
function highlight012(){highlight0(); highlight = 12; graph1(0)}
function highlight013(){highlight0(); highlight = 13; graph1(0)}
function highlight014(){highlight0(); highlight = 14; graph1(0)}
function highlight015(){highlight0(); highlight = 15; graph1(0)}
function highlight016(){highlight0(); highlight = 16; graph1(0)}
function highlight017(){highlight0(); highlight = 17; graph1(0)}
function highlight018(){highlight0(); highlight = 18; graph1(0)}
function highlight019(){highlight0(); highlight = 19; graph1(0)}
function highlight020(){highlight0(); highlight = 20; graph1(0)}
function highlight021(){highlight0(); highlight = 21; graph1(0)}
function highlight022(){highlight0(); highlight = 22; graph1(0)}
function highlight023(){highlight0(); highlight = 23; graph1(0)}
function highlight024(){highlight0(); highlight = 24; graph1(0)}
function highlight025(){highlight0(); highlight = 25; graph1(0)}
function highlight026(){highlight0(); highlight = 26; graph1(0)}
function highlight027(){highlight0(); highlight = 27; graph1(0)}
function highlight028(){highlight0(); highlight = 28; graph1(0)}
function highlight029(){highlight0(); highlight = 29; graph1(0)}


function highlight0(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td bgcolor='lightgray'><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 30; r++) {
        if (highlight == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+i+"()'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()'>"+d[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight11(){highlight1(); highlight = 1; graph1(1)}
function highlight12(){highlight1(); highlight = 2; graph1(1)}
function highlight13(){highlight1(); highlight = 3; graph1(1)}
function highlight14(){highlight1(); highlight = 4; graph1(1)}
function highlight15(){highlight1(); highlight = 5; graph1(1)}
function highlight16(){highlight1(); highlight = 6; graph1(1)}
function highlight17(){highlight1(); highlight = 7; graph1(1)}
function highlight18(){highlight1(); highlight = 8; graph1(1)}
function highlight19(){highlight1(); highlight = 9; graph1(1)}
function highlight110(){highlight1(); highlight = 10; graph1(1)}
function highlight111(){highlight1(); highlight = 11; graph1(1)}
function highlight112(){highlight1(); highlight = 12; graph1(1)}
function highlight113(){highlight1(); highlight = 13; graph1(1)}
function highlight114(){highlight1(); highlight = 14; graph1(1)}
function highlight115(){highlight1(); highlight = 15; graph1(1)}
function highlight116(){highlight1(); highlight = 16; graph1(1)}
function highlight117(){highlight1(); highlight = 17; graph1(1)}
function highlight118(){highlight1(); highlight = 18; graph1(1)}
function highlight119(){highlight1(); highlight = 19; graph1(1)}
function highlight120(){highlight1(); highlight = 20; graph1(1)}
function highlight121(){highlight1(); highlight = 21; graph1(1)}
function highlight122(){highlight1(); highlight = 22; graph1(1)}
function highlight123(){highlight1(); highlight = 23; graph1(1)}
function highlight124(){highlight1(); highlight = 24; graph1(1)}
function highlight125(){highlight1(); highlight = 25; graph1(1)}
function highlight126(){highlight1(); highlight = 26; graph1(1)}
function highlight127(){highlight1(); highlight = 27; graph1(1)}
function highlight128(){highlight1(); highlight = 28; graph1(1)}
function highlight129(){highlight1(); highlight = 29; graph1(1)}

function highlight1(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td bgcolor='lightgray'><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 30; r++) {
        if (highlight == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()'>"+d[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight21(){highlight2(); highlight = 1; graph1(2)}
function highlight22(){highlight2(); highlight = 2; graph1(2)}
function highlight23(){highlight2(); highlight = 3; graph1(2)}
function highlight24(){highlight2(); highlight = 4; graph1(2)}
function highlight25(){highlight2(); highlight = 5; graph1(2)}
function highlight26(){highlight2(); highlight = 6; graph1(2)}
function highlight27(){highlight2(); highlight = 7; graph1(2)}
function highlight28(){highlight2(); highlight = 8; graph1(2)}
function highlight29(){highlight2(); highlight = 9; graph1(2)}
function highlight210(){highlight2(); highlight = 10; graph1(2)}
function highlight211(){highlight2(); highlight = 11; graph1(2)}
function highlight212(){highlight2(); highlight = 12; graph1(2)}
function highlight213(){highlight2(); highlight = 13; graph1(2)}
function highlight214(){highlight2(); highlight = 14; graph1(2)}
function highlight215(){highlight2(); highlight = 15; graph1(2)}
function highlight216(){highlight2(); highlight = 16; graph1(2)}
function highlight217(){highlight2(); highlight = 17; graph1(2)}
function highlight218(){highlight2(); highlight = 18; graph1(2)}
function highlight219(){highlight2(); highlight = 19; graph1(2)}
function highlight220(){highlight2(); highlight = 20; graph1(2)}
function highlight221(){highlight2(); highlight = 21; graph1(2)}
function highlight222(){highlight2(); highlight = 22; graph1(2)}
function highlight223(){highlight2(); highlight = 23; graph1(2)}
function highlight224(){highlight2(); highlight = 24; graph1(2)}
function highlight225(){highlight2(); highlight = 25; graph1(2)}
function highlight226(){highlight2(); highlight = 26; graph1(2)}
function highlight227(){highlight2(); highlight = 27; graph1(2)}
function highlight228(){highlight2(); highlight = 28; graph1(2)}
function highlight229(){highlight2(); highlight = 29; graph1(2)}

function highlight2(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td bgcolor='lightgray'><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 30; r++) {
        if (highlight == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()'>"+d[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight31(){highlight3(); highlight = 1; graph1(3)}
function highlight32(){highlight3(); highlight = 2; graph1(3)}
function highlight33(){highlight3(); highlight = 3; graph1(3)}
function highlight34(){highlight3(); highlight = 4; graph1(3)}
function highlight35(){highlight3(); highlight = 5; graph1(3)}
function highlight36(){highlight3(); highlight = 6; graph1(3)}
function highlight37(){highlight3(); highlight = 7; graph1(3)}
function highlight38(){highlight3(); highlight = 8; graph1(3)}
function highlight39(){highlight3(); highlight = 9; graph1(3)}
function highlight310(){highlight3(); highlight = 10; graph1(3)}
function highlight311(){highlight3(); highlight = 11; graph1(3)}
function highlight312(){highlight3(); highlight = 12; graph1(3)}
function highlight313(){highlight3(); highlight = 13; graph1(3)}
function highlight314(){highlight3(); highlight = 14; graph1(3)}
function highlight315(){highlight3(); highlight = 15; graph1(3)}
function highlight316(){highlight3(); highlight = 16; graph1(3)}
function highlight317(){highlight3(); highlight = 17; graph1(3)}
function highlight318(){highlight3(); highlight = 18; graph1(3)}
function highlight319(){highlight3(); highlight = 19; graph1(3)}
function highlight320(){highlight3(); highlight = 20; graph1(3)}
function highlight321(){highlight3(); highlight = 21; graph1(3)}
function highlight322(){highlight3(); highlight = 22; graph1(3)}
function highlight323(){highlight3(); highlight = 23; graph1(3)}
function highlight324(){highlight3(); highlight = 24; graph1(3)}
function highlight325(){highlight3(); highlight = 25; graph1(3)}
function highlight326(){highlight3(); highlight = 26; graph1(3)}
function highlight327(){highlight3(); highlight = 27; graph1(3)}
function highlight328(){highlight3(); highlight = 28; graph1(3)}
function highlight329(){highlight3(); highlight = 29; graph1(3)}

function highlight3(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td bgcolor='lightgray'><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 30; r++) {
        if (highlight == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()'>"+d[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight41(){highlight4(); highlight = 1; graph1(4)}
function highlight42(){highlight4(); highlight = 2; graph1(4)}
function highlight43(){highlight4(); highlight = 3; graph1(4)}
function highlight44(){highlight4(); highlight = 4; graph1(4)}
function highlight45(){highlight4(); highlight = 5; graph1(4)}
function highlight46(){highlight4(); highlight = 6; graph1(4)}
function highlight47(){highlight4(); highlight = 7; graph1(4)}
function highlight48(){highlight4(); highlight = 8; graph1(4)}
function highlight49(){highlight4(); highlight = 9; graph1(4)}
function highlight410(){highlight4(); highlight = 10; graph1(4)}
function highlight411(){highlight4(); highlight = 11; graph1(4)}
function highlight412(){highlight4(); highlight = 12; graph1(4)}
function highlight413(){highlight4(); highlight = 13; graph1(4)}
function highlight414(){highlight4(); highlight = 14; graph1(4)}
function highlight415(){highlight4(); highlight = 15; graph1(4)}
function highlight416(){highlight4(); highlight = 16; graph1(4)}
function highlight417(){highlight4(); highlight = 17; graph1(4)}
function highlight418(){highlight4(); highlight = 18; graph1(4)}
function highlight419(){highlight4(); highlight = 19; graph1(4)}
function highlight420(){highlight4(); highlight = 20; graph1(4)}
function highlight421(){highlight4(); highlight = 21; graph1(4)}
function highlight422(){highlight4(); highlight = 22; graph1(4)}
function highlight423(){highlight4(); highlight = 23; graph1(4)}
function highlight424(){highlight4(); highlight = 24; graph1(4)}
function highlight425(){highlight4(); highlight = 25; graph1(4)}
function highlight426(){highlight4(); highlight = 26; graph1(4)}
function highlight427(){highlight4(); highlight = 27; graph1(4)}
function highlight428(){highlight4(); highlight = 28; graph1(4)}
function highlight429(){highlight4(); highlight = 29; graph1(4)}

function highlight4(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td bgcolor='lightgray'><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 30; r++) {
        if (highlight == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()'>"+d[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight51(){highlight5(); highlight = 1; graph1(5)}
function highlight52(){highlight5(); highlight = 2; graph1(5)}
function highlight53(){highlight5(); highlight = 3; graph1(5)}
function highlight54(){highlight5(); highlight = 4; graph1(5)}
function highlight55(){highlight5(); highlight = 5; graph1(5)}
function highlight56(){highlight5(); highlight = 6; graph1(5)}
function highlight57(){highlight5(); highlight = 7; graph1(5)}
function highlight58(){highlight5(); highlight = 8; graph1(5)}
function highlight59(){highlight5(); highlight = 9; graph1(5)}
function highlight510(){highlight5(); highlight = 10; graph1(5)}
function highlight511(){highlight5(); highlight = 11; graph1(5)}
function highlight512(){highlight5(); highlight = 12; graph1(5)}
function highlight513(){highlight5(); highlight = 13; graph1(5)}
function highlight514(){highlight5(); highlight = 14; graph1(5)}
function highlight515(){highlight5(); highlight = 15; graph1(5)}
function highlight516(){highlight5(); highlight = 16; graph1(5)}
function highlight517(){highlight5(); highlight = 17; graph1(5)}
function highlight518(){highlight5(); highlight = 18; graph1(5)}
function highlight519(){highlight5(); highlight = 19; graph1(5)}
function highlight520(){highlight5(); highlight = 20; graph1(5)}
function highlight521(){highlight5(); highlight = 21; graph1(5)}
function highlight522(){highlight5(); highlight = 22; graph1(5)}
function highlight523(){highlight5(); highlight = 23; graph1(5)}
function highlight524(){highlight5(); highlight = 24; graph1(5)}
function highlight525(){highlight5(); highlight = 25; graph1(5)}
function highlight526(){highlight5(); highlight = 26; graph1(5)}
function highlight527(){highlight5(); highlight = 27; graph1(5)}
function highlight528(){highlight5(); highlight = 28; graph1(5)}
function highlight529(){highlight5(); highlight = 29; graph1(5)}

function highlight5(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td bgcolor='lightgray'><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 30; r++) {
        if (highlight == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()'>"+d[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight61(){highlight6(); highlight = 1; graph1(6)}
function highlight62(){highlight6(); highlight = 2; graph1(6)}
function highlight63(){highlight6(); highlight = 3; graph1(6)}
function highlight64(){highlight6(); highlight = 4; graph1(6)}
function highlight65(){highlight6(); highlight = 5; graph1(6)}
function highlight66(){highlight6(); highlight = 6; graph1(6)}
function highlight67(){highlight6(); highlight = 7; graph1(6)}
function highlight68(){highlight6(); highlight = 8; graph1(6)}
function highlight69(){highlight6(); highlight = 9; graph1(6)}
function highlight610(){highlight6(); highlight = 10; graph1(6)}
function highlight611(){highlight6(); highlight = 11; graph1(6)}
function highlight612(){highlight6(); highlight = 12; graph1(6)}
function highlight613(){highlight6(); highlight = 13; graph1(6)}
function highlight614(){highlight6(); highlight = 14; graph1(6)}
function highlight615(){highlight6(); highlight = 15; graph1(6)}
function highlight616(){highlight6(); highlight = 16; graph1(6)}
function highlight617(){highlight6(); highlight = 17; graph1(6)}
function highlight618(){highlight6(); highlight = 18; graph1(6)}
function highlight619(){highlight6(); highlight = 19; graph1(6)}
function highlight620(){highlight6(); highlight = 20; graph1(6)}
function highlight621(){highlight6(); highlight = 21; graph1(6)}
function highlight622(){highlight6(); highlight = 22; graph1(6)}
function highlight623(){highlight6(); highlight = 23; graph1(6)}
function highlight624(){highlight6(); highlight = 24; graph1(6)}
function highlight625(){highlight6(); highlight = 25; graph1(6)}
function highlight626(){highlight6(); highlight = 26; graph1(6)}
function highlight627(){highlight6(); highlight = 27; graph1(6)}
function highlight628(){highlight6(); highlight = 28; graph1(6)}
function highlight629(){highlight6(); highlight = 29; graph1(6)}

function highlight6(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td bgcolor='lightgray'><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 30; r++) {
        if (highlight == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()'>"+d[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight71(){highlight7(); highlight = 1; graph1(7)}
function highlight72(){highlight7(); highlight = 2; graph1(7)}
function highlight73(){highlight7(); highlight = 3; graph1(7)}
function highlight74(){highlight7(); highlight = 4; graph1(7)}
function highlight75(){highlight7(); highlight = 5; graph1(7)}
function highlight76(){highlight7(); highlight = 6; graph1(7)}
function highlight77(){highlight7(); highlight = 7; graph1(7)}
function highlight78(){highlight7(); highlight = 8; graph1(7)}
function highlight79(){highlight7(); highlight = 9; graph1(7)}
function highlight710(){highlight7(); highlight = 10; graph1(7)}
function highlight711(){highlight7(); highlight = 11; graph1(7)}
function highlight712(){highlight7(); highlight = 12; graph1(7)}
function highlight713(){highlight7(); highlight = 13; graph1(7)}
function highlight714(){highlight7(); highlight = 14; graph1(7)}
function highlight715(){highlight7(); highlight = 15; graph1(7)}
function highlight716(){highlight7(); highlight = 16; graph1(7)}
function highlight717(){highlight7(); highlight = 17; graph1(7)}
function highlight718(){highlight7(); highlight = 18; graph1(7)}
function highlight719(){highlight7(); highlight = 19; graph1(7)}
function highlight720(){highlight7(); highlight = 20; graph1(7)}
function highlight721(){highlight7(); highlight = 21; graph1(7)}
function highlight722(){highlight7(); highlight = 22; graph1(7)}
function highlight723(){highlight7(); highlight = 23; graph1(7)}
function highlight724(){highlight7(); highlight = 24; graph1(7)}
function highlight725(){highlight7(); highlight = 25; graph1(7)}
function highlight726(){highlight7(); highlight = 26; graph1(7)}
function highlight727(){highlight7(); highlight = 27; graph1(7)}
function highlight728(){highlight7(); highlight = 28; graph1(7)}
function highlight729(){highlight7(); highlight = 29; graph1(7)}

function highlight7(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td bgcolor='lightgray'><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 30; r++) {
        if (highlight == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()'>"+d[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight81(){highlight8(); highlight = 1; graph1(8)}
function highlight82(){highlight8(); highlight = 2; graph1(8)}
function highlight83(){highlight8(); highlight = 3; graph1(8)}
function highlight84(){highlight8(); highlight = 4; graph1(8)}
function highlight85(){highlight8(); highlight = 5; graph1(8)}
function highlight86(){highlight8(); highlight = 6; graph1(8)}
function highlight87(){highlight8(); highlight = 7; graph1(8)}
function highlight88(){highlight8(); highlight = 8; graph1(8)}
function highlight89(){highlight8(); highlight = 9; graph1(8)}
function highlight810(){highlight8(); highlight = 10; graph1(8)}
function highlight811(){highlight8(); highlight = 11; graph1(8)}
function highlight812(){highlight8(); highlight = 12; graph1(8)}
function highlight813(){highlight8(); highlight = 13; graph1(8)}
function highlight814(){highlight8(); highlight = 14; graph1(8)}
function highlight815(){highlight8(); highlight = 15; graph1(8)}
function highlight816(){highlight8(); highlight = 16; graph1(8)}
function highlight817(){highlight8(); highlight = 17; graph1(8)}
function highlight818(){highlight8(); highlight = 18; graph1(8)}
function highlight819(){highlight8(); highlight = 19; graph1(8)}
function highlight820(){highlight8(); highlight = 20; graph1(8)}
function highlight821(){highlight8(); highlight = 21; graph1(8)}
function highlight822(){highlight8(); highlight = 22; graph1(8)}
function highlight823(){highlight8(); highlight = 23; graph1(8)}
function highlight824(){highlight8(); highlight = 24; graph1(8)}
function highlight825(){highlight8(); highlight = 25; graph1(8)}
function highlight826(){highlight8(); highlight = 26; graph1(8)}
function highlight827(){highlight8(); highlight = 27; graph1(8)}
function highlight828(){highlight8(); highlight = 28; graph1(8)}
function highlight829(){highlight8(); highlight = 29; graph1(8)}

function highlight8(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td bgcolor='lightgray'><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 30; r++) {
        if (highlight == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()'>"+d[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight91(){highlight9(); highlight = 1; graph1(9)}
function highlight92(){highlight9(); highlight = 2; graph1(9)}
function highlight93(){highlight9(); highlight = 3; graph1(9)}
function highlight94(){highlight9(); highlight = 4; graph1(9)}
function highlight95(){highlight9(); highlight = 5; graph1(9)}
function highlight96(){highlight9(); highlight = 6; graph1(9)}
function highlight97(){highlight9(); highlight = 7; graph1(9)}
function highlight98(){highlight9(); highlight = 8; graph1(9)}
function highlight99(){highlight9(); highlight = 9; graph1(9)}
function highlight910(){highlight9(); highlight = 10; graph1(9)}
function highlight911(){highlight9(); highlight = 11; graph1(9)}
function highlight912(){highlight9(); highlight = 12; graph1(9)}
function highlight913(){highlight9(); highlight = 13; graph1(9)}
function highlight914(){highlight9(); highlight = 14; graph1(9)}
function highlight915(){highlight9(); highlight = 15; graph1(9)}
function highlight916(){highlight9(); highlight = 16; graph1(9)}
function highlight917(){highlight9(); highlight = 17; graph1(9)}
function highlight918(){highlight9(); highlight = 18; graph1(9)}
function highlight919(){highlight9(); highlight = 19; graph1(9)}
function highlight920(){highlight9(); highlight = 20; graph1(9)}
function highlight921(){highlight9(); highlight = 21; graph1(9)}
function highlight922(){highlight9(); highlight = 22; graph1(9)}
function highlight923(){highlight9(); highlight = 23; graph1(9)}
function highlight924(){highlight9(); highlight = 24; graph1(9)}
function highlight925(){highlight9(); highlight = 25; graph1(9)}
function highlight926(){highlight9(); highlight = 26; graph1(9)}
function highlight927(){highlight9(); highlight = 27; graph1(9)}
function highlight928(){highlight9(); highlight = 28; graph1(9)}
function highlight929(){highlight9(); highlight = 29; graph1(9)}

function highlight9(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td bgcolor='lightgray'><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 30; r++) {
        if (highlight == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()' bgcolor='lightgray'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()' bgcolor='lightgray'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()' bgcolor='lightgray'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()' bgcolor='lightgray'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()' bgcolor='lightgray'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()' bgcolor='lightgray'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()' bgcolor='lightgray'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()' bgcolor='lightgray'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()' bgcolor='lightgray'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+r+"</b></td><td onmouseover = 'highlight0"+r+"()'>"+d[i].toFixed(3)+"</td><td onmouseover = 'highlight1"+r+"()'>"+d[i+1].toFixed(3)+"</td><td onmouseover = 'highlight2"+r+"()'>"+d[i+2].toFixed(3)+"</td><td onmouseover = 'highlight3"+r+"()'>"+d[i+3].toFixed(3)+"</td><td onmouseover = 'highlight4"+r+"()'>"+d[i+4].toFixed(3)+"</td><td onmouseover = 'highlight5"+r+"()'>"+d[i+5].toFixed(3)+"</td><td onmouseover = 'highlight6"+r+"()'>"+d[i+6].toFixed(3)+"</td><td onmouseover = 'highlight7"+r+"()'>"+d[i+7].toFixed(3)+"</td><td onmouseover = 'highlight8"+r+"()'>"+d[i+8].toFixed(3)+"</td><td onmouseover = 'highlight9"+r+"()' bgcolor='lightgray'>"+d[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}












var highlights

function highlights01(){highlights0(); highlights = 1; graph2(0)}
function highlights02(){highlights0(); highlights = 2; graph2(0)}
function highlights03(){highlights0(); highlights = 3; graph2(0)}
function highlights04(){highlights0(); highlights = 4; graph2(0)}
function highlights05(){highlights0(); highlights = 5; graph2(0)}
function highlights06(){highlights0(); highlights = 6; graph2(0)}
function highlights07(){highlights0(); highlights = 7; graph2(0)}
function highlights08(){highlights0(); highlights = 8; graph2(0)}
function highlights09(){highlights0(); highlights = 9; graph2(0)}
function highlights010(){highlights0(); highlights = 10; graph2(0)}
function highlights011(){highlights0(); highlights = 11; graph2(0)}
function highlights012(){highlights0(); highlights = 12; graph2(0)}
function highlights013(){highlights0(); highlights = 13; graph2(0)}
function highlights014(){highlights0(); highlights = 14; graph2(0)}
function highlights015(){highlights0(); highlights = 15; graph2(0)}
function highlights016(){highlights0(); highlights = 16; graph2(0)}
function highlights017(){highlights0(); highlights = 17; graph2(0)}
function highlights018(){highlights0(); highlights = 18; graph2(0)}
function highlights019(){highlights0(); highlights = 19; graph2(0)}
function highlights020(){highlights0(); highlights = 20; graph2(0)}
function highlights021(){highlights0(); highlights = 21; graph2(0)}
function highlights022(){highlights0(); highlights = 22; graph2(0)}
function highlights023(){highlights0(); highlights = 23; graph2(0)}
function highlights024(){highlights0(); highlights = 24; graph2(0)}
function highlights025(){highlights0(); highlights = 25; graph2(0)}
function highlights026(){highlights0(); highlights = 26; graph2(0)}
function highlights027(){highlights0(); highlights = 27; graph2(0)}
function highlights028(){highlights0(); highlights = 28; graph2(0)}
function highlights029(){highlights0(); highlights = 29; graph2(0)}


function highlights0(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td bgcolor='lightgray'><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 16; r++) {
        if (highlights == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+i+"()'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()'>"+d2[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights11(){highlights1(); highlights = 1; graph2(1)}
function highlights12(){highlights1(); highlights = 2; graph2(1)}
function highlights13(){highlights1(); highlights = 3; graph2(1)}
function highlights14(){highlights1(); highlights = 4; graph2(1)}
function highlights15(){highlights1(); highlights = 5; graph2(1)}
function highlights16(){highlights1(); highlights = 6; graph2(1)}
function highlights17(){highlights1(); highlights = 7; graph2(1)}
function highlights18(){highlights1(); highlights = 8; graph2(1)}
function highlights19(){highlights1(); highlights = 9; graph2(1)}
function highlights110(){highlights1(); highlights = 10; graph2(1)}
function highlights111(){highlights1(); highlights = 11; graph2(1)}
function highlights112(){highlights1(); highlights = 12; graph2(1)}
function highlights113(){highlights1(); highlights = 13; graph2(1)}
function highlights114(){highlights1(); highlights = 14; graph2(1)}
function highlights115(){highlights1(); highlights = 15; graph2(1)}
function highlights116(){highlights1(); highlights = 16; graph2(1)}
function highlights117(){highlights1(); highlights = 17; graph2(1)}
function highlights118(){highlights1(); highlights = 18; graph2(1)}
function highlights119(){highlights1(); highlights = 19; graph2(1)}
function highlights120(){highlights1(); highlights = 20; graph2(1)}
function highlights121(){highlights1(); highlights = 21; graph2(1)}
function highlights122(){highlights1(); highlights = 22; graph2(1)}
function highlights123(){highlights1(); highlights = 23; graph2(1)}
function highlights124(){highlights1(); highlights = 24; graph2(1)}
function highlights125(){highlights1(); highlights = 25; graph2(1)}
function highlights126(){highlights1(); highlights = 26; graph2(1)}
function highlights127(){highlights1(); highlights = 27; graph2(1)}
function highlights128(){highlights1(); highlights = 28; graph2(1)}
function highlights129(){highlights1(); highlights = 29; graph2(1)}

function highlights1(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td bgcolor='lightgray'><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 16; r++) {
        if (highlights == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()'>"+d2[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights21(){highlights2(); highlights = 1; graph2(2)}
function highlights22(){highlights2(); highlights = 2; graph2(2)}
function highlights23(){highlights2(); highlights = 3; graph2(2)}
function highlights24(){highlights2(); highlights = 4; graph2(2)}
function highlights25(){highlights2(); highlights = 5; graph2(2)}
function highlights26(){highlights2(); highlights = 6; graph2(2)}
function highlights27(){highlights2(); highlights = 7; graph2(2)}
function highlights28(){highlights2(); highlights = 8; graph2(2)}
function highlights29(){highlights2(); highlights = 9; graph2(2)}
function highlights210(){highlights2(); highlights = 10; graph2(2)}
function highlights211(){highlights2(); highlights = 11; graph2(2)}
function highlights212(){highlights2(); highlights = 12; graph2(2)}
function highlights213(){highlights2(); highlights = 13; graph2(2)}
function highlights214(){highlights2(); highlights = 14; graph2(2)}
function highlights215(){highlights2(); highlights = 15; graph2(2)}
function highlights216(){highlights2(); highlights = 16; graph2(2)}
function highlights217(){highlights2(); highlights = 17; graph2(2)}
function highlights218(){highlights2(); highlights = 18; graph2(2)}
function highlights219(){highlights2(); highlights = 19; graph2(2)}
function highlights220(){highlights2(); highlights = 20; graph2(2)}
function highlights221(){highlights2(); highlights = 21; graph2(2)}
function highlights222(){highlights2(); highlights = 22; graph2(2)}
function highlights223(){highlights2(); highlights = 23; graph2(2)}
function highlights224(){highlights2(); highlights = 24; graph2(2)}
function highlights225(){highlights2(); highlights = 25; graph2(2)}
function highlights226(){highlights2(); highlights = 26; graph2(2)}
function highlights227(){highlights2(); highlights = 27; graph2(2)}
function highlights228(){highlights2(); highlights = 28; graph2(2)}
function highlights229(){highlights2(); highlights = 29; graph2(2)}

function highlights2(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td bgcolor='lightgray'><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 16; r++) {
        if (highlights == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()'>"+d2[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights31(){highlights3(); highlights = 1; graph2(3)}
function highlights32(){highlights3(); highlights = 2; graph2(3)}
function highlights33(){highlights3(); highlights = 3; graph2(3)}
function highlights34(){highlights3(); highlights = 4; graph2(3)}
function highlights35(){highlights3(); highlights = 5; graph2(3)}
function highlights36(){highlights3(); highlights = 6; graph2(3)}
function highlights37(){highlights3(); highlights = 7; graph2(3)}
function highlights38(){highlights3(); highlights = 8; graph2(3)}
function highlights39(){highlights3(); highlights = 9; graph2(3)}
function highlights310(){highlights3(); highlights = 10; graph2(3)}
function highlights311(){highlights3(); highlights = 11; graph2(3)}
function highlights312(){highlights3(); highlights = 12; graph2(3)}
function highlights313(){highlights3(); highlights = 13; graph2(3)}
function highlights314(){highlights3(); highlights = 14; graph2(3)}
function highlights315(){highlights3(); highlights = 15; graph2(3)}
function highlights316(){highlights3(); highlights = 16; graph2(3)}
function highlights317(){highlights3(); highlights = 17; graph2(3)}
function highlights318(){highlights3(); highlights = 18; graph2(3)}
function highlights319(){highlights3(); highlights = 19; graph2(3)}
function highlights320(){highlights3(); highlights = 20; graph2(3)}
function highlights321(){highlights3(); highlights = 21; graph2(3)}
function highlights322(){highlights3(); highlights = 22; graph2(3)}
function highlights323(){highlights3(); highlights = 23; graph2(3)}
function highlights324(){highlights3(); highlights = 24; graph2(3)}
function highlights325(){highlights3(); highlights = 25; graph2(3)}
function highlights326(){highlights3(); highlights = 26; graph2(3)}
function highlights327(){highlights3(); highlights = 27; graph2(3)}
function highlights328(){highlights3(); highlights = 28; graph2(3)}
function highlights329(){highlights3(); highlights = 29; graph2(3)}

function highlights3(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td bgcolor='lightgray'><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 16; r++) {
        if (highlights == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()'>"+d2[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights41(){highlights4(); highlights = 1; graph2(4)}
function highlights42(){highlights4(); highlights = 2; graph2(4)}
function highlights43(){highlights4(); highlights = 3; graph2(4)}
function highlights44(){highlights4(); highlights = 4; graph2(4)}
function highlights45(){highlights4(); highlights = 5; graph2(4)}
function highlights46(){highlights4(); highlights = 6; graph2(4)}
function highlights47(){highlights4(); highlights = 7; graph2(4)}
function highlights48(){highlights4(); highlights = 8; graph2(4)}
function highlights49(){highlights4(); highlights = 9; graph2(4)}
function highlights410(){highlights4(); highlights = 10; graph2(4)}
function highlights411(){highlights4(); highlights = 11; graph2(4)}
function highlights412(){highlights4(); highlights = 12; graph2(4)}
function highlights413(){highlights4(); highlights = 13; graph2(4)}
function highlights414(){highlights4(); highlights = 14; graph2(4)}
function highlights415(){highlights4(); highlights = 15; graph2(4)}
function highlights416(){highlights4(); highlights = 16; graph2(4)}
function highlights417(){highlights4(); highlights = 17; graph2(4)}
function highlights418(){highlights4(); highlights = 18; graph2(4)}
function highlights419(){highlights4(); highlights = 19; graph2(4)}
function highlights420(){highlights4(); highlights = 20; graph2(4)}
function highlights421(){highlights4(); highlights = 21; graph2(4)}
function highlights422(){highlights4(); highlights = 22; graph2(4)}
function highlights423(){highlights4(); highlights = 23; graph2(4)}
function highlights424(){highlights4(); highlights = 24; graph2(4)}
function highlights425(){highlights4(); highlights = 25; graph2(4)}
function highlights426(){highlights4(); highlights = 26; graph2(4)}
function highlights427(){highlights4(); highlights = 27; graph2(4)}
function highlights428(){highlights4(); highlights = 28; graph2(4)}
function highlights429(){highlights4(); highlights = 29; graph2(4)}

function highlights4(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td bgcolor='lightgray'><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 16; r++) {
        if (highlights == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()'>"+d2[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights51(){highlights5(); highlights = 1; graph2(5)}
function highlights52(){highlights5(); highlights = 2; graph2(5)}
function highlights53(){highlights5(); highlights = 3; graph2(5)}
function highlights54(){highlights5(); highlights = 4; graph2(5)}
function highlights55(){highlights5(); highlights = 5; graph2(5)}
function highlights56(){highlights5(); highlights = 6; graph2(5)}
function highlights57(){highlights5(); highlights = 7; graph2(5)}
function highlights58(){highlights5(); highlights = 8; graph2(5)}
function highlights59(){highlights5(); highlights = 9; graph2(5)}
function highlights510(){highlights5(); highlights = 10; graph2(5)}
function highlights511(){highlights5(); highlights = 11; graph2(5)}
function highlights512(){highlights5(); highlights = 12; graph2(5)}
function highlights513(){highlights5(); highlights = 13; graph2(5)}
function highlights514(){highlights5(); highlights = 14; graph2(5)}
function highlights515(){highlights5(); highlights = 15; graph2(5)}
function highlights516(){highlights5(); highlights = 16; graph2(5)}
function highlights517(){highlights5(); highlights = 17; graph2(5)}
function highlights518(){highlights5(); highlights = 18; graph2(5)}
function highlights519(){highlights5(); highlights = 19; graph2(5)}
function highlights520(){highlights5(); highlights = 20; graph2(5)}
function highlights521(){highlights5(); highlights = 21; graph2(5)}
function highlights522(){highlights5(); highlights = 22; graph2(5)}
function highlights523(){highlights5(); highlights = 23; graph2(5)}
function highlights524(){highlights5(); highlights = 24; graph2(5)}
function highlights525(){highlights5(); highlights = 25; graph2(5)}
function highlights526(){highlights5(); highlights = 26; graph2(5)}
function highlights527(){highlights5(); highlights = 27; graph2(5)}
function highlights528(){highlights5(); highlights = 28; graph2(5)}
function highlights529(){highlights5(); highlights = 29; graph2(5)}

function highlights5(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td bgcolor='lightgray'><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 16; r++) {
        if (highlights == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()'>"+d2[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights61(){highlights6(); highlights = 1; graph2(6)}
function highlights62(){highlights6(); highlights = 2; graph2(6)}
function highlights63(){highlights6(); highlights = 3; graph2(6)}
function highlights64(){highlights6(); highlights = 4; graph2(6)}
function highlights65(){highlights6(); highlights = 5; graph2(6)}
function highlights66(){highlights6(); highlights = 6; graph2(6)}
function highlights67(){highlights6(); highlights = 7; graph2(6)}
function highlights68(){highlights6(); highlights = 8; graph2(6)}
function highlights69(){highlights6(); highlights = 9; graph2(6)}
function highlights610(){highlights6(); highlights = 10; graph2(6)}
function highlights611(){highlights6(); highlights = 11; graph2(6)}
function highlights612(){highlights6(); highlights = 12; graph2(6)}
function highlights613(){highlights6(); highlights = 13; graph2(6)}
function highlights614(){highlights6(); highlights = 14; graph2(6)}
function highlights615(){highlights6(); highlights = 15; graph2(6)}
function highlights616(){highlights6(); highlights = 16; graph2(6)}
function highlights617(){highlights6(); highlights = 17; graph2(6)}
function highlights618(){highlights6(); highlights = 18; graph2(6)}
function highlights619(){highlights6(); highlights = 19; graph2(6)}
function highlights620(){highlights6(); highlights = 20; graph2(6)}
function highlights621(){highlights6(); highlights = 21; graph2(6)}
function highlights622(){highlights6(); highlights = 22; graph2(6)}
function highlights623(){highlights6(); highlights = 23; graph2(6)}
function highlights624(){highlights6(); highlights = 24; graph2(6)}
function highlights625(){highlights6(); highlights = 25; graph2(6)}
function highlights626(){highlights6(); highlights = 26; graph2(6)}
function highlights627(){highlights6(); highlights = 27; graph2(6)}
function highlights628(){highlights6(); highlights = 28; graph2(6)}
function highlights629(){highlights6(); highlights = 29; graph2(6)}

function highlights6(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td bgcolor='lightgray'><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 16; r++) {
        if (highlights == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()'>"+d2[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights71(){highlights7(); highlights = 1; graph2(7)}
function highlights72(){highlights7(); highlights = 2; graph2(7)}
function highlights73(){highlights7(); highlights = 3; graph2(7)}
function highlights74(){highlights7(); highlights = 4; graph2(7)}
function highlights75(){highlights7(); highlights = 5; graph2(7)}
function highlights76(){highlights7(); highlights = 6; graph2(7)}
function highlights77(){highlights7(); highlights = 7; graph2(7)}
function highlights78(){highlights7(); highlights = 8; graph2(7)}
function highlights79(){highlights7(); highlights = 9; graph2(7)}
function highlights710(){highlights7(); highlights = 10; graph2(7)}
function highlights711(){highlights7(); highlights = 11; graph2(7)}
function highlights712(){highlights7(); highlights = 12; graph2(7)}
function highlights713(){highlights7(); highlights = 13; graph2(7)}
function highlights714(){highlights7(); highlights = 14; graph2(7)}
function highlights715(){highlights7(); highlights = 15; graph2(7)}
function highlights716(){highlights7(); highlights = 16; graph2(7)}
function highlights717(){highlights7(); highlights = 17; graph2(7)}
function highlights718(){highlights7(); highlights = 18; graph2(7)}
function highlights719(){highlights7(); highlights = 19; graph2(7)}
function highlights720(){highlights7(); highlights = 20; graph2(7)}
function highlights721(){highlights7(); highlights = 21; graph2(7)}
function highlights722(){highlights7(); highlights = 22; graph2(7)}
function highlights723(){highlights7(); highlights = 23; graph2(7)}
function highlights724(){highlights7(); highlights = 24; graph2(7)}
function highlights725(){highlights7(); highlights = 25; graph2(7)}
function highlights726(){highlights7(); highlights = 26; graph2(7)}
function highlights727(){highlights7(); highlights = 27; graph2(7)}
function highlights728(){highlights7(); highlights = 28; graph2(7)}
function highlights729(){highlights7(); highlights = 29; graph2(7)}

function highlights7(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td bgcolor='lightgray'><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 16; r++) {
        if (highlights == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()'>"+d2[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights81(){highlights8(); highlights = 1; graph2(8)}
function highlights82(){highlights8(); highlights = 2; graph2(8)}
function highlights83(){highlights8(); highlights = 3; graph2(8)}
function highlights84(){highlights8(); highlights = 4; graph2(8)}
function highlights85(){highlights8(); highlights = 5; graph2(8)}
function highlights86(){highlights8(); highlights = 6; graph2(8)}
function highlights87(){highlights8(); highlights = 7; graph2(8)}
function highlights88(){highlights8(); highlights = 8; graph2(8)}
function highlights89(){highlights8(); highlights = 9; graph2(8)}
function highlights810(){highlights8(); highlights = 10; graph2(8)}
function highlights811(){highlights8(); highlights = 11; graph2(8)}
function highlights812(){highlights8(); highlights = 12; graph2(8)}
function highlights813(){highlights8(); highlights = 13; graph2(8)}
function highlights814(){highlights8(); highlights = 14; graph2(8)}
function highlights815(){highlights8(); highlights = 15; graph2(8)}
function highlights816(){highlights8(); highlights = 16; graph2(8)}
function highlights817(){highlights8(); highlights = 17; graph2(8)}
function highlights818(){highlights8(); highlights = 18; graph2(8)}
function highlights819(){highlights8(); highlights = 19; graph2(8)}
function highlights820(){highlights8(); highlights = 20; graph2(8)}
function highlights821(){highlights8(); highlights = 21; graph2(8)}
function highlights822(){highlights8(); highlights = 22; graph2(8)}
function highlights823(){highlights8(); highlights = 23; graph2(8)}
function highlights824(){highlights8(); highlights = 24; graph2(8)}
function highlights825(){highlights8(); highlights = 25; graph2(8)}
function highlights826(){highlights8(); highlights = 26; graph2(8)}
function highlights827(){highlights8(); highlights = 27; graph2(8)}
function highlights828(){highlights8(); highlights = 28; graph2(8)}
function highlights829(){highlights8(); highlights = 29; graph2(8)}

function highlights8(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td bgcolor='lightgray'><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 16; r++) {
        if (highlights == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()'>"+d2[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights91(){highlights9(); highlights = 1; graph2(9)}
function highlights92(){highlights9(); highlights = 2; graph2(9)}
function highlights93(){highlights9(); highlights = 3; graph2(9)}
function highlights94(){highlights9(); highlights = 4; graph2(9)}
function highlights95(){highlights9(); highlights = 5; graph2(9)}
function highlights96(){highlights9(); highlights = 6; graph2(9)}
function highlights97(){highlights9(); highlights = 7; graph2(9)}
function highlights98(){highlights9(); highlights = 8; graph2(9)}
function highlights99(){highlights9(); highlights = 9; graph2(9)}
function highlights910(){highlights9(); highlights = 10; graph2(9)}
function highlights911(){highlights9(); highlights = 11; graph2(9)}
function highlights912(){highlights9(); highlights = 12; graph2(9)}
function highlights913(){highlights9(); highlights = 13; graph2(9)}
function highlights914(){highlights9(); highlights = 14; graph2(9)}
function highlights915(){highlights9(); highlights = 15; graph2(9)}
function highlights916(){highlights9(); highlights = 16; graph2(9)}
function highlights917(){highlights9(); highlights = 17; graph2(9)}
function highlights918(){highlights9(); highlights = 18; graph2(9)}
function highlights919(){highlights9(); highlights = 19; graph2(9)}
function highlights920(){highlights9(); highlights = 20; graph2(9)}
function highlights921(){highlights9(); highlights = 21; graph2(9)}
function highlights922(){highlights9(); highlights = 22; graph2(9)}
function highlights923(){highlights9(); highlights = 23; graph2(9)}
function highlights924(){highlights9(); highlights = 24; graph2(9)}
function highlights925(){highlights9(); highlights = 25; graph2(9)}
function highlights926(){highlights9(); highlights = 26; graph2(9)}
function highlights927(){highlights9(); highlights = 27; graph2(9)}
function highlights928(){highlights9(); highlights = 28; graph2(9)}
function highlights929(){highlights9(); highlights = 29; graph2(9)}

function highlights9(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='10' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.995</b></td><td><b>.99</b></td><td><b>.975</b></td><td><b>.95</b></td><td><b>.90</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td bgcolor='lightgray'><b>.005</b></td></tr>"
    table2 = []
    for (r = 1; r < 16; r++) {
        if (highlights == r) {
            i = 10*(r-1)
            table2 += "<tr><td bgcolor='lightgray'><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()' bgcolor='lightgray'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()' bgcolor='lightgray'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()' bgcolor='lightgray'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()' bgcolor='lightgray'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()' bgcolor='lightgray'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()' bgcolor='lightgray'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()' bgcolor='lightgray'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()' bgcolor='lightgray'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()' bgcolor='lightgray'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        } else {
            i = 10*(r-1)
            table2 += "<tr><td><b>"+(25 + 5*r)+"</b></td><td onmouseover = 'highlights0"+r+"()'>"+d2[i].toFixed(3)+"</td><td onmouseover = 'highlights1"+r+"()'>"+d2[i+1].toFixed(3)+"</td><td onmouseover = 'highlights2"+r+"()'>"+d2[i+2].toFixed(3)+"</td><td onmouseover = 'highlights3"+r+"()'>"+d2[i+3].toFixed(3)+"</td><td onmouseover = 'highlights4"+r+"()'>"+d2[i+4].toFixed(3)+"</td><td onmouseover = 'highlights5"+r+"()'>"+d2[i+5].toFixed(3)+"</td><td onmouseover = 'highlights6"+r+"()'>"+d2[i+6].toFixed(3)+"</td><td onmouseover = 'highlights7"+r+"()'>"+d2[i+7].toFixed(3)+"</td><td onmouseover = 'highlights8"+r+"()'>"+d2[i+8].toFixed(3)+"</td><td onmouseover = 'highlights9"+r+"()' bgcolor='lightgray'>"+d2[i+9].toFixed(3)+"</td></tr>"
        }
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output2").innerHTML = tablez
}


















var canvas = document.getElementById("Canvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

graph0();

function graph0(){
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 22; i++) {
        var j = (i-300)/100
        f[i] = parseFloat(Math.pow(i,8/2-1)*Math.pow(exp,-.5*i))
    }
    var c = document.getElementById("Canvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 10);
    ctx.lineTo(20, 130);
    ctx.lineTo(272, 130);
    ctx.stroke();
    ctx.fillText("χ²",277,132);
    var points = []
    for (i = 0; i < 22; i++) {
        points[i] = {x:20 + 12*i, y:130 - 10*f[i]}
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
}

function graph1(z){
    if (z < 5) {
        var end = 22 - z 
    } else {
        var end = 15-z
    }
    
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 22; i++) {
        var j = (i-300)/100
        f[i] = parseFloat(Math.pow(i,8/2-1)*Math.pow(exp,-.5*i))
    }
    var c = document.getElementById("Canvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    var points0 = []
    for (i = 0; i < end; i++) {
        points0[i] = {x:272 - 12*i, y:130 - 10*f[21-i]}
    }
    // move to the first point
    ctx.moveTo(points0[0].x, points0[0].y);
    for (i = 1; i < points0.length - 2; i ++){
        var xc = (points0[i].x + points0[i + 1].x) / 2;
        var yc = (points0[i].y + points0[i + 1].y) / 2;
        ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
    }
    // curve through the last two points
    //ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    //ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    //ctx.lineTo(20 + .433*z, 130 - 300*f[Math.round(lessvalz)]);
    
    ctx.lineTo((points0[i-1].x+points0[i].x)/2, 130);
    ctx.lineTo(272, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 10);
    ctx.lineTo(20, 130);
    ctx.lineTo(272, 130);
    ctx.moveTo((points0[i-1].x+points0[i].x)/2, 135);
    ctx.lineTo((points0[i-1].x+points0[i].x)/2, 125);
    ctx.stroke();
    ctx.fillText("χ²",(points0[i-1].x+points0[i].x)/2 - 3,143);
    var points = []
    for (i = 0; i < 22; i++) {
        points[i] = {x:20 + 12*i, y:130 - 10*f[i]}
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
}





var canvas = document.getElementById("Canvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

graph00();

function graph00(){
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 22; i++) {
        var j = (i-300)/100
        f[i] = parseFloat(Math.pow(i,8/2-1)*Math.pow(exp,-.5*i))
    }
    var c = document.getElementById("Canvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 10);
    ctx.lineTo(20, 130);
    ctx.lineTo(272, 130);
    ctx.stroke();
    ctx.fillText("χ²",277,132);
    var points = []
    for (i = 0; i < 22; i++) {
        points[i] = {x:20 + 12*i, y:130 - 10*f[i]}
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
}

function graph2(z){
    if (z < 5) {
        var end = 22 - z 
    } else {
        var end = 15-z
    }
    
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 22; i++) {
        var j = (i-300)/100
        f[i] = parseFloat(Math.pow(i,8/2-1)*Math.pow(exp,-.5*i))
    }
    var c = document.getElementById("Canvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    var points0 = []
    for (i = 0; i < end; i++) {
        points0[i] = {x:272 - 12*i, y:130 - 10*f[21-i]}
    }
    // move to the first point
    ctx.moveTo(points0[0].x, points0[0].y);
    for (i = 1; i < points0.length - 2; i ++){
        var xc = (points0[i].x + points0[i + 1].x) / 2;
        var yc = (points0[i].y + points0[i + 1].y) / 2;
        ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
    }
    // curve through the last two points
    //ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    //ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    //ctx.lineTo(20 + .433*z, 130 - 300*f[Math.round(lessvalz)]);
    
    ctx.lineTo((points0[i-1].x+points0[i].x)/2, 130);
    ctx.lineTo(272, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 10);
    ctx.lineTo(20, 130);
    ctx.lineTo(272, 130);
    ctx.moveTo((points0[i-1].x+points0[i].x)/2, 135);
    ctx.lineTo((points0[i-1].x+points0[i].x)/2, 125);
    ctx.stroke();
    ctx.fillText("χ²",(points0[i-1].x+points0[i].x)/2 - 3,143);
    var points = []
    for (i = 0; i < 22; i++) {
        points[i] = {x:20 + 12*i, y:130 - 10*f[i]}
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
}
