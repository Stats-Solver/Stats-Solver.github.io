$("#inputqu").hide();$("#slidecontainer").hide();$("#input2").hide();$("#inputzscore").hide(); $("#inputz").hide(); 
$(".description").hide(); $(".population").hide(); $(".sample").hide(); $("#explanation").hide(); $("#label2").hide();
$("#chebyshev").hide(); $("#label3").hide(); $("#weights").hide(); $("#label4").hide();
$("#switchpopulation").hide(); $("#switchsample").hide(); 
$("#meanoptions").hide(); $("#vsccoptions").hide(); $("#vsoptions").hide(); $("#ccoptions").hide();

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

$('.popover-dismiss').popover({
  trigger: 'focus'
})

function sortrem(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return a;
}

function countem(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return b;
}

function addnum(num){
    var str = document.getElementById("values").value;
    str = str+num
    document.getElementById("values").value = str;
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

function avg(input){
    return sum(input)/input.length
}

function showthings(){
    $("#xvalcontainer").show(); $("#meanoptions").hide(); $("#vsccoptions").hide(); $("#blankx").show(); $("#blanky").show();
    $("#inputqu").hide();$("#slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); $("#label2").hide();  $("#inputz").hide();
    $("#chebyshev").hide(); $("#label3").hide(); $("#values").show();  $("#label1").show(); $("#weights").hide(); $("#label4").hide();
    $("#vsoptions").hide(); $("#ccoptions").hide();
    var x = document.getElementById("stat").value;
    if (x == "mean") {
        $("#meanoptions").show(); $("#blankx").hide(); 
    } if (x == "weighted") {
        weighted()
    } else if (x == "percentiles") {
        percentiles(); $("#blankx").hide(); 
    } else if (x == "quartiles") {
        quartiles(); $("#blankx").hide(); 
    } else if (x == "variance") {
        $("#vsoptions").show(); $("#blankx").hide(); 
    } else if (x == "stdev") {
        $("#vsoptions").show(); $("#blankx").hide(); 
    } else if (x == "zscores") {
        zscores(); $("#blankx").hide(); 
    } else if (x == "chebyshev") {
        chebyshev()
    } else if (x == "empirical") {
        empirical()
    } else if (x == "covariance") {
        $("#ccoptions").show(); $("#input2").show(); $("#label2").show(); $("#label1").hide(); $("#blanky").hide(); 
    } else if (x == "covariancepop") {
        covariancepop()
    } else if (x == "correlation") {
        $("#ccoptions").show(); $("#input2").show(); $("#label2").show(); $("#label1").hide(); $("#blanky").hide(); 
    } else if (x == "correlationpop") {
        correlationpop()
    } 
}

function stat(){
    $("#explanation").hide();
    //$("#inputqu").hide(); $("#inputzscore").hide();
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#output").empty();
    var str = document.getElementById("values").value; var len = str.length;
    var mn = document.getElementById("expval").value; var len1 = mn.length;
    var std = document.getElementById("stdev").value; var len2 = std.length;
    var min = document.getElementById("minval").value; var len3 = min.length;
    var max = document.getElementById("maxval").value; var len4 = max.length;
    var str2 = document.getElementById("values2").value; var len5 = str2.length;
    var x = document.getElementById("stat").value;
    if (x == "mean"){
        if (len !== 0) {
            mean()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "meanpop"){
        meanpop()
    } else if (x == "geometric"){
        geometric()
    } else if (x == "weighted"){
        calcweighted()
    } else if (x == "median"){
        if (len !== 0) {
            median()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "mode") {
        if (len !== 0) {
            mode()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "percentiles") {
        if (len !== 0) {
            calcper()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "quartiles") {
        if (len !== 0) {
            calcquart()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "range") {
        if (len !== 0) {
            range()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "iqr") {
        if (len !== 0) {
            iqr()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "variance") {
        if (len !== 0) {
            variance()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "variancepop") {
        variancepop()
    } else if (x == "stdev") {
        if (len !== 0) {
            stdev()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "stdevpop") {
        stdevpop()
    } else if (x == "cv") {
        if (len !== 0) {
            cv()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "zscores") {
        if (len !== 0) {
            calcz()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "chebyshev") {
        if (len1 !== 0 && len2 !== 0 && len3 !== 0 && len4 !== 0) {
            calcchebyshev()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "empirical") {
        if (len1 !== 0 && len2 !== 0 && len3 !== 0 && len4 !== 0) {
            calcempirical()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "fivenumber") {
        fivenumber()
    } else if (x == "covariance") {
        if (len !== 0 && len5 !== 0) {
            covariance()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "covariancepop") {
        calccovpop()
    } else if (x == "correlation") {
        if (len !== 0 && len5 !== 0) {
            correlation()
        } else {
            document.getElementById("output").innerHTML = "$$\\text{Please enter values.}$$"
        }
    } else if (x == "correlationpop") {
        calccorpop()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
    MathJax.typeset();
   
}

function switchpopulation() {
    var x = document.getElementById("stat").value;
    if (x == "mean"){
        meanpop()
    } else if (x == "variance") {
        variancepop()
    } else if (x == "stdev") {
        stdevpop()
    } else if (x == "covariance") {
        calccovpop()
    } else if (x == "correlation") {
        calccorpop()
    } 
}

function switchsample() {
    var x = document.getElementById("stat").value;
    if (x == "mean"){
        mean()
    } else if (x == "variance") {
        variance()
    } else if (x == "stdev") {
        stdev()
    } else if (x == "covariance") {
        calccov()
    } else if (x == "correlation") {
        calccor()
    } 
}

function mean(){
    var x = document.getElementById("meantype").value;
    if (x == "sample"){
        meansam()
    } else if (x == "population") {
        meanpop()
    } else if (x == "geometric") {
        geometric()
    }
}

function meansam(){
    $("#explanation").show(); $("#switchpopulation").show(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The mean is a measure of central location."
    document.getElementById("formulatext").innerHTML = "$ \\bar{x} = \\dfrac{\\sum{x}}{n} $"
    document.getElementById("explanationtext").innerHTML = "The mean is the most commonly used measure of central location."
    $("#output").empty();
    $("#desmean").show(); $("#popmean").show(); $("#sammean").hide();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var adds = each[0];  var avgeach = avg(each);  
    for (let i=1; i<len; i++){
        adds += "+" + each[i]
    }
    document.getElementById("output").innerHTML+= " $$ \\begin{align} \\bar{x} &= \\frac{" + adds + "}{" + len + "} \\\\ &=  \\frac{" + sum(each) + "}{" + len + "} \\\\ &= \\boxed{" + parseFloat(avgeach.toFixed(2)) + "} \\end{align}$$"
    MathJax.typeset();
}

function meanpop(){
    $("#explanation").show(); $("#switchpopulation").hide(); $("#switchsample").show();
    document.getElementById("descriptiontext").innerHTML = "The mean is a measure of central location."
    document.getElementById("formulatext").innerHTML = "$ \\mu = \\dfrac{\\sum{x}}{N} $"
    document.getElementById("explanationtext").innerHTML = "The mean is the most commonly used measure of central location."
    $("#output").empty();
    $("#desmean").show(); $("#popmean").show(); $("#sammean").hide();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var adds = each[0];  var avgeach = avg(each);  
    for (let i=1; i<len; i++){
        adds += "+" + each[i]
    }
    document.getElementById("output").innerHTML+= "$$ \\begin{align} \\mu &= \\frac{" + adds + "}{" + len + "} \\\\ &=  \\frac{" + sum(each) + "}{" + len + "} \\\\ &= \\boxed{" + parseFloat(avgeach.toFixed(2)) + "} \\end{align}$$"
    MathJax.typeset();
}

function weighted(){
    $("#weights").show(); $("#label4").show(); $("#label1").hide();
}

function calcweighted(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = ""
    document.getElementById("formulatext").innerHTML = "$ \\bar{x} = \\dfrac{\\sum{wx}}{w} $"
    document.getElementById("explanationtext").innerHTML = ""
    $("#output").empty();
    $("#desmean").show(); $("#popmean").show(); $("#sammean").hide();
    var str = document.getElementById("values").value;
    var str2 = document.getElementById('weightsvalues').value
    var each = str.split(",").map(Number); var len = each.length;
    var adds = each[0];  var avgeach = avg(each);
    var each2 = str2.split(",").map(Number); var len2 = each2.length;
    var adds2 = each2[0];  var avgeach2 = avg(each2);
    var adds3 = adds2 + "(" + adds + ")"
    var adds3value = 0; var adds2value = 0;
    for (let i=1; i<len; i++){
        adds3 += "+" + each2[i] + "(" + each[i] + ")"
        adds2 += "+" + each2[i]
        adds3value += each2[i] * each[i]
        adds2value += each2[i]
    }
    document.getElementById("output").innerHTML+= "$$ \\begin{align} \\bar{x}_w &= \\frac{\\sum{wx}}{\\sum{w}} \\\\ &= \\frac{" + adds3 + "}{" + adds2 + "} \\\\ &=  \\frac{" + adds3value + "}{" + adds2value + "} \\\\ &= \\boxed{" + parseFloat((adds3value/adds2value).toFixed(2)) + "} \\end{align}$$"
    MathJax.typeset();
}

function geometric(){
    $("#explanation").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The geometric mean is a measure of central location that involves multiplying the values instead of adding them as in the (arithmetic) mean."
    document.getElementById("formulatext").innerHTML = "$ \\bar{x}_g = \\sqrt[n]{(x_1)(x_2) \\cdots (x_n)} $"
    document.getElementById("explanationtext").innerHTML = "The geometric mean can be interpreted as the growth rate of an investment."
    $("#output").empty();
    $("#desmean").show(); $("#popmean").show(); $("#sammean").hide();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var adds = "(" + each[0] + ")";  var avgeach = avg(each);  
    var prod = each[0]
    for (let i=1; i<len; i++){
        adds += "(" + each[i] + ")"
        prod = prod * each[i]
    }
    var ans = Math.pow(prod, 1/len);
    document.getElementById("output").innerHTML+= "$$ \\begin{align} \\bar{x}_g &= \\sqrt[" + len + "]{" + adds + "} \\\\ &=  \\sqrt[" + len + "]{" + prod + "} \\\\ &= \\boxed{" + parseFloat(ans.toFixed(2)) + "} \\end{align}$$"
    MathJax.typeset();
}

function median(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The median is a measure of central location."
    document.getElementById("formulatext").innerHTML = "If there are an odd number of values, the median is the middle value.<br> If there are an even number of values, the median is the average of the two middle values."
    document.getElementById("explanationtext").innerHTML = "The median is useful when there are extreme values in the data."
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var eachsort = each.sort(function(a,b) {
        return a - b;
    });
    var mid = (len-1)/2; var midr = len/2;  var midl = (len-2)/2;
    var valm = each[mid]; var valr = each[midr]; var vall = each[midl];
    var sumlr = vall + valr; var avelr = (vall + valr)/2;
    if (len % 2 != 0){
         document.getElementById("output").innerHTML = " $$ "+eachsort+"$$ $$\\text{Median} = \\boxed{" + valm + "} $$"
   
    }else{
        document.getElementById("output").innerHTML = "$$ "+eachsort+"$$ $$\\text{Median} = " + "\\frac{" + vall  + "+" + valr + "}{2} = \\boxed{" + avelr + "} $$"
    }
    MathJax.typeset();
}

function mode(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The mode is a measure of central location."
    document.getElementById("formulatext").innerHTML = "The mode is the value that occurs with the highest frequency."
    document.getElementById("explanationtext").innerHTML = "If there are two modes, the data is said to be bi-modal.<br> If there are more than two modes, the data is said to be multi-modal."
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr style='border-bottom: thin solid'>" + "<td>$" + "x" + "$</td>" + "<td>$\\text{" + "Frequency" + "}$</td>" + "</tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + eachonesort[r] + "$</td>";
        table += "<td>$" + counts[r] + "$</td>";
        table += "</tr>";
    }

    function modevalue(numbers) {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
    }
    
    var themodes = modevalue(each)
    
   
    if (each.length == themodes.length) {
        document.getElementById("output").innerHTML = "$$\\boxed{\\text{No Mode}}$$"
    } else if (themodes.length == 1) {
        document.getElementById("output").innerHTML = "$$\\text{Mode} = \\boxed{" + themodes + "}$$"
    }
    else {
        document.getElementById("output").innerHTML = "$$\\text{Modes} = \\boxed{" + themodes + "}$$"
    }
    MathJax.typeset();

}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

function percentiles(){
    $("#slidecontainer").show(); $("#label1").show();
    var val = document.getElementById("myRange").value;
}

function calcper(){
    $("#explanation").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "Approximately p% of the data is less than the pᵗʰ percentile."
    //Approximately (1-p)% of the data is greater than the p-th percentile.
    document.getElementById("formulatext").innerHTML = "$i = \\left(\\dfrac{p}{100}\\right)n$"
    document.getElementById("explanationtext").innerHTML = "The 50th percentile is the median."
    var val = document.getElementById("myRange").value;
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);var len = each.length;
    var eachsort = each.sort(function(a,b) {
        return a - b;
    });
    var indxval = (val/100)*len; var indxvalplus1 = indxval+1;
    var valindx = eachsort[indxval-1]; var valindxplus1 = eachsort[indxvalplus1-1];
    var valsum = valindx+valindxplus1; var valavg = valsum/2;
    var indxint = Number.isInteger(indxval); var indxrnd = Math.ceil(indxval);
    var answr = eachsort[indxrnd-1];
    var suff = ""
    if (val == 1 || val == 21 || val == 31 || val == 41 || val == 51 || val == 61 || val == 71 || val == 81 || val == 91){
        var suff = "st"
    } else if (val == 2 || val == 22 || val == 32 || val == 42 || val == 52 || val == 62 || val == 72 || val == 82 || val == 92){
        var suff = "nd"
    } else if (val == 3 || val == 23 || val == 33 || val == 43 || val == 53 || val == 63 || val == 73 || val == 83 || val == 93){
        var suff = "rd"
    } else {
        var suff = "th"
    }
    if (indxint){
        document.getElementById("output").innerHTML = "$$ "+eachsort+"$$ $$ i = " + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + parseFloat(indxval.toFixed(2)) + "$$ $$ \\text{"+val+suff+" Percentile} = " + "\\frac{" + valindx  + "+" + valindxplus1 + "}{2} = \\boxed{" + valavg + "} $$"
   
    }else{
        document.getElementById("output").innerHTML = "$$ "+eachsort+"$$ $$ i = " + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + parseFloat(indxval.toFixed(2)) + "$$ $$ \\text{"+val+suff+" Percentile} = \\boxed{" + answr + "} $$"
    }
    MathJax.typeset();
}

function quartiles(){
    $("#inputqu").show(); $("#label1").show();
}

function calcquart(){
    $("#explanation").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    $("#inputqu").show(); $("#desquartiles").show();
    
    var val = document.getElementById("valquart").value;
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);var len = each.length;
    var eachsort = each.sort(function(a,b) {
        return a - b;
    });
    var indxval = (val/100)*len; var indxvalplus1 = indxval+1;
    var valindx = eachsort[indxval-1]; var valindxplus1 = eachsort[indxvalplus1-1];
    var valsum = valindx+valindxplus1; var valavg = valsum/2;
    var indxint = Number.isInteger(indxval); var indxrnd = Math.ceil(indxval);
    var answr = eachsort[indxrnd-1];
    var quartnum = ""
    if (val == 25){
        var quartnum = "Q_1"
        var quartname = "First"
        document.getElementById("descriptiontext").innerHTML = "The first quartile is the 25th percentile."
        document.getElementById("formulatext").innerHTML = "$i = \\left(\\dfrac{25}{100}\\right)n$"
        document.getElementById("explanationtext").innerHTML = "The second quartile is the median."
    } else if (val == 50){
        var quartnum = "Q_2"
        var quartname = "Second"
        document.getElementById("descriptiontext").innerHTML = "The second quartile is the 50th percentile."
        document.getElementById("formulatext").innerHTML = "$i = \\left(\\dfrac{50}{100}\\right)n$"
        document.getElementById("explanationtext").innerHTML = "The second quartile is the median."
    } else if (val == 75){
        var quartnum = "Q_3"
        var quartname = "Third"
        document.getElementById("descriptiontext").innerHTML = "The third quartile is the 75th percentile."
        document.getElementById("formulatext").innerHTML = "$i = \\left(\\dfrac{75}{100}\\right)n$"
        document.getElementById("explanationtext").innerHTML = "The second quartile is the median."
    } else {
        var quartnum = ""
    }
    if (indxint){
        document.getElementById("output").innerHTML = "$$ "+eachsort+"$$ $$ i = " + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + parseFloat(indxval.toFixed(2)) + "$$ $$ "+quartnum+" = " + "\\frac{" + valindx  + "+" + valindxplus1 + "}{2} = \\boxed{" + valavg + "} $$"
   
    }else{
        document.getElementById("output").innerHTML = "$$ "+eachsort+"$$ $$ i = " + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + parseFloat(indxval.toFixed(2)) + "$$ $$ "+quartnum+" = \\boxed{" + answr + "} $$"
    }
    MathJax.typeset();
}

function range(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The range is a measure of variability."
    document.getElementById("formulatext").innerHTML = "$ \\text{Range} = \\text{Largest Value} - \\text{Smallest Value} $"
    document.getElementById("explanationtext").innerHTML = "The range is the simplest measure of variability as it only uses two values."
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);
    var largest = Math.max.apply(null,each); var smallest = Math.min.apply(null,each)
    var rng = largest - smallest
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Range} &= "+largest+" - "+smallest+ "\\\\ &= \\boxed{" + rng + "} \\end{align} $$"
    MathJax.typeset();
}

function iqr(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The interquartile range is a measure of variability."
    document.getElementById("formulatext").innerHTML = "$ \\text{IQR} = \\text{Q}_3 - \\text{Q}_1 $"
    document.getElementById("explanationtext").innerHTML = "The interquartile range is useful when there are extreme values in the data."
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);var len = each.length;
    var eachsort = each.sort();
    var indxval25 = (25/100)*len; var indxrnd25 = Math.ceil(indxval25);
    var indxval75 = (75/100)*len; var indxrnd75 = Math.ceil(indxval75);
    var val25indx = eachsort[indxval25-1]; var val25indxplus1 = eachsort[indxval25]; var val25avg = (val25indx + val25indxplus1) / 2;
    var val75indx = eachsort[indxval75-1]; var val75indxplus1 = eachsort[indxval75]; var val75avg = (val75indx + val75indxplus1) / 2;
    var indxint25 = Number.isInteger(indxval25); var indxint75 = Number.isInteger(indxval75);
    var answr25 = eachsort[indxrnd25-1]; var answr75 = eachsort[indxrnd75-1];
    var ansiqr1 = val75avg - val25avg; var ansiqr2 = answr75 - val25avg; var ansiqr3 = val75avg - answr25; var ansiqr4 = answr75 - answr25;

    if (indxint25 && indxint75){
        document.getElementById("output").innerHTML = "$$ "+eachsort+"$$ $$ i = " + "\\left(\\frac{25}{100}\\right)" + len + "=" + parseFloat(indxval25.toFixed(2)) + " \\rightarrow  Q_1 = " + val25avg + " $$ $$ i = " + "\\left(\\frac{75}{100}\\right)" + len + "=" + parseFloat(indxval75.toFixed(2)) + " \\rightarrow  Q_3 = " + val75avg + "$$ $$ \\begin{align} \\text{IQR} &= "+val75avg+" - "+val25avg+" \\\\ &= \\boxed{"+ansiqr1+"} \\end{align} $$"
    } else if (indxint25 && !indxint75){
        document.getElementById("output").innerHTML = "$$ "+eachsort+"$$ $$ \\text{Index: } i = " + "\\left(\\frac{25}{100}\\right)" + len + "=" + parseFloat(indxval25.toFixed(2)) + " \\rightarrow Q_1 = "+val25avg+" $$ $$ \\text{Index: } i = " + "\\left(\\frac{75}{100}\\right)" + len + "=" + parseFloat(indxval75.toFixed(2)) + " \\rightarrow Q_3 = "+answr75+" $$ $$ \\begin{align} \\text{IQR}  &= "+answr75+" - "+val25avg+" \\\\ &= \\boxed{"+ansiqr2+"} \\end{align} $$"
    } else if (!indxint25 && indxint75){
        document.getElementById("output").innerHTML = "$$ "+eachsort+"$$ $$ \\text{Index: } i = " + "\\left(\\frac{25}{100}\\right)" + len + "=" + parseFloat(indxval25.toFixed(2)) + " \\rightarrow Q_1 = "+answr25+" $$ $$ \\text{Index: } i = " + "\\left(\\frac{75}{100}\\right)" + len + "=" + parseFloat(indxval75.toFixed(2)) + " \\rightarrow Q_3 = " + val75avg + " $$ $$ \\begin{align} \\text{IQR} &= "+val75avg+" - "+answr25+" \\\\ &= \\boxed{"+ansiqr3+"} \\end{align} $$"
    }
    else{
        document.getElementById("output").innerHTML = "$$ "+eachsort+"$$ $$ i = " + "\\left(\\frac{25}{100}\\right)" + len + "=" + parseFloat(indxval25.toFixed(2)) + " \\rightarrow Q_1 = "+answr25+" $$ $$ i = " + "\\left(\\frac{75}{100}\\right)" + len + "=" + parseFloat(indxval75.toFixed(2)) + " \\rightarrow Q_3 = "+answr75+" $$ $$ \\begin{align} \\text{IQR} &= "+answr75+" - "+answr25+" \\\\ &= \\boxed{"+ansiqr4+"} \\end{align} $$"
    }

    MathJax.typeset();
}

function variance(){
    var x = document.getElementById("vstype").value;
    if (x == "sample"){
        variancesam()
    } else if (x == "population") {
        variancepop()
    } 
}

function variancesam(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").show(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The variances is a measure of variability."
    document.getElementById("formulatext").innerHTML = "$ s^2 = \\dfrac{\\sum{(x-\\bar{x})^2}}{n-1} $"
    document.getElementById("explanationtext").innerHTML = "The variances uses all of the data."
    $("#output").empty();
    $("#desvariance").show(); $("#popvariance").show(); $("#samvariance").hide();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var sumeach = sum(each);
    var mn = avg(each);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus);
    var sumeachminus2 = sum(eachminus2);
    var ansvar = sumeachminus2 / lenmin1;
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>" + "<td>" + "$x - \\bar{x}$" + "</td>" + "<td>" + "$(x - \\bar{x})^2$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 3;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + each[r] + "$</td>";
        table += "<td>$" + parseFloat(eachminus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eachminus2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>$"+Math.round(sumeachminus)+"$</td>" + "<td>$"+parseFloat(sumeachminus2.toFixed(2))+"$</td>" + "</tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table>$$  s^2 = \\frac{"+parseFloat(sumeachminus2.toFixed(2))+"}{"+len+"-1} = \\boxed{"+parseFloat(ansvar.toFixed(2))+"}  $$"
    MathJax.typeset();
}

function variancepop(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").hide(); $("#switchsample").show();
    document.getElementById("descriptiontext").innerHTML = "The variances is a measure of variability."
    document.getElementById("formulatext").innerHTML = "$ \\sigma^2 = \\dfrac{\\sum{(x-\\mu)^2}}{N} $"
    document.getElementById("explanationtext").innerHTML = "The variances uses all of the data."
    $("#output").empty();
    $("#desvariance").show(); $("#popvariance").show(); $("#samvariance").hide();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var sumeach = sum(each);
    var mn = avg(each);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus);
    var sumeachminus2 = sum(eachminus2);
    var ansvar = sumeachminus2 / len;
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>" + "<td>" + "$x - \\mu$" + "</td>" + "<td>" + "$(x - \\mu)^2$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 3;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + each[r] + "$</td>";
        table += "<td>$" + parseFloat(eachminus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eachminus2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>$"+Math.round(sumeachminus)+"$</td>" + "<td>$"+parseFloat(sumeachminus2.toFixed(2))+"$</td>" + "</tr>";
    document.getElementById("output").innerHTML = " <table>" + table + "</table>$$ \\sigma^2 = \\frac{"+parseFloat(sumeachminus2.toFixed(2))+"}{"+len+"}  = \\boxed{"+parseFloat(ansvar.toFixed(2))+"} $$"
    MathJax.typeset();
}

function variancepop2(){
    $("#output").empty(); $("#switchpopulation").hide(); $("#switchsample").show();
    $("#desvariance").show(); $("#popvariance").hide(); $("#samvariance").show();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var sumeach = sum(each);
    var mn = avg(each);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus);
    var sumeachminus2 = sum(eachminus2);
    var ansvar = sumeachminus2 / lenmin1;
    var table = "<tr>" + "<td>" + "$$x$$" + "</td>" + "<td>" + "$$x - \\mu$$" + "</td>" + "<td>" + "$$(x - \\mu)^2$$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 3;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + each[r] + "$$</td>";
        table += "<td>$$" + eachminus[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + eachminus2[r].toFixed(2) + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>$$"+Math.round(sumeachminus)+"$$</td>" + "<td>$$"+sumeachminus2.toFixed(2)+"$$</td>" + "</tr>";
    document.getElementById("output").innerHTML = "Population Variance <br><br> <table border=1>" + table + "</table><br>$$\\sigma^2 = \\frac{\\sum{(x-\\mu)^2}}{N} = \\frac{"+sumeachminus2.toFixed(2)+"}{"+len+"}="+ansvar.toFixed(2)+"$$"
    MathJax.typeset();
}

function stdev(){
    var x = document.getElementById("vstype").value;
    if (x == "sample"){
        stdevsam()
    } else if (x == "population") {
        stdevpop()
    } 
}

function stdevsam(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").show(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The standard deviation is a measure of variability."
    document.getElementById("formulatext").innerHTML = "$ s = \\sqrt{s^2} $"
    document.getElementById("explanationtext").innerHTML = "The standard deviation is in the same units as the data."
    $("#output").empty();
    $("#desstdev").show(); $("#popstdev").show(); $("#samstdev").hide();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var sumeach = sum(each);
    var mn = avg(each);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus);
    var sumeachminus2 = sum(eachminus2);
    var ansvar = sumeachminus2 / lenmin1;
    var ansstd = Math.sqrt(ansvar);
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>" + "<td>" + "$x - \\bar{x}$" + "</td>" + "<td>" + "$(x - \\bar{x})^2$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 3;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + each[r] + "$</td>";
        table += "<td>$" + parseFloat(eachminus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eachminus2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>$"+Math.round(sumeachminus)+"$</td>" + "<td>$"+parseFloat(sumeachminus2.toFixed(2))+"$</td>" + "</tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table>$$  s^2 = \\frac{"+parseFloat(sumeachminus2.toFixed(2))+"}{"+len+"-1} = "+parseFloat(ansvar.toFixed(2))+"  $$ $$ s = \\sqrt{"+parseFloat(ansvar.toFixed(2))+"} = \\boxed{"+parseFloat(ansstd.toFixed(2))+"} $$"
    MathJax.typeset();
}

function stdevpop(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").hide(); $("#switchsample").show();
    document.getElementById("descriptiontext").innerHTML = "The standard deviation is a measure of variability."
    document.getElementById("formulatext").innerHTML = "$ \\sigma = \\sqrt{\\sigma^2} $"
    document.getElementById("explanationtext").innerHTML = "The standard deviation is in the same units as the data."
    $("#output").empty();
    $("#desstdev").show(); $("#popstdev").show(); $("#samstdev").hide();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var sumeach = sum(each);
    var mn = avg(each);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus);
    var sumeachminus2 = sum(eachminus2);
    var ansvar = sumeachminus2 / len;
    var ansstd = Math.sqrt(ansvar);
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>" + "<td>" + "$x - \\mu$" + "</td>" + "<td>" + "$(x - \\mu)^2$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 3;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + each[r] + "$</td>";
        table += "<td>$" + parseFloat(eachminus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eachminus2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>$"+Math.round(sumeachminus)+"$</td>" + "<td>$"+parseFloat(sumeachminus2.toFixed(2))+"$</td>" + "</tr>";
    document.getElementById("output").innerHTML = " <table>" + table + "</table>$$ \\sigma^2 = \\frac{"+parseFloat(sumeachminus2.toFixed(2))+"}{"+len+"}  = "+parseFloat(ansvar.toFixed(2))+" $$ $$ \\sigma = \\sqrt{"+parseFloat(ansvar.toFixed(2))+"} = \\boxed{"+parseFloat(ansstd.toFixed(2))+"} $$"
    MathJax.typeset();
}

function stdevpop2(){
    $("#output").empty(); $("#switchpopulation").hide(); $("#switchsample").show();
    $("#desstdev").show(); $("#popstdev").hide(); $("#samstdev").show();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var sumeach = sum(each);
    var mn = avg(each);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus);
    var sumeachminus2 = sum(eachminus2);
    var ansvar = sumeachminus2 / lenmin1;
    var ansstd = Math.sqrt(ansvar);
    document.getElementById("output").innerHTML = "Population Standard Deviation $$ \\begin{align} \\sigma &= \\sqrt{\\sigma^2} \\\\ &= \\sqrt{"+ansvar.toFixed(2)+"} \\\\ &= "+ansstd.toFixed(2)+"\\end{align} $$"
    MathJax.typeset();
}

function cv(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The coefficient of variation measures how large the standard deviation is relative to the mean."
    document.getElementById("formulatext").innerHTML = "$ \\text{CV} = \\left(\\dfrac{s}{\\bar{x}} \\times 100 \\right)\\% $"
    document.getElementById("explanationtext").innerHTML = "The coefficient of variation can be used to compare variability across variables."
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var sumeach = sum(each);
    var mn = avg(each);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus);
    var sumeachminus2 = sum(eachminus2);
    var ansvar = sumeachminus2 / lenmin1;
    var ansstd = Math.sqrt(ansvar);
    var stdmn = ansstd / mn;
    var anscv = (ansstd / mn) * 100
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{CV} &= \\left(\\frac{"+parseFloat(ansstd.toFixed(2))+"}{"+parseFloat(mn.toFixed(2))+"} \\times 100 \\right)\\% \\\\ &= \\boxed{"+anscv.toFixed(2)+"\\%} \\end{align} $$"
    MathJax.typeset()
}

function zscores(){
    $("#inputzscore").show(); $("#inputz").show(); $("#label1").show();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var sumeach = sum(each);
    var mn = avg(each);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus);
    var sumeachminus2 = sum(eachminus2);
    var ansvar = sumeachminus2 / lenmin1;
    var ansstd = Math.sqrt(ansvar);
    var ansz = (ansstd / mn) * 100;
    
    var zval = [];
    for (let i=0; i<len; i++){
        zval += ' <option value='+each[i]+'>'+each[i]+'</option>'
    }
    
    document.getElementById("inputzscore").innerHTML = zval
    
    MathJax.typeset()
}

function calcz(){
    $("#explanation").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "z-Scores measure how many standard deviations a value is from the mean."
    document.getElementById("formulatext").innerHTML = "$ z = \\dfrac{x-\\bar{x}}{s} $"
    document.getElementById("explanationtext").innerHTML = "A positive z-score indicates a value is greater than the mean. A negative z-score indicates a value is less than the mean."
    $("#inputzscore").show();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var sumeach = sum(each);
    var mn = avg(each);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus);
    var sumeachminus2 = sum(eachminus2);
    var ansvar = sumeachminus2 / lenmin1;
    var ansstd = Math.sqrt(ansvar);
    var ansz = (ansstd / mn) * 100;
    
    var val = document.getElementById("inputzscore").value;
    
    var zscrs = "z &= \\frac{"+ val +" - "+parseFloat(mn.toFixed(2))+"}{"+parseFloat(ansstd.toFixed(2))+"} \\\\ &= \\boxed{"+parseFloat(((val-mn)/ansstd).toFixed(2))+"}"
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} " + zscrs + " \\end{align} $$"
    MathJax.typeset()
}

function chebyshev(){
    $("#chebyshev").show(); $("#label1").hide(); $("#label2").hide(); $("#label3").show(); $("#xvalcontainer").hide();
}

function calcchebyshev(){
    $("#explanation").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "Chebyshev's theorem is used to get the percentage of values within z standard deviations of the mean."
    document.getElementById("formulatext").innerHTML = "$ 1-1/z^2 $"
    document.getElementById("explanationtext").innerHTML = "Chevbyshev's theorem works for any data regardless of its distribution."
    var mn = document.getElementById("expval").value;
    var std = document.getElementById("stdev").value;
    var min = document.getElementById("minval").value;
    var max = document.getElementById("maxval").value;
    
    var zminans = parseFloat(((min-mn)/std).toFixed(2))
    var zmaxans = parseFloat(((max-mn)/std).toFixed(2))
    
    var zmin = "z = \\frac{"+min+" - "+mn+"}{"+std+"} = "+zminans
    var zmax = "z = \\frac{"+max+" - "+mn+"}{"+std+"} = "+zmaxans
    
    
    if (Math.abs(zminans) == zmaxans) {
        document.getElementById("output").innerHTML = "$$"+zmin+"$$ $$"+zmax+"$$ $$ 1-1/"+zmaxans+"^2 ="+parseFloat((1-1/Math.pow(zmaxans,2)).toFixed(2))+" $$ At least $"+parseFloat(((1-1/Math.pow(zmaxans,2))*100).toFixed(0))+"\\% $ of the data values must be between $"+min+"$ and $"+max+"$.<br><br>"
    } else {
        document.getElementById("output").innerHTML = "Minimum and maximum values must be the same number of standard deviations from the mean.<br><br>"
    }
    
    
    MathJax.typeset()
}

function empirical(){
    $("#chebyshev").show(); $("#label1").hide(); $("#label2").hide(); $("#label3").show(); $("#xvalcontainer").hide();
}

function calcempirical(){
    $("#explanation").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The empirical rule is used to get the percentage of values within 1, 2 or 3 standard deviations of the mean when the data follows a normal distribution."
    document.getElementById("formulatext").innerHTML = "$ z = \\dfrac{x-\\bar{x}}{s} $"
    document.getElementById("explanationtext").innerHTML = "The empirical rule only works for data that follows a normal distribution."
    var mn = document.getElementById("expval").value;
    var std = document.getElementById("stdev").value;
    var min = document.getElementById("minval").value;
    var max = document.getElementById("maxval").value;
    
    var zminans = parseFloat(((min-mn)/std).toFixed(2))
    var zmaxans = parseFloat(((max-mn)/std).toFixed(2))
    
    var zmin = "z = \\frac{"+min+" - "+mn+"}{"+std+"} = "+zminans
    var zmax = "z = \\frac{"+max+" - "+mn+"}{"+std+"} = "+zmaxans
    
    
    if (Math.abs(zminans) == zmaxans && zmaxans==1) {
        document.getElementById("output").innerHTML = "$$"+zmin+"$$ $$"+zmax+"$$ Approximately $ 68 \\% $ of the data values will be between $"+min+"$ and $"+max+"$.<br><br>"
    } else if (Math.abs(zminans) == zmaxans && zmaxans==2) {
        document.getElementById("output").innerHTML = "$$"+zmin+"$$ $$"+zmax+"$$ Approximately $ 95 \\% $ of the data values will be between $"+min+"$ and $"+max+"$.<br><br>"
    } else if (Math.abs(zminans) == zmaxans && zmaxans==3) {
        document.getElementById("output").innerHTML = "$$"+zmin+"$$ $$"+zmax+"$$ Almost all of the data values will be between $"+min+"$ and $"+max+"$.<br><br>"
    } else {
        document.getElementById("output").innerHTML = "Minimum and maximum values must be the same number of standard deviations from the mean.<br><br>"
    }
    
    
    MathJax.typeset()
}

function fivenumber(){
    $("#explanation").show(); $("#label1").show(); $("#switchpopulation").hide(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The interquartile range is a measure of variability that isn't affected by extreme values."
    document.getElementById("formulatext").innerHTML = "$ \\text{IQR} = \\text{Q}_3 - \\text{Q}_1 $"
    document.getElementById("explanationtext").innerHTML = "The interquartile range only uses two values from the entire data set: the third quartile and the first quartile."
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);var len = each.length;
    var largest = Math.max.apply(null,each); var smallest = Math.min.apply(null,each)
    var eachsort = each.sort();
    
    var eachsort2 = each.sort(function(a,b) {
        return a - b;
    });
    var mid = (len-1)/2; var midr = len/2;  var midl = (len-2)/2;
    var valm = each[mid]; var valr = each[midr]; var vall = each[midl];
    var sumlr = vall + valr; var avelr = (vall + valr)/2;
    if (len % 2 != 0){
         var medianans = valm
    }else{
        var medianans = avelr
    }
    
    var indxval25 = (25/100)*len; var indxrnd25 = Math.ceil(indxval25);
    var indxval75 = (75/100)*len; var indxrnd75 = Math.ceil(indxval75);
    var val25indx = eachsort[indxval25-1]; var val25indxplus1 = eachsort[indxval25]; var val25avg = (val25indx + val25indxplus1) / 2;
    var val75indx = eachsort[indxval75-1]; var val75indxplus1 = eachsort[indxval75]; var val75avg = (val75indx + val75indxplus1) / 2;
    var indxint25 = Number.isInteger(indxval25); var indxint75 = Number.isInteger(indxval75);
    var answr25 = eachsort[indxrnd25-1]; var answr75 = eachsort[indxrnd75-1];
    var ansiqr1 = val75avg - val25avg; var ansiqr2 = answr75 - val25avg; var ansiqr3 = val75avg - answr25; var ansiqr4 = answr75 - answr25;
    if (indxint25 && indxint75){
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Minimum} &= "+smallest+" \\\\ \\text{1st Quartile} &= "+val25avg+" \\\\ \\text{Median} &= "+medianans+" \\\\ \\text{3rd Quartile} &= "+val75avg+" \\\\ \\text{Maximum} &= "+largest+" \\end{align} $$"
    } else if (indxint25 && !indxint75){
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Minimum} &= "+smallest+" \\\\ \\text{1st Quartile} &= "+val25avg+" \\\\ \\text{Median} &= "+medianans+" \\\\ \\text{3rd Quartile} &= "+answr75+" \\\\ \\text{Maximum} &= "+largest+" \\end{align} $$"
    } else if (!indxint25 && indxint75){
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Minimum} &= "+smallest+" \\\\ \\text{1st Quartile} &= "+answr25+" \\\\ \\text{Median} &= "+medianans+" \\\\ \\text{3rd Quartile} &= "+val75avg+" \\\\ \\text{Maximum} &= "+largest+" \\end{align} $$"
    }
    else{
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Minimum} &= "+smallest+" \\\\ \\text{1st Quartile} &= "+answr25+" \\\\ \\text{Median} &= "+medianans+" \\\\ \\text{3rd Quartile} &= "+answr75+" \\\\ \\text{Maximum} &= "+largest+" \\end{align} $$"
    }

    MathJax.typeset();
}

function covariance(){
    var x = document.getElementById("cctype").value;
    if (x == "sample"){
        calccov()
    } else if (x == "population") {
        calccovpop()
    } 
}

function calccov(){
    $("#explanation").show(); $("#switchpopulation").show(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The covariance is a measure of association."
    document.getElementById("formulatext").innerHTML = "$ s_{xy} = \\dfrac{\\sum(x - \\bar{x})(y - \\bar{y})}{n-1} $"
    document.getElementById("explanationtext").innerHTML = "Only the sign of the covariance can be interpreted."
    $("#output").empty();
    $("#descovariance").show(); $("#popcovariance").show(); $("#samcovariance").hide();
    var str = document.getElementById("values").value;
    var str2 = document.getElementById("values2").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var each2 = str2.split(",").map(Number); var len2 = each2.length; var len2min1 = len2 - 1;
    var sumeach = sum(each); var sumeach2 = sum(each2);
    var mn = avg(each); var mn2 = avg(each2);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var each2minus = each2.map( function(value) {
        return value - mn2;
    } );
    var eacheach2 = [];
    for(var i = 0; i < len; i++){
        eacheach2[i] = eachminus[i] * each2minus[i]
    }
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var each2minus2 = each2minus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus); var sumeach2minus = sum(each2minus);
    var sumeacheach2 = sum(eacheach2);
    var sumeachminus2 = sum(eachminus2); var sumeach2minus2 = sum(each2minus2)
    var ansvar = sumeachminus2 / lenmin1; var ansvar2 = sumeach2minus2 / len2min1;
    var anscov = sumeacheach2 / lenmin1;
    if (anscov > 0){
        var interpret = "Interpretation: There is a positive linear relationship between x and y."
    } else if (anscov < 0){
        var interpret = "Interpretation: There is a negative linear relationship between x and y."
    } else {
        var interpret = "Interpretation: There is <u>no relationship between x and y."
    }
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$x - \\bar{x}$" + "</td>" + "<td>" + "$y - \\bar{y}$" + "</td>"+ "<td>" + "$(x - \\bar{x})(y - \\bar{y})$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 5;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + each[r] + "$</td>";
        table += "<td>$" + each2[r] + "$</td>";
        table += "<td>$" + parseFloat(eachminus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(each2minus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eacheach2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sumeachminus)+"$</td>"+ "<td>$"+Math.round(sumeach2minus)+"$</td>" +"<td>$"+parseFloat(sumeacheach2.toFixed(2))+"$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> $$ s_{xy} = \\frac{"+parseFloat(sumeacheach2.toFixed(2))+"}{"+len+"-1} = \\boxed{"+parseFloat(anscov.toFixed(2))+"} $$" + interpret
    MathJax.typeset();
}

function covariancepop(){
    $("#input2").show(); $("#label2").show(); $("#label1").hide();
}

function calccovpop(){
    $("#explanation").show(); $("#switchpopulation").hide(); $("#switchsample").show();
    document.getElementById("descriptiontext").innerHTML = "The covariance is a measure of association."
    document.getElementById("formulatext").innerHTML = "$ \\sima_{xy} = \\frac{\\sum(x - \\mu_x)(y - \\mu_y)}{N} $"
    document.getElementById("explanationtext").innerHTML = "Only the sign of the covariance can be interpreted."
    $("#output").empty();
    $("#descovariance").show(); $("#popcovariance").show(); $("#samcovariance").hide();
    var str = document.getElementById("values").value;
    var str2 = document.getElementById("values2").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var each2 = str2.split(",").map(Number); var len2 = each2.length; var len2min1 = len2 - 1;
    var sumeach = sum(each); var sumeach2 = sum(each2);
    var mn = avg(each); var mn2 = avg(each2);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var each2minus = each2.map( function(value) {
        return value - mn2;
    } );
    var eacheach2 = [];
    for(var i = 0; i < len; i++){
        eacheach2[i] = eachminus[i] * each2minus[i]
    }
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var each2minus2 = each2minus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus); var sumeach2minus = sum(each2minus);
    var sumeacheach2 = sum(eacheach2);
    var sumeachminus2 = sum(eachminus2); var sumeach2minus2 = sum(each2minus2)
    var ansvar = sumeachminus2 / lenmin1; var ansvar2 = sumeach2minus2 / len2min1;
    var anscov = sumeacheach2 / len;
    if (anscov > 0){
        var interpret = "Interpretation: There is a positive linear relationship between x and y."
    } else if (anscov < 0){
        var interpret = "Interpretation: There is a negative linear relationship between x and y."
    } else {
        var interpret = "Interpretation: There is no relationship between x and y."
    }
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$x - \\mu_x$" + "</td>" + "<td>" + "$y - \\mu_y$" + "</td>"+ "<td>" + "$(x - \\mu_x)(y - \\mu_y)$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 5;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + each[r] + "$</td>";
        table += "<td>$" + each2[r] + "$</td>";
        table += "<td>$" + parseFloat(eachminus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(each2minus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eacheach2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sumeachminus)+"$</td>"+ "<td>$"+Math.round(sumeach2minus)+"$</td>" +"<td>$"+parseFloat(sumeacheach2.toFixed(2))+"$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> $$ \\sigma_{xy} = \\frac{"+parseFloat(sumeacheach2.toFixed(2))+"}{"+len+"} = \\boxed{"+parseFloat(anscov.toFixed(2))+"}  $$" + interpret
    MathJax.typeset();
}

function calccovpop2(){
    $("#output").empty(); $("#switchpopulation").hide(); $("#switchsample").show();
    $("#descovariance").show(); $("#popcovariance").hide(); $("#samcovariance").show();
    var str = document.getElementById("values").value;
    var str2 = document.getElementById("values2").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var each2 = str2.split(",").map(Number); var len2 = each2.length; var len2min1 = len2 - 1;
    var sumeach = sum(each); var sumeach2 = sum(each2);
    var mn = avg(each); var mn2 = avg(each2);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var each2minus = each2.map( function(value) {
        return value - mn2;
    } );
    var eacheach2 = [];
    for(var i = 0; i < len; i++){
        eacheach2[i] = eachminus[i] * each2minus[i]
    }
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var each2minus2 = each2minus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus); var sumeach2minus = sum(each2minus);
    var sumeacheach2 = sum(eacheach2);
    var sumeachminus2 = sum(eachminus2); var sumeach2minus2 = sum(each2minus2)
    var ansvar = sumeachminus2 / lenmin1; var ansvar2 = sumeach2minus2 / len2min1;
    var anscov = sumeacheach2 / lenmin1;
    if (anscov > 0){
        var interpret = "<b>Interpretation:</b> There is a positive linear relationship between x and y."
    } else if (anscov < 0){
        var interpret = "<b>Interpretation:</b> There is a negative linear relationship between x and y."
    } else {
        var interpret = "<b>Interpretation:</b> There is no relationship between x and y."
    }
    var table = "<tr>" + "<td>" + "$$x$$" + "</td>"+ "<td>" + "$$y$$" + "</td>" + "<td>" + "$$x - \\mu_x$$" + "</td>" + "<td>" + "$$y - \\mu_y$$" + "</td>"+ "<td>" + "$$(x - \\mu_x)(y - \\mu_y)$$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 5;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + each[r] + "$$</td>";
        table += "<td>$$" + each2[r] + "$$</td>";
        table += "<td>$$" + eachminus[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + each2minus[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + eacheach2[r].toFixed(2) + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>$$"+Math.round(sumeachminus)+"$$</td>"+ "<td>$$"+Math.round(sumeach2minus)+"$$</td>" +"<td>$$"+sumeacheach2.toFixed(2)+"$$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "Population Covariance <br><br> <table border=1>" + table + "</table><br> $$\\sigma_{xy} = \\frac{(x - \\mu_x)(y - \\mu_y)}{N} = \\frac{"+sumeacheach2.toFixed(2)+"}{"+len+"}="+anscov.toFixed(2)+"$$" + interpret + "<br><br>" + " "
    MathJax.typeset();
}

function correlation(){
    var x = document.getElementById("cctype").value;
    if (x == "sample"){
        calccor()
    } else if (x == "population") {
        calccorpop()
    } 
}

function calccor(){
    $("#explanation").show(); $("#switchpopulation").show(); $("#switchsample").hide();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient is a measure of association."
    document.getElementById("formulatext").innerHTML = "$ r_{xy} = \\dfrac{s_{xy}}{s_x s_y} $"
    document.getElementById("explanationtext").innerHTML = "Both the sign and the size of the correlation coefficient can be interpreted."
    $("#output").empty();
    $("#descorrelation").show(); $("#popcorrelation").show(); $("#samcorrelation").hide();
    var str = document.getElementById("values").value;
    var str2 = document.getElementById("values2").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var each2 = str2.split(",").map(Number); var len2 = each2.length; var len2min1 = len2 - 1;
    var sumeach = sum(each); var sumeach2 = sum(each2);
    var mn = avg(each); var mn2 = avg(each2);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var each2minus = each2.map( function(value) {
        return value - mn2;
    } );
    var eacheach2 = [];
    for(var i = 0; i < len; i++){
        eacheach2[i] = eachminus[i] * each2minus[i]
    }
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var each2minus2 = each2minus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus); var sumeach2minus = sum(each2minus);
    var sumeacheach2 = sum(eacheach2);
    var sumeachminus2 = sum(eachminus2); var sumeach2minus2 = sum(each2minus2)
    var ansvar = sumeachminus2 / lenmin1; var ansvar2 = sumeach2minus2 / len2min1;
    var ansstd = Math.sqrt(ansvar); var ansstd2 = Math.sqrt(ansvar2)
    var anscov = sumeacheach2 / lenmin1;
    var anscor = anscov / (ansstd * ansstd2);
    if (anscov / (ansstd * ansstd2) == 1){
        var intinside = "a perfect positive"
    } else if (anscov / (ansstd * ansstd2) >= .75 && anscov / (ansstd * ansstd2) < 1){
        var intinside = "a strong positive"
    } else if (anscov / (ansstd * ansstd2) > .25 && anscov / (ansstd * ansstd2) < .75){
        var intinside = "a positive"
    } else if (anscov / (ansstd * ansstd2) > 0 && anscov / (ansstd * ansstd2) < .25){
        var intinside = "a weak positive"
    } else if (anscov / (ansstd * ansstd2) < 0 && anscov / (ansstd * ansstd2) >= -.25){
        var intinside = "a weak negative"
    } else if (anscov / (ansstd * ansstd2) < -.25 && anscov / (ansstd * ansstd2) > -.75){
        var intinside = "a negative"
    } else if (anscov / (ansstd * ansstd2) <= -.75 && anscov / (ansstd * ansstd2) > -1){
        var intinside = "a strong negative"
    } else if (anscov / (ansstd * ansstd2) == -1){
        var intinside = "a perfect negative"
    } else {
        var intinside = "no"
    }
    var interpret = "Interpretation: There is "+ intinside +" linear relationship between x and y."
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$x - \\bar{x}$" + "</td>" + "<td>" + "$y - \\bar{y}$" + "</td>" + "<td>" + "$(x - \\bar{x})(y - \\bar{y})$" + "<td>" + "$(x - \\bar{x})^2$" + "</td>"+ "<td>" + "$(y - \\bar{y})^2$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 6;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + each[r] + "$</td>";
        table += "<td>$" + each2[r] + "$</td>";
        table += "<td>$" + parseFloat(eachminus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(each2minus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eacheach2[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eachminus2[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(each2minus2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sumeachminus)+"$</td>"+ "<td>$"+Math.round(sumeach2minus)+"$</td>"+ "<td>$" +parseFloat(sumeacheach2.toFixed(2))+"$</td>" +"<td>$"+parseFloat(sumeachminus2.toFixed(2))+"$</td>"+"<td>$"+parseFloat(sumeach2minus2.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> $$ s_x = \\sqrt{\\frac{"+parseFloat(sumeachminus2.toFixed(2))+"}{"+len+"-1}} = "+parseFloat(ansstd.toFixed(2))+" \\ \\quad  s_y = \\sqrt{\\frac{"+parseFloat(sumeach2minus2.toFixed(2))+"}{"+len+"-1}} = "+ parseFloat(ansstd2.toFixed(2)) +" $$ $$ s_{xy} = \\frac{"+parseFloat(sumeacheach2.toFixed(2))+"}{"+len+"-1} = "+parseFloat(anscov.toFixed(2))+" \\ \\quad  r_{xy} = \\frac{"+parseFloat(anscov.toFixed(2))+"}{"+parseFloat(ansstd.toFixed(2))+"\\times"+parseFloat(ansstd2.toFixed(2))+"} = \\boxed{"+ parseFloat((anscov / (ansstd * ansstd2)).toFixed(2)) +"}  $$" + interpret
    MathJax.typeset();
}

function correlationpop(){
    $("#input2").show(); $("#label2").show(); $("#label1").hide();
}

function calccorpop(){
    $("#explanation").show(); $("#switchpopulation").hide(); $("#switchsample").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient is a measure of association."
    document.getElementById("formulatext").innerHTML = "$ \\rho_{xy} = \\dfrac{\\sigma_{xy}}{\\sigma_x \\sigma_y} $"
    document.getElementById("explanationtext").innerHTML = "Both the sign and the size of the correlation coefficient can be interpreted."
    $("#output").empty();
    $("#descorrelation").show(); $("#popcorrelation").show(); $("#samcorrelation").hide();
    var str = document.getElementById("values").value;
    var str2 = document.getElementById("values2").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var each2 = str2.split(",").map(Number); var len2 = each2.length; var len2min1 = len2 - 1;
    var sumeach = sum(each); var sumeach2 = sum(each2);
    var mn = avg(each); var mn2 = avg(each2);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var each2minus = each2.map( function(value) {
        return value - mn2;
    } );
    var eacheach2 = [];
    for(var i = 0; i < len; i++){
        eacheach2[i] = eachminus[i] * each2minus[i]
    }
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var each2minus2 = each2minus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus); var sumeach2minus = sum(each2minus);
    var sumeacheach2 = sum(eacheach2);
    var sumeachminus2 = sum(eachminus2); var sumeach2minus2 = sum(each2minus2)
    var ansvar = sumeachminus2 / len; var ansvar2 = sumeach2minus2 / len2;
    var ansstd = Math.sqrt(ansvar); var ansstd2 = Math.sqrt(ansvar2)
    var anscov = sumeacheach2 / len;
    var anscor = anscov / (ansstd * ansstd2);
    if (anscov / (ansstd * ansstd2) == 1){
        var intinside = "a perfect positive"
    } else if (anscov / (ansstd * ansstd2) >= .75 && anscov / (ansstd * ansstd2) < 1){
        var intinside = "a strong positive"
    } else if (anscov / (ansstd * ansstd2) > .25 && anscov / (ansstd * ansstd2) < .75){
        var intinside = "a positive"
    } else if (anscov / (ansstd * ansstd2) > 0 && anscov / (ansstd * ansstd2) < .25){
        var intinside = "a weak positive"
    } else if (anscov / (ansstd * ansstd2) < 0 && anscov / (ansstd * ansstd2) >= -.25){
        var intinside = "a weak negative"
    } else if (anscov / (ansstd * ansstd2) < -.25 && anscov / (ansstd * ansstd2) > -.75){
        var intinside = "a negative"
    } else if (anscov / (ansstd * ansstd2) <= -.75 && anscov / (ansstd * ansstd2) > -1){
        var intinside = "a strong negative"
    } else if (anscov / (ansstd * ansstd2) == -1){
        var intinside = "a perfect negative"
    } else {
        var intinside = "no"
    }
    var interpret = "Interpretation: There is "+ intinside +" linear relationship between x and y."
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$x$" + "</td>"+ "<td>" + "$y$" + "</td>" + "<td>" + "$x - \\mu_x$" + "</td>" + "<td>" + "$y - \\mu_y$" + "</td>" + "<td>" + "$(x - \\mu_x)(y - \\mu_y)$" + "</td>" + "<td>" + "$(x - \\mu_x)^2$" + "</td>"+ "<td>" + "$(y - \\mu_y)^2$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 6;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + each[r] + "$</td>";
        table += "<td>$" + each2[r] + "$</td>";
        table += "<td>$" + parseFloat(eachminus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(each2minus[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eacheach2[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(eachminus2[r].toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(each2minus2[r].toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+Math.round(sumeachminus)+"$</td>"+ "<td>$"+Math.round(sumeach2minus)+"$</td>"+"<td>$"+parseFloat(sumeacheach2.toFixed(2))+"$</td>" +"<td>$"+parseFloat(sumeachminus2.toFixed(2))+"$</td>"+"<td>$"+parseFloat(sumeach2minus2.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = "<table>" + table + "</table> $$ \\sigma_x = \\sqrt{\\frac{"+parseFloat(sumeachminus2.toFixed(2))+"}{"+len+"}} = "+parseFloat(ansstd.toFixed(2))+" \\ \\quad  \\sigma_y = \\sqrt{\\frac{"+parseFloat(sumeach2minus2.toFixed(2))+"}{"+len+"}} = "+ parseFloat(ansstd2.toFixed(2)) +" $$ $$ \\sigma_{xy} = \\frac{"+parseFloat(sumeacheach2.toFixed(2))+"}{"+len+"} = "+parseFloat(anscov.toFixed(2))+"  \\quad \\rho_{xy} = \\frac{"+parseFloat(anscov.toFixed(2))+"}{"+parseFloat(ansstd.toFixed(2))+"\\times"+parseFloat(ansstd2.toFixed(2))+"} = \\boxed{"+ parseFloat((anscov / (ansstd * ansstd2)).toFixed(2)) +"} $$" + interpret
    MathJax.typeset();
}

function calccorpop2(){
    $("#output").empty(); $("#switchpopulation").hide(); $("#switchsample").show();
    $("#descorrelation").show(); $("#popcorrelation").hide(); $("#samcorrelation").show();
    var str = document.getElementById("values").value;
    var str2 = document.getElementById("values2").value;
    var each = str.split(",").map(Number); var len = each.length; var lenmin1 = len - 1;
    var each2 = str2.split(",").map(Number); var len2 = each2.length; var len2min1 = len2 - 1;
    var sumeach = sum(each); var sumeach2 = sum(each2);
    var mn = avg(each); var mn2 = avg(each2);
    var eachminus = each.map( function(value) {
        return value - mn;
    } );
    var each2minus = each2.map( function(value) {
        return value - mn2;
    } );
    var eacheach2 = [];
    for(var i = 0; i < len; i++){
        eacheach2[i] = eachminus[i] * each2minus[i]
    }
    var eachminus2 = eachminus.map( function(value) {
        return value * value;
    } );
    var each2minus2 = each2minus.map( function(value) {
        return value * value;
    } );
    var sumeachminus = sum(eachminus); var sumeach2minus = sum(each2minus);
    var sumeacheach2 = sum(eacheach2);
    var sumeachminus2 = sum(eachminus2); var sumeach2minus2 = sum(each2minus2)
    var ansvar = sumeachminus2 / lenmin1; var ansvar2 = sumeach2minus2 / len2min1;
    var ansstd = Math.sqrt(ansvar); var ansstd2 = Math.sqrt(ansvar2)
    var anscov = sumeacheach2 / lenmin1;
    var anscor = anscov / (ansstd * ansstd2);
    if (anscor = 1){
        var intinside = "a perfect positive"
    } else if (anscor2 >= .75 && anscor2 < 1){
        var intinside = "a strong positive"
    } else if (anscor2 > .25 && anscor2 < .75){
        var intinside = "a positive"
    } else if (anscor2 > 0 && anscor2 < .25){
        var intinside = "a weak positive"
    } else if (anscor2 < 0 && anscor2 >= -.25){
        var intinside = "a weak negative"
    } else if (anscor2 < -.25 && anscor >2 -.75){
        var intinside = "a negative"
    } else if (anscor2 <= -.75 && anscor2 > -1){
        var intinside = "a strong negative"
    } else if (anscor2 = -1){
        var intinside = "a perfect negative"
    } else {
        var intinside = "no"
    }
    var interpret = "$$ \\text{Interpretation: "+ intinside +" linear relationship} $$"
    var table = "<table border=1>" +"<tr>" + "<td>" + "$$x$$" + "</td>"+ "<td>" + "$$y$$" + "</td>" + "<td>" + "$$x - \\mu_x$$" + "</td>" + "<td>" + "$$y - \\mu_y$$" + "</td>"+ "<td>" + "$$(x - \\mu_x)^2$$" + "</td>"+ "<td>" + "$$(y - \\mu_y)^2$$" + "</td>" + "</tr>";
    var rows = len;
    var cols = 6;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + each[r] + "$$</td>";
        table += "<td>$$" + each2[r] + "$$</td>";
        table += "<td>$$" + eachminus[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + each2minus[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + eachminus2[r].toFixed(2) + "$$</td>";
        table += "<td>$$" + each2minus2[r].toFixed(2) + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>$$"+Math.round(sumeachminus)+"$$</td>"+ "<td>$$"+Math.round(sumeach2minus)+"$$</td>" +"<td>$$"+sumeachminus2.toFixed(2)+"$$</td>"+"<td>$$"+sumeach2minus2.toFixed(2)+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = "Population Correlation Coefficient $$ \\begin{align} \\sigma_x &= \\sqrt{\\frac{\\sum{(x-\\mu_x)^2}}{N}} = \\sqrt{\\frac{"+ sumeachminus2.toFixed(2) +"}{"+ len +"}} = \\sqrt{"+ ansvar.toFixed(2) +"} ="+ ansstd.toFixed(2) +"\\\\ \\sigma_y &= \\sqrt{\\frac{\\sum{(y-\\mu_y)^2}}{N}} = \\sqrt{\\frac{"+ sumeach2minus2.toFixed(2) +"}{"+ len2 +"}} = \\sqrt{"+ ansvar2.toFixed(2) +"}="+ ansstd2.toFixed(2)+"\\\\ \\sigma_{xy} &= "+anscov.toFixed(2)+"\\\\ \\rho_{xy} &= \\frac{\\sigma_{xy}}{\\sigma_x \\sigma_y} = \\frac{"+anscov.toFixed(2)+"}{"+ansstd.toFixed(2)+"*"+ansstd2.toFixed(2)+"} = "+ (anscov / (ansstd * ansstd2)).toFixed(2) +"  \\end{align} $$" + interpret + "<br><br>" + " "
    MathJax.typeset();
}

function meanexp() {
    document.getElementById("output2").innerHTML = "The mean is calculated by summing up the values and dividing by the number of values."
}

function examplexvalues(){
    document.getElementById('values').value="12, 18, 15, 13, 17"
}

function examplexvalues2(){
    document.getElementById('values').value="25, 22, 18, 17, 31, 33, 26, 20"
}

function examplevalues3(){
    document.getElementById('values').value="6, 7, 10, 4, 12"
    document.getElementById('values2').value="46, 55, 33, 61, 30"
}

function examplevalues4(){
    document.getElementById('values').value="4, 12, 11, 18, 25"
    document.getElementById('values2').value="5, 8, 7, 15, 14"
}

function examplevalues5(){
    document.getElementById('expval').value="20"
    document.getElementById('stdev').value="3"
    document.getElementById('minval').value="14"
    document.getElementById('maxval').value="26"
}

function examplevalues6(){
    document.getElementById('expval').value="20"
    document.getElementById('stdev').value="3"
    document.getElementById('minval').value="11"
    document.getElementById('maxval').value="29"
}

function examplevalues7(){
    document.getElementById('values').value="12, 18, 15, 13, 17"
    document.getElementById('weightsvalues').value="4, 2, 3, 4, 2"
}

function examplevalues8(){
    document.getElementById('values').value="25, 22, 18, 17, 31, 33, 26, 20"
    document.getElementById('weightsvalues').value="7, 9, 4, 6, 5, 11, 8, 6"
}