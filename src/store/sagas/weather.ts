import { PayloadAction } from '@reduxjs/toolkit';

import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';

import { setOpenWeather } from '@store/openWeather/openWeather.slice';
import { setVisualCrossing } from '@store/visualCrossing/visualCrossing.slice';
import { setError } from '@store/fetchStatus/fetchStatus.slice';

import { IVisualCrossing } from '@interfaces/IVisualCrossing';
import { IOpenweathermap } from '@interfaces/IOpenweathermap';

import { fetchData } from '@api/fetchData';

import { openWeatherMapApiUrl, visualCrossingApiUrl } from '@constants/apiUrls';

import { FetchDataType } from '@customTypes/sagas';

export function* setVisualCrossingData(payload: {
  lat: number;
  lng: number;
}): Generator<
  CallEffect<IVisualCrossing> | PutEffect<PayloadAction<IVisualCrossing> | PayloadAction<boolean>>,
  void,
  IVisualCrossing
> {
  try {
    const response = yield call<FetchDataType<IVisualCrossing>>(
      fetchData,
      `${visualCrossingApiUrl}${payload.lat},${payload.lng}/` +
        `next7days?unitGroup=metric&include=hours&` +
        `key=${process.env.REACT_APP_VISUALCROSSING_API_KEY}&contentType=json`,
    );
    yield put(setVisualCrossing(response));
  } catch (e) {
    put(setError(true));
  }
}

export function* setOpenWeatherMapData(payload: {
  lat: number;
  lng: number;
}): Generator<
  | CallEffect<IOpenweathermap | Error>
  | PutEffect<PayloadAction<IOpenweathermap> | PayloadAction<boolean>>,
  void,
  IOpenweathermap
> {
  try {
    const response = yield call<FetchDataType<IOpenweathermap | Error>>(
      fetchData,
      `${openWeatherMapApiUrl}${payload.lat}&lon=${payload.lng}` +
        `&units=metric&exclude=minutely&` +
        `appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
    );
    yield put(setOpenWeather(response));
  } catch (e) {
    put(setError(true));
  }
}
