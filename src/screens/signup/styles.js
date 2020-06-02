import { StyleSheet, Dimensions } from 'react-native';
import commonStyle from '../../shared/commonStyle';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        marginTop: 40,
    },
    title: {
        marginTop: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: commonStyle.colors.primaryColor,
    },
    fieldset: {
        marginTop: 20,
        width: width * 0.8,
    },
    label: {
        fontSize: 20,
        color: commonStyle.colors.primaryColor,
    },
    input: {
        borderWidth: 1,
        borderColor: commonStyle.colors.primaryColor,
        borderStyle: "solid",
        height: 40,
        borderRadius: 5,
        marginVertical: 5,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    signupButton: {
        backgroundColor: commonStyle.colors.primaryColor,
        height: 40,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupText: {
        color: '#FFF',
        fontSize: 20,
    }
});

export default styles;