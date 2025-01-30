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

for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  document.getElementById('output2').innerHTML += i + '<br>';
}

for (a = 1; a <= 2; a++) {
  document.getElementById('output3').innerHTML += a + 'a<br>';
  for (b = 1; b <= 3; b++) {
    document.getElementById('output3').innerHTML += b + 'b<br>';
  }
}
let num = [1, 6, 7, 5, 54, 4, 4];
num[2] = 40;
document.getElementById('output5').innerHTML +=
  num[2] + '<br>' + num[3] + '<br>';

document.getElementById('output6').innerHTML = 'Hello World';
document.getElementById('output7').innerHTML = 'Goodbye World';
