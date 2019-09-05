import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input.attrs(props => ({
  type: props.type,
  name: props.name || props.id,
  id: props.id,
}))`
  margin: 5px;
  flex: 1;
  border: 1px solid #d1d5da;
  border-radius: 5px;
  font-size: ${props => props.size || '1em'};
  padding: 5px;
`;

const InputField = ({ onChange, ...props }) => {
  return <StyledInput onChange={onChange} {...props} autoComplete='off' />;
};
InputField.propTypes = {
  onChange: PropTypes.func,
};
export default InputField;
