import { PayloadAction } from '@reduxjs/toolkit';

import {
  call,
  CallEffect,
  takeLatest,
  put,
  PutEffect,
  ForkEffect,
  all,
  AllEffect,
  join,
  JoinEffect,
  spawn,
  select,
  SelectEffect,
} from 'redux-saga/effects';

import { actionTypes } from '@store/actionTypes';
import { requestWeather } from '@store/actions';
import { setOpenCageData } from '@store/sagas/location';
import { setOpenWeatherMapData, setVisualCrossingData } from '@store/sagas/weather';
import { setIsLoading } from '@store/opencage/opencage.slice';

import { Geometry } from '@interfaces/IOpencage';
import { selectVisualCrossing } from '@store/selectors';
import { IVisualCrossing } from '@interfaces/IVisualCrossing';

export function* getWeatherLocationWorker(
  payload: ReturnType<typeof requestWeather>,
): Generator<
  | CallEffect<Geometry>
  | AllEffect<ForkEffect<void>>
  | PutEffect<PayloadAction<boolean>>
  | SelectEffect
  | JoinEffect,
  void,
  Geometry | any
> {
  yield put(setIsLoading(true));

  const coordinates = yield call(setOpenCageData, payload);

  const data = yield all([
    spawn(setVisualCrossingData, coordinates),
    spawn(setOpenWeatherMapData, coordinates),
  ]);

  yield join(data);

  yield put(setIsLoading(false));
}

export function* getWeatherWatcher(): Generator {
  yield takeLatest(actionTypes.REQUEST_WEATHER, getWeatherLocationWorker);
}
