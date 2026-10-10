import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';
const nunito = localFont({src:'./fonts/Nunito-Variable.ttf',variable:'--font-nunito',weight:'200 1000',display:'swap'});
export const metadata: Metadata = {
 title:'KN Psychoterapii · Uniwersytet SWPS we Wrocławiu',
 description:'Wizja koła, kalendarz spotkań, regulamin i zapisy do KN Psychoterapii na Uniwersytecie SWPS we Wrocławiu.',
 icons:{icon:'/assets/logo.png'}
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="pl" className={nunito.variable}><body>{children}<Script src="/config.js" strategy="beforeInteractive"/><Script src="/app.js" strategy="afterInteractive"/></body></html>;
}
