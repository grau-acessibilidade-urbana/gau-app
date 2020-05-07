import {StyleSheet, Dimensions} from 'react-native';
import commonStyle from "../../shared/commonStyle";
const { height, width } = Dimensions.get('window'); 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  imageContainer: {
    // height: height * 35 / 100,
    // flex: 1,
    backgroundColor: 'yellow',
    // height: '100%'
  },
  // imageLocation: {
  //   height: '100%',
  //   width: '100%'
  // },
  detailLocalContainer: {
    // backgroundColor: 'orange',
    // flex: 2,
    // display: 'flex',
    // justifyContent: 'center', 
    // flexDirection: 'column',
    // height: '30%'
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


  // header style 
  header: {
    zIndex: 1,
    // position: 'absolute',
    width: width,
    height: 50,
    display: 'flex',
    justifyContent: 'center'
  },
  headerLigth: {backgroundColor: commonStyle.colors.whiteTransparent,},
  headerDark: {backgroundColor: commonStyle.colors.primaryColor,}
});

export default styles