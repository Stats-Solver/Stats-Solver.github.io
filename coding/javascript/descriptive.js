$("#median").hide();$("#mode").hide();$("#Percentiles").hide();
$("#Quartiles").hide();$("#range").hide();$("#IQR").hide()
$("#variance").hide();$("#standard").hide()
$("#zscore").hide(); $("#correlationcoeff").hide(); $("#covariance").hide();

function median(){
    $("#mean").hide(); $("#median").show()
}

function mode(){
    $("#median").hide(); $("#mode").show()
}

function mean(){
    $("#mean").show(); $("#median").hide()
}
