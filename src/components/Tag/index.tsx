import { Flex, Text } from "@chakra-ui/react";

interface TagProps {
  color: string;
  name: string;
}

export const Tag = ({ color, name }: TagProps) => {
  return (
    <Flex bg={`${color}26`} w="auto" px=".75rem" py=".1rem" m="0">
      <Text fontWeight="bold" fontSize=".80rem" color={color}>
        {name}
      </Text>
    </Flex>
  );
};
