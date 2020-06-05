$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#combperm").hide(); $("#complement").hide(); $("#union").hide(); $("#intersection").hide(); $("#conditional").hide();
$("#intersection2").hide(); $("#conditional2").hide(); $("#union2").hide(); $("#intersection3").hide(); $("#intersection4").hide();

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function showstuff(){
    $("#combperm").hide(); $("#complement").hide(); $("#union").hide(); $("#intersection").hide(); $("#conditional").hide();
    $("#intersection2").hide(); $("#conditional2").hide(); $("#unionn2").hide(); $("#intersection3").hide(); $("#intersection4").hide();
    $("#explanation").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#output").empty();
    var x = document.getElementById("stat").value;
    if (x == "combinations"){
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
    if (x == "combinations"){
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
        bayes()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function combinations() {
    $("#combperm").show(); $("#perm").hide(); $("#comb").show();

    
}

function compcomb() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "$$ C^N_n = \\frac{N!}{n!(N-n)!} $$"
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
    document.getElementById("explanationtext").innerHTML = "$$ P^N_n = \\frac{N!}{(N-n)!} $$"
    var topn = document.getElementById("topn").value;
    var bottomn = document.getElementById("bottomn").value;
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
    document.getElementById("explanationtext").innerHTML = "$$ P(A) + P(A^c) = 1 $$"
    var probac = document.getElementById("probcomp").value;
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A) &= 1 - P(A^c) \\\\ &= 1 - " + probac + "\\\\ &= " + (1-probac).toFixed(2) + "\\end{align} $$"
    MathJax.typeset();
}

function union() {
    $("#union").show();
}

function compunion() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "If the events are mutually exclusive, the probably of the intersection of A and B is zero."
    var proba = document.getElementById("proba").value;
    var probb = document.getElementById("probb").value;
    var probaib = document.getElementById("probaib").value;
    var ans = parseFloat(proba) + parseFloat(probb) - parseFloat(probaib);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cup B) &= P(A) + P(B) - P(A \\cap B) \\\\ &= " + proba + "+" + probb + "-" + probaib + "\\\\ &= " + ans + "\\end{align} $$"
    MathJax.typeset();
}

function intersection() {
    $("#intersection").show();
}

function compintersection() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "If the events are independent, the probably of A given B is A and the probability of B given A is B."
    var probb = document.getElementById("probb2").value;
    var probagivb = document.getElementById("probagivb").value;
    var ans = parseFloat(probb) * parseFloat(probagivb);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\cap B) &= P(B) P(B \\mid A) \\\\ &= " + probb + "(" + probagivb + ") \\\\ &= " + ans + "\\end{align} $$"
    MathJax.typeset();
}

function conditional() {
    $("#conditional").show();
}

function compconditional() {
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The probability of A given B is the probability of the intersection of A and B divided by the probability of B."
    var probb = document.getElementById("probb3").value;
    var probaib = document.getElementById("probaib2").value;
    var ans = parseFloat(probb) / parseFloat(probaib);
    document.getElementById("output").innerHTML = "$$ \\begin{align} P(A \\mid B) &= \\frac{P(A \\cap B)}{P(B)} \\\\ &= \\frac{" + probaib + "}{" + probb + "} \\\\ &= " + ans.toFixed(2) + "\\end{align} $$"
    MathJax.typeset();
}

function examplecombperm(){
    document.getElementById('topn').value="5"
    document.getElementById('bottomn').value="2"
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
    document.getElementById('probb2').value=".84"
    document.getElementById("probagivb").value=".75"
    document.getElementById('probb22').value=".84"
    document.getElementById("probagivbb").value=".75"
}

function exampleconditional(){
    document.getElementById('probb3').value=".80"
    document.getElementById("probaib2").value=".24"
    document.getElementById('probb33').value=".80"
    document.getElementById("probaib22").value=".24"
}

function switchint(){
    $("#intersection").hide();
    $("#intersection2").show();
}

function switchint2(){
    $("#intersection").show();
    $("#intersection2").hide();
}

function switchconditional(){
    $("#conditional").hide();
    $("#conditional2").show();
}

function switchconditional2(){
    $("#conditional").show();
    $("#conditional2").hide();
}

function switchint(){
    $("#intersection").hide();
    $("#intersection2").show();
}

function switchunion(){
    $("#union").hide();
    $("#union2").show();
}

function switchunion2(){
    $("#union").show();
    $("#union2").hide();
}

function switchint3(){
    $("#intersection3").hide();
    $("#intersection4").show();
}

function switchint4(){
    $("#intersection3").show();
    $("#intersection4").hide();
}