import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, Container, Button } from 'Modules';

const PageButton = styled(Button)`
  color: #0366d6;
  margin: 0;
  padding: 0;
  min-width: 1em;
`;
const PageText = styled(Title)`
  padding: 5px 10px;
  margin: 0;
`;

const Filters = () => {
  const renderPagesOptions = [10, 25, 50, 100].map(item => (
    <PageButton
      key={item}
      onClick={() => {
        console.log('text');
      }}>
      <PageText align='center' bold size='1.25rem'>
        {item}
      </PageText>
    </PageButton>
  ));
  return (
    <Container>
      <Title>Data per page:</Title>
      {renderPagesOptions}
    </Container>
  );
};

Filters.propTypes = {
  // : PropTypes.
};

export default Filters;
