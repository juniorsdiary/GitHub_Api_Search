import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'Modules';
import { UsersContent, RepositoriesContent } from 'Components';

const TabsContent = ({}) => {
  return (
    <Container maxWidth='lg'>
      <UsersContent />
      <RepositoriesContent />
    </Container>
  );
};
TabsContent.propTypes = {};
export default TabsContent;
