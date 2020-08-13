import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import commonStyle from '../../shared/commonStyle';
import styles from './style';
import Header from '../../components/Header';

class PlaceHistory extends Component {
  state = {
    title: 'Fatec São Roque',
    rating: '4.0',
    comment:
      'Do mesmo modo, o comprometimento entre as equipes possibilita uma melhor visão global do levantamento das variáveis envolvidas. Pensando mais a longo prazo, a complexidade dos estudos efetuados prepara-nos para enfrentar situações atípicas decorrentes do processo de comunicação como um todo. Gostaria de enfatizar que o fenômeno da Internet exige a precisão e a definição dos índices pretendidos. No entanto, não podemos esquecer que a estrutura atual da organização auxilia a preparação e a composição da gestão inovadora da qual fazemos parte. O empenho em analisar o acompanhamento das preferências de consumo obstaculiza a apreciação da importância dos níveis de motivação departamental. ',
    photo:
      'https://jeonline.com.br/site/uploads/posts/12107_23102017142914.jpg',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: this.state.photo }} />

        <ScrollView style={styles.details}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{this.state.title}</Text>
            <View style={styles.containerStar}>
              <Icon name="star" size={27} color={commonStyle.colors.FullStar} />
              <Text style={styles.rating}>{this.state.rating}</Text>
            </View>
          </View>

          <Text style={styles.comment}> {this.state.comment} </Text>
          <TouchableOpacity style={styles.btnEdit} activeOpacity={0.7}>
            <Text style={styles.textEdit}>Editar avalição</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnDelete} activeOpacity={0.7}>
            <Text style={styles.textDelete}>Excluir avalição</Text>
          </TouchableOpacity>
        </ScrollView>

        <Header goBack={this.props.navigation.goBack} lightweight />
      </View>
    );
  }
}

export default connect()(PlaceHistory);
