import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Plushie Paradise | Pelukan Kecil, Sejuta Kebahagiaan",
  description:
    "Plushie Paradise menghadirkan momen manis penuh kebahagiaan lewat koleksi boneka lucu dan menggemaskan. Temukan boneka beruang, kelinci, kucing, bebek, dan lainnya.",
};

export const viewport = {
  themeColor: "#FFF6E9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${fredoka.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
