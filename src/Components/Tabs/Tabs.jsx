import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, TabItem, Text } from 'Modules';
import { setTabActive } from 'Store';

const Tabs = ({ curAPI, totalUsers, totalRepos, activeTab, setTabActive }) => {
  return (
    <Container maxWidth={'lg'} row>
      <TabItem padded active={activeTab === 'users'} onClick={() => setTabActive('users')} align='flex-end'>
        <Text size='1.5em'>Users</Text>
      </TabItem>
      <TabItem padded active={activeTab === 'repos'} onClick={() => setTabActive('repos')} align='flex-end'>
        <Text size='1.5em'>Repositories</Text>
      </TabItem>
    </Container>
  );
};

Tabs.propTypes = {
  curAPI: PropTypes.object,
  totalUsers: PropTypes.number,
  totalRepos: PropTypes.number,
  activeTab: PropTypes.string,
  setTabActive: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    totalUsers: state.usersData.totalCount,
    totalRepos: state.reposData.totalCount,
    activeTab: state.appData.activeTab,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTabActive: value => {
      dispatch(setTabActive(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
