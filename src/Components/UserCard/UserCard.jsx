import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Avatar, Text, Button } from 'Modules';

const UserCard = ({ avatar_url, login }) => {
  const mode = useSelector(state => state.appData.mode);
  return (
    <Container mode={mode} card padding='0.5rem' align='center'>
      <Avatar src={avatar_url} alt='avatar_logo' size='2' />
      <Container justify='space-between' align='center'>
        <Text padding='1rem' size='1.75rem' color='black' bold>
          {login}
        </Text>
        <Button
          as={Link}
          to={{
            pathname: '/user',
            search: `?login=${login}`,
          }}>
          Details
        </Button>
      </Container>
    </Container>
  );
};

UserCard.propTypes = {
  avatar_url: PropTypes.string,
  login: PropTypes.string,
};

export default UserCard;
