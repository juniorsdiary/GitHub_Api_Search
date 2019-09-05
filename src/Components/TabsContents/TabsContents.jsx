import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'Modules';
import { UsersContent, RepositoriesContent } from 'Components';

const TabsContent = () => {
  return (
    <Container maxWidth='lg' column justify='center'>
      <UsersContent />
      <RepositoriesContent />
    </Container>
  );
};
TabsContent.propTypes = {};
export default TabsContent;
