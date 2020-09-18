import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import App from './App';

ReactDOM.render(
  <>
    <App />
    <ReactQueryDevtools initialIsOpen />
  </>,
  document.getElementById('root')
);

/**
 * In Parcel, Hot Module Replacement(HMR) is disabled by default.
 * The following lines enable HMR.
 * If you would like to disable it comment/remove the lines below,
 * however disabling this will result in full page reloads
 * with every change and the application state will reset every time.
 */
if (module.hot) {
  module.hot.accept();
}
