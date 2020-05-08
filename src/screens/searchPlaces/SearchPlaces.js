import Geolocation from '@react-native-community/geolocation';
import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, View, Image } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AutoComplete from '../../components/AutoComplete';
import styles from './style';
import * as googleApi from '../../api/google';

const initialState = {
    mapRegion: {
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    },
    currentLocation: {
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
    },
    query: '',
    predictions: [],
    showAutoComplete: false,
    selectedPlace: null
}
export default class SearchPlaces extends Component {

    state = {
       ...initialState
    };

    componentDidMount() {
        this.getCurrentLocation();
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
                mapRegion: location
            });
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
            mapRegion: {
                ...initialState.mapRegion,
                ...placeDetails.location
            },
            predictions: []
        });
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
                    region={this.state.mapRegion}
                    onRegionChange={this.onRegionChange}>
                        <Marker coordinate={this.state.currentLocation}
                            title='Você está aqui!'
                            description='Localização atual.'>
                                <View style={styles.currLocationPin}>
                                    <Image style={styles.pinImage} source={require('../../../assets/imgs/wheelchair.png')}/>
                                </View>
                        </Marker>
                        {this.state.selectedPlace && 
                            <Marker  coordinate={this.state.selectedPlace.location}
                                title={this.state.selectedPlace.name}
                                description={this.state.selectedPlace.address} />
                        }
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

