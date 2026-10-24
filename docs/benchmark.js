(() => {
  const familySelect = document.getElementById("benchmark-family");
  const rows = document.getElementById("benchmark-rows");
  const count = document.getElementById("benchmark-count");
  if (!familySelect || !rows || !count) return;

  const statusText = (status, ms) =>
    ms == null ? status : `${status} · ${Number(ms).toLocaleString("en-US", { maximumFractionDigits: 3 })} ms`;

  const cell = (content, className = "") => {
    const td = document.createElement("td");
    td.textContent = content;
    if (className) td.className = className;
    return td;
  };

  fetch("integrator-benchmark.json?v=20261024-b39b")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(({ cases }) => {
      const families = [...new Set(cases.map((item) => item.family))].sort();
      for (const family of families) {
        const option = document.createElement("option");
        option.value = family;
        option.textContent = family;
        familySelect.append(option);
      }

      const render = () => {
        const visible = cases.filter((item) => familySelect.value === "all" || item.family === familySelect.value);
        if (window.MathJax?.typesetClear) window.MathJax.typesetClear([rows]);
        rows.replaceChildren();
        for (const item of visible) {
          const tr = document.createElement("tr");
          const integral = cell(`\\(\\displaystyle\\int ${item.latexExpression}\\,\\mathrm{d}x\\)`, "math-cell");
          integral.setAttribute("aria-label", `Integral of ${item.expression} with respect to x`);
          tr.append(
            integral,
            cell(item.family),
            cell(statusText(item.cppStatus, item.cppMs), item.cppStatus === "Completed" ? "result-ok" : "result-limited"),
            cell(statusText(item.sympyStatus, item.sympyMs), item.sympyStatus === "Completed" ? "result-ok" : "result-limited")
          );
          rows.append(tr);
        }
        count.textContent = `Showing ${visible.length} of ${cases.length} illustrative cases`;
        if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([rows]).catch(() => {});
      };
      familySelect.addEventListener("change", render);
      render();
    })
    .catch(() => {
      rows.replaceChildren();
      const tr = document.createElement("tr");
      tr.append(cell("Comparison data is temporarily unavailable.", "benchmark-error"));
      tr.firstChild.colSpan = 4;
      rows.append(tr);
    });
})();
