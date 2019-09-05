import React from 'react';
import { SearchComponent, Tabs, TabsContents } from 'Components';
import { Header, Title, Container } from 'Modules';
import { hot } from 'react-hot-loader/root';
const App = () => {
  // useEffect(() => {
  //   fetchUrl();
  // }, []);
  // const fetchUrl = async () => {
  //   let response = await fetch('https://api.github.com');
  //   let json = await response.json();
  //   console.log(json);
  // };
  return (
    <>
      <Header background='#24292e'>
        <Title color='white' size='2em' align='center' bold>
          GitHub Search App
        </Title>
      </Header>
      <SearchComponent />
      <Container maxWidth='lg' column>
        <Tabs />
        <TabsContents />
      </Container>
    </>
  );
};

export default hot(App);
