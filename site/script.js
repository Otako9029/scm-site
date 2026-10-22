"use strict";

function setLoadedTime() {
  const target = document.getElementById("loaded-at");
  target.textContent = new Date().toLocaleString();
}

function toggleTheme() {
  document.body.classList.toggle("dark")
}

function runPipelineAnimation() {
  const steps = document.querySelectorAll("#pipeline li");
  steps.forEach(function (step, index) {
    setTimeout(function () {
      steps.forEach(function (s) {
        s.classList.remove("active");
      });
      step.classList.add("active");
    }, index * 700);
  });
}

document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
document.getElementById("highlight-btn").addEventListener("click", runPipelineAnimation);
setLoadedTime();
