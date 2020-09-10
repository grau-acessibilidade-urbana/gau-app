import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { updateCurrentLocation } from '../../store/actions/places';
import styles from './style';

class Splash extends Component {
  componentDidMount() {
    this.props.onSetCurrentLocation();
  }

  componentDidUpdate() {
    if (this.props.currentLocation) {
      this.props.navigation.navigate('SearchPlaces');
    }
  }

  render() {
    return (
      <View style={styles.containerView}>
        <ActivityIndicator style={styles.activity} size="large" />
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
    onSetCurrentLocation: () => dispatch(updateCurrentLocation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
