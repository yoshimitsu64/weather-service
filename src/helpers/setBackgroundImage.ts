export const setBackgroundImage = (icon: number | string): { img: string } => {
  console.log(icon);
  if (typeof icon === 'number') {
    if (icon >= 200 && icon <= 232) {
      return { img: 'assets/backgroundImages/thunder.jpg' };
    } else if (icon >= 300 && icon <= 531) {
      return { img: 'assets/backgroundImages/rain.jpg' };
    } else if (icon >= 600 && icon <= 622) {
      return { img: require('assets/backgroundImages/snow.jpg') };
    } else if (icon === 800) {
      return { img: 'assets/backgroundImages/clear.jpg' };
    }
    return { img: 'assets/backgroundImages/rain.jpg' };
  }
  return {
    img: `assets/backgroundImages/${
      icon?.includes('partly') ? 'cloudy' : (icon as string)?.split('-')[0]
    }.jpg`,
  };
};
