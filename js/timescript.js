$(".description").hide(); $(".population").hide(); $(".sample").hide(); $("#explanation").hide(); $("#label2").hide(); $("#label3").hide();

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
    $("#chebyshev").hide(); $("#label3").hide(); $("#values").show();  $("#label1").show(); $("#weights").hide();
    $("#methods").hide();
    var x = document.getElementById("stat").value;
    if (x == "mae") {
        $("#methods").show();
    } else if (x == "mse") {
        $("#methods").show();
    } 
}

function stat(){
    $("#explanation").hide();
    $("#inputqu").hide(); $("#inputzscore").hide();
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#output").empty();
    var x = document.getElementById("method").value;
    var y = document.getElementById("stat").value;
    if (x == "naive" && y == "forecast") {
        naiveforecast()
    } else if (x == "naive" && y == "error") {
        naiveerror()
    } else if (x == "naive" && y == "mae") {
        naivemae()
    } else if (x == "naive" && y == "mse") {
        naivemse()
    } else if (x == "naive" && y == "mape") {
        naivemape()
    } else if (x == "average" && y == "forecast") {
        averageforecast()
    } else if (x == "average" && y == "error") {
        averageerror()
    } else if (x == "average" && y == "mae") {
        averagemae()
    } else if (x == "average" && y == "mse") {
        averagemse()
    } else if (x == "average" && y == "mape") {
        averagemape()
    } 
   
}

function naiveforecast() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+ "<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$\\text{Forecast}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$ Y_" + r + " = " +values[r-1] + "$$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = Y_" + rows + " = \\boxed{" + values[rows-1]+ "} $$"
    MathJax.typeset();
}

function naiveerror() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$\\text{Error}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + values[r-1] + "$$</td>";
        table += "<td>$$" + values[r] +" - "+ values[r-1] +" = " + (values[r]-values[r-1]) + "$$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function naivemae() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$\\text{|Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + values[r-1] + "$$</td>";
        table += "<td>$$" + (values[r]-values[r-1]) + "$$</td>";
        table += "<td>$$|" + (values[r]-values[r-1]) +"| = " + Math.abs((values[r]-values[r-1])) + "$$</td>";
        table += "</tr>";
        total += Math.abs((values[r]-values[r-1]))
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+total+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + total + "}{" + rows + "} = \\boxed{" + parseFloat((total/rows).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function naivemse() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$\\text{Error}^2$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + values[r-1] + "$$</td>";
        table += "<td>$$" + (values[r]-values[r-1]) + "$$</td>";
        table += "<td>$$(" + (values[r]-values[r-1]) +")^2 = " + Math.pow((values[r]-values[r-1]),2) + "$$</td>";
        table += "</tr>";
        total += Math.pow((values[r]-values[r-1]),2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+total+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + total + "}{" + rows + "} = \\boxed{" + parseFloat((total/rows).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function naivemape() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$\\text{|%Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + values[r-1] + "$$</td>";
        table += "<td>$$" + (values[r]-values[r-1]) + "$$</td>";
        table += "<td>$$ 100 \\times \\frac{|" + (values[r]-values[r-1]) +"|}{" + values[r] + "} = " + parseFloat((100*Math.abs((values[r]-values[r-1]))/values[r]).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += 100*Math.abs((values[r]-values[r-1]))/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + rows + "} = \\boxed{" + parseFloat((total/rows).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function averageforecast() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$\\text{Forecast}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>$$" + values[0] + "$$</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 2; r < rows; r++){
        sums += "+" + values[r-1]
        sumsvalue += values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$ \\frac{" + sums + "}{" + r + "} = " + parseFloat((sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "</tr>";
    }
    sums = sums + "+" + values[r-1]
    sumsvalue = sumsvalue + values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = \\frac{" + sums + "}{" + rows + "} = \\boxed{" + parseFloat((sumsvalue/rows).toFixed(2)) + "} $$"
    MathJax.typeset();
}

function averageerror() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$\\text{Error}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "<td>$$" + values[r] +" - "+ parseFloat((sumsvalue/r).toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "</tr>";
        sumsvalue += values[r]
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function averagemae() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$\\text{|Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "<td>$$|" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue/r).toFixed(2))) + "$$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue/r)
        sumsvalue += values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + rows + "} = \\boxed{" + parseFloat((total/rows).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function averagemse() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$\\text{Error}^2$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "<td>$$(" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue/r),2).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue/r,2)
        sumsvalue += values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + rows + "} = \\boxed{" + parseFloat((total/rows).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function averagemape() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$\\text{|%Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "<td>$$ 100 \\times \\frac{|" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) +"|}{" + values[r] + "} = " + parseFloat((100*Math.abs(values[r]-sumsvalue/r)/values[r]).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue/r)/values[r]
        sumsvalue += values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + rows + "} = \\boxed{" + parseFloat((total/rows).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function naive2() {
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var v1 = parseFloat(document.getElementById("v1").value);
    var v2 = parseFloat(document.getElementById("v2").value);
    var v3 = parseFloat(document.getElementById("v3").value);
    var v4 = parseFloat(document.getElementById("v4").value);
    var v5 = parseFloat(document.getElementById("v5").value);
    var v6 = parseFloat(document.getElementById("v6").value);
    var v7 = parseFloat(document.getElementById("v7").value);
    var values = [v1,v2,v3,v4,v5,v6,v7]
    var forecast = ["-",v1,v2,v3,v4,v5,v6]
    var error = ["-",v2-v1,v3-v2,v4-v3,v5-v4,v6-v5,v7-v6]
    var abserr = ["-",Math.abs(v2-v1),Math.abs(v3-v2),Math.abs(v4-v3),Math.abs(v5-v4),Math.abs(v6-v5),Math.abs(v7-v6)]
    var sqrerr = ["-",Math.pow(v2-v1,2),Math.pow(v3-v2,2),Math.pow(v4-v3,2),Math.pow(v5-v4,2),Math.pow(v6-v5,2),Math.pow(v7-v6,2)]
    var aperr = ["-",parseFloat((100*Math.abs(v2-v1)/v2).toFixed(2)),parseFloat((100*Math.abs(v3-v2)/v3).toFixed(2)),parseFloat((100*Math.abs(v4-v3)/v4).toFixed(2)),parseFloat((100*Math.abs(v5-v4)/v5).toFixed(2)),parseFloat((100*Math.abs(v6-v5)/v6).toFixed(2)),parseFloat((100*Math.abs(v7-v6)/v7).toFixed(2))]
    var toterr = sum(error); var totabs = sum(abserr); var totsqr = sum(sqrerr); var totap = sum(aperr)
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$|e|$$" + "</td>"+ "<td>" + "$$e^2$$" + "</td>"+ "<td>" + "$$|e\\%|$$" + "</td>"+ "</tr>";
    var rows = numvals; var ans = values[rows-1];
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + forecast[r] + "$$</td>";
        table += "<td>$$" + error[r] + "$$</td>";
        table += "<td>$$" + abserr[r] + "$$</td>";
        table += "<td>$$" + sqrerr[r] + "$$</td>";
        table += "<td>$$" + aperr[r] + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+toterr+"$$</td>" +"<td>$$"+totabs+"$$</td>"+ "<td>$$"+totsqr+"$$</td>"+ "<td>$$"+parseFloat(totap.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + "$$\\text{MAE} = \\frac{"+totabs+"}{"+(rows-1)+"} = \\boxed{"+parseFloat((totabs/(rows-1)).toFixed(2))+"} $$ $$\\text{MSE} = \\frac{"+totsqr+"}{"+(rows-1)+"} = \\boxed{"+parseFloat((totsqr/(rows-1)).toFixed(2))+"} $$ $$\\text{MAPE} = \\frac{"+parseFloat(totap.toFixed(2))+"}{"+(rows-1)+"} = \\boxed{"+parseFloat((totap/(rows-1)).toFixed(2))+"} $$ $$ F_"+(rows+1)+"=Y_"+rows+"=\\boxed{"+ans+"} $$"
    MathJax.typeset();
} 

function ave2() {
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var v1 = parseFloat(document.getElementById("v1").value);
    var v2 = parseFloat(document.getElementById("v2").value);
    var v3 = parseFloat(document.getElementById("v3").value);
    var v4 = parseFloat(document.getElementById("v4").value);
    var v5 = parseFloat(document.getElementById("v5").value);
    var v6 = parseFloat(document.getElementById("v6").value);
    var v7 = parseFloat(document.getElementById("v7").value);
    var values = [v1,v2,v3,v4,v5,v6,v7]
    var forecast = ["-",v1,parseFloat(((v1+v2)/2).toFixed(2)),parseFloat(((v1+v2+v3)/3).toFixed(2)),parseFloat(((v1+v2+v3+v4)/4).toFixed(2)),parseFloat(((v1+v2+v3+v4+v5)/5).toFixed(2)),parseFloat(((v1+v2+v3+v4+v5+v6)/6).toFixed(2))]
    var error = ["-",parseFloat((v2-v1).toFixed(2)),parseFloat((v3-(v1+v2)/2).toFixed(2)),parseFloat((v4-(v1+v2+v3)/3).toFixed(2)),parseFloat((v5-(v1+v2+v3+v4)/4).toFixed(2)),parseFloat((v6-(v1+v2+v3+v4+v5)/5).toFixed(2)),parseFloat((v7-(v1+v2+v3+v4+v5+v6)/6).toFixed(2))]
    var abserr = ["-",parseFloat(Math.abs((v2-v1)).toFixed(2)),parseFloat(Math.abs((v3-(v1+v2)/2)).toFixed(2)),parseFloat(Math.abs((v4-(v1+v2+v3)/3)).toFixed(2)),parseFloat(Math.abs((v5-(v1+v2+v3+v4)/4)).toFixed(2)),parseFloat(Math.abs((v6-(v1+v2+v3+v4+v5)/5)).toFixed(2)),parseFloat(Math.abs((v7-(v1+v2+v3+v4+v5+v6)/6)).toFixed(2))]
    var sqrerr = ["-",parseFloat(Math.pow((v2-v1),2).toFixed(2)),parseFloat(Math.pow((v3-(v1+v2)/2),2).toFixed(2)),parseFloat(Math.pow((v4-(v1+v2+v3)/3),2).toFixed(2)),parseFloat(Math.pow((v5-(v1+v2+v3+v4)/4),2).toFixed(2)),parseFloat(Math.pow((v6-(v1+v2+v3+v4+v5)/5),2).toFixed(2)),parseFloat(Math.pow((v7-(v1+v2+v3+v4+v5+v6)/6),2).toFixed(2))]
    var aperr = ["-",parseFloat(Math.abs(100*(v2-v1)/v2).toFixed(2)),parseFloat(Math.abs(100*(v3-(v1+v2)/2)/v3).toFixed(2)),parseFloat(Math.abs(100*(v4-(v1+v2+v3)/3)/v4).toFixed(2)),parseFloat(Math.abs(100*(v5-(v1+v2+v3+v4)/4)/v5).toFixed(2)),parseFloat(Math.abs(100*(v6-(v1+v2+v3+v4+v5)/5)/v6).toFixed(2)),parseFloat(Math.abs(100*(v7-(v1+v2+v3+v4+v5+v6)/6)/v7).toFixed(2))]
    var toterr = sum(error); var totabs = sum(abserr); var totsqr = sum(sqrerr); var totap = sum(aperr)
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$|e|$$" + "</td>"+ "<td>" + "$$e^2$$" + "</td>"+ "<td>" + "$$|e\\%|$$" + "</td>"+ "</tr>";
    var rows = numvals;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + forecast[r] + "$$</td>";
        table += "<td>$$" + error[r] + "$$</td>";
        table += "<td>$$" + abserr[r] + "$$</td>";
        table += "<td>$$" + sqrerr[r] + "$$</td>";
        table += "<td>$$" + aperr[r] + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$"+sum(values)+"$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+toterr+"$$</td>" +"<td>$$"+totabs+"$$</td>"+ "<td>$$"+totsqr+"$$</td>"+ "<td>$$"+parseFloat(totap.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + "$$\\text{MAE} = \\frac{"+totabs+"}{"+(rows-1)+"} = \\boxed{"+parseFloat((totabs/(rows-1)).toFixed(2))+"} $$ $$\\text{MSE} = \\frac{"+totsqr+"}{"+(rows-1)+"} = \\boxed{"+parseFloat((totsqr/(rows-1)).toFixed(2))+"} $$ $$\\text{MAPE} = \\frac{"+parseFloat(totap.toFixed(2))+"}{"+(rows-1)+"} = \\boxed{"+parseFloat((totap/(rows-1)).toFixed(2))+"} $$ $$ F_"+(rows+1)+"= \\frac{"+sum(values) +"}{"+rows+"} = \\boxed{"+parseFloat(((sum(values))/rows).toFixed(2))+"} $$"
    MathJax.typeset();
} 

function mae() {
    var method = document.getElementById("method").value;
    var v1 = parseFloat(document.getElementById("v1").value);
    var v2 = parseFloat(document.getElementById("v2").value);
    var v3 = parseFloat(document.getElementById("v3").value);
    var v4 = parseFloat(document.getElementById("v4").value);
    var v5 = parseFloat(document.getElementById("v5").value);
    var v6 = parseFloat(document.getElementById("v6").value);
    var v7 = parseFloat(document.getElementById("v7").value);
    var values = [v1,v2,v3,v4,v5,v6,v7]
    if (method == "naive") {
        forecast = ["-",v1,v2,v3,v4,v5,v6]
    } else if (method == "ave") {
        forecast = ["-",v1,(v1+v2)/2,(v1+v2+v3)/3,(v1+v2+v3+v4)/4,(v1+v2+v3+v4+v5)/5,(v1+v2+v3+v4+v5+v6)/6]
    }
    if (method == "naive") {
        error = ["-",v2-v1,v3-v2,v4-v3,v5-v4,v6-v5,v7-v6]
    } else if (method == "ave") {
        error = ["-",parseFloat((v2-v1).toFixed(2)),parseFloat((v3-(v1+v2)/2).toFixed(2)),parseFloat((v4-(v1+v2+v3)/3).toFixed(2)),parseFloat((v5-(v1+v2+v3+v4)/4).toFixed(2)),parseFloat((v6-(v1+v2+v3+v4+v5)/5).toFixed(2)),parseFloat((v7-(v1+v2+v3+v4+v5+v6)/6).toFixed(2))]
    }
    if (method == "naive") {
        abserr = ["-",Math.abs(v2-v1),Math.abs(v3-v2),Math.abs(v4-v3),Math.abs(v5-v4),Math.abs(v6-v5),Math.abs(v7-v6)]
    } else if (method == "ave") {
        abserr = ["-",parseFloat(Math.abs((v2-v1)).toFixed(2)),parseFloat(Math.abs((v3-(v1+v2)/2)).toFixed(2)),parseFloat(Math.abs((v4-(v1+v2+v3)/3)).toFixed(2)),parseFloat(Math.abs((v5-(v1+v2+v3+v4)/4)).toFixed(2)),parseFloat(Math.abs((v6-(v1+v2+v3+v4+v5)/5)).toFixed(2)),parseFloat(Math.abs((v7-(v1+v2+v3+v4+v5+v6)/6)).toFixed(2))]
    }
    var toterr = sum(error); var totabs = sum(abserr)
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$|e|$$" + "</td>"+ "</tr>";
    var rows = numvals;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + forecast[r] + "$$</td>";
        table += "<td>$$" + error[r] + "$$</td>";
        table += "<td>$$" + abserr[r] + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+toterr+"$$</td>" +"<td>$$"+totabs+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + "$$\\text{MAE} = \\frac{"+totabs+"}{"+(rows-1)+"} = \\boxed{"+parseFloat((totabs/(rows-1)).toFixed(2))+"} $$"
    MathJax.typeset();
}

function mse() {
    var method = document.getElementById("method").value;
    var v1 = parseFloat(document.getElementById("v1").value);
    var v2 = parseFloat(document.getElementById("v2").value);
    var v3 = parseFloat(document.getElementById("v3").value);
    var v4 = parseFloat(document.getElementById("v4").value);
    var v5 = parseFloat(document.getElementById("v5").value);
    var v6 = parseFloat(document.getElementById("v6").value);
    var v7 = parseFloat(document.getElementById("v7").value);
    var values = [v1,v2,v3,v4,v5,v6,v7]
    if (method == "naive") {
        forecast = ["-",v1,v2,v3,v4,v5,v6]
    } else if (method == "ave") {
        forecast = ["-",v1,(v1+v2)/2,(v1+v2+v3)/3,(v1+v2+v3+v4)/4,(v1+v2+v3+v4+v5)/5,(v1+v2+v3+v4+v5+v6)/6]
    }
    if (method == "naive") {
        error = ["-",v2-v1,v3-v2,v4-v3,v5-v4,v6-v5,v7-v6]
    } else if (method == "ave") {
        error = ["-",parseFloat((v2-v1).toFixed(2)),parseFloat((v3-(v1+v2)/2).toFixed(2)),parseFloat((v4-(v1+v2+v3)/3).toFixed(2)),parseFloat((v5-(v1+v2+v3+v4)/4).toFixed(2)),parseFloat((v6-(v1+v2+v3+v4+v5)/5).toFixed(2)),parseFloat((v7-(v1+v2+v3+v4+v5+v6)/6).toFixed(2))]
    }
    if (method == "naive") {
        sqrerr = ["-",Math.pow(v2-v1,2),Math.pow(v3-v2,2),Math.pow(v4-v3,2),Math.pow(v5-v4,2),Math.pow(v6-v5,2),Math.pow(v7-v6,2)]
    } else if (method == "ave") {
        sqrerr = ["-",parseFloat(Math.pow((v2-v1),2).toFixed(2)),parseFloat(Math.pow((v3-(v1+v2)/2),2).toFixed(2)),parseFloat(Math.pow((v4-(v1+v2+v3)/3),2).toFixed(2)),parseFloat(Math.pow((v5-(v1+v2+v3+v4)/4),2).toFixed(2)),parseFloat(Math.pow((v6-(v1+v2+v3+v4+v5)/5),2).toFixed(2)),parseFloat(Math.pow((v7-(v1+v2+v3+v4+v5+v6)/6),2).toFixed(2))]
    }
    var toterr = sum(error); var totsqr = sum(sqrerr)
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$e^2$$" + "</td>"+ "</tr>";
    var rows = numvals;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + forecast[r] + "$$</td>";
        table += "<td>$$" + error[r] + "$$</td>";
        table += "<td>$$" + sqrerr[r] + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+toterr+"$$</td>" +"<td>$$"+totsqr+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + "$$\\text{MSE} = \\frac{"+totsqr+"}{"+(rows-1)+"} = \\boxed{"+parseFloat((totsqr/(rows-1)).toFixed(2))+"} $$"
    MathJax.typeset();
}

function mape() {
    var method = document.getElementById("method").value;
    var v1 = parseFloat(document.getElementById("v1").value);
    var v2 = parseFloat(document.getElementById("v2").value);
    var v3 = parseFloat(document.getElementById("v3").value);
    var v4 = parseFloat(document.getElementById("v4").value);
    var v5 = parseFloat(document.getElementById("v5").value);
    var v6 = parseFloat(document.getElementById("v6").value);
    var v7 = parseFloat(document.getElementById("v7").value);
    var values = [v1,v2,v3,v4,v5,v6,v7]
    if (method == "naive") {
        forecast = ["-",v1,v2,v3,v4,v5,v6]
    } else if (method == "ave") {
        forecast = ["-",v1,(v1+v2)/2,(v1+v2+v3)/3,(v1+v2+v3+v4)/4,(v1+v2+v3+v4+v5)/5,(v1+v2+v3+v4+v5+v6)/6]
    }
    if (method == "naive") {
        error = ["-",v2-v1,v3-v2,v4-v3,v5-v4,v6-v5,v7-v6]
    } else if (method == "ave") {
        error = ["-",parseFloat((v2-v1).toFixed(2)),parseFloat((v3-(v1+v2)/2).toFixed(2)),parseFloat((v4-(v1+v2+v3)/3).toFixed(2)),parseFloat((v5-(v1+v2+v3+v4)/4).toFixed(2)),parseFloat((v6-(v1+v2+v3+v4+v5)/5).toFixed(2)),parseFloat((v7-(v1+v2+v3+v4+v5+v6)/6).toFixed(2))]
    }
    if (method == "naive") {
        aperr = ["-",parseFloat((100*Math.abs(v2-v1)/v2).toFixed(2)),parseFloat((100*Math.abs(v3-v2)/v3).toFixed(2)),parseFloat((100*Math.abs(v4-v3)/v4).toFixed(2)),parseFloat((100*Math.abs(v5-v4)/v5).toFixed(2)),parseFloat((100*Math.abs(v6-v5)/v6).toFixed(2)),parseFloat((100*Math.abs(v7-v6)/v7).toFixed(2))]
    } else if (method == "ave") {
        aperr = ["-",parseFloat(Math.abs(100*(v2-v1)/v2).toFixed(2)),parseFloat(Math.abs(100*(v3-(v1+v2)/2)/v3).toFixed(2)),parseFloat(Math.abs(100*(v4-(v1+v2+v3)/3)/v4).toFixed(2)),parseFloat(Math.abs(100*(v5-(v1+v2+v3+v4)/4)/v5).toFixed(2)),parseFloat(Math.abs(100*(v6-(v1+v2+v3+v4+v5)/5)/v6).toFixed(2)),parseFloat(Math.abs(100*(v7-(v1+v2+v3+v4+v5+v6)/6)/v7).toFixed(2))]
    }
    var toterr = sum(error); var totap = sum(aperr)
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y$$" + "</td>" + "<td>" + "$$F$$" + "</td>" + "<td>" + "$$e$$" + "</td>"+ "<td>" + "$$|e\\%|$$" + "</td>"+ "</tr>";
    var rows = numvals;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + forecast[r] + "$$</td>";
        table += "<td>$$" + error[r] + "$$</td>";
        table += "<td>$$" + aperr[r] + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+toterr+"$$</td>" +"<td>$$"+parseFloat(totap.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + "$$\\text{MAPE} = \\frac{"+parseFloat(totap.toFixed(2))+"}{"+(rows-1)+"} = \\boxed{"+parseFloat((totap/(rows-1)).toFixed(2))+"} $$"
    MathJax.typeset();
}

function examplevalues(){
    document.getElementById("values").value = "18, 13, 16, 11, 17, 14"
    make6()
    document.getElementById('v1').value="18"
    document.getElementById('v2').value="13"
    document.getElementById('v3').value="16"
    document.getElementById('v4').value="11"
    document.getElementById('v5').value="17"
    document.getElementById('v6').value="14"
    document.getElementById("method").value = "naive"
}

function examplevalues2(){
    document.getElementById("values").value = "24, 13, 20, 12, 19, 23, 15"
    make7()
    document.getElementById('v1').value="24"
    document.getElementById('v2').value="13"
    document.getElementById('v3').value="20"
    document.getElementById('v4').value="12"
    document.getElementById('v5').value="19"
    document.getElementById('v6').value="23"
    document.getElementById('v7').value="15"
    document.getElementById("method").value = "ave"
}
