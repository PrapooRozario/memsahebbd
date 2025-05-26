import type { Metadata } from "next";
import "./globals.css";
import { Hind_Siliguri } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "মেমসাহেব - যুক্তির বাংলাদেশ- আত্মনির্ভরশীল আস্থা আর স্বাধীনতায় বিশ্বাসী",
  description:
    "মেমসাহেব,এই পথচলা নারীর আবেগের কথা তুলে ধরবে,ভালো লাগা, মন্দ লাগা, লেখালেখি, সাহিত্য চর্চা,নারীর পরিপূর্ণ জীবন যাপনে উদ্বুদ্ধ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${hindSiliguri.className} max-w-4/5 mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
