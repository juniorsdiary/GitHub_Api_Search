import React from 'react';
import { Container } from 'Modules';
import { UsersContent, RepositoriesContent } from 'Components';

const TabsContent = () => {
  return (
    <Container padded maxWidth='lg' column justify='center' width='100%'>
      <UsersContent />
      <RepositoriesContent />
    </Container>
  );
};
export default TabsContent;
