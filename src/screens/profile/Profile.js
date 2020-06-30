import React, { Component } from 'react';
import { Image, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import styles from './style';
import { connect } from 'react-redux';


  
class Profile extends Component {

    state = {
        isOpen: false,
        photoUser: null,
    }

    pickImage = () => {

        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 100,
            maxWidth: 100
        }, res => {
            this.setState({ photoUser: "data:image/jpeg;base64," + res.data })
            console.log(this.state.photoUser)
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Header goBack={this.props.navigation.goBack}/>
                <View style={styles.contantUser}>
                    <View style={styles.photoContainer}>
                        <Image style={styles.photoUser} source={{uri: this.state.photoUser}}/>
                        <TouchableOpacity style={styles.edit} activeOpacity={0.7} onPress={this.pickImage}>
                            <Icon name="create" size={20} color='#fff'/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{this.props.loggedUser.name}</Text>
                    <Text style={styles.email}>{this.props.loggedUser.email}</Text>
                </View>

                <View style={styles.containerForm}>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Nome completo</Text>
                        <TextInput style={[styles.input, !this.state.isOpen ? styles.inputDisabled : ""]} placeholder="Digite seu nome" editable={this.state.isOpen ? true : false }
                        value={this.props.loggedUser.name}/>
                    </View>

                    <View style={styles.containerEditPassword}>
                        <View style={[styles.containerInput, styles.containerInputPassword]}>
                        <Text style={styles.label}>Senha atual</Text>
                        <TextInput style={[styles.input, !this.state.isOpen ? styles.inputDisabled : ""]} placeholder="Digite sua senha" secureTextEntry={true} editable={this.state.isOpen ? true : false }/>
                        </View>
                        <TouchableWithoutFeedback onPress={()=>{this.setState({isOpen: !this.state.isOpen});}}>
                            <Text style={styles.editPassword}>Editar dados</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    {
                        this.state.isOpen && 
                        <View style={styles.newPassword}>
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
                                    <Text style={styles.txtBtnCancel} onPress={()=>{this.setState({isOpen: !this.state.isOpen});}}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                    
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