import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Boostrapclient from "./components/boostrapclient";
import Footer from "./components/footer";
import "./css/material-kit.css?v=3.0.4"

export const metadata = {
  title: "Maprang | Bot",
  description: "บอทมะปรางที่ทุกคนควรมี"
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" href="/MaprangProfile.png" />
        <script src="https://kit.fontawesome.com/f92a39a75d.js" crossOrigin="anonymous"></script>

      </head>
      <body>
        {children}
        <Navbar />
        <Footer></Footer>
      </body>
      <Boostrapclient />
    </html>
  );
}
