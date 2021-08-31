import Head from "next/head";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { TechStack } from "../components/TechStack/TechStack";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeroen Ooms / Dutch web dev</title>
        <meta
          name="description"
          content="Jeroen Ooms, Dutch web dev who likes code, tech, running and craft beers"
        />
        <link rel="canonical" href="https://www.jeroenooms.nl" />
        <meta property="og:locale" content="en_NL" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jeroen Ooms / Dutch web dev" />
        <meta
          property="og:image"
          content="https://www.jeroenooms.nl/images/avatar.jpg"
        />
        <meta
          property="og:description"
          content="Jeroen Ooms, Dutch web dev who likes code, tech, running and craft beers"
        />
        <meta property="og:url" content="https://www.jeroenooms.nl/" />
        <meta name="twitter:site" content="@jeroenooms" />
      </Head>
      <main>
        <Hero />
        <TechStack />
        <Footer />
      </main>
    </>
  );
}
