import React from "react";
//chakra components
import {
  Flex,
  Heading,
  Icon,
  Text,
  Avatar,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
//react icons
import {
  FiHome,
  FiDollarSign,
  FiPieChart,
  FiBox,
  FiMoon,
  FiSun,
} from "react-icons/fi";

const navItems = [
  { title: "Home", icon: FiHome },
  { title: "Credit", icon: FiPieChart },
  { title: "Wallet", icon: FiDollarSign },
  { title: "Services", icon: FiBox },
];

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      w={["100%", "100%", "10%", "15%", "15%"]}
      bg="#020202"
      color="#fff"
      alignItems="center"
      flexDir="column"
    >
      <Flex h={[null, null, "100vh"]} flexDir="column" justify="space-between">
        {/* nav */}
        <Flex as="nav" flexDir="column">
          {/* heading text */}
          <IconButton
            w="fit-content"
            borderRadius="50%"
            icon={colorMode === "light" ? <FiMoon color="black" /> : <FiSun />}
            onClick={toggleColorMode}
            position="absolute"
            bottom={5}
            right={5}
            shadow="xl"
          />

          <Heading
            mt={50}
            mb={[25, 50, 100]}
            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
            letterSpacing="tight"
            alignSelf="center"
          >
            Rise.
          </Heading>
          {/* nav list */}
          <Flex
            gap="1.7em"
            flexDir={["row", "row", "column", "column", "column"]}
            align={["center", "center", "center", "flex-start", "flex-start"]}
            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
            justify="center"
          >
            {/* nav items */}
            {navItems.map((item, index) => (
              <Flex
                color="gray"
                className="sidebar-item"
                key={index}
                align="center"
                justify="space-between"
              >
                <Icon
                  display={["none", "none", "flex", "flex", "flex"]}
                  as={item.icon}
                  fontSize="2xl"
                />
                <Text
                  display={["flex", "flex", "none", "flex", "flex"]}
                  fontSize="large"
                  ml="1em"
                >
                  {item.title}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
        {/* Avatar */}
        <Flex mt={5} mb={10} flexDir="column" align="center">
          <Avatar my={2} src="avatar-1.jpg" />
          <Text>Calvin West</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
