import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          React Developer | Building Modern Web Interfaces | Portfolio
        </title>
        <meta
          name="description"
          content="Portfolio of a React developer specializing in building responsive and interactive user interfaces using React, Next.js, and Tailwind CSS."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
