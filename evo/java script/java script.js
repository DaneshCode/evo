function change() {
  document.getElementById("1").innerHTML = "In the name of God";
  document.getElementById("2").innerHTML = "Welcome to my first website";
  document.getElementById("3").innerHTML = "Article";
  document.getElementById("4").innerHTML = "Email";
  document.getElementById("5").innerHTML = "Call me !";
  document.getElementById("6").innerHTML = "Telegram";
  document.getElementById("7").innerHTML = "WhatsApp";
  document.getElementById("8").innerHTML = "Calculator";
  document.getElementById("9").innerHTML = "Work samples";
  document.getElementById("10").innerHTML = "Resume";
}

function change_back() {
  document.getElementById("1").innerHTML = "به نام خدا";
  document.getElementById("2").innerHTML = "به اولین وبسایت من خوش آمدید";
  document.getElementById("3").innerHTML = "مقاله";
  document.getElementById("4").innerHTML = "ایمیل";
  document.getElementById("5").innerHTML = "شماره تماس";
  document.getElementById("6").innerHTML = "تلگرام";
  document.getElementById("7").innerHTML = "واتساپ";
  document.getElementById("8").innerHTML = "ماشین حساب";
  document.getElementById("9").innerHTML = "نمونه کار";
  document.getElementById("10").innerHTML = "رزومه";
}

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

function calculator(op) {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  var sign = document.getElementById("sign");
  var javab = document.getElementById("javab");

  sign.innerHTML = op;

  switch (op) {
    case "+":
      javab.textContent = n1 + n2;
      break;
    case "-":
      javab.textContent = n1 - n2;
      break;
    case "*":
      javab.textContent = n1 * n2;
      break;
    case "/":
      javab.textContent = n1 / n2;
      break;
    default:
      javab.textContent = "!عملگر نامعتبر!";
      break;
  }

  changeColor();
}

function changeColor() {
  if (n1.value > 0) {
    n1.style.color = "green";
  } else {
    n1.style.color = "red";
  }

  if (n2.value > 0) {
    n2.style.color = "green";
  } else {
    n2.style.color = "red";
  }

  if (n3.value > 0) {
    n3.style.color = "green";
  } else {
    n3.style.color = "red";
  }

  if (n4.value > 0) {
    n4.style.color = "green";
  } else {
    n4.style.color = "red";
  }

  if (n5.value > 0) {
    n5.style.color = "green";
  } else {
    n5.style.color = "red";
  }

  if (javab.textContent > 0) {
    javab.style.color = "green";
  } else {
    javab.style.color = "red";
  }
  if (res.textContent > 0) {
    res.style.color = "green";
  } else {
    res.style.color = "red";
  }
}

function mazrab() {
  var n3 = parseFloat(document.getElementById("n3").value);
  var n4 = parseFloat(document.getElementById("n4").value);
  var n5 = parseFloat(document.getElementById("n5").value);
  var res = document.getElementById("res");
  var result = document.getElementById("result");

  if (n5 < n4) {
    res.innerHTML = "خطا ! مضرب نهایی نباید از مضرب اولیه کوچک تر باشد";
  } else {
    res.innerHTML = "";

    for (var i = n4; i <= n5; i++) {
      res.innerHTML += "<br>" + n3 * i; //res.innerHTML = res.innerHTML + "<br>" + ...
    }

    result.innerHTML = "done ! ";
  }

  changeColor();
}
