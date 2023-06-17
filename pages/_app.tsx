import 'tailwindcss/tailwind.css';
import { Analytics } from '@vercel/analytics/react';
import Script from "next/script";

import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src= "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6469406013541860"
      />
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}
