export default function SponsorenLogoCloud({ data }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {data.map((sponsor) => {
            return (
              <div
                className="col-span-1 flex flex-col text-center justify-center md:col-span-2 lg:col-span-1"
                key={sponsor.id}
              >
                <img className="h-12" src={sponsor.logo.url} alt="Tuple" />
                <a href={sponsor.url} target="_blank">
                  {sponsor.firma}
                </a>
                <p className="text-gray-600">{sponsor.paket}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
