import { api } from "@/lib/axios";

interface GetAllPokemonsRequest {
  offset: number;
  limit?: number;
}

interface GerAllPokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

export async function getAllPokemons({
  offset,
  limit = 21,
}: GetAllPokemonsRequest) {
  const response = await api.get<GerAllPokemonsResponse>(
    `/pokemon/?offset=${offset}&limit=${limit}`
  );

  return response.data;
}
