$("#next").hide();

//rand0 = Math.floor(Math.random() * 5) + 1;
rand0 = 1;

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
        if (x == "10") {
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
        if (x == "5") {
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
    document.getElementById("output").innerHTML = "1. Suppose that $\\sum{x} = 50$ and the sample size is $n=10$. What is the sample mean $\\bar{x}$?"
    document.getElementById("ansa").innerHTML = "1"
    document.getElementById("ansb").innerHTML = "5"
    document.getElementById("ansc").innerHTML = "10"
    document.getElementById("ansd").innerHTML = "50"
    MathJax.typeset();
}

function correct1() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\bar{x} = \\dfrac{\\sum x}{n} \\rightarrow \\dfrac{50}{n} = 5 $"
    MathJax.typeset();
}

function wrong1() {
    $("#output2").hide(); $("#output3").show(); 
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "Hint: $ \\bar{x} = \\dfrac{\\sum x}{n} $"
    MathJax.typeset();
}

function question2() {
    question = 2; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "1. A sample with an even number of values has middle values 14 and 16. What is the median?"
    MathJax.typeset();
}

function correct2() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Median} = \\dfrac{14+16}{2} = \\boxed{15} $"
    MathJax.typeset();
}

function wrong2() {
    $("#output2").hide(); $("#output3").show(); 
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "Hint: When there are an even number of values, the median is the average of the two middle values."
    MathJax.typeset();
}

function question3() {
    question = 3; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "1. A sample has values 6, 3, 7, 4, 3. What is the mode?"
    MathJax.typeset();
}

function correct3() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Mode} = \\boxed{3} $"
    MathJax.typeset();
}

function wrong3() {
    $("#output2").hide(); $("#output3").show(); 
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "Hint: The mode is the value that occurs with the highest frequency."
    MathJax.typeset();
}

function question4() {
    question = 4; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "2. Suppose the index for the 25th percentile is 1.25. What is the sample size?"
    MathJax.typeset();
}

function correct4() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$i=\\dfrac{p}{100}n$"
    MathJax.typeset();
}

function wrong4() {
    $("#output2").hide(); $("#output3").show(); 
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "Hint: $i=\\dfrac{p}{100}n$"
    MathJax.typeset();
}

function question5() {
    question = 5; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "2. Suppose the index for the 3rd quartile is 4.5. What is the sample size?"
    MathJax.typeset();
}

function correct5() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$i=\\dfrac{75}{100}n$"
    MathJax.typeset();
}

function wrong5() {
    $("#output2").hide(); $("#output3").show(); 
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "Hint: $i=\\dfrac{75}{100}n$"
    MathJax.typeset();
}

function question6() {
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "3. Suppose a sample, with a maximum of 21, has a range of 11. What is the minimum?"
    MathJax.typeset();
}

function correct6() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$i=\\dfrac{75}{100}n$"
    MathJax.typeset();
}

function wrong6() {
    $("#output2").hide(); $("#output3").show(); 
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "Hint: $i=\\dfrac{75}{100}n$"
    MathJax.typeset();
}

function question6() {
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "3. Suppose a sample, with a maximum of 21, has a range of 11. What is the minimum?"
    MathJax.typeset();
}

function correct6() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$i=\\dfrac{75}{100}n$"
    MathJax.typeset();
}

function wrong6() {
    $("#output2").hide(); $("#output3").show(); 
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "Hint: $i=\\dfrac{75}{100}n$"
    MathJax.typeset();
}
