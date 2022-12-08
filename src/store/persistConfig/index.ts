import storage from 'redux-persist/es/storage';

const accuweatherPersistConfig = {
  key: 'accuweather',
  storage,
};

const openCagePersistConfig = {
  key: 'openCage',
  storage,
};

const openWeatherMapPersistConfig = {
  key: 'openWeatherMap',
  storage,
};

const visualCrossingPersistConfig = {
  key: 'visualCrossing',
  storage,
};

export {
  visualCrossingPersistConfig,
  accuweatherPersistConfig,
  openWeatherMapPersistConfig,
  openCagePersistConfig,
};
