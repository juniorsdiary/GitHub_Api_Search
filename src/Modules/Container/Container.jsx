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
  color: ${props => props.theme.color || 'inherit'};
  background: ${props => props.theme.background || 'inherit'};
  max-width: ${props => `${props.maxWidth}px`};
  border: 1px solid transparent;
  animation: ${opacity} 0.3s linear;
  ${props => props.padding && { padding: props.padding }};
  ${props => props.margin && { margin: props.margin }};
  ${props => props.width && `width: ${props.width}`};
  ${props => props.card && { borderBottom: `1px solid ${props.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 1)'}` }};
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
  }};
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
