import { Flex } from "@chakra-ui/react";
import { Menu } from "./menu";

export const Sidebar = () => {
  return (
    <Flex
      w="25%"
      h="full"
      justifyContent="center"
      borderRight="1px"
      borderColor="gray.100"
    >
      <Menu />
    </Flex>
  );
};
