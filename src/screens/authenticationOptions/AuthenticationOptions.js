import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin'

export default class AuthenticationOptions extends Component {
    render() {
        return (
            <View>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={console.log('click')}
                    disabled={false} />
            </View>
        )
    }
}