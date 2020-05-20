import { StyleSheet, Dimensions } from 'react-native';
import commonStyle from "../../shared/commonStyle";
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeContainer: {
    height: height,
  },
  imageContainer: {
    flex: 1,
  },
  imageLocation: {
    height: '100%',
    width: '100%'
  },
  detailLocalContainer: {
    flex: 2,
    padding: 5,
  },
  detailLocalContainer_title: {
    fontSize: 22,
    color: commonStyle.colors.primaryColor,
    alignSelf: 'center'
  },
  reviewContainer: {
    flexDirection: 'row',
    color: commonStyle.colors.secondFontColor,
    fontSize: 16,
  },
  text: {
    color: commonStyle.colors.primaryFontColor,
    fontSize: 18,
  },
  rateLocationButton: {
    position: 'absolute',
    borderRadius: 5,
    bottom: 10,
    right: 10,
    alignSelf: 'flex-end',
    backgroundColor: commonStyle.colors.primaryColor,
    padding: 5,
    paddingHorizontal: 15
  },
  rateLocationText:
  {
    color: "#fff",
    fontSize: 16
  }

});

export default styles