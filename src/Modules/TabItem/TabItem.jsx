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
  ::after {
    content: '';
    ${props =>
      props.active && {
        width: '100%',
        height: '2px',
        position: 'absolute',
        bottom: '0',
        background: 'rgb(255, 0, 0)',
      }}
  }
`;

export default TabItem;
