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

const UserCard = ({ id, avatar_url, login, showDetails }) => (
  <CardWrapper align='center' width='100%'>
    <Avatar src={avatar_url} alt='avatar_logo' size='xs' />
    <Description justify='space-between' align='center'>
      <Text size='1.75em' color='black' bold>
        {login}
      </Text>
      <Button as={Link} to={`/user/${id}`} size='1em'>
        Details
      </Button>
    </Description>
  </CardWrapper>
);

UserCard.propTypes = {
  id: PropTypes.number,
  avatar_url: PropTypes.string,
  login: PropTypes.string,
  showDetails: PropTypes.func,
};

export default UserCard;
