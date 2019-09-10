import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Button } from 'Modules';
import styled from 'styled-components';
import { convertTime } from 'Utilities';
import { GoStar } from 'react-icons/go';
import { Link } from 'react-router-dom';

const RepoContainer = styled(Container)`
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const DetailsContainer = styled(Container)`
  margin-top: 1em;
`;

const ReposCard = ({ id, full_name, stargazers_count, language, description, updated_at, license }) => {
  return (
    <RepoContainer padding='10px' maxWidth='sm' width='100%' align='center'>
      <Container maxWidth='sm' width='100%' justify='space-between' align='center'>
        <Text size='1.2rem' bold color='#0366d6'>
          {full_name}
        </Text>
        <Button as={Link} to={`/repository/${full_name}`} size='1em'>
          Details
        </Button>
      </Container>
      <Container maxWidth='sm' width='100%'>
        {description && <Text size='1rem'>{description}</Text>}
      </Container>
      <DetailsContainer maxWidth='sm' width='100%' align='center' justify='space-between'>
        {license && <Text size='1.2rem'>{license.name}</Text>}
        <Text size='1rem'>{`Updated ${convertTime(updated_at)}`}</Text>
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
  id: PropTypes.number,
  full_name: PropTypes.string,
  stargazers_count: PropTypes.number,
  language: PropTypes.string,
  description: PropTypes.string,
  updated_at: PropTypes.string,
  license: PropTypes.object,
};

export default ReposCard;
