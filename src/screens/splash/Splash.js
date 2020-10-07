import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { updateCurrentLocation } from '../../store/actions/places';
import styles from './style';

class Splash extends Component {
  componentDidMount() {
    this.props.onSetCurrentLocation();
  }

  componentDidUpdate() {
    if (this.props.currentLocation) {
      setTimeout(() => {
        this.props.navigation.navigate('SearchPlaces');
      }, 3000);
    }
  }

  render() {
    return (
      <View style={styles.containerView}>
        <Image
          source={require('../../../assets/imgs/logo.png')}
          style={styles.image}
        />
        <Text style={styles.appTitle}>G.A.U</Text>
        <Text style={styles.appFullTitle}>Grau de acessibilidade urbana</Text>
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
