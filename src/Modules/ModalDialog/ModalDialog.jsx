import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDialog = ({ children }) => <StyledModal>{children}</StyledModal>;

ModalDialog.propTypes = {
  children: PropTypes.node,
};

export default ModalDialog;
