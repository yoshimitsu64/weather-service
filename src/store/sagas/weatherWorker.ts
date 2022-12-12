import { call, spawn, CallEffect, ForkEffect, takeLatest } from 'redux-saga/effects';

import { actionTypes } from '@store/actionTypes';
import { requestWeather } from '@store/actions';

import { Geometry } from '@interfaces/IOpencage';
import { setOpenCageData } from '@store/sagas/location';
import { setOpenWeatherMapData, setVisualCrossingData } from '@store/sagas/weather';

export function* getWeatherLocationWorker(
  payload: ReturnType<typeof requestWeather>,
): Generator<CallEffect<Geometry> | ForkEffect<void>, void, Geometry> {
  const coordinates = yield call(setOpenCageData, payload);

  yield spawn(setVisualCrossingData, coordinates);
  yield spawn(setOpenWeatherMapData, coordinates);
}

export function* getWeatherWatcher(): Generator {
  yield takeLatest(actionTypes.REQUEST_WEATHER, getWeatherLocationWorker);
}
