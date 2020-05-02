
import {StyleSheet} from 'react-native';
import commonStyle from '../../shared/commonStyle';

const styles = StyleSheet.create({
    menuProfile:{
        flexDirection: 'row',
        width: "100%",
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: commonStyle.colors.primaryColor
    },
    photoUser: {
        height: 80,
        width: 80,
        backgroundColor: 'aqua',
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 40,
        marginLeft: 10
    },
    userData: {
        flex: 1,
    },
    textUserData: {
        color: "#fff",
        paddingLeft: 10
    }
})


export default styles