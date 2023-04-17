

function der(){
    $("#how").hide();
    var eq = document.getElementById("equation").value;
    var f = eq.split("+")
    var s1 = []; var s2 = []
    var steps = []; var d = []
    for (i = 0; i < f.length; i++){
        if (f[i].includes("^") == false){
            if (isNaN(f[i]) == false){                                                                            // a
                d[i] = "0"
            } else if (f[i].includes("x") == true){                                                               // ax
                var a = f[i].substr(0, f[i].indexOf('x'))
                if (a == ""){
                    d[i] = 1
                } else{
                    s1[i] = a + "\\cdot \\frac{d}{dx}(x)"
                    s2[i] = a + "\\cdot 1"
                    steps[i] = 2
                    d[i] = a 
                }
            } 
        } else{                                                                                                // ax^b
            var a = f[i].substr(0, f[i].indexOf('x'))
            var b = f[i].substr(f[i].indexOf('^') + 1)
            if (a == ""){
                s1[i] = b + " x ^ {" + b +" - 1} " 
                steps[i] = 1
                if (b == 2){
                    d[i] = b + "x"
                } else{
                    d[i] = b + "x^" + (b - 1)
                }  
            } else{
                s1[i] = a + "\\cdot \\frac{d}{dx} ( x ^ " + b +" )"
                s2[i] = a + "\\cdot " + b + " x ^ {" + b +" - 1} " 
                steps[i] = 2
                if (b == 2){
                    d[i] = (b * a) + "x"
                } else{
                    d[i] = (b * a) + "x^" + (b - 1)
                }  
            }
            
        }
        if (s1[i] == null){s1[i] = d[i]}
        if (s2[i] == null){s2[i] = d[i]}
    }
    
    var equation = eq
    
    var df = []
    for (i = 0; i < f.length; i++){
        df[i] = "\\frac{d}{dx}(" + f[i] + ")"
    }
    var equationsplit = df.join("+")
    
    var step = []
    step[1] = s1.join("+")
    step[2] = s2.join("+")
    var allsteps = "&= "+step[1]+" \\\\ &= "+step[2]+" \\\\ "
    
    
    
    var derivative = d.join("+")

    if (f.length == 1){
        document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+equation+") \\\\ "+allsteps+" &= \\boxed{" + derivative + "} \\end{align} $"
    } else{
        document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+equation+") \\\\ &= "+equationsplit+" \\\\  "+allsteps+"  &= \\boxed{" + derivative + "} \\end{align} $"
    }
    
    
    MathJax.typeset();
   
}


































































function der2(){
    $("#how").hide();
    var f = document.getElementById("equation").value;
    var count = (f.match(/\+/g) || []).length;
    var fm = f.substr(1)
    if (f.includes("+") == false && fm.includes("-") == false){
        if (f.includes("^") == false){
            if (isNaN(f) == false){                                                                            // a
                var d = "0"
            } else if (f.includes("x") == true){                                                               // ax
                var a = f.substr(0, f.indexOf('x'))
                if (a == ""){
                    var d = 1
                } else{
                    var s1 = a + "\\cdot \\frac{d}{dx}(x)"
                    var s2 = a + "\\cdot 1"
                    steps = 2
                    var d = a 
                }
            } 
        } else{                                                                                                // ax^b
            var ax = f.substr(0, f.indexOf('^'))
            var a = f.substr(0, f.indexOf('x'))
            var b = f.substr(f.indexOf('^') + 1)
            if (a == ""){
                var s1 = b + " x ^ {" + b +" - 1} " 
                steps = 1
                if (b == 2){
                    var d = b + "x"
                } else{
                    var d = b + "x^" + (b - 1)
                }  
            } else{
                var s1 = a + "\\cdot \\frac{d}{dx} ( x ^ " + b +" )"
                var s2 = a + "\\cdot " + b + " x ^ {" + b +" - 1} " 
                steps = 2
                if (b == 2){
                    var d = (b * a) + "x"
                } else{
                    var d = (b * a) + "x^" + (b - 1)
                }  
            }
            
        }   
    } else if (f.includes("+") == true || fm.includes("-") == true) {                                           // Addition/Subtraction
        functions = 2
        if (f.includes("+") == true){
            var f1 = f.substr(0, f.indexOf('+'))
            var f2 = f.substr(f.indexOf('+') + 1)
            var sign = "+"
        } else if (fm.includes("-") == true){
            var f1 = f.substr(0, f.indexOf('-'))
            var f2 = f.substr(f.indexOf('-') + 1)
            var sign = "-"
        }
        if (f1.includes("^") == false){
            if (isNaN(f1) == false){                                                                            // a
                var d1 = "0"
            } else if (f1.includes("x") == true){                                                               // ax
                var a = f1.substr(0, f1.indexOf('x'))
                if (a == ""){
                    var d1 = 1
                } else{
                    var f1s1 = a + "\\cdot \\frac{d}{dx}(x)"
                    var f1s2 = a + "\\cdot 1"
                    f1steps = 2
                    var d1 = a 
                }
            } 
        } else{                                                                                                // ax^b
            var a = f1.substr(0, f1.indexOf('x'))
            var b = f1.substr(f1.indexOf('^') + 1)
            if (a == ""){
                var f1s1 = b + " x ^ {" + b +" - 1} " 
                f1steps = 1
                if (b == 2){
                    var d1 = b + "x"
                } else{
                    var d1 = b + "x^" + (b - 1)
                }  
            } else{
                var f1s1 = a + "\\cdot \\frac{d}{dx} ( x ^ " + b +" )"
                var f1s2 = a + "\\cdot " + b + " x ^ {" + b +" - 1} " 
                f1steps = 2
                if (b == 2){
                    var d1 = (b * a) + "x"
                } else{
                    var d1 = (b * a) + "x^" + (b - 1)
                }  
            }
            
        }  
        if (f2.includes("^") == false){
            if (isNaN(f2) == false){                                                                            // a
                var d2 = "0"
            } else if (f2.includes("x") == true){                                                               // ax
                var a = f2.substr(0, f2.indexOf('x'))
                if (a == ""){
                    var d2 = 1
                } else{
                    var f2s1 = a + "\\cdot \\frac{d}{dx}(x)"
                    var f2s2 = a + "\\cdot 1"
                    f2steps = 2
                    var d2 = a 
                }
            } 
        } else{                                                                                                // ax^b
            var a = f2.substr(0, f2.indexOf('x'))
            var b = f2.substr(f2.indexOf('^') + 1)
            if (a == ""){
                var f2s1 = b + " x ^ {" + b +" - 1} " 
                f2steps = 1
                if (b == 2){
                    var d2 = b + "x"
                } else{
                    var d2 = b + "x^" + (b - 1)
                }  
            } else{
                var f2s1 = a + "\\cdot \\frac{d}{dx} ( x ^ " + b +" )"
                var f2s2 = a + "\\cdot " + b + " x ^ {" + b +" - 1} " 
                f2steps = 2
                if (b == 2){
                    var d2 = (b * a) + "x"
                } else{
                    var d2 = (b * a) + "x^" + (b - 1)
                }  
            }
            
        }
        if (f.includes("+") == true){
            var d = d1 + "+" + d2
        } else if (fm.includes("-") == true){
            var d = d1 + "-" + d2
        }
    } 
    
    if (functions == 1){
        if (steps == 0){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\ &= \\boxed{" + d + "} \\end{align} $"
        } else if (steps == 1){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\  &= " + s1 + " \\\\  &= \\boxed{" + d + "} \\end{align} $"
        } else if (steps == 2){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\  &= " + s1 + " \\\\ &= " + s2 + " \\\\  &= \\boxed{" + d + "} \\end{align} $"
        }  
    } else if (functions == 2){
        if (f1steps == 0 & f2steps == 0){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\ &= \\frac{d}{dx} ("+f1+") " + sign + " \\frac{d}{dx} ("+f2+") \\\\ &= \\boxed{" + d + "} \\end{align} $"
        } else if (f1steps == 0 & f2steps == 1){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\ &= \\frac{d}{dx} ("+f1+") " + sign + " \\frac{d}{dx} ("+f2+") \\\\ &= " + d1 + sign + f2s1 + " \\\\ &= \\boxed{" + d + "} \\end{align} $"
        } else if (f1steps == 0 & f2steps == 2){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\ &= \\frac{d}{dx} ("+f1+") " + sign + " \\frac{d}{dx} ("+f2+") \\\\ &= " + d1 + sign + f2s1 + " \\\\ &= " + d1 + " + " + f2s2 + " \\\\ &= \\boxed{" + d + "} \\end{align} $"
        } else if (f1steps == 1 & f2steps == 0){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\ &= \\frac{d}{dx} ("+f1+") " + sign + " \\frac{d}{dx} ("+f2+") \\\\ &= " + f1s1 + sign + d2 + " \\\\ &= \\boxed{" + d + "} \\end{align} $"
        } else if (f1steps == 1 & f2steps == 1){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\ &= \\frac{d}{dx} ("+f1+") " + sign + " \\frac{d}{dx} ("+f2+") \\\\ &= " + f1s1 + sign + f2s1 + " \\\\ &= \\boxed{" + d + "} \\end{align} $"
        } else if (f1steps == 1 & f2steps == 2){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\ &= \\frac{d}{dx} ("+f1+") " + sign + " \\frac{d}{dx} ("+f2+") \\\\ &= " + f1s1 + sign + f2s1 + " \\\\ &= " + d1 + sign + f2s2 + " \\\\ &= \\boxed{" + d + "} \\end{align} $"
        } else if (f1steps == 2 & f2steps == 0){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\ &= \\frac{d}{dx} ("+f1+") " + sign + " \\frac{d}{dx} ("+f2+") \\\\ &= " + f1s1 + sign + d2 + " \\\\ &= " + f1s2 + sign + d2 + " \\\\ &= \\boxed{" + d + "} \\end{align} $"
        } else if (f1steps == 2 & f2steps == 1){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\ &= \\frac{d}{dx} ("+f1+") " + sign + " \\frac{d}{dx} ("+f2+") \\\\ &= " + f1s1 + sign + f2s1 + " \\\\ &= " + f1s2 + sign + d2 + " \\\\ &= \\boxed{" + d + "} \\end{align} $"
        } else if (f1steps == 2 & f2steps == 2){
            document.getElementById("output").innerHTML = "$ \\begin{align} f'(x) &= \\frac{d}{dx} ("+f+") \\\\ &= \\frac{d}{dx} ("+f1+") " + sign + " \\frac{d}{dx} ("+f2+") \\\\ &= " + f1s1 + sign + f2s1 + " \\\\ &= " + f1s2 + sign + f2s2 + " \\\\ &= \\boxed{" + d + "} \\end{align} $"
        }   
    }
    
    document.getElementById("test").innerHTML = count
        
    steps = 0
    f1steps = 0
    f2steps = 0
    functions = 1
    MathJax.typeset();
    
    
}
























function examplexvalues(){
    document.getElementById('equation').value="4x"
}

function examplexvalues2(){
    document.getElementById('equation').value="5x^3"
}

function examplexvalues3(){
    document.getElementById('equation').value="5x+x^3"
}

function examplexvalues4(){
    document.getElementById('equation').value="5x^3+4"
}

function examplexvalues5(){
    document.getElementById('equation').value="5x^3+4x+6x^2"
}