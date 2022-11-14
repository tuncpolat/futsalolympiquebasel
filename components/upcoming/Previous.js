import {
  MapPinIcon,
  ClockIcon,
  ChartBarSquareIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import Team from "./Team";

export default function Previous({ data }) {
  const date = new Date(data.datum);
  return (
    <div className="basis-full md:basis-1/2 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6 text-center ">
        <h3 className="text-xl md:text-3xl font-title">Letztes Spiel</h3>
      </div>
      <div className="px-4 py-5 sm:p-6 flex flex-row">
        <div className="flex flex-col justify-center items-center basis-1/2">
          {data.heim === true ? (
            <Team />
          ) : (
            <Team
              id={data.opponent.id}
              opponentName={data.opponent.name}
              notOB={true}
            />
          )}
        </div>
        <div className="flex items-center text-sm md:text-xl">
          <p>vs.</p>
        </div>
        <div className="flex flex-col justify-center items-center basis-1/2">
          {data.heim === true ? (
            <Team
              id={data.opponent.id}
              opponentName={data.opponent.name}
              notOB={true}
            />
          ) : (
            <Team />
          )}
        </div>
      </div>
      <div className="px-4 py-4 sm:px-6 flex flex-row justify-around">
        <p className="text-xl md:text-3xl font-title">
          {data.toreHeimmannschaft} - {data.toreAuswaertsmannschaft}
        </p>
        {data.spielbericht ? (
          <div className="flex items-center gap-2">
            <ChartBarSquareIcon width={25} color="#0075bf" />
            <Link href={`news/${data.spielbericht.id}`} legacyBehavior>
              <a className="md:text-xl">Zum Spielbericht</a>
            </Link>
            <ArrowRightIcon width={15} />
          </div>
        ) : null}
      </div>
      <div className="px-4 py-4 sm:px-6 flex flex-col md:justify-around gap-2">
        <div className="flex items-center gap-2">
          <CalendarDaysIcon width={25} color="#0075bf" />
          <h4 className="md:text-xl">
            {date.toLocaleDateString("de-CH", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon width={25} color="#0075bf" />
          <h4 className="md:text-xl">
            {date.toLocaleTimeString("de", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <MapPinIcon width={25} color="#0075bf" />
          <h4 className="md:text-xl">{data.ort}</h4>
        </div>
      </div>
    </div>
  );
}
