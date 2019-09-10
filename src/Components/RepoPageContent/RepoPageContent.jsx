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
    <Container padding='10px 15px' maxWidth='lg' width='100%' column>
      <Text size='2rem' bold color='#0366d6'>
        {name}
      </Text>
      {description && <Text size='1.2rem'>{description}</Text>}
      <Container padding='15px 0' maxWidth='sm' width='100%' column>
        {license && (
          <Container row padding='5px 0' align='center'>
            <GoLaw size='15' />
            <Text padding='0 5px' size='1.2rem'>
              {license.name}
            </Text>
          </Container>
        )}
        <Text padding='5px 0' size='1.2rem'>{`Updated ${convertTime(updated_at)}`}</Text>
        <Text padding='5px 0' size='1.2rem'>{`Created ${convertTime(created_at)}`}</Text>
        <Text padding='5px 0' size='1.2rem'>
          {language}
        </Text>
      </Container>
      <Button as='a' href={html_url} target='blank'>
        <Text padding='0 10px 0 0' size='1.2rem'>
          See at GitHub
        </Text>
        <GoMarkGithub size='15' />
      </Button>
      <Text padding='5px 0' size='1.5em' bold>
        Owner
      </Text>
      <UserCard {...owner} />
      <TabsContainer position={position} afterWidth={width} maxWidth={'lg'} row>
        <TabItem padding='10px' active={activeTab === 0} onClick={() => setActiveTab(0)} align='center' ref={forksRef}>
          <Text padding='0 10px 0 0' size='1.2rem'>
            Forks
          </Text>
          <GoRepoForked size='15' />
        </TabItem>
        <TabItem padding='10px' active={activeTab === 1} onClick={() => setActiveTab(1)} align='center' ref={starsRef}>
          <Text padding='0 10px 0 0' size='1.2rem'>
            Stargazers
          </Text>
          <GoStar size='15' />
        </TabItem>
        <TabItem padding='10px' active={activeTab === 2} onClick={() => setActiveTab(2)} align='center' ref={contribsRef}>
          <Text padding='0 10px 0 0' size='1.2rem'>
            Contributors
          </Text>
          <GoOrganization size='15' />
        </TabItem>
      </TabsContainer>
      <Container maxWidth='lg' column width='100%' justify='center'>
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
