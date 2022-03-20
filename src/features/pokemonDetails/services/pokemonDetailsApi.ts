import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { adaptedPokemonDetails } from '../adapters';
import { Details, ResponsePokemonDetails } from '../models';

export const pokemonDetailsApi = createApi({
  reducerPath: 'pokemonDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASEAPI_POKEMONS}`,
  }),
  tagTypes: ['Details'],
  endpoints: (build) => ({
    getPokemonByName: build.query<Details, string>({
      query: (name) => `/pokemon/${name}`,
      transformResponse: (response: ResponsePokemonDetails) => adaptedPokemonDetails(response),
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonDetailsApi;
