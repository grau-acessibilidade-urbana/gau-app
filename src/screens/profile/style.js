import { StyleSheet } from 'react-native';
import commonStyles from '../../shared/commonStyle';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contantUser: {
        // height: '35%',
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    photoContainer: {
        height: 100,
        width: 100,
    },
    photoUser: {
        width: '100%',
        height: '100%',
        borderRadius: 80,
        borderWidth: 4,
        borderColor: commonStyles.colors.primaryColor
    },
    edit: {
        position: 'absolute',
        backgroundColor: commonStyles.colors.primaryColor,
        width: 36,
        height: 36,
        bottom: 5,
        right: 5,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    name:{
        fontSize: 18,
        padding: 5,
        color: commonStyles.colors.primaryColor
    },
    email: {
        fontSize: 16,
        padding: 3,
        color: commonStyles.colors.secondFontColor
    },
    rating: {
        width: '18%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: commonStyles.colors.secondFontColor
    },
    textRating: {
        paddingLeft: 10,
        color: commonStyles.colors.secondFontColor
    },
    containerTab: {
        flexDirection: 'row',
        width: '100%',
    },
    tab: {
        width: '50%',
        borderBottomWidth: 2,
        borderColor: '#eee'
    },
    tabSelected: {
        borderBottomWidth: 2,
        borderColor: commonStyles.colors.primaryColor
    },
    textTab: {
        fontSize: 19,
        paddingLeft: 10
    },
    containerForm: {
        flex: 1
    },
    containerInput:{
        paddingVertical: 7,
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