import * as React from 'react'

import Script from 'next/script'
import '../styles/global.scss'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        defer
        src={process.env.NEXT_PUBLIC_UMAMI_DATA_DOMAIN}
        data-domain={process.env.NEXT_PUBLIC_UMAMI_URL}
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_SITE_ID}
      />
      <Component {...pageProps} />
    </>
  )
}
