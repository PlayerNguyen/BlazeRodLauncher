import { configureStore } from "@reduxjs/toolkit";
import configurationSlice from "./configurationSlice";

const globalStore = configureStore({
  reducer: {
    configuration: configurationSlice,
  },
});
export default globalStore;
