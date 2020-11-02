import { Dimensions, StyleSheet } from 'react-native';
import commonStyles from '../../shared/commonStyle';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  list: {
    paddingTop: 10,
  },
  activity: {
    height,
    width,
  },
  containerHistory: {
    width: '90%',
    marginLeft: '5%',
    marginBottom: 10,
    padding: 10,
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  placeImage: {
    width: '33%',
    height: 90,
    marginRight: 7,
  },
  dataPlace: {
    flex: 1,
  },
  titleBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 17,
    width: width * 0.35,
    color: commonStyles.colors.primaryFontColor,
  },
  containerStar: {
    flexDirection: 'row',
    backgroundColor: commonStyles.colors.backgroundStar,
    borderRadius: 5,
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  textStar: {
    fontSize: 18,
  },
  textDistance: {
    fontSize: 17,
    color: commonStyles.colors.secondFontColor,
  },
  more: {
    position: 'absolute',
    width: 90,
    bottom: 0,
    right: 0,
    padding: 5,
    alignItems: 'flex-end',
  },
  textMore: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: commonStyles.colors.primaryColor,
  },
});

export default styles;
