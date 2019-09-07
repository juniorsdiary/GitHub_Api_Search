import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, TabItem, Text } from 'Modules';
import { trimNumbers } from 'Utilities';
import { setTabActive } from 'Store';
import styled from 'styled-components';

const TabText = styled(Text)`
  padding: 5px 5px 5px 0;
`;

const Tabs = ({ curAPI, totalUsers, totalRepos, activeTab, setTabActive }) => {
  return (
    <Container maxWidth={'lg'} row>
      <TabItem active={activeTab === 'users'} onClick={() => setTabActive('users')} align='center'>
        <TabText size='1.5em'>Users</TabText>
        <span>{trimNumbers(totalUsers)}</span>
      </TabItem>
      <TabItem active={activeTab === 'repos'} onClick={() => setTabActive('repos')} align='center'>
        <TabText size='1.5em'>Repositories</TabText>
        <span>{trimNumbers(totalRepos)}</span>
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
