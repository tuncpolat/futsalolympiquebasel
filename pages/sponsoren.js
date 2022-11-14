import SponsorenContent from "@/components/SponsorenContent";
import Head from "next/head";

export default function Sponsoren({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Sponsoren</title>
        <meta property="og:title" content="Sponsoren" key="title" />
        <meta name="description" content="Sponsoring Futsal Olympique Basel" />
      </Head>
      <SponsorenContent data={data} />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API: Home
  const response = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/sponsorenpage`
  );
  const data = await response.json();

  // Pass data to the page via props
  return {
    props: {
      data: data.Sponsoren,
    },
  };
}
