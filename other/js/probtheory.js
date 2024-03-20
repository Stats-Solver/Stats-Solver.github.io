$("#set").hide(); $("#ind").hide(); $("#prob").hide(); $("#adv").hide(); $("#bas").show();
$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide(); 
$("#venn1").hide(); $("#venn2").hide(); $("#venn3").hide(); $("#venn4").hide(); $("#venn5").hide();
$("#venn6").hide(); $("#venn7").hide(); $("#venn8").hide(); $("#venn9").hide(); $("#venn10").hide();
$("#venns1").hide(); $("#venns2").hide(); $("#venns0").hide();

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





function bas() {
    var type = document.getElementById("bastype").value;
    var which = document.getElementById("baswhich").value;
    if (type == "dis") {
        if (which == "1") {
            disjoint1()
        } else if (which == "2") {
            disjoint2()
        } else if (which == "3") {
            disjoint3()
        } 
    } 
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
    }
}

function dis1() {
    $("#venns2").show(); $("#output2").show(); $("#output1").show(); 
    $("#venn6").show(); $("#venn7").show(); $("#venn8").show(); $("#venn9").show(); $("#venn10").show();
    document.getElementById("output").innerHTML = "$$ \\displaylines{\\text{First Distributive Law:} \\\\ A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C) }$$  $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} x \\in A \\cup (B \\cap C) &\\Leftrightarrow x \\in A \\text{ or } x \\in B \\cap C \\\\ &\\Leftrightarrow x \\in A \\text{ or } (x \\in B \\text{ and } x \\in C) \\\\ &\\Leftrightarrow (x \\in A \\text{ or } x \\in B) \\text{ and } (x \\in A \\text{ or } x \\in C)  \\\\ &\\Leftrightarrow x \\in A \\cup B \\text{ and } x \\in A \\cup C \\\\ &\\Leftrightarrow x \\in (A \\cup B) \\cap (A \\cap B) \\end{align} }$$ $ \\text{Venn Diagrams:} $"
    
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











function prob() {
    var type = document.getElementById("probtype").value;
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
    }
}

function comp() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property:} \\\\ P(A) = 1 - P(A^c) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A) + P(A^c) &= P(A \\cup A^c) \\\\ &= P(S) \\\\ &= 1 \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
    
    //A \\cup A^c = S \\Rightarrow P(A \\cup A^c) = P(S) = 1 \\\\ A \\cap A^c = \\emptyset \\Rightarrow P(A \\cup A^c) = P(A) + P(A^c) \\\\  P(A) + P(A^c) = 1 \\Rightarrow P(A) = 1 - P(A^c)
}

function empty() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property:} \\\\ P(\\emptyset) = 0 }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(\\emptyset) &= 1 - P(\\emptyset ^c) \\\\ &= 1 - P(S) \\\\ &= 1 - 1 \\\\ &= 0 \\end{align} }$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function subset() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property:} \\\\ \\text{If } A \\subset B, \\text{ then } P(A) \\leq P(B) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(B) &= P[A \\cup (A^c \\cap B)] \\\\ &= P(A) + P(A^c \\cap B) \\\\ &\\geq P(A) \\end{align} } $$  <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
    
    //$$ \\begin{align} P(A) &= P(B) - P(A^c \\cap B) \\\\ &\\leq P(B) \\end{align}   $$
}

function one() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property:} \\\\ 0 \\leq P(A) \\leq 1 }$$ $$ \\displaylines{ \\text{Proof:} \\\\ P(A) \\geq 0 \\text{ and } A \\subset S \\\\ 0 \\leq P(A) \\leq P(S) = 1 } $$  <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
    
    //$$ \\begin{align} P(A) &= P(B) - P(A^c \\cap B) \\\\ &\\leq P(B) \\end{align}   $$
}

function union() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property:} \\\\ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A \\cup B) &= P[(A \\cap B^c) \\cup (A \\cap B) \\cup (A^c \\cap B)] \\\\ &= P(A \\cap B^c) + P(A \\cap B) + P(A^c \\cap B) \\\\ &= [P(A) - P(A \\cap B)] + P(A \\cap B) + [P(B) - P(A \\cap B)] \\\\ &= P(A) + P(B) - P(A \\cap B) \\end{align} } $$  <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
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
    } else if (type == "empty") {
        empty()
    } else if (type == "subset") {
        subset()
    } else if (type == "one") {
        one()
    } else if (type == "union") {
        union()
    }
}

function cont1() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property:} \\\\ \\lim_{n \\to \\infty} P(A_n) = P \\left( \\lim_{n \\to \\infty} A_n \\right) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\text{Let } B_1 = A_1 \\text{ and for } n>1, B_n = A_n \\cap A_{n-1}^c. \\\\ \\begin{align} P \\left( \\lim_{n \\to \\infty} A_n \\right) &= P \\left( \\bigcup_{n = 1}^\\infty A_n \\right) = P \\left( \\bigcup_{n = 1}^\\infty B_n \\right) \\\\ &= \\sum_{n = 1}^\\infty P(B_n) = \\lim_{n \\to \\infty} \\sum_{i = 1}^n P(B_i)  \\\\ &= \\lim_{n \\to \\infty} P(A_n) \\end{align} }  $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"


    MathJax.typeset();
    
    //\\lim_{n \\to \\infty} (P(R_1) + \\sum_{i = 2}^n P(R_n) - P(R_{n-1})
    
    //\\\\ \\text{Since } \\{A_n\\} \\text{ is increasing, lim}_{n \\to \\infty} A_n = \\cup_{n=1}^\\infty A_n.
    //\\\\ \\text{Then } \\cup_{n=1}^\\infty A_n = \\cup_{n=1}^\\infty R_n \\text{ and } R_m \\cap R_n = \\emptyset \\text{ for } m \\neq n.
    //\\\\ &= \\lim_{n \\to \\infty} \\left(P(A_1) + \\sum_{i = 2}^n [P(A_i) - P(A_{i-1})] \\right)
    
    
}

function cont2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{Property:} \\\\ \\lim_{n \\to \\infty} P(A_n) = P \\left( \\lim_{n \\to \\infty} A_n \\right) }$$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P \\left( \\lim_{n \\to \\infty} A_n \\right) &= P \\left( \\bigcap_{n = 1}^\\infty A_n \\right) = 1 - P \\left[ \\left( \\bigcap_{n = 1}^\\infty A_n \\right) ^c \\right] \\\\ &= 1 - P \\left( \\bigcup_{n = 1}^\\infty A_n  ^c \\right) = 1 - P \\left( \\lim_{n \\to \\infty} A_n^c \\right) \\\\ &= 1 - \\lim_{n \\to \\infty} P(A_n^c) = \\lim_{n \\to \\infty} [1 - P(A_n^c)] \\\\ &= \\lim_{n \\to \\infty} P(A_n)  \\end{align} } $$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"


    MathJax.typeset();
    
    //\\lim_{n \\to \\infty} (P(R_1) + \\sum_{i = 2}^n P(R_n) - P(R_{n-1})
    
    //\\\\ \\text{Since } \\{A_n\\} \\text{ is increasing, lim}_{n \\to \\infty} A_n = \\cup_{n=1}^\\infty A_n.
    //\\\\ \\text{Then } \\cup_{n=1}^\\infty A_n = \\cup_{n=1}^\\infty R_n \\text{ and } R_m \\cap R_n = \\emptyset \\text{ for } m \\neq n.
    //\\\\ &= \\lim_{n \\to \\infty} \\left(P(A_1) + \\sum_{i = 2}^n [P(A_i) - P(A_{i-1})] \\right)
    
    
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
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{If events } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then events } A^c \\text{ and } B \\text{ are independent.} } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A^c \\cap B) &= P(B) - P(A \\cap B) \\\\ &= P(B) - P(A)P(B) \\\\ &= [1 - P(A)]P(B) \\\\ &= P(A^c)P(B) \\end{align}}$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
    //\\begin{align} P(B) &= P[(A^c \\cap B) \\cup (A \\cap B)] \\\\ &= P(A^c \\cap B) + P(A \\cap B) \\end{align}} $$ $$
}

function ind2() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{If events } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then events } A \\text{ and } B^c \\text{ are independent.} } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A \\cap B^c) &= P(A) - P(A \\cap B) \\\\ &= P(A) - P(A)P(B) \\\\ &= P(A)[1 - P(B)] \\\\ &= P(A)P(B^c) \\end{align}}$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
    //\\begin{align} P(B) &= P[(A^c \\cap B) \\cup (A \\cap B)] \\\\ &= P(A^c \\cap B) + P(A \\cap B) \\end{align}} $$ $$
}

function ind3() {
    document.getElementById("output").innerHTML = "$$ \\displaylines{ \\text{If events } A \\text{ and } B \\text{ are independent,} \\\\ \\text{then events } A \\text{ and } B^c \\text{ are independent.} } $$ $$ \\displaylines{ \\text{Proof:} \\\\ \\begin{align} P(A^c \\cap B^c) &= P[(A \\cup B)^c] \\\\ &= 1 - P(A \\cup B) \\\\ &= 1 - P(A) - P(B) + P(A \\cap B) \\\\ &= 1 - P(A) - P(B) + P(A)P(B) \\\\ &= [1 - P(A)] - [1 - P(A)]P(B) \\\\ &= [1 - P(A)][1 - P(B)] \\\\ &= P(A^c)P(B^c) \\end{align}}$$ <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}