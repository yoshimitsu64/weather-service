import { takeEvery, call } from 'redux-saga/effects';
import { fetchCity } from '@api/fetchCity';
import { getCoordinates } from '@helpers/getCoordinates';

function* cityWorker() {
  const coors:GeolocationPosition = yield call(getCoordinates);
  const city = fetchCity(coors);
}

function* cityWatcher() {
  yield takeEvery('SET_CITY', cityWorker);
}

function* rootSaga() {
  yield cityWatcher();
}
