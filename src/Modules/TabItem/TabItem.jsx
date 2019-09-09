import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container.jsx';

const StyledTab = styled(Container)`
  position: relative;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s linear;
  ${props =>
    props.active && {
      color: 'rgb(0,0,0)',
    }}
  :hover {
    ::after {
      content: '';
      position: absolute;
      height: 3px;
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      bottom: 0;
      left: 0;
    }
  }
`;
/* eslint-disable react/prop-types */
const TabItem = ({ children, ...rest }, ref) => {
  return (
    <StyledTab {...rest} ref={ref}>
      {children}
    </StyledTab>
  );
};
/* eslint-enable react/prop-types */
export default React.forwardRef(TabItem);
