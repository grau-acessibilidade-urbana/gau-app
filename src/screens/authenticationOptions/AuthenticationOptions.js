import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
            <View style={styles.container}>
                <Image source={require('../../../assets/imgs/ilustracao-entrada.png')} style={styles.image} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}
                    style={[styles.button, styles.signinButton]}>
                    <Icon name='person' size={40} color='#FFF' />
                    <Text style={styles.signinText}>Entrar com email</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.signinGoogleButton]}
                    onPress={this.signIn}
                    disabled={this.state.isSigninInProgress}>
                    <Image source={require('../../../assets/imgs/google.png')} style={styles.imageGoogle} />
                    <Text style={styles.signinGoogleText}>Entrar com Google</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}
                    styles={[styles.button, styles.signupButton]}>
                    <Text style={styles.signupText}>Ainda não tenho cadastro</Text>
                </TouchableOpacity>
            </View>
        )
    }
}