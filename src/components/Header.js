import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyle from '../shared/commonStyle';
const {  width } = Dimensions.get('window'); 



const Header = ({ goBack, lightweight = false }) => {
  return (
    <View style={[styles.header, lightweight ? styles.headerLigth : styles.headerDark]}>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name="chevron-left" size={40} color={lightweight ? '#000' : "#fff"} />
      </TouchableOpacity>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    zIndex: 1,
    position: 'absolute',
    width: width,
    height: 50,
    display: 'flex',
    justifyContent: 'center'
  },
  headerLigth: { backgroundColor: commonStyle.colors.whiteTransparent },
  headerDark: { backgroundColor: commonStyle.colors.primaryColor }
});