import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { GoStar } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Container, Text, Button } from 'Modules';
import { convertTime } from 'Utilities';

const ReposCard = ({ id, full_name, stargazers_count, language, description, updated_at, license }) => {
  const mode = useSelector(state => state.appData.mode);
  return (
    <Container mode={mode} card column padding='0.5rem' align='center'>
      <Container justify='space-between' align='center'>
        <Text size='1.2rem' bold color='#0366d6'>
          {full_name}
        </Text>
        <Button
          as={Link}
          to={{
            pathname: '/repository',
            search: `?name=${full_name}`,
          }}>
          Details
        </Button>
      </Container>
      <Container>{description && <Text padding='0.5rem 0'>{description}</Text>}</Container>
      <Container margin='1rem 0 0' align='center' justify='space-between'>
        {license && <Text size='1.2rem'>{license.name}</Text>}
        <Text size='1rem'>{`Updated ${convertTime(updated_at)}`}</Text>
        <Text size='1.2rem'>{language}</Text>
        <Container xs='1.5' row align='center' justify='flex-end'>
          <GoStar size='17' />
          <Text size='1.2rem' padding='0 0.5rem'>
            {stargazers_count}
          </Text>
        </Container>
      </Container>
    </Container>
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
