import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';

import commonStyle from '../../shared/commonStyle';
import styles from './style';

export default class PlaceRating extends Component {
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

                    <ProgressStep label="" previousBtnText="Voltar" nextBtnText="Próximo">
                        <View>
                            <Text style={styles.label}>O estacionamento possui vagas para deficientes?</Text>
                        </View>
                    </ProgressStep>

                    <ProgressStep label="" previousBtnText="Voltar" nextBtnText="Próximo">
                        <View>
                            <Text style={styles.label}>Entrada de fácil acesso?</Text>
                        </View>
                    </ProgressStep>

                    <ProgressStep label="" previousBtnText="Voltar" finishBtnText="Concluir">
                        <View>
                            <Text style={styles.label}>Tem vaga para cadeirantes?</Text>
                        </View>
                    </ProgressStep>

                </ProgressSteps>
            </View>
        )
    }
}