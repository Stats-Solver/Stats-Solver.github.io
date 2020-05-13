$("#greater").hide(); $("#notequal").hide();

function tailsigns() {
    var x = document.getElementById("tail").value;
    if (x == "lower"){
        $("#less").show();
        $("#greater").hide();
        $("#notequal").hide();
    } else if (x == "upper"){
        $("#less").hide();
        $("#greater").show();
        $("#notequal").hide();
    } else if (x == "two") {
        $("#less").hide();
        $("#greater").hide();
        $("#notequal").show();
    } 
}

function muknotval() {
    var x = document.getElementById("muknot").value;
    document.getElementById("muknotvalue").innerHTML = x;
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

function hyptest(){
    var tail = document.getElementById("tail").value;
    var sigma = document.getElementById("sigma").value;
    var muknot = document.getElementById("muknot").value;
    var size = document.getElementById("size").value;
    var xbar = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var alpha = document.getElementById("alpha").value;
    var test = (xbar-muknot)/(stdev/Math.sqrt(size));
    var testtwo = -Math.abs(test);
    var zpless = normalcdf(test); var zpmore = 1 - normalcdf(test);
    var zptwo = normalcdf(testtwo); var zptwo2 = 2 * zptwo;
    var zcless = NormSInv(alpha); var zcmore = Math.abs(NormSInv(alpha))
    if (sigma == "known" && tail == "lower"){
        var testtype = "Lower-Tail Test"
        var testsymb = "z";
        var tailsign = "\\leq";
        var stndsymb = "\\sigma"
        var cvalsymb = "-z_\\alpha";
        var pvalue = normalcdf(test);
    } else if (sigma == "known" && tail == "upper"){
        var testtype = "Upper-Tail Test"
        var testsymb = "z";
        var tailsign = "\\geq";
        var stndsymb = "\\sigma"
        var cvalsymb = "z_\\alpha";
        var pvalue = 1 - normalcdf(test);
    } else if (sigma == "known" && tail == "two"){
        var testtype = "Two-Tailed Test"
        var testsymb = "z";
        var tailsign = "=";
        var stndsymb = "\\sigma"
        var cvalsymb1 = "-z_{\\alpha / 2}";
        var cvalsymb2 = "z_{\\alpha / 2}";
        var pvalhalf = normalcdf(testtwo);
        var pvalue = 2 * pvalhalf;
    } else if (sigma == "unknown" && tail == "lower"){
        var testtype = "Lower-Tail Test"
        var testsymb = "t";
        var tailsign = "\\geq";
        var stndsymb = "s"
        var cvalsymb = "-t_\\alpha";
    } else if (sigma == "unknown" && tail == "upper"){
        var testtype = "Upper-Tail Test"
        var testsymb = "t";
        var tailsign = "\\leq";
        var stndsymb = "s"
        var cvalsymb = "t_\\alpha";
    } else if (sigma == "unknown" && tail == "two"){
        var testtype = "Two-Tailed Test"
        var testsymb = "t";
        var tailsign = "=";
        var stndsymb = "s"
        var cvalsymb1 = "-t_{\\alpha / 2}";
        var cvalsymb2 = "t_{\\alpha / 2}";
    }
    
    if (pvalue <= alpha) {
        var concl = "\\text{Reject } H_o"
    } else if (pvalue > alpha) {
        var concl = "\\text{Do Not Reject } H_o"
    }
    
    if (tail == "lower" || tail == "upper") {
        document.getElementById("output").innerHTML = testtype + " $$\\text{Test Statistic: }"+testsymb+" =\\frac{\\bar{x}-\\mu_o}{"+stndsymb+"/\\sqrt{n}}=\\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}} = "+test.toFixed(2)+"$$ <u>p-Value Approach<u> $$\\text{p-value}=P("+testsymb+tailsign+test.toFixed(2)+" ) =" + pvalue.toFixed(4)+ "$$ $$\\text{p-value}="+pvalue.toFixed(4)+"\\leq \\alpha = "+alpha+"$$ $$ \\text{Conclusion: }"+concl+" $$ Critical Value Approach $$ \\text{Critical Value: }"+cvalsymb+" = " + zcless.toFixed(2) + "$$ $$z="+test.toFixed(2) +"\\leq "+cvalsymb+" = "+zcless.toFixed(2)+"$$ $$ \\text{Conclusion: }" + concl + "$$"
    } else if (tail == "two") {
        document.getElementById("output").innerHTML = testtype + " $$\\text{Test Statistic: }"+testsymb+" =\\frac{\\bar{x}-\\mu_o}{"+stndsymb+"/\\sqrt{n}}=\\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}} = "+test.toFixed(2)+"$$ <u>p-Value Approach<u> $$\\text{p-value}=2*P("+testsymb+" \\leq "+testtwo.toFixed(2)+" ) = 2*" + zptwo.toFixed(4)+ " = "+zptwo2.toFixed(4)+" $$ $$\\text{p-value}="+zptwo2.toFixed(4)+"\\leq \\alpha = "+alpha+"$$ $$ \\text{Conclusion: }" + concl +" $$ Critical Value Approach $$ \\text{Critical Values: }"+cvalsymb1+" = " + zcless.toFixed(2) + " \\text{ and } "+cvalsymb2+" = "+zcless.toFixed(2) + "$$ $$z="+test.toFixed(2) +"\\leq "+cvalsymb+" = "+zcless.toFixed(2)+"$$ $$ \\text{Conclusion: }" + concl + "$$"
    }
    
    MathJax.typeset();
}