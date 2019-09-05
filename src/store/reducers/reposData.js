import * as types from '../types';
import { constants } from 'Utilities';

const initialState = {
  id: 1,
  title: 'Repositories',
  active: false,
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
      sortName: 'Most stars',
      order: 'desc',
      cmd: 'stars',
    },
    {
      sortName: 'Fewest stars',
      order: 'asc',
      cmd: 'stars',
    },
    {
      sortName: 'Most forks',
      order: 'desc',
      cmd: 'forks',
    },
    {
      sortName: 'Fewest forks',
      order: 'asc',
      cmd: 'forks',
    },
    {
      sortName: 'Recently updated',
      order: 'desc',
      cmd: 'updated',
    },
    {
      sortName: 'Least recently updated',
      order: 'asc',
      cmd: 'updated',
    },
  ],
};

export default function reposData(state = initialState, action) {
  const { type, payload } = action;
  if (type === types.FETCH_REPOS_DATA) {
    return {
      ...state,
      apidata: payload.items,
      totalCount: payload.total_count,
    };
  } else if (type === types.SYNC_REPOS_OPTIONS) {
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
  } else if (type === types.CHANGE_CUR_PAGE) {
    return {
      ...state,
      curPage: payload,
    };
  }
  return state;
}
