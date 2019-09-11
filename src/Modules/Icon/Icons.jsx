import styled from 'styled-components';

const StyledIcon = styled.span`
  margin: 0 1rem;
  transition: all 0.2s linear;
  cursor: ${props => props.cursor || 'default'};
`;

export default StyledIcon;
