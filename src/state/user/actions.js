import { createRoutine } from "redux-saga-routines";
export const fetchGetProfile = createRoutine("user/FETCH_GET_PROFILE");

export function fetchGetProfileById(id) {
  return fetchGetProfile.trigger({ id });
}

export function fetchGetProfileSuccess(profile) {
  return fetchGetProfile.success({ profile });
}
