import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from 'Modules';
import styled from 'styled-components';
import { convertLastUpadate } from 'Utilities';

const RepoContainer = styled(Container)`
  padding: 1em;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const FlexText = styled(Text)`
  padding-bottom: 1em;
  flex: 1 1 100%;
`;
const ReposCard = ({ full_name, stargazers_count, language, description, updated_at, license }) => {
  return (
    <RepoContainer justify='space-between' align='center'>
      <FlexText size='1.5rem' bold color='#0366d6'>
        {full_name}
      </FlexText>
      {description && <FlexText size='1.2rem'>{description}</FlexText>}
      {license && <Text size='1.2rem'>{license.name}</Text>}
      <Text size='1rem'>{convertLastUpadate(updated_at)}</Text>
      <Text size='1.2rem'>{language}</Text>
      <Text size='1.2rem'>{stargazers_count}</Text>
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
