import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchReposData, changeReposPage } from 'Store';
import { ReposCard, TotalResults, Pagination, SortingOptions } from 'Components';
import { Container } from 'Modules';
import { ThemeProvider } from 'styled-components';
import { textColor } from 'Utilities';

const RepositoriesContent = ({ fetchData, changePage, appData, reposData }) => {
  const { apidata, totalCount, curPage, curSorting, sortingOptions } = reposData;
  const { curSearchValue, activeTab, curPerPage } = appData;
  const { sorting, order, cmd } = curSorting;

  const renderData = apidata.map(repo => <ReposCard key={repo.id} {...repo} />);

  const fetchAnotherPage = useCallback(
    number => {
      changePage(number);
      fetchData(curSearchValue, number, curPerPage, sorting, order, cmd);
    },
    [changePage, cmd, curPerPage, curSearchValue, fetchData, order, sorting]
  );

  const fetchAnotherSorting = useCallback(
    options => {
      fetchData(curSearchValue, curPage, curPerPage, options.sorting, options.order, options.cmd);
    },
    [curPage, curPerPage, curSearchValue, fetchData]
  );

  return (
    <>
      {activeTab === 'repos' && (
        <>
          <SortingOptions sortingOptions={sortingOptions} curSorting={curSorting} changeSorting={fetchAnotherSorting} />
          <TotalResults total={totalCount} />
          <ThemeProvider theme={textColor}>
            <Container maxWidth='lg' column>
              {renderData}
            </Container>
          </ThemeProvider>
          <Pagination total={totalCount} perPage={curPerPage} curPage={curPage} changePage={fetchAnotherPage} />
        </>
      )}
    </>
  );
};

RepositoriesContent.propTypes = {
  reposData: PropTypes.object,
  appData: PropTypes.object,
  fetchData: PropTypes.func,
  changePage: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    reposData: state.reposData,
    appData: state.appData,
  };
};

const mapDispatchStateToProps = dispatch => {
  return {
    fetchData: (searchValue, pageInd, perPageNum, sorting, order, cmd) => {
      dispatch(fetchReposData(searchValue, pageInd, perPageNum, sorting, order, cmd));
    },
    changePage: number => {
      dispatch(changeReposPage(number));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(RepositoriesContent);
