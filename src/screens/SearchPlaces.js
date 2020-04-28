import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const { height, width } = Dimensions.get('window');

export default class SearchPlaces extends Component {

    state = {
        currentLocation: { latitude: -23.55, longitude: -46.83 }
    };

    render() {
        return (
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    loadingEnabled={true}
                    region={{
                        latitude: this.state.currentLocation.latitude,
                        longitude: this.state.currentLocation.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})