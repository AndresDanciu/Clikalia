import { Badge, Box, Flex, Heading, Image } from '@chakra-ui/react';
import { Loading } from 'components';
import { ErrorGeneric } from 'components/errors';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabsDetails } from './components';
import { Ability } from './models';
import { useGetPokemonByNameQuery } from './services/pokemonDetailsApi';

const PokemonDetails: FC = () => {
  const { name = '' } = useParams<'name'>();

  const { data, isLoading, isFetching, isError } = useGetPokemonByNameQuery(name);

  if (isLoading || isFetching) return <Loading />;

  if (isError) return <ErrorGeneric />;

  return (
    <>
      <Flex
        flexDir="column"
        alignItems="center"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bgColor="gray.50"
      >
        <Flex flexDir="row" alignItems="center" justifyContent="space-around" w="100%">
          <Image
            src={data?.sprite}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Pokemon"
            borderRadius="full"
            boxSize="150px"
            bgColor={'white'}
            mt={3}
          />

          <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" isTruncated textAlign="center">
            <Heading>{data?.name}</Heading>
            <Box display="flex" alignItems="baseline" mt={4}>
              {data?.abilities.map((ability: Ability) => (
                <Badge key={ability.ability.name} borderRadius="full" px="2" colorScheme="teal" mr={2} isTruncated>
                  {ability.ability?.name}
                </Badge>
              ))}
            </Box>
          </Box>
        </Flex>
        <TabsDetails moves={data?.moves} forms={data?.forms} />
      </Flex>
    </>
  );
};

export default PokemonDetails;
