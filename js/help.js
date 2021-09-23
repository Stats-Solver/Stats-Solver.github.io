$("#help").hide(); $("#listresources").hide(); $("#resourcestitle").hide();

function switchresources() {
    $("#resources").hide(); $("#help").show();
    $("#listresources").show(); $("#listhelp").hide();
    $("#resourcestitle").show(); $("#helptitle").hide();
}

function switchhelp() {
    $("#resources").show(); $("#help").hide(); 
    $("#listresources").hide(); $("#listhelp").show();
    $("#resourcestitle").hide(); $("#helptitle").show();
}