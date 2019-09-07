import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GoMarkGithub } from 'react-icons/go';
import { Container, Avatar, TabItem, Text, Button } from 'Modules';
import { useFetch } from 'Utilities';
import { UserCard, ReposCard } from 'Components';
import { setCardTab } from 'Store';

const UserPage = ({ data, setActiveTab, activeTab }) => {
  const { avatar_url, login } = data;
  const followers = useFetch('users', login, 'followers');
  const repositories = useFetch('users', login, 'repos');
  const stars = useFetch('users', login, 'starred');
  const following = useFetch('users', login, 'following');
  return (
    <Container maxWidth='lg' width='100%' column>
      <Container width='100%' justify='space-between'>
        <Avatar src={avatar_url} alt='avatar_logo' size='lg' />
        <Button>
          <Text as='a' href={data.html_url} target='blank' size='1em'>
            See at GitHub
          </Text>
          <GoMarkGithub size='25' />
        </Button>
      </Container>
      <Container maxWidth={'lg'} row>
        <TabItem active={activeTab === 'followers'} onClick={() => setActiveTab('followers')} align='center'>
          <Text size='1.5em'>Followers</Text>
        </TabItem>
        <TabItem active={activeTab === 'following'} onClick={() => setActiveTab('following')} align='center'>
          <Text size='1.5em'>Following</Text>
        </TabItem>
        <TabItem active={activeTab === 'repos'} onClick={() => setActiveTab('repos')} align='center'>
          <Text size='1.5em'>Repositories</Text>
        </TabItem>
        <TabItem active={activeTab === 'stars'} onClick={() => setActiveTab('stars')} align='center'>
          <Text size='1.5em'>Stars</Text>
        </TabItem>
      </Container>
      {activeTab === 'followers' && (
        <Container column width='100%'>
          {followers.map(follower => (
            <UserCard key={follower.id} {...follower} />
          ))}
        </Container>
      )}
      {activeTab === 'following' && (
        <Container column width='100%'>
          {following.map(follower => (
            <UserCard key={follower.id} {...follower} />
          ))}
        </Container>
      )}
      {activeTab === 'repos' && (
        <Container column width='100%'>
          {repositories.map(repo => (
            <ReposCard key={repo.id} {...repo} />
          ))}
        </Container>
      )}
      {activeTab === 'stars' && (
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
  activeTab: PropTypes.string,
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
