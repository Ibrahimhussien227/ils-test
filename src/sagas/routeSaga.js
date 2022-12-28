import { call, put, takeLatest } from "redux-saga/effects";

import routeApi from "../api/routeApi";
import { routeActions } from "../actions/routeAction";

function* fetchRoute(action) {
  try {
    const response = yield call(routeApi.getRoute, action.payload);
    yield put(routeActions.fetchRouteSuccess(response));
  } catch (error) {
    yield put(routeActions.fetchRouteFailed(error));
  }
}

export default function* routeSaga() {
  yield takeLatest(routeActions.fetchRoute.type, fetchRoute);
}
