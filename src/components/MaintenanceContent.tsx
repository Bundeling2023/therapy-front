import Link from "next/link";

export default function MaintenanceContent() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-16 text-dark-purple">
      <div className="mx-auto max-w-3xl rounded-3xl border border-blue-200 bg-white p-8 shadow-sm md:p-12">
        <h1 className="text-3xl font-semibold md:text-5xl">Website onderhoud</h1>
        <p className="mt-6 text-base leading-7 md:text-lg">
          We zijn bezig met website onderhoud. Bekijk later nog eens.
        </p>
        <p className="mt-2 text-base leading-7 md:text-lg">
          Voor vragen of het maken van een afspraak zijn we bereikbaar via onderstaande gegevens.
        </p>

        <section className="mt-10 space-y-4 rounded-2xl bg-blue-100 p-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>
            Telefoon: <a className="underline" href="tel:0455250116">045 525 0116</a>
          </p>
          <p>
            E-mail: <a className="underline" href="mailto:info@debundeling.nl">info@debundeling.nl</a>
          </p>
          <p>Sint Gregoriuslaan 1a 6442 AE Brunssum</p>
        </section>

        <div className="mt-10">
          <Link href="/" className="inline-flex rounded-lg bg-dark-purple px-5 py-3 font-medium text-white">
            Opnieuw proberen
          </Link>
        </div>
      </div>
    </main>
  );
}
