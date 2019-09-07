import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'Modules';

const StyledTag = styled(Button)`
  font-size: 1em;
  color: #0366d6;
  margin: 0;
  padding: 5px 10px;
  min-width: 1em;
  transition: all 0.2s linear;
  :hover {
    ${props =>
      !props.disabled && {
        background: '#0366d6',
        color: 'rgb(255, 255, 255)',
      }}
  }
  ${props =>
    props.active && {
      background: '#0366d6',
      color: 'rgb(255,255,255)',
    }}
  ${props =>
    props.disabled && {
      color: 'rgb(134,134,134)',
    }}
`;

const PageButton = ({ children, ...props }) => <StyledTag {...props}>{children}</StyledTag>;

PageButton.propTypes = {
  children: PropTypes.node,
};

export default PageButton;
