import { StyleSheet } from 'react-native';
import commonStyles from '../../shared/commonStyle';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },  
    title: {
       color: commonStyles.colors.primaryColor,
       textAlign: "center",
       fontSize: 20,
       padding: 10
    },
    image: {
        resizeMode: 'contain'
    },
    text: {
        color: commonStyles.colors.primaryFontColor,
        padding: 10,
        fontSize: 18
    }
})

export default styles