import React, { Component } from 'react';
import { Image, Text, ToastAndroid, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GoogleSignin } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { loginGoogle } from '../../store/actions/users';
import styles from './styles';

class AuthenticationOptions extends Component {
  state = {
    isSigninInProgress: false,
  };

  componentDidMount() {
    GoogleSignin.configure({
      scopes: [],
      webClientId:
        '274535529742-jor0pqgm5390s1ef96a3kism5jkv4khr.apps.googleusercontent.com',
      offlineAccess: false,
      hostedDomain: '',
      loginHint: '',
      forceConsentPrompt: true,
      accountName: '',
    });
  }

  componentDidUpdate() {
    if (this.props.error) {
      ToastAndroid.showWithGravityAndOffset(
        'Não foi autenticar com o google.',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50
      );

      console.error('err' + JSON.stringify(this.props.error));
    }
  }

  signInSilently = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.props.onSignin(userInfo.idToken);
    } catch (error) {
      console.error(error);
    }
  };

  signIn = async () => {
    try {
      this.setState({ isSigninInProgress: true });
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.props.onSignin(userInfo.idToken);
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/imgs/logo.png')}
          style={styles.image}
        />
        <Text style={styles.appTitle}>G.A.U</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={[styles.button, styles.signinButton]}
        >
          <Icon name="person" size={40} color="#FFF" />
          <Text style={styles.signinText}>Entrar com email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.signinGoogleButton]}
          onPress={this.signIn}
          disabled={this.state.isSigninInProgress}
        >
          <Image
            source={require('../../../assets/imgs/google.png')}
            style={styles.imageGoogle}
          />
          <Text style={styles.signinGoogleText}>Entrar com Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignUp')}
          styles={[styles.button, styles.signupButton]}
        >
          <Text style={styles.signupText}>Ainda não tenho cadastro</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    isLoading: users.isLoading,
    loggedUser: users.loggedUser,
    error: users.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignin: (idToken) => dispatch(loginGoogle(idToken)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationOptions);
