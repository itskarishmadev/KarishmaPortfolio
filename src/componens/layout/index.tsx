import { ReactNode } from "react";
import Header from "./header";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
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
      <Header />
      {children}
    </div>
  );
}
