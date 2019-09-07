import styled from 'styled-components';

const Text = styled.p`
  color: ${props => props.color || props.theme.color || 'inherit'};
  font-weight: ${props => (props.bold ? '600' : 'inherit')};
  font-size: ${props => props.size || '1em'};
  text-align: ${props => props.align};
  ${props => props.href && { textDecoration: 'none' }}
  ${props => props.padded && { padding: '0.5em' }}
`;

export default Text;
