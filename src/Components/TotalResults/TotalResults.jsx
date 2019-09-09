import React from 'react';
import PropTypes from 'prop-types';
import { Text, Container } from 'Modules';
import { devideNumber } from 'Utilities';

const TotalResults = ({ total }) => (
  <Container row justify='center' align='center'>
    <Text padded size='1.5rem' bold color='black'>
      Total Results:
    </Text>
    <Text size='1.5rem' color='black'>
      {devideNumber(total)}
    </Text>
  </Container>
);

TotalResults.propTypes = {
  total: PropTypes.number,
};

export default TotalResults;
