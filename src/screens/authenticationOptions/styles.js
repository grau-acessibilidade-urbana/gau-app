import { StyleSheet, Dimensions } from 'react-native'
import commonStyle from '../../shared/commonStyle';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height
    },
    image: {
        height: height * 0.55,
        width: width * 0.9,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    imageGoogle: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        height: 48,
        marginBottom: 20,
        padding: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        elevation: 1,
    },
    signinButton: {
        backgroundColor: commonStyle.colors.secondColor,
        paddingLeft: 10,
    },
    signinText: {
        color: commonStyle.colors.primaryFontColor,
        width: width * 0.8,
        fontSize: 20,
        textAlign: 'center',
        marginLeft: -15,
    },
    signinGoogleButton: {
        backgroundColor: '#FFF',
        paddingLeft: 15,
    },
    signinGoogleText: {
        fontSize: 20,
        color: commonStyle.colors.primaryFontColor,
        width: width * 0.8,
        textAlign: 'center',
    },
    signupText: {
        color: commonStyle.colors.primaryColor,
        fontSize: 18,
        textAlign: 'center',
        textDecorationLine: 'underline',
    }
});

export default styles