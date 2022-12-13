import { requestWeather } from '@store/actions';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { selectOpenCage } from '@store/selectors';
import { useEffect } from 'react';

export const useGeolocation = (): void => {
  const geolocation = useAppSelector(selectOpenCage);

  const dispatch = useAppDispatch();

  useEffect(() => {
    !geolocation &&
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(requestWeather(position.coords.latitude, position.coords.longitude));
      });
  }, []);
};
