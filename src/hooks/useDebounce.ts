import { useEffect, useState } from 'react';

export const useDebounce = (cityName: string, delay: number): string => {
  const [city, setCity] = useState<string>('');

  useEffect(() => {
    const citySearch = setTimeout(() => {
      setCity(cityName);
    }, delay);

    return () => clearTimeout(citySearch);
  }, [cityName, delay]);

  return city;
};
