import BlogContent from "@/components/BlogContent";
import Head from "next/head";

export default function NewsSingle({ data }) {
  return (
    <>
      <Head>
        <title>{data.title} | News</title>
        <meta name="description" content={data.subtitle} />
      </Head>
      <BlogContent data={data} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  // Fetch data from external API: Blog
  const response = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/foos/${id}`
  );
  const data = await response.json();

  // Pass data to the page via props
  return {
    props: {
      data,
    },
  };
}
