import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "900"],
    subsets: ["latin"],
    variable: "--font-montserrat",

})
export const metadata: Metadata = {
  title: "Premier Energy Leadership Awards – Energizing Excellence: Powering the Future Together",
  description: "Awards and recognition for the energy industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} nothin ${montserrat.variable}` }>{children}</body>
      
    </html>
  );
}
