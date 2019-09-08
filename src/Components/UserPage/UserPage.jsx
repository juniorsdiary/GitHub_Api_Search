import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GoMarkGithub } from 'react-icons/go';
import { TabsContainer, Container, Avatar, TabItem, Text, Button } from 'Modules';
import { useFetch, useTabSwitch } from 'Utilities';
import { UserCard, ReposCard } from 'Components';
import { setCardTab } from 'Store';

const UserPage = ({ data, setActiveTab, activeTab }) => {
  const { avatar_url, login } = data;
  const followers = useFetch('users', login, 'followers');
  const repositories = useFetch('users', login, 'repos');
  const stars = useFetch('users', login, 'starred');
  const following = useFetch('users', login, 'following');

  const starsRef = useRef();
  const reposTabRef = useRef();
  const followersRef = useRef();
  const followingRef = useRef();

  const { width, position } = useTabSwitch(activeTab, [followersRef, followingRef, reposTabRef, starsRef]);

  return (
    <Container padded maxWidth='lg' width='100%' column>
      <Container width='100%' justify='space-between'>
        <Avatar src={avatar_url} alt='avatar_logo' size='lg' />
        <Button>
          <Text as='a' href={data.html_url} target='blank' size='1em'>
            See at GitHub
          </Text>
          <GoMarkGithub size='25' />
        </Button>
      </Container>
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
      {activeTab === 0 && (
        <Container column width='100%'>
          {followers.map(follower => (
            <UserCard key={follower.id} {...follower} />
          ))}
        </Container>
      )}
      {activeTab === 1 && (
        <Container column width='100%'>
          {following.map(follower => (
            <UserCard key={follower.id} {...follower} />
          ))}
        </Container>
      )}
      {activeTab === 2 && (
        <Container column width='100%'>
          {repositories.map(repo => (
            <ReposCard key={repo.id} {...repo} />
          ))}
        </Container>
      )}
      {activeTab === 3 && (
        <Container column width='100%'>
          {stars.map(starredRepo => (
            <ReposCard key={starredRepo.id} {...starredRepo} />
          ))}
        </Container>
      )}
    </Container>
  );
};

UserPage.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.object,
  setActiveTab: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    data: state.usersData.apidata.filter(user => user.id === +id)[0],
    activeTab: state.appData.activeCardTab,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveTab: name => {
      dispatch(setCardTab(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
