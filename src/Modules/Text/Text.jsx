import styled from 'styled-components';

const Text = styled.p`
  display: inline-block;
  color: ${props => props.color || props.theme.color || 'inherit'};
  font-weight: ${props => (props.bold ? '600' : 'inherit')};
  font-size: ${props => props.size || '1rem'};
  text-align: ${props => props.align};
  ${props => props.href && { textDecoration: 'none' }};
  ${props => props.padding && { padding: props.padding }};
  ${props => props.margin && { margin: props.margin }};
`;

export default Text;
