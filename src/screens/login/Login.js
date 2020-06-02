import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import commonStyle from '../../shared/commonStyle';
export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/imgs/ilustracao-login.png')}
                    style={styles.image} />

                <Text style={styles.title}>Login</Text>

                <View style={styles.fieldset}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu e-mail'
                        placeholderTextColor={commonStyle.colors.secondFontColor} />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite sua senha'
                        placeholderTextColor={commonStyle.colors.secondFontColor}
                        secureTextEntry={true} />

                    <TouchableOpacity style={styles.forgotPassowrdButton}>
                        <Text style={styles.forgotPassowrdText}>Esqueci a senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signinButton}>
                        <Text style={styles.signinText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}