import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const { height, width } = Dimensions.get('window');

const slides = [
  {
    key: 1,
    title: 'Seja bem-vindo!',
    text:
      'Consulte e compartilhe experiências sobre acessibilidade de um local.',
    image: require('../../../assets/imgs/slide0.png'),
    backgroundColor: '#256B9E',
  },
  {
    key: 2,
    title: 'Faça uma pesquisa de um local',
    text: 'Digite o nome de um local na barra de pesquisa.',
    image: require('../../../assets/imgs/slide1.png'),
    backgroundColor: '#3197B5',
  },
  {
    key: 3,
    title: 'Veja mais detalhes sobre o local',
    text:
      'Clicando em "Ver mais detalhes" você acessa todas as informações do local.',
    image: require('../../../assets/imgs/slide2.png'),
    backgroundColor: '#256B9E',
  },
  {
    key: 4,
    title: 'Avalie um local',
    text:
      'Clique em "Avaliar Local" e compartilhe suas experiências. Lembre-se, faça login para poder avaliar.',
    image: require('../../../assets/imgs/slide3.png'),
    backgroundColor: '#3197B5',
  },
  {
    key: 5,
    title: 'Vamos começar!',
    text: 'Agora você já sabe as principais funcionalidades, vamos começar!',
    image: require('../../../assets/imgs/slide4.png'),
    backgroundColor: '#256B9E',
  },
];

export default class Welcome extends Component {
  renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  onDone = () => {
    this.props.navigation.navigate('SearchPlaces');
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this.renderItem}
        data={slides}
        onDone={this.onDone}
        showSkipButton
        skipLabel="Pular"
        nextLabel="Avançar"
        doneLabel="Começar"
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#3197B5',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    width: width * 0.8,
    resizeMode: 'contain',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 19,
    textAlign: 'center',
    marginBottom: 100,
    paddingHorizontal: 30,
  },
});
