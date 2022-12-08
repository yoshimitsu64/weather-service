import { createSelector } from 'reselect';

import { setBackgroundImage } from '@helpers/setBackgroundImage';
import {
  selectSelectedService,
  selectOpenWeather,
  selectVisualCrossing,
} from '@store/selectors/storeSelectors';
import { convertDateTimeToHours } from '@helpers/convertDateTimeToHours';
import { Hour } from '@interfaces/IVisualCrossing';

type HourWeather = Pick<Hour, 'datetime' | 'temp' | 'icon'>;
type IHourWeather = HourWeather & {
  key: string | number;
};

export const selectImageSrc = createSelector(
  selectSelectedService,
  selectOpenWeather,
  selectVisualCrossing,
  (service, openWeather, visualCrossing) => {
    if (service === 'OpenWeatherMap') {
      return setBackgroundImage(openWeather!?.daily[0].weather[0].id);
    }
    return setBackgroundImage(visualCrossing!?.days[0].icon);
  },
);

export const selectHourWeather = createSelector(
  selectSelectedService,
  selectOpenWeather,
  selectVisualCrossing,
  (service, openWeather, visualCrossing) => {
    const arr: Array<IHourWeather> = [];
    if (service === 'OpenWeatherMap') {
      openWeather?.hourly.slice(0, 25).map((hour) =>
        arr.push({
          key: hour.dt,
          datetime: convertDateTimeToHours(new Date(1000 * hour.dt)),
          temp: hour.temp,
          icon: `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`,
        }),
      );
    } else {
      visualCrossing?.days[0].hours.map((hour) =>
        arr.push({
          key: hour.datetime,
          datetime: hour.datetime.slice(0, 5),
          temp: hour.temp,
          icon: `${process.env.PUBLIC_URL}/SVGS/${hour.icon}.svg`,
        }),
      );
    }

    return arr;
  },
);

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
      openWeather?.daily.slice(0, 7).map((day) =>
        arr.push({
          key: `${day.dt}-${day.wind_speed}-${day.uvi}`,
          day: day.dt,
          temperature: day.temp.max,
          icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
        }),
      );
    } else {
      visualCrossing?.days.map((day) =>
        arr.push({
          temperature: day.temp,
          day: day.datetimeEpoch,
          icon: `${process.env.PUBLIC_URL}/SVGS/${day.icon}.svg`,
          key: `${day.temp}-${day.moonphase}-${day.description}-${day.solarradiation}`,
        }),
      );
    }

    return arr;
  },
);
