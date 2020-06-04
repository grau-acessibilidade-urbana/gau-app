import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import commonStyle from '../../shared/commonStyle';
import { addUser } from '../../store/actions/users';
import { connect } from 'http2';

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/imgs/ilustracao-cadastro.png')}
                    style={styles.image} />

                <Text style={styles.title}>Cadastro</Text>

                <View style={styles.fieldset}>
                    <Text style={styles.label} >Nome Completo</Text>
                    <TextInput style={styles.input} placeholder='Digite seu nome'
                        placeholderTextColor={commonStyle.colors.secondFontColor} value={this.state.name}
                        onChangeText={name => this.setState({ name })} />

                    <Text style={styles.label} >Email</Text>
                    <TextInput style={styles.input} placeholder='Digite seu email'
                        placeholderTextColor={commonStyle.colors.secondFontColor} value={this.state.email}
                        onChangeText={email => this.setState({ email })} />

                    <Text style={styles.label} >Senha</Text>
                    <TextInput style={styles.input} placeholder='Digite sua senha'
                        placeholderTextColor={commonStyle.colors.secondFontColor} value={this.state.password}
                        onChangeText={password => this.setState({ password })} />

                    <Text style={styles.label} >Confirmar Senha</Text>
                    <TextInput style={styles.input} placeholder='Confirme a senha'
                        placeholderTextColor={commonStyle.colors.secondFontColor} value={this.state.confirmPassword}
                        onChangeText={confirmPassword => this.setState({ confirmPassword })} />

                    <TouchableOpacity
                        onPress={() => { this.props.onSignup(this.state) }}
                        activeOpacity={0.5} style={styles.signupButton}>
                        <Text style={styles.signupText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignup: user => dispatch(addUser(user))
    };
}

export default connect(null, mapDispatchToProps)(SignUp);