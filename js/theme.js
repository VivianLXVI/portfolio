/* theme.js — loaded in <head> (no defer) so the saved theme applies before first paint */
(function () {
  var THEMES = ["light", "dark", "gloomy"];
  var KEY = "portfolio-theme";
  var root = document.documentElement;

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function write(theme) {
    try { localStorage.setItem(KEY, theme); } catch (e) { /* storage unavailable */ }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-btn").forEach(function (button) {
      button.classList.toggle("active", button.dataset.theme === theme);
    });
  }

  var saved = read();
  if (THEMES.indexOf(saved) !== -1) {
    root.setAttribute("data-theme", saved);
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(root.getAttribute("data-theme") || "light");

    document.querySelectorAll(".theme-btn").forEach(function (button) {
      button.addEventListener("click", function () {
        apply(button.dataset.theme);
        write(button.dataset.theme);
      });
    });
  });
})();
