function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+0.2316419*Math.abs(X));
	var D=0.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(0.3193815+T*(-0.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob;
	}
	return Prob;
} 

function NormSInv(p) {
    var a1 = -39.6968302866538, a2 = 220.946098424521, a3 = -275.928510446969;
    var a4 = 138.357751867269, a5 = -30.6647980661472, a6 = 2.50662827745924;
    var b1 = -54.4760987982241, b2 = 161.585836858041, b3 = -155.698979859887;
    var b4 = 66.8013118877197, b5 = -13.2806815528857, c1 = -7.78489400243029E-03;
    var c2 = -0.322396458041136, c3 = -2.40075827716184, c4 = -2.54973253934373;
    var c5 = 4.37466414146497, c6 = 2.93816398269878, d1 = 7.78469570904146E-03;
    var d2 = 0.32246712907004, d3 = 2.445134137143, d4 = 3.75440866190742;
    var p_low = 0.02425, p_high = 1 - p_low;
    var q, r;
    var retVal;
    if ((p < 0) || (p > 1)){
        alert("NormSInv: Argument out of range.");
        retVal = 0;
    } else if (p < p_low){
        q = Math.sqrt(-2 * Math.log(p));
        retVal = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    } else if (p <= p_high){
        q = p - 0.5;
        r = q * q;
        retVal = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    } else{
        q = Math.sqrt(-2 * Math.log(1 - p));
        retVal = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    return retVal;
}

table(0,0);

function table(z,s){
    if (z == 0) {
        table1 = "<tr><td colspan='8' style='color:black'><i>Click to Highlight</i></td></tr>";
    } else {
        table1 = "<tr><td colspan='8' style='cursor:pointer' style='cursor:pointer' onclick='table("+(z-10)+","+s+")' class='text-primary'>&#9650;</td></tr>";
    }
    if (s == 0) {
        table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.00</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.01</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.02</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.03</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.04</b></td><td></td></tr>";  
    } else {
        table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.05</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.06</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.07</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.08</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.09</b></td><td></td></tr>";  
    }
    table3 = [];
    for (i = z; i < z+10; i++) {
        var zval = -2.9 + 0.1 * i;
        var zval2 = Math.round(zval * 10) / 10;
        if (zval < 0.1) {
            if (i == z+4) {
                if (s == 0) {
                    table3 += "<tr><td style='color:white'>&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";                
                } else {
                    table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                }
            } else {
                if (zval < 0) {
                    table3 += "<tr><td></td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                } else {
                    table3 += "<tr><td></td><td><b>-"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                }
            }            
        } else {
            if (i == z+4) {
                if (s == 0) {
                    table3 += "<tr><td style='color:white'>&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-0.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";                
                } else {
                    table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-0.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                }
            } else {
                table3 += "<tr><td></td><td><b><span style='color:white'>-</span>"+(zval2-0.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
            }                  
        }
    }
    if (z < 50) {
        table4 = "<tr><td></td><td></td><td></td><td colspan='2' style='cursor:pointer' onclick='table("+(z+10)+","+s+")' class='text-primary'>&#9660;</td><td></td><td></td></tr>";
    } else {
        table4 = "<tr><td></td><td></td><td></td><td colspan='2' style='cursor:pointer; color:white'>&#9660;</td><td></td><td></td></tr>";
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+table4+"</table>";
    document.getElementById("output").innerHTML = tablez;
}










function highlight(z,s,row,col){
    if (row < 30) {
        var gval = -2.9 + 0.1 * row - 0.01 * col - 0.05 * s + 0.01;
    } else {
        var gval = -2.9 + 0.1 * row + 0.01 * col + 0.05 * s - 0.11;
    }
    graph1(gval)
    if (z == 0) {
        table1 = "<tr><td colspan='8' style='color:black'><i>Click to Highlight</i></td></tr>";
    } else {
        table1 = "<tr><td colspan='8' style='cursor:pointer' style='cursor:pointer' onclick='table("+(z-10)+","+s+")' class='text-primary'>&#9650;</td></tr>";
    }
    if (s == 0) {
        if (col == 1) {
            table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid' bgcolor='lightgray'><b>.00</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.01</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.02</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.03</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.04</b></td><td></td></tr>";  
        } else if (col == 2) {
            table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.00</b></td><td style='border-bottom: thin solid; border-top: thin solid' bgcolor='lightgray'><b>.01</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.02</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.03</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.04</b></td><td></td></tr>";              
        } else if (col == 3) {
            table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.00</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.01</b></td><td style='border-bottom: thin solid; border-top: thin solid' bgcolor='lightgray'><b>.02</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.03</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.04</b></td><td></td></tr>";  
        } else if (col == 4) {
            table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.00</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.01</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.02</b></td><td style='border-bottom: thin solid; border-top: thin solid' bgcolor='lightgray'><b>.03</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.04</b></td><td></td></tr>";  
        } else if (col == 5) {
            table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.00</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.01</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.02</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.03</b></td><td style='border-bottom: thin solid; border-top: thin solid' bgcolor='lightgray'><b>.04</b></td><td></td></tr>";  
        }
    } else {
        if (col == 1) {
            table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid' bgcolor='lightgray'><b>.05</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.06</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.07</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.08</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.09</b></td><td></td></tr>";  
        } else if (col == 2) {
            table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.05</b></td><td style='border-bottom: thin solid; border-top: thin solid' bgcolor='lightgray'><b>.06</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.07</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.08</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.09</b></td><td></td></tr>";  
        } else if (col == 3) {
            table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.05</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.06</b></td><td style='border-bottom: thin solid; border-top: thin solid' bgcolor='lightgray'><b>.07</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.08</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.09</b></td><td></td></tr>";  
        } else if (col == 4) {
            table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.05</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.06</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.07</b></td><td style='border-bottom: thin solid; border-top: thin solid' bgcolor='lightgray'><b>.08</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.09</b></td><td></td></tr>";  
        } else if (col == 5) {
            table2 = "<tr><td></td><td style='border-bottom: thin solid; border-top: thin solid'><b>z</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.05</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.06</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.07</b></td><td style='border-bottom: thin solid; border-top: thin solid'><b>.08</b></td><td style='border-bottom: thin solid; border-top: thin solid' bgcolor='lightgray'><b>.09</b></td><td></td></tr>";  
        }
    }
    table3 = [];
    for (i = z; i < z+10; i++) {
        var zval = -2.9 + 0.1 * i;
        var zval2 = Math.round(zval * 10) / 10;
        if (zval < 0.1) {
            if (i == z+4) {
                if (s == 0) {
                    if (i == row) {
                        table3 += "<tr><td style='color:white'>&#9664;</td><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";
                    } else {
                        if (col == 1) {
                            table3 += "<tr><td style='color:white'>&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)' bgcolor='lightgray'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";
                        } else if (col == 2) {
                            table3 += "<tr><td style='color:white'>&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)' bgcolor='lightgray'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";
                        } else if (col == 3) {
                            table3 += "<tr><td style='color:white'>&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)' bgcolor='lightgray'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";
                        } else if (col == 4) {
                            table3 += "<tr><td style='color:white'>&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)' bgcolor='lightgray'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";
                        } else if (col == 5) {
                            table3 += "<tr><td style='color:white'>&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)' bgcolor='lightgray'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";
                        }
                    }
                } else {
                    if (i == row) {
                        table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                    } else {
                        if (col == 1) {
                            table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)' bgcolor='lightgray'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                        } else if (col == 2) {
                            table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)' bgcolor='lightgray'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                        } else if (col == 3) {
                            table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)' bgcolor='lightgray'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                        } else if (col == 4) {
                            table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)' bgcolor='lightgray'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                        } else if (col == 5) {
                            table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)' bgcolor='lightgray'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                        }
                    }
                }
            } else {
                if (zval < 0) {
                    if (i == row) {
                        table3 += "<tr><td></td><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)' bgcolor='lightgray'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)' bgcolor='lightgray'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)' bgcolor='lightgray'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)' bgcolor='lightgray'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)' bgcolor='lightgray'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                    } else {
                        if (col == 1) {
                            table3 += "<tr><td></td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)' bgcolor='lightgray'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                        } else if (col == 2) {
                            table3 += "<tr><td></td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)' bgcolor='lightgray'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                        } else if (col == 3) {
                            table3 += "<tr><td></td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)' bgcolor='lightgray'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                        } else if (col == 4) {
                            table3 += "<tr><td></td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)' bgcolor='lightgray'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                        } else if (col == 5) {
                            table3 += "<tr><td></td><td><b>"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)' bgcolor='lightgray'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                        }
                    }
                } else {
                    if (i == row) {
                        table3 += "<tr><td></td><td bgcolor='lightgray'><b>-"+zval2.toFixed(1)+"</b></td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                    } else {
                        if (col == 1) {
                            table3 += "<tr><td></td><td><b>-"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)' bgcolor='lightgray'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                        } else if (col == 2) {
                            table3 += "<tr><td></td><td><b>-"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)' bgcolor='lightgray'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                        } else if (col == 3) {
                            table3 += "<tr><td></td><td><b>-"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)' bgcolor='lightgray'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                        } else if (col == 4) {
                            table3 += "<tr><td></td><td><b>-"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)' bgcolor='lightgray'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                        } else if (col == 5) {
                            table3 += "<tr><td></td><td><b>-"+zval2.toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-0.01-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-0.02-0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-0.03-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)' bgcolor='lightgray'>"+normalcdf(zval2-0.04-0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                        }
                    }
                }
            }            
        } else {
            if (i == z+4) {
                if (s == 0) {
                    if (i == row) {
                        table3 += "<tr><td style='color:white'>&#9664;</td><td bgcolor='lightgray'><b><span style='color:lightgray'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";                
                    } else {
                        if (col == 1) {
                            table3 += "<tr><td style='color:white'>&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";                
                        } else if (col == 2) {
                            table3 += "<tr><td style='color:white'>&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";                
                        } else if (col == 3) {
                            table3 += "<tr><td style='color:white'>&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)' bgcolor='lightgray'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";                
                        } else if (col == 4) {
                            table3 += "<tr><td style='color:white'>&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";                
                        } else if (col == 5) {
                            table3 += "<tr><td style='color:white'>&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='table("+z+",1)' class='text-primary'>&#9654;</td></tr>";                
                        }
                    }
                } else {
                    if (i == row) {
                        table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td bgcolor='lightgray'><b><span style='color:lightgray'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                    } else {
                        if (col == 1) {
                            table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                        } else if (col == 2) {
                            table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                        } else if (col == 3) {
                            table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)' bgcolor='lightgray'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                        } else if (col == 4) {
                            table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                        } else if (col == 5) {
                            table3 += "<tr><td class='text-primary' style='cursor:pointer' onclick='table("+z+",0)' >&#9664;</td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='color:white'>&#9654;</td></tr>";             
                        }
                    }
                }
            } else {
                if (i == row) {
                    table3 += "<tr><td></td><td bgcolor='lightgray'><b><span style='color:lightgray'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                } else {
                    if (col == 1) {
                        table3 += "<tr><td></td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                    } else if (col == 2) {
                        table3 += "<tr><td></td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                    } else if (col == 3) {
                        table3 += "<tr><td></td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)' bgcolor='lightgray'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                    } else if (col == 4) {
                        table3 += "<tr><td></td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                    } else if (col == 5) {
                        table3 += "<tr><td></td><td><b><span style='color:white'>-</span>"+(zval2-.1).toFixed(1)+"</b></td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",1)'>"+normalcdf(zval2-.1+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",2)'>"+normalcdf(zval2-.1+0.01+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",3)'>" +normalcdf(zval2-.1+0.02+0.05*s).toFixed(4).replace(/^0+/, '') + "</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",4)'>"+normalcdf(zval2-.1+0.03+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td style='cursor:pointer' onclick='highlight("+z+","+s+","+i+",5)' bgcolor='lightgray'>"+normalcdf(zval2-.1+0.04+0.05*s).toFixed(4).replace(/^0+/, '') +"</td><td></td></tr>";
                    }
                }
            }                  
        }
    }
    if (z < 50) {
        table4 = "<tr><td></td><td></td><td></td><td colspan='2' style='cursor:pointer' onclick='table("+(z+10)+","+s+")' class='text-primary'>&#9660;</td><td></td><td></td></tr>";
    } else {
        table4 = "<tr><td></td><td></td><td></td><td colspan='2' style='cursor:pointer; color:white'>&#9660;</td><td></td><td></td></tr>";
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+table4+"</table>";
    document.getElementById("output").innerHTML = tablez;
}




















var canvas = document.getElementById("Canvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

graph0();

function graph0(){
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = (i-300)/100
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("Canvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    //ctx.fillText("Standard Normal Distribution",85,10);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.fillText("z",285,132);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    //ctx.fillText("σ=1",225,50);
    var points = []
    for (i = 0; i < 600; i++) {
        points[i] = {x:20 + .433*i, y:130 - 275*f[i]}
    }
    // move to the first point
    ctx.moveTo(points[0].x, points[0].y);
    for (i = 1; i < points.length - 2; i ++){
        var xc = (points[i].x + points[i + 1].x) / 2;
        var yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    ctx.stroke(); 
}

function graph1(z){
    var lessval = Math.max(z, -2.97)
    var lessvalz = 300+100*lessval
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = (i-300)/100
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("Canvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    //ctx.fillText("Standard Normal Distribution",85,10);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    var points0 = []
    for (i = 0; i < lessvalz; i++) {
        points0[i] = {x:20 + .433*i, y:130 - 275*f[i]}
    }
    // move to the first point
    ctx.moveTo(points0[0].x, points0[0].y);
    for (i = 1; i < points0.length - 2; i ++){
        var xc = (points0[i].x + points0[i + 1].x) / 2;
        var yc = (points0[i].y + points0[i + 1].y) / 2;
        ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(20 + .433*lessvalz, 130 - 275*f[Math.round(lessvalz)]);
    
    ctx.lineTo(20 + .433*lessvalz, 130);
    ctx.lineTo(20 + .433*0, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.fillText("z",285,132);
    //ctx.fillText("z",18 + .434*(300+100*lessval),145);
    ctx.fillText(lessval.toFixed(2),10 + .434*(300+100*lessval),145);
    if (lessval < -2) {
        ctx.fillText(normalcdf(lessval).toFixed(4).replace(/^0+/, ''),20,120);
    } else {
        ctx.fillText(normalcdf(lessval).toFixed(4).replace(/^0+/, ''),10 + .434*(300+100*lessval),100);
    }
    ctx.moveTo(20 + .433*(300+100*lessval), 135);
    ctx.lineTo(20 + .433*(300+100*lessval), 125);
    if (Math.abs(z) > .39){
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145); 
    }
    //ctx.fillText("σ=1",225,50);
    var points = []
    for (i = 0; i < 600; i++) {
        points[i] = {x:20 + .433*i, y:130 - 275*f[i]}
    }
    // move to the first point
    ctx.moveTo(points[0].x, points[0].y);
    for (i = 1; i < points.length - 2; i ++){
        var xc = (points[i].x + points[i + 1].x) / 2;
        var yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    ctx.stroke(); 
}






















































var canvas = document.getElementById("howCanvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("howCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

how1(); how2();

function how1(){
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
      var j = (i-30)/10
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("howCanvas1");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.fillText("z",285,132);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    var points = []
    for (i = 0; i < 60; i++) {
        points[i] = {x:20 + 4.4*i, y:130 - 275*f[i]}
    }
    // move to the first point
    ctx.moveTo(points[0].x, points[0].y);
    for (i = 1; i < points.length - 2; i ++){
        var xc = (points[i].x + points[i + 1].x) / 2;
        var yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    ctx.stroke(); 
}

function how2(){
    var area = .10565
    var z = NormSInv(area)
    var lessval = z
    var lessvalz = 30+10*lessval
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 60; i++) {
        var j = (i-30)/10
        f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("howCanvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    var points0 = []
    for (i = 0; i < lessvalz; i++) {
        points0[i] = {x:20 + 4.4*i, y:130 - 275*f[i]}
    }
    // move to the first point
    ctx.moveTo(points0[0].x, points0[0].y);
    for (i = 1; i < points0.length - 2; i ++){
        var xc = (points0[i].x + points0[i + 1].x) / 2;
        var yc = (points0[i].y + points0[i + 1].y) / 2;
        ctx.quadraticCurveTo(points0[i].x, points0[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points0[i].x, points0[i].y, points0[i+1].x,points0[i+1].y);
    ctx.quadraticCurveTo(points0[i+1].x, points0[i+1].y, points0[lessvalz],points0[lessvalz]);
    
    ctx.lineTo(20 + 4.4*lessvalz, 130);
    ctx.lineTo(20 + 4.4*0, 130);
    ctx.stroke();
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black"; 
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    ctx.fillText("z",17 + 4.4*(30+10*lessval),145);
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    var points = []
    for (i = 0; i < 60; i++) {
        points[i] = {x:20 + 4.4*i, y:130 - 275*f[i]}
    }
    // move to the first point
    ctx.moveTo(points[0].x, points[0].y);
    for (i = 1; i < points.length - 2; i ++){
        var xc = (points[i].x + points[i + 1].x) / 2;
        var yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }
    // curve through the last two points
    ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    ctx.stroke(); 
}

MathJax.typeset();