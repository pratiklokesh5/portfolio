import "./globals.css";
import Navbar from "./components/navbar";
import TransitionProvider from "./components/TransitionProvider";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">
          <TransitionProvider>{children}</TransitionProvider>
        </main>
      </body>
    </html>
  );
}
