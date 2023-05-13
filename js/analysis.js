$("#explanation").hide(); 
$("#spacefd").hide(); $("#fd").hide(); $("#equalfd").hide(); $("#valuefd").hide(); 
$("#spacefe").hide(); $("#fe").hide(); $("#equalfe").hide(); $("#valuefe").hide();
$("#spaceff").hide(); $("#ff").hide(); $("#equalff").hide(); $("#valueff").hide();
$("#spacepd").hide(); $("#pd").hide(); $("#equalpd").hide(); $("#valuepd").hide(); 
$("#spacepe").hide(); $("#pe").hide(); $("#equalpe").hide(); $("#valuepe").hide();
$("#spacepf").hide(); $("#pf").hide(); $("#equalpf").hide(); $("#valuepf").hide();
$("#three2four").show(); $("#four2three").hide(); $("#four2five").hide(); 
$("#five2four").hide(); $("#five2six").hide(); $("#six2five").hide();
//$("#row3").hide(); $("#row4").hide(); $("#row5").hide(); $("#row6").hide(); 
$("#row7").hide(); $("#row8").hide();  $("#blankrowt").hide(); 
$("#cellpd").hide(); $("#cellpe").hide(); $("#cellpf").hide();
$("#cellqd").hide(); $("#cellqe").hide(); $("#cellqf").hide(); 
$("#celld").hide(); $("#celle").hide(); $("#cellf").hide();
$("#rowsthree2two").hide(); $("#rowsthree2four").hide(); $("#rowsfour2three").hide(); $("#rowsfour2five").hide();
$("#rowsfive2four").hide(); $("#rowsfive2six").hide(); $("#rowssix2five").hide();
$("#colstwo2three").hide(); $("#colsfour2five").hide(); $("#colsfive2six").hide();
$("#colsfour2three").hide(); $("#colsfive2four").hide(); $("#colssix2five").hide();
$("#blankrowq").hide(); $("#blankrowr").hide(); $("#blankrows").hide(); $("#blankrowt").hide();
$("#myCanvas3").hide(); $("#myCanvas4").hide(); $("#581773186").hide();
categories = 3; indcols = 3; indrows = 6;

$("#output1").show(); $("#output2").hide(); $("#output3").hide();
$("#output4").show(); $("#output5").show(); $("#output6").show();
$("#myCanvas1").hide(); $("#myCanvas2").hide(); $("#myCanvas3").show(); $("#myCanvas4").show();

//switchindep()

$(function () {
            $('[data-toggle="tooltip"]').tooltip()
    })

var canvas = document.getElementById("myCanvas1");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("myCanvas3");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

var canvas = document.getElementById("myCanvas4");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

function LogGamma(Z) {
	with (Math) {
		var S=1+76.18009173/Z-86.50532033/(Z+1)+24.01409822/(Z+2)-1.231739516/(Z+3)+.00120858003/(Z+4)-.00000536382/(Z+5);
		var LG= (Z-.5)*log(Z+4.5)-(Z+4.5)+log(S*2.50662827465);
	}
	return LG
}

function Gcf(X,A) {        // Good for X>A+1
	with (Math) {
		var A0=0;
		var B0=1;
		var A1=1;
		var B1=X;
		var AOLD=0;
		var N=0;
		while (abs((A1-AOLD)/A1)>.00001) {
			AOLD=A1;
			N=N+1;
			A0=A1+(N-A)*A0;
			B0=B1+(N-A)*B0;
			A1=X*A0+N*A1;
			B1=X*B0+N*B1;
			A0=A0/B1;
			B0=B0/B1;
			A1=A1/B1;
			B1=1;
		}
		var Prob=exp(A*log(X)-X-LogGamma(A))*A1;
	}
	return 1-Prob
}

function Gser(X,A) {        // Good for X<A+1.
    with (Math) {
		var T9=1/A;
		var G=T9;
		var I=1;
		while (T9>G*.00001) {
			T9=T9*X/(A+I);
			G=G+T9;
			I=I+1;
		}
		G=G*exp(A*log(X)-X-LogGamma(A));
    }
    return G
}

function Gammacdf(x,a) {
	var GI;
	if (x<=0) {
		GI=0
	} else if (x<a+1) {
		GI=Gser(x,a)
	} else {
		GI=Gcf(x,a)
	}
	return GI
}

function compute(Z,DF) {
	if (DF<=0) {
		alert("Degrees of freedom must be positive")
	} else {
		Chisqcdf=Gammacdf(Z/2,DF/2)
	}
	Chisqcdf=Math.round(Chisqcdf*100000)/100000;
    return Chisqcdf;
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

function make3() {
    $("#three2four").show(); $("#four2three").hide(); $("#four2five").hide(); 
    $("#five2four").hide(); $("#five2six").hide(); $("#six2five").hide();
    $("#spacefd").hide(); $("#fd").hide(); $("#equalfd").hide(); $("#valuefd").hide(); 
    $("#spacefe").hide(); $("#fe").hide(); $("#equalfe").hide(); $("#valuefe").hide();
    $("#spaceff").hide(); $("#ff").hide(); $("#equalff").hide(); $("#valueff").hide();
    $("#spacepd").hide(); $("#pd").hide(); $("#equalpd").hide(); $("#valuepd").hide(); 
    $("#spacepe").hide(); $("#pe").hide(); $("#equalpe").hide(); $("#valuepe").hide();
    $("#spacepf").hide(); $("#pf").hide(); $("#equalpf").hide(); $("#valuepf").hide();
    categories = 3
}

function make4() {
    $("#three2four").hide(); $("#four2three").show(); $("#four2five").show(); 
    $("#five2four").hide(); $("#five2six").hide(); $("#six2five").hide();
    $("#spacefd").show(); $("#fd").show(); $("#equalfd").show(); $("#valuefd").show(); 
    $("#spacefe").hide(); $("#fe").hide(); $("#equalfe").hide(); $("#valuefe").hide();
    $("#spaceff").hide(); $("#ff").hide(); $("#equalff").hide(); $("#valueff").hide();
    $("#spacepd").show(); $("#pd").show(); $("#equalpd").show(); $("#valuepd").show(); 
    $("#spacepe").hide(); $("#pe").hide(); $("#equalpe").hide(); $("#valuepe").hide();
    $("#spacepf").hide(); $("#pf").hide(); $("#equalpf").hide(); $("#valuepf").hide();
    categories = 4
}

function make5() {
    $("#three2four").hide(); $("#four2three").hide(); $("#four2five").hide(); 
    $("#five2four").show(); $("#five2six").show(); $("#six2five").hide();
    $("#spacefd").show(); $("#fd").show(); $("#equalfd").show(); $("#valuefd").show(); 
    $("#spacefe").show(); $("#fe").show(); $("#equalfe").show(); $("#valuefe").show();
    $("#spaceff").hide(); $("#ff").hide(); $("#equalff").hide(); $("#valueff").hide();
    $("#spacepd").show(); $("#pd").show(); $("#equalpd").show(); $("#valuepd").show(); 
    $("#spacepe").show(); $("#pe").show(); $("#equalpe").show(); $("#valuepe").show();
    $("#spacepf").hide(); $("#pf").hide(); $("#equalpf").hide(); $("#valuepf").hide();
    categories = 5
}

function make6() {
    $("#three2four").hide(); $("#four2three").hide(); $("#four2five").hide(); 
    $("#five2four").hide(); $("#five2six").hide(); $("#six2five").show();
    $("#spacefd").show(); $("#fd").show(); $("#equalfd").show(); $("#valuefd").show(); 
    $("#spacefe").show(); $("#fe").show(); $("#equalfe").show(); $("#valuefe").show();
    $("#spaceff").show(); $("#ff").show(); $("#equalff").show(); $("#valueff").show();
    $("#spacepd").show(); $("#pd").show(); $("#equalpd").show(); $("#valuepd").show(); 
    $("#spacepe").show(); $("#pe").show(); $("#equalpe").show(); $("#valuepe").show();
    $("#spacepf").show(); $("#pf").show(); $("#equalpf").show(); $("#valuepf").show();
    categories = 6
}
















$("#rowstwo2three").hide(); $("#row3").show(); $("#rowsthree2two").show(); $("#rowsthree2four").show();
$("#blankrowq").hide();$("#cellrd").hide(); $("#cellre").hide(); $("#cellrf").hide();
$("#rowsfour2five").show(); $("#rowsfour2three").show(); $("#row4").show(); $("#rowsthree2two").hide(); $("#rowsthree2four").hide();
$("#blankrowq").show();$("#cellsd").hide(); $("#cellse").hide(); $("#cellsf").hide();
$("#rowsfive2six").show(); $("#rowsfive2four").show(); $("#row5").show(); $("#rowsfour2five").hide(); $("#rowsfour2three").hide();
$("#blankrowr").show();$("#celltd").hide(); $("#cellte").hide(); $("#celltf").hide();
$("#rowsfive2six").hide(); $("#rowsfive2four").hide(); $("#row6").show(); $("#rowssix2five").show();
$("#blankrows").show(); $("#blankrowt").hide();$("#cellud").hide(); $("#cellue").hide(); $("#celluf").hide();
$("#blankrowu").hide(); $("#rowsseven2six").hide();



function rowstwo2three() {
    indrows = 3
    $("#rowstwo2three").hide(); $("#row3").show(); $("#rowsthree2two").show(); $("#rowsthree2four").show();
    $("#blankrowq").hide();
    if (indcols == 3) {
        $("#cellrd").hide(); $("#cellre").hide(); $("#cellrf").hide();
    } else if (indcols == 4) {
        $("#cellre").hide(); $("#cellrf").hide();
    } else if (indcols == 5) {
        $("#cellrf").hide();
    }
}

function rowsthree2two() {
    indrows = 2
    $("#rowstwo2three").show(); $("#row3").hide(); $("#rowsthree2two").hide(); $("#rowsthree2four").hide();
}

function rowsthree2four() {
    indrows = 4
    $("#rowsfour2five").show(); $("#rowsfour2three").show(); $("#row4").show(); $("#rowsthree2two").hide(); $("#rowsthree2four").hide();
    $("#blankrowq").show();
    if (indcols == 3) {
        $("#cellsd").hide(); $("#cellse").hide(); $("#cellsf").hide();
    } else if (indcols == 4) {
        $("#cellse").hide(); $("#cellsf").hide();
    } else if (indcols == 5) {
        $("#cellsf").hide();
    }
}

function rowsfour2three() {
    indrows = 3
    $("#rowsfour2five").hide(); $("#rowsfour2three").hide(); $("#row4").hide(); $("#rowsthree2two").show(); $("#rowsthree2four").show();
    $("#blankrowq").hide();
}

function rowsfour2five() {
    indrows = 5
    $("#rowsfive2six").show(); $("#rowsfive2four").show(); $("#row5").show(); $("#rowsfour2five").hide(); $("#rowsfour2three").hide();
    $("#blankrowr").show();
    if (indcols == 3) {
        $("#celltd").hide(); $("#cellte").hide(); $("#celltf").hide();
    } else if (indcols == 4) {
        $("#cellte").hide(); $("#celltf").hide();
    } else if (indcols == 5) {
        $("#celltf").hide();
    }
}

function rowsfive2four() {
    indrows = 4
    $("#rowsfive2six").hide(); $("#rowsfive2four").hide(); $("#row5").hide(); $("#rowsfour2five").show(); $("#rowsfour2three").show();
    $("#blankrowr").hide();
}

function rowsfive2six() {
    indrows = 6
    $("#rowsfive2six").hide(); $("#rowsfive2four").hide(); $("#row6").show(); $("#rowssix2five").show();
    $("#blankrows").show(); $("#blankrowt").hide();
    if (indcols == 3) {
        $("#cellud").hide(); $("#cellue").hide(); $("#celluf").hide();
    } else if (indcols == 4) {
        $("#cellue").hide(); $("#celluf").hide();
    } else if (indcols == 5) {
        $("#celluf").hide();
    }
}

function rowssix2five() {
    indrows = 5
    $("#rowsfive2six").show(); $("#rowsfive2four").show(); $("#row6").hide(); $("#rowssix2five").hide();
    $("#blankrows").hide(); $("#blankrowt").hide();
}

function rowssix2seven() {
    indrows = 7
    $("#row7").show(); $("#rowssix2five").hide(); $("#rowssix2seven").hide();
    $("#blankrowt").show();$("#blankrowv").hide(); $("#rowseight2seven").hide(); $("#rowsseven2six").show();
    if (indcols == 3) {
        $("#cellvd").hide(); $("#cellve").hide(); $("#cellvf").hide();
    } else if (indcols == 4) {
        $("#cellve").hide(); $("#cellvf").hide();
    } else if (indcols == 5) {
        $("#cellvf").hide();
    }
}

function rowsseven2six() {
    indrows = 6
    $("#rowssix2seven").show(); $("#rowssix2five").show(); $("#row7").hide(); $("#rowsseven2six").hide();
    $("#blankrows").show(); $("#blankrowt").hide(); $("#blankrowu").hide();
}

function rowsseven2eight() {
    indrows = 8
    $("#row8").show(); $("#rowsseven2six").hide(); $("#rowsseven2eight").hide();
    $("#blankrowu").show();$("#blankrowv").hide(); $("#rowseight2seven").show(); $("#rowsseven2six").hide();
    if (indcols == 3) {
        $("#cellwd").hide(); $("#cellwe").hide(); $("#cellwf").hide();
    } else if (indcols == 4) {
        $("#cellwe").hide(); $("#cellvf").hide();
    } else if (indcols == 5) {
        $("#cellwf").hide();
    }
}

function rowseight2seven() {
    indrows = 7
    $("#rowsseven2eight").show(); $("#rowsseven2six").show(); $("#row8").hide(); $("#rowseight2seven").hide();
    $("#blankrows").show(); $("#blankrowt").show(); $("#blankrowu").hide();
}


















function colstwo2three() {
    indcols = 3
    $("#colstwo2three").hide(); $("#colsthree2two").show(); $("#colsthree2four").show();
    if (indrows == 2) {
        $("#cellc").show(); $("#cellpc").show(); $("#cellqc").show(); 
    } else if (indrows == 3) {
        $("#cellc").show(); $("#cellpc").show(); $("#cellqc").show(); $("#cellrc").show(); 
    } else if (indrows == 4) {
        $("#cellc").show(); $("#cellpc").show(); $("#cellqc").show(); $("#cellrc").show(); $("#cellsc").show(); 
    } else if (indrows == 5) {
        $("#cellc").show(); $("#cellpc").show(); $("#cellqc").show(); $("#cellrc").show(); $("#cellsc").show(); $("#celltc").show();  
    } else if (indrows == 6) {
        $("#cellc").show(); $("#cellpc").show(); $("#cellqc").show(); $("#cellrc").show(); $("#cellsc").show(); $("#celltc").show(); $("#celluc").show(); 
    }
}

function colsthree2two() {
    indcols = 2
    $("#colstwo2three").show(); $("#colsthree2two").hide(); $("#colsthree2four").hide();
    if (indrows == 2) {
        $("#cellc").hide(); $("#cellpc").hide(); $("#cellqc").hide(); 
    } else if (indrows == 3) {
        $("#cellc").hide(); $("#cellpc").hide(); $("#cellqc").hide(); $("#cellrc").hide();
    } else if (indrows == 4) {
        $("#cellc").hide(); $("#cellpc").hide(); $("#cellqc").hide(); $("#cellrc").hide(); $("#cellsc").hide();
    } else if (indrows == 5) {
        $("#cellc").hide(); $("#cellpc").hide(); $("#cellqc").hide(); $("#cellrc").hide(); $("#cellsc").hide(); $("#celltc").hide();
    } else if (indrows == 6) {
        $("#cellc").hide(); $("#cellpc").hide(); $("#cellqc").hide(); $("#cellrc").hide(); $("#cellsc").hide(); $("#celltc").hide(); $("#celluc").hide();
    }
}

function colsthree2four() {
    indcols = 4
    $("#colsfour2five").show(); $("#colsfour2three").show(); $("#colsthree2two").hide(); $("#colsthree2four").hide();
    if (indrows == 2) {
        $("#cellpd").show(); $("#cellqd").show(); $("#celld").show();
    } else if (indrows == 3) {
        $("#celld").show(); $("#cellpd").show(); $("#cellqd").show(); $("#cellrd").show(); 
    } else if (indrows == 4) {
        $("#celld").show(); $("#cellpd").show(); $("#cellqd").show(); $("#cellrd").show(); $("#cellsd").show();
    } else if (indrows == 5) {
        $("#celld").show(); $("#cellpd").show(); $("#cellqd").show(); $("#cellrd").show(); $("#cellsd").show(); $("#celltd").show(); 
    } else if (indrows == 6) {
        $("#celld").show(); $("#cellpd").show(); $("#cellqd").show(); $("#cellrd").show(); $("#cellsd").show(); $("#celltd").show(); $("#cellud").show();  
    } else if (indrows == 7) {
        $("#celld").show(); $("#cellpd").show(); $("#cellqd").show(); $("#cellrd").show(); $("#cellsd").show(); $("#celltd").show();  $("#cellud").show();
        $("#cellvd").show();
    } else if (indrows == 8) {
        $("#celld").show(); $("#cellpd").show(); $("#cellqd").show(); $("#cellrd").show(); $("#cellsd").show(); $("#celltd").show(); $("#cellud").show();
        $("#cellvd").show();  $("#cellwd").show();
    }
}

function colsfour2three() {
    indcols = 3
    $("#colsfour2five").hide(); $("#colsfour2three").hide(); $("#colsthree2two").show(); $("#colsthree2four").show();
    if (indrows == 2) {
        $("#celld").hide(); $("#cellpd").hide(); $("#cellqd").hide(); 
    } if (indrows == 3) {
        $("#celld").hide(); $("#cellpd").hide(); $("#cellqd").hide(); $("#cellrd").hide(); 
    } if (indrows == 4) {
        $("#celld").hide(); $("#cellpd").hide(); $("#cellqd").hide(); $("#cellrd").hide(); $("#cellsd").hide();  
    } if (indrows == 5) {
        $("#celld").hide(); $("#cellpd").hide(); $("#cellqd").hide(); $("#cellrd").hide(); $("#cellsd").hide(); $("#celltd").hide(); 
    } if (indrows == 6) {
        $("#celld").hide(); $("#cellpd").hide(); $("#cellqd").hide(); $("#cellrd").hide(); $("#cellsd").hide(); $("#celltd").hide(); $("#cellud").hide();  
    } if (indrows == 7) {
        $("#celld").hide(); $("#cellpd").hide(); $("#cellqd").hide(); $("#cellrd").hide(); $("#cellsd").hide(); $("#celltd").hide(); $("#cellud").hide();  
        $("#cellvd").hide();  
    } if (indrows == 8) {
        $("#celld").hide(); $("#cellpd").hide(); $("#cellqd").hide(); $("#cellrd").hide(); $("#cellsd").hide(); $("#celltd").hide(); $("#cellud").hide(); 
        $("#cellvd").hide(); $("#cellwd").hide(); 
    }
}

function colsfour2five() {
    indcols = 5
    $("#colsfive2six").show(); $("#colsfive2four").show(); $("#colsfour2five").hide(); $("#colsfour2three").hide();
    if (indrows == 2) {
        $("#celle").show(); $("#cellpe").show(); $("#cellqe").show(); 
    } else if (indrows == 3) {
        $("#celle").show(); $("#cellpe").show(); $("#cellqe").show(); $("#cellre").show(); 
    } else if (indrows == 4) {
        $("#celle").show(); $("#cellpe").show(); $("#cellqe").show(); $("#cellre").show(); $("#cellse").show();  
    } else if (indrows == 5) {
        $("#celle").show(); $("#cellpe").show(); $("#cellqe").show(); $("#cellre").show(); $("#cellse").show(); $("#cellte").show();
    } else if (indrows == 6) {
        $("#celle").show(); $("#cellpe").show(); $("#cellqe").show(); $("#cellre").show(); $("#cellse").show(); $("#cellte").show(); $("#cellue").show(); 
    } else if (indrows == 7) {
        $("#celle").show(); $("#cellpe").show(); $("#cellqe").show(); $("#cellre").show(); $("#cellse").show(); $("#cellte").show(); $("#cellue").show(); 
        $("#cellve").show();
    } else if (indrows == 8) {
        $("#celle").show(); $("#cellpe").show(); $("#cellqe").show(); $("#cellre").show(); $("#cellse").show(); $("#cellte").show(); $("#cellue").show(); 
        $("#cellve").show(); $("#cellwe").show();
    }
}

function colsfive2four() {
    indcols = 4
    $("#colsfive2six").hide(); $("#colsfive2four").hide(); $("#colsfour2five").show(); $("#colsfour2three").show();
    if (indrows == 2) {
        $("#celle").hide(); $("#cellpe").hide(); $("#cellqe").hide(); 
    } else if (indrows == 3) {
        $("#celle").hide(); $("#cellpe").hide(); $("#cellqe").hide(); $("#cellre").hide();
    } else if (indrows == 4) {
        $("#celle").hide(); $("#cellpe").hide(); $("#cellqe").hide(); $("#cellre").hide(); $("#cellse").hide();
    } else if (indrows == 5) {
        $("#celle").hide(); $("#cellpe").hide(); $("#cellqe").hide(); $("#cellre").hide(); $("#cellse").hide(); $("#cellte").hide();
    } else if (indrows == 6) {
        $("#celle").hide(); $("#cellpe").hide(); $("#cellqe").hide(); $("#cellre").hide(); $("#cellse").hide(); $("#cellte").hide(); $("#cellue").hide();
    } else if (indrows == 7) {
        $("#celle").hide(); $("#cellpe").hide(); $("#cellqe").hide(); $("#cellre").hide(); $("#cellse").hide(); $("#cellte").hide(); $("#cellue").hide();
        $("#cellve").hide();
    } else if (indrows == 8) {
        $("#celle").hide(); $("#cellpe").hide(); $("#cellqe").hide(); $("#cellre").hide(); $("#cellse").hide(); $("#cellte").hide(); $("#cellue").hide();
        $("#cellve").hide(); $("#cellwe").hide();
    }
}

function colsfive2six() {
    indcols = 6
    $("#colsfive2six").hide(); $("#colsfive2four").hide(); $("#colssix2five").show();
    if (indrows == 2) {
        $("#cellf").show(); $("#cellpf").show(); $("#cellqf").show(); 
    } if (indrows == 3) {
        $("#cellf").show(); $("#cellpf").show(); $("#cellqf").show(); $("#cellrf").show(); 
    } if (indrows == 4) {
        $("#cellf").show(); $("#cellpf").show(); $("#cellqf").show(); $("#cellrf").show(); $("#cellsf").show();
    } if (indrows == 5) {
        $("#cellf").show(); $("#cellpf").show(); $("#cellqf").show(); $("#cellrf").show(); $("#cellsf").show(); $("#celltf").show(); 
    } if (indrows == 6) {
        $("#cellf").show(); $("#cellpf").show(); $("#cellqf").show(); $("#cellrf").show(); $("#cellsf").show(); $("#celltf").show(); $("#celluf").show();
    }
}

function colssix2five() {
    indcols = 5
    $("#colsfive2six").show(); $("#colsfive2four").show(); $("#colssix2five").hide();
    if (indrows == 2) {
        $("#cellf").hide(); $("#cellpf").hide(); $("#cellqf").hide(); 
    } else if (indrows == 3) {
        $("#cellf").hide(); $("#cellpf").hide(); $("#cellqf").hide(); $("#cellrf").hide();
    } else if (indrows == 4) {
        $("#cellf").hide(); $("#cellpf").hide(); $("#cellqf").hide(); $("#cellrf").hide(); $("#cellsf").hide();
    } else if (indrows == 5) {
        $("#cellf").hide(); $("#cellpf").hide(); $("#cellqf").hide(); $("#cellrf").hide(); $("#cellsf").hide(); $("#celltf").hide();
    } else if (indrows == 6) {
        $("#cellf").hide(); $("#cellpf").hide(); $("#cellqf").hide(); $("#cellrf").hide(); $("#cellsf").hide(); $("#celltf").hide(); $("#celluf").hide();
    }
}



function stat() {
    $("#581773186").show();
    var chidist = [[0,0,0,0,0],[2.706,3.841,5.024,6.635,7.879],[4.605,5.991,7.378,9.210,10.597],[6.251,7.815,9.210,10.597],[7.779,9.448,11.143,13.277,14.860],[9.236,11.070,12.832,15.086,16.750]]
    var pa = document.getElementById("valuepa").value; var fa = document.getElementById("valuefa").value
    var pb = document.getElementById("valuepb").value; var fb = document.getElementById("valuefb").value
    var pc = document.getElementById("valuepc").value; var fc = document.getElementById("valuefc").value
    var pd = document.getElementById("valuepd").value; var fd = document.getElementById("valuefd").value;
    var pe = document.getElementById("valuepe").value; var fe = document.getElementById("valuefe").value;
    var pf = document.getElementById("valuepf").value; var ff = document.getElementById("valueff").value
    var p = [pa,pb,pc,pd,pe,pf];
    var f = [fa,fb,fc,fd,fe,ff];
    var tot = sum(f)
    var category = ["a","b","c","d","e","f"];
    var alpha = .05;
    var exp = 2.71828;
    
    var table = "<tr style='border-bottom: thin solid'>" + "<td>" + "$i$" + "</td>"+ "<td>" + "$p$" + "</td>" + "<td>" + "$f$" + "</td>" + "<td>" + "$e$" + "</td>"+ "<td>" + "$f-e$" + "</td>" +"<td>" + "$(f-e)^2$" + "</td>" +"<td>" + "$(f-e)^2/e$" + "</td>"+ "</tr>";
    var rows = categories; var cols = 7; var total = 0
    for (var r = 0; r < rows; r++){
        table += "<tr>";
        table += "<td>$" + category[r] + "$</td>";
        table += "<td>$" + p[r] + "$</td>";
        table += "<td>$" + f[r] + "$</td>";
        table += "<td>$" + parseFloat((p[r]*tot).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((f[r] - p[r]*tot).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((Math.pow((f[r] - p[r]*tot),2)).toFixed(2)) + "$</td>";
        table += "<td>$" + parseFloat((Math.pow((f[r] - p[r]*tot),2)/(p[r]*tot)).toFixed(2)) + "$</td>";
        table += "</tr>";
        total += parseFloat((Math.pow((f[r] - p[r]*tot),2)/(p[r]*tot)).toFixed(2))
    }
    var chi2 = parseFloat(total.toFixed(2)); 
    var df = categories - 1;
    var row = chidist[df]
    table = table + "<tr style='border-top: thin solid'>" + "<td>" + "$\\Sigma$" + "</td>" + "<td>"+"$-$"+"</td>" + "<td>$"+tot+"$</td>"+ "<td>$-$</td>" +"<td>$-$</td>"+"<td>$-$</td>"+"<td>$"+parseFloat(total.toFixed(2))+"$</td>"+ "</tr>";
    
    var f = [];
        var i;
        for (i = 0; i < 20; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(Math.pow(i,8/2-1)*Math.pow(exp,-.5*i))
        }

        var c = document.getElementById("myCanvas1");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(190, 130);
        ctx.lineTo(190, 106);
        ctx.quadraticCurveTo(210, 120, 247, 125);
        ctx.lineTo(247, 130);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 10);
        ctx.lineTo(20, 130);
        ctx.lineTo(280, 130);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(190, 135);
        ctx.lineTo(190, 125);
        ctx.stroke();

        ctx.fillText("χ²",285,132);
        ctx.fillText(chi2.toFixed(2),185,145);

        ctx.fillText("p-value",205,108);


        var points = []

        for (i = 0; i < 20; i++) {
          points[i] = {x:20 + 12*i, y:130 - 10*f[i]}
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
    
    
    var f = [];
        var i;
        for (i = 0; i < 20; i++) {
          var j = (i-30)/10
          f[i] = parseFloat(Math.pow(i,8/2-1)*Math.pow(exp,-.5*i))
        }

        var c = document.getElementById("myCanvas2");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 300, 150);

        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(190, 130);
        ctx.lineTo(190, 106);
        ctx.quadraticCurveTo(210, 120, 247, 125);
        ctx.lineTo(247, 130);
        ctx.stroke();
        ctx.fillStyle = "lightgray";
        ctx.fill();

        ctx.strokeStyle = 'black';
        ctx.fillStyle = "black";

        ctx.beginPath();
        ctx.moveTo(20, 10);
        ctx.lineTo(20, 130);
        ctx.lineTo(280, 130);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(190, 135);
        ctx.lineTo(190, 125);
        ctx.stroke();

        ctx.fillText("χ²",285,132);
        ctx.fillText(chi2.toFixed(2),185,145);

        ctx.fillText("p-value",205,108);


        var points = []

        for (i = 0; i < 20; i++) {
          points[i] = {x:20 + 12*i, y:130 - 10*f[i]}
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
    
    var table1 = "<td></td><td colspan='6'>$\\text{Area in Upper Tail}$</td>"
    
    var table2 = "<td>$df$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>"
    
    var table3 = "<td>$"+ df +"$</td><td>$"+row[0]+"$</td><td>$"+row[1]+"$</td><td>$"+row[2]+"$</td><td>$"+row[3]+"$</td><td>$"+row[4]+"$</td>"
    
    var tablep = "<table><tr style='border-bottom: thin solid; border-top: thin solid'>"+table1+"</tr><tr style='border-bottom: thin solid'>"+table2+"</tr><tr>"+table3+"</tr></table>"
    
    var pvalue = 1 - compute(chi2,df);
        if (pvalue > .2) {
            var pval = ".20 \\text{ to } 1"
        } else if (pvalue <.2 && pvalue >.1) {
            var pval = ".10 \\text{ to } .20"
        } else if (pvalue <.1 && pvalue >.05) {
            var pval = ".05 \\text{ to } .10"
        } else if (pvalue <.05 && pvalue >.025) {
            var pval = ".025 \\text{ to } .05"
        } else if (pvalue <.025 && pvalue >.01) {
            var pval = ".01 \\text{ to } .025"
        } else if (pvalue <.01 && pvalue >.005) {
            var pval = ".005 \\text{ to } .01"
        } else if (pvalue <.005) {
            var pval = "0 \\text{ to } .005"
        } else {
            var pval = pvalue.toFixed(4);
        } 
    
    if (alpha == .1){
        var cmore = row[0]
    } else if (alpha == .05){
        var cmore = row[1]
    } else if (alpha == .01){
        var cmore = row[3]
    }
    
    
    if (pvalue <= alpha) {
        var pinequ = "\\leq"
        var concl = "\\text{Reject } H_o"
        var critsignupper = "\\geq"
    } else if (pvalue > alpha) {
        var pinequ = ">"
        var concl = "\\text{Do Not Reject } H_o"
        var critsignupper = "<"
    }
    
    document.getElementById("output1").innerHTML = "<table>" + table + "</table> $$ \\chi^2 = "+chi2+"$$ $$ df = "+categories+" - 1 = "+df+" $$ $$ \\text{p-Value Approach:} $$"
    
    document.getElementById("output2").innerHTML = tablep + "$$\\text{p-value}=P(\\chi^2 \\geq "+chi2.toFixed(2)+" ) = " + pval+ " $$ $$\\text{p-value}="+pval+pinequ+" \\alpha = "+alpha+"$$ $$ \\text{Conclusion: } \\boxed{"+concl+"} $$ $$ \\text{Critical Value Approach:} $$"
    
    document.getElementById("output3").innerHTML = tablep + "$$ \\text{Critical Value: } \\chi^2_{"+alpha+"} = " + cmore + " $$ $$ \\chi^2="+chi2.toFixed(2) +critsignupper+" \\chi^2_{"+alpha+"} = "+cmore+"$$ $$ \\text{Conclusion: } \\boxed{"+concl+"} $$"
    
    MathJax.typeset();
    
}



function stat2() {
    var pa = parseFloat(document.getElementById("cellpa").value); var qa = parseFloat(document.getElementById("cellqa").value);
    var pb = parseFloat(document.getElementById("cellpb").value); var qb = parseFloat(document.getElementById("cellqb").value);
    var pc = parseFloat(document.getElementById("cellpc").value); var qc = parseFloat(document.getElementById("cellqc").value);
    var ra = parseFloat(document.getElementById("cellra").value); var sa = parseFloat(document.getElementById("cellsa").value);
    var rb = parseFloat(document.getElementById("cellrb").value); var sb = parseFloat(document.getElementById("cellsb").value);
    var rc = parseFloat(document.getElementById("cellrc").value); var sc = parseFloat(document.getElementById("cellsc").value);
    var ta = parseFloat(document.getElementById("cellta").value); var ua = parseFloat(document.getElementById("cellua").value);
    var tb = parseFloat(document.getElementById("celltb").value); var ub = parseFloat(document.getElementById("cellub").value);
    var tc = parseFloat(document.getElementById("celltc").value); var uc = parseFloat(document.getElementById("celluc").value);
    
    var meana = parseFloat(((pa+qa+ra+sa+ta+ua)/6).toFixed(2))
    var meanb = parseFloat(((pb+qb+rb+sb+tb+ub)/6).toFixed(2))
    var meanc = parseFloat(((pc+qc+rc+sc+tc+uc)/6).toFixed(2))
    var mean = parseFloat(((meana+meanb+meanc)/3).toFixed(2))
    var sstr = parseFloat((6*(meana-mean)^2 + 6*(meanb-mean)^2 + 6*(meanc-mean)^2).toFixed(2))
    
    document.getElementById("output1").innerHTML = "$$ \\bar{x}_A = "+meana+" \\quad \\bar{x}_B = "+meanb+" \\quad \\bar{x}_C = "+meanc+" $$ $$ \\bar{\\bar{x}} = \\frac{"+meana+"+"+meanb+"+"+meanc+"}{3} = "+mean+" $$ $$ \\text{SSTR} = 6("+meana+"-"+mean+")^2 + \\cdots = "+sstr+" $$ $$ \\text{MSTR} = \\frac{SSTR}{k-1} = \\frac{"+sstr+"}{"+2+"} = "+sstr+" $$"
    
    MathJax.typeset();
    
}

function examplevalues3() {
    document.getElementById("cellpa").value = "151"; document.getElementById("cellpb").value = "133"; document.getElementById("cellpc").value = "112"; 
    document.getElementById("cellqa").value = "135"; document.getElementById("cellqb").value = "148"; document.getElementById("cellqc").value = "118"; 
    document.getElementById("cellra").value = "154"; document.getElementById("cellrb").value = "116"; document.getElementById("cellrc").value = "123"; 
    document.getElementById("cellsa").value = "136"; document.getElementById("cellsb").value = "137"; document.getElementById("cellsc").value = "137"; 
    document.getElementById("cellta").value = "132"; document.getElementById("celltb").value = "125"; document.getElementById("celltc").value = "146"; 
    document.getElementById("cellua").value = "166"; document.getElementById("cellub").value = "141"; document.getElementById("celluc").value = "119"; 
}