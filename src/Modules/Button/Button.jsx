import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button.attrs(props => ({
  type: props.type,
}))`
  margin: 5px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 0.25em;
  border: 1px solid rgba(27, 31, 35, 0.2);
  background: #f3f6f9;
  font-family: inherit;
  cursor: pointer;
`;

export default StyledButton;
