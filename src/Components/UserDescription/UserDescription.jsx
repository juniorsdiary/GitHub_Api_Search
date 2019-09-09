import React from 'react';
import PropTypes from 'prop-types';
import { GoMarkGithub, GoLink, GoMail, GoLocation, GoOrganization } from 'react-icons/go';
import { Container, Avatar, Text, Button } from 'Modules';
import { convertLastUpadate } from 'Utilities';

const UserDescription = ({ data }) => {
  const { html_url, avatar_url, name, login, bio, company, blog, email, location, created_at } = data;
  return (
    <Container width='100%' justify='space-between'>
      <Avatar src={avatar_url} alt='avatar_logo' size='lg' />
      <Container column>
        <Text size='1.5em' bold>
          {name}
        </Text>
        <Text size='1.5em'>{login}</Text>
        {bio && <Text>{bio}</Text>}
        {company && (
          <Container>
            <GoOrganization size='15' />
            <Text bold>{company}</Text>
          </Container>
        )}
        {blog && (
          <Container align='center'>
            <GoLink size='15' />
            <Text>{blog}</Text>
          </Container>
        )}
        {email && (
          <Container>
            <GoMail size='15' />
            <Text>{email}</Text>
          </Container>
        )}
        {location && (
          <Container>
            <GoLocation size='15' />
            <Text>{location}</Text>
          </Container>
        )}
        <Text>{convertLastUpadate(created_at)}</Text>
      </Container>

      <Button>
        <Text as='a' href={html_url} target='blank' size='1em'>
          See at GitHub
        </Text>
        <GoMarkGithub size='15' />
      </Button>
    </Container>
  );
};

UserDescription.propTypes = {
  data: PropTypes.object,
};

export default UserDescription;
