import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsersData, changeUsersPage, showCardData } from 'Store';
import { UserCard, TotalResults, Pagination } from 'Components';
import { Container } from 'Modules';
import { ThemeProvider } from 'styled-components';
import { textColor } from 'Utilities';

const UsersContent = ({ appData, usersData, fetchData, changePage, showDetails }) => {
  const { apidata, totalCount, curPage, curSorting } = usersData;
  const { curSearchValue, activeTab, curPerPage } = appData;
  const renderData = apidata.map(user => <UserCard key={user.id} {...user} showDetails={showDetails} />);
  const { sorting, order, cmd } = curSorting;
  const fetchAnotherPage = useCallback(
    number => {
      changePage(number);
      fetchData(curSearchValue, number, curPerPage, sorting, order, cmd);
    },
    [changePage, cmd, curPerPage, fetchData, order, curSearchValue, sorting]
  );
  return (
    <>
      {activeTab === 'users' && (
        <>
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
  showDetails: PropTypes.func,
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
    showDetails: id => {
      dispatch(showCardData(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(UsersContent);
