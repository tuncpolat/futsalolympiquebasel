import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import PassiveCTA from "@/components/PassiveCTA";
import SponsorenLogoCloud from "@/components/SponsorenLogoCloud";
import Games from "@/components/upcoming/Games";
import Head from "next/head";

export default function Home({
  dataHome,
  dataUpcomingMen,
  dataUpcomingWomen,
  dataBlog,
  dataSponsoren,
}) {
  return (
    <>
      <Head>
        <title>{dataHome.seo.metaTitle}</title>
        <meta
          property="og:title"
          content={dataHome.seo.metaTitle}
          key="title"
        />
        <meta name="description" content={dataHome.seo.metaDescription} />
        <meta
          property="og:image"
          content={dataHome.seo.shareImage.formats.thumbnail.url}
        />
      </Head>
      <Hero
        title={dataHome.hero.title}
        subtitle={dataHome.hero.content}
        bgImage={dataHome.hero.background}
      />
      <SponsorenLogoCloud data={dataSponsoren} backgroundColor="bg-gray-100" />
      <Games
        gamesMen={dataUpcomingMen.spiele}
        gamesWomen={dataUpcomingWomen.spiele}
      />

      <Blog news={dataBlog} />
      <PassiveCTA />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API: Home
  const resHome = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/homepage`
  );
  const dataHome = await resHome.json();

  // Fetch data from external API: Season Men
  const resUpcomingMen = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/saisons?_sort=saison:DESC&geschlecht_eq=Maenner&_start=0&_limit=1`
  );
  const dataUpcomingMen = await resUpcomingMen.json();

  // Fetch data from external API: Season Women
  const resUpcomingWomen = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/saisons?_sort=saison:DESC&geschlecht_eq=Frauen&_start=0&_limit=1`
  );
  const dataUpcomingWomen = await resUpcomingWomen.json();

  // Fetch data from external API: Blog
  const resBlog = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/foos?_sort=published_at:DESC&_start=0&_limit=3`
  );
  const dataBlog = await resBlog.json();

  // Fetch data from external API: Home
  const resSponsoren = await fetch(
    `https://futsal-ob-strapi.herokuapp.com/sponsorenpage`
  );
  const dataSponsoren = await resSponsoren.json();

  // Pass data to the page via props
  return {
    props: {
      dataHome,
      dataUpcomingMen: dataUpcomingMen[0],
      dataUpcomingWomen: dataUpcomingWomen[0],
      dataBlog,
      dataSponsoren: dataSponsoren.Sponsoren,
    },
  };
}
