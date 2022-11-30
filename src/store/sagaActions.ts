export const requestWeather = (city: string, lat: number, lon: number) => {
  return {
    type: 'REQUEST_WEATHER',
    city,
    lat,
    lon,
  };
};
