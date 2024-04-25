import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import './firebase/firebase.js';
import { App } from './App.jsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/LearnLingo">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer />
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
