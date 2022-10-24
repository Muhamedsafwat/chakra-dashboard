import React from "react";
//chakra components
import { Flex, Heading, Text, IconButton } from "@chakra-ui/react";
//icons
import { FiCalendar } from "react-icons/fi";

import Chart from "./Chart";
import MyTable from "./Table";

const MainSection = () => {
  return (
    <Flex
      w={["100%", "100%", "60%", "55%"]}
      p="3%"
      minH="100vh"
      overflow="auto"
      flexDir="column"
    >
      <Heading fontWeight="normal" letterSpacing="tight" mb={4}>
        Welcome back,{" "}
        <Text display="inline" fontWeight="bold">
          Calvin
        </Text>
      </Heading>
      <Text color="gray" fontSize="sm">
        My Balance
      </Text>
      <Text fontSize="2xl" fontWeight="bold">
        $5,750.20
      </Text>
      <Chart />
      <Flex justify="space-between" mt={8}>
        <Flex align="flex-end">
          <Heading as="h2" size="lg" letterSpacing="tight">
            Transactions
          </Heading>
          <Text fontSize="sm" color="gray" ml={4}>
            October 2022
          </Text>
        </Flex>
        <IconButton shadow="md" icon={<FiCalendar />} />
      </Flex>
      <MyTable />
    </Flex>
  );
};

export default MainSection;
