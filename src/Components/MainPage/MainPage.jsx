import React from 'react';
import { useSelector } from 'react-redux';
import { SearchComponent, Tabs, ChoosePerPageAmount } from 'Components';
import { UsersContent, RepositoriesContent } from 'Components';
import { Container } from 'Modules';
import { GoLogoGithub } from 'react-icons/go';

const MainPage = () => {
  const isFetched = useSelector(state => state.appData.isFetched);
  return (
    <>
      <SearchComponent />
      {!isFetched && <GoLogoGithub size='50' />}
      {isFetched && (
        <Container padding='0 0.7rem' column justify='center' xs='12'>
          <Tabs />
          <ChoosePerPageAmount />
          <UsersContent />
          <RepositoriesContent />
        </Container>
      )}
    </>
  );
};

export default MainPage;
