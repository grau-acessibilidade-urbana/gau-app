import React, { Component } from 'react';
import { View, Text} from 'react-native';
import Header from '../../components/Header';
import styles from './style';

export default class HelpDetails extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header goBack={this.props.navigation.goBack}/>
                <Text style={styles.title}>Ajuda</Text>
                <Text style={styles.titleQuestion}>Titulo escrito aqui</Text>
                <Text style={styles.text}> Do mesmo modo, o comprometimento entre as equipes possibilita uma melhor visão global do levantamento das variáveis envolvidas. Pensando mais a longo prazo, a complexidade dos estudos efetuados prepara-nos para enfrentar situações atípicas decorrentes do processo de comunicação como um todo. Gostaria de enfatizar que o fenômeno da Internet exige a precisão e a definição dos índices pretendidos. No entanto, não podemos esquecer que a estrutura atual da organização auxilia a preparação e a composição da gestão inovadora da qual fazemos parte. O empenho em analisar o acompanhamento das preferências de consumo obstaculiza a apreciação da importância dos níveis de motivação departamental. </Text>
            </View>
        )
    }
}