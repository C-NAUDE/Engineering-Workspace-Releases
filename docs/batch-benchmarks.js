(() => {
  const svgNS = "http://www.w3.org/2000/svg";
  const cumulative = document.getElementById("batch-time-chart");
  const familyChart = document.getElementById("family-time-chart");
  const batchBody = document.querySelector("#batch-summary-table tbody");
  const familyBody = document.querySelector("#family-summary-table tbody");
  const scaleSelect = document.getElementById("batch-time-scale");
  if (!cumulative || !familyChart || !batchBody || !familyBody) return;

  const svgElement = (tag, attrs = {}, label = "") => {
    const element = document.createElementNS(svgNS, tag);
    for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, String(value));
    if (label) element.textContent = label;
    return element;
  };
  const tableCell = (text, className = "") => {
    const td = document.createElement("td");
    td.textContent = text;
    if (className) td.className = className;
    return td;
  };
  const statsCell = (stats) => {
    const td = document.createElement("td");
    td.className = "detail-stat";
    const main = document.createElement("span");
    main.textContent = stats.averageMs == null ? "—" : `${fmt(stats.averageMs, 3)} ms`;
    const detail = document.createElement("small");
    detail.textContent = `${stats.completed}/${stats.attempted} returned${stats.timeouts ? ` · ${stats.timeouts} timed out` : ""}`;
    td.append(main, detail);
    return td;
  };
  const fmt = (value, digits = 2) => Number(value).toLocaleString("en-US", { maximumFractionDigits: digits });
  const duration = (seconds) => seconds < 60
    ? `${fmt(seconds, 1)} seconds`
    : seconds < 3600
      ? `${fmt(seconds / 60, 1)} minutes`
      : `${Math.floor(seconds / 3600)} hours ${Math.round((seconds % 3600) / 60)} minutes`;
  const appendText = (svg, x, y, text, className = "axis-label", anchor = "middle") => {
    svg.append(svgElement("text", { x, y, "text-anchor": anchor, class: className }, text));
  };

  function drawCumulative(data) {
    cumulative.replaceChildren();
    const compact = window.matchMedia("(max-width: 600px)").matches;
    const W = compact ? 360 : 900, H = compact ? 300 : 390;
    const left = compact ? 48 : 74, right = compact ? 10 : 24;
    const top = compact ? 22 : 22, bottom = compact ? 48 : 58;
    cumulative.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const plotW = W - left - right, plotH = H - top - bottom;
    const points = data.trajectory;
    const totalN = points.at(-1).n;
    const maxValue = Math.max(...points.map((p) => Math.max(p.engineSeconds, p.sympySeconds)));
    const useLog = scaleSelect?.value === "log";
    const transform = (v) => useLog ? Math.log10(1 + v) : v;
    const upper = Math.max(1, transform(maxValue) * 1.06);
    const y = (v) => top + plotH - (transform(v) / upper) * plotH;
    const x = (n) => left + (n / totalN) * plotW;
    const ticks = useLog
      ? (compact ? [0, 10, 1000, 10000] : [0, 1, 10, 100, 1000, 10000]).filter((v) => v <= maxValue)
      : (compact ? [0, maxValue / 2, maxValue] : Array.from({ length: 6 }, (_, i) => maxValue * i / 5));
    for (const v of ticks) {
      const yy = y(v);
      cumulative.append(svgElement("line", { x1: left, x2: W - right, y1: yy, y2: yy, class: "grid-line" }));
      appendText(cumulative, left - (compact ? 7 : 9), yy + (compact ? 3 : 4), fmt(v, 0), compact ? "axis-label compact-axis-label" : "axis-label", "end");
    }
    const xTicks = compact
      ? [0, Math.round(totalN / 2), totalN]
      : [0, 1000, 2000, 3000, 4000, 5000, totalN].filter((n, i, all) => n <= totalN && all.indexOf(n) === i);
    for (const n of xTicks) {
      const xx = x(n);
      cumulative.append(svgElement("line", { x1: xx, x2: xx, y1: top, y2: H - bottom, class: "grid-line" }));
      const label = compact && n >= 1000 ? `${fmt(n / 1000, 1)}k` : fmt(n, 0);
      appendText(cumulative, xx, H - bottom + (compact ? 15 : 23), label, compact ? "axis-label compact-axis-label" : "axis-label");
    }
    cumulative.append(svgElement("line", { x1: left, x2: W - right, y1: H - bottom, y2: H - bottom, stroke: "#738696" }));
    appendText(cumulative, (left + W - right) / 2, H - (compact ? 4 : 12), "Integrals processed", "axis-title");
    cumulative.append(svgElement("text", { x: compact ? 12 : 18, y: top + plotH / 2, transform: `rotate(-90 ${compact ? 12 : 18} ${top + plotH / 2})`, class: compact ? "axis-title compact-axis-title" : "axis-title", "text-anchor": "middle" }, compact ? "Seconds" : "Summed solver time (seconds)"));
    for (const [key, cls, color, name, shortName] of [["engineSeconds", "engine-line", "#168b7d", "Engineering Workspace", "EW"], ["sympySeconds", "sympy-line", "#3158b7", "SymPy", "SymPy"]]) {
      const d = points.map((p, i) => `${i ? "L" : "M"}${x(p.n).toFixed(2)},${y(p[key]).toFixed(2)}`).join(" ");
      cumulative.append(svgElement("path", { d, class: `plot-line ${cls}`, fill: "none", stroke: color, "stroke-width": 3, "stroke-linecap": "round", "stroke-linejoin": "round" }));
      const last = points.at(-1);
      cumulative.append(svgElement("circle", { cx: x(last.n), cy: y(last[key]), r: 4, fill: color }));
      const label = compact ? `${shortName} ${fmt(last[key], key === "engineSeconds" ? 1 : 0)}s` : `${name}: ${fmt(last[key], key === "engineSeconds" ? 1 : 0)} s`;
      cumulative.append(svgElement("text", { x: W - right - (compact ? 4 : 9), y: y(last[key]) - (compact ? 9 : 10), "text-anchor": "end", class: compact ? "series-label compact-series-label" : "series-label", fill: color }, label));
    }
  }

  function drawFamilies(rows) {
    familyChart.replaceChildren();
    const compact = window.matchMedia("(max-width: 600px)").matches;
    const W = compact ? 360 : 900, H = compact ? 470 : 460;
    const left = compact ? 112 : 235, right = compact ? 82 : 90;
    const top = compact ? 14 : 20, bottom = compact ? 42 : 42;
    familyChart.setAttribute("viewBox", `0 0 ${W} ${H}`);
    const plotW = W - left - right;
    const groupH = (H - top - bottom) / rows.length;
    const min = 0.01, max = 10000;
    const xpos = (v) => left + (Math.log10(Math.max(min, Math.min(max, v))) - Math.log10(min)) /
      (Math.log10(max) - Math.log10(min)) * plotW;
    const ticks = compact ? [0.01, 1, 100, 10000] : [0.01, 0.1, 1, 10, 100, 1000, 10000];
    for (const tick of ticks) {
      const xx = xpos(tick);
      familyChart.append(svgElement("line", { x1: xx, x2: xx, y1: top, y2: H - bottom, class: "grid-line" }));
      appendText(familyChart, xx, H - bottom + (compact ? 15 : 19), tick < 1 ? String(tick) : fmt(tick, 0), compact ? "axis-label compact-axis-label" : "axis-label");
    }
    const platforms = [
      ["engine", "bar-engine", "Engineering Workspace"],
      ["sympy", "bar-sympy", "SymPy"],
    ];
    rows.forEach((row, i) => {
      const center = top + i * groupH + groupH / 2;
      const shortLabels = { "Polynomial / rational": "Polynomial", "Algebraic radicals": "Radicals", "Trigonometric / hyperbolic": "Trig / hyp.", "Exponential / logarithmic": "Exp / log", "Inverse functions": "Inverse" };
      appendText(familyChart, left - (compact ? 7 : 12), center + 4, compact ? shortLabels[row.label] : row.label, compact ? "axis-label compact-family-label" : "axis-label", "end");
      platforms.forEach(([key, css, name], j) => {
        const stats = row.sample[key];
        const yy = center - (compact ? 16 : 22) + j * (compact ? 13 : 15);
        if (stats.averageMs == null) {
          appendText(familyChart, left + 3, yy + 11, "No timing", "axis-label", "start");
          return;
        }
        const x0 = xpos(min), x1 = xpos(stats.averageMs);
        const rect = svgElement("rect", { x: x0, y: yy, width: Math.max(1, x1 - x0), height: compact ? 9 : 11, rx: 3, class: css });
        rect.append(svgElement("title", {}, `${name}: ${fmt(stats.averageMs, 3)} ms mean; ${stats.completed}/${stats.attempted} returned; ${stats.timeouts} timed out`));
        familyChart.append(rect);
        if (compact) {
          appendText(familyChart, W - 4, yy + 8, `${fmt(stats.averageMs, stats.averageMs >= 1000 ? 0 : 1)} ms`, "axis-label compact-value-label", "end");
        } else {
          appendText(familyChart, Math.min(W - right + 6, x1 + 6), yy + 10, `${fmt(stats.averageMs, 2)} ms`, "axis-label", "start");
        }
      });
    });
    familyChart.append(svgElement("line", { x1: left, x2: W - right, y1: H - bottom, y2: H - bottom, stroke: "#738696" }));
    appendText(familyChart, (left + W - right) / 2, H - (compact ? 8 : 5), compact ? "Mean milliseconds · log scale" : "Mean milliseconds per integral · log scale", compact ? "axis-title compact-axis-title" : "axis-title");
  }

  function renderTables(data) {
    batchBody.replaceChildren();
    for (const row of data.batchRows) {
      const tr = document.createElement("tr");
      tr.append(tableCell(`Batch ${row.batch}`), tableCell(fmt(row.count, 0)),
        tableCell(`${fmt(row.engine.completed, 0)}/${fmt(row.engine.attempted, 0)}`),
        tableCell(`${fmt(row.engine.totalSeconds)} s`),
        tableCell(`${fmt(row.sympy.completed, 0)}/${fmt(row.sympy.attempted, 0)}`),
        tableCell(`${fmt(row.sympy.totalSeconds)} s`));
      batchBody.append(tr);
    }
    const total = data.fullTotals;
    const tr = document.createElement("tr");
    tr.className = "benchmark-total-row";
    tr.append(tableCell("Total"), tableCell(fmt(total.engine.attempted, 0)),
      tableCell(`${fmt(total.engine.completed, 0)}/${fmt(total.engine.attempted, 0)}`),
      tableCell(`${fmt(total.engine.totalSeconds)} s`),
      tableCell(`${fmt(total.sympy.completed, 0)}/${fmt(total.sympy.attempted, 0)}`),
      tableCell(`${fmt(total.sympy.totalSeconds)} s`));
    batchBody.append(tr);

    familyBody.replaceChildren();
    for (const row of data.familyRows) {
      const trf = document.createElement("tr");
      trf.append(tableCell(`${row.label} (${row.sampleCount} cases)`));
      for (const key of ["engine", "sympy"]) {
        trf.append(statsCell(row.sample[key]));
      }
      familyBody.append(trf);
    }
  }

  fetch("batch-3-9-benchmark.json?v=20261024-b39b")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((data) => {
      for (const [key, prefix] of [["engine", "engine"], ["sympy", "sympy"]]) {
        const totals = data.fullTotals[key];
        document.getElementById(`${prefix}-time-total`).textContent = duration(totals.totalSeconds);
        document.getElementById(`${prefix}-result-total`).textContent = `${fmt(totals.completed, 0)} of ${fmt(totals.attempted, 0)} returned a result`;
      }
      drawCumulative(data);
      drawFamilies(data.familyRows);
      renderTables(data);
      scaleSelect?.addEventListener("change", () => drawCumulative(data));
      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { drawCumulative(data); drawFamilies(data.familyRows); }, 120);
      });
    })
    // Keep the server-rendered benchmark values visible if the JSON request fails.
    .catch(() => {});
})();
