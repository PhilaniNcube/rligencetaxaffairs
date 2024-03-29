import './globals.css'
import { Playfair_Display, Montserrat } from 'next/font/google'
import Navbar from './Navbar';
import { Toaster } from "@/components/ui/toaster";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "800", "900" ],
  variable: "--font-playfair"
 });

export const montseratt = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "800", "900" ],
  variable: "--font-montserrat"
 });



export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montseratt.className} relative`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
