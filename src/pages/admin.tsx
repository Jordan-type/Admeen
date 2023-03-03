import type { NextPage } from "next";
import Head from "next/head";
import { AdminView }  from "../views";

const Admin: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Admeen</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <AdminView />

    </div>
  );
};

export default Admin;
