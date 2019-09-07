import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from 'Modules';
import styled from 'styled-components';
import { convertLastUpadate } from 'Utilities';
import { GoStar } from 'react-icons/go';

const RepoContainer = styled(Container)`
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const DetailsContainer = styled(Container)`
  margin-top: 1em;
`;
const ReposCard = ({ full_name, stargazers_count, language, description, updated_at, license }) => {
  return (
    <RepoContainer width='100%' align='center'>
      <Container width='100%' justify='space-between' align='center'>
        <Text size='1.5rem' bold color='#0366d6'>
          {full_name}
        </Text>
        <Text size='1em' color='rgba(0,0,0, 0.5)'>
          Show more details
        </Text>
      </Container>
      <Container width='100%'>{description && <Text size='1.2rem'>{description}</Text>}</Container>
      <DetailsContainer width='100%' align='center' justify='space-between'>
        {license && <Text size='1.2rem'>{license.name}</Text>}
        <Text size='1rem'>{convertLastUpadate(updated_at)}</Text>
        <Text size='1.2rem'>{language}</Text>
        <Container row align='center'>
          <GoStar size='17' />
          <Text size='1.2rem'>{stargazers_count}</Text>
        </Container>
      </DetailsContainer>
    </RepoContainer>
  );
};

ReposCard.propTypes = {
  full_name: PropTypes.string,
  stargazers_count: PropTypes.number,
  language: PropTypes.string,
  description: PropTypes.string,
  updated_at: PropTypes.string,
  license: PropTypes.object,
};

export default ReposCard;
