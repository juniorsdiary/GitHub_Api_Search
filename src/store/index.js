import store, { history } from './store';
import { fetchUsersData, changeUsersPage, fetchUser } from './actions/users';
import { fetchReposData, changeReposPage } from './actions/repositories';
import { setSearchValue, setTabActive, changePerPageAmount, setCardTab } from './actions/app';

export {
  store,
  history,
  fetchUsersData,
  setSearchValue,
  setTabActive,
  fetchReposData,
  changePerPageAmount,
  changeUsersPage,
  changeReposPage,
  setCardTab,
  fetchUser,
};
