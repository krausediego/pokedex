import { getAllPokemons } from "@/services/get-all-pokemons";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Pokemon } from "./pokemon";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";

const usePokemonsQuery = () => {
  return useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam = 0 }) => getAllPokemons({ offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length * 24 : undefined,
  });
};

export function HomePage() {
  const { data, fetchNextPage } = usePokemonsQuery();
  const pokemons = data?.pages.flatMap((page) => page) ?? [];

  return (
    <>
      <Helmet title="Home" />

      <div className="flex h-full w-full flex-col items-center justify-center gap-16 bg-background">
        <div className="h-16 w-[90%] rounded-3xl bg-white shadow-poke"></div>

        <div className="grid w-[90%] grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-3">
          {pokemons.map(({ name }) => (
            <Pokemon key={name} name={name} />
          ))}
        </div>

        <Button onClick={() => fetchNextPage()} size="lg" variant="outline">
          <ChevronsDown />
          Load more
        </Button>
      </div>
    </>
  );
}
