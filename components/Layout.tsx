import * as React from 'react'
import Head from 'next/head'

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="container max-w-xl pt-6">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {children}
  </div>
)

export default Layout
