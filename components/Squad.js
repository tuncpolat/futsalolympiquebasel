export default function Squad({ data }) {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto container">
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {data.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-4 aspect-h-5">
                    <img
                      className="rounded-lg object-cover shadow-lg"
                      src={
                        person.foto
                          ? person.foto.url
                          : "https://via.placeholder.com/350x150"
                      }
                      alt={person.name}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.position}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
