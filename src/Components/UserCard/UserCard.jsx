import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Avatar, Title } from 'Modules';

const CardWrapper = styled(Container)`
  padding: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Text = styled(Title)`
  :hover {
    color: rgb(0, 0, 0);
  }
`;

const UserCard = ({ avatar_url, login }) => (
  <CardWrapper maxWidth='sm' align='center' row>
    <Avatar src={avatar_url} alt='avatar_logo' size='xs' />
    <Container justify='space-between' row>
      <Text size='1.5em' as='p'>
        {login}
      </Text>
      <Text size='1em' as='p' color={'rgba(0,0,0, 0.5)'}>
        Show more details
      </Text>
    </Container>
  </CardWrapper>
);

UserCard.propTypes = {
  avatar_url: PropTypes.string,
  login: PropTypes.string,
};

export default UserCard;
