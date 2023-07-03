import * as React from "react";
import Head from "next/head";
import { ModeToggle } from "@/components/toggle";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string[];
};

export const Layout = ({
  children,
  title = "This is the default title",
  description = "",
  keywords = [],
}: Props) => {
  const imageWithFallback = "/assets/avatar-github.jpg";

  return (
    <div className="relative">
      <div className="container max-w-xl pt-6 relative">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <meta name="robots" content="follow, index" />
          <meta content={description} name="description" />
          <meta property="keywords" content={keywords.join(", ")} />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Koen Verburg" />

          <meta name="msapplication-TileImage" content="/favicon.ico" />
          {/*<meta name="msapplication-TileColor" content="999999"/>*/}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="favicon-16x16.png" />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="512x512"
            href="apple-touch-icon-512x512.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="192x192"
            href="apple-touch-icon-192x192.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            href="/apple-touch-icon.png"
          />

          <meta property="og:title" content={title} />
          <meta property="og:image" content={imageWithFallback} />
          <meta property="og:description" content={description} />

          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={imageWithFallback} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@koenverburg" />
        </Head>

        <div className="relativex">{children}</div>
      </div>
      <div className="absolute top-3 left-3 w-full h-full">
        <ModeToggle />
      </div>
    </div>
  );
};
