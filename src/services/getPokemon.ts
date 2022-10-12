import { Name } from "../utils/types";
import { api } from "./api";

export interface PokemonProps {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_defualt: boolean;
  order: number;
  weight: number;
  abilities: [
    {
      is_hidden: boolean;
      slot: number;
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: [
    {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }
  ];
  held_items: [
    {
      item: {
        name: string;
        url: string;
      };
      version_details: [
        {
          rarity: 5;
          version: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  location_area_encounters: string;
  moves: [
    {
      move: {
        name: string;
        url: string;
      };
      version_group_details: [
        {
          level_learned_at: number;
          version_group: {
            name: string;
            url: string;
          };
          move_learn_method: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female?: string;
    back_shiny: string;
    back_shiny_female?: string;
    front_default: string;
    front_female?: string;
    front_shiny: string;
    front_shiny_female?: string;
    other: {
      dream_world: {
        front_default: string;
        front_female?: string;
      };
      home: {
        front_default: string;
        front_female?: string;
        front_shiny: string;
        front_shiny_female?: string;
      };
      official_artwork: {
        front_default: string;
      };
    };
    versions: {};
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: Name;
        url: string;
      };
    }
  ];
  past_types: [
    {
      generation: {
        name: string;
        url: string;
      };
      types: [
        {
          slot: number;
          type: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
}

export const getPokemon = async (link: string) => {
  const { data } = await api.get<PokemonProps>(link);
  return data;
};
