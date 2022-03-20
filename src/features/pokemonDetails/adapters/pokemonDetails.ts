import { nanoid } from '@reduxjs/toolkit';
import _ from 'lodash';
import { Ability, ColumnsMoves, Details, Move, ResponsePokemonDetails } from '../models';

export const adaptedPokemonDetails = (data: ResponsePokemonDetails) => {
  const formattedDetails: Details = {
    id: data?.id,
    name: _.capitalize(data?.name) ?? '-',
    sprite: data.sprites?.back_default || '-',
    abilities: isHidden(data?.abilities),
    moves: sortByUrl(data?.moves),
    forms: data?.forms ?? [],
  };

  return formattedDetails;
};

const isHidden = (abilities: Ability[] = []) => abilities.filter((ability: Ability) => !ability?.is_hidden);

const sortByUrl = (items: Move[] = []) => {
  return items
    .sort((a: Move, b: Move) => {
      const aUrl = a?.move?.url ?? '';
      const bUrl = b?.move?.url ?? '';
      return aUrl.localeCompare(bUrl, undefined, { numeric: true, sensitivity: 'base' });
    })
    .reverse();
};

export const adaptedTableMoves = (moves: Move[]) => {
  const formattedMoves: ColumnsMoves[] = moves.map(({ move }: Move) => {
    return {
      ...move,
      id: move.name,
      action: {
        id: nanoid(),
        ...move,
      },
    };
  });

  return formattedMoves;
};
