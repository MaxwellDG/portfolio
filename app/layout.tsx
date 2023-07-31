import { useState } from "react";
import ThemeProvider, { Theme } from "../src/components/themeProvider";
import "../globals.css";
import "../src/theme/app.scss";

export const metadata = {
  title: 'Maxwell Dunk-Green',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="h-screen">
      <body className="h-screen flex">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
