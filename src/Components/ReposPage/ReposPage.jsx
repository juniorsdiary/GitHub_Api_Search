import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCardTab, fetchRepo } from 'Store';
import { Container, Text, Button, TabsContainer, TabItem } from 'Modules';
import { UserCard, TabContent, ReposCard } from 'Components';
import { convertTime, useFetch, useTabSwitch } from 'Utilities';
import { GoRepoForked, GoStar, GoMarkGithub, GoOrganization, GoLaw } from 'react-icons/go';

const ReposPage = ({ data, setActiveTab, activeTab, fetchData, match }) => {
  const { owner_name, repo } = match.params;

  useEffect(() => {
    fetchData(`${owner_name}/${repo}`);
  }, [fetchData, owner_name, repo]);

  const { name, updated_at, stargazers_count, forks, description, html_url, license, created_at, owner } = data;

  const forks_data = useFetch('repos', `${owner_name}/${repo}`, 'forks');
  const stargazers_data = useFetch('repos', `${owner_name}/${repo}`, 'stargazers');
  const contributors_data = useFetch('repos', `${owner_name}/${repo}`, 'contributors');
  const languages = useFetch('repos', `${owner_name}/${repo}`, 'languages');
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
          {Object.keys(languages).join(' ')}
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
      {activeTab === 0 && <TabContent data={forks_data} MapComponent={ReposCard} total={forks} />}
      {activeTab === 1 && <TabContent data={stargazers_data} MapComponent={UserCard} total={stargazers_count} />}
      {activeTab === 2 && <TabContent data={contributors_data} MapComponent={UserCard} />}
    </Container>
  );
};

ReposPage.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.object,
  setActiveTab: PropTypes.func,
  fetchData: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.reposData.singleRepo,
    activeTab: state.appData.activeCardTab,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setActiveTab: name => {
      dispatch(setCardTab(name));
    },
    fetchData: name => {
      dispatch(fetchRepo(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposPage);
