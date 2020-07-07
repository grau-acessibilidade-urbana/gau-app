import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator } from 'react-native';
import styles from './styles';
import commonStyle from '../../shared/commonStyle';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { login } from '../../store/actions/users';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .label('Email')
        .required('Campo obrigatório')
        .email('Email inválido'),
    password: Yup.string()
        .label('Senha')
        .required('Campo obrigatório')
        .min(6, 'Deve ter pelo menos 6 caracteres')
});
class Login extends Component {

    componentDidMount() {
        if (this.props.newUser) {
            ToastAndroid.showWithGravityAndOffset(
                "Cadastro realizado com sucesso.",
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
                25,
                50
            );
        }
    }

    componentDidUpdate() {
        if (this.props.error) {
            ToastAndroid.showWithGravityAndOffset(
                "Email ou senha inválidos.",
                ToastAndroid.SHORT,
                ToastAndroid.TOP,
                25,
                50
            );

            console.error('err' + JSON.stringify(this.props.error))
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header goBack={this.props.navigation.goBack} />
                {this.props.isLoading ? <ActivityIndicator style={styles.activity} size='large' /> :
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../../assets/imgs/ilustracao-login.png')}
                            style={styles.image} />

                        <Text style={styles.title}>Login</Text>

                        <Formik
                            initialValues={
                                {
                                    email: this.props.newUser ? this.props.newUser.email : '',
                                    password: ''
                                }}
                            validationSchema={validationSchema}
                            onSubmit={values => this.props.onSignIn(values)}>
                            {({ handleChange, values, handleSubmit, errors, touched, handleBlur }) => (
                                <View style={styles.fieldset}>
                                    <Text style={styles.label}>Email</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='Digite seu e-mail'
                                        placeholderTextColor={commonStyle.colors.secondFontColor}
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')} />
                                    {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

                                    <Text style={styles.label}>Senha</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder='Digite sua senha'
                                        placeholderTextColor={commonStyle.colors.secondFontColor}
                                        secureTextEntry={true}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')} />
                                    {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

                                    <TouchableOpacity activeOpacity={0.5} style={styles.forgotPassowordButton}>
                                        <Text style={styles.forgotPassowrdText}>Esqueci a senha</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        activeOpacity={0.5} style={styles.signinButton}>
                                        <Text style={styles.signinText}>Entrar</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                    </View>}
            </View>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        newUser: users.newUser,
        isLoading: users.isLoading,
        loggedUser: users.loggedUser,
        error: users.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignIn: user => dispatch(login(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);