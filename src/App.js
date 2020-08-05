import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigator, NavigatorUser } from './Navigator';

class App extends Component {
  render() {
    const { loggedUser } = this.props;
    if (loggedUser) {
      return <NavigatorUser />;
    }
    return <Navigator />;
  }
}

const mapStateToProps = ({ users }) => {
  return {
    loggedUser: users.loggedUser,
  };
};

export default connect(mapStateToProps)(App);
