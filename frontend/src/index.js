import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { expenses } from './services/reducers/expenses';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { reducer } from './services/reducers/reducer-rx';
import { epics } from './services/epics/epic';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const epicMiddleware = createEpicMiddleware();

// const enhancer = composeEnhancers(applyMiddleware(thunk));
const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));

// const store = createStore(expenses, enhancer);
const store = createStore(reducer, enhancer);
epicMiddleware.run(epics);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
