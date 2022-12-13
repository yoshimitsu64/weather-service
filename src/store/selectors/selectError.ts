import { RootState } from '@customTypes/store';

export const selectError = (state: RootState) => {
  const openCageError = state.openCage.error;
  const visualCrossing = state.visualCrossing.error;
  const openWeatherMap = state.openWeatherMap.error;

  return [openWeatherMap, visualCrossing, openCageError].find((error) => error !== null);
};
