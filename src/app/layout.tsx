"use client";
import "@/styles/globals.css";

import { Exo_2 } from "next/font/google";
import { NavigationProvider } from "@/context/globalStateContext";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Includes Layout
import Header from "@/includes/header";
import Footer from "@/includes/footer";

config.autoAddCss = false;
const exo_2 = Exo_2({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode, title: string }) {
  return (
    <html lang="en">
      <body className={exo_2.className}>
        <NavigationProvider>
          <Header />
          {children}
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
};