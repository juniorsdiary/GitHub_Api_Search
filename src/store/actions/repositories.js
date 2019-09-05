import * as types from '../types';
import { constants } from 'Utilities';
import axios from 'axios';

export const fetchReposData = (searchValue, pageInd, perPageNum, sorting, order, cmd) => dispatch => {
  const url_name = `${constants.API_BASE}/search/${constants.REPOS}?q=`;
  let options = `&page=${pageInd}&per_page=${perPageNum}&sort=${cmd}&order=${order}`;
  axios.get(`${url_name}${searchValue}${options}`).then(data => {
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
