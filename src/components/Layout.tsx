import { Container, Flex } from '@chakra-ui/react';
import { Header } from 'components';
import React, { PropsWithChildren, ReactNode } from 'react';

export function Layout({ children }: PropsWithChildren<{ children: ReactNode }>) {
  return (
    <Flex flexDirection="column">
      <Header />
      <Container flex={1} mt={7} maxW="2xl">
        {children}
      </Container>
    </Flex>
  );
}
