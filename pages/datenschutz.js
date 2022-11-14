import DatenschutzContent from "@/components/DatenschutzContent";
import Head from "next/head";

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Datenschutz</title>
        <meta property="og:title" content="Sponsoren" key="title" />
        <meta name="description" content="Sponsoring Futsal Olympique Basel" />
      </Head>
      <DatenschutzContent />
    </>
  );
}
