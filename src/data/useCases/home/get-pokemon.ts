import { Request } from 'src/data/contracts';
import { IGetPokemon } from 'src/domain/useCases/home/get-pokemon';

import { errorHandler } from '../helpers/error-handler';

export class GetPokemon implements IGetPokemon {
  constructor(
    private readonly request: Request,
    private readonly getPokemonUrl: string,
  ) {}

  async getPokemon(): Promise<IGetPokemon.Result> {
    try {
      const result = await this.request.get({
        uri: `${this.getPokemonUrl}`,
      });

      return { errors: [], data: result || null };
    } catch (err: any) {
      return errorHandler(err, err?.response?.status);
    }
  }
}
