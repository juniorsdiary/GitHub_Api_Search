import styled from 'styled-components';

const Text = styled.p`
  display: inline-block;
  font-weight: ${props => (props.bold ? '600' : 'inherit')};
  font-size: ${props => props.size || '1rem'};
  ${props => props.href && { textDecoration: 'none', color: '#0366d6' }};
  ${props => props.padding && { padding: props.padding }};
  ${props => props.margin && { margin: props.margin }};
`;

export default Text;
