import React, { ReactElement } from 'react';

import { GetPokemons } from 'src/data/useCases/home/get-pokemons';
import { AxiosRequest } from 'src/infra/request/axios-request';
import { useGetPokemonsQuery } from 'src/presentation/hooks/useGetPokemonsQuery';

import { Card } from './components/Card';
import { Container, ScrollView } from './styles';

export function HomeScreen(): ReactElement<any, any> {
  const baseUrl = process.env.BASE_URL;
  const httpRequest = new AxiosRequest();

  const getPokemons = new GetPokemons(
    httpRequest,
    `${baseUrl}/pokemon/?limit=1`,
  );

  const { data } = useGetPokemonsQuery(getPokemons);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data?.data?.results?.map(({ name, url }) => {
          return <Card key={name} name={name} url={url} />;
        })}
      </ScrollView>
    </Container>
  );
}
