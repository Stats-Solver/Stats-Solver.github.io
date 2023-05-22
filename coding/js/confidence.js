function showthings() {
  var x = document.getElementById("stat").value;
  if (x == "known"){
      window.location.href="/statistics/confidence-intervals-1.html";
  } else if (x == "unknown"){
      window.location.href="/statistics/confidence-intervals-5.html";
  }
}

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

$('.popover-dismiss').popover({
  trigger: 'focus'
})
