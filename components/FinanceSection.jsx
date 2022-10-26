import React from "react";
//chakra components
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  Heading,
  Avatar,
  AvatarGroup,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Icon,
  Text,
  Button,
} from "@chakra-ui/react";
//icons
import {
  FiSearch,
  FiBell,
  FiCreditCard,
  FiPlus,
  FiDollarSign,
} from "react-icons/fi";

const avatars = [
  "./avatar-2.jpg",
  "./avatar-3.jpg",
  "./avatar-4.jpg",
  "./avatar-1.jpg",
];

const cards = [
  {
    balance: "$2,150.72",
    num: "8353",
    valid: "11/22",
    bg: "linear(to-t, #B57295, #29259A)",
    tabColor: "#29259a",
  },
  {
    balance: "$5,750.20",
    num: "1289",
    valid: "12/23",
    bg: "linear(to-t, yellow.300, blue.500)",
    tabColor: "blue.500",
  },
  {
    balance: "$350.00",
    num: "8956",
    valid: "9/24",
    bg: "linear(to-t, orange.300, pink.600)",
    tabColor: "pink.600",
  },
];

const FinanceSection = () => {
  return (
    <Flex
      w={["100%", "100%", "35%"]}
      p="3%"
      bg="rgba(120,120,120, 0.1)"
      flexDir="column"
      overflow="auto"
    >
      <Flex>
        <InputGroup shadow="md" mb={4} borderRadius="10px">
          <InputLeftElement>
            <FiSearch />
          </InputLeftElement>
          <Input borderRadius="10px" type="text" placeholder="Search" />
        </InputGroup>
        <IconButton
          shadow="md"
          p="10px"
          ml={2}
          borderRadius="50%"
          icon={<FiBell />}
        />
        <Flex
          align="center"
          justify="center"
          color="#fff"
          fontSize="xs"
          w={30}
          h={25}
          borderRadius="50%"
          bg="#b57295"
          ml="-3"
          mt="-2"
          zIndex={3}
        >
          2
        </Flex>
      </Flex>
      <Heading letterSpacing="tight">My Cards</Heading>
      <Tabs align="center" variant="soft-rounded">
        <TabPanels>
          {cards.map((card, index) => (
            <TabPanel p={0} py={4} key={index}>
              <Box
                textAlign="start"
                borderRadius="25px"
                w="100%"
                h="180px"
                bgGradient={card.bg}
              >
                <Flex
                  p="1em"
                  color="#fff"
                  flexDir="column"
                  h="100%"
                  justify="space-between"
                >
                  <Flex justify="space-between" w="100%" align="flex-start">
                    <Flex flexDir="column">
                      <Text color="gray.400">Current Balance</Text>
                      <Text fontWeight="bold" fontSize="xl">
                        {card.balance}
                      </Text>
                    </Flex>
                    <Flex align="center">
                      <Icon mr={2} as={FiCreditCard} />
                      <Text>Rise.</Text>
                    </Flex>
                  </Flex>
                  <Text mb={4}>**** **** **** {card.num}</Text>
                  <Flex align="flex-end" justify="space-between">
                    <Flex>
                      <Flex flexDir="column" mr={4}>
                        <Text textTransform="uppercase" fontSize="xs">
                          Valid Thru
                        </Text>
                        <Text fontSize="lg">{card.valid}</Text>
                      </Flex>
                      <Flex flexDir="column">
                        <Text textTransform="uppercase" fontSize="xs">
                          CVV
                        </Text>
                        <Text fontSize="lg">***</Text>
                      </Flex>
                    </Flex>
                    <Icon as={FiCreditCard} />
                  </Flex>
                </Flex>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
        <TabList>
          {cards.map((card, index) => (
            <Tab fontSize="xs" bg="#fff" mx={1} key={index}>
              {index + 1}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Flex my={2} justify="space-between">
        <Text>Balance</Text>
        <Text fontWeight="bold">$140.42</Text>
      </Flex>
      <Flex justify="space-between">
        <Text>Credit Limit</Text>
        <Text fontWeight="bold">$150.00</Text>
      </Flex>
      <Heading my={5} letterSpacing="tight" fontSize="xl">
        Send money to
      </Heading>
      <Flex>
        <AvatarGroup max={3}>
          {avatars.map((avatar, index) => (
            <Avatar key={index} name={avatar} src={avatar} />
          ))}
        </AvatarGroup>
        <Avatar icon={<FiPlus />} ml={2} color="#fff" bgColor="gray.300" />
      </Flex>
      <Text color="gray" mt={10} mb={2}>
        Card number
      </Text>
      <InputGroup shadow="md" borderRadius="10px">
        <InputLeftElement pointerEvents="none">
          <FiCreditCard color="gray.700" />
        </InputLeftElement>
        <Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
      </InputGroup>
      <Text color="gray" mt={4} mb={2}>
        Sum
      </Text>
      <InputGroup borderRadius="10px" shadow="md">
        <InputLeftElement pointerEvents="none">
          <FiDollarSign color="gray.700" />
        </InputLeftElement>
        <Input type="number" placeholder="130.00" />
      </InputGroup>
      <Button
        mt={4}
        bgColor="blackAlpha.900"
        color="#fff"
        p={7}
        borderRadius={15}
      >
        Send money
      </Button>
    </Flex>
  );
};

export default FinanceSection;
