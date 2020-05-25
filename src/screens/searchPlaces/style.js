import { StyleSheet, Dimensions } from 'react-native';
import commonStyle from "../../shared/commonStyle";
const { height, width } = Dimensions.get('window');
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
        marginTop: 30,
        marginLeft: 20,
    },
    menuButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        backgroundColor: commonStyle.colors.primaryColor,
        borderRadius: 25,
        width: 50,
        height: 50,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 7
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
        color: commonStyle.colors.primaryColor,
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
        backgroundColor: commonStyle.colors.primaryColor,
        borderRadius: 25,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 7
    },
    placeDetailsContainer: {
        height: '30%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 7,
    },
    placeDetails: {
        flexDirection: 'row',
        height: '80%',
    },
    placeDetailsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    placeName: {
        color: commonStyle.colors.primaryFontColor,
        fontWeight: 'bold',
        fontSize: 20
    },
    placeImage: {
        height: '75%',
        width: '35%',
        marginRight: 10,
    },
    addressContainer: {
        flexDirection: 'row'
    },
    placeDescription: {
        height: '75%',
        width: 240,
        justifyContent: 'space-between'
    },
    placeAddressTitle: {
        color: commonStyle.colors.primaryFontColor,
        fontWeight: 'bold',
        fontSize: 16
    },
    placeAddress: {
        color: commonStyle.colors.secondFontColor,
        fontWeight: 'normal',
        fontSize: 16,
    },
    predictionContainer: {
        borderBottomColor: '#EEE',
        borderBottomWidth: 1,
    },  
    predictionButton: {
        paddingVertical: 15
    },
    primaryText: {
        fontSize: 18
    },
    currLocationPin: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent : 'center',
    },
    pinImage: {
        height: '100%',
        width: '100%'
    },
    getDetails: {
        textDecorationLine: 'underline',
        color: commonStyle.colors.secondFontColor,
        width: 150
    }
})

export default styles