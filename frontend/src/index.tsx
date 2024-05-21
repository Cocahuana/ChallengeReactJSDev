import "babel-polyfill";
import "react-app-polyfill/ie11";
import React from "react";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { render } from 'react-dom'; // <- This is the correct import // statement for React version 17
// const root = //ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root'); // <- This is the //correct method call for React version 17
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, root);
serviceWorker.unregister();
