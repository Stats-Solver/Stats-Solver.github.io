//global variables




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
    $("#output").empty();
    var x = document.getElementById("stat").value;
    if (x == "slope"){
        slope()
    } else if (x == "intercept"){
        intercept()
    } else if (x == "sse") {
        sse()
    } else if (x == "sst") {
        sst()
    } else if (x == "ssr") {
        ssr()
    } else if (x == "rsquared") {
        rsquared()
    } else if (x == "correlation") {
        correlation()
    } else if (x == "mse") {
        mse()
    } else if (x == "see") {
        see()
    } else if (x == "ses") {
        ses()
    } else if (x == "tstat") {
        tstat()
    } else if (x == "msr") {
        msr()
    } else if (x == "fstat") {
        fstat()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function slope(){
    var strx = document.getElementById("valuesx").value;
    var stry = document.getElementById("valuesy").value;
    var x = str.split(",").map(Number); var n_x = each.length; var lenmin1 = len - 1;
    var y = str2.split(",").map(Number); var n_y = each2.length; var len2min1 = len2 - 1;
    var sum_x = sum(x); var sum_y = sum(y);
    var mean_x = avg(x); var mean_y = avg(y);
    var xminusx_bar = each.map( function(value) {
        return x - mean_x;
    } );
    var yminusy_bar = each2.map( function(value) {
        return value - mean_y;
    } );
    var xxbminyyb = [];
    for(var i = 0; i < len; i++){
        xxbminyyb[i] = xminusx_bar[i] * yminusy_bar[i]
    }
    var xminusx_bar2 = xminusx_bar.map( function(value) {
        return value * value;
    } );
    var yminusy_bar2 = yminusy_bar.map( function(value) {
        return value * value;
    } );
    var sum_xminusx_bar = sum(xminusx_bar); var sum_yminusy_bar = sum(yminusy_bar);
    var sum_xxbminyyb = sum(xxbminyyb);
    var sumeachminus2 = sum(eachminus2); var sumeach2minus2 = sum(each2minus2)
    var ansvar = sumeachminus2 / lenmin1; var ansvar2 = sumeach2minus2 / len2min1;
    var ansslope = sumeacheach2 / lenmin1;
    var table = "<tr>" + "<td>" + "$$x$$" + "</td>"+ "<td>" + "$$y$$" + "</td>" + "<td>" + "$$x - \\bar{x}$$" + "</td>" + "<td>" + "$$y - \\bar{y}$$" + "</td>"+ "<td>" + "$$(x - \\bar{x})(y - \\bar{y})$$" + "</td>" +"<td>" + "$$(x - \\bar{x})^2$$" + "</td>"+ "</tr>";
    var rows = len; var cols = 6;
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
    document.getElementById("output").innerHTML = "<table border=1>" + table + "</table><br>$$b_{1} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sum(x - \\bar{x})^2} = \\frac{"+sumeacheach2.toFixed(2)+"}{"+len+"-1}="+ansslope.toFixed(2)+"$$"
    MathJax.typeset();
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
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>$$"+Math.round(sumeachminus)+"$$</td>"+ "<td>$$"+Math.round(sumeach2minus)+"$$</td>" +"<td>$$"+sumeachminus2.toFixed(2)+"$$</td>"+"<td>$$"+sumeach2minus2.toFixed(2)+"$$</td>"+ "</tr>";
    document.getElementById("output").innerHTML = "<table border=1>" + table + "</table><br>$$ \\begin{align} s_x &= \\sqrt{\\frac{\\sum{(x-\\bar{x})^2}}{n-1}} = \\sqrt{\\frac{"+ sumeachminus2.toFixed(2) +"}{"+ len +"-1}} = \\sqrt{"+ ansvar.toFixed(2) +"} ="+ ansstd.toFixed(2) +"\\\\ s_y &= \\sqrt{\\frac{\\sum{(y-\\bar{y})^2}}{n-1}} = \\sqrt{\\frac{"+ sumeach2minus2.toFixed(2) +"}{"+ len2 +"-1}} = \\sqrt{"+ ansvar2.toFixed(2) +"}="+ ansstd2.toFixed(2)+"\\\\ s_{xy} &= "+anscov.toFixed(2)+"\\\\ r_{xy} &= \\frac{s_{xy}}{s_x s_y} = \\frac{"+anscov.toFixed(2)+"}{"+ansstd.toFixed(2)+"*"+ansstd2.toFixed(2)+"} = "+anscor.toFixed(2)+"  \\end{align} $$"
    MathJax.typeset();
}
