import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
        <div>antonios</div>
        {children}
      </body>
    </html>
  );
}
