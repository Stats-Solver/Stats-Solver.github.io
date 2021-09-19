$("#enterstats").hide(); $("#explanation").hide();
$("#expconf").hide(); $("#pointestimation").hide(); $("#samplingdistributions").show(); 
$("#switchsampling").hide(); $("#switchpoint").show();
$("#samplingdistributionxbar").show(); $("#samplingdistributionpbar").hide();
$("#probabilitiesxbar").hide(); $("#probabilitiespbar").hide();
$("#finitepopsize1").hide(); $("#finitepopsize2").hide(); $("#finitepopsize3").hide(); $("#finitepopsize4").hide();
solvetype = "distribution"

$("#sampoutputs").hide();

$("#calcprob").hide(); $("#probxbar").hide(); $("#probpbar").hide(); $("#calcprob2").hide();

$("#up").hide(); $("#down").show(); $("#581773186").hide();

$("#enterfrequencies").hide(); 
$("#spacefd").hide(); $("#fd").hide(); $("#equalfd").hide(); $("#valuefd").hide();
$("#spacefe").hide(); $("#fe").hide(); $("#equalfe").hide(); $("#valuefe").hide();
$("#spaceff").hide(); $("#ff").hide(); $("#equalff").hide(); $("#valueff").hide();

$("#four2three").hide(); $("#four2five").hide(); $("#five2four").hide(); $("#five2six").hide(); $("#six2five").hide();

type = "distribution"

$(function () {
            $('[data-toggle="tooltip"]').tooltip()
    })

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("myCanvas0");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

//var canvas = document.getElementById("howCanvas2");
//var ctx = canvas.getContext("2d");
//ctx.scale(1.25, 1.25);

//var canvas = document.getElementById("howCanvas3");
//var ctx = canvas.getContext("2d");
//ctx.scale(1.25, 1.25);

//var canvas = document.getElementById("howCanvas4");
//var ctx = canvas.getContext("2d");
//ctx.scale(1.25, 1.25);





how1(); 
//how2(); 
//how3(); 
//how4();



function how1(){
        var exp = 2.71828;
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2)))) 
        }

        var c = document.getElementById("howCanvas1");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);
    
        ctx.fillText("Sampling Distribution of x̄",90,10);

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("μ",148,145);


        ctx.fillText("x̄",285,132);
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
    
}



function how2(){
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
    
        ctx.fillText("Standard Normal Distribution",80,10);

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);


        ctx.fillText("z",285,132);
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
    
}







function how4(){
        var exp = 2.71828;
        var f = [];
        var i;
        for (i = 0; i < 60; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2)))) 
        }

        var c = document.getElementById("howCanvas4");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);
    
        ctx.fillText("Sampling Distribution of x̄",90,10);

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("50",145,145);


        ctx.fillText("x̄",285,132);
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
    
}







function how21(){
    
    var area = .10565
    var z = NormSInv(area)
    
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
    
    
    //ctx.fillText("P(-1.25 ≤ z ≤ 0.86)",80,10);
    ctx.fillText("Sampling Distribution of x̄",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    
    
    
    
    
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.fillText("x̄",285,132);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("50",145,145);
    
    
    
    
    
    
    ctx.fillText("-1.25",10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    
    
    
    
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
}







function how3(){
    
    var area = .10565
    var z = NormSInv(area)
    
    var lessval = z
    var lessvalz = 30+10*lessval
    
    

    
    
    
    
    
    var exp = 2.71828;

    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("howCanvas3");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    //ctx.fillText("P(-1.25 ≤ z ≤ 0.86)",80,10);
    ctx.fillText("Standard Normal Distribution",80,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    
    
    
    
    
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.fillText("z",285,132);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    
    
    
    
    
    ctx.fillText("-1.25",10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    
    
    
    
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
}








function toFixing(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

function showthings() {
    var x = document.getElementById("stat").value;
    if (x == "mean" || x == "standard") {
        $("#entervalues").show(); $("#enterfrequencies").hide();
    } else if (x == "proportion") {
        $("#entervalues").hide(); $("#enterfrequencies").show();
    }
}

function make3() {
    $("#spacefd").hide(); $("#fd").hide(); $("#equalfd").hide(); $("#valuefd").hide();
    $("#spacefe").hide(); $("#fe").hide(); $("#equalfe").hide(); $("#valuefe").hide();
    $("#spaceff").hide(); $("#ff").hide(); $("#equalff").hide(); $("#valueff").hide();
    $("#three2four").show(); $("#four2three").hide(); $("#four2five").hide(); 
    $("#five2four").hide(); $("#five2six").hide(); $("#six2five").hide();
}

function make4() {
    $("#spacefd").show(); $("#fd").show(); $("#equalfd").show(); $("#valuefd").show();
    $("#spacefe").hide(); $("#fe").hide(); $("#equalfe").hide(); $("#valuefe").hide();
    $("#spaceff").hide(); $("#ff").hide(); $("#equalff").hide(); $("#valueff").hide();
    $("#three2four").hide(); $("#four2three").show(); $("#four2five").show(); 
    $("#five2four").hide(); $("#five2six").hide(); $("#six2five").hide();
}

function make5() {
    $("#spacefd").show(); $("#fd").show(); $("#equalfd").show(); $("#valuefd").show();
    $("#spacefe").show(); $("#fe").show(); $("#equalfe").show(); $("#valuefe").show();
    $("#spaceff").hide(); $("#ff").hide(); $("#equalff").hide(); $("#valueff").hide();
    $("#three2four").hide(); $("#four2three").hide(); $("#four2five").hide(); 
    $("#five2four").show(); $("#five2six").show(); $("#six2five").hide();
}

function make6() {
    $("#spacefd").show(); $("#fd").show(); $("#equalfd").show(); $("#valuefd").show();
    $("#spacefe").show(); $("#fe").show(); $("#equalfe").show(); $("#valuefe").show();
    $("#spaceff").show(); $("#ff").show(); $("#equalff").show(); $("#valueff").show();
    $("#three2four").hide(); $("#four2three").hide(); $("#four2five").hide(); 
    $("#five2four").hide(); $("#five2six").hide(); $("#six2five").show();
}

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



function calcprob() {
    type = "probability"
    $("#calcprob2").show(); $("#calcprob").hide();
    $("#up").show(); $("#down").hide();
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
       $("#probxbar").show();
    } else if (x == "proportion"){
       $("#probpbar").show();
    } 
}

function calcprob2() {
    type = "distribution"
    $("#calcprob").show(); $("#calcprob2").hide();
    $("#up").hide(); $("#down").show();
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
       $("#probxbar").hide();
    } else if (x == "proportion"){
       $("#probpbar").hide();
    } 
}



function conint(){
    $("#explanation").show(); $("#pointest").hide();
    $("#sampoutputs").show(); $("#how").hide();
    $("#calcprob").show(); $("#581773186").show();
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
        if (type == "distribution"){
            conint1()
        } else if (type == "probability"){
            conint3()
        }
    } else if (x == "proportion"){
        if (type == "distribution"){
            conint2()
        } else if (type == "probability"){
            conint4()
        }
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
    $("#output").hide();
    $("#canvascontainer0").hide(); $("#canvascontainer").show();
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var mu = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var popsize = document.getElementById("popsize").value;
    var popsizevalue = document.getElementById("popsizevalue").value;
    var samptopopratio = size / popsizevalue
    var stderr = stdev / Math.sqrt(size)
    var stderr2 = Math.sqrt((popsizevalue-size)/(popsizevalue-1)) * (stdev / Math.sqrt(size))
    var exp = 2.71828;
    
    if (size >= 30) {
        var form = "Normal Distribution"
    } else if (size < 30) {
        var form = "Not a Normal Distribution"
    }
    

    if (popsize == "infinite") {
        document.getElementById("output1").innerHTML = "$$ \\text{Expected Value (Mean):}$$ $$ \\begin{align} E(\\bar{x}) &= \\mu = {\\color{RoyalBlue}"+ mu +"} \\end{align}$$ $$  \\text{Standard Error of the Mean:} $$ $$ \\sigma_\\bar{x} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{"+ stdev +"}{\\sqrt{"+ size +"}} = {\\color{RoyalBlue}" + parseFloat(stderr.toFixed(2)) + "}  $$ $$ \\text{Form of the Distribution:} $$ $$ {\\color{RoyalBlue} \\text{"+ form + "}} $$ "
    } else if (popsize == "finite") {
        if (samptopopratio <= .05) {
            document.getElementById("output1").innerHTML = "$$ \\text{Expected Value (Mean):}$$ $$ \\begin{align} E(\\bar{x}) &= \\mu = {\\color{RoyalBlue}"+ mu +"} \\end{align}$$ $$ \\text{Standard Error of the Mean:} $$ $$  \\sigma_\\bar{x} = \\frac{\\sigma}{\\sqrt{n}} =  \\frac{"+ stdev +"}{\\sqrt{"+ size +"}} = {\\color{RoyalBlue}" + parseFloat(stderr.toFixed(2)) + "} $$ $$ \\text{Form of the Distribution:} $$ $$ {\\color{RoyalBlue} \\text{"+ form + "}} $$ "
        } else {
            document.getElementById("output1").innerHTML = "$$ \\text{Expected Value (Mean):}$$ $$ \\begin{align} E(\\bar{x}) &= \\mu = {\\color{RoyalBlue}"+ mu +"} \\end{align}$$ $$ \\text{Standard Error of the Mean:} $$ $$ \\begin{align} \\sigma_\\bar{x} &= \\sqrt{\\frac{N-n}{N-1}} \\left( \\frac{\\sigma}{\\sqrt{n}} \\right) \\\\ &= \\sqrt{\\frac{"+popsizevalue+"-"+size+"}{"+popsizevalue+"-1}} \\left( \\frac{"+ stdev +"}{\\sqrt{"+ size +"}} \\right) \\\\ &= {\\color{RoyalBlue}" + parseFloat(stderr2.toFixed(2)) + "} \\end{align} $$ $$ \\text{Form of the Distribution:} $$ $$ {\\color{RoyalBlue} \\text{"+ form + "}} $$ "
        }
        
    }
    
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
    
        //ctx.fillText("Sampling Distribution of x̄",90,10);

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 130);
        ctx.lineTo(280, 130);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText(mu,145,145);
    
        
        ctx.fillText("σ",220,50);
        ctx.fillText("x̄",227,55);
        ctx.fillText("=",233,50);
    
    
        if (popsize == "infinite") {
            ctx.fillText(stderr,240,50);
        } else if (popsize == "finite") {
            if (samptopopratio <= .05) {
                ctx.fillText(stderr,240,50);
            } else {
                ctx.fillText(stderr2.toFixed(2),240,50);
            }

        }
    
    
        


        ctx.fillText("x̄",285,132);
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
    
    document.getElementById("output2").innerHTML = "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"

    MathJax.typeset();

}

function conint2(){
    $("#output").hide();
    $("#canvascontainer0").hide(); $("#output2").hide(); $("#canvascontainer").hide(); 
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
    var exp = 2.71828;
    
    if (cond1 >= 5 && cond2 >= 5) {
        var form = "Normal Distribution"
    } else {
        var form = "Not a Normal Distribution"
    }
    
    if (popsize == "infinite") {
        document.getElementById("output1").innerHTML = "$$ \\text{Expected Value (Mean):}$$ $$ \\begin{align} E(\\bar{p}) &= p = {\\color{RoyalBlue}"+ prptn +"} \\end{align}$$ $$ \\text{Standard Error of the Mean:} $$ $$  \\sigma_\\bar{p} =  \\sqrt{\\frac{"+ prptn +"(1-" + prptn + ")}{"+ size +"}} = {\\color{RoyalBlue}" + stderr.toFixed(4).replace(/^0+/, '') + "}  $$ $$ \\text{Form of the Distribution:} $$ $$ {\\color{RoyalBlue} \\text{"+ form + "}} $$ "
    } else if (popsize == "finite") {
        if (samptopopratio <= .05) {
            document.getElementById("output1").innerHTML = "$$ \\text{Expected Value:}$$ $$ \\begin{align} E(\\bar{p}) &= p = "+ prptn +" \\end{align}$$ $$ \\text{Standard Error:} $$ $$ \\sigma_\\bar{p} =  \\sqrt{\\frac{"+ prptn +"(1-" + prptn + ")}{"+ size +"}} = " + stderr.toFixed(4).replace(/^0+/, '') + " $$ $$ \\text{Form (Shape):} $$ $$  \\text{"+ form + "} $$ "
        } else if (samptopopratio > .05) {
            document.getElementById("output1").innerHTML = "$$ \\text{Expected Value:}$$ $$ \\begin{align} E(\\bar{p}) &= p = "+ prptn +" \\end{align}$$ $$ \\text{Standard Error:} $$ $$ \\sigma_\\bar{p} = \\sqrt{\\frac{"+popsizevalue+"-"+size+"}{"+popsizevalue+"-1}} \\sqrt{\\frac{"+ prptn +"(1-" + prptn + ")}{"+ size +"}} = " + stderr2.toFixed(4).replace(/^0+/, '') + "  $$ $$ \\text{Form (Shape):} $$ $$  \\text{"+ form + "} $$ "
        }
        
    }
    
    
    MathJax.typeset();

}


function conint3(){
    $("#output").show();
     $("#canvascontainer0").show(); $("#output2").show();  $("#canvascontainer").show();
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var mu = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var popsize = document.getElementById("popsize").value;
    var popsizevalue = document.getElementById("popsizevalue").value;
    var pmvalue = document.getElementById("pmvalue1").value;
    var lowval = mu - pmvalue; var highval = parseFloat(mu) + parseFloat(pmvalue)
    var stderr = stdev / Math.sqrt(size)
    var lowvalz = parseFloat(((lowval - mu)/stderr).toFixed(2)); var highvalz = (highval - mu)/stderr;
    var lowprob = (normalcdf(lowvalz)).toFixed(4); var highprob = (normalcdf(highvalz)).toFixed(4);
    var ans = (highprob-lowprob).toFixed(4)
    var samptopopratio = size / popsizevalue
    var stderr2 = Math.sqrt((popsizevalue-size)/(popsizevalue-1)) * (stdev / Math.sqrt(size))
    var lessv = lowval
    var greaterv = highval
    var lessval = lowvalz
    var greaterval = highvalz
    var lessvalz = 30+10*lowvalz
    var greatervalz = 30+10*highvalz
    var exp = 2.71828; 
    
    
    if (size >= 30) {
        var form = "Normal Distribution"
    } else if (size < 30) {
        var form = "Not a Normal Distribution"
    }
    
    //= "+ stdev +"/\\sqrt{"+ size +"}
    
    
    if (popsize == "infinite") {
        document.getElementById("output").innerHTML = "$$ \\text{Expected Value: } E(\\bar{x}) = \\mu = {\\color{RoyalBlue}"+ mu +"} $$ $$  \\text{Standard Error: } \\sigma_\\bar{x} = \\sigma / \\sqrt{n} = {\\color{RoyalBlue}" + parseFloat(stderr.toFixed(2)) + "}  $$ $$ \\text{Form: }  {\\color{RoyalBlue} \\text{"+ form + "}} $$ $$ P(\\bar{x} \\text{ within } \\pm " + pmvalue + " \\text{ of } " + mu + ") = P(" + lowval + " \\leq \\bar{x} \\leq " + highval + ") $$"
    } else if (popsize == "finite") {
        if (samptopopratio <= .05) {
            document.getElementById("output").innerHTML = "$$ \\text{Expected Value (Mean):}$$ $$ \\begin{align} E(\\bar{x}) &= \\mu = "+ mu +" \\end{align}$$ $$ \\text{Standard Error of the Mean:} $$ $$  \\sigma_\\bar{x} =  \\frac{"+ stdev +"}{\\sqrt{"+ size +"}} = " + parseFloat(stderr.toFixed(2)) + "  $$ $$ \\text{Form of the Distribution:} $$ $$  \\text{"+ form + "} $$ "
        } else if (samptopopratio > .05) {
            document.getElementById("output").innerHTML = "$$ \\text{Expected Value (Mean):}$$ $$ \\begin{align} E(\\bar{x}) &= \\mu = "+ mu +" \\end{align}$$ $$ \\text{Standard Error of the Mean:} $$ $$  \\sigma_\\bar{x} = \\sqrt{\\frac{"+popsizevalue+"-"+size+"}{"+popsizevalue+"-1}} \\left( \\frac{"+ stdev +"}{\\sqrt{"+ size +"}} \\right) = " + parseFloat(stderr2.toFixed(2)) + "  $$ $$ \\text{Form of the Distribution:} $$ $$  \\text{"+ form + "} $$ "
        }
        
    }
    
    
    
    
    
    
    
    
    

    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Sampling Distribution of x̄",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:20 + 4.4*lessvalz + 4.4*i, y:120 - 250*f[i+Math.floor(lessvalz)]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(20 + 4.4*greatervalz, 130);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.fillText("x̄",285,132);
    ctx.fillText(parseFloat(lessv.toFixed(2)),15 + 4.4*(30+10*lessval),145);
    ctx.fillText(parseFloat(greaterv.toFixed(2)),15 + 4.4*(30+10*greaterval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    ctx.moveTo(20 + 4.4*(30+10*greaterval), 135);
    ctx.lineTo(20 + 4.4*(30+10*greaterval), 125);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(mu,145,145);
    
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
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Standard Normal Distribution",90,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:20 + 4.4*lessvalz + 4.4*i, y:120 - 250*f[i+Math.floor(lessvalz)]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(20 + 4.4*greatervalz, 130);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval.toFixed(2),10 + 4.4*(30+10*lessval),145);
    ctx.fillText(greaterval.toFixed(2),10 + 4.4*(30+10*greaterval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    ctx.moveTo(20 + 4.4*(30+10*greaterval), 135);
    ctx.lineTo(20 + 4.4*(30+10*greaterval), 125);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
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

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var zvalue = toFixing(parseFloat(lessval),1);
    var zvaluea = (zvalue - .1).toFixed(1);
    var zvalueb = (parseFloat(zvalue) + .1).toFixed(1);
    var zvaluer = parseFloat(lessval).toFixed(2); 
    var zseconddec = +zvaluer.toString().split('').pop();
    var colm = zseconddec
    
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
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    if (lessval < 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvaluea) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvaluea) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table31 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvaluea) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvaluea) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (lessval < 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table3 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (lessval < 0) {
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalueb) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalueb) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (lessval >= 0) {
        table32 = []
        for (var r = valstart; r < valend + 1; r++){
            if (r == colm) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalueb) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(zvalueb) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    var tablea = "<table><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvaluea+"$</td>"+table31+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalueb+"$</td>"+table32+"</tr></table>"
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var zvalue2 = toFixing(parseFloat(greaterval),1);
    var zvalue2a = (zvalue2 - .1).toFixed(1);
    var zvalue2b = (parseFloat(zvalue2) + .1).toFixed(1);
    var zvaluer2 = parseFloat(greaterval).toFixed(2); 
    var zseconddec2 = +zvaluer2.toString().split('').pop();
    var colm2 = zseconddec2
    
    if (zseconddec2 == 0 || zseconddec2 == 1 || zseconddec2 == 2) {
         var valstart2 = 0; 
         var valend2 = 4;
    } else if (zseconddec2 == 3) {
         var valstart2 = 1; 
         var valend2 = 5;
    } else if (zseconddec2 == 4) {
         var valstart2 = 2; 
         var valend2 = 6;
    } else if ((zseconddec2 == 5)) {
         var valstart2 = 3; 
         var valend2 = 7;
    } else if (zseconddec2 == 6) {
         var valstart2 = 4; 
         var valend2 = 8;
    } else if (zseconddec2 == 7 || zseconddec2 == 8 || zseconddec2 == 9) {
         var valstart2 = 5; 
         var valend2 = 9;
    }
    
    table4 = []
    for (var r = valstart2; r < valend2 + 1; r++){
        if (r == colm2) {
                table4 += "<td bgcolor='lightgray'>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table4 += "<td>$" + (.01*r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    
    
    if (greaterval < 0) {
        table51 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table51 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2a) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table51 += "<td>$" + normalcdf(parseFloat(zvalue2a) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table51 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table51 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2a) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table51 += "<td>$" + normalcdf(parseFloat(zvalue2a) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (greaterval < 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table5 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue2) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table5 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table5 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table5 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table5 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    if (greaterval < 0) {
        table52 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table52 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2b) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table52 += "<td>$" + normalcdf(parseFloat(zvalue2b) - parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    } else if (greaterval >= 0) {
        table52 = []
        for (var r = valstart2; r < valend2 + 1; r++){
            if (r == colm2) {
                table52 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2b) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table52 += "<td>$" + normalcdf(parseFloat(zvalue2b) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
        }
    }
    
    
    var tableb = "<table><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid; border-bottom: thin solid'><td>$z$</td>"+table4+"</tr><tr><td>$"+zvalue2a+"$</td>"+table51+"</tr><tr><td bgcolor='lightgray'>$"+zvalue2+"$</td>"+table5+"</tr><tr><td>$"+zvalue2b+"$</td>"+table52+"</tr></table>"

    
    if (popsize == "infinite") {
        document.getElementById("output1").innerHTML = "$$ \\text{Convert to Standard Normal:} $$ $$ \\begin{align} z_1 &= \\frac{\\bar{x}_1-\\mu}{\\sigma_\\bar{x}} = \\frac{"+lowval+"-"+mu+"}{"+stderr+"} = {\\color{RoyalBlue}"+lowvalz.toFixed(2)+"} \\\\ \\ z_2 &= \\frac{\\bar{x}_2-\\mu}{\\sigma_\\bar{x}} = \\frac{"+highval+"-"+mu+"}{"+stderr+"} = {\\color{RoyalBlue}"+highvalz.toFixed(2)+"} \\end{align} $$  "
        document.getElementById("output2").innerHTML = tablea + "<br>" + tableb + "$$ \\begin{align} & P(" + lowval + " \\leq \\bar{x} \\leq " + highval + ") \\\\ &= P(" + lowvalz.toFixed(2) + " \\leq z \\leq " + highvalz.toFixed(2) + ") \\\\ &= P(z \\leq " + highvalz.toFixed(2) + ") -  P(z \\leq " + lowvalz.toFixed(2) + ") \\\\  &= "+highprob.replace(/^0+/, '')+" - "+lowprob.replace(/^0+/, '')+" \\\\  &= \\boxed{"+ans.replace(/^0+/, '')+"} \\end{align}$$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
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
    $("#canvascontainer0").show();  $("#canvascontainer").show();  $("#output2").show();
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var prptn = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var popsize = document.getElementById("popsize").value;
    var popsizevalue = document.getElementById("popsizevalue").value;
    var pmvalue = document.getElementById("pmvalue2").value;
    var lowval = prptn - pmvalue; var highval = parseFloat(prptn) + parseFloat(pmvalue)
    var stderr = Math.sqrt(prptn*(1-prptn)/size)
    var lowvalz = (lowval - prptn)/stderr; var highvalz = (highval - prptn)/stderr;
    var lowprob = (normalcdf(lowvalz)).toFixed(4); var highprob = (normalcdf(highvalz)).toFixed(4);
    var ans = (highprob-lowprob).toFixed(4);
    var samptopopratio = size / popsizevalue
    var stderr2 = Math.sqrt((popsizevalue-size)/(popsizevalue-1)) * (stdev / Math.sqrt(size))
    var lessv = lowval
    var greaterv = highval
    var lessval = lowvalz
    var greaterval = highvalz
    var lessvalz = 30+10*lowvalz
    var greatervalz = 30+10*highvalz
    var exp = 2.71828;
    
    if (size >= 30) {
        var form = "Normal Distribution"
    } else if (size < 30) {
        var form = "Not a Normal Distribution"
    }

    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    
    var c = document.getElementById("myCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:20 + 4.4*lessvalz + 4.4*i, y:120 - 250*f[i+Math.floor(lessvalz)]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(20 + 4.4*greatervalz, 130);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.fillText("p̂",285,132);
    ctx.fillText(parseFloat(lessv.toFixed(2)),15 + 4.4*(30+10*lessval),145);
    ctx.fillText(parseFloat(greaterv.toFixed(2)),15 + 4.4*(30+10*greaterval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    ctx.moveTo(20 + 4.4*(30+10*greaterval), 135);
    ctx.lineTo(20 + 4.4*(30+10*greaterval), 125);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText(prptn,145,145);
    
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
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < (greatervalz-lessvalz); i++) {
      points0[i] = {x:20 + 4.4*lessvalz + 4.4*i, y:120 - 250*f[i+Math.floor(lessvalz)]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
      var xc = (points0[i].x + points0[i + 1].x) / 2;
      var yc = (points0[i].y + points0[i + 1].y) / 2;
      ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
   }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(20 + 4.4*greatervalz, 130);
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.fillText("z",285,132);
    ctx.fillText(lessval.toFixed(2),10 + 4.4*(30+10*lessval),145);
    ctx.fillText(greaterval.toFixed(2),10 + 4.4*(30+10*greaterval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    ctx.moveTo(20 + 4.4*(30+10*greaterval), 135);
    ctx.lineTo(20 + 4.4*(30+10*greaterval), 125);
    
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
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

    
    
    if (popsize == "infinite"  || popsize == "unknown") {
        document.getElementById("output1").innerHTML = "$$ P(\\bar{p} \\text{ within } \\pm " + pmvalue + " \\text{ of } " + prptn + ") = P(" + parseFloat(lowval.toFixed(2)) + " \\leq \\bar{p} \\leq " + parseFloat(highval.toFixed(2)) + ") $$ $$ \\begin{align} z &= \\frac{"+parseFloat(lowval.toFixed(2))+"-"+prptn+"}{"+stderr.toFixed(4)+"} = "+lowvalz.toFixed(2)+" \\\\ \\ z &= \\frac{"+parseFloat(highval.toFixed(2))+"-"+prptn+"}{"+stderr.toFixed(4)+"} = "+highvalz.toFixed(2)+" \\end{align} $$ "
        document.getElementById("output2").innerHTML = "$$ \\begin{align} P(" + lowvalz.toFixed(2) + " \\leq z \\leq " + highvalz.toFixed(2) + ") &= P(z \\leq " + highvalz.toFixed(2) + ") -  P(z \\leq " + lowvalz.toFixed(2) + ") \\\\  &= "+highprob+" - "+lowprob+" \\\\  &= \\boxed{"+ans+"} \\end{align}$$ "
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
    document.getElementById("samplestat").value="mean"
    document.getElementById('xbar').value="100"
    document.getElementById('stdev').value="18"
    document.getElementById('size').value="81"
    document.getElementById('popsize').value="infinite"
    document.getElementById("pmvalue1").value="4"
}

function example2(){
    $("#samplingdistributionxbar").hide(); $("#samplingdistributionpbar").show();
    $("#probabilitiesxbar").hide(); $("#probabilitiespbar").hide();
    $("#sd0").hide(); $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
    document.getElementById("samplestat").value="proportion"
    document.getElementById('xbar').value=".30"
    document.getElementById('size').value="60"
    document.getElementById('popsize').value="infinite"
    document.getElementById("pmvalue2").value=".1"
}

function samplestat() {
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
        $("#samplingdistributionxbar").show(); $("#samplingdistributionpbar").hide();
        $("#probpbar").hide();
        $("#sd0").show(); $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
    } else if (x == "proportion"){
        $("#samplingdistributionxbar").hide(); $("#samplingdistributionpbar").show();
        $("#probxbar").hide(); 
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


function stat(){
    $("#output").empty(); $("#581773186").show();
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
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var adds = each[0];  var avgeach = avg(each);  
    for (let i=1; i<len; i++){
        adds += "+" + each[i]
    }
    document.getElementById("output").innerHTML+= "$$ \\bar{x} = \\frac{\\sum{x}}{n} =  \\frac{" + sum(each) + "}{" + len + "} = \\boxed{" + parseFloat(avgeach.toFixed(2)) + "} $$"
    MathJax.typeset();
}

function calcstandard(){
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
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>" + "<td>" + "$x - \\bar{x}$" + "</td>" + "<td>" + "$(x - \\bar{x})^2$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 3;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + each[r] + "$</td>";
        table += "<td>$" + parseFloat(eachminus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eachminus2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>$"+Math.round(sumeachminus)+"$</td>" + "<td>$"+parseFloat(sumeachminus2.toFixed(2))+"$</td>" + "</tr>";
    document.getElementById("output").innerHTML = "$$ \\bar{x} = \\frac{\\sum{x}}{n} \=  \\frac{" + sumeach + "}{" + len + "} = " + parseFloat(mn.toFixed(2))+ " $$ <table>" + table + "</table> $$ s = \\sqrt{\\dfrac{\\sum{(x-\\bar{x})^2}}{n-1}} = \\sqrt{\\dfrac{"+parseFloat(sumeachminus2.toFixed(2))+"}{"+len+"-1}} = \\boxed{"+parseFloat(ansstd.toFixed(2))+"} $$"
    MathJax.typeset();
}

function example3(){
    $("#valuescontainer").show();
    document.getElementById("values").value = "5, 8, 10, 7, 10, 14"
}

function example4(){
    $("#valuescontainer").show();
    document.getElementById("values").value = "5, 8, 10, 7, 10, 14"
}


function switchpoint() {
    $("#pointestimation").show(); $("#samplingdistributions").hide();
    $("#switchsampling").show(); $("#switchpoint").hide();
    $("#output").show(); $("#output1").hide(); $("#output2").hide(); $("#explanation").hide();
    $("#myCanvas0").hide(); $("#myCanvas").hide(); 
}
 
function switchsampling() {
    $("#pointestimation").hide(); $("#samplingdistributions").show();
    $("#switchsampling").hide(); $("#switchpoint").show();
    $("#output").hide(); $("#output1").show(); $("#output2").show(); $("#explanation").hide();
    $("#myCanvas0").show(); $("#myCanvas").show(); 
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
