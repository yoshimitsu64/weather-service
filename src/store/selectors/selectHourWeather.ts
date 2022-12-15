import { createSelector } from 'reselect';

import {
  selectOpenWeather,
  selectSelectedService,
  selectVisualCrossing,
} from '@store/selectors/index';

import { IHourWeather } from '@customTypes/index';

import { convertDateTimeToHours } from '@helpers/convertDateTimeToHours';

export const selectHourWeather = createSelector(
  selectSelectedService,
  selectOpenWeather,
  selectVisualCrossing,
  (service, openWeather, visualCrossing) => {
    const arr: Array<IHourWeather> = [];
    if (service === 'OpenWeatherMap') {
      openWeather?.hourly?.slice(0, 24).map(({ dt, temp, weather }) =>
        arr.push({
          key: dt,
          datetime: convertDateTimeToHours(new Date(1000 * dt)),
          temp,
          icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
        }),
      );

      return arr;
    }
    visualCrossing?.days?.[0].hours.map(({ datetime, temp, icon }) =>
      arr.push({
        key: datetime,
        datetime: datetime.slice(0, 5),
        temp,
        icon: require(`assets/SVGS/${icon}.svg`),
      }),
    );

    return arr;
  },
);
