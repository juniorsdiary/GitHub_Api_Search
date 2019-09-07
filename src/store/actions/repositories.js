import * as types from '../types';
import { constants } from 'Utilities';
import axios from 'axios';

export const fetchReposData = (searchValue, pageInd, perPageNum, sortingOptions) => dispatch => {
  const { sorting, order, cmd } = sortingOptions;
  const url_name = `${constants.API_BASE}/search/${constants.REPOS}?q=`;
  let options = `&page=${pageInd}&per_page=${perPageNum}&sort=${cmd}&order=${order}`;
  axios({ method: 'get', url: `${url_name}${searchValue}${options}`, headers: { Authorization: `token ${constants.AUTH}` } }).then(data => {
    dispatch({
      type: types.FETCH_REPOS_DATA,
      payload: data.data,
    });
    dispatch({
      type: types.SYNC_REPOS_OPTIONS,
      payload: {
        pageInd,
        sorting,
        order,
        cmd,
      },
    });
  });
};

export const changeReposPage = number => {
  return {
    type: types.CHANGE_CUR_PAGE,
    payload: number,
  };
};
