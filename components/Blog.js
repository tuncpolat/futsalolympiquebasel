import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Blog({ news, showAll = false }) {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-title tracking-tight text-gray-900 sm:text-4xl lg:text-6xl">
            News
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {news.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              {post.bild && (
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.bild.url}
                    alt=""
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-brand-blue">
                    <Link href={`news/${post.id}`} legacyBehavior>
                      <a className="hover:underline">
                        {post.kategorie === "Maenner"
                          ? "Männer"
                          : post.kategorie === "Frauen"
                          ? "Frauen"
                          : "Futsal Olympique Basel"}
                      </a>
                    </Link>
                  </p>
                  <Link href={`news/${post.id}`} legacyBehavior>
                    <a className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.subtitle.length > 200
                          ? post.subtitle.substr(0, 200) + "..."
                          : post.subtitle.substr(0, 200)}
                      </p>
                    </a>
                  </Link>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                  <time dateTime={post.datum}>
                    {new Date(post.datum).toLocaleDateString("de-CH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <Link href={`news/${post.id}`} legacyBehavior>
                    <a className="flex items-center gap-2">
                      <p>Mehr lesen</p>
                      <ArrowRightIcon width={15} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="mx-auto mt-12 flex justify-center">
            <Link href="/news" legacyBehavior>
              <a className="rounded-md border border-transparent bg-transparent px-4 py-3 text-base font-bold text-black border-black shadow-sm hover:bg-brand-blue hover:text-white hover:border-brand-blue sm:px-8">
                Alle News anzeigen
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
