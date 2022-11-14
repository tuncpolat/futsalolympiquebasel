import Previous from "@/components/upcoming/Previous";
import Next from "./Next";
import { useState } from "react";

const tabs = [
  { name: "Männer", href: "#", current: true },
  { name: "Frauen", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Games({ gamesMen, gamesWomen }) {
  const [selected, setSelected] = useState(tabs[0]);

  const preMen = gamesMen.filter((game) => new Date() > new Date(game.datum));
  const postMen = gamesMen.filter((game) => new Date() < new Date(game.datum));
  const sortedPreMen = preMen.sort((a, b) => {
    return new Date(b.datum) - new Date(a.datum);
  });
  const sortedPostMen = postMen.sort((a, b) => {
    return new Date(a.datum) - new Date(b.datum);
  });
  const preWomen = gamesWomen.filter(
    (game) => new Date() > new Date(game.datum)
  );
  const postWomen = gamesWomen.filter(
    (game) => new Date() < new Date(game.datum)
  );
  const sortedPreWomen = preWomen.sort((a, b) => {
    return new Date(b.datum) - new Date(a.datum);
  });
  const sortedPostWomen = postWomen.sort((a, b) => {
    return new Date(a.datum) - new Date(b.datum);
  });

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-title tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-10">
            Aktuelle Spiele
          </p>
        </div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-brand-blue focus:ring-brand-orange"
            onChange={(e) =>
              setSelected(tabs.find((tab) => tab.name === e.target.value))
            }
            defaultValue={selected.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav
            className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
            aria-label="Tabs"
          >
            {tabs.map((tab, tabIdx) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm md:text-lg font-medium text-center hover:bg-gray-50 focus:z-10"
                )}
                aria-current={tab.current ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  if (tabIdx === 0) {
                    tabs[tabIdx].current = true;
                    tabs[tabIdx + 1].current = false;
                    setSelected(tabs[0]);
                  } else {
                    tabs[tabIdx].current = true;
                    tabs[tabIdx - 1].current = false;
                    setSelected(tabs[1]);
                  }
                }}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? "bg-brand-blue" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row w-full mt-4 gap-4">
          {selected.name === "Männer" ? (
            <>
              {sortedPreMen.length > 0 ? (
                <Previous data={sortedPreMen[0]} />
              ) : null}
              {sortedPostMen.length > 0 ? (
                <Next data={sortedPostMen[0]} />
              ) : null}
            </>
          ) : selected.name === "Frauen" ? (
            <>
              {sortedPreWomen.length > 0 ? (
                <Previous data={sortedPreWomen[0]} />
              ) : null}
              {sortedPostWomen.length > 0 ? (
                <Next data={sortedPostWomen[0]} />
              ) : null}
            </>
          ) : (
            "Kein Spiel gefunden"
          )}
        </div>
      </div>
    </div>
  );
}
