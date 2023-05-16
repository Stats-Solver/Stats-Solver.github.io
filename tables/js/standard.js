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

table1()
function table1(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        var zval = -3 + .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover='highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>" +normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') + "</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover ='highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight6()'>" +normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight7"+i+"()'>" +normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>" + normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover='highlight0"+i+"()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight1()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight2()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight3()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight4()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight5()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight6()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight7()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight8()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover='highlight9()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
}


table4 = []
for (i = 0; i < 30; i++) {
    var zval = .1 * i
    var zval2 = Math.round(zval * 10) / 10
    table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover='highlights0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights1()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights2()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover='highlights3()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights4()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights5()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover='highlights6()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights7()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights8()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover='highlights9()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '')+"</td></tr>"
}
table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover='highlights0()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights1()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights2()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights3()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover='highlights4()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights5()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights6()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights7()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights8()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlights9()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '')+"</td></tr>"
var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
document.getElementById("output2").innerHTML = tablez2

var highlight

function highlight00(){highlight = 0; highlight0(); graph1(-3.00)}; 
function highlight01(){highlight = 1; highlight0(); graph1(-2.90)}; 
function highlight02(){highlight = 2; highlight0(); graph1(-2.80)}; 
function highlight03(){highlight = 3; highlight0(); graph1(-2.70)};
function highlight04(){highlight = 4; highlight0(); graph1(-2.60)};
function highlight05(){highlight = 5; highlight0(); graph1(-2.50)};
function highlight06(){highlight = 6; highlight0(); graph1(-2.40)};
function highlight07(){highlight = 7; highlight0(); graph1(-2.30)};
function highlight08(){highlight = 8; highlight0(); graph1(-2.20)};
function highlight09(){highlight = 9; highlight0(); graph1(-2.10)};
function highlight010(){highlight = 10; highlight0(); graph1(-2.00)};
function highlight011(){highlight = 11; highlight0(); graph1(-1.90)};
function highlight012(){highlight = 12; highlight0(); graph1(-1.80)};
function highlight013(){highlight = 13; highlight0(); graph1(-1.70)};
function highlight014(){highlight = 14; highlight0(); graph1(-1.60)};
function highlight015(){highlight = 15; highlight0(); graph1(-1.50)};
function highlight016(){highlight = 16; highlight0(); graph1(-1.40)};
function highlight017(){highlight = 17; highlight0(); graph1(-1.30)};
function highlight018(){highlight = 18; highlight0(); graph1(-1.20)};
function highlight019(){highlight = 19; highlight0(); graph1(-1.10)};
function highlight020(){highlight = 20; highlight0(); graph1(-1.00)};
function highlight021(){highlight = 21; highlight0(); graph1(-.90)};
function highlight022(){highlight = 22; highlight0(); graph1(-.80)};
function highlight023(){highlight = 23; highlight0(); graph1(-.70)};
function highlight024(){highlight = 24; highlight0(); graph1(-.60)};
function highlight025(){highlight = 25; highlight0(); graph1(-.50)};
function highlight026(){highlight = 26; highlight0(); graph1(-.40)};
function highlight027(){highlight = 27; highlight0(); graph1(-.30)};
function highlight028(){highlight = 28; highlight0(); graph1(-.20)};
function highlight029(){highlight = 29; highlight0(); graph1(-.10)};
function highlight030(){highlight = 30; highlight0(); graph1(-.00)};

function highlight10(){highlight = 0; highlight1(); graph1(-3.01)}; 
function highlight11(){highlight = 1; highlight1(); graph1(-2.91)}; 
function highlight12(){highlight = 2; highlight1(); graph1(-2.81)}; 
function highlight13(){highlight = 3; highlight1(); graph1(-2.71)};
function highlight14(){highlight = 4; highlight1(); graph1(-2.61)};
function highlight15(){highlight = 5; highlight1(); graph1(-2.51)};
function highlight16(){highlight = 6; highlight1(); graph1(-2.41)};
function highlight17(){highlight = 7; highlight1(); graph1(-2.31)};
function highlight18(){highlight = 8; highlight1(); graph1(-2.21)};
function highlight19(){highlight = 9; highlight1(); graph1(-2.11)};
function highlight110(){highlight = 10; highlight1(); graph1(-2.01)};
function highlight111(){highlight = 11; highlight1(); graph1(-1.91)};
function highlight112(){highlight = 12; highlight1(); graph1(-1.81)};
function highlight113(){highlight = 13; highlight1(); graph1(-1.71)};
function highlight114(){highlight = 14; highlight1(); graph1(-1.61)};
function highlight115(){highlight = 15; highlight1(); graph1(-1.51)};
function highlight116(){highlight = 16; highlight1(); graph1(-1.41)};
function highlight117(){highlight = 17; highlight1(); graph1(-1.31)};
function highlight118(){highlight = 18; highlight1(); graph1(-1.21)};
function highlight119(){highlight = 19; highlight1(); graph1(-1.11)};
function highlight120(){highlight = 20; highlight1(); graph1(-1.01)};
function highlight121(){highlight = 21; highlight1(); graph1(-.91)};
function highlight122(){highlight = 22; highlight1(); graph1(-.81)};
function highlight123(){highlight = 23; highlight1(); graph1(-.71)};
function highlight124(){highlight = 24; highlight1(); graph1(-.61)};
function highlight125(){highlight = 25; highlight1(); graph1(-.51)};
function highlight126(){highlight = 26; highlight1(); graph1(-.41)};
function highlight127(){highlight = 27; highlight1(); graph1(-.31)};
function highlight128(){highlight = 28; highlight1(); graph1(-.21)};
function highlight129(){highlight = 29; highlight1(); graph1(-.11)};
function highlight130(){highlight = 30; highlight1(); graph1(-.01)};

function highlight20(){highlight = 0; highlight2(); graph1(-3.02)}; 
function highlight21(){highlight = 1; highlight2(); graph1(-2.92)}; 
function highlight22(){highlight = 2; highlight2(); graph1(-2.82)}; 
function highlight23(){highlight = 3; highlight2(); graph1(-2.72)};
function highlight24(){highlight = 4; highlight2(); graph1(-2.62)};
function highlight25(){highlight = 5; highlight2(); graph1(-2.52)};
function highlight26(){highlight = 6; highlight2(); graph1(-2.42)};
function highlight27(){highlight = 7; highlight2(); graph1(-2.32)};
function highlight28(){highlight = 8; highlight2(); graph1(-2.22)};
function highlight29(){highlight = 9; highlight2(); graph1(-2.12)};
function highlight210(){highlight = 10; highlight2(); graph1(-2.02)};
function highlight211(){highlight = 11; highlight2(); graph1(-1.92)};
function highlight212(){highlight = 12; highlight2(); graph1(-1.82)};
function highlight213(){highlight = 13; highlight2(); graph1(-1.72)};
function highlight214(){highlight = 14; highlight2(); graph1(-1.62)};
function highlight215(){highlight = 15; highlight2(); graph1(-1.52)};
function highlight216(){highlight = 16; highlight2(); graph1(-1.42)};
function highlight217(){highlight = 17; highlight2(); graph1(-1.32)};
function highlight218(){highlight = 18; highlight2(); graph1(-1.22)};
function highlight219(){highlight = 19; highlight2(); graph1(-1.12)};
function highlight220(){highlight = 20; highlight2(); graph1(-1.02)};
function highlight221(){highlight = 21; highlight2(); graph1(-.92)};
function highlight222(){highlight = 22; highlight2(); graph1(-.82)};
function highlight223(){highlight = 23; highlight2(); graph1(-.72)};
function highlight224(){highlight = 24; highlight2(); graph1(-.62)};
function highlight225(){highlight = 25; highlight2(); graph1(-.52)};
function highlight226(){highlight = 26; highlight2(); graph1(-.42)};
function highlight227(){highlight = 27; highlight2(); graph1(-.32)};
function highlight228(){highlight = 28; highlight2(); graph1(-.22)};
function highlight229(){highlight = 29; highlight2(); graph1(-.12)};
function highlight230(){highlight = 30; highlight2(); graph1(-.02)};

function highlight30(){highlight = 0; highlight3(); graph1(-3.03)}; 
function highlight31(){highlight = 1; highlight3(); graph1(-2.93)}; 
function highlight32(){highlight = 2; highlight3(); graph1(-2.83)};
function highlight33(){highlight = 3; highlight3(); graph1(-2.73)};
function highlight34(){highlight = 4; highlight3(); graph1(-2.63)};
function highlight35(){highlight = 5; highlight3(); graph1(-2.53)};
function highlight36(){highlight = 6; highlight3(); graph1(-2.43)};
function highlight37(){highlight = 7; highlight3(); graph1(-2.33)};
function highlight38(){highlight = 8; highlight3(); graph1(-2.23)};
function highlight39(){highlight = 9; highlight3(); graph1(-2.13)};
function highlight310(){highlight = 10; highlight3(); graph1(-2.03)};
function highlight311(){highlight = 11; highlight3(); graph1(-1.93)};
function highlight312(){highlight = 12; highlight3(); graph1(-1.83)};
function highlight313(){highlight = 13; highlight3(); graph1(-1.73)};
function highlight314(){highlight = 14; highlight3(); graph1(-1.63)};
function highlight315(){highlight = 15; highlight3(); graph1(-1.53)};
function highlight316(){highlight = 16; highlight3(); graph1(-1.43)};
function highlight317(){highlight = 17; highlight3(); graph1(-1.33)};
function highlight318(){highlight = 18; highlight3(); graph1(-1.23)};
function highlight319(){highlight = 19; highlight3(); graph1(-1.13)};
function highlight320(){highlight = 20; highlight3(); graph1(-1.03)};
function highlight321(){highlight = 21; highlight3(); graph1(-.93)};
function highlight322(){highlight = 22; highlight3(); graph1(-.83)};
function highlight323(){highlight = 23; highlight3(); graph1(-.73)};
function highlight324(){highlight = 24; highlight3(); graph1(-.63)};
function highlight325(){highlight = 25; highlight3(); graph1(-.53)};
function highlight326(){highlight = 26; highlight3(); graph1(-.43)};
function highlight327(){highlight = 27; highlight3(); graph1(-.33)};
function highlight328(){highlight = 28; highlight3(); graph1(-.23)};
function highlight329(){highlight = 29; highlight3(); graph1(-.13)};
function highlight330(){highlight = 30; highlight3(); graph1(-.03)};

function highlight40(){highlight = 0; highlight4(); graph1(-3.04)}; 
function highlight41(){highlight = 1; highlight4(); graph1(-2.94)}; 
function highlight42(){highlight = 2; highlight4(); graph1(-2.84)}; 
function highlight43(){highlight = 3; highlight4(); graph1(-2.74)};
function highlight44(){highlight = 4; highlight4(); graph1(-2.64)};
function highlight45(){highlight = 5; highlight4(); graph1(-2.54)};
function highlight46(){highlight = 6; highlight4(); graph1(-2.44)};
function highlight47(){highlight = 7; highlight4(); graph1(-2.34)};
function highlight48(){highlight = 8; highlight4(); graph1(-2.24)};
function highlight49(){highlight = 9; highlight4(); graph1(-2.14)};
function highlight410(){highlight = 10; highlight4(); graph1(-2.04)};
function highlight411(){highlight = 11; highlight4(); graph1(-1.94)};
function highlight412(){highlight = 12; highlight4(); graph1(-1.84)};
function highlight413(){highlight = 13; highlight4(); graph1(-1.74)};
function highlight414(){highlight = 14; highlight4(); graph1(-1.64)};
function highlight415(){highlight = 15; highlight4(); graph1(-1.54)};
function highlight416(){highlight = 16; highlight4(); graph1(-1.44)};
function highlight417(){highlight = 17; highlight4(); graph1(-1.34)};
function highlight418(){highlight = 18; highlight4(); graph1(-1.24)};
function highlight419(){highlight = 19; highlight4(); graph1(-1.14)};
function highlight420(){highlight = 20; highlight4(); graph1(-1.04)};
function highlight421(){highlight = 21; highlight4(); graph1(-.94)};
function highlight422(){highlight = 22; highlight4(); graph1(-.84)};
function highlight423(){highlight = 23; highlight4(); graph1(-.74)};
function highlight424(){highlight = 24; highlight4(); graph1(-.64)};
function highlight425(){highlight = 25; highlight4(); graph1(-.54)};
function highlight426(){highlight = 26; highlight4(); graph1(-.44)};
function highlight427(){highlight = 27; highlight4(); graph1(-.34)};
function highlight428(){highlight = 28; highlight4(); graph1(-.24)};
function highlight429(){highlight = 29; highlight4(); graph1(-.14)};
function highlight430(){highlight = 30; highlight4(); graph1(-.04)};

function highlight50(){highlight = 0; highlight5(); graph1(-3.05)}; 
function highlight51(){highlight = 1; highlight5(); graph1(-2.95)}; 
function highlight52(){highlight = 2; highlight5(); graph1(-2.85)}; 
function highlight53(){highlight = 3; highlight5(); graph1(-2.75)};
function highlight54(){highlight = 4; highlight5(); graph1(-2.65)};
function highlight55(){highlight = 5; highlight5(); graph1(-2.55)};
function highlight56(){highlight = 6; highlight5(); graph1(-2.45)};
function highlight57(){highlight = 7; highlight5(); graph1(-2.35)};
function highlight58(){highlight = 8; highlight5(); graph1(-2.25)};
function highlight59(){highlight = 9; highlight5(); graph1(-2.15)};
function highlight510(){highlight = 10; highlight5(); graph1(-2.05)};
function highlight511(){highlight = 11; highlight5(); graph1(-1.95)};
function highlight512(){highlight = 12; highlight5(); graph1(-1.85)};
function highlight513(){highlight = 13; highlight5(); graph1(-1.75)};
function highlight514(){highlight = 14; highlight5(); graph1(-1.65)};
function highlight515(){highlight = 15; highlight5(); graph1(-1.55)};
function highlight516(){highlight = 16; highlight5(); graph1(-1.45)};
function highlight517(){highlight = 17; highlight5(); graph1(-1.35)};
function highlight518(){highlight = 18; highlight5(); graph1(-1.25)};
function highlight519(){highlight = 19; highlight5(); graph1(-1.15)};
function highlight520(){highlight = 20; highlight5(); graph1(-1.05)};
function highlight521(){highlight = 21; highlight5(); graph1(-.95)};
function highlight522(){highlight = 22; highlight5(); graph1(-.85)};
function highlight523(){highlight = 23; highlight5(); graph1(-.75)};
function highlight524(){highlight = 24; highlight5(); graph1(-.65)};
function highlight525(){highlight = 25; highlight5(); graph1(-.55)};
function highlight526(){highlight = 26; highlight5(); graph1(-.45)};
function highlight527(){highlight = 27; highlight5(); graph1(-.35)};
function highlight528(){highlight = 28; highlight5(); graph1(-.25)};
function highlight529(){highlight = 29; highlight5(); graph1(-.15)};
function highlight530(){highlight = 30; highlight5(); graph1(-.05)};

function highlight60(){highlight = 0; highlight6(); graph1(-3.06)}; 
function highlight61(){highlight = 1; highlight6(); graph1(-2.96)}; 
function highlight62(){highlight = 2; highlight6(); graph1(-2.86)}; 
function highlight63(){highlight = 3; highlight6(); graph1(-2.76)};
function highlight64(){highlight = 4; highlight6(); graph1(-2.66)};
function highlight65(){highlight = 5; highlight6(); graph1(-2.56)};
function highlight66(){highlight = 6; highlight6(); graph1(-2.46)};
function highlight67(){highlight = 7; highlight6(); graph1(-2.36)};
function highlight68(){highlight = 8; highlight6(); graph1(-2.26)};
function highlight69(){highlight = 9; highlight6(); graph1(-2.16)};
function highlight610(){highlight = 10; highlight6(); graph1(-2.06)};
function highlight611(){highlight = 11; highlight6(); graph1(-1.96)};
function highlight612(){highlight = 12; highlight6(); graph1(-1.86)};
function highlight613(){highlight = 13; highlight6(); graph1(-1.76)};
function highlight614(){highlight = 14; highlight6(); graph1(-1.66)};
function highlight615(){highlight = 15; highlight6(); graph1(-1.56)};
function highlight616(){highlight = 16; highlight6(); graph1(-1.46)};
function highlight617(){highlight = 17; highlight6(); graph1(-1.36)};
function highlight618(){highlight = 18; highlight6(); graph1(-1.26)};
function highlight619(){highlight = 19; highlight6(); graph1(-1.16)};
function highlight620(){highlight = 20; highlight6(); graph1(-1.06)};
function highlight621(){highlight = 21; highlight6(); graph1(-.96)};
function highlight622(){highlight = 22; highlight6(); graph1(-.86)};
function highlight623(){highlight = 23; highlight6(); graph1(-.76)};
function highlight624(){highlight = 24; highlight6(); graph1(-.66)};
function highlight625(){highlight = 25; highlight6(); graph1(-.56)};
function highlight626(){highlight = 26; highlight6(); graph1(-.46)};
function highlight627(){highlight = 27; highlight6(); graph1(-.36)};
function highlight628(){highlight = 28; highlight6(); graph1(-.26)};
function highlight629(){highlight = 29; highlight6(); graph1(-.16)};
function highlight630(){highlight = 30; highlight6(); graph1(-.06)};

function highlight70(){highlight = 0; highlight7(); graph1(-3.07)}; 
function highlight71(){highlight = 1; highlight7(); graph1(-2.97)}; 
function highlight72(){highlight = 2; highlight7(); graph1(-2.87)}; 
function highlight73(){highlight = 3; highlight7(); graph1(-2.77)};
function highlight74(){highlight = 4; highlight7(); graph1(-2.67)};
function highlight75(){highlight = 5; highlight7(); graph1(-2.57)};
function highlight76(){highlight = 6; highlight7(); graph1(-2.47)};
function highlight77(){highlight = 7; highlight7(); graph1(-2.37)};
function highlight78(){highlight = 8; highlight7(); graph1(-2.27)};
function highlight79(){highlight = 9; highlight7(); graph1(-2.17)};
function highlight710(){highlight = 10; highlight7(); graph1(-2.07)};
function highlight711(){highlight = 11; highlight7(); graph1(-1.97)};
function highlight712(){highlight = 12; highlight7(); graph1(-1.87)};
function highlight713(){highlight = 13; highlight7(); graph1(-1.77)};
function highlight714(){highlight = 14; highlight7(); graph1(-1.67)};
function highlight715(){highlight = 15; highlight7(); graph1(-1.57)};
function highlight716(){highlight = 16; highlight7(); graph1(-1.47)};
function highlight717(){highlight = 17; highlight7(); graph1(-1.37)};
function highlight718(){highlight = 18; highlight7(); graph1(-1.27)};
function highlight719(){highlight = 19; highlight7(); graph1(-1.17)};
function highlight720(){highlight = 20; highlight7(); graph1(-1.07)};
function highlight721(){highlight = 21; highlight7(); graph1(-.97)};
function highlight722(){highlight = 22; highlight7(); graph1(-.87)};
function highlight723(){highlight = 23; highlight7(); graph1(-.77)};
function highlight724(){highlight = 24; highlight7(); graph1(-.67)};
function highlight725(){highlight = 25; highlight7(); graph1(-.57)};
function highlight726(){highlight = 26; highlight7(); graph1(-.47)};
function highlight727(){highlight = 27; highlight7(); graph1(-.37)};
function highlight728(){highlight = 28; highlight7(); graph1(-.27)};
function highlight729(){highlight = 29; highlight7(); graph1(-.17)};
function highlight730(){highlight = 30; highlight7(); graph1(-.07)};

function highlight80(){highlight = 0; highlight8(); graph1(-3.08)}; 
function highlight81(){highlight = 1; highlight8(); graph1(-2.98)}; 
function highlight82(){highlight = 2; highlight8(); graph1(-2.88)}; 
function highlight83(){highlight = 3; highlight8(); graph1(-2.78)};
function highlight84(){highlight = 4; highlight8(); graph1(-2.68)};
function highlight85(){highlight = 5; highlight8(); graph1(-2.58)};
function highlight86(){highlight = 6; highlight8(); graph1(-2.48)};
function highlight87(){highlight = 7; highlight8(); graph1(-2.38)};
function highlight88(){highlight = 8; highlight8(); graph1(-2.28)};
function highlight89(){highlight = 9; highlight8(); graph1(-2.18)};
function highlight810(){highlight = 10; highlight8(); graph1(-2.08)};
function highlight811(){highlight = 11; highlight8(); graph1(-1.98)};
function highlight812(){highlight = 12; highlight8(); graph1(-1.88)};
function highlight813(){highlight = 13; highlight8(); graph1(-1.78)};
function highlight814(){highlight = 14; highlight8(); graph1(-1.68)};
function highlight815(){highlight = 15; highlight8(); graph1(-1.58)};
function highlight816(){highlight = 16; highlight8(); graph1(-1.48)};
function highlight817(){highlight = 17; highlight8(); graph1(-1.38)};
function highlight818(){highlight = 18; highlight8(); graph1(-1.28)};
function highlight819(){highlight = 19; highlight8(); graph1(-1.18)};
function highlight820(){highlight = 20; highlight8(); graph1(-1.08)};
function highlight821(){highlight = 21; highlight8(); graph1(-.98)};
function highlight822(){highlight = 22; highlight8(); graph1(-.88)};
function highlight823(){highlight = 23; highlight8(); graph1(-.78)};
function highlight824(){highlight = 24; highlight8(); graph1(-.68)};
function highlight825(){highlight = 25; highlight8(); graph1(-.58)};
function highlight826(){highlight = 26; highlight8(); graph1(-.48)};
function highlight827(){highlight = 27; highlight8(); graph1(-.38)};
function highlight828(){highlight = 28; highlight8(); graph1(-.28)};
function highlight829(){highlight = 29; highlight8(); graph1(-.18)};
function highlight830(){highlight = 30; highlight8(); graph1(-.08)};

function highlight90(){highlight = 0; highlight9(); graph1(-3.09)}; 
function highlight91(){highlight = 1; highlight9(); graph1(-2.99)}; 
function highlight92(){highlight = 2; highlight9(); graph1(-2.89)}; 
function highlight93(){highlight = 3; highlight9(); graph1(-2.79)};
function highlight94(){highlight = 4; highlight9(); graph1(-2.69)};
function highlight95(){highlight = 5; highlight9(); graph1(-2.59)};
function highlight96(){highlight = 6; highlight9(); graph1(-2.49)};
function highlight97(){highlight = 7; highlight9(); graph1(-2.39)};
function highlight98(){highlight = 8; highlight9(); graph1(-2.29)};
function highlight99(){highlight = 9; highlight9(); graph1(-2.19)};
function highlight910(){highlight = 10; highlight9(); graph1(-2.09)};
function highlight911(){highlight = 11; highlight9(); graph1(-1.99)};
function highlight912(){highlight = 12; highlight9(); graph1(-1.89)};
function highlight913(){highlight = 13; highlight9(); graph1(-1.79)};
function highlight914(){highlight = 14; highlight9(); graph1(-1.69)};
function highlight915(){highlight = 15; highlight9(); graph1(-1.59)};
function highlight916(){highlight = 16; highlight9(); graph1(-1.49)};
function highlight917(){highlight = 17; highlight9(); graph1(-1.39)};
function highlight918(){highlight = 18; highlight9(); graph1(-1.29)};
function highlight919(){highlight = 19; highlight9(); graph1(-1.19)};
function highlight920(){highlight = 20; highlight9(); graph1(-1.09)};
function highlight921(){highlight = 21; highlight9(); graph1(-.99)};
function highlight922(){highlight = 22; highlight9(); graph1(-.89)};
function highlight923(){highlight = 23; highlight9(); graph1(-.79)};
function highlight924(){highlight = 24; highlight9(); graph1(-.69)};
function highlight925(){highlight = 25; highlight9(); graph1(-.59)};
function highlight926(){highlight = 26; highlight9(); graph1(-.49)};
function highlight927(){highlight = 27; highlight9(); graph1(-.39)};
function highlight928(){highlight = 28; highlight9(); graph1(-.29)};
function highlight929(){highlight = 29; highlight9(); graph1(-.19)};
function highlight930(){highlight = 30; highlight9(); graph1(-.09)};

var highlights

function highlights00(){highlights = 0; highlights0(); graph2(.00)}; 
function highlights01(){highlights = 1; highlights0(); graph2(.10)}; 
function highlights02(){highlights = 2; highlights0(); graph2(.20)}; 
function highlights03(){highlights = 3; highlights0(); graph2(.30)};
function highlights04(){highlights = 4; highlights0(); graph2(.40)};
function highlights05(){highlights = 5; highlights0(); graph2(.50)};
function highlights06(){highlights = 6; highlights0(); graph2(.60)};
function highlights07(){highlights = 7; highlights0(); graph2(.70)};
function highlights08(){highlights = 8; highlights0(); graph2(.80)};
function highlights09(){highlights = 9; highlights0(); graph2(.90)};
function highlights010(){highlights = 10; highlights0(); graph2(1.00)};
function highlights011(){highlights = 11; highlights0(); graph2(1.10)};
function highlights012(){highlights = 12; highlights0(); graph2(1.20)};
function highlights013(){highlights = 13; highlights0(); graph2(1.30)};
function highlights014(){highlights = 14; highlights0(); graph2(1.40)};
function highlights015(){highlights = 15; highlights0(); graph2(1.50)};
function highlights016(){highlights = 16; highlights0(); graph2(1.60)};
function highlights017(){highlights = 17; highlights0(); graph2(1.70)};
function highlights018(){highlights = 18; highlights0(); graph2(1.80)};
function highlights019(){highlights = 19; highlights0(); graph2(1.90)};
function highlights020(){highlights = 20; highlights0(); graph2(2.00)};
function highlights021(){highlights = 21; highlights0(); graph2(2.10)};
function highlights022(){highlights = 22; highlights0(); graph2(2.20)};
function highlights023(){highlights = 23; highlights0(); graph2(2.30)};
function highlights024(){highlights = 24; highlights0(); graph2(2.40)};
function highlights025(){highlights = 25; highlights0(); graph2(2.50)};
function highlights026(){highlights = 26; highlights0(); graph2(2.60)};
function highlights027(){highlights = 27; highlights0(); graph2(2.70)};
function highlights028(){highlights = 28; highlights0(); graph2(2.80)};
function highlights029(){highlights = 29; highlights0(); graph2(2.90)};
function highlights030(){highlights = 30; highlights0(); graph2(3.00)};

function highlights10(){highlights = 0; highlights1(); graph2(.01)}; 
function highlights11(){highlights = 1; highlights1(); graph2(.11)}; 
function highlights12(){highlights = 2; highlights1(); graph2(.21)}; 
function highlights13(){highlights = 3; highlights1(); graph2(.31)};
function highlights14(){highlights = 4; highlights1(); graph2(.41)};
function highlights15(){highlights = 5; highlights1(); graph2(.51)};
function highlights16(){highlights = 6; highlights1(); graph2(.61)};
function highlights17(){highlights = 7; highlights1(); graph2(.71)};
function highlights18(){highlights = 8; highlights1(); graph2(.81)};
function highlights19(){highlights = 9; highlights1(); graph2(.91)};
function highlights110(){highlights = 10; highlights1(); graph2(1.01)};
function highlights111(){highlights = 11; highlights1(); graph2(1.11)};
function highlights112(){highlights = 12; highlights1(); graph2(1.21)};
function highlights113(){highlights = 13; highlights1(); graph2(1.31)};
function highlights114(){highlights = 14; highlights1(); graph2(1.41)};
function highlights115(){highlights = 15; highlights1(); graph2(1.51)};
function highlights116(){highlights = 16; highlights1(); graph2(1.61)};
function highlights117(){highlights = 17; highlights1(); graph2(1.71)};
function highlights118(){highlights = 18; highlights1(); graph2(1.81)};
function highlights119(){highlights = 19; highlights1(); graph2(1.91)};
function highlights120(){highlights = 20; highlights1(); graph2(2.01)};
function highlights121(){highlights = 21; highlights1(); graph2(2.11)};
function highlights122(){highlights = 22; highlights1(); graph2(2.21)};
function highlights123(){highlights = 23; highlights1(); graph2(2.31)};
function highlights124(){highlights = 24; highlights1(); graph2(2.41)};
function highlights125(){highlights = 25; highlights1(); graph2(2.51)};
function highlights126(){highlights = 26; highlights1(); graph2(2.61)};
function highlights127(){highlights = 27; highlights1(); graph2(2.71)};
function highlights128(){highlights = 28; highlights1(); graph2(2.81)};
function highlights129(){highlights = 29; highlights1(); graph2(2.91)};
function highlights130(){highlights = 30; highlights1(); graph2(3.01)};

function highlights20(){highlights = 0; highlights2(); graph2(.02)}; 
function highlights21(){highlights = 1; highlights2(); graph2(.12)}; 
function highlights22(){highlights = 2; highlights2(); graph2(.22)}; 
function highlights23(){highlights = 3; highlights2(); graph2(.32)};
function highlights24(){highlights = 4; highlights2(); graph2(.42)};
function highlights25(){highlights = 5; highlights2(); graph2(.52)};
function highlights26(){highlights = 6; highlights2(); graph2(.62)};
function highlights27(){highlights = 7; highlights2(); graph2(.72)};
function highlights28(){highlights = 8; highlights2(); graph2(.82)};
function highlights29(){highlights = 9; highlights2(); graph2(.92)};
function highlights210(){highlights = 10; highlights2(); graph2(1.02)};
function highlights211(){highlights = 11; highlights2(); graph2(1.12)};
function highlights212(){highlights = 12; highlights2(); graph2(1.22)};
function highlights213(){highlights = 13; highlights2(); graph2(1.32)};
function highlights214(){highlights = 14; highlights2(); graph2(1.42)};
function highlights215(){highlights = 15; highlights2(); graph2(1.52)};
function highlights216(){highlights = 16; highlights2(); graph2(1.62)};
function highlights217(){highlights = 17; highlights2(); graph2(1.72)};
function highlights218(){highlights = 18; highlights2(); graph2(1.82)};
function highlights219(){highlights = 19; highlights2(); graph2(1.92)};
function highlights220(){highlights = 20; highlights2(); graph2(2.02)};
function highlights221(){highlights = 21; highlights2(); graph2(2.12)};
function highlights222(){highlights = 22; highlights2(); graph2(2.22)};
function highlights223(){highlights = 23; highlights2(); graph2(2.32)};
function highlights224(){highlights = 24; highlights2(); graph2(2.42)};
function highlights225(){highlights = 25; highlights2(); graph2(2.52)};
function highlights226(){highlights = 26; highlights2(); graph2(2.62)};
function highlights227(){highlights = 27; highlights2(); graph2(2.72)};
function highlights228(){highlights = 28; highlights2(); graph2(2.82)};
function highlights229(){highlights = 29; highlights2(); graph2(2.92)};
function highlights230(){highlights = 30; highlights2(); graph2(3.02)};

function highlights30(){highlights = 0; highlights3(); graph2(.03)}; 
function highlights31(){highlights = 1; highlights3(); graph2(.13)}; 
function highlights32(){highlights = 2; highlights3(); graph2(.23)};
function highlights33(){highlights = 3; highlights3(); graph2(.33)};
function highlights34(){highlights = 4; highlights3(); graph2(.43)};
function highlights35(){highlights = 5; highlights3(); graph2(.53)};
function highlights36(){highlights = 6; highlights3(); graph2(.63)};
function highlights37(){highlights = 7; highlights3(); graph2(.73)};
function highlights38(){highlights = 8; highlights3(); graph2(.83)};
function highlights39(){highlights = 9; highlights3(); graph2(.93)};
function highlights310(){highlights = 10; highlights3(); graph2(1.03)};
function highlights311(){highlights = 11; highlights3(); graph2(1.13)};
function highlights312(){highlights = 12; highlights3(); graph2(1.23)};
function highlights313(){highlights = 13; highlights3(); graph2(1.33)};
function highlights314(){highlights = 14; highlights3(); graph2(1.43)};
function highlights315(){highlights = 15; highlights3(); graph2(1.53)};
function highlights316(){highlights = 16; highlights3(); graph2(1.63)};
function highlights317(){highlights = 17; highlights3(); graph2(1.73)};
function highlights318(){highlights = 18; highlights3(); graph2(1.83)};
function highlights319(){highlights = 19; highlights3(); graph2(1.93)};
function highlights320(){highlights = 20; highlights3(); graph2(2.03)};
function highlights321(){highlights = 21; highlights3(); graph2(2.13)};
function highlights322(){highlights = 22; highlights3(); graph2(2.23)};
function highlights323(){highlights = 23; highlights3(); graph2(2.33)};
function highlights324(){highlights = 24; highlights3(); graph2(2.43)};
function highlights325(){highlights = 25; highlights3(); graph2(2.53)};
function highlights326(){highlights = 26; highlights3(); graph2(2.63)};
function highlights327(){highlights = 27; highlights3(); graph2(2.73)};
function highlights328(){highlights = 28; highlights3(); graph2(2.83)};
function highlights329(){highlights = 29; highlights3(); graph2(2.93)};
function highlights330(){highlights = 30; highlights3(); graph2(3.03)};

function highlights40(){highlights = 0; highlights4(); graph2(.04)}; 
function highlights41(){highlights = 1; highlights4(); graph2(.14)}; 
function highlights42(){highlights = 2; highlights4(); graph2(.24)}; 
function highlights43(){highlights = 3; highlights4(); graph2(.34)};
function highlights44(){highlights = 4; highlights4(); graph2(.44)};
function highlights45(){highlights = 5; highlights4(); graph2(.54)};
function highlights46(){highlights = 6; highlights4(); graph2(.64)};
function highlights47(){highlights = 7; highlights4(); graph2(.74)};
function highlights48(){highlights = 8; highlights4(); graph2(.84)};
function highlights49(){highlights = 9; highlights4(); graph2(.94)};
function highlights410(){highlights = 10; highlights4(); graph2(1.04)};
function highlights411(){highlights = 11; highlights4(); graph2(1.14)};
function highlights412(){highlights = 12; highlights4(); graph2(1.24)};
function highlights413(){highlights = 13; highlights4(); graph2(1.34)};
function highlights414(){highlights = 14; highlights4(); graph2(1.44)};
function highlights415(){highlights = 15; highlights4(); graph2(1.54)};
function highlights416(){highlights = 16; highlights4(); graph2(1.64)};
function highlights417(){highlights = 17; highlights4(); graph2(1.74)};
function highlights418(){highlights = 18; highlights4(); graph2(1.84)};
function highlights419(){highlights = 19; highlights4(); graph2(1.94)};
function highlights420(){highlights = 20; highlights4(); graph2(2.04)};
function highlights421(){highlights = 21; highlights4(); graph2(2.14)};
function highlights422(){highlights = 22; highlights4(); graph2(2.24)};
function highlights423(){highlights = 23; highlights4(); graph2(2.34)};
function highlights424(){highlights = 24; highlights4(); graph2(2.44)};
function highlights425(){highlights = 25; highlights4(); graph2(2.54)};
function highlights426(){highlights = 26; highlights4(); graph2(2.64)};
function highlights427(){highlights = 27; highlights4(); graph2(2.74)};
function highlights428(){highlights = 28; highlights4(); graph2(2.84)};
function highlights429(){highlights = 29; highlights4(); graph2(2.94)};
function highlights430(){highlights = 30; highlights4(); graph2(3.04)};

function highlights50(){highlights = 0; highlights5(); graph2(.05)}; 
function highlights51(){highlights = 1; highlights5(); graph2(.15)}; 
function highlights52(){highlights = 2; highlights5(); graph2(.25)}; 
function highlights53(){highlights = 3; highlights5(); graph2(.35)};
function highlights54(){highlights = 4; highlights5(); graph2(.45)};
function highlights55(){highlights = 5; highlights5(); graph2(.55)};
function highlights56(){highlights = 6; highlights5(); graph2(.65)};
function highlights57(){highlights = 7; highlights5(); graph2(.75)};
function highlights58(){highlights = 8; highlights5(); graph2(.85)};
function highlights59(){highlights = 9; highlights5(); graph2(.95)};
function highlights510(){highlights = 10; highlights5(); graph2(1.05)};
function highlights511(){highlights = 11; highlights5(); graph2(1.15)};
function highlights512(){highlights = 12; highlights5(); graph2(1.25)};
function highlights513(){highlights = 13; highlights5(); graph2(1.35)};
function highlights514(){highlights = 14; highlights5(); graph2(1.45)};
function highlights515(){highlights = 15; highlights5(); graph2(1.55)};
function highlights516(){highlights = 16; highlights5(); graph2(1.65)};
function highlights517(){highlights = 17; highlights5(); graph2(1.75)};
function highlights518(){highlights = 18; highlights5(); graph2(1.85)};
function highlights519(){highlights = 19; highlights5(); graph2(1.95)};
function highlights520(){highlights = 20; highlights5(); graph2(2.05)};
function highlights521(){highlights = 21; highlights5(); graph2(2.15)};
function highlights522(){highlights = 22; highlights5(); graph2(2.25)};
function highlights523(){highlights = 23; highlights5(); graph2(2.35)};
function highlights524(){highlights = 24; highlights5(); graph2(2.45)};
function highlights525(){highlights = 25; highlights5(); graph2(2.55)};
function highlights526(){highlights = 26; highlights5(); graph2(2.65)};
function highlights527(){highlights = 27; highlights5(); graph2(2.75)};
function highlights528(){highlights = 28; highlights5(); graph2(2.85)};
function highlights529(){highlights = 29; highlights5(); graph2(2.95)};
function highlights530(){highlights = 30; highlights5(); graph2(3.05)};

function highlights60(){highlights = 0; highlights6(); graph2(.06)}; 
function highlights61(){highlights = 1; highlights6(); graph2(.16)}; 
function highlights62(){highlights = 2; highlights6(); graph2(.26)}; 
function highlights63(){highlights = 3; highlights6(); graph2(.36)};
function highlights64(){highlights = 4; highlights6(); graph2(.46)};
function highlights65(){highlights = 5; highlights6(); graph2(.56)};
function highlights66(){highlights = 6; highlights6(); graph2(.66)};
function highlights67(){highlights = 7; highlights6(); graph2(.76)};
function highlights68(){highlights = 8; highlights6(); graph2(.86)};
function highlights69(){highlights = 9; highlights6(); graph2(.96)};
function highlights610(){highlights = 10; highlights6(); graph2(1.06)};
function highlights611(){highlights = 11; highlights6(); graph2(1.16)};
function highlights612(){highlights = 12; highlights6(); graph2(1.26)};
function highlights613(){highlights = 13; highlights6(); graph2(1.36)};
function highlights614(){highlights = 14; highlights6(); graph2(1.46)};
function highlights615(){highlights = 15; highlights6(); graph2(1.56)};
function highlights616(){highlights = 16; highlights6(); graph2(1.66)};
function highlights617(){highlights = 17; highlights6(); graph2(1.76)};
function highlights618(){highlights = 18; highlights6(); graph2(1.86)};
function highlights619(){highlights = 19; highlights6(); graph2(1.96)};
function highlights620(){highlights = 20; highlights6(); graph2(2.06)};
function highlights621(){highlights = 21; highlights6(); graph2(2.16)};
function highlights622(){highlights = 22; highlights6(); graph2(2.26)};
function highlights623(){highlights = 23; highlights6(); graph2(2.36)};
function highlights624(){highlights = 24; highlights6(); graph2(2.46)};
function highlights625(){highlights = 25; highlights6(); graph2(2.56)};
function highlights626(){highlights = 26; highlights6(); graph2(2.66)};
function highlights627(){highlights = 27; highlights6(); graph2(2.76)};
function highlights628(){highlights = 28; highlights6(); graph2(2.86)};
function highlights629(){highlights = 29; highlights6(); graph2(2.96)};
function highlights630(){highlights = 30; highlights6(); graph2(3.06)};

function highlights70(){highlights = 0; highlights7(); graph2(.07)}; 
function highlights71(){highlights = 1; highlights7(); graph2(.17)}; 
function highlights72(){highlights = 2; highlights7(); graph2(.27)}; 
function highlights73(){highlights = 3; highlights7(); graph2(.37)};
function highlights74(){highlights = 4; highlights7(); graph2(.47)};
function highlights75(){highlights = 5; highlights7(); graph2(.57)};
function highlights76(){highlights = 6; highlights7(); graph2(.67)};
function highlights77(){highlights = 7; highlights7(); graph2(.77)};
function highlights78(){highlights = 8; highlights7(); graph2(.87)};
function highlights79(){highlights = 9; highlights7(); graph2(.97)};
function highlights710(){highlights = 10; highlights7(); graph2(1.07)};
function highlights711(){highlights = 11; highlights7(); graph2(1.17)};
function highlights712(){highlights = 12; highlights7(); graph2(1.27)};
function highlights713(){highlights = 13; highlights7(); graph2(1.37)};
function highlights714(){highlights = 14; highlights7(); graph2(1.47)};
function highlights715(){highlights = 15; highlights7(); graph2(1.57)};
function highlights716(){highlights = 16; highlights7(); graph2(1.67)};
function highlights717(){highlights = 17; highlights7(); graph2(1.77)};
function highlights718(){highlights = 18; highlights7(); graph2(1.87)};
function highlights719(){highlights = 19; highlights7(); graph2(1.97)};
function highlights720(){highlights = 20; highlights7(); graph2(2.07)};
function highlights721(){highlights = 21; highlights7(); graph2(2.17)};
function highlights722(){highlights = 22; highlights7(); graph2(2.27)};
function highlights723(){highlights = 23; highlights7(); graph2(2.37)};
function highlights724(){highlights = 24; highlights7(); graph2(2.47)};
function highlights725(){highlights = 25; highlights7(); graph2(2.57)};
function highlights726(){highlights = 26; highlights7(); graph2(2.67)};
function highlights727(){highlights = 27; highlights7(); graph2(2.77)};
function highlights728(){highlights = 28; highlights7(); graph2(2.87)};
function highlights729(){highlights = 29; highlights7(); graph2(2.97)};
function highlights730(){highlights = 30; highlights7(); graph2(3.07)};

function highlights80(){highlights = 0; highlights8(); graph2(.08)}; 
function highlights81(){highlights = 1; highlights8(); graph2(.18)}; 
function highlights82(){highlights = 2; highlights8(); graph2(.28)}; 
function highlights83(){highlights = 3; highlights8(); graph2(.38)};
function highlights84(){highlights = 4; highlights8(); graph2(.48)};
function highlights85(){highlights = 5; highlights8(); graph2(.58)};
function highlights86(){highlights = 6; highlights8(); graph2(.68)};
function highlights87(){highlights = 7; highlights8(); graph2(.78)};
function highlights88(){highlights = 8; highlights8(); graph2(.88)};
function highlights89(){highlights = 9; highlights8(); graph2(.98)};
function highlights810(){highlights = 10; highlights8(); graph2(1.08)};
function highlights811(){highlights = 11; highlights8(); graph2(1.18)};
function highlights812(){highlights = 12; highlights8(); graph2(1.28)};
function highlights813(){highlights = 13; highlights8(); graph2(1.38)};
function highlights814(){highlights = 14; highlights8(); graph2(1.48)};
function highlights815(){highlights = 15; highlights8(); graph2(1.58)};
function highlights816(){highlights = 16; highlights8(); graph2(1.68)};
function highlights817(){highlights = 17; highlights8(); graph2(1.78)};
function highlights818(){highlights = 18; highlights8(); graph2(1.88)};
function highlights819(){highlights = 19; highlights8(); graph2(1.98)};
function highlights820(){highlights = 20; highlights8(); graph2(2.08)};
function highlights821(){highlights = 21; highlights8(); graph2(2.18)};
function highlights822(){highlights = 22; highlights8(); graph2(2.28)};
function highlights823(){highlights = 23; highlights8(); graph2(2.38)};
function highlights824(){highlights = 24; highlights8(); graph2(2.48)};
function highlights825(){highlights = 25; highlights8(); graph2(2.58)};
function highlights826(){highlights = 26; highlights8(); graph2(2.68)};
function highlights827(){highlights = 27; highlights8(); graph2(2.78)};
function highlights828(){highlights = 28; highlights8(); graph2(2.88)};
function highlights829(){highlights = 29; highlights8(); graph2(2.98)};
function highlights830(){highlights = 30; highlights8(); graph2(3.08)};

function highlights90(){highlights = 0; highlights9(); graph2(.09)}; 
function highlights91(){highlights = 1; highlights9(); graph2(.19)}; 
function highlights92(){highlights = 2; highlights9(); graph2(.29)}; 
function highlights93(){highlights = 3; highlights9(); graph2(.39)};
function highlights94(){highlights = 4; highlights9(); graph2(.49)};
function highlights95(){highlights = 5; highlights9(); graph2(.59)};
function highlights96(){highlights = 6; highlights9(); graph2(.69)};
function highlights97(){highlights = 7; highlights9(); graph2(.79)};
function highlights98(){highlights = 8; highlights9(); graph2(.89)};
function highlights99(){highlights = 9; highlights9(); graph2(.99)};
function highlights910(){highlights = 10; highlights9(); graph2(1.09)};
function highlights911(){highlights = 11; highlights9(); graph2(1.19)};
function highlights912(){highlights = 12; highlights9(); graph2(1.29)};
function highlights913(){highlights = 13; highlights9(); graph2(1.39)};
function highlights914(){highlights = 14; highlights9(); graph2(1.49)};
function highlights915(){highlights = 15; highlights9(); graph2(1.59)};
function highlights916(){highlights = 16; highlights9(); graph2(1.69)};
function highlights917(){highlights = 17; highlights9(); graph2(1.79)};
function highlights918(){highlights = 18; highlights9(); graph2(1.89)};
function highlights919(){highlights = 19; highlights9(); graph2(1.99)};
function highlights920(){highlights = 20; highlights9(); graph2(2.09)};
function highlights921(){highlights = 21; highlights9(); graph2(2.19)};
function highlights922(){highlights = 22; highlights9(); graph2(2.29)};
function highlights923(){highlights = 23; highlights9(); graph2(2.39)};
function highlights924(){highlights = 24; highlights9(); graph2(2.49)};
function highlights925(){highlights = 25; highlights9(); graph2(2.59)};
function highlights926(){highlights = 26; highlights9(); graph2(2.69)};
function highlights927(){highlights = 27; highlights9(); graph2(2.79)};
function highlights928(){highlights = 28; highlights9(); graph2(2.89)};
function highlights929(){highlights = 29; highlights9(); graph2(2.99)};
function highlights930(){highlights = 30; highlights9(); graph2(3.09)};


function highlight0(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td bgcolor='lightgray'><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i) {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td bgcolor='lightgray' onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td bgcolor='lightgray' onmouseover = 'highlight0"+i+"()' onmouseout = 'table1()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
        
    }
    if (highlight == 30){
        table3 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>-0.0</b></td><td onmouseover = 'highlight030()' bgcolor='lightgray'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()' bgcolor='lightgray'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()' bgcolor='lightgray'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()' bgcolor='lightgray'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()' bgcolor='lightgray'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()' bgcolor='lightgray'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()' bgcolor='lightgray'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()' bgcolor='lightgray'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()' bgcolor='lightgray'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()' bgcolor='lightgray'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td bgcolor='lightgray' onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
}
function highlight1(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td bgcolor='lightgray'><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i) {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlight == 30){
        table3 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>-0.0</b></td><td onmouseover = 'highlight030()' bgcolor='lightgray'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()' bgcolor='lightgray'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()' bgcolor='lightgray'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()' bgcolor='lightgray'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()' bgcolor='lightgray'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()' bgcolor='lightgray'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()' bgcolor='lightgray'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()' bgcolor='lightgray'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()' bgcolor='lightgray'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()' bgcolor='lightgray'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()' bgcolor='lightgray'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
    MathJax.typeset();
}
function highlight2(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td bgcolor='lightgray'><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i){
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlight == 30){
        table3 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>-0.0</b></td><td onmouseover = 'highlight030()' bgcolor='lightgray'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()' bgcolor='lightgray'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()' bgcolor='lightgray'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()' bgcolor='lightgray'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()' bgcolor='lightgray'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()' bgcolor='lightgray'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()' bgcolor='lightgray'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()' bgcolor='lightgray'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()' bgcolor='lightgray'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()' bgcolor='lightgray'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()' bgcolor='lightgray'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
    MathJax.typeset();
}
function highlight3(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td bgcolor='lightgray'><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i) {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlight == 30){
        table3 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>-0.0</b></td><td bgcolor='lightgray' onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight230()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight430()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight530()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight730()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight830()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight930()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
    MathJax.typeset();
}
function highlight4(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td bgcolor='lightgray'><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i) {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlight == 30){
        table3 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>-0.0</b></td><td onmouseover = 'highlight030()' bgcolor='lightgray'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()' bgcolor='lightgray'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()' bgcolor='lightgray'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()' bgcolor='lightgray'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()' bgcolor='lightgray'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()' bgcolor='lightgray'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()' bgcolor='lightgray'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()' bgcolor='lightgray'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()' bgcolor='lightgray'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()' bgcolor='lightgray'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
    MathJax.typeset();
}
function highlight5(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td bgcolor='lightgray'><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i) {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlight == 30){
        table3 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>-0.0</b></td><td onmouseover = 'highlight030()' bgcolor='lightgray'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()' bgcolor='lightgray'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()' bgcolor='lightgray'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()' bgcolor='lightgray'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()' bgcolor='lightgray'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()' bgcolor='lightgray'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()' bgcolor='lightgray'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()' bgcolor='lightgray'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()' bgcolor='lightgray'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()' bgcolor='lightgray'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()' bgcolor='lightgray'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
    MathJax.typeset();
}
function highlight6(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td bgcolor='lightgray'><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i) {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlight == 30){
        table3 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>-0.0</b></td><td bgcolor='lightgray' onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight230()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight430()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight530()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight730()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight830()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight930()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
    MathJax.typeset();
}
function highlight7(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td bgcolor='lightgray'><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i) {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>" 
        }
    }
    if (highlight == 30){
        table3 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>-0.0</b></td><td onmouseover = 'highlight030()' bgcolor='lightgray'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()' bgcolor='lightgray'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()' bgcolor='lightgray'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()' bgcolor='lightgray'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()' bgcolor='lightgray'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()' bgcolor='lightgray'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()' bgcolor='lightgray'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()' bgcolor='lightgray'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()' bgcolor='lightgray'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()' bgcolor='lightgray'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()' bgcolor='lightgray'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
    MathJax.typeset();
}
function highlight8(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td bgcolor='lightgray'><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i) {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlight == 30){
        table3 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>-0.0</b></td><td onmouseover = 'highlight030()' bgcolor='lightgray'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()' bgcolor='lightgray'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()' bgcolor='lightgray'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()' bgcolor='lightgray'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()' bgcolor='lightgray'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()' bgcolor='lightgray'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()' bgcolor='lightgray'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()' bgcolor='lightgray'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()' bgcolor='lightgray'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()' bgcolor='lightgray'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()' bgcolor='lightgray'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
    MathJax.typeset();
}
function highlight9(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td bgcolor='lightgray'><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i) {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlight == 30){
        table3 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>-0.0</b></td><td onmouseover = 'highlight030()' bgcolor='lightgray'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()' bgcolor='lightgray'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()' bgcolor='lightgray'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()' bgcolor='lightgray'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()' bgcolor='lightgray'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()' bgcolor='lightgray'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()' bgcolor='lightgray'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()' bgcolor='lightgray'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()' bgcolor='lightgray'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()' bgcolor='lightgray'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight030()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight130()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight230()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight430()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight530()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight630()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight730()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight830()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight930()' bgcolor='lightgray'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
    MathJax.typeset();
}






























function highlights0(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td bgcolor='lightgray'><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        if (highlights == i) {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlights == 30) {
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>3.0</b></td><td bgcolor='lightgray' onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()' bgcolor='lightgray'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()' bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()' bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td bgcolor='lightgray' onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
}


function highlights1(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td bgcolor='lightgray'><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        if (highlights == i) {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlights == 30) {
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>3.0</b></td><td onmouseover = 'highlights030()' bgcolor='lightgray'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()' bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()' bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}




function highlights2(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td bgcolor='lightgray'><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        if (highlights == i) {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlights == 30) {
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>3.0</b></td><td onmouseover = 'highlights030()' bgcolor='lightgray'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()' bgcolor='lightgray'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()' bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()' bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}

function highlights3(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td bgcolor='lightgray'><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        if (highlights == i) {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlights == 30) {
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>3.0</b></td><td onmouseover = 'highlights030()' bgcolor='lightgray'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()' bgcolor='lightgray'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlights330()' bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()' bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlights330()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}



function highlights4(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td bgcolor='lightgray'><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        if (highlights == i) {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlights == 30) {
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>3.0</b></td><td onmouseover = 'highlights030()' bgcolor='lightgray'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()' bgcolor='lightgray'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()' bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()' bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    }
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}



function highlights5(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td bgcolor='lightgray'><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        if (highlights == i) {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlights == 30) {
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>3.0</b></td><td onmouseover = 'highlight030()' bgcolor='lightgray'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()' bgcolor='lightgray'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()' bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()' bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight330()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}

function highlights6(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td bgcolor='lightgray'><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        if (highlights == i) {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlights == 30) {
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>3.0</b></td><td onmouseover = 'highlights030()' bgcolor='lightgray'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()' bgcolor='lightgray'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()' bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()' bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlights630()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}



function highlights7(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td bgcolor='lightgray'><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        if (highlights == i) {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlights == 30) {
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>3.0</b></td><td onmouseover = 'highlights030()' bgcolor='lightgray'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()' bgcolor='lightgray'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()' bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()' bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}



function highlights8(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td bgcolor='lightgray'><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        if (highlights == i) {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlights == 30) {
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>3.0</b></td><td onmouseover = 'highlights030()' bgcolor='lightgray'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()' bgcolor='lightgray'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()' bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()' bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}


function highlights9(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td bgcolor='lightgray'><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        if (highlights == i) {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlights0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights1"+i+"()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights2"+i+"()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights3"+i+"()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights4"+i+"()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights5"+i+"()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights6"+i+"()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights7"+i+"()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights8"+i+"()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    if (highlights == 30) {
        table5 = "<tr style='border-bottom: thin solid;'><td bgcolor='lightgray'><b>3.0</b></td><td onmouseover = 'highlights030()' bgcolor='lightgray'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()' bgcolor='lightgray'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()' bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()' bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    } else {
        table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlights030()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights130()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights230()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights330()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights430()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights530()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights630()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights730()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights830()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlights930()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
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
        points[i] = {x:20 + .433*i, y:130 - 300*f[i]}
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
        points0[i] = {x:20 + .433*i, y:130 - 300*f[i]}
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
    
    ctx.lineTo(20 + .433*lessvalz, 130 - 300*f[Math.round(lessvalz)]);
    
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
    //ctx.fillText("z",285,132);
    ctx.fillText("z",18 + .434*(300+100*lessval),145);
    ctx.moveTo(20 + .433*(300+100*lessval), 135);
    ctx.lineTo(20 + .433*(300+100*lessval), 125);
    if (Math.abs(z) >= .2){
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145); 
    }
    //ctx.fillText("σ=1",225,50);
    var points = []
    for (i = 0; i < 600; i++) {
        points[i] = {x:20 + .433*i, y:130 - 300*f[i]}
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




















var canvas = document.getElementById("Canvas2");
var ctx = canvas.getContext("2d");
ctx.scale(1.25, 1.25);

graph00();

function graph00(){
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = (i-300)/100
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("Canvas2");
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
        points[i] = {x:20 + .433*i, y:130 - 300*f[i]}
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

function graph2(z){
    var lessval = Math.max(z, -2.70)
    var lessvalz = 300+100*lessval
    var exp = 2.71828;
    var f = [];
    var i;
    for (i = 0; i < 600; i++) {
      var j = (i-300)/100
      f[i] = parseFloat(((1/Math.sqrt(2*3.14))*Math.pow(exp,(-(j*j)/2))))
    }
    var c = document.getElementById("Canvas2");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 300, 150);
    //ctx.fillText("Standard Normal Distribution",85,10);
    ctx.strokeStyle = 'lightgray';
    ctx.beginPath();
    var points0 = []
    for (i = 0; i < lessvalz; i++) {
        points0[i] = {x:20 + .433*i, y:130 - 300*f[i]}
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
    //ctx.fillText("z",285,132);
    ctx.fillText("z",18 + .433*(300+100*lessval),145);
    ctx.moveTo(20 + .433*(300+100*lessval), 135);
    ctx.lineTo(20 + .433*(300+100*lessval), 125);
    if (Math.abs(z) >= .2){
        ctx.moveTo(150, 135);
        ctx.lineTo(150, 125);
        ctx.fillText("0",148,145); 
    }
    //ctx.fillText("σ=1",225,50);
    var points = []
    for (i = 0; i < 600; i++) {
        points[i] = {x:20 + .433*i, y:130 - 300*f[i]}
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
        points[i] = {x:20 + 4.4*i, y:125 - 250*f[i]}
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
        points0[i] = {x:20 + 4.4*i, y:120 - 250*f[i]}
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