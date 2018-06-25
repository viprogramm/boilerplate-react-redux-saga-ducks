import React from "react";
import { connect } from "react-redux";
import { loadUsersList } from "../actions";
import getDisplayName from "../helpers/getDisplayName";

export default function withUsers(Component) {
  class WithUsers extends React.Component {
    componentDidMount() {
      this.props.loadUsersList();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  WithUsers.displayName = `withUsers(${getDisplayName(Component)})`;

  return connect(state => ({ users: state.users }), { loadUsersList })(
    WithUsers
  );
}
