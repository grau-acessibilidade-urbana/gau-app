import Geolocation from '@react-native-community/geolocation';
import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, View, Image } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AutoComplete from '../../components/AutoComplete';
import styles from './style';
import * as googleApi from '../../api/google';

const MAP_REGION = {
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001
}

const initialState = {
    currentLocation: {
        latitude: 0.0,
        longitude: 0.0,
    },
    query: '',
    places: [],
    predictions: [],
    showAutoComplete: false,
    selectedPlace: null
}
export default class SearchPlaces extends Component {

    state = {
        ...initialState
    };

    componentDidMount() {
    }

    getCurrentLocation = () => {
        Geolocation.getCurrentPosition(position => {
            const location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02
            }
            this.setState({
                currentLocation: location,
            }, this.map.fitToCoordinates([location], { animated: false }));
        }, err => Alert.alert('Erro', err.toString()));
    }

    onQueryChange = async (text) => {
        this.setState({ query: text, });
        if (text && text.length > 0) {
            const predictions = await googleApi.getPlacesPredictions(this.state.query);
            this.setState(
                {
                    predictions,
                    showAutoComplete: predictions && predictions.length > 0
                });
        } else {
            this.setState({ showAutoComplete: false });
        }
    }

    onSelectSuggestion = async (placeId) => {
        const placeDetails = await googleApi.getPlaceDetailsById(placeId);
        this.setState({
            selectedPlace: placeDetails,
            showAutoComplete: false,
            predictions: []
        }, this.map.fitToCoordinates([placeDetails.location], { animated: true }));
    }

    onSearch = async () => {
        const places = await googleApi.findNearbyPlacesByText(this.state.currentLocation, this.state.query);
        const coordinates = places.map(place => place.location);
        this.setState({
            places,
            showAutoComplete: false,
            predictionContainer: [],
            selectedPlace: null,
        }, this.map.fitToCoordinates(coordinates, { animated: true }));
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.predictionContainer}>
                <TouchableOpacity style={styles.predictionButton}
                    onPress={() => this.onSelectSuggestion(item.id)}>
                    <Text style={styles.primaryText}>{item.description}</Text>
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
                    initialRegion={MAP_REGION}
                    ref={map => { this.map = map }}
                    onLayout={this.getCurrentLocation}>
                    <Marker coordinate={this.state.currentLocation}
                        title='Você está aqui!'
                        description='Localização atual.'>
                        <View style={styles.currLocationPin}>
                            <Image style={styles.pinImage} source={require('../../../assets/imgs/wheelchair.png')} />
                        </View>
                    </Marker>
                    {this.state.selectedPlace &&
                        <Marker coordinate={this.state.selectedPlace.location}
                            title={this.state.selectedPlace.name}
                            description={this.state.selectedPlace.address} />
                    }
                    {this.state.places && this.state.places.map((place, i) => {
                        return (<Marker key={i} identifier={place.id} coordinate={place.location}
                            title={place.name} />)
                    })}
                </MapView>
                <Callout style={styles.searchMenu}>
                    <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='menu' size={25} color='#FFF'></Icon>
                    </TouchableOpacity>
                    <AutoComplete
                        ref={this.input}
                        containerStyle={styles.search}
                        inputStyle={styles.input}
                        onChangeText={this.onQueryChange}
                        onSearch={this.onSearch}
                        query={this.state.query}
                        data={this.state.predictions}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        visible={this.state.showAutoComplete}
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

