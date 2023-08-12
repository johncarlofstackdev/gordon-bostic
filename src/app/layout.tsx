import "@/styles/globals.css";
import { Exo_2 } from "next/font/google";

// Includes Layout
import Header from "@/includes/header";
import Footer from "@/includes/footer";

const exo_2 = Exo_2({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={exo_2.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
};