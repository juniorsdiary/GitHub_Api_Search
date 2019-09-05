import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  width: 100%;
  max-width: ${props => `${props.maxWidth}px`};
  margin: 0 auto;
  ${props => {
    if (props.row) {
      return {
        justifyContent: props.justify || 'flex-start',
        alignItems: props.align || 'flex-start',
      };
    } else if (props.column) {
      return {
        justifyContent: props.align || 'flex-start',
        alignItems: props.justify || 'flex-start',
      };
    }
  }}
`;

const sizes = [{ size: 'xs', value: 560 }, { size: 'sm', value: 780 }, { size: 'md', value: 980 }, { size: 'lg', value: 1100 }];

const Container = ({ children, maxWidth = 'xs', ...props }) => {
  const value = sizes.find(size => size.size === maxWidth).value;
  return (
    <StyledContainer maxWidth={value} {...props}>
      {children}
    </StyledContainer>
  );
};
Container.propTypes = {
  children: PropTypes.node,
  maxWidth: PropTypes.string,
};
export default Container;
