// Remove Google's automatic conferencing instructions, preserving the event description.
export function cleanDescription(value: string): string {
 return value.replace(/<br\s*\/?>(?:\r?\n)?/gi, '\n').split(/\r?\n/).filter(line =>
  !/https?:\/\/(?:meet\.google\.com\/|support\.google\.com\/a\/users\/answer\/9282720)/i.test(line) &&
  !/^\s*(?:Join (?:with|via) Google Meet|Learn more about Meet|Dołącz (?:w|przez|do)\s*Google Meet|Więcej informacji o Meet)/i.test(line.replace(/<[^>]*>/g, ''))
 ).join('\n').replace(/\n{3,}/g, '\n\n').trim();
}
