import { takeLatest, call, put, spawn } from 'redux-saga/effects';
import { fetchData } from '@api/fetchData';
import { setOpenWeatherMap } from '@store/openweahermap/openWeatherMap.slice';
import { IOpenweathermap } from '@interfaces/IOpenweathermap';
import { requestWeather, userLocation } from '@store/sagaActions';
import { IVisualCrossing } from '@interfaces/IVisualCrossing';
import { setVisualCrossing } from '@store/visualCrossing/visualCrossing';
import { IOpencage } from '@interfaces/IOpencage';
import { setGeolocation } from '@store/opencage/opencage.slice';

type FetchDataType<T> = (arg: string) => Promise<T>;

function* setOpenCageData(payload: ReturnType<typeof userLocation>) {
  const coordinates: IOpencage = yield call<FetchDataType<IOpencage>>(
    fetchData,
    `https://api.opencagedata.com/geocode/v1/json?q=${payload.lat},${payload.lon}&key=${process.env.REACT_APP_OPENCAGEDATA_API_KEY}&language=en&no_annotations=1&pretty=1`,
  );
  console.log(coordinates);
  yield put(setGeolocation(coordinates));

  return coordinates;
}

function* setVisualCrossingData(payload: { lat: number; lng: number }) {
  const response: IVisualCrossing = yield call<FetchDataType<IVisualCrossing>>(
    fetchData,
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${payload.lat},${payload.lng}?unitGroup=metric&include=hours&key=LM3PQCN55VMUGTS9ZUS7PV9YU&contentType=json`,
  );
  yield put(setVisualCrossing(response));
}

function* setWeatherMapData(payload: { lat: number; lng: number }) {
  const response: IOpenweathermap = yield call<FetchDataType<IOpenweathermap>>(
    fetchData,
    `https://api.openweathermap.org/data/2.5/onecall?lat=${payload.lat}&lon=${payload.lng}&units=metric&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
  );
  yield put(setOpenWeatherMap(response));
}

function* workerSaga(payload: ReturnType<typeof requestWeather>) {
  const coordinates: IOpencage = yield call(setOpenCageData, payload);
  yield spawn<any>(setVisualCrossingData, coordinates.results[0].geometry);
  yield spawn<any>(setWeatherMapData, coordinates.results[0].geometry);
}

export function* weatherMapWatcher() {
  yield takeLatest('REQUEST_WEATHER', workerSaga);
}

