import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFormTag = styled.form`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: center;
  margin: 0.5em 0;
`;

const FormContainer = ({ children, ...props }) => <StyledFormTag {...props}>{children}</StyledFormTag>;

FormContainer.propTypes = {
  children: PropTypes.node,
};

export default FormContainer;
