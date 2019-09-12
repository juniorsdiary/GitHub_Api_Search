import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getWidth } from 'Utilities';

const StyledImage = styled.img`
  border-radius: 5px;
  ${({ size }) => (size ? { width: `${getWidth(size)}`, height: `${getWidth(size)}` } : { width: '100%' })};
`;

const Avatar = ({ alt, src, ...rest }) => {
  return <StyledImage {...rest} src={src} alt={alt}></StyledImage>;
};

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string,
};

export default Avatar;
