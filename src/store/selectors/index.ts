import { RootState } from '@store/index';
import { createSelector } from 'reselect';
import {
  setOpenWeatherBackgroundImage,
  setVisualCrossingBackgroundImage,
} from '@helpers/setBackgroundImage';
import { convertDate } from '@helpers/convertDate';
import { Hour } from '@interfaces/IVisualCrossing';

const selectSelectedService = (state: RootState) => state.selectedService.service;
const selectOpenWeather = (state: RootState) => state.openWeatherMap.weather;
const selectVisualCrossing = (state: RootState) => state.visualCrossing.weather;

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
      return setOpenWeatherBackgroundImage(openWeather!?.daily[0].weather[0].id);
    } else {
      return setVisualCrossingBackgroundImage(visualCrossing!?.days[0].icon);
    }
  },
);

export const selectHourWeather = createSelector(
  selectSelectedService,
  selectOpenWeather,
  selectVisualCrossing,
  (service, openWeather, visualCrossing) => {
    const arr: Array<IHourWeather> = [];
    if (service === 'OpenWeatherMap') {
      openWeather!?.hourly.slice(0, 25).map((hour, index) => {
        arr.push({
          key: hour.dt,
          datetime: convertDate(new Date(1000 * hour.dt)),
          temp: hour.temp,
          icon: `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`,
        });
      });
    } else {
      visualCrossing!?.days[0].hours.map((hour) => {
        arr.push({
          key: hour.datetime,
          datetime: hour.datetime.slice(0, 5),
          temp: hour.temp,
          icon: `/SVGS/${hour.icon}.svg`,
        });
      });
    }

    return arr;
  },
);

interface IDayWeather {
  temperature: number;
  icon: string;
  key?: string;
}

export const selectDayWeather = createSelector(
  selectSelectedService,
  selectOpenWeather,
  selectVisualCrossing,
  (service, openWeather, visualCrossing) => {
    const arr: Array<IDayWeather> = [];
    if (service === 'OpenWeatherMap') {
      openWeather!?.daily.slice(0, 7).map((day, index) => {
        arr.push({
          key: `${day.dt}-${day.wind_speed}-${day.uvi}`,
          temperature: day.temp.max,
          icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
        });
      });
    } else {
      visualCrossing!?.days.map((hour) => {
        arr.push({
          temperature: hour.temp,
          icon: `/SVGS/${hour.icon}.svg`,
          key: `${hour.temp}-${hour.moonphase}-${hour.description}-${hour.solarradiation}`,
        });
      });
    }

    return arr;
  },
);
