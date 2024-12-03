import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app/app';
import { AuthorizationStatus } from './app/router/router/router';
import { Provider } from 'react-redux';
import {store} from './store';
import HistoryRouter from './componets/history-router/history-router';
import browserHistory from './browser-history';


const authorizationStatus = AuthorizationStatus.Auth;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory} basename={import.meta.env.BASE_URL}>
        <App authorizationStatus= {authorizationStatus}/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
