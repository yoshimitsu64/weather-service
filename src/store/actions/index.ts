import { actionTypes } from '@store/actionTypes';
import { Geometry } from '@interfaces/IOpencage';

export const requestWeather = (lat: Geometry['lat'], lon: Geometry['lng']) => {
  return {
    type: actionTypes.REQUEST_WEATHER,
    lat,
    lon,
  };
};
