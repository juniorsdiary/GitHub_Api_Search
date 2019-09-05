import store, { history } from './store';
import { fetchUsersData, changeUsersPage } from './actions/users';
import { fetchReposData, changeReposPage } from './actions/repositories';
import { setSearchValue, setTabActive, changePerPageAmount } from './actions/app';

export { store, history, fetchUsersData, setSearchValue, setTabActive, fetchReposData, changePerPageAmount, changeUsersPage, changeReposPage };
