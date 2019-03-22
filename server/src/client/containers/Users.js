import React, { Component } from "react";
import { connect } from "react-redux";
import { usersFetchAll } from "../actions";
import { Link } from "react-router-dom";

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
      <div>
        <h3>User List</h3>
        {fetching && <p>Loading...</p>}
        {!fetching && <ul>{this.renderUsers()}</ul>}
        <Link to="/">Back Home</Link>
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
