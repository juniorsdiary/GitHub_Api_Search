import * as types from '../types';
import * as constants from 'Utilities';

const initialState = {
  curSearchValue: '',
  curPerPage: 10,
  activeTab: 'users',
};

export default function appData(state = initialState, action) {
  const { type, payload } = action;
  if (type === types.SET_SEARCH_VALUE) {
    return {
      ...state,
      curSearchValue: payload,
    };
  } else if (type === types.SET_TAB_ACTIVE) {
    return {
      ...state,
      activeTab: payload,
    };
  }
  return state;
}
