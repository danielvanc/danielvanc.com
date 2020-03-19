/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

function BackgroundNotification ({children}) {
    const modalRef = React.useRef(null);
  
    if (!modalRef.current) {
        modalRef.current = document.createElement('div');
    }

    React.useEffect(() => {
      const container = modalRef.current;
      Object.assign(container.style, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 2,
        background: 'blueviolet'
      })
      document.body.append(container);
      return () => document.body.removeChild(container);
    }, []);

  if (!modalRef.current) { return null };

  if (!modalRef.current) {
    return null
  }
    
  return ReactDOM.createPortal(
      <div>
        {children}
      </div>, modalRef.current
  );
};

export default BackgroundNotification;
