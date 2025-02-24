import { api } from "@/lib/axios";
import { types } from "@/utils/types-colors";
import { stats } from "@/pages/pages/home/details";

interface GetPokemonRequest {
  name: string;
}

export interface StatTypes {
  hp: string;
  attack: string;
  defense: string;
  "special-attack": string;
  "special-defense": string;
  speed: string;
}

export interface GetPokemonResponse {
  name: string;
  height: number;
  weight: number;
  id: number;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
          front_default: string;
        };
      };
    };
  };
  types: [
    {
      type: {
        name: keyof typeof types;
      };
    },
  ];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: keyof typeof stats;
    };
  }[];
}

export async function getPokemon({ name }: GetPokemonRequest) {
  const response = await api.get<GetPokemonResponse>(`/pokemon/${name}`);

  return response.data;
}
