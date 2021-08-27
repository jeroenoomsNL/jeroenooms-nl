import Head from "next/head";
import { useState } from "react";
import { Hero } from "../components/Hero";

export default function Home() {
  const [gameActive, setGameStatus] = useState(false);

  return (
    <>
      <Head>
        <title>Jeroen Ooms / Dutch web dev</title>
        <meta
          name="description"
          content="Jeroen Ooms, Dutch web dev who likes code, tech, running and craf beers"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
