import { useEffect, useState } from 'react';

export function usePortal(): HTMLDivElement {
  const [root] = useState<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    document.body.append(root);
    root.id = 'events-modal';

    return () => {
      document.body.removeChild(root);
    };
  }, []);

  return root;
}
