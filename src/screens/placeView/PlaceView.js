
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Rating } from 'react-native-elements';
import { connect } from 'react-redux';
import ComentaryBox from '../../components/ComentaryBox';
import Header from '../../components/Header';
import styles from './styles';

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
    review: 10
  }

  ratePlace = () => {
    if (this.props.loggedUser) {
      this.props.navigation.navigate('PlaceRating');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  componentDidMount() {
    console.log('comments: ' + JSON.stringify(this.props.selectedPlace.comments));
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
                    <Text style={styles.txtReviewNumberContainer}> {this.props.selectedPlace.averageScore ? this.props.selectedPlace.averageScore.toFixed(1) : 0} </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Rating imageSize={20} readonly startingValue={this.props.selectedPlace.averageScore || 0} />
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
                  {/* O local ainda não possui avaliação, seja o primeiro a avaliar */}
                  <View style={styles.containerComentaries}>
                    {this.props.selectedPlace.comments && this.props.selectedPlace.comments.length > 0 ? 
                    <FlatList
                      data={this.props.selectedPlace.comments}
                      keyExtractor={item => item._id}
                      renderItem={({ item }) => <ComentaryBox key={item._id} {...item} />}
                    /> : 
                    <View>
                      <Text style={styles.noRatingsText}>O local ainda não possui avaliação, seja o primeiro a avaliar</Text>
                    </View>}
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
  }
}

export default connect(mapStateToProps)(PlaceView);