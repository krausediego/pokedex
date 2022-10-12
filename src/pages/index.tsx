import { Button, Flex, Spinner } from "@chakra-ui/react";
// import { useState } from "react";
import { Card } from "../components/Card";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { Layout } from "../layout";

const Home = () => {
  const { data, isLoading, isError } = useGetPokemons();

  if (isLoading) {
    <Spinner />;
  }

  if (isError) {
    <Flex>Error</Flex>;
  }

  return (
    <Layout>
      <Flex w="90%" justifyContent="center" flexWrap="wrap" gap="2rem">
        {data?.results.map(({ name, url }) => {
          console.log(name, url);
          return <Card key={url} name={name} url={url} />;
        })}
        <Button>Carregar mais</Button>
      </Flex>
    </Layout>
  );
};

export default Home;
