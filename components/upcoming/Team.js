import { useEffect, useState } from "react";

export default function Team({ id, opponentName = "", notOB = false }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (notOB) {
      async function fetchOpponent() {
        // Fetch data from external API: Blog
        const response = await fetch(
          `https://futsal-ob-strapi.herokuapp.com/gegners/${id}`
        );
        const data = await response.json();

        if (data.logo) {
          setImage(data.logo.url);
        }
      }

      fetchOpponent();
    }
  }, []);

  return (
    <>
      {notOB ? (
        <>
          <h4 className="text-center text-sm md:text-xl">{opponentName}</h4>
          {image && (
            <img src={image} alt="club name" className="w-full md:w-3/4" />
          )}
        </>
      ) : (
        <>
          <h4 className="text-center text-sm md:text-xl">
            Futsal Olympique Basel
          </h4>
          <img src="/logo_ob.png" alt="club name" className="w-full md:w-3/4" />
        </>
      )}
    </>
  );
}
