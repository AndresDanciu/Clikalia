/* eslint-disable max-lines-per-function */
import { Table as TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { matchSorter } from 'match-sorter';
import React, { ReactElement, useCallback, useEffect, useMemo } from 'react';
import { Column, IdType, Row, useAsyncDebounce, useGlobalFilter, useTable } from 'react-table';

interface TableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  filters?: string[];
  filter?: string;
}

export function Table<T extends { id: string }>({
  columns: columnsTable,
  data: dataTable = [],
  filters = [],
  filter = '',
}: TableProps<T>): ReactElement {
  const data = useMemo(() => dataTable, [dataTable]);
  const columns = useMemo(() => columnsTable, [columnsTable]);

  const columnsFilter = useCallback(
    (rows: Row<T>[], ids: IdType<T>[], query: string) => {
      return matchSorter(rows, query, {
        keys: filters.map((columnName) => `values.${columnName}`),
      });
    },
    [filters]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter } = useTable(
    {
      columns,
      data,
      globalFilter: columnsFilter,
    },
    useGlobalFilter
  );

  const updateGlobalFilter = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  useEffect(() => {
    updateGlobalFilter(filter);
  }, [filter]);
  return (
    <>
      <TableContainer {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup, i: number) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column) => (
                <Th {...headerGroup.getHeaderGroupProps()} key={column.id}>
                  {column.render('Header')}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()} key={cell.value}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </TableContainer>
    </>
  );
}
