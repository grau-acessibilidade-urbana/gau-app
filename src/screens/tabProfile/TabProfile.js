import React, {Component} from 'react';
import { Text, View, ScrollView, TextInput, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import styles from './style';

export default class TabProfile extends Component {
  
    render() {
      return (
        <ScrollView style={styles.container}>
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
            <TouchableOpacity style={styles.btnSave} activeOpacity={0.7}>
              <Text style={styles.txtBtnSave}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCancel} activeOpacity={0.7}>
                <Text style={styles.txtBtnCancel}>Cancelar</Text>
              </TouchableOpacity>
          </View>

        </ScrollView>
      );
    }
  }