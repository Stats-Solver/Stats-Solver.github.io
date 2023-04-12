function der(){
    var eq = document.getElementById("equation").value;
    if (isNaN(eq) == false){
        document.getElementById("output").innerHTML = "0"
    } else if (eq == "x"){
        document.getElementById("output").innerHTML = "1"
    } else if (isNaN(eq[0]) == false && eq[1] == "x"){
        document.getElementById("output").innerHTML = eq[0]
    } else if (isNaN(eq[0]) == false && eq[1] == "+" && eq[2] == "x"){
        document.getElementById("output").innerHTML = "1"
    } else if (isNaN(eq[0]) == false && eq[1] == "+" && isNaN(eq[2]) == false && eq[3] == "x"){
        document.getElementById("output").innerHTML = eq[2]
    } else if (eq[0] == "x" && ){
        document.getElementById("output").innerHTML = eq[2]
    }
}