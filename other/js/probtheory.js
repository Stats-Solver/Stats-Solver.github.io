$("#set").hide(); $("#ind").hide(); $("#prob").hide(); $("#adv").hide(); $("#bas").show();
$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();  $("#baswhich").hide();
$("#venn1").hide(); $("#venn2").hide(); $("#venn3").hide(); $("#venn4").hide(); $("#venn5").hide();
$("#venn6").hide(); $("#venn7").hide(); $("#venn8").hide(); $("#venn9").hide(); $("#venn10").hide();
$("#venns1").hide(); $("#venns2").hide(); $("#venns0").hide(); $("#probwhich").hide();

var canvas = document.getElementById("venn01");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn1");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn2");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn3");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn4");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn5");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn6");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn7");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn8");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn9");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn10");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("venn11");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

function showstuff(){
    $("#baswhich").hide();  $("#probwhich").hide();
    $("#set").hide(); $("#ind").hide(); $("#prob").hide(); $("#adv").hide(); $("#bas").hide(); 
    $("#events").hide(); $("#blankspace").show();
    var x = document.getElementById("stat").value;
    if (x == "choose") {
        $("#experiments").show();
        $("#experimentexamples").show(); 
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    } else if (x == "set") {
        $("#set").show();
    } else if (x == "bas") {
        $("#bas").show();
    }  else if (x == "prob") {
        $("#prob").show();
    } else if (x == "adv") {
        $("#adv").show();
    } else if (x == "ind") {
        $("#ind").show();
    }
   
   
}

function stat(){
    $("#venn1").hide(); $("#venn2").hide(); $("#venn3").hide(); $("#venn4").hide(); $("#venn5").hide();
    $("#venn6").hide(); $("#venn7").hide(); $("#venn8").hide(); $("#venn9").hide(); $("#venn10").hide();
    $("#venns1").hide(); $("#venns2").hide(); $("#venns0").hide(); 
    $("#proboutputs").show(); $("#how").hide();
    $("#581773186").show();
    $("#output").empty();  $("#myCanvas").hide(); $("#output2").hide();
    var x = document.getElementById("stat").value;
    if (x == "set") {
        set()
    } else if (x == "prob") {
        prob()
    } else if (x == "adv") {
        adv()
    } else if (x == "ind") {
        ind()
    } else if (x == "bas") {
        bas()
    }  else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}


function basshow() {
    var type = document.getElementById("bastype").value;
    if (type == "mon") {
        $("#baswhich").show();
    } else {
        $("#baswhich").hide();
    }  
}


function bas() {
    var type = document.getElementById("bastype").value;
    var which = document.getElementById("baswhich").value;
    if (type == "uni") {
        uni()
    } else if (type == "int") {
        inter()
    } else if (type == "com") {
        compl()
    } else if (type == "sub") {
        sub()
    } else if (type == "mon") {
        if (which == "inc") {
            mono1()
        } else if (which == "dec") {
            mono2()
        }
    }       
}







function uni() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();

    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Union of } A \\text{ and } B: \\\\ A \\cup B = \\{\\omega: \\omega \\in A \\text{ or } \\omega \\in B\\}  }$$ "
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.fillStyle = "LightGray";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    ctx.fillStyle = "LightGray";
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",95,75);
    ctx.fillText("B",200,75);
    

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\displaylines{ \\text{Union of } A_1, A_2, ...: \\\\ \\bigcup_{i=1}^\\infty A_i = \\{\\omega: \\omega \\in A_i \\text{ for some } i\\}  }$$  <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}


function inter() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();

    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Intersection of } A \\text{ and } B: \\\\ A \\cap B = \\{\\omega: \\omega \\in A \\text{ and } \\omega \\in B\\} }$$ "
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.fillStyle = "LightGray";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 1.7*Math.PI, .3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, .7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",95,75);
    ctx.fillText("B",200,75);
    

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\displaylines{ \\text{Intersection of } A_1, A_2, ...: \\\\ \\bigcap_{i=1}^\\infty A_i = \\{\\omega: \\omega \\in A_i \\text{ for all } i\\}  }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function compl() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();

    document.getElementById("output").innerHTML = "$$\\displaylines{ \\text{Complement of A:} \\\\ A^c = \\{\\omega: \\omega \\notin A \\} }$$ "
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.fillStyle = "lightgray";
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    ctx.fill();
    
    ctx.fillStyle = "white";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",110,75);
    ctx.fillText("Aᶜ",210,75);
    

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\text{Note that } A \\cup A^c = \\Omega. $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}





















function sub() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();

    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{A is a subset of B:} \\\\ A \\subset B \\Leftrightarrow \\text{ If } \\omega \\in A, \\text{ then } \\omega \\in B. }$$ "
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.beginPath();
    ctx.arc(130, 75, 35, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 75, 60, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",125,75);
    ctx.fillText("B",180,75);
    

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\displaylines{ \\text{A is equal to B:} \\\\ A = B \\Leftrightarrow A \\subset B \\text{ and } B \\subset A }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

















function disj() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();

    document.getElementById("output").innerHTML = "$$ A \\cap B = \\emptyset $$ "
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    
    
    ctx.beginPath();
    ctx.arc(100, 75, 45, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(200, 75, 45, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",95,75);
    ctx.fillText("B",200,75);
    

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}



















function mono1() {
    $("#output2").show(); $("#output1").show(); $("#venns0").show(); $("#venn01").show();

    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Monotone Increasing:} \\\\ A_1 \\subset A_2 \\subset \\cdots }$$ "
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.beginPath();
    ctx.arc(130, 75, 20, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(140, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 75, 60, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A₁",125,77);
    ctx.fillText("A₂",157,77);
    ctx.fillText("A₃",188,77);
    ctx.fillText("...",215,75);

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\displaylines{ \\text{Definition of Limit:} \\\\ \\lim_{i \\to \\infty} A_i = \\bigcup_{i = 1}^\\infty A_i }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}










function mono2() {
    $("#output2").show(); $("#output1").show(); $("#venns0").show(); $("#venn01").show();

    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Monotone Decreasing:} \\\\ A_1 \\supset A_2 \\supset \\cdots }$$ "
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.beginPath();
    ctx.arc(130, 75, 20, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(140, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 75, 60, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("...",125,75);
    ctx.fillText("A₂",157,77);
    ctx.fillText("A₁",188,77);

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\displaylines{ \\text{Definition of Limit:} \\\\ \\lim_{i \\to \\infty} A_i = \\bigcap_{i = 1}^\\infty A_i }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}







function disjoint1() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();

    document.getElementById("output").innerHTML = "$$ A = (A \\cap B^c) \\cup (A \\cap B) $$ "
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.fillStyle = "Silver";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    ctx.fillStyle = "LightGray";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 1.7*Math.PI, .3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, .7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",65,30);
    ctx.fillText("B",230,30);
    ctx.fillText("A∩B",140,77);
    ctx.fillText("A∩Bᶜ",90,77);
    

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

















function disjoint2() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();

    document.getElementById("output").innerHTML = "$$ B = (A \\cap B) \\cup (A^c \\cap B) $$ "
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.fillStyle = "Silver";
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    ctx.fillStyle = "LightGray";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 1.7*Math.PI, .3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, .7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",65,30);
    ctx.fillText("B",230,30);
    ctx.fillText("A∩B",140,77);
    ctx.fillText("Aᶜ∩B",185,77);
    

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}




















function disjoint3() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();

    document.getElementById("output").innerHTML = "$$ A \\cup B = (A \\cap B^c) \\cup (A \\cap B) \\cup (A^c \\cap B) $$ "
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.fillStyle = "Silver";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    ctx.fillStyle = "LightGray";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 1.7*Math.PI, .3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, .7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",65,30);
    ctx.fillText("B",230,30);
    ctx.fillText("A∩B",140,77);
    ctx.fillText("A∩Bᶜ",90,77);
    ctx.fillText("Aᶜ∩B",185,77);

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}
















function set() {
    var type = document.getElementById("lawtype").value;
    var which = document.getElementById("lawwhich").value;
    if (type == "dis") {
        if (which == "first") {
            dis1()
        } else if (which == "second") {
            dis2()
        } 
    } else if (type == "dem") {
        if (which == "first") {
            dem1()
        } else if (which == "second") {
            dem2()
        } 
    } else if (type == "com") {
        if (which == "first") {
            com1()
        } else if (which == "second") {
            com2()
        } 
    } else if (type == "ass") {
        if (which == "first") {
            ass1()
        } else if (which == "second") {
            ass2()
        } 
    } else if (type == "comp") {
        if (which == "first") {
            comp1()
        } else if (which == "second") {
            comp2()
        } 
    } else if (type == "ident") {
        if (which == "first") {
            ident1()
        } else if (which == "second") {
            ident2()
        } 
    }
}

function dis1() {
    $("#venns2").show(); $("#output2").show(); $("#output1").show(); 
    $("#venn6").show(); $("#venn7").show(); $("#venn8").show(); $("#venn9").show(); $("#venn10").show();
    document.getElementById("output").innerHTML = "$$ \\displaylines{\\text{Distributive Law 1:} \\\\ A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C) }$$  $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in A \\cup (B \\cap C) &\\Leftrightarrow \\omega \\in A \\text{ or } \\omega \\in B \\cap C \\\\ &\\Leftrightarrow \\omega \\in A \\text{ or } (\\omega \\in B \\text{ and } \\omega \\in C) \\\\ &\\Leftrightarrow (\\omega \\in A \\text{ or } \\omega \\in B) \\text{ and } (\\omega \\in A \\text{ or } \\omega \\in C)  \\\\ &\\Leftrightarrow \\omega \\in A \\cup B \\text{ and } \\omega \\in A \\cup C \\\\ &\\Leftrightarrow \\omega \\in (A \\cup B) \\cap (A \\cap B) \\end{align} }$$ $ \\text{Venn Diagrams:} $"
    
    var c = document.getElementById("venn6");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A",146,10);
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);

    
    ctx.stroke();
    
    var c = document.getElementById("venn7");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("B∩C",140,10);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";

    ctx.beginPath();
    ctx.arc(150, 125, 40, 1.39*Math.PI, 1.91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, .39*Math.PI, .91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);

    
    ctx.stroke();
 
    var c = document.getElementById("venn8");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A∪(B∩C)",135,10);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";

    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 1.39*Math.PI, 1.91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, .39*Math.PI, .91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);

    
    ctx.stroke();

    var c = document.getElementById("venn9");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A∪B",145,10);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);

    
    ctx.stroke();

    var c = document.getElementById("venn10");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A∪C",144,10);
    
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";

    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);
    
    ctx.stroke();
    
    
    var c = document.getElementById("venn11");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("(A∪B)∩(A∪C)",130,10);
    
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";

    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 1.39*Math.PI, 1.91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, .39*Math.PI, .91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);
    
    ctx.stroke();
    

    document.getElementById("output2").innerHTML = "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

/////$$ \\text{Show } (A \\cup B)^c \\subset A^c \\cap B^c \\text{ and } A^c \\cap B^c \\subset (A \\cup B)^c $$

function dis2() {
    $("#venns2").show(); $("#output2").show(); 
    $("#venn6").show(); $("#venn7").show(); $("#venn8").show(); $("#venn9").show(); $("#venn10").show();

   document.getElementById("output").innerHTML = "$$ \\displaylines{\\text{Distributive Law 2:} \\\\ A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C) }$$  $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in A \\cap (B \\cup C) &\\Leftrightarrow \\omega \\in A \\text{ and } \\omega \\in B \\cup C \\\\ &\\Leftrightarrow \\omega \\in A \\text{ and } (\\omega \\in B \\text{ or } \\omega \\in C) \\\\ &\\Leftrightarrow (\\omega \\in A \\text{ and } \\omega \\in B) \\text{ or } (\\omega \\in A \\text{ and } \\omega \\in C) \\\\ &\\Leftrightarrow \\omega \\in A \\cap B \\text{ or } \\omega \\in A \\cap C \\\\ &\\Leftrightarrow \\omega \\in (A \\cap B) \\cup (A \\cap B) \\end{align} }$$ $ \\text{Venn Diagrams:} $"
    
    
    var c = document.getElementById("venn6");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A",146,10);
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);

    
    ctx.stroke();
    
    var c = document.getElementById("venn7");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("B∩C",140,10);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";

    ctx.beginPath();
    ctx.arc(150, 125, 40, 1.39*Math.PI, 1.91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, .39*Math.PI, .91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);

    
    ctx.stroke();
 
    var c = document.getElementById("venn8");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A∪(B∩C)",135,10);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";

    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 1.39*Math.PI, 1.91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, .39*Math.PI, .91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);

    
    ctx.stroke();

    var c = document.getElementById("venn9");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A∪B",145,10);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);

    
    ctx.stroke();

    var c = document.getElementById("venn10");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A∪C",144,10);
    
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";

    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);
    
    ctx.stroke();
    
    
    var c = document.getElementById("venn11");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("(A∪B)∩(A∪C)",130,10);
    
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";

    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 1.39*Math.PI, 1.91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, .39*Math.PI, .91*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 125, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 180);
    ctx.lineTo(250, 180);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);
    ctx.fillText("C",147,130);
    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function dem1() {
    $("#venns1").show(); $("#output2").show(); $("#output1").show();
    $("#venn1").show(); $("#venn2").show(); $("#venn3").show(); $("#venn4").show(); $("#venn5").show();

    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Demorgan's Law 1:} \\\\ (A \\cup B)^c = A^c \\cap B^c } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in (A \\cup B)^c	&\\Leftrightarrow \\omega \\notin A \\cup B \\\\ &\\Leftrightarrow \\omega \\notin A \\text{ and } \\omega \\notin B \\\\ &\\Leftrightarrow \\omega \\in A^c \\text{ and } \\omega \\in B^c \\\\ &\\Leftrightarrow \\omega \\in A^c \\cap B^c \\end{align} }$$ $ \\text{Venn Diagrams:} $"
    
    var c = document.getElementById("venn1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A∪B",135,10);
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);

    
    ctx.stroke();
    
    var c = document.getElementById("venn2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("(A∪B)",135,10);
    ctx.fillText("c",160,6);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);

    
    ctx.stroke();
 
    var c = document.getElementById("venn3");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A",149,10);
    ctx.fillText("c",155,6);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);

    
    ctx.stroke();

    var c = document.getElementById("venn4");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("B",149,10);
    ctx.fillText("c",156,6);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);

    
    ctx.stroke();

    var c = document.getElementById("venn5");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A",144,10);
    ctx.fillText("c",150,6);
    ctx.fillText("∩B",155,10);
    ctx.fillText("c",167,6);
    
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);

    
    ctx.stroke();
    

    document.getElementById("output2").innerHTML = "$$ \\displaylines{\\text{Generalization:} \\\\ \\left( \\bigcup_{i=1}^n{A_i} \\right) ^c = \\bigcap_{i=1}^n{A_i^c} }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in \\left( \\bigcup_{i=1}^n{A_i} \\right)^c	&\\Leftrightarrow \\omega \\notin \\bigcup_{i=1}^n{A_i} \\\\ &\\Leftrightarrow \\omega \\notin A_i \\text{, for all } i=1,...,n \\\\ &\\Leftrightarrow \\omega \\in A_i^c \\text{, for all } i=1,...,n \\\\ &\\Leftrightarrow \\omega \\in \\bigcap_{i=1}^n{A_i^c} \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

/////$$ \\text{Show } (A \\cup B)^c \\subset A^c \\cap B^c \\text{ and } A^c \\cap B^c \\subset (A \\cup B)^c $$

function dem2() {
    $("#venns1").show(); $("#output2").show(); $("#output1").show();
    $("#venn1").show(); $("#venn2").show(); $("#venn3").show(); $("#venn4").show(); $("#venn5").show();

    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Demorgan's Law 2:} \\\\ (A \\cap B)^c = A^c \\cup B^c} $$ $$ \\displaylines{\\text{Proof:} \\\\ \\begin{align} \\omega \\in (A \\cap B)^c	&\\Leftrightarrow \\omega \\notin A \\cap B \\\\ &\\Leftrightarrow \\omega \\notin A \\text{ or } \\omega \\notin B \\\\ &\\Leftrightarrow \\omega \\in A^c \\text{ or } \\omega \\in B^c \\\\ &\\Leftrightarrow \\omega \\in A^c \\cup B^c \\end{align}} $$ $ \\text{Venn Diagrams:} $"
    
    var c = document.getElementById("venn1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A∩B",135,10);
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 1.7*Math.PI, .3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, .7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);

    
    ctx.stroke();
    
    var c = document.getElementById("venn2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("(A∩B)",135,10);
    ctx.fillText("c",160,6);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(125, 75, 40, 1.7*Math.PI, .3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, .7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);

    
    ctx.stroke();

    
    var c = document.getElementById("venn3");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A",149,10);
    ctx.fillText("c",155,6);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);

    
    ctx.stroke();

    
    
    var c = document.getElementById("venn4");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("B",149,10);
    ctx.fillText("c",156,6);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);

    
    ctx.stroke();
    

    var c = document.getElementById("venn5");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("A",144,10);
    ctx.fillText("c",150,6);
    ctx.fillText("∪B",155,10);
    ctx.fillText("c",167,6);
    
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(125, 75, 40, 1.7*Math.PI, .3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, .7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",115,75);
    ctx.fillText("B",180,75);

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = "$$ \\displaylines{\\text{Generalization:} \\\\ \\left( \\bigcap_{i=1}^n{A_i} \\right) ^c = \\bigcup_{i=1}^n{A_i^c} }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in \\left( \\bigcap_{i=1}^n{A_i} \\right)^c	&\\Leftrightarrow \\omega \\notin \\bigcap_{i=1}^n{A_i} \\\\ &\\Leftrightarrow \\omega \\notin A_i \\text{, for some } i=1,...,n \\\\ &\\Leftrightarrow \\omega \\in A_i^c \\text{, for some } i=1,...,n \\\\ &\\Leftrightarrow \\omega \\in \\bigcup_{i=1}^n{A_i^c} \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function com1() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Commutative Law 1:} \\\\ A \\cup B = B \\cup A } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in A \\cup B &\\Leftrightarrow \\omega \\in A \\text{ or } \\omega \\in B \\\\ &\\Leftrightarrow \\omega \\in B \\text{ or } \\omega \\in A \\\\ &\\Leftrightarrow \\omega \\in B \\cup A \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

/////$$ \\text{Show } (A \\cup B)^c \\subset A^c \\cap B^c \\text{ and } A^c \\cap B^c \\subset (A \\cup B)^c $$

function com2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Commutative Law 2:} \\\\ A \\cap B = B \\cap A } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in A \\cap B &\\Leftrightarrow \\omega \\in A \\text{ and } \\omega \\in B \\\\ &\\Leftrightarrow \\omega \\in B \\text{ and } \\omega \\in A \\\\ &\\Leftrightarrow \\omega \\in B \\cap A \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function ass1() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Associative Law 1:} \\\\ A \\cup (B \\cup C) = (A \\cup B) \\cup C } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in A \\cup (B \\cup C) &\\Leftrightarrow \\omega \\in A \\text{ or } \\omega \\in B \\cup C \\\\ &\\Leftrightarrow \\omega \\in A \\text{ or } (\\omega \\in B \\text{ or } \\omega \\in C) \\\\ &\\Leftrightarrow (\\omega \\in A \\text{ or } \\omega \\in B) \\text{ or } \\omega \\in C \\\\ &\\Leftrightarrow \\omega \\in A \\cup B \\text{ or } \\omega \\in C \\\\ &\\Leftrightarrow \\omega \\in (A \\cup B) \\cup C \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

/////$$ \\text{Show } (A \\cup B)^c \\subset A^c \\cap B^c \\text{ and } A^c \\cap B^c \\subset (A \\cup B)^c $$

function ass2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Associative Law 2:} \\\\ A \\cap (B \\cap C) = (A \\cap B) \\cap C } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in A \\cap (B \\cap C) &\\Leftrightarrow \\omega \\in A \\text{ and } \\omega \\in B \\cap C \\\\ &\\Leftrightarrow \\omega \\in A \\text{ and } (\\omega \\in B \\text{ and } \\omega \\in C) \\\\ &\\Leftrightarrow (\\omega \\in A \\text{ and } \\omega \\in B) \\text{ and } \\omega \\in C \\\\ &\\Leftrightarrow \\omega \\in A \\cap B \\text{ and } \\omega \\in C \\\\ &\\Leftrightarrow \\omega \\in (A \\cap B) \\cap C \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function comp1() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Complement Law 1:} \\\\ A \\cup A^c = \\omega } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in A \\cup A^c &\\Leftrightarrow \\omega \\in A \\text{ or } \\omega \\in A^c \\\\ &\\Leftrightarrow \\omega \\in A \\text{ or } \\omega \\notin A \\\\ &\\Leftrightarrow \\omega \\in \\Omega \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

/////$$ \\text{Show } (A \\cup B)^c \\subset A^c \\cap B^c \\text{ and } A^c \\cap B^c \\subset (A \\cup B)^c $$

function comp2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Complement Law 2:} \\\\ A \\cap A^c = \\emptyset } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} \\omega \\in A \\cap A^c &\\Leftrightarrow \\omega \\in A \\text{ and } \\omega \\in A^c \\\\ &\\Leftrightarrow \\omega \\in A \\text{ and } \\omega \\notin A \\\\ &\\Leftrightarrow \\omega \\in \\emptyset \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}



















function ident1() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Identity Law 1:} \\\\ A \\cup \\emptyset = A } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} s \\in A \\cup \\emptyset &\\Leftrightarrow s \\in A \\text{ or } s \\in \\emptyset \\\\ &\\Leftrightarrow s \\in A  \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function ident2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Identity Law 2:} \\\\ A \\cap S = A } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} s \\in A \\cap S &\\Leftrightarrow s \\in A \\text{ and } s \\in S \\\\ &\\Leftrightarrow s \\in A \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}









function probshow() {
    var type = document.getElementById("probtype").value;
    if (type == "dis") {
        $("#probwhich").show();
    } else {
        $("#probwhich").hide();
    }  
}






function prob() {
    var type = document.getElementById("probtype").value;
    var which = document.getElementById("probwhich").value;
    if (type == "comp") {
        comp()
    } else if (type == "empty") {
        empty()
    } else if (type == "subset") {
        subset()
    } else if (type == "one") {
        one()
    } else if (type == "union") {
        union()
    } else if (type == "dis") {
        if (which == "a") {
            disjoi1()
        } else if (which == "b") {
            disjoi2()
        } 
    }
}

function comp() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property 1:} \\\\ P(A) = 1 - P(A^c) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A) + P(A^c) &= P(A \\cup A^c) \\tag{Axiom 3} \\\\ &= P(\\Omega) \\\\ &= 1  \\tag{Axiom 2} \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
    
    //A \\cup A^c = s \\Rightarrow P(A \\cup A^c) = P(S) = 1 \\\\ A \\cap A^c = \\emptyset \\Rightarrow P(A \\cup A^c) = P(A) + P(A^c) \\\\  P(A) + P(A^c) = 1 \\Rightarrow P(A) = 1 - P(A^c)
}

function empty() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property 2:} \\\\ P(\\emptyset) = 0 }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(\\emptyset) &= 1 - P(\\emptyset ^c) \\tag{Property 1} \\\\ &= 1 - P(\\Omega) \\\\ &= 1 - 1 \\tag{Axiom 2} \\\\ &= 0 \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function subset() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();
    
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property 3:} \\\\ \\text{If } A \\subset B, \\text{ then } P(A) \\leq P(B) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(B) &= P[A \\cup (A^c \\cap B)] \\tag{See Venn} \\\\ &= P(A) + P(A^c \\cap B) \\tag{Axiom 3} \\\\ &\\geq P(A) \\tag{Axiom 1} \\end{align} } $$"
    MathJax.typeset();
    
    // $ \\displaylines{ \\text{Venn Diagram:} \\\\ B = A \\cup (A^c \\cap B) } $
    
    //$$ \\displaylines{ \\text{Property 3:} \\\\ \\text{If } A \\subset B, \\text{ then } P(A) \\leq P(B) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(B) &= P[A \\cup (A^c \\cap B)] \\tag{Venn} \\\\ &= P(A) + P(A^c \\cap B) \\tag{Axiom 3} \\\\ &\\geq P(A) \\tag{Axiom 1} \\end{align} } $$
    
    //$$ \\displaylines{ \\text{Property 3:} \\\\ \\text{If } A \\subset B, \\text{ then } P(A) \\leq P(B) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(B) &= P(S \\cap B) \\\\ &= P[(A \\cup A^c) \\cap B)] \\\\ &= P[(A \\cap B) \\cup (A^c \\cup B)] \\\\ &= P[A \\cup (A^c \\cap B)] \\tag{Venn} \\\\ &= P(A) + P(A^c \\cap B) \\tag{Axiom 3} \\\\ &\\geq P(A) \\tag{Axiom 1} \\end{align} } $$
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    
    ctx.fillStyle = "LightGray";
    
    ctx.beginPath();
    ctx.arc(150, 75, 60, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.fillStyle = "Silver";
    
    ctx.beginPath();
    ctx.arc(130, 75, 35, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    
    ctx.beginPath();
    ctx.arc(130, 75, 35, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(150, 75, 60, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",125,75);
    ctx.fillText("Aᶜ∩B",173,75);
    ctx.fillText("B",215,75);

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
}

function one() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property 4:} \\\\ 0 \\leq P(A) \\leq 1 }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} 0 &\\leq P(A) \\tag{Axiom 1} \\\\ &\\leq P(\\Omega) \\tag{Property 3} \\\\ &= 1 \\tag{Axiom 2} \\end{align} } $$  <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
    
    //$$ \\begin{align} P(A) &= P(B) - P(A^c \\cap B) \\\\ &\\leq P(B) \\end{align}   $$
}

function disjoi1() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();
    
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property 5a:} \\\\ P(A \\cap B^c) = P(A) - P(A \\cap B) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A) &= P[(A \\cap B^c) \\cup (A \\cap B)] \\tag{See Venn} \\\\ &= P(A \\cap B^c) + P(A \\cap B) \\tag{Axiom 3} \\end{align} } $$   "
    MathJax.typeset();
    
    //$ \\displaylines{ \\text{Venn Diagram:} \\\\ A \\cup B = (A \\cap B^c) \\cup (A \\cap B) \\cup (A^c \\cap B) } $
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.fillStyle = "Silver";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    ctx.fillStyle = "LightGray";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 1.7*Math.PI, .3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, .7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",65,30);
    ctx.fillText("B",230,30);
    ctx.fillText("A∩B",140,77);
    ctx.fillText("A∩Bᶜ",90,77);
    

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
}

function disjoi2() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();
    
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property 5b:} \\\\ P(A^c \\cap B) = P(B) - P(A \\cap B) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(B) &= P[(A \\cap B) \\cup (A^c \\cap B)] \\tag{See Venn} \\\\ &= P(A \\cap B) + P(A^c \\cap B) \\tag{Axiom 3} \\end{align} } $$   "
    MathJax.typeset();
    
    //$ \\displaylines{ \\text{Venn Diagram:} \\\\ A \\cup B = (A \\cap B^c) \\cup (A \\cap B) \\cup (A^c \\cap B) } $
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.fillStyle = "Silver";
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    ctx.fillStyle = "LightGray";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 1.7*Math.PI, .3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, .7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",65,30);
    ctx.fillText("B",230,30);
    ctx.fillText("A∩B",140,77);
    ctx.fillText("Aᶜ∩B",185,77);
    

    
    ctx.stroke();
    
    
    document.getElementById("output2").innerHTML = " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
}

function union() {
    $("#venns0").show();  $("#output2").show(); $("#output1").show(); $("#venn01").show();
    
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property 6:} \\\\ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A \\cup B) &= P[(A \\cap B^c) \\cup (A \\cap B) \\cup (A^c \\cap B)] \\tag{See Venn} \\\\ &= P(A \\cap B^c) + P(A \\cap B) + P(A^c \\cap B) \\tag{Axiom 3} \\\\ &= [P(A) - P(A \\cap B)] + P(A \\cap B) \\\\ &+ [P(B) - P(A \\cap B)] \\tag{Property 5} \\\\ &= P(A) + P(B) - P(A \\cap B) \\end{align} } $$   "
    MathJax.typeset();
    
    //$ \\displaylines{ \\text{Venn Diagram:} \\\\ A \\cup B = (A \\cap B^c) \\cup (A \\cap B) \\cup (A^c \\cap B) } $
    
    var c = document.getElementById("venn01");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    
    ctx.strokeStyle = 'black';
    
    
    ctx.fillStyle = "Silver";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    ctx.fillStyle = "LightGray";
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 1.7*Math.PI, .3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, .7*Math.PI, 1.3*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    
    
    ctx.beginPath();
    ctx.arc(115, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(185, 75, 55, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(35, 5);
    ctx.lineTo(35, 145);
    ctx.lineTo(265, 145);
    ctx.lineTo(265, 5);
    ctx.lineTo(35, 5);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",65,30);
    ctx.fillText("B",230,30);
    ctx.fillText("A∩B",140,77);
    ctx.fillText("A∩Bᶜ",90,77);
    ctx.fillText("Aᶜ∩B",185,77);

    
    ctx.stroke();
    
    document.getElementById("output2").innerHTML = " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
}










function advshow(){
   var type = document.getElementById("advtype").value;
   if (type == "cont") {
        $("#advwhich").show();
    } else {
        $("#advwhich").hide();
    } 
}










function adv() {
    var type = document.getElementById("advtype").value;
    var which = document.getElementById("advwhich").value;
    if (type == "cont") {
        if (which == "inc") {
            cont1()
        } else if (which == "dec") {
            cont2()
        }
    } else if (type == "boole") {
        boole()
    } else if (type == "inc") {
        incexc1()
    } else if (type == "bonf") {
        bonf()
    }
}

function cont1() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Continuity of Probability:} \\\\ \\lim_{n \\to \\infty} P(A_n) = P \\left( \\lim_{n \\to \\infty} A_n \\right) }$$ $$ \\displaylines{ \\text{Proof (Increasing):} \\\\ \\text{Let } B_1 = A_1 \\text{ and for } n>1, B_n = A_n \\cap A_{n-1}^c. \\\\ \\begin{align} P \\left( \\lim_{n \\to \\infty} A_n \\right) &= P \\left( \\bigcup_{n = 1}^\\infty A_n \\right) = P \\left( \\bigcup_{n = 1}^\\infty B_n \\right) \\\\ &= \\sum_{n = 1}^\\infty P(B_n) = \\lim_{n \\to \\infty} \\sum_{i = 1}^n P(B_i) \\\\ &= \\lim_{n \\to \\infty} P(A_n) \\end{align} }  $$  <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"


    MathJax.typeset();
    
    //\\lim_{n \\to \\infty} (P(R_1) + \\sum_{i = 2}^n P(R_n) - P(R_{n-1})
    
    //\\\\ \\text{Since } \\{A_n\\} \\text{ is increasing, lim}_{n \\to \\infty} A_n = \\cup_{n=1}^\\infty A_n.
    //\\\\ \\text{Then } \\cup_{n=1}^\\infty A_n = \\cup_{n=1}^\\infty R_n \\text{ and } R_m \\cap R_n = \\emptyset \\text{ for } m \\neq n.
    //\\\\ &= \\lim_{n \\to \\infty} \\left(P(A_1) + \\sum_{i = 2}^n [P(A_i) - P(A_{i-1})] \\right)
    //&= \\lim_{n \\to \\infty} P(A_1) + \\sum_{i = 1}^n [P(A_i)-P(A_{i-1})] \\\\
    
    //$$ \\displaylines{ \\text{Proof:} \\\\ \\text{Let } B_1 = A_1 \\text{ and for } n>1, B_n = A_n \\cap A_{n-1}^c. \\\\ \\text{Then } \\cup_{n = 1}^\\infty B_n = \\cup_{n = 1}^\\infty A_n \\text{ and } B_i \\cap B_j = \\emptyset \\text{ for } i \\neq j. \\\\ \\begin{align} P \\left( \\lim_{n \\to \\infty} A_n \\right) &= P \\left( \\bigcup_{n = 1}^\\infty A_n \\right) \\tag{Definition} \\\\ &= P \\left( \\bigcup_{n = 1}^\\infty B_n \\right) \\tag{Construction} \\\\ &= \\sum_{n = 1}^\\infty P(B_n) \\tag{Axiom 3} \\\\ &= \\lim_{n \\to \\infty} \\sum_{i = 1}^n P(B_i) \\\\ &= \\lim_{n \\to \\infty} P(A_n) \\end{align} }  $$
    
    //\\\\ \\text{Then } \\cup_{n = 1}^\\infty B_n = \\cup_{n = 1}^\\infty A_n \\text{ and } B_i \\cap B_j = \\emptyset \\text{ for } i \\neq j. 
    
}

function cont2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Continuity of Probability:} \\\\ \\lim_{n \\to \\infty} P(A_n) = P \\left( \\lim_{n \\to \\infty} A_n \\right) }$$ $$ \\displaylines{ \\text{Proof (Decreasing):} \\\\ \\begin{align} P \\left( \\lim_{n \\to \\infty} A_n \\right) &= P \\left( \\bigcap_{n = 1}^\\infty A_n \\right) = 1 - P \\left[ \\left( \\bigcap_{n = 1}^\\infty A_n \\right) ^c \\right] \\\\ &= 1 - P \\left( \\bigcup_{n = 1}^\\infty A_n  ^c \\right) = 1 - P \\left( \\lim_{n \\to \\infty} A_n^c \\right) \\\\ &= 1 - \\lim_{n \\to \\infty} P(A_n^c) = \\lim_{n \\to \\infty} [1 - P(A_n^c)] \\\\ &= \\lim_{n \\to \\infty} P(A_n) \\end{align} } $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"


    MathJax.typeset();
    
    //\\lim_{n \\to \\infty} (P(R_1) + \\sum_{i = 2}^n P(R_n) - P(R_{n-1})
    
    //\\\\ \\text{Since } \\{A_n\\} \\text{ is increasing, lim}_{n \\to \\infty} A_n = \\cup_{n=1}^\\infty A_n.
    //\\\\ \\text{Then } \\cup_{n=1}^\\infty A_n = \\cup_{n=1}^\\infty R_n \\text{ and } R_m \\cap R_n = \\emptyset \\text{ for } m \\neq n.
    //\\\\ &= \\lim_{n \\to \\infty} \\left(P(A_1) + \\sum_{i = 2}^n [P(A_i) - P(A_{i-1})] \\right)
    
    
}






function boole() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Boole's Inequality:} \\\\ P \\left( \\bigcup_{i = 1}^\\infty A_i \\right) \\leq \\sum_{i = 1}^\\infty P(A_i) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\text{Let } B_1 = A_1 \\text{ and for } i>1, B_i = A_i \\backslash \\cup_{j=1}^{i-1} A_j. \\\\ \\text{Then } \\cup_{i = 1}^\\infty A_i = \\cup_{i = 1}^\\infty B_i \\text{ and } B_m \\cap B_n = \\emptyset \\text{ for } m \\neq n. \\\\ \\text{As well, we have } P(B_i) \\leq P(A_i) \\text{ for each } i. \\\\ \\begin{align} P \\left( \\bigcup_{i = 1}^\\infty A_i \\right) &= P \\left( \\bigcup_{i = 1}^\\infty B_i \\right) = \\sum_{i = 1}^\\infty P(B_i) \\leq \\sum_{i = 1}^\\infty P(A_i)  \\end{align} }  $$  <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"


    MathJax.typeset();
    
    //\\lim_{n \\to \\infty} (P(R_1) + \\sum_{i = 2}^n P(R_n) - P(R_{n-1})
    
    //\\\\ \\text{Since } \\{A_n\\} \\text{ is increasing, lim}_{n \\to \\infty} A_n = \\cup_{n=1}^\\infty A_n.
    //\\\\ \\text{Then } \\cup_{n=1}^\\infty A_n = \\cup_{n=1}^\\infty R_n \\text{ and } R_m \\cap R_n = \\emptyset \\text{ for } m \\neq n.
    //\\\\ &= \\lim_{n \\to \\infty} \\left(P(A_1) + \\sum_{i = 2}^n [P(A_i) - P(A_{i-1})] \\right)
    //&= \\lim_{n \\to \\infty} P(A_1) + \\sum_{i = 1}^n [P(A_i)-P(A_{i-1})] \\\\
    
    //$$ \\displaylines{ \\text{Proof:} \\\\ \\text{Let } B_1 = A_1 \\text{ and for } n>1, B_n = A_n \\cap A_{n-1}^c. \\\\ \\text{Then } \\cup_{n = 1}^\\infty B_n = \\cup_{n = 1}^\\infty A_n \\text{ and } B_i \\cap B_j = \\emptyset \\text{ for } i \\neq j. \\\\ \\begin{align} P \\left( \\lim_{n \\to \\infty} A_n \\right) &= P \\left( \\bigcup_{n = 1}^\\infty A_n \\right) \\tag{Definition} \\\\ &= P \\left( \\bigcup_{n = 1}^\\infty B_n \\right) \\tag{Construction} \\\\ &= \\sum_{n = 1}^\\infty P(B_n) \\tag{Axiom 3} \\\\ &= \\lim_{n \\to \\infty} \\sum_{i = 1}^n P(B_i) \\\\ &= \\lim_{n \\to \\infty} P(A_n) \\end{align} }  $$
    
    //\\\\ \\text{Then } \\cup_{n = 1}^\\infty B_n = \\cup_{n = 1}^\\infty A_n \\text{ and } B_i \\cap B_j = \\emptyset \\text{ for } i \\neq j. 
    
}









function incexc1() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Inclusion Exclusion Formula:} \\\\ P(A_1 \\cup A_2 \\cup \\dots \\cup A_k) = p_1 - p_2 + p_3 - \\dots + (-1)^{k+1}p_k \\\\ \\text{where } p_i \\text{ equals the sum of the probabilities} \\\\ \\text{of all possible intersections involving } i \\text{ sets.} }$$ $$ \\displaylines{ \\text{Proof } (k=3): \\\\ \\begin{align} &P(A_1 \\cup A_2 \\cup A_3) \\\\ &= P[(A_1 \\cup A_2) \\cup A_3] \\tag{Associative} \\\\ &= P(A_1 \\cup A_2) + P(A_3) - P[(A_1 \\cup A_2) \\cap A_3] \\tag{Property 5} \\\\ &= P(A_1) + P(A_2) - P(A_1 \\cap A_2) + P(A_3) \\\\ &- P[(A_1 \\cap A_3) \\cup (A_2 \\cap A_3)] \\tag{Distributive} \\\\ &= P(A_1) + P(A_2) + P(A_3) - P(A_1 \\cap A_2) \\\\ &- P(A_1 \\cap A_3) - P(A_2 \\cap A_3) + P(A_1 \\cap A_2 \\cap A_3) \\tag{Property 5} \\end{align} }  $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"


    MathJax.typeset();
    
    //\\lim_{n \\to \\infty} (P(R_1) + \\sum_{i = 2}^n P(R_n) - P(R_{n-1})
    
    //\\\\ \\text{Since } \\{A_n\\} \\text{ is increasing, lim}_{n \\to \\infty} A_n = \\cup_{n=1}^\\infty A_n.
    //\\\\ \\text{Then } \\cup_{n=1}^\\infty A_n = \\cup_{n=1}^\\infty R_n \\text{ and } R_m \\cap R_n = \\emptyset \\text{ for } m \\neq n.
    //\\\\ &= \\lim_{n \\to \\infty} \\left(P(A_1) + \\sum_{i = 2}^n [P(A_i) - P(A_{i-1})] \\right)
    
    //document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Inclusion Exclusion Formula:} \\\\ P(A_1 \\cup A_2 \\cup A_3) = p_1 - p_2 + p_3 \\\\ \\text{where} \\\\ \\begin{align} p_1 &= P(A_1) + P(A_2) + P(A_3) \\\\ p_2 &= P(A_1 \\cap A_2) + P(A_1 \\cap A_3) + P(A_2 \\cap A_3) \\\\ p_3 &= P(A_1 \\cap A_2 \\cap A_3) \\end{align} }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} &P(A_1 \\cup A_2 \\cup A_3) \\\\ &= P[(A_1 \\cup A_2) \\cup A_3] \\tag{Associative} \\\\ &= P(A_1 \\cup A_2) + P(A_3) - P[(A_1 \\cup A_2) \\cap A_3] \\tag{Property 5} \\\\ &= P(A_1) + P(A_2) - P(A_1 \\cap A_2) + P(A_3) \\\\ &- P[(A_1 \\cap A_3) \\cup (A_2 \\cap A_3)] \\tag{Distributive} \\\\ &= P(A_1) + P(A_2) + P(A_3) - P(A_1 \\cap A_2) \\\\ &- P(A_1 \\cap A_3) - P(A_2 \\cap A_3) + P(A_1 \\cap A_2 \\cap A_3) \\tag{Property 5} \\end{align} }  $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    
}















function bonf() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Bonferonni's Inequality:} \\\\ P(A \\cap B) \\geq P(A) + P(B) - 1 }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A) + P(B) - P(A \\cap B) &= P(A \\cup B) \\tag{Property 5} \\\\ &\\leq P(S) \\tag{Property 3} \\\\ &= 1 \\tag{Axiom 2} \\end{align} } $$  <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}












function ind() {
    var which = document.getElementById("indwhich").value;
    if (which == "1") {
        ind1()
    } else if (which == "2") {
        ind2()
    } else if (which == "3") {
        ind3()
    }
}

function ind1() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{If } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then } A^c \\text{ and } B \\text{ are independent.} } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A^c \\cap B) &= P(B) - P(A \\cap B) \\tag{Property 5} \\\\ &= P(B) - P(A)P(B) \\tag{Definition} \\\\ &= [1 - P(A)]P(B) \\\\ &= P(A^c)P(B) \\tag{Property 1} \\end{align}}$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
    //\\begin{align} P(B) &= P[(A^c \\cap B) \\cup (A \\cap B)] \\\\ &= P(A^c \\cap B) + P(A \\cap B) \\end{align}} $$ $$
    //$$ \\displaylines{ \\text{If events } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then events } A^c \\text{ and } B \\text{ are independent.} } $$
    //$$ \\text{If } A \\perp B, \\text{ then } A^c \\perp B. $$ 
}

function ind2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{If } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then } A \\text{ and } B^c \\text{ are independent.} } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A \\cap B^c) &= P(A) - P(A \\cap B) \\tag{Property 5} \\\\ &= P(A) - P(A)P(B) \\tag{Definition} \\\\ &= P(A)[1 - P(B)] \\\\ &= P(A)P(B^c) \\tag{Property 1} \\end{align}}$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
    //\\begin{align} P(B) &= P[(A^c \\cap B) \\cup (A \\cap B)] \\\\ &= P(A^c \\cap B) + P(A \\cap B) \\end{align}} $$ $$
    //$$ \\displaylines{ \\text{If events } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then events } A \\text{ and } B^c \\text{ are independent.} } $$
    //$$ \\text{If } A \\perp B, \\text{ then } A \\perp B^c. $$ 
}

function ind3() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{If } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then } A \\text{ and } B^c \\text{ are independent.} } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A^c \\cap B^c) &= P[(A \\cup B)^c] \\tag{DeMorgan's} \\\\ &= 1 - P(A \\cup B) \\tag{Property 1} \\\\ &= 1 - [P(A) + P(B) - P(A \\cap B)] \\tag{Property 5} \\\\ &= 1 - P(A) - P(B) + P(A)P(B) \\tag{Definition} \\\\ &= [1 - P(A)] - [1 - P(A)]P(B) \\\\ &= [1 - P(A)][1 - P(B)] \\\\ &= P(A^c)P(B^c) \\tag{Property 1}  \\end{align}}$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
    //$$ \\displaylines{ \\text{If events } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then events } A \\text{ and } B^c \\text{ are independent.} } $$
    //$$ \\text{If } A \\perp B, \\text{ then } A^c \\perp B^c. $$
}