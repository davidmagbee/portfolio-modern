import type { AppProps } from "next/app";
import "@/app/globals.css";

// Pages Router owns its document; never nest the App Router's html/body here.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
