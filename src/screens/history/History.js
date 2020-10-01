import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import HistoryBox from '../../components/HistoryBox';
import { findUserRatings, setUserRating } from '../../store/actions/places';

const { height, width } = Dimensions.get('window');

class History extends Component {
  componentDidMount() {
    this.props.onFindUserRatings();
  }

  onShowDetails = (_id) => {
    const userRating = this.props.userRatings.find((u) => u._id === _id);
    this.props.onSetUserRating(userRating);
    this.props.navigation.navigate('PlaceHistory');
  };

  render() {
    return (
      <View style={styles.container}>
        <Header goBack={() => this.props.navigation.navigate('SearchPlaces')} />
        {this.props.isLoading ? (
          <ActivityIndicator style={styles.activity} size="large" />
        ) : (
          <FlatList
            style={styles.list}
            data={this.props.userRatings}
            keyExtractor={(item) => item.placeId}
            renderItem={({ item }) => {
              return (
                <HistoryBox
                  key={item._id}
                  {...item}
                  onShowDetails={this.onShowDetails}
                />
              );
            }}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ places }) => {
  return {
    isLoading: places.loadingUserRatings,
    userRatings: places.userRatings,
    selectedUserRating: places.selectedUserRating,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFindUserRatings: () => dispatch(findUserRatings()),
    onSetUserRating: (userRating) => dispatch(setUserRating(userRating)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  list: {
    paddingTop: 10,
  },
  activity: {
    height,
    width,
  },
});
