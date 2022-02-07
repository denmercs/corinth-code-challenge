import Head from "next/head";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import DefaultLayout from "../layouts/Default";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starwars</title>
        <meta name="description" content="Your favorite starwars characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Jumbotron></Jumbotron>
      </DefaultLayout>
    </>
  );
}
