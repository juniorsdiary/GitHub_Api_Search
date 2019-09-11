import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input.attrs(props => ({
  type: props.type,
  name: props.name || props.id,
  id: props.id,
}))`
  margin: 0.5rem;
  flex: 1;
  border: 1px solid #d1d5da;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem;
  transition: all 0.2s linear;
  :focus {
    border-color: #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3);
    outline: none;
  }
`;

const InputField = ({ onChange, ...props }) => {
  return <StyledInput onChange={onChange} {...props} autoComplete='off' />;
};
InputField.propTypes = {
  onChange: PropTypes.func,
};
export default InputField;
