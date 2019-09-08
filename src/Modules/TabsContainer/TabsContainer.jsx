import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container/Container.jsx';

const StyleTabsContainer = styled(Container)`
  margin: 0;
  ::after {
    content: '';
    position: absolute;
    height: 3px;
    background: red;
    bottom: 0;
    width: ${props => `${props.afterWidth}px`};
    left: ${props => `${props.position}px`};
    transition: all 0.3s linear;
  }
`;

const TabsContainer = ({ children, ...props }) => <StyleTabsContainer {...props}>{children}</StyleTabsContainer>;

TabsContainer.propTypes = {
  children: PropTypes.node,
};

export default TabsContainer;
