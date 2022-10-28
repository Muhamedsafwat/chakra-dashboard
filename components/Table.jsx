import React, { useEffect, useState } from "react";
//chakra components
import {
  Flex,
  Heading,
  Text,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Divider,
  Collapse,
} from "@chakra-ui/react";
//icons
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

//table data
const tableData = [
  {
    title: "Amazon",
    date: "Apr 24, 2021 at 1:40pm",
    img: "./amazon.jpeg",
    category: "Electronic Devices",
    cashback: "+$2",
    amount: "-$242 .00",
  },
  {
    title: "Starbucks",
    date: "Apr 22, 2021 at 2:43pm",
    img: "./starbucks.png",
    category: "Cafe and restaurant",
    cashback: "+$23",
    amount: "-$32 .00",
  },
  {
    title: "YouTube",
    date: "Apr 13, 2021 at 11:23am",
    img: "./youtube.png",
    category: "Social Media",
    cashback: "+$4",
    amount: "-$112 .00",
  },
  {
    title: "Amazon",
    date: "Apr 24, 2021 at 1:40pm",
    img: "./amazon.jpeg",
    category: "Electronic Devices",
    cashback: "+$2",
    amount: "-$242 .00",
  },
  {
    title: "Starbucks",
    date: "Apr 22, 2021 at 2:43pm",
    img: "./starbucks.png",
    category: "Cafe and restaurant",
    cashback: "+$23",
    amount: "-$32 .00",
  },
  {
    title: "YouTube",
    date: "Apr 13, 2021 at 11:23am",
    img: "./youtube.png",
    category: "Social Media",
    cashback: "+$4",
    amount: "-$112 .00",
  },
  {
    title: "Starbucks",
    date: "Apr 22, 2021 at 2:43pm",
    img: "./starbucks.png",
    category: "Cafe and restaurant",
    cashback: "+$23",
    amount: "-$32 .00",
  },
  {
    title: "YouTube",
    date: "Apr 13, 2021 at 11:23am",
    img: "./youtube.png",
    category: "Social Media",
    cashback: "+$4",
    amount: "-$112 .00",
  },
];

const MyTable = () => {
  //show more button
  const [isMore, setIsMore] = useState(true);
  const [slice, setSlice] = useState(3);

  const clickHandler = () => {
    if (tableData.length < slice + 3) {
      setSlice(tableData.length);
    } else {
      setSlice((slice) => slice + 3);
    }

    if (tableData.length == slice) {
      setSlice(3);
    }
  };

  useEffect(() => {
    if (tableData.length == slice) {
      setIsMore(false);
    } else {
      setIsMore(true);
    }
  }, [slice]);

  return (
    <Flex flexDir="column">
      <Flex overflow="auto" className="table-container">
        <Table variant="unstyled" mt={4}>
          <Thead>
            <Tr color="gray">
              <Th>Name of transaction</Th>
              <Th>Category</Th>
              <Th>Cashback</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.slice(0, slice).map((transaction, index) => (
              <Tr key={index}>
                <Td>
                  <Flex align="center">
                    <Avatar size="sm" mr={2} src={transaction.img} />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        {transaction.title}
                      </Heading>
                      <Text fontSize="sm" color="gray">
                        {transaction.date}
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>{transaction.category}</Td>
                <Td>{transaction.cashback}</Td>
                <Td>{transaction.amount}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Flex>
      <Flex align="center">
        <Divider />
        <IconButton
          onClick={clickHandler}
          icon={isMore ? <FiChevronDown /> : <FiChevronUp />}
        />
        <Divider />
      </Flex>
    </Flex>
  );
};

export default MyTable;
