import { actionTypes } from '@store/actionTypes';

export const requestWeather = (lat: number, lon: number) => {
  return {
    type: actionTypes.REQUEST_WEATHER,
    lat,
    lon,
  };
};
