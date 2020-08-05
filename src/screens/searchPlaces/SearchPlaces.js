import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import AutoComplete from '../../components/AutoComplete';
import {
  clearSelectedPlace,
  findPlaces,
  queryChanged,
  setPlace,
  updateCurrentLocation,
} from '../../store/actions/places';
import styles from './style';

const MAP_REGION = {
  latitude: 0.0,
  longitude: 0.0,
  latitudeDelta: 0.001,
  longitudeDelta: 0.001,
};

const initialState = {
  query: '',
};
class SearchPlaces extends Component {
  state = {
    ...initialState,
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.onUpdateCurrentLocation();
    }, 200);
  }

  componentDidUpdate() {
    if (this.props.selectedPlace) {
      this.map.fitToCoordinates([this.props.selectedPlace.location], {
        animated: true,
      });
    } else if (this.props.places) {
      const coordinates = this.props.places.map((place) => place.location);
      this.map.fitToCoordinates(coordinates, { animated: true });
    } else if (this.props.currentLocation) {
      this.map.fitToCoordinates([this.props.currentLocation], {
        animated: false,
      });
    }
  }

  onClearSelection = () => {
    this.setState({ query: null });
    this.props.onClearSelectedPlace();
  };

  onQueryChange = (text) => {
    this.setState({ query: text });
    this.props.onQueryChange(text);
  };

  onSelectPrediction = (prediction) => {
    this.autocomplete.blur();
    this.setState({ query: prediction.description });
    this.props.onSelectPlace(this.props.currentLocation, prediction.id);
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.predictionContainer}>
        <TouchableOpacity
          style={styles.predictionButton}
          onPress={() => this.onSelectPrediction(item)}
        >
          <Text style={styles.primaryText}>{item.description}</Text>
        </TouchableOpacity>
        <View />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          loadingEnabled
          initialRegion={MAP_REGION}
          ref={(map) => {
            this.map = map;
          }}
        >
          {this.props.currentLocation && (
            <Marker
              coordinate={this.props.currentLocation}
              title="Você está aqui!"
              description="Localização atual."
            >
              <View style={styles.currLocationPin}>
                <Image
                  style={styles.pinImage}
                  source={require('../../../assets/imgs/wheelchair.png')}
                />
              </View>
            </Marker>
          )}
          {this.props.selectedPlace && (
            <Marker
              coordinate={this.props.selectedPlace.location}
              title={this.props.selectedPlace.name}
              description={this.props.selectedPlace.address}
            />
          )}
          {this.props.places &&
            this.props.places.map((place, i) => {
              return (
                <Marker
                  key={i}
                  identifier={place.id}
                  coordinate={place.location}
                  title={place.name}
                  onPress={() =>
                    this.props.onSelectPlace(
                      this.props.currentLocation,
                      place.id
                    )
                  }
                />
              );
            })}
        </MapView>
        <Callout style={styles.searchMenu}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="menu" size={25} color="#FFF" />
          </TouchableOpacity>
          <AutoComplete
            containerStyle={styles.search}
            inputStyle={styles.input}
            onChangeText={this.onQueryChange}
            onSearch={() =>
              this.props.onFindPlaces(
                this.props.currentLocation,
                this.state.query
              )
            }
            query={this.state.query}
            data={this.props.predictions}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            ref={(autocomplete) => {
              this.autocomplete = autocomplete;
            }}
          />
        </Callout>
        <Callout style={styles.gpsContainer}>
          <TouchableOpacity
            style={styles.gpsButton}
            onPress={this.props.onUpdateCurrentLocation}
          >
            <Icon name="gps-fixed" size={30} color="#FFF" />
          </TouchableOpacity>
        </Callout>

        {this.props.selectedPlace && (
          <Callout style={styles.placeDetailsContainer}>
            {this.props.loadingDetails ? (
              <ActivityIndicator size="large" />
            ) : (
              <View>
                <View style={styles.placeDetailsHeader}>
                  <Text style={styles.placeName}>
                    {this.props.selectedPlace.name}
                  </Text>
                  <TouchableOpacity onPress={this.onClearSelection}>
                    <Icon name="close" size={20} color="#8B8B8B" />
                  </TouchableOpacity>
                </View>
                <View style={styles.placeDetails}>
                  <Image
                    style={styles.placeImage}
                    source={{ uri: this.props.selectedPlace.image }}
                  />
                  <View style={styles.placeDescription}>
                    <Text style={styles.placeAddressTitle}>
                      Endereço:
                      <Text style={styles.placeAddress}>
                        {' '}
                        {this.props.selectedPlace.address}
                      </Text>
                    </Text>
                    <Text style={styles.placeAddress}>
                      {this.props.selectedPlace.distance} de distância
                    </Text>
                    <TouchableOpacity
                      style={styles.getDetailsButton}
                      onPress={() =>
                        this.props.navigation.navigate('PlaceView')
                      }
                    >
                      <Text style={styles.getDetails}>Ver mais detalhes</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Callout>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ places }) => {
  return {
    selectedPlace: places.selectedPlace,
    predictions: places.predictions,
    currentLocation: places.currentLocation,
    places: places.places,
    loadingDetails: places.loadingDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectPlace: (currentLocation, placeId) =>
      dispatch(setPlace(currentLocation, placeId)),
    onQueryChange: (query) => dispatch(queryChanged(query)),
    onClearSelectedPlace: () => dispatch(clearSelectedPlace()),
    onUpdateCurrentLocation: () => dispatch(updateCurrentLocation()),
    onFindPlaces: (currentLocation, query) =>
      dispatch(findPlaces(currentLocation, query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlaces);
