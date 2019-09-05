import * as types from '../types';
import { constants } from 'Utilities';

const initialState = {
  id: 0,
  title: 'Users',
  active: true,
  apidata: [],
  totalCount: 0,
  curPage: 1,
  curSorting: {
    sorting: 'Best Match',
    order: 'desc',
    cmd: '',
  },
  sortingOptions: [
    {
      sortName: 'Best Match',
      order: 'desc',
      cmd: '',
    },
    {
      sortName: 'Most followers',
      order: 'desc',
      cmd: 'followers',
    },
    {
      sortName: 'Fewest followers',
      order: 'asc',
      cmd: 'followers',
    },
    {
      sortName: 'Most recently joined',
      order: 'desc',
      cmd: 'joined',
    },
    {
      sortName: 'Least recently joined',
      order: 'asc',
      cmd: 'joined',
    },
    {
      sortName: 'Most repositories',
      order: 'desc',
      cmd: 'repositories',
    },
    {
      sortName: 'Least repositories',
      order: 'asc',
      cmd: 'repositories',
    },
  ],
};

export default function usersData(state = initialState, action) {
  const { type, payload } = action;
  if (type === types.FETCH_USERS_DATA) {
    return {
      ...state,
      apidata: payload.items,
      totalCount: payload.total_count,
    };
  } else if (type === types.SYNC_USERS_OPTIONS) {
    const { pageInd, sorting, order, cmd } = payload;
    return {
      ...state,
      curPage: pageInd,
      curSorting: {
        sorting,
        order,
        cmd,
      },
    };
  }
  return state;
}
