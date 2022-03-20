import { Flex, Spinner } from '@chakra-ui/react';
import React from 'react';

export function Loading() {
  return (
    <>
      <Flex h="100%" alignItems="center" alignContent="center" justifyContent="center">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Flex>
    </>
  );
}
