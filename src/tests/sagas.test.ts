import { all, call, join, put, spawn, takeLatest } from 'redux-saga/effects';

import { expect, jest } from '@jest/globals';

import { getWeatherWatcher, getWeatherLocationWorker } from '@store/sagas/weatherWorker';
import { setVisualCrossingData, setOpenWeatherMapData } from '@store/sagas/weather';
import { setOpenCageData } from '@store/sagas/location';
import { actionTypes } from '@store/actionTypes';
import { setVisualCrossing } from '@store/visualCrossing/visualCrossing.slice';
import { setOpenWeather } from '@store/openWeather/openWeather.slice';
import { setGeolocation, setIsLoading } from '@store/opencage/opencage.slice';

import { fetchData } from '@api/fetchData';

import { openCageApiUrl, openWeatherMapApiUrl, visualCrossingApiUrl } from '@constants/apiUrls';

import { IOpencage } from '@interfaces/IOpencage';
import { IVisualCrossing } from '@interfaces/IVisualCrossing';
import { IOpenweathermap } from '@interfaces/IOpenweathermap';

import { createMockTask } from '@redux-saga/testing-utils';

import { openCageDataPayload } from './testsPayloads/openCageData';

import { payload } from './testsPayloads/coordinatesPayload';

require('dotenv').config({
  path: '.env.local',
});

describe('Sagas test', () => {
  const genObject = getWeatherWatcher();

  it('Should wait for every requestWeather action and call getWeatherWorker ', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(actionTypes.REQUEST_WEATHER, getWeatherLocationWorker),
    );
  });

  it('Should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });

  it('Should call getWeatherWorker', () => {
    const worker = getWeatherLocationWorker(payload);

    expect(worker.next().value).toEqual(put(setIsLoading(true)));

    expect(worker.next(payload).value).toEqual(call(setOpenCageData, payload));

    expect(
      worker.next({
        lat: payload.lat,
        lng: payload.lon,
      }).value,
    ).toEqual(
      all([
        spawn(setVisualCrossingData, {
          lat: payload.lat,
          lng: payload.lon,
        }),
        spawn(setOpenWeatherMapData, { lat: payload.lat, lng: payload.lon }),
      ]),
    );

    const mockedTask = createMockTask();

    expect(worker.next(mockedTask).value).toEqual(join(mockedTask));

    expect(worker.next().value).toEqual(put(setIsLoading(false)));

    expect(worker.next().done).toBeTruthy();
  });

  it('Should make api request from setOpenCageData saga', async () => {
    const worker = setOpenCageData(payload);
    const openCageDataUrl = `${openCageApiUrl}${payload.lat},${payload.lon}&key=${process.env.REACT_APP_OPENCAGEDATA_API_KEY}&language=en&no_annotations=1&pretty=1`;

    const result = await fetchData<IOpencage>(openCageDataUrl);

    expect(worker.next(result).value).toEqual(call(fetchData, openCageDataUrl));

    expect(worker.next(result).value).toEqual(put(setGeolocation(result.results[0])));

    const rez = jest.fn((res: IOpencage) => res.results[0]);

    rez(result);

    expect(rez).toHaveReturnedWith(openCageDataPayload);

    expect(worker.next().done).toBeTruthy();
  });

  it('Should make api request from setVisualCrossingData saga', async () => {
    const worker = setVisualCrossingData({ lat: payload.lat, lng: payload.lon });
    const visualCrossingUrl = `${visualCrossingApiUrl}${payload.lat},${payload.lon}/next7days?unitGroup=metric&include=hours&key=${process.env.REACT_APP_VISUALCROSSING_API_KEY}&contentType=json`;

    const result = await fetchData<IVisualCrossing>(visualCrossingUrl);

    expect(worker.next(result).value).toEqual(call(fetchData, visualCrossingUrl));

    expect(worker.next(result).value).toEqual(put(setVisualCrossing(result)));

    expect(worker.next().done).toBeTruthy();
  });

  it('Should make api request from setWeatherMapData saga', async () => {
    const worker = setOpenWeatherMapData({ lat: payload.lat, lng: payload.lon });
    const openWeatherMapUrl = `${openWeatherMapApiUrl}${payload.lat}&lon=${payload.lon}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

    jest.setTimeout(10000);

    const result = await fetchData<IOpenweathermap>(openWeatherMapUrl);

    expect(worker.next(result).value).toEqual(call(fetchData, openWeatherMapUrl));

    expect(worker.next(result).value).toEqual(put(setOpenWeather(result)));

    expect(worker.next().done).toBeTruthy();
  });
});
