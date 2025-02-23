import { getAllPokemons } from "@/services/get-all-pokemons";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Pokemon } from "./pokemon";

export function HomePage() {
  const [offset, setOffset] = useState(0);

  const { data } = useQuery({
    queryFn: () => getAllPokemons({ offset }),
    queryKey: ["pokemons", offset],
  });

  return (
    <>
      <Helmet title="Home" />

      <div className="flex h-full w-full flex-col items-center justify-center gap-16 bg-background">
        <div className="h-16 w-[90%] rounded-3xl bg-white shadow-poke"></div>

        <div className="grid w-[90%] grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3">
          {data?.results?.map((pokemon) => {
            return <Pokemon name={pokemon.name} />;
          })}
        </div>
      </div>
    </>
  );
}
