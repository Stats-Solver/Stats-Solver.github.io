$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#expconf").hide();
$("#switchconfidence").hide(); $("#switchsize").show();
$("#samplesize").hide(); $("#confidence").show(); 
$("#datainput").hide(); $("#valuesinput").show();
$("#canvascontainer0").hide();  $("#581773186").hide();
$("#confoutputs").hide();

$("#conflevel").hide();

type = "values"
leveltype = "premade"

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

var canvas = document.getElementById("howCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);



how1(); how2();

function levelchange(){
    var levelinput = document.getElementById("conlev").value;
    if (levelinput == "other") {
        $("#conflevel").show(); $("#conlev").hide();
        leveltype = "custom"
    }
}



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
        ctx.fillText("α/2",250,105);


        ctx.fillText("z",285,132);
        ctx.fillText("z",228,145);
        ctx.fillText("α/2",233,146);
        var points = []
        
        ctx.fillText("σ Known",130,10);

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
        ctx.fillText("α/2",250,105);


        ctx.fillText("t",285,132);
        ctx.fillText("t",228,145);
        ctx.fillText("α/2",233,146);
        var points = []
        
        ctx.fillText("σ Unknown",125,10);

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

function switchdata() {
    $("#datainput").show(); $("#valuesinput").hide();
    type = "data"
}

function switchvalues() {
    $("#datainput").hide(); $("#valuesinput").show();
    type = "values"
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

function solve(){
    $("#explanation").show(); $("#samples").hide();
    $("#confoutputs").show(); $("#how").hide();
     $("#581773186").show();
    if (type == "values") {
        conint()
    } else if (type == "data") {
        condata()
    }
}

function condata() {
    var str = document.getElementById("xvalues").value;
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
    
    var sigma = "unknown"
    var size = len; var sizem1 = size - 1; var sizem2 = size - 2;
    var xbar = mn;
    var stdev = ansstd;
    var conlev = document.getElementById("conlev").value;
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf); var talphahalf = tinv(alphahalf,sizem1);
    var marginerror = zalphahalf * (stdev / Math.sqrt(size)); var marginerrort = talphahalf * (stdev / Math.sqrt(size));
    var anslow = xbar - marginerror; var anshigh = (parseFloat(xbar)+marginerror);
    var anslowt = xbar - marginerrort; var anshight = (parseFloat(xbar)+marginerrort)
    var exp = 2.71828;
    
    document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that the population mean is likely to be in."
    document.getElementById("formulatext").innerHTML = "$ \\bar{x} \\pm t_{\\alpha/2} \\dfrac{s}{\\sqrt{n}} $"
    document.getElementById("explanationtext").innerHTML = "The right side of the plus/minus sign in the confidence interval is called the margin of error."

    
    
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

    //table4 = "<td></td><td colspan='6'>$\\text{Area in Upper Tail}$</td>"
    
    //table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
    //table6 = "<td>$"+ sizem1 +"$</td><td>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"
    
    table41 = "<td colspan='7'>$\\text{Student's t-Distribution Table}$</td>"
    
    table4 = "<td></td><td colspan='6' style='border-bottom: thin solid;'>$\\text{Area in Upper Tail}$</td>"
    
    if (conlev == "90") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
        table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

        table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
    } else if (conlev == "95") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
        table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

        table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
    } else if (conlev == "99") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
        table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

        table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,size).toFixed(3)+"$</td>"
    }
    
    
    var tablet = "<table><tr>"+table41+"</tr><tr style='border-top: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table61+"</tr><tr>"+table6+"</tr><tr>"+table62+"</tr></table>"
    
    // $$ \\text{Sample Mean:} $$    =  \\frac{" + sumeach + "}{" + len + "}
    // $$ \\text{Sample Standard Deviation:} $$ = \\sqrt{\\dfrac{"+parseFloat(sumeachminus2.toFixed(2))+"}{"+len+"-1}}
    // \\dfrac{\\sum{(x-\\bar{x})^2}}{n-1}
    //  = \\frac{\\sum{x}}{n} \\sqrt{s^2} =
    
    // $$ \\text{Conf. Level}= "+conlev+"\\% \\rightarrow \\text{Conf. Coeff.}= "+ concoeff.toFixed(2).replace(/^0+/, '')+" $$
    
    // $$" + parseFloat(xbar.toFixed(2)) + "\\pm" + talphahalf.toFixed(3) + "\\frac{"+parseFloat(stdev.toFixed(2))+"}{\\sqrt{"+size+"}}$$ 

    document.getElementById("output1").innerHTML = " $$ n = {\\color{RoyalBlue}" + size + "} \\quad \\bar{x}  = {\\color{RoyalBlue}" + parseFloat(mn.toFixed(2)) + "} \\quad \\ s =  {\\color{RoyalBlue}"+parseFloat(ansstd.toFixed(2))+"} $$  $$ 1 - \\alpha = \\text{Confidence Coefficient} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = {\\color{RoyalBlue}"+ alphahalf.toFixed(3).replace(/^0+/, '') +"} $$ $$ \\text{Degrees of Freedom:} $$ $$ df = n - 1 = "+size+ " - 1 = {\\color{RoyalBlue}"+sizem1+"}   $$"
    
    
    document.getElementById("output2").innerHTML = tablet + "$$ t_{\\alpha/2} = {\\color{RoyalBlue}"+talphahalf.toFixed(3)+"} $$ $$ \\text{Margin of Error:} $$ $$ t_{\\alpha/2} \\frac{s}{\\sqrt{n}} = " + talphahalf.toFixed(3) + "\\frac{"+parseFloat(ansstd.toFixed(2))+"}{\\sqrt{"+size+"}} = {\\color{RoyalBlue}" +parseFloat(marginerrort.toFixed(2)) + "} $$ $$ " + conlev + "\\% \\text{ Confidence Interval:} $$  $$ \\bar{x} \\pm t_{\\alpha/2} \\frac{s}{\\sqrt{n}} $$ $$"+parseFloat(xbar.toFixed(2)) + "\\pm" +parseFloat(marginerrort.toFixed(2)) + "$$ $$ \\boxed{" + parseFloat(anslowt.toFixed(2)) + "\\text{ to }" + parseFloat(anshight.toFixed(2)) + "} $$ $$ \\text{Interpretation:} $$ $$ "+conlev+"\\%  \\text{ confident } "+parseFloat(anslowt.toFixed(2))+" \\leq \\mu \\leq "+parseFloat(anshight.toFixed(2))+" $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a> "
    
    
    
    MathJax.typeset();
}


function conint(){
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
        conint1()
    } else if (x == "proportion"){
        conint2()
    } else if (x == "standard"){
        conint3()
    } 
}


function conint1(){
    $("#canvascontainer").show();$("#expconf").show();
    var sigma = document.getElementById("sigma").value;
    var size = document.getElementById("size").value; var sizem1 = size - 1; var sizem2 = size - 2;
    var xbar = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    
    if (leveltype == "premade") {
        var conlev = document.getElementById("conlev").value;
    } else {
        var conlev = document.getElementById("conflevel").value;
    }
    
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf); var talphahalf = tinv(alphahalf,sizem1);
    var marginerror = zalphahalf * (stdev / Math.sqrt(size)); var marginerrort = talphahalf * (stdev / Math.sqrt(size));
    var anslow = xbar - marginerror; var anshigh = (parseFloat(xbar)+marginerror);
    var anslowt = xbar - marginerrort; var anshight = (parseFloat(xbar)+marginerrort)
    var exp = 2.71828;
    
    if (sigma == "known") {
        document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that the population mean is likely to be in."
        document.getElementById("formulatext").innerHTML = "$ \\bar{x} \\pm z_{\\alpha/2} \\dfrac{\\sigma}{\\sqrt{n}} $"
        document.getElementById("explanationtext").innerHTML = "The right side of the plus/minus sign in the confidence interval is called the margin of error."
    } else if (sigma == "unknown") {
        document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that the population mean is likely to be in."
        document.getElementById("formulatext").innerHTML = "$ \\bar{x} \\pm t_{\\alpha/2} \\dfrac{s}{\\sqrt{n}} $"
        document.getElementById("explanationtext").innerHTML = "The right side of the plus/minus sign in the confidence interval is called the margin of error."
    } 
    
    // $$ \\text{Conf. Level}= "+conlev+"\\% \\rightarrow \\text{Conf. Coeff.}= "+ concoeff.toFixed(2).replace(/^0+/, '')+" $$
    // $$ \\text{Conf. Level}= "+conlev+"\\% \\rightarrow \\text{Conf. Coeff.}= "+ concoeff.toFixed(2).replace(/^0+/, '')+" $$
    
    if (sigma == "known") {
        document.getElementById("output1").innerHTML = " $$ 1 - \\alpha = \\text{Confidence Coefficient} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = {\\color{RoyalBlue}"+ alphahalf.toFixed(3).replace(/^0+/, '') +"} $$ "
    } else if (sigma == "unknown") {
        document.getElementById("output1").innerHTML = " $$ 1 - \\alpha = \\text{Confidence Coefficient} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = {\\color{RoyalBlue}"+ alphahalf.toFixed(3).replace(/^0+/, '') +"} $$ $$ \\text{Degrees of Freedom:} $$ $$ df = n - 1 = "+size+ " - 1 = {\\color{RoyalBlue}"+sizem1+"}   $$"
    } 
    
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
    
    ctx.fillStyle = "black";

    if (sigma == "known") {
        ctx.fillText("z",285,132);
        ctx.fillText("z",228,145);
        ctx.fillText("α/2",234,147);
    } else if (sigma == "unknown") {
        ctx.fillText("t",285,132);
        ctx.fillText("t",228,145);
        ctx.fillText("α/2",232,147);
        //ctx.fillText("df = "+sizem1,220,40); 
    }

    
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

    
    var zvalue = toFixing(zalphahalf,1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zalphahalfr = zalphahalf.toFixed(2); 
    var zseconddec = (""+zalphahalfr)[3];
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
                table1 += "<td bgcolor='lightgray'>$" + (0.01 * r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (0.01 * r).toFixed(2).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    table2 = []
    for (var r = valstart; r < valend + 1; r++){
        if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
    }
    
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
    }
    
    table31 = []
    for (var r = valstart; r < valend + 1; r++){
        if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    var tablez = "<table><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-bottom: thin solid; border-top: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table31+"</tr></table>"
    
    table41 = "<td colspan='7'>$\\text{Student's t-Distribution Table}$</td>"
    
    table4 = "<td></td><td colspan='6' style='border-bottom: thin solid;'>$\\text{Area in Upper Tail}$</td>"
    
    if (conlev == "90") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
        table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

        table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
    } else if (conlev == "95") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
        table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

        table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
    } else if (conlev == "99") {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
        table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

        table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,size).toFixed(3)+"$</td>"
    } else {
        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
        table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

        table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border: 1px solid black'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

        table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,size).toFixed(3)+"$</td>"
    }
    
    
    
    
    var tablet = "<table><tr>"+table41+"</tr><tr style='border-top: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table61+"</tr><tr>"+table6+"</tr><tr>"+table62+"</tr></table>"
    
    // $$"+xbar + "\\pm " + zalphahalf.toFixed(2) + " \\frac{"+stdev+"}{\\sqrt{"+size+"}}$$ 
    // $$" + xbar + "\\pm" + talphahalf.toFixed(3) + "\\frac{"+stdev+"}{\\sqrt{"+size+"}}$$
    
    
    if (sigma == "known") {
        document.getElementById("output2").innerHTML = "$$\\text{Area to Left} = 1 - \\alpha/2 = 1 - "+alphahalf.toFixed(3).replace(/^0+/, '')+" = {\\color{RoyalBlue}"+(1-alphahalf).toFixed(3).replace(/^0+/, '') +"}$$"+tablez + "$$ z_{\\alpha/2} = {\\color{RoyalBlue}"+zalphahalf.toFixed(2)+"} $$ $$ \\text{Margin of Error:} $$ $$  z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} = " + zalphahalf.toFixed(2) + " \\frac{"+stdev+"}{\\sqrt{"+size+"}} = {\\color{RoyalBlue}"+parseFloat(marginerror.toFixed(2))+"} $$  $$ " + conlev + "\\% \\text{ Confidence Interval:} $$ $$ \\bar{x} \\pm z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} $$ $$"+xbar + "\\pm " +parseFloat(marginerror.toFixed(2)) + " $$ $$ \\boxed{" + parseFloat(anslow.toFixed(2)) + "\\text{ to }" + parseFloat(anshigh.toFixed(2)) + "} $$ $$ \\text{Interpretation:} $$ $$ "+conlev+"\\%  \\text{ confident } "+parseFloat(anslow.toFixed(2))+" \\leq \\mu \\leq "+parseFloat(anshigh.toFixed(2))+" $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a> "
    } else if (sigma == "unknown") {
        document.getElementById("output2").innerHTML = tablet + "$$ t_{\\alpha/2} = {\\color{RoyalBlue}"+talphahalf.toFixed(3)+"} $$ $$ \\text{Margin of Error:} $$ $$ t_{\\alpha/2} \\frac{s}{\\sqrt{n}} = " + talphahalf.toFixed(3) + "\\frac{"+stdev+"}{\\sqrt{"+size+"}} = {\\color{RoyalBlue}" +parseFloat(marginerrort.toFixed(2)) + "} $$ $$ " + conlev + "\\% \\text{ Confidence Interval:} $$ $$ \\bar{x} \\pm t_{\\alpha/2} \\frac{s}{\\sqrt{n}} $$ $$"+xbar + "\\pm" +parseFloat(marginerrort.toFixed(2)) + "$$ $$ \\boxed{" + parseFloat(anslowt.toFixed(2)) + "\\text{ to }" + parseFloat(anshight.toFixed(2)) + "} $$ $$ \\text{Interpretation:} $$ $$ "+conlev+"\\%  \\text{ confident } "+parseFloat(anslowt.toFixed(2))+" \\leq \\mu \\leq "+parseFloat(anshight.toFixed(2))+" $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a> "
    } 
    
    MathJax.typeset();
}

function conint2(){
    $("#canvascontainer").show();$("#expconf").show();
    var size = document.getElementById("size").value; var sizem1 = size - 1;
    var pbar = document.getElementById("xbar").value;
    var conlev = document.getElementById("conlev").value;
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf); var talphahalf = tinv(alphahalf,sizem1);
    var marginerror0 = parseFloat(pbar)*parseFloat((1-parseFloat(pbar)))/parseFloat(size)
    var marginerror = zalphahalf * Math.sqrt((pbar*(1-pbar))/size);
    var anslow = pbar - marginerror; var anshigh = (parseFloat(pbar)+marginerror);
    var exp = 2.71828;
    
    document.getElementById("descriptiontext").innerHTML = "A confidence interval provides a range of values that the population proportion is likely to be in."
    document.getElementById("formulatext").innerHTML = "$ \\bar{p} \\pm z_{\\alpha/2} \\sqrt{\\dfrac{\\bar{p}(1-\\bar{p})}{n}} $"
    document.getElementById("explanationtext").innerHTML = "The right side of the plus/minus sign in the confidence interval is called the margin of error."
    
    // $$ \\text{Conf. Level}= "+conlev+"\\% \\rightarrow \\text{Conf. Coeff.}= "+ concoeff.toFixed(2).replace(/^0+/, '')+" $$
    
    document.getElementById("output1").innerHTML = " $$ 1 - \\alpha = \\text{Confidence Coefficient} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha / 2 = {\\color{RoyalBlue}"+ alphahalf.toFixed(3).replace(/^0+/, '') +"} $$ "

    
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2)))
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


    ctx.fillText("z",285,132);
    ctx.fillText("z",228,145);
    ctx.fillText("α/2",234,147);


    
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
    

    
    var zvalue = toFixing(zalphahalf,1);
    var zvalue1 = (zvalue - .1).toFixed(1);
    var zvalue2 = (parseFloat(zvalue) + .1).toFixed(1);
    var zalphahalfr = zalphahalf.toFixed(2); 
    var zseconddec = (""+zalphahalfr)[3];
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
        //table1 += "<td>$" + (0.01 * r).toFixed(2).replace(/^0+/, '') + "$</td>";
        if (r == colm) {
                table1 += "<td bgcolor='lightgray'>$" + (0.01 * r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } else {
                table1 += "<td>$" + (0.01 * r).toFixed(2).replace(/^0+/, '') + "$</td>";
            } 
    }
    
    table2 = []
    for (var r = valstart; r < valend + 1; r++){
        if (r == colm) {
                table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table2 += "<td>$" + normalcdf(parseFloat(zvalue1) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
    }
    
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        //table3 += "<td>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
        if (r == colm) {
                table3 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } 
    }
    
    table31 = []
    for (var r = valstart; r < valend + 1; r++){
        if (r == colm) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(zvalue2) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
            }  
    }
    
    var tablez = "<table><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-bottom: thin solid; border-top: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue1+"$</td>"+table2+"</tr><tr><td bgcolor='lightgray'>$"+zvalue+"$</td>"+table3+"</tr><tr><td>$"+zvalue2+"$</td>"+table31+"</tr></table>"
    
    table4 = "<td></td><td colspan='6'>Area in Upper Tail</td>"
    
    table5 = "<td>df</td><td>.20</td><td>.10</td><td>.05</td><td>.025</td><td>.01</td><td>.005</td>"
    
    table6 = "<td>"+ sizem1 +"</td><td>"+tinv(.20,sizem1).toFixed(3)+"</td><td>"+tinv(.10,sizem1).toFixed(3)+"</td><td>"+tinv(.05,sizem1).toFixed(3)+"</td><td>"+tinv(.025,sizem1).toFixed(3)+"</td><td>"+tinv(.01,sizem1).toFixed(3)+"</td><td>"+tinv(.005,sizem1).toFixed(3)+"</td>"
    
    
    var tablet = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table6+"</tr></table>"
    
    // $$" + pbar + "\\pm" + zalphahalf.toFixed(2) + "\\sqrt{\\frac{"+pbar+"(1-"+pbar+")}{"+size+"}}$$
    
    document.getElementById("output2").innerHTML = "$$\\text{Area to Left} = 1 - \\alpha/2 = 1 - "+alphahalf.toFixed(3).replace(/^0+/, '')+" = {\\color{RoyalBlue}"+(1-alphahalf).toFixed(3).replace(/^0+/, '') +"} $$"+tablez + "$$ z_{\\alpha/2} = {\\color{RoyalBlue}"+zalphahalf.toFixed(2)+"} $$ $$ \\text{Margin of Error:} $$ $$  z_{\\alpha/2} \\sqrt{\\frac{\\bar{p}(1-\\bar{p})}{n}} = " + zalphahalf.toFixed(2) + "\\sqrt{\\frac{"+pbar+"(1-"+pbar+")}{"+size+"}} = {\\color{RoyalBlue}" +marginerror.toFixed(4).replace(/^0+/, '') + "} $$ $$ " + conlev + "\\% \\text{ Confidence Interval:} $$ $$ \\bar{p} \\pm z_{\\alpha/2} \\sqrt{\\frac{\\bar{p}(1-\\bar{p})}{n}} $$ $$"+pbar + "\\pm" +marginerror.toFixed(4).replace(/^0+/, '') + "$$ $$ \\boxed{" + anslow.toFixed(4).replace(/^0+/, '') + "\\text{ to }" + anshigh.toFixed(4).replace(/^0+/, '') + "} $$ $$ \\text{Interpretation:} $$ $$ "+conlev+"\\%  \\text{ confident } "+parseFloat(anslow.toFixed(4))+" \\leq \\mu \\leq "+parseFloat(anshigh.toFixed(4))+" $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>  "
    
    MathJax.typeset();
}


function example1() {
    if (type == "values") {
        example11()
    } else if (type == "data") {
        document.getElementById("xvalues").value = "54, 46, 51, 42, 47"
        document.getElementById('conlev').value=95
    }
}

function example2() {
    if (type == "values") {
        example22()
    } else if (type == "data") {
        document.getElementById("xvalues").value = "7, 11, 14, 9, 15, 5, 6, 12"
        document.getElementById('conlev').value=90
    }
}


function example11(){
    var x = document.getElementById("samplestat").value;
    if (x == "mean") {
        $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
        document.getElementById('size').value="30"
        document.getElementById('xbar').value="24"
        document.getElementById('stdev').value="6"
        document.getElementById('sigma').value="known"
        document.getElementById('conlev').value=95
    } else if (x == "proportion") {
        $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
        document.getElementById('size').value="100"
        document.getElementById('xbar').value=".25"
        document.getElementById('conlev').value=95
    } else if (x == "standard") {
        $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
        document.getElementById('size').value="22"
        document.getElementById('xbar').value="6"
        document.getElementById('conlev').value=95
    }
    
}

function example22(){
    var x = document.getElementById("samplestat").value;
    if (x == "mean") {
        $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
        document.getElementById('size').value="50"
        document.getElementById('xbar').value="16"
        document.getElementById('stdev').value="4"
        document.getElementById('sigma').value="unknown"
        document.getElementById('conlev').value=99
    } else if (x == "proportion") {
        $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
        document.getElementById('size').value="500"
        document.getElementById('xbar').value=".60"
        document.getElementById('conlev').value=90
    } else if (x == "standard") {
        $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
        document.getElementById('size').value="15"
        document.getElementById('xbar').value="4"
        document.getElementById('conlev').value=95
    }
}

function example3(){
    $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
    document.getElementById("samplestat").value = "proportion"
    document.getElementById('size').value="100"
    document.getElementById('xbar').value=".25"
    document.getElementById('conlev').value=95
}

function samplestat() {
    var x = document.getElementById("samplestat").value;
    if (x == "mean"){
        $("#sd1").show(); $("#sd2").show(); $("#sd3").show();
    } else if (x == "proportion"){
        $("#sd1").hide(); $("#sd2").hide(); $("#sd3").hide();
    } else if (x == "standard"){
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
    var planval = document.getElementById("planningvalue").value
    var margerr = document.getElementById('margin').value
    var conlev = document.getElementById('conlev2').value
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf);
    var ans = (zalphahalf*zalphahalf*planval*planval)/(margerr*margerr)
    var exp = 2.71828;
        
    document.getElementById("output0").innerHTML = " $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3).replace(/^0+/, '') +"$$ "

    
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


    ctx.fillText("z",285,132);
    ctx.fillText("z",228,145);
    ctx.fillText("α/2",234,147);


    
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

    
    var zvalue = toFixing(zalphahalf,1);
    var zalphahalfr = zalphahalf.toFixed(2); 
    var zseconddec = (""+zalphahalfr)[3];
    
    
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
        table1 += "<td>$" + (0.01 * r).toFixed(2).replace(/^0+/, '') + "$</td>";
    }
    
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        table3 += "<td>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
    }
    
    var tablez = "<table><tr style='border-bottom: thin solid; border-top: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue+"$</td>"+table3+"</tr></table>"

    document.getElementById("output").innerHTML = "$$\\text{Area to Left} = 1 - \\alpha/2 = 1 - "+alphahalf.toFixed(3).replace(/^0+/, '')+" = "+(1-alphahalf).toFixed(3).replace(/^0+/, '') +"$$"+tablez + "$$ z_{\\alpha/2} = "+zalphahalf.toFixed(2)+" $$ $$ \\begin{align} n &= \\frac{(z_{\\alpha/2})^2 \\sigma^2}{E^2} \\\\ &= \\frac{(" + parseFloat(zalphahalf.toFixed(2)) + ")^2 " + planval + "^2}{" + margerr + "^2} \\\\ &= " + parseFloat(ans.toFixed(2)) + " \\rightarrow \\boxed{" + Math.ceil(ans) + "} \\end{align} $$"
    
    MathJax.typeset();
}

function calcsize2() {
    var planval = document.getElementById("planningvalue").value
    var margerr = document.getElementById('margin').value
    var conlev = document.getElementById('conlev2').value
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf);
    var ans = (zalphahalf*zalphahalf*planval*(1-planval))/(margerr*margerr)
    var exp = 2.71828;
        
    document.getElementById("output0").innerHTML = " $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3).replace(/^0+/, '') +"$$ "

    
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


    ctx.fillText("z",285,132);
    ctx.fillText("z",228,145);
    ctx.fillText("α/2",234,147);


    
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

    
    var zvalue = toFixing(zalphahalf,1);
    var zalphahalfr = zalphahalf.toFixed(2); 
    var zseconddec = (""+zalphahalfr)[3];
    
    
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
        table1 += "<td>$" + (0.01 * r).toFixed(2).replace(/^0+/, '') + "$</td>";
    }
    
    table3 = []
    for (var r = valstart; r < valend + 1; r++){
        table3 += "<td>$" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(4).replace(/^0+/, '') + "$</td>";
    }
    
    var tablez = "<table><tr style='border-bottom: thin solid; border-top: thin solid'><td>$z$</td>"+table1+"</tr><tr><td>$"+zvalue+"$</td>"+table3+"</tr></table>"
    
    document.getElementById("output").innerHTML = "$$\\text{Area to Left} = 1 - \\alpha/2 = 1 - "+alphahalf.toFixed(3).replace(/^0+/, '')+" = "+(1-alphahalf).toFixed(3).replace(/^0+/, '') +"$$"+tablez + "$$ z_{\\alpha/2} = "+zalphahalf.toFixed(2)+" $$ $$ \\begin{align} n &= \\frac{(z_{\\alpha/2})^2p^*(1-p^*)}{E^2} \\\\ &= \\frac{(" + parseFloat(zalphahalf.toFixed(2)) + ")^2 " + planval + " (1-" + planval + ")}{" + margerr + "^2} \\\\ &= " + parseFloat(ans.toFixed(2)) + " \\rightarrow \\boxed{" + Math.ceil(ans) + "} \\end{align} $$"
    
    MathJax.typeset();
}

function example4(){
    document.getElementById("planning").value = "sigma"
    document.getElementById("planningvalue").value = "9.65"
    document.getElementById('margin').value="2"
    document.getElementById('conlev2').value=95
}

function example5(){
    document.getElementById("planning").value = "pstar"
    document.getElementById("planningvalue").value = ".44"
    document.getElementById('margin').value=".025"
    document.getElementById('conlev2').value=95
}

function switchsize() {
    $("#samplesize").show(); $("#confidence").hide();
    $("#switchsize").hide(); $("#switchconfidence").show();
    $("#output0").show(); $("#output").show(); $("#output1").hide(); $("#output2").hide();
    $("#explanation").hide(); $("#canvascontainer0").show(); $("#canvascontainer").hide();
}
 
function switchconfidence() {
    $("#samplesize").hide(); $("#confidence").show();
    $("#switchsize").show(); $("#switchconfidence").hide();
    $("#output0").hide(); $("#output").hide(); $("#output1").show(); $("#output2").show(); 
    $("#explanation").hide(); $("#canvascontainer0").hide(); $("#canvascontainer").show();
}
