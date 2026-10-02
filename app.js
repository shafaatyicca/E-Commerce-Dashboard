document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement,
    btn = document.getElementById("themeBtn");
  const sync = () => {
    if (btn)
      btn.innerHTML =
        root.dataset.bsTheme === "dark"
          ? '<i class="bi bi-sun"></i>'
          : '<i class="bi bi-moon-stars"></i>';
  };
  sync();
  if (btn)
    btn.addEventListener("click", () => {
      const n = root.dataset.bsTheme === "dark" ? "light" : "dark";
      root.dataset.bsTheme = n;
      localStorage.setItem("theme", n);
      sync();
    });
  const side = document.getElementById("side"),
    bg = document.getElementById("burger");
  if (bg) bg.addEventListener("click", () => side.classList.toggle("open"));
  if (!window.Chart) return;
  Chart.defaults.color = "#8a94a6";
  Chart.defaults.borderColor = "rgba(138,148,166,.2)";
  Chart.defaults.font.family = "Inter,system-ui,sans-serif";
  const rev = document.getElementById("revenueChart");
  if (rev)
    new Chart(rev, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Revenue",
            data: [
              4200, 5100, 4800, 6254, 5900, 7100, 6800, 7600, 8200, 7900, 9100,
              9800,
            ],
            borderColor: "#5b5bd6",
            backgroundColor: "rgba(91,91,214,.15)",
            fill: true,
            tension: 0.4,
            pointRadius: 0,
          },
          {
            label: "Target",
            data: [
              4500, 4800, 5200, 5600, 6000, 6400, 6800, 7200, 7600, 8000, 8400,
              8800,
            ],
            borderColor: "#8a94a6",
            borderDash: [6, 6],
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom" } },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { callback: (v) => "$" + v / 1000 + "k" },
          },
          x: { grid: { display: false } },
        },
      },
    });
  const ch = document.getElementById("channelChart");
  if (ch)
    new Chart(ch, {
      type: "doughnut",
      data: {
        labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
        datasets: [
          {
            data: [300.56, 135.18, 48.96, 154.02],
            backgroundColor: ["#5b5bd6", "#f43f5e", "#10b981", "#f59e0b"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: { legend: { position: "bottom" } },
      },
    });
});
