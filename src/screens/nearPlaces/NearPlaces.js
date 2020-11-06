import React, { Component } from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  Picker,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import commonStyles from '../../shared/commonStyle';
import styles from './style';
import Header from '../../components/Header';
import {
  findNearPlaces,
  setPlace,
  sortNearPlaces,
} from '../../store/actions/places';

class NearPlaces extends Component {
  state = {
    sort: 'distance',
  };

  componentDidMount() {
    this.props.onFindNearPlaces();
  }

  onShowPlace = (placeId) => {
    this.props.onSetPlace(this.props.currentLocation, placeId);
    this.props.navigation.navigate('PlaceView');
  };

  onSortChange = (sortValue) => {
    this.setState({ sort: sortValue });
    this.props.onSortChange(sortValue);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          goBack={() => this.props.navigation.navigate('SearchPlaces')}
          title="Locais próximos"
        />
        {this.props.isLoading ? (
          <ActivityIndicator style={styles.activity} size="large" />
        ) : (
          <View style={styles.container}>
            <View style={styles.sortField}>
              <Text style={styles.sortLabel}>Ordenar por: </Text>
              <Picker
                selectedValue={this.state.sort}
                style={{ height: 30, width: 200 }}
                onValueChange={(sortValue) => this.onSortChange(sortValue)}
              >
                <Picker.Item label="Distância" value="distance" />
                <Picker.Item label="Avaliação" value="rating" />
              </Picker>
            </View>
            <FlatList
              style={styles.list}
              data={this.props.nearPlaces}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={styles.containerHistory}>
                    <Image
                      style={styles.placeImage}
                      source={
                        item.image
                          ? { uri: item.image }
                          : require('../../../assets/imgs/default-image.png')
                      }
                    />
                    <View style={styles.dataPlace}>
                      <View style={styles.titleBox}>
                        <Text style={styles.textTitle} numberOfLines={1}>
                          {item.name}
                        </Text>
                        <View style={styles.containerStar}>
                          <Icon
                            name={item.averageScore ? 'star' : 'star-border'}
                            size={25}
                            color={commonStyles.colors.FullStar}
                          />
                          <Text style={styles.textStar}>
                            {item.averageScore || ''}
                          </Text>
                        </View>
                      </View>
                      <Text style={styles.textDistance}>{item.distance}</Text>
                      <TouchableOpacity
                        style={styles.more}
                        onPress={() => this.onShowPlace(item.id)}
                      >
                        <Text style={styles.textMore}>Ver local</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ places }) => {
  return {
    nearPlaces: places.nearPlaces,
    selectedPlace: places.selectedPlace,
    isLoading: places.loadingNearPlaces,
    loadingDetails: places.loadingDetails,
    currentLocation: places.currentLocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFindNearPlaces: (currentLocation) =>
      dispatch(findNearPlaces(currentLocation)),
    onSetPlace: (currentLocation, placeId) =>
      dispatch(setPlace(currentLocation, placeId)),
    onSortChange: (sortValue) => dispatch(sortNearPlaces(sortValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NearPlaces);
