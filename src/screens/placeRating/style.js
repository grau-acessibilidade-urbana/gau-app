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
        fontSize: 21,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'center'
    },
    containerBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 30
    },
    btnOptions: {
        width: 100,
        height: 40,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: commonStyles.colors.primaryColor,
        borderRadius: 5,
    },
    checkedBtnOptions: {
        width: 100,
        height: 40,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        color: "#fff",
        backgroundColor: commonStyles.colors.primaryColor,
        borderColor: commonStyles.colors.primaryColor,
        borderRadius: 5,
    },
    txtBtnOption: {
        color: commonStyles.colors.primaryColor,
        fontSize: 19
    },
    containerInput: {
        flex: 1,
        alignItems: "center"
    },
    input: {
        width: "90%",
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 20,
        padding: 10,
        fontSize: 18,
        borderColor: commonStyles.colors.primaryColor,
        alignItems: 'flex-start',
        justifyContent: "flex-start"
    }
})

export default styles