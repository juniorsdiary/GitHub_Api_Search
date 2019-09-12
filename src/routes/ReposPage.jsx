import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCardTab, fetchRepo } from 'Store';
import { RepoPageContent } from 'Components';

const ReposPage = ({ data, setActiveTab, activeTab, fetchData, match, isFetching, fetch_name }) => {
  useEffect(() => {
    fetchData(fetch_name);
  }, [fetchData, fetch_name]);

  return <>{!isFetching && <RepoPageContent fetch_name={fetch_name} data={data} activeTab={activeTab} setActiveTab={setActiveTab} />}</>;
};

ReposPage.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.object,
  setActiveTab: PropTypes.func,
  fetchData: PropTypes.func,
  match: PropTypes.object,
  fetch_name: PropTypes.string,
  isFetching: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.reposData.singleRepo,
    activeTab: state.appData.activeCardTab,
    isFetching: state.reposData.isFetching,
    fetch_name: ownProps.location.search.match(/=(.+)/)[1],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveTab: name => {
      dispatch(setCardTab(name));
    },
    fetchData: name => {
      dispatch(fetchRepo(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposPage);
