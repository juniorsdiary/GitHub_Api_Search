import React from 'react';
import styled, { keyframes } from 'styled-components';
const opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const StyledContainer = styled.div`
  position: relative;
  display: flex;
  ${props => props.padded && { padding: '1em' }}
  max-width: ${props => `${props.maxWidth}px`};
  ${props => props.width && `width: ${props.width}`}
  ${({ row, column, justify, align }) => {
    const dir = row ? 'row' : column ? 'column' : 'row';
    if (dir === 'row') {
      return {
        flexDirection: dir,
        justifyContent: justify || 'flex-start',
        alignItems: align || 'flex-start',
      };
    } else if (dir === 'column') {
      return {
        flexDirection: dir,
        justifyContent: align || 'flex-start',
        alignItems: justify || 'flex-start',
      };
    }
  }}
  animation: ${opacity} 0.5s linear;
`;

const sizes = [{ size: 'xs', value: 560 }, { size: 'sm', value: 780 }, { size: 'md', value: 980 }, { size: 'lg', value: 1100 }];
/* eslint-disable react/prop-types */
const Container = (props, ref) => {
  const { children, maxWidth = 'xs', ...rest } = props;
  const value = sizes.find(size => size.size === maxWidth).value;
  return (
    <StyledContainer maxWidth={value} {...rest} ref={ref}>
      {children}
    </StyledContainer>
  );
};
/* eslint-enable react/prop-types */

export default React.forwardRef(Container);
