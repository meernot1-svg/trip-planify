import type { GeneratedPlan } from "@/lib/types";
import { formatDateRange, formatMoney } from "@/lib/format";

function esc(s: unknown): string {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildPrintHtml(plan: GeneratedPlan): string {
  const s = plan.summary;
  const dates = s.dates || formatDateRange(plan.input.startDate, s.duration);
  const ex = plan.expenses;

  const accomRows = (plan.accommodations || [])
    .map(
      (a) => `
      <tr>
        <td><strong>${esc(a.name)}</strong><br><span class="muted">${esc(a.type)} · ⭐ ${Number(a.rating).toFixed(1)}</span></td>
        <td>${esc(a.pricePerNight || `${formatMoney(a.pricePerNightLow)} – ${formatMoney(a.pricePerNightHigh)}`)}</td>
        <td>${esc(a.description)} ${a.highlights?.length ? `<br><span class="muted">${a.highlights.map((h) => esc(h)).join(" · ")}</span>` : ""}</td>
      </tr>`
    )
    .join("");

  const topPicks = (plan.placesToVisit?.topPicks || [])
    .map(
      (p, i) => `<li>${p.image ? `<img class="place-img" src="${esc(p.image)}" alt="${esc(p.name)}"/>` : ""}<div><strong>${i + 1}. ${esc(p.name)}</strong> <span class="tag">${esc(p.type)}</span><br>${esc(p.description)}<br><span class="muted">⏱ ${esc(p.duration)} · 🌅 ${esc(p.bestTime)}</span></div></li>`
    )
    .join("");
  const gems = (plan.placesToVisit?.hiddenGems || [])
    .map((g) => `<li>💎 <strong>${esc(g.name)}</strong> <span class="tag">${esc(g.type)}</span><br>${esc(g.description)}<br><span class="muted">Why: ${esc(g.why)}</span></li>`)
    .join("");

  const days = (plan.itinerary || [])
    .map(
      (d) => `
      <div class="day">
        <div class="day-head">Day ${esc(d.day)}: ${esc(d.title)}${d.location ? ` <span class="muted">· ${esc(d.location)}</span>` : ""}</div>
        ${d.departure?.from ? `<div class="dep">🚗 <strong>Depart from ${esc(d.departure.from)}</strong>${d.departure.time ? ` at ${esc(d.departure.time)}` : ""}${d.departure.note ? ` — ${esc(d.departure.note)}` : ""}</div>` : ""}
        <div class="slots">
          <div class="slot"><span class="slot-l">🌅 Morning</span><br><strong>${esc(d.morning?.activity)}</strong> <span class="muted">${esc(d.morning?.time)}</span><br>${esc(d.morning?.description)}</div>
          <div class="slot"><span class="slot-l">☀️ Afternoon</span><br><strong>${esc(d.afternoon?.activity)}</strong> <span class="muted">${esc(d.afternoon?.time)}</span><br>${esc(d.afternoon?.description)}</div>
          <div class="slot"><span class="slot-l">🌙 Evening</span><br><strong>${esc(d.evening?.activity)}</strong> <span class="muted">${esc(d.evening?.time)}</span><br>${esc(d.evening?.description)}</div>
        </div>
        ${d.meals ? `<div class="meals"><span class="slot-l">🍳 ${esc(d.meals.breakfast)}</span> · <span class="slot-l">🥗 ${esc(d.meals.lunch)}</span> · <span class="slot-l">🍽️ ${esc(d.meals.dinner)}</span></div>` : ""}
      </div>`
    )
    .join("");

  const expRows = (ex.categories || [])
    .map(
      (c) => `<tr><td>${esc(c.category)}${c.note ? `<br><span class="muted">${esc(c.note)}</span>` : ""}</td><td class="r">${formatMoney(c.amount, ex.currency)}</td><td class="r">${c.percentage}%</td></tr>`
    )
    .join("");

  const countryRows = (plan.countryBreakdown || [])
    .map((c) => `<tr><td>${esc(c.country)}</td><td class="r">${c.days}</td><td class="r">${formatMoney(c.total, ex.currency)}</td></tr>`)
    .join("");

  const transportRows = (plan.interCountryTransport || [])
    .map((t) => `<tr><td>${esc(t.from)} → ${esc(t.to)}</td><td>${esc(t.mode)}</td><td>${esc(t.estTime)}</td><td class="r">${esc(t.estCost)}</td></tr>`)
    .join("");

  const tips = (plan.tips || []).map((t) => `<li>${esc(t)}</li>`).join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(s.destination)} — Trip Planify</title>
<style>
  @page { margin: 14mm; }
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1a2b3c; margin: 0; line-height: 1.45; }
  .muted { color: #6b7280; font-size: 0.85em; }
  .r { text-align: right; }
  .tag { display:inline-block; background:#eef2f7; border-radius:6px; padding:1px 7px; font-size:0.75em; color:#475569; }
  .hero { background: linear-gradient(135deg, #14b8a6, #0ea5e9); color:#fff; border-radius:14px; padding:22px 24px; margin-bottom:18px; }
  .hero h1 { margin:0 0 4px; font-size:26px; }
  .hero .sub { opacity:.92; font-size:13px; }
  .stats { display:flex; flex-wrap:wrap; gap:8px 22px; margin-top:12px; font-size:13px; }
  .stats b { font-size:15px; }
  h2 { font-size:16px; margin:22px 0 8px; padding-bottom:5px; border-bottom:2px solid #14b8a6; color:#0f766e; }
  table { width:100%; border-collapse:collapse; font-size:12.5px; }
  th, td { text-align:left; padding:7px 8px; vertical-align:top; border-bottom:1px solid #e5e7eb; }
  th { background:#f8fafc; font-size:11px; text-transform:uppercase; letter-spacing:.04em; color:#64748b; }
  ul { margin:6px 0; padding-left:18px; }
  li { margin-bottom:7px; font-size:12.5px; }
  li { display:flex; gap:8px; align-items:flex-start; }
  li > div { flex:1; }
  .place-img { width:70px; height:52px; object-fit:cover; border-radius:6px; flex-shrink:0; }
  .day { border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; margin-bottom:10px; page-break-inside:avoid; }
  .day-head { font-weight:700; font-size:13.5px; margin-bottom:6px; }
  .dep { background:#f0fdfa; border:1px solid #99f6e4; border-radius:6px; padding:5px 8px; margin-bottom:6px; font-size:12px; color:#0f766e; }
  .meals { margin-top:6px; font-size:11.5px; color:#475569; }
  .slots { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; }
  .slot { font-size:11.5px; }
  .slot-l { font-weight:600; color:#0f766e; }
  .bar { height:14px; border-radius:7px; overflow:hidden; display:flex; margin:6px 0 14px; }
  .totals { font-weight:700; }
  .totals td { border-top:2px solid #14b8a6; }
  .grid2 { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  .note { border:1px solid #fde68a; background:#fffbeb; border-radius:10px; padding:10px 12px; font-size:12.5px; margin-bottom:10px; }
  .note.teal { border-color:#99f6e4; background:#f0fdfa; }
  .footer { margin-top:24px; padding-top:10px; border-top:1px solid #e5e7eb; font-size:11px; color:#9ca3af; text-align:center; }
  @media print { .noprint { display:none; } body { font-size:12px; } }
</style>
</head>
<body>
  <div class="hero">
    <div class="sub">🧳 Trip Planify · ${esc(s.tripTypeLabel)}</div>
    <h1>${s.origin ? `${esc(s.origin)} → ${esc(s.destination)}` : esc(s.destination)}</h1>
    <div class="sub">${esc(s.budgetStyle)} budget · ${esc(s.travelers)} traveler${s.travelers === 1 ? "" : "s"}</div>
    <div class="stats">
      <div><div class="muted" style="color:rgba(255,255,255,.8)">Duration</div><b>${esc(s.durationLabel || `${s.duration} days`)}</b></div>
      <div><div class="muted" style="color:rgba(255,255,255,.8)">Dates</div><b>${esc(dates)}</b></div>
      <div><div class="muted" style="color:rgba(255,255,255,.8)">Transport</div><b>${esc(s.vehicle)}</b></div>
      <div><div class="muted" style="color:rgba(255,255,255,.8)">Total cost</div><b>${formatMoney(ex.total, ex.currency)}</b></div>
    </div>
  </div>

  <h2>🏨 Where to Stay</h2>
  <table><thead><tr><th>Stay</th><th>Per night</th><th>About</th></tr></thead><tbody>${accomRows || `<tr><td colspan="3">No suggestions.</td></tr>`}</tbody></table>

  <h2>📍 Where to Visit</h2>
  <div class="grid2">
    <div><div style="font-weight:600;margin-bottom:4px">Top picks</div><ul>${topPicks || `<li>—</li>`}</ul></div>
    <div><div style="font-weight:600;margin-bottom:4px;color:#b45309">💎 Hidden gems</div><ul>${gems || `<li>—</li>`}</ul></div>
  </div>

  <h2>🗓️ Day-by-day Itinerary</h2>
  ${days || `<p>No itinerary.</p>`}

  <h2>💰 Expense Breakdown</h2>
  <div class="bar">${(ex.categories || []).map((c, i) => `<div style="width:${Math.max(c.percentage, 2)}%;background:${["#14b8a6","#f59e0b","#f43f5e","#8b5cf6","#10b981","#06b6d4"][i % 6]}"></div>`).join("")}</div>
  <table><thead><tr><th>Category</th><th class="r">Amount</th><th class="r">%</th></tr></thead><tbody>
    ${expRows}
    <tr class="totals"><td>Total</td><td class="r">${formatMoney(ex.total, ex.currency)}</td><td class="r">100%</td></tr>
  </tbody></table>
  ${ex.localCurrency && ex.totalLocal ? `<div class="note teal">Local currency (${esc(ex.localCurrency)}, ~${esc(ex.exchangeRate)}/USD): <strong>${formatMoney(ex.totalLocal, ex.localCurrency)}</strong></div>` : ""}

  ${
    plan.tripType !== "national"
      ? `<h2>🛂 Visa & Currency</h2>
      <div class="note"><strong>Visa & passport:</strong> ${esc(plan.visaNote || "Check passport validity (6+ months) and visa requirements in advance.")}</div>
      <div class="note teal"><strong>Currency:</strong> ${esc(plan.currencyNote || `Costs shown in ${ex.currency}${ex.localCurrency ? ` and ${ex.localCurrency}` : ""}.`)}</div>`
      : ""
  }

  ${
    plan.interCountryTransport?.length
      ? `<h2>🌍 Inter-Country Transport</h2><table><thead><tr><th>Route</th><th>Mode</th><th>Time</th><th class="r">Cost</th></tr></thead><tbody>${transportRows}</tbody></table>`
      : ""
  }
  ${
    plan.countryBreakdown?.length
      ? `<h2>🗺️ Per-Country Expenses</h2><table><thead><tr><th>Country</th><th class="r">Days</th><th class="r">Cost</th></tr></thead><tbody>${countryRows}</tbody></table>`
      : ""
  }

  ${plan.tips?.length ? `<h2>💡 Travel Tips</h2><ul>${tips}</ul>` : ""}

  <div class="footer">Generated by Trip Planify · ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}<br>Estimates are AI-generated — verify prices and timings before booking.</div>

  <script>
    window.addEventListener('load', function(){ setTimeout(function(){ window.print(); }, 350); });
  </script>
</body>
</html>`;
}
