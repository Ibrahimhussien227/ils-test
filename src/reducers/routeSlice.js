import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  loadingError: false,
  route: null,
};

export const routeSlice = createSlice({
  name: "router",
  initialState,
  reducers: {
    fetchRoute(state) {
      state.loading = true;
      state.loadingError = false;
    },
    fetchRouteSuccess(state, action) {
      state.route = action.payload;
      state.loading = false;
    },
    fetchRouteFailed(state) {
      state.loading = false;
      state.loadingError = true;
    },
  },
});

const routeReducer = routeSlice.reducer;
export default routeReducer;
