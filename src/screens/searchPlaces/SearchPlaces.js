import Geolocation from '@react-native-community/geolocation';
import React, { Component } from 'react';
import { Alert, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import RNGooglePlaces from 'react-native-google-places';
import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';

import AutoComplete from '../../components/AutoComplete';


export default class SearchPlaces extends Component {

    state = {
        region: {
            latitude: 0.0,
            longitude: 0.0,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0
        },
        query: '',
        predictions: []
    };

    componentDidMount() {
        this.getCurrentLocation();
    }

    getCurrentLocation = () => {
        Geolocation.getCurrentPosition(position => {
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001
                }
            });
        }, err => Alert.alert('Erro', err.toString()));
    }

    onQueryChange = (text) => {
        this.setState({ query: text });
        RNGooglePlaces.getAutocompletePredictions(this.state.query, {
            country: 'BR'
        })
            .then((places) => {
                // console.log(places);
                this.setState({ predictions: places });
            })
            .catch(err => console.log(err.message));
    }

    renderItem = ({ item }) => {
        console.log('chamei renderItem');
        return (
            <View>
                <TouchableOpacity>
                    <Text>{item.primaryText}</Text>
                </TouchableOpacity>
                <View />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    loadingEnabled={true}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}>
                </MapView>
                <Callout style={styles.searchMenu}>
                    <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='menu' size={25} color='#FFF'></Icon>
                    </TouchableOpacity>
                    <AutoComplete
                        containerStyle={styles.search}
                        inputStyle={styles.input}
                        onChangeText={this.onQueryChange}
                        query={this.state.query}
                        data={this.state.predictions}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.placeID}
                    />
                </Callout>
                <Callout style={styles.gpsContainer}>
                    <TouchableOpacity style={styles.gpsButton} onPress={this.getCurrentLocation}>
                        <Icon name='gps-fixed' size={30} color='#FFF'></Icon>
                    </TouchableOpacity>
                </Callout>
            </View>
        )
    }
}

