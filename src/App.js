import React from 'react';

import Routes from './routes';

import {store, persistor} from './store';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
