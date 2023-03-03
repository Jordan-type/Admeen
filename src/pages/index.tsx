import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Admeen</title>
        <meta
          name="description"
          content="REVOLUTIONIZING PENSION ADMINISTRATION WITH DECENTRALIZED IDENTIFIERS.(DID)"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
