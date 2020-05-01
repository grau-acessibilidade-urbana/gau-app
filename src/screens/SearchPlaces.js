import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Geocoder from 'react-native-geocoding'
import Geolocation from '@react-native-community/geolocation';

const { height, width } = Dimensions.get('window');

export default class SearchPlaces extends Component {

    state = {
        region: {
            latitude: -23.55,
            longitude: -46.83,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
        }
    };

    getLocation = () => {
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

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsUserLocation
                    loadingEnabled={true}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}>
                </MapView>
                <Callout style={styles.searchMenu}>
                    <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='menu' size={25} color='#FFF'></Icon>
                    </TouchableOpacity>
                    <View style={styles.search}>
                        <TextInput placeholder='Digite sua pesquisa...' style={styles.input} />
                        <TouchableWithoutFeedback>
                            <Icon name='search' size={25} color='#3197b5'></Icon>
                        </TouchableWithoutFeedback>
                    </View>
                </Callout>
                <Callout style={styles.gpsContainer}>
                    <TouchableOpacity style={styles.gpsButton} onPress={this.getLocation}>
                        <Icon name='gps-fixed' size={30} color='#FFF'></Icon>
                    </TouchableOpacity>
                </Callout>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        width: width,
        height: height,
    },
    searchMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 20,
    },
    menuButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        backgroundColor: '#3197b5',
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    search: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        alignItems: 'center',
        width: width * 0.75,
        height: 50,
        borderRadius: 15,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 7
    },
    input: {
        width: '88%',
        color: '#3197b5',
        fontSize: 18,
        padding: 5,
    },
    gpsContainer: {
        position: 'absolute',
        bottom: 50,
        right: 15,
        width: 50,
        height: 50,
    },
    gpsButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3197b5',
        borderRadius: 25,
    }
})