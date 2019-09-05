import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTab = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #2188ff;
  ${props =>
    props.active && {
      color: 'rgb(0,0,0)',
      fontWeight: '600',
    }}
  ::after {
    content: '';
    ${props =>
      props.active && {
        width: '100%',
        height: '2px',
        position: 'absolute',
        bottom: '0',
        background: 'rgb(255, 0, 0)',
      }}
  }
`;

const TabItem = ({ children, ...props }) => <StyledTab {...props}>{children}</StyledTab>;

TabItem.propTypes = {
  children: PropTypes.node,
};
export default React.memo(TabItem);
