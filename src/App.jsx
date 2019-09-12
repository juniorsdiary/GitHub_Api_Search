import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import { normalize } from 'polished';

import { MainPage, UserPage, ReposPage } from 'Components';
import { Text, Container, StyledIcon } from 'Modules';

const Global = createGlobalStyle`
  ${normalize()};
  body {
    overflow-y: overlay;
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
  }
  :root {
    font-size: calc(0.5em + 0.6vw);
    font-family: "Segoe UI", Helvetica, Arial,sans-serif ;
  }
  ::before,
  ::after {
    box-sizing: inherit
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
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
      <Global mode={mode === 'light' ? 'light' : 'dark'} />
      <Container card mode={mode} as='header' justify='space-between' align='center' padding='1rem'>
        <Text size='2rem' bold>
          Search API
        </Text>
        {mode === 'light' ? (
          <StyledIcon cursor='pointer' tabIndex='0' as={FaMoon} size='20' onKeyPress={() => switchMode('dark')} onClick={() => switchMode('dark')} />
        ) : (
          <StyledIcon cursor='pointer' tabIndex='0' as={FaSun} size='20' onKeyPress={() => switchMode('light')} onClick={() => switchMode('light')} />
        )}
      </Container>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/user' component={UserPage} />
        <Route path='/repository' component={ReposPage} />
      </Switch>
    </>
  );
};

export default hot(App);
