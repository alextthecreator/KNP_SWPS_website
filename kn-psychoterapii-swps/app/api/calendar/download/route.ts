import ICAL from 'ical.js';
import { CALENDAR_URL } from '../source';
import { cleanDescription } from '../description';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
 try {
  const response = await fetch(CALENDAR_URL, {
   headers: { Accept: 'text/calendar' },
   cache: 'no-store',
   signal: AbortSignal.timeout(10000)
  });
  if (!response.ok) throw new Error('Calendar unavailable');
  const source = await response.text();
  if (!source.startsWith('BEGIN:VCALENDAR')) throw new Error('Invalid calendar');
  const calendar = new ICAL.Component(ICAL.parse(source));
  for (const event of calendar.getAllSubcomponents('vevent')) {
   const description = event.getFirstPropertyValue('description');
   if (typeof description === 'string') {
    const cleaned = cleanDescription(description);
    if (cleaned) event.updatePropertyWithValue('description', cleaned);
    else event.removeAllProperties('description');
   }
  }
  return new Response(calendar.toString() + '\r\n', {
   headers: {
    'Content-Type': 'text/calendar; charset=utf-8',
    'Content-Disposition': 'attachment; filename="kn-psychoterapii.ics"',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff'
   }
  });
 } catch {
  return new Response('Nie udało się pobrać kalendarza. Wróć na stronę i spróbuj ponownie za chwilę.', {
   status: 502, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }
  });
 }
}
