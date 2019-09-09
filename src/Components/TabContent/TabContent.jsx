import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'Modules';
import { TotalResults } from 'Components';

const TabContent = ({ data, active, total, MapComponent }) => {
  const renderData = data.map(item => <MapComponent key={item.id} {...item} />);
  return (
    <>
      {active && (
        <Container maxWidth='lg' column width='100%' justify='center'>
          {total && <TotalResults total={total} />}
          {renderData}
        </Container>
      )}
    </>
  );
};

TabContent.propTypes = {
  data: PropTypes.array,
  active: PropTypes.bool,
  total: PropTypes.number,
  MapComponent: PropTypes.elementType,
};

export default TabContent;
