import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyle from '../../shared/commonStyle';
import styles from './style';


let starts = [];

for (let i=0 ; i<5 ; i++){
    starts.push(
        <TouchableOpacity key={i} onPress={this.clickStars}>
            <Icon name='star-border' size={50} color={commonStyle.colors.primaryColor}></Icon>
        </TouchableOpacity>
    )
}

const options = [
    {
        key: 'nao',
        text: 'Não'
    },
    {
        key: 'sim',
        text: 'Sim'
    },
    {
        key: 'naosei',
        text: 'Não sei'
    }
]

export default class PlaceRating extends Component {

    state = {
        value: null,
        text: null
    }

    render() {
        
        return (
            <View style={styles.container}>
                <ProgressSteps
                    progressBarColor={commonStyle.colors.secondColor}
                    completedProgressBarColor={commonStyle.colors.primaryColor}
                    completedStepIconColor={commonStyle.colors.primaryColor}
                    activeStepIconColor={commonStyle.colors.secondColor}
                    activeStepIconBorderColor={commonStyle.colors.primaryColor}
                    disabledStepIconColor={commonStyle.colors.secondColor}
                    activeStepNumColor={commonStyle.colors.primaryColor}>

                    <ProgressStep label="" previousBtnText="Voltar" previousBtnTextStyle={styles.btnSteps} nextBtnText="Próximo" nextBtnTextStyle={styles.btnSteps}>
                        <View style={styles.content}>
                            <Text style={styles.label}>O local possui obstáculos que impossibilita o deslocamento de qualquer pessoa?</Text>
                            <View style={styles.containerBtn}>
                                {options.map(item => {
                                    return (
                                        <TouchableOpacity key={item.key} style={styles.btnOptions}>
                                            <Text style={styles.txtBtnOption}>{item.text}</Text>
                                        </TouchableOpacity>
                                    )})
                                }
                            </View>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.label}>O piso do local se encontra em boa qualidade, não apresentando buracos ou elevações?</Text>
                            <View style={styles.containerBtn}>
                                {options.map(item => {
                                    return (
                                        <TouchableOpacity key={item.key} style={styles.btnOptions}>
                                            <Text style={styles.txtBtnOption}>{item.text}</Text>
                                        </TouchableOpacity>
                                    )})
                                }
                            </View>
                            
                        </View>
                    </ProgressStep>


                    <ProgressStep label="" previousBtnText="Voltar" previousBtnTextStyle={styles.btnSteps} nextBtnText="Próximo" nextBtnTextStyle={styles.btnSteps}>
                         <View>
                            <Text style={styles.label}>O sanitário tem área para circulação de uma cadeira de rodas e barras de apoio?</Text>
                            <View style={styles.containerBtn}>
                                {options.map(item => {
                                    return (
                                        <TouchableOpacity key={item.key} style={styles.btnOptions}>
                                            <Text style={styles.txtBtnOption}>{item.text}</Text>
                                        </TouchableOpacity>
                                    )})
                                }
                            </View>
                        </View>

                        <View>
                            <Text style={styles.label}>Um cadeirante consegue se deslocar ou manobrar sua cadeira de rodas no local?</Text>
                            <View style={styles.containerBtn}>
                                {starts}
                            </View>

                        </View>
                    </ProgressStep>

                    <ProgressStep label="" previousBtnText="Voltar" previousBtnTextStyle={styles.btnSteps} finishBtnText="Concluir" finishBtnTextStyle={styles.btnSteps}>
                        <View>
                            <Text style={styles.label}>O estacionamento dispõe de vagas reservadas para pessoas com deficiência?</Text>
                            <View style={styles.containerBtn}>
                                {options.map(item => {
                                    return (
                                        <TouchableOpacity key={item.key} style={styles.btnOptions}>
                                            <Text style={styles.txtBtnOption}>{item.text}</Text>
                                        </TouchableOpacity>
                                    )})
                                }
                            </View>
                        </View>
                        <View style={styles.containerInput}>
                            <Text style={styles.label}>Gostaria de dizer algo? Deixe seu comentário.(Opcional)</Text>
                            <TextInput style={styles.input} numberOfLines={4} onChangeText={(text) => this.setState({text})} value={this.state.text} placeholder="Digite seu comentário aqui..."/>
                        </View>
                    </ProgressStep>

                   
                </ProgressSteps>
            </View>
        )
    }
}