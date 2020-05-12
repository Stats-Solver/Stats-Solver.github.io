function hyptest(){
    var tail = document.getElementById("tail").value;
    var sigma = document.getElementById("sigma").value;
    var muknot = document.getElementById("muknot").value;
    var size = document.getElementById("size").value;
    var xbar = document.getElementById("xbar").value;
    var stdev = document.getElementById("stdev").value;
    var alpha = document.getElementById("alpha").value;
    var test = (xbar-muknot)/(stdev/Math.sqrt(size));
    if (sigma == "known" && tail == "lower"){
        document.getElementById("output").innerHTML = "Lower-Tail Test ($\\sigma$ Known) $$\\text{Test Statistic}: z=\\frac{\\bar{x}-\\mu_o}{\\sigma/\\sqrt{n}}=\\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}}$$ $$\\text{p-Value Approach}$$ $$\\text{p-Value}=P(z \\leq "+test+" )$$"
    } else if (sigma == "known" && tail == "upper"){
        document.getElementById("output").innerHTML = "Upper-Tail Test ($\\sigma$ Known) $$\\text{Test Statistic}: z=\\frac{\\bar{x}-\\mu_o}{\\sigma/\\sqrt{n}}=\\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}}$$ $$\\text{p-Value Approach}$$ $$\\text{p-Value}=P(z \\geq "+test+" )$$"
    } else if (sigma == "known" && tail == "two"){
        document.getElementById("output").innerHTML = "Two-Tailed Test ($\\sigma$ Known) $$\\text{Test Statistic}: z=\\frac{\\bar{x}-\\mu_o}{\\sigma/\\sqrt{n}}=\\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}}$$ $$\\text{p-Value Approach}$$ $$\\text{p-Value}=P(z \\leq "+test+" )$$"
    } else if (sigma == "unknown" && tail == "lower"){
        document.getElementById("output").innerHTML = "Lower-Tail Test ($\\sigma$ Unknown) $$\\text{Test Statistic}: z=\\frac{\\bar{x}-\\mu_o}{\\sigma/\\sqrt{n}}=\\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}}$$ $$\\text{p-Value Approach}$$ $$\\text{p-Value}=P(z \\leq "+test+" )$$"
    } else if (sigma == "unknown" && tail == "upper"){
        document.getElementById("output").innerHTML = "Upper-Tail Test ($\\sigma$ Unknown) $$\\text{Test Statistic}: z=\\frac{\\bar{x}-\\mu_o}{\\sigma/\\sqrt{n}}=\\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}}$$ $$\\text{p-Value Approach}$$ $$\\text{p-Value}=P(z \\geq "+test+" )$$"
    } else if (sigma == "unknown" && tail == "two"){
        document.getElementById("output").innerHTML = "Two-Tailed Test ($\\sigma$ Unknown) $$\\text{Test Statistic}: z=\\frac{\\bar{x}-\\mu_o}{\\sigma/\\sqrt{n}}=\\frac{"+xbar+"-"+muknot+"}{"+stdev+"/ \\sqrt{"+size+"}}$$ $$\\text{p-Value Approach}$$ $$\\text{p-Value}=P(z \\leq "+test+" )$$"
    }else{
        document.getElementById("output").innerHTML = ""
    }
    MathJax.typeset();
}