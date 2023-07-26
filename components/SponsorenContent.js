import SponsorenLogoCloud from "./SponsorenLogoCloud";

export default function SponsorenContent({ data }) {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto container">
          <div className="relative overflow-hidden bg-white">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-screen-md text-lg mb-8">
                <h1>
                  <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Unsere Sponsoren
                  </span>
                </h1>
              </div>
              <div className="space-y-4 max-w-screen-lg mx-auto">
                {data.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex flex-col flex-col-reverse md:flex-row p-4 items-center justify-between md:p-8 bg-gray-100 rounded"
                  >
                    <div className="w-full md:w-2/3 md:mr-4">
                      <h2 className="text-xl font-bold">{partner.firma}</h2>
                      <h3 className="text-lg text-gray-500">{partner.paket}</h3>
                      <p className="mt-2 text-gray-600">
                        {partner.beschreibung}
                      </p>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-4 px-4 py-2 text-white bg-brand-blue hover:bg-brand-orange rounded"
                      >
                        Webseite besuchen
                      </a>
                    </div>
                    <div className="w-full md:w-1/3 md:ml-4 mb-4 md:mb-0">
                      <img
                        src={partner.logo.url}
                        alt={`${partner.firma} logo`}
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mx-auto max-w-screen-md text-lg pt-16 mb-8">
                <h1>
                  <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Neuanfang
                  </span>
                </h1>
                <p className="mt-8 text-sm md:text-xl leading-8 text-gray-500">
                  Futsal Olympique Basel befindet sich im April 2016 im Umbruch.
                  Nach einigen sportlichen Enttäuschungen haben die
                  Verantwortlichen beschlossen, einen Neuanfang zu versuchen.
                  Die alten Sponsoringverträge sind ausgelaufen, viele Spieler
                  haben den Verein verlassen. Diese Abgänge begreifen wir als
                  Chance. Die Zusammenstellung eines neuen Teams soll auf die
                  Zukunft ausgerichtet sein; langfristiges Ziel ist der Aufstieg
                  in die Swiss Futsal Premier League. In diesem Zusammenhang ist
                  es erfreulich, wie viele Menschen sich bereits zum Verein
                  bekannt haben und tatkräftig mithelfen, sei es in der
                  konkreten Vereinsarbeit oder als Passivmitglieder. Auf unserem
                  Weg können auch Sie uns begleiten. Ohne Ihre finanzielle
                  Unterstützung geht es nicht.
                </p>
                <p className="mt-8 text-sm md:text-xl leading-8 text-gray-500">
                  Der drängendste Kostenpunkt ist die Hallenmiete. Für den
                  sportlichen Erfolg ist es unabdingbar, zumindest in der
                  unmittelbaren Saisonvorbereitung und mindestens einmal
                  wöchentlich über eine Dreifachturnhalle verfügen zu können.
                  Nur so ist die Wettkampfsituation einzuüben. Weitere Kosten
                  fallen an für das Material (Trikots, Bälle, Medizinkoffer
                  etc.) oder die Teilnahme am Spielbetrieb (Organisation der
                  Heimrunde, Schiedsrichter etc.)
                </p>
              </div>
              <div className="mx-auto max-w-screen-md text-lg pt-16">
                <h1>
                  <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Frauen Futsal Team
                  </span>
                </h1>
                <p className="mt-8 text-sm md:text-xl leading-8 text-gray-500">
                  Neben der Weiterführung des Männerteams steht für Olympique
                  Basel ein weiteres Projekt im Fokus: der Aufbau eines
                  Futsalteams für Frauen. Das Interesse an Frauenfutsal steigt
                  stetig. Offiziell gibt es schweizweit zwar nur 7 Teams, die an
                  der «Futsal Masters Women’s League» gegeneinander antreten.
                  Die Liga begann 2016/17 mit 6 Teams als Projekt, wird 2017/18
                  offiziell weitergeführt mit 7 Teams.
                  <br /> Zudem gibt es seit 2012 das «Futsal Masters Women’s
                  Cup». Auch da ist das Niveau sehr hoch: Neben den Futsal-Teams
                  machen auch Fussballteams aus der Nationalliga B, der 1. und
                  der 2. Liga, U-Teams sowie Beachsoccerteams mit.
                </p>
                <p className="mt-8 text-sm md:text-xl leading-8 text-gray-500">
                  Futsal ist für Frauen eine attraktive Sportart. Der
                  Unterschied zwischen Frauen- und Männerfussball erscheint
                  enorm, während er im technisch und taktisch anspruchsvolleren,
                  aber weniger körperbetonten Futsal auf ein Minimum
                  zusammenschmilzt.
                </p>
                <p className="mt-8 text-sm md:text-xl leading-8 text-gray-500">
                  Auch das Frauenteam versteht sich als ein längerfristiges
                  Projekt und ist entsprechend auf finanzielle Unterstützung
                  angewiesen. Mit Ihrem Engagement haben Sie die Chance,
                  Entscheidendes zur Entwicklung von Frauenfutsal in Basel und
                  der Schweiz beizutragen.
                </p>
                <p className="mt-8 text-sm md:text-xl leading-8 text-gray-500">
                  Mit Ihrem Sponsoring unterstützen Sie einen Verein, der auf
                  eine zehnjährige Existenz zurückblicken kann. In der Schweizer
                  Futsalszene ist der Name Olympique Basel mittlerweile ein
                  fester Begriff. Mit der Lancierung eines Frauenteams wird sich
                  diese Popularität noch erhöhen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
