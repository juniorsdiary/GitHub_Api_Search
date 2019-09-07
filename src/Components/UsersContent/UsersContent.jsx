import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsersData, changeUsersPage } from 'Store';
import { UserCard, TotalResults, Pagination, SortingOptions } from 'Components';
import { Container } from 'Modules';
import { ThemeProvider } from 'styled-components';
import { textColor } from 'Utilities';

const UsersContent = ({ appData, usersData, fetchData, changePage }) => {
  const { apidata, totalCount, curPage, curSorting, sortingOptions } = usersData;
  const { curSearchValue, activeTab, curPerPage } = appData;
  const { sorting, order, cmd } = curSorting;

  const renderData = apidata.map(user => <UserCard key={user.id} {...user} />);

  const fetchAnotherPage = useCallback(
    number => {
      fetchData(curSearchValue, number, curPerPage, sorting, order, cmd);
    },
    [cmd, curPerPage, fetchData, order, curSearchValue, sorting]
  );
  const fetchAnotherSorting = useCallback(
    options => {
      fetchData(curSearchValue, curPage, curPerPage, options.sorting, options.order, options.cmd);
    },
    [curPage, curPerPage, curSearchValue, fetchData]
  );
  return (
    <>
      {activeTab === 'users' && (
        <>
          <SortingOptions sortingOptions={sortingOptions} curSorting={curSorting} changeSorting={fetchAnotherSorting} />
          <TotalResults total={totalCount} />
          <ThemeProvider theme={textColor}>
            <Container maxWidth='lg' column width='100%' justify='center'>
              {renderData}
            </Container>
          </ThemeProvider>
          <Pagination total={totalCount} perPage={curPerPage} curPage={curPage} changePage={fetchAnotherPage} />
        </>
      )}
    </>
  );
};

UsersContent.propTypes = {
  usersData: PropTypes.object,
  appData: PropTypes.object,
  fetchData: PropTypes.func,
  changePage: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    usersData: state.usersData,
    appData: state.appData,
  };
};

const mapDispatchStateToProps = dispatch => {
  return {
    fetchData: (searchValue, pageInd, perPageNum, sorting, order, cmd) => {
      dispatch(fetchUsersData(searchValue, pageInd, perPageNum, sorting, order, cmd));
    },
    changePage: number => {
      dispatch(changeUsersPage(number));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(UsersContent);
