/* details.js — expand / collapse "Technical details" panels */
(function () {
  document.querySelectorAll(".details-toggle").forEach(function (button, i) {
    var panel = button.nextElementSibling;
    if (!panel) return;

    panel.id = panel.id || "project-details-" + i;
    button.setAttribute("aria-controls", panel.id);
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      button.classList.toggle("open", open);
      button.setAttribute("aria-expanded", String(open));
      button.textContent = open ? "Hide technical details" : "Technical details";
    });
  });
})();
