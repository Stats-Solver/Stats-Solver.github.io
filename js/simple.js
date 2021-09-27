$("#explanation").hide(); $("#sumsquares").hide(); $("#meansquares").hide(); $("#standarderror").hide(); $("#predict").hide();
$("#xval").hide(); $("#prediction").hide(); $("#prediction2").hide(); $("#alternative").hide(); $("#alternative2").hide();
$("#correlation").hide(); $("#correlation2").hide(); $("#xpval").hide(); $("#level").hide(); $("#residtype").hide(); $("#charts").hide();
$("#581773186").hide();

$("#sigtests").hide(); $("#standerr").hide();

$("#simpoutputs").hide();

$(function () {
            $('[data-toggle="tooltip"]').tooltip()
    })

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);


how1(); how2(); 




function how1(){
    var c = document.getElementById("howCanvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 200);
    
    ctx.fillText("Estimated Regression Line",90,10);
    
    ctx.fillText("y",37,15);
    ctx.fillText("x",265,182);
    ctx.fillText("ŷ",255,50);
    //ctx.fillText("b₀",25,130);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 180);
    ctx.lineTo(260, 180);
    
    ctx.moveTo(60, 130);
    ctx.lineTo(240, 50);
    
    //ctx.moveTo(33, 130);
    //ctx.lineTo(47, 130);
    
    //ctx.fillRect(70,130,3,3);
    ctx.fillRect(85,100,3,3);
    ctx.fillRect(100,140,3,3);
    ctx.fillRect(115,70,3,3);
    ctx.fillRect(130,110,3,3);
    ctx.fillRect(145,75,3,3);
    //ctx.fillRect(160,70,3,3);
    ctx.fillRect(175,110,3,3);
    ctx.fillRect(185,60,3,3);
    ctx.fillRect(205,40,3,3);
    ctx.fillRect(220,80,3,3);
    //ctx.fillRect(235,50,3,3);
    
    ctx.stroke();
}








function how2(){
    var c = document.getElementById("howCanvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 200);
    
    ctx.fillText("Prediction Interval",100,10);
    
    ctx.fillText("y",37,15);
    ctx.fillText("x",265,182);
    ctx.fillText("ŷ",255,50);
    //ctx.fillText("b₀",25,130);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 180);
    ctx.lineTo(260, 180);
    
    ctx.moveTo(60, 130);
    ctx.lineTo(240, 50);
    
    //ctx.moveTo(33, 130);
    //ctx.lineTo(47, 130);
    
    ctx.moveTo(60, 100);
    ctx.bezierCurveTo(120, 90, 180, 60, 240, 20);
    
    ctx.moveTo(60, 160);
    ctx.bezierCurveTo(120, 120, 180, 100, 240, 80);
    
    ctx.stroke();
}









function how3(){
    var c = document.getElementById("howCanvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 200);
    
    ctx.fillText("Sum of Squares",115,10);
    
    ctx.fillText("y",37,15);
    ctx.fillText("x",265,182);
    ctx.fillText("ŷ",265,50);
    ctx.fillText("ȳ",265,90);
    
    ctx.fillText("y-ŷ",200,50);
    ctx.fillText("ŷ-ȳ",200,82);
    ctx.fillText("y-ȳ",242,70);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 180);
    ctx.lineTo(260, 180);
    
    ctx.moveTo(40, 130);
    ctx.lineTo(255, 50);
    
    ctx.moveTo(40, 90);
    ctx.lineTo(255, 90);
    
    ctx.moveTo(223,32);
    ctx.bezierCurveTo(217, 40, 217, 50, 223,59);
    
    ctx.moveTo(223,63);
    ctx.bezierCurveTo(217, 70, 217, 80, 223,88);
    
    ctx.moveTo(230,32);
    ctx.bezierCurveTo(240, 45, 240, 75, 230,88);
    
    //ctx.moveTo(33, 130);
    //ctx.lineTo(47, 130);
    
    ctx.fillRect(70,130,3,3);
    ctx.fillRect(85,100,3,3);
    ctx.fillRect(100,140,3,3);
    ctx.fillRect(115,70,3,3);
    ctx.fillRect(130,110,3,3);
    ctx.fillRect(145,60,3,3);
    //ctx.fillRect(160,70,3,3);
    ctx.fillRect(175,110,3,3);
    //ctx.fillRect(190,60,3,3);
    ctx.fillRect(225,30,3,3);
    //ctx.fillRect(220,80,3,3);
    //ctx.fillRect(235,50,3,3);
    
    ctx.stroke();
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
    $("#sigtests").hide(); $("#standerr").hide();
    $("#xval").hide(); $("#blanky").show(); $("#sumsquares").hide(); $("#meansquares").hide(); 
    $("#xpval").hide(); $("#level").hide(); $("#blankx").show(); $("#residtype").hide();
    var x = document.getElementById("stat").value;
    if (x == "prediction"){
        $("#xval").show(); $("#blanky").hide();
    } else if (x == "sumsqu") {
        $("#sumsquares").show(); $("#blanky").hide();
    } else if (x == "standard") {
        $("#standerr").show(); $("#blanky").hide();
    }  else if (x == "meansqu") {
        $("#meansquares").show(); $("#blanky").hide();
    } else if (x == "significance") {
        $("#sigtests").show(); $("#blanky").hide();
    } else if (x == "confinterval" || x == "predinterval") {
        $("#xpval").show(); $("#blanky").hide(); $("#level").show(); $("#blankx").hide();
    } else if (x == "resplot" || x == "standardized") {
        $("#residtype").show(); $("#blanky").hide();
    } 
}

function stat(){
    $("#simpoutputs").show(); $("#how").hide();
    $("#581773186").show(); $("#output3").empty(); 
    $("#output").empty(); $("#explanation").hide(); $("#prediction").hide(); $("#prediction2").hide();
    $("#meansquare").hide(); $("#standarderror").hide(); $("#alternative").hide(); $("#alternative2").hide();
    $("#correlation").hide(); $("#correlation2").hide(); $("#output2").hide(); $("#myCanvas").hide(); $("#charts").hide();
    var x = document.getElementById("stat").value;
    if (x == "slope"){
        slope()
    } else if (x == "intercept"){
        intercept()
    } else if (x == "equation") {
        equation()
    } else if (x == "prediction") {
        prediction()
    } else if (x == "sumsqu") {
        sumsquares()
    } else if (x == "meansqu") {
        meansquares()
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
    } else if (x == "standard") {
        calcstandarderror()
    } else if (x == "tstat") {
        tstat()
        $("#output2").show(); $("#myCanvas").show();
    } else if (x == "msr") {
        msr()
    } else if (x == "significance") {
        calcsignificance()
    } else if (x == "confinterval") {
        confinterval()
    } else if (x == "predinterval") {
        predinterval()
    } else if (x == "predicted") {
        predicted()
    } else if (x == "resplot") {
        resplot()
    } else if (x == "standardized") {
        standardized()
    } else if (x == "leverage") {
        leverage()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function slope(){
    $("#explanation").show(); $("#prediction").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The regression equation desribes the relationship between x and y."
    document.getElementById("formulatext").innerHTML = "$\\hat{y} = b_{0} + b_{1} x $"
    //\\quad b_{0} = \\bar{y} - b_{1} \\bar{x}
    document.getElementById("explanationtext").innerHTML = "The coefficients of the regression equation are provided by the least squares method."
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
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sum_xminusx_bar)+"$</td>"+ "<td>$"+Math.round(sum_yminusy_bar)+"$</td>" +"<td>$ {\\color{NavyBlue}"+parseFloat(sum_xxbminyyb.toFixed(2))+"}$</td>"+"<td>$ {\\color{NavyBlue}"+parseFloat(sum_xminusx_bar2.toFixed(2))+"}$</td>"+ "</tr>";
    
    
    // $$ \\text{Sample Means:} $$
    //\\begin{align}  &= \\frac{\\sum{x}}{n} =  \\frac{" + sum_x + "}{" + n_x + "} = \\\\
    //&= \\frac{\\sum{y}}{n} =  \\frac{" + sum_y + "}{" + n_y + "} \\end{align}
    //$$ \\text{Slope:} $$
    //$$ \\text{Intercept:} $$
    //$$ \\text{Regression Equation:} $$
    
    
    document.getElementById("output").innerHTML = " $$  \\bar{x} = " + parseFloat(mean_x.toFixed(2))+ " \\quad \\quad  \\bar{y} =  " + parseFloat(mean_y.toFixed(2))+ "  $$ <table>" + table + "</table>  $$ b_{1} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sum(x - \\bar{x})^2} = \\frac{ "+parseFloat(sum_xxbminyyb.toFixed(2))+"}{ "+parseFloat(sum_xminusx_bar2.toFixed(2))+"}=  {\\color{NavyBlue}"+parseFloat(ansslope.toFixed(2))+"} $$  $$ b_{0} = \\bar{y} - b_{1} \\bar{x} = { "+parseFloat(mean_y.toFixed(2))+"} - (" +parseFloat(ansslope.toFixed(2)) + ")( " + parseFloat(mean_x.toFixed(2))+ ") = {\\color{NavyBlue}"+parseFloat(ansint.toFixed(2))+"} $$  $$ \\hat{y} = b_{0} + b_{1} x \\rightarrow \\boxed{ \\hat{y} = "+parseFloat(ansint.toFixed(2)) + signslope + parseFloat(Math.abs(ansslope).toFixed(2))+"x} $$ "
    
    // = \\frac{" + x[0] + " +  "+x[1]+" + \\cdots + "+x[n_x - 1]+"}{" + n_x + "}
    //  = \\frac{" + y[0] + " +  "+y[1]+" + \\cdots + "+y[n_y - 1]+"}{" + n_y + "}
    
    document.getElementById("output3").innerHTML = "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    
    
    
    MathJax.typeset();
    
    
    
    
    
    
    
    
    
    
    
    
    //var str = document.getElementById("values1").value;
    //var str2 = document.getElementById("values2").value;
    //var each = str.split(","); var each2 = str2.split(",")
    var eachnums = x.map(function(v) {
  		return parseInt(v, 10);
    });
    var eachnums2 = y.map(function(v) {
  		return parseInt(v, 10);
    });
    
    
    
    
    
    
    
    
    
    
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          title: 'Regression Line',
          hAxis: {title: 'x'},
          vAxis: {title: 'y'},
          legend: 'none',
          trendlines: { 0: {} }    // Draw a trendline for data series 0. 
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
    
    
    
    
    
    
    
    
    
      }
}

function predictshow() {
    $("#xval").show(); $("#prediction").hide(); $("#prediction2").show(); $("#output2").show();
}

function predictdontshow() {
    $("#xval").hide(); $("#prediction").show(); $("#prediction2").hide(); $("#output2").hide();
}

function prediction(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The estimated regression equation is used to predict the value of y for a given value of x."
    document.getElementById("formulatext").innerHTML = "$\\hat{y} = b_{0} + b_{1} x$"
    document.getElementById("explanationtext").innerHTML = "The value of y is predicted by plugging x into the estimated regression equation."
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
    
    
    document.getElementById("output").innerHTML = " $$ \\hat{y} = "+parseFloat(ansint.toFixed(2))+" + "+parseFloat(ansslope.toFixed(2))+" x = "+parseFloat(ansint.toFixed(2))+" + "+parseFloat(ansslope.toFixed(2))+" (" + xvalue + ") = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function sumsquares() {
    var x = document.getElementById("sumsquaresval").value;
    if (x == "error") {
        sse()
    } else if (x == "total") {
        sst()
    } else if (x == "regression") {
        ssr()
    }
}

function sse(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The sum of squares error meausure the variability of the observations around the estimation regression equation."
    document.getElementById("formulatext").innerHTML = "$ \\text{SSE} = \\sum(y - \\hat{y})^2 $"
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
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    
    var out = "$$ \\text{Predicted Values:} $$ $$ \\begin{align}"
    
    var rows = n_x; var cols = 5;
    for (var r = 0; r < rows; r++){
        out += " \\hat{y} &= "+parseFloat(ansint.toFixed(2)) + signslope +parseFloat(Math.abs(ansslope).toFixed(2))+"("+x[r]+") = "+parseFloat(yhat[r].toFixed(2))+" \\\\" 
    }
    
    out += "\\end{align} $$"

    
    
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$\\hat{y}$" + "</td>" + "<td>" + "$y - \\hat{y}$" + "</td>"+ "<td>" + "$(y - \\hat{y})^2$" + "</td>" + "</tr>";
    
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat(yhat[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusyhat[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(yminusyhat2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+Math.round(sum_yminusyhat)+"$</td>" +"<td>${\\color{RoyalBlue}"+parseFloat(sum_yminusyhat2.toFixed(2))+"}$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "$$ \\hat{y} = "+parseFloat(ansint.toFixed(2)) + signslope + parseFloat(Math.abs(ansslope).toFixed(2))+"x $$ <table>" + table + "</table>$$  \\text{SSE} = \\sum(y - \\hat{y})^2 = \\boxed{"+parseFloat(anssse.toFixed(2))+"} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function sst(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The sum of squares total meausures the overall variability of the value of the dependent variable (y)."
    document.getElementById("formulatext").innerHTML = "$ \\text{SST} = \\sum(y - \\bar{y})^2 $"
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
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sum_yminusy_bar)+"$</td>" +"<td>${\\color{RoyalBlue}"+parseFloat(sum_yminusy_bar2.toFixed(2))+"}$</td>"+ "</tr>";
    
    //$$ \\text{Sample Mean:} $$ = \\frac{\\sum{y}}{n} =  \\frac{" + sum_y + "}{" + n_y + "} 
    
    document.getElementById("output").innerHTML = " $$ \\bar{y} =  " + parseFloat(mean_y.toFixed(2))+ " $$ <table>" + table + "</table>$$ \\text{SST} = \\sum(y - \\bar{y})^2 = \\boxed{"+parseFloat(anssst.toFixed(2))+"} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function ssr(){
    $("#explanation").show(); $("#alternative").show();
    document.getElementById("descriptiontext").innerHTML = "The sum of squares regression meausures the distance between the estimated regression line and the mean of the dependent variable (y)."
    document.getElementById("formulatext").innerHTML = "$ \\text{SSR} = \\text{SST} - \\text{SSE} $"
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
    document.getElementById("output").innerHTML = "$$ \\text{SSR} = \\text{SST} - \\text{SSE} = "+parseFloat(anssst.toFixed(2))+" - " +parseFloat(anssse.toFixed(2)) +" = \\boxed{"+parseFloat(ansssr.toFixed(2))+"} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function rsquared(){
    $("#explanation").show(); $("#correlation").show();
    document.getElementById("descriptiontext").innerHTML = "The coefficient of determination is a measure of the goodness of fit for the estimated regression equation."
    document.getElementById("formulatext").innerHTML = "$ r^2 = \\dfrac{\\text{SSR}}{\\text{SST}} $"
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
    //$$ \\text{is explained by the regression equation.} $$" \\text{Interpretation: }
    var interpret = "$$ " + parseFloat(ansrsquper.toFixed(0)) + "\\% \\text{ of the Variation is Explained} $$" 
    document.getElementById("output").innerHTML = "$$ r^2 = \\frac{\\text{SSR}}{\\text{SST}} = \\frac{"+parseFloat(ansssr.toFixed(2))+"}{" +parseFloat(anssst.toFixed(2)) +"} = \\boxed{"+ansrsqu.toFixed(2).replace(/^0+/, '')+"}  $$" + interpret + "<a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function correlation(){
    $("#explanation").show(); $("#output2").hide(); $("#correlation").hide(); $("#correlation2").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationship between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ r_{xy} = (\\text{sign of } b_1) \\sqrt{r^2} $"
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
    document.getElementById("output").innerHTML = "$$ r_{xy} = (\\text{sign of } b_1) \\sqrt{r^2} = "+signslope+" \\sqrt{" +ansrsqu.toFixed(2).replace(/^0+/, '') +"} = \\boxed{"+anscorcoef.toFixed(2).replace(/^0+/, '')+"} $$ <a href = 'mailto: 	contact@statssolver.com'>Send Feedback</a>"
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

function meansquares() {
    var x = document.getElementById("meansquaresval").value;
    if (x == "error") {
        mse()
    } else if (x == "regression") {
        msr()
    }
}

function mse(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationshhip between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ \\text{MSE} = \\dfrac{\\text{SSE}}{n-2} $"
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
    document.getElementById("output").innerHTML = "$$ \\text{MSE} = \\frac{\\text{SSE}}{n-2} = \\frac{"+parseFloat(anssse.toFixed(2))+"}{" + n_x +" - 2} = \\boxed{"+parseFloat(ansmse.toFixed(2))+"} $$"
    MathJax.typeset();
}

function msr(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationshhip between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ \\text{MSR} = \\dfrac{\\text{SSR}}{1} $"
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
    var ansmse = anssse / (n_x - 2); var anssee = Math.sqrt(ansmse);
    var ansses = anssee / Math.sqrt(sum_xminusx_bar2);
    var anststat = ansslope / ansses;
    var ansmsr = ansssr;
    document.getElementById("output").innerHTML = "$$ \\text{MSR} = \\frac{\\text{SSR}}{1} = \\frac{\\text{"+parseFloat(ansssr.toFixed(2))+"}}{1} = \\boxed{"+parseFloat(ansmsr.toFixed(2))+"} $$"
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
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationshhip between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ \\text{MSE} = \\dfrac{\\text{SSE}}{n-2} $"
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
    var anssee = Math.sqrt(ansmse);
    document.getElementById("output").innerHTML = "$$ s = \\sqrt{\\text{MSE}} = \\sqrt{"+parseFloat(ansmse.toFixed(2))+"} = \\boxed{" + parseFloat(anssee.toFixed(2)) +"} $$"
    MathJax.typeset();
}

function calcsignificance() {
    var val = document.getElementById("sigval").value;
    if (val=="ttest") {
        ttest()
    } else if (val=="ftest") {
        ftest()
    }
}

function ttest(){
    $("#explanation").show(); $("#output2").show(); $("#myCanvas").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient meausures the strength and direction of the linear relationshhip between the dependent and independent variables."
    document.getElementById("formulatext").innerHTML = "$ t = \\dfrac{b_1}{s_{b_1}} $"
    document.getElementById("explanationtext").innerHTML = "An alternative formulation of the correlation coefficient that uses the coefficient of determination."
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var x = str_x.split(",").map(Number); var n_x = x.length; var size = n_x; var sizem1 = size - 1;  var sizem2 = size - 2;
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

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(70, 103);
        ctx.lineTo(70, 130);
        ctx.lineTo(21, 130);
        ctx.lineTo(21, 118);
        ctx.quadraticCurveTo(40, 120, 70, 103);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();
        
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


        ctx.moveTo(70, 135);
        ctx.lineTo(70, 125);
        ctx.moveTo(230, 135);
        ctx.lineTo(230, 125);


        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145);
        ctx.fillText("p-value",25,105);
        ctx.fillText("p-value",245,105);


            ctx.fillText("t",285,132);
            ctx.fillText((-Math.abs(test.toFixed(2))),66,145);
            ctx.fillText(Math.abs(test.toFixed(2)),226,145); 
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
    
        table41 = "<td colspan='7'>$\\text{Student's t-Distribution Table}$</td>"
    
        table4 = "<td></td><td colspan='6' style='border-bottom: thin solid'>$\\text{Area in Upper Tail}$</td>"
    
    
        var cvalsymb1 = "-t_{\\alpha / 2}";
        var cvalsymb2 = "t_{\\alpha / 2}";
        var pvalhalf = normalcdf(test);
        if (pvalhalf > .2) {
            var pvalh = ".20 \\text{ to } 1"
            table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td bgcolor='lightgray'>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.2 && pvalhalf >.1) {
            var pvalh = ".10 \\text{ to } .20"
            table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td bgcolor='lightgray'>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td bgcolor='lightgray'>$"+tinv(.20,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.1 && pvalhalf >.05) {
            var pvalh = ".05 \\text{ to } .10"
            table5 = "<td>$df$</td><td>$.20$</td><td bgcolor='lightgray'>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.05 && pvalhalf >.025) {
            var pvalh = ".025 \\text{ to } .05"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.025 && pvalhalf >.01) {
            var pvalh = ".01 \\text{ to } .025"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td bgcolor='lightgray'>$.01$</td><td>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,size).toFixed(3)+"$</td><td>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.01 && pvalhalf >.005) {
            var pvalh = ".005 \\text{ to } .01"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td bgcolor='lightgray'>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,size).toFixed(3)+"$</td>"
        } else if (pvalhalf <.005) {
            var pvalh = "0 \\text{ to } .005"
            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>"
    
            table61 = "<td>$"+ sizem2 +"$</td><td>$"+tinv(.20,sizem2).toFixed(3)+"$</td><td>$"+tinv(.10,sizem2).toFixed(3)+"$</td><td>$"+tinv(.05,sizem2).toFixed(3)+"$</td><td>$"+tinv(.025,sizem2).toFixed(3)+"$</td><td>$"+tinv(.01,sizem2).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,sizem2).toFixed(3)+"$</td>"

            table6 = "<td bgcolor='lightgray'>$"+ sizem1 +"$</td><td bgcolor='lightgray'>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"

            table62 = "<td>$"+ size +"$</td><td>$"+tinv(.20,size).toFixed(3)+"$</td><td>$"+tinv(.10,size).toFixed(3)+"$</td><td>$"+tinv(.05,size).toFixed(3)+"$</td><td>$"+tinv(.025,size).toFixed(3)+"$</td><td>$"+tinv(.01,size).toFixed(3)+"$</td><td bgcolor='lightgray'>$"+tinv(.005,size).toFixed(3)+"$</td>"
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
        //var ctwo1 = tctwo1; var ctwo2 = tctwo2; 
    
    
    
    
    var tablep = "<table><tr>"+table41+"</tr><tr style='border-top: thin solid;'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table61+"</tr><tr>"+table6+"</tr><tr>"+table62+"</tr></table>"
    
    //$$ s_{b_1} = \\frac{s}{\\sqrt{\\sum(x-\\bar{x})^2}} = \\frac{"+parseFloat(anssee.toFixed(2))+"}{\\sqrt{"+parseFloat(sum_xminusx_bar2.toFixed(2))+"}} = " + parseFloat(ansses.toFixed(2)) +" $$
    
    
    document.getElementById("output").innerHTML = "$$ \\text{Test Statistic:} $$ $$ t = \\frac{b_1}{s_{b_1}} = \\frac{"+ansslope.toFixed(2)+"}{"+ansses.toFixed(2)+"} = {\\color{RoyalBlue}" + anststat.toFixed(2) +"} $$ $$ \\text{Degrees of Freedom:} $$ $$ df = n - 1 = "+size+" - 1 = {\\color{RoyalBlue}"+(size-1)+"} $$ $ \\text{p-Value Approach:} $ "
    
    document.getElementById("output2").innerHTML = tablep+"$$ \\begin{align} \\text{p-value}&=2*P(t \\geq "+testtwo.toFixed(2)+" ) \\\\ &= 2*" + pvalh+ " = "+pval+" \\end{align} $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } p\\text{-value} \\leq \\alpha $$ $$ p \\text{-value}=+pval+pinequ+\\alpha = +alpha+$$ $$ \\text{Conclusion: } \\boxed{ + concl +} $$"
    
    
    //document.getElementById("output").innerHTML = "$$ \\begin{align} t &= \\frac{b_1}{s_{b_1}} \\\\ &= \\frac{"+ansslope.toFixed(2)+"}{"+ansses.toFixed(2)+"} \\\\ &= \\boxed{" + anststat.toFixed(2) +"} \\end{align} $$ $$ \\begin{align} \\text{p-value}&=2*P(t \\leq "+anststatneg.toFixed(2)+" ) \\\\ &= 2*" + zptwo.toFixed(4)+ " = "+zptwo2.toFixed(4)+" \\end{align} $$ $$\\text{p-value}="+zptwo2.toFixed(4)+"\\leq \\alpha = .05 $$ $$ \\textbf{Conclusion:} \\text{ There is a significant linear relationship between x and y} $$"
    MathJax.typeset();
}

function ftest(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The estimated regression equation is used to predict the dependent variable (y) for a given value of the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$ F = \\dfrac{MSR}{MSE} $ "
    document.getElementById("explanationtext").innerHTML = "The estimated regression equation is found by plugging in the values of the slope and intercept into the formula."
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
    var anststat = ansslope / ansses; var ansmsr = ansssr;
    var ansfstat = ansmsr / ansmse;
    document.getElementById("output").innerHTML = "$$ \\text{Test Statistic:} $$ $$ F = \\frac{\\text{MSR}}{\\text{MSE}} = \\frac{"+ansmsr.toFixed(2)+"}{"+ansmse.toFixed(2)+"} = {\\color{RoyalBlue}"+ ansfstat.toFixed(2) + "} $$ $$ \\text{Degrees of Freedom:} $$ $$ \\text{Numerator } df = \\text{number of } x \\text{'s} = {\\color{RoyalBlue} 1 } $$ $$ \\text{Denominator } df = n - 2 = "+size+" - 2 = {\\color{RoyalBlue}"+(size-2)+"} $$"
    MathJax.typeset();
}

function confinterval() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The confidence interval provides an interval estimate for the expected value of y."
    document.getElementById("formulatext").innerHTML = "$ \\hat{y}_p \\pm t_{\\alpha/2} s_{\\hat{y}_p} $ "
    document.getElementById("explanationtext").innerHTML = "The estimated regression equation is found by plugging in the values of the slope and intercept into the formula."
    var xvalue = document.getElementById("xpvalue").value;
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var conlev = document.getElementById("conlev").value;
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
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var size = n_x; var sizem1 = size - 2
    var talphahalf = tinv(alphahalf,sizem1);
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    
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
    var ansans = anssee * Math.sqrt(1/n_x + ((xvalue-mean_x)^2)/sum_xminusx_bar2)
    var marginerror = talphahalf * ansans
    var anslow = ans - marginerror; var anshigh = (parseFloat(ans)+marginerror);
    
    table4 = "<td></td><td colspan='6'>$\\text{Area in Upper Tail}$</td>"
    
    table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
    table6 = "<td>$"+ sizem1 +"$</td><td>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"
    
    
    var tablet = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table6+"</tr></table>"
    
    document.getElementById("output").innerHTML = "$$ \\hat{y}_p = b_0 + b_1 x_p = "+parseFloat(ansint.toFixed(2))+" + "+parseFloat(ansslope.toFixed(2))+" (" + xvalue + ")  = " + parseFloat(ans.toFixed(2)) + " $$ $$ \\begin{align} s_{\\hat{y}_p} &= s \\sqrt{ \\frac{1}{n} + \\frac{(x_p - \\bar{x})^2}{\\sum{(x-\\bar{x})^2}}} \\\\ &= "+parseFloat(anssee.toFixed(2))+" \\sqrt{ \\frac{1}{"+n_x+"} + \\frac{(" + xvalue + " - " + mean_x + ")^2}{"+sum_xminusx_bar2+"}}  = " + parseFloat(ansans.toFixed(2)) + " \\end{align} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3).replace(/^0+/, '') +"$$ $$ df = n - 2 = "+size+ " - 2 = "+sizem1+"   $$" + tablet + "$$ t_{\\alpha/2} = "+talphahalf.toFixed(3)+" $$ $$ \\hat{y}_p \\pm t_{\\alpha/2} s_{\\hat{y}_p} $$ $$" + parseFloat(ans.toFixed(2)) + "\\pm" + talphahalf.toFixed(3) + " ( "+parseFloat(ansans.toFixed(2))+") $$ $$"+parseFloat(ans.toFixed(2)) + "\\pm" +parseFloat(marginerror.toFixed(2)) + "$$ $$ \\boxed{" + parseFloat(anslow.toFixed(2)) + "\\text{ to }" + parseFloat(anshigh.toFixed(2)) + "} $$"
    MathJax.typeset();
}

function predinterval() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The estimated regression equation is used to predict the dependent variable (y) for a given value of the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$ \\hat{y}_p \\pm t_{\\alpha/2} s_{\\text{ind}} $ "
    document.getElementById("explanationtext").innerHTML = "The estimated regression equation is found by plugging in the values of the slope and intercept into the formula."
    var xvalue = document.getElementById("xpvalue").value;
    var str_x = document.getElementById("valuesx").value;
    var str_y = document.getElementById("valuesy").value;
    var conlev = document.getElementById("conlev").value;
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
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var size = n_x; var sizem1 = size - 2
    var talphahalf = tinv(alphahalf,sizem1);
    
    if (ansslope >= 0) {
        var signslope = "+"
    } else if (ansslope < 0) {
        var signslope = "-"
    } 
    
    
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
    var ansans = anssee * Math.sqrt(1 + 1/n_x + ((xvalue-mean_x)^2)/sum_xminusx_bar2)
    var marginerror = talphahalf * ansans
    var anslow = ans - marginerror; var anshigh = (parseFloat(ans)+marginerror);
    
    table4 = "<td></td><td colspan='6'>$\\text{Area in Upper Tail}$</td>"
    
    table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
    table6 = "<td>$"+ sizem1 +"$</td><td>$"+tinv(.20,sizem1).toFixed(3)+"$</td><td>$"+tinv(.10,sizem1).toFixed(3)+"$</td><td>$"+tinv(.05,sizem1).toFixed(3)+"$</td><td>$"+tinv(.025,sizem1).toFixed(3)+"$</td><td>$"+tinv(.01,sizem1).toFixed(3)+"$</td><td>$"+tinv(.005,sizem1).toFixed(3)+"$</td>"
    
    
    var tablet = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table4+"</tr><tr style='border-bottom: thin solid'>"+table5+"</tr><tr>"+table6+"</tr></table>"
    
    document.getElementById("output").innerHTML = "$$ \\hat{y}_p = b_0 + b_1 x_p = "+parseFloat(ansint.toFixed(2))+" + "+parseFloat(ansslope.toFixed(2))+" (" + xvalue + ")  = " + parseFloat(ans.toFixed(2)) + " $$ $$ \\begin{align} s_{\\text{ind}} &= s \\sqrt{1 + \\frac{1}{n} + \\frac{(x_p - \\bar{x})^2}{\\sum{(x-\\bar{x})^2}}} \\\\ &= "+parseFloat(anssee.toFixed(2))+" \\sqrt{1 + \\frac{1}{"+n_x+"} + \\frac{(" + xvalue + " - " + mean_x + ")^2}{"+sum_xminusx_bar2+"}} = " + parseFloat(ansans.toFixed(2)) + " \\end{align} $$ $$ 1 - \\alpha = " + concoeff.toFixed(2).replace(/^0+/, '') + "\\rightarrow \\alpha = "+alpha.toFixed(2).replace(/^0+/, '')+ "\\rightarrow \\alpha / 2 = "+ alphahalf.toFixed(3).replace(/^0+/, '') +"$$ $$ df = "+size+ " - 2 = "+sizem1+"   $$" + tablet + "$$ t_{\\alpha/2} = "+talphahalf.toFixed(3)+" $$ $$ \\hat{y}_p \\pm t_{\\alpha/2} s_{\\text{ind}} $$ $$" + parseFloat(ans.toFixed(2)) + "\\pm" + talphahalf.toFixed(3) + " ( "+parseFloat(ansans.toFixed(2))+") $$ $$"+parseFloat(ans.toFixed(2)) + "\\pm" +parseFloat(marginerror.toFixed(2)) + "$$ $$ \\boxed{" + parseFloat(anslow.toFixed(2)) + "\\text{ to }" + parseFloat(anshigh.toFixed(2)) + "} $$"
    MathJax.typeset();
}

function resplot() {
    var x = document.getElementById("residtypeval").value
    if (x == "againstx") {
        resplotx()
    } else if (x == "againsty") {
        resploty()
    }
}

function resplotx(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$ \\text{Residual} = y - \\hat{y}$"
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
    var rows = n_x; var cols = 6; var residuals = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2))  + " $</td>";
        table += "<td>$" + y[r] + " - " + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2)) + " = " + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "</tr>";
        residuals[r] = parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))
    }
    document.getElementById("output").innerHTML = table + "</table>"
    
    MathJax.typeset();
    
    
    
    var eachnums = x.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = residuals.map(function(v) {
  		return parseFloat(v);
    });

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'x'},
          vAxis: {title: 'y-ŷ'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function resploty(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$\\text{Residual} = y - \\hat{y}$"
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
    var rows = n_x; var cols = 6; var residuals = []; var predictedy = [];
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + y[r] + "$</td>";
        table += "<td>$" + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2))  + " $</td>";
        table += "<td>$" + y[r] + " - " + parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2)) + " = " + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "</tr>";
        residuals[r] = parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))
        predictedy[r] = parseFloat(((parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))
    }
    document.getElementById("output").innerHTML = table + "</table>"
    
    MathJax.typeset();
    
    
    
    var eachnums = predictedy.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = residuals.map(function(v) {
  		return parseFloat(v);
    });

    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'ŷ'},
          vAxis: {title: 'y-ŷ'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function standardized() {
    var x = document.getElementById("residtypeval").value
    if (x == "againstx") {
        standardizedx()
    } else if (x == "againsty") {
        standardizedy()
    }
}

function standardizedx(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$\\text{Standardized Residual} = \\dfrac{y - \\hat{y}}{s_{y - \\hat{y}}}$"
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
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table style='margin-bottom:15px'>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "<br>$x$" + "</td>" + "<td>" + "<br>$s_{y - \\hat{y}}$" + "</td>" + "<td>" + "<br>$y - \\hat{y}$" + "</td>"+ "<td>" + "$\\text{Standardized}$<br>$\\text{Residuals}$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6; var residuals = []; var standres = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "<td>$ \\dfrac{"+parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))+"}{"+parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2))+"} = " + parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))  + " $</td>";
        table += "</tr>";
        residuals[r] = parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))
        standres[r] = parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))
    }
    document.getElementById("output").innerHTML = table + "</table>"
    
    MathJax.typeset();
    
    
    
    var eachnums = x.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = standres.map(function(v) {
  		return parseFloat(v);
    });

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'x'},
          vAxis: {title: 'Standardized Residuals'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function standardizedy(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$\\text{Standardized Residual} = \\dfrac{y - \\hat{y}}{s_{y - \\hat{y}}}$"
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
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table style='margin-bottom:15px'>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "<br>$x$" + "</td>" + "<td>" + "<br>$s_{y - \\hat{y}}$" + "</td>" + "<td>" + "<br>$y - \\hat{y}$" + "</td>"+ "<td>" + "$\\text{Standardized}$<br>$\\text{Residuals}$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6; var predictedy = []; var standres = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "<td>$ \\dfrac{"+parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))+"}{"+parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2))+"} = " + parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))  + " $</td>";
        table += "</tr>";
        predictedy[r] = parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2))
        standres[r] = parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))
    }
    document.getElementById("output").innerHTML = table + "</table>"
    
    MathJax.typeset();
    
    
    
    var eachnums = predictedy.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = standres.map(function(v) {
  		return parseFloat(v);
    });

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'ŷ'},
          vAxis: {title: 'Standardized Residuals'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function standardizedxx(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$\\hat{y} = b_{0} + b_{1} x$"
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
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table style='margin-bottom:15px'>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$x - \\bar{x}$" + "</td>" +"<td>" + "$(x - \\bar{x})^2$" + "</td>"+"<td>" + "$\\dfrac{(x - \\bar{x})^2}{\\sum(x - \\bar{x})^2}$" + "</td>"+"<td>" + "$h$" + "</td>" + "<td>" + "$s_{y - \\hat{y}}$" + "</td>" + "<td>" + "$y - \\hat{y}$" + "</td>"+ "<td>" + "$\\text{Standardized}$<br>$\\text{Residuals}$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6; var residuals = []; var standres = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar2[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((xminusx_bar2[r]/sum_xminusx_bar2).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((1/n_x + xminusx_bar2[r]/sum_xminusx_bar2).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "<td>$" + parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))  + " $</td>";
        table += "</tr>";
        residuals[r] = parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))
        standres[r] = parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))
    }
    document.getElementById("output").innerHTML = table + "</table>"
    
    MathJax.typeset();
    
    
    
    var eachnums = x.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = standres.map(function(v) {
  		return parseFloat(v);
    });

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'x'},
          vAxis: {title: 'Standardized Residuals'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function standardizedyy(){
    $("#explanation").show(); $("#charts").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$\\hat{y} = b_{0} + b_{1} x$"
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
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table style='margin-bottom:15px'>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$x - \\bar{x}$" + "</td>" +"<td>" + "$(x - \\bar{x})^2$" + "</td>"+"<td>" + "$\\dfrac{(x - \\bar{x})^2}{\\sum(x - \\bar{x})^2}$" + "</td>"+"<td>" + "$h$" + "</td>" + "<td>" + "$s_{y - \\hat{y}}$" + "</td>" + "<td>" + "$y - \\hat{y}$" + "</td>"+ "<td>" + "$\\text{Standardized}$<br>$\\text{Residuals}$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6; var predictedy = []; var standres = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar2[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((xminusx_bar2[r]/sum_xminusx_bar2).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((1/n_x + xminusx_bar2[r]/sum_xminusx_bar2).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2))).toFixed(2)) + " $</td>";
        table += "<td>$" + parseFloat((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r])).toFixed(2))  + " $</td>";
        table += "<td>$" + parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))  + " $</td>";
        table += "</tr>";
        predictedy[r] = parseFloat((parseFloat(ansint)+parseFloat(ansslope)*x[r]).toFixed(2))
        standres[r] = parseFloat(((y[r] - (parseFloat(ansint)+parseFloat(ansslope)*x[r]))/(anssee * Math.sqrt(1-(1/n_x + xminusx_bar2[r]/sum_xminusx_bar2)))).toFixed(2))
    }
    document.getElementById("output").innerHTML = table + "</table>"
    
    MathJax.typeset();
    
    
    
    var eachnums = predictedy.map(function(v) {
  		return parseFloat(v);
    });
    var eachnums2 = standres.map(function(v) {
  		return parseFloat(v);
    });

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ eachnums[0], eachnums2[0]],
          [ eachnums[1], eachnums2[1]],
          [ eachnums[2], eachnums2[2]],
          [ eachnums[3], eachnums2[3]],
          [ eachnums[4], eachnums2[4]],
          [ eachnums[5], eachnums2[5]],
          [ eachnums[6], eachnums2[6]],
          [ eachnums[7], eachnums2[7]],
          [ eachnums[8], eachnums2[8]],
          [ eachnums[9], eachnums2[9]],
          [ eachnums[10], eachnums2[10]],
          [ eachnums[11], eachnums2[11]],
          [ eachnums[12], eachnums2[12]],
          [ eachnums[13], eachnums2[13]],
          [ eachnums[14], eachnums2[14]],
          [ eachnums[15], eachnums2[15]],
          [ eachnums[16], eachnums2[16]],
          [ eachnums[17], eachnums2[17]],
          [ eachnums[18], eachnums2[18]],
          [ eachnums[19], eachnums2[19]],
          [ eachnums[20], eachnums2[20]],
          [ eachnums[21], eachnums2[21]],
          [ eachnums[22], eachnums2[22]],
          [ eachnums[23], eachnums2[23]],
          [ eachnums[24], eachnums2[24]],
          [ eachnums[25], eachnums2[25]],
          [ eachnums[26], eachnums2[26]],
          [ eachnums[27], eachnums2[27]],
          [ eachnums[28], eachnums2[28]],
          [ eachnums[29], eachnums2[29]],
          [ eachnums[30], eachnums2[30]],
          [ eachnums[31], eachnums2[31]],
          [ eachnums[32], eachnums2[32]],
          [ eachnums[33], eachnums2[33]],
          [ eachnums[34], eachnums2[34]],
          [ eachnums[35], eachnums2[35]],
          [ eachnums[36], eachnums2[36]],
          [ eachnums[37], eachnums2[37]],
          [ eachnums[38], eachnums2[38]],
          [ eachnums[39], eachnums2[39]],
          [ eachnums[40], eachnums2[40]],
          [ eachnums[41], eachnums2[41]],
          [ eachnums[42], eachnums2[42]],
          [ eachnums[43], eachnums2[43]],
          [ eachnums[44], eachnums2[44]],
          [ eachnums[45], eachnums2[45]],
          [ eachnums[46], eachnums2[46]],
          [ eachnums[47], eachnums2[47]],
          [ eachnums[48], eachnums2[48]],
          [ eachnums[49], eachnums2[49]]
        ]);

        var options = {
          hAxis: {title: 'ŷ'},
          vAxis: {title: 'Standardized Residuals'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }

}

function leverage(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The slope of the estimated regression equation is the predicted increase in the dependent variable (y) that results from a one-unit increase in the independent variable (x)."
    document.getElementById("formulatext").innerHTML = "$ h = \\dfrac{1}{n} + \\dfrac{(x - \\bar{x})^2}{\\sum(x - \\bar{x})^2} $"
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
    
    var interpret = ""
    if (ansslope > 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>increase by "+parseFloat(ansslope.toFixed(2))+" units </u>on average."
    } else if (ansslope < 0){
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is predicted to <u>decrease by "+parseFloat(Math.abs(ansslope.toFixed(2)))+" units</u> on average."
    } else {
        var interpret = "<b>Interpretation:</b> For every one-unit increase in x, y is neither predicted to <u>increase nor decrease</u> on average."
    }
    var table = "<table style='margin-bottom:15px'>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$x - \\bar{x}$" + "</td>" +"<td>" + "$(x - \\bar{x})^2$" + "</td>"+"<td>" + "$\\text{Leverage }(h)$" + "</td>" + "</tr>";
    var rows = n_x; var cols = 6; var residuals = []; var standres = []
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + x[r] + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(xminusx_bar2[r].toFixed(2)) + "$</td>";
        table += "<td>$ \\dfrac{1}{"+n_x+"}+\\dfrac{"+parseFloat(xminusx_bar[r].toFixed(2))+"}{"+parseFloat(xminusx_bar2[r].toFixed(2))+"}=" + parseFloat((1/n_x + xminusx_bar2[r]/sum_xminusx_bar2).toFixed(2)) + " $</td>";
    }
    document.getElementById("output").innerHTML = table + "</table>"
    
    MathJax.typeset();

}

function examplevalues(){
    var x = document.getElementById("stat").value;
    document.getElementById('valuesx').value="2, 4, 6, 8, 10"
    document.getElementById('valuesy').value="9, 14, 7, 18, 27"
    if (x == "prediction") {
        document.getElementById('xvalue').value="5"
    } else if (x == "confinterval" || x == "predinterval") {
        document.getElementById('xpvalue').value="5"
    } 
}

function examplevalues2(){
    var x = document.getElementById("stat").value;
    document.getElementById('valuesx').value="4, 12, 8, 16, 10"
    document.getElementById('valuesy').value="45, 35, 45, 15, 25"
    if (x == "prediction") {
        document.getElementById('xvalue').value="14"
    } else if (x == "confinterval" || x == "predinterval") {
        document.getElementById('xpvalue').value="14"
    } 
}

