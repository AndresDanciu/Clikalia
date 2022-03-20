import { Sprites, Type } from './pokemonDetails';

export interface ResponseForms {
  form_name: string;
  form_names: any[];
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: any[];
  order: number;
  pokemon: Pokemon;
  sprites: Sprites;
  types: Type[];
  version_group: Pokemon;
}

export interface Pokemon {
  name: string;
  url: string;
}
