import SimpleHeader from "@/components/SimpleHeader";
import Season from "@/components/Season";
import Head from "next/head";

export default function Maenner({ data }) {
  return (
    <>
      <Head>
        <title>Spielplan Futsal Olympique Basel Männer</title>
        <meta property="og:title" content="Spielpan Männer" key="title" />
        <meta
          name="description"
          content="Spielpan Männer | Swiss Futsal Second League"
        />
      </Head>
      <SimpleHeader title={"Spielplan Männer"} />
      {data.filter((season) => season.spiele.length > 0).map(({id, spiele, saison}) => (
        <Season key={id} games={spiele} season={saison} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API: Home
  const response = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/saisons?_sort=saison:DESC&geschlecht_eq=Maenner`
  );
  const data = await response.json();

  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
}
