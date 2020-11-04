$("#enterstats").hide(); $("#explanation").hide();
$("#expconf").hide(); $("#pointestimation").hide(); $("#samplingdistributions").show(); 
$("#switchsampling").hide(); $("#switchpoint").show();
$("#samplingdistributionxbar").show(); $("#samplingdistributionpbar").hide();
$("#probabilitiesxbar").hide(); $("#probabilitiespbar").hide();
$("#finitepopsize1").hide(); $("#finitepopsize2").hide(); $("#finitepopsize3").hide(); $("#finitepopsize4").hide();
solvetype = "distribution"

$("#calcprob").hide(); $("#probxbar").hide(); $("#probpbar").hide(); $("#calcprob2").hide();

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
    $("#calcprob").show();
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
        if (solvetype == "distribution"){
            conint1()
        } else if (solvetype == "probability"){
            conint3()
        }
    } else if (x == "proportion"){
        if (solvetype == "distribution"){
            conint2()
        } else if (solvetype == "probability"){
            conint4()
        }
    } 
}

function calcprob() {
    $("#calcprob2").show(); $("#calcprob").hide();
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
       $("#probxbar").show();
    } else if (x == "proportion"){
       $("#probpbar").show();
    } 
}

function calcprob2() {
    $("#calcprob").show(); $("#calcprob2").hide();
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
       $("#probxbar").hide();
    } else if (x == "proportion"){
       $("#probpbar").hide();
    } 
}

function popsizekind(){
    var popsize = document.getElementById("popsize").value;
    if (popsize == "infinite"  || popsize == "unknown") {
        $("#finitepopsize1").hide(); $("#finitepopsize2").hide(); $("#finitepopsize3").hide(); $("#finitepopsize4").hide();
    } else if (popsize == "finite") {
        $("#finitepopsize1").show(); $("#finitepopsize2").show(); $("#finitepopsize3").show(); $("#finitepopsize4").show();
    }
}


function conint1(){
    $("#explanation").hide();
    $("#expconf").show();
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var mu = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var popsize = document.getElementById("popsize").value;
    var popsizevalue = document.getElementById("popsizevalue").value;
    var samptopopratio = size / popsizevalue
    var stderr = stdev / Math.sqrt(size)
    var stderr2 = Math.sqrt((popsizevalue-size)/(popsizevalue-1)) * (stdev / Math.sqrt(size))
    
    if (size >= 30) {
        var form = "Normal"
    } else if (size < 30) {
        var form = "Not Normal"
    }

    document.getElementById("descriptiontext").innerHTML = "The sampling distribution of the sample mean is the probability distribution of the sample mean."
    document.getElementById("formulatext").innerHTML = "$$ E(\\bar{x}) = \\mu $$ $$ \\sigma_\\bar{x} = \\frac{\\sigma}{\\sqrt{n}} $$ Central Limit Theorem: As the sample size becomes large, the sampling distribution of the sample mean can be approximated by a normal distribution."
    document.getElementById("explanationtext").innerHTML = "If the population being sampled from is normal, the sampling distribution of the sample mean is normal."
    
    if (popsize == "infinite"  || popsize == "unknown") {
        document.getElementById("output1").innerHTML = " $$ \\begin{align} E(\\bar{x})  &= "+ mu +" \\end{align}$$ $$ \\begin{align} \\sigma_\\bar{x} &=  \\frac{"+ stdev +"}{\\sqrt{"+ size +"}} \\\\ &= " + parseFloat(stderr.toFixed(2)) + " \\end{align} $$ $$ \\text{Form: } \\text{"+ form + "} $$ "
    } else if (popsize == "finite") {
        if (samptopopratio <= .05) {
            document.getElementById("output1").innerHTML = "$$ \\begin{align} E(\\bar{x})  &= "+ mu +" \\end{align}$$ $$ \\begin{align} \\sigma_\\bar{x} &=  \\frac{"+ stdev +"}{\\sqrt{"+ size +"}} \\\\ &= " + parseFloat(stderr.toFixed(2)) + " \\end{align} $$ $$ \\text{Form: } \\text{"+ form + "} $$ "
        } else if (samptopopratio > .05) {
            document.getElementById("output1").innerHTML = "$$ \\begin{align} E(\\bar{x})  &= "+ mu +" \\end{align}$$ $$ \\begin{align} \\sigma_\\bar{x} &= \\sqrt{\\frac{"+popsizevalue+"-"+size+"}{"+popsizevalue+"-1}} \\left( \\frac{"+ stdev +"}{\\sqrt{"+ size +"}} \\right) \\\\ &= " + parseFloat(stderr2.toFixed(2)) + " \\end{align} $$ $$ \\text{Form: } \\text{"+ form + "} $$ "
        }
        
    }

    MathJax.typeset();
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
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

    ctx.fillText("x̄",285,132);
    ctx.fillText("σ  ="+stderr,220,50);
    ctx.fillText("x̄",226,55);
    ctx.fillText(mu,145,145);

    ctx.beginPath();
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.stroke();
}

function conint2(){
    $("#explanation").hide();
    $("#expconf").show();
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var prptn = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var popsize = document.getElementById("popsize").value;
    var popsizevalue = document.getElementById("popsizevalue").value;
    var samptopopratio = size / popsizevalue
    var stderr = Math.sqrt(prptn*(1-prptn)/size)
    var stderr2 = Math.sqrt((popsizevalue-size)/(popsizevalue-1)) * Math.sqrt(prptn*(1-prptn)/size)
    var cond1 = size * prptn
    var cond2 = size * (1 - prptn)
    
    if (cond1 >= 5 && cond2 >= 5) {
        var form = "Normal"
    } else {
        var form = "Not Normal"
    }

    document.getElementById("descriptiontext").innerHTML = "The sampling distribution of the sample proportion is the probability distribution of the sample proportion."
    document.getElementById("formulatext").innerHTML = "$$ E(\\bar{p}) = p $$ $$ \\sigma_\\bar{p} = \\sqrt{\\frac{p(1-p)}{n}} $$ The sampling distribution of the sample proportioncan be approximated by a normal distribution whenever np > 5 and n(1-p) > 5."
    document.getElementById("explanationtext").innerHTML = "The sampling distribution of the sample proportion depends on both the sample size and the population proportion."
    
    if (popsize == "infinite"  || popsize == "unknown") {
        document.getElementById("output1").innerHTML = "$$ \\begin{align} E(\\bar{p})  &= "+ prptn +" \\end{align}$$ $$ \\begin{align} \\sigma_\\bar{p} &=  \\sqrt{\\frac{"+ prptn +"(1-" + prptn + ")}{"+ size +"}} \\\\ &= " + parseFloat(stderr.toFixed(2)) + " \\end{align} $$ $$ \\text{Form: } \\text{"+ form + "} $$ "
    } else if (popsize == "finite") {
        if (samptopopratio <= .05) {
            document.getElementById("output1").innerHTML = "$$ \\begin{align} E(\\bar{p})  &= "+ prptn +" \\end{align}$$ $$ \\begin{align} \\sigma_\\bar{p} &=  \\sqrt{\\frac{"+ prptn +"(1-" + prptn + ")}{"+ size +"}} \\\\ &= " + parseFloat(stderr.toFixed(2)) + " \\end{align} $$ $$ \\text{Form: } \\text{"+ form + "} $$ "
        } else if (samptopopratio > .05) {
            document.getElementById("output1").innerHTML = "$$ \\begin{align} E(\\bar{p})  &= "+ prptn +" \\end{align}$$ $$ \\begin{align} \\sigma_\\bar{p} &= \\sqrt{\\frac{"+popsizevalue+"-"+size+"}{"+popsizevalue+"-1}} \\sqrt{\\frac{"+ prptn +"(1-" + prptn + ")}{"+ size +"}} \\\\ &= " + parseFloat(stderr2.toFixed(2)) + " \\end{align} $$ $$ \\text{Form: } \\text{"+ form + "} $$ "
        }
        
    }
    
    
    MathJax.typeset();
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
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


    ctx.fillText("p̄",285,132);
    ctx.fillText("σ  ="+parseFloat(stderr.toFixed(2).replace(/^0+/, '')),220,50);
    ctx.fillText("p̄",226,55);
    ctx.fillText(prptn,145,145);

    ctx.beginPath();
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.stroke();
}

function conint3(){
    $("#explanation").hide();
    $("#expconf").show();
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var mu = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var popsize = document.getElementById("popsize").value;
    var popsizevalue = document.getElementById("popsizevalue").value;
    var pmvalue = document.getElementById("pmvalue1").value;
    var lowval = mu - pmvalue; var highval = parseFloat(mu) + parseFloat(pmvalue)
    var stderr = stdev / Math.sqrt(size)
    var lowvalz = (lowval - mu)/stderr; var highvalz = (highval - mu)/stderr;
    var samptopopratio = size / popsizevalue
    var stderr2 = Math.sqrt((popsizevalue-size)/(popsizevalue-1)) * (stdev / Math.sqrt(size))
    
    if (size >= 30) {
        var form = "Normal Distribution"
    } else if (size < 30) {
        var form = "Not a Normal Distribution"
    }

    document.getElementById("descriptiontext").innerHTML = "The sampling distribution of the sample mean is the probability distribution of the sample mean."
    document.getElementById("formulatext").innerHTML = "$$ E(\\bar{x}) = \\mu $$ $$ \\sigma_\\bar{x} = \\frac{\\sigma}{\\sqrt{n}} $$ Central Limit Theorem: As the sample size becomes large, the sampling distribution of the sample mean can be approximated by a normal distribution."
    document.getElementById("explanationtext").innerHTML = "If the population being sampled from is normal, the sampling distribution of the sample mean is normal."
    
    if (popsize == "infinite"  || popsize == "unknown") {
        document.getElementById("output1").innerHTML = "$$ \\begin{align} P(\\bar{x} \\text{ within } \\pm " + pmvalue + " \\text{ of } " + mu + ") &= P(" + lowval + " \\leq \\bar{x} \\leq " + highval + ") \\\\ &= P(" + lowvalz + " \\leq z \\leq " + highvalz + ") \\\\  &= P(z \\leq " + highvalz + ") -  P(z \\leq " + lowvalz + ")  \\end{align}$$ "
    } else if (popsize == "finite") {
        if (samptopopratio <= .05) {
            document.getElementById("output1").innerHTML = "$$ \\begin{align} P(\\bar{x} \\text{ within } \\pm " + pmvalue + " \\text{ of } " + mu + ") &= P(" + lowval + " \\leq \\bar{x} \\leq " + highval + ") \\\\ &= P(" + lowvalz + " \\leq z \\leq " + highvalz + ") \\\\  &= P(z \\leq " + highvalz + ") -  P(z \\leq " + lowvalz + ")  \\end{align}$$ "
        } else if (samptopopratio > .05) {
            document.getElementById("output1").innerHTML = "$$ \\begin{align} P(\\bar{x} \\text{ within } \\pm " + pmvalue + " \\text{ of } " + mu + ") &= P(" + lowval + " \\leq \\bar{x} \\leq " + highval + ") \\\\ &= P(" + lowvalz + " \\leq z \\leq " + highvalz + ") \\\\  &= P(z \\leq " + highvalz + ") -  P(z \\leq " + lowvalz + ")  \\end{align}$$ "
        }
        
    }

    MathJax.typeset();
}

function conint4(){
    $("#explanation").hide();
    $("#expconf").show();
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var prptn = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var popsize = document.getElementById("popsize").value;
    var popsizevalue = document.getElementById("popsizevalue").value;
    var pmvalue = document.getElementById("pmvalue2").value;
    var lowval = prptn - pmvalue; var highval = parseFloat(prptn) + parseFloat(pmvalue)
    var stderr = Math.sqrt(prptn*(1-prptn)/size)
    var lowvalz = (lowval - prptn)/stderr; var highvalz = (highval - prptn)/stderr;
    var samptopopratio = size / popsizevalue
    var stderr2 = Math.sqrt((popsizevalue-size)/(popsizevalue-1)) * (stdev / Math.sqrt(size))
    
    if (size >= 30) {
        var form = "Normal Distribution"
    } else if (size < 30) {
        var form = "Not a Normal Distribution"
    }

    document.getElementById("descriptiontext").innerHTML = "The sampling distribution of the sample mean is the probability distribution of the sample mean."
    document.getElementById("formulatext").innerHTML = "$$ E(\\bar{x}) = \\mu $$ $$ \\sigma_\\bar{x} = \\frac{\\sigma}{\\sqrt{n}} $$ Central Limit Theorem: As the sample size becomes large, the sampling distribution of the sample mean can be approximated by a normal distribution."
    document.getElementById("explanationtext").innerHTML = "If the population being sampled from is normal, the sampling distribution of the sample mean is normal."
    
    if (popsize == "infinite"  || popsize == "unknown") {
        document.getElementById("output1").innerHTML = "$$ \\begin{align} P(\\bar{p} \\text{ within } \\pm " + pmvalue + " \\text{ of } " + prptn + ") &= P(" + parseFloat(lowval.toFixed(2)) + " \\leq \\bar{p} \\leq " + parseFloat(highval.toFixed(2)) + ") \\\\ &= P(" + parseFloat(lowvalz.toFixed(2)) + " \\leq z \\leq " + parseFloat(highvalz.toFixed(2)) + ") \\\\  &= P(z \\leq " + parseFloat(highvalz.toFixed(2)) + ") -  P(z \\leq " + parseFloat(lowvalz.toFixed(2)) + ")  \\end{align}$$ "
    } else if (popsize == "finite") {
        if (samptopopratio <= .05) {
            document.getElementById("output1").innerHTML = "$$ \\begin{align} P(\\bar{p} \\text{ within } \\pm " + pmvalue + " \\text{ of } " + prptn + ") &= P(" + parseFloat(lowval.toFixed(2)) + " \\leq \\bar{p} \\leq " + parseFloat(highval.toFixed(2)) + ") \\\\ &= P(" + parseFloat(lowvalz.toFixed(2)) + " \\leq z \\leq " + parseFloat(highvalz.toFixed(2)) + ") \\\\  &= P(z \\leq " + parseFloat(highvalz.toFixed(2)) + ") -  P(z \\leq " + parseFloat(lowvalz.toFixed(2)) + ")  \\end{align}$$ "
        } else if (samptopopratio > .05) {
            document.getElementById("output1").innerHTML = "$$ \\begin{align} P(\\bar{p} \\text{ within } \\pm " + pmvalue + " \\text{ of } " + prptn + ") &= P(" + parseFloat(lowval.toFixed(2)) + " \\leq \\bar{p} \\leq " + parseFloat(highval.toFixed(2)) + ") \\\\ &= P(" + parseFloat(lowvalz.toFixed(2)) + " \\leq z \\leq " + parseFloat(highvalz.toFixed(2)) + ") \\\\  &= P(z \\leq " + parseFloat(highvalz.toFixed(2)) + ") -  P(z \\leq " + parseFloat(lowvalz.toFixed(2)) + ")  \\end{align}$$ "
        }
        
    }

    MathJax.typeset();
}

function example1(){
    $("#samplingdistributionxbar").show(); $("#samplingdistributionpbar").hide();
    $("#probabilitiesxbar").hide(); $("#probabilitiespbar").hide();
    $("#sd0").show(); $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
    document.getElementById("samplestat").value = "mean"
    document.getElementById('xbar').value="100"
    document.getElementById('stdev').value="18"
    document.getElementById('size').value="81"
    document.getElementById('psize').value="inf"
    document.getElementById("pmvalue1").value="3"
}

function example2(){
    $("#samplingdistributionxbar").hide(); $("#samplingdistributionpbar").show();
    $("#probabilitiesxbar").hide(); $("#probabilitiespbar").hide();
    $("#sd0").hide(); $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
    document.getElementById("samplestat").value = "proportion"
    document.getElementById('xbar').value=".30"
    document.getElementById('size').value="60"
    document.getElementById('psize').value="inf"
    document.getElementById("pmvalue2").value=".1"
}

function samplestat() {
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
        $("#samplingdistributionxbar").show(); $("#samplingdistributionpbar").hide();
        $("#sd0").show(); $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
    } else if (x == "proportion"){
        $("#samplingdistributionxbar").hide(); $("#samplingdistributionpbar").show();
        $("#sd0").hide(); $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
    } 
}

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
    var x = document.getElementById("stat").value;
    if (x == "mean"){
        mean()
    } else if (x == "standard"){
        standard()
    } else if (x == "proportion"){
        proportion()
    } 
}

function stat(){
    $("#output").empty();
    var x = document.getElementById("stat").value;
    if (x == "mean"){
        calcmean()
    } else if (x == "standard"){
        calcstandard()
    } else if (x == "proportion"){
        calcproportion()
    } 
   
}

function calcmean(){
    $("#explanation").show(); $("#switchpopulation").show(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The point estimate of the population mean is the sample mean."
    document.getElementById("formulatext").innerHTML = "$$ \\bar{x} = \\frac{\\sum{x}}{n} $$"
    document.getElementById("explanationtext").innerHTML = "$$\\sum{x} = x_1 + x_2 + \\cdots + x_n $$"
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var adds = each[0];  var avgeach = avg(each);  
    for (let i=1; i<len; i++){
        adds += "+" + each[i]
    }
    document.getElementById("output").innerHTML+= "$$\\text{Sample Mean}$$ $$ \\begin{align} \\bar{x} &= \\frac{\\sum{x}}{n} \\\\ &= \\frac{" + adds + "}{" + len + "} \\\\ &=  \\frac{" + sum(each) + "}{" + len + "} \\\\ &= \\boxed{" + parseFloat(avgeach.toFixed(2)) + "} \\end{align}$$"
    MathJax.typeset();
}

function calcstandard(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").show(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The point estimate of the population standard deviation is the sample standard deviation."
    document.getElementById("formulatext").innerHTML = "$$ s = \\sqrt{s^2} $$"
    document.getElementById("explanationtext").innerHTML = "The standard deviation is the square root of the variance."
    $("#output").empty();
    $("#desstdev").show(); $("#popstdev").show(); $("#samstdev").hide();
    var str = document.getElementById("values").value;
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
    document.getElementById("output").innerHTML = "$$\\text{Sample Standard Deviation}$$ $$ \\begin{align} s &= \\sqrt{s^2} \\\\ &= \\sqrt{"+parseFloat(ansvar.toFixed(2))+"} \\\\ &= \\boxed{"+parseFloat(ansstd.toFixed(2))+"}\\end{align} $$"
    MathJax.typeset();
}

function example3(){
    $("#valuescontainer").show();
    document.getElementById("values").value = "5, 8, 10, 7, 10, 14"
    document.getElementById('stat').value="mean"
}

function example4(){
    $("#valuescontainer").show();
    document.getElementById("values").value = "5, 8, 10, 7, 10, 14"
    document.getElementById('stat').value="standard"
}


function switchpoint() {
    $("#pointestimation").show(); $("#samplingdistributions").hide();
    $("#switchsampling").show(); $("#switchpoint").hide();
    $("#output1").empty(); $("#explanation").hide();
}
 
function switchsampling() {
    $("#pointestimation").hide(); $("#samplingdistributions").show();
    $("#switchsampling").hide(); $("#switchpoint").show();
    $("#output").empty(); $("#explanation").hide();
}

function switchprobabilitiesxbar() {
    $("#samplingdistributionxbar").hide(); $("#samplingdistributionpbar").hide();
    $("#probabilitiesxbar").show(); $("#probabilitiespbar").hide();
    solvetype = "probability"
}
 
function switchdistributionsxbar() {
    $("#samplingdistributionxbar").show(); $("#samplingdistributionpbar").hide();
    $("#probabilitiesxbar").hide(); $("#probabilitiespbar").hide();
    solvetype = "distribution"
}

function switchprobabilitiespbar() {
    $("#samplingdistributionxbar").hide(); $("#samplingdistributionpbar").hide();
    $("#probabilitiesxbar").hide(); $("#probabilitiespbar").show();
    solvetype = "probability"
}
 
function switchdistributionspbar() {
    $("#samplingdistributionxbar").hide(); $("#samplingdistributionpbar").show();
    $("#probabilitiesxbar").hide(); $("#probabilitiespbar").hide();
    solvetype = "distribution"
}
