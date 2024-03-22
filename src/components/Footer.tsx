import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Footer = () => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document?.querySelector<HTMLElement>('#footer'));
  }, []);

  if (portalElement) {
    return ReactDOM.createPortal(
      <div className="py-32 tablets:translate-y-full">
        <h1 className="heading__primary text-center">
          Frontend Developer Test
        </h1>
      </div>,
      portalElement,
    );
  }
};
