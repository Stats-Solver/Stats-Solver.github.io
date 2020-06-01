$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#combperm").hide(); $("#complement").hide();

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function showstuff(){
    $("#combperm").hide(); $("#complement").hide();
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



function examplecombperm(){
    document.getElementById('topn').value="5"
    document.getElementById('bottomn').value="2"
}
