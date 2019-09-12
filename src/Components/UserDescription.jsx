import React from 'react';
import PropTypes from 'prop-types';
import { GoLink, GoMail, GoLocation, GoOrganization, GoMarkGithub } from 'react-icons/go';
import { Container, Avatar, Text, Button } from 'Modules';
import { convertTime } from 'Utilities';

const UserDescription = ({ data }) => {
  const { avatar_url, name, login, bio, company, blog, email, location, created_at, html_url } = data;
  const blog_link = /http:\/\//.test(blog) ? blog : `http://${blog}`;
  return (
    <Container padding='0.5rem 0' sm='9' md='6'>
      <Avatar size='4' src={avatar_url} alt='avatar_logo' />
      <Container padding='0 0.5rem' column>
        <Text size='1.5rem' bold>
          {name}
        </Text>
        <Text size='1.5rem'>{login}</Text>
        {bio && (
          <Text padding='0.5rem 0' size='1.2rem'>
            {bio}
          </Text>
        )}
        {company && (
          <Container padding='0.5rem 0' align='center'>
            <GoOrganization size='17' />
            <Text bold padding='0 0.5rem' size='1.2rem'>
              {company}
            </Text>
          </Container>
        )}
        {blog && (
          <Container padding='0.5rem 0' align='center'>
            <GoLink size='17' />
            <Text as='a' href={blog_link} target='blank' padding='0 0.5rem' size='1.2rem'>
              {blog}
            </Text>
          </Container>
        )}
        {email && (
          <Container padding='0.5rem 0' align='center'>
            <GoMail size='17' />
            <Text as='a' href={`mailto:${blog}`} padding='0 0.5rem' size='1.2rem' color='#0366d6'>
              {email}
            </Text>
          </Container>
        )}
        {location && (
          <Container padding='0.5rem 0' align='center'>
            <GoLocation size='17' />
            <Text padding='0 0.5rem' size='1.2rem'>
              {location}
            </Text>
          </Container>
        )}
        <Text padding='0.5rem 0' size='1.2rem'>
          {`Account created ${convertTime(created_at)}`}
        </Text>
        <Button as='a' href={html_url} target='blank'>
          <Text padding='0 0.7rem 0 0' size='1.2rem'>
            See at GitHub
          </Text>
          <GoMarkGithub size='15' />
        </Button>
      </Container>
    </Container>
  );
};

UserDescription.propTypes = {
  data: PropTypes.object,
};

export default UserDescription;
