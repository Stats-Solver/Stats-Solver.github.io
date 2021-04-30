$("#next").hide();  $("#hint").hide(); 
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

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

//rand0=3
rand0 = Math.floor(Math.random() * 8) + 1;

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
}

function solve() {
    var x = document.getElementById("ans").value
    if (question == 1) {
        var ans = Math.pow(2,rand1)
        if (x == ans) {
            correct1()
        } else {
            wrong1()
        }
    } else if (question == 2) {
        var ans = factorialize(rand2b)/ (factorialize(rand2a)*factorialize(rand2b - rand2a))
        if (x == ans) {
            correct2()
        } else {
            wrong2()
        }
    } else if (question == 3) {
        var ans = factorialize(rand3b)/ factorialize(rand3b - rand3a)
        if (x == ans) {
            correct3()
        } else {
            wrong3()
        }
    } else if (question == 4) {
        var ans = rand4 / 5
        if (x == ans) {
            correct4()
        } else {
            wrong4()
        }
    } else if (question == 5) {
        var ans = Math.round((1 - rand5)*10)/10
        if (x == ans) {
            correct5()
        } else {
            wrong5()
        }
    } else if (question == 6) {
        var ans = Math.round((rand6a+rand6b-rand6c)*10)/10
        if (x == ans) {
            correct6()
        } else {
            wrong6()
        }
    } else if (question == 7) {
        var ans = Math.round((rand7a+rand7b)*10)/10
        if (x == ans) {
            correct7()
        } else {
            wrong7()
        }
    } else if (question == 8) {
        var ans = Math.round((rand8 / .5)*10)/10
        if (x == ans) {
            correct8()
        } else {
            wrong8()
        }
    } else if (question == 9) {
        var ans = Math.round((rand6a+rand6b-rand6c)*10)/10
        if (x == ans) {
            correct9()
        } else {
            wrong9()
        }
    } else if (question == 10) {
        var ans = Math.round((rand7a+rand7b)*10)/10
        if (x == ans) {
            correct10()
        } else {
            wrong10()
        }
    }
}

function next() {
    $("#next").hide(); $("#solve").show(); $("#showhint").show();
    $("#output").empty(); $("#output2").empty(); $("#output3").empty(); $("#output4").empty();
    rand = Math.floor(Math.random() * 8) + 1;
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
    }
}

function question1() {
    rand1 = Math.floor(Math.random() * 3) + 2;
    question = 1; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the experiment of tossing a coin " + rand1 + " times. How many possible outcomes are there?"
    document.getElementById("hint").innerHTML = "Number of Outcomes = $(n_1)(n_2)...(n_k)$"
    MathJax.typeset();
}

function correct1() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    if (rand1 == 2) {
        document.getElementById("output4").innerHTML = "Number of Outcomes $ = (2)(2) = 4 $ "
    } else if (rand1 == 3) {
        document.getElementById("output4").innerHTML = "Number of Outcomes $ = (2)(2)(2) = 8 $ "
    } else if (rand1 == 4) {
        document.getElementById("output4").innerHTML = "Number of Outcomes $ = (2)(2)(2)(2) = 16 $ "
    }
    
    MathJax.typeset();
}

function wrong1() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    if (rand1 == 2) {
        document.getElementById("output4").innerHTML = "Number of Outcomes $ = (2)(2) \\neq "+ans+" $ "
    } else if (rand1 == 3) {
        document.getElementById("output4").innerHTML = "Number of Outcomes $ = (2)(2)(2) \\neq "+ans+" $ "
    } else if (rand1 == 4) {
        document.getElementById("output4").innerHTML = "Number of Outcomes $ = (2)(2)(2)(2) \\neq "+ans+" $ "
    }
    MathJax.typeset();
}

function question2() {
    rand2a = Math.floor(Math.random() * 2) + 2; 
    rand2b = Math.floor(Math.random() * 2) + 4;
    question = 2; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the experiment of selecting "+rand2a+" items from a set of "+rand2b+" items. How many possible outcomes are there?"
    document.getElementById("hint").innerHTML = "$ C^N_n = \\dfrac{N!}{n!(N-n)!} $ "
    MathJax.typeset();
}

function correct2() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    if (rand2a == 2 && rand2b == 4) {
        document.getElementById("output4").innerHTML = " $ C^N_n = \\dfrac{N!}{n!(N-n)!} = \\dfrac{4!}{2!(4-2)!} = \\dfrac{24}{2(4)} = 3 $ "
    } else if (rand2a == 2 && rand2b == 5) {
        document.getElementById("output4").innerHTML = " $ C^N_n = \\dfrac{N!}{n!(N-n)!} = \\dfrac{5!}{2!(5-2)!} = \\dfrac{120}{2(6)} = 10 $ "
    } else if (rand2a == 3 && rand2b == 4) {
        document.getElementById("output4").innerHTML = " $ C^N_n = \\dfrac{N!}{n!(N-n)!} = \\dfrac{4!}{3!(4-3)!} = \\dfrac{24}{6(1)} = 4 $ "
    } else if (rand2a == 3 && rand2b == 5) {
        document.getElementById("output4").innerHTML = " $ C^N_n = \\dfrac{N!}{n!(N-n)!} = \\dfrac{5!}{3!(5-3)!} = \\dfrac{120}{6(2)} = 10 $ "
    }
    MathJax.typeset();
}

function wrong2() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    if (rand2a == 2 && rand2b == 4) {
        document.getElementById("output4").innerHTML = " $ C^N_n = \\dfrac{N!}{n!(N-n)!} = \\dfrac{4!}{2!(4-2)!} = \\dfrac{24}{2(2)} \\neq "+ans+" $ "
    } else if (rand2a == 2 && rand2b == 5) {
        document.getElementById("output4").innerHTML = " $ C^N_n = \\dfrac{N!}{n!(N-n)!} = \\dfrac{5!}{2!(5-2)!} = \\dfrac{120}{2(6)} \\neq "+ans+"  $ "
    } else if (rand2a == 3 && rand2b == 4) {
        document.getElementById("output4").innerHTML = " $ C^N_n = \\dfrac{N!}{n!(N-n)!} = \\dfrac{4!}{3!(4-3)!} = \\dfrac{24}{6(1)} \\neq "+ans+"  $ "
    } else if (rand2a == 3 && rand2b == 5) {
        document.getElementById("output4").innerHTML = " $ C^N_n = \\dfrac{N!}{n!(N-n)!} = \\dfrac{5!}{2!(5-2)!} = \\dfrac{120}{6(2)} \\neq "+ans+"  $ "
    }
    MathJax.typeset();
}

function question3() {
    rand3a = Math.floor(Math.random() * 2) + 2; 
    rand3b = Math.floor(Math.random() * 2) + 4;
    question = 3; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Consider the experiment of selecting "+rand3a+" items from a set of "+rand3b+" items (order matters). How many possible outcomes are there?"
    document.getElementById("hint").innerHTML = "$ P^N_n = \\dfrac{N!}{(N-n)!} $"
    MathJax.typeset();
}

function correct3() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    if (rand3a == 2 && rand3b == 4) {
        document.getElementById("output4").innerHTML = " $ P^N_n = \\dfrac{N!}{(N-n)!} = \\dfrac{4!}{(4-2)!} = \\dfrac{24}{4} = 6 $ "
    } else if (rand3a == 2 && rand3b == 5) {
        document.getElementById("output4").innerHTML = " $ P^N_n = \\dfrac{N!}{(N-n)!} = \\dfrac{5!}{(5-2)!} = \\dfrac{120}{6} = 20 $ "
    } else if (rand3a == 3 && rand3b == 4) {
        document.getElementById("output4").innerHTML = " $ P^N_n = \\dfrac{N!}{(N-n)!} = \\dfrac{4!}{(4-3)!} = \\dfrac{24}{1} = 24 $ "
    } else if (rand3a == 3 && rand3b == 5) {
        document.getElementById("output4").innerHTML = " $ P^N_n = \\dfrac{N!}{(N-n)!} = \\dfrac{5!}{(5-3)!} = \\dfrac{120}{2} = 60 $ "
    }
    MathJax.typeset();
}

function wrong3() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    if (rand3a == 2 && rand3b == 4) {
        document.getElementById("output4").innerHTML = " $ P^N_n = \\dfrac{N!}{(N-n)!} = \\dfrac{4!}{2!(4-2)!} = \\dfrac{24}{2} \\neq "+ans+" $ "
    } else if (rand3a == 2 && rand3b == 5) {
        document.getElementById("output4").innerHTML = " $ P^N_n = \\dfrac{N!}{(N-n)!} = \\dfrac{5!}{2!(5-2)!} = \\dfrac{120}{6} \\neq "+ans+"  $ "
    } else if (rand3a == 3 && rand3b == 4) {
        document.getElementById("output4").innerHTML = " $ P^N_n = \\dfrac{N!}{(N-n)!} = \\dfrac{4!}{3!(4-3)!} = \\dfrac{24}{1} \\neq "+ans+"  $ "
    } else if (rand3a == 3 && rand3b == 5) {
        document.getElementById("output4").innerHTML = " $ P^N_n = \\dfrac{N!}{(N-n)!} = \\dfrac{5!}{2!(5-2)!} = \\dfrac{120}{2} \\neq "+ans+"  $ "
    }
    MathJax.typeset();
}


function question4() {
    rand4 = Math.floor(Math.random() * 3) + 2;
    question = 4; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that an experiment has 5 equally likely outcomes. What is the probability of any "+rand4+" of the possible outcomes occuring?"
    document.getElementById("hint").innerHTML = "Probability of Event = sum of probabilities of outcomes in event"
    MathJax.typeset();
}

function correct4() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide();  $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    if (rand4 == 2) {
        document.getElementById("output4").innerHTML = "Probability $ = .20 + .20 = .40$"
    } else if (rand4 == 3) {
        document.getElementById("output4").innerHTML = "Probability $ = .20 + .20 + .20 = .60$"
    } else if (rand4 == 4) {
        document.getElementById("output4").innerHTML = "Probability $ = .20 + .20 + .20 + .20 = .80$"
    }
    
    MathJax.typeset();
}

function wrong4() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    if (rand4 == 2) {
        document.getElementById("output4").innerHTML = "Probability $ = .20 + .20 \\neq "+ans+"$"
    } else if (rand4 == 3) {
        document.getElementById("output4").innerHTML = "Probability $ = .20 + .20 + .20 \\neq "+ans+"$"
    } else if (rand4 == 4) {
        document.getElementById("output4").innerHTML = "Probability $ = .20 + .20 + .20 + .20 \\neq "+ans+"$"
    }
    MathJax.typeset();
}

function question5() {
    rand5 = .1 * Math.floor(Math.random() * 9) + .1;
    question = 5; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that the probability of the complement of an event is "+rand5.toFixed(2)+". What is the probability of the event?"
    document.getElementById("hint").innerHTML = "$ P(A) = 1 - P(A^c) $"
    MathJax.typeset();
}

function correct5() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ P(A) = 1 - P(A^c) = 1 - "+rand5.toFixed(2)+" = "+(1-rand5).toFixed(2)+" $"
    MathJax.typeset();
}

function wrong5() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ P(A) = 1 - P(A^c) = 1 - "+rand5.toFixed(2)+" \\neq "+ans+" $"
    MathJax.typeset();
}

function question6() {
    rand6a = .1 * Math.floor(Math.random() * 2) + .2;
    rand6b = .1 * Math.floor(Math.random() * 2) + .4;
    rand6c = .1 * Math.floor(Math.random() * 2) + .1;
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose the probability of events A and B occuring are "+rand6a.toFixed(2)+" and "+rand6b.toFixed(2)+", respectively. The probability of both of them occuring is "+rand6c.toFixed(2)+". What is the probability that one of A or B occurs?"
    document.getElementById("hint").innerHTML = "$ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) $"
    MathJax.typeset();
}

function correct6() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ P(A \\cup B) = "+rand6a.toFixed(2)+" + "+rand6b.toFixed(2)+" - "+rand6c.toFixed(2)+" = "+(rand6a+rand6b-rand6c).toFixed(2)+" $"
    MathJax.typeset();
}

function wrong6() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ P(A \\cup B) = "+rand6a.toFixed(2)+" + "+rand6b.toFixed(2)+" - "+rand6c.toFixed(2)+" \\neq "+ans+" $"
    MathJax.typeset();
}

function question7() {
    rand7a = .1 * Math.floor(Math.random() * 2) + .2;
    rand7b = .1 * Math.floor(Math.random() * 2) + .4;
    question = 7; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that events A and B are mutually exclusive and have probabilities "+rand7a.toFixed(2)+" and "+rand7b.toFixed(2)+", respectively. What is the probability of either A or B occuring?"
    document.getElementById("hint").innerHTML = "$ P(A \\cup B) = P(A) + P(B) $"
    MathJax.typeset();
}

function correct7() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ P(A \\cup B) = "+rand7a.toFixed(2)+" + "+rand7b.toFixed(2)+" = "+(rand7a+rand7b).toFixed(2)+" $"
    MathJax.typeset();
}

function wrong7() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ P(A \\cup B) = "+rand7a.toFixed(2)+" + "+rand7b.toFixed(2)+" \\neq "+ans+" $"
    MathJax.typeset();
}

function question8() {
    rand8 = .1 * Math.floor(Math.random() * 4) + .1;
    question = 8; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "Suppose that the probability of event B occuring is 0.50 and the probability of both events A and B occuring is "+rand8.toFixed(2)+". What is the probability of event A occuring given that event B has occured?"
    document.getElementById("hint").innerHTML = "$ P(A | B) = \\dfrac{P(A \\cap B)}{P(B)} $"
    MathJax.typeset();
}

function correct8() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ P(A | B) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{"+rand8.toFixed(2)+"}{0.50} = "+(rand8/.5).toFixed(2)+" $"
    MathJax.typeset();
}

function wrong8() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ P(A | B) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{"+rand8.toFixed(2)+"}{0.50} \\neq "+ans+" $"
    MathJax.typeset();
}