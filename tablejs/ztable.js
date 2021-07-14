function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob
	}
	return Prob
} 

    
    
    
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td>$\\mathbf{z}$</td><td>$\\mathbf{.00}$</td><td>$\\mathbf{.01}$</td><td>$\\mathbf{.02}$</td><td>$\\mathbf{.03}$</td><td>$\\mathbf{.04}$</td><td>$\\mathbf{.05}$</td><td>$\\mathbf{.06}$</td><td>$\\mathbf{.07}$</td><td>$\\mathbf{.08}$</td><td>$\\mathbf{.09}$</td></tr>"

    table2 = []

    for (i = 0; i < 30; i++) {
      var zval = -3 + .1 * i
      var zval2 = Math.round(zval * 10) / 10
      table2 += "<tr><td>$\\mathbf{"+zval2.toFixed(1)+"}$</td><td>$"+normalcdf(zval2).toFixed(4)+"$</td><td>$"+normalcdf(zval2-.01).toFixed(4)+"$</td><td>$"+normalcdf(zval2-.02).toFixed(4)+"$</td><td>$"+normalcdf(zval2-.03).toFixed(4)+"$</td><td>$"+normalcdf(zval2-.04).toFixed(4)+"$</td><td>$"+normalcdf(zval2-.05).toFixed(4)+"$</td><td>$"+normalcdf(zval2-.06).toFixed(4)+"$</td><td>$"+normalcdf(zval2-.07).toFixed(4)+"$</td><td>$"+normalcdf(zval2-.08).toFixed(4)+"$</td><td>$"+normalcdf(zval2-.09).toFixed(4)+"$</td></tr>"
    }

    table3 = "<tr style='border-bottom: thin solid;'><td>$\\mathbf{-0.0}$</td><td>$"+normalcdf(0).toFixed(4)+"$</td><td>$"+normalcdf(-.01).toFixed(4)+"$</td><td>$"+normalcdf(-.02).toFixed(4)+"$</td><td>$"+normalcdf(-.03).toFixed(4)+"$</td><td>$"+normalcdf(-.04).toFixed(4)+"$</td><td>$"+normalcdf(-.05).toFixed(4)+"$</td><td>$"+normalcdf(-.06).toFixed(4)+"$</td><td>$"+normalcdf(-.07).toFixed(4)+"$</td><td>$"+normalcdf(-.08).toFixed(4)+"$</td><td>$"+normalcdf(-.09).toFixed(4)+"$</td></tr>"
    
    
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    
    
    document.getElementById("output").innerHTML = tablez

    table4 = []

    for (i = 0; i < 30; i++) {
      var zval = .1 * i
      var zval2 = Math.round(zval * 10) / 10
      table4 += "<tr><td>$\\mathbf{"+zval2.toFixed(1)+"}$</td><td>$"+normalcdf(zval2).toFixed(4)+"$</td><td>$"+normalcdf(zval2+.01).toFixed(4)+"$</td><td>$"+normalcdf(zval2+.02).toFixed(4)+"$</td><td>$"+normalcdf(zval2+.03).toFixed(4)+"$</td><td>$"+normalcdf(zval2+.04).toFixed(4)+"$</td><td>$"+normalcdf(zval2+.05).toFixed(4)+"$</td><td>$"+normalcdf(zval2+.06).toFixed(4)+"$</td><td>$"+normalcdf(zval2+.07).toFixed(4)+"$</td><td>$"+normalcdf(zval2+.08).toFixed(4)+"$</td><td>$"+normalcdf(zval2+.09).toFixed(4)+"$</td></tr>"
    }

    table5 = "<tr style='border-bottom: thin solid;'><td>$\\mathbf{3.0}$</td><td>$"+normalcdf(3.0).toFixed(4)+"$</td><td>$"+normalcdf(3.01).toFixed(4)+"$</td><td>$"+normalcdf(3.02).toFixed(4)+"$</td><td>$"+normalcdf(3.03).toFixed(4)+"$</td><td>$"+normalcdf(3.04).toFixed(4)+"$</td><td>$"+normalcdf(3.05).toFixed(4)+"$</td><td>$"+normalcdf(3.06).toFixed(4)+"$</td><td>$"+normalcdf(3.07).toFixed(4)+"$</td><td>$"+normalcdf(3.08).toFixed(4)+"$</td><td>$"+normalcdf(3.09).toFixed(4)+"$</td></tr>"
    
    
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    
    
    document.getElementById("output2").innerHTML = tablez2

    
    MathJax.typeset();