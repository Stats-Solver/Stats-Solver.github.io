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


var c = [
    [.000, .000, .001, .004, .016, 2.706, 3.841, 5.024, 6.635, 7.879],
    [.010, .020, .051, .103, .211, 4.605, 5.991, 7.378, 9.210, 10.597],
    [.072, .115, .216, .352, .584, 6.251, 7.815, 9.348, 11.345, 12.838],
    [.207, .297, .484, .711, 1.064, 7.779, 9.488, 11.143, 13.277, 14.860],
    [.412, .554, .831, 1.145, 1.610, 9.236, 11.070, 12.832, 15.086, 16.750],
    [.676, .872, 1.237, 1.635, 2.204, 10.645, 12.592, 14.449, 16.812, 18.548],
    [.989, 1.239, 1.690, 2.167, 2.833, 12.017, 14.067, 16.013, 18.475, 20.278],
    [1.344, 1.647, 2.180, 2.733, 3.490, 13.362, 15.507, 17.535, 20.090, 21.955],
    [1.735, 2.088, 2.700, 3.325, 4.168, 14.684, 16.919, 19.023, 21.666, 23.589],
    [2.156, 2.558, 3.247, 3.940, 4.865, 15.987, 18.307, 20.483, 23.209, 25.188],
    [2.603, 3.053, 3.816, 4.575, 5.578, 17.275, 19.675, 21.920, 24.725, 26.757],
    [3.074, 3.571, 4.404, 5.226, 6.304, 18.549, 21.026, 23.337, 26.217, 28.300],
    [3.565, 4.107, 5.009, 5.892, 7.041, 19.812, 22.362, 24.736, 27.688, 29.819],
    [4.075, 4.660, 5.629, 6.571, 7.790, 21.064, 23.685, 26.119, 29.141, 31.319],
    [4.601, 5.229, 6.262, 7.261, 8.547, 22.307, 24.996, 27.488, 30.578, 32.801],
    [5.142, 5.812, 6.908, 7.962, 9.312, 23.542, 26.296, 28.845, 32.000, 34.267],
    [5.697, 6.408, 7.564, 8.672, 10.085, 24.769, 27.587, 30.191, 33.409, 35.718],
    [6.265, 7.015, 8.231, 9.390, 10.865, 25.989, 28.869, 31.526, 34.805, 37.156],
    [6.844, 7.633, 8.907, 10.117, 11.651, 27.204, 30.144, 32.852, 36.191, 38.582],
    [7.434, 8.260, 9.591, 10.851, 12.443, 28.412, 31.410, 34.170, 37.566, 39.997],
    [8.034, 8.897, 10.283, 11.591, 13.240, 29.615, 32.671, 35.479, 38.932, 41.401],
    [8.643, 9.542, 10.982, 12.338, 14.041, 30.813, 33.924, 36.781, 40.289, 42.796],
    [9.260, 10.196, 11.689, 13.091, 14.848, 32.007, 35.172, 38.076, 41.638, 44.181],
    [9.886, 10.856, 12.401, 13.848, 15.659, 33.196, 36.415, 39.364, 42.980, 45.558],
    [10.520, 11.524, 13.120, 14.611, 16.473, 34.382, 37.652, 40.646, 44.314, 46.928],
    [11.160, 12.198, 13.844, 15.379, 17.292, 35.563, 38.885, 41.923, 45.642, 48.290],
    [11.808, 12.878, 14.573, 16.151, 18.114, 36.741, 40.113, 43.195, 46.963, 49.645],
    [12.461, 13.565, 15.308, 16.928, 18.939, 37.916, 41.337, 44.461, 48.278, 50.994],
    [13.121, 14.256, 16.047, 17.708, 19.768, 39.087, 42.557, 45.722, 49.588, 52.335],
    [13.787, 14.953, 16.791, 18.493, 20.599, 40.256, 43.773, 46.979, 50.892, 53.672],
    [17.192, 18.509, 20.569, 22.465, 24.797, 46.059, 49.802, 53.203, 57.342, 60.275],
    [20.707, 22.164, 24.433, 26.509, 29.051, 51.805, 55.758, 59.342, 63.691, 66.766],
    [24.311, 25.901, 28.366, 30.612, 33.350, 57.505, 61.656, 65.410, 69.957, 73.166],
    [27.991, 29.707, 32.357, 34.764, 37.689, 63.167, 67.505, 71.420, 76.154, 79.490],
    [31.735, 33.571, 36.398, 38.958, 42.060, 68.796, 73.311, 77.380, 82.292, 85.749],
    [35.534, 37.485, 40.482, 43.188, 46.459, 74.397, 79.082, 83.298, 88.379, 91.952],
    [39.383, 41.444, 44.603, 47.450, 50.883, 79.973, 84.821, 89.177, 94.422, 98.105],
    [43.275, 45.442, 48.758, 51.739, 55.329, 85.527, 90.531, 95.023, 100.425, 104.215],
    [47.206, 49.475, 52.942, 56.054, 59.795, 91.061, 96.217, 100.839, 106.393, 110.285],
    [51.172, 53.540, 57.153, 60.391, 64.278, 96.578, 101.879, 106.629, 112.329, 116.321],
    [55.170, 57.634, 61.389, 64.749, 68.777, 102.079, 107.522, 112.393, 118.236, 122.324],
    [59.196, 61.754, 65.647, 69.126, 73.291, 107.565, 113.145, 118.136, 124.116, 128.299],
    [63.250, 65.898, 69.925, 73.520, 77.818, 113.038, 118.752, 123.858, 129.973, 134.247],
    [67.328, 70.065, 74.222, 77.929, 82.358, 118.498, 124.342, 129.561, 135.807, 140.170],
]














table(1,0);

function table(d,s){
	if (d < 11) {
    	table1 = "<tr><td colspan='8' style='color:black'><i>Click to Highlight</i></td></tr>";		
	} else {
    	table1 = "<tr><td></td><td></td><td></td><td colspan='2' style='cursor:pointer' onclick='table("+(d-10)+","+s+")' class='text-primary'>&#9650;</td><td></td><td></td></tr>";
	}
    if (s == 0) {
        table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>df</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.995</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.99</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.975</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.95</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.90</b></td><td></td></tr>";          
    } else {
        table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>df</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.10</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.05</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.025</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.01</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.005</b></td><td></td></tr>";                  
    }
    table3 = [];
    for (i = d; i < d+10; i++) {
        if (i == d+4){
            if (s == 0) {
				if (d < 30) {
					table3 += "<tr><td style='color:white'>&#9664;</td><td><b>"+i+"</b></td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][0]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][1]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][2]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][3]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][4]))+"</td>"+
                    "<td style='cursor:pointer' onclick='table("+d+",1)' class='text-primary'>&#9654;</td></tr>";            
				} else {
					table3 += "<tr><td style='color:white'>&#9664;</td><td><b>"+(i*5-30*4)+"</b></td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][0]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][1]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][2]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][3]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][4]))+"</td>"+
                    "<td style='cursor:pointer' onclick='table("+d+",1)' class='text-primary'>&#9654;</td></tr>";            
				}  
            } else {
				if (d < 30) {
                	table3 += "<tr><td style='cursor:pointer' onclick='table("+d+",0)' class='text-primary'>&#9664;</td><td><b>"+i+"</b></td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][5]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][6]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][7]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][8]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][9]))+"</td>"+
                    "<td style='color:white'>&#9654;</td></tr>";  					
				} else {
					table3 += "<tr><td style='cursor:pointer' onclick='table("+d+",0)' class='text-primary'>&#9664;</td><td><b>"+(i*5-30*4)+"</b></td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][5]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][6]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][7]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][8]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][9]))+"</td>"+
                    "<td style='color:white'>&#9654;</td></tr>"; 
				}                             
            }            
        } else {
            if (s == 0) {
				if (d < 30) {
                	table3 += "<tr><td></td><td><b>"+i+"</b></td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][0]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][1]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][2]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][3]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][4]))+"</td>"+
                    "<td></td></tr>";  					
				} else {
					table3 += "<tr><td></td><td><b>"+(i*5-30*4)+"</b></td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][0]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][1]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][2]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][3]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][4]))+"</td>"+
                    "<td></td></tr>";  	
				}                                            
            } else {
				if (d < 30) {
					table3 += "<tr><td></td><td><b>"+i+"</b></td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][5]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][6]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][7]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][8]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][9]))+"</td>"+
                    "<td></td></tr>"; 
				} else {
					table3 += "<tr><td></td><td><b>"+(i*5-30*4)+"</b></td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][5]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][6]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][7]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][8]))+"</td>"+
                    "<td style='cursor:pointer'>"+(formatValue(c[i-1][9]))+"</td>"+
                    "<td></td></tr>"; 
				}                                              
            }
        }
    }
	if (d < 30) {
		table4 = "<tr><td></td><td></td><td></td><td colspan='2' style='cursor:pointer' onclick='table("+(d+10)+","+s+")' class='text-primary'>&#9660;</td><td></td><td></td></tr>";
	} else {
		table4 = "<tr><td></td><td></td><td></td><td colspan='2' style='color:white'>&#9660;</td><td></td><td></td></tr>";
	}
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+table4+"</table>";
    document.getElementById("output").innerHTML = tablez;

    // Helper function for formatting values with appropriate decimal places
    function formatValue(value) {
        if (value >= 100) {
            return value.toFixed(1);
        } else if (value >= 10) {
            return value.toFixed(2);
        } else {
            return value.toFixed(3);
        }
    }
}









    









var canvas = document.getElementById("Canvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

graph00();

function graph00(){
    var d = 10;
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = i/40
      f[i] = parseFloat((Math.pow(j,1)*Math.exp(-j/2))/(Math.pow(2,1)*gammafn(1)))
    }
    var c = document.getElementById("Canvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    //ctx.fillText("Standard Normal Distribution",85,10);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.fillText("χ²",285,132);
    ctx.moveTo(20, 130);
    ctx.lineTo(20, 20);
    ctx.fillText("0",18,141);
    //ctx.fillText("σ=1",225,50);
    var points = []
    for (i = 0; i < 600; i++) {
        points[i] = {x:20 + .433*i, y:130 - 275*f[i]}
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






