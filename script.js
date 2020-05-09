$("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide();$("#input3").hide();

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
    $("#inputqu").hide();$(".slidecontainer").hide();$("#input2").hide();$("#input3").hide();$("#label2").hide();
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
        document.getElementById("output").innerHTML = ""
    }
   
}

function mean(){
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var adds = each[0];  var avgeach = avg(each);  
    //"x&#772 = &#8721;x/n
    for (let i=1; i<len; i++){
        adds += "+" + each[i]
    }
    document.getElementById("output").innerHTML+= "$$ \\begin{align} \\bar{x} &= \\frac{\\sum{x}}{n} \\\\ &= \\frac{" + adds + "}{" + len + "} \\\\ &=  \\frac{" + sum(each) + "}{" + len + "} \\\\ &= " + avgeach.toFixed(2) + "\\end{align}$$"
    MathJax.typeset();
}

function median(){
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var eachsort = each.sort();
    var mid = (len-1)/2; var midr = len/2;  var midl = (len-2)/2;
    var valm = each[mid]; var valr = each[midr]; var vall = each[midl];
    var sumlr = vall + valr; var avelr = (vall + valr)/2;
    if (len % 2 != 0){
        document.getElementById("output").innerHTML = "Step 1: Arrange the data in ascending order.$$"+eachsort+"$$ Step 2: Since there are an odd number of values, take the middle value.$$\\text{Median} = " + valm + "$$"
   
    }else{
        document.getElementById("output").innerHTML = "Step 1: Arrange the data in ascending order.$$"+eachsort+"$$ Step 2: Since there are an even number of values, average the two middle values.$$\\text{Median} = " + "\\frac{" + vall  + "+" + valr + "}{2} = \\frac{" + sumlr + "}{2}" + " = " + avelr + "$$"
    }
    MathJax.typeset();
}

function mode(){
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
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
        document.getElementById("output").innerHTML = "There is no mode."
    } else if (lenmode == 1) {
        document.getElementById("output").innerHTML = "The mode is " + modes + "."
    }
    else {
        document.getElementById("output").innerHTML = "The modes are " + modes + "."
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
    var val = document.getElementById("myRange").value;
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);var len = each.length;
    var eachsort = each.sort();
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
        document.getElementById("output").innerHTML = "Step 1: Arrange the data in ascending order.$$"+eachsort+"$$Step 2: Calculate the index.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + indxval.toFixed(2) + "$$ Step 3: Since the index is an integer, average values in positions i = "+indxval + " and i + 1 = " + indxvalplus1 + ".$$ \\text{"+val+suff+" Percentile} = " + "\\frac{" + valindx  + "+" + valindxplus1 + "}{2} = \\frac{" + valsum + "}{2}" + " = " + valavg + "$$"
   
    }else{
        document.getElementById("output").innerHTML = "Step 1: Arrange the data in ascending order.$$"+eachsort+"$$Step 2: Calculate the index.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + indxval.toFixed(2) + "$$ Step 3: Since the index is not an integer, round up to " + indxrnd + " and take the value in that position.$$ \\text{"+val+suff+" Percentile} = " + answr + "$$"
    }
    MathJax.typeset();
}

function quartiles(){
    $("#inputqu").show();
}

function calcquart(){
    $("#inputqu").show();
    var val = document.getElementById("valquart").value;
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);var len = each.length;
    var eachsort = each.sort();
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
        document.getElementById("output").innerHTML = "Step 1: Arrange the data in ascending order.$$"+eachsort+"$$Step 2: Calculate the index.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + indxval.toFixed(2) + "$$ Step 3: Since the index is an integer, average values in positions i = "+indxval + " and i + 1 = " + indxvalplus1 + ".$$ "+quartnum+" = " + "\\frac{" + valindx  + "+" + valindxplus1 + "}{2} = \\frac{" + valsum + "}{2}" + " = " + valavg + "$$"
   
    }else{
        document.getElementById("output").innerHTML = "Step 1: Arrange the data in ascending order.$$"+eachsort+"$$Step 2: Calculate the index.$$i = \\left(\\frac{p}{100}\\right)n=" + "\\left(\\frac{" + val + "}{100}\\right)" + len + "=" + indxval.toFixed(2) + "$$ Step 3: Since the index is not an integer, round up to " + indxrnd + " and take the value in that position.$$ "+quartnum+" = " + answr + "$$"
    }
    MathJax.typeset();
}

function range(){
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number);
    var largest = Math.max(...each); var smallest = Math.min(...each)
    var rng = largest - smallest
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{Range} &= \\text{Largest Value} - \\text{Smallest Value} \\\\ &= "+largest+" - "+smallest+ "\\\\ &=" + rng + "\\end{align} $$"
    MathJax.typeset();
}

function iqr(){
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
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{IQR} &= \\text{Q}_3 - \\text{Q}_1 \\\\ &= "+val75avg+" - "+val25avg+" \\\\ &= "+ansiqr1+"\\end{align} $$"
    } else if (indxint25 && !indxint75){
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{IQR} &= \\text{Q}_3 - \\text{Q}_1 \\\\ &= "+answr75+" - "+val25avg+" \\\\ &= "+ansiqr2+"\\end{align} $$"
    } else if (!indxint25 && indxint75){
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{IQR} &= \\text{Q}_3 - \\text{Q}_1 \\\\ &= "+val75avg+" - "+answr25+" \\\\ &= "+ansiqr3+"\\end{align} $$"
    }
    else{
        document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{IQR} &= \\text{Q}_3 - \\text{Q}_1 \\\\ &= "+answr75+" - "+answr25+" \\\\ &= "+ansiqr4+"\\end{align} $$"
    }

    MathJax.typeset();
}

function variance(){
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
    document.getElementById("output").innerHTML = "<table border=1>" + table + "</table><br>$$s^2 = \\frac{\\sum{(x-\\bar{x})^2}}{n-1} = \\frac{"+sumeachminus2.toFixed(2)+"}{"+len+"-1}="+ansvar.toFixed(2)+"$$"
    MathJax.typeset();
}

function stdev(){
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
    document.getElementById("output").innerHTML = "$$ \\begin{align} s &= \\sqrt{s^2} \\\\ &= \\sqrt{"+ansvar+"} \\\\ &= "+ansstd.toFixed(2)+"\\end{align} $$"
    MathJax.typeset();
}

function cv(){
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
    var anscv = (ansstd / mn) * 100
    document.getElementById("output").innerHTML = "$$ \\begin{align} \\text{CV} &= \\left(\\frac{s}{\\bar{x}}\\right)100\\% \\\\ &= \\left(\\frac{"+ansstd.toFixed(2)+"}{"+mn.toFixed(2)+"}\\right)100\\% \\\\ &= "+anscv.toFixed(2)+"\\% \\end{align} $$"
    MathJax.typeset()
}

function zscores(){
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
    var ansz = (ansstd / mn) * 100
    document.getElementById("output").innerHTML = "$$z = \\frac{x-\\bar{x}}{s} = \\frac{"+mn+"}{"+ansstd.toFixed(2)+"}="+5+"$$"
    MathJax.typeset()
}

function covariance(){
    $("#input2").show();
}

function calccov(){
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
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>$$"+Math.round(sumeachminus)+"$$</td>"+ "<td>$$"+Math.round(sumeach2minus)+"$$</td>" +"<td>$$"+sumeacheach2+"$$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "<table border=1>" + table + "</table><br>$$s_{xy} = \\frac{(x - \\bar{x})(y - \\bar{y})}{n-1} = \\frac{"+sumeacheach2.toFixed(2)+"}{"+len+"-1}="+anscov.toFixed(2)+"$$"
    MathJax.typeset();
}

function correlation(){
    $("#input3").show();
}

function calccor(){
    var str = document.getElementById("values").value;
    var str2 = document.getElementById("values3").value;
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
    var anscov = sumeacheach2 / lenmin1; var anscor = anscov / (ansstd * ansstd2);
    var table = "<tr>" + "<td>" + "$$x$$" + "</td>"+ "<td>" + "$$y$$" + "</td>" + "<td>" + "$$x - \\bar{x}$$" + "</td>" + "<td>" + "$$y - \\bar{y}$$" + "</td>"+ "<td>" + "$$(x - \\bar{x})^2$$" + "</td>"+ "<td>" + "$$(y - \\bar{y})^2$$" + "</td>" + "</tr>";
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
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>$$"+Math.round(sumeachminus)+"$$</td>"+ "<td>$$"+Math.round(sumeach2minus)+"$$</td>" +"<td>$$"+sumeachminus2+"$$</td>"+"<td>$$"+sumeach2minus2+"$$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "<table border=1>" + table + "</table><br>$$ \\begin{align} s_x &= \\sqrt{\\frac{\\sum{(x-\\bar{x})^2}}{n-1}} = \\sqrt{\\frac{"+ sumeachminus2 +"}{"+ len +"-1}} = \\sqrt{"+ ansvar.toFixed(2) +"} ="+ ansstd.toFixed(2) +"\\\\ s_y &= \\sqrt{\\frac{\\sum{(y-\\bar{y})^2}}{n-1}} = \\sqrt{\\frac{"+ sumeach2minus2 +"}{"+ len2 +"-1}} = \\sqrt{"+ ansvar2.toFixed(2) +"}="+ ansstd2.toFixed(2)+"\\\\ s_{xy} &= "+anscov.toFixed(2)+"\\\\ r_{xy} &= \\frac{s_{xy}}{s_x s_y} = \\frac{"+anscov.toFixed(2)+"}{"+ansstd.toFixed(2)+"*"+ansstd2.toFixed(2)+"} = "+anscor.toFixed(2)+"  \\end{align} $$"
    MathJax.typeset();
}
