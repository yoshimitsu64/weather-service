import { createSelector } from 'reselect';
import {
  selectOpenWeather,
  selectSelectedService,
  selectVisualCrossing,
} from '@store/selectors/index';
import { setBackgroundImage } from '@helpers/setBackgroundImage';

export const selectImageSrc = createSelector(
  selectSelectedService,
  selectOpenWeather,
  selectVisualCrossing,
  (service, openWeather, visualCrossing) => {
    if (service === 'OpenWeatherMap') {
      return setBackgroundImage(openWeather!?.daily?.[0]?.weather[0]?.id);
    }
    return setBackgroundImage(visualCrossing!?.days[0]?.icon);
  },
);
