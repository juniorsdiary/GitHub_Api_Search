import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCardTab, fetchUser } from 'Store';
import { UserPageContent } from 'Components';

const UserPage = ({ data, setActiveTab, activeTab, fetchData, match, isFetching }) => {
  const login = match.params.login;

  useEffect(() => {
    // console.log('UserPage mounted', login);
    fetchData(login);
    return () => {
      // console.log('UserPage unmounted', login);
    };
  }, [fetchData, login]);
  // console.log(!isFetching);
  return <>{!isFetching && <UserPageContent data={data} activeTab={activeTab} setActiveTab={setActiveTab} />}</>;
};

UserPage.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.object,
  setActiveTab: PropTypes.func,
  fetchData: PropTypes.func,
  match: PropTypes.object,
  isFetching: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.usersData.singleUser,
    activeTab: state.appData.activeCardTab,
    isFetching: state.usersData.isFetching,
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
