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
import storage from 'redux-persist/es/storage';
import accuweatherSlice from '@store/accuweather/accuweather.slice';
import calendarSlice from '@store/calendar/calendar.slice';
import createSagaMiddleware from 'redux-saga';
import openWeatherMapSlice from '@store/openweahermap/openWeatherMap.slice';
import visualCrossingSlice from "@store/visualCrossing/visualCrossing";
import { accuweatherApi } from './accuweather/accuweather.api';
import {weatherMapWatcher} from "@store/sagas/openweathermap";

const accuweatherPersistConfig = {
  key: 'accuweather',
  storage,
};

const reducer = combineReducers({
  [accuweatherApi.reducerPath]: accuweatherApi.reducer,
  accuweather: persistReducer(accuweatherPersistConfig, accuweatherSlice),
  calendar: calendarSlice,
  openWeatherMap: openWeatherMapSlice,
  visualCrossing: visualCrossingSlice
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
sagaMiddleware.run(weatherMapWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

