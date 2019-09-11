import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

import { MainPage, UserPage, ReposPage } from 'Components';
import { Text, Container, StyledIcon } from 'Modules';

const Global = createGlobalStyle`
  #container {
    transition: all 0.2s linear;
    ${props =>
      props.mode === 'light'
        ? {
            background: '#fff',
            color: 'black',
          }
        : {
            background: '#24292e',
            color: '#fff',
          }};
    height: 100vh;
  }
`;

const App = () => {
  const mode = useSelector(state => state.appData.mode);
  const dispatch = useDispatch();
  const switchMode = useCallback(
    value => {
      dispatch({ type: 'MODE', payload: value });
    },
    [dispatch]
  );
  return (
    <>
      <Global mode={mode === 'light' ? 'dark' : 'light'} />
      <Container as='header' width='100%' justify='center' align='center'>
        <Text padding='10px 0' size='2rem' bold>
          Search API
        </Text>
        {mode === 'light' ? (
          <StyledIcon cursor='pointer' as={FaSun} size='20' onClick={() => switchMode('dark')} />
        ) : (
          <StyledIcon cursor='pointer' as={FaMoon} size='20' onClick={() => switchMode('light')} />
        )}
      </Container>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/user/:login' component={UserPage} />
        <Route path='/repository/:owner_name/:repo' component={ReposPage} />
      </Switch>
    </>
  );
};

export default hot(App);
