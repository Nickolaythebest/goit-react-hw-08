import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "modern-normalize";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
        <App />
        </BrowserRouter>
        </PersistGate>
  </StrictMode>
  </Provider>
)
