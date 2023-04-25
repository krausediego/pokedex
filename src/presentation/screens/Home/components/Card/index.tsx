import React, { ReactElement } from 'react';
import { Text } from 'react-native';

import { GetPokemon } from 'src/data/useCases/home/get-pokemon';
import { AxiosRequest } from 'src/infra/request/axios-request';
import { TagType } from 'src/presentation/components/TagType';
import { useGetPokemonQuery } from 'src/presentation/hooks/useGetPokemon';
import { types } from 'src/presentation/utils/colorByType';

import { Container } from './styles';

interface CardProps {
  name: string;
  url: string;
}

export function Card({ name, url }: CardProps): ReactElement {
  const httpRequest = new AxiosRequest();

  const getPokemon = new GetPokemon(httpRequest, url);

  const { data } = useGetPokemonQuery(getPokemon, name);

  return (
    <Container>
      <Text>{name}</Text>
      {data?.data?.types?.map(({ type: { name: typeName } }) => {
        return <TagType key={typeName} icon={types[typeName].icon} />;
      })}
    </Container>
  );
}
