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

table4 = []
for (i = 0; i < 30; i++) {
    var zval = .1 * i
    var zval2 = Math.round(zval * 10) / 10
    table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover='highlight00()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight11()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight22()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover='highlight33()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight44()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight55()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover='highlight66()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight77()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight88()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover='highlight99()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '')+"</td></tr>"
}
table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover='highlight00()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight11()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight22()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight33()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover='highlight44()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight55()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight66()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight77()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight88()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '')+"</td><td onmouseover ='highlight99()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '')+"</td></tr>"
var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
document.getElementById("output2").innerHTML = tablez2

var highlight

function highlight00(){highlight = 0; highlight0()}; 
function highlight01(){highlight = 1; highlight0()}; 
function highlight02(){highlight = 2; highlight0()}; 
function highlight03(){highlight = 3; highlight0()};
function highlight04(){highlight = 4; highlight0()};
function highlight05(){highlight = 5; highlight0()};
function highlight06(){highlight = 6; highlight0()};
function highlight07(){highlight = 7; highlight0()};
function highlight08(){highlight = 8; highlight0()};
function highlight09(){highlight = 9; highlight0()};
function highlight010(){highlight = 10; highlight0()};
function highlight011(){highlight = 11; highlight0()};
function highlight012(){highlight = 12; highlight0()};
function highlight013(){highlight = 13; highlight0()};
function highlight014(){highlight = 14; highlight0()};
function highlight015(){highlight = 15; highlight0()};
function highlight016(){highlight = 16; highlight0()};
function highlight017(){highlight = 17; highlight0()};
function highlight018(){highlight = 18; highlight0()};
function highlight019(){highlight = 19; highlight0()};
function highlight020(){highlight = 20; highlight0()};
function highlight021(){highlight = 21; highlight0()};
function highlight022(){highlight = 22; highlight0()};
function highlight023(){highlight = 23; highlight0()};
function highlight024(){highlight = 24; highlight0()};
function highlight025(){highlight = 25; highlight0()};
function highlight026(){highlight = 26; highlight0()};
function highlight027(){highlight = 27; highlight0()};
function highlight028(){highlight = 28; highlight0()};
function highlight029(){highlight = 29; highlight0()};
function highlight030(){highlight = 30; highlight0()};

function highlight10(){highlight = 0; highlight1()}; 
function highlight11(){highlight = 1; highlight1()}; 
function highlight12(){highlight = 2; highlight1()}; 
function highlight13(){highlight = 3; highlight1()};
function highlight14(){highlight = 4; highlight1()};
function highlight15(){highlight = 5; highlight1()};
function highlight16(){highlight = 6; highlight1()};
function highlight17(){highlight = 7; highlight1()};
function highlight18(){highlight = 8; highlight1()};
function highlight19(){highlight = 9; highlight1()};
function highlight110(){highlight = 10; highlight1()};
function highlight111(){highlight = 11; highlight1()};
function highlight112(){highlight = 12; highlight1()};
function highlight113(){highlight = 13; highlight1()};
function highlight114(){highlight = 14; highlight1()};
function highlight115(){highlight = 15; highlight1()};
function highlight116(){highlight = 16; highlight1()};
function highlight117(){highlight = 17; highlight1()};
function highlight118(){highlight = 18; highlight1()};
function highlight119(){highlight = 19; highlight1()};
function highlight120(){highlight = 20; highlight1()};
function highlight121(){highlight = 21; highlight1()};
function highlight122(){highlight = 22; highlight1()};
function highlight123(){highlight = 23; highlight1()};
function highlight124(){highlight = 24; highlight1()};
function highlight125(){highlight = 25; highlight1()};
function highlight126(){highlight = 26; highlight1()};
function highlight127(){highlight = 27; highlight1()};
function highlight128(){highlight = 28; highlight1()};
function highlight129(){highlight = 29; highlight1()};
function highlight130(){highlight = 30; highlight1()};

function highlight20(){highlight = 0; highlight2()}; 
function highlight21(){highlight = 1; highlight2()}; 
function highlight22(){highlight = 2; highlight2()}; 
function highlight23(){highlight = 3; highlight2()};
function highlight24(){highlight = 4; highlight2()};
function highlight25(){highlight = 5; highlight2()};
function highlight26(){highlight = 6; highlight2()};
function highlight27(){highlight = 7; highlight2()};
function highlight28(){highlight = 8; highlight2()};
function highlight29(){highlight = 9; highlight2()};
function highlight210(){highlight = 10; highlight2()};
function highlight211(){highlight = 11; highlight2()};
function highlight212(){highlight = 12; highlight2()};
function highlight213(){highlight = 13; highlight2()};
function highlight214(){highlight = 14; highlight2()};
function highlight215(){highlight = 15; highlight2()};
function highlight216(){highlight = 16; highlight2()};
function highlight217(){highlight = 17; highlight2()};
function highlight218(){highlight = 18; highlight2()};
function highlight219(){highlight = 19; highlight2()};
function highlight220(){highlight = 20; highlight2()};
function highlight221(){highlight = 21; highlight2()};
function highlight222(){highlight = 22; highlight2()};
function highlight223(){highlight = 23; highlight2()};
function highlight224(){highlight = 24; highlight2()};
function highlight225(){highlight = 25; highlight2()};
function highlight226(){highlight = 26; highlight2()};
function highlight227(){highlight = 27; highlight2()};
function highlight228(){highlight = 28; highlight2()};
function highlight229(){highlight = 29; highlight2()};
function highlight230(){highlight = 30; highlight2()};

function highlight30(){highlight = 0; highlight3()}; 
function highlight31(){highlight = 1; highlight3()}; 
function highlight32(){highlight = 2; highlight3()};
function highlight33(){highlight = 3; highlight3()};
function highlight34(){highlight = 4; highlight3()};
function highlight35(){highlight = 5; highlight3()};
function highlight36(){highlight = 6; highlight3()};
function highlight37(){highlight = 7; highlight3()};
function highlight38(){highlight = 8; highlight3()};
function highlight39(){highlight = 9; highlight3()};
function highlight310(){highlight = 10; highlight3()};
function highlight311(){highlight = 11; highlight3()};
function highlight312(){highlight = 12; highlight3()};
function highlight313(){highlight = 13; highlight3()};
function highlight314(){highlight = 14; highlight3()};
function highlight315(){highlight = 15; highlight3()};
function highlight316(){highlight = 16; highlight3()};
function highlight317(){highlight = 17; highlight3()};
function highlight318(){highlight = 18; highlight3()};
function highlight319(){highlight = 19; highlight3()};
function highlight320(){highlight = 20; highlight3()};
function highlight321(){highlight = 21; highlight3()};
function highlight322(){highlight = 22; highlight3()};
function highlight323(){highlight = 23; highlight3()};
function highlight324(){highlight = 24; highlight3()};
function highlight325(){highlight = 25; highlight3()};
function highlight326(){highlight = 26; highlight3()};
function highlight327(){highlight = 27; highlight3()};
function highlight328(){highlight = 28; highlight3()};
function highlight329(){highlight = 29; highlight3()};
function highlight330(){highlight = 30; highlight3()};

function highlightx0(){highlight = 0; highlightx()}; 
function highlightx1(){highlight = 1; highlightx()}; 
function highlightx2(){highlight = 2; highlightx()}; 
function highlightx3(){highlight = 3; highlightx()};
function highlightx4(){highlight = 4; highlightx()};
function highlightx5(){highlight = 5; highlightx()};
function highlightx6(){highlight = 6; highlightx()};
function highlightx7(){highlight = 7; highlightx()};
function highlightx8(){highlight = 8; highlightx()};
function highlightx9(){highlight = 9; highlightx()};
function highlightx10(){highlight = 10; highlightx()};
function highlightx11(){highlight = 11; highlightx()};
function highlightx12(){highlight = 12; highlightx()};
function highlightx13(){highlight = 13; highlightx()};
function highlightx14(){highlight = 14; highlightx()};
function highlightx15(){highlight = 15; highlightx()};
function highlightx16(){highlight = 16; highlightx()};
function highlightx17(){highlight = 17; highlightx()};
function highlightx18(){highlight = 18; highlightx()};
function highlightx19(){highlight = 19; highlightx()};
function highlightx20(){highlight = 20; highlightx()};
function highlightx21(){highlight = 21; highlightx()};
function highlightx22(){highlight = 22; highlightx()};
function highlightx23(){highlight = 23; highlightx()};
function highlightx24(){highlight = 24; highlightx()};
function highlightx25(){highlight = 25; highlightx()};
function highlightx26(){highlight = 26; highlightx()};
function highlightx27(){highlight = 27; highlightx()};
function highlightx28(){highlight = 28; highlightx()};
function highlightx29(){highlight = 29; highlightx()};
function highlightx30(){highlight = 30; highlightx()};

function highlight40(){highlight = 0; highlight4()}; 
function highlight41(){highlight = 1; highlight4()}; 
function highlight42(){highlight = 2; highlight4()}; 
function highlight43(){highlight = 3; highlight4()};
function highlight44(){highlight = 4; highlight4()};
function highlight45(){highlight = 5; highlight4()};
function highlight46(){highlight = 6; highlight4()};
function highlight47(){highlight = 7; highlight4()};
function highlight48(){highlight = 8; highlight4()};
function highlight49(){highlight = 9; highlight4()};
function highlight410(){highlight = 10; highlight4()};
function highlight411(){highlight = 11; highlight4()};
function highlight412(){highlight = 12; highlight4()};
function highlight413(){highlight = 13; highlight4()};
function highlight414(){highlight = 14; highlight4()};
function highlight415(){highlight = 15; highlight4()};
function highlight416(){highlight = 16; highlight4()};
function highlight417(){highlight = 17; highlight4()};
function highlight418(){highlight = 18; highlight4()};
function highlight419(){highlight = 19; highlight4()};
function highlight420(){highlight = 20; highlight4()};
function highlight421(){highlight = 21; highlight4()};
function highlight422(){highlight = 22; highlight4()};
function highlight423(){highlight = 23; highlight4()};
function highlight424(){highlight = 24; highlight4()};
function highlight425(){highlight = 25; highlight4()};
function highlight426(){highlight = 26; highlight4()};
function highlight427(){highlight = 27; highlight4()};
function highlight428(){highlight = 28; highlight4()};
function highlight429(){highlight = 29; highlight4()};
function highlight430(){highlight = 30; highlight4()};

function highlight50(){highlight = 0; highlight5()}; 
function highlight51(){highlight = 1; highlight5()}; 
function highlight52(){highlight = 2; highlight5()}; 
function highlight53(){highlight = 3; highlight5()};
function highlight54(){highlight = 4; highlight5()};
function highlight55(){highlight = 5; highlight5()};
function highlight56(){highlight = 6; highlight5()};
function highlight57(){highlight = 7; highlight5()};
function highlight58(){highlight = 8; highlight5()};
function highlight59(){highlight = 9; highlight5()};
function highlight510(){highlight = 10; highlight5()};
function highlight511(){highlight = 11; highlight5()};
function highlight512(){highlight = 12; highlight5()};
function highlight513(){highlight = 13; highlight5()};
function highlight514(){highlight = 14; highlight5()};
function highlight515(){highlight = 15; highlight5()};
function highlight516(){highlight = 16; highlight5()};
function highlight517(){highlight = 17; highlight5()};
function highlight518(){highlight = 18; highlight5()};
function highlight519(){highlight = 19; highlight5()};
function highlight520(){highlight = 20; highlight5()};
function highlight521(){highlight = 21; highlight5()};
function highlight522(){highlight = 22; highlight5()};
function highlight523(){highlight = 23; highlight5()};
function highlight524(){highlight = 24; highlight5()};
function highlight525(){highlight = 25; highlight5()};
function highlight526(){highlight = 26; highlight5()};
function highlight527(){highlight = 27; highlight5()};
function highlight528(){highlight = 28; highlight5()};
function highlight529(){highlight = 29; highlight5()};
function highlight530(){highlight = 30; highlight5()};

function highlight60(){highlight = 0; highlight6()}; 
function highlight61(){highlight = 1; highlight6()}; 
function highlight62(){highlight = 2; highlight6()}; 
function highlight63(){highlight = 3; highlight6()};
function highlight64(){highlight = 4; highlight6()};
function highlight65(){highlight = 5; highlight6()};
function highlight66(){highlight = 6; highlight6()};
function highlight67(){highlight = 7; highlight6()};
function highlight68(){highlight = 8; highlight6()};
function highlight69(){highlight = 9; highlight6()};
function highlight610(){highlight = 10; highlight6()};
function highlight611(){highlight = 11; highlight6()};
function highlight612(){highlight = 12; highlight6()};
function highlight613(){highlight = 13; highlight6()};
function highlight614(){highlight = 14; highlight6()};
function highlight615(){highlight = 15; highlight6()};
function highlight616(){highlight = 16; highlight6()};
function highlight617(){highlight = 17; highlight6()};
function highlight618(){highlight = 18; highlight6()};
function highlight619(){highlight = 19; highlight6()};
function highlight620(){highlight = 20; highlight6()};
function highlight621(){highlight = 21; highlight6()};
function highlight622(){highlight = 22; highlight6()};
function highlight623(){highlight = 23; highlight6()};
function highlight624(){highlight = 24; highlight6()};
function highlight625(){highlight = 25; highlight6()};
function highlight626(){highlight = 26; highlight6()};
function highlight627(){highlight = 27; highlight6()};
function highlight628(){highlight = 28; highlight6()};
function highlight629(){highlight = 29; highlight6()};
function highlight630(){highlight = 30; highlight6()};

function highlight70(){highlight = 0; highlight7()}; 
function highlight71(){highlight = 1; highlight7()}; 
function highlight72(){highlight = 2; highlight7()}; 
function highlight73(){highlight = 3; highlight7()};
function highlight74(){highlight = 4; highlight7()};
function highlight75(){highlight = 5; highlight7()};
function highlight76(){highlight = 6; highlight7()};
function highlight77(){highlight = 7; highlight7()};
function highlight78(){highlight = 8; highlight7()};
function highlight79(){highlight = 9; highlight7()};
function highlight710(){highlight = 10; highlight7()};
function highlight711(){highlight = 11; highlight7()};
function highlight712(){highlight = 12; highlight7()};
function highlight713(){highlight = 13; highlight7()};
function highlight714(){highlight = 14; highlight7()};
function highlight715(){highlight = 15; highlight7()};
function highlight716(){highlight = 16; highlight7()};
function highlight717(){highlight = 17; highlight7()};
function highlight718(){highlight = 18; highlight7()};
function highlight719(){highlight = 19; highlight7()};
function highlight720(){highlight = 20; highlight7()};
function highlight721(){highlight = 21; highlight7()};
function highlight722(){highlight = 22; highlight7()};
function highlight723(){highlight = 23; highlight7()};
function highlight724(){highlight = 24; highlight7()};
function highlight725(){highlight = 25; highlight7()};
function highlight726(){highlight = 26; highlight7()};
function highlight727(){highlight = 27; highlight7()};
function highlight728(){highlight = 28; highlight7()};
function highlight729(){highlight = 29; highlight7()};
function highlight730(){highlight = 30; highlight7()};

function highlight80(){highlight = 0; highlight8()}; 
function highlight81(){highlight = 1; highlight8()}; 
function highlight82(){highlight = 2; highlight8()}; 
function highlight83(){highlight = 3; highlight8()};
function highlight84(){highlight = 4; highlight8()};
function highlight85(){highlight = 5; highlight8()};
function highlight86(){highlight = 6; highlight8()};
function highlight87(){highlight = 7; highlight8()};
function highlight88(){highlight = 8; highlight8()};
function highlight89(){highlight = 9; highlight8()};
function highlight810(){highlight = 10; highlight8()};
function highlight811(){highlight = 11; highlight8()};
function highlight812(){highlight = 12; highlight8()};
function highlight813(){highlight = 13; highlight8()};
function highlight814(){highlight = 14; highlight8()};
function highlight815(){highlight = 15; highlight8()};
function highlight816(){highlight = 16; highlight8()};
function highlight817(){highlight = 17; highlight8()};
function highlight818(){highlight = 18; highlight8()};
function highlight819(){highlight = 19; highlight8()};
function highlight820(){highlight = 20; highlight8()};
function highlight821(){highlight = 21; highlight8()};
function highlight822(){highlight = 22; highlight8()};
function highlight823(){highlight = 23; highlight8()};
function highlight824(){highlight = 24; highlight8()};
function highlight825(){highlight = 25; highlight8()};
function highlight826(){highlight = 26; highlight8()};
function highlight827(){highlight = 27; highlight8()};
function highlight828(){highlight = 28; highlight8()};
function highlight829(){highlight = 29; highlight8()};
function highlight830(){highlight = 30; highlight8()};

function highlight90(){highlight = 0; highlight9()}; 
function highlight91(){highlight = 1; highlight9()}; 
function highlight92(){highlight = 2; highlight9()}; 
function highlight93(){highlight = 3; highlight9()};
function highlight94(){highlight = 4; highlight9()};
function highlight95(){highlight = 5; highlight9()};
function highlight96(){highlight = 6; highlight9()};
function highlight97(){highlight = 7; highlight9()};
function highlight98(){highlight = 8; highlight9()};
function highlight99(){highlight = 9; highlight9()};
function highlight910(){highlight = 10; highlight9()};
function highlight911(){highlight = 11; highlight9()};
function highlight912(){highlight = 12; highlight9()};
function highlight913(){highlight = 13; highlight9()};
function highlight914(){highlight = 14; highlight9()};
function highlight915(){highlight = 15; highlight9()};
function highlight916(){highlight = 16; highlight9()};
function highlight917(){highlight = 17; highlight9()};
function highlight918(){highlight = 18; highlight9()};
function highlight919(){highlight = 19; highlight9()};
function highlight920(){highlight = 20; highlight9()};
function highlight921(){highlight = 21; highlight9()};
function highlight922(){highlight = 22; highlight9()};
function highlight923(){highlight = 23; highlight9()};
function highlight924(){highlight = 24; highlight9()};
function highlight925(){highlight = 25; highlight9()};
function highlight926(){highlight = 26; highlight9()};
function highlight927(){highlight = 27; highlight9()};
function highlight928(){highlight = 28; highlight9()};
function highlight929(){highlight = 29; highlight9()};
function highlight930(){highlight = 30; highlight9()};











function highlight0(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td bgcolor='lightgray'><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table2 = []
    for (i = 0; i < 30; i++) {
        if (highlight == i) {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td bgcolor='lightgray' style='border: 1px solid black' onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td bgcolor='lightgray' onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
        
    }
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td bgcolor='lightgray'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
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
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' bgcolor='lightgray' style='border: 1px solid black' onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray' onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
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
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray' style='border: 1px solid black'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()' bgcolor='lightgray'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
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
            table2 += "<tr><td bgcolor='lightgray'><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray' style='border: 1px solid black'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0"+i+"()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1"+i+"()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3"+i+"()' bgcolor='lightgray'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4"+i+"()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5"+i+"()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6"+i+"()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7"+i+"()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8"+i+"()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9"+i+"()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
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
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()' bgcolor='lightgray'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()' bgcolor='lightgray'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
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
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()' bgcolor='lightgray'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()' bgcolor='lightgray'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
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
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()' bgcolor='lightgray'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
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
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()' bgcolor='lightgray'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>" 
        }
    }
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()' bgcolor='lightgray'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
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
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()' bgcolor='lightgray'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()' bgcolor='lightgray'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
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
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        } else {
            var zval = -3 + .1 * i
            var zval2 = Math.round(zval * 10) / 10
            table2 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight0()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(zval2-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(zval2-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(zval2-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(zval2-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(zval2-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(zval2-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(zval2-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()' bgcolor='lightgray'>"+normalcdf(zval2-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
        }
    }
    table3 = "<tr style='border-bottom: thin solid;'><td><b>-0.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(-.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(-.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(-.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(-.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(-.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(-.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(-.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(-.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()' bgcolor='lightgray'>"+normalcdf(-.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez = "<table style='column-gap: 20px;'>"+table1+table2+table3+"</table>"
    document.getElementById("output").innerHTML = tablez
    MathJax.typeset();
}






























function highlight0a(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td bgcolor='lightgray'><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        var zval = .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td bgcolor='lightgray'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight11()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight22()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight33()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight44()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight55()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight66()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight77()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight88()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight99()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td bgcolor='lightgray'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
}


function highlight1a(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td bgcolor='lightgray'><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        var zval = .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight00()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight22()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight33()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight44()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight55()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight66()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight77()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight88()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight99()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}




function highlight2a(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td bgcolor='lightgray'><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        var zval = .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight00()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight11()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight22()' bgcolor='lightgray'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight33()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight44()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight55()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight66()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight77()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight88()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight99()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()' bgcolor='lightgray'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}

function highlight33(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td bgcolor='lightgray'><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        var zval = .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight00()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight11()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight22()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight33()' bgcolor='lightgray'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight44()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight55()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight66()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight77()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight88()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight99()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}



function highlight44(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td bgcolor='lightgray'><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        var zval = .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight00()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight11()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight22()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight33()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight44()' bgcolor='lightgray'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight55()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight66()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight77()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight88()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight99()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()' bgcolor='lightgray'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}



function highlight55(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td bgcolor='lightgray'><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        var zval = .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight00()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight11()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight22()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight33()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight44()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight55()' bgcolor='lightgray'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight66()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight77()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight88()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight99()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()' bgcolor='lightgray'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}

function highlight66(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td bgcolor='lightgray'><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        var zval = .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight00()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight11()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight22()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight33()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight44()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight55()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight66()' bgcolor='lightgray'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight77()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight88()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight99()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td bgcolor='lightgray'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}



function highlight77(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td bgcolor='lightgray'><b>.07</b></td><td><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        var zval = .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight00()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight11()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight22()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight33()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight44()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight55()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight66()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight77()' bgcolor='lightgray'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight88()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight99()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()' bgcolor='lightgray'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}



function highlight88(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td bgcolor='lightgray'><b>.08</b></td><td><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        var zval = .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight00()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight22()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight33()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight44()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight55()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight66()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight77()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight88()' bgcolor='lightgray'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight99()'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()' bgcolor='lightgray'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
}


function highlight99(){
    table1 = "<tr style='border-bottom: thin solid; border-top: thin solid'><td><b>z</b></td><td><b>.00</b></td><td><b>.01</b></td><td><b>.02</b></td><td><b>.03</b></td><td><b>.04</b></td><td><b>.05</b></td><td><b>.06</b></td><td><b>.07</b></td><td><b>.08</b></td><td bgcolor='lightgray'><b>.09</b></td></tr>"
    table4 = []
    for (i = 0; i < 30; i++) {
        var zval = .1 * i
        var zval2 = Math.round(zval * 10) / 10
        table4 += "<tr><td><b>"+zval2.toFixed(1)+"</b></td><td onmouseover = 'highlight00()'>"+normalcdf(zval2).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight11()'>"+normalcdf(zval2+.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight22()'>"+normalcdf(zval2+.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight33()'>"+normalcdf(zval2+.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight44()'>"+normalcdf(zval2+.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight55()'>"+normalcdf(zval2+.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight66()'>"+normalcdf(zval2+.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight77()'>"+normalcdf(zval2+.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight88()'>"+normalcdf(zval2+.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight99()' bgcolor='lightgray'>"+normalcdf(zval2+.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    }
    table5 = "<tr style='border-bottom: thin solid;'><td><b>3.0</b></td><td onmouseover = 'highlight0()'>"+normalcdf(3.0).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight1()'>"+normalcdf(3.01).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight2()'>"+normalcdf(3.02).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight3()'>"+normalcdf(3.03).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight4()'>"+normalcdf(3.04).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight5()'>"+normalcdf(3.05).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight6()'>"+normalcdf(3.06).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight7()'>"+normalcdf(3.07).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight8()'>"+normalcdf(3.08).toFixed(4).replace(/^0+/, '') +"</td><td onmouseover = 'highlight9()' bgcolor='lightgray'>"+normalcdf(3.09).toFixed(4).replace(/^0+/, '') +"</td></tr>"
    var tablez2 = "<table style='column-gap: 20px;'>"+table1+table4+table5+"</table>"
    document.getElementById("output2").innerHTML = tablez2
    MathJax.typeset();
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