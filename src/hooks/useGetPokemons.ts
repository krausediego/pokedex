import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../services/getPokemons";

export const useGetPokemons = () =>
  useQuery(["pokemon[]"], async () => await getPokemons(0));
