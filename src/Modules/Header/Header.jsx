import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid transparent;
  background: ${props => props.theme.background || props.background};
`;

const Header = ({ children, background }) => <StyledHeader background={background}>{children}</StyledHeader>;

Header.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};

export default Header;
