import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    TextInput
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

export default class SearchPlaces extends Component {

    state = {
        currentLocation: { latitude: -23.55, longitude: -46.83 }
    };

    render() {
        return (
            <View style={styles.container}>
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
                />
                <Callout>
                    <View style={styles.searchMenu}>
                        <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='bars' size={25} color='#FFF'></Icon>
                        </TouchableOpacity>
                        <View style={styles.search}>
                            <TextInput placeholder='Digite sua pesquisa...' style={styles.input} />
                            <TouchableWithoutFeedback>
                                <Icon name='search' size={25} color='#3197b5'></Icon>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

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
        alignItems:'center',
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
    }
})