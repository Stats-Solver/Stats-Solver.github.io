$("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide();$("#inputzscore").hide(); 
$(".description").hide(); $(".population").hide(); $(".sample").hide(); $("#explanation").hide();

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

function stat(){
    $("#explanation").hide();
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide(); $("#inputzscore").hide(); 
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
        percentiles()
    } else if (x == "quartiles") {
        quartiles()
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
        zscores()
    } else if (x == "covariance") {
        covariance()
    } else if (x == "correlation") {
        correlation()
    } else{
        document.getElementById("output").innerHTML = "";
        $("#explanation").hide();
    }
   
}

function mean(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The mean, or average, is the most important measure of central location. It is calculated by summing up the values and dividing by the total number of values."
    $("#output").empty();
    $("#desmean").show(); $("#popmean").show(); $("#sammean").hide();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var adds = each[0];  var avgeach = avg(each);  
    for (let i=1; i<len; i++){
        adds += "+" + each[i]
    }
    document.getElementById("output").innerHTML+= "<b>Sample Mean</b> $$\\begin{align} \\bar{x} &= \\frac{\\sum{x}}{n} \\\\ &= \\frac{" + adds + "}{" + len + "} \\\\ &=  \\frac{" + sum(each) + "}{" + len + "} \\\\ &= \\boxed{" + avgeach.toFixed(2) + "} \\end{align}$$"
    MathJax.typeset();
}

function meanpop(){
    $("#output").empty();
    $("#desmean").show(); $("#popmean").hide(); $("#sammean").show();
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
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The median is a measure of central location that is useful when there are extreme values in the data. If there are an odd number of values, the median is the middle value. If there are an even number of values, the median is the average of two middle values. "
    $("#desmedian").show();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var eachsort = each.sort(function(a,b) {
        return a - b;
    });
    var mid = (len-1)/2; var midr = len/2;  var midl = (len-2)/2;
    var valm = each[mid]; var valr = each[midr]; var vall = each[midl];
    var sumlr = vall + valr; var avelr = (vall + valr)/2;
    if (len % 2 != 0){
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in <u>ascending order</u>.$$"+eachsort+"$$ <b>Step 2:</b> Since there are an <u>odd number</u> of values, take the middle value.$$\\text{Median} = \\boxed{" + valm + "} $$"
   
    }else{
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in <u>ascending order</u>.$$"+eachsort+"$$ <b>Step 2:</b> Since there are an <u>even number</u> of values, average the two middle values.$$\\text{Median} = " + "\\frac{" + vall  + "+" + valr + "}{2} = \\frac{" + sumlr + "}{2}" + " = \\boxed{" + avelr + "} $$"
    }
    MathJax.typeset();
}

function mode(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The mode is the most frequently occuring value. If there are two modes, the data is said to be bi-modal. If there are more than two modes, the data is said to be multi-modal."
    $("#desmode").show();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var eachonesort = sortrem(each); var len = eachonesort.length;
    var counts = countem(each)
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "<b>x</b>" + "</td>" + "<td>" + "<b>Frequency</b>" + "</td>" + "</tr>";
    var rows = len; var cols = 2;
    var tot = sum(counts);
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>" + eachonesort[r] + "</td>";
        table += "<td>" + counts[r] + "</td>";
        table += "</tr>";
    }

    var modes = [], count = [], i, number, maxIndex = 0;
    var numbers = each;
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
   
    var lenmode = modes.length;
    count.shift()
    var maxcount = Math.max.apply(Math,count)
   
    if (maxcount == 1) {
        document.getElementById("output").innerHTML = " <table>" + table + "</table> <br> There is no mode.<br><br>"
    } else if (lenmode == 1) {
        document.getElementById("output").innerHTML = " <table>" + table + "</table> <br> The mode is " + modes + ".<br><br>"
    }
    else {
        document.getElementById("output").innerHTML = " <table>" + table + "</table> <br> The modes are " + modes + ".<br><br>"
    }

}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

function percentiles(){
    $(".slidecontainer").show();
    var val = document.getElementById("myRange").value;
}

function calcper(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "About p% of the values are less than the p-th percentile. About (1-p)% of the values are greater than the p-th percentile."
    $("#despercentiles").show();
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
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in <u>ascending order</u>.$$"+eachsort+"$$<b>Step 2:</b> Calculate the <u>index</u>.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + indxval.toFixed(2) + "$$ <b>Step 3:</b> Since the index is an <u>integer</u>, average values in positions i = "+indxval + " and i + 1 = " + indxvalplus1 + ".$$ \\text{"+val+suff+" Percentile} = " + "\\frac{" + valindx  + "+" + valindxplus1 + "}{2} = \\frac{" + valsum + "}{2}" + " = \\boxed{" + valavg + "} $$"
   
    }else{
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in <u>ascending order</u>.$$"+eachsort+"$$<b>Step 2:</b> Calculate the <u>index</u>.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + indxval.toFixed(2) + "$$ <b>Step 3:</b> Since the index is <u>not an integer</u>, round up to " + indxrnd + " and take the value in that position.$$ \\text{"+val+suff+" Percentile} = \\boxed{" + answr + "} $$"
    }
    MathJax.typeset();
}

function quartiles(){
    $("#inputqu").show();
}

function calcquart(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The first quartile is the 25th percentile, the second quartile is the 50th percentile and the third quartile is the 75th percentile."
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
    } else if (val == 50){
        var quartnum = "\\text{Q}_2"
    } else if (val == 75){
        var quartnum = "\\text{Q}_3"
    } else {
        var quartnum = ""
    }
    if (indxint){
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in <u>ascending order</u>.$$"+eachsort+"$$<b>Step 2:</b> Calculate the <u>index</u>.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + indxval.toFixed(2) + "$$ <b>Step 3:</b> Since the index is an <u>integer</u>, average values in positions i = "+indxval + " and i + 1 = " + indxvalplus1 + ".$$ "+quartnum+" = " + "\\frac{" + valindx  + "+" + valindxplus1 + "}{2} = \\frac{" + valsum + "}{2}" + " = \\boxed{" + valavg + "} $$"
   
    }else{
        document.getElementById("output").innerHTML = "<b>Step 1:</b> Arrange the data in <u>ascending order</u>.$$"+eachsort+"$$<b>Step 2:</b> Calculate the <u>index</u>.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + indxval.toFixed(2) + "$$ <b>Step 3:</b> Since the index is <u>not an integer</u>, round up to " + indxrnd + " and take the value in that position.$$ "+quartnum+" = \\boxed{" + answr + "} $$"
    }
    MathJax.typeset();
}

function range(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The range is the simplest measure of variability as it only uses two values: the largest and smallest."
    $("#desrange").show();
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);
    var largest = Math.max(...each); var smallest = Math.min(...each)
    var rng = largest - smallest
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Range} &= \\text{Largest Value} - \\text{Smallest Value} \\\\ &= "+largest+" - "+smallest+ "\\\\ &= \\boxed{" + rng + "} \\end{align} $$"
    MathJax.typeset();
}

function iqr(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The interquartile range is a measure of variability that is useful when there are extreme values in the data. It is the third quartile minus the first quartile."
    $("#desiqr").show();
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
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The variance is a measure of variability that uses all of the data. The sample variance is computed by summing the squared deviations about the mean and dividing the result by sample size minus one."
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
    var table = "<tr>" + "<td>" + "$$x$$" + "</td>" + "<td>" + "$$x - \\bar{x}$$" + "</td>" + "<td>" + "$$(x - \\bar{x})^2$$" + "</td>" + "</tr>";
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
    document.getElementById("output").innerHTML = "<b>Sample Variance</b> <br><br> <table border=1>" + table + "</table><br>$$s^2 = \\frac{\\sum{(x-\\bar{x})^2}}{n-1} = \\frac{"+sumeachminus2.toFixed(2)+"}{"+len+"-1}= \\boxed{"+ansvar.toFixed(2)+"} $$"
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
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The standard deviation is the square root of the variance. Like the variance, it is a measure of variability. However, it differs from the variance in that it is in the same units as the original data."
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
    document.getElementById("output").innerHTML = "<b>Sample Standard Deviation</b> $$ \\begin{align} s &= \\sqrt{s^2} \\\\ &= \\sqrt{"+ansvar.toFixed(2)+"} \\\\ &= \\boxed{"+ansstd.toFixed(2)+"}\\end{align} $$"
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
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The coefficient of variation does something."
    $("#descv").show();
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{CV} &= \\left(\\frac{s}{\\bar{x}}\\right)100\\% \\\\ &= \\left(\\frac{"+ansstd.toFixed(2)+"}{"+mn.toFixed(2)+"}\\right)100\\% \\\\ &= "+ stdmn.toFixed(2) +"*100\\% \\\\ &= \\boxed{"+anscv.toFixed(2)+"\\%} \\end{align} $$"
    MathJax.typeset()
}

function zscores(){
    document.getElementById("explanationtext").innerHTML = "z-Scores measure how many standard deviations a value is from the mean."
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
    
    var zval = [' <option>Choose</option>'];
    for (let i=0; i<len; i++){
        zval += ' <option value='+each[i]+'>'+each[i]+'</option>'
    }
    
    document.getElementById("inputzscore").innerHTML = zval
    
    MathJax.typeset()
}

function calcz(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "z-Scores measure how many standard deviations a value is from the mean."
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
    
    var zscrs = "z_{"+val+"} &= \\frac{"+val+"-\\bar{x}}{s} \\\\ &= \\frac{"+ val +" - "+mn.toFixed(2)+"}{"+ansstd.toFixed(2)+"} \\\\ &= \\frac{"+ (val-mn).toFixed(2)+"}{"+ansstd.toFixed(2)+"} \\\\ &= \\boxed{"+((val-mn)/ansstd).toFixed(2)+"}"
    
    document.getElementById("output").innerHTML = "$$ \\begin{align} " + zscrs + " \\end{align} $$"
    MathJax.typeset()
}

function covariance(){
    $("#input2").show();
    $("#buttoncov").show();
    $("#buttoncor").hide();
}

function calccov(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The covariance is a measure of the linear relationship between two variables. However, only the sign of the covariance can be interpreted. If the covariance is positive, it indicates there is a positive linear relationship between x and y. If the covariance is negative, it indicates there is a negative linear relationship. If it is zero, there is no linear relationship."
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
        var interpret = "<b>Interpretation:</b> There is a positive linear relationship between x and y."
    } else if (anscov < 0){
        var interpret = "<b>Interpretation:</b> There is a negative linear relationship between x and y."
    } else {
        var interpret = "<b>Interpretation:</b> There is no relationship between x and y."
    }
    var table = "<tr>" + "<td>" + "$$x$$" + "</td>"+ "<td>" + "$$y$$" + "</td>" + "<td>" + "$$x - \\bar{x}$$" + "</td>" + "<td>" + "$$y - \\bar{y}$$" + "</td>"+ "<td>" + "$$(x - \\bar{x})(y - \\bar{y})$$" + "</td>" + "</tr>";
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
    document.getElementById("output").innerHTML = "<b>Sample Covariance</b> <br><br> <table border=1>" + table + "</table><br> $$s_{xy} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{n-1} = \\frac{"+sumeacheach2.toFixed(2)+"}{"+len+"-1}=\\boxed{"+anscov.toFixed(2)+"}$$" + interpret + "<br><br>" + " "
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
    $("#input2").show();
    $("#buttoncor").show();
    $("#buttoncov").hide();
}

function calccor(){
    $("#explanation").show();
    document.getElementById("explanationtext").innerHTML = "The correlation coefficient is a measure of the linear relationship between two variables. Both the sign and the size of the correlation coefficient can be interpreted. It's value ranges between -1 and +1, with a value closer to 1 indicating a stronger relationship."
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
    if (anscor = 1){
        var intinside = "a perfect positive"
    } else if (anscor2 >= .75 && anscor2 < 1){
        var intinside = "a strong positive"
    } else if (anscor2 > .25 && anscor2 < .75){
        var intinside = "a moderate positive"
    } else if (anscor2 > 0 && anscor2 < .25){
        var intinside = "a weak positive"
    } else if (anscor2 < 0 && anscor2 >= -.25){
        var intinside = "a weak negative"
    } else if (anscor2 < -.25 && anscor >2 -.75){
        var intinside = "a moderate negative"
    } else if (anscor2 <= -.75 && anscor2 > -1){
        var intinside = "a strong negative"
    } else if (anscor2 = -1){
        var intinside = "a perfect negative"
    } else {
        var intinside = "no"
    }
    var interpret = "<b>Interpretation:</b> There is "+ intinside +" linear relationship between x and y."
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
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>$$"+Math.round(sumeachminus)+"$$</td>"+ "<td>$$"+Math.round(sumeach2minus)+"$$</td>" +"<td>$$"+sumeachminus2.toFixed(2)+"$$</td>"+"<td>$$"+sumeach2minus2.toFixed(2)+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = "<b>Sample Correlation Coefficient</b> $$ \\begin{align} r_{xy} &= \\frac{s_{xy}}{s_x s_y} \\\\ &= \\frac{"+anscov.toFixed(2)+"}{"+ansstd.toFixed(2)+"*"+ansstd2.toFixed(2)+"} \\\\ &= \\boxed{"+ (anscov / (ansstd * ansstd2)).toFixed(2) +"}  \\end{align} $$" + interpret + "<br><br>" + " "
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
        var intinside = "a moderate positive"
    } else if (anscor2 > 0 && anscor2 < .25){
        var intinside = "a weak positive"
    } else if (anscor2 < 0 && anscor2 >= -.25){
        var intinside = "a weak negative"
    } else if (anscor2 < -.25 && anscor >2 -.75){
        var intinside = "a moderate negative"
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

function exampleyvalues(){
    document.getElementById('values2').value="11, 27, 14, 21, 15"
}

function examplechoose(){
    document.getElementById('stat').value="stdev"
    stat()
}
