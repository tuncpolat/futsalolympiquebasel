import SponsorenLogoCloud from "./SponsorenLogoCloud";

export default function BlogContent({ data }) {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto container">
          <div className="relative overflow-hidden bg-white">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-screen-md text-lg mb-8">
                <h1>
                  <span className="block text-center text-lg font-semibold text-brand-orange">
                    {new Date(data.published_at).toLocaleDateString("de-CH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>

                  <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    {data.title}
                  </span>
                </h1>
                {data.bild && (
                  <figure>
                    <img
                      className="w-full rounded-lg mt-8"
                      src={data.bild.url}
                      alt=""
                      height={500}
                    />
                  </figure>
                )}
                <p className="mt-8 text-sm md:text-xl leading-8 text-gray-500">
                  {data.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
