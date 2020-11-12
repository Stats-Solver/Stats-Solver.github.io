$("#explanation").hide(); $("#sumsquares").hide(); $("#meansquare").hide(); $("#standarderror").hide(); $("#predict").hide();
$("#xval").hide(); $("#prediction").hide(); $("#prediction2").hide(); $("#alternative").hide(); $("#alternative2").hide();
$("#correlation").hide(); $("#correlation2").hide();




function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob
	}
	return Prob
} 



function LogGamma(Z) {
	with (Math) {
		var S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
		var LG= (Z-.5)*log(Z+4.5)-(Z+4.5)+log(S*2.50662827465);
	}
	return LG
}

function Betinc(X,A,B) {
	var A0=0;
	var B0=1;
	var A1=1;
	var B1=1;
	var M9=0;
	var A2=0;
	var C9;
	while (Math.abs((A1-A2)/A1)>.00001) {
		A2=A1;
		C9=-(A+M9)*(A+B+M9)*X/(A+2*M9)/(A+2*M9+1);
		A0=A1+C9*A0;
		B0=B1+C9*B0;
		M9=M9+1;
		C9=M9*(B-M9)*X/(A+2*M9-1)/(A+2*M9);
		A1=A0+C9*A1;
		B1=B0+C9*B1;
		A0=A0/B1;
		B0=B0/B1;
		A1=A1/B1;
		B1=1;
	}
	return A1/A
}

function compute(X,df) {
    with (Math) {
		if (df<=0) {
			alert("Degrees of freedom must be positive")
		} else {
			A=df/2;
			S=A+.5;
			Z=df/(df+X*X);
			BT=exp(LogGamma(S)-LogGamma(.5)-LogGamma(A)+A*log(Z)+.5*log(1-Z));
			if (Z<(A+1)/(S+2)) {
				betacdf=BT*Betinc(Z,A,.5)
			} else {
				betacdf=1-BT*Betinc(1-Z,.5,A)
			}
			if (X<0) {
				tcdf=betacdf/2
			} else {
				tcdf=1-betacdf/2
			}
		}
		tcdf=round(tcdf*100000)/100000;
	}
    return tcdf;
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
    $("#xval").hide();
    var x = document.getElementById("stat").value;
    if (x == "prediction"){
        $("#xval").show();
    } 
}

function stat(){
    $("#output").empty(); $("#explanation").hide(); $("#prediction").hide(); $("#prediction2").hide();
    $("#meansquare").hide(); $("#standarderror").hide(); $("#alternative").hide(); $("#alternative2").hide();
    $("#correlation").hide(); $("#correlation2").hide(); $("#output2").hide()
    var x = document.getElementById("stat").value;
    if (x == "slope"){
        slope()
    } else if (x == "intercept"){
        intercept()
    } else if (x == "equation") {
        equation()
    } else if (x == "prediction") {
        prediction()
    } else if (x == "sse") {
        sse()
    } else if (x == "sst") {
        sst()
    } else if (x == "ssr") {
        ssr()
    } else if (x == "rsquared") {
        rsquared()
    } else if (x == "correlation") {
        correlation()
    } else if (x == "mse") {
        mse()
    } else if (x == "see") {
        see()
    } else if (x == "ses") {
        ses()
    } else if (x == "standarderror") {
        standarderror()
    } else if (x == "tstat") {
        tstat()
    } else if (x == "msr") {
        msr()
    } else if (x == "fstat") {
        fstat()
    } else if (x == "predicted") {
        predicted()
    } else if (x == "residuals") {
        residuals()
    } else if (x == "standardized") {
        standardized()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function equation(){
    $("#explanation").show(); $("#prediction").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) corresponding to a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$$b_{1} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sum(x - \\bar{x})^2} $$"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$x - \\bar{x}$" + "</td>" + "<td>" + "$y - \\bar{y}$" + "</td>"+ "<td>" + "$(x - \\bar{x})(y - \\bar{y})$" + "</td>" +"<td>" + "$(x - \\bar{x})^2$" + "</td>"+ "</tr>";
    var rows = n_x; var cols = 6;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusy_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xxbminyyb[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sum_xminusx_bar)+"$</td>"+ "<td>$"+Math.round(sum_yminusy_bar)+"$</td>" +"<td>$"+parseFloat(sum_xxbminyyb.toFixed(2))+"$</td>"+"<td>$"+parseFloat(sum_xminusx_bar2.toFixed(2))+"$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table>$$b_{1}  = \\frac{"+parseFloat(sum_xxbminyyb.toFixed(2))+"}{"+parseFloat(sum_xminusx_bar2.toFixed(2))+"}="+parseFloat(ansslope.toFixed(2))+"$$ $$  b_{0} = "+parseFloat(mean_y.toFixed(2))+" - (" +parseFloat(ansslope.toFixed(2)) + ")(" + parseFloat(mean_x.toFixed(2))+ ") = "+parseFloat(ansint.toFixed(2))+" $$ $$\\boxed{ \\hat{y} = "+parseFloat(ansint.toFixed(2)) + signslope +parseFloat(Math.abs(ansslope).toFixed(2))+"x} $$"
    MathJax.typeset();
}

function predictshow() {
    $("#xval").show(); $("#prediction").hide(); $("#prediction2").show(); $("#output2").show();
}

function predictdontshow() {
    $("#xval").hide(); $("#prediction").show(); $("#prediction2").hide(); $("#output2").hide();
}

function intercept(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The intercept of the estimated regression equation is the predicted value of dependent variable (y) when the independent variable (x) is equal to 0."
    document.getElementById("formulatext").innerHTML = "$$b_{0} = \\bar{y} - b_{1} \\bar{x}$$"
    document.getElementById("explanationtext").innerHTML = "The formula for the intercept is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var interpret = "<b>Interpretation:</b> The predicted value of y, when x = 0, is " + parseFloat(ansint.toFixed(2)) + "."
    document.getElementById("output").innerHTML = "$$ \\begin{align} b_{0} &= \\bar{y} - b_{1} \\bar{x} \\\\ &= "+parseFloat(mean_y.toFixed(2))+" - (" +parseFloat(ansslope.toFixed(2)) + ")(" + parseFloat(mean_x.toFixed(2))+ ") \\\\ &= \\boxed{"+parseFloat(ansint.toFixed(2))+"} \\end{align} $$"
    MathJax.typeset();
}

function equation2(){
    $("#explanation").show(); $("#predict").show();
    document.getElementById("descriptiontext").innerHTML = "The estimated regression equation is used to predict the dependent variable (y) for a given value of the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$$\\hat{y} = b_{0} + b_{1} x$$"
    document.getElementById("explanationtext").innerHTML = "The estimated regression equation is found by plugging in the values of the slope and intercept into the formula."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} b_{0} &= "+parseFloat(ansint.toFixed(2))+"\\\\ b_{1} &= "+parseFloat(ansslope.toFixed(2))+"\\end{align}$$ $$\\boxed{ \\hat{y} = "+parseFloat(ansint.toFixed(2)) + signslope +parseFloat(Math.abs(ansslope).toFixed(2))+"x} $$"
    MathJax.typeset();
}

function prediction(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The estimated regression equation is used to predict the dependent variable (y) for a given value of the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$$\\hat{y} = b_{0} + b_{1} x$$"
    document.getElementById("explanationtext").innerHTML = "The estimated regression equation is found by plugging in the values of the slope and intercept into the formula."
    var xvalue = document.getElementById("xvalue").value;
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var ans = ansint + ansslope * xvalue
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\hat{y} &= "+parseFloat(ansint.toFixed(2))+" + "+parseFloat(ansslope.toFixed(2))+" x \\\\ &= "+parseFloat(ansint.toFixed(2))+" + "+parseFloat(ansslope.toFixed(2))+" (" + xvalue + ") \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "} \\end{align}$$"
    MathJax.typeset();
}

function predicted(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$$\\hat{y} = b_{0} + b_{1} x$$"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table style='margin-bottom:15px'>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$\\text{Predicted } (\\hat{y})$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat(ansint.toFixed(2)) + " + " + parseFloat(ansslope.toFixed(2)) + " (" + x[r] + ") = " + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2))  + " $</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table + "</table>"
    MathJax.typeset();
}

function residuals(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$$\\hat{y} = b_{0} + b_{1} x$$"
    document.getElementById("explanationtext").innerHTML = "The formula for the slope is a result of the least squares method."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table style='margin-bottom:15px'>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$\\hat{y}$" + "</td>" + "<td>" + "$\\text{Residuals } (y - \\hat{y})$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2))  + " $</td>";
        table += "<td>$" + y[r] + " - " + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2)) + " = " + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table + "</table>"
    MathJax.typeset();
}

function sse(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The sum of squares error meausure the variability of the observations around the estimation regression equation."
    document.getElementById("formulatext").innerHTML = "$$ \\text{SSE} = \\sum(y - \\hat{y})^2 $$"
    document.getElementById("explanationtext").innerHTML = "The closer the observations are to the estimate regression line, the smaller the SSE will be."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$\\hat{y}$" + "</td>" + "<td>" + "$y - \\hat{y}$" + "</td>"+ "<td>" + "$(y - \\hat{y})^2$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 5;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat(yhat[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusyhat[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusyhat2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+Math.round(sum_yminusyhat)+"$</td>" +"<td>$"+parseFloat(sum_yminusyhat2.toFixed(2))+"$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table>$$  \\text{SSE} = \\boxed{"+parseFloat(anssse.toFixed(2))+"} $$"
    MathJax.typeset();
}

function sst(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The sum of squares total meausures the overall variability of the value of the dependent variable (y)."
    document.getElementById("formulatext").innerHTML = "$$ \\text{SST} = \\sum(y - \\bar{y})^2 $$"
    document.getElementById("explanationtext").innerHTML = "The closer the values of the dependent variable are to their mean, the smaller the SST will be."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2;
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$y - \\bar{y}$" + "</td>"+ "<td>" + "$(y - \\bar{y})^2$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 4;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat(yminusy_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusy_bar2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sum_yminusy_bar)+"$</td>" +"<td>$"+parseFloat(sum_yminusy_bar2.toFixed(2))+"$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table>$$ \\text{SST} = \\boxed{"+parseFloat(anssst.toFixed(2))+"} $$"
    MathJax.typeset();
}

function ssr(){
    $("#explanation").show(); $("#alternative").show();
    document.getElementById("descriptiontext").innerHTML = "The sum of squares regression meausures the distance between the estimated regression line and the mean of the dependent variable (y)."
    document.getElementById("formulatext").innerHTML = "$$ \\text{SST} = \\text{SSR} + \\text{SSE} $$"
    document.getElementById("explanationtext").innerHTML = "The closer the estimated regression line is to the mean of the dependent variable, the smaller the SSR will be."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2;
    var ansssr = anssst - anssse;
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{SSR} &= \\text{SST} - \\text{SSE} \\\\ &= "+parseFloat(anssst.toFixed(2))+" - " +parseFloat(anssse.toFixed(2)) +" \\\\ &= \\boxed{"+parseFloat(ansssr.toFixed(2))+"} \\end{align} $$"
    MathJax.typeset();
}

function rsquared(){
    $("#explanation").show(); $("#correlation").show();
    document.getElementById("descriptiontext").innerHTML = "The coefficient of determination is a measure of the goodness of fit for the estimated regression equation."
    document.getElementById("formulatext").innerHTML = "$$ R^2 = \\frac{\\text{SSR}}{\\text{SST}} $$"
    document.getElementById("explanationtext").innerHTML = "The coefficient of determination takes a value between 0 and 1, with a higher value indicating a better fit."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst;
    var ansrsquper = ansrsqu.toFixed(2) * 100;
    var interpret = "Interpretation: " + parseFloat(ansrsquper.toFixed(0)) + "% of the variation in y is explained by the estimated regression equation."
    document.getElementById("output").innerHTML = "$$ \\begin{align} r^2 &= \\frac{\\text{SSR}}{\\text{SST}} \\\\ &= \\frac{"+parseFloat(ansssr.toFixed(2))+"}{" +parseFloat(anssst.toFixed(2)) +"} \\\\ &= \\boxed{"+parseFloat(ansrsqu.toFixed(2))+"} \\end{align} $$" + interpret
    MathJax.typeset();
}

function correlation(){
    $("#explanation").show(); $("#output2").show(); $("#correlation").hide(); $("#correlation2").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationship between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$$ r_{xy} = (\\text{sign of } b_1) \\sqrt{r^2} $$"
    document.getElementById("explanationtext").innerHTML = "An alternative formulation of the correlation coefficient that uses the coefficient of determination."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst;
    var ansrsquper = ansrsqu.toFixed(2) * 100;
    var signslope = ""
    if (ansslope > 0) {
        var signslope = "+"
        var signslopeval = +1
    } else if (ansslope < 0) {
        var signslope = "-"
        var signslopeval = -1
    } else {
        var signslope = ""
        var signslopeval = 0
    }
    var anscorcoef = signslopeval * Math.sqrt(ansrsqu)
    if (anscorcoef == 1){
        var intinside = "a <u>perfect positive"
    } else if (anscorcoef >= .75 && anscorcoef < 1){
        var intinside = "a <u>strong positive"
    } else if (anscorcoef > .25 && anscorcoef < .75){
        var intinside = "a <u>positive"
    } else if (anscorcoef > 0 && anscorcoef < .25){
        var intinside = "a <u>weak positive"
    } else if (anscorcoef < 0 && anscorcoef >= -.25){
        var intinside = "a <u>weak negative"
    } else if (anscorcoef < -.25 && anscorcoef > -.75){
        var intinside = "a <u>negative"
    } else if (anscorcoef <= -.75 && anscorcoef > -1){
        var intinside = "a <u>strong negative"
    } else if (anscorcoef == -1){
        var intinside = "a <u>perfect negative"
    } else {
        var intinside = "<u>no"
    }
    var interpret = "<b>Interpretation:</b> There is "+ intinside +" linear relationship</u> between x and y."
    document.getElementById("output").innerHTML = "$$ \\begin{align} r_{xy} &= (\\text{sign of } b_1) \\sqrt{r^2} \\\\ &= "+signslope+"\\sqrt{" +ansrsqu.toFixed(2) +"} \\\\ &= \\boxed{"+anscorcoef.toFixed(2)+"} \\end{align} $$"
    MathJax.typeset();
}

function hidecorrelation() {
    $("#output2").hide(); $("#correlation").show(); $("#correlation2").hide();
}


function meansquare() {
    $("#meansquare").show(); 
}

function calcmeansquare() {
    var val = document.getElementById("meansquareval").value;
    if (val=="error") {
        mse()
    } else if (val=="regression") {
        msr()
    }
}

function mse(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationshhip between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = (\\text{sign of } b_1) \\sqrt{r^2} $$"
    document.getElementById("explanationtext").innerHTML = "An alternative formulation of the correlation coefficient that uses the coefficient of determination."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{MSE} &= \\frac{\\text{SSE}}{n-2} \\\\ &= \\frac{"+parseFloat(anssse.toFixed(2))+"}{" + n_x +" - 2} \\\\ &= \\boxed{"+parseFloat(ansmse.toFixed(2))+"} \\end{align} $$"
    MathJax.typeset();
}

function standarderror() {
    $("#standarderror").show(); 
}

function calcstandarderror() {
    var val = document.getElementById("standarderrorval").value;
    if (val=="estimate") {
        see()
    } else if (val=="slope") {
        ses()
    }
}

function see(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The standard error of estimate is the square root of the MSE."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2);
    var anssee = Math.sqrt(ansmse);
    document.getElementById("output").innerHTML = "$$ \\begin{align} s &= \\sqrt{\\text{MSE}} \\\\ &= \\sqrt{"+parseFloat(ansmse.toFixed(2))+"} \\\\ &= \\boxed{" + parseFloat(anssee.toFixed(2)) +"} \\end{align} $$"
    MathJax.typeset();
}

function ses(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = ""
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    document.getElementById("output").innerHTML = "$$ \\begin{align} s_{b_1} &= \\frac{s}{\\sqrt{\\sum(x - \\bar{x})^2}} \\\\ &= \\frac{"+parseFloat(anssee.toFixed(2))+"}{\\sqrt{"+parseFloat(sum_xminusx_bar2.toFixed(2))+"}} \\\\ &= \\boxed{" + parseFloat(ansses.toFixed(2)) +"} \\end{align} $$"
    MathJax.typeset();
}

function tstat(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The t-statistic is the slope divided by the estimated standard deviation of the slope."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length; var size = n_x; var sizem1 = size - 1;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    var anststat = ansslope / ansses; var anststatneg = -Math.abs(anststat)
    var zptwo = normalcdf(anststatneg); var zptwo2 = 2 * zptwo;
    var test = anststat; var testtwo = -1*Math.abs(test);
    
    
    
    
    
    
    
        var testsymb = "t";
        var tailsign = "=";
        var stndsymb = "s"
        var pvalhalf = normalcdf(testtwo)
        if (pvalhalf > .2) {
            var pvalh = ".20 \\text{ to } 1"
        } else if (pvalhalf <.2 && pvalhalf >.1) {
            var pvalh = ".10 \\text{ to } .20"
        } else if (pvalhalf <.1 && pvalhalf >.05) {
            var pvalh = ".05 \\text{ to } .10"
        } else if (pvalhalf <.05 && pvalhalf >.025) {
            var pvalh = ".025 \\text{ to } .05"
        } else if (pvalhalf <.025 && pvalhalf >.01) {
            var pvalh = ".01 \\text{ to } .025"
        } else if (pvalhalf <.01 && pvalhalf >.005) {
            var pvalh = ".005 \\text{ to } .01"
        } else if (pvalhalf <.005) {
            var pvalh = "0 \\text{ to } .005"
        } else {
            var pvalh = pvalhalf.toFixed(4);
        }     
        var pvalue = 2 * pvalhalf;
        if (pvalhalf > .2) {
            var pval = ".40 \\text{ to } 1"
        } else if (pvalhalf <.2 && pvalhalf >.1) {
            var pval = ".20 \\text{ to } .40"
        } else if (pvalhalf <.1 && pvalhalf >.05) {
            var pval = ".10 \\text{ to } .20"
        } else if (pvalhalf <.05 && pvalhalf >.025) {
            var pval = ".05 \\text{ to } .10"
        } else if (pvalhalf <.025 && pvalhalf >.01) {
            var pval = ".02 \\text{ to } .05"
        } else if (pvalhalf <.01 && pvalhalf >.005) {
            var pval = ".01 \\text{ to } .02"
        } else if (pvalhalf <.005) {
            var pval = "0 \\text{ to } .01"
        } else {
            var pval = pvalue.toFixed(4);
        }   
    
    
    
    
    table4 = "<td></td><td colspan='6'>Area in Upper Tail</td>"
    
    table5 = "<td>df</td><td>.20</td><td>.10</td><td>.05</td><td>.025</td><td>.01</td><td>.005</td>"
    
    table6 = "<td>"+ sizem1 +"</td><td>"+tinv(.20,sizem1).toFixed(3)+"</td><td>"+tinv(.10,sizem1).toFixed(3)+"</td><td>"+tinv(.05,sizem1).toFixed(3)+"</td><td>"+tinv(.025,sizem1).toFixed(3)+"</td><td>"+tinv(.01,sizem1).toFixed(3)+"</td><td>"+tinv(.005,sizem1).toFixed(3)+"</td>"
    
    
    
    
    var tablep = "<table><tr style='border-top: thin solid; border-bottom: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table6+"</tr></table>"
    
    
    document.getElementById("output").innerHTML = " $$ \\begin{align} \\text{t-Statistic: } t &= \\frac{b_1}{s_{b_1}} \\\\ &= \\frac{"+ansslope.toFixed(2)+"}{"+ansses.toFixed(2)+"} \\\\ &= " + anststat.toFixed(2) +" \\end{align} $$ $$ \\begin{align} \\text{Degrees of Freedom: } df &= n - 1 \\\\ &= "+size+" - 1 \\\\ &= "+(size-1)+" \\end{align} $$" + tablep+"$$ \\begin{align} \\text{p-value}&=2*P(t \\geq "+testtwo.toFixed(2)+" ) \\\\ &= 2*" + pvalh+ " = "+pval+" \\end{align} $$ "
    
    
    
    
    //document.getElementById("output").innerHTML = "$$ \\begin{align} t &= \\frac{b_1}{s_{b_1}} \\\\ &= \\frac{"+ansslope.toFixed(2)+"}{"+ansses.toFixed(2)+"} \\\\ &= \\boxed{" + anststat.toFixed(2) +"} \\end{align} $$ $$ \\begin{align} \\text{p-value}&=2*P(t \\leq "+anststatneg.toFixed(2)+" ) \\\\ &= 2*" + zptwo.toFixed(4)+ " = "+zptwo2.toFixed(4)+" \\end{align} $$ $$\\text{p-value}="+zptwo2.toFixed(4)+"\\leq \\alpha = .05 $$ $$ \\textbf{Conclusion:} \\text{ There is a significant linear relationship between x and y} $$"
    MathJax.typeset();
}

function msr(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The mean square regression is the SSR divided by the number of independent variables."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    var anststat = ansslope / ansses;
    var ansmsr = ansssr;
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{MSR} &= \\frac{\\text{SSR}}{1} \\\\ &= \\frac{\\text{"+parseFloat(ansssr.toFixed(2))+"}}{1} \\\\ &= \\boxed{"+parseFloat(ansmsr.toFixed(2))+"} \\end{align} $$"
    MathJax.typeset();
}

function fstat(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The F-statistic is the MSR divided by the MSE."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length;
    var y = str_y.split(",").map(Number); var n_y = y.length;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = x.map( function(value) {
        return value - mean_x;
    } );
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < n_x; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sum_xminusx_bar2 = sum(xminusx_bar2); var sum_yminusy_bar2 = sum(yminusy_bar2)
    var ansvar_x = sum_xminusx_bar / (n_x - 1); var ansvar_y = sum_yminusy_bar2 / (n_y - 1);
    var ansslope = sum_xxbminyyb / sum_xminusx_bar2; var ansint = mean_y - ansslope * mean_x;
    var yhat=[]; var yminusyhat=[];
    for(var i = 0; i < n_x; i++){
        yhat[i] = ansint + ansslope * x[i]
    }
    for(var i = 0; i < n_x; i++){
        yminusyhat[i] = y[i] - yhat[i]
    }
    var yminusyhat2 = yminusyhat.map( function(value) {
        return value * value;
    } );
    var sum_yminusyhat = sum(yminusyhat); var sum_yminusyhat2 = sum(yminusyhat2);
    var anssse = sum_yminusyhat2;
    var yminusy_bar = y.map( function(value) {
        return value - mean_y;
    } );
    var yminusy_bar2 = y.map( function(value) {
        return value * value;
    } );
    var sum_yminusy_bar = sum(yminusy_bar); var sum_yminusy_bar2 = sum(yminusy_bar2);
    var anssst = sum_yminusy_bar2; var ansssr = anssst - anssse;
    var ansrsqu = ansssr / anssst; var ansrsquper = ansrsqu.toFixed(2) * 100;
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    var anststat = ansslope / ansses; var ansmsr = ansssr;
    var ansfstat = ansmsr / ansmse;
    document.getElementById("output").innerHTML = "$$ \\begin{align} F &= \\frac{\\text{MSR}}{\\text{MSE}} \\\\ &= \\frac{"+ansmsr.toFixed(2)+"}{"+ansmse.toFixed(2)+"} \\\\ &= \\boxed{"+ ansfstat.toFixed(2) + "} \\end{align} $$"
    MathJax.typeset();
}



function examplevalues(){
    document.getElementById('valuesx').value="2, 4, 6, 8, 10"
    document.getElementById('valuesy').value="4, 6, 2, 9, 12"
}

function examplevalues2(){
    document.getElementById('valuesx').value="4, 11, 7, 21, 15"
    document.getElementById('valuesy').value="45, 30, 65, 20, 25"
}

