import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Button, TabsContainer, TabItem } from 'Modules';
import { UserCard, TabContent, ReposCard } from 'Components';
import { convertTime, useTabSwitch } from 'Utilities';
import { GoRepoForked, GoStar, GoMarkGithub, GoOrganization, GoLaw } from 'react-icons/go';

const RepoPageContent = ({ fetch_name, data, activeTab, setActiveTab }) => {
  const { name, updated_at, stargazers_count, forks, description, html_url, license, language, created_at, owner } = data;

  const forksRef = useRef();
  const starsRef = useRef();
  const contribsRef = useRef();

  const { width, position } = useTabSwitch(activeTab, [forksRef, starsRef, contribsRef]);

  return (
    <Container padding='1rem 1.25rem' column justify='center'>
      <Container padding='1rem 0' column sm='10' md='6'>
        <Text size='2rem' bold color='#0366d6'>
          {name}
        </Text>
        {description && <Text size='1.2rem'>{description}</Text>}
        {license && (
          <Container row padding='0.5rem 0' align='center'>
            <GoLaw size='15' />
            <Text padding='0 0.5rem' size='1.2rem'>
              {license.name}
            </Text>
          </Container>
        )}
        <Text padding='0.5rem 0' size='1.2rem'>{`Updated ${convertTime(updated_at)}`}</Text>
        <Text padding='0.5rem 0' size='1.2rem'>{`Created ${convertTime(created_at)}`}</Text>
        <Text padding='0.5rem 0' size='1.2rem'>
          {language}
        </Text>
        <Button as='a' href={html_url} target='blank'>
          <Text padding='0 0.5rem 0 0' size='1.2rem'>
            See at GitHub
          </Text>
          <GoMarkGithub size='15' />
        </Button>
      </Container>
      <Container column sm='10' md='6'>
        <Text padding='0.5rem 0' size='1.5rem' bold>
          Owner
        </Text>
        <UserCard {...owner} />
      </Container>
      <TabsContainer position={position} afterWidth={width} row xs='10' sm='6' md='4'>
        <TabItem padding='0.5rem' active={activeTab === 0} onClick={() => setActiveTab(0)} align='center' justify='center' ref={forksRef}>
          <Text padding='0 0.5rem 0 0' size='1.2rem'>
            Forks
          </Text>
          <GoRepoForked size='15' />
        </TabItem>
        <TabItem padding='0.5rem' active={activeTab === 1} onClick={() => setActiveTab(1)} align='center' justify='center' ref={starsRef}>
          <Text padding='0 0.5rem 0 0' size='1.2rem'>
            Stargazers
          </Text>
          <GoStar size='15' />
        </TabItem>
        <TabItem padding='0.5rem' active={activeTab === 2} onClick={() => setActiveTab(2)} align='center' justify='center' ref={contribsRef}>
          <Text padding='0 0.5rem 0 0' size='1.2rem'>
            Contributors
          </Text>
          <GoOrganization size='15' />
        </TabItem>
      </TabsContainer>
      <Container column justify='center' sm='10' md='6'>
        <TabContent active={activeTab === 0} search={fetch_name && `repos/${fetch_name}/forks`} MapComponent={ReposCard} total={forks} />
        <TabContent
          active={activeTab === 1}
          search={fetch_name && `repos/${fetch_name}/stargazers`}
          MapComponent={UserCard}
          total={stargazers_count}
        />
        <TabContent active={activeTab === 2} search={fetch_name && `repos/${fetch_name}/contributors`} MapComponent={UserCard} />
      </Container>
    </Container>
  );
};

RepoPageContent.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.object,
  setActiveTab: PropTypes.func,
  fetch_name: PropTypes.string,
};

export default RepoPageContent;
