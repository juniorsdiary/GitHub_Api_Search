import React from 'react';
import styled from 'styled-components';
import Container from './Container.jsx';

const StyledTab = styled(Container)`
  position: relative;
  cursor: pointer;
  transition: color 0.2s linear;
  color: ${props => (props.active ? 'inherit' : 'rgba(134, 134, 134)')};
  :hover {
    color: inherit;
  }
`;
/* eslint-disable react/prop-types */
const TabItem = ({ children, onClick, ...rest }, ref) => {
  return (
    <StyledTab role='button' tabIndex='0' onKeyPress={onClick} onClick={onClick} {...rest} ref={ref}>
      {children}
    </StyledTab>
  );
};
/* eslint-enable react/prop-types */
export default React.forwardRef(TabItem);
