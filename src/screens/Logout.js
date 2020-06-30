import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../store/actions/users';

class Logout extends Component {

    componentDidMount() {
        this.props.navigation.navigate('About');
        this.props.onSignout();
    }

    render() {
        return (
            <View />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignout: () => dispatch(logout())
    };
}

export default connect(null, mapDispatchToProps)(Logout);