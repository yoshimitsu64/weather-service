import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';

import { PayloadAction } from '@reduxjs/toolkit';

import { requestWeather } from '@store/actions';
import { setGeolocation } from '@store/opencage/opencage.slice';

import { FetchDataType } from '@appTypes/sagas';

import { Geometry, IOpencage, Result } from '@interfaces/IOpencage';

import { openCageApiUrl } from '@constants/apiUrls';

import { fetchData } from '@api/fetchData';

export function* setOpenCageData(
  payload: ReturnType<typeof requestWeather>,
): Generator<CallEffect<IOpencage> | PutEffect<PayloadAction<Result>>, Geometry, IOpencage> {
  const coordinates = yield call<FetchDataType<IOpencage>>(
    fetchData,
    `${openCageApiUrl}${payload.lat},${payload.lon}&key=${process.env.REACT_APP_OPENCAGEDATA_API_KEY}&language=en&no_annotations=1&pretty=1`,
  );
  yield put(setGeolocation(coordinates.results[0]));

  return coordinates.results[0].geometry;
}
