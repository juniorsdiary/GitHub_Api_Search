import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, UserPage, ReposPage } from 'Components';
import { Header, Text } from 'Modules';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import { themes } from 'Utilities';
const App = () => {
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
