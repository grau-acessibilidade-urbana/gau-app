import {StyleSheet, Dimensions} from 'react-native';
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
        alignItems: 'center',
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
    }
})

export default styles