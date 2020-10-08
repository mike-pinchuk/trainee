import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.jsx';
import store from './store/store'
import {Provider} from 'react-redux'
import COMPONENT_W from './wrappedComponent.js';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
      <COMPONENT_W />
  </Provider>
     ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
