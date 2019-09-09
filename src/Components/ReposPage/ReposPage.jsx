import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCardTab } from 'Store';
import { Container, Text, Button } from 'Modules';
import { UserCard } from 'Components';
import { convertTime } from 'Utilities';
import { GoEye, GoRepoForked, GoStar, GoMarkGithub } from 'react-icons/go';

const ReposPage = ({ data, setActiveTab, activeTab }) => {
  const { name, language, updated_at, watchers, stargazers_count, forks, owner, description, html_url, license, created_at } = data;
  return (
    <Container maxWidth='lg' width='100%' column>
      <Container maxWidth='lg' width='100%' align='center' justify='space-between'>
        <Text size='2rem' bold color='#0366d6'>
          {name}
        </Text>
        <Button>
          <Text as='a' href={html_url} target='blank'>
            See at GitHub
          </Text>
          <GoMarkGithub size='15' />
        </Button>
      </Container>
      <Container maxWidth='sm' width='100%'>
        {description && <Text size='1.2rem'>{description}</Text>}
      </Container>
      <Container maxWidth='sm' width='100%' align='center' justify='space-between'>
        {license && <Text size='1.2rem'>{license.name}</Text>}
        <Text size='1rem'>{`Updated ${convertTime(updated_at)}`}</Text>
        <Text size='1rem'>{`Created ${convertTime(created_at)}`}</Text>
        <Text size='1.2rem'>{language}</Text>
      </Container>
      <Text size='1.5em' bold>
        Owner
      </Text>
      <UserCard {...owner} />
      <Container justify='center' align='center' width='100%'>
        <Container align='center'>
          <Button>
            <GoEye size='15' />
            <Text>Watchers</Text>
          </Button>
          {watchers}
        </Container>
        <Container align='center'>
          <Button>
            <GoStar size='15' />
            <Text>Stars</Text>
          </Button>
          {stargazers_count}
        </Container>
        <Container align='center'>
          <Button>
            <GoRepoForked size='15' />
            <Text>Forks</Text>
          </Button>
          {forks}
        </Container>
      </Container>
    </Container>
  );
};

ReposPage.propTypes = {
  activeTab: PropTypes.number,
  data: PropTypes.object,
  setActiveTab: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    data: state.reposData.apidata.filter(user => user.id === +id)[0],
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
)(ReposPage);
