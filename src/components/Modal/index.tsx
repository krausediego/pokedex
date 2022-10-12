import {
  Container,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Progress,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { PokemonProps } from "../../services/getPokemon";
import { convertToShortName } from "../../utils/convertToShortName";
import { IconAndColorTypes } from "../../utils/types";
import { UppercaseFirstLetter } from "../../utils/uppercaseFirstLetter";
import { Tag } from "../Tag";

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  pokemon: PokemonProps;
}

export const ModalComponent = ({
  isOpen,
  onClose,
  pokemon,
}: ModalComponentProps) => {
  return (
    <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="50%">
        <ModalCloseButton />
        <ModalBody w="full" h="full" display="flex" p="0">
          <Flex
            w="30%"
            h="full"
            bg={`linear-gradient(to bottom right, ${
              IconAndColorTypes(pokemon.types[0].type.name).color
            }26, ${IconAndColorTypes(pokemon.types[0].type.name).color}66)`}
            position="relative"
          >
            <Flex position="absolute" right="-1.5rem" top="25%">
              <Image
                width="200%"
                height="200%"
                src={pokemon.sprites.other.dream_world.front_default}
                alt="svg"
              />
            </Flex>
          </Flex>
          <Container
            w="70%"
            flexDir="column"
            pl="5rem"
            px="3rem"
            py="1rem"
            color="gray.600"
            h="full"
          >
            <Flex alignItems="center" gap="1rem">
              <Heading fontSize="1.5rem" color="black" fontWeight="600">
                {UppercaseFirstLetter(pokemon.name)}
              </Heading>
              <Text>#{pokemon.id}</Text>
            </Flex>
            <Flex w="full" gap=".5rem" mt=".5rem">
              {pokemon.types.map(({ type: { name } }) => {
                return (
                  <Tag
                    key={name}
                    name={name}
                    color={IconAndColorTypes(name).color}
                  />
                );
              })}
            </Flex>
            <Flex justifyContent="space-between" m="0" mt="3rem">
              <Flex flexDir="column" m="0">
                <Heading fontSize=".75rem" color="gray.500">
                  Height
                </Heading>
                <Text fontSize=".75rem" color="gray.800" fontWeight="bold">
                  {pokemon.height}m
                </Text>
              </Flex>
              <Flex flexDir="column" m="0">
                <Heading fontSize=".75rem" color="gray.500">
                  Weight
                </Heading>
                <Text fontSize=".75rem" color="gray.800" fontWeight="bold">
                  {pokemon.weight}kg
                </Text>
              </Flex>
              <Flex flexDir="column" m="0">
                <Heading fontSize=".75rem" color="gray.500">
                  Abilities
                </Heading>
                <Text fontSize=".75rem" color="gray.800" fontWeight="bold">
                  {UppercaseFirstLetter(pokemon.abilities[0].ability.name)}
                </Text>
              </Flex>
            </Flex>
            <Heading fontSize=".75rem" color="gray.800" mt="3rem">
              Stats
            </Heading>
            {pokemon.stats.map(({ base_stat, stat: { name } }) => {
              return (
                <Flex key={name} mt=".75rem">
                  <Heading w="30%" fontSize=".75rem" color="gray.500">
                    {name.charAt(7) === "-"
                      ? convertToShortName(name)
                      : UppercaseFirstLetter(name)}
                  </Heading>
                  <Progress
                    w="70%"
                    borderRadius="full"
                    size="xs"
                    value={base_stat}
                    colorScheme="orange"
                  />
                </Flex>
              );
            })}
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
