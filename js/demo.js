/* demo.js — illustrative DB connection-lifetime simulation (not production data) */
(function () {
  var grid = document.getElementById("batch-grid");
  if (!grid) return;

  var runBtn = document.getElementById("run");
  var rate = document.getElementById("rate");
  var note = document.getElementById("note");
  var barChunk = document.getElementById("bar-chunk");
  var barConn = document.getElementById("bar-conn");
  var before = document.getElementById("mode-before");
  var after = document.getElementById("mode-after");

  var N = 20;
  var cells = [];
  var mode = "before";
  var running = false;
  var timers = [];

  // Illustrative failure counts out of N batches
  var FAILURES = { before: 10, after: 1 };

  for (var i = 0; i < N; i++) {
    var cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
    cells.push(cell);
  }

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function setBars() {
    if (mode === "before") {
      barChunk.style.left = "55%";
      barChunk.style.width = "45%";
      barConn.style.left = "0%";
      barConn.style.width = "100%";
    } else {
      barChunk.style.left = "0%";
      barChunk.style.width = "55%";
      barConn.style.left = "55%";
      barConn.style.width = "12%";
    }
  }

  function reset() {
    clearTimers();
    running = false;
    runBtn.disabled = false;
    cells.forEach(function (c) { c.className = "cell"; });
    rate.textContent = "—";
    note.textContent = "Run the simulation to compare the two designs.";
    setBars();
  }

  function setMode(next) {
    mode = next;
    before.setAttribute("aria-pressed", String(mode === "before"));
    after.setAttribute("aria-pressed", String(mode === "after"));
    reset();
  }

  function outcomes() {
    var results = [];
    for (var i = 0; i < N; i++) results.push(i >= FAILURES[mode]);

    // Fisher–Yates shuffle so failures land in random cells
    for (var k = results.length - 1; k > 0; k--) {
      var j = Math.floor(Math.random() * (k + 1));
      var tmp = results[k];
      results[k] = results[j];
      results[j] = tmp;
    }
    return results;
  }

  before.addEventListener("click", function () { setMode("before"); });
  after.addEventListener("click", function () { setMode("after"); });

  runBtn.addEventListener("click", function () {
    if (running) return;
    reset();
    running = true;
    runBtn.disabled = true;

    var results = outcomes();
    var successful = 0;

    results.forEach(function (success, index) {
      timers.push(setTimeout(function () {
        cells[index].className = "cell " + (success ? "ok" : "fail");
        if (success) successful++;

        if (index === N - 1) {
          rate.textContent = Math.round((successful / N) * 100) + "%";
          note.textContent = mode === "before"
            ? "Long connection lifetime causes failures while data is being prepared."
            : "The connection exists only during the database write.";
          running = false;
          runBtn.disabled = false;
        }
      }, 80 * (index + 1)));
    });
  });

  setBars();
})();
