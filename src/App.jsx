import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { MainPage, UserPage, ReposPage } from 'Components';
import { Header, Text, Container } from 'Modules';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle } from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

const Global = createGlobalStyle`
  #container {
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
const App = ({ mode, switchMode }) => {
  return (
    <>
      <Global mode={mode === 'light' ? 'dark' : 'light'} />
      <Header>
        <Container align='center'>
          <Text padding='10px 0' size='2rem' bold>
            Search API
          </Text>
          {mode === 'light' ? <FaMoon size='20' onClick={() => switchMode('dark')} /> : <FaSun size='20' onClick={() => switchMode('light')} />}
        </Container>
      </Header>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/user/:login' component={UserPage} />
        <Route path='/repository/:owner_name/:repo' component={ReposPage} />
      </Switch>
    </>
  );
};
App.propTypes = {
  mode: PropTypes.string,
  switchMode: PropTypes.func,
};

export default connect(
  state => ({
    mode: state.appData.mode,
  }),
  dispatch => ({
    switchMode: value => {
      dispatch({ type: 'MODE', payload: value });
    },
  })
)(hot(App));
