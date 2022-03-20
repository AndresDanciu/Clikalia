import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Loading } from 'components';
import { ErrorGeneric } from 'components/errors';
import React from 'react';
import useAxiosForm from '../hooks/useAxiosForms';
import { ResponseForms, Species } from '../models';

interface FormProps {
  forms: Species[];
}

export default function Forms({ forms = [] }: FormProps) {
  const { response, loading, error } = useAxiosForm(forms);

  if (loading) return <Loading />;

  if (error) return <ErrorGeneric />;

  if (!response || response.length === 0) return <div>No Forms</div>;

  const tables = response.map((form: ResponseForms) => {
    //Extract in a different component and use react-table
    return (
      <TableContainer key={form.name}>
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Battle</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{form.id}</Td>
              <Td>{form.is_battle_only.toString()}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    );
  });
  return <>{tables}</>;
}
