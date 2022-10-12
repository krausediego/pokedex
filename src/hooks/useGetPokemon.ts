import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../services/getPokemon";

export const useGetPokemon = (url: string, name: string) =>
  useQuery([name], async () => await getPokemon(url));
