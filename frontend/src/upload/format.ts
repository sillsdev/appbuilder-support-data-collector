import { getLocale } from "../lib/paraglide/runtime.js";

const sizeUnits = ["bytes", "KB", "MB", "GB", "TB"];
/** Formats a number of bytes for display, e.g. "19.6 MB". */
export function formatBytes(bytes: number): string {
  let size = bytes;
  let unit = 0;
  while (size >= 1024 && unit < sizeUnits.length - 1) {
    size /= 1024;
    unit++;
  }
  const digits = unit === 0 ? 0 : 1;
  return `${size.toLocaleString(getLocale(), { maximumFractionDigits: digits })} ${sizeUnits[unit]}`;
}

/** Formats Unix milliseconds as a date and time, e.g. "02 Oct 2026, 09:20:21". */
export function formatDateTime(ms: number): string {
  return new Date(ms).toLocaleString(getLocale(), {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
