import { createSlice } from "@reduxjs/toolkit";

export const configurationSlice = createSlice({
  name: "configuration",
  initialState: {
    configuration: {},
    javaVersion: window.api.getJavaVersion(),
  },
  reducers: {
    setConfiguration(state, action) {
      state.configuration = action.payload;
    },
    setJavaVersion(state, action) {
      state.javaVersion = action.payload;
    },
  },
});

export const { setJavaVersion, setConfiguration } = configurationSlice.actions;

export default configurationSlice.reducer;
