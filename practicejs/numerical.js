$("#next").hide(); $("#hint").hide();
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
} else if (rand0 == 6) {
    question6()
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
        if (x == "10") {
            correct6()
        } else {
            wrong6()
        }
    }
}

function next() {
    $("#next").hide(); $("#solve").show();
    $("#output").empty(); $("#output2").empty(); $("#output3").empty(); $("#output4").empty();
    rand = Math.floor(Math.random() * 5) + 1;
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
    }
}

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
    document.getElementById("output4").innerHTML = "median $ = \\dfrac{\\sum x}{n} = \\dfrac{50}{10} = 5 $"
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
    document.getElementById("output").innerHTML = "A sample has values 6, 3, 7, 4, 3. What is the mode?"
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
    document.getElementById("output").innerHTML = "Suppose that the sample size is $n=10$. What is the index for the $20$th percentile?"
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
    document.getElementById("output").innerHTML = "Suppose the index for the 3rd quartile is 4.5. What is the sample size?"
    MathJax.typeset();
}

function correct5() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    MathJax.typeset();
}

function wrong5() {
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong"
    MathJax.typeset();
}

function question6() {
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose a sample, with a maximum of 21, has a range of 11. What is the minimum?"
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
    document.getElementById("output").innerHTML = "Suppose a sample, with a maximum of 21, has a range of 11. What is the minimum?"
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
