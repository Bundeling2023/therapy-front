import Link from "next/link";

export const NoInfo = () => {
    return (
        <main className="w-full bg-white rounded-xl p-7 simple-page break-words">
            Deze pagina is momenteel in ontwikkeling. Onze excuses voor het ongemak.
            We werken eraan om hier binnenkort waardevolle informatie te plaatsen.
            Kom alstublieft later terug om de volledige inhoud te bekijken.
            Wilt u toch al meer weten neem dan <Link className="underline text-dark-purple" href="/contact">contact met ons op</Link>.
        </main>
    );
};
