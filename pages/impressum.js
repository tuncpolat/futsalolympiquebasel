import ImpressumContent from "@/components/ImpressumContent";
import Head from "next/head";

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Impressum</title>
        <meta property="og:title" content="Sponsoren" key="title" />
        <meta name="description" content="Sponsoring Futsal Olympique Basel" />
      </Head>
      <ImpressumContent />
    </>
  );
}
