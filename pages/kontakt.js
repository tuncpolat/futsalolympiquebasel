import KontaktContent from "@/components/KontaktContent";
import Head from "next/head";

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <meta property="og:title" content="Sponsoren" key="title" />
        <meta name="description" content="Sponsoring Futsal Olympique Basel" />
      </Head>
      <KontaktContent />
    </>
  );
}
