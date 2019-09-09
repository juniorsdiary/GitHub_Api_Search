import React from 'react';
import PropTypes from 'prop-types';
import { GoLink, GoMail, GoLocation, GoOrganization } from 'react-icons/go';
import { Container, Avatar, Text, CustomLink } from 'Modules';
import { convertTime } from 'Utilities';

const UserDescription = ({ data }) => {
  const { avatar_url, name, login, bio, company, blog, email, location, created_at } = data;
  const blog_link = /http:\/\//.test(blog) ? blog : `http://${blog}`;
  return (
    <Container padding='10px 0' width='100%' maxWidth='sm'>
      <Avatar src={avatar_url} alt='avatar_logo' size='lg' />
      <Container padding='0 10px' column>
        <Text size='1.5em' bold>
          {name}
        </Text>
        <Text size='1.5em'>{login}</Text>
        {bio && (
          <Text padding='5px 0' size='1.2rem'>
            {bio}
          </Text>
        )}
        {company && (
          <Container padding='5px 0' align='center'>
            <GoOrganization size='15' />
            <Text bold padding='0 5px' size='1.2rem'>
              {company}
            </Text>
          </Container>
        )}
        {blog && (
          <Container padding='5px 0' align='center'>
            <GoLink size='15' />
            <Text as='a' href={blog_link} target='blank' padding='0 5px' size='1.2rem' color='#0366d6'>
              {blog}
            </Text>
          </Container>
        )}
        {email && (
          <Container padding='5px 0' align='center'>
            <GoMail size='15' />
            <Text as='a' href={`mailto:${blog}`} padding='0 5px' size='1.2rem' color='#0366d6'>
              {email}
            </Text>
          </Container>
        )}
        {location && (
          <Container padding='5px 0' align='center'>
            <GoLocation size='15' />
            <Text padding='0 5px' size='1.2rem'>
              {location}
            </Text>
          </Container>
        )}
        <Text padding='5px' size='1.2rem'>
          {`Account created ${convertTime(created_at)}`}
        </Text>
      </Container>
    </Container>
  );
};

UserDescription.propTypes = {
  data: PropTypes.object,
};

export default UserDescription;
