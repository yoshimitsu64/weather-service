import { takeLatest, call, put, spawn, fork, all, join } from 'redux-saga/effects';
import { fetchData } from '@api/fetchData';
import { setOpenWeatherMap } from '@store/openweahermap/openWeatherMap.slice';
import { IOpenweathermap } from '@interfaces/IOpenweathermap';
import { requestWeather } from '@store/sagaActions';
import { IVisualCrossing } from '@interfaces/IVisualCrossing';
import { setVisualCrossing } from '@store/visualCrossing/visualCrossing';

type FetchDataType<T> = (arg: string) => Promise<T>;

function* visualCrossingWorker(payload: ReturnType<typeof requestWeather>) {
  const response: IVisualCrossing = yield call<FetchDataType<IVisualCrossing>>(
    fetchData,
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${payload.lat},${payload.lon}?unitGroup=metric&key=LM3PQCN55VMUGTS9ZUS7PV9YU&contentType=json`,
  );
  yield put(setVisualCrossing(response));
}

function* weatherMapWorker(payload: ReturnType<typeof requestWeather>) {
  const response: IOpenweathermap = yield call<FetchDataType<IOpenweathermap>>(
    fetchData,
    `https://api.openweathermap.org/data/2.5/onecall?lat=${payload.lat}&lon=${payload.lon}&units=metric&exclude=hourly,minutely&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
  );
  yield put(setOpenWeatherMap(response));
}

function* fetchWeather(payload: ReturnType<typeof requestWeather>): Generator {
  yield all([spawn<any>(visualCrossingWorker, payload), spawn<any>(weatherMapWorker, payload)]);
}

export function* weatherMapWatcher(): Generator {
  yield takeLatest('REQUEST_WEATHER', fetchWeather);
}


