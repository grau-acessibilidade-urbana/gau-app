import React, { Component } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View, ActivityIndicator } from 'react-native';
import { Rating } from 'react-native-elements';
import { connect } from 'react-redux';
import ComentaryBox from '../../components/ComentaryBox';
import Header from '../../components/Header';
import styles from './styles';
import { findPlaceWithRating } from '../../store/actions/places';

const comentaries = [
  {
    id: 1,
    name: 'Vanessaa',
    image: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083379_960_720.jpg',
    classification: 2,
    text: 'É importante questionar o quanto a execução dos pontos do programa acarreta um processo de reformulação e modernização das novas proposições.',
    likes: 2,
    date: '24/02/2020',
    responses: [
      {
        id: 2,
        name: 'Thiago',
        text: 'É importante questionar o quanto a execução dos pontos do programa.',
        date: '27/02/2020',
      }
    ]
  },
  {
    id: 3,
    name: 'Julia',
    classification: 5,
    text: 'lorem ipsum',
    responses: [
      {
        id: 1,
        name: 'Thiago',
        text: 'É importante questionar o quanto a execução dos pontos do programa.',
        date: '27/02/2020',
      },
      {
        id: 2,
        name: 'Bruno',
        text: 'É importante questionar o quanto a execução dos pontos do programa.',
        date: '27/02/2020',
      }
    ]
  }

];

class PlaceView extends Component {

  state = {
    nameLocal: "FATEC São Roque",
    rating: 3,
    review: 10
  }

  componentDidMount() {
    this.props.onFindPlaceWithRating(this.props.selectedPlace.id);
  }

  ratePlace = () => {
    if (this.props.loggedUser) {
      this.props.navigation.navigate('PlaceRating');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.containerView}>
        <Header goBack={this.props.navigation.goBack} lightweight />
        <ScrollView>
          {this.props.isLoading ? <ActivityIndicator style={styles.activity} size='large' /> : 
          <View style={styles.container}>
            <View style={styles.placeContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.imageLocation} source={{ uri: this.props.selectedPlace.image }} />
                <TouchableOpacity 
                  style={styles.rateLocationButton} 
                  activeOpacity={0.8}
                  onPress={this.ratePlace}>
                  <Text style={styles.rateLocationText}>Avaliar local</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.detailLocalContainer}>
                <Text style={styles.detailLocalContainer_title}>{this.props.selectedPlace.name}</Text>
                <View style={styles.reviewContainer}>
                  <Text style={styles.txtReviewNumberContainer}> {this.state.rating} </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Rating imageSize={20} readonly startingValue={this.state.rating} />
                  </View>
                  <Text style={styles.txtReviewContainer}> ({this.state.review} Avaliações)</Text>
                </View>
                <View>
                  <Text style={styles.text}>{this.props.selectedPlace.address + ' '} 
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SearchPlaces')}>
                      <Text style={styles.textMaps}>Ver no mapa</Text>
                    </TouchableWithoutFeedback>
                  </Text>
                </View>
                <View style={styles.containerComentaries}>
                  <FlatList
                    data={comentaries}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                      <ComentaryBox key={item.id} {...item} />
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          }
        </ScrollView>

        {/* <View style={styles.containerInputResponse}>
          <TextInput style={styles.inputResponse} placeholder={"Digite sua resposta"} />
          <TouchableOpacity activeOpacity={0.5} style={styles.btnResponse}>
            <Icon name="send" size={30} color={ commonStyle.colors.primaryColor } />
          </TouchableOpacity>
        </View> */}
      </View>
    )
  }
}

const mapStateToProps = ({ places, users }) => {
  return {
    selectedPlace: places.selectedPlace,
    currentLocation: places.currentLocation,
    loggedUser: users.loggedUser,
    isLoading: places.loadingRating,
    placeRating: places.placeRating,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFindPlaceWithRating: placeId => dispatch(findPlaceWithRating(placeId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceView);