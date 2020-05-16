$("#input2").hide();

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
    $("#input2").hide();
    $("#output").empty();
    var x = document.getElementById("stat").value;
    if (x == "frequency"){
        frequency()
    } else if (x == "relative"){
        relative()
    } else if (x == "percent") {
        percent()
    } else if (x == "bar") {
        bar()
    } else if (x == "pie") {
        pie()
    } else if (x == "histogram") {
        histogram()
    } else if (x == "cumfrequency") {
        cumfrequency()
    } else if (x == "cumrelative") {
        cumrelative()
    } else if (x == "cumpercent") {
        cumpercent()
    } else if (x == "crosstabulation") {
        crosstabulation()
    } else if (x == "scatter") {
        scatter()
    } else if (x == "trend") {
        trend()
    } else{
        document.getElementById("output").innerHTML = ""
    }
   
}

function frequency(){
    var str = document.getElementById("values").value;
    var each = str.split(",").map(Number); var len = each.length;
    var sumeach = sum(each);
    var table = "<tr>" + "<td>" + "$$x$$" + "</td>" + "<td>" + "Frequency" + "</td>" + "</tr>";
    var rows = len;
    var cols = 2;
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$$" + each[r] + "$$</td>";
        table += "<td>$$" + eachminus[r].toFixed(2) + "$$</td>";
        table += "</tr>";
    }
    table = table + "<tr>" + "<td>" + "$$\\Sigma$$" + "</td>" + "<td>$$"+Math.round(sumeachminus)+"$$</td>" + "<td>$$"+sumeachminus2.toFixed(2)+"$$</td>" + "</tr>";
    document.getElementById("output").innerHTML = " <table border=1>" + table + "</table><br>$$s^2 = \\frac{\\sum{(x-\\bar{x})^2}}{n-1} = \\frac{"+sumeachminus2.toFixed(2)+"}{"+len+"-1}="+ansvar.toFixed(2)+"$$"
    MathJax.typeset();
}