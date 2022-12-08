export const setBackgroundImage = (icon: number | string): string => {
  if (typeof icon === 'number') {
    if (icon >= 200 && icon <= 232) {
      return '/backgroundImages/thunderstorm.jpg';
    } else if (icon >= 300 && icon <= 321) {
      return '/backgroundImages/rain.jpg';
    } else if (icon >= 500 && icon <= 531) {
      return '/backgroundImages/rain.jpg';
    } else if (icon >= 600 && icon <= 622) {
      return '/backgroundImages/snow.jpg';
    } else if (icon === 800) {
      return '/backgroundImages/clear.jpg';
    }

    return '/backgroundImages/clear.jpg';
  }
  const imgName = icon?.includes('partly') ? 'cloudy' : (icon as string)?.split('-')[0];
  return `/backgroundImages/${imgName}.jpg`;
};
