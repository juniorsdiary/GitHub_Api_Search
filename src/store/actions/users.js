import * as types from '../types';
import { constants } from 'Utilities';
import axios from 'axios';

export const fetchUsersData = (searchValue, pageInd, perPageNum, sortingOptions) => dispatch => {
  const { sorting, order, cmd } = sortingOptions;
  const url_name = `${constants.API_BASE}/search/${constants.USERS}?q=`;
  let options = `&page=${pageInd}&per_page=${perPageNum}&sort=${cmd}&order=${order}`;
  axios({ method: 'get', url: `${url_name}${searchValue}${options}`, headers: { Authorization: `token ${constants.AUTH}` } }).then(data => {
    dispatch({
      type: types.FETCH_USERS_DATA,
      payload: data.data,
    });
    dispatch({
      type: types.SYNC_USERS_OPTIONS,
      payload: {
        pageInd,
        sorting,
        order,
        cmd,
      },
    });
  });
};

export const fetchUser = login => dispatch => {
  const url = `${constants.API_BASE}/${constants.USERS}/${login}`;
  axios({ method: 'get', url, headers: { Authorization: `token ${constants.AUTH}` } }).then(data => {
    dispatch({
      type: types.FETCH_USER,
      payload: data.data,
    });
  });
};

export const changeUsersPage = number => {
  return {
    type: types.CHANGE_CUR_PAGE,
    payload: number,
  };
};

export const changeSorting = opts => {
  return {
    type: types.CHANGE_USERS_SORTING,
    payload: opts,
  };
};
