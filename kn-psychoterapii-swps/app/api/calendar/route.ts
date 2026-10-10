export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
import ICAL from 'ical.js';
import { cleanDescription } from './description';
const CALENDAR_URL='https://calendar.google.com/calendar/ical/a55ff41cfccf102d5be0d93f51b02a9102eed283453098868a6ce4e3b590c175%40group.calendar.google.com/public/basic.ics';
const zone='Europe/Warsaw';
const dateFormat=new Intl.DateTimeFormat('en-CA',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit'});
const timeFormat=new Intl.DateTimeFormat('pl-PL',{timeZone:zone,hour:'2-digit',minute:'2-digit'});
export async function GET(request:Request){
 const month=new URL(request.url).searchParams.get('month');
 if(!month||!/^\d{4}-(0[1-9]|1[0-2])$/.test(month))return Response.json({error:'Nieprawidłowy miesiąc'},{status:400});
 try{
  const response=await fetch(CALENDAR_URL,{headers:{Accept:'text/calendar'},cache:'no-store',signal:AbortSignal.timeout(10000)});
  if(!response.ok)throw new Error('Calendar unavailable');
  const source=await response.text();
  if(!source.startsWith('BEGIN:VCALENDAR'))throw new Error('Invalid calendar');
  const calendar=new ICAL.Component(ICAL.parse(source));
  for(const component of calendar.getAllSubcomponents('vtimezone')){
   const tzid=component.getFirstPropertyValue('tzid');
   if(tzid)ICAL.TimezoneService.register(new ICAL.Timezone({component,tzid}));
  }
  const [y,m]=month.split('-').map(Number);
  const min=new Date(Date.UTC(y,m-1,1)-86400000),max=new Date(Date.UTC(y,m,1)+86400000);
  const events:Array<{date:string,title:string,time:string,location:string,description:string}>=[];
  const components=calendar.getAllSubcomponents('vevent');
  const masters=components.filter(c=>!c.hasProperty('recurrence-id'));
  const overrides=components.filter(c=>c.hasProperty('recurrence-id'));
  for(const component of masters){
   if(component.getFirstPropertyValue('status')==='CANCELLED')continue;
   const event=new ICAL.Event(component);
   for(const override of overrides.filter(c=>c.getFirstPropertyValue('uid')===event.uid))event.relateException(new ICAL.Event(override));
   const append=(start:any,end:any,item:any)=>{
    let startDate=start.toJSDate(),endDate=end?.toJSDate()||startDate;
    if(startDate>max||endDate<min)return;
    // A floating Google time represents the calendar's Warsaw local time.
    if(!start.isDate&&start.zone?.tzid==='floating'){
     let guess=Date.UTC(start.year,start.month-1,start.day,start.hour,start.minute,start.second);
     for(let i=0;i<2;i++){const parts=new Intl.DateTimeFormat('en-GB',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).formatToParts(new Date(guess));const val=(t:string)=>Number(parts.find(p=>p.type===t)?.value);const local=Date.UTC(val('year'),val('month')-1,val('day'),val('hour'),val('minute'),val('second'));guess+=Date.UTC(start.year,start.month-1,start.day,start.hour,start.minute,start.second)-local;}startDate=new Date(guess);
    }
    const key=start.isDate?start.toString().slice(0,10):dateFormat.format(startDate);
    const endKey=end?.isDate?end.toString().slice(0,10):dateFormat.format(endDate);
    let day=new Date(key+'T12:00:00Z');
    for(let n=0;n<370;n++){
     const dayKey=day.toISOString().slice(0,10);
     if(dayKey>endKey||(start.isDate&&dayKey===endKey&&dayKey!==key))break;
     if(dayKey.startsWith(month))events.push({date:dayKey,title:item.summary||'Spotkanie koła',time:start.isDate?'Cały dzień':timeFormat.format(startDate),location:item.location||'',description:cleanDescription(item.description||'')});
     day=new Date(day.getTime()+86400000);
    }
   };
   if(!event.isRecurring()){append(event.startDate,event.endDate,event);continue;}
   const iterator=event.iterator();let occurrence:any;let count=0;
   while((occurrence=iterator.next())&&count++<20000){if(occurrence.toJSDate()>max)break;const details=event.getOccurrenceDetails(occurrence);if(details.item.component.getFirstPropertyValue('status')==='CANCELLED')continue;append(details.startDate,details.endDate,details.item);}
  }
  events.sort((a,b)=>a.date.localeCompare(b.date)||a.time.localeCompare(b.time));
  return Response.json({events},{headers:{'Cache-Control':'public, max-age=120'}});
 }catch{return Response.json({error:'Nie udało się pobrać kalendarza Google'},{status:502});}
}
