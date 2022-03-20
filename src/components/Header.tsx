import { Box, Heading, Spacer, VStack } from '@chakra-ui/react';
import * as React from 'react';

export function Header() {
  return (
    <Box bgColor="gray.100">
      <VStack justifyContent="flex-end" alignItems="center" mx="auto">
        <Heading textAlign="center" my={3} bgColor="gray.100">
          Clickalia test Andrei
        </Heading>
        <Spacer />
      </VStack>
    </Box>
  );
}
