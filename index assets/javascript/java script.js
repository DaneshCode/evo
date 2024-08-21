function dark() {
  document.body.style.backgroundColor = "#353535";
  document.body.style.color = "#ffffff";
  var resultElement = document.getElementById("result");
  var pElement = document.getElementById("00");
  if (resultElement) {
    resultElement.style.color = "#ffffff";
  } else if (pElement) pElement.style.color = "#ffffff";
}

function white() {
  document.body.style.backgroundColor = "";
  document.body.style.color = "";
  var resultElement = document.getElementById("result");
  var pElement = document.getElementById("00");
  if (resultElement) {
    resultElement.style.color = "";
  } else if (pElement) pElement.style.color = "";
}


