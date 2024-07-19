import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactQuery from "@/lib/service/reactQuery";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wangsit",
  description: "Dashboard perkembangan penjualan bahan pokok terjangkau di Kota Tasikmalaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body className={inter.className}>
        <ReactQuery>
          <Navbar/>
          {children}
        </ReactQuery>
      </body>
    </html>
  );
}
