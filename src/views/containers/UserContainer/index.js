import React from "react";
import { connect } from "react-redux";

import UserProfile from "../../components/UserProfile";
import { userActions, userSelectors } from "../../../state/user";

const UserContainer = props => {
  const { profile, isFetching, fetchGetProfileRequest, error } = props;

  return (
    <div>
      <div>
        <button onClick={() => fetchGetProfileRequest("dadas", isFetching)}>
          User 1
        </button>
      </div>

      <div>
        <button onClick={() => fetchGetProfileRequest(2, isFetching)}>
          User 2
        </button>
      </div>
      {error && <p>{error}</p>}
      <UserProfile profile={profile} isFetching={isFetching} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    profile: userSelectors.profileNameSelector(state),
    isFetching: state.user.isFetching,
    error: state.user.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGetProfileRequest: (userId, isFetching) => {
      if (!isFetching) {
        dispatch(userActions.fetchGetProfileById(userId));
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
