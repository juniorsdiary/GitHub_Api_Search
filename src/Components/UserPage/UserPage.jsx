import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GoMarkGithub } from 'react-icons/go';
import { TabsContainer, Container, TabItem, Text, Button } from 'Modules';
import { useFetch, useTabSwitch } from 'Utilities';
import { UserCard, ReposCard, UserDescription, TabContent } from 'Components';
import { setCardTab, fetchUser } from 'Store';

const UserPage = ({ data, setActiveTab, activeTab, fetchData, match }) => {
  const login = match.params.login;

  useEffect(() => {
    fetchData(login);
  }, [fetchData, login]);

  const { html_url, followers, following, public_repos, ...rest } = data;

  const followers_data = useFetch('users', login, 'followers');
  const following_data = useFetch('users', login, 'following');
  const repositories_data = useFetch('users', login, 'repos');
  const stars_data = useFetch('users', login, 'starred');

  const starsRef = useRef();
  const reposTabRef = useRef();
  const followersRef = useRef();
  const followingRef = useRef();
  const { width, position } = useTabSwitch(activeTab, [followersRef, followingRef, reposTabRef, starsRef]);
  console.log(stars_data);
  return (
    <Container padding='0 10px' maxWidth='lg' width='100%' column>
      <UserDescription data={rest} />
      <Button as='a' href={html_url} target='blank'>
        <Text padding='0 10px 0 0' size='1.2rem'>
          See at GitHub
        </Text>
        <GoMarkGithub size='15' />
      </Button>
      <TabsContainer position={position} afterWidth={width} maxWidth={'lg'} row>
        <TabItem padding='10px' active={activeTab === 0} onClick={() => setActiveTab(0)} align='center' ref={followersRef}>
          <Text size='1.5rem'>Followers</Text>
        </TabItem>
        <TabItem padding='10px' active={activeTab === 1} onClick={() => setActiveTab(1)} align='center' ref={followingRef}>
          <Text size='1.5rem'>Following</Text>
        </TabItem>
        <TabItem padding='10px' active={activeTab === 2} onClick={() => setActiveTab(2)} align='center' ref={reposTabRef}>
          <Text size='1.5rem'>Repositories</Text>
        </TabItem>
        <TabItem padding='10px' active={activeTab === 3} onClick={() => setActiveTab(3)} align='center' ref={starsRef}>
          <Text size='1.5rem'>Stars</Text>
        </TabItem>
      </TabsContainer>
      {activeTab === 0 && <TabContent data={followers_data} MapComponent={UserCard} total={followers} />}
      {activeTab === 1 && <TabContent data={following_data} MapComponent={UserCard} total={following} />}
      {activeTab === 2 && <TabContent data={repositories_data} MapComponent={ReposCard} total={public_repos} />}
      {activeTab === 3 && <TabContent data={stars_data} MapComponent={ReposCard} />}
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
