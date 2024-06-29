import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight:["400","500","600","800"]});

export const metadata = {
  title: "Travel Lanka",
  description: "Sipping Serenity: A Journey Through Sri Lanka's Tea Trails",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
