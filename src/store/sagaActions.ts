export const requestWeather = (lat: number, lon: number) => {
  return {
    type: 'REQUEST_WEATHER',
    lat,
    lon,
  };
};

export const userLocation = (lat: number, lon: number) => {
  return {
    type: 'SET_USER_LOCATION',
    lat,
    lon,
  };
};
