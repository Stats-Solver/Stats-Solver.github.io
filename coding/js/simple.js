function showthings() {
  var x = document.getElementById("stat").value;
  if (x == "equation"){
      window.location.href="/statistics/hypothesis-testing.html";
  } else if (x == "unknown"){
      window.location.href="/statistics/hypothesis-testing-4.html";
  }
}