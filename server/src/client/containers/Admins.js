import React, { Component } from "react";
import { connect } from "react-redux";
import { adminsFetchAll } from "../actions";
import requireAuth from "../components/hocs/requireAuth";
import { Helmet } from "react-helmet";

class Admins extends Component {
  componentDidMount() {
    this.props.adminsFetchAll();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    let { fetching } = this.props;
    return (
      <div className="center-align" style={{ padding: "1rem" }}>
        <Helmet>
          <title>Admins</title>
        </Helmet>
        <h3>Admin List</h3>
        <p>This thing grabs a private api route.</p>
        {fetching && <p>Loading...</p>}
        {!fetching && <ul>{this.renderAdmins()}</ul>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { admins: state.admins.adminsAll, fetching: state.admins.fetching };
};

function getInitialProps(store) {
  return store.dispatch(adminsFetchAll());
}

export default {
  getInitialProps,
  component: connect(
    mapStateToProps,
    { adminsFetchAll }
  )(requireAuth(Admins))
};
