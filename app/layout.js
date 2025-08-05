import { Roboto } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Hotgorgedbolts",
  description: "A Next.js application for Hotgorgedbolts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
