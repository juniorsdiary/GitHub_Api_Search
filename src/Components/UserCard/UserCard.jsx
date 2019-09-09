import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Avatar, Text, Button } from 'Modules';

const CardWrapper = styled(Container)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Description = styled(Container)`
  flex: 1 1;
`;

const UserCard = ({ avatar_url, login }) => {
  return (
    <CardWrapper maxWidth='sm' align='center' width='100%'>
      <Avatar src={avatar_url} alt='avatar_logo' size='xs' />
      <Description maxWidth='sm' justify='space-between' align='center'>
        <Text size='1.75em' color='black' bold>
          {login}
        </Text>
        <Button as={Link} to={`/user/${login}`} size='1em'>
          Details
        </Button>
      </Description>
    </CardWrapper>
  );
};

UserCard.propTypes = {
  avatar_url: PropTypes.string,
  login: PropTypes.string,
};

export default UserCard;
