export function formatMoney(amount: number, currency = "USD"): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(Number.isFinite(amount) ? amount : 0);
  } catch {
    const sym = currency === "USD" ? "$" : currency === "EUR" ? "€" : currency === "GBP" ? "£" : "";
    return `${sym}${Math.round(amount).toLocaleString()}`;
  }
}

export function formatDateRange(startDate: string, days: number): string {
  if (!startDate) return "Flexible dates";
  try {
    const start = new Date(startDate);
    if (Number.isNaN(start.getTime())) return "Flexible dates";
    const end = new Date(start);
    end.setDate(end.getDate() + Math.max(0, (days || 1) - 1));
    const opt: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
    const s = start.toLocaleDateString("en-US", opt);
    const e = end.toLocaleDateString("en-US", opt);
    const sameYear = start.getFullYear() === end.getFullYear();
    const yr = start.toLocaleDateString("en-US", { year: "numeric" });
    return sameYear ? `${s} – ${e}, ${yr}` : `${s}, ${start.getFullYear()} – ${e}, ${end.getFullYear()}`;
  } catch {
    return "Flexible dates";
  }
}
