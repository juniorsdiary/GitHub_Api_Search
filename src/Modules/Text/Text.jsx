import styled from 'styled-components';

const Text = styled.p`
  color: ${props => props.color || '#586069'};
  font-weight: ${props => (props.bold ? '600' : 'normal')};
  font-size: ${props => props.size || '1em'};
  text-align: ${props => props.align};
`;

export default Text;
