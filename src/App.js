import React, { Component } from 'react';
import { Navigator, NavigatorUser } from './Navigator';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        if (this.props.loggedUser) {
            return (<NavigatorUser />);
        } else {
            return (<Navigator />);
        }
    }
}

const mapStateToProps = ({ users }) => {
    return {
        loggedUser: users.loggedUser
    }
}

export default connect(mapStateToProps)(App);