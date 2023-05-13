$("#pvalue").hide(); $("#rejectionrule").hide(); $("#criticalvalue").hide(); $("#rejectionrule2").hide(); 

function pvalue(){
    $("#teststatistic").hide(); $("#pvalue").show(); $("#rejectionrule").hide();
}

function teststatistic(){
    $("#teststatistic").show(); $("#pvalue").hide()
}

function rejectionrule(){
    $("#rejectionrule").show(); $("#pvalue").hide(); $("#criticalvalue").hide();
}

function criticalvalue(){
    $("#criticalvalue").show(); $("#rejectionrule").hide(); $("#rejectionrule2").hide();
}

function rejectionrule2(){
    $("#rejectionrule2").show(); $("#criticalvalue").hide();
}