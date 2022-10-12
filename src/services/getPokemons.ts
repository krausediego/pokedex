import { api } from "./api";

interface PokemonsProps {
  count: number;
  next?: string;
  previous?: string;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export const getPokemons = async (offset: number) => {
  const { data } = await api.get<PokemonsProps>(
    `/pokemon/?offset=${offset}&limit=9`
  );
  return data;
};
