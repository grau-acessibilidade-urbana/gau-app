import { StyleSheet, Dimensions } from 'react-native';
import commonStyle from '../../shared/commonStyle';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: '#fff',
    height,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
    marginTop: 50,
    resizeMode: 'contain',
  },
  appTitle: {
    color: commonStyle.colors.primaryColor,
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 15,
  },
  appFullTitle: {
    color: commonStyle.colors.primaryColor,
    fontSize: 25,
    marginTop: 5,
  },
});

export default styles;
