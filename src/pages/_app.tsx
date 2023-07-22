import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Montserrat } from "next/font/google";
import TagManager from 'react-gtm-module';
import { useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_GTM_ID);
  useEffect(() => {
    TagManager.initialize({ gtmId: `${process.env.NEXT_PUBLIC_GTM_ID}` });
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
