import api from "./api";

export function fetchGetProfile({ id }) {
  const userProfileUrl = `users/${id}`;
  return api.get(userProfileUrl);
}
