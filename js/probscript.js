$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#combperm").hide(); $("#complement").hide();

function stat(){
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

function combinations() {
    $("#combperm").show(); $("#perm").hide(); $("#comb").show();
    $("#compperm").hide(); $("#compcomb").show();
    
}

function compcomb() {
    
}

function permutations() {
    $("#combperm").show(); $("#comb").hide(); $("#perm").show();
    $("#compcomb").hide(); $("#compperm").show();
    
}

function compperm() {
    
}

function complement() {
    $("#complement").show();
    
}



function example1(){
    document.getElementById('size').value="40"
    document.getElementById('xbar').value="25"
    document.getElementById('stdev').value="5"
    document.getElementById('sigma').value="known"
    document.getElementById('conlev').value=95
    conint()
}

function example2(){
    document.getElementById('size').value="54"
    document.getElementById('xbar').value="22.5"
    document.getElementById('stdev').value="4.4"
    document.getElementById('sigma').value="unknown"
    document.getElementById('conlev').value=99
    conint()
}
