import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Пам`ятники Гранітні",
  description: "Generated by create next app",
  openGraph: {
    images: "/favicon.ico",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>
        <Header />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
