import "./globals.css";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header";
import localFont from "next/font/local";

const Iosevka = localFont({
  src: "../fonts/Iosevka.woff",
  display: "swap",
});

export const metadata = {
  title: "Home | Antonios Papadopoulos",
  description: "Personal website of Antonios Papadopoulos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Iosevka.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
