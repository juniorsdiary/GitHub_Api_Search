import styled from 'styled-components';

const StyledTitle = styled.p`
  color: ${props => props.color || 'inherit'};
  font-weight: ${props => (props.bold ? '600' : 'normal')};
  font-size: ${props => props.size || '1em'};
  text-align: ${props => props.align};
  margin: 1rem;
`;

export default StyledTitle;
