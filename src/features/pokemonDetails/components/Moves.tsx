import { Button, Input } from '@chakra-ui/react';
import { Table } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/useStore';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Cell, Column } from 'react-table';
import { adaptedTableMoves } from '../adapters';
import { ActionMove, ColumnsMoves, Move } from '../models';
import { removeMoveByName, selectAll, setAllMoves } from '../services/movesSlice';

interface MoveProps {
  moves: Move[] | undefined;
}

export default function Moves({ moves = [] }: MoveProps) {
  const [filter, setFilter] = useState<string>('');
  const dispatch = useAppDispatch();
  const movesStore = useAppSelector(selectAll);

  // update:Take out this function
  const COLUMNS: Column<ColumnsMoves>[] = useMemo(
    () => [
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
            <Button color="red" onClick={() => onClickRemove(value)}>
              Remove
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const newData = adaptedTableMoves(movesStore);

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => setFilter(e.currentTarget.value);
  const onClickRemove = (value: ActionMove) => dispatch(removeMoveByName(value?.name));

  useEffect(() => {
    dispatch(setAllMoves(moves));
  }, [moves]);

  if (!movesStore || movesStore.length === 0) return <div>No moves</div>;
  return (
    <>
      <div>
        <span>
          Search move:
          <Input autoFocus value={filter || ''} onChange={onChangeFilter} placeholder={`pokemons name`} />
        </span>
      </div>
      <Table columns={COLUMNS} data={newData} filters={['name']} filter={filter} />
    </>
  );
}
