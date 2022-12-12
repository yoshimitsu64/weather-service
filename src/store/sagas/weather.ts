import { PayloadAction } from '@reduxjs/toolkit';

import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';

import { setOpenWeather } from '@store/openWeather/openWeather.slice';
import { setVisualCrossing } from '@store/visualCrossing/visualCrossing.slice';

import { IVisualCrossing } from '@interfaces/IVisualCrossing';
import { IOpenweathermap } from '@interfaces/IOpenweathermap';

import { fetchData } from '@api/fetchData';

import { openWeatherMapApiUrl, visualCrossingApiUrl } from '@constants/apiUrls';

import { FetchDataType } from '@appTypes/sagas';

export function* setVisualCrossingData(payload: {
  lat: number;
  lng: number;
}): Generator<
  CallEffect<IVisualCrossing> | PutEffect<PayloadAction<IVisualCrossing>>,
  void,
  IVisualCrossing
> {
  const response = yield call<FetchDataType<IVisualCrossing>>(
    fetchData,
    `${visualCrossingApiUrl}${payload.lat},${payload.lng}/next7days?unitGroup=metric&include=hours&key=${process.env.REACT_APP_VISUALCROSSING_API_KEY}&contentType=json`,
  );
  yield put(setVisualCrossing(response));
}

export function* setOpenWeatherMapData(payload: {
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
