import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 5px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 0.25em;
  border: 1px solid rgba(27, 31, 35, 0.2);
  color: rgb(0, 0, 0);
  background: #f3f6f9;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${props => props.to && { textDecoration: 'none' }}
  :hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
    border-color: rgba(27, 31, 35, 0.35);
  }
`;

export default StyledButton;
