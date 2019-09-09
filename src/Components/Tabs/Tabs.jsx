import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TabItem, Text, TabsContainer } from 'Modules';
import { setTabActive } from 'Store';
import { useTabSwitch } from 'Utilities';

const Tabs = ({ curAPI, totalUsers, totalRepos, activeTab, setTabActive }) => {
  const usersTabRef = useRef();
  const reposTabRef = useRef();
  const { width, position } = useTabSwitch(activeTab, [usersTabRef, reposTabRef]);

  return (
    <TabsContainer position={position} afterWidth={width} maxWidth={'lg'} row>
      <TabItem active={activeTab === 0} onClick={() => setTabActive(0)} align='flex-end' ref={usersTabRef}>
        <Text size='1.5em'>Users</Text>
      </TabItem>
      <TabItem active={activeTab === 1} onClick={() => setTabActive(1)} align='flex-end' ref={reposTabRef}>
        <Text size='1.5em'>Repositories</Text>
      </TabItem>
    </TabsContainer>
  );
};

Tabs.propTypes = {
  curAPI: PropTypes.object,
  totalUsers: PropTypes.number,
  totalRepos: PropTypes.number,
  activeTab: PropTypes.number,
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
