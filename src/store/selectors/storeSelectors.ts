import { RootState } from '@store/index';

const selectSelectedService = (state: RootState) => state.selectedService.service!;
const selectOpenWeather = (state: RootState) => state.openWeatherMap.weather!;
const selectVisualCrossing = (state: RootState) => state.visualCrossing.weather!;
const selectOpenCage = (state: RootState) => state.openCage.geolocation!;
const selectAccuWeather = (state: RootState) => state.accuweather.city!;
const selectCalendar = (state: RootState) => state.calendar.events!;

export {
  selectOpenCage,
  selectVisualCrossing,
  selectOpenWeather,
  selectSelectedService,
  selectAccuWeather,
  selectCalendar,
};
