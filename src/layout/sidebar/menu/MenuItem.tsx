import { Flex, Icon, Text } from "@chakra-ui/react";
import { IconAndColorTypes, Name } from "../../../utils/types";

interface MenuItemProps {
  name: Name;
}

export const MenuItem = ({ name }: MenuItemProps) => {
  return (
    <Flex
      as="button"
      w="2rem"
      alignItems="center"
      gap=".75rem"
      _hover={{ color: IconAndColorTypes(name).color }}
      transition="all"
      transitionDuration=".3s"
    >
      <Icon as={IconAndColorTypes(name).icon} />
      <Text fontWeight="bold">{name}</Text>
    </Flex>
  );
};
