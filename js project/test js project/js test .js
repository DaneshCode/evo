function change_background_color() {
  document.getElementById("test-1").style.backgroundColor = "pink";
}

function change_color() {
  document.getElementById("test-1").style.color = "white";
}

function zoom_out() {
  document.getElementById("test-1").style.fontSize = "1rem";
}

function zoom_in() {
  document.getElementById("test-1").style.fontSize = "4rem";
}

function turn_on() {
  document.getElementById("turn_off").src = "./images/pic_bulbon.gif";
}

function turn_off() {
  document.getElementById("turn_off").src = "./images/pic_bulboff.gif";
}
