import { RootState } from '@customTypes/store';
import { IVisualCrossing } from '@interfaces/IVisualCrossing';
import { IOpenweathermap } from '@interfaces/IOpenweathermap';
import { Result } from '@interfaces/IOpencage';
import { ISelectedServices } from '@interfaces/ISelectedServices';

const selectSelectedService = (state: RootState): ISelectedServices['service'] =>
  state.selectedService.service!;
const selectOpenWeather = (state: RootState): IOpenweathermap => state.openWeatherMap.weather!;
const selectVisualCrossing = (state: RootState): IVisualCrossing => state.visualCrossing.weather!;
const selectOpenCage = (state: RootState): Result => state.openCage.geolocation!;
const selectCalendar = (state: RootState) => state.calendar.events!;

export {
  selectOpenCage,
  selectVisualCrossing,
  selectOpenWeather,
  selectSelectedService,
  selectCalendar,
};
