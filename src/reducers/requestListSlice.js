import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  loadingError: false,
  requests: [],
};

export const requestListSlice = createSlice({
  name: "requestList",
  initialState,
  reducers: {
    fetchRequestList(state, action) {
      state.loading = true;
      state.loadingError = false;
    },
    fetchRequestListSuccess(state, action) {
      state.requests = action.payload;
      state.loading = false;
    },
    fetchRequestListFailed(state, action) {
      state.loading = false;
      state.loadingError = true;
    },
  },
});

const serviceListReducer = requestListSlice.reducer;
export default serviceListReducer;
