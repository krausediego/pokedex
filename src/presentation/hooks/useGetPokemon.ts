import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { IGetPokemon } from 'src/domain/useCases/home/get-pokemon';

export const useGetPokemonQuery = (
  getPokemonService: IGetPokemon,
  name: string,
): UseQueryResult<IGetPokemon.Result, unknown> => {
  return useQuery(
    ['pokemon', name],
    async () => {
      return getPokemonService.getPokemon();
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  );
};
