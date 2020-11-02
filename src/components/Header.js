import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyle from '../shared/commonStyle';

const Header = ({ goBack, lightweight = false, title = '' }) => {
  return (
    <View
      style={[
        styles.header,
        lightweight ? styles.headerLigth : styles.headerDark,
      ]}
    >
      <TouchableOpacity onPress={() => goBack()}>
        <Icon
          name="chevron-left"
          size={40}
          color={lightweight ? commonStyle.colors.primaryFontColor : '#fff'}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.title,
          { color: lightweight ? commonStyle.colors.primaryFontColor : '#fff' },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  headerLigth: {
    backgroundColor: commonStyle.colors.whiteTransparent,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  headerDark: { backgroundColor: commonStyle.colors.primaryColor, zIndex: 1 },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
});
