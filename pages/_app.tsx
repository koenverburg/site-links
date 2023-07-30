import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider"

import Script from "next/script";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        defer
        data-domain="links.conradtheprogrammer.com"
        src="https://plausible.io/js/script.js"
      />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
