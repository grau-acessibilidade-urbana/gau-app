import { StyleSheet, Dimensions } from 'react-native';
import commonStyles from '../../shared/commonStyle';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contantUser: {
        height: '45%',
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    photoContainer: {
        height: 160,
        width: 160,
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
    list: {
        backgroundColor: "#f5f5f5"
    }
})

export default styles