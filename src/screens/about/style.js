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
    }
})

export default styles