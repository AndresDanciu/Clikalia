import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { Forms, Moves } from '.';
import { Move, Species } from '../models';

interface FormProps {
  moves: Move[] | undefined;
  forms: Species[] | undefined;
}

export function TabsDetails({ moves = [], forms = [] }: FormProps) {
  return (
    <>
      <Tabs isFitted variant="soft-rounded" colorScheme="green" minW="38em" m={7}>
        <TabList>
          <Tab>Moves</Tab>
          <Tab>Forms</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Moves moves={moves} />
          </TabPanel>
          <TabPanel>
            <Forms forms={forms} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
