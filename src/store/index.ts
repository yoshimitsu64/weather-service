import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { accuweatherApi } from './accuweather/accuweather.api';
import storage from 'redux-persist/es/storage';
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
import accuweatherSlice from '@store/accuweather/accuweather.slice';

const accuweatherPersistConfig = {
  key: 'accuweather',
  storage,
};

const reducer = combineReducers({
  [accuweatherApi.reducerPath]: accuweatherApi.reducer,
  accuweather: persistReducer(accuweatherPersistConfig, accuweatherSlice),
});
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(accuweatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

