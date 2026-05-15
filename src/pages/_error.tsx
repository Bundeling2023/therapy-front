import type { NextPageContext } from "next";
import Head from "next/head";
import MaintenanceContent from "@/components/MaintenanceContent";

type ErrorProps = {
  statusCode?: number;
};

function CustomError({ statusCode }: ErrorProps) {
  return (
    <>
      <Head>
        <title>Website onderhoud | De Bundeling</title>
      </Head>
      <MaintenanceContent />
      {statusCode ? <span className="hidden">Error {statusCode}</span> : null}
    </>
  );
}

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500;
  return { statusCode };
};

export default CustomError;
