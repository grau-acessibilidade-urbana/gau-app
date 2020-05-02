
import {StyleSheet} from 'react-native';
import commonStyle from '../../shared/commonStyle';

const styles = StyleSheet.create({
    menuProfile:{
        flexDirection: 'row',
        width: "100%",
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: commonStyle.colors.primaryColor
    },
    closeMenu: {
        position: 'absolute',
        right: 7,
        top: 7
    },
    photoUser: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#fff',
        resizeMode: 'cover',
    },
    userData: {
        flex: 1,
    },
    userName: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    userEmail: {
        color: "#fff",
        fontSize: 16,
        paddingLeft: 10
    }
})


export default styles