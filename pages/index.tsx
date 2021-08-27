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
          content="Jeroen Ooms, Dutch web dev who likes code, tech, running and craf beers"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.jeroenooms.nl" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
      </Head>
      <main>
        <Hero />
        <TechStack />
        <Footer />
      </main>
    </>
  );
}
