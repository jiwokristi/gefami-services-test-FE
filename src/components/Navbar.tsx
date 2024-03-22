import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Navbar = () => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document?.querySelector<HTMLElement>('#nav'));
  }, []);

  if (portalElement) {
    return ReactDOM.createPortal(
      <div className="bg-initial-state py-32 tablets:translate-y-full">
        <h1 className="heading__primary text-center">Jiwo Kristi</h1>
      </div>,
      portalElement,
    );
  }
};
