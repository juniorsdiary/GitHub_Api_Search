import React from 'react';
import { SearchComponent, Tabs, TabsContents, Filters } from 'Components';
import { Header, Text, Container } from 'Modules';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import { background } from 'Utilities';
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
      <ThemeProvider theme={background}>
        <Header>
          <Text color='white' size='2em' align='center' bold>
            GitHub Search App
          </Text>
        </Header>
      </ThemeProvider>
      <SearchComponent />
      <Container maxWidth='lg' column>
        <Tabs />
        <Filters />
        <TabsContents />
      </Container>
    </>
  );
};

export default hot(App);
