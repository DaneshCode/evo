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

function aval() {
  var aval = parseFloat(document.getElementById("aval").value);

  // بررسی اینکه آیا عدد وارد شده معتبر است یا خیر
  if (isNaN(aval)) {
    document.getElementById("aval-or-morkab").innerHTML =
      "لطفاً یک عدد وارد کنید";
    return;
  }

  var count = 0;
  for (var i = 1; i <= aval; i++) {
    if (aval % i == 0) {
      count++;
    }
  }
  if (aval <= 1) {
    document.getElementById("aval-or-morkab").innerHTML =
      "فقط اعداد طبیعی بزرگ تر از ۱";
  } else if (count == 2) {
    document.getElementById("aval-or-morkab").innerHTML = "اول است";
  } else {
    document.getElementById("aval-or-morkab").innerHTML = "مرکب است";
  }
}
