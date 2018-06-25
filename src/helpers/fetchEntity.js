import { put, call } from "redux-saga/effects";

export default function* fetchEntity(entity, apiFn, action) {
  try {
    yield put(entity.request());
    const response = yield call(apiFn, action.payload);
    yield put(entity.success({ response }));
  } catch (error) {
    yield put(entity.failure({ error }));
  } finally {
    yield put(entity.fulfill());
  }
}
