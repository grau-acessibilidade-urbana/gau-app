import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import commonStyle from '../../shared/commonStyle';

export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../../assets/imgs/ilustracao-cadastro.png')}
                    style={styles.image} />

                <Text style={styles.title}>Cadastro</Text>

                <View style={styles.fieldset}>
                    <Text style={styles.label} >Nome Completo</Text>
                    <TextInput style={styles.input} placeholder='Digite seu nome' placeholderTextColor={commonStyle.colors.secondFontColor} />

                    <Text style={styles.label} >Email</Text>
                    <TextInput style={styles.input} placeholder='Digite seu email' placeholderTextColor={commonStyle.colors.secondFontColor} />

                    <Text style={styles.label} >Senha</Text>
                    <TextInput style={styles.input} placeholder='Digite sua senha' placeholderTextColor={commonStyle.colors.secondFontColor} />

                    <Text style={styles.label} >Confirmar Senha</Text>
                    <TextInput style={styles.input} placeholder='Confirme a senha' placeholderTextColor={commonStyle.colors.secondFontColor} />

                    <TouchableOpacity style={styles.signupButton}>
                        <Text style={styles.signupText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}