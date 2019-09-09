import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'Modules';
import { TotalResults } from 'Components';

const TabContent = ({ data, total, MapComponent }) => (
  <Container maxWidth='lg' column width='100%' justify='center'>
    {!!total && <TotalResults total={total} />}
    {data.map(item => (
      <MapComponent key={item.id} {...item} />
    ))}
  </Container>
);

TabContent.propTypes = {
  data: PropTypes.array,
  total: PropTypes.number,
  MapComponent: PropTypes.elementType,
};

export default TabContent;
