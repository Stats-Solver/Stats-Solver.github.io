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

    
table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
table2 = []
for (i = 1; i < 35; i++) {
    table2 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
}  
var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
document.getElementById("output").innerHTML = tablez

table3 = []
for (i = 35; i < 70; i++) {
    table3 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
}
var tablez2 = "<table style='column-gap: 20px;'>"+table0+table1+table3+"</table>"
document.getElementById("output2").innerHTML = tablez2
    
    
table4 = []
for (i = 70; i < 101; i++) {
    table4 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
}
table5 = "<tr style='border-bottom: thin solid;'><td><b>&#8734;</b></td><td onmouseover='highlightr1101()'>0.842</td><td onmouseover='highlightr2101()'>1.282</td><td onmouseover='highlightr3101()'>1.645</td><td onmouseover='highlightr4101()'>1.960</td><td onmouseover='highlightr5101()'>2.326</td><td onmouseover='highlightr6101()'>2.576</td></tr>"
var tablez3 = "<table style='column-gap: 20px;'>"+table0+table1+table4+table5+"</table>"
document.getElementById("output3").innerHTML = tablez3

var highlight

function highlight11(){highlight1(); highlight = 1; graph1(.84,1)}
function highlight12(){highlight1(); highlight = 2; graph1(.84,2)}
function highlight13(){highlight1(); highlight = 3; graph1(.84,3)}
function highlight14(){highlight1(); highlight = 4; graph1(.84,4)}
function highlight15(){highlight1(); highlight = 5; graph1(.84,5)}
function highlight16(){highlight1(); highlight = 6; graph1(.84,6)}
function highlight17(){highlight1(); highlight = 7; graph1(.84,7)}
function highlight18(){highlight1(); highlight = 8; graph1(.84,8)}
function highlight19(){highlight1(); highlight = 9; graph1(.84,9)}
function highlight110(){highlight1(); highlight = 10; graph1(.84,10)}
function highlight111(){highlight1(); highlight = 11; graph1(.84,11)}
function highlight112(){highlight1(); highlight = 12; graph1(.84,12)}
function highlight113(){highlight1(); highlight = 13; graph1(.84,13)}
function highlight114(){highlight1(); highlight = 14; graph1(.84,14)}
function highlight115(){highlight1(); highlight = 15; graph1(.84,15)}
function highlight116(){highlight1(); highlight = 16; graph1(.84,16)}
function highlight117(){highlight1(); highlight = 17; graph1(.84,17)}
function highlight118(){highlight1(); highlight = 18; graph1(.84,18)}
function highlight119(){highlight1(); highlight = 19; graph1(.84,19)}
function highlight120(){highlight1(); highlight = 20; graph1(.84,20)}
function highlight121(){highlight1(); highlight = 21; graph1(.84,21)}
function highlight122(){highlight1(); highlight = 22; graph1(.84,22)}
function highlight123(){highlight1(); highlight = 23; graph1(.84,23)}
function highlight124(){highlight1(); highlight = 24; graph1(.84,24)}
function highlight125(){highlight1(); highlight = 25; graph1(.84,25)}
function highlight126(){highlight1(); highlight = 26; graph1(.84,26)}
function highlight127(){highlight1(); highlight = 27; graph1(.84,27)}
function highlight128(){highlight1(); highlight = 28; graph1(.84,28)}
function highlight129(){highlight1(); highlight = 29; graph1(.84,29)}
function highlight130(){highlight1(); highlight = 30; graph1(.84,30)}
function highlight131(){highlight1(); highlight = 31; graph1(.84,31)}
function highlight132(){highlight1(); highlight = 32; graph1(.84,32)}
function highlight133(){highlight1(); highlight = 33; graph1(.84,33)}
function highlight134(){highlight1(); highlight = 34; graph1(.84,34)}

function highlight1(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td bgcolor='lightgray'><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (i = 1; i < 35; i++) {
        if (highlight == i){
            table2 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table2 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight21(){highlight2(); highlight = 1; graph1(1.28)}
function highlight22(){highlight2(); highlight = 2; graph1(1.28)}
function highlight23(){highlight2(); highlight = 3; graph1(1.28)}
function highlight24(){highlight2(); highlight = 4; graph1(1.28)}
function highlight25(){highlight2(); highlight = 5; graph1(1.28)}
function highlight26(){highlight2(); highlight = 6; graph1(1.28)}
function highlight27(){highlight2(); highlight = 7; graph1(1.28)}
function highlight28(){highlight2(); highlight = 8; graph1(1.28)}
function highlight29(){highlight2(); highlight = 9; graph1(1.28)}
function highlight210(){highlight2(); highlight = 10; graph1(1.28)}
function highlight211(){highlight2(); highlight = 11; graph1(1.28)}
function highlight212(){highlight2(); highlight = 12; graph1(1.28)}
function highlight213(){highlight2(); highlight = 13; graph1(1.28)}
function highlight214(){highlight2(); highlight = 14; graph1(1.28)}
function highlight215(){highlight2(); highlight = 15; graph1(1.28)}
function highlight216(){highlight2(); highlight = 16; graph1(1.28)}
function highlight217(){highlight2(); highlight = 17; graph1(1.28)}
function highlight218(){highlight2(); highlight = 18; graph1(1.28)}
function highlight219(){highlight2(); highlight = 19; graph1(1.28)}
function highlight220(){highlight2(); highlight = 20; graph1(1.28)}
function highlight221(){highlight2(); highlight = 21; graph1(1.28)}
function highlight222(){highlight2(); highlight = 22; graph1(1.28)}
function highlight223(){highlight2(); highlight = 23; graph1(1.28)}
function highlight224(){highlight2(); highlight = 24; graph1(1.28)}
function highlight225(){highlight2(); highlight = 25; graph1(1.28)}
function highlight226(){highlight2(); highlight = 26; graph1(1.28)}
function highlight227(){highlight2(); highlight = 27; graph1(1.28)}
function highlight228(){highlight2(); highlight = 28; graph1(1.28)}
function highlight229(){highlight2(); highlight = 29; graph1(1.28)}
function highlight230(){highlight2(); highlight = 30; graph1(1.28)}
function highlight231(){highlight2(); highlight = 31; graph1(1.28)}
function highlight232(){highlight2(); highlight = 32; graph1(1.28)}
function highlight233(){highlight2(); highlight = 33; graph1(1.28)}
function highlight234(){highlight2(); highlight = 34; graph1(1.28)}

function highlight2(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td bgcolor='lightgray'><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (i = 1; i < 35; i++) {
        if (highlight == i){
            table2 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table2 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight31(){highlight3(); highlight = 1; graph1(1.64)}
function highlight32(){highlight3(); highlight = 2; graph1(1.64)}
function highlight33(){highlight3(); highlight = 3; graph1(1.64)}
function highlight34(){highlight3(); highlight = 4; graph1(1.64)}
function highlight35(){highlight3(); highlight = 5; graph1(1.64)}
function highlight36(){highlight3(); highlight = 6; graph1(1.64)}
function highlight37(){highlight3(); highlight = 7; graph1(1.64)}
function highlight38(){highlight3(); highlight = 8; graph1(1.64)}
function highlight39(){highlight3(); highlight = 9; graph1(1.64)}
function highlight310(){highlight3(); highlight = 10; graph1(1.64)}
function highlight311(){highlight3(); highlight = 11; graph1(1.64)}
function highlight312(){highlight3(); highlight = 12; graph1(1.64)}
function highlight313(){highlight3(); highlight = 13; graph1(1.64)}
function highlight314(){highlight3(); highlight = 14; graph1(1.64)}
function highlight315(){highlight3(); highlight = 15; graph1(1.64)}
function highlight316(){highlight3(); highlight = 16; graph1(1.64)}
function highlight317(){highlight3(); highlight = 17; graph1(1.64)}
function highlight318(){highlight3(); highlight = 18; graph1(1.64)}
function highlight319(){highlight3(); highlight = 19; graph1(1.64)}
function highlight320(){highlight3(); highlight = 20; graph1(1.64)}
function highlight321(){highlight3(); highlight = 21; graph1(1.64)}
function highlight322(){highlight3(); highlight = 22; graph1(1.64)}
function highlight323(){highlight3(); highlight = 23; graph1(1.64)}
function highlight324(){highlight3(); highlight = 24; graph1(1.64)}
function highlight325(){highlight3(); highlight = 25; graph1(1.64)}
function highlight326(){highlight3(); highlight = 26; graph1(1.64)}
function highlight327(){highlight3(); highlight = 27; graph1(1.64)}
function highlight328(){highlight3(); highlight = 28; graph1(1.64)}
function highlight329(){highlight3(); highlight = 29; graph1(1.64)}
function highlight330(){highlight3(); highlight = 30; graph1(1.64)}
function highlight331(){highlight3(); highlight = 31; graph1(1.64)}
function highlight332(){highlight3(); highlight = 32; graph1(1.64)}
function highlight333(){highlight3(); highlight = 33; graph1(1.64)}
function highlight334(){highlight3(); highlight = 34; graph1(1.64)}

function highlight3(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td bgcolor='lightgray'><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (i = 1; i < 35; i++) {
        if (highlight == i){
            table2 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table2 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight41(){highlight4(); highlight = 1; graph1(1.96)}
function highlight42(){highlight4(); highlight = 2; graph1(1.96)}
function highlight43(){highlight4(); highlight = 3; graph1(1.96)}
function highlight44(){highlight4(); highlight = 4; graph1(1.96)}
function highlight45(){highlight4(); highlight = 5; graph1(1.96)}
function highlight46(){highlight4(); highlight = 6; graph1(1.96)}
function highlight47(){highlight4(); highlight = 7; graph1(1.96)}
function highlight48(){highlight4(); highlight = 8; graph1(1.96)}
function highlight49(){highlight4(); highlight = 9; graph1(1.96)}
function highlight410(){highlight4(); highlight = 10; graph1(1.96)}
function highlight411(){highlight4(); highlight = 11; graph1(1.96)}
function highlight412(){highlight4(); highlight = 12; graph1(1.96)}
function highlight413(){highlight4(); highlight = 13; graph1(1.96)}
function highlight414(){highlight4(); highlight = 14; graph1(1.96)}
function highlight415(){highlight4(); highlight = 15; graph1(1.96)}
function highlight416(){highlight4(); highlight = 16; graph1(1.96)}
function highlight417(){highlight4(); highlight = 17; graph1(1.96)}
function highlight418(){highlight4(); highlight = 18; graph1(1.96)}
function highlight419(){highlight4(); highlight = 19; graph1(1.96)}
function highlight420(){highlight4(); highlight = 20; graph1(1.96)}
function highlight421(){highlight4(); highlight = 21; graph1(1.96)}
function highlight422(){highlight4(); highlight = 22; graph1(1.96)}
function highlight423(){highlight4(); highlight = 23; graph1(1.96)}
function highlight424(){highlight4(); highlight = 24; graph1(1.96)}
function highlight425(){highlight4(); highlight = 25; graph1(1.96)}
function highlight426(){highlight4(); highlight = 26; graph1(1.96)}
function highlight427(){highlight4(); highlight = 27; graph1(1.96)}
function highlight428(){highlight4(); highlight = 28; graph1(1.96)}
function highlight429(){highlight4(); highlight = 29; graph1(1.96)}
function highlight430(){highlight4(); highlight = 30; graph1(1.96)}
function highlight431(){highlight4(); highlight = 31; graph1(1.96)}
function highlight432(){highlight4(); highlight = 32; graph1(1.96)}
function highlight433(){highlight4(); highlight = 33; graph1(1.96)}
function highlight434(){highlight4(); highlight = 34; graph1(1.96)}

function highlight4(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td bgcolor='lightgray'><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (i = 1; i < 35; i++) {
        if (highlight == i){
            table2 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table2 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight51(){highlight5(); highlight = 1; graph1(2.33)}
function highlight52(){highlight5(); highlight = 2; graph1(2.33)}
function highlight53(){highlight5(); highlight = 3; graph1(2.33)}
function highlight54(){highlight5(); highlight = 4; graph1(2.33)}
function highlight55(){highlight5(); highlight = 5; graph1(2.33)}
function highlight56(){highlight5(); highlight = 6; graph1(2.33)}
function highlight57(){highlight5(); highlight = 7; graph1(2.33)}
function highlight58(){highlight5(); highlight = 8; graph1(2.33)}
function highlight59(){highlight5(); highlight = 9; graph1(2.33)}
function highlight510(){highlight5(); highlight = 10; graph1(2.33)}
function highlight511(){highlight5(); highlight = 11; graph1(2.33)}
function highlight512(){highlight5(); highlight = 12; graph1(2.33)}
function highlight513(){highlight5(); highlight = 13; graph1(2.33)}
function highlight514(){highlight5(); highlight = 14; graph1(2.33)}
function highlight515(){highlight5(); highlight = 15; graph1(2.33)}
function highlight516(){highlight5(); highlight = 16; graph1(2.33)}
function highlight517(){highlight5(); highlight = 17; graph1(2.33)}
function highlight518(){highlight5(); highlight = 18; graph1(2.33)}
function highlight519(){highlight5(); highlight = 19; graph1(2.33)}
function highlight520(){highlight5(); highlight = 20; graph1(2.33)}
function highlight521(){highlight5(); highlight = 21; graph1(2.33)}
function highlight522(){highlight5(); highlight = 22; graph1(2.33)}
function highlight523(){highlight5(); highlight = 23; graph1(2.33)}
function highlight524(){highlight5(); highlight = 24; graph1(2.33)}
function highlight525(){highlight5(); highlight = 25; graph1(2.33)}
function highlight526(){highlight5(); highlight = 26; graph1(2.33)}
function highlight527(){highlight5(); highlight = 27; graph1(2.33)}
function highlight528(){highlight5(); highlight = 28; graph1(2.33)}
function highlight529(){highlight5(); highlight = 29; graph1(2.33)}
function highlight530(){highlight5(); highlight = 30; graph1(2.33)}
function highlight531(){highlight5(); highlight = 31; graph1(2.33)}
function highlight532(){highlight5(); highlight = 32; graph1(2.33)}
function highlight533(){highlight5(); highlight = 33; graph1(2.33)}
function highlight534(){highlight5(); highlight = 34; graph1(2.33)}

function highlight5(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td bgcolor='lightgray'><b>.01</b></td><td><b>.005</b></td></tr>"
    table2 = []
    for (i = 1; i < 35; i++) {
        if (highlight == i){
            table2 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table2 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()'bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

function highlight61(){highlight6(); highlight = 1; graph1(2.57)}
function highlight62(){highlight6(); highlight = 2; graph1(2.57)}
function highlight63(){highlight6(); highlight = 3; graph1(2.57)}
function highlight64(){highlight6(); highlight = 4; graph1(2.57)}
function highlight65(){highlight6(); highlight = 5; graph1(2.57)}
function highlight66(){highlight6(); highlight = 6; graph1(2.57)}
function highlight67(){highlight6(); highlight = 7; graph1(2.57)}
function highlight68(){highlight6(); highlight = 8; graph1(2.57)}
function highlight69(){highlight6(); highlight = 9; graph1(2.57)}
function highlight610(){highlight6(); highlight = 10; graph1(2.57)}
function highlight611(){highlight6(); highlight = 11; graph1(2.57)}
function highlight612(){highlight6(); highlight = 12; graph1(2.57)}
function highlight613(){highlight6(); highlight = 13; graph1(2.57)}
function highlight614(){highlight6(); highlight = 14; graph1(2.57)}
function highlight615(){highlight6(); highlight = 15; graph1(2.57)}
function highlight616(){highlight6(); highlight = 16; graph1(2.57)}
function highlight617(){highlight6(); highlight = 17; graph1(2.57)}
function highlight618(){highlight6(); highlight = 18; graph1(2.57)}
function highlight619(){highlight6(); highlight = 19; graph1(2.57)}
function highlight620(){highlight6(); highlight = 20; graph1(2.57)}
function highlight621(){highlight6(); highlight = 21; graph1(2.57)}
function highlight622(){highlight6(); highlight = 22; graph1(2.57)}
function highlight623(){highlight6(); highlight = 23; graph1(2.57)}
function highlight624(){highlight6(); highlight = 24; graph1(2.57)}
function highlight625(){highlight6(); highlight = 25; graph1(2.57)}
function highlight626(){highlight6(); highlight = 26; graph1(2.57)}
function highlight627(){highlight6(); highlight = 27; graph1(2.57)}
function highlight628(){highlight6(); highlight = 28; graph1(2.57)}
function highlight629(){highlight6(); highlight = 29; graph1(2.57)}
function highlight630(){highlight6(); highlight = 30; graph1(2.57)}
function highlight631(){highlight6(); highlight = 31; graph1(2.57)}
function highlight632(){highlight6(); highlight = 32; graph1(2.57)}
function highlight633(){highlight6(); highlight = 33; graph1(2.57)}
function highlight634(){highlight6(); highlight = 34; graph1(2.57)}

function highlight6(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td bgcolor='lightgray'><b>.005</b></td></tr>"
    table2 = []
    for (i = 1; i < 35; i++) {
        if (highlight == i){
            table2 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table2 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlight1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlight2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlight3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlight4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlight5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlight6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table2+"</table>"
    document.getElementById("output").innerHTML = tablez
}

var highlights

function highlights135(){highlights1(); highlights = 35; graph2(.84)}
function highlights136(){highlights1(); highlights = 36; graph2(.84)}
function highlights137(){highlights1(); highlights = 37; graph2(.84)}
function highlights138(){highlights1(); highlights = 38; graph2(.84)}
function highlights139(){highlights1(); highlights = 39; graph2(.84)}
function highlights140(){highlights1(); highlights = 40; graph2(.84)}
function highlights141(){highlights1(); highlights = 41; graph2(.84)}
function highlights142(){highlights1(); highlights = 42; graph2(.84)}
function highlights143(){highlights1(); highlights = 43; graph2(.84)}
function highlights144(){highlights1(); highlights = 44; graph2(.84)}
function highlights145(){highlights1(); highlights = 45; graph2(.84)}
function highlights146(){highlights1(); highlights = 46; graph2(.84)}
function highlights147(){highlights1(); highlights = 47; graph2(.84)}
function highlights148(){highlights1(); highlights = 48; graph2(.84)}
function highlights149(){highlights1(); highlights = 49; graph2(.84)}
function highlights150(){highlights1(); highlights = 50; graph2(.84)}
function highlights151(){highlights1(); highlights = 51; graph2(.84)}
function highlights152(){highlights1(); highlights = 52; graph2(.84)}
function highlights153(){highlights1(); highlights = 53; graph2(.84)}
function highlights154(){highlights1(); highlights = 54; graph2(.84)}
function highlights155(){highlights1(); highlights = 55; graph2(.84)}
function highlights156(){highlights1(); highlights = 56; graph2(.84)}
function highlights157(){highlights1(); highlights = 57; graph2(.84)}
function highlights158(){highlights1(); highlights = 58; graph2(.84)}
function highlights159(){highlights1(); highlights = 59; graph2(.84)}
function highlights160(){highlights1(); highlights = 60; graph2(.84)}
function highlights161(){highlights1(); highlights = 61; graph2(.84)}
function highlights162(){highlights1(); highlights = 62; graph2(.84)}
function highlights163(){highlights1(); highlights = 63; graph2(.84)}
function highlights164(){highlights1(); highlights = 64; graph2(.84)}
function highlights165(){highlights1(); highlights = 65; graph2(.84)}
function highlights166(){highlights1(); highlights = 66; graph2(.84)}
function highlights167(){highlights1(); highlights = 67; graph2(.84)}
function highlights168(){highlights1(); highlights = 68; graph2(.84)}
function highlights169(){highlights1(); highlights = 69; graph2(.84)}

function highlights1(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td bgcolor='lightgray'><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table3 = []
    for (i = 35; i < 70; i++) {
        if (highlights == i){
            table3 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table3 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table3+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights235(){highlights2(); highlights = 35; graph2(1.28)}
function highlights236(){highlights2(); highlights = 36; graph2(1.28)}
function highlights237(){highlights2(); highlights = 37; graph2(1.28)}
function highlights238(){highlights2(); highlights = 38; graph2(1.28)}
function highlights239(){highlights2(); highlights = 39; graph2(1.28)}
function highlights240(){highlights2(); highlights = 40; graph2(1.28)}
function highlights241(){highlights2(); highlights = 41; graph2(1.28)}
function highlights242(){highlights2(); highlights = 42; graph2(1.28)}
function highlights243(){highlights2(); highlights = 43; graph2(1.28)}
function highlights244(){highlights2(); highlights = 44; graph2(1.28)}
function highlights245(){highlights2(); highlights = 45; graph2(1.28)}
function highlights246(){highlights2(); highlights = 46; graph2(1.28)}
function highlights247(){highlights2(); highlights = 47; graph2(1.28)}
function highlights248(){highlights2(); highlights = 48; graph2(1.28)}
function highlights249(){highlights2(); highlights = 49; graph2(1.28)}
function highlights250(){highlights2(); highlights = 50; graph2(1.28)}
function highlights251(){highlights2(); highlights = 51; graph2(1.28)}
function highlights252(){highlights2(); highlights = 52; graph2(1.28)}
function highlights253(){highlights2(); highlights = 53; graph2(1.28)}
function highlights254(){highlights2(); highlights = 54; graph2(1.28)}
function highlights255(){highlights2(); highlights = 55; graph2(1.28)}
function highlights256(){highlights2(); highlights = 56; graph2(1.28)}
function highlights257(){highlights2(); highlights = 57; graph2(1.28)}
function highlights258(){highlights2(); highlights = 58; graph2(1.28)}
function highlights259(){highlights2(); highlights = 59; graph2(1.28)}
function highlights260(){highlights2(); highlights = 60; graph2(1.28)}
function highlights261(){highlights2(); highlights = 61; graph2(1.28)}
function highlights262(){highlights2(); highlights = 62; graph2(1.28)}
function highlights263(){highlights2(); highlights = 63; graph2(1.28)}
function highlights264(){highlights2(); highlights = 64; graph2(1.28)}
function highlights265(){highlights2(); highlights = 65; graph2(1.28)}
function highlights266(){highlights2(); highlights = 66; graph2(1.28)}
function highlights267(){highlights2(); highlights = 67; graph2(1.28)}
function highlights268(){highlights2(); highlights = 68; graph2(1.28)}
function highlights269(){highlights2(); highlights = 69; graph2(1.28)}

function highlights2(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td bgcolor='lightgray'><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table3 = []
    for (i = 35; i < 70; i++) {
        if (highlights == i){
            table3 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table3 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table3+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights335(){highlights3(); highlights = 35; graph2(1.64)}
function highlights336(){highlights3(); highlights = 36; graph2(1.64)}
function highlights337(){highlights3(); highlights = 37; graph2(1.64)}
function highlights338(){highlights3(); highlights = 38; graph2(1.64)}
function highlights339(){highlights3(); highlights = 39; graph2(1.64)}
function highlights340(){highlights3(); highlights = 40; graph2(1.64)}
function highlights341(){highlights3(); highlights = 41; graph2(1.64)}
function highlights342(){highlights3(); highlights = 42; graph2(1.64)}
function highlights343(){highlights3(); highlights = 43; graph2(1.64)}
function highlights344(){highlights3(); highlights = 44; graph2(1.64)}
function highlights345(){highlights3(); highlights = 45; graph2(1.64)}
function highlights346(){highlights3(); highlights = 46; graph2(1.64)}
function highlights347(){highlights3(); highlights = 47; graph2(1.64)}
function highlights348(){highlights3(); highlights = 48; graph2(1.64)}
function highlights349(){highlights3(); highlights = 49; graph2(1.64)}
function highlights350(){highlights3(); highlights = 50; graph2(1.64)}
function highlights351(){highlights3(); highlights = 51; graph2(1.64)}
function highlights352(){highlights3(); highlights = 52; graph2(1.64)}
function highlights353(){highlights3(); highlights = 53; graph2(1.64)}
function highlights354(){highlights3(); highlights = 54; graph2(1.64)}
function highlights355(){highlights3(); highlights = 55; graph2(1.64)}
function highlights356(){highlights3(); highlights = 56; graph2(1.64)}
function highlights357(){highlights3(); highlights = 57; graph2(1.64)}
function highlights358(){highlights3(); highlights = 58; graph2(1.64)}
function highlights359(){highlights3(); highlights = 59; graph2(1.64)}
function highlights360(){highlights3(); highlights = 60; graph2(1.64)}
function highlights361(){highlights3(); highlights = 61; graph2(1.64)}
function highlights362(){highlights3(); highlights = 62; graph2(1.64)}
function highlights363(){highlights3(); highlights = 63; graph2(1.64)}
function highlights364(){highlights3(); highlights = 64; graph2(1.64)}
function highlights365(){highlights3(); highlights = 65; graph2(1.64)}
function highlights366(){highlights3(); highlights = 66; graph2(1.64)}
function highlights367(){highlights3(); highlights = 67; graph2(1.64)}
function highlights368(){highlights3(); highlights = 68; graph2(1.64)}
function highlights369(){highlights3(); highlights = 69; graph2(1.64)}

function highlights3(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td bgcolor='lightgray'><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table3 = []
    for (i = 35; i < 70; i++) {
        if (highlights == i){
            table3 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table3 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table3+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights435(){highlights4(); highlights = 35; graph2(1.96)}
function highlights436(){highlights4(); highlights = 36; graph2(1.96)}
function highlights437(){highlights4(); highlights = 37; graph2(1.96)}
function highlights438(){highlights4(); highlights = 38; graph2(1.96)}
function highlights439(){highlights4(); highlights = 39; graph2(1.96)}
function highlights440(){highlights4(); highlights = 40; graph2(1.96)}
function highlights441(){highlights4(); highlights = 41; graph2(1.96)}
function highlights442(){highlights4(); highlights = 42; graph2(1.96)}
function highlights443(){highlights4(); highlights = 43; graph2(1.96)}
function highlights444(){highlights4(); highlights = 44; graph2(1.96)}
function highlights445(){highlights4(); highlights = 45; graph2(1.96)}
function highlights446(){highlights4(); highlights = 46; graph2(1.96)}
function highlights447(){highlights4(); highlights = 47; graph2(1.96)}
function highlights448(){highlights4(); highlights = 48; graph2(1.96)}
function highlights449(){highlights4(); highlights = 49; graph2(1.96)}
function highlights450(){highlights4(); highlights = 50; graph2(1.96)}
function highlights451(){highlights4(); highlights = 51; graph2(1.96)}
function highlights452(){highlights4(); highlights = 52; graph2(1.96)}
function highlights453(){highlights4(); highlights = 53; graph2(1.96)}
function highlights454(){highlights4(); highlights = 54; graph2(1.96)}
function highlights455(){highlights4(); highlights = 55; graph2(1.96)}
function highlights456(){highlights4(); highlights = 56; graph2(1.96)}
function highlights457(){highlights4(); highlights = 57; graph2(1.96)}
function highlights458(){highlights4(); highlights = 58; graph2(1.96)}
function highlights459(){highlights4(); highlights = 59; graph2(1.96)}
function highlights460(){highlights4(); highlights = 60; graph2(1.96)}
function highlights461(){highlights4(); highlights = 61; graph2(1.96)}
function highlights462(){highlights4(); highlights = 62; graph2(1.96)}
function highlights463(){highlights4(); highlights = 63; graph2(1.96)}
function highlights464(){highlights4(); highlights = 64; graph2(1.96)}
function highlights465(){highlights4(); highlights = 65; graph2(1.96)}
function highlights466(){highlights4(); highlights = 66; graph2(1.96)}
function highlights467(){highlights4(); highlights = 67; graph2(1.96)}
function highlights468(){highlights4(); highlights = 68; graph2(1.96)}
function highlights469(){highlights4(); highlights = 69; graph2(1.96)}

function highlights4(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td bgcolor='lightgray'><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table3 = []
    for (i = 35; i < 70; i++) {
        if (highlights == i){
            table3 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table3 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table3+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights535(){highlights5(); highlights = 35; graph2(2.33)}
function highlights536(){highlights5(); highlights = 36; graph2(2.33)}
function highlights537(){highlights5(); highlights = 37; graph2(2.33)}
function highlights538(){highlights5(); highlights = 38; graph2(2.33)}
function highlights539(){highlights5(); highlights = 39; graph2(2.33)}
function highlights540(){highlights5(); highlights = 40; graph2(2.33)}
function highlights541(){highlights5(); highlights = 41; graph2(2.33)}
function highlights542(){highlights5(); highlights = 42; graph2(2.33)}
function highlights543(){highlights5(); highlights = 43; graph2(2.33)}
function highlights544(){highlights5(); highlights = 44; graph2(2.33)}
function highlights545(){highlights5(); highlights = 45; graph2(2.33)}
function highlights546(){highlights5(); highlights = 46; graph2(2.33)}
function highlights547(){highlights5(); highlights = 47; graph2(2.33)}
function highlights548(){highlights5(); highlights = 48; graph2(2.33)}
function highlights549(){highlights5(); highlights = 49; graph2(2.33)}
function highlights550(){highlights5(); highlights = 50; graph2(2.33)}
function highlights551(){highlights5(); highlights = 51; graph2(2.33)}
function highlights552(){highlights5(); highlights = 52; graph2(2.33)}
function highlights553(){highlights5(); highlights = 53; graph2(2.33)}
function highlights554(){highlights5(); highlights = 54; graph2(2.33)}
function highlights555(){highlights5(); highlights = 55; graph2(2.33)}
function highlights556(){highlights5(); highlights = 56; graph2(2.33)}
function highlights557(){highlights5(); highlights = 57; graph2(2.33)}
function highlights558(){highlights5(); highlights = 58; graph2(2.33)}
function highlights559(){highlights5(); highlights = 59; graph2(2.33)}
function highlights560(){highlights5(); highlights = 60; graph2(2.33)}
function highlights561(){highlights5(); highlights = 61; graph2(2.33)}
function highlights562(){highlights5(); highlights = 62; graph2(2.33)}
function highlights563(){highlights5(); highlights = 63; graph2(2.33)}
function highlights564(){highlights5(); highlights = 64; graph2(2.33)}
function highlights565(){highlights5(); highlights = 65; graph2(2.33)}
function highlights566(){highlights5(); highlights = 66; graph2(2.33)}
function highlights567(){highlights5(); highlights = 67; graph2(2.33)}
function highlights568(){highlights5(); highlights = 68; graph2(2.33)}
function highlights569(){highlights5(); highlights = 69; graph2(2.33)}

function highlights5(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td bgcolor='lightgray'><b>.01</b></td><td><b>.005</b></td></tr>"
    table3 = []
    for (i = 35; i < 70; i++) {
        if (highlights == i){
            table3 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table3 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()'bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table3+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

function highlights635(){highlights6(); highlights = 35; graph2(2.57)}
function highlights636(){highlights6(); highlights = 36; graph2(2.57)}
function highlights637(){highlights6(); highlights = 37; graph2(2.57)}
function highlights638(){highlights6(); highlights = 38; graph2(2.57)}
function highlights639(){highlights6(); highlights = 39; graph2(2.57)}
function highlights640(){highlights6(); highlights = 40; graph2(2.57)}
function highlights641(){highlights6(); highlights = 41; graph2(2.57)}
function highlights642(){highlights6(); highlights = 42; graph2(2.57)}
function highlights643(){highlights6(); highlights = 43; graph2(2.57)}
function highlights644(){highlights6(); highlights = 44; graph2(2.57)}
function highlights645(){highlights6(); highlights = 45; graph2(2.57)}
function highlights646(){highlights6(); highlights = 46; graph2(2.57)}
function highlights647(){highlights6(); highlights = 47; graph2(2.57)}
function highlights648(){highlights6(); highlights = 48; graph2(2.57)}
function highlights649(){highlights6(); highlights = 49; graph2(2.57)}
function highlights650(){highlights6(); highlights = 50; graph2(2.57)}
function highlights651(){highlights6(); highlights = 51; graph2(2.57)}
function highlights652(){highlights6(); highlights = 52; graph2(2.57)}
function highlights653(){highlights6(); highlights = 53; graph2(2.57)}
function highlights654(){highlights6(); highlights = 54; graph2(2.57)}
function highlights655(){highlights6(); highlights = 55; graph2(2.57)}
function highlights656(){highlights6(); highlights = 56; graph2(2.57)}
function highlights657(){highlights6(); highlights = 57; graph2(2.57)}
function highlights658(){highlights6(); highlights = 58; graph2(2.57)}
function highlights659(){highlights6(); highlights = 59; graph2(2.57)}
function highlights660(){highlights6(); highlights = 60; graph2(2.57)}
function highlights661(){highlights6(); highlights = 61; graph2(2.57)}
function highlights662(){highlights6(); highlights = 62; graph2(2.57)}
function highlights663(){highlights6(); highlights = 63; graph2(2.57)}
function highlights664(){highlights6(); highlights = 64; graph2(2.57)}
function highlights665(){highlights6(); highlights = 65; graph2(2.57)}
function highlights666(){highlights6(); highlights = 66; graph2(2.57)}
function highlights667(){highlights6(); highlights = 67; graph2(2.57)}
function highlights668(){highlights6(); highlights = 68; graph2(2.57)}
function highlights669(){highlights6(); highlights = 69; graph2(2.57)}

function highlights6(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td bgcolor='lightgray'><b>.005</b></td></tr>"
    table3 = []
    for (i = 35; i < 70; i++) {
        if (highlights == i){
            table3 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table3 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlights1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlights2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlights3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlights4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlights5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlights6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table3+"</table>"
    document.getElementById("output2").innerHTML = tablez
}

var highlightr

function highlightr170(){highlightr1(); highlightr = 70; graph3(.84)}
function highlightr171(){highlightr1(); highlightr = 71; graph3(.84)}
function highlightr172(){highlightr1(); highlightr = 72; graph3(.84)}
function highlightr173(){highlightr1(); highlightr = 73; graph3(.84)}
function highlightr174(){highlightr1(); highlightr = 74; graph3(.84)}
function highlightr175(){highlightr1(); highlightr = 75; graph3(.84)}
function highlightr176(){highlightr1(); highlightr = 76; graph3(.84)}
function highlightr177(){highlightr1(); highlightr = 77; graph3(.84)}
function highlightr178(){highlightr1(); highlightr = 78; graph3(.84)}
function highlightr179(){highlightr1(); highlightr = 79; graph3(.84)}
function highlightr180(){highlightr1(); highlightr = 80; graph3(.84)}
function highlightr181(){highlightr1(); highlightr = 81; graph3(.84)}
function highlightr182(){highlightr1(); highlightr = 82; graph3(.84)}
function highlightr183(){highlightr1(); highlightr = 83; graph3(.84)}
function highlightr184(){highlightr1(); highlightr = 84; graph3(.84)}
function highlightr185(){highlightr1(); highlightr = 85; graph3(.84)}
function highlightr186(){highlightr1(); highlightr = 86; graph3(.84)}
function highlightr187(){highlightr1(); highlightr = 87; graph3(.84)}
function highlightr188(){highlightr1(); highlightr = 88; graph3(.84)}
function highlightr189(){highlightr1(); highlightr = 89; graph3(.84)}
function highlightr190(){highlightr1(); highlightr = 90; graph3(.84)}
function highlightr191(){highlightr1(); highlightr = 91; graph3(.84)}
function highlightr192(){highlightr1(); highlightr = 92; graph3(.84)}
function highlightr193(){highlightr1(); highlightr = 93; graph3(.84)}
function highlightr194(){highlightr1(); highlightr = 94; graph3(.84)}
function highlightr195(){highlightr1(); highlightr = 95; graph3(.84)}
function highlightr196(){highlightr1(); highlightr = 96; graph3(.84)}
function highlightr197(){highlightr1(); highlightr = 97; graph3(.84)}
function highlightr198(){highlightr1(); highlightr = 98; graph3(.84)}
function highlightr199(){highlightr1(); highlightr = 99; graph3(.84)}
function highlightr1100(){highlightr1(); highlightr = 100; graph3(.84)}
function highlightr1101(){highlightr1(); highlightr = 101; graph3(.84)}

function highlightr1(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td bgcolor='lightgray'><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table4 = []
    for (i = 70; i < 101; i++) {
        if (highlightr == i){
            table4 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table4 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }  
    }
    if (highlightr == 101){
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>&#8734;</b></td><td onmouseover='highlightr1101()' bgcolor='lightgray'>0.842</td><td onmouseover='highlightr2101()' bgcolor='lightgray'>1.282</td><td onmouseover='highlightr3101()' bgcolor='lightgray'>1.645</td><td onmouseover='highlightr4101()' bgcolor='lightgray'>1.960</td><td onmouseover='highlightr5101()' bgcolor='lightgray'>2.326</td><td onmouseover='highlightr6101()' bgcolor='lightgray'>2.576</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>&#8734;</b></td><td onmouseover='highlightr1101()' bgcolor='lightgray'>0.842</td><td onmouseover='highlightr2101()'>1.282</td><td onmouseover='highlightr3101()'>1.645</td><td onmouseover='highlightr4101()'>1.960</td><td onmouseover='highlightr5101()'>2.326</td><td onmouseover='highlightr6101()'>2.576</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table4+table5+"</table>"
    document.getElementById("output3").innerHTML = tablez
}

function highlightr270(){highlightr2(); highlightr = 70; graph3(1.28)}
function highlightr271(){highlightr2(); highlightr = 71; graph3(1.28)}
function highlightr272(){highlightr2(); highlightr = 72; graph3(1.28)}
function highlightr273(){highlightr2(); highlightr = 73; graph3(1.28)}
function highlightr274(){highlightr2(); highlightr = 74; graph3(1.28)}
function highlightr275(){highlightr2(); highlightr = 75; graph3(1.28)}
function highlightr276(){highlightr2(); highlightr = 76; graph3(1.28)}
function highlightr277(){highlightr2(); highlightr = 77; graph3(1.28)}
function highlightr278(){highlightr2(); highlightr = 78; graph3(1.28)}
function highlightr279(){highlightr2(); highlightr = 79; graph3(1.28)}
function highlightr280(){highlightr2(); highlightr = 80; graph3(1.28)}
function highlightr281(){highlightr2(); highlightr = 81; graph3(1.28)}
function highlightr282(){highlightr2(); highlightr = 82; graph3(1.28)}
function highlightr283(){highlightr2(); highlightr = 83; graph3(1.28)}
function highlightr284(){highlightr2(); highlightr = 84; graph3(1.28)}
function highlightr285(){highlightr2(); highlightr = 85; graph3(1.28)}
function highlightr286(){highlightr2(); highlightr = 86; graph3(1.28)}
function highlightr287(){highlightr2(); highlightr = 87; graph3(1.28)}
function highlightr288(){highlightr2(); highlightr = 88; graph3(1.28)}
function highlightr289(){highlightr2(); highlightr = 89; graph3(1.28)}
function highlightr290(){highlightr2(); highlightr = 90; graph3(1.28)}
function highlightr291(){highlightr2(); highlightr = 91; graph3(1.28)}
function highlightr292(){highlightr2(); highlightr = 92; graph3(1.28)}
function highlightr293(){highlightr2(); highlightr = 93; graph3(1.28)}
function highlightr294(){highlightr2(); highlightr = 94; graph3(1.28)}
function highlightr295(){highlightr2(); highlightr = 95; graph3(1.28)}
function highlightr296(){highlightr2(); highlightr = 96; graph3(1.28)}
function highlightr297(){highlightr2(); highlightr = 97; graph3(1.28)}
function highlightr298(){highlightr2(); highlightr = 98; graph3(1.28)}
function highlightr299(){highlightr2(); highlightr = 99; graph3(1.28)}
function highlightr2100(){highlightr2(); highlightr = 100; graph3(1.28)}
function highlightr2101(){highlightr2(); highlightr = 101; graph3(1.28)}

function highlightr2(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td bgcolor='lightgray'><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table4 = []
    for (i = 70; i < 101; i++) {
        if (highlightr == i){
            table4 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table4 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    if (highlightr == 101){
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>&#8734;</b></td><td onmouseover='highlightr1101()' bgcolor='lightgray'>0.842</td><td onmouseover='highlightr2101()' bgcolor='lightgray'>1.282</td><td onmouseover='highlightr3101()' bgcolor='lightgray'>1.645</td><td onmouseover='highlightr4101()' bgcolor='lightgray'>1.960</td><td onmouseover='highlightr5101()' bgcolor='lightgray'>2.326</td><td onmouseover='highlightr6101()' bgcolor='lightgray'>2.576</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>&#8734;</b></td><td onmouseover='highlightr1101()'>0.842</td><td onmouseover='highlightr2101()' bgcolor='lightgray'>1.282</td><td onmouseover='highlightr3101()'>1.645</td><td onmouseover='highlightr4101()'>1.960</td><td onmouseover='highlightr5101()'>2.326</td><td onmouseover='highlightr6101()'>2.576</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table4+table5+"</table>"
    document.getElementById("output3").innerHTML = tablez
}

function highlightr370(){highlightr3(); highlightr = 70; graph3(1.64)}
function highlightr371(){highlightr3(); highlightr = 71; graph3(1.64)}
function highlightr372(){highlightr3(); highlightr = 72; graph3(1.64)}
function highlightr373(){highlightr3(); highlightr = 73; graph3(1.64)}
function highlightr374(){highlightr3(); highlightr = 74; graph3(1.64)}
function highlightr375(){highlightr3(); highlightr = 75; graph3(1.64)}
function highlightr376(){highlightr3(); highlightr = 76; graph3(1.64)}
function highlightr377(){highlightr3(); highlightr = 77; graph3(1.64)}
function highlightr378(){highlightr3(); highlightr = 78; graph3(1.64)}
function highlightr379(){highlightr3(); highlightr = 79; graph3(1.64)}
function highlightr380(){highlightr3(); highlightr = 80; graph3(1.64)}
function highlightr381(){highlightr3(); highlightr = 81; graph3(1.64)}
function highlightr382(){highlightr3(); highlightr = 82; graph3(1.64)}
function highlightr383(){highlightr3(); highlightr = 83; graph3(1.64)}
function highlightr384(){highlightr3(); highlightr = 84; graph3(1.64)}
function highlightr385(){highlightr3(); highlightr = 85; graph3(1.64)}
function highlightr386(){highlightr3(); highlightr = 86; graph3(1.64)}
function highlightr387(){highlightr3(); highlightr = 87; graph3(1.64)}
function highlightr388(){highlightr3(); highlightr = 88; graph3(1.64)}
function highlightr389(){highlightr3(); highlightr = 89; graph3(1.64)}
function highlightr390(){highlightr3(); highlightr = 90; graph3(1.64)}
function highlightr391(){highlightr3(); highlightr = 91; graph3(1.64)}
function highlightr392(){highlightr3(); highlightr = 92; graph3(1.64)}
function highlightr393(){highlightr3(); highlightr = 93; graph3(1.64)}
function highlightr394(){highlightr3(); highlightr = 94; graph3(1.64)}
function highlightr395(){highlightr3(); highlightr = 95; graph3(1.64)}
function highlightr396(){highlightr3(); highlightr = 96; graph3(1.64)}
function highlightr397(){highlightr3(); highlightr = 97; graph3(1.64)}
function highlightr398(){highlightr3(); highlightr = 98; graph3(1.64)}
function highlightr399(){highlightr3(); highlightr = 99; graph3(1.64)}
function highlightr3100(){highlightr3(); highlightr = 100; graph3(1.64)}
function highlightr3101(){highlightr3(); highlightr = 101; graph3(1.64)}

function highlightr3(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td bgcolor='lightgray'><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table4 = []
    for (i = 70; i < 101; i++) {
        if (highlightr == i){
            table4 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table4 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    } 
    if (highlightr == 101){
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>&#8734;</b></td><td onmouseover='highlightr1101()' bgcolor='lightgray'>0.842</td><td onmouseover='highlightr2101()' bgcolor='lightgray'>1.282</td><td onmouseover='highlightr3101()' bgcolor='lightgray'>1.645</td><td onmouseover='highlightr4101()' bgcolor='lightgray'>1.960</td><td onmouseover='highlightr5101()' bgcolor='lightgray'>2.326</td><td onmouseover='highlightr6101()' bgcolor='lightgray'>2.576</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>&#8734;</b></td><td onmouseover='highlightr1101()'>0.842</td><td onmouseover='highlightr2101()'>1.282</td><td onmouseover='highlightr3101()' bgcolor='lightgray'>1.645</td><td onmouseover='highlightr4101()'>1.960</td><td onmouseover='highlightr5101()'>2.326</td><td onmouseover='highlightr6101()'>2.576</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table4+table5+"</table>"
    document.getElementById("output3").innerHTML = tablez
}

function highlightr470(){highlightr4(); highlightr = 70; graph3(1.96)}
function highlightr471(){highlightr4(); highlightr = 71; graph3(1.96)}
function highlightr472(){highlightr4(); highlightr = 72; graph3(1.96)}
function highlightr473(){highlightr4(); highlightr = 73; graph3(1.96)}
function highlightr474(){highlightr4(); highlightr = 74; graph3(1.96)}
function highlightr475(){highlightr4(); highlightr = 75; graph3(1.96)}
function highlightr476(){highlightr4(); highlightr = 76; graph3(1.96)}
function highlightr477(){highlightr4(); highlightr = 77; graph3(1.96)}
function highlightr478(){highlightr4(); highlightr = 78; graph3(1.96)}
function highlightr479(){highlightr4(); highlightr = 79; graph3(1.96)}
function highlightr480(){highlightr4(); highlightr = 80; graph3(1.96)}
function highlightr481(){highlightr4(); highlightr = 81; graph3(1.96)}
function highlightr482(){highlightr4(); highlightr = 82; graph3(1.96)}
function highlightr483(){highlightr4(); highlightr = 83; graph3(1.96)}
function highlightr484(){highlightr4(); highlightr = 84; graph3(1.96)}
function highlightr485(){highlightr4(); highlightr = 85; graph3(1.96)}
function highlightr486(){highlightr4(); highlightr = 86; graph3(1.96)}
function highlightr487(){highlightr4(); highlightr = 87; graph3(1.96)}
function highlightr488(){highlightr4(); highlightr = 88; graph3(1.96)}
function highlightr489(){highlightr4(); highlightr = 89; graph3(1.96)}
function highlightr490(){highlightr4(); highlightr = 90; graph3(1.96)}
function highlightr491(){highlightr4(); highlightr = 91; graph3(1.96)}
function highlightr492(){highlightr4(); highlightr = 92; graph3(1.96)}
function highlightr493(){highlightr4(); highlightr = 93; graph3(1.96)}
function highlightr494(){highlightr4(); highlightr = 94; graph3(1.96)}
function highlightr495(){highlightr4(); highlightr = 95; graph3(1.96)}
function highlightr496(){highlightr4(); highlightr = 96; graph3(1.96)}
function highlightr497(){highlightr4(); highlightr = 97; graph3(1.96)}
function highlightr498(){highlightr4(); highlightr = 98; graph3(1.96)}
function highlightr499(){highlightr4(); highlightr = 99; graph3(1.96)}
function highlightr4100(){highlightr4(); highlightr = 100; graph3(1.96)}
function highlightr4101(){highlightr4(); highlightr = 101; graph3(1.96)}

function highlightr4(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td bgcolor='lightgray'><b>.025</b></td><td><b>.01</b></td><td><b>.005</b></td></tr>"
    table4 = []
    for (i = 70; i < 101; i++) {
        if (highlightr == i){
            table4 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table4 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    if (highlightr == 101){
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>&#8734;</b></td><td onmouseover='highlightr1101()' bgcolor='lightgray'>0.842</td><td onmouseover='highlightr2101()' bgcolor='lightgray'>1.282</td><td onmouseover='highlightr3101()' bgcolor='lightgray'>1.645</td><td onmouseover='highlightr4101()' bgcolor='lightgray'>1.960</td><td onmouseover='highlightr5101()' bgcolor='lightgray'>2.326</td><td onmouseover='highlightr6101()' bgcolor='lightgray'>2.576</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>&#8734;</b></td><td onmouseover='highlightr1101()'>0.842</td><td onmouseover='highlightr2101()'>1.282</td><td onmouseover='highlightr3101()'>1.645</td><td onmouseover='highlightr4101()' bgcolor='lightgray'>1.960</td><td onmouseover='highlightr5101()'>2.326</td><td onmouseover='highlightr6101()'>2.576</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table4+table5+"</table>"
    document.getElementById("output3").innerHTML = tablez
}

function highlightr570(){highlightr5(); highlightr = 70; graph3(2.33)}
function highlightr571(){highlightr5(); highlightr = 71; graph3(2.33)}
function highlightr572(){highlightr5(); highlightr = 72; graph3(2.33)}
function highlightr573(){highlightr5(); highlightr = 73; graph3(2.33)}
function highlightr574(){highlightr5(); highlightr = 74; graph3(2.33)}
function highlightr575(){highlightr5(); highlightr = 75; graph3(2.33)}
function highlightr576(){highlightr5(); highlightr = 76; graph3(2.33)}
function highlightr577(){highlightr5(); highlightr = 77; graph3(2.33)}
function highlightr578(){highlightr5(); highlightr = 78; graph3(2.33)}
function highlightr579(){highlightr5(); highlightr = 79; graph3(2.33)}
function highlightr580(){highlightr5(); highlightr = 80; graph3(2.33)}
function highlightr581(){highlightr5(); highlightr = 81; graph3(2.33)}
function highlightr582(){highlightr5(); highlightr = 82; graph3(2.33)}
function highlightr583(){highlightr5(); highlightr = 83; graph3(2.33)}
function highlightr584(){highlightr5(); highlightr = 84; graph3(2.33)}
function highlightr585(){highlightr5(); highlightr = 85; graph3(2.33)}
function highlightr586(){highlightr5(); highlightr = 86; graph3(2.33)}
function highlightr587(){highlightr5(); highlightr = 87; graph3(2.33)}
function highlightr588(){highlightr5(); highlightr = 88; graph3(2.33)}
function highlightr589(){highlightr5(); highlightr = 89; graph3(2.33)}
function highlightr590(){highlightr5(); highlightr = 90; graph3(2.33)}
function highlightr591(){highlightr5(); highlightr = 91; graph3(2.33)}
function highlightr592(){highlightr5(); highlightr = 92; graph3(2.33)}
function highlightr593(){highlightr5(); highlightr = 93; graph3(2.33)}
function highlightr594(){highlightr5(); highlightr = 94; graph3(2.33)}
function highlightr595(){highlightr5(); highlightr = 95; graph3(2.33)}
function highlightr596(){highlightr5(); highlightr = 96; graph3(2.33)}
function highlightr597(){highlightr5(); highlightr = 97; graph3(2.33)}
function highlightr598(){highlightr5(); highlightr = 98; graph3(2.33)}
function highlightr599(){highlightr5(); highlightr = 99; graph3(2.33)}
function highlightr5100(){highlightr5(); highlightr = 100; graph3(2.33)}
function highlightr5101(){highlightr5(); highlightr = 101; graph3(2.33)}

function highlightr5(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td bgcolor='lightgray'><b>.01</b></td><td><b>.005</b></td></tr>"
    table4 = []
    for (i = 70; i < 101; i++) {
        if (highlightr == i){
            table4 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table4 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()'bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    if (highlightr == 101){
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>&#8734;</b></td><td onmouseover='highlightr1101()' bgcolor='lightgray'>0.842</td><td onmouseover='highlightr2101()' bgcolor='lightgray'>1.282</td><td onmouseover='highlightr3101()' bgcolor='lightgray'>1.645</td><td onmouseover='highlightr4101()' bgcolor='lightgray'>1.960</td><td onmouseover='highlightr5101()' bgcolor='lightgray'>2.326</td><td onmouseover='highlightr6101()' bgcolor='lightgray'>2.576</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>&#8734;</b></td><td onmouseover='highlightr1101()'>0.842</td><td onmouseover='highlightr2101()'>1.282</td><td onmouseover='highlightr3101()'>1.645</td><td onmouseover='highlightr4101()'>1.960</td><td onmouseover='highlightr5101()' bgcolor='lightgray'>2.326</td><td onmouseover='highlightr6101()'>2.576</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table4+table5+"</table>"
    document.getElementById("output3").innerHTML = tablez
}

function highlightr670(){highlightr6(); highlightr = 70; graph3(2.57)}
function highlightr671(){highlightr6(); highlightr = 71; graph3(2.57)}
function highlightr672(){highlightr6(); highlightr = 72; graph3(2.57)}
function highlightr673(){highlightr6(); highlightr = 73; graph3(2.57)}
function highlightr674(){highlightr6(); highlightr = 74; graph3(2.57)}
function highlightr675(){highlightr6(); highlightr = 75; graph3(2.57)}
function highlightr676(){highlightr6(); highlightr = 76; graph3(2.57)}
function highlightr677(){highlightr6(); highlightr = 77; graph3(2.57)}
function highlightr678(){highlightr6(); highlightr = 78; graph3(2.57)}
function highlightr679(){highlightr6(); highlightr = 79; graph3(2.57)}
function highlightr680(){highlightr6(); highlightr = 80; graph3(2.57)}
function highlightr681(){highlightr6(); highlightr = 81; graph3(2.57)}
function highlightr682(){highlightr6(); highlightr = 82; graph3(2.57)}
function highlightr683(){highlightr6(); highlightr = 83; graph3(2.57)}
function highlightr684(){highlightr6(); highlightr = 84; graph3(2.57)}
function highlightr685(){highlightr6(); highlightr = 85; graph3(2.57)}
function highlightr686(){highlightr6(); highlightr = 86; graph3(2.57)}
function highlightr687(){highlightr6(); highlightr = 87; graph3(2.57)}
function highlightr688(){highlightr6(); highlightr = 88; graph3(2.57)}
function highlightr689(){highlightr6(); highlightr = 89; graph3(2.57)}
function highlightr690(){highlightr6(); highlightr = 90; graph3(2.57)}
function highlightr691(){highlightr6(); highlightr = 91; graph3(2.57)}
function highlightr692(){highlightr6(); highlightr = 92; graph3(2.57)}
function highlightr693(){highlightr6(); highlightr = 93; graph3(2.57)}
function highlightr694(){highlightr6(); highlightr = 94; graph3(2.57)}
function highlightr695(){highlightr6(); highlightr = 95; graph3(2.57)}
function highlightr696(){highlightr6(); highlightr = 96; graph3(2.57)}
function highlightr697(){highlightr6(); highlightr = 97; graph3(2.57)}
function highlightr698(){highlightr6(); highlightr = 98; graph3(2.57)}
function highlightr699(){highlightr6(); highlightr = 99; graph3(2.57)}
function highlightr6100(){highlightr6(); highlightr = 100; graph3(2.57)}
function highlightr6101(){highlightr6(); highlightr = 101; graph3(2.57)}

function highlightr6(){
    table0 = "<tr style='border-top: thin solid'><td></td><td colspan='6' style='border-bottom: thin solid;'><b>Area in the Upper Tail</b></td></tr>"
    table1 = "<tr style='border-bottom: thin solid;'><td><b>df</b></td><td><b>.20</b></td><td><b>.10</b></td><td><b>.05</b></td><td><b>.025</b></td><td><b>.01</b></td><td bgcolor='lightgray'><b>.005</b></td></tr>"
    table4 = []
    for (i = 70; i < 101; i++) {
        if (highlightr == i){
            table4 += "<tr><td bgcolor='lightgray'><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()' bgcolor='lightgray'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()' bgcolor='lightgray'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()' bgcolor='lightgray'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()' bgcolor='lightgray'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()' bgcolor='lightgray'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        } else {
            table4 += "<tr><td><b>"+i+"</b></td><td onmouseover='highlightr1"+i+"()'>"+tinv(.20, i).toFixed(3)+"</td><td onmouseover='highlightr2"+i+"()'>"+tinv(.10, i).toFixed(3)+"</td><td onmouseover='highlightr3"+i+"()'>"+tinv(.05, i).toFixed(3)+"</td><td onmouseover='highlightr4"+i+"()'>"+tinv(.025, i).toFixed(3)+"</td><td onmouseover='highlightr5"+i+"()'>"+tinv(.01, i).toFixed(3)+"</td><td onmouseover='highlightr6"+i+"()' bgcolor='lightgray'>"+tinv(.005, i).toFixed(3)+"</td></tr>"
        }
        
    }  
    if (highlightr == 101){
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>&#8734;</b></td><td onmouseover='highlightr1101()' bgcolor='lightgray'>0.842</td><td onmouseover='highlightr2101()' bgcolor='lightgray'>1.282</td><td onmouseover='highlightr3101()' bgcolor='lightgray'>1.645</td><td onmouseover='highlightr4101()' bgcolor='lightgray'>1.960</td><td onmouseover='highlightr5101()' bgcolor='lightgray'>2.326</td><td onmouseover='highlightr6101()' bgcolor='lightgray'>2.576</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>&#8734;</b></td><td onmouseover='highlightr1101()'>0.842</td><td onmouseover='highlightr2101()'>1.282</td><td onmouseover='highlightr3101()'>1.645</td><td onmouseover='highlightr4101()'>1.960</td><td onmouseover='highlightr5101()'>2.326</td><td onmouseover='highlightr6101()' bgcolor='lightgray'>2.576</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table0+table1+table4+table5+"</table>"
    document.getElementById("output3").innerHTML = tablez
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

function graph1(z){
    var lessval = Math.max(z, -2.97)
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
    //ctx.fillText("z",285,132);
    ctx.fillText("t",18 + .434*(300+100*lessval),145);
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















var canvas = document.getElementById("Canvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

graph00();

function graph00(){
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = (i-300)/100
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("Canvas2");
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

function graph2(z){
    var lessval = Math.max(z, -2.70)
    var lessvalz = 300+100*lessval
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = (i-300)/100
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("Canvas2");
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
    //ctx.fillText("z",285,132);
    ctx.fillText("t",18 + .433*(300+100*lessval),145);
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










var canvas = document.getElementById("Canvas3");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

graph000();

function graph000(){
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = (i-300)/100
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("Canvas3");
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

function graph3(z){
    var lessval = Math.max(z, -2.70)
    var lessvalz = 300+100*lessval
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = (i-300)/100
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("Canvas3");
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
    //ctx.fillText("z",285,132);
    ctx.fillText("t",18 + .433*(300+100*lessval),145);
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
