import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

/* This code is creating a root element using `ReactDOM.createRoot()` and rendering the `<App />`
component inside it. */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

