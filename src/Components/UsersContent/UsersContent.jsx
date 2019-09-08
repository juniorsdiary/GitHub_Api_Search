import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsersData } from 'Store';
import { UserCard, TotalResults, Pagination, SortingOptions } from 'Components';
import { Container } from 'Modules';
import { textColor } from 'Utilities';
import { ThemeProvider } from 'styled-components';

const UsersContent = ({ appData, usersData, fetchData, changePage }) => {
  const { apidata, totalCount, curPage, curSorting, sortingOptions } = usersData;
  const { curSearchValue, activeTab, curPerPage } = appData;

  const renderData = apidata.map(user => <UserCard key={user.id} {...user} />);

  const fetchAnotherPage = useCallback(
    number => {
      fetchData(curSearchValue, number, curPerPage, curSorting);
    },
    [fetchData, curSearchValue, curPerPage, curSorting]
  );

  const fetchAnotherSorting = useCallback(
    value => {
      let selectedSorting = value.split(' ');
      let option = sortingOptions.filter(opts => opts.order === selectedSorting[0] && opts.cmd === selectedSorting[1])[0];
      fetchData(curSearchValue, curPage, curPerPage, option);
    },
    [curPage, curPerPage, curSearchValue, fetchData, sortingOptions]
  );

  return (
    <>
      {activeTab === 0 && (
        <>
          <SortingOptions sortingOptions={sortingOptions} curSorting={curSorting} changeSorting={fetchAnotherSorting} />
          <TotalResults total={totalCount} />
          <ThemeProvider theme={textColor}>
            <Container maxWidth='lg' column width='100%' justify='center'>
              {renderData}
            </Container>
          </ThemeProvider>
          {!!totalCount && <Pagination total={totalCount} perPage={curPerPage} curPage={curPage} changePage={fetchAnotherPage} />}
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
    fetchData: (searchValue, pageInd, perPageNum, sorting) => {
      dispatch(fetchUsersData(searchValue, pageInd, perPageNum, sorting));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(UsersContent);
