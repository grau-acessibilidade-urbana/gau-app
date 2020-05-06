import { StyleSheet } from 'react-native';
import commonStyles from '../../shared/commonStyle';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        justifyContent: "center",
    },
    btnSteps: {
        color: commonStyles.colors.primaryColor,
        textDecorationLine: "underline"
    },
    label: {
        color: commonStyles.colors.primaryFontColor,
        fontSize: 20,
        paddingLeft: 15,
        paddingRight: 15
    },
    CheckBox: {

    }
})

export default styles