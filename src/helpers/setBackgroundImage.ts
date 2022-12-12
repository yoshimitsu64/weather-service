export const setBackgroundImage = (icon: number | string): string => {
  if (typeof icon === 'number') {
    if (icon >= 200 && icon <= 232) {
      return `${process.env.PUBLIC_URL}/SVGS/backgroundImages/thunderstorm.jpg`;
    } else if (icon >= 300 && icon <= 321) {
      return `${process.env.PUBLIC_URL}/SVGS/backgroundImages/rain.jpg`;
    } else if (icon >= 500 && icon <= 531) {
      return `${process.env.PUBLIC_URL}/backgroundImages/rain.jpg`;
    } else if (icon >= 600 && icon <= 622) {
      return `${process.env.PUBLIC_URL}/backgroundImages/snow.jpg`;
    } else if (icon === 800) {
      return `${process.env.PUBLIC_URL}/backgroundImages/clear.jpg`;
    }
    return `${process.env.PUBLIC_URL}/backgroundImages/clear.jpg`;
  }
  return `${process.env.PUBLIC_URL}/backgroundImages/${
    icon?.includes('partly') ? 'cloudy' : (icon as string)?.split('-')[0]
  }.jpg`;
};
