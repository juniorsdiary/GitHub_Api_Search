import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container/Container.jsx';

const StyleTabsContainer = styled(Container)`
  margin: 0;
`;

const TabsContainer = ({ children, ...props }) => <StyleTabsContainer {...props}>{children}</StyleTabsContainer>;

TabsContainer.propTypes = {
  children: PropTypes.node,
};

export default TabsContainer;
