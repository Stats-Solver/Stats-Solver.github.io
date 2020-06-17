$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#comb").hide(); $("#perm").hide(); $("#complement").hide(); $("#union").hide(); $("#intersection").hide(); $("#conditional").hide();
$("#intersection2").hide(); $("#conditional2").hide(); $("#union2").hide(); $("#intersection3").hide(); $("#intersection4").hide();
$("#experiments").hide(); $("#bayes").hide();

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
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
    $("#experiments").show();
}

function compexperiments() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "An experiment is a process that generates some outcomes. The sample space is the set of all possible outcomes."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Number of Outcomes} = (n_1)(n_2)\\cdots(n_k) $$ "
    document.getElementById("explanationtext").innerHTML = "$$ N! = N(N-1)(N-2) \\cdots (2)(1) $$ $$ n! = n(n-1)(n-2) \\cdots (2)(1) $$ $$ 0! = 1 $$"
    var type = document.getElementById("exptype").value;
    var times = document.getElementById("exptimes").value;
    if (type == "coin" && times == "one") {
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 2$$ $$\\text{Sample Space = {Head, Tail}}$$"
    } else if (type == "coin" && times == "two") {
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 2 \\times 2 = 4$$ $$\\text{Sample Space = {HH, HT, TH, TT}}$$"
    } else if (type == "dice" && times == "one") {
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 6$$ $$\\text{Sample Space = {1, 2, 3, 4, 5, 6}}$$"
    } else if (type == "dice" && times == "two") {
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 6 \\times 6 = 36$$ $$\\text{Sample Space} = $$ $$ \\{11, 12, 13, 14, 15, 16,$$  $$21, 22, 23, 24, 25, 26,$$ $$31, 32, 33, 34, 35, 36,$$ $$41, 42, 43, 44, 45, 46,$$ $$51, 52, 53, 54, 55, 56,$$ $$61, 62, 63, 64, 65, 66 \\} $$"
    } else if (type == "deck") {
        document.getElementById("output").innerHTML = "$$\\text{Number of Outcomes = } 52$$ $$\\text{Sample Space} = $$ $$ \\{ \\text{2H, 2D, 2S, 2C} $$ $$ \\text{3H, 3D, 3S, 3C} $$ $$ \\text{4H, 4D, 4S, 4C} $$ $$ \\text{5H, 5D, 5S, 5C} $$ $$ \\text{6H, 6D, 6S, 6C} $$ $$ \\text{7H, 7D, 7S, 7C} $$ $$ \\text{8H, 8D, 8S, 8C} $$ $$ \\text{9H, 9D, 9S, 9C} $$ $$ \\text{10H, 10D, 10S, 10C} $$ $$ \\text{JH, JD, JS, JC} $$ $$ \\text{QH, QD, QS, QC} $$ $$ \\text{KH, KD, KS, KC} $$ $$ \\text{AH, AD, AS, AC} \\} $$"
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
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) $$"
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
    var probagivb = document.getElementById("iproba2").value;
    var ans = parseFloat(probb) * parseFloat(probagivb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(A) P(B) \\\\  &= " + probb + "(" + probagivb + ") \\\\ &= " + ans + "\\end{align} $$"
    MathJax.typeset();
}

function compintersection4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The intersection of events A and B is the event containing all sample points in both A and B."
    document.getElementById("formulatext").innerHTML = "$$ P(A \\cap B) = P(B) P(A)  $$"
    document.getElementById("explanationtext").innerHTML = "If the events are independent, the probability of A given B is equal to the probability of A and the probability of B given A is equal to the probability of B."
    var probb = document.getElementById("iproba3").value;
    var probagivb = document.getElementById("iprobb3").value;
    var ans = parseFloat(probb) * parseFloat(probagivb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(A) P(B) \\\\ &= " + probb + "(" + probagivb + ") \\\\ &= " + ans + "\\end{align} $$"
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
    var proba1 = document.getElementById("proba1").value;
    var proba2 = document.getElementById("proba2").value;
    var probbgiva1 = document.getElementById("probbgiva1").value;
    var probbgiva2 = document.getElementById("probbgiva2").value;
    var ans1 = (proba1 * probbgiva1) / (proba1 * probbgiva1 + proba2 * probbgiva2);
    var ans2 = (proba2 * probbgiva2) / (proba1 * probbgiva1 + proba2 * probbgiva2);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A_1 \\mid B) &= \\frac{P(A_1)P(B \\mid A_1)}{P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2)} \\\\ &= \\frac{" + proba1 + "(" + probbgiva1 + ")}{" + proba1 + "(" + probbgiva1 + ") + " + proba2 + "(" + probbgiva2 + ")} \\\\ &= " + ans1.toFixed(2) + "\\end{align} $$ $$ \\begin{align} P(A_2 \\mid B) &= \\frac{P(A_2)P(B \\mid A_2)}{P(A_1)P(B \\mid A_1) + P(A_2)P(B \\mid A_2)} \\\\ &= \\frac{" + proba2 + "(" + probbgiva2 + ")}{" + proba1 + "(" + probbgiva1 + ") + " + proba2 + "(" + probbgiva2 + ")} \\\\ &= " + ans2.toFixed(2) + "\\end{align} $$"
    MathJax.typeset();
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