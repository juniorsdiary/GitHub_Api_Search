import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const elem = document.createElement('div');
  useEffect(() => {
    document.body.appendChild(elem);
    return () => {
      document.body.removeChild(elem);
    };
  }, [elem]);
  return ReactDOM.createPortal(children, elem);
};

export default Portal;
