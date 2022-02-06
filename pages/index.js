import Head from "next/head";
import Footer from "../components/Footer/Footer";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { Search } from "../components/Search/Search";
import DefaultLayout from "../layouts/Default";
import styles from "../styles/Home.module.scss";

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
        <Footer></Footer>
      </DefaultLayout>
    </>
  );
}
