$("#values").hide(); $("#enterstats").hide();
$("#expconf").hide();

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

function conint(){
    $("#expconf").show();
    var sigma = document.getElementById("sigma").value;
    var size = document.getElementById("size").value;
    var xbar = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var conlev = document.getElementById("conlev").value;
    var concoeff = .01*conlev; var alpha = 1 - concoeff; var alphahalf = alpha / 2;
    var zalphahalf = NormSInv(1 - alphahalf);
    var marginerror = zalphahalf * (stdev / Math.sqrt(size));
    var anslow = xbar - marginerror; var anshigh = parseInt(xbar) + parseInt(marginerror);
    
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
    
    ctx.fillText("0",150,145);
    ctx.fillText("z",285,132);
    ctx.fillText("Zα/2 = "+zalphahalf.toFixed(2),220,145);
    ctx.fillText("α/2 = "+alphahalf,250,100);
     
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
        table2 += "<td>" + normalcdf(parseFloat(zvaluemin1) + parseFloat(.01*r)).toFixed(3) + "</td>";
    }
    
    table3 = []
    for (var r = 0; r < 10; r++){
        table3 += "<td>" + normalcdf(parseFloat(zvalue) + parseFloat(.01*r)).toFixed(3) + "</td>";
    }
    
    var table = "<table border=1><tr><td>z</td>"+table1+"</tr><tr><td>"+zvalue+"</td>"+table3+"</tr></table>"
    
    
    if (sigma == "known") {
        document.getElementById("output2").innerHTML = table + " $$" + xbar + "\\pm" + zalphahalf.toFixed(2) + "\\frac{"+stdev+"}{\\sqrt{"+size+"}}$$ $$"+xbar + "\\pm" +marginerror.toFixed(2) + "$$ $$" + anslow.toFixed(2) + "\\text{ to }" + anshigh.toFixed(2) + " $$"
    } else if (sigma == "unknown") {
        document.getElementById("output2").innerHTML = table + " $$" + xbar + "\\pm" + zalphahalf.toFixed(2) + "\\frac{"+stdev+"}{\\sqrt{"+size+"}}$$ $$"+xbar + "\\pm" +marginerror.toFixed(2) + "$$ $$" + anslow.toFixed(2) + "\\text{ to }" + anshigh.toFixed(2) + " $$"
    } 
    
    MathJax.typeset();
}