$("#setprops").show(); $("#ind").hide(); $("#probprops").hide(); 
$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide(); 
$("#venn1").hide(); $("#venn2").hide(); $("#venn3").hide(); $("#venn4").hide(); $("#venn5").hide();
$("#venn6").hide(); $("#venn7").hide(); $("#venn8").hide(); $("#venn9").hide(); $("#venn10").hide();
$("#venns1").hide(); $("#venns2").hide();

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
    $("#events").hide(); $("#blankspace").show();
    var x = document.getElementById("stat").value;
    if (x == "choose") {
        $("#experiments").show();
        $("#experimentexamples").show(); 
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    } else if (x == "setprops") {
        $("#setprops").show(); $("#ind").hide();
    } else if (x == "distributive") {
        $("#demorgan").show(); $("#ind").hide();
    } else if (x == "ind") {
        $("#ind").show(); $("#setprops").hide();
    }
   
   
}

function stat(){
    $("#venn1").hide(); $("#venn2").hide(); $("#venn3").hide(); $("#venn4").hide(); $("#venn5").hide();
    $("#venn6").hide(); $("#venn7").hide(); $("#venn8").hide(); $("#venn9").hide(); $("#venn10").hide();
    $("#venns1").hide(); $("#venns2").hide();
    $("#proboutputs").show(); $("#how").hide();
    $("#581773186").show();
    $("#output").empty();  $("#myCanvas").hide(); $("#output2").hide();
    var x = document.getElementById("stat").value;
    if (x == "setprop") {
        compsetprop()
    } else if (x == "distributive") {
        compdistributive()
    } else if (x == "ind") {
        ind()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function compsetprop() {
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
    }
}

function dis1() {
    $("#venns2").show(); $("#output2").show(); $("#output1").show(); 
    $("#venn6").show(); $("#venn7").show(); $("#venn8").show(); $("#venn9").show(); $("#venn10").show();
    document.getElementById("output").innerHTML = "$$ \\displaylines{\\text{First Distributive Law:} \\\\ A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C) }$$  $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} x \\in A \\cup (B \\cap C) &\\Leftrightarrow x \\in A \\text{ or } x \\in B \\cap C \\\\ &\\Leftrightarrow x \\in A \\text{ or } (x \\in B \\text{ and } x \\in C) \\\\ &\\Leftrightarrow (x \\in A \\text{ or } x \\in B) \\text{ and } (x \\in A \\text{ or } x \\in C)  \\\\ &\\Leftrightarrow x \\in A \\cup B \\text{ and } x \\in A \\cup C \\\\ &\\Leftrightarrow x \\in (A \\cup B) \\cap (A \\cap B) \\end{align} }$$ $ \\text{Venn Diagram:} $"
    
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

   document.getElementById("output").innerHTML = "$$ \\displaylines{\\text{Second Distributive Law:} \\\\ A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C) }$$  $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} x \\in A \\cap (B \\cup C) &\\Leftrightarrow x \\in A \\text{ and } x \\in B \\cup C \\\\ &\\Leftrightarrow x \\in A \\text{ and } (x \\in B \\text{ or } x \\in C) \\\\ &\\Leftrightarrow (x \\in A \\text{ and } x \\in B) \\text{ or } (x \\in A \\text{ and } x \\in C) \\\\ &\\Leftrightarrow x \\in A \\cap B \\text{ or } x \\in A \\cap C \\\\ &\\Leftrightarrow x \\in (A \\cap B) \\cup (A \\cap B) \\end{align} }$$ $ \\text{Venn Diagrams:} $"
    
    
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

    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Demorgan's First Law:} \\\\ (A \\cup B)^c = A^c \\cap B^c } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} x \\in (A \\cup B)^c	&\\Leftrightarrow x \\notin A \\cup B \\\\ &\\Leftrightarrow x \\notin A \\text{ and } x \\notin B \\\\ &\\Leftrightarrow x \\in A^c \\text{ and } x \\in B^c \\\\ &\\Leftrightarrow x \\in A^c \\cap B^c \\end{align} }$$ $ \\text{Venn Diagrams:} $"
    
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
    

    document.getElementById("output2").innerHTML = "$$ \\displaylines{\\text{Generalization:} \\\\ \\left( \\bigcup_{i=1}^n{A_i} \\right) ^c = \\bigcap_{i=1}^n{A_i^c} }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} x \\in \\left( \\bigcup_{i=1}^n{A_i} \\right)^c	&\\Leftrightarrow x \\notin \\bigcup_{i=1}^n{A_i} \\\\ &\\Leftrightarrow x \\notin A_i \\text{, for all } i=1,...,n \\\\ &\\Leftrightarrow x \\in A_i^c \\text{, for all } i=1,...,n \\\\ &\\Leftrightarrow x \\in \\bigcap_{i=1}^n{A_i^c} \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

/////$$ \\text{Show } (A \\cup B)^c \\subset A^c \\cap B^c \\text{ and } A^c \\cap B^c \\subset (A \\cup B)^c $$

function dem2() {
    $("#venns1").show(); $("#output2").show(); $("#output1").show();
    $("#venn1").show(); $("#venn2").show(); $("#venn3").show(); $("#venn4").show(); $("#venn5").show();

    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Demorgan's Second Law:} \\\\ (A \\cap B)^c = A^c \\cup B^c} $$ $$ \\displaylines{\\text{Proof:} \\\\ \\begin{align} x \\in (A \\cap B)^c	&\\Leftrightarrow x \\notin A \\cap B \\\\ &\\Leftrightarrow x \\notin A \\text{ or } x \\notin B \\\\ &\\Leftrightarrow x \\in A^c \\text{ or } x \\in B^c \\\\ &\\Leftrightarrow x \\in A^c \\cup B^c \\end{align}} $$ $ \\text{Venn Diagrams:} $"
    
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
    
    document.getElementById("output2").innerHTML = "$$ \\displaylines{\\text{Generalization:} \\\\ \\left( \\bigcap_{i=1}^n{A_i} \\right) ^c = \\bigcup_{i=1}^n{A_i^c} }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} x \\in \\left( \\bigcap_{i=1}^n{A_i} \\right)^c	&\\Leftrightarrow x \\notin \\bigcap_{i=1}^n{A_i} \\\\ &\\Leftrightarrow x \\notin A_i \\text{, for some } i=1,...,n \\\\ &\\Leftrightarrow x \\in A_i^c \\text{, for some } i=1,...,n \\\\ &\\Leftrightarrow x \\in \\bigcup_{i=1}^n{A_i^c} \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    
    MathJax.typeset();
}

function com1() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{First Law of Commutativity:} \\\\ A \\cup B = B \\cup A } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} x \\in A \\cup B &\\Leftrightarrow x \\in A \\text{ or } x \\in B \\\\ &\\Leftrightarrow x \\in B \\text{ or } x \\in A \\\\ &\\Leftrightarrow x \\in B \\cup A \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

/////$$ \\text{Show } (A \\cup B)^c \\subset A^c \\cap B^c \\text{ and } A^c \\cap B^c \\subset (A \\cup B)^c $$

function com2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Second Law of Commutativity:} \\\\ A \\cap B = B \\cup A } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} x \\in A \\cap B &\\Leftrightarrow x \\in A \\text{ and } x \\in B \\\\ &\\Leftrightarrow x \\in B \\text{ and } x \\in A \\\\ &\\Leftrightarrow x \\in B \\cap A \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function ass1() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{First Law of Associativity:} \\\\ A \\cup (B \\cup C) = (A \\cup B) \\cup C } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} x \\in A \\cup (B \\cup C) &\\Leftrightarrow x \\in A \\text{ or } x \\in B \\cup C \\\\ &\\Leftrightarrow x \\in A \\text{ or } (x \\in B \\text{ or } x \\in C) \\\\ &\\Leftrightarrow (x \\in A \\text{ or } x \\in B) \\text{ or } x \\in C \\\\ &\\Leftrightarrow x \\in A \\cup B \\text{ or } x \\in C \\\\ &\\Leftrightarrow x \\in (A \\cup B) \\cup C \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

/////$$ \\text{Show } (A \\cup B)^c \\subset A^c \\cap B^c \\text{ and } A^c \\cap B^c \\subset (A \\cup B)^c $$

function ass2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Second Law of Associativity:} \\\\ A \\cap B = B \\cup A } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} x \\in A \\cap B &\\Leftrightarrow x \\in A \\text{ and } x \\in B \\\\ &\\Leftrightarrow x \\in B \\text{ and } x \\in A \\\\ &\\Leftrightarrow x \\in B \\cap A \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
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
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{If events } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then events } A^c \\text{ and } B \\text{ are independent.} } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(B) &= P[(A^c \\cap B) \\cup (A \\cap B)] \\\\ &= P(A^c \\cap B) + P(A \\cap B) \\end{align}} $$ $$\\begin{align} P(A^c \\cap B) &= P(B) - P(A \\cap B) \\\\ &= P(B) - P(A)P(B) \\\\ &= [1 - P(A)]P(B) \\\\ &= P(A^c)P(B) \\end{align}$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function ind2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{If events } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then events } A \\text{ and } B^c \\text{ are independent.} } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A) &= P[(A \\cap B^c) \\cup (A \\cap B)] \\\\ &= P(A \\cap B^c) + P(A \\cap B) \\end{align}} $$ $$\\begin{align} P(A \\cap B^c) &= P(A) - P(A \\cap B) \\\\ &= P(A) - P(A)P(B) \\\\ &= P(A)[1 - P(B)] \\\\ &= P(A)P(B^c) \\end{align}$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function ind3() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{If events } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then events } A \\text{ and } B^c \\text{ are independent.} } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A^c \\cap B^c) &= P[(A \\cup B)^c] \\\\ &= 1 - P(A \\cup B) \\\\ &= 1 - P(A) - P(B) + P(A \\cap B) \\\\ &= 1 - P(A) - P(B) + P(A)P(B) \\\\ &= [1 - P(A)] - [1 - P(A)]P(B) \\\\ &= [1 - P(A)][1 - P(B)] \\\\ &= P(A^c)P(B^c) \\end{align}}$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}