import ClubContent from "@/components/ClubContent";
import Head from "next/head";

export default function Club() {
  return (
    <>
      <Head>
        <title>Club</title>
        <meta property="og:title" content="Club" key="title" />
        <meta
          name="description"
          content="Futsal Olympique Basel wurde im Jahr 2007 von befreundeten Gymnasiasten gegründet"
        />
      </Head>
      <ClubContent />
    </>
  );
}
