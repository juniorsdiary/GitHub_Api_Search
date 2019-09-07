import * as types from '../types';

const initialState = {
  id: 0,
  title: 'Users',
  active: true,
  apidata: [],
  singleCard: {},
  activeUserCard: false,
  totalCount: 0,
  curPage: 1,
  curSorting: {
    sorting: 'Best Match',
    order: 'desc',
    cmd: '',
  },
  sortingOptions: [
    {
      sorting: 'Best Match',
      order: 'desc',
      cmd: '',
    },
    {
      sorting: 'Most followers',
      order: 'desc',
      cmd: 'followers',
    },
    {
      sorting: 'Fewest followers',
      order: 'asc',
      cmd: 'followers',
    },
    {
      sorting: 'Most recently joined',
      order: 'desc',
      cmd: 'joined',
    },
    {
      sorting: 'Least recently joined',
      order: 'asc',
      cmd: 'joined',
    },
    {
      sorting: 'Most repositories',
      order: 'desc',
      cmd: 'repositories',
    },
    {
      sorting: 'Least repositories',
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
  } else if (type === types.CHANGE_CUR_PAGE) {
    return {
      ...state,
      curPage: payload,
    };
  } else if (type === types.SHOW_CARD) {
    return {
      ...state,
      singleCard: state.apidata.filter(item => item.id === payload)[0],
      activeUserCard: true,
    };
  }
  return state;
}
