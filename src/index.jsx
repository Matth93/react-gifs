import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import '../assets/stylesheets/application.scss';

import gifsReducer from './reducers/gifs_reducer.js';
import selectedGifReducer from './reducers/selected_gif_reducer.js';

import App from './components/app';

const reducers = combineReducers({
  gifs: gifsReducer,
  selectedGif: selectedGifReducer
});

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
