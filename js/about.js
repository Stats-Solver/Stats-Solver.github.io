$("#about").hide(); $("#meetme").hide(); $("#meettitle").hide();

function switchmeet() {
    $("#about").show(); $("#meet").hide();
    $("#meetme").show(); $("#aboutsolver").hide();
    $("#meettitle").show(); $("#abouttitle").hide();
}

function switchabout() {
    $("#about").hide(); $("#meet").show(); 
    $("#meetme").hide(); $("#aboutsolver").show();
    $("#meettitle").hide(); $("#abouttitle").show();
}