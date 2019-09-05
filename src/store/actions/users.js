import * as types from '../types';
import { constants } from 'Utilities';
import axios from 'axios';

export const fetchUsersData = (searchValue, pageInd, perPageNum, sorting, order, cmd) => dispatch => {
  const url_name = `${constants.API_BASE}/search/${constants.USERS}?q=`;
  let options = `&page=${pageInd}&per_page=${perPageNum}&sort=${cmd}&order=${order}`;
  axios.get(`${url_name}${searchValue}${options}`).then(data => {
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
