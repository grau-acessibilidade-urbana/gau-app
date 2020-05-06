import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';
import commonStyle from '../../shared/commonStyle';
import styles from './style';

export default class PlaceRating extends Component {

    constructor (props) {
        super(props)
        this.state = {
          checked: false
        }
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
                            <CheckBox title='Click Here' checked={this.state.checked} onPress={() => this.setState({checked: !this.state.checked})} uncheckedIcon/>
                            <CheckBox title='Click Here' checked={this.state.checked} onPress={() => this.setState({checked: !this.state.checked})}/>
                            <CheckBox title='Click Here' checked={this.state.checked} onPress={() => this.setState({checked: !this.state.checked})}/>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.label}>O piso do local se encontra em boa qualidade, não apresentando buracos ou elevações?</Text>
                        </View>
                    </ProgressStep>


                    <ProgressStep label="" previousBtnText="Voltar" previousBtnTextStyle={styles.btnSteps} nextBtnText="Próximo" nextBtnTextStyle={styles.btnSteps}>
                         <View>
                            <Text style={styles.label}>O sanitário tem área para circulação de uma cadeira de rodas e barras de apoio?</Text>
                        </View>

                        <View>
                            <Text style={styles.label}>Um cadeirante consegue se deslocar ou manobrar sua cadeira de rodas no local?</Text>
                        </View>
                    </ProgressStep>

                    <ProgressStep label="" previousBtnText="Voltar" previousBtnTextStyle={styles.btnSteps} nextBtnText="Próximo" nextBtnTextStyle={styles.btnSteps}>
                        <View>
                            <Text style={styles.label}>O estacionamento dispõe de vagas reservadas para pessoas com deficiência?</Text>
                        </View>
                    </ProgressStep>

                    <ProgressStep label="" previousBtnText="Voltar" previousBtnTextStyle={styles.btnSteps} finishBtnText="Concluir" finishBtnTextStyle={styles.btnSteps}>
                        <View>
                            <Text style={styles.label}>Gostaria de dizer algo? Deixe seu comentário.(Opcional)</Text>
                        </View>
                    </ProgressStep>

                    

                </ProgressSteps>
            </View>
        )
    }
}