import styled from 'styled-components';

const Text = styled.p`
  color: ${props => props.color || props.theme.color || 'inherit'};
  font-weight: ${props => (props.bold ? '600' : 'inherit')};
  font-size: ${props => props.size || '1em'};
  text-align: ${props => props.align};
`;

export default Text;
