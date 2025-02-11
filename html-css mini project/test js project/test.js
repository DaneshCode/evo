function change_background_color() {
  document.getElementById('test-1').style.backgroundColor = 'pink';
}

function change_color() {
  document.getElementById('test-1').style.color = 'white';
}

function zoom_out() {
  document.getElementById('test-1').style.fontSize = '1rem';
}

function zoom_in() {
  document.getElementById('test-1').style.fontSize = '4rem';
}

function turn_on() {
  document.getElementById('turn_off').src = './images/pic_bulbon.gif';
}

function turn_off() {
  document.getElementById('turn_off').src = './images/pic_bulboff.gif';
}

for (let i = 0; i <= 10; i++) {
  document.getElementById('output').innerHTML += 'Menasheh<br>';
  if (i == 5) {
    break;
  }
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  document.getElementById('output2').innerHTML += i + '<br>';
}

for (let a = 1; a <= 2; a++) {
  document.getElementById('output3').innerHTML += a + 'a<br>';
  for (let b = 1; b <= 3; b++) {
    document.getElementById('output3').innerHTML += b + 'b<br>';
  }
}

let num = [1, 6, 7, 5, 54, 4, 4];
num[2] = 40;
document.getElementById('output5').innerHTML +=
  num[2] + '<br>' + num[3] + '<br>';

// محاسبه میانگین اعداد یک آرایه با استفاده از reduce
let grades = [17, 18.5, 20, 20, 19.75, 20, 18, 20];
let sum = grades.reduce((a, b) => a + b, 0); // محاسبه مجموع
let average = sum / grades.length; // محاسبه میانگین

// نمایش همه اعداد در قالب یک آرایه
document.getElementById('output6').innerHTML = `[${grades.join(
  ', ',
)}] <br><br><br><br><br>`;

document.getElementById(
  'output6',
).innerHTML += `<strong><br><br><br>میانگین نهایی: ${average}</strong><br><br><br>`;

// محاسبه میانگین اعداد یک آرایه با استفاده از حلقه for
let grades_2 = [17, 18.5, 20, 20, 19.75, 20, 18, 20];
let sum_2 = 0;

for (let i = 0; i < grades_2.length; i++) {
  sum_2 += grades_2[i];
}

let average_2 = sum_2 / grades_2.length;

document.getElementById('output7').innerHTML = `[${grades_2.join(
  ', ',
)}] <br><br><br><br><br>`;

document.getElementById(
  'output7',
).innerHTML += `<strong><br><br><br>میانگین نهایی: ${average_2}</strong><br><br><br>`;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array.slice(0, 5)); // [1, 2, 3, 4, 5]
console.log(array.splice(2)); // [3, 4, 5, 6, 7, 8, 9, 10]

// محاسبه بزرگترین عدد یک آرایه
let array_2 = [9.75, 20, 33, 43, 25, 66, 17, 18, 19, 10];
let max = array_2[0];
for (let i = 0; i < array_2.length; i++) {
  if (array_2[i] > max) {
    max = array_2[i];
  }
}
console.log(max);

// محاسبه کوچکترین عدد یک آرایه
let array_3 = [9.75, 20, 33, 43, 25, 66, 17, 18, 19, 10];
let min = array_3[0];
for (let i = 0; i < array_3.length; i++) {
  if (array_3[i] < min) {
    min = array_3[i];
  }
}
console.log(min);

// Calculates the sumation of two numbers.

function sumation(a, b) {
  return a + b;
}
console.log(sumation(5, 48));

// calculates the sumatuion of tow many numbers whith rest function

function sumation(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sumation(5, 6, 7, 8, 9, 10));

// Calculates the power of a number.
function power(base, exponent) {
  return base ** exponent;
}
console.log(power(2, 3));

// calculates the power of a number with for loop
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base; //result = result * base
  }
  return result;
}
console.log(power(2, 10));

