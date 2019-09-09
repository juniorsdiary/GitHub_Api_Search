import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from 'Store';
import App from './App.jsx';
import './styles/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('container')
);

// TODO: make padding settings more convinient
// TODO: исправить конвертацию времени
// TODO: parser of bio emojies
// TODO: fix button link area

// TODO: add some data to the repos Repos page
// TODO: make layout for ReposPage
