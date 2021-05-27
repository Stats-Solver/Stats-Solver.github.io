$("#next").hide(); $("#hint").hide(); $("#charts").hide(); 
hintval = 1

function showhint() {
    if (hintval==1) {
        $("#hint").show();
        hintval = 2
    } else if (hintval==2) {
        $("#hint").hide();
        hintval = 1
    }
    
}

rand0 = Math.floor(Math.random() * 6) + 1;
//rand0=6

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
} else if (rand0 == 16) {
    question16()
}

function solve() {
    var x = document.getElementById("ans").value
    if (question == 1) {
        var ans = Math.round(rand1*10)/10
        if (x == ans) {
            correct1()
        } else {
            wrong1()
        }
    } else if (question == 2) {
        var ans = Math.round((.15 + rand2)*100)/100
        if (x == ans) {
            correct2()
        } else {
            wrong2()
        }
    } else if (question == 3) {
        var ans = Math.round((.35 + .5 - rand3)*100)/100
        if (x == ans) {
            correct3()
        } else {
            wrong3()
        }
    } else if (question == 4) {
        var ans = Math.round(2 + rand4*20 + (.8-rand4)*30)
        if (x == ans) {
            correct4()
        } else {
            wrong4()
        }
    } else if (question == 5) {
        var exp = .2*(5*rand5) + .6*(10*rand5) + .2*(15*rand5)
        var ans = (Math.pow(5*rand5-exp,2)*.2 + Math.pow(10*rand5-exp,2)*.6 + Math.pow(15*rand5-exp,2)*.2).toFixed(0)
        if (x == ans) {
            correct5()
        } else {
            wrong5()
        }
    } else if (question == 6) {
        var ans = rand6
        if (x == ans) {
            correct6()
        } else {
            wrong6()
        }
    } else if (question == 7) {
        var ans = rand7/10
        if (x == ans) {
            correct7()
        } else {
            wrong7()
        }
    } else if (question == 8) {
        var ans = rand8*100
        if (x == ans) {
            correct8()
        } else {
            wrong8()
        }
    } else if (question == 9) {
        var ans = 2+rand9
        if (x == ans) {
            correct9()
        } else {
            wrong9()
        }
    } else if (question == 10) {
        var ans = parseFloat((0.2+rand10).toFixed(1))
        if (x == ans) {
            correct10()
        } else {
            wrong10()
        }
    } else if (question == 11) {
        var ans = 20+rand11
        if (x == ans) {
            correct11()
        } else {
            wrong11()
        }
    } else if (question == 12) {
        var ans = (35 - rand12)/10
        if (x == ans) {
            correct12()
        } else {
            wrong12()
        }
    } else if (question == 13) {
        var ans = rand13
        if (x == ans) {
            correct13()
        } else {
            wrong13()
        }
    } else if (question == 14) {
        var ans = rand14*10
        if (x == ans) {
            correct14()
        } else {
            wrong14()
        }
    } else if (question == 15) {
        var ans = rand15*10
        if (x == ans) {
            correct15()
        } else {
            wrong15()
        }
    } else if (question == 16) {
        var ans = rand16
        if (x == ans) {
            correct16()
        } else {
            wrong16()
        }
    }
}

function next() {
    $("#next").hide(); $("#solve").show(); $("#charts").hide();  $("#showhint").show();
    $("#output").empty(); $("#output2").empty(); $("#output3").empty(); $("#output4").empty();
    rand = Math.floor(Math.random() * 6) + 1;
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
    } else if (rand == 16) {
        question16()
    }
}

function question1() {
    rand1 = .1*Math.floor(Math.random() * 4) + .1;
    question = 1; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the probablity distribution shown below. What is the probability that $x$ is equal to $2$? <br><table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td></tr><tr><td>$1$</td><td>$0.15$</td></tr><tr><td>$2$</td><td>$"+rand1.toFixed(2)+"$</td></tr><tr><td>$3$</td><td>$"+(.5-rand1).toFixed(2)+"$</td></tr><tr><td>$4$</td><td>$0.35$</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ P(x=x_0) = f(x_0) $"
    MathJax.typeset();
}

function correct1() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ P(x=2) = f(2) = "+Math.round(rand1*10)/10+"$"
    MathJax.typeset();
}

function wrong1() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ P(x=2) = f(2) \\neq "+ans+"$"
    MathJax.typeset();
}

function question2() {
    rand2 = .1*Math.floor(Math.random() * 4) + .1;
    question = 2; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the probablity distribution shown below. What is the probability that $x$ is less than or equal to $2$? <br><table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td></tr><tr><td>$1$</td><td>$0.15$</td></tr><tr><td>$2$</td><td>$"+rand2.toFixed(2)+"$</td></tr><tr><td>$3$</td><td>$"+(.5-rand2).toFixed(2)+"$</td></tr><tr><td>$4$</td><td>$0.35$</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ P(x=x_0) = f(x_0) $"
    MathJax.typeset();
}

function correct2() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();  
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$\\begin{align} P(x \\leq 2) &= f(1) + f(2) \\\\ &= 0.15 + "+Math.round(rand2*10)/10+" \\\\ &= "+Math.round((.15 + rand2)*100)/100+" \\end{align} $"
    MathJax.typeset();
}

function wrong2() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();  
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\begin{align} P(x \\leq 2) &= f(1) + f(2) \\\\ &= 0.15 + "+Math.round(rand2*10)/10+" \\neq "+ans+" \\end{align} $"
    MathJax.typeset();
}

function question3() {
    rand3 = .1*Math.floor(Math.random() * 4) + .1;
    question = 3; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the probablity distribution shown below. What is the probability that $x$ is greater than $2$? <br><table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td></tr><tr><td>$1$</td><td>$0.15$</td></tr><tr><td>$2$</td><td>$"+rand3.toFixed(2)+"$</td></tr><tr><td>$3$</td><td>$"+(.5-rand3).toFixed(2)+"$</td></tr><tr><td>$4$</td><td>$0.35$</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ P(x=x_0) = f(x_0)$"
    MathJax.typeset();
}

function correct3() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\begin{align} P(x > 2) &= f(3) + f(4) \\\\ &= "+Math.round((.5-rand3)*10)/10+" + 0.35 \\\\ &= "+Math.round((.35+.5-rand3)*10)/10+" \\end{align} $"
    MathJax.typeset();
}

function wrong3() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\begin{align} P(x > 2) &= f(3) + f(4) \\\\ &= "+Math.round((.5-rand3)*10)/10+" + 0.35 \\neq "+ans+" \\end{align} $"
    MathJax.typeset();
}

function question4() {
    rand4 = .1*Math.floor(Math.random() * 4) + .4;
    question = 4; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the table shown below. What is the expected value of x? <br><table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$xf(x)$</td></tr><tr><td>$10$</td><td>$0.20$</td><td>$2$</td></tr><tr><td>$20$</td><td>$"+rand4.toFixed(2)+"$</td><td>$"+Math.round(rand4*20)+"$</td></tr><tr><td>$30$</td><td>$"+(.8-rand4).toFixed(2)+"$</td><td>$"+Math.round((.8-rand4)*30)+"$</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ E(x) = \\sum{xf(x)} $"
    MathJax.typeset();
}

function correct4() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\begin{align} E(x) &= \\sum{xf(x)} \\\\ &= 2 + "+Math.round(rand4*20)+" + "+Math.round((.8-rand4)*30)+" \\\\ &= "+Math.round(2 + rand4*20 + (.8-rand4)*30)+" \\end{align} $"
    MathJax.typeset();
}

function wrong4() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\begin{align} E(x) &= \\sum{xf(x)} \\\\ &= 2 + "+Math.round(rand4*20)+" + "+Math.round((.8-rand4)*30)+" \\neq "+ans+" \\end{align} $"
    MathJax.typeset();
}

function question5() {
    rand5 = Math.floor(Math.random() * 4) + 1;
    var exp = .2*(5*rand5) + .6*(10*rand5) + .2*(15*rand5)
    question = 5; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the table shown below. What is the variance of $x$? <br><table><tr style='border-bottom: thin solid'><td>$x$</td><td>$f(x)$</td><td>$x-\\mu$</td><td>$(x-\\mu)^2$</td><td>$(x-\\mu)^2f(x)$</td></tr><tr><td>$"+(5*rand5)+"$</td><td>$0.20$</td><td>$"+(5*rand5-exp).toFixed(0)+"$</td><td>$"+Math.pow(5*rand5-exp,2).toFixed(0)+"$</td><td>$"+(Math.pow(5*rand5-exp,2)*.2).toFixed(0)+"$</td></tr><tr><td>$"+(10*rand5)+"$</td><td>$0.60$</td><td>$"+(10*rand5-exp).toFixed(0)+"$</td><td>$"+Math.pow(10*rand5-exp,2).toFixed(0)+"$</td><td>$"+(Math.pow(10*rand5-exp,2)*.6).toFixed(0)+"$</td></tr><tr><td>$"+(15*rand5)+"$</td><td>$0.20$</td><td>$"+(15*rand5-exp).toFixed(0)+"$</td><td>$"+Math.pow(15*rand5-exp,2).toFixed(0)+"$</td><td>$"+(Math.pow(15*rand5-exp,2)*.2).toFixed(0)+"$</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ Var(x) = \\sum{(x-\\mu)^2f(x)} $"
    MathJax.typeset();
}

function correct5() {
    var exp = .2*(5*rand5) + .6*(10*rand5) + .2*(15*rand5)
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\begin{align} Var(x) &= \\sum{(x-\\mu)^2f(x)} \\\\ &= "+(Math.pow(5*rand5-exp,2)*.2).toFixed(0)+" + "+(Math.pow(10*rand5-exp,2)*.6).toFixed(0)+" + "+(Math.pow(15*rand5-exp,2)*.2).toFixed(0)+" \\\\ &= "+(Math.pow(5*rand5-exp,2)*.2 + Math.pow(10*rand5-exp,2)*.6 + Math.pow(15*rand5-exp,2)*.2).toFixed(0)+" \\end{align} $"
    MathJax.typeset();
}

function wrong5() {
    var exp = .2*(5*rand5) + .6*(10*rand5) + .2*(15*rand5)
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\begin{align} Var(x) &= \\sum{(x-\\mu)^2f(x)} \\\\ &= "+(Math.pow(5*rand5-exp,2)*.2).toFixed(0)+" + "+(Math.pow(10*rand5-exp,2)*.6).toFixed(0)+" + "+(Math.pow(15*rand5-exp,2)*.2).toFixed(0)+" \\neq "+ans+" \\end{align} $"
    MathJax.typeset();
}

function question6() {
    rand6 = Math.floor(Math.random() * 4) + 3;
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose the variance of $x$ is $"+Math.pow(rand6,2)+"$. What is the standard deviation?"
    document.getElementById("hint").innerHTML = "$ \\sigma = \\sqrt{\\sigma^2} $"
    MathJax.typeset();
}

function correct6() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\sigma = \\sqrt{\\sigma^2} = \\sqrt{"+Math.pow(rand6,2)+"} = "+rand6+" $"
    MathJax.typeset();
}

function wrong6() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\sigma = \\sqrt{\\sigma^2}= \\sqrt{"+Math.pow(rand6,2)+"} \\neq "+ans+" $"
    MathJax.typeset();
}

function question7() {
    rand7 = Math.floor(Math.random() * 6) + 1;
    question = 7; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the frequency distribution shown below. What is the relative frequency of the class 20-29? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Frequency</td></tr><tr><td>10-19</td><td>3</td></tr><tr><td>20-29</td><td>"+rand7+"</td></tr><tr><td>30-39</td><td>"+(7-rand7)+"</td></tr><tr style='border-top: thin solid'><td>Total</td><td>10</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{\\text{Frequency}}{n} $"
    MathJax.typeset();
}

function correct7() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{"+rand7+"}{"+10+"} = "+(rand7/10)+" $"
    MathJax.typeset();
}

function wrong7() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{"+rand7+"}{"+10+"} \\neq "+ans+" $"
    MathJax.typeset();
}

function question8() {
    rand8 = parseFloat((.1*(Math.floor(Math.random() * 6) + 1)).toFixed(1));
    question = 8; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the relative frequency distribution shown below. What is the percent frequency of the class 10-19? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Relative Frequency</td></tr><tr><td>10-19</td><td>"+rand8+"</td></tr><tr><td>20-29</td><td>"+parseFloat((.7-rand8).toFixed(1))+"</td></tr><tr><td>30-39</td><td>0.3</td></tr><tr style='border-top: thin solid'><td>Total</td><td>1</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ \\text{Percent Frequency} = \\text{Relative Frequency} \\times 100 \\%  $"
    MathJax.typeset();
}

function correct8() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Percent Frequency} = "+rand8+" \\times 100 \\% = "+(rand8*100)+" \\% $"
    MathJax.typeset();
}

function wrong8() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Percent Frequency} = "+rand8+" \\times 100 \\% \\neq "+ans+" \\% $"
    MathJax.typeset();
}

function question9() {
    rand9 = Math.floor(Math.random() * 6) + 1;
    question = 9; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the frequency distribution shown below. What is the cumulative frequency of the class 20-29? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Frequency</td></tr><tr><td>10-19</td><td>2</td></tr><tr><td>20-29</td><td>"+rand9+"</td></tr><tr><td>30-39</td><td>"+(8-rand9)+"</td></tr></table>"
    document.getElementById("hint").innerHTML = "Cumulative Frequency = Number of values less than or equal to the upper limit of a class"
    MathJax.typeset();
}

function correct9() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Cumulative Frequency} = 2 + "+rand9+" = "+(2+rand9)+"$"
    MathJax.typeset();
}

function wrong9() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Cumulative Frequency} = 2 + "+rand9+" \\neq "+ans+"$"
    MathJax.typeset();
}

function question10() {
    rand10 = parseFloat((.1*(Math.floor(Math.random() * 6) + 1)).toFixed(1));
    question = 10; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the relative frequency distribution shown below. What is the cumulative relative frequency of the class 20-29? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Relative Frequency</td></tr><tr><td>10-19</td><td>0.2</td></tr><tr><td>20-29</td><td>"+rand10+"</td></tr><tr><td>30-39</td><td>"+parseFloat((.8-rand10).toFixed(1))+"</td></tr></table>"
    document.getElementById("hint").innerHTML = "Cumulative Relative Frequency = Proportion of values less than or equal to the upper limit of a class"
    MathJax.typeset();
}

function correct10() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Cumulative Frequency} = 0.2 + "+rand10+" = "+parseFloat((0.2+rand10).toFixed(1))+"$"
    MathJax.typeset();
}

function wrong10() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Cumulative Frequency} = 0.2 + "+rand10+" \\neq "+ans+"$"
    MathJax.typeset();
}

function question11() {
    rand11 = 10*(Math.floor(Math.random() * 6)) + 10;
    question = 11; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the percent frequency distribution shown below. What is the cumulative percent frequency of the class 20-29? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Percent Frequency</td></tr><tr><td>10-19</td><td>20</td></tr><tr><td>20-29</td><td>"+rand11+"</td></tr><tr><td>30-39</td><td>"+(80-rand11)+"</td></tr><tr style='border-top: thin solid'><td>Total</td><td>100</td></tr></table>"
    document.getElementById("hint").innerHTML = "Cumulative Percent Frequency = Percentage of values less than or equal to the upper limit of a class"
    MathJax.typeset();
}

function correct11() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Cumulative Frequency} = 20 + "+rand11+" = "+(20+rand11)+"$"
    MathJax.typeset();
}

function wrong11() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Cumulative Frequency} = 20 + "+rand11+" \\neq "+ans+"$"
    MathJax.typeset();
}
             
function question12() {
    $("#charts").show(); 
    rand12 = Math.floor(Math.random() * 5) + 30;
    question = 12; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the histogram shown below. What is the relative frequency of the class 20-29? "
    document.getElementById("hint").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{\\text{Frequency}}{n} $"
    x = [12,17,rand12-5,rand12-4,rand12-3,rand12-2,rand12-1,rand12,rand12+1,rand12+2]
    google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Value'],
              [x[0]],
              [x[1]],
              [x[2]],
              [x[3]],
              [x[4]],
              [x[5]],
              [x[6]],
              [x[7]],
              [x[8]],
              [x[9]]
              ]);

            var options = {
              legend: { position: 'none' },
              colors: ['blue'],
              vAxis: {title: 'Frequency'},
              hAxis: {title: 'Class'},
              histogram: { bucketSize: 10 }
            };

            var chart = new google.visualization.Histogram(document.getElementById('charts'));
            chart.draw(data, options);
          }
    
    
    MathJax.typeset();
}

function correct12() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{\\text{"+(35 - rand12)+"}}{10} = "+(35 - rand12)/10+"$"
    MathJax.typeset();
}

function wrong12() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{\\text{"+(35 - rand12)+"}}{10} \\neq "+ans+"$"
    MathJax.typeset();
}

function question13() {
    rand13 = Math.floor(Math.random() * 4) + 1;
    question = 13; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the crosstabulation shown below. How many observations belong to both class B and Y? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>X</td><td>Y</td><td>Total</td></tr><tr><td>A</td><td>3</td><td>"+(5-rand13)+"</td><td>"+(8-rand13)+"</td></tr><tr><td>B</td><td>2</td><td></td><td>"+(2+rand13)+"</td></tr><tr style='border-top: thin solid'><td>Total</td><td>5</td><td>5</td><td>10</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ \\sum{\\text{Frequencies}} = n $"
    MathJax.typeset();
}

function correct13() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\sum{\\text{Frequencies}} = 3 + "+(5-rand13)+" + 2 + "+rand13+" = 10 $"
    MathJax.typeset();
}

function wrong13() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\sum{\\text{Frequencies}} = 3 + "+(5-rand13)+" + 2 + "+ans+" \\neq 10 $"
    MathJax.typeset();
}

function question14() {
    rand14 = Math.floor(Math.random() * 9) + 1;
    question = 14; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the crosstabulation shown below. What is the row percentage for observations belonging to both class B and Y? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>X</td><td>Y</td><td>Total</td></tr><tr><td>A</td><td>6</td><td>4</td><td>10</td></tr><tr><td>B</td><td>"+(10-rand14)+"</td><td>"+rand14+"</td><td>10</td></tr><tr style='border-top: thin solid'><td>Total</td><td>10</td><td>10</td><td>20</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ \\text{Row Percentage} = \\dfrac{\\text{Frequency}}{\\text{Row Total}} \\times 100 \\% $"
    MathJax.typeset();
}

function correct14() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Row Percentage} = \\dfrac{\\text{"+rand14+"}}{\\text{"+10+"}} \\times 100 \\% = "+(rand14*10)+" \\% $"
    MathJax.typeset();
}

function wrong14() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Row Percentage} = \\dfrac{\\text{"+rand14+"}}{\\text{"+10+"}} \\times 100 \\% \\neq "+ans+" \\% $"
    MathJax.typeset();
}

function question15() {
    rand15 = Math.floor(Math.random() * 9) + 1;
    question = 15; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the crosstabulation shown below. What is the column percentage for observations belonging to both class B and Y? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>X</td><td>Y</td><td>Total</td></tr><tr><td>A</td><td>6</td><td>"+(10-rand15)+"</td><td>10</td></tr><tr><td>B</td><td>4</td><td>"+rand15+"</td><td>10</td></tr><tr style='border-top: thin solid'><td>Total</td><td>10</td><td>10</td><td>20</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ \\text{Column Percentage} = \\dfrac{\\text{Frequency}}{\\text{Column Total}} \\times 100 \\%  $"
    MathJax.typeset();
}

function correct15() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Column Percentage} = \\dfrac{\\text{"+rand15+"}}{\\text{"+10+"}} \\times 100 \\% = "+(rand15*10)+" \\% $"
    MathJax.typeset();
}

function wrong15() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Column Percentage} = \\dfrac{\\text{"+rand15+"}}{\\text{"+10+"}} \\times 100 \\% \\neq "+ans+" \\% $"
    MathJax.typeset();
}

function question16() {
    $("#charts").show(); 
    rand16 = Math.floor(Math.random() * 9) + 1;
    x = [1,2,3,4,5]; y = [3,6,rand16,4,9]
    question = 16; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the scatter diagram shown below. What is the value of y when x = 3? "
    document.getElementById("hint").innerHTML = "In a scatter diagram, a point is drawn for each pair of (x,y) values."
    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['x', 'y'],
          [ x[0], y[0]],
          [ x[1], y[1]],
          [ x[2], y[2]],
          [ x[3], y[3]],
          [ x[4], y[4]]
        ]);

        var options = {
          hAxis: {title: 'x'},
          vAxis: {title: 'y'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('charts'));

        chart.draw(data, options);
      }
    
    
    MathJax.typeset();
}

function correct16() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ y = "+rand16+" $"
    MathJax.typeset();
}

function wrong16() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ y \\neq "+ans+" $"
    MathJax.typeset();
}