import React from 'react';
import { useSelector } from 'react-redux';
import { SearchComponent, Tabs, TabsContents, ChoosePerPageAmount } from 'Components';
import { Container } from 'Modules';
import { GoLogoGithub } from 'react-icons/go';
const MainPage = () => {
  const isFetched = useSelector(state => state.appData.isFetched);
  return (
    <>
      <SearchComponent />
      {!isFetched && <GoLogoGithub size='50' />}
      {isFetched && (
        <Container maxWidth='lg' column justify='center' width='100%'>
          <Tabs />
          <ChoosePerPageAmount />
          <TabsContents />
        </Container>
      )}
    </>
  );
};

export default MainPage;
