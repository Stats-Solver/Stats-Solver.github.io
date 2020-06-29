$("#inputqu").hide();$("#slidecontainer").hide();$("#input2").hide();$("#inputzscore").hide(); $("#inputz").hide(); 
$(".description").hide(); $(".population").hide(); $(".sample").hide(); $("#explanation").hide(); $("#label2").hide();
$("#chebyshev").hide(); $("#label3").hide();

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
    $("#inputqu").hide();$("#slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); $("#label2").hide();  $("#inputz").hide();
    $("#chebyshev").hide(); $("#label3").hide();
    var x = document.getElementById("stat").value;
    if (x == "percentiles") {
        percentiles()
    } else if (x == "quartiles") {
        quartiles()
    } else if (x == "zscores") {
        zscores()
    } else if (x == "chebyshev") {
        chebyshev()
    } else if (x == "empirical") {
        empirical()
    } else if (x == "covariance") {
        covariance()
    } else if (x == "correlation") {
        correlation()
    } 
}

function stat(){
    $("#explanation").hide();
    $("#inputqu").hide(); $("#inputzscore").hide();
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#output").empty();
    var x = document.getElementById("stat").value;
    if (x == "mean"){
        mean()
    } else if (x == "median"){
        median()
    } else if (x == "mode") {
        mode()
    } else if (x == "percentiles") {
        calcper()
    } else if (x == "quartiles") {
        calcquart()
    } else if (x == "range") {
        range()
    } else if (x == "iqr") {
        iqr()
    } else if (x == "variance") {
        variance()
    } else if (x == "stdev") {
        stdev()
    } else if (x == "cv") {
        cv()
    } else if (x == "zscores") {
        calcz()
    } else if (x == "chebyshev") {
        calcchebyshev()
    } else if (x == "empirical") {
        calcempirical()
    } else if (x == "covariance") {
        calccov()
    } else if (x == "correlation") {
        calccor()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function mean(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean, or average, is the most commonly used measure of central location."
    document.getElementById("formulatext").innerHTML = "$$ \\bar{x} = \\frac{\\sum{x}}{n} $$"
    document.getElementById("explanationtext").innerHTML = "$$ \\sum{x} = x_1 + x_2 + \\cdots + x_n $$"
    $("#output").empty();
    $("#desmean").show(); $("#popmean").show(); $("#sammean").hide();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var adds = each[0];  var avgeach = avg(each);  
    for (let i=1; i<len; i++){
        adds += "+" + each[i]
    }
    document.getElementById("output").innerHTML+= "$$ \\begin{align} \\bar{x} &= \\frac{\\sum{x}}{n} \\\\ &= \\frac{" + adds + "}{" + len + "} \\\\ &=  \\frac{" + sum(each) + "}{" + len + "} \\\\ &= \\boxed{" + parseFloat(avgeach.toFixed(2)) + "} \\end{align}$$"
    MathJax.typeset();
}

function meanpop(){
    $("#output").empty(); $("#label1").show();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var adds = each[0];  var avgeach = avg(each);  
    for (let i=1; i<len; i++){
        adds += "+" + each[i]
    }
    document.getElementById("output").innerHTML+= "Population Mean $$\\begin{align} \\mu &= \\frac{\\sum{x}}{N} \\\\ &= \\frac{" + adds + "}{" + len + "} \\\\ &=  \\frac{" + sum(each) + "}{" + len + "} \\\\ &= " + avgeach.toFixed(2) + " \\end{align}$$"
    MathJax.typeset();
}

function median(){
    $("#explanation").show(); $("#label1").show();
    document.getElementById("descriptiontext").innerHTML = "The median is a measure of central location that is useful when there are extreme values in the data."
    document.getElementById("formulatext").innerHTML = "Step 1: Arrange the data in ascending order.<br>Step 2: a. If there are an odd number of values, take the middle value. <br> b. If there are an even number of values, average the two middle values."
    document.getElementById("explanationtext").innerHTML = "The median is the middle value when the data is sorted from smallest to largest."
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var eachsort = each.sort(function(a,b) {
        return a - b;
    });
    var mid = (len-1)/2; var midr = len/2;  var midl = (len-2)/2;
    var valm = each[mid]; var valr = each[midr]; var vall = each[midl];
    var sumlr = vall + valr; var avelr = (vall + valr)/2;
    if (len % 2 != 0){
         document.getElementById("output").innerHTML = " <b>Step 1:</b> Arrange the data in ascending order.$$"+eachsort+"$$ <b>Step 2:</b> Since there are an <u>odd number</u> of values, take the middle value.$$\\text{Median} = \\boxed{" + valm + "} $$"
   
    }else{
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in ascending order.$$"+eachsort+"$$ <b>Step 2:</b> Since there are an <u>even number</u> of values, average the two middle values.$$\\text{Median} = " + "\\frac{" + vall  + "+" + valr + "}{2} = \\boxed{" + avelr + "} $$"
    }
    MathJax.typeset();
}

function mode(){
    $("#explanation").show(); $("#label1").show();
    document.getElementById("descriptiontext").innerHTML = "The mode is a measure of central location."
    document.getElementById("formulatext").innerHTML = "The mode is the value that occurs with the highest frequency."
    document.getElementById("explanationtext").innerHTML = "If there are two modes, the data is said to be bi-modal. If there are more than two modes, the data is said to be multi-modal."
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "x" + "</td>" + "<td>" + "Frequency" + "</td>" + "</tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>" + eachonesort[r] + "</td>";
        table += "<td>" + counts[r] + "</td>";
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
        document.getElementById("output").innerHTML = "<table>" + table + "</table> $$\\boxed{\\text{No Mode}}$$"
    } else if (themodes.length == 1) {
        document.getElementById("output").innerHTML = "<table>" + table + "</table> $$\\text{Mode} = \\boxed{" + themodes + "}$$"
    }
    else {
        document.getElementById("output").innerHTML = "<table>" + table + "</table> $$\\text{Modes} = \\boxed{" + themodes + "}$$"
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
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "Approximately p% of the data is less than the p-th percentile. Approximately (1-p)% of the data is greater than the p-th percentile."
    document.getElementById("formulatext").innerHTML = "Step 1: Arrange the data in ascending order. <br> Step 2: Calculate the index.$$i = \\left(\\frac{p}{100}\\right)n$$ Step 3: a. If the index is not an integer, round up and take the value in that position. <br> b. If the index is an integer, average the values in positions i and i + 1."
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
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in ascending order.$$"+eachsort+"$$<b>Step 2:</b> Calculate the index.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=\\underline{" + parseFloat(indxval.toFixed(2)) + "}$$ <b>Step 3:</b> Since the index is an <u>integer</u>, average values in positions i = "+indxval + " and i + 1 = " + indxvalplus1 + ".$$ \\text{"+val+suff+" Percentile} = " + "\\frac{" + valindx  + "+" + valindxplus1 + "}{2} = \\boxed{" + valavg + "} $$"
   
    }else{
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in ascending order.$$"+eachsort+"$$<b>Step 2:</b> Calculate the index.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=\\underline{" + parseFloat(indxval.toFixed(2)) + "}$$ <b>Step 3:</b> Since the index is <u>not an integer</u>, round up to " + indxrnd + " and take the value in that position.$$ \\text{"+val+suff+" Percentile} = \\boxed{" + answr + "} $$"
    }
    MathJax.typeset();
}

function quartiles(){
    $("#inputqu").show(); $("#label1").show();
}

function calcquart(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The first quartile is the 25th percentile, the second quartile is the 50th percentile and the third quartile is the 75th percentile."
    document.getElementById("formulatext").innerHTML = "Step 1: Arrange the data in ascending order. <br> Step 2: Calculate the index.$$i = \\left(\\frac{p}{100}\\right)n$$ Step 3: a. If the index is not an integer, round up and take the value in that position. <br> b. If the index is an integer, average the values in positions i and i + 1."
    document.getElementById("explanationtext").innerHTML = "The second quartile is the median."
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
        var quartnum = "\\text{Q}_1"
        var quartname = "First"
    } else if (val == 50){
        var quartnum = "\\text{Q}_2"
        var quartname = "Second"
    } else if (val == 75){
        var quartnum = "\\text{Q}_3"
        var quartname = "Third"
    } else {
        var quartnum = ""
    }
    if (indxint){
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in ascending order.$$"+eachsort+"$$<b>Step 2:</b> Calculate the index.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=\\underline{" + parseFloat(indxval.toFixed(2)) + "}$$ <b>Step 3:</b> Since the index is an <u>integer</u>, average values in positions i = "+indxval + " and i + 1 = " + indxvalplus1 + ".$$ "+quartnum+" = " + "\\frac{" + valindx  + "+" + valindxplus1 + "}{2} = \\boxed{" + valavg + "} $$"
   
    }else{
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in ascending order.$$"+eachsort+"$$<b>Step 2:</b> Calculate the index.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=\\underline{" + parseFloat(indxval.toFixed(2)) + "}$$ <b>Step 3:</b> Since the index is <u>not an integer</u>, round up to " + indxrnd + " and take the value in that position.$$ "+quartnum+" = \\boxed{" + answr + "} $$"
    }
    MathJax.typeset();
}

function range(){
    $("#explanation").show(); $("#label1").show();
    document.getElementById("descriptiontext").innerHTML = "The range is the simplest measure of variability as it only uses two values: largest and smallest."
    document.getElementById("formulatext").innerHTML = "$$ \\text{Range} = \\text{Largest Value} - \\text{Smallest Value} $$"
    document.getElementById("explanationtext").innerHTML = "The range is susceptible to being affected by extreme values."
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);
    var largest = Math.max(...each); var smallest = Math.min(...each)
    var rng = largest - smallest
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Range} &= \\text{Largest Value} - \\text{Smallest Value} \\\\ &= "+largest+" - "+smallest+ "\\\\ &= \\boxed{" + rng + "} \\end{align} $$"
    MathJax.typeset();
}

function iqr(){
    $("#explanation").show(); $("#label1").show();
    document.getElementById("descriptiontext").innerHTML = "The interquartile range is a measure of variability that isn't affected by extreme values."
    document.getElementById("formulatext").innerHTML = "$$ \\text{IQR} = \\text{Q}_3 - \\text{Q}_1 $$"
    document.getElementById("explanationtext").innerHTML = "The interquartile range only uses two values from the entire data set: the third quartile and the first quartile."
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
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{IQR} &= \\text{Q}_3 - \\text{Q}_1 \\\\ &= "+val75avg+" - "+val25avg+" \\\\ &= \\boxed{"+ansiqr1+"} \\end{align} $$"
    } else if (indxint25 && !indxint75){
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{IQR} &= \\text{Q}_3 - \\text{Q}_1 \\\\ &= "+answr75+" - "+val25avg+" \\\\ &= \\boxed{"+ansiqr2+"} \\end{align} $$"
    } else if (!indxint25 && indxint75){
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{IQR} &= \\text{Q}_3 - \\text{Q}_1 \\\\ &= "+val75avg+" - "+answr25+" \\\\ &= \\boxed{"+ansiqr3+"} \\end{align} $$"
    }
    else{
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{IQR} &= \\text{Q}_3 - \\text{Q}_1 \\\\ &= "+answr75+" - "+answr25+" \\\\ &= \\boxed{"+ansiqr4+"} \\end{align} $$"
    }

    MathJax.typeset();
}

function variance(){
    $("#explanation").show(); $("#label1").show();
    document.getElementById("descriptiontext").innerHTML = "The variances is a measure of variability that uses all of the data."
    document.getElementById("formulatext").innerHTML = "$$ s^2 = \\frac{\\sum{(x-\\bar{x})^2}}{n-1} $$"
    document.getElementById("explanationtext").innerHTML = "Since calculation of the variance involves squaring the deviations about the mean, it isn't in the same units as the original data."
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
    document.getElementById("output").innerHTML = "<table>" + table + "</table>$$s^2 = \\frac{"+parseFloat(sumeachminus2.toFixed(2))+"}{"+len+"-1}= \\boxed{"+parseFloat(ansvar.toFixed(2))+"} $$"
    MathJax.typeset();
}

function variancepop(){
    $("#output").empty();
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
    $("#explanation").show(); $("#label1").show();
    document.getElementById("descriptiontext").innerHTML = "The standard deviation is a measure of variability that uses all of the data and is in the same units as the original data."
    document.getElementById("formulatext").innerHTML = "$$ s = \\sqrt{s^2} $$"
    document.getElementById("explanationtext").innerHTML = "The standard deviation is the square root of the variance."
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} s &= \\sqrt{s^2} \\\\ &= \\sqrt{"+parseFloat(ansvar.toFixed(2))+"} \\\\ &= \\boxed{"+parseFloat(ansstd.toFixed(2))+"}\\end{align} $$"
    MathJax.typeset();
}

function stdevpop(){
    $("#output").empty();
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
    $("#explanation").show(); $("#label1").show();
    document.getElementById("descriptiontext").innerHTML = "The coefficient of variation measures how large the standard deviation is relative to the mean."
    document.getElementById("formulatext").innerHTML = "$$ \\text{CV} = \\left(\\frac{s}{\\bar{x}} \\times 100 \\right)\\% $$"
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{CV} &= \\left(\\frac{s}{\\bar{x}} \\times 100 \\right)\\% \\\\ &= \\left(\\frac{"+parseFloat(ansstd.toFixed(2))+"}{"+parseFloat(mn.toFixed(2))+"} \\times 100 \\right)\\% \\\\ &= \\boxed{"+anscv.toFixed(2)+"\\%} \\end{align} $$"
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
    
    var zval = [' <option>Choose One</option>'];
    for (let i=0; i<len; i++){
        zval += ' <option value='+each[i]+'>'+each[i]+'</option>'
    }
    
    document.getElementById("inputzscore").innerHTML = zval
    
    MathJax.typeset()
}

function calcz(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "z-Scores measure how many standard deviations a value is from the mean."
    document.getElementById("formulatext").innerHTML = "$$ z_x = \\frac{x-\\bar{x}}{s} $$"
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
    
    var zscrs = "z_{"+val+"} &= \\frac{"+val+"-\\bar{x}}{s} \\\\ &= \\frac{"+ val +" - "+parseFloat(mn.toFixed(2))+"}{"+parseFloat(ansstd.toFixed(2))+"} \\\\ &= \\boxed{"+parseFloat(((val-mn)/ansstd).toFixed(2))+"}"
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} " + zscrs + " \\end{align} $$"
    MathJax.typeset()
}

function chebyshev(){
    $("#chebyshev").show(); $("#label1").hide(); $("#label2").hide(); $("#label3").show();
}

function calcchebyshev(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "Chebyshev's theorem is used to get the percentage of values within z standard deviations of the mean."
    document.getElementById("formulatext").innerHTML = "At least (1-1/z^2) of the data values must be within z standard deviations of the mean, where z is any value greater than 1."
    document.getElementById("explanationtext").innerHTML = "Chevbyshev's theorem works for any data regardless of its distribution."
    var mn = document.getElementById("expval").value;
    var std = document.getElementById("stdev").value;
    var min = document.getElementById("minval").value;
    var max = document.getElementById("maxval").value;
    
    var zminans = parseFloat(((min-mn)/std).toFixed(2))
    var zmaxans = parseFloat(((max-mn)/std).toFixed(2))
    
    var zmin = "z_{"+min+"} = \\frac{"+min+"-\\bar{x}}{s} = \\frac{"+min+" - "+mn+"}{"+std+"} = "+zminans
    var zmax = "z_{"+max+"} = \\frac{"+max+"-\\bar{x}}{s} = \\frac{"+max+" - "+mn+"}{"+std+"} = "+zmaxans
    
    
    if (Math.abs(zminans) == zmaxans) {
        document.getElementById("output").innerHTML = "$$"+zmin+"$$ $$"+zmax+"$$ $$\\begin{align} 1-1/z^2 &= 1-1/"+zmaxans+"^2 \\\\ &= 1-1/"+Math.pow(zmaxans,2)+" \\\\ &="+parseFloat((1-1/Math.pow(zmaxans,2)).toFixed(2))+"\\\\ &=\\boxed{"+parseFloat(((1-1/Math.pow(zmaxans,2))*100).toFixed(0))+"\\%} \\end{align}$$ At least $"+parseFloat(((1-1/Math.pow(zmaxans,2))*100).toFixed(0))+"\\% $ of the data values must be between $"+min+"$ and $"+max+"$.<br><br>"
    } else {
        document.getElementById("output").innerHTML = "Minimum and maximum values must be the same number of standard deviations from the mean.<br><br>"
    }
    
    
    MathJax.typeset()
}

function empirical(){
    $("#chebyshev").show(); $("#label1").hide(); $("#label2").hide(); $("#label3").show();
}

function calcempirical(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The empirical rule is used to get the percentage of values within 1, 2 or 3 standard deviations of the mean when the data follows a normal distribution."
    document.getElementById("formulatext").innerHTML = "For data having a bell-shaped distribution:<br> - Approximately 68% of the data values will be within one standard deviation of the mean.<br> - Approximately 95% of the data values will be within two standard deviations of the mean.<br> - Almost all of the data values will be within three standard deviations of the mean."
    document.getElementById("explanationtext").innerHTML = "The empirical rule only works for data follows a normal distribution."
    var mn = document.getElementById("expval").value;
    var std = document.getElementById("stdev").value;
    var min = document.getElementById("minval").value;
    var max = document.getElementById("maxval").value;
    
    var zminans = parseFloat(((min-mn)/std).toFixed(2))
    var zmaxans = parseFloat(((max-mn)/std).toFixed(2))
    
    var zmin = "z_{"+min+"} = \\frac{"+min+"-\\bar{x}}{s} = \\frac{"+min+" - "+mn+"}{"+std+"} = "+zminans
    var zmax = "z_{"+max+"} = \\frac{"+max+"-\\bar{x}}{s} = \\frac{"+max+" - "+mn+"}{"+std+"} = "+zmaxans
    
    
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

function covariance(){
    $("#input2").show(); $("#label2").show(); $("#label1").hide();
}

function calccov(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The covariance is a measure of the linear relationship between two variables."
    document.getElementById("formulatext").innerHTML = "$$s_{xy} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{n-1}$$"
    document.getElementById("explanationtext").innerHTML = "Only the sign of the covariance can be interpreted. A positive value indicates a positive linear relationship, a negative value indicates a negative linear relationship and a value of zero indicates no linear relationship."
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
        var interpret = "<b>Interpretation:</b> There is a <u>positive linear relationship</u> between x and y."
    } else if (anscov < 0){
        var interpret = "<b>Interpretation:</b> There is a <u>negative linear relationship</u> between x and y."
    } else {
        var interpret = "<b>Interpretation:</b> There is <u>no relationship</u> between x and y."
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
    document.getElementById("output").innerHTML = "<table>" + table + "</table> $$s_{xy} = \\frac{"+parseFloat(sumeacheach2.toFixed(2))+"}{"+len+"-1}=\\boxed{"+parseFloat(anscov.toFixed(2))+"}$$" + interpret + "<br><br>" + " "
    MathJax.typeset();
}

function calccovpop(){
    $("#output").empty();
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
    $("#input2").show(); $("#label2").show(); $("#label1").hide();
}

function calccor(){
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The correlation coefficient is a measure of the linear relationship between two variables."
    document.getElementById("formulatext").innerHTML = "$$r_{xy} = \\frac{s_{xy}}{s_x s_y}$$"
    document.getElementById("explanationtext").innerHTML = "Both the sign and the size of the correlation coefficient can be interpreted. The sign determines the direction of the linear relationship (positive, negative or none) while a value closer to one indicates a stronger linear relationship."
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
        var intinside = "a <u>perfect positive"
    } else if (anscov / (ansstd * ansstd2) >= .75 && anscov / (ansstd * ansstd2) < 1){
        var intinside = "a <u>strong positive"
    } else if (anscov / (ansstd * ansstd2) > .25 && anscov / (ansstd * ansstd2) < .75){
        var intinside = "a <u>positive"
    } else if (anscov / (ansstd * ansstd2) > 0 && anscov / (ansstd * ansstd2) < .25){
        var intinside = "a <u>weak positive"
    } else if (anscov / (ansstd * ansstd2) < 0 && anscov / (ansstd * ansstd2) >= -.25){
        var intinside = "a <u>weak negative"
    } else if (anscov / (ansstd * ansstd2) < -.25 && anscov / (ansstd * ansstd2) > -.75){
        var intinside = "a <u>negative"
    } else if (anscov / (ansstd * ansstd2) <= -.75 && anscov / (ansstd * ansstd2) > -1){
        var intinside = "a <u>strong negative"
    } else if (anscov / (ansstd * ansstd2) == -1){
        var intinside = "a <u>perfect negative"
    } else {
        var intinside = "<u>no"
    }
    var interpret = "<b>Interpretation:</b> There is "+ intinside +" linear relationship</u> between x and y."
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$x$$" + "</td>"+ "<td>" + "$$y$$" + "</td>" + "<td>" + "$$x - \\bar{x}$$" + "</td>" + "<td>" + "$$y - \\bar{y}$$" + "</td>"+ "<td>" + "$$(x - \\bar{x})^2$$" + "</td>"+ "<td>" + "$$(y - \\bar{y})^2$$" + "</td>" + "</tr>";
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
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>$$"+Math.round(sumeachminus)+"$$</td>"+ "<td>$$"+Math.round(sumeach2minus)+"$$</td>" +"<td>$$"+sumeachminus2.toFixed(2)+"$$</td>"+"<td>$$"+sumeach2minus2.toFixed(2)+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = "$$ \\begin{align} r_{xy} &= \\frac{s_{xy}}{s_x s_y} \\\\ &= \\frac{"+parseFloat(anscov.toFixed(2))+"}{"+parseFloat(ansstd.toFixed(2))+"\\times"+parseFloat(ansstd2.toFixed(2))+"} \\\\ &= \\boxed{"+ parseFloat((anscov / (ansstd * ansstd2)).toFixed(2)) +"}  \\end{align} $$" + interpret + "<br><br>" + " "
    MathJax.typeset();
}

function calccorpop(){
    $("#output").empty();
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
    var interpret = "Interpretation: There is "+ intinside +" linear relationship between x and y."
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
    document.getElementById('values').value="10, 20, 12, 17, 16"
}

function examplexvalues2(){
    document.getElementById('values').value="27, 25, 20, 15, 30, 34, 28, 25"
}

function examplevalues3(){
    document.getElementById('values').value="4, 6, 11, 3, 16"
    document.getElementById('values2').value="50, 50, 40, 60, 30"
}

function examplevalues4(){
    document.getElementById('values').value="6, 11, 15, 21, 27"
    document.getElementById('values2').value="6, 9, 6, 17, 12"
}

function examplevalues5(){
    document.getElementById('expval').value="30"
    document.getElementById('stdev').value="5"
    document.getElementById('minval').value="20"
    document.getElementById('maxval').value="40"
}

function examplevalues6(){
    document.getElementById('expval').value="30"
    document.getElementById('stdev').value="5"
    document.getElementById('minval').value="15"
    document.getElementById('maxval').value="45"
}

