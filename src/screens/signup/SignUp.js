import React, { Component, Fragment } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import commonStyle from '../../shared/commonStyle';
import { addUser } from '../../store/actions/users';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .label('Nome')
        .required('Campo obrigatório'),
    email: Yup.string()
        .label('Email')
        .required('Campo obrigatório')
        .email('Email inválido'),
    password: Yup.string()
        .label('Senha')
        .required('Campo obrigatório')
        .min(6, 'Deve ter pelo menos 6 caracteres')
});
class SignUp extends Component {

    state = {
        confirmPassword: '',
    }

    onSubmit = user => {
        this.props.onSignup(user);
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
                <Image
                    source={require('../../../assets/imgs/ilustracao-cadastro.png')}
                    style={styles.image} />

                <Text style={styles.title}>Cadastro</Text>

                <Formik
                    initialValues={{ ...this.state }}
                    validationSchema={validationSchema}
                    onSubmit={values => this.onSubmit(values)}>
                    {({ handleChange, values, handleSubmit, errors }) => (
                        <View style={styles.fieldset}>
                            <Text style={styles.label} >Nome Completo</Text>
                            <TextInput style={styles.input} placeholder='Digite seu nome'
                                placeholderTextColor={commonStyle.colors.secondFontColor} value={values.name}
                                onChangeText={handleChange('name')} />
                            {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}

                            <Text style={styles.label} >Email</Text>
                            <TextInput style={styles.input} placeholder='Digite seu email'
                                placeholderTextColor={commonStyle.colors.secondFontColor} value={values.email}
                                onChangeText={handleChange('email')} />
                            {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

                            <Text style={styles.label} >Senha</Text>
                            <TextInput style={styles.input} placeholder='Digite sua senha' secureTextEntry={true}
                                placeholderTextColor={commonStyle.colors.secondFontColor} value={values.password}
                                onChangeText={handleChange('password')} />
                            {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

                            <Text style={styles.label} >Confirmar Senha</Text>
                            <TextInput style={styles.input} placeholder='Confirme a senha' secureTextEntry={true}
                                placeholderTextColor={commonStyle.colors.secondFontColor} value={this.state.confirmPassword}
                                onChangeText={(confirmPassword) => this.setState({ confirmPassword })} />
                            {values.password !== this.state.confirmPassword && <Text style={{ color: 'red' }}>Senhas não correspondem</Text>}

                            <TouchableOpacity
                                onPress={handleSubmit}
                                activeOpacity={0.5} style={styles.signupButton}>
                                <Text style={styles.signupText}>Cadastrar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignup: user => dispatch(addUser(user))
    };
}

export default connect(null, mapDispatchToProps)(SignUp);