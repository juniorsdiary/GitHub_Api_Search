import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCardTab, fetchUser } from 'Store';
import { UserPageContent } from 'Components';

const UserPage = ({ data, setActiveTab, activeTab, fetchData, match, isFetching, login }) => {
  useEffect(() => {
    fetchData(login);
  }, [fetchData, login]);
  return <>{!isFetching && <UserPageContent data={data} activeTab={activeTab} setActiveTab={setActiveTab} />}</>;
};

UserPage.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.object,
  setActiveTab: PropTypes.func,
  fetchData: PropTypes.func,
  match: PropTypes.object,
  isFetching: PropTypes.bool,
  login: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.usersData.singleUser,
    activeTab: state.appData.activeCardTab,
    isFetching: state.usersData.isFetching,
    login: ownProps.location.search.match(/=(.+)/)[1],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveTab: name => {
      dispatch(setCardTab(name));
    },
    fetchData: login => {
      dispatch(fetchUser(login));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
