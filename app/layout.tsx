import "./globals.css";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/Header";

const inter = Montserrat({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
