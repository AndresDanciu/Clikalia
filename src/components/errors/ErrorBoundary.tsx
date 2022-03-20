import { ArrowForwardIcon, WarningIcon } from '@chakra-ui/icons';
import { Button, Code, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React, { PropsWithChildren, ReactNode } from 'react';
import { ErrorBoundary as ErrorBoundaryReact, FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      <Flex direction="column" align="center" p={10} w="100%">
        <WarningIcon w={100} h={100} color="red.500" />
        <Heading as="h2" size="2xl" mt={5}>
          Oops! ERROR!
        </Heading>
        <Stack spacing={1} mt={5} align="center">
          <Text fontSize="xl">Something went wrong </Text>
          <Code colorScheme="red">{error?.message}</Code>
          <Text fontSize="xl">Please try again or contact us.</Text>
        </Stack>
        <Link to="/">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
            mt={5}
            onClick={resetErrorBoundary}
          >
            <Text fontSize="xl">Try Again </Text>
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export const ErrorBoundary = ({ children }: PropsWithChildren<ReactNode>) => {
  const errorHandler = (error: Error) => {
    //Add analytics here
    console.error('ErrorBoundary detected', error);
    console.log(' detected', error);
  };

  return (
    <ErrorBoundaryReact FallbackComponent={ErrorFallback} onError={errorHandler}>
      {children}
    </ErrorBoundaryReact>
  );
};
