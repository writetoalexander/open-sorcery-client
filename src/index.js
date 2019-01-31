import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from './store/store.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
	document.getElementById("root")
);
registerServiceWorker();

