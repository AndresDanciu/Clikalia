import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { adaptedHomePokemons } from '../adapters';
import { Pokemon, ResponsePokemons } from '../models';

export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASEAPI_POKEMONS}`,
  }),
  // entityTypes: ['Pokemons'],
  endpoints: (build) => ({
    getPokemons: build.query<Pokemon[], void>({
      query: () => ({ url: `/pokemon?limit=100` }),
      transformResponse: (response: ResponsePokemons) => adaptedHomePokemons(response),
    }),
  }),
});

export const { useGetPokemonsQuery } = pokemonsApi;
