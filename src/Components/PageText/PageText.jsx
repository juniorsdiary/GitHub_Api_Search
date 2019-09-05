import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'Modules';
const StyledPageItem = styled(Text)`
  margin: 0;
`;
const PageText = ({ children, ...props }) => <StyledPageItem>{children}</StyledPageItem>;

PageText.propTypes = {
  children: PropTypes.node,
};

export default PageText;
