import SimpleHeader from "@/components/SimpleHeader";
import Season from "@/components/Season";
import Head from "next/head";

export default function Frauen({ data }) {
  return (
    <>
      <Head>
        <title>Spielplan Futsal Olympique Basel Frauen</title>
        <meta property="og:title" content="Spielpan Männer" key="title" />
        <meta
          name="description"
          content="Spielpan Frauen | Swiss Futsal Women's League"
        />
      </Head>
      <SimpleHeader title={"Spielplan Frauen"} />
      {data.map((season) => (
        <Season key={season.id} games={season.spiele} season={season.saison} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API: Home
  const response = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/saisons?_sort=saison:DESC&geschlecht_eq=Frauen`
  );
  const data = await response.json();

  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
}
