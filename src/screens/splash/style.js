import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: '#fff',
    height,
  },
  activity: {
    height,
    width,
  },
});

export default styles;
