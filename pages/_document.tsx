import { Html, Head, Main, NextScript } from "next/document";

// A single document root keeps browser parsing and React hydration consistent.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
