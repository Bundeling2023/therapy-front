import Head from "next/head";
import MaintenanceContent from "@/components/MaintenanceContent";

export default function MaintenancePage() {
  return (
    <>
      <Head>
        <title>Website onderhoud | De Bundeling</title>
        <meta
          name="description"
          content="We zijn bezig met website onderhoud. Bekijk later nog eens of neem contact met ons op."
        />
      </Head>
      <MaintenanceContent />
    </>
  );
}
