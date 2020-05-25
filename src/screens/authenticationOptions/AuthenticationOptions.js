import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin'
import styles from './styles'

export default class AuthenticationOptions extends Component {

    state = {
        userInfo: null,
        loggedIn: false,
        isSigninInProgress: false,
    }

    componentDidMount() {
        GoogleSignin.configure({
            scopes: [],
            webClientId: '274535529742-jor0pqgm5390s1ef96a3kism5jkv4khr.apps.googleusercontent.com',
            offlineAccess: false,
            hostedDomain: '',
            loginHint: '',
            forceConsentPrompt: true,
            accountName: ''
        })
    }

    signInSilently = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                this.setState({ loggedIn: false })
            } else {
                console.log(error);
            }
        }
    }

    signIn = async () => {
        try {
            this.setState({ isSigninInProgress: true })
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo: ' + JSON.stringify(userInfo));
            this.setState({ userInfo: userInfo, loggedIn: true });
            this.setState({ isSigninInProgress: false });
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    }

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ user: null, loggedIn: false });
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    }

    render() {
        return (
            <View>
                <GoogleSigninButton
                    style={styles.button}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={this.signIn}
                    disabled={this.state.isSigninInProgress} />
            </View>
        )
    }
}