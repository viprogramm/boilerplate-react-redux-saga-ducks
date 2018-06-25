import { fetchGetProfile } from "./actions";

const initState = {
  profile: {},
  isFetching: false,
  error: false
};

export default function user(state = initState, action) {
  switch (action.type) {
    case fetchGetProfile.TRIGGER: {
      return {
        ...state,
        isFetching: true,
        error: false
      };
    }
    case fetchGetProfile.SUCCESS: {
      return {
        ...state,
        profile: action.payload.response
      };
    }
    case fetchGetProfile.FAILURE: {
      return {
        ...state,
        error: action.payload.error.message
      };
    }
    case fetchGetProfile.FULFILL: {
      return {
        ...state,
        isFetching: false
      };
    }
    default:
      return state;
  }
}
