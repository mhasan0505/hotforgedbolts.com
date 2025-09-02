import "aos/dist/aos.css";
import { Roboto } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"], // Adding different font weights
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

export const metadata = {
  title: "Hotgorgedbolts",
  description: "A Next.js application for Hotgorgedbolts",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-grow">
            <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
      </body>
    </html>
  );
}
