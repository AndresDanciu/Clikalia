export interface Pokemon {
  id: string;
  name: string;
  url: string;
}

export interface ResponsePokemons {
  count: number;
  next: null;
  previous: null;
  results: Pokemon[];
}

export interface ColumnsPokemons extends Pokemon {
  action?: Pokemon;
}
