/**
 * This is an index application for electron.
 */
import { configureStore } from "@reduxjs/toolkit";
import reactDom from "react-dom";
const { App } = require("./App");
import { Provider } from "react-redux";
import globalStore from "./store";
import "./index.css";

const app = document.getElementById("app");
reactDom.render(
  <Provider store={globalStore}>
    <App />
  </Provider>,
  app
);
