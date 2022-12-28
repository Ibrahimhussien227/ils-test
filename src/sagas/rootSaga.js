import { all } from "redux-saga/effects";
import routeSaga from "./routeSaga";
import requstListSaga from "./requestListSaga";

export default function* rootSaga() {
  yield all([routeSaga(), requstListSaga()]);
}
