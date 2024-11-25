import type { Metadata } from "next";
import "./globals.scss";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '500', '700','900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Online Shop",
  description: "Online Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
