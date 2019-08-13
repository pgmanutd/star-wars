import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import 'bootstrap/dist/css/bootstrap.css';

import {
  LOCAL_STORAGE_KEYS,
  getKeyFromLocalStorage,
} from 'shared/utils/localStorageUtils';

import App from 'features/App';

import { unregister as unregisterServiceWorker } from './serviceWorker';

import './index.css';

const client = new ApolloClient({
  uri: '/api',
  request: operation => {
    const token = getKeyFromLocalStorage(LOCAL_STORAGE_KEYS.token);

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

unregisterServiceWorker();
