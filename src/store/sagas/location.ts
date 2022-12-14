import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';

import { PayloadAction } from '@reduxjs/toolkit';

import { requestWeather } from '@store/actions';
import { setGeolocation } from '@store/opencage/opencage.slice';

import { FetchDataType } from '@customTypes/sagas';

import { Geometry, IOpencage, Result } from '@interfaces/IOpencage';

import { openCageApiUrl } from '@constants/apiUrls';

import { fetchData } from '@api/fetchData';

import { setError } from '@store/fetchStatus/fetchStatus.slice';

export function* setOpenCageData(
  payload: ReturnType<typeof requestWeather>,
): Generator<
  CallEffect<IOpencage> | PutEffect<PayloadAction<Result>> | PutEffect<PayloadAction<boolean>>,
  Geometry,
  IOpencage
> {
  try {
    const coordinates = yield call<FetchDataType<IOpencage>>(
      fetchData,
      `${openCageApiUrl}${payload.lat},${payload.lon}&` +
        `key=${process.env.REACT_APP_OPENCAGEDATA_API_KEY}` +
        `&language=en&no_annotations=1&pretty=1`,
    );
    yield put(setGeolocation(coordinates.results[0]));

    return coordinates.results[0].geometry;
  } catch (e) {
    yield put(setError(true));

    return { lat: 53.9006, lng: 27.559 };
  }
}
