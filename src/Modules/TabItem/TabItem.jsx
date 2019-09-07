import styled from 'styled-components';
import Container from '../Container/Container.jsx';

const TabItem = styled(Container)`
  position: relative;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  ${props =>
    props.active && {
      color: 'rgb(0,0,0)',
      fontWeight: '600',
    }}
  :hover {
    ::after {
      content: '';
      ${props =>
        !props.active && {
          background: 'rgba(0, 0, 0, 0.2)',
        }}
    }
  }
  ::after {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    ${props =>
      props.active && {
        background: 'rgb(255, 0, 0)',
      }}
  }
`;

export default TabItem;
