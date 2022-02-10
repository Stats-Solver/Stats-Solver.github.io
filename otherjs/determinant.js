$("#expectedtable").show();
//$("#expectedexamples").show(); $("#standardexamples").hide(); 
//$("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
//$("#formulaexamples").hide(); $("#frequencyexamples").hide(); $("#uniformexamples").hide();

$("#left").hide();

$("#paraleft3c").hide(); $("#pararight3c").hide();

var pararight2 = document.getElementById('pararight2');
if(pararight2 && pararight2.style) {
    pararight2.style.height = '60px';
    pararight2.style.width = '5px';
}

var pararight3 = document.getElementById('pararight3');
if(pararight3 && pararight3.style) {
    pararight3.style.height = '90px';
    pararight3.style.width = '5px';
}

var paraleft2 = document.getElementById('paraleft2');
if(paraleft2 && paraleft2.style) {
    paraleft2.style.height = '60px';
    paraleft2.style.width = '5px';
}

var paraleft3 = document.getElementById('paraleft3');
if(paraleft3 && paraleft3.style) {
    paraleft3.style.height = '90px';
    paraleft3.style.width = '5px';
}


$("#a13").hide(); $("#a14").hide(); $("#a15").hide(); $("#a16").hide();
$("#b13").hide(); $("#b14").hide(); $("#b15").hide(); $("#b16").hide();
$("#a23").hide(); $("#a24").hide(); $("#a25").hide(); $("#a26").hide();
$("#b23").hide(); $("#b24").hide(); $("#b25").hide(); $("#b26").hide();
$("#a31").hide(); $("#a32").hide(); $("#a33").hide(); $("#a34").hide(); $("#a35").hide(); $("#a36").hide();
$("#b31").hide(); $("#b32").hide(); $("#b33").hide(); $("#b34").hide(); $("#b35").hide(); $("#b36").hide();
$("#a41").hide(); $("#a42").hide(); $("#a43").hide(); $("#a44").hide(); $("#a45").hide(); $("#a46").hide();
$("#b41").hide(); $("#b42").hide(); $("#b43").hide(); $("#b44").hide(); $("#b45").hide(); $("#b46").hide();
$("#a51").hide(); $("#a52").hide(); $("#a53").hide(); $("#a54").hide(); $("#a55").hide(); $("#a56").hide();
$("#b51").hide(); $("#b52").hide(); $("#b53").hide(); $("#b54").hide(); $("#b55").hide(); $("#b56").hide();
$("#a61").hide(); $("#a62").hide(); $("#a63").hide(); $("#a64").hide(); $("#a65").hide(); $("#a66").hide();
$("#b61").hide(); $("#b62").hide(); $("#b63").hide(); $("#b64").hide(); $("#b65").hide(); $("#b66").hide();

$("#downa2").hide(); $("#righta2").hide(); 
$("#a200000").hide(); $("#a20000").hide(); $("#a2000").hide(); $("#a200").hide(); $("#a20").hide(); 
$("#a30").hide(); $("#a40").hide(); $("#a50").hide(); $("#a60").hide();
$("#a299").hide(); $("#a29").hide(); 
$("#a39").hide(); $("#a49").hide(); $("#a59").hide(); $("#a69").hide();


$("#coefficienta").hide(); $("#coefficientb").hide(); $("#removescalars").hide();

$("#matrixapower").hide();

var scalar = false

var dima = 22; var dimb = 22

function addcoefficients() {
    scalar = true
    $("#coefficienta").show(); $("#coefficientb").show(); $("#removescalars").show(); $("#addscalars").hide();
}

function removecoefficients() {
    scalar = false
    $("#coefficienta").hide(); $("#coefficientb").hide();  $("#removescalars").hide(); $("#addscalars").show();
}

function removematrix() {
    $("#matrixbset1").hide();
    $("#matrixbset2").hide();
    $("#matrixapower").show();
}

function addmatrix() {
    $("#matrixbset1").show();
    $("#matrixbset2").show();
    $("#matrixapower").hide();
}







function left() {
    if (dima == 33) {
        dima = 22
        $("#a39").hide(); 
        $("#a13").hide(); $("#a23").hide();
        $("#a31").hide(); $("#a32").hide(); $("#a33").hide();
        $("#left").hide(); $("#right").show();
    } else if (dima == 34) {
        dima = 33
        $("#a49").hide(); 
        $("#a14").hide(); $("#a24").hide(); $("#a34").hide();
    } else if (dima == 35) {
        dima = 34
        $("#a59").hide(); 
        $("#a15").hide(); $("#a25").hide(); $("#a35").hide();
        $("#righta").show();
    } 
}

function right() {
    if (dima == 22) {
        dima = 33
        $("#a39").show(); 
        $("#a13").show(); $("#a23").show();
        $("#a31").show(); $("#a32").show(); $("#a33").show();
        $("#left").show(); $("#right").hide();
    } else if (dima == 23) {
        dima = 24
        $("#a49").show(); 
        $("#a14").show(); $("#a24").show();
    } else if (dima == 24) {
        dima = 25
        $("#a59").show(); 
        $("#a15").show(); $("#a25").show();
        $("#righta").hide();
    } else if (dima == 31) {
        dima = 32
        $("#lefta").show(); $("#righta2").hide(); $("#righta").show(); $("#rightacell").show();
        //$("#a200").hide(); $("#a20").hide(); 
        $("#a12").show(); $("#a22").show(); $("#a32").show();
    } 
}











































$("#values").hide(); $("#enterstats").hide(); $("#explanation").hide();
$("#variance").hide(); $("#standard").hide();
$("#expected2").hide(); $("#expected4").hide(); $("#expected5").hide(); $("#expected6").hide();
$("#expected7").hide(); $("#expected8").hide(); $("#expected9").hide(); $("#expected10").hide();
$("#variance2").hide(); $("#variance4").hide(); $("#variance5").hide(); $("#variance6").hide();
$("#variance7").hide(); $("#variance8").hide(); $("#variance9").hide(); $("#variance10").hide();
$("#binomial").hide(); $("#poisson").hide(); $("#hypergeometric").hide();
$("#equal").hide(); $("#less").hide(); $("#greater").hide();
$("#equal2").hide(); $("#less2").hide(); $("#greater2").hide();
$("#equal3").hide(); $("#less3").hide(); $("#greater3").hide();

$("#expected").show(); $("#expectedprobs").show(); 
//$("#expectedtable").hide(); 
$("#make2").hide(); $("#make3").show(); $("#make4").hide(); $("#make5").hide();
$("#make6").hide(); $("#make7").hide(); $("#make8").hide(); $("#make9").hide(); $("#make10").hide();
$("#row3").hide(); 
$("#row4").hide(); $("#row5").hide(); $("#row6").hide(); $("#row7").hide();
$("#row8").hide(); $("#row9").hide(); $("#row10").hide();

$("#expectedexamples").show(); $("#standardexamples").hide(); 
$("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();

$("#discreteprobs").hide(); 

$("#discreteexpected").hide(); $("#discretevariance").hide(); $("#discretestandard").hide();
$("#probswitch").hide(); $("#explanation").hide();

$("#formula").hide(); $("#uniform").hide(); $("#frequency").hide();
$("#formulaexamples").hide(); $("#frequencyexamples").hide(); $("#uniformexamples").hide();

$("#581773186").hide();

$("#discoutputs").hide();


frequencytype = "probability"
formulatype = "probability"
uniformtype = "probability"
binomialtype = "probability"
discretekind = "probability"

$(function () {
            $('[data-toggle="tooltip"]').tooltip()
    })

function factorial(n) {
    if (n > 0) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    } else if (n == 0) {
        return 1
    }
  
}

function sum(input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
     
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
            }













function showstuff(){
    $("#expected").hide(); $("#variance").hide(); $("#standard").hide(); $("#discreteprobs").hide();
    $("#expected2").hide(); $("#expected4").hide(); $("#expected5").hide(); $("#expected6").hide();
    $("#expected7").hide(); $("#expected8").hide(); $("#expected9").hide(); $("#expected10").hide();
    $("#variance2").hide(); $("#variance4").hide(); $("#variance5").hide(); $("#variance6").hide();
    $("#variance7").hide(); $("#variance8").hide(); $("#variance9").hide(); $("#variance10").hide();
    $("#binomial").hide(); $("#poisson").hide(); $("#hypergeometric").hide();
    $("#equal").hide(); $("#less").hide(); $("#greater").hide();
    $("#equal2").hide(); $("#less2").hide(); $("#greater2").hide();
    $("#equal3").hide(); $("#less3").hide(); $("#greater3").hide();
    //$("#explanation").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    //$("#output").empty();
    
    $("#formula").hide(); $("#uniform").hide(); $("#frequency").hide();
    
    
    $("#expectedexamples").hide(); $("#standardexamples").hide(); 
    $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
    
    
    var x = document.getElementById("stat").value;
    if (x == "probability"){
        probabilities()
        $("#expectedtable").show();
        $("#expectedexamples").show(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
        $("#formulaexamples").hide(); $("#frequencyexamples").hide(); $("#uniformexamples").hide();
    } else if (x == "expected"){
        expected()
        $("#expectedtable").show();
        $("#expectedexamples").show(); $("#standardexamples").hide(); 
        $("#poissonexamples").hide(); $("#binomialexamples").hide(); $("#hypergeometricexamples").hide();
        $("#formulaexamples").hide(); $("#frequencyexamples").hide(); $("#uniformexamples").hide();
    } 
   
}

function stat(){
    $("#discoutputs").show(); $("#how").hide();
    $("#output").empty(); $("#myCanvas").hide();
    var x = document.getElementById("determinant").checked
    if (x == true){
        determinant()
    } else {
        inverse()
    } 
}














function determinant(){
    var a11 = parseFloat(document.getElementById('a11v').value);
    var a12 = parseFloat(document.getElementById('a12v').value);
    var a13 = parseFloat(document.getElementById('a13v').value);
    var a14 = parseFloat(document.getElementById('a14v').value);
    var a15 = parseFloat(document.getElementById('a15v').value);
    var a21 = parseFloat(document.getElementById('a21v').value);
    var a22 = parseFloat(document.getElementById('a22v').value);
    var a23 = parseFloat(document.getElementById('a23v').value);
    var a24 = parseFloat(document.getElementById('a24v').value);
    var a25 = parseFloat(document.getElementById('a25v').value);
    var a31 = parseFloat(document.getElementById('a31v').value);
    var a32 = parseFloat(document.getElementById('a32v').value);
    var a33 = parseFloat(document.getElementById('a33v').value);
    var a34 = parseFloat(document.getElementById('a34v').value);
    var a35 = parseFloat(document.getElementById('a35v').value);
    var a41 = parseFloat(document.getElementById('a41v').value);
    var a42 = parseFloat(document.getElementById('a42v').value);
    var a43 = parseFloat(document.getElementById('a43v').value);
    var a44 = parseFloat(document.getElementById('a44v').value);
    var a45 = parseFloat(document.getElementById('a45v').value);
    var a51 = parseFloat(document.getElementById('a51v').value);
    var a52 = parseFloat(document.getElementById('a52v').value);
    var a53 = parseFloat(document.getElementById('a53v').value);
    var a54 = parseFloat(document.getElementById('a54v').value);
    var a55 = parseFloat(document.getElementById('a55v').value);
    
    if (dima == 22) {
        document.getElementById("output").innerHTML = "$$ \\begin{vmatrix} "+a11+" & "+a12+" \\\\ "+a21+" & "+a22+" \\end{vmatrix} = "+a11+" \\cdot "+a22+" - "+a21+" \\cdot "+a12+" = \\boxed{"+(a11*a22-a21*a12)+"}  $$"
    } else if (dima == 33) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" \\\\ "+a21+" & "+a22+" & "+a23+" \\\\ "+a31+" & "+a32+" & "+a33+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" \\\\ "+b21+" & "+b22+" & "+b23+" \\\\ "+b31+" & "+b32+" & "+b33+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"+"+b11+" & "+a12+"+"+b12+" & "+a13+"+"+b13+" \\\\ "+a21+"+"+b21+" & "+a22+"+"+b22+" & "+a23+"+"+b23+" \\\\ "+a31+"+"+b31+" & "+a32+"+"+b32+" & "+a33+"+"+b33+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11+b11)+" & "+(a12+b12)+" & "+(a13+b13)+" \\\\ "+(a21+b21)+" & "+(a22+b22)+" & "+(a23+b23)+" \\\\ "+(a31+b31)+" & "+(a32+b32)+" & "+(a33+b33)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 44) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" \\\\ "+a21+" & "+a22+" & "+a23+" & "+a24+" \\\\ "+a31+" & "+a32+" & "+a33+" & "+a34+" \\\\ "+a41+" & "+a42+" & "+a43+" & "+a44+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+" \\\\ "+b21+" & "+b22+" & "+b23+" & "+b24+" \\\\ "+b31+" & "+b32+" & "+b33+" & "+b34+" \\\\ "+b41+" & "+b42+" & "+b43+" & "+b44+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"+"+b11+" & "+a12+"+"+b12+" & "+a13+"+"+b13+" & "+a14+"+"+b14+" \\\\ "+a21+"+"+b21+" & "+a22+"+"+b22+" & "+a23+"+"+b23+" & "+a24+"+"+b24+" \\\\ "+a31+"+"+b31+" & "+a32+"+"+b32+" & "+a33+"+"+b33+" & "+a34+"+"+b34+" \\\\ "+a41+"+"+b41+" & "+a42+"+"+b42+" & "+a43+"+"+b43+" & "+a44+"+"+b44+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11+b11)+" & "+(a12+b12)+" & "+(a13+b13)+" & "+(a14+b14)+" \\\\ "+(a21+b21)+" & "+(a22+b22)+" & "+(a23+b23)+" & "+(a24+b24)+" \\\\ "+(a31+b31)+" & "+(a32+b32)+" & "+(a33+b33)+" & "+(a34+b34)+" \\\\ "+(a41+b41)+" & "+(a42+b42)+" & "+(a43+b43)+" & "+(a44+b44)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 55) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" & "+a15+" \\\\ "+a21+" & "+a22+" & "+a23+" & "+a24+" & "+a25+" \\\\ "+a31+" & "+a32+" & "+a33+" & "+a34+" & "+a35+" \\\\ "+a41+" & "+a42+" & "+a43+" & "+a44+" & "+a45+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+" & "+b15+" \\\\ "+b21+" & "+b22+" & "+b23+" & "+b24+" & "+b25+" \\\\ "+b31+" & "+b32+" & "+b33+" & "+b34+" & "+b35+" \\\\ "+b41+" & "+b42+" & "+b43+" & "+b44+" & "+b45+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"+"+b11+" & "+a12+"+"+b12+" & "+a13+"+"+b13+" & "+a14+"+"+b14+" & "+a15+"+"+b15+" \\\\ "+a21+"+"+b21+" & "+a22+"+"+b22+" & "+a23+"+"+b23+" & "+a24+"+"+b24+" & "+a25+"+"+b25+" \\\\ "+a31+"+"+b31+" & "+a32+"+"+b32+" & "+a33+"+"+b33+" & "+a34+"+"+b34+" & "+a35+"+"+b35+" \\\\ "+a41+"+"+b41+" & "+a42+"+"+b42+" & "+a43+"+"+b43+" & "+a44+"+"+b44+" & "+a45+"+"+b45+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11+b11)+" & "+(a12+b12)+" & "+(a13+b13)+" & "+(a14+b14)+" & "+(a15+b15)+" \\\\ "+(a21+b21)+" & "+(a22+b22)+" & "+(a23+b23)+" & "+(a24+b24)+" & "+(a25+b25)+" \\\\ "+(a31+b31)+" & "+(a32+b32)+" & "+(a33+b33)+" & "+(a34+b34)+" & "+(a35+b35)+" \\\\ "+(a41+b41)+" & "+(a42+b42)+" & "+(a43+b43)+" & "+(a44+b44)+" & "+(a45+b45)+" \\end{bmatrix} \\end{align} $$"
    }
    
    
    
    MathJax.typeset();
    
}






























function subtract(){
    var a11 = parseFloat(document.getElementById('a11v').value);
    var a12 = parseFloat(document.getElementById('a12v').value);
    var a13 = parseFloat(document.getElementById('a13v').value);
    var a14 = parseFloat(document.getElementById('a14v').value);
    var a15 = parseFloat(document.getElementById('a15v').value);
    var a21 = parseFloat(document.getElementById('a21v').value);
    var a22 = parseFloat(document.getElementById('a22v').value);
    var a23 = parseFloat(document.getElementById('a23v').value);
    var a24 = parseFloat(document.getElementById('a24v').value);
    var a25 = parseFloat(document.getElementById('a25v').value);
    var a31 = parseFloat(document.getElementById('a31v').value);
    var a32 = parseFloat(document.getElementById('a32v').value);
    var a33 = parseFloat(document.getElementById('a33v').value);
    var a34 = parseFloat(document.getElementById('a34v').value);
    var a35 = parseFloat(document.getElementById('a35v').value);
    var a41 = parseFloat(document.getElementById('a41v').value);
    var a42 = parseFloat(document.getElementById('a42v').value);
    var a43 = parseFloat(document.getElementById('a43v').value);
    var a44 = parseFloat(document.getElementById('a44v').value);
    var a45 = parseFloat(document.getElementById('a45v').value);
    var a51 = parseFloat(document.getElementById('a51v').value);
    var a52 = parseFloat(document.getElementById('a52v').value);
    var a53 = parseFloat(document.getElementById('a53v').value);
    var a54 = parseFloat(document.getElementById('a54v').value);
    var a55 = parseFloat(document.getElementById('a55v').value);
    var b11 = parseFloat(document.getElementById('b11v').value);
    var b12 = parseFloat(document.getElementById('b12v').value);
    var b13 = parseFloat(document.getElementById('b13v').value);
    var b14 = parseFloat(document.getElementById('b14v').value);
    var b15 = parseFloat(document.getElementById('b15v').value);
    var b21 = parseFloat(document.getElementById('b21v').value);
    var b22 = parseFloat(document.getElementById('b22v').value);
    var b23 = parseFloat(document.getElementById('b23v').value);
    var b24 = parseFloat(document.getElementById('b24v').value);
    var b25 = parseFloat(document.getElementById('b25v').value);
    var b31 = parseFloat(document.getElementById('b31v').value);
    var b32 = parseFloat(document.getElementById('b32v').value);
    var b33 = parseFloat(document.getElementById('b33v').value);
    var b34 = parseFloat(document.getElementById('b34v').value);
    var b35 = parseFloat(document.getElementById('b35v').value);
    var b41 = parseFloat(document.getElementById('b41v').value);
    var b42 = parseFloat(document.getElementById('b42v').value);
    var b43 = parseFloat(document.getElementById('b43v').value);
    var b44 = parseFloat(document.getElementById('b44v').value);
    var b45 = parseFloat(document.getElementById('b45v').value);
    var b51 = parseFloat(document.getElementById('b51v').value);
    var b52 = parseFloat(document.getElementById('b52v').value);
    var b53 = parseFloat(document.getElementById('b53v').value);
    var b54 = parseFloat(document.getElementById('b54v').value);
    var b55 = parseFloat(document.getElementById('b55v').value);
    
    if (dima == 11 && dimb == 11) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+"  \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+"   \\end{bmatrix} \\end{align} $$"
    } else if (dima == 12 && dimb == 12) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+"  \\end{bmatrix} \\end{align} $$"
    } else if (dima == 13 && dimb == 13) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+"  \\end{bmatrix} \\end{align} $$"
    } else if (dima == 14 && dimb == 14) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+"  \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" & "+a14+"-"+b14+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" & "+(a14-b14)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 15 && dimb == 15) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" & "+a15+" \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+" & "+b15+"  \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" & "+a14+"-"+b14+" & "+a15+"-"+b15+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" & "+(a14-b14)+" & "+(a15-b15)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 21 && dimb == 21) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" \\\\ "+a21+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+"  \\\\ "+b21+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+"  \\\\ "+a21+"-"+b21+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+"  \\\\ "+(a21-b21)+"  \\end{bmatrix} \\end{align} $$"
    } else if (dima == 22 && dimb == 22) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" \\\\ "+a21+" & "+a22+" \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" \\\\ "+b21+" & "+b22+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 23 && dimb == 23) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" \\\\ "+a21+" & "+a22+" & "+a23+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" \\\\ "+b21+" & "+b22+" & "+b23+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 24 && dimb == 24) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" \\\\ "+a21+" & "+a22+" & "+a23+" & "+a24+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+"  \\\\ "+b21+" & "+b22+" & "+b23+" & "+b24+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" & "+a14+"-"+b14+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" & "+a24+"-"+b24+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" & "+(a14-b14)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" & "+(a24-b24)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 25 && dimb == 25) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" & "+a15+" \\\\ "+a21+" & "+a22+" & "+a23+" & "+a24+" & "+a25+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+" & "+b15+"  \\\\ "+b21+" & "+b22+" & "+b23+" & "+b24+" & "+b25+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" & "+a14+"-"+b14+" & "+a15+"-"+b15+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" & "+a24+"-"+b24+" & "+a25+"-"+b25+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" & "+(a14-b14)+" & "+(a15-b15)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" & "+(a24-b24)+" & "+(a25-b25)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 31 && dimb == 31) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" \\\\ "+a21+" \\\\ "+a31+" \\end{bmatrix} + \\begin{bmatrix} "+b11+" \\\\ "+b21+" \\\\ "+b31+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" \\\\ "+a21+"-"+b21+" \\\\ "+a31+"-"+b31+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" \\\\ "+(a21-b21)+" \\\\ "+(a31-b31)+" \\end{bmatrix} \\end{align} $$"
    }  else if (dima == 32 && dimb == 32) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" \\\\ "+a21+" & "+a22+" \\\\ "+a31+" & "+a32+" \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" \\\\ "+b21+" & "+b22+" \\\\ "+b31+" & "+b32+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 33 && dimb == 33) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" \\\\ "+a21+" & "+a22+" & "+a23+" \\\\ "+a31+" & "+a32+" & "+a33+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" \\\\ "+b21+" & "+b22+" & "+b23+" \\\\ "+b31+" & "+b32+" & "+b33+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" & "+a33+"-"+b33+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" & "+(a33-b33)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 34 && dimb == 34) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" \\\\ "+a21+" & "+a22+" & "+a23+" & "+a24+" \\\\ "+a31+" & "+a32+" & "+a33+" & "+a34+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+" \\\\ "+b21+" & "+b22+" & "+b23+" & "+b24+" \\\\ "+b31+" & "+b32+" & "+b33+" & "+b34+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" & "+a14+"-"+b14+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" & "+a24+"-"+b24+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" & "+a33+"-"+b33+" & "+a34+"-"+b34+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" & "+(a14-b14)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" & "+(a24-b24)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" & "+(a33-b33)+" & "+(a34-b34)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 35 && dimb == 35) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" & "+a15+" \\\\ "+a21+" & "+a22+" & "+a23+" & "+a24+" & "+a25+" \\\\ "+a31+" & "+a32+" & "+a33+" & "+a34+" & "+a35+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+" & "+b15+" \\\\ "+b21+" & "+b22+" & "+b23+" & "+b24+" & "+b25+" \\\\ "+b31+" & "+b32+" & "+b33+" & "+b34+" & "+b35+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" & "+a14+"-"+b14+" & "+a15+"-"+b15+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" & "+a24+"-"+b24+" & "+a25+"-"+b25+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" & "+a33+"-"+b33+" & "+a34+"-"+b34+" & "+a35+"-"+b35+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" & "+(a14-b14)+" & "+(a15-b15)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" & "+(a24-b24)+" & "+(a25-b25)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" & "+(a33-b33)+" & "+(a34-b34)+" & "+(a35-b35)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 41 && dimb == 41) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+"  \\\\ "+a21+" \\\\ "+a31+" \\\\ "+a41+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+"  \\\\ "+b21+"  \\\\ "+b31+"  \\\\ "+b41+"  \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+"  \\\\ "+a21+"-"+b21+"  \\\\ "+a31+"-"+b31+" \\\\ "+a41+"-"+b41+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" \\\\ "+(a21-b21)+" \\\\ "+(a31-b31)+" \\\\ "+(a41-b41)+" \\end{bmatrix} \\end{align} $$"
    }  else if (dima == 42 && dimb == 42) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" \\\\ "+a21+" & "+a22+" \\\\ "+a31+" & "+a32+" \\\\ "+a41+" & "+a42+" \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" \\\\ "+b21+" & "+b22+" \\\\ "+b31+" & "+b32+" \\\\ "+b41+" & "+b42+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" \\\\ "+a41+"-"+b41+" & "+a42+"-"+b42+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" \\\\ "+(a41-b41)+" & "+(a42-b42)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 43 && dimb == 43) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" \\\\ "+a21+" & "+a22+" & "+a23+" \\\\ "+a31+" & "+a32+" & "+a33+" \\\\ "+a41+" & "+a42+" & "+a43+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" \\\\ "+b21+" & "+b22+" & "+b23+" \\\\ "+b31+" & "+b32+" & "+b33+" \\\\ "+b41+" & "+b42+" & "+b43+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" & "+a33+"-"+b33+" \\\\ "+a41+"-"+b41+" & "+a42+"-"+b42+" & "+a43+"-"+b43+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" & "+(a33-b33)+" \\\\ "+(a41-b41)+" & "+(a42-b42)+" & "+(a43-b43)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 44 && dimb == 44) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" \\\\ "+a21+" & "+a22+" & "+a23+" & "+a24+" \\\\ "+a31+" & "+a32+" & "+a33+" & "+a34+" \\\\ "+a41+" & "+a42+" & "+a43+" & "+a44+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+" \\\\ "+b21+" & "+b22+" & "+b23+" & "+b24+" \\\\ "+b31+" & "+b32+" & "+b33+" & "+b34+" \\\\ "+b41+" & "+b42+" & "+b43+" & "+b44+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" & "+a14+"-"+b14+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" & "+a24+"-"+b24+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" & "+a33+"-"+b33+" & "+a34+"-"+b34+" \\\\ "+a41+"-"+b41+" & "+a42+"-"+b42+" & "+a43+"-"+b43+" & "+a44+"-"+b44+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" & "+(a14-b14)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" & "+(a24-b24)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" & "+(a33-b33)+" & "+(a34-b34)+" \\\\ "+(a41-b41)+" & "+(a42-b42)+" & "+(a43-b43)+" & "+(a44-b44)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 45 && dimb == 45) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" & "+a15+" \\\\ "+a21+" & "+a22+" & "+a23+" & "+a24+" & "+a25+" \\\\ "+a31+" & "+a32+" & "+a33+" & "+a34+" & "+a35+" \\\\ "+a41+" & "+a42+" & "+a43+" & "+a44+" & "+a45+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+" & "+b15+" \\\\ "+b21+" & "+b22+" & "+b23+" & "+b24+" & "+b25+" \\\\ "+b31+" & "+b32+" & "+b33+" & "+b34+" & "+b35+" \\\\ "+b41+" & "+b42+" & "+b43+" & "+b44+" & "+b45+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"+"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" & "+a14+"-"+b14+" & "+a15+"-"+b15+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" & "+a24+"-"+b24+" & "+a25+"-"+b25+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" & "+a33+"-"+b33+" & "+a34+"-"+b34+" & "+a35+"-"+b35+" \\\\ "+a41+"-"+b41+" & "+a42+"-"+b42+" & "+a43+"-"+b43+" & "+a44+"-"+b44+" & "+a45+"-"+b45+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" & "+(a14-b14)+" & "+(a15-b15)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" & "+(a24-b24)+" & "+(a25-b25)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" & "+(a33-b33)+" & "+(a34-b34)+" & "+(a35-b35)+" \\\\ "+(a41-b41)+" & "+(a42-b42)+" & "+(a43-b43)+" & "+(a44-b44)+" & "+(a45-b45)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 51 && dimb == 51) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" \\\\ "+a21+" \\\\ "+a31+"  \\\\ "+a41+"  \\\\ "+a51+" \\end{bmatrix} + \\begin{bmatrix} "+b11+"  \\\\ "+b21+"\\\\ "+b31+" \\\\ "+b41+"  \\\\ "+b51+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+"  \\\\ "+a21+"-"+b21+"  \\\\ "+a31+"-"+b31+"  \\\\ "+a41+"-"+b41+"  \\\\ "+a51+"-"+b51+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+"  \\\\ "+(a21-b21)+"  \\\\ "+(a31-b31)+"  \\\\ "+(a41-b41)+"  \\\\ "+(a51-b51)+"  \\end{bmatrix} \\end{align} $$"
    }  else if (dima == 52 && dimb == 52) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" \\\\ "+a21+" & "+a22+" \\\\ "+a31+" & "+a32+" \\\\ "+a41+" & "+a42+" \\\\ "+a51+" & "+a52+" \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" \\\\ "+b21+" & "+b22+" \\\\ "+b31+" & "+b32+" \\\\ "+b41+" & "+b42+" \\\\ "+b51+" & "+b52+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" \\\\ "+a41+"-"+b41+" & "+a42+"-"+b42+" \\\\ "+a51+"-"+b51+" & "+a52+"-"+b52+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" \\\\ "+(a41-b41)+" & "+(a42-b42)+" \\\\ "+(a51-b51)+" & "+(a52-b52)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 53 && dimb == 53) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" \\\\ "+a21+" & "+a22+" & "+a23+" \\\\ "+a31+" & "+a32+" & "+a33+" \\\\ "+a41+" & "+a42+" & "+a43+" \\\\ "+a51+" & "+a52+" & "+a53+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" \\\\ "+b21+" & "+b22+" & "+b23+" \\\\ "+b31+" & "+b32+" & "+b33+" \\\\ "+b41+" & "+b42+" & "+b43+" \\\\ "+b51+" & "+b52+" & "+b53+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" & "+a33+"-"+b33+" \\\\ "+a41+"-"+b41+" & "+a42+"-"+b42+" & "+a43+"-"+b43+" \\\\ "+a51+"-"+b51+" & "+a52+"-"+b52+" & "+a53+"-"+b53+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" & "+(a33-b33)+" \\\\ "+(a41-b41)+" & "+(a42-b42)+" & "+(a43-b43)+" \\\\ "+(a51-b51)+" & "+(a52-b52)+" & "+(a53-b53)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 54 && dimb == 54) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" \\\\ "+a21+" & "+a22+" & "+a23+" & "+a24+" \\\\ "+a31+" & "+a32+" & "+a33+" & "+a34+" \\\\ "+a41+" & "+a42+" & "+a43+" & "+a44+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+" \\\\ "+b21+" & "+b22+" & "+b23+" & "+b24+" \\\\ "+b31+" & "+b32+" & "+b33+" & "+b34+" \\\\ "+b41+" & "+b42+" & "+b43+" & "+b44+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" & "+a14+"-"+b14+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" & "+a24+"-"+b24+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" & "+a33+"-"+b33+" & "+a34+"-"+b34+" \\\\ "+a41+"-"+b41+" & "+a42+"-"+b42+" & "+a43+"-"+b43+" & "+a44+"-"+b44+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" & "+(a14-b14)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" & "+(a24-b24)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" & "+(a33-b33)+" & "+(a34-b34)+" \\\\ "+(a41-b41)+" & "+(a42-b42)+" & "+(a43-b43)+" & "+(a44-b44)+" \\end{bmatrix} \\end{align} $$"
    } else if (dima == 55 && dimb == 55) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" & "+a13+" & "+a14+" & "+a15+" \\\\ "+a21+" & "+a22+" & "+a23+" & "+a24+" & "+a25+" \\\\ "+a31+" & "+a32+" & "+a33+" & "+a34+" & "+a35+" \\\\ "+a41+" & "+a42+" & "+a43+" & "+a44+" & "+a45+"  \\end{bmatrix} + \\begin{bmatrix} "+b11+" & "+b12+" & "+b13+" & "+b14+" & "+b15+" \\\\ "+b21+" & "+b22+" & "+b23+" & "+b24+" & "+b25+" \\\\ "+b31+" & "+b32+" & "+b33+" & "+b34+" & "+b35+" \\\\ "+b41+" & "+b42+" & "+b43+" & "+b44+" & "+b45+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"-"+b11+" & "+a12+"-"+b12+" & "+a13+"-"+b13+" & "+a14+"-"+b14+" & "+a15+"-"+b15+" \\\\ "+a21+"-"+b21+" & "+a22+"-"+b22+" & "+a23+"-"+b23+" & "+a24+"-"+b24+" & "+a25+"-"+b25+" \\\\ "+a31+"-"+b31+" & "+a32+"-"+b32+" & "+a33+"-"+b33+" & "+a34+"-"+b34+" & "+a35+"-"+b35+" \\\\ "+a41+"-"+b41+" & "+a42+"-"+b42+" & "+a43+"-"+b43+" & "+a44+"-"+b44+" & "+a45+"-"+b45+"  \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11-b11)+" & "+(a12-b12)+" & "+(a13-b13)+" & "+(a14-b14)+" & "+(a15-b15)+" \\\\ "+(a21-b21)+" & "+(a22-b22)+" & "+(a23-b23)+" & "+(a24-b24)+" & "+(a25-b25)+" \\\\ "+(a31-b31)+" & "+(a32-b32)+" & "+(a33-b33)+" & "+(a34-b34)+" & "+(a35-b35)+" \\\\ "+(a41-b41)+" & "+(a42-b42)+" & "+(a43-b43)+" & "+(a44-b44)+" & "+(a45-b45)+" \\end{bmatrix} \\end{align} $$"
    }
    
    MathJax.typeset();
    
}



















function multiply(){
    var a11 = parseFloat(document.getElementById('a11v').value);
    var a12 = parseFloat(document.getElementById('a12v').value);
    var a21 = parseFloat(document.getElementById('a21v').value);
    var a22 = parseFloat(document.getElementById('a22v').value);
    var b11 = parseFloat(document.getElementById('b11v').value);
    var b12 = parseFloat(document.getElementById('b12v').value);
    var b21 = parseFloat(document.getElementById('b21v').value);
    var b22 = parseFloat(document.getElementById('b22v').value);
    
    if (dima == 22 && dimb == 22) {
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\quad \\begin{bmatrix} "+a11+" & "+a12+" \\\\ "+a21+" & "+a22+" \\end{bmatrix} \\times \\begin{bmatrix} "+b11+" & "+b12+" \\\\ "+b21+" & "+b22+" \\end{bmatrix} &= \\begin{bmatrix} "+a11+"\\cdot"+b11+"+"+a12+"\\cdot"+b21+" & "+a11+"\\cdot"+b12+"+"+a12+"\\cdot"+b22+" \\\\ "+a21+"\\cdot"+b11+"+"+a22+"\\cdot"+b21+" & "+a21+"\\cdot"+b12+"+"+a22+"\\cdot"+b22+" \\end{bmatrix} \\\\ &= \\begin{bmatrix} "+(a11*b11+a12*b21)+" & "+(a11*b12+a12*b22)+" \\\\ "+(a21*b11+a22*b21)+" & "+(a21*b12+a22*b22)+" \\end{bmatrix} \\end{align} $$"
    }
    
    MathJax.typeset();
    
}


function example1(){
    document.getElementById('a11v').value="1"
    document.getElementById('a12v').value="2"
    document.getElementById('a21v').value="3"
    document.getElementById('a22v').value="4"
    document.getElementById('b11v').value="5"
    document.getElementById('b12v').value="6"
    document.getElementById('b21v').value="7"
    document.getElementById('b22v').value="8"
}

function example2(){
    document.getElementById('a11v').value="1"
    document.getElementById('a12v').value="2"
    document.getElementById('a13v').value="3"
    document.getElementById('a21v').value="4"
    document.getElementById('a22v').value="5"
    document.getElementById('a23v').value="6"
    document.getElementById('a31v').value="7"
    document.getElementById('a32v').value="8"
    document.getElementById('a33v').value="9"
    document.getElementById('b11v').value="1"
    document.getElementById('b12v').value="2"
    document.getElementById('b13v').value="3"
    document.getElementById('b21v').value="4"
    document.getElementById('b22v').value="5"
    document.getElementById('b23v').value="6"
    document.getElementById('b31v').value="7"
    document.getElementById('b32v').value="8"
    document.getElementById('b33v').value="9"
}
