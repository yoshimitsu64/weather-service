import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles } from '@styles/globalStyles';
import App from './App';
import { persistor, store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <App />
      </PersistGate>
    </Provider>
  </>,
);
