import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Navbar = () => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document?.querySelector<HTMLElement>('#nav'));
  }, []);

  if (portalElement) {
    return ReactDOM.createPortal(<div>Navbar</div>, portalElement);
  }
};
