import { createSelector } from 'reselect';

import {
  selectSelectedService,
  selectOpenWeather,
  selectVisualCrossing,
} from '@store/selectors/index';

interface IDayWeather {
  temperature: number;
  icon: string;
  key?: string;
  day: number;
}

export const selectDayWeather = createSelector(
  selectSelectedService,
  selectOpenWeather,
  selectVisualCrossing,
  (service, openWeather, visualCrossing) => {
    const arr: Array<IDayWeather> = [];
    if (service === 'OpenWeatherMap') {
      openWeather?.daily?.slice(0, 7).map(({ dt, wind_speed: windSpeed, uvi, temp, weather }) =>
        arr.push({
          key: `${dt}-${windSpeed}-${uvi}`,
          day: dt,
          temperature: temp.max,
          icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
        }),
      );
    } else {
      visualCrossing?.days?.map(
        ({ temp, datetimeEpoch, icon, moonphase, description, solarradiation }) =>
          arr.push({
            temperature: temp,
            day: datetimeEpoch,
            icon: require(`@assets/SVGS/${icon}.svg`),
            key: `${temp}-${moonphase}-${description}-${solarradiation}`,
          }),
      );
    }

    return arr;
  },
);
