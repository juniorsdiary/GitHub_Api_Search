import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchReposData } from 'Store';
import { ReposCard, Pagination, SortingOptions, TotalResults } from 'Components';
import { Container } from 'Modules';

const RepositoriesContent = ({ fetchData, changePage, appData, reposData }) => {
  const { apidata, totalCount, curPage, curSorting, sortingOptions } = reposData;
  const { curSearchValue, activeTab, curPerPage } = appData;

  const fetchAnotherPage = useCallback(
    number => {
      fetchData(curSearchValue, number, curPerPage, curSorting);
    },
    [curPerPage, curSearchValue, curSorting, fetchData]
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
      {activeTab === 1 && (
        <Container column justify='center'>
          <SortingOptions sortingOptions={sortingOptions} curSorting={curSorting} changeSorting={fetchAnotherSorting} />
          <Container column justify='center' sm='9' md='7' lg='6'>
            {!!totalCount && <TotalResults total={totalCount} />}
            {apidata.map(item => (
              <ReposCard key={item.id} {...item} />
            ))}
          </Container>
          {!!totalCount && <Pagination total={totalCount} perPage={curPerPage} curPage={curPage} changePage={fetchAnotherPage} />}
        </Container>
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
    fetchData: (searchValue, pageInd, perPageNum, sorting) => {
      dispatch(fetchReposData(searchValue, pageInd, perPageNum, sorting));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(RepositoriesContent);
