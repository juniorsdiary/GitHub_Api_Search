import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { GoMarkGithub, GoStar, GoRepo, GoPerson } from 'react-icons/go';
import { TabsContainer, Container, TabItem, Text, Button } from 'Modules';
import { useTabSwitch } from 'Utilities';
import { UserCard, ReposCard, UserDescription, TabContent } from 'Components';

const UserPageContent = ({ data, activeTab, setActiveTab }) => {
  const { login, html_url, followers, following, public_repos, ...rest } = data;

  const starsRef = useRef();
  const reposTabRef = useRef();
  const followersRef = useRef();
  const followingRef = useRef();

  const { width, position } = useTabSwitch(activeTab, [followersRef, followingRef, reposTabRef, starsRef]);

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
          <Text padding='0 10px 0 0' size='1rem'>
            Followers
          </Text>
          <GoPerson size='15' />
        </TabItem>
        <TabItem padding='10px' active={activeTab === 1} onClick={() => setActiveTab(1)} align='center' ref={followingRef}>
          <Text padding='0 10px 0 0' size='1rem'>
            Following
          </Text>
          <GoPerson size='15' />
        </TabItem>
        <TabItem padding='10px' active={activeTab === 2} onClick={() => setActiveTab(2)} align='center' ref={reposTabRef}>
          <Text padding='0 10px 0 0' size='1rem'>
            Repositories
          </Text>
          <GoRepo size='15' />
        </TabItem>
        <TabItem padding='10px' active={activeTab === 3} onClick={() => setActiveTab(3)} align='center' ref={starsRef}>
          <Text padding='0 10px 0 0' size='1rem'>
            Stars
          </Text>
          <GoStar size='15' />
        </TabItem>
      </TabsContainer>
      <Container maxWidth='lg' column width='100%' justify='center'>
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
