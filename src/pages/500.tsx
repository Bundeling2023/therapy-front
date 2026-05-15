import Head from "next/head";
import MaintenanceContent from "@/components/MaintenanceContent";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Website onderhoud | De Bundeling</title>
      </Head>
      <MaintenanceContent />
    </>
  );
}
