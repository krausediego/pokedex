import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { IGetPokemons } from 'src/domain/useCases/home/get-pokemons';

export const useGetPokemonsQuery = (
  getPokemonsService: IGetPokemons,
): UseQueryResult<IGetPokemons.Result, unknown> => {
  return useQuery(
    ['pokemons[]'],
    async () => {
      return getPokemonsService.getPokemons();
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
