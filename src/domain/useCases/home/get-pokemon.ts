export interface IGetPokemon {
  getPokemon(): Promise<IGetPokemon.Result>;
}

export namespace IGetPokemon {
  interface Ability {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }

  interface Form {
    name: string;
    url: string;
  }

  interface GameIndex {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }

  interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }

  interface Move {
    move: {
      name: string;
      url: string;
    };
    version_group_details: VersionGroupDetail[];
  }

  interface Species {
    name: string;
    url: string;
  }

  interface Sprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: any;
    versions: any;
  }

  interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }

  interface Type {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }

  interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
  }

  export type Result = {
    errors: string[];
    data?: Pokemon;
  };
}
