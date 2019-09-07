import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, UserPage } from 'Components';
import { Header, Text } from 'Modules';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import { background } from 'Utilities';
import axios from 'axios';
const App = () => {
  // useEffect(() => {
  //   fetchUrl();
  // }, []);
  // const fetchUrl = async () => {
  //   let data = await axios({ method: 'get', url: 'https://api.github.com', headers: { Authorization: '0bbd4ccb8956ce05e5af701a10f31bd66663f124' } });
  //   console.log(data.data);
  // };

  return (
    <>
      <ThemeProvider theme={background}>
        <Header>
          <Text color='white' size='2em' align='center' bold>
            Search API
          </Text>
        </Header>
      </ThemeProvider>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/user/:id' component={UserPage} />
      </Switch>
    </>
  );
};

export default hot(App);
