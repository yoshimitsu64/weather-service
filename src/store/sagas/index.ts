import { getWeatherWatcher } from '@store/sagas/weatherWorker';

export function* rootSaga(): Generator {
  yield getWeatherWatcher();
}
