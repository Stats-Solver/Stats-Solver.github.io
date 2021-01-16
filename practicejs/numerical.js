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
        if (x == "6") {
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
            correct6()
        } else {
            wrong6()
        }
    } else if (question == 8) {
        if (x == "10") {
            correct6()
        } else {
            wrong6()
        }
    } else if (question == 9) {
        if (x == "9") {
            correct6()
        } else {
            wrong6()
        }
    }
}

function next() {
    $("#next").hide(); $("#solve").show();
    $("#output").empty(); $("#output2").empty(); $("#output3").empty(); $("#output4").empty();
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
}





// Measures of Location




function question1() {
    question = 1; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "1. Suppose that $\\sum{x} = 50$ and the sample size is $n=10$. What is the sample mean $\\bar{x}$?"
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
    document.getElementById("output").innerHTML = "1. A sample with an even number of values has middle values 14 and 16. What is the median?"
    document.getElementById("hint").innerHTML = "When there's an even number of values,<br> median = average of two middle values"
    MathJax.typeset();
}

function correct2() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "Median $ = \\dfrac{\\sum x}{n} = \\dfrac{50}{10} = 5 $"
    MathJax.typeset();
}

function wrong2() {
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$ \\bar{x} = \\dfrac{\\sum x}{n} = \\dfrac{50}{10} = 5 $"
    MathJax.typeset();
}

function question3() {
    question = 3; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "1. A sample has values 6, 3, 7, 4, 3. What is the mode?"
    document.getElementById("hint").innerHTML = "Mode = value that occurs with highest frequency"
    MathJax.typeset();
}

function correct3() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    MathJax.typeset();
}

function wrong3() {
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    MathJax.typeset();
}

function question4() {
    question = 4; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "1. Suppose that the sample size is $n=10$. What is the index for the $20$th percentile?"
    document.getElementById("hint").innerHTML = "$i=\\left(\\dfrac{p}{100}\\right)n$"
    MathJax.typeset();
}

function correct4() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    MathJax.typeset();
}

function wrong4() {
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    MathJax.typeset();
}

function question5() {
    question = 5; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "1. A sample with an odd number of values has middle values 24, 27, 31. What is the median?"
    document.getElementById("hint").innerHTML = "When there are an odd number of values,<br> median = middle value"
    MathJax.typeset();
}

function correct5() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "median $ = \\dfrac{\\sum x}{n} = \\dfrac{50}{10} = 5 $"
    MathJax.typeset();
}

function wrong5() {
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "$ \\bar{x} = \\dfrac{\\sum x}{n} = \\dfrac{50}{10} = 5 $"
    MathJax.typeset();
}





// Measures of Variability




function question6() {
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "2. Suppose a sample has a maximum value of 21 and a minimum value of 10. What is the range?"
    MathJax.typeset();
}

function correct6() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    MathJax.typeset();
}

function wrong6() {
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    MathJax.typeset();
}

function question7() {
    question = 7; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "2. Suppose a sample has a third quartile of 7 and a first quartile of 2. What is the interquartile range?"
    MathJax.typeset();
}

function correct7() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    MathJax.typeset();
}

function wrong7() {
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    MathJax.typeset();
}

function question8() {
    question = 8; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "2. Suppose that $\\sum(x-\\bar{x})^2 = 50$ and the sample size is $n = 6$. What is the sample variance??"
    MathJax.typeset();
}

function correct8() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    MathJax.typeset();
}

function wrong8() {
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    MathJax.typeset();
}

function question9() {
    question = 9; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "2. Suppose the sample variance is 81. What is the sample standard deviation?"
    MathJax.typeset();
}

function correct9() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    MathJax.typeset();
}

function wrong9() {
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    MathJax.typeset();
}

function question10() {
    question = 10; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "2. Suppose a sample has a third quartile of 7 and a first quartile of 2. What is the interquartile range?"
    MathJax.typeset();
}

function correct10() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    MathJax.typeset();
}

function wrong10() {
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    MathJax.typeset();
}

