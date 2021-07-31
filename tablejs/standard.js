function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
	var T=1/(1+.2316419*Math.abs(X));
	var D=.3989423*Math.exp(-X*X/2);
	var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
	if (X>0) {
		Prob=1-Prob
	}
	return Prob
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

    if ((p < 0) || (p > 1))
    {
        alert("NormSInv: Argument out of range.");
        retVal = 0;
    }
    else if (p < p_low)
    {
        q = Math.sqrt(-2 * Math.log(p));
        retVal = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    else if (p <= p_high)
    {
        q = p - 0.5;
        r = q * q;
        retVal = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    }
    else
    {
        q = Math.sqrt(-2 * Math.log(1 - p));
        retVal = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }

    return retVal;
}

    
    
    
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td>$\\mathbf{z}$</td><td>$\\mathbf{.00}$</td><td>$\\mathbf{.01}$</td><td>$\\mathbf{.02}$</td><td>$\\mathbf{.03}$</td><td>$\\mathbf{.04}$</td><td>$\\mathbf{.05}$</td><td>$\\mathbf{.06}$</td><td>$\\mathbf{.07}$</td><td>$\\mathbf{.08}$</td><td>$\\mathbf{.09}$</td></tr>"

    table2 = []

    for (i = 0; i < 30; i++) {
      var zval = -3 + .1 * i
      var zval2 = Math.round(zval * 10) / 10
      table2 += "<tr><td>$\\mathbf{"+zval2.toFixed(1)+"}$</td><td>$"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"$</td></tr>"
    }

    table3 = "<tr style='border-bottom: thin solid;'><td>$\\mathbf{-0.0}$</td><td>$"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"$</td><td>$"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"$</td></tr>"
    
    
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    
    
    document.getElementById("output").innerHTML = tablez

    table4 = []

    for (i = 0; i < 30; i++) {
      var zval = .1 * i
      var zval2 = Math.round(zval * 10) / 10
      table4 += "<tr><td>$\\mathbf{"+zval2.toFixed(1)+"}$</td><td>$"+normalcdf(zval2).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '')+"$</td></tr>"
    }

    table5 = "<tr style='border-bottom: thin solid;'><td>$\\mathbf{3.0}$</td><td>$"+normalcdf(3.0).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(3.01).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(3.02).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(3.03).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(3.04).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(3.05).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(3.06).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(3.07).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(3.08).toFixed(4).replace(/^0+/, '')+"$</td><td>$"+normalcdf(3.09).toFixed(4).replace(/^0+/, '')+"$</td></tr>"
    
    
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    
    
    document.getElementById("output2").innerHTML = tablez2





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
    
    ctx.fillText("Standard Normal Distribution",85,10);
    
    ctx.strokeStyle = 'black';
    ctx.fillStyle = "black";
    
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(280, 130);
    
    ctx.fillText("z",285,132);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    ctx.fillText("σ=1",225,50);
    
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
		}
    
        // move to the first point
       ctx.moveTo(points[0].x, points[0].y);
   
   


       for (i = 1; i < points.length - 2; i ++)
       {
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
    
    
    //ctx.fillText("P(-1.25 ≤ z ≤ 0.86)",80,10);
    //ctx.fillText("Type 1",135,10);
    
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    
    var points0 = []
    
    for (i = 0; i < lessvalz; i++) {
      points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
		}
    
    // move to the first point
   ctx.moveTo(points0[0].x, points0[0].y);


   for (i = 1; i < points0.length - 2; i ++)
   {
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
    
    ctx.fillText("z",285,132);
    ctx.moveTo(150, 135);
    ctx.lineTo(150, 125);
    ctx.fillText("0",148,145);
    
    
    
    
    
    
    ctx.fillText("-1.25",10 + 4.4*(30+10*lessval),145);
    
    ctx.moveTo(20 + 4.4*(30+10*lessval), 135);
    ctx.lineTo(20 + 4.4*(30+10*lessval), 125);
    
    
    
    
    
    var points = []
    
    for (i = 0; i < 60; i++) {
      points[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
		}
    
        // move to the first point
       ctx.moveTo(points[0].x, points[0].y);
   
   


       for (i = 1; i < points.length - 2; i ++)
       {
          var xc = (points[i].x + points[i + 1].x) / 2;
          var yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       }
     // curve through the last two points
     ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);
    
    
    ctx.stroke(); 
}




















































    
    MathJax.typeset();