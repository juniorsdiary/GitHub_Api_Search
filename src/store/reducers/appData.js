import * as types from '../types';

const initialState = {
  curSearchValue: '',
  curPerPage: 10,
  activeTab: 'users',
  activeCardTab: 'followers',
  isFetched: false,
};

export default function appData(state = initialState, action) {
  const { type, payload } = action;
  if (type === types.SET_SEARCH_VALUE) {
    return {
      ...state,
      curSearchValue: payload,
      isFetched: true,
    };
  } else if (type === types.SET_TAB_ACTIVE) {
    return {
      ...state,
      activeTab: payload,
    };
  } else if (type === types.CHANGE_PER_PAGE_AMOUNT) {
    return {
      ...state,
      curPerPage: payload,
    };
  } else if (type === types.SET_CARD_TAB) {
    return {
      ...state,
      activeCardTab: payload,
    };
  }
  return state;
}
