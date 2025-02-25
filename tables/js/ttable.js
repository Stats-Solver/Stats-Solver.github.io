function roundup11(number) {
  return 1 + Math.ceil(number / 10) * 10;
}

function rounddown11(number) {
  return 1 + Math.floor((number-1) / 10) * 10;
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
	







function tdens(t,v) {
    (gammafn((v+1)/2)/(Math.sqrt(v*Math.PI)*gammafn(v/2)))*Math.pow(1+((t*t)/v),-(v+1)/2)
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






table(1)


function table(d){
    if (d == 1) {
        table1 = "<tr><td colspan='7' style='color:black'><i>Click to Highlight</i></td></tr>"
    } else {
        table1 = "<tr><td colspan='7' style='cursor:pointer' style='cursor:pointer' onclick='table("+(d-10)+")' class='text-primary'>&#9650;</td></tr>"
    }
    table2 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table3 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table4 = []
    for (i = d; i < d + 10; i++) {
        if (i == 1) {
            table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(2)+"</td></tr>"
        } else if (i == 100) {
            table4 += "<tr><td><b>&#8734;</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, 999999).toFixed(3)+"</td></tr>"
        } else {
            table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
    } 
    if (d < 91) {
        table5 = "<tr><td colspan='7' style='cursor:pointer' style='cursor:pointer' onclick='table("+(d+10)+")' class='text-primary'>&#9660;</td></tr>"
    } else {
        table5 = "<tr><td colspan='7'  style='color:white'>&#9660;</td></tr>"
    }
    var tablet = "<table style='column-gap: 20px;'>"+table1+table2+table3+table4+table5+"</table>"
    document.getElementById("output").innerHTML = tablet
}


function highlight(x,y){
    if (rounddown11(x) == 1) {
        table1 = "<tr><td colspan='7' style='color:black'><i>Click to Highlight</i></td></tr>"
    } else {
        table1 = "<tr><td colspan='7' style='cursor:pointer' style='cursor:pointer' onclick='table("+(rounddown11(x)-10)+")' class='text-primary'>&#9650;</td></tr>"
    }
    table2 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    if (y == 1) {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td bgcolor='lightgray'><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    } else if (y == 2) {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td bgcolor='lightgray'><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    } else if (y == 3) {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td bgcolor='lightgray'><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    } else if (y == 4) {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td bgcolor='lightgray'><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    } else if (y == 5) {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td bgcolor='lightgray'><b>.01</b></td><td><b>.005</b></td></tr>"
    } else if (y == 6) {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td bgcolor='lightgray'><b>.005</b></td></tr>"
    }
    table4 = []
    for (i = rounddown11(x); i < rounddown11(x)+10; i++) {
        if (x == i) {
            if (i == 1) {
                table4 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)' bgcolor='lightgray'>"+tinv(.025, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)' bgcolor='lightgray'>"+tinv(.01, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)' bgcolor='lightgray'>"+tinv(.005, i).toFixed(2)+"</td></tr>"
            } else if (i == 100) {
                table4 += "<tr><td bgcolor='lightgray'><b>&#8734;</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)' bgcolor='lightgray'>"+tinv(.20, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)' bgcolor='lightgray'>"+tinv(.10, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)' bgcolor='lightgray'>"+tinv(.05, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)' bgcolor='lightgray'>"+tinv(.025, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)' bgcolor='lightgray'>"+tinv(.01, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)' bgcolor='lightgray'>"+tinv(.005, 999999).toFixed(3)+"</td></tr>"
            } else {
                table4 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
            }
        } else {
            if (y == 1) {
                if (i == 1) {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(2)+"</td></tr>"
                } else if (i == 100) {
                    table4 += "<tr><td><b>&#8734;</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)' bgcolor='lightgray'>"+tinv(.20, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, 999999).toFixed(3)+"</td></tr>"
                } else {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
                }
            } else if (y == 2) {
                if (i == 1) {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(2)+"</td></tr>"
                } else if (i == 100) {
                    table4 += "<tr><td><b>&#8734;</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)' bgcolor='lightgray'>"+tinv(.10, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, 999999).toFixed(3)+"</td></tr>"
                } else {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
                }
            } else if (y == 3) {
                if (i == 1) {
                   table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(2)+"</td></tr>" 
                } else if (i == 100) {
                    table4 += "<tr><td><b>&#8734;</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)' bgcolor='lightgray'>"+tinv(.05, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, 999999).toFixed(3)+"</td></tr>"
                } else {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
                }
            } else if (y == 4) {
                if (i == 1) {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)' bgcolor='lightgray'>"+tinv(.025, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(2)+"</td></tr>"
                } else if (i == 100) {
                    table4 += "<tr><td><b>&#8734;</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)' bgcolor='lightgray'>"+tinv(.025, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, 999999).toFixed(3)+"</td></tr>"
                } else {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
                }
            } else if (y == 5) {
                if (i == 1) {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)' bgcolor='lightgray'>"+tinv(.01, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(2)+"</td></tr>"
                } else if (i == 100) {
                    table4 += "<tr><td><b>&#8734;</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)' bgcolor='lightgray'>"+tinv(.01, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, 999999).toFixed(3)+"</td></tr>"
                } else {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
                }
            } else if (y == 6) {
                if (i == 1) {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(2)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)' bgcolor='lightgray'>"+tinv(.005, i).toFixed(2)+"</td></tr>"
                } else if (i == 100) {
                    table4 += "<tr><td><b>&#8734;</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, 999999).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)' bgcolor='lightgray'>"+tinv(.005, 999999).toFixed(3)+"</td></tr>"
                } else {
                    table4 += "<tr><td><b>"+i+"</b></td><td style='cursor:pointer' onclick='highlight("+i+",1)'>"+tinv(.20, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",2)'>"+tinv(.10, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",3)'>"+tinv(.05, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",4)'>"+tinv(.025, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",5)'>"+tinv(.01, i).toFixed(3)+"</td><td style='cursor:pointer' onclick='highlight("+i+",6)' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
                }
            }
        }  
    }  
    if (x < 91) {
        table5 = "<tr><td colspan='7' style='cursor:pointer' style='cursor:pointer' onclick='table("+roundup11(x)+")' class='text-primary'>&#9660;</td></tr>"
    } else {
        table5 = "<tr><td colspan='7'  style='color:white'>&#9660;</td></tr>"
    }
    var tablet = "<table style='column-gap: 20px;'>"+table1+table2+table3+table4+table5+"</table>"
    document.getElementById("output").innerHTML = tablet
    graph1(y,x)
}








var canvas = document.getElementById("Canvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

graph0();

function graph0(){
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = (i-300)/100
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
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
    ctx.fillText("t",285,132);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",147,145);
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

function graph1(z,d){
    if (z == 1) {
        var t = .84
        var tval = tinv(.20, d).toFixed(3)
    } else if (z == 2) {
        var t = 1.28
        var tval = tinv(.10, d).toFixed(3)
    } else if (z == 3) {
        var t = 1.64
        var tval = tinv(.05, d).toFixed(3)
    } else if (z == 4) {
        var t = 1.96
        var tval = tinv(.025, d).toFixed(3)
    } else if (z == 5) {
        var t = 2.33
        var tval = tinv(.01, d).toFixed(3)
    } else if (z == 6) {
        var t = 2.57
        var tval = tinv(.005, d).toFixed(3)
    }
    var lessval = Math.max(t, -2.97)
    var lessvalz = 300+100*lessval
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = (i-300)/100
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("Canvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    //ctx.fillText("Standard Normal Distribution",85,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    var points0 = []
    var lessvalneg = -1*lessval
    var lessvalz2 = 300+100*lessvalneg
    for (i = 0; i < lessvalz2; i++) {
        points0[i] = {x:280 - .433*i, y:130 - 275*f[i]}
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
    ctx.lineTo(20 + .433*lessvalz, 130);
    ctx.lineTo(280, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.fillText("t",285,132);
    //ctx.fillText("t",18 + .434*(300+100*lessval),145);
    ctx.fillText(tval,8 + .434*(300+100*lessval),145);
    if (z == 1) {
        ctx.fillText(".20",55 + .434*(300+100*lessval),95);
    } else if (z == 2) {
        ctx.fillText(".10",45 + .434*(300+100*lessval),105);
    } else if (z == 3) {
        ctx.fillText(".05",41 + .434*(300+100*lessval),114);
    } else if (z == 4) {
        ctx.fillText(".025",35 + .434*(300+100*lessval),119);
    } else if (z == 5) {
        ctx.fillText(".01",25 + .434*(300+100*lessval),120);
    } else if (z == 6) {
        ctx.fillText(".005",20 + .434*(300+100*lessval),120);
    }
    ctx.fillText("df = "+d,225,40);
    ctx.moveTo(20 + .433*(300+100*lessval), 135);
    ctx.lineTo(20 + .433*(300+100*lessval), 125);
    if (Math.abs(z) >= .2){
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",147,145); 
    }
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




































var canvas = document.getElementById("howCanvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

how1(); how2();

function how1(){
    var exp = 2.71828;
    var f = []; var f2 = []; var f3 = []
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("howCanvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Dist.",200,23);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    var points = []
    for (i = 0; i < 60; i++) {
        points[i] = {x:20 + 4.4*i, y:130 - 275*f[i]}
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
    
    ctx.strokeStyle = 'gray';
    ctx.fillStyle = "gray";
    ctx.fillText("t-Distribution w/ 20 df",201,35);
    ctx.beginPath();
    var points = []
    for (i = 0; i < 60; i++) {
        points[i] = {x:20 + 4.4*i, y:120 - 225*f[i]}
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
    
    ctx.strokeStyle = 'lightgray';
    ctx.fillStyle = "lightgray";
    ctx.fillText("t-Distribution w/ 10 df",201,47);
    ctx.beginPath();
    var points = []
    for (i = 0; i < 60; i++) {
        points[i] = {x:20 + 4.4*i, y:110 - 175*f[i]}
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

function how2(){
    var area = .10565
    var z = 1.3
    var lessval = z
    var lessvalz = 30+10*lessval
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
    var points0 = []
    var lessvalneg = -1*lessval
    var lessvalz2 = 30+10*lessvalneg
    for (i = 0; i < lessvalz2; i++) {
        points0[i] = {x:280 - 4.4*i, y:130 - 300*f[i]}
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
    ctx.lineTo(280, 130);
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
    ctx.fillText("t",18 + 4.4*(30+10*lessval),145);
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    var points = []
    for (i = 0; i < 60; i++) {
        points[i] = {x:20 + 4.4*i, y:130 - 275*f[i]}
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
