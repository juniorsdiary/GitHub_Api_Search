import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TabsContainer, Container, TabItem, Text } from 'Modules';
import { useFetch, useTabSwitch } from 'Utilities';
import { UserCard, ReposCard, UserDescription, TabContent } from 'Components';
import { setCardTab, fetchUser } from 'Store';

const UserPage = ({ data, setActiveTab, activeTab, fetchData, match }) => {
  const login = match.params.login;

  useEffect(() => {
    fetchData(login);
  }, [fetchData, login]);

  const { followers, following, public_repos, ...rest } = data;

  const followers_data = useFetch('users', login, 'followers');
  const following_data = useFetch('users', login, 'following');
  const repositories_data = useFetch('users', login, 'repos');
  const stars_data = useFetch('users', login, 'starred');

  const starsRef = useRef();
  const reposTabRef = useRef();
  const followersRef = useRef();
  const followingRef = useRef();
  const { width, position } = useTabSwitch(activeTab, [followersRef, followingRef, reposTabRef, starsRef]);

  return (
    <Container padded maxWidth='lg' width='100%' column>
      <UserDescription data={rest} />
      <TabsContainer position={position} afterWidth={width} maxWidth={'lg'} row>
        <TabItem padded active={activeTab === 0} onClick={() => setActiveTab(0)} align='center' ref={followersRef}>
          <Text size='1.5em'>Followers</Text>
        </TabItem>
        <TabItem padded active={activeTab === 1} onClick={() => setActiveTab(1)} align='center' ref={followingRef}>
          <Text size='1.5em'>Following</Text>
        </TabItem>
        <TabItem padded active={activeTab === 2} onClick={() => setActiveTab(2)} align='center' ref={reposTabRef}>
          <Text size='1.5em'>Repositories</Text>
        </TabItem>
        <TabItem padded active={activeTab === 3} onClick={() => setActiveTab(3)} align='center' ref={starsRef}>
          <Text size='1.5em'>Stars</Text>
        </TabItem>
      </TabsContainer>
      <TabContent data={followers_data} active={activeTab === 0} MapComponent={UserCard} total={followers} />
      <TabContent data={following_data} active={activeTab === 1} MapComponent={UserCard} total={following} />
      <TabContent data={repositories_data} active={activeTab === 2} MapComponent={ReposCard} total={public_repos} />
      <TabContent data={stars_data} active={activeTab === 3} MapComponent={ReposCard} />
    </Container>
  );
};

UserPage.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.object,
  setActiveTab: PropTypes.func,
  fetchData: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.usersData.singleUser,
    activeTab: state.appData.activeCardTab,
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
