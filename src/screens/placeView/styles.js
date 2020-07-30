import { StyleSheet, Dimensions } from 'react-native';
import commonStyle from "../../shared/commonStyle";
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  containerView: {
    backgroundColor: "#fff",
    height: height,
  },
  container: {
    flex: 1,
    marginBottom: 15
  },
  activity: {
    height: height,
    width: width,
  },
  imageContainer: {
    flex: 1,
    height: 250
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
    alignSelf: 'center',
  },
  reviewContainer: {
    flexDirection: 'row',
    color: commonStyle.colors.secondFontColor,
    fontSize: 16,
    padding: 5
  },
  txtReviewContainer: {
    flexDirection: 'row',
    color: commonStyle.colors.secondFontColor,
    fontSize: 16,
    paddingLeft: 5
  },
  txtReviewNumberContainer: {
    flexDirection: 'row',
    color: commonStyle.colors.secondFontColor,
    fontSize: 16
  },
  text: {
    color: commonStyle.colors.primaryFontColor,
    fontSize: 18,
  },
  btnMaps: {
    margin: 5
  },
  textMaps: {
    textDecorationLine: "underline",
    color: commonStyle.colors.primaryColor,
  },
  containerComentaries:{
    marginTop: 15,
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
  rateLocationText: {
    color: "#fff",
    fontSize: 16
  },
  containerInputResponse: {
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
    position: "absolute",
    alignItems: "center",
    width: width,
    bottom: 30
  }, 
  inputResponse: {
    flex: 1,
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginLeft: 5,
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    borderColor: "#e3e3e3"
  },
  btnResponse: {
    padding: 10
  },
  noRatingsText: {
    fontSize: 18,
    color: commonStyle.colors.secondFontColor,
    textAlign: 'center',
  }

});

export default styles