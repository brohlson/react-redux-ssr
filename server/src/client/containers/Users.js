import React, { Component } from "react";
import { connect } from "react-redux";
import { usersFetchAll } from "../actions";
import { Helmet } from "react-helmet";

class Users extends Component {
  componentDidMount() {
    this.props.usersFetchAll();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    let { fetching } = this.props;
    return (
      <div className="center-align" style={{ padding: "1rem" }}>
        <Helmet>
          <title>Users</title>
        </Helmet>
        <h3>User List</h3>
        <p>This thing grabs a public api route.</p>
        {fetching && <p>Loading...</p>}
        {!fetching && <ul>{this.renderUsers()}</ul>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users.usersAll, fetching: state.users.fetching };
};

function getInitialProps(store) {
  return store.dispatch(usersFetchAll());
}

export default {
  getInitialProps,
  component: connect(
    mapStateToProps,
    { usersFetchAll }
  )(Users)
};
