import { StyleSheet } from 'react-native';
import commonStyles from '../../shared/commonStyle';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },  
    title: {
       color: commonStyles.colors.primaryColor,
       textAlign: "center",
       fontSize: 20,
       padding: 10
    },
    titleQuestion: {
        color: commonStyles.colors.primaryColor,
        padding: 10,
        fontSize: 20
    },
    text: {
        color: commonStyles.colors.primaryFontColor,
        padding: 10,
        fontSize: 18
    }

})

export default styles