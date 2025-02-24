import { api } from "@/lib/axios";

interface GetAllPokemonsRequest {
  offset: number;
}

export interface GetAllPokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

export async function getAllPokemons({ offset }: GetAllPokemonsRequest) {
  const response = await api.get<GetAllPokemonsResponse>(
    `/pokemon/?offset=${offset}&limit=24`,
  );

  return response.data.results;
}
