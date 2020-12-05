$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#comb").hide(); $("#perm").hide(); $("#complement").hide(); $("#union").hide(); $("#intersection").hide(); $("#conditional").hide();
$("#intersection2").hide(); $("#conditional2").hide(); $("#union2").hide(); $("#intersection3").hide(); $("#intersection4").hide();
$("#bayes").hide(); $("#output2").hide(); $("#exptimes").show(); $("#exptimes1").hide(); $("#exptimes2").hide(); $("#exptimes3").hide();
$("#times").hide(); $("#blankspace").show(); $("#events").hide();

$("#combinationexamples").hide(); $("#permutationexamples").hide();  $("#complementexamples").hide(); $("#unionexamples").hide();
$("#intersectionexamples").hide(); $("#conditionalexamples").hide();  $("#bayesexamples").hide(); $("#experiments").show();

$("#samplespace").hide(); $("#numberoutcomes").hide(); $("#probabilityevent").hide();

$("#zero").hide(); $("#probtype1a").hide(); $("#bayesrow3").hide();

$("#intyesindep").hide();

experimentkind = "samplespace"
mutuallyexc = "no"
intindepval = "no"

function factorial(n) {
    if (n > 0) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    } else if (n == 0) {
        return 1
    } 
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

function compoutcomes() {
    document.getElementById("descriptiontext").innerHTML = "The number of outcomes can be calculated using the counting rule for multiple-step experiments."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Number of Outcomes} = (n_1)(n_2)\\cdots(n_k) $$ "
    document.getElementById("explanationtext").innerHTML = "A multiple-step experiment is an experiment which has several steps."
    var type = document.getElementById("exptype").value;
    
    if (type == "coin1") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\text{Number of Outcomes} = 2$$"
    } else if (type == "coin2") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Number of Outcomes} &= (2)(2) \\\\ &= \\boxed{4} \\end{align}  $$"
    } else if (type == "coin3") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Number of Outcomes} &= (2)(2)(2) \\\\ &= \\boxed{8} \\end{align}  $$ "
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
        document.getElementById("output").innerHTML = "$$ \\text{Number of Outcomes} = 6 $$"
    } else if (type == "dice2") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Number of Outcomes} &= (6)(6) \\\\ &= \\boxed{36} \\end{align} $$"
    } else if (type == "deck") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ \\text{Number of Outcomes} = 52 $$"
    }
    MathJax.typeset();
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
        document.getElementById("output").innerHTML = "$$ S = \\{ \\text{Head, Tail} \\}$$"
    } else if (type == "coin2") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ S = \\{ \\text{(H,H), (H,T), (T,H), (T,T)} \\}$$"
    } else if (type == "coin3") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ S = \\{ \\text{(H,H,H), (H,H,T), (H,T,H), (H,T,T),}$$ $$ \\qquad \\text{(T,H,H), (T,H,T), (T,T,H), (T,T,T)} \\} $$"
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
        document.getElementById("output").innerHTML = "$$ S = \\{ 1, 2, 3, 4, 5, 6 \\} $$"
    } else if (type == "dice2") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ S = \\{ (1,1), (1,2), (1,3), (1,4), (1,5), (1,6),$$  $$ \\qquad (2,1), (2,2), (2,3), (2,4), (2,5), (2,6),$$ $$ \\qquad (3,1), (3,2), (3,3), (3,4), (3,5), (3,6),$$ $$ \\qquad (4,1), (4,2), (4,3), (4,4), (4,5), (4,6),$$ $$ \\qquad (5,1), (5,2), (5,3), (5,4), (5,5), (5,6),$$ $$ \\qquad (6,1), (6,2), (6,3), (6,4), (6,5), (6,6) \\} $$"
    } else if (type == "deck") {
        $("#explanation").show(); $("#output2").hide(); 
        $("#coin1").hide(); $("#coin2").hide(); $("#coin3").hide(); $("#coin4").hide(); $("#coin5").hide(); 
        $("#dice1").hide(); $("#dice2").hide(); $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$ S = \\{ \\text{2H, 3H, 4H, 5H, 6H, 7H, 8H,} $$ $$ \\qquad \\text{9H, 10H, JH, QH, KH, AH,} $$ $$ \\qquad \\ \\ \\text{2D, 3D, 4D, 5D, 6D, 7D, 8D,} $$ $$ \\qquad \\text{ 9D, 10D, JD, QD, KD, AD,} $$ $$ \\quad \\ \\text{2S, 3S, 4S, 5S, 6S, 7S, 8S,} $$ $$ \\quad \\text{9S, 10S, JS, QS, KS, AS,} $$ $$ \\qquad \\ \\ \\text{2C, 3C, 4C, 5C, 6C, 7C, 8C,} $$ $$ \\qquad \\ \\text{9C, 10C, JC, QC, KC, AC} \\} $$"
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











function compprobout() {
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

function compprobability() {
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
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 1 \\text{ Head}) &= P(H,H)+P(H,T)+P(T,H) \\\\ &= 1/4 + 1/4 + 1/4 \\\\ &= \\boxed{3/4} \\end{align} $$"
        } else if (event == "at1tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 1 \\text{ Tail}) &= P(T,T)+P(H,T)+P(T,H) \\\\ &= 1/4 + 1/4 + 1/4 \\\\ &= \\boxed{3/4} \\end{align} $$"
        } else if (event == "ex1head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(1 \\text{ Head}) &= P(H,T)+P(T,H) \\\\ &= 1/4 + 1/4 \\\\ &= 2/4 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex1tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(1 \\text{ Tail}) &= P(T,H)+P(H,T) \\\\ &= 1/4 + 1/4 \\\\ &= 2/4 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex2head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Heads}) &= P(H,H) \\\\ &= 1/4 \\\\ &= 2/4 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex2tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Tails}) &= P(T,T) \\\\ &= 1/4 + 1/4 \\\\ &= 2/4 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } 
    } else if (type == "coin3") {
        $("#explanation").show(); 
        var event = document.getElementById("eventscoin3").value;
        if (event == "at2heads") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(H,H,H)+P(H,H,T)+P(H,T,H)+P(T,H,H) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 \\\\ &= 4/8 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "at2tails") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(T,T,T)+P(T,T,H)+P(T,H,T)+P(H,T,T) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 + 1/8 \\\\ &= 4/8 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex2head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Heads}) &= P(H,H,T)+P(H,T,H)+P(T,H,H) \\\\ &= 1/8 + 1/8 + 1/8 \\\\ &= \\boxed{3/8}  \\end{align} $$"
        } else if (event == "ex2tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(2 \\text{ Tails}) &= P(T,T,H)+P(T,H,T)+P(H,T,T) \\\\ &= 1/8 + 1/8 + 1/8 \\\\ &= \\boxed{3/8} \\end{align} $$"
        } else if (event == "ex1head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(1 \\text{ Head}) &= P(H,T,T)+P(T,H,T)+P(H,T,T) \\\\ &= 1/8 + 1/8 + 1/8 \\\\ &= 3/8 \\end{align} $$"
        } else if (event == "ex1tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(1 \\text{ Tail}) &= P(T,H,H)+P(H,T,H)+P(H,H,T) \\\\ &= 1/8 + 1/8 + 1/8 \\\\ &= 3/8 \\end{align} $$"
        } else if (event == "at2head") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 2 \\text{ Head}) &= P(H,H,T)+P(H,T,H)+P(T,H,H)+P(H,H,H) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 \\\\ &= 4/8 \\end{align} $$"
        } else if (event == "at2tail") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 2 \\text{ Tail}) &= P(T,T,H)+P(T,H,T)+P(T,T,H)+P(T,T,T) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 \\\\ &= 4/8 \\end{align} $$"
        } 
    } else if (type == "coin4") {
        $("#explanation").show();

    } else if (type == "coin5") {
        $("#explanation").show();

    } else if (type == "dice1") {
        $("#explanation").show();
        var event = document.getElementById("eventsdice1").value;
        if (event == "even") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Even}) &= P(2)+P(4)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "odd") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Odd}) &= P(1)+P(3)+P(5) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "at2") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 2) &= P(2)+P(3)+P(4)+P(5)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 + 1/6 + 1/6 \\\\ &= 5/6 \\\\ &= \\boxed{5/6} \\end{align} $$"
        } else if (event == "at3") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 3) &= P(3)+P(4)+P(5)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 + 1/6 \\\\ &= 4/6 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "at4") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 4) &= P(4)+P(5)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "at5") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\geq 5) &= P(5)+P(6) \\\\ &= 1/6 + 1/6 \\\\ &= 2/6 \\\\ &= \\boxed{1/3} \\end{align} $$"
        }
    } else if (type == "dice2") {
        $("#explanation").show();
        var event = document.getElementById("eventsdice2").value;
        if (event == "sum3") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=3) &= P(2,1)+P(1,2) \\\\ &= 1/36 + 1/36 \\\\ &= 2/36 \\\\ &= \\boxed{1/18} \\end{align} $$"
        } else if (event == "sum4") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=4) &= P(3,1)+P(2,2)+P(1,3) \\\\ &= 1/36 + 1/36 + 1/36 \\\\ &= 3/36 \\\\ &= \\boxed{1/12} \\end{align} $$"
        } else if (event == "sum5") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=5) &= P(4,1)+P(3,2)+P(2,3)+P(1,4) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 \\\\ &= 4/36 \\\\ &= \\boxed{1/9} \\end{align} $$"
        } else if (event == "sum6") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(5,1)+P(4,2)+P(3,3)+P(2,4)+P(1,5) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36  \\\\ &= \\boxed{5/36} \\end{align} $$"
        } else if (event == "sum7") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(6,1)+P(5,2)+P(4,3)+P(3,4)+P(2,5)+P(1,6) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36 + 1/36 \\\\ &= 6/36 \\\\ &= \\boxed{1/6} \\end{align} $$"
        } else if (event == "sum8") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(6,2)+P(5,3)+P(4,4)+P(3,5)+P(2,6) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36\\\\ &= \\boxed{5/36} \\end{align} $$"
        } else if (event == "sum9") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=9) &= P(6,3)+P(5,4)+P(4,5)+P(3,6) \\\\ &= 1/6 + 1/6 + 1/6 + 1/6 \\\\ &= 4/36 \\\\ &= \\boxed{1/9} \\end{align} $$"
        } else if (event == "sum10") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=10) &= P(6,4)+P(5,5)+P(4,6) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/36 \\\\ &= \\boxed{1/12} \\end{align} $$"
        } else if (event == "sum11") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Sum}=11) &= P(6,5)+P(5,6) \\\\ &= 1/6 + 1/6 \\\\ &= 2/36 \\\\ &= \\boxed{1/18} \\end{align} $$"
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
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Jack}) &= P(\\text{JH}) + P(\\text{JD}) + P(\\text{JS}) + P(\\text{JC}) \\\\ &= 1/52 + 1/52 + 1/52 + 1/52 \\\\ &= 4/52 \\\\ &= \\boxed{1/13} \\end{align} $$"
        } else if (event == "Queen") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Queen}) &= P(\\text{QH}) + P(\\text{QD}) + P(\\text{QS}) + P(\\text{QC}) \\\\ &= 1/52 + 1/52 + 1/52 + 1/52 \\\\ &= 4/52 \\\\ &= \\boxed{1/13} \\end{align} $$"
        } else if (event == "King") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{King}) &= P(\\text{KH}) + P(\\text{KD}) + P(\\text{KS}) + P(\\text{KC}) \\\\ &= 1/52 + 1/52 + 1/52 + 1/52 \\\\ &= 4/52 \\\\ &= \\boxed{1/13} \\end{align} $$"
        } else if (event == "Ace") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} P(\\text{Ace}) &= P(\\text{AH}) + P(\\text{AD}) + P(\\text{AS}) + P(\\text{AC}) \\\\ &= 1/52 + 1/52 + 1/52 + 1/52 \\\\ &= 4/52 \\\\ &= \\boxed{1/13} \\end{align} $$"
        }

    }
    MathJax.typeset();
}

function compevents() {
    document.getElementById("descriptiontext").innerHTML = "An experiment is a process that generates some outcomes. The sample space is the set of all possible outcomes."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Number of Outcomes} = (n_1)(n_2)\\cdots(n_k) $$ "
    document.getElementById("explanationtext").innerHTML = "$$ N! = N(N-1)(N-2) \\cdots (2)(1) $$ $$ n! = n(n-1)(n-2) \\cdots (2)(1) $$ $$ 0! = 1 $$"
    var type = document.getElementById("exptype").value;
    
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
        if (event == "at2heads") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(H,H,H)+P(H,H,T)+P(H,T,H)+P(T,H,H) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 \\\\ &= 4/8 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "at2tails") {
            document.getElementById("output").innerHTML = "$$ \\begin{align} &= P(T,T,T)+P(T,T,H)+P(T,H,T)+P(H,T,T) \\\\ &= 1/8 + 1/8 + 1/8 + 1/8 + 1/8 \\\\ &= 4/8 \\\\ &= \\boxed{1/2} \\end{align} $$"
        } else if (event == "ex2head") {
            document.getElementById("output").innerHTML = "$$ 2 \\text{ Heads} = \\{ (H,H,T),(H,T,H),(T,H,H) \\} $$"
        } else if (event == "ex2tail") {
            document.getElementById("output").innerHTML = "$$ 2 \\text{ Tails} = \\{ (T,T,H),(T,H,T),(H,T,T) \\} $$"
        } else if (event == "ex1head") {
            document.getElementById("output").innerHTML = "$$ 1 \\text{ Head} = \\{ (H,T,T),(T,H,T),(H,T,T) \\} $$"
        } else if (event == "ex1tail") {
            document.getElementById("output").innerHTML = "$$ 1 \\text{ Tail} = \\{ (T,H,H),(H,T,H),(H,H,T) \\} $$"
        } else if (event == "at2head") {
            document.getElementById("output").innerHTML = "$$ \\geq 2 \\text{ Head} = \\{ (H,H,T),(H,T,H),(T,H,H),(H,H,H) \\} $$"
        } else if (event == "at2tail") {
            document.getElementById("output").innerHTML = "$$ \\geq 2 \\text{ Tail} = \\{ (T,T,H),(T,H,T),(T,T,H),(T,T,T) \\} $$"
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
        denominator2 = denominator2 + bottomn + "!"
        for (var r = 0; r < topn - bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += "\\cdot" + (topn - bottomn - r)
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + bottomn + "!"
        var denominator3 = topbotfact
        var ansval = numerator3 / denominator3;
    } else {
        for (var r = 0; r < bottomn; r++){
            numerator2 += (topn - r)+"\\cdot"
            denominator2 += (bottomn - r) + "\\cdot"
            numerator3 = numerator3 * (topn - r)
        }
        numerator2 = numerator2 + (topn - bottomn) + "!"
        denominator2 = denominator2 + (topn - bottomn) + "!"
        var denominator3 = bottomnfact
        var ansval = numerator3 / denominator3;
    }
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} C^{"+topn+"}_{"+bottomn+"}&=\\frac{"+topn+"!}{"+bottomn+"!("+topn+"-"+bottomn+")!} \\\\ &=\\frac{"+numerator2+"}{"+denominator2+"} \\\\ &=\\frac{"+numerator3+"}{"+denominator3+"} \\\\ &= \\boxed{"+ parseFloat(ansval.toFixed(2)) + "} \\end{align} $$"
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
    numerator2 = numerator2 + (topn - bottomn) + "!"
    var denominator2 = (topn - bottomn) + "!"
    var denominator3 = bottomnfact
    var ansval = numerator3;
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P^{"+topn+"}_{"+bottomn+"} &=\\frac{"+topn+"!}{"+denominator+"} \\\\ &=\\frac{"+numerator2+"}{"+denominator2+"} \\\\ &= \\boxed{"+ parseFloat(ansval.toFixed(2)) + "} \\end{align} $$"
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
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A) &= 1 - " + probac + "\\\\ &= \\boxed{" + (1-probac).toFixed(2) + "} \\end{align} $$"

    
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cup B) &= " + proba + "+" + probb + "-" + probaib + "\\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "} \\end{align} $$"
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cup B) &= " + proba + "+" + probb + "\\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "} \\end{align} $$"
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
    var probtype2 = document.getElementById("probtype2").value;
    if (probtype1 == "AgivB" && probtype2 == "B") {
        compintersection1()
    } else if (probtype1 == "A" && probtype2 == "BgivA") {
        compintersection2()
    } else if (probtype1 == "A" && probtype2 == "B") {
        compintersection3() 
    } else if (probtype1 == "AgivB" && probtype2 == "BgivA") {
        compintersection4() 
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(B) P(A \\mid B) \\\\  &= " + iprobb + "(" + iproba + ") \\\\ &= " + parseFloat(ans.toFixed(2)) + "\\end{align} $$"
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(A) P(B \\mid A) \\\\  &= " + iproba + "(" + iprobb + ") \\\\ &= " + parseFloat(ans.toFixed(2)) + "\\end{align} $$"
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(A) P(B) \\\\  &= " + iproba + "(" + iprobb + ") \\\\ &= " + parseFloat(ans.toFixed(2)) + "\\end{align} $$"
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

function conditional() {
    $("#conditional").show();
    conditionaltype = 1;
}

function compconditional() {
    var probtype = document.getElementById("probtype3").value;
    if (probtype == "B") {
        compconditional1()
    } else if (probtype == "A") {
        compconditional2()
    } 
}

function compconditional1() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The probability of A given B is the probability of event A occuring given that event B has already occured."
    document.getElementById("formulatext").innerHTML = "$ P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}  $"
    document.getElementById("explanationtext").innerHTML = ""
    var probb = document.getElementById("probb3").value;
    var probaib = document.getElementById("probaib2").value;
    var ans = parseFloat(probaib) / parseFloat(probb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\mid B) &= \\frac{" + probaib + "}{" + probb + "} \\\\ &= \\boxed{" + ans.toFixed(2) + "} \\end{align} $$"
    MathJax.typeset();
}

function compconditional2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The probability of B given A is the probability of event B occuring given that event A has already occured."
    document.getElementById("formulatext").innerHTML = "$ P(B \\mid A) = \\dfrac{P(A \\cap B)}{P(A)}  $"
    document.getElementById("explanationtext").innerHTML = ""
    var probb = document.getElementById("probb33").value;
    var probaib = document.getElementById("probaib22").value;
    var ans = parseFloat(probaib) / parseFloat(probb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(B \\mid A) &= \\frac{" + probaib + "}{" + probb + "} \\\\ &= \\boxed{" + ans.toFixed(2) + "} \\end{align} $$"
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A_1 \\mid B) &= \\frac{" + proba1 + "(" + probbgiva1 + ")}{" + proba1 + "(" + probbgiva1 + ") + " + proba2 + "(" + probbgiva2 + ")} \\\\ &= \\boxed{" + ans1.toFixed(2) + "} \\end{align} $$ $$ \\begin{align} P(A_2 \\mid B) &= \\frac{" + proba2 + "(" + probbgiva2 + ")}{" + proba1 + "(" + probbgiva1 + ") + " + proba2 + "(" + probbgiva2 + ")} \\\\ &= \\boxed{" + ans2.toFixed(2) + "} \\end{align} $$"
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
    document.getElementById('probtype1').value = "AgivB"
    document.getElementById('probtype2').value = "B"
    document.getElementById('iprobb').value=".85"
    document.getElementById("iproba").value=".73"
}

function exampleintersection2(){
    document.getElementById('probtype1').value = "A"
    document.getElementById('probtype2').value = "B"
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