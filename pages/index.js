import React from "react";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { Sidebar, MainSection, FinanceSection } from "../components";

const dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Flex
        h={[null, null, "100vh"]}
        flexDir={["column", "column", "row"]}
        overflow="hidden"
        maxW="2000px"
      >
        <Sidebar />
        <MainSection />
        <FinanceSection />
      </Flex>
    </>
  );
};

export default dashboard;
