import { Request } from 'src/data/contracts';
import { IGetPokemons } from 'src/domain/useCases/home/get-pokemons';

import { errorHandler } from '../helpers/error-handler';

export class GetPokemons implements IGetPokemons {
  constructor(
    private readonly request: Request,
    private readonly getPokemonsUrl: string,
  ) {}

  async getPokemons(): Promise<IGetPokemons.Result> {
    try {
      const result = await this.request.get({
        uri: `${this.getPokemonsUrl}`,
      });

      return { errors: [], data: result || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
