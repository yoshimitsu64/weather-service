import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import accuweatherSlice from '@store/accuweather/accuweather.slice';
import calendarSlice from '@store/calendar/calendar.slice';
import openWeatherMapSlice from '@store/openWeather/openWeather.slice';
import visualCrossingSlice from '@store/visualCrossing/visualCrossing.slice';
import opencageSlice from '@store/opencage/opencage.slice';
import { rootSaga } from '@store/sagas/openweathermap';
import selectedServiceSlice from '@store/selectedService/selectedService.slice';
import {
  openCagePersistConfig,
  visualCrossingPersistConfig,
  accuweatherPersistConfig,
  openWeatherMapPersistConfig,
} from '@store/persistConfig';
import { accuweatherApi } from './accuweather/accuweather.api';

const reducer = combineReducers({
  [accuweatherApi.reducerPath]: accuweatherApi.reducer,
  accuweather: persistReducer(accuweatherPersistConfig, accuweatherSlice),
  calendar: calendarSlice,
  openWeatherMap: persistReducer(openWeatherMapPersistConfig, openWeatherMapSlice),
  visualCrossing: persistReducer(visualCrossingPersistConfig, visualCrossingSlice),
  openCage: persistReducer(openCagePersistConfig, opencageSlice),
  selectedService: selectedServiceSlice,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(accuweatherApi.middleware, sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
