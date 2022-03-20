import { ColumnsPokemons, Pokemon, ResponsePokemons } from '../models';

export const adaptedHomePokemons = ({ results = [] }: ResponsePokemons) => {
  const formattedPokemons: Pokemon[] = results
    .map((pokemon: Pokemon) => {
      return {
        id: pokemon?.name,
        name: pokemon?.name.toLowerCase() || '',
        url: pokemon?.url || '',
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  return formattedPokemons;
};

export const adaptedTablePokemons = (pokemons: Pokemon[]) => {
  const formattedPokemons: ColumnsPokemons[] = pokemons.map((pokemon: Pokemon) => {
    return {
      ...pokemon,
      action: pokemon,
    };
  });

  return formattedPokemons;
};
