import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  border-radius: 5px;
  width: ${props => props.size || '75px'};
  height: ${props => props.size || '75px'};
`;

const sizes = [{ size: 'xs', value: '75px' }, { size: 'sm', value: '100px' }, { size: 'md', value: '125px' }, { size: 'lg', value: '150px' }];

const Avatar = ({ alt, src, size }) => {
  const imageSize = sizes.find(option => option.size === size).value;

  return <StyledImage size={imageSize} src={src} alt={alt}></StyledImage>;
};

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string,
};

export default Avatar;
