import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import PluralsightApp from './components/PluralsightApp';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <PluralsightApp />
  </Provider>
  , document.getElementById('app')
);