import Head from "next/head";
import SimpleHeader from "@/components/SimpleHeader";
import Squad from "@/components/Squad";

export default function Team({ data }) {
  return (
    <>
      <Head>
        <title>Team Futsal Olympique Basel</title>
        <meta
          property="og:title"
          content="Team Futsal Olympique Basel"
          key="title"
        />
        <meta name="description" content="Team Futsal Olympique Basel" />
      </Head>
      <SimpleHeader title={"Team Frauen"} />
      <Squad data={data.women} />
      <SimpleHeader title={"Team Männer"} />
      <Squad data={data.men} />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API: Home
  const responseM = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/teams?geschlecht_eq=Mann`
  );
  const men = await responseM.json();

  const responseW = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/teams?geschlecht_eq=Frau`
  );

  const women = await responseW.json();

  // Pass data to the page via props
  return {
    props: {
      data: {
        men,
        women,
      },
    },
  };
}
