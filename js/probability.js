$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#comb").hide(); $("#perm").hide(); $("#complement").hide(); $("#union").hide(); $("#intersection").hide(); $("#conditional").hide();
$("#intersection2").hide(); $("#conditional2").hide(); $("#union2").hide(); $("#intersection3").hide(); $("#intersection4").hide();
$("#bayes").hide(); $("#output2").hide(); $("#exptimes").show(); $("#exptimes1").hide(); $("#exptimes2").hide(); $("#exptimes3").hide();
$("#times").hide(); $("#blankspace").show(); $("#events").hide();

$("#combinationexamples").hide(); $("#permutationexamples").hide();  $("#complementexamples").hide(); $("#unionexamples").hide();
$("#intersectionexamples").hide(); $("#conditionalexamples").hide();  $("#bayesexamples").hide(); $("#experiments").show();

$("#samplespace").hide(); $("#numberoutcomes").hide(); $("#probabilityevent").hide(); $("#581773186").hide();

$("#zero").hide(); $("#probtype1a").hide(); $("#bayesrow3").hide();

$("#intyesindep").hide();

$("#proboutputs").hide();



experimentkind = "samplespace"
mutuallyexc = "no"
intindepval = "no"
condindepenent = "no"

function factorial(n) {
    if (n > 0) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    } else if (n == 0) {
        return 1
    } 
}


var canvas = document.getElementById("howCanvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("howCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

var canvas = document.getElementById("howCanvas3");
var ctx = canvas.getContext("2d");
ctx.scale(1.33, 1.33);

//var canvas = document.getElementById("howCanvas4");
//var ctx = canvas.getContext("2d");
//ctx.scale(1.33, 1.33);

how1(); how2(); how3(); 

//how4();

function how1(){
    var c = document.getElementById("howCanvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Complement",125,10);
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    
    ctx.arc(110, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    ctx.fillStyle = "lightgray";
    ctx.fill();
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.fillText("A",105,75);
    ctx.fillText("A",195,75);
    ctx.fillText("c",201,70);

    
    ctx.stroke();
}


function how2(){
    var c = document.getElementById("howCanvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Union",135,10);
    
    
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
}

function how3(){
    var c = document.getElementById("howCanvas3");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Intersection",125,10);
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "white";
    
    ctx.save();
    ctx.beginPath();
    ctx.arc(125, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    
    
    ctx.beginPath();
    ctx.fillStyle = "lightgray";
    ctx.globalCompositeOperation = "source-atop";
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    
    ctx.beginPath();
    ctx.globalCompositeOperation = "destination-over";
    ctx.arc(175, 75, 40, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.globalCompositeOperation = "source-over";
    
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
}


function how4(){
    var c = document.getElementById("howCanvas4");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    
    ctx.fillText("Mutually Exclusive",110,10);
    
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "lightgray";
    
    ctx.beginPath();
    ctx.arc(103, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(197, 75, 40, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.moveTo(50, 20);
    ctx.lineTo(50, 130);
    ctx.lineTo(250, 130);
    ctx.lineTo(250, 20);
    ctx.lineTo(50, 20);
    
    ctx.fillStyle = "black";
    ctx.fillText("A",100,75);
    ctx.fillText("B",195,75);

    
    ctx.stroke();
}



function showstuff(){
    $("#comb").hide(); $("#perm").hide(); $("#complement").hide(); $("#union").hide(); $("#intersection").hide(); $("#conditional").hide();
    $("#intersection2").hide(); $("#conditional2").hide(); $("#union2").hide(); $("#intersection3").hide(); $("#intersection4").hide();
    $("#experiments").hide(); $("#bayes").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    
    $("#combinationexamples").hide(); $("#permutationexamples").hide();  $("#complementexamples").hide(); $("#unionexamples").hide();
    $("#intersectionexamples").hide(); $("#conditionalexamples").hide();  $("#bayesexamples").hide(); $("#experimentexamples").hide(); 
    
    $("#events").hide(); $("#blankspace").show();
    
    var x = document.getElementById("stat").value;
    var type = document.getElementById("exptype").value;
    if (x == "outcomes"){
        outcomes()
        $("#experimentexamples").show(); 
    } else if (x == "samplespace"){
        samplespace()
        $("#experimentexamples").show(); 
    } else if (x == "probout"){
        $("#experimentexamples").show(); $("#experiments").show();
    } else if (x == "events"){
        $("#experiments").show();
        $("#experimentexamples").show(); $("#events").show(); $("#blankspace").hide();
        if (type == "coin1") {
            $("#eventscoin1").show(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin2") {
            $("#eventscoin1").hide(); $("#eventscoin2").show(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin3") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").show(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin4") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").show(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin5") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").show(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "dice1") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").show();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "dice2") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").show(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "deck") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").show(); $("#eventsnone").hide();
        } else {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        }
    } else if (x == "probability"){
        probability()
        $("#experimentexamples").show(); $("#events").show(); $("#blankspace").hide();
        if (type == "coin1") {
            $("#eventscoin1").show(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin2") {
            $("#eventscoin1").hide(); $("#eventscoin2").show(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin3") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").show(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin4") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").show(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin5") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").show(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "dice1") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").show();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "dice2") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").show(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "deck") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").show(); $("#eventsnone").hide();
        } else {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        }
    } else if (x == "experiments"){
        experiments()
        $("#experimentexamples").show(); 
    } else if (x == "combinations"){
        combinations()
        $("#combinationexamples").show(); 
    } else if (x == "permutations"){
        permutations()
        $("#permutationexamples").show();
    } else if (x == "complement") {
        complement()
        $("#complementexamples").show();
    } else if (x == "union") {
        union()
        $("#unionexamples").show();
    } else if (x == "intersection") {
        intersection()
        $("#intersectionexamples").show();
    } else if (x == "conditional") {
        conditional()
        $("#conditionalexamples").show();
    } else if (x == "bayes") {
        bayes()
        $("#bayesexamples").show();
    } else if (x == "choose") {
        $("#experiments").show();
        $("#experimentexamples").show(); 
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function stat(){
    $("#proboutputs").show(); $("#how").hide();
    $("#581773186").show();
    $("#output").empty();  $("#myCanvas").hide(); $("#output2").hide();
    var x = document.getElementById("stat").value;
    if (x == "outcomes"){
        compoutcomes()
    } else if (x == "samplespace"){
        compsamplespace()
    } else if (x == "probout"){
        compprobout()
    } else if (x == "probability"){
        compprobability()
    } else if (x == "events"){
        compevents()
    } else if (x == "experiments"){
        compexperiments()
    } else if (x == "combinations"){
        compcomb()
    } else if (x == "permutations"){
        compperm()
    } else if (x == "complement") {
        compcomp()
    } else if (x == "union") {
        compunion()
    } else if (x == "intersection") {
        compintersection()
    } else if (x == "conditional") {
        compconditional()
    } else if (x == "bayes") {
        compbayes()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function outcomes() {
    $("#experiments").show();
    $("#coinoneprob").hide();
}

function experiments2() {
    $("#experiments").show();
    var type = document.getElementById("exptype").value;
    if (type == "coin"){
        $("#exptimes").hide(); $("#exptimes1").show(); $("#exptimes2").hide(); $("#exptimes3").hide();
    } else if (type == "dice"){
        $("#exptimes").hide(); $("#exptimes1").hide(); $("#exptimes2").show(); $("#exptimes3").hide();
    } else if (type == "deck"){
        $("#exptimes").hide(); $("#exptimes1").hide(); $("#exptimes2").hide(); $("#exptimes3").show();
    } else if (type == "choose"){
        $("#exptimes").show(); $("#exptimes1").hide(); $("#exptimes2").hide(); $("#exptimes3").hide();
    }
}

function samplespace() {
    $("#experiments").show();
    $("#coinoneprob").hide();
}

function experiments2() {
    $("#experiments").show();
    var type = document.getElementById("exptype").value;
    if (type == "coin"){
        $("#exptimes").hide(); $("#exptimes1").show(); $("#exptimes2").hide(); $("#exptimes3").hide();
    } else if (type == "dice"){
        $("#exptimes").hide(); $("#exptimes1").hide(); $("#exptimes2").show(); $("#exptimes3").hide();
    } else if (type == "deck"){
        $("#exptimes").hide(); $("#exptimes1").hide(); $("#exptimes2").hide(); $("#exptimes3").show();
    } else if (type == "choose"){
        $("#exptimes").show(); $("#exptimes1").hide(); $("#exptimes2").hide(); $("#exptimes3").hide();
    }
}

function compsamplespace() {
    document.getElementById("descriptiontext").innerHTML = "The sample space is the set of all outcomes of an experiment."
    document.getElementById("formulatext").innerHTML = "$ S = \\{ \\text{set of all outcomes} \\} $ "
    document.getElementById("explanationtext").innerHTML = "Each element of the sample space is called a sample point."
    var type = document.getElementById("exptype").value;
    
    if (type == "coin1") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ S = \\{ \\text{Head, Tail} \\}$$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "coin2") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ S = \\{ \\text{(H,H), (H,T), (T,H), (T,T)} \\}$$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "coin3") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$ S = $ <table><tr><td>$ \\{ \\text{(H,H,H),}$</td><td>$\\text{(H,H,T),}$</td><td>$\\text{(H,T,H),}$</td><td>$ \\text{(T,H,H),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(H,T,T),} $</td><td>$\\text{(T,H,T),}$</td><td>$\\text{(T,T,H),}$</td><td>$\\text{(T,T,T)} \\}$</td></tr></table>" + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "coin4") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = " $$ \\{ \\text{(H,H,H,H), (H,H,H,T), (H,H,T,H), (H,T,H,H),}$$ $$\\text{(T,H,H,H), (H,H,T,T), (H,T,H,T), (H,T,T,H),} $$ $$\\text{(T,T,H,H), (T,H,H,T), (T,H,T,H), (T,H,T,T),} $$ $$\\text{(T,T,H,T), (T,T,T,H), (H,T,T,T), (T,T,T,T)} \\} $$"
    } else if (type == "coin5") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide();  $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\{ \\text{(H,H,H,H,H), (H,H,H,T,H), (H,H,T,H,H), (H,T,H,H,H),}$$ $$\\text{(T,H,H,H,H), (H,H,T,T,H), (H,T,H,T,H), (H,T,T,H,H),} $$ $$\\text{(T,T,H,H,H), (T,H,H,T,H), (T,H,T,H,H), (T,H,T,T,H),} $$ $$\\text{(T,T,H,T,H), (T,T,T,H,H), (H,T,T,T,H), (T,T,T,T,H),} $$ $$ \\text{(H,H,H,H,T), (H,H,H,T,T), (H,H,T,H,T), (H,T,H,H,T),}$$ $$\\text{(T,H,H,H,T), (H,H,T,T,T), (H,T,H,T,T), (H,T,T,H,T),} $$ $$\\text{(T,T,H,H,T), (T,H,H,T,T), (T,H,T,H,T), (T,H,T,T,T),} $$ $$\\text{(T,T,H,T,T), (T,T,T,H,T), (H,T,T,T,T), (T,T,T,T,T)} \\} $$"
    } else if (type == "dice1") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide();  $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ S = \\{ 1, 2, 3, 4, 5, 6 \\} $$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "dice2") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>$\\text{(1,2),}$</td><td>$\\text{(1,3),}$</td><td>$\\text{(1,4),}$</td><td>$\\text{(1,5),}$</td><td>$\\text{(1,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(2,1),}$</td><td>$\\text{(2,2),}$</td><td>$\\text{(2,3),}$</td><td>$\\text{(2,4),}$</td><td>$\\text{(2,5),}$</td><td>$\\text{(2,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(3,1),}$</td><td>$\\text{(3,2),}$</td><td>$\\text{(3,3),}$</td><td>$\\text{(3,4),}$</td><td>$\\text{(3,5),}$</td><td>$\\text{(3,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(4,1),}$</td><td>$\\text{(4,2),}$</td><td>$\\text{(4,3),}$</td><td>$\\text{(4,4),}$</td><td>$\\text{(4,5),}$</td><td>$\\text{(4,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(5,1),}$</td><td>$\\text{(5,2),}$</td><td>$\\text{(5,3),}$</td><td>$\\text{(5,4),}$</td><td>$\\text{(5,5),}$</td><td>$\\text{(5,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(6,1),}$</td><td>$\\text{(6,2),}$</td><td>$\\text{(6,3),}$</td><td>$\\text{(6,4),}$</td><td>$\\text{(6,5),}$</td><td>$\\text{(6,6)} \\} $</td></tr></table>" + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "deck") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$ S = $  <table><tr><td>$ \\{ \\text{2H,}$</td><td>$\\text{2D,}$</td><td>$\\text{2S,}$</td><td>$\\text{2C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{3H,}$</td><td>$\\text{3D,}$</td><td>$\\text{3S,}$</td><td>$\\text{3C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{4H,}$</td><td>$\\text{4D,}$</td><td>$\\text{4S,}$</td><td>$\\text{4C,}$</td><tr></tr><td>$ {\\color{White} \\{ } \\text{5H,}$</td><td>$\\text{5D,}$</td><td>$\\text{5S,}$</td><td>$\\text{5C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{6H,}$</td><td>$\\text{6D,}$</td><td>$\\text{6S,}$</td><td>$\\text{6C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{7H,}$</td><td>$\\text{7D,}$</td><td>$\\text{7S,}$</td><td>$\\text{7C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{8H,}$</td><td>$\\text{8D,}$</td><td>$\\text{8S,}$</td><td>$\\text{8C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{9H,}$</td><td>$\\text{9D,}$</td><td>$\\text{9S,}$</td><td>$\\text{9C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{10H,}$</td><td>$\\text{10D,}$</td><td>$\\text{10S,}$</td><td>$\\text{10C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{JH,}$</td><td>$\\text{JD,}$</td><td>$\\text{JS,}$</td><td>$\\text{JC,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{QH,}$</td><td>$\\text{QS,}$</td><td>$\\text{QD,}$</td><td>$\\text{QC,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{KH,}$</td><td>$\\text{KD,}$</td><td>$\\text{KS,}$</td><td>$\\text{KC,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{AH,}$</td><td>$\\text{AD,}$</td><td>$\\text{AS,}$</td><td>$\\text{AC} \\} $</td></tr></table>" + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}

function showevents() {
    var x = document.getElementById("stat").value;
    if (x == "events" || x == "probability") {
        var type = document.getElementById("exptype").value;
        if (type == "coin1") {
            $("#eventscoin1").show(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin2") {
            $("#eventscoin1").hide(); $("#eventscoin2").show(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin3") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").show(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin4") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").show(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "coin5") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").show(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "dice1") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").show();
            $("#eventsdice2").hide(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "dice2") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").show(); $("#eventsdeck").hide(); $("#eventsnone").hide();
        } else if (type == "deck") {
            $("#eventscoin1").hide(); $("#eventscoin2").hide(); $("#eventscoin3").hide(); 
            $("#eventscoin4").hide(); $("#eventscoin5").hide(); $("#eventsdice1").hide();
            $("#eventsdice2").hide(); $("#eventsdeck").show(); $("#eventsnone").hide();
        }
    }
}
























function compoutcomes() {
    document.getElementById("descriptiontext").innerHTML = "The number of outcomes can be calculated using the counting rule for multiple-step experiments."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Number of Outcomes} = (n_1)(n_2)\\cdots(n_k) $$ "
    document.getElementById("explanationtext").innerHTML = "A multiple-step experiment is an experiment which has several steps."
    var type = document.getElementById("exptype").value;
    
    if (type == "coin1") {
        var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $$ S = \\{ \\text{Head, Tail} \\}$$"
    } else if (type == "coin2") {
        var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $$ S = \\{ \\text{(H,H), (H,T), (T,H), (T,T)} \\}$$"
    } else if (type == "coin3") {
        var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $ <table><tr><td>$ \\{ \\text{(H,H,H),}$</td><td>$\\text{(H,H,T),}$</td><td>$\\text{(H,T,H),}$</td><td>$ \\text{(T,H,H),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(H,T,T),} $</td><td>$\\text{(T,H,T),}$</td><td>$\\text{(T,T,H),}$</td><td>$\\text{(T,T,T)} \\}$</td></tr></table>"
    } else if (type == "coin4") {
        var samplespace = " $$ \\{ \\text{(H,H,H,H), (H,H,H,T), (H,H,T,H), (H,T,H,H),}$$ $$\\text{(T,H,H,H), (H,H,T,T), (H,T,H,T), (H,T,T,H),} $$ $$\\text{(T,T,H,H), (T,H,H,T), (T,H,T,H), (T,H,T,T),} $$ $$\\text{(T,T,H,T), (T,T,T,H), (H,T,T,T), (T,T,T,T)} \\} $$"
    } else if (type == "coin5") {
        var samplespace = "$$ \\{ \\text{(H,H,H,H,H), (H,H,H,T,H), (H,H,T,H,H), (H,T,H,H,H),}$$ $$\\text{(T,H,H,H,H), (H,H,T,T,H), (H,T,H,T,H), (H,T,T,H,H),} $$ $$\\text{(T,T,H,H,H), (T,H,H,T,H), (T,H,T,H,H), (T,H,T,T,H),} $$ $$\\text{(T,T,H,T,H), (T,T,T,H,H), (H,T,T,T,H), (T,T,T,T,H),} $$ $$ \\text{(H,H,H,H,T), (H,H,H,T,T), (H,H,T,H,T), (H,T,H,H,T),}$$ $$\\text{(T,H,H,H,T), (H,H,T,T,T), (H,T,H,T,T), (H,T,T,H,T),} $$ $$\\text{(T,T,H,H,T), (T,H,H,T,T), (T,H,T,H,T), (T,H,T,T,T),} $$ $$\\text{(T,T,H,T,T), (T,T,T,H,T), (H,T,T,T,T), (T,T,T,T,T)} \\} $$"
    } else if (type == "dice1") {
        var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $$ S = \\{ 1, 2, 3, 4, 5, 6 \\} $$"
    } else if (type == "dice2") {
        var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>$\\text{(1,2),}$</td><td>$\\text{(1,3),}$</td><td>$\\text{(1,4),}$</td><td>$\\text{(1,5),}$</td><td>$\\text{(1,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(2,1),}$</td><td>$\\text{(2,2),}$</td><td>$\\text{(2,3),}$</td><td>$\\text{(2,4),}$</td><td>$\\text{(2,5),}$</td><td>$\\text{(2,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(3,1),}$</td><td>$\\text{(3,2),}$</td><td>$\\text{(3,3),}$</td><td>$\\text{(3,4),}$</td><td>$\\text{(3,5),}$</td><td>$\\text{(3,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(4,1),}$</td><td>$\\text{(4,2),}$</td><td>$\\text{(4,3),}$</td><td>$\\text{(4,4),}$</td><td>$\\text{(4,5),}$</td><td>$\\text{(4,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(5,1),}$</td><td>$\\text{(5,2),}$</td><td>$\\text{(5,3),}$</td><td>$\\text{(5,4),}$</td><td>$\\text{(5,5),}$</td><td>$\\text{(5,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(6,1),}$</td><td>$\\text{(6,2),}$</td><td>$\\text{(6,3),}$</td><td>$\\text{(6,4),}$</td><td>$\\text{(6,5),}$</td><td>$\\text{(6,6)} \\} $</td></tr></table>"
    } else if (type == "deck") {
        var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{2H,}$</td><td>$\\text{2D,}$</td><td>$\\text{2S,}$</td><td>$\\text{2C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{3H,}$</td><td>$\\text{3D,}$</td><td>$\\text{3S,}$</td><td>$\\text{3C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{4H,}$</td><td>$\\text{4D,}$</td><td>$\\text{4S,}$</td><td>$\\text{4C,}$</td><tr></tr><td>$ {\\color{White} \\{ } \\text{5H,}$</td><td>$\\text{5D,}$</td><td>$\\text{5S,}$</td><td>$\\text{5C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{6H,}$</td><td>$\\text{6D,}$</td><td>$\\text{6S,}$</td><td>$\\text{6C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{7H,}$</td><td>$\\text{7D,}$</td><td>$\\text{7S,}$</td><td>$\\text{7C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{8H,}$</td><td>$\\text{8D,}$</td><td>$\\text{8S,}$</td><td>$\\text{8C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{9H,}$</td><td>$\\text{9D,}$</td><td>$\\text{9S,}$</td><td>$\\text{9C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{10H,}$</td><td>$\\text{10D,}$</td><td>$\\text{10S,}$</td><td>$\\text{10C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{JH,}$</td><td>$\\text{JD,}$</td><td>$\\text{JS,}$</td><td>$\\text{JC,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{QH,}$</td><td>$\\text{QS,}$</td><td>$\\text{QD,}$</td><td>$\\text{QC,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{KH,}$</td><td>$\\text{KD,}$</td><td>$\\text{KS,}$</td><td>$\\text{KC,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{AH,}$</td><td>$\\text{AD,}$</td><td>$\\text{AS,}$</td><td>$\\text{AC} \\} $</td></tr></table>"
    }
    
    if (type == "coin1") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = samplespace + "$$ \\text{Number of Outcomes} = \\boxed{2} $$ " + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "coin2") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = samplespace + "$$ \\begin{align} & \\text{Number of Outcomes} \\\\ &= (n_1)(n_2) \\\\ &= (2)(2) \\\\ &= \\boxed{4} \\end{align} $$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "coin3") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = samplespace + "$$ \\begin{align} & \\text{Number of Outcomes} \\\\ &= (n_1)(n_2)(n_3) \\\\ &= (2)(2)(2) \\\\ &= \\boxed{8} \\end{align} $$ " + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "coin4") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ (2)(2)(2)(2) = 16 $$"
    } else if (type == "coin5") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide();  $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ (2)(2)(2)(2)(2) = 32 $$"
    } else if (type == "dice1") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide();  $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = samplespace + "$$ \\text{Number of Outcomes} = \\boxed{6} $$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "dice2") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = samplespace + "$$ \\begin{align} & \\text{Number of Outcomes} \\\\ &= (n_1)(n_2) \\\\ &= (6)(6) \\\\ &= \\boxed{36} \\end{align} $$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "deck") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = samplespace + "$$ \\text{Number of Outcomes} = \\boxed{52} $$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}








function compprobout() {
    document.getElementById("descriptiontext").innerHTML = "The number of outcomes can be calculated using the counting rule for multiple-step experiments."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Number of Outcomes} = (n_1)(n_2)\\cdots(n_k) $$ "
    document.getElementById("explanationtext").innerHTML = "A multiple-step experiment is an experiment which has several steps."
    var type = document.getElementById("exptype").value;
    
    if (type == "coin1") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\text{Number of Outcomes} = {\\color{RoyalBlue}2} $$ $$ P(\\text{Each Outcome}) = \\boxed{1/2} $$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "coin2") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\begin{align} & \\text{Number of Outcomes} \\\\ &= (n_1)(n_2) \\\\ &= (2)(2) \\\\ &= {\\color{RoyalBlue}4} \\end{align} $$ $$ P(\\text{Each Outcome}) = \\boxed{1/4} $$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "coin3") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\begin{align} & \\text{Number of Outcomes} \\\\ &= (n_1)(n_2)(n_3) \\\\ &= (2)(2)(2) \\\\ &= {\\color{RoyalBlue}8} \\end{align} $$ $$ P(\\text{Each Outcome}) = \\boxed{1/8} $$ " + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "coin4") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ (2)(2)(2)(2) = 16 $$"
    } else if (type == "coin5") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide();  $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ (2)(2)(2)(2)(2) = 32 $$"
    } else if (type == "dice1") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide();  $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\text{Number of Outcomes} = {\\color{RoyalBlue}6} $$ $$ P(\\text{Each Outcome}) = \\boxed{1/6} $$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "dice2") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\begin{align} & \\text{Number of Outcomes} \\\\ &= (n_1)(n_2) \\\\ &= (6)(6) \\\\ &= {\\color{RoyalBlue}36} \\end{align} $$ $$ P(\\text{Each Outcome}) = \\boxed{1/36} $$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    } else if (type == "deck") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\text{Number of Outcomes} = {\\color{RoyalBlue}52} $$ $$ P(\\text{Each Outcome}) = \\boxed{1/52} $$" + "<a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    }
    MathJax.typeset();
}












































function compprobout2() {
    document.getElementById("descriptiontext").innerHTML = "An experiment is a process that generates some outcomes. The sample space is the set of all possible outcomes."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Number of Outcomes} = (n_1)(n_2)\\cdots(n_k) $$ "
    document.getElementById("explanationtext").innerHTML = "$$ N! = N(N-1)(N-2) \\cdots (2)(1) $$ $$ n! = n(n-1)(n-2) \\cdots (2)(1) $$ $$ 0! = 1 $$"
    var type = document.getElementById("exptype").value;
    
    if (type == "coin1") {
        $("#explanation").show();
        document.getElementById("output").innerHTML = " $$ P(\\text{Outcome}) = \\boxed{1/2} $$"
    } else if (type == "coin2") {
        $("#explanation").show();
        document.getElementById("output").innerHTML = "$$ P(\\text{Outcome}) = \\boxed{1/4} $$"
    } else if (type == "coin3") {
        $("#explanation").show(); 
        document.getElementById("output").innerHTML = "$$ P(\\text{Outcome}) = \\boxed{1/8} $$"
    } else if (type == "coin4") {
        $("#explanation").show();

    } else if (type == "coin5") {
        $("#explanation").show();

    } else if (type == "dice1") {
        $("#explanation").show();
        document.getElementById("output").innerHTML = "$$ P(\\text{Outcome}) = \\boxed{1/6} $$"
    } else if (type == "dice2") {
        $("#explanation").show();
        document.getElementById("output").innerHTML = "$$ P(\\text{Outcome}) = \\boxed{1/36} $$"

    } else if (type == "deck") {
        $("#explanation").show(); 
        document.getElementById("output").innerHTML = "$$ P(\\text{Outcome}) = \\boxed{1/52} $$"

    }
    MathJax.typeset();
}


function probability() {
    $("#experiments").show();
    $("#coinoneprob").hide();
}

function experiments2() {
    $("#experiments").show();
    var type = document.getElementById("exptype").value;
    if (type == "coin"){
        $("#exptimes").hide(); $("#exptimes1").show(); $("#exptimes2").hide(); $("#exptimes3").hide();
    } else if (type == "dice"){
        $("#exptimes").hide(); $("#exptimes1").hide(); $("#exptimes2").show(); $("#exptimes3").hide();
    } else if (type == "deck"){
        $("#exptimes").hide(); $("#exptimes1").hide(); $("#exptimes2").hide(); $("#exptimes3").show();
    } else if (type == "choose"){
        $("#exptimes").show(); $("#exptimes1").hide(); $("#exptimes2").hide(); $("#exptimes3").hide();
    }
}

function compprobability2() {
    document.getElementById("descriptiontext").innerHTML = "An experiment is a process that generates some outcomes. The sample space is the set of all possible outcomes."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Number of Outcomes} = (n_1)(n_2)\\cdots(n_k) $$ "
    document.getElementById("explanationtext").innerHTML = "$$ N! = N(N-1)(N-2) \\cdots (2)(1) $$ $$ n! = n(n-1)(n-2) \\cdots (2)(1) $$ $$ 0! = 1 $$"
    var type = document.getElementById("exptype").value;
    
    if (type == "coin1") {
        $("#explanation").show();
        var event = document.getElementById("eventscoin1").value;
        if (event == "head") {
            document.getElementById("output").innerHTML = " $$ P(\\text{Head}) = \\boxed{1/2} $$"
        } else {
            document.getElementById("output").innerHTML = " $$ P(\\text{Tail}) = \\boxed{1/2} $$"
        }
    } else if (type == "coin2") {
        $("#explanation").show();
        var event = document.getElementById("eventscoin2").value;
        if (event == "at1head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 1 \\text{ Head}) &= P(H,H)+P(H,T)+P(T,H) \\\\ &= 1/4 + 1/4 + 1/4 = \\boxed{3/4} \\end{align} $$"
        } else if (event == "at1tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 1 \\text{ Tail}) &= P(T,T)+P(H,T)+P(T,H) \\\\ &= 1/4 + 1/4 + 1/4 = \\boxed{3/4} \\end{align} $$"
        } else if (event == "ex1head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(1 \\text{ Head}) &= P(H,T)+P(T,H) \\\\ &= 1/4 + 1/4 = 2/4 = \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex1tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(1 \\text{ Tail}) &= P(T,H)+P(H,T) \\\\ &= 1/4 + 1/4 = 2/4 = \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex2head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Heads}) &= P(H,H) \\\\ &= 1/4 = 2/4 = \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex2tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Tails}) &= P(T,T) \\\\ &= 1/4 + 1/4 = 2/4 = \\boxed{1/2} \\end{align} $$"
        } 
    } else if (type == "coin3") {
        $("#explanation").show(); 
        var event = document.getElementById("eventscoin3").value;
        if (event == "at2heads") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(H,H,H)+P(H,H,T)+P(H,T,H)+P(T,H,H) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 = 4/8 = \\boxed{1/2} \\end{align} $$"
        } else if (event == "at2tails") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(T,T,T)+P(T,T,H)+P(T,H,T)+P(H,T,T) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 + 1/8 = 4/8 = \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex2head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Heads}) &= P(H,H,T)+P(H,T,H)+P(T,H,H) \\\\ &= 1/8 + 1/8 + 1/8 = \\boxed{3/8}  \\end{align} $$"
        } else if (event == "ex2tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Tails}) &= P(T,T,H)+P(T,H,T)+P(H,T,T) \\\\ &= 1/8 + 1/8 + 1/8 = \\boxed{3/8} \\end{align} $$"
        } else if (event == "ex1head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(1 \\text{ Head}) &= P(H,T,T)+P(T,H,T)+P(H,T,T) \\\\ &= 1/8 + 1/8 + 1/8 = 3/8 \\end{align} $$"
        } else if (event == "ex1tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(1 \\text{ Tail}) &= P(T,H,H)+P(H,T,H)+P(H,H,T) \\\\ &= 1/8 + 1/8 + 1/8 = 3/8 \\end{align} $$"
        } else if (event == "at2head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 2 \\text{ Head}) &= P(H,H,T)+P(H,T,H)+P(T,H,H)+P(H,H,H) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 = 4/8 \\end{align} $$"
        } else if (event == "at2tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 2 \\text{ Tail}) &= P(T,T,H)+P(T,H,T)+P(T,T,H)+P(T,T,T) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 = 4/8 \\end{align} $$"
        } 
    } else if (type == "coin4") {
        $("#explanation").show();

    } else if (type == "coin5") {
        $("#explanation").show();

    } else if (type == "dice1") {
        $("#explanation").show();
        var event = document.getElementById("eventsdice1").value;
        if (event == "even") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Even}) &= P(2)+P(4)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 = \\boxed{1/2} \\end{align} $$"
        } else if (event == "odd") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Odd}) &= P(1)+P(3)+P(5) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 = \\boxed{1/2} \\end{align} $$"
        } else if (event == "at2") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 2) &= P(2)+P(3)+P(4)+P(5)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 + 1/6 + 1/6 \\\\ &= 5/6 = \\boxed{5/6} \\end{align} $$"
        } else if (event == "at3") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 3) &= P(3)+P(4)+P(5)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 + 1/6 \\\\ &= 4/6 = \\boxed{1/2} \\end{align} $$"
        } else if (event == "at4") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 4) &= P(4)+P(5)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 = \\boxed{1/2} \\end{align} $$"
        } else if (event == "at5") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 5) &= P(5)+P(6) \\\\ &= 1/6 + 1/6 \\\\ &= 2/6 = \\boxed{1/3} \\end{align} $$"
        }
    } else if (type == "dice2") {
        $("#explanation").show();
        var event = document.getElementById("eventsdice2").value;
        if (event == "sum3") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=3) &= P(2,1)+P(1,2) \\\\ &= 1/36 + 1/36 \\\\ &= 2/36 = \\boxed{1/18} \\end{align} $$"
        } else if (event == "sum4") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=4) &= P(3,1)+P(2,2)+P(1,3) \\\\ &= 1/36 + 1/36 + 1/36 \\\\ &= 3/36 = \\boxed{1/12} \\end{align} $$"
        } else if (event == "sum5") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=5) &= P(4,1)+P(3,2)+P(2,3)+P(1,4) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 \\\\ &= 4/36 = \\boxed{1/9} \\end{align} $$"
        } else if (event == "sum6") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(5,1)+P(4,2)+P(3,3)+P(2,4)+P(1,5) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36  = \\boxed{5/36} \\end{align} $$"
        } else if (event == "sum7") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(6,1)+P(5,2)+P(4,3)+P(3,4)+P(2,5)+P(1,6) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36 + 1/36 \\\\ &= 6/36 = \\boxed{1/6} \\end{align} $$"
        } else if (event == "sum8") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(6,2)+P(5,3)+P(4,4)+P(3,5)+P(2,6) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36 = \\boxed{5/36} \\end{align} $$"
        } else if (event == "sum9") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=9) &= P(6,3)+P(5,4)+P(4,5)+P(3,6) \\\\ &= 1/6 + 1/6 + 1/6 + 1/6 \\\\ &= 4/36 = \\boxed{1/9} \\end{align} $$"
        } else if (event == "sum10") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=10) &= P(6,4)+P(5,5)+P(4,6) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/36 = \\boxed{1/12} \\end{align} $$"
        } else if (event == "sum11") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=11) &= P(6,5)+P(5,6) \\\\ &= 1/6 + 1/6 \\\\ &= 2/36 = \\boxed{1/18} \\end{align} $$"
        } 
    } else if (type == "deck") {
        $("#explanation").show(); 
        var event = document.getElementById("eventsdeck").value;
        if (event == "heart") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2H}) + P(\\text{3H}) + \\cdots + P(\\text{AH}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 = \\boxed{1/4} \\end{align} $$"
        } else if (event == "diamond") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2D}) + P(\\text{3D}) + \\cdots + P(\\text{AD}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 = \\boxed{1/4} \\end{align} $$"
        } else if (event == "spade") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2S}) + P(\\text{3S}) + \\cdots + P(\\text{AS}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 = \\boxed{1/4} \\end{align} $$"
        } else if (event == "club") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2C}) + P(\\text{3C}) + \\cdots + P(\\text{AC}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 = \\boxed{1/4} \\end{align} $$"
        } else if (event == "red") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2H}) + \\cdots + P(\\text{AH}) + P(\\text{2D}) + \\cdots + P(\\text{AD}) \\\\ &= 1/52 + \\cdots + 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 26(1/52) \\\\ &= 26/52 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "black") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2S}) + \\cdots + P(\\text{AS}) + P(\\text{2C}) + \\cdots + P(\\text{AC}) \\\\ &= 1/52 + \\cdots + 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 26(1/52) \\\\ &= 26/52 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "Jack") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Jack}) &= P(\\text{JH}) + P(\\text{JD}) + P(\\text{JS}) + P(\\text{JC}) \\\\ &= 1/52 + 1/52 + 1/52 + 1/52 \\\\ &= 4/52 = \\boxed{1/13} \\end{align} $$"
        } else if (event == "Queen") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Queen}) &= P(\\text{QH}) + P(\\text{QD}) + P(\\text{QS}) + P(\\text{QC}) \\\\ &= 1/52 + 1/52 + 1/52 + 1/52 \\\\ &= 4/52 = \\boxed{1/13} \\end{align} $$"
        } else if (event == "King") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{King}) &= P(\\text{KH}) + P(\\text{KD}) + P(\\text{KS}) + P(\\text{KC}) \\\\ &= 1/52 + 1/52 + 1/52 + 1/52 \\\\ &= 4/52 = \\boxed{1/13} \\end{align} $$"
        } else if (event == "Ace") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Ace}) &= P(\\text{AH}) + P(\\text{AD}) + P(\\text{AS}) + P(\\text{AC}) \\\\ &= 1/52 + 1/52 + 1/52 + 1/52 \\\\ &= 4/52 = \\boxed{1/13} \\end{align} $$"
        }

    }
    MathJax.typeset();
}



















function compevents() {
    document.getElementById("descriptiontext").innerHTML = "An experiment is a process that generates some outcomes. The sample space is the set of all possible outcomes."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Number of Outcomes} = (n_1)(n_2)\\cdots(n_k) $$ "
    document.getElementById("explanationtext").innerHTML = "$$ N! = N(N-1)(N-2) \\cdots (2)(1) $$ $$ n! = n(n-1)(n-2) \\cdots (2)(1) $$ $$ 0! = 1 $$"
    var type = document.getElementById("exptype").value;
    
    //{\\color{RoyalBlue}
    
    if (type == "coin1") {
        var samplespace = "$$ \\text{Sample Space:} $$ $$ S = \\{ \\text{Head, Tail} \\}$$"
    } else if (type == "coin2") {
        var samplespace = "$$ \\text{Sample Space:} $$ $$ S = \\{ \\text{(H,H), (H,T), (T,H), (T,T)} \\}$$"
    } else if (type == "coin3") {
        var event = document.getElementById("eventscoin3").value;
        if (event == "ex1head") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $ <table><tr><td>$ \\{ \\text{(H,H,H),}$</td><td>$\\text{(H,H,T),}$</td><td>$\\text{(H,T,H),}$</td><td>$ \\text{(T,H,H),} $</td></tr><tr><td>$ {\\color{White} \\{ } {\\color{RoyalBlue}\\text{(H,T,T)}}, $</td><td>${\\color{RoyalBlue}\\text{(T,H,T)}},$</td><td>${\\color{RoyalBlue}\\text{(T,T,H)}},$</td><td>$\\text{(T,T,T)} \\}$</td></tr></table>"
        } else if (event == "ex1tail") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $ <table><tr><td>$ \\{ \\text{(H,H,H),}$</td><td>${\\color{RoyalBlue}\\text{(H,H,T)}},$</td><td>${\\color{RoyalBlue}\\text{(H,T,H)}},$</td><td>$ {\\color{RoyalBlue}\\text{(T,H,H)}}, $</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(H,T,T),} $</td><td>$\\text{(T,H,T),}$</td><td>$\\text{(T,T,H),}$</td><td>$\\text{(T,T,T)} \\}$</td></tr></table>"
        } else if (event == "ex2head") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $ <table><tr><td>$ \\{ \\text{(H,H,H),}$</td><td>${\\color{RoyalBlue}\\text{(H,H,T)}},$</td><td>${\\color{RoyalBlue}\\text{(H,T,H)}},$</td><td>$ {\\color{RoyalBlue}\\text{(T,H,H)}}, $</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(H,T,T),} $</td><td>$\\text{(T,H,T),}$</td><td>$\\text{(T,T,H),}$</td><td>$\\text{(T,T,T)} \\}$</td></tr></table>"
        } else if (event == "ex2tail") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $ <table><tr><td>$ \\{ \\text{(H,H,H),}$</td><td>$\\text{(H,H,T),}$</td><td>$\\text{(H,T,H),}$</td><td>$ \\text{(T,H,H),} $</td></tr><tr><td>$ {\\color{White} \\{ } {\\color{RoyalBlue}\\text{(H,T,T)}}, $</td><td>${\\color{RoyalBlue}\\text{(T,H,T)}},$</td><td>${\\color{RoyalBlue}\\text{(T,T,H)}},$</td><td>$\\text{(T,T,T)} \\}$</td></tr></table>"
        } else if (event == "at1head") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $ <table><tr><td>$ \\{ {\\color{RoyalBlue}\\text{(H,H,H)}},$</td><td>${\\color{RoyalBlue}\\text{(H,H,T)}},$</td><td>${\\color{RoyalBlue}\\text{(H,T,H)}},$</td><td>$ {\\color{RoyalBlue}\\text{(T,H,H)}}, $</td></tr><tr><td>$ {\\color{White} \\{ } {\\color{RoyalBlue}\\text{(H,T,T)}}, $</td><td>${\\color{RoyalBlue}\\text{(T,H,T)}},$</td><td>${\\color{RoyalBlue}\\text{(T,T,H)}},$</td><td>$\\text{(T,T,T)} \\}$</td></tr></table>"
        } else if (event == "at1tail") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $ <table><tr><td>$ \\{ \\text{(H,H,H),}$</td><td>${\\color{RoyalBlue}\\text{(H,H,T)}},$</td><td>${\\color{RoyalBlue}\\text{(H,T,H)}},$</td><td>$ {\\color{RoyalBlue}\\text{(T,H,H)}}, $</td></tr><tr><td>$ {\\color{White} \\{ } {\\color{RoyalBlue}\\text{(H,T,T)}}, $</td><td>${\\color{RoyalBlue}\\text{(T,H,T)}},$</td><td>${\\color{RoyalBlue}\\text{(T,T,H)}},$</td><td>${\\color{RoyalBlue}\\text{(T,T,T)}} \\}$</td></tr></table>"
        } else if (event == "at2head") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $ <table><tr><td>$ \\{ {\\color{RoyalBlue}\\text{(H,H,H)}},$</td><td>${\\color{RoyalBlue}\\text{(H,H,T)}},$</td><td>${\\color{RoyalBlue}\\text{(H,T,H)}},$</td><td>$ {\\color{RoyalBlue}\\text{(T,H,H)}}, $</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(H,T,T),} $</td><td>$\\text{(T,H,T),}$</td><td>$\\text{(T,T,H),}$</td><td>$\\text{(T,T,T)} \\}$</td></tr></table>"
        } else if (event == "at2tail") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $ <table><tr><td>$ \\{ \\text{(H,H,H),}$</td><td>$\\text{(H,H,T),}$</td><td>$\\text{(H,T,H),}$</td><td>$ \\text{(T,H,H),} $</td></tr><tr><td>$ {\\color{White} \\{ } {\\color{RoyalBlue}\\text{(H,T,T)}}, $</td><td>${\\color{RoyalBlue}\\text{(T,H,T)}},$</td><td>${\\color{RoyalBlue}\\text{(T,T,H)}},$</td><td>${\\color{RoyalBlue}\\text{(T,T,T)}} \\}$</td></tr></table>"
        }  
    } else if (type == "coin4") {
        var samplespace = " $$ \\{ \\text{(H,H,H,H), (H,H,H,T), (H,H,T,H), (H,T,H,H),}$$ $$\\text{(T,H,H,H), (H,H,T,T), (H,T,H,T), (H,T,T,H),} $$ $$\\text{(T,T,H,H), (T,H,H,T), (T,H,T,H), (T,H,T,T),} $$ $$\\text{(T,T,H,T), (T,T,T,H), (H,T,T,T), (T,T,T,T)} \\} $$"
    } else if (type == "coin5") {
        var samplespace = "$$ \\{ \\text{(H,H,H,H,H), (H,H,H,T,H), (H,H,T,H,H), (H,T,H,H,H),}$$ $$\\text{(T,H,H,H,H), (H,H,T,T,H), (H,T,H,T,H), (H,T,T,H,H),} $$ $$\\text{(T,T,H,H,H), (T,H,H,T,H), (T,H,T,H,H), (T,H,T,T,H),} $$ $$\\text{(T,T,H,T,H), (T,T,T,H,H), (H,T,T,T,H), (T,T,T,T,H),} $$ $$ \\text{(H,H,H,H,T), (H,H,H,T,T), (H,H,T,H,T), (H,T,H,H,T),}$$ $$\\text{(T,H,H,H,T), (H,H,T,T,T), (H,T,H,T,T), (H,T,T,H,T),} $$ $$\\text{(T,T,H,H,T), (T,H,H,T,T), (T,H,T,H,T), (T,H,T,T,T),} $$ $$\\text{(T,T,H,T,T), (T,T,T,H,T), (H,T,T,T,T), (T,T,T,T,T)} \\} $$"
    } else if (type == "dice1") {
        var samplespace = "$$ \\text{Sample Space:} $$ $$ S = \\{ 1, 2, 3, 4, 5, 6 \\} $$"
    } else if (type == "dice2") {
        
        
        
        
        
        
        
        
        
        
        
        
        var event = document.getElementById("eventsdice2").value;
        if (event == "sum3") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>${\\color{RoyalBlue}\\text{(1,2)}},$</td><td>$\\text{(1,3),}$</td><td>$\\text{(1,4),}$</td><td>$\\text{(1,5),}$</td><td>$\\text{(1,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } {\\color{RoyalBlue}\\text{(2,1)}},$</td><td>$\\text{(2,2),}$</td><td>$\\text{(2,3),}$</td><td>$\\text{(2,4),}$</td><td>$\\text{(2,5),}$</td><td>$\\text{(2,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(3,1),}$</td><td>$\\text{(3,2),}$</td><td>$\\text{(3,3),}$</td><td>$\\text{(3,4),}$</td><td>$\\text{(3,5),}$</td><td>$\\text{(3,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(4,1),}$</td><td>$\\text{(4,2),}$</td><td>$\\text{(4,3),}$</td><td>$\\text{(4,4),}$</td><td>$\\text{(4,5),}$</td><td>$\\text{(4,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(5,1),}$</td><td>$\\text{(5,2),}$</td><td>$\\text{(5,3),}$</td><td>$\\text{(5,4),}$</td><td>$\\text{(5,5),}$</td><td>$\\text{(5,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(6,1),}$</td><td>$\\text{(6,2),}$</td><td>$\\text{(6,3),}$</td><td>$\\text{(6,4),}$</td><td>$\\text{(6,5),}$</td><td>$\\text{(6,6)} \\} $</td></tr></table>"
        } else if (event == "sum4") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>$\\text{(1,2),}$</td><td>${\\color{RoyalBlue}\\text{(1,3)}},$</td><td>$\\text{(1,4),}$</td><td>$\\text{(1,5),}$</td><td>$\\text{(1,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(2,1),}$</td><td>${\\color{RoyalBlue}\\text{(2,2)}},$</td><td>$\\text{(2,3),}$</td><td>$\\text{(2,4),}$</td><td>$\\text{(2,5),}$</td><td>$\\text{(2,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } {\\color{RoyalBlue}\\text{(3,1)}},$</td><td>$\\text{(3,2),}$</td><td>$\\text{(3,3),}$</td><td>$\\text{(3,4),}$</td><td>$\\text{(3,5),}$</td><td>$\\text{(3,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(4,1),}$</td><td>$\\text{(4,2),}$</td><td>$\\text{(4,3),}$</td><td>$\\text{(4,4),}$</td><td>$\\text{(4,5),}$</td><td>$\\text{(4,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(5,1),}$</td><td>$\\text{(5,2),}$</td><td>$\\text{(5,3),}$</td><td>$\\text{(5,4),}$</td><td>$\\text{(5,5),}$</td><td>$\\text{(5,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(6,1),}$</td><td>$\\text{(6,2),}$</td><td>$\\text{(6,3),}$</td><td>$\\text{(6,4),}$</td><td>$\\text{(6,5),}$</td><td>$\\text{(6,6)} \\} $</td></tr></table>"
        } else if (event == "sum5") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>$\\text{(1,2),}$</td><td>$\\text{(1,3),}$</td><td>${\\color{RoyalBlue}\\text{(1,4)}},$</td><td>$\\text{(1,5),}$</td><td>$\\text{(1,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(2,1),}$</td><td>$\\text{(2,2),}$</td><td>${\\color{RoyalBlue}\\text{(2,3)}},$</td><td>$\\text{(2,4),}$</td><td>$\\text{(2,5),}$</td><td>$\\text{(2,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(3,1),}$</td><td>${\\color{RoyalBlue}\\text{(3,2)}},$</td><td>$\\text{(3,3),}$</td><td>$\\text{(3,4),}$</td><td>$\\text{(3,5),}$</td><td>$\\text{(3,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } {\\color{RoyalBlue}\\text{(4,1)}},$</td><td>$\\text{(4,2),}$</td><td>$\\text{(4,3),}$</td><td>$\\text{(4,4),}$</td><td>$\\text{(4,5),}$</td><td>$\\text{(4,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(5,1),}$</td><td>$\\text{(5,2),}$</td><td>$\\text{(5,3),}$</td><td>$\\text{(5,4),}$</td><td>$\\text{(5,5),}$</td><td>$\\text{(5,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(6,1),}$</td><td>$\\text{(6,2),}$</td><td>$\\text{(6,3),}$</td><td>$\\text{(6,4),}$</td><td>$\\text{(6,5),}$</td><td>$\\text{(6,6)} \\} $</td></tr></table>"
        } else if (event == "sum6") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>$\\text{(1,2),}$</td><td>$\\text{(1,3),}$</td><td>$\\text{(1,4),}$</td><td>${\\color{RoyalBlue}\\text{(1,5)}},$</td><td>$\\text{(1,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(2,1),}$</td><td>$\\text{(2,2),}$</td><td>$\\text{(2,3),}$</td><td>${\\color{RoyalBlue}\\text{(2,4)}},$</td><td>$\\text{(2,5),}$</td><td>$\\text{(2,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(3,1),}$</td><td>$\\text{(3,2),}$</td><td>${\\color{RoyalBlue}\\text{(3,3)}},$</td><td>$\\text{(3,4),}$</td><td>$\\text{(3,5),}$</td><td>$\\text{(3,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(4,1),}$</td><td>${\\color{RoyalBlue}\\text{(4,2)}},$</td><td>$\\text{(4,3),}$</td><td>$\\text{(4,4),}$</td><td>$\\text{(4,5),}$</td><td>$\\text{(4,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } {\\color{RoyalBlue}\\text{(5,1)}},$</td><td>$\\text{(5,2),}$</td><td>$\\text{(5,3),}$</td><td>$\\text{(5,4),}$</td><td>$\\text{(5,5),}$</td><td>$\\text{(5,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(6,1),}$</td><td>$\\text{(6,2),}$</td><td>$\\text{(6,3),}$</td><td>$\\text{(6,4),}$</td><td>$\\text{(6,5),}$</td><td>$\\text{(6,6)} \\} $</td></tr></table>"
        } else if (event == "sum7") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>$\\text{(1,2),}$</td><td>$\\text{(1,3),}$</td><td>$\\text{(1,4),}$</td><td>$\\text{(1,5),}$</td><td>${\\color{RoyalBlue}\\text{(1,6)}},$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(2,1),}$</td><td>$\\text{(2,2),}$</td><td>$\\text{(2,3),}$</td><td>$\\text{(2,4),}$</td><td>${\\color{RoyalBlue}\\text{(2,5)}},$</td><td>$\\text{(2,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(3,1),}$</td><td>$\\text{(3,2),}$</td><td>$\\text{(3,3),}$</td><td>${\\color{RoyalBlue}\\text{(3,4)}},$</td><td>$\\text{(3,5),}$</td><td>$\\text{(3,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(4,1),}$</td><td>$\\text{(4,2),}$</td><td>${\\color{RoyalBlue}\\text{(4,3)}},$</td><td>$\\text{(4,4),}$</td><td>$\\text{(4,5),}$</td><td>$\\text{(4,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(5,1),}$</td><td>${\\color{RoyalBlue}\\text{(5,2)}},$</td><td>$\\text{(5,3),}$</td><td>$\\text{(5,4),}$</td><td>$\\text{(5,5),}$</td><td>$\\text{(5,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } {\\color{RoyalBlue}\\text{(6,1)}},$</td><td>$\\text{(6,2),}$</td><td>$\\text{(6,3),}$</td><td>$\\text{(6,4),}$</td><td>$\\text{(6,5),}$</td><td>$\\text{(6,6)} \\} $</td></tr></table>"
        } else if (event == "sum8") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>$\\text{(1,2),}$</td><td>$\\text{(1,3),}$</td><td>$\\text{(1,4),}$</td><td>$\\text{(1,5),}$</td><td>$\\text{(1,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(2,1),}$</td><td>$\\text{(2,2),}$</td><td>$\\text{(2,3),}$</td><td>$\\text{(2,4),}$</td><td>$\\text{(2,5),}$</td><td>${\\color{RoyalBlue}\\text{(2,6)}},$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(3,1),}$</td><td>$\\text{(3,2),}$</td><td>$\\text{(3,3),}$</td><td>$\\text{(3,4),}$</td><td>${\\color{RoyalBlue}\\text{(3,5)}},$</td><td>$\\text{(3,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(4,1),}$</td><td>$\\text{(4,2),}$</td><td>$\\text{(4,3),}$</td><td>${\\color{RoyalBlue}\\text{(4,4)}},$</td><td>$\\text{(4,5),}$</td><td>$\\text{(4,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(5,1),}$</td><td>$\\text{(5,2),}$</td><td>${\\color{RoyalBlue}\\text{(5,3)}},$</td><td>$\\text{(5,4),}$</td><td>$\\text{(5,5),}$</td><td>$\\text{(5,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(6,1),}$</td><td>${\\color{RoyalBlue}\\text{(6,2)}},$</td><td>$\\text{(6,3),}$</td><td>$\\text{(6,4),}$</td><td>$\\text{(6,5),}$</td><td>$\\text{(6,6)} \\} $</td></tr></table>"
        } else if (event == "sum9") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>$\\text{(1,2),}$</td><td>$\\text{(1,3),}$</td><td>$\\text{(1,4),}$</td><td>$\\text{(1,5),}$</td><td>$\\text{(1,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(2,1),}$</td><td>$\\text{(2,2),}$</td><td>$\\text{(2,3),}$</td><td>$\\text{(2,4),}$</td><td>$\\text{(2,5),}$</td><td>$\\text{(2,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(3,1),}$</td><td>$\\text{(3,2),}$</td><td>$\\text{(3,3),}$</td><td>$\\text{(3,4),}$</td><td>$\\text{(3,5),}$</td><td>${\\color{RoyalBlue}\\text{(3,6)}},$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(4,1),}$</td><td>$\\text{(4,2),}$</td><td>$\\text{(4,3),}$</td><td>$\\text{(4,4),}$</td><td>${\\color{RoyalBlue}\\text{(4,5)}},$</td><td>$\\text{(4,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(5,1),}$</td><td>$\\text{(5,2),}$</td><td>$\\text{(5,3),}$</td><td>${\\color{RoyalBlue}\\text{(5,4)}},$</td><td>$\\text{(5,5),}$</td><td>$\\text{(5,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(6,1),}$</td><td>$\\text{(6,2),}$</td><td>${\\color{RoyalBlue}\\text{(6,3)}},$</td><td>$\\text{(6,4),}$</td><td>$\\text{(6,5),}$</td><td>$\\text{(6,6)} \\} $</td></tr></table>"
        } else if (event == "sum10") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>$\\text{(1,2),}$</td><td>$\\text{(1,3),}$</td><td>$\\text{(1,4),}$</td><td>$\\text{(1,5),}$</td><td>$\\text{(1,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(2,1),}$</td><td>$\\text{(2,2),}$</td><td>$\\text{(2,3),}$</td><td>$\\text{(2,4),}$</td><td>$\\text{(2,5),}$</td><td>$\\text{(2,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(3,1),}$</td><td>$\\text{(3,2),}$</td><td>$\\text{(3,3),}$</td><td>$\\text{(3,4),}$</td><td>$\\text{(3,5),}$</td><td>$\\text{(3,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(4,1),}$</td><td>$\\text{(4,2),}$</td><td>$\\text{(4,3),}$</td><td>$\\text{(4,4),}$</td><td>$\\text{(4,5),}$</td><td>${\\color{RoyalBlue}\\text{(4,6)}},$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(5,1),}$</td><td>$\\text{(5,2),}$</td><td>$\\text{(5,3),}$</td><td>$\\text{(5,4),}$</td><td>${\\color{RoyalBlue}\\text{(5,5)}},$</td><td>$\\text{(5,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(6,1),}$</td><td>$\\text{(6,2),}$</td><td>$\\text{(6,3),}$</td><td>${\\color{RoyalBlue}\\text{(6,4)}},$</td><td>$\\text{(6,5),}$</td><td>$\\text{(6,6)} \\} $</td></tr></table>"
        } else if (event == "sum11") {
            var samplespace = "$$ \\text{Sample Space (Outcomes):} $$ $ S = $  <table><tr><td>$ \\{ \\text{(1,1),}$</td><td>$\\text{(1,2),}$</td><td>$\\text{(1,3),}$</td><td>$\\text{(1,4),}$</td><td>$\\text{(1,5),}$</td><td>$\\text{(1,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(2,1),}$</td><td>$\\text{(2,2),}$</td><td>$\\text{(2,3),}$</td><td>$\\text{(2,4),}$</td><td>$\\text{(2,5),}$</td><td>$\\text{(2,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(3,1),}$</td><td>$\\text{(3,2),}$</td><td>$\\text{(3,3),}$</td><td>$\\text{(3,4),}$</td><td>$\\text{(3,5),}$</td><td>$\\text{(3,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(4,1),}$</td><td>$\\text{(4,2),}$</td><td>$\\text{(4,3),}$</td><td>$\\text{(4,4),}$</td><td>$\\text{(4,5),}$</td><td>$\\text{(4,6),}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(5,1),}$</td><td>$\\text{(5,2),}$</td><td>$\\text{(5,3),}$</td><td>$\\text{(5,4),}$</td><td>$\\text{(5,5),}$</td><td>${\\color{RoyalBlue}\\text{(5,6)}},$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{(6,1),}$</td><td>$\\text{(6,2),}$</td><td>$\\text{(6,3),}$</td><td>$\\text{(6,4),}$</td><td>${\\color{RoyalBlue}\\text{(6,5)}},$</td><td>$\\text{(6,6)} \\} $</td></tr></table>"
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    } else if (type == "deck") {
        var samplespace = "$$ \\text{Sample Space:} $$ $ S = $  <table><tr><td>$ \\{ \\text{2H,}$</td><td>$\\text{2D,}$</td><td>$\\text{2S,}$</td><td>$\\text{2C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{3H,}$</td><td>$\\text{3D,}$</td><td>$\\text{3S,}$</td><td>$\\text{3C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{4H,}$</td><td>$\\text{4D,}$</td><td>$\\text{4S,}$</td><td>$\\text{4C,}$</td><tr></tr><td>$ {\\color{White} \\{ } \\text{5H,}$</td><td>$\\text{5D,}$</td><td>$\\text{5S,}$</td><td>$\\text{5C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{6H,}$</td><td>$\\text{6D,}$</td><td>$\\text{6S,}$</td><td>$\\text{6C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{7H,}$</td><td>$\\text{7D,}$</td><td>$\\text{7S,}$</td><td>$\\text{7C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{8H,}$</td><td>$\\text{8D,}$</td><td>$\\text{8S,}$</td><td>$\\text{8C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{9H,}$</td><td>$\\text{9D,}$</td><td>$\\text{9S,}$</td><td>$\\text{9C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{10H,}$</td><td>$\\text{10D,}$</td><td>$\\text{10S,}$</td><td>$\\text{10C,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{JH,}$</td><td>$\\text{JD,}$</td><td>$\\text{JS,}$</td><td>$\\text{JC,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{QH,}$</td><td>$\\text{QS,}$</td><td>$\\text{QD,}$</td><td>$\\text{QC,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{KH,}$</td><td>$\\text{KD,}$</td><td>$\\text{KS,}$</td><td>$\\text{KC,}$</td></tr><tr><td>$ {\\color{White} \\{ } \\text{AH,}$</td><td>$\\text{AD,}$</td><td>$\\text{AS,}$</td><td>$\\text{AC} \\} $</td></tr></table>"
    }
    
    if (type == "coin1") {
        $("#explanation").show();
        var event = document.getElementById("eventscoin1").value;
        if (event == "head") {
            document.getElementById("output").innerHTML = " $$ \\text{Head} $$"
        } else {
            document.getElementById("output").innerHTML = " $$ \\text{Tail} $$"
        }
    } else if (type == "coin2") {
        $("#explanation").show();
        var event = document.getElementById("eventscoin2").value;
        if (event == "at1head") {
            document.getElementById("output").innerHTML = "$$ \\geq 1 \\text{ Head} = \\{ (H,H),(H,T),(T,H) \\} $$"
        } else if (event == "at1tail") {
            document.getElementById("output").innerHTML = "$$ \\geq 1 \\text{ Tail} = \\{ (T,T),(T,H),(H,T) \\} $$"
        } else if (event == "ex1head") {
            document.getElementById("output").innerHTML = "$$ 1 \\text{ Head} = \\{ (H,T),(T,H) \\} $$"
        } else if (event == "ex1tail") {
            document.getElementById("output").innerHTML = "$$ 1 \\text{ Tail} = \\{ (T,H),(H,T)  \\} $$"
        } else if (event == "ex2head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Heads}) &= P(H,H) \\\\ &= 1/4 \\\\ &= 2/4 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex2tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Tails}) &= P(T,T) \\\\ &= 1/4 + 1/4 \\\\ &= 2/4 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } 
    } else if (type == "coin3") {
        $("#explanation").show(); 
        var event = document.getElementById("eventscoin3").value;
        if (event == "ex1head") {
            document.getElementById("output").innerHTML = samplespace + " <br> $ \\text{One Head} = $ <br> $ \\{ \\text{(H,T,T)},\\text{(T,H,T)},\\text{(H,T,T)} \\} $ " + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "ex1tail") {
            document.getElementById("output").innerHTML = samplespace + " <br> $ \\text{One Tail} = $ <br> $ \\{ \\text{(H,H,T)},\\text{(H,T,H)},\\text{(T,H,H)} \\} $ " + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "ex2head") {
            document.getElementById("output").innerHTML = samplespace + " <br> $ \\text{Two Heads} = $ <br> $ \\{ \\text{(H,H,T)},\\text{(H,T,H)},\\text{(T,H,H)} \\} $ " + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "ex2tail") {
            document.getElementById("output").innerHTML = samplespace + " <br> $ \\text{Two Tails} = $ <br> $ \\{ \\text{(H,T,T)},\\text{(T,H,T)},\\text{(H,T,T)} \\} $ " + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "at1head") {
            document.getElementById("output").innerHTML = samplespace + " <br> $ \\text{At Least One Head} = $ <br> $ \\{ \\text{(H,H,H)},\\text{(H,H,T)},\\text{(H,T,H)},\\text{(T,H,H),} $ <br> $\\text{(H,T,T)},\\text{(T,H,T)},\\text{(T,T,H)} \\} $ " + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "at1tail") {
            document.getElementById("output").innerHTML = samplespace + " <br> $ \\text{At Least One Tail} = $ <br> $ \\{ \\text{(H,H,T)},\\text{(H,T,H)},\\text{(T,H,H),} $ <br> $\\text{(H,T,T)},\\text{(T,H,T)},\\text{(T,T,H)},\\text{(T,T,T)} \\} $" + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "at2head") {
            document.getElementById("output").innerHTML = samplespace + " <br> $ \\text{At Least Two Heads} = $ <br> $ \\{ \\text{(H,H,H)},\\text{(H,H,T)},\\text{(H,T,H)},\\text{(T,H,H)} \\} $ " + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "at2tail") {
            document.getElementById("output").innerHTML = samplespace +"<br> $ \\text{At Least Two Tails} = $ <br> $ \\{ \\text{(H,T,T)},\\text{(T,H,T)},\\text{(T,T,H)},\\text{(T,T,T)} \\} $ " + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        }
    } else if (type == "coin4") {
        $("#explanation").show();

    } else if (type == "coin5") {
        $("#explanation").show();

    } else if (type == "dice1") {
        $("#explanation").show();
        var event = document.getElementById("eventsdice1").value;
        if (event == "even") {
            document.getElementById("output").innerHTML = "$$ \\text{Even} = \\{ 2,4,6 \\} $$"
        } else if (event == "odd") {
            document.getElementById("output").innerHTML = "$$ \\text{Odd} = \\{ 1,3,5 \\} $$"
        } else if (event == "at2") {
            document.getElementById("output").innerHTML = "$$ \\geq 2 = \\{ 2,3,4,5,6 \\} $$"
        } else if (event == "at3") {
            document.getElementById("output").innerHTML = "$$ \\geq 3 = \\{ 3,4,5,6 \\} $$"
        } else if (event == "at4") {
            document.getElementById("output").innerHTML = "$$ \\geq 4 = \\{ 4,5,6 \\} $$"
        } else if (event == "at5") {
            document.getElementById("output").innerHTML = "$$ \\geq 5 = \\{ 5,6 \\}  $$"
        }
    } else if (type == "dice2") {
        
        
        
        
        
        
        
        
        
        
        
        $("#explanation").show();
        var event = document.getElementById("eventsdice2").value;
        if (event == "sum3") {
            document.getElementById("output").innerHTML = samplespace + "<br> $ \\text{Sum is } 3 = \\{ (1,2),(2,1) \\} $" + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "sum4") {
            document.getElementById("output").innerHTML = samplespace + "<br> $ \\text{Sum is } 4 = \\{ (1,3),(2,2),(3,1) \\} $" + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "sum5") {
            document.getElementById("output").innerHTML = samplespace + "<br> $ \\text{Sum is } 5 = \\{ (1,4),(2,3),(3,2),(4,1) \\} $" + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "sum6") {
            document.getElementById("output").innerHTML = samplespace + "<br> $ \\text{Sum is } 6 = $ <br> $ \\{ (1,5),(2,4),(3,3),(4,2),(5,1) \\} $" + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "sum7") {
            document.getElementById("output").innerHTML = samplespace + "<br> $ \\text{Sum is } 7 = $ <br> $ \\{ (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) \\} $" + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "sum8") {
            document.getElementById("output").innerHTML = samplespace + "<br> $ \\text{Sum is } 8 = $ <br> $ \\{ (2,6),(3,5),(4,4),(5,3),(6,2) \\} $" + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "sum9") {
            document.getElementById("output").innerHTML = samplespace + "<br> $ \\text{Sum is } 9 = \\{ (3,6),(4,5),(5,4),(6,3) \\} $" + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "sum10") {
            document.getElementById("output").innerHTML = samplespace + "<br> $ \\text{Sum is } 10 = \\{ (4,6),(5,5),(6,4) \\} $" + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "sum11") {
            document.getElementById("output").innerHTML = samplespace + "<br> $ \\text{Sum is } 11 = \\{ (5,6),(6,5) \\} $" + "<br><br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } 
        
        
        
        
        
        
        
        
        
        
        
    } else if (type == "deck") {
        $("#explanation").show(); 
        var event = document.getElementById("eventsdeck").value;
        if (event == "heart") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2H}) + P(\\text{3H}) + \\cdots + P(\\text{AH}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 \\\\ &= \\boxed{1/4} \\end{align} $$"
        } else if (event == "diamond") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2D}) + P(\\text{3D}) + \\cdots + P(\\text{AD}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 \\\\ &= \\boxed{1/4} \\end{align} $$"
        } else if (event == "spade") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2S}) + P(\\text{3S}) + \\cdots + P(\\text{AS}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 \\\\ &= \\boxed{1/4} \\end{align} $$"
        } else if (event == "club") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2C}) + P(\\text{3C}) + \\cdots + P(\\text{AC}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 \\\\ &= \\boxed{1/4} \\end{align} $$"
        } else if (event == "red") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2H}) + \\cdots + P(\\text{AH}) + P(\\text{2D}) + \\cdots + P(\\text{AD}) \\\\ &= 1/52 + \\cdots + 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 26(1/52) \\\\ &= 26/52 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "black") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2S}) + \\cdots + P(\\text{AS}) + P(\\text{2C}) + \\cdots + P(\\text{AC}) \\\\ &= 1/52 + \\cdots + 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 26(1/52) \\\\ &= 26/52 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "Jack") {
            document.getElementById("output").innerHTML = "$$ \\text{Jack} = \\{ \\text{JH},\\text{JD},\\text{JS},\\text{JC} \\} $$"
        } else if (event == "Queen") {
            document.getElementById("output").innerHTML = "$$ \\text{Queen} = \\{ \\text{QH},\\text{QD},\\text{QS},\\text{QC} \\} $$"
        } else if (event == "King") {
            document.getElementById("output").innerHTML = "$$ \\text{King} = \\{ \\text{KH},\\text{KD},\\text{KS},\\text{KC} \\} $$"
        } else if (event == "Ace") {
            document.getElementById("output").innerHTML = "$$ \\text{Ace} = \\{ \\text{AH},\\text{AD},\\text{AS},\\text{AC} \\} $$"
        }

    }
    MathJax.typeset();
}









function compprobability() {
    document.getElementById("descriptiontext").innerHTML = "An experiment is a process that generates some outcomes. The sample space is the set of all possible outcomes."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Number of Outcomes} = (n_1)(n_2)\\cdots(n_k) $$ "
    document.getElementById("explanationtext").innerHTML = "$$ N! = N(N-1)(N-2) \\cdots (2)(1) $$ $$ n! = n(n-1)(n-2) \\cdots (2)(1) $$ $$ 0! = 1 $$"
    var type = document.getElementById("exptype").value;
    
    //{\\color{RoyalBlue}
    
    
    
    if (type == "coin1") {
        $("#explanation").show();
        var event = document.getElementById("eventscoin1").value;
        if (event == "head") {
            document.getElementById("output").innerHTML = " $$ \\text{Head} $$"
        } else {
            document.getElementById("output").innerHTML = " $$ \\text{Tail} $$"
        }
    } else if (type == "coin2") {
        $("#explanation").show();
        var event = document.getElementById("eventscoin2").value;
        if (event == "at1head") {
            document.getElementById("output").innerHTML = "$$ \\geq 1 \\text{ Head} = \\{ (H,H),(H,T),(T,H) \\} $$"
        } else if (event == "at1tail") {
            document.getElementById("output").innerHTML = "$$ \\geq 1 \\text{ Tail} = \\{ (T,T),(T,H),(H,T) \\} $$"
        } else if (event == "ex1head") {
            document.getElementById("output").innerHTML = "$$ 1 \\text{ Head} = \\{ (H,T),(T,H) \\} $$"
        } else if (event == "ex1tail") {
            document.getElementById("output").innerHTML = "$$ 1 \\text{ Tail} = \\{ (T,H),(H,T)  \\} $$"
        } else if (event == "ex2head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Heads}) &= P(H,H) \\\\ &= 1/4 \\\\ &= 2/4 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex2tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Tails}) &= P(T,T) \\\\ &= 1/4 + 1/4 \\\\ &= 2/4 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } 
    } else if (type == "coin3") {
        
        
        
        
        
        
        
        
        
        
        
        
        $("#explanation").show(); 
        var event = document.getElementById("eventscoin3").value;
        if (event == "ex1head") {
            document.getElementById("output").innerHTML = " $ \\text{One Head} = $ <br> $ \\{ \\text{(H,T,T)},\\text{(T,H,T)},\\text{(H,T,T)} \\} $ <br><br> $ P(\\text{One Head}) $ <br> $ \\begin{align} &= P \\text{(H,T,T)} + P \\text{(T,H,T)} + P \\text{(H,T,T)} \\\\ &= 1/8 + 1/8 + 1/8 \\\\ &= 3/8 \\\\ &= \\boxed{.375} \\end{align} $" + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "ex1tail") {
            document.getElementById("output").innerHTML = " $ \\text{One Tail} = $ <br> $ \\{ \\text{(H,H,T)},\\text{(H,T,H)},\\text{(T,H,H)} \\} $ <br><br> $ P(\\text{One Tail}) $ <br> $ \\begin{align} &= P \\text{(H,H,T)} + P \\text{(H,T,H)} + P \\text{(T,H,H)} \\\\ &= 1/8 + 1/8 + 1/8 \\\\ &= 3/8 \\\\ &= \\boxed{.375} \\end{align} $" + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "ex2head") {
            document.getElementById("output").innerHTML = " $ \\text{Two Heads} = $ <br> $ \\{ \\text{(H,H,T)},\\text{(H,T,H)},\\text{(T,H,H)} \\} $ <br><br> $ P(\\text{Two Heads}) $ <br> $ \\begin{align} &= P \\text{(H,H,T)} + P \\text{(H,T,H)} + P \\text{(T,H,H)} \\\\ &= 1/8 + 1/8 + 1/8 \\\\ &= 3/8 \\\\ &= \\boxed{.375} \\end{align} $" + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "ex2tail") {
            document.getElementById("output").innerHTML =  " $ \\text{Two Tails} = $ <br> $ \\{ \\text{(H,T,T)},\\text{(T,H,T)},\\text{(H,T,T)} \\} $ <br><br> $ P(\\text{Two Tails}) $ <br> $ \\begin{align} &= P \\text{(H,T,T)} + P \\text{(T,H,T)} + P \\text{(H,T,T)} \\\\ &= 1/8 + 1/8 + 1/8 \\\\ &= 3/8 \\\\ &= \\boxed{.375} \\end{align} $" + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "at1head") {
            document.getElementById("output").innerHTML = " $ \\text{At Least One Head} = $ <br> $ \\{ \\text{(H,H,H)},\\text{(H,H,T)},\\text{(H,T,H)},\\text{(T,H,H),} $ <br> $\\text{(H,T,T)},\\text{(T,H,T)},\\text{(T,T,H)} \\} $ <br><br> $ P(\\text{At Least One Head}) $ <br> $ \\begin{align} &= P \\text{(H,H,H)} + P \\text{(H,H,T)} + P \\text{(H,T,H)} + P \\text{(T,H,H)} \\\\  & \\quad + P \\text{(H,T,T)} + P \\text{(T,H,T)} + P \\text{(T,T,H)} \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 + 1/8 + 1/8 + 1/8 \\\\ &= 7/8 \\\\ &= \\boxed{.875} \\end{align} $" + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "at1tail") {
            document.getElementById("output").innerHTML = " $ \\text{At Least One Tail} = $ <br> $ \\{ \\text{(H,H,T)},\\text{(H,T,H)},\\text{(T,H,H),} $ <br> $\\text{(H,T,T)},\\text{(T,H,T)},\\text{(T,T,H)},\\text{(T,T,T)} \\} $ <br><br> $ P(\\text{At Least One Tail}) $ <br> $ \\begin{align} &= P \\text{(H,H,T)} + P \\text{(H,T,H)} + P \\text{(T,H,H)} \\\\  & \\quad + P \\text{(H,T,T)} + P \\text{(T,H,T)} + P \\text{(T,T,H)} + P \\text{(T,T,T)} \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 + 1/8 + 1/8 + 1/8 \\\\ &= 7/8 \\\\ &= \\boxed{.875} \\end{align} $" + "<br> <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
        } else if (event == "at2head") {
            document.getElementById("output").innerHTML = "$$ \\geq 2 \\text{ Head} = \\{ (H,H,T),(H,T,H),(T,H,H),(H,H,H) \\} $$"
        } else if (event == "at2tail") {
            document.getElementById("output").innerHTML = "$$ \\geq 2 \\text{ Tail} = \\{ (T,T,H),(T,H,T),(T,T,H),(T,T,T) \\} $$"
        }
        
        
        
        
        
        
        
        
        
        
        // if (event == "at2heads") {
        //    document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(H,H,H)+P(H,H,T)+P(H,T,H)+P(T,H,H) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 \\\\ &= 4/8 \\\\ &= \\boxed{1/2} \\end{align} $$"
        //} else if (event == "at2tails") {
         //   document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(T,T,T)+P(T,T,H)+P(T,H,T)+P(H,T,T) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 + 1/8 \\\\ &= 4/8 \\\\ &= \\boxed{1/2} \\end{align} $$"
        //}
        
        
    } else if (type == "coin4") {
        $("#explanation").show();

    } else if (type == "coin5") {
        $("#explanation").show();

    } else if (type == "dice1") {
        $("#explanation").show();
        var event = document.getElementById("eventsdice1").value;
        if (event == "even") {
            document.getElementById("output").innerHTML = "$$ \\text{Even} = \\{ 2,4,6 \\} $$"
        } else if (event == "odd") {
            document.getElementById("output").innerHTML = "$$ \\text{Odd} = \\{ 1,3,5 \\} $$"
        } else if (event == "at2") {
            document.getElementById("output").innerHTML = "$$ \\geq 2 = \\{ 2,3,4,5,6 \\} $$"
        } else if (event == "at3") {
            document.getElementById("output").innerHTML = "$$ \\geq 3 = \\{ 3,4,5,6 \\} $$"
        } else if (event == "at4") {
            document.getElementById("output").innerHTML = "$$ \\geq 4 = \\{ 4,5,6 \\} $$"
        } else if (event == "at5") {
            document.getElementById("output").innerHTML = "$$ \\geq 5 = \\{ 5,6 \\}  $$"
        }
    } else if (type == "dice2") {
        $("#explanation").show();
        var event = document.getElementById("eventsdice2").value;
        if (event == "sum3") {
            document.getElementById("output").innerHTML = "$$ \\text{Sum}=3 = \\{ (2,1),(1,2) \\} $$"
        } else if (event == "sum4") {
            document.getElementById("output").innerHTML = "$$ \\text{Sum}=4 = \\{ (3,1),(2,2),(1,3) \\} $$"
        } else if (event == "sum5") {
            document.getElementById("output").innerHTML = "$$ \\text{Sum}=5 = \\{ (4,1),(3,2),(2,3),(1,4) \\} $$"
        } else if (event == "sum6") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(5,1)+P(4,2)+P(3,3)+P(2,4)+P(1,5) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36  \\\\ &= \\boxed{5/36} \\end{align} $$"
        } else if (event == "sum7") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(6,1)+P(5,2)+P(4,3)+P(3,4)+P(2,5)+P(1,6) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36 + 1/36 \\\\ &= 6/36 \\\\ &= \\boxed{1/6} \\end{align} $$"
        } else if (event == "sum8") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(6,2)+P(5,3)+P(4,4)+P(3,5)+P(2,6) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36\\\\ &= \\boxed{5/36} \\end{align} $$"
        } else if (event == "sum9") {
            document.getElementById("output").innerHTML = "$$ \\text{Sum}=9 = \\{ (6,3),(5,4),(4,5),(3,6) \\} $$"
        } else if (event == "sum10") {
            document.getElementById("output").innerHTML = "$$ \\text{Sum}=10 = \\{ (6,4),(5,5),(4,6) \\} $$"
        } else if (event == "sum11") {
            document.getElementById("output").innerHTML = "$$ \\text{Sum}=11 = \\{ (6,5),(5,6) \\} $$"
        } 
    } else if (type == "deck") {
        $("#explanation").show(); 
        var event = document.getElementById("eventsdeck").value;
        if (event == "heart") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2H}) + P(\\text{3H}) + \\cdots + P(\\text{AH}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 \\\\ &= \\boxed{1/4} \\end{align} $$"
        } else if (event == "diamond") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2D}) + P(\\text{3D}) + \\cdots + P(\\text{AD}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 \\\\ &= \\boxed{1/4} \\end{align} $$"
        } else if (event == "spade") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2S}) + P(\\text{3S}) + \\cdots + P(\\text{AS}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 \\\\ &= \\boxed{1/4} \\end{align} $$"
        } else if (event == "club") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2C}) + P(\\text{3C}) + \\cdots + P(\\text{AC}) \\\\ &= 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 13(1/52) \\\\ &= 13/52 \\\\ &= \\boxed{1/4} \\end{align} $$"
        } else if (event == "red") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2H}) + \\cdots + P(\\text{AH}) + P(\\text{2D}) + \\cdots + P(\\text{AD}) \\\\ &= 1/52 + \\cdots + 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 26(1/52) \\\\ &= 26/52 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "black") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(\\text{2S}) + \\cdots + P(\\text{AS}) + P(\\text{2C}) + \\cdots + P(\\text{AC}) \\\\ &= 1/52 + \\cdots + 1/52 + 1/52 + \\cdots + 1/52 \\\\ &= 26(1/52) \\\\ &= 26/52 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "Jack") {
            document.getElementById("output").innerHTML = "$$ \\text{Jack} = \\{ \\text{JH},\\text{JD},\\text{JS},\\text{JC} \\} $$"
        } else if (event == "Queen") {
            document.getElementById("output").innerHTML = "$$ \\text{Queen} = \\{ \\text{QH},\\text{QD},\\text{QS},\\text{QC} \\} $$"
        } else if (event == "King") {
            document.getElementById("output").innerHTML = "$$ \\text{King} = \\{ \\text{KH},\\text{KD},\\text{KS},\\text{KC} \\} $$"
        } else if (event == "Ace") {
            document.getElementById("output").innerHTML = "$$ \\text{Ace} = \\{ \\text{AH},\\text{AD},\\text{AS},\\text{AC} \\} $$"
        }

    }
    MathJax.typeset();
}











function experiments() {
    $("#experiments").show();
    $("#coinoneprob").hide();
    $("#samplespace").show(); $("#numberoutcomes").hide(); $("#probabilityevent").hide();
}

function switchoutcomes() {
    $("#samplespace").hide(); $("#numberoutcomes").show(); $("#probabilityevent").hide();
    experimentkind = "numberoutcomes"
}

function switchevent() {
    $("#samplespace").hide(); $("#numberoutcomes").hide(); $("#probabilityevent").show();
    experimentkind = "probabilityevent"
}

function switchspace() {
    $("#samplespace").show(); $("#numberoutcomes").hide(); $("#probabilityevent").hide();
    experimentkind = "samplespace"
}

function compexperiments() {
    if (experimentkind == "samplespace") {
        compsamplespace()
    } else if (experimentkind == "numberoutcomes") {
        compoutcomes()
    } else if (experimentkind == "probabilityevent") {
        compprobability()
    }
}


function combinations() {
    $("#combperm").show(); $("#perm").hide(); $("#comb").show();
}

function compcomb() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The counting rule for combinations is used to calculate the number of possible outcomes when the experiment involves selecting n objects from a larger set of N objects and order doesn't matter."
    document.getElementById("formulatext").innerHTML = "$$ C^N_n = \\frac{N!}{n!(N-n)!} $$ "
    document.getElementById("explanationtext").innerHTML = "$$ N! = N(N-1)(N-2) \\cdots (2)(1) $$ $$ n! = n(n-1)(n-2) \\cdots (2)(1) $$ $$ 0! = 1 $$"
    var topn = document.getElementById("topn").value;
    var bottomn = document.getElementById("bottomn").value;
    var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
    var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
    var denominator = bottomn + "!" + (topn - bottomn) + "!"; var denominator2 = ""
    if (bottomn >= topn - bottomn) {
        denominator2 = denominator2 + "\\cancel{" + bottomn + "!}"
        for (var r = 0; r < topn - bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += "\\cdot" + (topn - bottomn - r)
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + "\\cancel{"+ bottomn + "!}"
        var denominator3 = topbotfact
        var ansval = numerator3 / denominator3;
    } else {
        for (var r = 0; r < bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += (bottomn - r) + "\\cdot"
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + "\\cancel{" + (topn - bottomn) + "!}"
        denominator2 = denominator2 + "\\cancel{" + (topn - bottomn) + "!}"
        var denominator3 = bottomnfact
        var ansval = numerator3 / denominator3;
    }
    
    var table = ""
    
    if (topn == 3 && bottomn == 1) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{A} $</td><td style='padding: 0 10px;'>$ \\text{B} $</td><td style='padding: 0 10px;'>$ \\text{C} $</td></tr></table> <br>"
    } else if (topn == 3 && bottomn == 2) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{AB} $</td><td style='padding: 0 10px;'>$ \\text{AC} $</td><td style='padding: 0 10px;'>$ \\text{BC} $</td></tr></table> <br>"
    } else if (topn == 3 && bottomn == 3) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABC} $</td></tr></table>"
    } else if (topn == 4 && bottomn == 1) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{A} $</td><td style='padding: 0 10px;'>$ \\text{B} $</td><td style='padding: 0 10px;'>$ \\text{C} $</td><td style='padding: 0 10px;'>$ \\text{D} $</td></tr></table> <br>"
    }  else if (topn == 4 && bottomn == 2) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{AB} $</td><td style='padding: 0 10px;'>$ \\text{AC} $</td><td style='padding: 0 10px;'>$ \\text{AD} $</td></tr><tr><td style='padding: 0 10px;'>$ \\text{BC} $</td><td style='padding: 0 10px;'>$ \\text{BD} $</td><td style='padding: 0 10px;'>$ \\text{CD} $</td></tr></table> <br>"
    } else if (topn == 4 && bottomn == 3) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABC} $</td><td style='padding: 0 10px;'>$ \\text{ABD} $</td><td style='padding: 0 10px;'>$ \\text{ACD} $</td><td style='padding: 0 10px;'>$ \\text{BCD} $</td></tr></table> <br>"
    } else if (topn == 4 && bottomn == 4) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D:} $ <br><br>"+"<table><tr><td>$ \\text{ABCD} $</td></tr></table> <br>"
    } else if (topn == 5 && bottomn == 1) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td>$ \\text{A} $</td><td>$ \\text{B} $</td><td>$ \\text{C} $</td><td>$ \\text{D} $</td><td>$ \\text{E} $</td></tr></table> <br>"
    }  else if (topn == 5 && bottomn == 2) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{AB} $</td><td style='padding: 0 10px;'>$ \\text{AC} $</td><td style='padding: 0 10px;'>$ \\text{AD} $</td><td style='padding: 0 10px;'>$ \\text{AE} $</td><td style='padding: 0 10px;'>$ \\text{BC} $</td></tr><tr><td style='padding: 0 10px;'>$ \\text{BD} $</td><td style='padding: 0 10px;'>$ \\text{BE} $</td><td style='padding: 0 10px;'>$ \\text{CD} $</td><td style='padding: 0 10px;'>$ \\text{CE} $</td><td style='padding: 0 10px;'>$ \\text{DE} $</td></tr></table> <br>"
    } else if (topn == 5 && bottomn == 3) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABC} $</td><td style='padding: 0 10px;'>$ \\text{ABD} $</td><td style='padding: 0 10px;'>$ \\text{ABE} $</td><td style='padding: 0 10px;'>$ \\text{ACD} $</td><td style='padding: 0 10px;'>$ \\text{ACE} $</td></tr><tr><td>$ \\text{ADE} $</td><td>$ \\text{BCD} $</td><td>$ \\text{BCE} $</td><td>$ \\text{BDE} $</td><td>$ \\text{CDE} $</td></tr></table> <br>"
    } else if (topn == 5 && bottomn == 4) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABCD} $</td><td style='padding: 0 10px;'>$ \\text{ABCE} $</td><td style='padding: 0 10px;'>$ \\text{ABDE} $</td><td style='padding: 0 10px;'>$ \\text{ACDE} $</td><td style='padding: 0 10px;'>$ \\text{BCDE} $</td></tr></table> <br>"
    } else if (topn == 5 && bottomn == 5) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td>$ \\text{ABCDE} $</td></tr></table> <br>"
    } else if (topn == 6 && bottomn == 1) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{A} $</td><td style='padding: 0 10px;'>$ \\text{B} $</td><td style='padding: 0 10px;'>$ \\text{C} $</td><td style='padding: 0 10px;'>$ \\text{D} $</td><td style='padding: 0 10px;'>$ \\text{E} $</td><td style='padding: 0 10px;'>$ \\text{F} $</td></tr></table> <br>"
    } else if (topn == 6 && bottomn == 2) {
        table = " $ \\text{Combinations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{AB} $</td><td style='padding: 0 10px;'>$ \\text{AC} $</td><td style='padding: 0 10px;'>$ \\text{AD} $</td><td style='padding: 0 10px;'>$ \\text{AE} $</td><td style='padding: 0 10px;'>$ \\text{AF} $</td></tr><tr><td>$ \\text{BC} $</td><td>$ \\text{BD} $</td><td>$ \\text{BE} $</td><td>$ \\text{BF} $</td><td>$ \\text{CD} $</td></tr><tr><td>$ \\text{CE} $</td><td>$ \\text{CF} $</td><td>$ \\text{DE} $</td><td>$ \\text{DF} $</td><td>$ \\text{EF} $</td></tr></table> <br>"
    } else if (topn == 6 && bottomn == 3) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABC} $</td><td style='padding: 0 10px;'>$ \\text{ABD} $</td><td style='padding: 0 10px;'>$ \\text{ABE} $</td><td style='padding: 0 10px;'>$ \\text{ABF} $</td><td style='padding: 0 10px;'>$ \\text{ACD} $</td></tr><tr><td>$ \\text{ACE} $</td><td>$ \\text{ACF} $</td><td>$ \\text{ADE} $</td><td>$ \\text{ADF} $</td><td>$ \\text{AEF} $</td></tr><tr><td>$ \\text{BCD} $</td><td>$ \\text{BCE} $</td><td>$ \\text{BCF} $</td><td>$ \\text{BDE} $</td><td>$ \\text{BDF} $</td></tr><tr><td>$ \\text{BEF} $</td><td>$ \\text{CDE} $</td><td>$ \\text{CDF} $</td><td>$ \\text{CEF} $</td><td>$ \\text{DEF} $</td></tr></table> <br>"
    } else if (topn == 6 && bottomn == 4) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABCD} $</td><td style='padding: 0 10px;'>$ \\text{ABCE} $</td><td style='padding: 0 10px;'>$ \\text{ABCF} $</td><td style='padding: 0 10px;'>$ \\text{ABDE} $</td><td style='padding: 0 10px;'>$ \\text{ABDF} $</td></tr><tr><td>$ \\text{ABEF} $</td><td>$ \\text{ACDE} $</td><td>$ \\text{ACDF} $</td><td>$ \\text{ACEF} $</td><td>$ \\text{ADEF} $</td></tr><tr><td>$ \\text{BCDE} $</td><td>$ \\text{BCDF} $</td><td>$ \\text{BCEF} $</td><td>$ \\text{BDEF} $</td><td>$ \\text{CDEF} $</td></tr></table> <br>"
    } else if (topn == 6 && bottomn == 5) {
        table = "$ \\text{Combinations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABCDE} $</td><td style='padding: 0 10px;'>$ \\text{ABCDF} $</td><td style='padding: 0 10px;'>$ \\text{ABCEF} $</td></tr><tr><td>$ \\text{ABDEC} $</td><td>$ \\text{ABDEF} $</td><td>$ \\text{BCDEF} $</td></tr></table> <br>"
    }
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} C^{"+topn+"}_{"+bottomn+"} &= \\frac{"+topn+"!}{"+bottomn+"!("+topn+"-"+bottomn+")!} \\\\ &=\\frac{"+numerator2+"}{"+denominator2+"} \\\\ &=\\frac{"+numerator3+"}{"+denominator3+"} \\\\ &= \\boxed{"+ parseFloat(ansval.toFixed(2)) + "} \\end{align} $$" + table + " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function permutations() {
    $("#combperm").show(); $("#comb").hide(); $("#perm").show();

    
}

function compperm() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The counting rule for permutations is used to calculate the number of possible outcomes when the experiment involves selecting n objects from a larger set of N objects and order matters."
    document.getElementById("formulatext").innerHTML = "$$ P^N_n = \\frac{N!}{(N-n)!} $$"
    document.getElementById("explanationtext").innerHTML = "$$ N! = N(N-1)(N-2) \\cdots (2)(1) $$ $$ 0! = 1 $$"
    var topn = document.getElementById("topnp").value;
    var bottomn = document.getElementById("bottomnp").value;
    var bottomnfact = factorial(bottomn); var topbotfact = factorial(topn - bottomn);
    var numerator2 = ""; var numerator3 = 1; var denominator3 = ""; 
    var denominator = (topn - bottomn) + "!";
    for (var r = 0; r < bottomn; r++){
        numerator2 += (topn - r)+"\\cdot"
        numerator3 = numerator3 * (topn - r)
    }
    numerator2 = numerator2 + "\\cancel{" +  (topn - bottomn) + "!}"
    var denominator2 = "\\cancel{" + (topn - bottomn) + "!}"
    var denominator3 = bottomnfact
    var ansval = numerator3;
    
    var table = ""
    
    if (topn == 3 && bottomn == 1) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{A} $</td><td style='padding: 0 10px;'>$ \\text{B} $</td><td style='padding: 0 10px;'>$ \\text{C} $</td></tr></table> <br>"
    } else if (topn == 3 && bottomn == 2) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{AB} $</td><td style='padding: 0 10px;'>$ \\text{BA} $</td><td style='padding: 0 10px;'>$ \\text{AC} $</td></tr><tr><td>$ \\text{CA} $</td><td>$ \\text{BC} $</td><td>$ \\text{CB} $</td></tr></table> <br>"
    } else if (topn == 3 && bottomn == 3) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABC} $</td><td style='padding: 0 10px;'>$ \\text{ACB} $</td><td style='padding: 0 10px;'>$ \\text{BAC} $</td></tr><tr><td>$ \\text{BCA} $</td><td>$ \\text{CAB} $</td><td>$ \\text{CBA} $</td></tr></table> <br>"
    } else if (topn == 4 && bottomn == 1) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{A} $</td><td style='padding: 0 10px;'>$ \\text{B} $</td><td style='padding: 0 10px;'>$ \\text{C} $</td><td style='padding: 0 10px;'>$ \\text{D} $</td></tr></table> <br>"
    }  else if (topn == 4 && bottomn == 2) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{AB} $</td><td style='padding: 0 10px;'>$ \\text{BA} $</td><td style='padding: 0 10px;'>$ \\text{AC} $</td><td style='padding: 0 10px;'>$ \\text{CA} $</td><tr><td>$ \\text{AD} $</td><td>$ \\text{DA} $</td><td>$ \\text{BC} $</td><td>$ \\text{CB} $</td></tr><tr><td>$ \\text{BD} $</td><td>$ \\text{DB} $</td><td>$ \\text{CD} $</td><td>$ \\text{DC} $</td></tr></table> <br>"
    } else if (topn == 4 && bottomn == 3) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABC} $</td><td style='padding: 0 10px;'>$ \\text{ACB} $</td><td style='padding: 0 10px;'>$ \\text{BAC} $</td></tr><tr><td style='padding: 0 10px;'>$ \\text{BCA} $</td><td style='padding: 0 10px;'>$ \\text{CAB} $</td><td style='padding: 0 10px;'>$ \\text{CBA} $</td></tr><tr><td>$\\text{ABD}$</td><td>$\\text{ADB}$</td><td>$\\text{BAD}$</td></tr><tr><td>$\\text{BDA}$</td><td>$\\text{DAB}$</td><td>$\\text{DBA}$</td></tr><tr><td>$\\dots$</td><td>$\\dots$</td><td>$\\dots$</td></tr></table> <br>"
    } else if (topn == 4 && bottomn == 4) {
        //table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$\\text{ABCD}$</td><td style='padding: 0 10px;'>$\\text{ABDC}$</td><td style='padding: 0 10px;'>$\\text{ACBD}$</td><td style='padding: 0 10px;'>$\\text{ACDB}$</td><td style='padding: 0 10px;'>$\\text{ADBC}$</td><td style='padding: 0 10px;'>$\\text{ADCB}$</td></tr><tr><td>$\\text{BACD}$</td><td>$\\text{BADC}$</td><td>$\\text{BCAD}$</td><td>$\\text{BCDA}$</td><td>$\\text{BDAC}$</td><td>$\\text{BDCA}$</td></tr><tr><td>$\\text{CABD}$</td><td>$\\text{CADB}$</td><td>$\\text{CBAD}$</td><td>$\\text{CBDA}$</td><td>$\\text{CDAB}$</td><td>$\\text{CDBA}$</td></tr><tr><td>$\\text{DABC}$</td><td>$\\text{DACB}$</td><td>$\\text{DBAC}$</td><td>$\\text{DBCA}$</td><td>$\\text{DCAB}$</td><td>$\\text{DCBA}$</td></tr></table> <br>"
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$\\text{ABCD}$</td><td style='padding: 0 10px;'>$\\text{ABDC}$</td><td style='padding: 0 10px;'>$\\text{ACBD}$</td></tr><tr><td style='padding: 0 10px;'>$\\text{ACDB}$</td><td style='padding: 0 10px;'>$\\text{ADBC}$</td><td style='padding: 0 10px;'>$\\text{ADCB}$</td></tr><tr><td>$\\text{BACD}$</td><td>$\\text{BADC}$</td><td>$\\text{BCAD}$</td></tr><tr><td>$\\text{BCDA}$</td><td>$\\text{BDAC}$</td><td>$\\text{BDCA}$</td></tr><tr><td>$\\dots$</td><td>$\\dots$</td><td>$\\dots$</td></tr></table> <br>"
    } else if (topn == 5 && bottomn == 1) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{A} $</td><td style='padding: 0 10px;'>$ \\text{B} $</td><td style='padding: 0 10px;'>$ \\text{C} $</td><td style='padding: 0 10px;'>$ \\text{D} $</td><td style='padding: 0 10px;'>$ \\text{E} $</td></tr></table> <br>"
    }  else if (topn == 5 && bottomn == 2) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{AB} $</td><td style='padding: 0 10px;'>$ \\text{BA} $</td><td style='padding: 0 10px;'>$ \\text{AC} $</td><td style='padding: 0 10px;'>$ \\text{CA} $</td></tr><tr><td>$ \\text{AD} $</td><td>$ \\text{DA} $</td><td>$ \\text{AE} $</td><td>$ \\text{EA} $</td></tr><tr><td>$ \\text{BC} $</td><td>$ \\text{CB} $</td><td>$ \\text{BD} $</td><td>$ \\text{DB} $</td></tr><tr><td>$ \\text{BE} $</td><td>$ \\text{EB} $</td><td>$ \\text{CD} $</td><td>$ \\text{DC} $</td></tr><tr><td>$ \\text{CE} $</td><td>$ \\text{EC} $</td><td>$ \\text{DE} $</td><td>$ \\text{ED} $</td></tr></table> <br>"
    } else if (topn == 5 && bottomn == 3) {
        //<tr><td>$ \\text{ADE} $</td></tr><tr><td>$ \\text{BCD} $</td></tr><tr><td>$ \\text{BCE} $</td></tr><tr><td>$ \\text{BDE} $</td></tr><tr><td>$ \\text{CDE} $</td></tr>
        //table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABC} $</td><td style='padding: 0 10px;'>$ \\text{ACB} $</td><td style='padding: 0 10px;'>$ \\text{BAC} $</td><td style='padding: 0 10px;'>$ \\text{BCA} $</td><td style='padding: 0 10px;'>$ \\text{CAB} $</td><td style='padding: 0 10px;'>$ \\text{CBA} $</td></tr><tr><td>$\\text{ABD}$</td><td>$\\text{ADB}$</td><td>$\\text{BAD}$</td><td>$\\text{BDA}$</td><td>$\\text{DAB}$</td><td>$\\text{DBA}$</td></tr><tr><td>$\\text{ABE}$</td><td>$\\text{AEB}$</td><td>$\\text{BAE}$</td><td>$\\text{BEA}$</td><td>$\\text{EAB}$</td><td>$\\text{EBA}$</td></tr><tr><td>$\\text{ACD}$</td><td>$\\text{ADC}$</td><td>$\\text{CAD}$</td><td>$\\text{CDA}$</td><td>$\\text{DAC}$</td><td>$\\text{DCA}$</td></tr><tr><td>$\\text{ACE}$</td><td>$\\text{AEC}$</td><td>$\\text{CAE}$</td><td>$\\text{CEA}$</td><td>$\\text{EAC}$</td><td>$\\text{ECA}$</td></tr><tr><td>$\\vdots$</td><td>$\\vdots$</td><td>$\\vdots$</td><td>$\\vdots$</td><td>$\\vdots$</td><td>$\\vdots$</td></tr></table> <br>"
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABC} $</td><td style='padding: 0 10px;'>$ \\text{ACB} $</td><td style='padding: 0 10px;'>$ \\text{BAC} $</td></tr><tr><td style='padding: 0 10px;'>$ \\text{BCA} $</td><td style='padding: 0 10px;'>$ \\text{CAB} $</td><td style='padding: 0 10px;'>$ \\text{CBA} $</td></tr><tr><td>$\\text{ABD}$</td><td>$\\text{ADB}$</td><td>$\\text{BAD}$</td></tr><tr><td>$\\text{BDA}$</td><td>$\\text{DAB}$</td><td>$\\text{DBA}$</td></tr><tr><td>$\\dots$</td><td>$\\dots$</td><td>$\\dots$</td></tr></table> <br>"
    } else if (topn == 5 && bottomn == 4) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$\\text{ABCD}$</td><td style='padding: 0 10px;'>$\\text{ABDC}$</td><td style='padding: 0 10px;'>$\\text{ACBD}$</td></tr><tr><td style='padding: 0 10px;'>$\\text{ACDB}$</td><td style='padding: 0 10px;'>$\\text{ADBC}$</td><td style='padding: 0 10px;'>$\\text{ADCB}$</td></tr><tr><td>$\\text{BACD}$</td><td>$\\text{BADC}$</td><td>$\\text{BCAD}$</td></tr><tr><td>$\\text{BCDA}$</td><td>$\\text{BDAC}$</td><td>$\\text{BDCA}$</td></tr><tr><td>$\\dots$</td><td>$\\dots$</td><td>$\\dots$</td></tr></table> <br>"
    } else if (topn == 5 && bottomn == 5) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABCDE} $</td><td style='padding: 0 10px;'>$ \\text{ABCED} $</td><td style='padding: 0 10px;'>$ \\text{ABDCE} $</td><td style='padding: 0 10px;'>$ \\text{ABDEC} $</td></tr><tr><td>$ \\text{ABECD} $</td><td>$ \\text{ABEDC} $</td><td>$ \\text{ACBDE} $</td><td>$ \\text{ACBED} $</td></tr><tr><td>$ \\text{ACDBE} $</td><td>$ \\text{ACDEB} $</td><td>$ \\text{ACEBD} $</td><td>$ \\text{ACEDB} $</td></tr><tr><td>$ \\text{ADBCE} $</td><td>$ \\text{ADBEC} $</td><td>$ \\text{ADCBE} $</td><td>$ \\text{ADCEB} $</td></tr><tr><td>$ \\dots $</td><td>$ \\dots $</td><td>$ \\dots $</td><td>$ \\dots $</td></tr></table> <br>"
    } else if (topn == 6 && bottomn == 1) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{A} $</td><td style='padding: 0 10px;'>$ \\text{B} $</td><td style='padding: 0 10px;'>$ \\text{C} $</td><td style='padding: 0 10px;'>$ \\text{D} $</td><td style='padding: 0 10px;'>$ \\text{E} $</td><td style='padding: 0 10px;'>$ \\text{F} $</td></tr></table> <br>"
    } else if (topn == 6 && bottomn == 2) {
        //table = " $ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{AB} $</td><td style='padding: 0 10px;'>$ \\text{BA} $</td><td style='padding: 0 10px;'>$ \\text{AC} $</td><td style='padding: 0 10px;'>$ \\text{CA} $</td><td style='padding: 0 10px;'>$ \\text{AD} $</td><td style='padding: 0 10px;'>$ \\text{DA} $</td><tr><td>$ \\text{AE} $</td><td>$ \\text{EA} $</td><td>$ \\text{AF} $</td><td>$ \\text{FA} $</td><td>$ \\text{BC} $</td><td>$ \\text{CB} $</td><tr></tr><td>$ \\text{BD} $</td><td>$ \\text{DB} $</td><td>$ \\text{BE} $</td><td>$ \\text{EB} $</td><td>$ \\text{BF} $</td><td>$ \\text{FB} $</td></tr><tr></tr><td>$ \\text{CD} $</td><td>$ \\text{DC} $</td><td>$ \\text{CE} $</td><td>$ \\text{EC} $</td><td>$ \\text{CF} $</td><td>$ \\text{FC} $</td></tr><tr></tr><td>$ \\text{DE} $</td><td>$ \\text{ED} $</td><td>$ \\text{DF} $</td><td>$ \\text{FD} $</td><td>$ \\text{EF} $</td><td>$ \\text{FE} $</td></tr></table> <br>"
        table = " $ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{AB} $</td><td style='padding: 0 10px;'>$ \\text{BA} $</td><td style='padding: 0 10px;'>$ \\text{AC} $</td><td style='padding: 0 10px;'>$ \\text{CA} $</td></tr><tr><td style='padding: 0 10px;'>$ \\text{AD} $</td><td style='padding: 0 10px;'>$ \\text{DA} $</td><td>$ \\text{AE} $</td><td>$ \\text{EA} $</td></tr><tr><td>$ \\text{AF} $</td><td>$ \\text{FA} $</td><td>$ \\text{BC} $</td><td>$ \\text{CB} $</td></tr><tr><td>$ \\text{BD} $</td><td>$ \\text{DB} $</td><td>$ \\text{BE} $</td><td>$ \\text{EB} $</td></tr><tr><td>$ \\dots $</td><td>$ \\dots $</td><td>$ \\dots $</td><td>$ \\dots $</td></tr></table> <br>"
    } else if (topn == 6 && bottomn == 3) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABC} $</td><td style='padding: 0 10px;'>$ \\text{ABD} $</td><td style='padding: 0 10px;'>$ \\text{ABE} $</td><td style='padding: 0 10px;'>$ \\text{ABF} $</td><td style='padding: 0 10px;'>$ \\text{ACD} $</td></tr><tr><td>$ \\text{ACE} $</td><td>$ \\text{ACF} $</td><td>$ \\text{ADE} $</td><td>$ \\text{ADF} $</td><td>$ \\text{AEF} $</td></tr><tr><td>$ \\text{BCD} $</td><td>$ \\text{BCE} $</td><td>$ \\text{BCF} $</td><td>$ \\text{BDE} $</td><td>$ \\text{BDF} $</td></tr><tr><td>$ \\text{BEF} $</td><td>$ \\text{CDE} $</td><td>$ \\text{CDF} $</td><td>$ \\text{CEF} $</td><td>$ \\text{DEF} $</td></tr></table> <br>"
    } else if (topn == 6 && bottomn == 4) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABCD} $</td><td style='padding: 0 10px;'>$ \\text{ABCE} $</td><td style='padding: 0 10px;'>$ \\text{ABCF} $</td><td style='padding: 0 10px;'>$ \\text{ABDE} $</td><td style='padding: 0 10px;'>$ \\text{ABDF} $</td></tr><tr><td>$ \\text{ABEF} $</td><td>$ \\text{ACDE} $</td><td>$ \\text{ACDF} $</td><td>$ \\text{ACEF} $</td><td>$ \\text{ADEF} $</td></tr><tr><td>$ \\text{BCDE} $</td><td>$ \\text{BCDF} $</td><td>$ \\text{BCEF} $</td><td>$ \\text{BDEF} $</td><td>$ \\text{CDEF} $</td></tr></table> <br>"
    } else if (topn == 6 && bottomn == 5) {
        table = "$ \\text{Permutations of}$ <br> $\\text{A, B, C, D, E, F:} $ <br><br>"+"<table><tr><td style='padding: 0 10px;'>$ \\text{ABCDE} $</td><td style='padding: 0 10px;'>$ \\text{ABCDF} $</td><td style='padding: 0 10px;'>$ \\text{ABCEF} $</td></tr><tr><td>$ \\text{ABDEC} $</td><td>$ \\text{ABDEF} $</td><td>$ \\text{BCDEF} $</td></tr></table> <br>"
    }
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P^{"+topn+"}_{"+bottomn+"} &= \\frac{"+topn+"!}{("+topn+"-"+bottomn+")!} \\\\ &= \\frac{"+numerator2+"}{"+denominator2+"} \\\\ &= \\boxed{"+ parseFloat(ansval.toFixed(2)) + "} \\end{align} $$" + table + " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function complement() {
    $("#complement").show();
}

function compcomp() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The complement of an event A is the event consisting of all sample points not in A."
    document.getElementById("formulatext").innerHTML = "$ P(A) = 1 - P(A^c) $"
    document.getElementById("explanationtext").innerHTML = "An event and its complement make up the entire sample space."
    
    var probac = document.getElementById("probcomp").value;
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A) &= 1 - P(A^c) \\\\ &= 1 - " + probac + " \\\\ &= \\boxed{" + (1-probac).toFixed(2) + "} \\end{align} $$" + " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"

    
    MathJax.typeset();
}

function union() {
    $("#union").show();
}

function mutually() {
    if (document.getElementById('mutexc').checked) {
      $("#zero").show(); $("#probaib").hide();
      mutuallyexc = "yes"
  } else {
      $("#zero").hide(); $("#probaib").show();
      mutuallyexc = "no"
  }
}

function compunion() {
    if (mutuallyexc == "no") {
        compunion1()
    } else if (mutuallyexc == "yes") {
        compunion2()
    }
}

function compunion1() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The union of events A and B is the event consisting of all sample points in A, B or both."
    document.getElementById("formulatext").innerHTML = "$ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) $"
    document.getElementById("explanationtext").innerHTML = "The probability of the intersection is subtracted because it is counted twice."
    var proba = document.getElementById("proba").value;
    var probb = document.getElementById("probb").value;
    var probaib = document.getElementById("probaib").value;
    var ans = parseFloat(proba) + parseFloat(probb) - parseFloat(probaib);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cup B) &= P(A) + P(B) - P(A \\cap B) \\\\ &= " + proba + "+" + probb + "-" + probaib + " \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "} \\end{align} $$" + " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function compunion2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The union of events A and B is the event consisting all sample points in A, B or both."
    document.getElementById("formulatext").innerHTML = "$ P(A \\cup B) = P(A) + P(B) $"
    document.getElementById("explanationtext").innerHTML = "The intersection of mutually exclusive events is empty."
    var proba = document.getElementById("proba").value;
    var probb = document.getElementById("probb").value;
    var probaib = document.getElementById("probaib").value;
    var ans = parseFloat(proba) + parseFloat(probb)
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cup B) &= P(A) + P(B) \\\\ &= " + proba + "+" + probb + " \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "} \\end{align} $$" + " <a href = 'mailto: contact@statssolver.com'>Send Feedback</a>"
    MathJax.typeset();
}

function intersection() {
    $("#intersection").show();
}

function intindep() {
    if (document.getElementById('intindep').checked) {
      $("#intyesindep").show(); $("#intnotindep").hide();
      intindepval = "yes"
  } else {
      $("#intyesindep").hide(); $("#intnotindep").show();
      intindepval = "no"
  }
}

function independent() {
    if (document.getElementById('indep').checked) {
      $("#probtype1a").show(); $("#probtype1").hide();
      document.getElementById("probtype2").innerHTML = "B"
  } else {
      $("#probtype1a").hide(); $("#probtype1").show(); 
  }
}

function compintersection() {
    var probtype1 = document.getElementById("probtype1").value;
    if (probtype1 == "B") {
        compintersection1()
    } else if (probtype1 == "A") {
        compintersection2()
    }
}

function compintersection1() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The intersection of events A and B is the event containing all sample points in both A and B."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cap B) = P(B) P(A \\mid B)  $$"
    document.getElementById("explanationtext").innerHTML = "If the events are independent, the probability of A given B is equal to the probability of A."
    var iproba = document.getElementById("iproba").value;
    var iprobb = document.getElementById("iprobb").value;
    var ans = parseFloat(iproba) * parseFloat(iprobb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(B) P(A \\mid B) \\\\ &= " + iprobb + "(" + iproba + ") \\\\ &= " + parseFloat(ans.toFixed(2)) + " \\end{align} $$"
    MathJax.typeset();
}

function compintersection2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The intersection of events A and B is the event containing all sample points in both A and B."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cap B) = P(B) P(A \\mid B)  $$"
    document.getElementById("explanationtext").innerHTML = "If the events are independent, the probability of A given B is equal to the probability of A and the probability of B given A is equal to the probability of B."
    var iproba = document.getElementById("iproba").value;
    var iprobb = document.getElementById("iprobb").value;
    var ans = parseFloat(iproba) * parseFloat(iprobb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(A) P(B \\mid A) \\\\ &= " + iproba + "(" + iprobb + ") \\\\ &= " + parseFloat(ans.toFixed(2)) + " \\end{align} $$"
    MathJax.typeset();
}

function compintersection3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The intersection of events A and B is the event containing all sample points in both A and B."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cap B) = P(B) P(A \\mid B)  $$"
    document.getElementById("explanationtext").innerHTML = "If the events are independent, the probability of A given B is equal to the probability of A and the probability of B given A is equal to the probability of B."
    var iproba = document.getElementById("iproba").value;
    var iprobb = document.getElementById("iprobb").value;
    var ans = parseFloat(iproba) * parseFloat(iprobb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(A) P(B) \\\\ &= " + iproba + "(" + iprobb + ") \\\\ &= " + parseFloat(ans.toFixed(2)) + " \\end{align} $$"
    MathJax.typeset();
}

function compintersection4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The intersection of events A and B is the event containing all sample points in both A and B."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cap B) = P(B) P(A)  $$"
    document.getElementById("explanationtext").innerHTML = "If the events are independent, the probability of A given B is equal to the probability of A and the probability of B given A is equal to the probability of B."
    var iproba = document.getElementById("iproba").value;
    var iprobb = document.getElementById("iprobb").value;
    var ans = parseFloat(iproba) * parseFloat(iprobb);
    document.getElementById("output").innerHTML = "$$ \\text{Cannot compute.}$$"
    MathJax.typeset();
}

function condind() {
    if (document.getElementById('condind').checked) {
      $("#condindep1").hide(); $("#condindep2").hide(); $("#condindep3").hide(); $("#condindep4").hide();
      condindepenent = "yes"
  } else {
      $("#condindep1").show(); $("#condindep2").show(); $("#condindep3").show(); $("#condindep4").show();
      condindepenent = "no"
  }
}

function conditional() {
    $("#conditional").show();
    conditionaltype = 1;
}

function compconditional() {
    var probtype = document.getElementById("probtype3").value;
    if (condindepenent == "no") {
        if (probtype == "B") {
            compconditional1()
        } else if (probtype == "A") {
            compconditional2()
        } 
    } else if (condindepenent == "yes") {
        if (probtype == "B") {
            compconditional3()
        } else if (probtype == "A") {
            compconditional4()
        } 
    }
    
}

function compconditional1() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The probability of A given B is the probability of event A occuring given that event B has already occured."
    document.getElementById("formulatext").innerHTML = "$ P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)} $"
    document.getElementById("explanationtext").innerHTML = ""
    var probb = document.getElementById("probb3").value;
    var probi = document.getElementById("probaib2").value;
    var ans = parseFloat(probi) / parseFloat(probb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\mid B) &= \\frac{P(A \\cap B)}{P(B)} \\\\ &= \\frac{" + probi + "}{" + probb + "} = \\boxed{" + ans.toFixed(2) + "} \\end{align} $$"
    MathJax.typeset();
}

function compconditional2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The probability of B given A is the probability of event B occuring given that event A has already occured."
    document.getElementById("formulatext").innerHTML = "$ P(B \\mid A) = \\dfrac{P(A \\cap B)}{P(A)} $"
    document.getElementById("explanationtext").innerHTML = ""
    var proba = document.getElementById("probb3").value;
    var probi = document.getElementById("probaib2").value;
    var ans = parseFloat(probi) / parseFloat(proba);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(B \\mid A) &= \\frac{P(A \\cap B)}{P(A)} \\\\ &= \\frac{" + probi + "}{" + proba + "} \\\\ &= \\boxed{" + ans.toFixed(2) + "} \\end{align} $$"
    MathJax.typeset();
}

function compconditional3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The probability of A given B is the probability of event A occuring given that event B has already occured."
    document.getElementById("formulatext").innerHTML = "$ P(B \\mid A) = P(B) $"
    document.getElementById("explanationtext").innerHTML = ""
    var probb = document.getElementById("probb3").value;
    var probi = document.getElementById("probaib2").value;
    var ans = parseFloat(probaib) / parseFloat(probb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(B \\mid A) &= P(B) \\\\ &= \\boxed{" + probb + "} \\end{align} $$"
    MathJax.typeset();
}

function compconditional4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The probability of B given A is the probability of event B occuring given that event A has already occured."
    document.getElementById("formulatext").innerHTML = "$ P(A \\mid B) = P(A) $"
    document.getElementById("explanationtext").innerHTML = ""
    var proba = document.getElementById("probb3").value;
    var probi = document.getElementById("probaib2").value;
    var ans = parseFloat(probaib) / parseFloat(probb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\mid B) &= P(A) \\\\ &= \\boxed{" + proba + "} \\end{align} $$"
    MathJax.typeset();
}

function bayes() {
    $("#bayes").show();
}

function compbayes() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "An experiment is a process that generates some outcomes. The sample space is the set of all possible outcomes."
    document.getElementById("formulatext").innerHTML = "$$ P(A_1 \\mid B) = \\frac{P(A_1)P(B \\mid A_1)}{P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2)} $$ $$ P(A_2 \\mid B) = \\frac{P(A_2)P(B \\mid A_2)}{P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2)} $$ "
    document.getElementById("explanationtext").innerHTML = "$$ N! = N(N-1)(N-2) \\cdots (2)(1) $$ $$ n! = n(n-1)(n-2) \\cdots (2)(1) $$ $$ 0! = 1 $$"
    var proba1 = document.getElementById("proba1").value;
    var proba2 = document.getElementById("proba2").value;
    var probbgiva1 = document.getElementById("probbgiva1").value;
    var probbgiva2 = document.getElementById("probbgiva2").value;
    var ans1 = (proba1 * probbgiva1) / (proba1 * probbgiva1 + proba2 * probbgiva2);
    var ans2 = (proba2 * probbgiva2) / (proba1 * probbgiva1 + proba2 * probbgiva2);
    document.getElementById("output").innerHTML = "$$ \\begin{align} & P(A_1 \\mid B) \\\\ &= \\frac{P(A_1)P(B \\mid A_1)}{P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2)} \\\\ &= \\frac{" + proba1 + "(" + probbgiva1 + ")}{" + proba1 + "(" + probbgiva1 + ") + " + proba2 + "(" + probbgiva2 + ")} \\\\ &= \\boxed{" + ans1.toFixed(2) + "} \\end{align} $$ $$ \\begin{align} & P(A_2 \\mid B) \\\\ &= \\frac{P(A_2)P(B \\mid A_2)}{P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2)} \\\\ &= \\frac{" + proba2 + "(" + probbgiva2 + ")}{" + proba1 + "(" + probbgiva1 + ") + " + proba2 + "(" + probbgiva2 + ")} \\\\ &= \\boxed{" + ans2.toFixed(2) + "} \\end{align} $$"
    MathJax.typeset();
}

function exampleexperiments(){
    $("#exptimes").hide(); $("#exptimes1").show(); $("#exptimes2").hide(); $("#exptimes3").hide();
    document.getElementById('exptype').value="coin3"
    var x = document.getElementById("stat").value;
    if (x == "probability" || x == "events") {
        $("#eventscoin3").show(); $("#eventsdice2").hide();
    }
}

function exampleexperiments2(){
    $("#exptimes").hide(); $("#exptimes1").hide(); $("#exptimes2").show(); $("#exptimes3").hide();
    document.getElementById('exptype').value="dice2"
    var x = document.getElementById("stat").value;
    if (x == "probability" || x == "events") {
        $("#eventsdice2").show(); $("#eventscoin3").hide();
    }
}

function examplecomb(){
    document.getElementById('topn').value="6"
    document.getElementById('bottomn').value="2"
}

function examplecomb2(){
    document.getElementById('topn').value="5"
    document.getElementById('bottomn').value="3"
}

function exampleperm(){
    document.getElementById('topnp').value="6"
    document.getElementById('bottomnp').value="2"
}

function exampleperm2(){
    document.getElementById('topnp').value="5"
    document.getElementById('bottomnp').value="3"
}

function examplecomplement(){
    document.getElementById('probcomp').value=".70"
}

function examplecomplement2(){
    document.getElementById('probcomp').value=".20"
}

function exampleunion(){
    document.getElementById('proba').value=".11"
    document.getElementById('probb').value=".10"
    document.getElementById("probaib").value=".04"
}

function exampleunion2(){
    document.getElementById('proba').value=".32"
    document.getElementById('probb').value=".24"
    document.getElementById("probaib").value=".10"
}

function exampleintersection(){
    //document.getElementById('probtype1').value = "AgivB"
    //document.getElementById('probtype2').value = "B"
    document.getElementById('iprobb').value=".85"
    document.getElementById("iproba").value=".73"
}

function exampleintersection2(){
    //document.getElementById('probtype1').value = "A"
    //document.getElementById('probtype2').value = "B"
    document.getElementById('iprobb').value=".81"
    document.getElementById("iproba").value=".84"
}

function exampleconditional(){
    document.getElementById('probb3').value=".82"
    document.getElementById("probaib2").value=".25"
}

function exampleconditional2(){
    document.getElementById('probb3').value=".25"
    document.getElementById("probaib2").value=".04"
}

function examplebayes(){
    document.getElementById('proba1').value=".75"
    document.getElementById("proba2").value=".33"
    document.getElementById('probbgiva1').value=".03"
    document.getElementById("probbgiva2").value=".04"
}

function examplebayes2(){
    document.getElementById('proba1').value=".41"
    document.getElementById("proba2").value=".65"
    document.getElementById('probbgiva1').value=".23"
    document.getElementById("probbgiva2").value=".04"
}


function switchconditional(){
    $("#conditional").hide();
    $("#conditional2").show();
    conditionaltype = 2;
}

function switchconditional2(){
    $("#conditional").show();
    $("#conditional2").hide();
    conditionaltype = 1;
}

function switchint(){
    $("#intersection").hide();
    $("#intersection2").show();
}

function switchunion(){
    $("#union").hide();
    $("#union2").show();
    mutual = true;
}

function switchunion2(){
    $("#union").show();
    $("#union2").hide();
    mutual = false;
}

function switchintersect() {
    var x = document.getElementById("probtype1").value;
    if (x == "A") {
        document.getElementById("probtype2").innerHTML = "$B \\mid A$"
    } else if (x == "B") {
        document.getElementById("probtype2").innerHTML = "$A \\mid B$"
    }
    MathJax.typeset();
}

function switchint(){
    $("#intersection").hide();
    $("#intersection2").show();
    $("#intersection3").hide();
    $("#intersection4").hide();
    indtype = 2;
    indep = false;
}

function switchint2(){
    $("#intersection").show();
    $("#intersection2").hide();
    $("#intersection3").hide();
    $("#intersection4").hide();
    indtype = 1;
    indep = false;
}

function switchindep(){
    $("#intersection").hide();
    $("#intersection2").hide();
    $("#intersection3").show();
    $("#intersection4").hide();
    indtype = 2;
    indep = true;
}

function switchindep2(){
    $("#intersection").hide();
    $("#intersection2").hide();
    $("#intersection3").hide();
    $("#intersection4").show();
    indtype = 1;
    indep = true;
}

function switchindep3(){
    $("#intersection").show();
    $("#intersection2").hide();
    $("#intersection3").hide();
    $("#intersection4").hide();
    indtype = 1;
    indep = false;
}

function switchindep4(){
    $("#intersection").hide();
    $("#intersection2").show();
    $("#intersection3").hide();
    $("#intersection4").hide();
    indtype = 2;
    indep = false;
}

function bayes2three() {
    $("#bayesrow3").show(); $("#bayes2three").hide(); $("#bayes2two").show();
    bayesrows = 3
}

function bayes2two() {
    $("#bayesrow3").hide(); $("#bayes2three").show(); $("#bayes2two").hide();
    bayesrows = 2
}