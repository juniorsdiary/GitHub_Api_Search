import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, TabItem, Title } from 'Modules';
import { trimNumbers } from 'Utilities';
import { setTabActive } from 'Store';

// import SelectSearchComponent from './SelectSearchComponent';
// import UserComponent from './UserComponent';
// import ReposComponent from './ReposComponent';

const Tabs = ({ curAPI, totalUsers, totalRepos, activeTab, setTabActive }) => {
  return (
    <Container maxWidth={'lg'} row justify='center'>
      <TabItem active={activeTab === 'users'} onClick={() => setTabActive('users')}>
        <Title size='1.5em' as='p'>
          Users
        </Title>
        <span className='total_found_items'>{trimNumbers(totalUsers)}</span>
      </TabItem>
      <TabItem active={activeTab === 'repos'} onClick={() => setTabActive('repos')}>
        <Title size='1.5em' as='p'>
          Repositories
        </Title>
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
// {/* {/Users/.test(curAPI.title) && curAPI.apidata.total_count > 0 ? <UserComponent /> : null}
// {/Repos/.test(curAPI.title) && curAPI.apidata.total_count > 0 ? <ReposComponent /> : null} */}

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
