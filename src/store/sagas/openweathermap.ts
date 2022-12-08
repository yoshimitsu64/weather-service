import {
  takeLatest,
  call,
  put,
  spawn,
  CallEffect,
  PutEffect,
  ForkEffect,
} from 'redux-saga/effects';

import { fetchData } from '@api/fetchData';
import { setOpenWeather } from '@store/openWeather/openWeather.slice';
import { IOpenweathermap } from '@interfaces/IOpenweathermap';
import { IVisualCrossing } from '@interfaces/IVisualCrossing';
import { setVisualCrossing } from '@store/visualCrossing/visualCrossing.slice';
import { IOpencage, Result } from '@interfaces/IOpencage';
import { setGeolocation } from '@store/opencage/opencage.slice';
import { visualCrossingApiUrl, openCageApiUrl, openWeatherMapApiUrl } from '@constants/apiUrls';
import { PayloadAction } from '@reduxjs/toolkit';
import { actionTypes } from '@store/actionTypes';
import { requestWeather } from '@store/actions';

type FetchDataType<T> = (param: string) => Promise<T>;

function* setOpenCageData(
  payload: ReturnType<typeof requestWeather>,
): Generator<CallEffect<IOpencage> | PutEffect<PayloadAction<Result>>, IOpencage, IOpencage> {
  const coordinates = yield call<FetchDataType<IOpencage>>(
    fetchData,
    `${openCageApiUrl}${payload.lat},${payload.lon}&key=${process.env.REACT_APP_OPENCAGEDATA_API_KEY}&language=en&no_annotations=1&pretty=1`,
  );
  yield put(setGeolocation(coordinates.results[0]));

  return coordinates;
}

function* setVisualCrossingData(payload: {
  lat: number;
  lng: number;
}): Generator<
  CallEffect<IVisualCrossing> | PutEffect<PayloadAction<IVisualCrossing>>,
  void,
  IVisualCrossing
> {
  console.log(payload);
  const response = yield call<FetchDataType<IVisualCrossing>>(
    fetchData,
    `${visualCrossingApiUrl}${payload.lat},${payload.lng}/next7days?unitGroup=metric&include=hours&key=${process.env.REACT_APP_VISUALCROSSING_API_KEY}&contentType=json`,
  );
  console.log(response);
  yield put(setVisualCrossing(response));
}

function* setWeatherMapData(payload: {
  lat: number;
  lng: number;
}): Generator<
  CallEffect<IOpenweathermap> | PutEffect<PayloadAction<IOpenweathermap>>,
  void,
  IOpenweathermap
> {
  const response = yield call<FetchDataType<IOpenweathermap>>(
    fetchData,
    `${openWeatherMapApiUrl}${payload.lat}&lon=${payload.lng}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
  );
  yield put(setOpenWeather(response));
}

function* getWeatherWorker(
  payload: ReturnType<typeof requestWeather>,
): Generator<CallEffect<IOpencage> | ForkEffect<void>, void, IOpencage> {
  const coordinates = yield call(setOpenCageData, payload);
  yield spawn(setVisualCrossingData, coordinates.results[0].geometry);
  yield spawn(setWeatherMapData, coordinates.results[0].geometry);
}

export function* getWeatherWatcher(): Generator {
  yield takeLatest(actionTypes.REQUEST_WEATHER, getWeatherWorker);
}

export function* rootSaga(): Generator {
  yield getWeatherWatcher();
}
