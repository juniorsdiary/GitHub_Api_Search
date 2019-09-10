import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCardTab, fetchRepo } from 'Store';
import { RepoPageContent } from 'Components';

const ReposPage = ({ data, setActiveTab, activeTab, fetchData, match, isFetching }) => {
  const { owner_name, repo } = match.params;
  const fetch_name = `${owner_name}/${repo}`;
  useEffect(() => {
    // console.log('ReposPage mounted', fetch_name);
    fetchData(fetch_name);
    return () => {
      // console.log('ReposPage unmounted', fetch_name);
    };
  }, [fetchData, fetch_name]);

  // console.log(!isFetching);

  return <>{!isFetching && <RepoPageContent fetch_name={fetch_name} data={data} activeTab={activeTab} setActiveTab={setActiveTab} />}</>;
};

ReposPage.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.object,
  setActiveTab: PropTypes.func,
  fetchData: PropTypes.func,
  match: PropTypes.object,
  isFetching: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.reposData.singleRepo,
    activeTab: state.appData.activeCardTab,
    isFetching: state.reposData.isFetching,
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
