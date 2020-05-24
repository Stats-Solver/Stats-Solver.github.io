$("#values").hide(); $("#enterstats").hide();
$("#expconf").hide();

$(function () {
            $('[data-toggle="tooltip"]').tooltip()
    })

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
    $("#expconf").show();
    var sigma = document.getElementById("sigma").value;
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var xbar = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var conlev = document.getElementById("conlev").value;
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf);
    var marginerror = zalphahalf * (stdev / Math.sqrt(size));
    var anslow = xbar - marginerror; var anshigh = (parseFloat(xbar)+marginerror)
    
    if (sigma == "known") {
        document.getElementById("output1").innerHTML = "$$ \\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2) + "\\rightarrow \\alpha = "+alpha.toFixed(2)+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3) +"$$"
    } else if (sigma == "unknown") {
        document.getElementById("output1").innerHTML = "$$ \\bar{x} \\pm t_{\\alpha/2} \\frac{s}{\\sqrt{n}} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2) + "\\rightarrow \\alpha = "+alpha.toFixed(2)+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3) +"$$"
    } 
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 400, 300);
    ctx.beginPath();
    ctx.moveTo(20, 120);
    ctx.bezierCurveTo(120, 80, 100, 30, 150, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.bezierCurveTo(200, 30, 170, 80, 280, 120);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.stroke();
    
    ctx.fillText("0",148,145);
    ctx.fillText("z",285,132);
    ctx.fillText("Zα/2 = "+zalphahalf.toFixed(2),220,145);
    ctx.fillText("α/2 = "+alphahalf,250,100);
    
    ctx.beginPath();
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(230, 135);
    ctx.lineTo(230, 125);
    ctx.stroke();
     
    ctx.beginPath();
    ctx.moveTo(230, 96);
    ctx.lineTo(230, 130);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(232, 97);
    ctx.lineTo(232, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(234, 98);
    ctx.lineTo(234, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(236, 99);
    ctx.lineTo(236, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(238, 100);
    ctx.lineTo(238, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(240, 102);
    ctx.lineTo(240, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(242, 103);
    ctx.lineTo(242, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(244, 104);
    ctx.lineTo(244, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(246, 105);
    ctx.lineTo(246, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(248, 106);
    ctx.lineTo(248, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(250, 107);
    ctx.lineTo(250, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(252, 108);
    ctx.lineTo(252, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(254, 109);
    ctx.lineTo(254, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(256, 110);
    ctx.lineTo(256, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(258, 111);
    ctx.lineTo(258, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(260, 112);
    ctx.lineTo(260, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(262, 113);
    ctx.lineTo(262, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(264, 114);
    ctx.lineTo(264, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(266, 115);
    ctx.lineTo(266, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(268, 116);
    ctx.lineTo(268, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(270, 116);
    ctx.lineTo(270, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(272, 117);
    ctx.lineTo(272, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(274, 117);
    ctx.lineTo(274, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(276, 118);
    ctx.lineTo(276, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(278, 119);
    ctx.lineTo(278, 130);
    ctx.stroke();
    
    
    var zvalue = toFixing(zalphahalf,1)
    var zvaluemin1 = (zvalue - .1).toFixed(1)
    var zvalueplus1 = (parseFloat(zvalue) + .1).toFixed(1)
    
    
    table1 = []
    for (var r = 0; r < 10; r++){
        table1 += "<td>" + (.1*r).toFixed(1) + "</td>";
    }
    
    table2 = []
    for (var r = 0; r < 10; r++){
        table2 += "<td>" + normalcdf(parseFloat(zvaluemin1) + parseFloat(.01*r)).toFixed(4) + "</td>";
    }
    
    table3 = []
    for (var r = 0; r < 10; r++){
        table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4) + "</td>";
    }
    
    var tablez = "<table border=1><tr><td>z</td>"+table1+"</tr><tr><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    table4 = "<td></td><td colspan='6'>Area in the Upper Tail</td>"
    
    table5 = "<td>df</td><td>.20</td><td>.10</td><td>.05</td><td>.025</td><td>.01</td><td>.005</td>"
    
    table6 = "<td>"+ sizem1 +"</td><td>"+tinv(.20,sizem1).toFixed(3)+"</td><td>"+tinv(.10,sizem1).toFixed(3)+"</td><td>"+tinv(.05,sizem1).toFixed(3)+"</td><td>"+tinv(.025,sizem1).toFixed(3)+"</td><td>"+tinv(.01,sizem1).toFixed(3)+"</td><td>"+tinv(.005,sizem1).toFixed(3)+"</td>"
    
    
    var tablet = "<table border=1><tr>"+table4+"</tr><tr>"+table5+"</tr><tr>"+table6+"</tr></table>"
    
    
    if (sigma == "known") {
        document.getElementById("output2").innerHTML = tablez + " $$" + xbar + "\\pm" + zalphahalf.toFixed(2) + "\\frac{"+stdev+"}{\\sqrt{"+size+"}}$$ $$"+xbar + "\\pm" +marginerror.toFixed(2) + "$$ $$" + anslow.toFixed(2) + "\\text{ to }" + anshigh.toFixed(2) + " $$"
    } else if (sigma == "unknown") {
        document.getElementById("output2").innerHTML = tablet + " $$" + xbar + "\\pm" + zalphahalf.toFixed(2) + "\\frac{"+stdev+"}{\\sqrt{"+size+"}}$$ $$"+xbar + "\\pm" +marginerror.toFixed(2) + "$$ $$" + anslow.toFixed(2) + "\\text{ to }" + anshigh.toFixed(2) + " $$"
    } 
    
    MathJax.typeset();
}

function example1(){
    document.getElementById('size').value="40"
    document.getElementById('xbar').value="25"
    document.getElementById('stdev').value="5"
    document.getElementById('sigma').value="known"
    document.getElementById('conlev').value=95
    conint()
}

function example2(){
    document.getElementById('size').value="54"
    document.getElementById('xbar').value="22.5"
    document.getElementById('stdev').value="4.4"
    document.getElementById('sigma').value="unknown"
    document.getElementById('conlev').value=99
    conint()
}
