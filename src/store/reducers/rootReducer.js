import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import reposData from './reposData';
import usersData from './usersData';
import appData from './appData';

const rootReducer = history =>
  combineReducers({
    appData,
    reposData,
    usersData,
    router: connectRouter(history),
  });

export default rootReducer;
