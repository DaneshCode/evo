function setTheme(isDark) {
  const backgroundColor = isDark ? "#353535" : "#e8e8e8";
  const color = isDark ? "#ffffff" : "black";
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = color;
  var elements = [
    document.getElementById("result"),
    ...document.querySelectorAll(".pBox"),
    document.querySelector("footer")
  ];
  elements.forEach(function(element) {
    if (element) {
      element.style.color = color;
      element.style.backgroundColor = isDark ? "#353535" : "#f1f1f1";
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const themeSwitch = document.querySelector(".theme-switch__checkbox");
  themeSwitch.addEventListener("change", function() {
    setTheme(this.checked);
  });
});


