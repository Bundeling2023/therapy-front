import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Montserrat } from "next/font/google";
import ReactGA from "react-ga4";
import { isEnvironment } from "@/types/utils";
import { useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const isProduction = isEnvironment("production");
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

    if (gtmId && isProduction) {
      ReactGA.initialize(gtmId);
      ReactGA.send("pageview");
    }
  }, []);

  return (
    <>
      <div className={montserrat.className}>
        <NextNProgress />
        <Component {...pageProps} />
      </div>
    </>
  );
}
