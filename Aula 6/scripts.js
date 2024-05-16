function detectUserBrowser() {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    alert("Seu navegador é o Opera");
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
    alert("Seu navegador é o Edge");
    window.location.href = "microsoft-edge.html";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    alert("Seu navegador é o Chrome");
    window.location.href = "chrome.html";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    alert("Seu navegador é o Safari");
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    alert("Seu navegador é o Firefox");
    window.location.href = "mozilla-firefox.html";
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    //IF IE > 10
    alert("Seu navegador é o IE");
  } else {
    alert("Seu navegador é o deconhecido");
  }
}
