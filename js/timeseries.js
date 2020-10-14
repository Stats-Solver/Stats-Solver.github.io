$(".description").hide(); $(".population").hide(); $(".sample").hide(); $("#explanation").hide(); $("#label2").hide(); $("#label3").hide();

$("#orders").hide(); $("#exponential").hide(); $("#blankspace").show(); $("#weights").hide(); $("#holt").hide();

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
    $("#orders").hide(); $("#exponential").hide();  $("#blankspace").show(); $("#weights").hide(); $("#holt").hide();
    var x = document.getElementById("method").value;
    if (x == "moving") {
        $("#orders").show(); $("#blankspace").hide();
    } else if (x == "weighted") {
        $("#orders").show(); $("#blankspace").hide();
    } else if (x == "exponential") {
        $("#exponential").show(); $("#blankspace").hide();
    } else if (x == "holts") {
        $("#exponential").show(); $("#blankspace").hide(); $("#holt").show();
    } 
}

function showweights(){
    var x = document.getElementById("method").value;
    var y = document.getElementById("order").value;
    if (x == "weighted" && y == "2") {
        $("#weights").show(); 
        $("#w1").show(); $("#w2").show(); $("#w3").hide(); $("#w4").hide(); 
    } else if (x == "weighted" && y == "3") {
        $("#weights").show();
        $("#w1").show(); $("#w2").show(); $("#w3").show(); $("#w4").hide(); 
    } else if (x == "weighted" && y == "4") {
        $("#weights").show();
        $("#w1").show(); $("#w2").show(); $("#w3").show(); $("#w4").show(); 
    } else {
        $("#weights").hide();
    }
}

function stat(){
    $("#explanation").hide();
    $("#inputqu").hide(); $("#inputzscore").hide();
    $(".description").hide(); $(".population").hide(); $(".sample").hide();
    $("#output").empty();
    var x = document.getElementById("method").value;
    var y = document.getElementById("stat").value;
    var z = document.getElementById("order").value;
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
    } else if (x == "moving" && y == "forecast" && z == "2") {
        movingforecast2()
    } else if (x == "moving" && y == "error" && z == "2") {
        movingerror2()
    } else if (x == "moving" && y == "mae" && z == "2") {
        movingmae2()
    } else if (x == "moving" && y == "mse" && z == "2") {
        movingmse2()
    } else if (x == "moving" && y == "mape" && z == "2") {
        movingmape2()
    } else if (x == "moving" && y == "forecast" && z == "3") {
        movingforecast3()
    } else if (x == "moving" && y == "error" && z == "3") {
        movingerror3()
    } else if (x == "moving" && y == "mae" && z == "3") {
        movingmae3()
    } else if (x == "moving" && y == "mse" && z == "3") {
        movingmse3()
    } else if (x == "moving" && y == "mape" && z == "3") {
        movingmape3()
    } else if (x == "moving" && y == "forecast" && z == "4") {
        movingforecast4()
    } else if (x == "moving" && y == "error" && z == "4") {
        movingerror4()
    } else if (x == "moving" && y == "mae" && z == "4") {
        movingmae4()
    } else if (x == "moving" && y == "mse" && z == "4") {
        movingmse4()
    } else if (x == "moving" && y == "mape" && z == "4") {
        movingmape4()
    } else if (x == "weighted" && y == "forecast" && z == "2") {
        weightedforecast2()
    } else if (x == "weighted" && y == "error" && z == "2") {
        weightederror2()
    } else if (x == "weighted" && y == "mae" && z == "2") {
        weightedmae2()
    } else if (x == "weighted" && y == "mse" && z == "2") {
        weightedmse2()
    } else if (x == "weighted" && y == "mape" && z == "2") {
        weightedmape2()
    } else if (x == "weighted" && y == "forecast" && z == "3") {
        weightedforecast3()
    } else if (x == "weighted" && y == "error" && z == "3") {
        weightederror3()
    } else if (x == "weighted" && y == "mae" && z == "3") {
        weightedmae3()
    } else if (x == "weighted" && y == "mse" && z == "3") {
        weightedmse3()
    } else if (x == "weighted" && y == "mape" && z == "3") {
        weightedmape3()
    } else if (x == "weighted" && y == "forecast" && z == "4") {
        weightedforecast4()
    } else if (x == "weighted" && y == "error" && z == "4") {
        weightederror4()
    } else if (x == "weighted" && y == "mae" && z == "4") {
        weightedmae4()
    } else if (x == "weighted" && y == "mse" && z == "4") {
        weightedmse4()
    } else if (x == "weighted" && y == "mape" && z == "4") {
        weightedmape4()
    } else if (x == "exponential" && y == "forecast") {
        exponentialforecast()
    } else if (x == "exponential" && y == "error") {
        exponentialerror()
    } else if (x == "exponential" && y == "mae") {
        exponentialmae()
    } else if (x == "exponential" && y == "mse") {
        exponentialmse()
    } else if (x == "exponential" && y == "mape") {
        exponentialmape()
    } else if (x == "linear" && y == "forecast") {
        linearforecast()
    } else if (x == "linear" && y == "error") {
        linearerror()
    } else if (x == "linear" && y == "mae") {
        linearmae()
    } else if (x == "linear" && y == "mse") {
        linearmse()
    } else if (x == "linear" && y == "mape") {
        linearmape()
    } else if (x == "holts" && y == "forecast") {
        holtforecast()
    } else if (x == "holts" && y == "error") {
        holterror()
    } else if (x == "holts" && y == "mae") {
        holtmae()
    } else if (x == "holts" && y == "mse") {
        holtmse()
    } else if (x == "holts" && y == "mape") {
        holtmape()
    } 
   
}

function naiveforecast() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "In the naive method, the forecast of any period is equal to the actual value in the previous period."
    document.getElementById("formulatext").innerHTML = "$$F_{t+1} = Y_t$$"
    document.getElementById("explanationtext").innerHTML = "Despite being the simplest forecasting method, the naive method is actually the most accurate method for forecasting financial data."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+ "<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ Y_" + r + " = " +values[r-1] + "$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = Y_" + rows + " = \\boxed{" + values[rows-1]+ "} $$"
    MathJax.typeset();
}

function naiveerror() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t) $" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + values[r-1] + "$</td>";
        table += "<td>$" + values[r] +" - "+ values[r-1] +" = " + (values[r]-values[r-1]) + "$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function naivemae() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + values[r-1] + "$</td>";
        table += "<td>$" + (values[r]-values[r-1]) + "$</td>";
        table += "<td>$|" + (values[r]-values[r-1]) +"| = " + Math.abs((values[r]-values[r-1])) + "$</td>";
        table += "</tr>";
        total += Math.abs((values[r]-values[r-1]))
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+total+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + total + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function naivemse() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + values[r-1] + "$</td>";
        table += "<td>$" + (values[r]-values[r-1]) + "$</td>";
        table += "<td>$(" + (values[r]-values[r-1]) +")^2 = " + Math.pow((values[r]-values[r-1]),2) + "$</td>";
        table += "</tr>";
        total += Math.pow((values[r]-values[r-1]),2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+total+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\dfrac{" + total + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function naivemape() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + values[r-1] + "$</td>";
        table += "<td>$" + (values[r]-values[r-1]) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + (values[r]-values[r-1]) +"}{" + values[r] + "}\\times 100 \\biggr|  = " + parseFloat((100*Math.abs((values[r]-values[r-1]))/values[r]).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += 100*Math.abs((values[r]-values[r-1]))/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\dfrac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "\\%} $$"
    MathJax.typeset();
} 

function averageforecast() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "In the average method, the forecast of a period is equal to the average of the actual values in all previous periods."
    document.getElementById("formulatext").innerHTML = "$$F_{t+1} = \\frac{\\sum{Y_t}}{t}$$"
    document.getElementById("explanationtext").innerHTML = "The average method is suitable for forecasting patternless data."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>$" + values[0] + "$</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 2; r < rows; r++){
        sums += "+" + values[r-1]
        sumsvalue += values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ \\frac{" + sums + "}{" + r + "} = " + parseFloat((sumsvalue/r).toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    sums = sums + "+" + values[r-1]
    sumsvalue = sumsvalue + values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $ F_" + (rows+1) + " = \\frac{" + sums + "}{" + rows + "} = \\boxed{" + parseFloat((sumsvalue/rows).toFixed(2)) + "} $"
    MathJax.typeset();
}

function averageerror() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/r).toFixed(2)) + "$</td>";
        table += "<td>$" + values[r] +" - "+ parseFloat((sumsvalue/r).toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue/r).toFixed(2)) + "$</td>";
        table += "</tr>";
        sumsvalue += values[r]
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function averagemae() {
    $("#explanation").show();
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/r).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) + "$</td>";
        table += "<td>$|" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue/r).toFixed(2))) + "$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue/r)
        sumsvalue += values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function averagemse() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/r).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) + "$</td>";
        table += "<td>$(" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue/r),2).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue/r,2)
        sumsvalue += values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function averagemape() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/r).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue/r)/values[r]).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue/r)/values[r]
        sumsvalue += values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "\\%} $$"
    MathJax.typeset();
} 

function movingforecast2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "In a moving average of order two, the forecast is equal to the average of the previous two actual values."
    document.getElementById("formulatext").innerHTML = "$F_{t+1} = \\frac{Y_{t-1}+Y_t}{2}$"
    document.getElementById("explanationtext").innerHTML = "The average method is suitable for forecasting patternless, random data."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 2; r < rows; r++){
        sums = values[r-2] + "+" + values[r-1]
        sumsvalue = values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ \\frac{" + sums + "}{" + 2 + "} = " + parseFloat((sumsvalue/2).toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    sums = values[r-2] + "+" + values[r-1]
    sumsvalue = values[r-2] + values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = \\frac{" + sums + "}{" + 2 + "} = \\boxed{" + parseFloat((sumsvalue/2).toFixed(2)) + "} $$"
    MathJax.typeset();
}

function movingerror2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 2; r < rows; r++){
        sumsvalue = values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/2).toFixed(2)) + "$</td>";
        table += "<td>$" + values[r] +" - "+ parseFloat((sumsvalue/2).toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue/2).toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function movingmae2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 2; r < rows; r++){
        sumsvalue = values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/2).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) + "$</td>";
        table += "<td>$|" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue/2).toFixed(2))) + "$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue/2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-2) + "} = \\boxed{" + parseFloat((total/(rows-2)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmse2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 2; r < rows; r++){
        sumsvalue = values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/2).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) + "$</td>";
        table += "<td>$(" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue/2),2).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue/2,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-2) + "} = \\boxed{" + parseFloat((total/(rows-2)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmape2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 2; r < rows; r++){
        sumsvalue = values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/2).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue/2)/values[r]).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue/2)/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-2) + "} = \\boxed{" + parseFloat((total/(rows-2)).toFixed(2)) + " \\% } $$"
    MathJax.typeset();
} 

function movingforecast3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "In a moving average of order three, the forecast is equal to the average of the previous three actual values."
    document.getElementById("formulatext").innerHTML = "$F_{t+1} = \\frac{Y_{t-2}+Y_{t-1}+Y_t}{3}$"
    document.getElementById("explanationtext").innerHTML = "The average method is suitable for forecasting patternless, random data."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 3; r < rows; r++){
        sums = values[r-3] + "+" + values[r-2] + "+" + values[r-1]
        sumsvalue = values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ \\frac{" + sums + "}{" + 3 + "} = " + parseFloat((sumsvalue/3).toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    sums = values[r-3] + "+" + values[r-2] + "+" + values[r-1]
    sumsvalue = values[r-3] + values[r-2] + values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = \\frac{" + sums + "}{" + 3 + "} = \\boxed{" + parseFloat((sumsvalue/3).toFixed(2)) + "} $$"
    MathJax.typeset();
}

function movingerror3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 3; r < rows; r++){
        sumsvalue = values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/3).toFixed(2)) + "$</td>";
        table += "<td>$" + values[r] +" - "+ parseFloat((sumsvalue/3).toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue/3).toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function movingmae3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 3; r < rows; r++){
        sumsvalue = values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/3).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) + "$</td>";
        table += "<td>$|" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue/3).toFixed(2))) + "$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue/3)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-3) + "} = \\boxed{" + parseFloat((total/(rows-3)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmse3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 3; r < rows; r++){
        sumsvalue = values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/3).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) + "$</td>";
        table += "<td>$(" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue/3),2).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue/3,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-3) + "} = \\boxed{" + parseFloat((total/(rows-3)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmape3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 3; r < rows; r++){
        sumsvalue = values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/3).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue/3)/values[r]).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue/3)/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-3) + "} = \\boxed{" + parseFloat((total/(rows-3)).toFixed(2)) + " \\% } $$"
    MathJax.typeset();
} 

function movingforecast4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "In a moving average of order four, the forecast is equal to the average of the previous four actual values."
    document.getElementById("formulatext").innerHTML = "$F_{t+1} = \\frac{Y_{t-3}+Y_{t-2}+Y_{t-1}+Y_t}{4}$"
    document.getElementById("explanationtext").innerHTML = "The average method is suitable for forecasting patternless, random data."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$4$" + "</td>"+ "<td>$" + values[3] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 4; r < rows; r++){
        sums = values[r-4] + "+" +values[r-3] + "+" + values[r-2] + "+" + values[r-1]
        sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ \\frac{" + sums + "}{" + 4 + "} = " + parseFloat((sumsvalue/4).toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    sums = values[r-4] + "+" + values[r-3] + "+" + values[r-2] + "+" + values[r-1]
    sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = \\frac{" + sums + "}{" + 4 + "} = \\boxed{" + parseFloat((sumsvalue/4).toFixed(2)) + "} $$"
    MathJax.typeset();
}

function movingerror4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$4$" + "</td>"+ "<td>$" + values[3] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 4; r < rows; r++){
        sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/4).toFixed(2)) + "$</td>";
        table += "<td>$" + values[r] +" - "+ parseFloat((sumsvalue/4).toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue/4).toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function movingmae4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$4$" + "</td>"+ "<td>$" + values[3] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 4; r < rows; r++){
        sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/4).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) + "$</td>";
        table += "<td>$|" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue/4).toFixed(2))) + "$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue/4)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-4) + "} = \\boxed{" + parseFloat((total/(rows-4)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmse4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$4$" + "</td>"+ "<td>$" + values[3] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 4; r < rows; r++){
        sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/4).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) + "$</td>";
        table += "<td>$(" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue/4),2).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue/4,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-4) + "} = \\boxed{" + parseFloat((total/(rows-4)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmape4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$4$" + "</td>"+ "<td>$" + values[3] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 4; r < rows; r++){
        sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat((sumsvalue/4).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue/4)/values[r]).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue/4)/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-4) + "} = \\boxed{" + parseFloat((total/(rows-4)).toFixed(2)) + " \\% } $$"
    MathJax.typeset();
} 

function weightedforecast2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "In a moving average of order two, the forecast is equal to the average of the previous two actual values."
    document.getElementById("formulatext").innerHTML = "$F_{t+1} = \\frac{Y_{t-1}+Y_t}{2}$"
    document.getElementById("explanationtext").innerHTML = "The average method is suitable for forecasting patternless, random data."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 2; r < rows; r++){
        sums = weight1 + "(" + values[r-2] + ")+ " + weight2 + "(" + values[r-1] + ")"
        sumsvalue = weight1*values[r-2] + weight2*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ " + sums + " = " + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    sums = weight1 + "(" + values[r-2] + ")+ " + weight2 + "(" + values[r-1] + ")"
    sumsvalue = weight1*values[r-2] + weight2*values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = " + sums + " = \\boxed{" + parseFloat(sumsvalue.toFixed(2)) + "} $$"
    MathJax.typeset();
}

function weightederror2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 2; r < rows; r++){
        sumsvalue = weight1*values[r-2] + weight2*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + values[r] +" - "+ parseFloat(sumsvalue.toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function weightedmae2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 2; r < rows; r++){
        sumsvalue = weight1*values[r-2] + weight2*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "<td>$|" + parseFloat((values[r]-sumsvalue).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue).toFixed(2))) + "$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue/2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-2) + "} = \\boxed{" + parseFloat((total/(rows-2)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function weightedmse2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 2; r < rows; r++){
        sumsvalue = weight1*values[r-2] + weight2*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "<td>$(" + parseFloat((values[r]-sumsvalue).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue),2).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue/2,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-2) + "} = \\boxed{" + parseFloat((total/(rows-2)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function weightedmape2() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 2; r < rows; r++){
        sumsvalue = weight1*values[r-2] + weight2*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + parseFloat((values[r]-sumsvalue).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue)/values[r]).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue)/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-2) + "} = \\boxed{" + parseFloat((total/(rows-2)).toFixed(2)) + " \\% } $$"
    MathJax.typeset();
} 

function weightedforecast3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "In a moving average of order three, the forecast is equal to the average of the previous three actual values."
    document.getElementById("formulatext").innerHTML = "$F_{t+1} = \\frac{Y_{t-2}+Y_{t-1}+Y_t}{3}$"
    document.getElementById("explanationtext").innerHTML = "The average method is suitable for forecasting patternless, random data."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var weight3 = document.getElementById("weight3").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 3; r < rows; r++){
        sums = weight1 + " (" + values[r-3] + ")+" + weight2 + " (" + values[r-2] + ")+" + weight3 + " (" + values[r-1] + ")"
        sumsvalue = weight1*values[r-3] + weight2*values[r-2] + weight3*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ " + sums + " = " + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    sums = weight1 + " (" + values[r-3] + ")+" + weight2 + " (" + values[r-2] + ")+" + weight3 + " (" + values[r-1] + ")"
    sumsvalue = weight1*values[r-3] + weight2*values[r-2] + weight3*values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $ F_" + (rows+1) + " = " + sums + " = \\boxed{" + parseFloat(sumsvalue.toFixed(2)) + "} $"
    MathJax.typeset();
}

function weightederror3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var weight3 = document.getElementById("weight3").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 3; r < rows; r++){
        sumsvalue = weight1*values[r-3] + weight2*values[r-2] + weight3*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + values[r] +" - "+ parseFloat(sumsvalue.toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function weightedmae3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var weight3 = document.getElementById("weight3").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 3; r < rows; r++){
        sumsvalue = weight1*values[r-3] + weight2*values[r-2] + weight3*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "<td>$|" + parseFloat((values[r]-sumsvalue).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue).toFixed(2))) + "$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue/3)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-3) + "} = \\boxed{" + parseFloat((total/(rows-3)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function weightedmse3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var weight3 = document.getElementById("weight3").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 3; r < rows; r++){
        sumsvalue = weight1*values[r-3] + weight2*values[r-2] + weight3*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "<td>$(" + parseFloat((values[r]-sumsvalue).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue),2).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-3) + "} = \\boxed{" + parseFloat((total/(rows-3)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function weightedmape3() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var weight3 = document.getElementById("weight3").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 3; r < rows; r++){
        sumsvalue = weight1*values[r-3] + weight2*values[r-2] + weight3*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + parseFloat((values[r]-sumsvalue).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue)/values[r]).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue)/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-3) + "} = \\boxed{" + parseFloat((total/(rows-3)).toFixed(2)) + " \\% } $$"
    MathJax.typeset();
} 

function weightedforecast4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "In a moving average of order four, the forecast is equal to the average of the previous four actual values."
    document.getElementById("formulatext").innerHTML = "$F_{t+1} = \\frac{Y_{t-3}+Y_{t-2}+Y_{t-1}+Y_t}{4}$"
    document.getElementById("explanationtext").innerHTML = "The average method is suitable for forecasting patternless, random data."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var weight3 = document.getElementById("weight3").value;
    var weight4 = document.getElementById("weight4").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$4$" + "</td>"+ "<td>$" + values[3] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 4; r < rows; r++){
        sums = weight1 + "(" + values[r-4] + ")+" + weight2 +  "(" + values[r-3] + ")+" + weight3 +  "(" + values[r-2] + ")+" + weight4 + "(" + values[r-1] + ")"
        sumsvalue = weight1*values[r-4] + weight2*values[r-3] + weight3*values[r-2] + weight4*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ " + sums + " = " + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    sums = weight1 + "(" + values[r-4] + ")+" + weight2 +  "(" + values[r-3] + ")+" + weight3 +  "(" + values[r-2] + ")+" + weight4 + "(" + values[r-1] + ")"
    sumsvalue = weight1*values[r-4] + weight2*values[r-3] + weight3*values[r-2] + weight4*values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = " + sums + " = \\boxed{" + parseFloat(sumsvalue.toFixed(2)) + "} $$"
    MathJax.typeset();
}

function weightederror4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var weight3 = document.getElementById("weight3").value;
    var weight4 = document.getElementById("weight4").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$4$" + "</td>"+ "<td>$" + values[3] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 4; r < rows; r++){
        sumsvalue = weight1*values[r-4] + weight2*values[r-3] + weight3*values[r-2] + weight4*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + values[r] +" - "+ parseFloat(sumsvalue.toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function weightedmae4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var weight3 = document.getElementById("weight3").value;
    var weight4 = document.getElementById("weight4").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$4$" + "</td>"+ "<td>$" + values[3] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 4; r < rows; r++){
        sumsvalue = weight1*values[r-4] + weight2*values[r-3] + weight3*values[r-2] + weight4*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "<td>$|" + parseFloat((values[r]-sumsvalue).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue).toFixed(2))) + "$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-4) + "} = \\boxed{" + parseFloat((total/(rows-4)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function weightedmse4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var weight3 = document.getElementById("weight3").value;
    var weight4 = document.getElementById("weight4").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$4$" + "</td>"+ "<td>$" + values[3] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 4; r < rows; r++){
        sumsvalue = weight1*values[r-4] + weight2*values[r-3] + weight3*values[r-2] + weight4*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "<td>$(" + parseFloat((values[r]-sumsvalue).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue),2).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-4) + "} = \\boxed{" + parseFloat((total/(rows-4)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function weightedmape4() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var weight1 = document.getElementById("weight1").value;
    var weight2 = document.getElementById("weight2").value;
    var weight3 = document.getElementById("weight3").value;
    var weight4 = document.getElementById("weight4").value;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$3$" + "</td>"+ "<td>$" + values[2] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$4$" + "</td>"+ "<td>$" + values[3] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 4; r < rows; r++){
        sumsvalue = weight1*values[r-4] + weight2*values[r-3] + weight3*values[r-2] + weight4*values[r-1]
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(sumsvalue.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((values[r]-sumsvalue).toFixed(2)) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + parseFloat((values[r]-sumsvalue).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue)/values[r]).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue)/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-4) + "} = \\boxed{" + parseFloat((total/(rows-4)).toFixed(2)) + " \\% } $$"
    MathJax.typeset();
} 

function exponentialforecast() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "In simple exponential smoothing, the forecast is equal to a weighted average of the most recent actual value and the most recent forecast."
    document.getElementById("formulatext").innerHTML = "$F_{t+1} = \\alpha Y_t + (1-\\alpha) F_t $"
    document.getElementById("explanationtext").innerHTML = "Simple exponential smoothing is equivalent to taking a weighted average of all previous actual values, where the weights decrease exponentially as you move further into the past."
    var alpha = document.getElementById("alpha").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table >"+ "<tr>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>$ Y_1 = " + values[0] + "$</td>" + "</tr>"
    var forecast = values[0]
    var ans = alpha*values[1] + (1-alpha)*forecast
    for (var r = 2; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ " + alpha + "(" + values[r-1] + ") + (1 - " + alpha + ")(" + parseFloat(forecast.toFixed(2)) + ") = " + parseFloat(ans.toFixed(2)) + "$</td>";
        table += "</tr>";
        forecast = alpha*values[r-1] + (1-alpha)*forecast
        ans = alpha*values[r] + (1-alpha)*forecast
    }
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = " + alpha + "(" + values[r-1] + ") + (1 - " + alpha + ")(" + parseFloat(forecast.toFixed(2)) + ") = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$"
    MathJax.typeset();
}

function exponentialerror() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var alpha = document.getElementById("alpha").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t) $" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>$" + values[0] + "$</td>" + "<td>$ "+values[1]+"-"+values[0]+" = " + (values[1]-values[0]) + "$</td>" + "</tr>"
    var forecast = values[0]
    var ans = alpha*values[1] + (1-alpha)*forecast
    var error = values[1] - forecast
    for (var r = 2; r < rows; r++){
        forecast = alpha*values[r-1] + (1-alpha)*forecast
        error = values[r]-forecast
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ " + parseFloat(ans.toFixed(2)) + "$</td>";
        table += "<td>$" + values[r] +" - "+ parseFloat(forecast.toFixed(2)) +" = " + parseFloat(error.toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function exponentialmae() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var alpha = document.getElementById("alpha").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>$" + values[0] + "$</td>" + "<td>$" + (values[1]-values[0]) + "$</td>"+ "<td>$|" + (values[1]-values[0]) + "| = " + Math.abs((values[1]-values[0]))  + "$</td>" + "</tr>"
    var total = Math.abs(values[1]-values[0])
    var forecast = values[0]
    var ans = alpha*values[1] + (1-alpha)*forecast
    var error = values[1] - forecast
    var abserror = Math.abs(error)
    for (var r = 2; r < rows; r++){
        forecast = alpha*values[r-1] + (1-alpha)*forecast
        error = values[r]-forecast
        abserror = Math.abs(error)
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(error.toFixed(2)) + "$</td>";
        table += "<td>$|" + parseFloat(error.toFixed(2)) +"| = " + parseFloat(abserror.toFixed(2)) + "$</td>";
        table += "</tr>";
        total += abserror
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function exponentialmse() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var alpha = document.getElementById("alpha").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>$" + values[0] + "$</td>" + "<td>$" + (values[1]-values[0]) + "$</td>"+ "<td>$("+ (values[1]-values[0]) + ")^2 = " + Math.pow((values[1]-values[0]),2) + "$</td>" + "</tr>"
    var total = Math.pow((values[1]-values[0]),2)
    var forecast = values[0]
    var ans = alpha*values[1] + (1-alpha)*forecast
    var error = values[1] - forecast
    for (var r = 2; r < rows; r++){
        forecast = alpha*values[r-1] + (1-alpha)*forecast
        error = values[r]-forecast
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(error.toFixed(2)) + "$</td>";
        table += "<td>$(" + parseFloat(error.toFixed(2)) +")^2 = " + parseFloat(Math.pow(error,2).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += Math.pow(error,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function exponentialmape() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var alpha = document.getElementById("alpha").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$2$" + "</td>"+ "<td>$" + values[1] + "$</td>" + "<td>$" + values[0] + "$</td>" + "<td>$" + (values[1]-values[0]) + "$</td>"+ "<td> $ \\biggl| \\dfrac{" + (values[1]-values[0]) + "}{" + values[1] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs((values[1]-values[0])/values[1])).toFixed(2)) + "$ </td>" + "</tr>"
    var total = 0
    var forecast = values[0]
    var ans = alpha*values[1] + (1-alpha)*forecast
    var error = values[1] - forecast
    var aperror = 100*Math.abs(error/values[1])
    for (var r = 2; r < rows; r++){
        forecast = alpha*values[r-1] + (1-alpha)*forecast
        error = values[r]-forecast
        aperror = 100*Math.abs(error/values[r])
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(error.toFixed(2)) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + parseFloat(error.toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat(aperror.toFixed(2)) + "$</td>";
        table += "</tr>";
        total += aperror
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "\\%} $$"
    MathJax.typeset();
} 

function linearforecast() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var ybar = avg(values)
    var t = 0
    var tbar = 0
    for (var s = 0; s < rows+1; s++){
        t += s
        tbar = t/s
    }
    
    var table1 = "<table>" + "<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$t - \\bar{t}$" + "</td>" + "<td>" + "$Y_t - \\bar{Y}$" + "</td>"+ "<td>" + "$(t - \\bar{t})(Y_t - \\bar{Y})$" + "</td>" +"<td>" + "$(t - \\bar{t})^2$" + "</td>"+ "</tr>";

    var total1 = 0
    var total2 = 0
    for (var r = 0; r < rows; r++){
        table1 += "<tr>";
        table1 += "<td>$" + (r+1) + "$</td>";
        table1 += "<td>$" + values[r] + "$</td>";
        table1 += "<td>$" + (r+1-tbar) + "$</td>";
        table1 += "<td>$" + parseFloat((values[r]-ybar).toFixed(2)) + "$</td>";
        table1 += "<td>$" + parseFloat(((r-tbar)*(values[r]-ybar)).toFixed(2)) + "$</td>";
        table1 += "<td>$" + parseFloat(((r-tbar)*(r-tbar)).toFixed(2)) + "$</td>";
        table1 += "</tr>";
        total1 += (r-tbar)*(values[r]-ybar)
        total2 += (r-tbar)*(r-tbar)
    }
    
    var b1 = parseFloat((total1/total2).toFixed(2))
    var b0 = parseFloat((ybar - b1*tbar).toFixed(2))
    
    table1 = table1 + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$0$</td>"+ "<td>$0$</td>" +"<td>$"+parseFloat(total1.toFixed(2))+"$</td>"+"<td>$"+parseFloat(total2.toFixed(2))+"$</td>"+ "</tr>" + "</table>"
    
    var table2 = "<table>"+ "<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    var forecast = 0
    for (var r = 0; r < rows; r++){
        forecast = b0 + b1*(r+1)
        table2 += "<tr>";
        table2 += "<td>$" + (r+1) + "$</td>";
        table2 += "<td>$" + values[r] + "$</td>";
        table2 += "<td>$ " + parseFloat(b0.toFixed(2)) + " + " + parseFloat(b1.toFixed(2)) + " (" + (r+1) + ") = " + parseFloat(forecast.toFixed(2)) + "$</td>";
        table2 += "</tr>";
    }
    var ans = b0 + b1*(rows+1)
    document.getElementById("output").innerHTML = table1 + "$$ b_1 = \\frac{" + parseFloat(total1.toFixed(2)) + "}{" + parseFloat(total2.toFixed(2)) + "} = " + parseFloat(b1.toFixed(2)) + "$$ $$ b_0 = " + parseFloat(ybar.toFixed(2)) + " - " + parseFloat(b1.toFixed(2)) + "(" + tbar + ") = " + parseFloat(b0.toFixed(2)) + " $$ $$ F_t = " + parseFloat(b0.toFixed(2)) + " + " + parseFloat(b1.toFixed(2)) + "t $$" + table2 + "</table> $$ F_"+(rows+1)+" = " + parseFloat(b0.toFixed(2)) + " + " + parseFloat(b1.toFixed(2)) + " (" + (rows+1) + ") = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$"
    MathJax.typeset();
}

function linearerror() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var ybar = avg(values)
    var t = 0
    var tbar = 0
    for (var s = 0; s < rows+1; s++){
        t += s
        tbar = t/s
    }
    var total1 = 0
    var total2 = 0
    for (var r = 0; r < rows; r++){
        total1 += (r-tbar)*(values[r]-ybar)
        total2 += (r-tbar)*(r-tbar)
    }
    var b1 = total1/total2
    var b0 = ybar - b1*tbar
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t) $" + "</td>" + "</tr>";
    var forecast = 0
    var error = 0
    for (var r = 0; r < rows; r++){
        forecast = b0 + b1*(r+1)
        error = values[r]-forecast
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ " + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + values[r] +" - "+ parseFloat(forecast.toFixed(2)) +" = " + parseFloat(error.toFixed(2)) + "$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function linearmae() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var ybar = avg(values)
    var t = 0
    var tbar = 0
    for (var s = 0; s < rows+1; s++){
        t += s
        tbar = t/s
    }
    var total1 = 0
    var total2 = 0
    for (var r = 0; r < rows; r++){
        total1 += (r-tbar)*(values[r]-ybar)
        total2 += (r-tbar)*(r-tbar)
    }
    var b1 = total1/total2
    var b0 = ybar - b1*tbar
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    var total = 0
    var forecast = 0
    var error = 0
    var abserror = Math.abs(error)
    for (var r = 0; r < rows; r++){
        forecast = b0 + b1*(r+1)
        error = values[r]-forecast
        abserror = Math.abs(error)
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(error.toFixed(2)) + "$</td>";
        table += "<td>$|" + parseFloat(error.toFixed(2)) +"| = " + parseFloat(abserror.toFixed(2)) + "$</td>";
        table += "</tr>";
        total += abserror
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + rows + "} = \\boxed{" + parseFloat((total/rows).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function linearmse() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var ybar = avg(values)
    var t = 0
    var tbar = 0
    for (var s = 0; s < rows+1; s++){
        t += s
        tbar = t/s
    }
    var total1 = 0
    var total2 = 0
    for (var r = 0; r < rows; r++){
        total1 += (r-tbar)*(values[r]-ybar)
        total2 += (r-tbar)*(r-tbar)
    }
    var b1 = total1/total2
    var b0 = ybar - b1*tbar
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    var total = 0
    var forecast = 0
    var ans = 0
    var error = 0
    for (var r = 0; r < rows; r++){
        forecast = b0 + b1*(r+1)
        error = values[r]-forecast
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(error.toFixed(2)) + "$</td>";
        table += "<td>$(" + parseFloat(error.toFixed(2)) +")^2 = " + parseFloat(Math.pow(error,2).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += Math.pow(error,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + rows + "} = \\boxed{" + parseFloat((total/rows).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function linearmape() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var ybar = avg(values)
    var t = 0
    var tbar = 0
    for (var s = 0; s < rows+1; s++){
        t += s
        tbar = t/s
    }
    var total1 = 0
    var total2 = 0
    for (var r = 0; r < rows; r++){
        total1 += (r-tbar)*(values[r]-ybar)
        total2 += (r-tbar)*(r-tbar)
    }
    var b1 = total1/total2
    var b0 = ybar - b1*tbar
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    var total = 0
    var forecast = 0
    var ans = 0
    var error = 0
    var aperror = 0
    for (var r = 0; r < rows; r++){
        forecast = b0 + b1*(r+1)
        error = values[r]-forecast
        aperror = 100*Math.abs(error/values[r])
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(error.toFixed(2)) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + parseFloat(error.toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat(aperror.toFixed(2)) + "$</td>";
        table += "</tr>";
        total += aperror
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + rows + "} = \\boxed{" + parseFloat((total/rows).toFixed(2)) + "\\%} $$"
    MathJax.typeset();
} 

function holtforecast() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "In simple exponential smoothing, the forecast is equal to a weighted average of the most recent actual value and the most recent forecast."
    document.getElementById("formulatext").innerHTML = "$F_{t+1} = \\alpha Y_t + (1-\\alpha) F_t $"
    document.getElementById("explanationtext").innerHTML = "Simple exponential smoothing is equivalent to taking a weighted average of all previous actual values, where the weights decrease exponentially as you move further into the past."
    var alpha = document.getElementById("alpha").value;
    var beta = document.getElementById("beta").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table>"+ "<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$L_t$" + "</td>" + "<td>" + "$T_t$" + "</td>" + "<td>" + "$\\text{Forecast } (F_t)$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>" + "<td>$" + values[0] + "$</td>" + "<td>$" + values[0] + "$</td>" + "<td>$" + parseFloat((values[1]-values[0]).toFixed(2)) + "$</td>" + "<td>$ - $</td>" + "</tr>"
    var level = 0
    var trend = 0
    var level1 = values[0]
    var trend1 = values[1]-values[0]
    var forecast = 0
    for (var r = 1; r < rows; r++){
        level = alpha * values[r] + (1 - alpha) * (level1 + trend1)
        trend = beta * (level - level1) + (1 - beta) * trend1 
        forecast = level1 + trend1
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ " + parseFloat(level.toFixed(2)) + "$</td>";
        table += "<td>$ " + parseFloat(trend.toFixed(2)) + "$</td>";
        table += "<td>$ " + parseFloat(level1.toFixed(2)) + "+" + parseFloat(trend1.toFixed(2)) + " = " + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "</tr>";
        level1 = level
        trend1 = trend
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
}

function holterror() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The forecast error is the difference between the actual value and the forecast value."
    document.getElementById("formulatext").innerHTML = "$$e_t = Y_t - F_t$$"
    document.getElementById("explanationtext").innerHTML = "The forecast error measures the amount of error in using the method to forecast a certain period."
    var alpha = document.getElementById("alpha").value;
    var beta = document.getElementById("beta").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$\\text{Error } (e_t) $" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>" + "</tr>"
    var level = 0
    var trend = 0
    var level1 = values[0]
    var trend1 = values[1]-values[0]
    var forecast = 0
    var error = values[1] - forecast
    for (var r = 1; r < rows; r++){
        level = alpha * values[r] + (1 - alpha) * (level1 + trend1)
        trend = beta * (level - level1) + (1 - beta) * trend1 
        forecast = level1 + trend1
        error = values[r]-forecast
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$ " + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + values[r] +" - "+ parseFloat(forecast.toFixed(2)) +" = " + parseFloat(error.toFixed(2)) + "$</td>";
        table += "</tr>";
        level1 = level
        trend1 = trend
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function holtmae() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAE} = \\frac{\\sum{|e_t|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean absolute error is both easy to calculate and to interpret."
    var alpha = document.getElementById("alpha").value;
    var beta = document.getElementById("beta").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var total = 0
    var level = 0
    var trend = 0
    var level1 = values[0]
    var trend1 = values[1]-values[0]
    var forecast = 0
    var error = values[1] - forecast
    var abserror = Math.abs(error)
    for (var r = 1; r < rows; r++){
        level = alpha * values[r] + (1 - alpha) * (level1 + trend1)
        trend = beta * (level - level1) + (1 - beta) * trend1 
        forecast = level1 + trend1
        error = values[r]-forecast
        abserror = Math.abs(error)
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(error.toFixed(2)) + "$</td>";
        table += "<td>$|" + parseFloat(error.toFixed(2)) +"| = " + parseFloat(abserror.toFixed(2)) + "$</td>";
        table += "</tr>";
        total += abserror
        level1 = level
        trend1 = trend
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function holtmse() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean squared error is a scale-dependent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MSE} = \\frac{\\sum{e_t^2}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "The mean square error is the more commonly used scale-dependent measure of forecast accuracy."
    var alpha = document.getElementById("alpha").value;
    var beta = document.getElementById("beta").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{Error}^2$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var total = 0
    var level = 0
    var trend = 0
    var level1 = values[0]
    var trend1 = values[1]-values[0]
    var forecast = 0
    var error = values[1] - forecast
    for (var r = 1; r < rows; r++){
        level = alpha * values[r] + (1 - alpha) * (level1 + trend1)
        trend = beta * (level - level1) + (1 - beta) * trend1 
        forecast = level1 + trend1
        error = values[r]-forecast
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(error.toFixed(2)) + "$</td>";
        table += "<td>$(" + parseFloat(error.toFixed(2)) +")^2 = " + parseFloat(Math.pow(error,2).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += Math.pow(error,2)
        level1 = level
        trend1 = trend
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function holtmape() {
    $("#explanation").show();
    document.getElementById("descriptiontext").innerHTML = "The mean absolute percentage error is a scale-independent measure of forecast accuracy."
    document.getElementById("formulatext").innerHTML = "$$ \\text{MAPE} = \\frac{\\sum{\\biggl|\\dfrac{e_t}{Y_t} \\times 100 \\biggr|}}{t} $$"
    document.getElementById("explanationtext").innerHTML = "Since the mean absolute percentage error is scale-independent, it is useful in comparing error across data sets with different scales."
    var alpha = document.getElementById("alpha").value;
    var beta = document.getElementById("beta").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table =  "<table>"+"<tr style='border-bottom: thin solid'>" + "<td>" + "$t$" + "</td>"+ "<td>" + "$Y_t$" + "</td>" + "<td>" + "$F_t$" + "</td>" + "<td>" + "$e_t$" + "</td>"+ "<td>" + "$\\text{|%Error|}$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$1$" + "</td>"+ "<td>$" + values[0] + "$</td>" + "<td>" + "$-$" + "</td>" + "<td>" + "$-$" + "</td>"+ "<td>" + "$-$" + "</td>" + "</tr>"
    var total = 0
    var level = 0
    var trend = 0
    var level1 = values[0]
    var trend1 = values[1]-values[0]
    var forecast = 0
    var error = values[1] - forecast
    var aperror = 100*Math.abs(error/values[1])
    for (var r = 1; r < rows; r++){
        level = alpha * values[r] + (1 - alpha) * (level1 + trend1)
        trend = beta * (level - level1) + (1 - beta) * trend1 
        forecast = level1 + trend1
        error = values[r]-forecast
        aperror = 100*Math.abs(error/values[r])
        table += "<tr>";
        table += "<td>$" + (r+1) + "$</td>";
        table += "<td>$" + values[r] + "$</td>";
        table += "<td>$" + parseFloat(forecast.toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat(error.toFixed(2)) + "$</td>";
        table += "<td>$ \\biggl| \\dfrac{" + parseFloat(error.toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat(aperror.toFixed(2)) + "$</td>";
        table += "</tr>";
        total += aperror
        level1 = level
        trend1 = trend
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>"+"$-$"+"</td>"+ "<td>$"+"-"+"$</td>" +"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "\\%} $$"
    MathJax.typeset();
} 

function examplevalues(){
    document.getElementById("values").value = "18, 13, 16, 11, 17, 14"
}

function examplevalues2(){
    document.getElementById("values").value = "24, 13, 20, 12, 19, 23, 15"
}

function examplevalues11(){
    $("#orders").hide(); $("#exponential").show(); $("#blankspace").hide(); $("#holt").hide();  
    document.getElementById("values").value = "18, 13, 16, 11, 17, 14"
    document.getElementById("method").value = "exponential"
    document.getElementById("alpha").value = ".2"
    document.getElementById("stat").value = "forecast"
}

function examplevalues22(){
    $("#orders").show(); $("#exponential").hide(); $("#blankspace").hide(); $("#holt").hide();
    document.getElementById("values").value = "24, 13, 20, 12, 19, 23, 15"
    document.getElementById("method").value = "moving"
    document.getElementById("order").value = "3"
    document.getElementById("stat").value = "mae"
}

function examplevalues3(){
    $("#orders").hide(); $("#exponential").show(); $("#blankspace").hide(); $("#holt").show(); 
    document.getElementById("values").value = "21.6, 22.9, 25.5, 21.9, 23.9, 27.5, 31.5, 29.7, 28.6, 31.4"
    document.getElementById("method").value = "holts"
    document.getElementById("alpha").value = ".1"
    document.getElementById("beta").value = ".2"
    document.getElementById("stat").value = "mape"
}