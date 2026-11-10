/**
 * Docs gallery card previews pass `?anchor=YYYY-MM-DD` (see apps/web/src/lib/card-preview-anchor.ts) so
 * PNG/WebP stills and the live hover embed show the same month and selection. Without an anchor, uses today.
 */
export function embedToday(): Date {
  const search = (globalThis as unknown as { location?: { search?: string } }).location?.search;
  if (typeof search === "string") {
    const anchor = new URLSearchParams(search).get("anchor");
    if (anchor && /^\d{4}-\d{2}-\d{2}$/.test(anchor)) {
      const [y, m, d] = anchor.split("-").map(Number);
      return new Date(y, m - 1, d);
    }
  }
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}
