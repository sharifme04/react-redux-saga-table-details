import { all } from "redux-saga/effects";
import { watchFetchData, watchDeleteData } from "./templatesSaga";

export default function* rootSaga() {
  yield all([watchFetchData(), watchDeleteData()]);
}
