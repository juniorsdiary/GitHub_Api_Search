import styled from 'styled-components';

const StyledButton = styled.button`
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25em;
  border: 1px solid rgba(27, 31, 35, 0.2);
  color: rgb(0, 0, 0);
  background: #f3f6f9;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${props => (props.to || props.href) && { textDecoration: 'none' }};
  :hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
    border-color: rgba(27, 31, 35, 0.35);
  }
  :focus {
    border-color: #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3);
    outline: none;
  }
`;

export default StyledButton;
