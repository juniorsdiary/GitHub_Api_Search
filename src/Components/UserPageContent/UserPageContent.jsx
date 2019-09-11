import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { GoStar, GoRepo, GoPerson } from 'react-icons/go';
import { TabsContainer, Container, TabItem, Text } from 'Modules';
import { useTabSwitch } from 'Utilities';
import { UserCard, ReposCard, UserDescription, TabContent } from 'Components';

const UserPageContent = ({ data, activeTab, setActiveTab }) => {
  const { login, followers, following, public_repos, ...rest } = data;

  const starsRef = useRef();
  const reposTabRef = useRef();
  const followersRef = useRef();
  const followingRef = useRef();

  const { width, position } = useTabSwitch(activeTab, [followersRef, followingRef, reposTabRef, starsRef]);

  return (
    <Container padding='0 1rem' column justify='center'>
      <UserDescription data={rest} />
      <TabsContainer position={position} afterWidth={width} row xs='10' sm='6' md='4'>
        <TabItem padding='0.7rem' active={activeTab === 0} onClick={() => setActiveTab(0)} justify='center' align='center' ref={followersRef}>
          <Text padding='0 0.7rem 0 0' size='1rem'>
            Followers
          </Text>
          <GoPerson size='15' />
        </TabItem>
        <TabItem padding='0.7rem' active={activeTab === 1} onClick={() => setActiveTab(1)} justify='center' align='center' ref={followingRef}>
          <Text padding='0 0.7rem 0 0' size='1rem'>
            Following
          </Text>
          <GoPerson size='15' />
        </TabItem>
        <TabItem padding='0.7rem' active={activeTab === 2} onClick={() => setActiveTab(2)} justify='center' align='center' ref={reposTabRef}>
          <Text padding='0 0.7rem 0 0' size='1rem'>
            Repositories
          </Text>
          <GoRepo size='15' />
        </TabItem>
        <TabItem padding='0.7rem' active={activeTab === 3} onClick={() => setActiveTab(3)} justify='center' align='center' ref={starsRef}>
          <Text padding='0 0.7rem 0 0' size='1rem'>
            Stars
          </Text>
          <GoStar size='15' />
        </TabItem>
      </TabsContainer>
      <Container column justify='center' sm='9' md='6'>
        <TabContent active={activeTab === 0} search={login && `users/${login}/followers`} MapComponent={UserCard} total={followers} />
        <TabContent active={activeTab === 1} search={login && `users/${login}/following`} MapComponent={UserCard} total={following} />
        <TabContent active={activeTab === 2} search={login && `users/${login}/repos`} MapComponent={ReposCard} total={public_repos} />
        <TabContent active={activeTab === 3} search={login && `users/${login}/starred`} MapComponent={ReposCard} />
      </Container>
    </Container>
  );
};

UserPageContent.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.object,
  setActiveTab: PropTypes.func,
};

export default UserPageContent;
