import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, UserPage, ReposPage } from 'Components';
import { Header, Text } from 'Modules';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import { themes, constants } from 'Utilities';
// import axios from 'axios';
const App = () => {
  // useEffect(() => {
  //   const fetchUrl = async () => {
  //     let data = await axios({
  //       method: 'get',
  //       url: 'https://api.github.com',
  //       headers: { Authorization: `token ${constants.AUTH}` },
  //     });
  //     console.log(data);
  //   };
  //   fetchUrl();
  // }, []);

  return (
    <>
      <ThemeProvider theme={themes.background}>
        <Header>
          <Text color='white' size='2em' align='center' bold>
            Search API
          </Text>
        </Header>
      </ThemeProvider>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/user/:login' component={UserPage} />
        <Route path='/repository/:id' component={ReposPage} />
      </Switch>
    </>
  );
};

export default hot(App);
