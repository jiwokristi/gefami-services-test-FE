import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Footer = () => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document?.querySelector<HTMLElement>('#footer'));
  }, []);

  if (portalElement) {
    return ReactDOM.createPortal(<div>Footer</div>, portalElement);
  }
};
