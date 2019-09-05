import * as types from '../types';
import { constants } from 'Utilities';
const initialState = {
  id: 1,
  url_name: `${constants.API_BASE}/search/${constants.REPOS}`,
  title: 'Repositories',
  active: false,
  apidata: [],
  totalCount: 0,
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
  }
  return state;
}

//
// export default function reposData(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_DATA:
//       return {
//         ...state,
//         availabelAPI: state.availabelAPI.map(api => (api.url_name === action.url_name ? { ...api, apidata: action.apidata } : { ...api })),
//         curSearchValue: action.searchValue,
//         curPage: action.pageInd,
//         curPerPage: action.perPageNum,
//         curSorting: { sortName: action.sortName, order: action.order, cmd: action.cmd },
//       };
//     case TOOGLE_CARD:
//       return {
//         ...state,
//         availabelAPI: state.availabelAPI.map(item => (item.url_name === action.activeAPI ? { ...item, active: true } : { ...item, active: false })),
//       };
//
//     default:
//       return state;
//   }
// }
