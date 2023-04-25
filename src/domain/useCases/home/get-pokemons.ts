export interface IGetPokemons {
  getPokemons(): Promise<IGetPokemons.Result>;
}

export namespace IGetPokemons {
  export type Result = {
    errors: string[];
    data?: {
      count: number;
      next?: string;
      previous?: string;
      results: [
        {
          name: string;
          url: string;
        },
      ];
    };
  };
}
