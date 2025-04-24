import type { Metadata } from "next";
import { Roboto_Slab } from 'next/font/google';
import "./globals.css";
import {cn} from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";
import BaseNavigation from "@/components/base/base-navigation";


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
    <div
        className={cn(
            "min-h-screen w-full transition-colors duration-200",
            "bg-white dark:bg-black text-muted-foreground",
        )}
    >
        <main className="max-w-[576px] mx-auto px-4 py-12 md:py-16">
            <ThemeToggle/>

            <BaseNavigation/>

            {children}
        </main>
    </div>
    </body>
    </html>
  );
}
