import { api } from "@/lib/axios";
import { types } from "@/utils/types-colors";

interface GetPokemonRequest {
  name: string;
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
}

export async function getPokemon({ name }: GetPokemonRequest) {
  const response = await api.get<GetPokemonResponse>(`/pokemon/${name}`);

  return response.data;
}
