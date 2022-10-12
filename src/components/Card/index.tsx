import {
  Flex,
  Heading,
  Icon,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { IconAndColorTypes } from "../../utils/types";
import { UppercaseFirstLetter } from "../../utils/uppercaseFirstLetter";
import { ModalComponent } from "../Modal";
import { Progress } from "@chakra-ui/progress";

interface CardProps {
  name: string;
  url: string;
}

export const Card = ({ name, url }: CardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading, isError, isSuccess } = useGetPokemon(url, name);

  if (isLoading) {
    <Spinner />;
  }

  if (isError) {
    <Flex>Error</Flex>;
  }

  return (
    <Flex
      as="button"
      onClick={onOpen}
      w="30%"
      h="40%"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      p="1rem"
      borderRadius=".5rem"
      boxShadow="0px 10px 51px -5px rgb(183 189 193 / 30%)"
      _hover={{
        boxShadow: "0px 10px 51px -5px rgb(183 189 193 / 70%)",
      }}
      transition="all"
      transitionDuration=".3s"
    >
      {isSuccess && (
        <>
          <Flex
            w="80%"
            h="70%"
            justifyContent="center"
            alignItems="center"
            bg={`${IconAndColorTypes(data?.types[0].type.name).color}26`}
            borderRadius="full"
          >
            <Image
              width="150%"
              height="150%"
              src={data?.sprites.other.dream_world.front_default}
              alt="svg"
            />
          </Flex>
          <Flex w="full" p="1rem">
            <Flex w="full" flexDir="column">
              <Text>#{data?.id}</Text>
              <Flex w="full" justifyContent="space-between" alignItems="center">
                <Heading fontSize="xl" color="gray.600">
                  {UppercaseFirstLetter(data?.name)}
                </Heading>
                <Icon
                  margin="0"
                  color={IconAndColorTypes(data?.types[0].type.name).color}
                  as={IconAndColorTypes(data?.types[0].type.name).icon}
                />
              </Flex>
            </Flex>
          </Flex>
          <ModalComponent isOpen={isOpen} onClose={onClose} pokemon={data} />
        </>
      )}
    </Flex>
  );
};
