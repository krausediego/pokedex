import React, { ReactElement } from 'react';

import { GetPokemons } from 'src/data/useCases/home/get-pokemons';
import { AxiosRequest } from 'src/infra/request/axios-request';
import { HomeScreen } from 'src/presentation/screens/Home';

export function HomeScreenFactory(): ReactElement<any, any> {
  const baseUrl = process.env.BASE_URL;
  const httpRequest = new AxiosRequest();

  const getPokemons = new GetPokemons(httpRequest, `${baseUrl}/pokemon`);

  return <HomeScreen service={getPokemons} />;
}
