import React from 'react';
import styled, { keyframes } from 'styled-components';
import { getWidth, breakPoints } from 'Utilities';

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
  border: 1px solid transparent;
  animation: ${opacity} 0.3s linear;
  background: inherit;
  ${props => props.padding && { padding: props.padding }};
  ${props => props.margin && { margin: props.margin }};
  ${props => props.card && { borderBottom: `1px solid ${props.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'}` }};
  ${({ xs }) => (xs ? `width: ${getWidth(xs)}` : 'width: 100%')};
  @media only screen and (min-width: ${`${breakPoints.sm}px`}) {
    ${({ sm }) => sm && `width: ${getWidth(sm)}`};
  }
  @media only screen and (min-width: ${`${breakPoints.md}px`}) {
    ${({ md }) => md && `width: ${getWidth(md)}`};
  }
  @media only screen and (min-width: ${`${breakPoints.lg}px`}) {
    ${({ lg }) => lg && `width: ${getWidth(lg)}`};
  }
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
/* eslint-disable react/prop-types */
const Container = ({ children, ...rest }, ref) => {
  return (
    <StyledContainer {...rest} ref={ref}>
      {children}
    </StyledContainer>
  );
};
/* eslint-enable react/prop-types */

export default React.forwardRef(Container);
