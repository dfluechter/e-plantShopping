import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Redux: Provider & Store importieren
import { Provider } from 'react-redux';
import store from './store'; // Stelle sicher, dass der Pfad korrekt ist

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
