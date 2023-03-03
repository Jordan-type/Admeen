import type { NextPage } from "next";
import Head from "next/head";
import { UserView } from "../views";

const User: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Admeen</title>
        <meta name="description" content="Basic Functionality" />
      </Head>
      <UserView
        currentAge={35}
        retirementAge={65}
        currentSavings={250000}
        monthlyContribution={1500}
        estimatedAnnualReturn={0.07}
      />
    </div>
  );
};

export default User;
