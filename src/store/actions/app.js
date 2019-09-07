import * as types from '../types';

export const changePerPageAmount = perPageNum => {
  return { type: types.CHANGE_PER_PAGE_AMOUNT, payload: perPageNum };
};
export const setSearchValue = value => {
  return {
    type: types.SET_SEARCH_VALUE,
    payload: value,
  };
};
export const setTabActive = value => {
  return {
    type: types.SET_TAB_ACTIVE,
    payload: value,
  };
};

export const setCardTab = name => {
  return {
    type: types.SET_CARD_TAB,
    payload: name,
  };
};
