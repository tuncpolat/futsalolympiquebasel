import Blog from "@/components/Blog";
import Head from "next/head";

export default function News({ data }) {
  return (
    <>
      <Head>
        <title>News Futsal Olympique Basel</title>
        <meta
          property="og:title"
          content="News Futsal Olympique Basel"
          key="title"
        />
        <meta name="description" content="News Futsal Olympique Basel" />
      </Head>
      <Blog news={data} showAll={true} />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API: Blog
  const response = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/foos?_sort=published_at:DESC&_start=0&_limit=9`
  );
  const data = await response.json();

  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
}
