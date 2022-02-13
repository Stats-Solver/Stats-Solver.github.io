$("#next").hide(); $("#hint").hide(); $("#charts").hide(); 
hintval = 1

$("#practice").hide();

//var rand0 = 1

function start(){
    $("#practice").show(); $("#examples").hide(); $("#hiddenstuff").hide(); $("#next").hide(); $("#solve").show();
    var stat = document.getElementById("stat").value;
    var rand2 = Math.floor(Math.random() * 3) + 1;
    if (stat == "frequency"){
        if (rand2 == 1) {
            question1()
        } else if (rand2 == 2) {
            question21()
        } else if (rand2 == 3) {
            question31()
        }
    } else if (stat == "relative"){
        if (rand2 == 1) {
            question2()
        } else if (rand2 == 2) {
            question22()
        } else if (rand2 == 3) {
            question32()
        }
    } else if (stat == "percent"){
        question3()
    } else if (stat == "bar"){
        question4()
    } else if (stat == "pie"){
        question5()
    } else if (stat == "cumulative"){
        question6()
    } else {
        $("#examples").show(); $("#practice").hide();
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


//rand0 = Math.floor(Math.random() * 16) + 1;
//rand0=10

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
    $("#hiddenstuff").show();
    var x = document.getElementById("ans").value
    if (question == 1) {
        var ans = 10 - rand1 - 2
        if (x == ans) {
            correct1()
        } else {
            wrong1()
        }
    } else if (question == 21) {
        var ans = 3 + rand21
        if (x == ans) {
            correct21()
        } else {
            wrong21()
        }
    } else if (question == 31) {
        var ans = 2 + totvals
        if (x == ans) {
            correct31()
        } else {
            wrong31()
        }
    } else if (question == 32) {
        var ans = Math.round((1 + totvals)*10)/100
        if (x == ans) {
            correct32()
        } else {
            wrong32()
        }
    }  else if (question == 2) {
        var ans = rand2/10
        if (x == ans) {
            correct2()
        } else {
            wrong2()
        }
    } else if (question == 22) {
        var ans = Math.round((1 - (.2+rand22))*10)/10
        if (x == ans) {
            correct22()
        } else {
            wrong22()
        }
    }  else if (question == 3) {
        var ans = rand3*100
        if (x == ans) {
            correct3()
        } else {
            wrong3()
        }
    } else if (question == 4) {
        var ans = rand4+5
        if (x == ans) {
            correct4()
        } else {
            wrong4()
        }
    } else if (question == 5) {
        var ans = rand5*.01
        if (x == ans) {
            correct5()
        } else {
            wrong5()
        }
    } else if (question == 6) {
        var ans = 8-rand6
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
    //rand = Math.floor(Math.random() * 16) + 1;
    var rand2 = Math.floor(Math.random() * 2) + 1;
    if (rand0 == 1) {
        if (rand2 == 1) {
            question21()
        } else if (rand2 == 2) {
            question31()
        } 
    } else if (rand0 == 21) {
        if (rand2 == 1) {
            question1()
        } else if (rand2 == 2) {
            question31()
        } 
    } else if (rand0 == 31) {
        if (rand2 == 1) {
            question1()
        } else if (rand2 == 2) {
            question21()
        } 
    } else if (rand0 == 2) {
        if (rand2 == 1) {
            question22()
        } else if (rand2 == 2) {
            question32()
        } 
    } else if (rand0 == 22) {
        if (rand2 == 1) {
            question2()
        } else if (rand2 == 2) {
            question32()
        } 
    } else if (rand0 == 32) {
        if (rand2 == 1) {
            question2()
        } else if (rand2 == 2) {
            question22()
        } 
    }  else if (rand0 == 3) {
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














// Summarizing Qualitative Data








var rand0




// Frequency Distribution

function question1() {
    rand0 = 1
    rand1 = Math.floor(Math.random() * 5) + 3;
    question = 1; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the frequency of class C? <br><br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Frequency</td></tr><tr><td>A</td><td>2</td></tr><tr><td>B</td><td>"+rand1+"</td></tr><tr><td>C</td><td></td></tr><tr style='border-top: thin solid'><td>Total</td><td>10</td></tr></table><br>"
    document.getElementById("hint").innerHTML = "$ \\sum{\\text{Frequencies}} = n $"
    MathJax.typeset();
}

function correct1() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ 2 + "+rand1+"+ {\\color{Green}"+(8 - rand1)+"} = 10 $"
    MathJax.typeset();
}

function wrong1() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ 2 + "+rand1+"+ {\\color{Red}"+ans+"}  \\neq 10  $"
    MathJax.typeset();
}

function question21() {
    rand0 = 21
    rand21 = Math.floor(Math.random() * 5) + 1;
    question = 21; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the sample size? <br><br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Frequency</td></tr><tr><td>A</td><td>2</td></tr><tr><td>B</td><td>"+rand21+"</td></tr><tr><td>C</td><td>1</td></tr></table><br>"
    document.getElementById("hint").innerHTML = "$ \\sum{\\text{Frequencies}} = n $"
    MathJax.typeset();
}

function correct21() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ 2 + "+rand21+" + 1 = {\\color{Green}"+(3+rand21)+"} $"
    MathJax.typeset();
}

function wrong21() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ 2 + "+rand21+"+ 1 \\neq  {\\color{Red}"+ans+"}  $"
    MathJax.typeset();
}

function question31() {
    rand0 = 31
    rand31a = Math.floor(Math.random() * 2); rand31b = Math.floor(Math.random() * 2); rand31c = Math.floor(Math.random() * 2);
    rand31d = Math.floor(Math.random() * 2); rand31e = Math.floor(Math.random() * 2); rand31f = Math.floor(Math.random() * 2);
    totvals = rand31a + rand31b + rand31c + rand31d + rand31e + rand31f
    if (rand31a == 1) {vala = "A"} else {vala = "B"}; if (rand31b == 1) {valb = "A"} else {valb = "B"}; if (rand31c == 1) {valc = "A"} else {valc = "C"}; 
    if (rand31d == 1) {vald = "A"} else {vald = "C"}; if (rand31e == 1) {vale = "A"} else {vale = "B"}; if (rand31f == 1) {valf = "A"} else {valf = "B"}; 
    question = 31; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the frequency of class A? <br><br><table><tr><td>B</td><td>"+vala+"</td><td>"+valb+"</td><td>"+valc+"</td><td>A</td></tr><tr><td>A</td><td>"+vald+"</td><td>"+vale+"</td><td>"+valf+"</td><td>C</td></tr></table><br>"
    document.getElementById("hint").innerHTML = "$ \\text{Frequency = Number of Observations} $"
    MathJax.typeset();
}

function correct31() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Frequency} = {\\color{Green}"  + (2+totvals) + "}$"
    MathJax.typeset();
}

function wrong31() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Frequency} \\neq {\\color{Red}"  + ans + "}$"
    MathJax.typeset();
}




function question2() {
    rand0 = 2
    rand2 = Math.floor(Math.random() * 5) + 3;
    question = 2; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the relative frequency of class B? <br><br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Frequency</td></tr><tr><td>A</td><td>2</td></tr><tr><td>B</td><td>"+rand2+"</td></tr><tr><td>C</td><td>"+(8-rand2)+"</td></tr><tr style='border-top: thin solid'><td>Total</td><td>10</td></tr></table><br>"
    document.getElementById("hint").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{\\text{Frequency}}{n} $"
    MathJax.typeset();
}

function correct2() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();  
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{\\text{"+rand2+"}}{10} = {\\color{Green}"+(rand2/10)+"} $"
    MathJax.typeset();
}

function wrong2() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();  
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{\\text{"+rand2+"}}{10} \\neq {\\color{Red}"+ans+"} $"
    MathJax.typeset();
}

function question22() {
    rand0 = 22
    rand22 = (Math.floor(Math.random() * 5) + 3)/10;
    question = 22; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the relative frequency of class C? <br><br><table><tr style='border-bottom: thin solid'><td><br>Class</td><td>Relative<br>Frequency</td></tr><tr><td>A</td><td>0.2</td></tr><tr><td>B</td><td>"+rand22+"</td></tr><tr><td>C</td><td></td></tr><tr style='border-top: thin solid'><td>Total</td><td>1</td></tr></table><br>"
    document.getElementById("hint").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{\\text{Frequency}}{n} $"
    MathJax.typeset();
}

function correct22() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();  
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ 0.2 + "+rand22+" + {\\color{Green}"+Math.round((1 - (.2+rand22))*10)/10+"} = 1 $"
    MathJax.typeset();
}

function wrong22() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide();  
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ 0.2 + "+rand22+" + {\\color{Red}"+ans+"} \\neq 1 $"
    MathJax.typeset();
}

function question32() {
    rand0 = 32
    rand32a = Math.floor(Math.random() * 2); rand32b = Math.floor(Math.random() * 2); rand32c = Math.floor(Math.random() * 2);
    rand32d = Math.floor(Math.random() * 2); rand32e = Math.floor(Math.random() * 2); rand32f = Math.floor(Math.random() * 2);
    totvals = rand32a + rand32b + rand32c + rand32d + rand32e + rand32f
    if (rand32a == 1) {vala = "B"} else {vala = "A"}; if (rand32b == 1) {valb = "B"} else {valb = "A"}; if (rand32c == 1) {valc = "B"} else {valc = "C"}; 
    if (rand32d == 1) {vald = "B"} else {vald = "C"}; if (rand32e == 1) {vale = "B"} else {vale = "A"}; if (rand32f == 1) {valf = "B"} else {valf = "A"}; 
    question = 32; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the relative frequency of class B? <br><br><table><tr><td>B</td><td>"+vala+"</td><td>"+valb+"</td><td>"+valc+"</td><td>A</td></tr><tr><td>A</td><td>"+vald+"</td><td>"+vale+"</td><td>"+valf+"</td><td>C</td></tr></table><br>"
    document.getElementById("hint").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{\\text{Frequency}}{n} $"
    MathJax.typeset();
}

function correct32() {
    var ans = document.getElementById("ans").value
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{"+(1+totvals)+"}{10} =  {\\color{Green}"  + ans + "}$"
    MathJax.typeset();
}

function wrong32() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Relative Frequency} = \\dfrac{"+(1+totvals)+"}{10} \\neq {\\color{Red}"  + ans + "}$"
    MathJax.typeset();
}

function question3() {
    rand0 = 3
    rand3 = parseFloat((.1*(Math.floor(Math.random() * 5) + 3)).toFixed(1));
    question = 3; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the percent frequency of class A? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Frequency</td></tr><tr><td>A</td><td>"+rand3+"</td></tr><tr><td>B</td><td>"+parseFloat((.8-rand3).toFixed(1))+"</td></tr><tr><td>C</td><td>0.2</td></tr><tr style='border-top: thin solid'><td>Total</td><td>10</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ \\text{Percent Frequency} = \\text{Relative Frequency} \\times 100 \\% $"
    MathJax.typeset();
}

function correct3() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\text{Percent Frequency} = "+rand3+" \\times 100 \\% = "+(rand3*100)+"\\%  $"
    MathJax.typeset();
}

function wrong3() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\text{Percent Frequency} = "+rand3+" \\times 100 \\% \\neq "+ans+" \\% $"
    MathJax.typeset();
}

function question4() {
    rand0 = 4
    rand4 = Math.floor(Math.random() * 5) + 1;
    $("#charts").show();
    question = 4; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the sample size?"
    document.getElementById("hint").innerHTML = "$ \\sum{\\text{Frequencies}} = n $"
    google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic);
        function drawBasic() {

          var data = new google.visualization.DataTable();
          data.addColumn('timeofday', 'Time of Day');
          data.addColumn('number', 'Motivation Level');
          var x = ['A','B','C']
          var y = [2,3,rand4]

          var data = google.visualization.arrayToDataTable([
            ['Class', 'Frequency'],
            [x[0], y[0]],
            [x[1], y[1]],
            [x[2], y[2]],
          ]);

          var options = {
              legend: 'none',
              vAxis: {title: 'Frequency'},
              hAxis: {title: 'Class'}
          };

          var chart = new google.visualization.ColumnChart(
            document.getElementById('charts'));

          chart.draw(data, options);
        }
    MathJax.typeset();
}

function correct4() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ \\sum{\\text{Frequencies}} = 2 + 3 + "+rand4+" = "+(rand4+5)+" $"
    MathJax.typeset();
}

function wrong4() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ \\sum{\\text{Frequencies}} =  2 + 3 + "+rand4+" \\neq "+ans+" $"
    MathJax.typeset();
}

function question5() {
    rand0 = 5
    rand5 = 10*Math.floor(Math.random() * 6) + 10;
    $("#charts").show();
    var x = ["A","B","C"]; var y = [30,rand5,70-rand5]
    question = 5; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the relative frequency of class B?"
    document.getElementById("hint").innerHTML = "$ \\text{Percent Frequency} = \\text{Relative Frequency} \\times 100 \\%  $"
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      
      var myArray = [['Class', 'Frequency'], [x[0], y[0]],[x[1], y[1]], [x[2], y[2]]]

      function drawChart() {

        var data = google.visualization.arrayToDataTable(myArray);

        var chart = new google.visualization.PieChart(document.getElementById('charts'));

        chart.draw(data);
      }
    MathJax.typeset();
}

function correct5() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ "+(rand5*.01)+" \\times 100 \\% =  "+rand5+"\\% $"
    MathJax.typeset();
}

function wrong5() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ "+ans+" \\times 100 \\% \\neq "+rand5+"\\% $"
    MathJax.typeset();
}










// Summarizing Quantitative Data



function question6() {
    rand0 = 6
    rand6 = Math.floor(Math.random() * 7) + 1;
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the frequency of the class 30-39? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Frequency</td></tr><tr><td>10-19</td><td>2</td></tr><tr><td>20-29</td><td>"+rand6+"</td></tr><tr><td>30-39</td><td></td></tr><tr style='border-top: thin solid'><td>Total</td><td>10</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ \\sum{\\text{Frequencies}} = n $"
    MathJax.typeset();
}

function correct6() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ 2 + "+rand6+" + "+(8-rand6)+" = 10 $"
    MathJax.typeset();
}

function wrong6() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ 2 + "+rand6+" + "+ans+" \\neq 10 $"
    MathJax.typeset();
}

function question61() {
    rand0 = 61
    rand1 = Math.floor(Math.random() * 5) + 3;
    question = 1; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the frequency of class C? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Frequency</td></tr><tr><td>A</td><td>2</td></tr><tr><td>B</td><td>"+rand1+"</td></tr><tr><td>C</td><td></td></tr><tr style='border-top: thin solid'><td>Total</td><td>10</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ \\sum{\\text{Frequencies}} = n $"
    MathJax.typeset();
}

function correct61() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide();
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ 2 + "+rand1+"+ "+(8 - rand1)+" = 10 $"
    MathJax.typeset();
}

function wrong61() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ 2 + "+rand1+"+ "+ans+"  \\neq 10  $"
    MathJax.typeset();
}

function question62() {
    rand0 = 62
    rand6 = Math.floor(Math.random() * 7) + 1;
    question = 6; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the frequency of the class 30-39? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Frequency</td></tr><tr><td>10-19</td><td>2</td></tr><tr><td>20-29</td><td>"+rand6+"</td></tr><tr><td>30-39</td><td></td></tr><tr style='border-top: thin solid'><td>Total</td><td>10</td></tr></table>"
    document.getElementById("hint").innerHTML = "$ \\sum{\\text{Frequencies}} = n $"
    MathJax.typeset();
}

function correct62() {
    $("#output2").show(); $("#output3").hide(); $("#next").show(); $("#solve").hide(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output2").innerHTML = "Correct!"
    document.getElementById("output4").innerHTML = "$ 2 + "+rand6+" + "+(8-rand6)+" = 10 $"
    MathJax.typeset();
}

function wrong62() {
    var ans = document.getElementById("ans").value
    $("#output2").hide(); $("#output3").show(); $("#hint").hide(); $("#showhint").hide(); 
    document.getElementById("output3").innerHTML = "Wrong - Try Again"
    document.getElementById("output4").innerHTML = "$ 2 + "+rand6+" + "+ans+" \\neq 10 $"
    MathJax.typeset();
}











function question7() {
    rand0 = 7
    rand7 = Math.floor(Math.random() * 6) + 1;
    question = 7; document.getElementById("ans").value = ""
    document.getElementById("output").innerHTML = "What is the relative frequency of the class 20-29? <br><table><tr style='border-bottom: thin solid'><td>Class</td><td>Frequency</td></tr><tr><td>10-19</td><td>3</td></tr><tr><td>20-29</td><td>"+rand7+"</td></tr><tr><td>30-39</td><td>"+(7-rand7)+"</td></tr><tr style='border-top: thin solid'><td>Total</td><td>10</td></tr></table>"
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
              