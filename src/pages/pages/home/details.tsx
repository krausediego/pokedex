import { cn } from "@/lib/utils";
import { GetPokemonResponse } from "@/services/get-pokemon";
import { types } from "@/utils/types-colors";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Types } from "./types";
import { getSpecie } from "@/services/get-specie";
import { Separator } from "@/components/ui/separator";
import { capitalize } from "@/utils/capitalize";

interface DetailsProps {
  name: string;
}

export const stats = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SpA",
  "special-defense": "SpD",
  speed: "SPD",
};

const statsColors = {
  hp: "bg-[#DF2140]",
  attack: "bg-[#FF994D]",
  defense: "bg-[#EECD3D]",
  "special-attack": "bg-[#85DDFF]",
  "special-defense": "bg-[#96DA83]",
  speed: "bg-[#FB94A8]",
};

export function Details({ name }: DetailsProps) {
  const queryClient = useQueryClient();

  const pokemon = queryClient.getQueryData<GetPokemonResponse>([
    name,
  ]) as GetPokemonResponse;

  const { data } = useQuery({
    queryFn: () => getSpecie({ id: pokemon.id }),
    queryKey: ["specie", name],
  });

  const description = data?.flavor_text_entries.find(
    ({ language, version }) => language.name === "en" && version.name === "x",
  );

  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-3 px-6">
      <div
        className={cn(
          "absolute -top-96 -z-50 aspect-square w-[150%] rounded-full",
          types[pokemon.types[0].type.name],
        )}
      />
      <img
        style={{
          height: `${pokemon.height <= 5 ? pokemon.height * 30 : pokemon.height * 12}px`,
        }}
        className="max-h-[22vh] rendering-pixelated"
        src={
          pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default ??
          pokemon.sprites.versions["generation-v"]["black-white"].front_default
        }
      />

      <p className="text-xs font-bold text-muted-foreground">N° {pokemon.id}</p>

      <h1 className="text-2xl font-bold">{capitalize(pokemon.name)}</h1>

      <div className="flex gap-2">
        {pokemon.types?.map(({ type }, index) => (
          <Types key={index} {...type} />
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="text-center text-lg font-bold">Description</h3>
        <p className="text-center text-sm font-medium text-muted-foreground">
          {description?.flavor_text}
        </p>
      </div>

      <Separator />

      <div className="grid w-full grid-cols-2 gap-2 px-4">
        <div className="flex flex-col gap-1">
          <span className="text-center font-bold">Height</span>
          <span className="rounded-full bg-border p-1 text-center font-medium">
            {pokemon.height / 10}m
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-center font-bold">Weight</span>
          <span className="rounded-full bg-border p-1 text-center font-medium">
            {pokemon.weight / 10}kg
          </span>
        </div>
        <div className="col-span-2 flex flex-col gap-1">
          <span className="text-center font-bold">Abilities</span>
          <div className="grid grid-cols-2 gap-2">
            {pokemon.abilities.map(({ ability }) => (
              <span className="rounded-full bg-border p-1 text-center font-medium">
                {capitalize(ability.name)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3">
        <span className="col-span-6 text-center font-bold">Stats</span>
        {pokemon.stats.map((stat) => (
          <div className="flex flex-col items-center justify-center gap-2 rounded-full bg-border px-1.5 py-2">
            <div
              className={cn(
                "flex aspect-square w-full items-center justify-center rounded-full p-1.5",
                statsColors[stat.stat.name],
              )}
            >
              <span className="text-xs font-bold text-muted">
                {stats[stat.stat.name]}
              </span>
            </div>
            <span className="font-bold">{stat.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
