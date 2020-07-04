$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#comb").hide(); $("#perm").hide(); $("#complement").hide(); $("#union").hide(); $("#intersection").hide(); $("#conditional").hide();
$("#intersection2").hide(); $("#conditional2").hide(); $("#union2").hide(); $("#intersection3").hide(); $("#intersection4").hide();
$("#experiments").hide(); $("#bayes").hide(); $("#output2").hide();

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
    $("#explanation").hide(); $("#experiments").hide(); $("#bayes").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#output").empty();
    var x = document.getElementById("stat").value;
    if (x == "experiments"){
        experiments()
    } if (x == "combinations"){
        combinations()
    } else if (x == "permutations"){
        permutations()
    } else if (x == "complement") {
        complement()
    } else if (x == "union") {
        union()
    } else if (x == "intersection") {
        intersection()
    } else if (x == "conditional") {
        conditional()
    } else if (x == "bayes") {
        bayes()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function stat(){
    $("#output").empty(); $("#myCanvas").hide();
    var x = document.getElementById("stat").value;
    if (x == "experiments"){
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

function experiments() {
    $("#experiments").show(); $("#exptimes1").hide(); $("#exptimes2").hide(); $("#exptimes3").hide();
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

function compexperiments() {
    document.getElementById("descriptiontext").innerHTML = "An experiment is a process that generates some outcomes. The sample space is the set of all possible outcomes."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Number of Outcomes} = (n_1)(n_2)\\cdots(n_k) $$ "
    document.getElementById("explanationtext").innerHTML = "$$ N! = N(N-1)(N-2) \\cdots (2)(1) $$ $$ n! = n(n-1)(n-2) \\cdots (2)(1) $$ $$ 0! = 1 $$"
    var type = document.getElementById("exptype").value;
    var times = document.getElementById("exptimes").value;
    var times1 = document.getElementById("exptimes1").value;
    var times2 = document.getElementById("exptimes2").value;
    var times3 = document.getElementById("exptimes3").value;
    var coin1val = document.getElementById("coin1val").value;
    var coin2val = document.getElementById("coin2val").value;
    var dice1val = document.getElementById("dice1val").value;
    var dice2val = document.getElementById("dice2val").value;
    
    if (type == "coin" && times1 == "one") {
        $("#explanation").show(); $("#output2").show(); $("#coin1").show(); $("#coin2").hide(); $("#dice1").hide(); $("#dice2").hide();
        $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 2$$ $$\\text{Sample Space = {Head, Tail}}$$"
        if (coin1val == "head") {
            document.getElementById("coin1ans").innerHTML = " $1/2$"
        } else {
            document.getElementById("coin1ans").innerHTML = " $1/2$"
        }
    } else if (type == "coin" && times1 == "two") {
        $("#explanation").show(); $("#output2").show(); $("#coin2").show(); $("#coin1").hide(); $("#dice1").hide(); $("#dice2").hide();
        $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 2 \\times 2 = 4$$ $$\\text{Sample Space = {(H,H), (H,T), (T,H), (T,T)}}$$"
        if (coin2val == "atleast1head") {
            document.getElementById("coin2ans").innerHTML = "$$ \\begin{align} &= P(H,H)+P(H,T)+P(T,H) \\\\ &= 1/4 + 1/4 + 1/4 \\\\ &= 3/4 \\end{align} $$"
        } else if (coin2val == "atleast1tail") {
            document.getElementById("coin2ans").innerHTML = "$$ \\begin{align} &= P(T,T)+P(H,T)+P(T,H) \\\\ &= 1/4 + 1/4 + 1/4 \\\\ &= 3/4 \\end{align} $$"
        } else if (coin2val == "exactly1head") {
            document.getElementById("coin2ans").innerHTML = "$$ \\begin{align} &= P(H,T)+P(T,H) \\\\ &= 1/4 + 1/4 \\\\ &= 2/4 \\\\ &= 1/2 \\end{align} $$"
        } else if (coin2val == "exactly1tail") {
            document.getElementById("coin2ans").innerHTML = "$$ \\begin{align} &= P(H,T)+P(T,H) \\\\ &= 1/4 + 1/4 \\\\ &= 2/4 \\\\ &= 1/2 \\end{align} $$"
        } 
    } else if (type == "coin" && times1 == "three") {
        $("#explanation").show(); $("#output2").hide(); $("#coin2").show(); $("#coin1").hide(); $("#dice1").hide(); $("#dice2").hide();
        $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 2 \\times 2 \\times 2 = 8$$ $$\\text{Sample Space} = $$ $$\\{ \\text{(H,H,H), (H,H,T), (H,T,H), (H,T,T),}$$ $$\\text{(T,H,H), (T,H,T), (T,T,H), (T,T,T)} \\}$$"
    } else if (type == "coin" && times1 == "four") {
        $("#explanation").show(); $("#output2").hide(); $("#coin2").show(); $("#coin1").hide(); $("#dice1").hide(); $("#dice2").hide();
        $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 2 \\times 2 \\times 2 \\times 2 = 16$$ $$\\text{Sample Space} = $$ $$\\{ \\text{(H,H,H,H), (H,H,H,T), (H,H,T,H), (H,T,H,H),}$$ $$\\text{(T,H,H,H), (H,H,T,T), (H,T,H,T), (H,T,T,H),} $$ $$\\text{(T,T,H,H), (T,H,H,T), (T,H,T,H), (T,H,T,T),} $$ $$\\text{(T,T,H,T), (T,T,T,H), (H,T,T,T), (T,T,T,T)} \\}$$"
    } else if (type == "coin" && times1 == "five") {
        $("#explanation").show(); $("#output2").hide(); $("#coin2").show(); $("#coin1").hide(); $("#dice1").hide(); $("#dice2").hide();
        $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$$ $$\\text{Sample Space} = $$ $$\\{ \\text{(H,H,H,H,H), (H,H,H,T,H), (H,H,T,H,H), (H,T,H,H,H),}$$ $$\\text{(T,H,H,H,H), (H,H,T,T,H), (H,T,H,T,H), (H,T,T,H,H),} $$ $$\\text{(T,T,H,H,H), (T,H,H,T,H), (T,H,T,H,H), (T,H,T,T,H),} $$ $$\\text{(T,T,H,T,H), (T,T,T,H,H), (H,T,T,T,H), (T,T,T,T,H),} $$ $$ \\text{(H,H,H,H,T), (H,H,H,T,T), (H,H,T,H,T), (H,T,H,H,T),}$$ $$\\text{(T,H,H,H,T), (H,H,T,T,T), (H,T,H,T,T), (H,T,T,H,T),} $$ $$\\text{(T,T,H,H,T), (T,H,H,T,T), (T,H,T,H,T), (T,H,T,T,T),} $$ $$\\text{(T,T,H,T,T), (T,T,T,H,T), (H,T,T,T,T), (T,T,T,T,T)} \\}$$"
    } else if (type == "dice" && times2 == "one") {
        $("#explanation").show(); $("#output2").show(); $("#dice1").show(); $("#coin1").hide(); $("#coin2").hide(); $("#dice2").hide();
        $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 6$$ $$\\text{Sample Space = {1, 2, 3, 4, 5, 6}}$$"
        if (dice1val == "evennum") {
            document.getElementById("dice1ans").innerHTML = "$$ \\begin{align} &= P(2)+P(4)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 \\\\ &= 1/2 \\end{align} $$"
        } else if (dice1val == "oddnum") {
            document.getElementById("dice1ans").innerHTML = "$$ \\begin{align} &= P(1)+P(3)+P(5) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 \\\\ &= 1/2 \\end{align} $$"
        } else if (dice1val == "higher3") {
            document.getElementById("dice1ans").innerHTML = "$$ \\begin{align} &= P(3)+P(4)+P(5)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 + 1/6 \\\\ &= 4/6 \\\\ &= 2/3 \\end{align} $$"
        } else if (dice1val == "higher4") {
            document.getElementById("dice1ans").innerHTML = "$$ \\begin{align} &= P(4)+P(5)+P(6) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 \\\\ &= 1/2 \\end{align} $$"
        } else if (dice1val == "lower3") {
            document.getElementById("dice1ans").innerHTML = "$$ \\begin{align} &= P(1)+P(2)+P(3) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 \\\\ &= 1/2 \\end{align} $$"
        } else if (dice1val == "lower4") {
            document.getElementById("dice1ans").innerHTML = "$$ \\begin{align} &= P(1)+P(2)+P(3)+P(4) \\\\ &= 1/6 + 1/6 + 1/6 + 1/6 \\\\ &= 4/6 \\\\ &= 2/3 \\end{align} $$"
        }
    } else if (type == "dice" && times2 == "two") {
        $("#explanation").show(); $("#output2").show(); $("#dice2").show(); $("#coin1").hide(); $("#coin2").hide(); $("#dice1").hide();
        $("#deck1").hide();
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 6 \\times 6 = 36$$ $$\\text{Sample Space} = $$ $$ \\{(1,1), (1,2), (1,3), (1,4), (1,5), (1,6),$$  $$(2,1), (2,2), (2,3), (2,4), (2,5), (2,6),$$ $$(3,1), (3,2), (3,3), (3,4), (3,5), (3,6),$$ $$(4,1), (4,2), (4,3), (4,4), (4,5), (4,6),$$ $$(5,1), (5,2), (5,3), (5,4), (5,5), (5,6),$$ $$(6,1), (6,2), (6,3), (6,4), (6,5), (6,6) \\} $$"
        if (dice2val == "sum5") {
            document.getElementById("dice2ans").innerHTML = "$$ \\begin{align} &= P(4,1)+P(3,2)+P(2,3)+P(1,4) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 \\\\ &= 4/36 \\\\ &= 1/9 \\end{align} $$"
        } else if (dice2val == "sum6") {
            document.getElementById("dice2ans").innerHTML = "$$ \\begin{align} &= P(5,1)+P(4,2)+P(3,3)+P(2,4)+P(1,5) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36  \\\\ &= 5/36 \\end{align} $$"
        } else if (dice2val == "sum7") {
            document.getElementById("dice2ans").innerHTML = "$$ \\begin{align} &= P(6,1)+P(5,2)+P(4,3)+P(3,4)+P(2,5)+P(1,6) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36 + 1/36 \\\\ &= 6/36 \\\\ &= 1/6 \\end{align} $$"
        } else if (dice2val == "sum8") {
            document.getElementById("dice2ans").innerHTML = "$$ \\begin{align} &= P(6,2)+P(5,3)+P(4,4)+P(3,5)+P(2,6) \\\\ &= 1/36 + 1/36 + 1/36 + 1/36 + 1/36\\\\ &= 5/6 \\end{align} $$"
        } else if (dice2val == "sum9") {
            document.getElementById("dice2ans").innerHTML = "$$ \\begin{align} &= P(1)+P(2)+P(3) \\\\ &= 1/6 + 1/6 + 1/6 \\\\ &= 3/6 \\\\ &= 1/2 \\end{align} $$"
        } else if (dice2val == "sum7") {
            document.getElementById("dice2ans").innerHTML = "$$ \\begin{align} &= P(1)+P(2)+P(3)+P(4) \\\\ &= 1/6 + 1/6 + 1/6 + 1/6 \\\\ &= 4/6 \\\\ &= 2/3 \\end{align} $$"
        }
    } else if (type == "deck" && times3 == "one") {
        $("#explanation").show(); $("#output2").show(); $("#dice2").hide(); $("#coin1").hide(); $("#coin2").hide(); $("#dice1").hide();
        $("#deck1").show();
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 52$$ $$\\text{Sample Space} = $$ $$ \\{ \\text{2H, 3H, 4H, 5H, 6H, 7H, 8H,} $$ $$ \\text{9H, 10H, JH, QH, KH, AH,} $$ $$ \\text{2D, 3D, 4D, 5D, 6D, 7D, 8D,} $$ $$ \\text{9D, 10D, JD, QD, KD, AD,} $$ $$ \\text{2S, 3S, 4S, 5S, 6S, 7S, 8S,} $$ $$ \\text{9S, 10S, JS, QS, KS, AS,} $$ $$ \\text{2C, 3C, 4C, 5C, 6C, 7C, 8C,} $$ $$ \\text{9C, 10C, JC, QC, KC, AC} \\} $$"

    }
    MathJax.typeset();
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
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} C^{"+topn+"}_{"+bottomn+"}&=\\frac{"+topn+"!}{"+bottomn+"!("+topn+"-"+bottomn+")!} \\\\ &=\\frac{"+topn+"!}{"+denominator+"} \\\\ &=\\frac{"+numerator2+"}{"+denominator2+"} \\\\ &=\\frac{"+numerator3+"}{"+denominator3+"} \\\\ &= \\boxed{"+ parseFloat(ansval.toFixed(2)) + "} \\end{align} $$"
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
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} P^{"+topn+"}_{"+bottomn+"}&=\\frac{"+topn+"!}{("+topn+"-"+bottomn+")!} \\\\ &=\\frac{"+topn+"!}{"+denominator+"} \\\\ &=\\frac{"+numerator2+"}{"+denominator2+"} \\\\ &= \\boxed{"+ parseFloat(ansval.toFixed(2)) + "} \\end{align} $$"
    MathJax.typeset();
}

function complement() {
    $("#complement").show();
}

function compcomp() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The complement of an event A is the event containing all sample points not in A."
    document.getElementById("formulatext").innerHTML = "$$ P(A) + P(A^c) = 1 $$"
    document.getElementById("explanationtext").innerHTML = ""
    
    var probac = document.getElementById("probcomp").value;
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A) &= 1 - P(A^c) \\\\ &= 1 - " + probac + "\\\\ &= " + (1-probac).toFixed(2) + "\\end{align} $$"
    MathJax.typeset();
}

function union() {
    $("#union").show();
    mutual = false
}

function compunion() {
    if (mutual == false) {
        compunion1()
    } else {
        compunion2()
    }
}

function compunion1() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The union of events A and B is the event containing all sample points in A, B and both A and B."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Addition Law:} $$ $$ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) $$ $$ \\text{Addition Law (Mutually Exclusive):} $$ $$ P(A \\cup B) = P(A) + P(B) $$"
    document.getElementById("explanationtext").innerHTML = "If the events are mutually exclusive, the intersection of A and B is empty."
    var proba = document.getElementById("proba").value;
    var probb = document.getElementById("probb").value;
    var probaib = document.getElementById("probaib").value;
    var ans = parseFloat(proba) + parseFloat(probb) - parseFloat(probaib);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cup B) &= P(A) + P(B) - P(A \\cap B) \\\\  &= " + proba + "+" + probb + "-" + probaib + "\\\\ &= " + ans + "\\end{align} $$"
    MathJax.typeset();
}

function compunion2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The union of events A and B is the event containing all sample points in A, B and both A and B."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cup B) = P(A) + P(B) $$"
    document.getElementById("explanationtext").innerHTML = "If the events are mutually exclusive, the intersection of A and B is empty."
    var proba = document.getElementById("proba").value;
    var probb = document.getElementById("probb").value;
    var probaib = document.getElementById("probaib").value;
    var ans = parseFloat(proba) + parseFloat(probb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cup B) &= P(A) + P(B) \\\\ &= " + proba + "+" + probb + "\\\\ &= " + ans + "\\end{align} $$"
    MathJax.typeset();
}

function intersection() {
    $("#intersection").show();
    indtype = 1;
    indep = false;
}

function compintersection() {
    if (indtype == 1 && indep == false) {
        compintersection1()
    } else if (indtype == 2 && indep == false) {
        compintersection2()
    } else if (indtype == 1 && indep == true) {
        compintersection3() 
    } else {
        compintersection4() 
    }
}

function compintersection1() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The intersection of events A and B is the event containing all sample points in both A and B."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cap B) = P(B) P(A \\mid B)  $$"
    document.getElementById("explanationtext").innerHTML = "If the events are independent, the probability of A given B is equal to the probability of A."
    var probb = document.getElementById("iprobb").value;
    var probagivb = document.getElementById("iprobagivb").value;
    var ans = parseFloat(probb) * parseFloat(probagivb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(B) P(A \\mid B) \\\\  &= " + probb + "(" + probagivb + ") \\\\ &= " + ans + "\\end{align} $$"
    MathJax.typeset();
}

function compintersection2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The intersection of events A and B is the event containing all sample points in both A and B."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cap B) = P(B) P(A \\mid B)  $$"
    document.getElementById("explanationtext").innerHTML = "If the events are independent, the probability of A given B is equal to the probability of A and the probability of B given A is equal to the probability of B."
    var probb = document.getElementById("iproba").value;
    var probagivb = document.getElementById("iprobbgiva").value;
    var ans = parseFloat(probb) * parseFloat(probagivb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(A) P(B \\mid A) \\\\  &= " + probb + "(" + probagivb + ") \\\\ &= " + ans + "\\end{align} $$"
    MathJax.typeset();
}

function compintersection3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The intersection of events A and B is the event containing all sample points in both A and B."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cap B) = P(B) P(A \\mid B)  $$"
    document.getElementById("explanationtext").innerHTML = "If the events are independent, the probability of A given B is equal to the probability of A and the probability of B given A is equal to the probability of B."
    var probb = document.getElementById("iprobb2").value;
    var proba = document.getElementById("iproba2").value;
    var ans = parseFloat(probb) * parseFloat(proba);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(A) P(B) \\\\  &= " + probb + "(" + proba + ") \\\\ &= " + ans + "\\end{align} $$"
    MathJax.typeset();
}

function compintersection4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The intersection of events A and B is the event containing all sample points in both A and B."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cap B) = P(B) P(A)  $$"
    document.getElementById("explanationtext").innerHTML = "If the events are independent, the probability of A given B is equal to the probability of A and the probability of B given A is equal to the probability of B."
    var proba = document.getElementById("iprobaa3").value;
    var probb = document.getElementById("iprobab3").value;
    var ans = parseFloat(proba) * parseFloat(probb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(A) P(B) \\\\ &= " + proba + "(" + probb + ") \\\\ &= " + ans + "\\end{align} $$"
    MathJax.typeset();
}

function conditional() {
    $("#conditional").show();
    conditionaltype = 1;
}

function compconditional() {
    if (conditionaltype == 1){
        compconditional1()
    } else {
        compconditional2()
    }
}

function compconditional1() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The probability of A given B is the probability of event A occuring given that event B has already occured."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}  $$"
    document.getElementById("explanationtext").innerHTML = ""
    var probb = document.getElementById("probb3").value;
    var probaib = document.getElementById("probaib2").value;
    var ans = parseFloat(probaib) / parseFloat(probb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\mid B) &= \\frac{P(A \\cap B)}{P(B)} \\\\ &= \\frac{" + probaib + "}{" + probb + "} \\\\ &= " + ans.toFixed(2) + "\\end{align} $$"
    MathJax.typeset();
}

function compconditional2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The probability of B given A is the probability of event B occuring given that event A has already occured."
    document.getElementById("formulatext").innerHTML = "$$ P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)}  $$"
    document.getElementById("explanationtext").innerHTML = ""
    var probb = document.getElementById("probb33").value;
    var probaib = document.getElementById("probaib22").value;
    var ans = parseFloat(probaib) / parseFloat(probb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(B \\mid A) &= \\frac{P(A \\cap B)}{P(A)} \\\\ &= \\frac{" + probaib + "}{" + probb + "} \\\\ &= " + ans.toFixed(2) + "\\end{align} $$"
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A_1 \\mid B) &= \\frac{" + proba1 + "(" + probbgiva1 + ")}{" + proba1 + "(" + probbgiva1 + ") + " + proba2 + "(" + probbgiva2 + ")} \\\\ &= " + ans1.toFixed(2) + "\\end{align} $$ $$ \\begin{align} P(A_2 \\mid B) &= \\frac{" + proba2 + "(" + probbgiva2 + ")}{" + proba1 + "(" + probbgiva1 + ") + " + proba2 + "(" + probbgiva2 + ")} \\\\ &= " + ans2.toFixed(2) + "\\end{align} $$"
    MathJax.typeset();
}

function exampleexperiments(){
    document.getElementById('exptype').value="coin"
    document.getElementById('exptimes1').value="two"
}

function examplecomb(){
    document.getElementById('topn').value="5"
    document.getElementById('bottomn').value="2"
}

function exampleperm(){
    document.getElementById('topnp').value="5"
    document.getElementById('bottomnp').value="2"
}

function examplecomplement(){
    document.getElementById('probcomp').value=".80"
}

function exampleunion(){
    document.getElementById('proba').value=".10"
    document.getElementById('probb').value=".12"
    document.getElementById("probaib").value=".04"
    document.getElementById('probaa').value=".10"
    document.getElementById('probbb').value=".12"
}

function exampleintersection(){
    document.getElementById('iprobb').value=".84"
    document.getElementById("iprobagivb").value=".75"
    document.getElementById('iproba').value=".84"
    document.getElementById("iprobbgiva").value=".75"
    document.getElementById('iprobb2').value=".84"
    document.getElementById("iproba2").value=".75"
    document.getElementById('iprobaa3').value=".84"
    document.getElementById("iprobab3").value=".75"
}

function exampleconditional(){
    document.getElementById('probb3').value=".80"
    document.getElementById("probaib2").value=".24"
    document.getElementById('probb33').value=".80"
    document.getElementById("probaib22").value=".24"
}

function examplebayes(){
    document.getElementById('proba1').value=".65"
    document.getElementById("proba2").value=".35"
    document.getElementById('probbgiva1').value=".02"
    document.getElementById("probbgiva2").value=".05"
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