import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchReposData, changeReposPage } from 'Store';
import { ReposCard, TotalResults, Pagination } from 'Components';
import { Container } from 'Modules';

const RepositoriesContent = ({ searchValue, activeTab, data, total, curPerPage, curPage, fetchData, changePage, curSortOpts }) => {
  const renderData = data.map(repo => <ReposCard key={repo.id} {...repo} />);
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
      {activeTab === 'repos' && (
        <>
          <TotalResults total={total} />
          <Container maxWidth='lg' column>
            {renderData}
          </Container>
          <Pagination total={total} perPage={curPerPage} curPage={curPage} changePage={fetchAnotherPage} />
        </>
      )}
    </>
  );
};

RepositoriesContent.propTypes = {
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
    data: state.reposData.apidata,
    total: state.reposData.totalCount,
    searchValue: state.appData.curSearchValue,
    activeTab: state.appData.activeTab,
    curPerPage: state.appData.curPerPage,
    curPage: state.reposData.curPage,
    curSortOpts: state.reposData.curSorting,
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
