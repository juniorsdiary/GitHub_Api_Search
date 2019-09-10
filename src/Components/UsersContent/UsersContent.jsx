import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsersData } from 'Store';
import { UserCard, Pagination, SortingOptions, TotalResults } from 'Components';
import { Container } from 'Modules';
import { themes } from 'Utilities';
import { ThemeProvider } from 'styled-components';

const UsersContent = ({ appData, usersData, fetchData, changePage }) => {
  const { apidata, totalCount, curPage, curSorting, sortingOptions } = usersData;
  const { curSearchValue, activeTab, curPerPage } = appData;

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
        <Container maxWidth='lg' column justify='center' width='100%'>
          <SortingOptions sortingOptions={sortingOptions} curSorting={curSorting} changeSorting={fetchAnotherSorting} />
          <ThemeProvider theme={themes.textColor}>
            <Container maxWidth='lg' column width='100%' justify='center'>
              {!!totalCount && <TotalResults total={totalCount} />}
              {apidata.map(item => (
                <UserCard key={item.id} {...item} />
              ))}
            </Container>
          </ThemeProvider>
          {!!totalCount && <Pagination total={totalCount} perPage={curPerPage} curPage={curPage} changePage={fetchAnotherPage} />}
        </Container>
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
