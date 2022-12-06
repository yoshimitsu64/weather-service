import { useEffect, useState } from 'react';

export function usePortal(): HTMLDivElement {
  const [element] = useState<HTMLDivElement>(document.createElement('div'));
  const [root] = useState<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    document.body.append(root);
    root.id = 'events-modal';
    root.appendChild(element);

    return () => {
      root.removeChild(element);
    };
  }, []);

  return element;
}
