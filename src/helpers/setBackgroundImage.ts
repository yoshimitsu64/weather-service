
export const setOpenWeatherBackgroundImage = (
  weatherID: number,
): string => {
  if (weatherID >= 200 && weatherID <= 232) {
    return '/backgroundImages/pexels-andre-furtado-1162251.jpg';
  } else if (weatherID >= 300 && weatherID <= 321) {
    return '/backgroundImages/pexels-kaique-rocha-125510.jpg';
  } else if (weatherID >= 500 && weatherID <= 531) {
    return '/backgroundImages/pexels-kaique-rocha-125510.jpg';
  } else if (weatherID >= 600 && weatherID <= 622) {
    return '/backgroundImages/pexels-photomix-company-877398.jpg';
  } else if (weatherID === 800) {
    return '/backgroundImages/pexels-max-andrey-1068989.jpg';
  } else {
    return '/backgroundImages/pexels-lisa-1662145.jpg';
  }
};

export const setVisualCrossingBackgroundImage = (icon: string): string => {
  switch (icon) {
    case 'clear-day':
      return '/visualCrossingBackgroundImages/clear-day.jpg';
    case 'clear-night':
      return '/visualCrossingBackgroundImages/clear-night.jpg';
    case 'cloudy':
      return '/visualCrossingBackgroundImages/cloudy.jpg';
    case 'fog':
      return '/visualCrossingBackgroundImages/fog.jpg';
    case 'hail':
      return '/visualCrossingBackgroundImages/hail.jpg';
    case 'partly-cloudy-day':
      return '/visualCrossingBackgroundImages/partly-cloudy-day.jpg';
    case 'partly-cloudy-night':
      return '/visualCrossingBackgroundImages/partly-cloudy-night.jpg';
    case 'rain':
      return '/visualCrossingBackgroundImages/rain.jpg';
    case 'rain-snow':
      return '/visualCrossingBackgroundImages/rain.jpg';
    case 'rain-snow-showers-day':
      return '/visualCrossingBackgroundImages/rain.jpg';
    case 'rain-snow-showers-night':
      return '/visualCrossingBackgroundImages/rain.jpg';
    case 'showers-day':
      return '/visualCrossingBackgroundImages/rain.jpg';
    case 'showers-night':
      return '/visualCrossingBackgroundImages/rain.jpg';
    case 'sleet':
      return '/visualCrossingBackgroundImages/snow.jpg';
    case 'snow':
      return '/visualCrossingBackgroundImages/snow.jpg';
    case 'snow-showers-day':
      return '/visualCrossingBackgroundImages/snow.jpg';
    case 'snow-showers-night':
      return '/visualCrossingBackgroundImages/snow.jpg';
    case 'thunder':
      return '/visualCrossingBackgroundImages/thunder.jpg';
    case 'thunder-rain':
      return '/visualCrossingBackgroundImages/thunder.jpg';
    case 'thunder-showers-day':
      return '/visualCrossingBackgroundImages/thunder.jpg';
    case 'thunder-showers-night':
      return '/visualCrossingBackgroundImages/thunder.jpg';
    case 'wind':
      return '/visualCrossingBackgroundImages/wind.jpg';
    default:
      return '/visualCrossingBackgroundImages/wind.jpg';
  }
};

