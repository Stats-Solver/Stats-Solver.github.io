$(".description").hide(); $(".population").hide(); $(".sample").hide(); $("#explanation").hide(); $("#label2").hide(); $("#label3").hide();

$("#orders").hide(); $("#exponential").hide(); $("#blankspace").show(); 

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
    $("#orders").hide(); $("#exponential").hide();  $("#blankspace").show();
    var x = document.getElementById("method").value;
    if (x == "moving") {
        $("#orders").show(); $("#blankspace").hide();
    } else if (x == "exponential") {
        $("#exponential").show(); $("#blankspace").hide();
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
    } 
   
}

function naiveforecast() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+ "<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$\\text{Forecast } (F_t)$$" + "</td>" + "</tr>";
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
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$\\text{Error } (e_t) $$" + "</td>" + "</tr>";
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
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|Error|}$$" + "</td>" + "</tr>";
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
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + total + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function naivemse() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{Error}^2$$" + "</td>" + "</tr>";
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
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + total + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function naivemape() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|%Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + values[r-1] + "$$</td>";
        table += "<td>$$" + (values[r]-values[r-1]) + "$$</td>";
        table += "<td>$$ \\biggl| \\frac{" + (values[r]-values[r-1]) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs((values[r]-values[r-1]))/values[r]).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += 100*Math.abs((values[r]-values[r-1]))/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "\\%} $$"
    MathJax.typeset();
} 

function averageforecast() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$\\text{Forecast } (F_t)$$" + "</td>" + "</tr>";
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
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$\\text{Error } (e_t)$$" + "</td>" + "</tr>";
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
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|Error|}$$" + "</td>" + "</tr>";
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
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function averagemse() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{Error}^2$$" + "</td>" + "</tr>";
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
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function averagemape() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|%Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 1; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) + "$$</td>";
        table += "<td>$$ \\biggl| \\frac{" + parseFloat((values[r]-sumsvalue/r).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue/r)/values[r]).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue/r)/values[r]
        sumsvalue += values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "\\%} $$"
    MathJax.typeset();
} 

function movingforecast2() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$\\text{Forecast } (F_t)$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 2; r < rows; r++){
        sums = values[r-2] + "+" + values[r-1]
        sumsvalue = values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$ \\frac{" + sums + "}{" + 2 + "} = " + parseFloat((sumsvalue/2).toFixed(2)) + "$$</td>";
        table += "</tr>";
    }
    sums = values[r-2] + "+" + values[r-1]
    sumsvalue = values[r-2] + values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = \\frac{" + sums + "}{" + 2 + "} = \\boxed{" + parseFloat((sumsvalue/2).toFixed(2)) + "} $$"
    MathJax.typeset();
}

function movingerror2() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$\\text{Error } (e_t)$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 2; r < rows; r++){
        sumsvalue = values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/2).toFixed(2)) + "$$</td>";
        table += "<td>$$" + values[r] +" - "+ parseFloat((sumsvalue/2).toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue/2).toFixed(2)) + "$$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function movingmae2() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 2; r < rows; r++){
        sumsvalue = values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/2).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) + "$$</td>";
        table += "<td>$$|" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue/2).toFixed(2))) + "$$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue/2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-2) + "} = \\boxed{" + parseFloat((total/(rows-2)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmse2() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{Error}^2$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 2; r < rows; r++){
        sumsvalue = values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/2).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) + "$$</td>";
        table += "<td>$$(" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue/2),2).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue/2,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-2) + "} = \\boxed{" + parseFloat((total/(rows-2)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmape2() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|%Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 2; r < rows; r++){
        sumsvalue = values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/2).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) + "$$</td>";
        table += "<td>$$ \\biggl| \\frac{" + parseFloat((values[r]-sumsvalue/2).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue/2)/values[r]).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue/2)/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-2) + "} = \\boxed{" + parseFloat((total/(rows-2)).toFixed(2)) + " \\% } $$"
    MathJax.typeset();
} 

function movingforecast3() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$\\text{Forecast } (F_t)$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$3$$" + "</td>"+ "<td>$$" + values[2] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 3; r < rows; r++){
        sums = values[r-3] + "+" + values[r-2] + "+" + values[r-1]
        sumsvalue = values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$ \\frac{" + sums + "}{" + 3 + "} = " + parseFloat((sumsvalue/3).toFixed(2)) + "$$</td>";
        table += "</tr>";
    }
    sums = values[r-3] + "+" + values[r-2] + "+" + values[r-1]
    sumsvalue = values[r-3] + values[r-2] + values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = \\frac{" + sums + "}{" + 3 + "} = \\boxed{" + parseFloat((sumsvalue/3).toFixed(2)) + "} $$"
    MathJax.typeset();
}

function movingerror3() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$\\text{Error } (e_t)$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$3$$" + "</td>"+ "<td>$$" + values[2] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 3; r < rows; r++){
        sumsvalue = values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/3).toFixed(2)) + "$$</td>";
        table += "<td>$$" + values[r] +" - "+ parseFloat((sumsvalue/3).toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue/3).toFixed(2)) + "$$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function movingmae3() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$3$$" + "</td>"+ "<td>$$" + values[2] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 3; r < rows; r++){
        sumsvalue = values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/3).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) + "$$</td>";
        table += "<td>$$|" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue/3).toFixed(2))) + "$$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue/3)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-3) + "} = \\boxed{" + parseFloat((total/(rows-3)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmse3() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{Error}^2$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$3$$" + "</td>"+ "<td>$$" + values[2] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 3; r < rows; r++){
        sumsvalue = values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/3).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) + "$$</td>";
        table += "<td>$$(" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue/3),2).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue/3,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-3) + "} = \\boxed{" + parseFloat((total/(rows-3)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmape3() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|%Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$3$$" + "</td>"+ "<td>$$" + values[2] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 3; r < rows; r++){
        sumsvalue = values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/3).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) + "$$</td>";
        table += "<td>$$ \\biggl| \\frac{" + parseFloat((values[r]-sumsvalue/3).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue/3)/values[r]).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue/3)/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-3) + "} = \\boxed{" + parseFloat((total/(rows-3)).toFixed(2)) + " \\% } $$"
    MathJax.typeset();
} 

function movingforecast4() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$\\text{Forecast } (F_t)$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$3$$" + "</td>"+ "<td>$$" + values[2] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$4$$" + "</td>"+ "<td>$$" + values[3] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sums = values[0]
    var sumsvalue = values[0]
    for (var r = 4; r < rows; r++){
        sums = values[r-4] + "+" +values[r-3] + "+" + values[r-2] + "+" + values[r-1]
        sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$ \\frac{" + sums + "}{" + 4 + "} = " + parseFloat((sumsvalue/4).toFixed(2)) + "$$</td>";
        table += "</tr>";
    }
    sums = values[r-4] + "+" + values[r-3] + "+" + values[r-2] + "+" + values[r-1]
    sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = \\frac{" + sums + "}{" + 4 + "} = \\boxed{" + parseFloat((sumsvalue/4).toFixed(2)) + "} $$"
    MathJax.typeset();
}

function movingerror4() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$\\text{Error } (e_t)$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$3$$" + "</td>"+ "<td>$$" + values[2] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$4$$" + "</td>"+ "<td>$$" + values[3] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    for (var r = 4; r < rows; r++){
        sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/4).toFixed(2)) + "$$</td>";
        table += "<td>$$" + values[r] +" - "+ parseFloat((sumsvalue/4).toFixed(2)) +" = " + parseFloat((values[r]-sumsvalue/4).toFixed(2)) + "$$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function movingmae4() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$3$$" + "</td>"+ "<td>$$" + values[2] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$4$$" + "</td>"+ "<td>$$" + values[3] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 4; r < rows; r++){
        sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/4).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) + "$$</td>";
        table += "<td>$$|" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) +"| = " + Math.abs(parseFloat((values[r]-sumsvalue/4).toFixed(2))) + "$$</td>";
        table += "</tr>";
        total += Math.abs(values[r]-sumsvalue/4)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-4) + "} = \\boxed{" + parseFloat((total/(rows-4)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmse4() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{Error}^2$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$3$$" + "</td>"+ "<td>$$" + values[2] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$4$$" + "</td>"+ "<td>$$" + values[3] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 4; r < rows; r++){
        sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/4).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) + "$$</td>";
        table += "<td>$$(" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) +")^2 = " + parseFloat(Math.pow((values[r]-sumsvalue/4),2).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += Math.pow(values[r]-sumsvalue/4,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-4) + "} = \\boxed{" + parseFloat((total/(rows-4)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function movingmape4() {
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|%Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$3$$" + "</td>"+ "<td>$$" + values[2] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$4$$" + "</td>"+ "<td>$$" + values[3] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    var sumsvalue = values[0]
    var total = 0
    for (var r = 4; r < rows; r++){
        sumsvalue = values[r-4] + values[r-3] + values[r-2] + values[r-1]
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat((sumsvalue/4).toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) + "$$</td>";
        table += "<td>$$ \\biggl| \\frac{" + parseFloat((values[r]-sumsvalue/4).toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs(values[r]-sumsvalue/4)/values[r]).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += 100*Math.abs(values[r]-sumsvalue/4)/values[r]
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-4) + "} = \\boxed{" + parseFloat((total/(rows-4)).toFixed(2)) + " \\% } $$"
    MathJax.typeset();
} 


function exponentialforecast() {
    var alpha = document.getElementById("alpha").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+ "<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$\\text{Forecast } (F_t)$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>$$ Y_1 = " + values[0] + "$$</td>" + "</tr>"
    var forecast = values[0]
    var ans = alpha*values[1] + (1-alpha)*forecast
    for (var r = 2; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$ " + alpha + "(" + values[r-1] + ") + " + (1-alpha) + "(" + parseFloat(forecast.toFixed(2)) + ") = " + parseFloat(ans.toFixed(2)) + "$$</td>";
        table += "</tr>";
        forecast = alpha*values[r-1] + (1-alpha)*forecast
        ans = alpha*values[r] + (1-alpha)*forecast
    }
    document.getElementById("output").innerHTML = table + "</table> $$ F_" + (rows+1) + " = " + alpha + "(" + values[r-1] + ") + " + (1-alpha) + "(" + parseFloat(forecast.toFixed(2)) + ") = \\boxed{" + parseFloat(ans.toFixed(2)) + "} $$"
    MathJax.typeset();
}

function exponentialerror() {
    var alpha = document.getElementById("alpha").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$\\text{Error } (e_t) $$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>$$" + values[0] + "$$</td>" + "<td>$$ "+values[1]+"-"+values[0]+" = " + (values[1]-values[0]) + "$$</td>" + "</tr>"
    var forecast = values[0]
    var ans = alpha*values[1] + (1-alpha)*forecast
    var error = values[1] - forecast
    for (var r = 2; r < rows; r++){
        forecast = alpha*values[r-1] + (1-alpha)*forecast
        error = values[r]-forecast
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$ " + parseFloat(ans.toFixed(2)) + "$$</td>";
        table += "<td>$$" + values[r] +" - "+ parseFloat(forecast.toFixed(2)) +" = " + parseFloat(error.toFixed(2)) + "$$</td>";
        table += "</tr>";
    }
    document.getElementById("output").innerHTML = table
    MathJax.typeset();
} 

function exponentialmae() {
    var alpha = document.getElementById("alpha").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>$$" + values[0] + "$$</td>" + "<td>$$" + (values[1]-values[0]) + "$$</td>"+ "<td>$$|" + (values[1]-values[0]) + "| = " + Math.abs((values[1]-values[0]))  + "$$</td>" + "</tr>"
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
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat(forecast.toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat(error.toFixed(2)) + "$$</td>";
        table += "<td>$$|" + parseFloat(error.toFixed(2)) +"| = " + parseFloat(abserror.toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += abserror
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function exponentialmse() {
    var alpha = document.getElementById("alpha").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{Error}^2$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>$$" + values[0] + "$$</td>" + "<td>$$" + (values[1]-values[0]) + "$$</td>"+ "<td>$$("+ (values[1]-values[0]) + ")^2 = " + Math.pow((values[1]-values[0]),2) + "$$</td>" + "</tr>"
    var total = Math.pow((values[1]-values[0]),2)
    var forecast = values[0]
    var ans = alpha*values[1] + (1-alpha)*forecast
    var error = values[1] - forecast
    for (var r = 2; r < rows; r++){
        forecast = alpha*values[r-1] + (1-alpha)*forecast
        error = values[r]-forecast
        table += "<tr>";
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat(forecast.toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat(error.toFixed(2)) + "$$</td>";
        table += "<td>$$(" + parseFloat(error.toFixed(2)) +")^2 = " + parseFloat(Math.pow(error,2).toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += Math.pow(error,2)
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MSE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "} $$"
    MathJax.typeset();
} 

function exponentialmape() {
    var alpha = document.getElementById("alpha").value;
    var str = document.getElementById("values").value;
    var values = str.split(",").map(Number);
    var rows = values.length;
    var table = "<table border=1>"+"<tr>" + "<td>" + "$$t$$" + "</td>"+ "<td>" + "$$Y_t$$" + "</td>" + "<td>" + "$$F_t$$" + "</td>" + "<td>" + "$$e_t$$" + "</td>"+ "<td>" + "$$\\text{|%Error|}$$" + "</td>" + "</tr>";
    table = table + "<tr>" + "<td>" + "$$1$$" + "</td>"+ "<td>$$" + values[0] + "$$</td>" + "<td>" + "$$-$$" + "</td>" + "<td>" + "$$-$$" + "</td>"+ "<td>" + "$$-$$" + "</td>" + "</tr>"
    table = table + "<tr>" + "<td>" + "$$2$$" + "</td>"+ "<td>$$" + values[1] + "$$</td>" + "<td>$$" + values[0] + "$$</td>" + "<td>$$" + (values[1]-values[0]) + "$$</td>"+ "<td> $$ \\biggl| \\frac{" + (values[1]-values[0]) + "}{" + values[1] + "} \\biggr| \\times 100 = " + parseFloat((100*Math.abs((values[1]-values[0])/values[1])).toFixed(2)) + "$$ </td>" + "</tr>"
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
        table += "<td>$$" + (r+1) + "$$</td>";
        table += "<td>$$" + values[r] + "$$</td>";
        table += "<td>$$" + parseFloat(forecast.toFixed(2)) + "$$</td>";
        table += "<td>$$" + parseFloat(error.toFixed(2)) + "$$</td>";
        table += "<td>$$ \\biggl| \\frac{" + parseFloat(error.toFixed(2)) +"}{" + values[r] + "} \\biggr| \\times 100 = " + parseFloat(aperror.toFixed(2)) + "$$</td>";
        table += "</tr>";
        total += aperror
    }
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>"+"$$-$$"+"</td>" + "<td>"+"$$-$$"+"</td>"+ "<td>$$"+"-"+"$$</td>" +"<td>$$"+parseFloat(total.toFixed(2))+"$$</td>"+ "</tr>"+ "</table>";
    document.getElementById("output").innerHTML = table + " $$ \\text{MAPE} = \\frac{" + parseFloat(total.toFixed(2)) + "}{" + (rows-1) + "} = \\boxed{" + parseFloat((total/(rows-1)).toFixed(2)) + "\\%} $$"
    MathJax.typeset();
} 



function examplevalues(){
    $("#orders").hide(); $("#exponential").hide(); $("#blankspace").show(); 
    document.getElementById("values").value = "18, 13, 16, 11, 17, 14"
    document.getElementById("method").value = "naive"
    document.getElementById("stat").value = "error"
}

function examplevalues2(){
    $("#orders").show(); $("#exponential").hide(); $("#blankspace").hide();  
    document.getElementById("values").value = "24, 13, 20, 12, 19, 23, 15"
    document.getElementById("method").value = "moving"
    document.getElementById("order").value = "3"
    document.getElementById("stat").value = "mae"
}

function examplevalues3(){
    $("#orders").hide(); $("#exponential").show(); $("#blankspace").hide();  
    document.getElementById("values").value = "18, 13, 16, 11, 17, 14"
    document.getElementById("method").value = "exponential"
    document.getElementById("alpha").value = ".2"
    document.getElementById("stat").value = "forecast"
}
