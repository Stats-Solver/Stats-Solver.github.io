$("#next").hide(); $("#hint").hide(); 
hintval = 1



    $("#practice").show(); $("#start").hide();
    rand0 = Math.floor(Math.random() * 12) + 1;
    //rand0 = 15
    if (rand0 == 1) {
        question1()
    } else if (rand0 == 2) {
        question2()
    } else if (rand0 == 3) {
        question3()
    } else if (rand0 == 4) {
        question4()
    } else if (rand0 == 5) {
        question5()
    } else if (rand0 == 6) {
        question6()
    } else if (rand0 == 7) {
        question7()
    } else if (rand0 == 8) {
        question8()
    } else if (rand0 == 9) {
        question9()
    } else if (rand0 == 10) {
        question10()
    } else if (rand0 == 11) {
        question11()
    } else if (rand0 == 12) {
        question12()
    } else if (rand0 == 13) {
        question13()
    } else if (rand0 == 14) {
        question14()
    } else if (rand0 == 15) {
        question15()
    }

function showhint() {
    if (hintval==1) {
        $("#hint").show();
        hintval = 2
    } else if (hintval==2) {
        $("#hint").hide();
        hintval = 1
    }
    
}

function solve() {
    var x = document.getElementById("ans").value
    if (question == 1) {
        var ans = rand1/10
        if (x == ans) {
            correct1()
        } else {
            wrong1()
        }
    } else if (question == 2) {
        var ans = rand2 + 1
        if (x == ans) {
            correct2()
        } else {
            wrong2()
        }
    } else if (question == 3) {
        var ans = rand3
        if (x == ans) {
            correct3()
        } else {
            wrong3()
        }
    } else if (question == 4) {
        var ans = rand4/10
        if (x == ans) {
            correct4()
        } else {
            wrong4()
        }
    } else if (question == 5) {
        var ans = rand5
        if (x == ans) {
            correct5()
        } else {
            wrong5()
        }
    } else if (question == 6) {
        var ans = rand6 - 10
        if (x == ans) {
            correct6()
        } else {
            wrong6()
        }
    } else if (question == 7) {
        var ans = rand7 - 2
        if (x == ans) {
            correct7()
        } else {
            wrong7()
        }
    } else if (question == 8) {
        var ans = rand8/5
        if (x == ans) {
            correct8()
        } else {
            wrong8()
        }
    } else if (question == 9) {
        var ans = Math.sqrt(rand9)
        if (x == ans) {
            correct9()
        } else {
            wrong9()
        }
    } else if (question == 10) {
        var ans = rand10*10
        if (x == ans) {
            correct10()
        } else {
            wrong10()
        }
    } else if (question == 11) {
        var ans = (rand11-10)/2
        if (x == ans) {
            correct11()
        } else {
            wrong11()
        }
    } else if (question == 12) {
        var ans = Math.round(100*(1-1/(rand12*rand12)))
        if (x == ans) {
            correct12()
        } else {
            wrong12()
        }
    } else if (question == 13) {
        var ans = rand13v
        if (x == ans) {
            correct13()
        } else {
            wrong13()
        }
    } else if (question == 14) {
        var ans = rand14/9
        if (x == ans) {
            correct14()
        } else {
            wrong14()
        }
    } else if (question == 15) {
        var ans = rand15/10
        if (x == ans) {
            correct15()
        } else {
            wrong15()
        }
    }
}

function next() {
    $("#next").hide(); $("#solve").show(); $("#showhint").show();
    $("#output").empty(); $("#output2").empty(); $("#output3").empty(); $("#output4").empty();
    rand = Math.floor(Math.random() * 15) + 1;
    if (rand == 1) {
        question1()
    } else if (rand == 2) {
        question2()
    } else if (rand == 3) {
        question3()
    } else if (rand == 4) {
        question4()
    } else if (rand == 5) {
        question5()
    } else if (rand == 6) {
        question6()
    } else if (rand == 7) {
        question7()
    } else if (rand == 8) {
        question8()
    } else if (rand == 9) {
        question9()
    } else if (rand == 10) {
        question10()
    } else if (rand == 11) {
        question11()
    } else if (rand == 12) {
        question12()
    } else if (rand == 13) {
        question13()
    } else if (rand == 14) {
        question14()
    } else if (rand == 15) {
        question15()
    }
}






// Measures of Location - Mean, Median, Mode, Percentiles, Quartiles







function question1() {
    rand1 = 10*Math.floor(Math.random() * 8) + 20;
    question = 1; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that $\\sum{x} = "+rand1+"$ and the sample size is $10$. What is the sample mean?"
    document.getElementById("hint").innerHTML = "$ \\bar{x} = \\dfrac{\\sum x}{n} $"
    MathJax.typeset();
}

function correct1() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\bar{x} = \\dfrac{\\sum x}{n} = \\dfrac{"+rand1+"}{10} = "+rand1/10+" $"
    MathJax.typeset();
}

function wrong1() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\bar{x} = \\dfrac{\\sum x}{n} = \\dfrac{"+rand1+"}{10} \\neq "+ans+" $"
    MathJax.typeset();
}

function question2() {
    rand2 = Math.floor(Math.random() * 7) + 11;
    question = 2; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "A sample with an even number of values has middle values "+rand2+" and "+(rand2+2)+". What is the median?"
    document.getElementById("hint").innerHTML = "When there's an even number of values,<br> median = average of two middle values"
    MathJax.typeset();
}

function correct2() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Median} = \\dfrac{"+rand2+"+"+(rand2+2)+"}{2} = "+(rand2+1)+" $"
    MathJax.typeset();
}

function wrong2() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Median} = \\dfrac{"+rand2+"+"+(rand2+2)+"}{2} \\neq "+ans+" $"
    MathJax.typeset();
}

function question3() {
    rand3 = Math.floor(Math.random() * 9) + 1;
    question = 3; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "A sample has values "+(rand3+3)+", "+rand3+", "+(rand3+4)+", "+(rand3+1)+", "+rand3+". What is the mode?"
    document.getElementById("hint").innerHTML = "Mode = value that occurs with highest frequency"
    MathJax.typeset();
}

function correct3() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = " $ \\text{Mode} = "+rand3+" $"
    MathJax.typeset();
}

function wrong3() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = " $ \\text{Mode} \\neq "+ans+" $"
    MathJax.typeset();
}

function question4() {
    rand4 = 10*Math.floor(Math.random() * 8) + 20;
    question = 4; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that the sample size is $10$. What is the index for the $"+rand4+"$th percentile?"
    document.getElementById("hint").innerHTML = "$i=\\left(\\dfrac{p}{100}\\right)n$"
    MathJax.typeset();
}

function correct4() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$i=\\left(\\dfrac{p}{100}\\right)n=\\left(\\dfrac{"+rand4+"}{100}\\right)10="+(rand4/10)+"$"
    MathJax.typeset();
}

function wrong4() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$i=\\left(\\dfrac{p}{100}\\right)n=\\left(\\dfrac{"+rand4+"}{100}\\right)10 \\neq "+ans+"$"
    MathJax.typeset();
}

function question5() {
    rand5 = Math.floor(Math.random() * 7) + 25;
    question = 5; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "A sample with an odd number of values has middle values "+(rand5-3)+", "+rand5+", "+(rand5+4)+". What is the median?"
    document.getElementById("hint").innerHTML = "When there are an odd number of values,<br> median = middle value"
    MathJax.typeset();
}

function correct5() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = " $ \\text{Median} = "+rand5+" $"
    MathJax.typeset();
}

function wrong5() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Median} \\neq "+ans+" $"
    MathJax.typeset();
}






// Measures of Variability - Range, Interquartile Range, Variance, Standard Deviation








function question6() {
    rand6 = Math.floor(Math.random() * 7) + 21;
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose a sample has a maximum value of "+rand6+" and a minimum value of 10. What is the range?"
    document.getElementById("hint").innerHTML = "$ \\text{Range} = \\text{Largest Value} - \\text{Smallest Value} $"
    MathJax.typeset();
}

function correct6() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = " $ \\text{Range} = "+rand6+" - 10 = "+(rand6-10)+" $"
    MathJax.typeset();
}

function wrong6() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = " $ \\text{Range} = "+rand6+" - 10 \\neq "+ans+" $"
    MathJax.typeset();
}

function question7() {
    rand7 = Math.floor(Math.random() * 9) + 7;
    question = 7; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose a sample has a third quartile of $"+rand7+"$ and a first quartile of $2$. What is the interquartile range?"
    document.getElementById("hint").innerHTML = "$ \\text{IQR} = Q_3 - Q_1 $"
    MathJax.typeset();
}

function correct7() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = " $ \\text{Range} = "+rand7+" - 2 = "+(rand7-2)+" $"
    MathJax.typeset();
}

function wrong7() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = " $ \\text{IQR} = "+rand7+" - 2 \\neq "+ans+" $"
    MathJax.typeset();
}

function question8() {
    rand8 = 5*Math.floor(Math.random() * 8) + 20;
    question = 8; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that $\\sum(x-\\bar{x})^2 = "+rand8+"$ and the sample size is $6$. What is the sample variance?"
    document.getElementById("hint").innerHTML = "$s^2=\\dfrac{\\sum\\left( x - \\bar{x}\\right)^2}{n-1}$"
    MathJax.typeset();
}

function correct8() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$s^2=\\dfrac{\\sum\\left( x - \\bar{x}\\right)^2}{n-1}=\\dfrac{"+rand8+"}{6-1}="+(rand8/5)+" $"
    MathJax.typeset();
}

function wrong8() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$s^2=\\dfrac{\\sum\\left( x - \\bar{x}\\right)^2}{n-1}=\\dfrac{"+rand8+"}{6-1} \\neq "+ans+" $"
    MathJax.typeset();
}

function question9() {
    rand9 = Math.pow(Math.floor(Math.random() * 8) + 2, 2)
    question = 9; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose the sample variance is $"+rand9+"$. What is the sample standard deviation?"
    document.getElementById("hint").innerHTML = "$s=\\sqrt{s^2}$"
    MathJax.typeset();
}

function correct9() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$s=\\sqrt{s^2}=\\sqrt{"+rand9+"}="+Math.sqrt(rand9)+"$"
    MathJax.typeset();
}

function wrong9() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$s=\\sqrt{s^2}=\\sqrt{"+rand9+"} \\neq "+ans+"$"
    MathJax.typeset();
}

function question10() {
    rand10 = Math.floor(Math.random() * 8) + 2;
    question = 10; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose the standard deviation is "+rand10+" and the mean is 10. What is the value of the coeffient of variation?"
    document.getElementById("hint").innerHTML = "$\\text{CV} = \\left(\\dfrac{\\text{Standard Deviation}}{\\text{Mean}}\\times 100\\right)\\%$"
    MathJax.typeset();
}

function correct10() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$\\text{CV} = \\left(\\dfrac{\\text{"+rand10+"}}{\\text{10}}\\times 100\\right)\\% = "+(rand10*10)+"\\%$"
    MathJax.typeset();
}

function wrong10() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$\\text{CV} = \\left(\\dfrac{\\text{"+rand10+"}}{\\text{10}}\\times 100\\right)\\% \\neq "+ans+"\\%$"
    MathJax.typeset();
}






// Measures of Relative Location - z-Scores, Chebyshev's Theorem, Empirical Rule





function question11() {
    rand11 = 2*Math.floor(Math.random() * 7) + 4;
    question = 11; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose the sample mean is $10$ and the sample standard deviation is $2$. What is the z-score for the value $"+rand11+"$?"
    document.getElementById("hint").innerHTML = "$ z = \\dfrac{x-\\bar{x}}{s} $"
    MathJax.typeset();
}

function correct11() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ z = \\dfrac{"+rand11+"-10}{2} = "+(rand11-10)/2+" $"
    MathJax.typeset();
}

function wrong11() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ z = \\dfrac{"+rand11+"-10}{2} \\neq "+ans+" $"
    MathJax.typeset();
}

function question12() {
    rand12 = Math.floor(Math.random() * 3) + 2;
    question = 12; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "According to Chevbyshev's Theorem, at least what percent of values must be between $"+rand12+"$ standard deviations of the mean?"
    document.getElementById("hint").innerHTML = "Chevbyshev's Theorem: At least $(1-1/z^2)$% of the data values must be within z standard deviations of the mean."
    MathJax.typeset();
}

function correct12() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ 1-1/z^2 = 1-1/"+rand12+"^2 = "+(1-1/(rand12*rand12)).toFixed(2)+" = "+Math.round(100*(1-1/(rand12*rand12)))+"\\% $"
    MathJax.typeset();
}

function wrong12() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ 1-1/z^2 = 1-1/"+rand12+"^2 \\neq "+ans+"\\% $"
    MathJax.typeset();
}

function question13() {
    rand13 = Math.floor(Math.random() * 3)+1;
    values = [68,95,100]
    rand13v = values[rand13-1]
    question = 13; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "For data having a bell-shaped distribution, approximately what percent of the data will be within "+rand13+" standard deviations of the mean? "
    document.getElementById("hint").innerHTML = "Empirical Rule <br> For data having a bell-shaped distribution: <br> - Approximately 68% of the data values will be within one standard deviation of the mean. <br> - Approximately 95% of the data values will be within two standard deviation of the mean. <br> - Approximately 100% of the data values will be within three standard deviation of the mean. "
    MathJax.typeset();
}

function correct13() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "Approximately "+rand13v+"% of the data values will be within one standard deviation of the mean."
    MathJax.typeset();
}

function wrong13() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = ""
    MathJax.typeset();
}















// Measures of Association - Covariance, Correlation Coefficient















function question14() {
    rand14 = 9*Math.floor(Math.random() * 9)+18;
    question = 14; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that $\\sum{(x-\\bar{x})(y-\\bar{y})} = "+rand14+"$ and the sample size is $10$. What is the sample covariance?"
    document.getElementById("hint").innerHTML = "$s_{xy}=\\dfrac{\\sum{(x-\\bar{x})(y-\\bar{y})}}{n-1}$"
    MathJax.typeset();
}

function correct14() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$s_{xy}=\\dfrac{\\sum{(x-\\bar{x})(y-\\bar{y})}}{n-1}=\\dfrac{"+rand14+"}{10-1}="+(rand14/9)+"$"
    MathJax.typeset();
}

function wrong14() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$s_{xy}=\\dfrac{\\sum{(x-\\bar{x})(y-\\bar{y})}}{n-1}=\\dfrac{"+rand14+"}{10-1} \\neq "+ans+"$"
    MathJax.typeset();
}

function question15() {
    rand15 = Math.floor(Math.random() * 21)-10;
    question = 15; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that the sample covariance is "+rand15+" and the sample standard deviation of x and y are 2 and 5, respectively. What is the sample correlation coefficient?  "
    document.getElementById("hint").innerHTML = "$r_{xy}=\\dfrac{s_{xy}}{s_xs_y}$"
    MathJax.typeset();
}

function correct15() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$r_{xy}=\\dfrac{s_{xy}}{s_xs_y}=\\dfrac{"+rand15+"}{2 \\times 5}="+rand15/10+"$"
    MathJax.typeset();
}

function wrong15() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$r_{xy}=\\dfrac{s_{xy}}{s_xs_y}=\\dfrac{"+rand15+"}{2 \\times 5} \\neq "+ans+"$"
    MathJax.typeset();
}

