import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsersData, changeUsersPage } from 'Store';
import { UserCard, TotalResults, Pagination } from 'Components';
import { Container } from 'Modules';
import { ThemeProvider } from 'styled-components';
import { textColor } from 'Utilities';

const UsersContent = ({ searchValue, activeTab, data, total, curPerPage, curPage, fetchData, changePage, curSortOpts }) => {
  const renderData = data.map(user => <UserCard key={user.id} {...user} />);
  const { sorting, order, cmd } = curSortOpts;
  const fetchAnotherPage = useCallback(
    number => {
      changePage(number);
      fetchData(searchValue, number, curPerPage, sorting, order, cmd);
    },
    [changePage, cmd, curPerPage, fetchData, order, searchValue, sorting]
  );
  return (
    <>
      {activeTab === 'users' && (
        <>
          <TotalResults total={total} />
          <ThemeProvider theme={textColor}>
            <Container maxWidth='lg' column>
              {renderData}
            </Container>
          </ThemeProvider>
          <Pagination total={total} perPage={curPerPage} curPage={curPage} changePage={fetchAnotherPage} />
        </>
      )}
    </>
  );
};

UsersContent.propTypes = {
  searchValue: PropTypes.string,
  activeTab: PropTypes.string,
  data: PropTypes.array,
  total: PropTypes.number,
  curPerPage: PropTypes.number,
  curPage: PropTypes.number,
  fetchData: PropTypes.func,
  changePage: PropTypes.func,
  curSortOpts: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    data: state.usersData.apidata,
    total: state.usersData.totalCount,
    searchValue: state.appData.curSearchValue,
    activeTab: state.appData.activeTab,
    curPerPage: state.appData.curPerPage,
    curPage: state.usersData.curPage,
    curSortOpts: state.usersData.curSorting,
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
