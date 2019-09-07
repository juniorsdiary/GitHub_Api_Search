import React from 'react';
import { SearchComponent, Tabs, TabsContents, Filters, ChoosePerPageAmount } from 'Components';
import { Container } from 'Modules';
const MainPage = () => (
  <>
    <SearchComponent />
    <Container maxWidth='lg' column justify='center' width='100%'>
      <Tabs />
      <ChoosePerPageAmount />
      <TabsContents />
    </Container>
  </>
);

export default MainPage;
