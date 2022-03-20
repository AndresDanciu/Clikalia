import { Input, Text } from '@chakra-ui/react';
import { Loading, Table } from 'components';
import { ErrorGeneric } from 'components/errors';
import React, { ChangeEvent, useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Cell, Column } from 'react-table';
import { adaptedTablePokemons } from '../adapters';
import { ColumnsPokemons } from '../models';
import { useGetPokemonsQuery } from '../services/pokemonsApi';

export const COLUMNS: Column<ColumnsPokemons>[] = [
  {
    id: 'name',
    Header: 'Name',
    accessor: 'name',
  },
  {
    id: 'url',
    Header: 'URL',
    accessor: 'url',
  },
  {
    id: 'action',
    Header: 'Action',
    accessor: 'action',
    Cell: ({ value }: Cell) => (
      <div>
        <RouteLink to={`/pokemon/${value?.name}`}>
          <Text fontSize="xl">show</Text>
        </RouteLink>
      </div>
    ),
  },
];

export default function DataTable() {
  const { data, isLoading, isFetching, isError } = useGetPokemonsQuery();
  const [filter, setFilter] = useState<string>('');

  if (isLoading || isFetching) return <Loading />;

  if (isError) return <ErrorGeneric />;

  if (!data || data.length === 0) return <div>No Pokemons</div>;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const newData = adaptedTablePokemons(data);

  return (
    <>
      <div>
        <span>
          Search Pokemon:
          <Input autoFocus value={filter || ''} onChange={onChange} placeholder={`pokemons name`} />
        </span>
      </div>
      <Table columns={COLUMNS} data={newData} filters={['name']} filter={filter} />
    </>
  );
}
