import { put, call, all, takeEvery } from "redux-saga/effects";

import fetchEntity from "../helpers/fetchEntity";
import * as api from "../api/user";
import { userActions } from "../state/user";

const fetchGetProfile = fetchEntity.bind(
  null,
  userActions.fetchGetProfile,
  api.fetchGetProfile
);

export function* watchUserActions() {
  yield all([takeEvery(userActions.fetchGetProfile.TRIGGER, fetchGetProfile)]);
}
