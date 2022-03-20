import { ArrowForwardIcon, WarningIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorGeneric = () => {
  return (
    <Flex direction="column" align="center" p={10} w="100%">
      <WarningIcon w={100} h={100} color="red.500" />
      <Heading as="h2" size="2xl" mt={5}>
        Oops! ERROR!
      </Heading>
      <Stack spacing={1} mt={5} align="center">
        <Text fontSize="xl">Something broken in our app.</Text>
        <Text fontSize="xl" textAlign="center">
          We will fix it. So sorry!
        </Text>
        <Text fontSize="xl">Please try again later or contact us.</Text>
      </Stack>
      <Link to="/">
        <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline" mt={5}>
          <Text fontSize="xl">Try Again </Text>
        </Button>
      </Link>
    </Flex>
  );
};
