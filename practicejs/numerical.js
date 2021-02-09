$("#next").hide(); $("#hint").hide(); $("#practice").hide();
hintval = 1



function start() {
    $("#practice").show(); $("#start").hide();
    rand0 = Math.floor(Math.random() * 5) + 1;
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
    }
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
        if (x == "5") {
            correct1()
        } else {
            wrong1()
        }
    } else if (question == 2) {
        if (x == "15") {
            correct2()
        } else {
            wrong2()
        }
    } else if (question == 3) {
        if (x == "3") {
            correct3()
        } else {
            wrong3()
        }
    } else if (question == 4) {
        if (x == "2") {
            correct4()
        } else {
            wrong4()
        }
    } else if (question == 5) {
        if (x == "27") {
            correct5()
        } else {
            wrong5()
        }
    } else if (question == 6) {
        if (x == "11") {
            correct6()
        } else {
            wrong6()
        }
    } else if (question == 7) {
        if (x == "5") {
            correct7()
        } else {
            wrong7()
        }
    } else if (question == 8) {
        if (x == "10") {
            correct8()
        } else {
            wrong8()
        }
    } else if (question == 9) {
        if (x == "9") {
            correct9()
        } else {
            wrong9()
        }
    } else if (question == 10) {
        if (x == "5") {
            correct10()
        } else {
            wrong10()
        }
    }
}

function next() {
    $("#next").hide(); $("#solve").show(); $("#showhint").show();
    $("#output").empty(); $("#output2").empty(); $("#output3").empty(); $("#output4").empty();
    if (question == 1 || question == 2 || question == 3 || question == 4 || question == 5) {
        rand = Math.floor(Math.random() * 5) + 6;
        if (rand == 6) {
            question6()
        } else if (rand == 7) {
            question7()
        } else if (rand == 8) {
            question8()
        } else if (rand == 9) {
            question9()
        } else if (rand == 10) {
            question10()
        }
    } else if (question == 6 || question == 7 || question == 8 || question == 9 || question == 10) {
        rand = Math.floor(Math.random() * 5) + 11;
        if (rand == 11) {
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
}





// Measures of Location




function question1() {
    question = 1; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that $\\sum{x} = 50$ and the sample size is $n=10$. What is the sample mean $\\bar{x}$?"
    document.getElementById("hint").innerHTML = "$ \\bar{x} = \\dfrac{\\sum x}{n} $"
    MathJax.typeset();
}

function correct1() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\bar{x} = \\dfrac{\\sum x}{n} = \\dfrac{50}{10} = 5 $"
    MathJax.typeset();
}

function wrong1() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$ \\bar{x} = \\dfrac{\\sum x}{n} = \\dfrac{50}{10} \\neq "+ans+" $"
    MathJax.typeset();
}

function question2() {
    question = 2; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "A sample with an even number of values has middle values 14 and 16. What is the median?"
    document.getElementById("hint").innerHTML = "When there's an even number of values,<br> median = average of two middle values"
    MathJax.typeset();
}

function correct2() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Median} = \\dfrac{14+16}{2} = 15 $"
    MathJax.typeset();
}

function wrong2() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$ \\text{Median} = \\dfrac{14+16}{2} \\neq "+ans+" $"
    MathJax.typeset();
}

function question3() {
    question = 3; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "A sample has values 6, 3, 7, 4, 3. What is the mode?"
    document.getElementById("hint").innerHTML = "Mode = value that occurs with highest frequency"
    MathJax.typeset();
}

function correct3() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = " $ \\text{Mode} = \\boxed{3} $"
    MathJax.typeset();
}

function wrong3() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = " $ \\text{Mode} \\neq "+ans+" $"
    MathJax.typeset();
}

function question4() {
    question = 4; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that the sample size is $n=10$. What is the index for the $20$th percentile?"
    document.getElementById("hint").innerHTML = "$i=\\left(\\dfrac{p}{100}\\right)n$"
    MathJax.typeset();
}

function correct4() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$i=\\left(\\dfrac{p}{100}\\right)n=\\left(\\dfrac{20}{100}\\right)10=2$"
    MathJax.typeset();
}

function wrong4() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$i=\\left(\\dfrac{p}{100}\\right)n=\\left(\\dfrac{20}{100}\\right)10 \\neq "+ans+"$"
    MathJax.typeset();
}

function question5() {
    question = 5; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "A sample with an odd number of values has middle values 24, 27, 31. What is the median?"
    document.getElementById("hint").innerHTML = "When there are an odd number of values,<br> median = middle value"
    MathJax.typeset();
}

function correct5() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = " $ \\text{Median} = 27 $"
    MathJax.typeset();
}

function wrong5() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$ \\text{Median} \\neq "+ans+" $"
    MathJax.typeset();
}





// Measures of Variability




function question6() {
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose a sample has a maximum value of 21 and a minimum value of 10. What is the range?"
    document.getElementById("hint").innerHTML = "$ \\text{Range} = \\text{Largest Value} - \\text{Smallest Value} $"
    MathJax.typeset();
}

function correct6() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = " $ \\text{Range} = 21 - 10 = 11 $"
    MathJax.typeset();
}

function wrong6() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = " $ \\text{Range} = 21 - 10 \\neq "+ans+" $"
    MathJax.typeset();
}

function question7() {
    question = 7; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose a sample has a third quartile of 7 and a first quartile of 2. What is the interquartile range?"
    MathJax.typeset();
}

function correct7() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    MathJax.typeset();
}

function wrong7() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    MathJax.typeset();
}

function question8() {
    question = 8; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that $\\sum(x-\\bar{x})^2 = 50$ and the sample size is $n = 6$. What is the sample variance?"
    document.getElementById("hint").innerHTML = "$s^2=\\dfrac{\\sum\\left( x - \\bar{x}\\right)^2}{n-1}$"
    MathJax.typeset();
}

function correct8() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$s^2=\\dfrac{\\sum\\left( x - \\bar{x}\\right)^2}{n-1}=\\dfrac{50}{6-1}=10 $"
    MathJax.typeset();
}

function wrong8() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$s^2=\\dfrac{\\sum\\left( x - \\bar{x}\\right)^2}{n-1}=\\dfrac{50}{6-1} \\neq "+ans+" $"
    MathJax.typeset();
}

function question9() {
    question = 9; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose the sample variance is 81. What is the sample standard deviation?"
    document.getElementById("hint").innerHTML = "$s=\\sqrt{s^2}$"
    MathJax.typeset();
}

function correct9() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$s=\\sqrt{s^2}=\\sqrt{81}=9$"
    MathJax.typeset();
}

function wrong9() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$s=\\sqrt{s^2}=\\sqrt{81} \\neq "+ans+"$"
    MathJax.typeset();
}

function question10() {
    question = 10; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose a sample has a third quartile of 7 and a first quartile of 2. What is the interquartile range?"
    document.getElementById("hint").innerHTML = "$\\text{IQR} = Q_3 - Q_1$"
    MathJax.typeset();
}

function correct10() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$\\text{IQR} = Q_3 - Q_1 = 7 - 2 = 5$"
    MathJax.typeset();
}

function wrong10() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$\\text{IQR} = Q_3 - Q_1 = 7 - 2 \\neq "+ans+"$"
    MathJax.typeset();
}




// Measures of Relative Location




function question11() {
    question = 11; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose the sample mean is $\\bar{x}=5$ and the sample standard deviation is $s=2$. What is the z-score for an x value of $9$?"
    document.getElementById("hint").innerHTML = "$ z = \\dfrac{x-\\bar{x}}{s} $"
    MathJax.typeset();
}

function correct11() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = " $ \\text{Range} = 21 - 10 = 11 $"
    MathJax.typeset();
}

function wrong11() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = " $ \\text{Range} = 21 - 10 \\neq "+ans+" $"
    MathJax.typeset();
}

function question12() {
    question = 12; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "According to Chevbyshev's Theorem, at least what percent of values must be between 2 stanndard deviations of the mean?"
    MathJax.typeset();
}

function correct12() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    MathJax.typeset();
}

function wrong12() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    MathJax.typeset();
}

function question13() {
    question = 13; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that $\\sum(x-\\bar{x})^2 = 50$ and the sample size is $n = 6$. What is the sample variance?"
    document.getElementById("hint").innerHTML = "$s^2=\\dfrac{\\sum\\left( x - \\bar{x}\\right)^2}{n-1}$"
    MathJax.typeset();
}

function correct13() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$s^2=\\dfrac{\\sum\\left( x - \\bar{x}\\right)^2}{n-1}=\\dfrac{50}{6-1}=10 $"
    MathJax.typeset();
}

function wrong13() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$s^2=\\dfrac{\\sum\\left( x - \\bar{x}\\right)^2}{n-1}=\\dfrac{50}{6-1} \\neq "+ans+" $"
    MathJax.typeset();
}

function question14() {
    question = 14; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose the sample variance is 81. What is the sample standard deviation?"
    document.getElementById("hint").innerHTML = "$s=\\sqrt{s^2}$"
    MathJax.typeset();
}

function correct14() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$s=\\sqrt{s^2}=\\sqrt{81}=9$"
    MathJax.typeset();
}

function wrong14() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$s=\\sqrt{s^2}=\\sqrt{81} \\neq "+ans+"$"
    MathJax.typeset();
}

function question15() {
    question = 15; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose a sample has a third quartile of 7 and a first quartile of 2. What is the interquartile range?"
    document.getElementById("hint").innerHTML = "$\\text{IQR} = Q_3 - Q_1$"
    MathJax.typeset();
}

function correct15() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$\\text{IQR} = Q_3 - Q_1 = 7 - 2 = 5$"
    MathJax.typeset();
}

function wrong15() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$\\text{IQR} = Q_3 - Q_1 = 7 - 2 \\neq "+ans+"$"
    MathJax.typeset();
}