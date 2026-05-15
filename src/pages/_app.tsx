import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Montserrat } from "next/font/google";
import MaintenanceContent from "@/components/MaintenanceContent";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_FORCE_MAINTENANCE === "true") {
    return (
      <div className={montserrat.className}>
        <MaintenanceContent />
      </div>
    );
  }

  if ((pageProps as { __maintenance?: boolean })?.__maintenance) {
    return (
      <div className={montserrat.className}>
        <MaintenanceContent />
      </div>
    );
  }

  return (
    <>
      <div className={montserrat.className}>
        <NextNProgress />
        <Component {...pageProps} />
      </div>
    </>
  );
}
