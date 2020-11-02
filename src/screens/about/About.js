import React, { Component } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import styles from './style';
import { findNearPlaces } from '../../store/actions/places';

class About extends Component {
  componentDidMount = () => {
    this.props.onFindNearPlaces(this.props.currentLocation);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          goBack={() => this.props.navigation.navigate('SearchPlaces')}
          title="Sobre"
        />
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.title}>Sobre o aplicativo</Text>
          <Image
            style={styles.image}
            source={require('../../../assets/imgs/iluastracao-sobre.png')}
          />
          <Text style={styles.text}>
            G.A.U (Grau de Acessibilidade Urbana) é um aplicativo com o objetivo
            de auxiliar pessoas com deficiência motora, possibilitando a
            consulta e compartilhamento de informações sobre o grau de
            acessibilidade de um local. O sistema funciona de forma
            colaborativa, portanto, o usuário pode avaliar um local que já
            frequentou, informando quais são suas qualidades e/ou limitações,
            podendo também deixar um comentário para complementar a avaliação.
            As avaliações que os locais recebem são armazenadas e uma nota é
            calculada, assim os usuários podem verificar se um local é
            acessível, antes mesmo de conhecê-lo.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ places }) => {
  return {
    currentLocation: places.currentLocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFindNearPlaces: (currentLocation) =>
      dispatch(findNearPlaces(currentLocation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
