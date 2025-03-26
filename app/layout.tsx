import type { Metadata } from "next";
import { Roboto_Slab } from 'next/font/google';
import "./globals.css";


const font = Roboto_Slab({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-slab',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});



export const metadata: Metadata = {
  title: "Sebastian Curtis Lavarias",
  description: "Sebastian Curtis Lavarias Website Porfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
