import React, { Component } from 'react';
import { Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import styles from './style';
import { connect } from 'react-redux';

class Profile extends Component {

    state ={
        name: 'Maria Joaquina',
        email: 'mariajoaquina@hotmail.com',
        photoUser: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        rating: 28,
    }

    onNavigate = (route) => {
        this.props.navigation.navigate(route);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header goBack={this.props.navigation.goBack}/>
                <View style={styles.contantUser}>
                    <View style={styles.photoContainer}>
                        <Image style={styles.photoUser} source={{uri: this.state.photoUser}}/>
                        <TouchableOpacity style={styles.edit} activeOpacity={0.7}>
                            <Icon name="create" size={20} color='#fff'/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{this.props.loggedUser.name}</Text>
                    <Text style={styles.email}>{this.props.loggedUser.email}</Text>
                </View>

                <View style={styles.containerForm}>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Nome completo</Text>
                        <TextInput style={styles.input} placeholder="Digite seu nome" editable={false}/>
                    </View>

                    <View style={styles.containerEditPassword}>
                        <View style={[styles.containerInput, styles.containerInputPassword]}>
                        <Text style={styles.label}>Senha atual</Text>
                        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} editable={false}/>
                        </View>
                        <TouchableWithoutFeedback>
                            <Text style={styles.editPassword}>Editar dados</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    <View>
                        <View style={styles.containerInput}>
                        <Text style={styles.label}>Nova senha</Text>
                        <TextInput style={styles.input} placeholder="Digite uma senha"/>
                        </View>

                        <View style={styles.containerInput}>
                        <Text style={styles.label}>Confirmar senha</Text>
                        <TextInput style={styles.input} placeholder="Digite a senha novamente"/>
                        </View>
                    </View>

                    <View style={styles.containerBtn}>
                        <TouchableOpacity onPress={this.props.onUpdateUser} style={styles.btnSave} activeOpacity={0.7}>
                        <Text style={styles.txtBtnSave}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnCancel} activeOpacity={0.7}>
                            <Text style={styles.txtBtnCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        loggedUser: users.loggedUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);