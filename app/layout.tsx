import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import ConsentBanner from "@/components/ConsentBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
export const metadata: Metadata = {
  title: "TownLink Global — 24/7 AI Receptionist for Chicagoland Businesses",
  description:
    "Addison-based team wiring 24/7 AI receptionists into Chicagoland service businesses. Answer every call, book straight to your calendar, reactivate your old customer list.",
  metadataBase: new URL("https://townlinkglobal.com"),
  openGraph: {
    title: "TownLink Global — AI Receptionist for Chicagoland Businesses",
    description: "Stop losing calls to the shop that answered first. Live in 14 days.",
    type: "website",
    siteName: "TownLink Global",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <MetaPixel />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
