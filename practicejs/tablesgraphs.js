$("#next").hide(); 

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
        if (x == "50") {
            correct1()
        } else {
            wrong1()
        }
    } else if (question == 2) {
        if (x == "30") {
            correct2()
        } else {
            wrong2()
        }
    } else if (question == 3) {
        if (x == "40") {
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
        if (x == "2") {
            correct5()
        } else {
            wrong5()
        }
    } else if (question == 6) {
        if (x == "108") {
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
    document.getElementById("output").innerHTML = "Suppose there's three classes and the sample size is 100. The frequencies of the first two classes are 30 and 20. What is the frequency of the third class?"
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
    document.getElementById("output").innerHTML = "Suppose that the relative frequency of a class is .6 and the sample size is 50. What is the frequency of the class?"
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
    document.getElementById("output").innerHTML = "Suppose that there are five classes and the relative frequencies of the first four classes are each .15. What is the percent frequency of the fifth class?"
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
    document.getElementById("output").innerHTML = "Suppose there are two classes and a sample size of 20. The frequency of the first class is 8 and the relative frequency of the second class is .6. Which class (1 or 2) has the tallest bar in a bar chart?"
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
    document.getElementById("output").innerHTML = "Suppose there are two classes. The percent frequency of the first class is 70. How many degrees are there for the second class in a pie chart?"
    MathJax.typeset();
}

function correct5() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = ""
    MathJax.typeset();
}

function wrong5() {
    $("#output2").hide(); $("#output3").show(); 
    document.getElementById("output3").innerHTML = "Wrong"
    document.getElementById("output4").innerHTML = "Hint: There are 360 degrees in a pie chart."
    MathJax.typeset();
}

function question6() {
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose a sample, with a maximum of 21, has a range of 11. What is the minimum?"
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
    document.getElementById("output").innerHTML = "Suppose a sample, with a maximum of 21, has a range of 11. What is the minimum?"
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
