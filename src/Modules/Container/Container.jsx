import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  ${props => props.padded && { padding: '0.5em' }}
  flex-direction: ${({ dir }) => dir};
  max-width: ${props => `${props.maxWidth}px`};
  ${props => props.width && `width: ${props.width}`}
  ${({ dir, justify, align }) => {
    if (dir === 'row') {
      return {
        justifyContent: justify || 'flex-start',
        alignItems: align || 'flex-start',
      };
    } else if (dir === 'column') {
      return {
        justifyContent: align || 'flex-start',
        alignItems: justify || 'flex-start',
      };
    }
  }}
`;

const sizes = [{ size: 'xs', value: 560 }, { size: 'sm', value: 780 }, { size: 'md', value: 980 }, { size: 'lg', value: 1100 }];
/* eslint-disable react/prop-types */
const Container = (props, ref) => {
  const { children, maxWidth = 'xs', row, column, ...rest } = props;
  const value = sizes.find(size => size.size === maxWidth).value;
  const dir = row ? 'row' : column ? 'column' : 'row';
  return (
    <StyledContainer maxWidth={value} dir={dir} {...rest} ref={ref}>
      {children}
    </StyledContainer>
  );
};
/* eslint-enable react/prop-types */

export default React.forwardRef(Container);
