import { StyleSheet } from 'react-native';
import commonStyles from '../../shared/commonStyle';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    containerInput:{
       
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    containerInputPassword: {
        width: '73%'
    },
    label: {
        color: commonStyles.colors.secondFontColor,
        marginBottom: 5
    },
    input: {
        color: commonStyles.colors.primaryFontColor,
        borderWidth: 1,
        borderColor: commonStyles.colors.thirdColor,
        borderRadius: 5,
        padding: 5,
    },
    containerEditPassword: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editPassword:{
        paddingTop: 15,
        color: commonStyles.colors.secondFontColor,
        textDecorationLine: 'underline',
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20

    },
    btnSave: {
        paddingHorizontal: 20,
        paddingVertical: 7,
        margin: 15,
        backgroundColor: commonStyles.colors.primaryColor,
        borderRadius: 10
    },
    txtBtnSave: {
        color: '#fff'
    },  
    btnCancel:{
        margin: 15,
        padding: 7,
        
    },
    txtBtnCancel:{
        color: commonStyles.colors.primaryColor,
        textDecorationLine: 'underline'
    }
})
export default styles