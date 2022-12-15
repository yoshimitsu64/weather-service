export const setBackgroundImage = (icon: number | string): string => {
  if (typeof icon === 'number') {
    if (icon >= 200 && icon <= 232) {
      return require('@assets/backgroundImages/thunder.jpg');
    } else if (icon >= 300 && icon <= 531) {
      return require(`@assets/backgroundImages/rain.jpg`);
    } else if (icon >= 600 && icon <= 622) {
      return require(`@assets/backgroundImages/snow.jpg`);
    } else if (icon === 800) {
      return require(`@assets/backgroundImages/clear.jpg`);
    }
    return require('@assets/backgroundImages/rain.jpg');
  }
  return require(`@assets/backgroundImages/${
    icon?.includes('partly') ? 'cloudy' : (icon as string)?.split('-')[0]
  }.jpg`);
};
