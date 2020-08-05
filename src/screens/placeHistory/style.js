import { StyleSheet } from 'react-native';
import commonStyle from '../../shared/commonStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '35%',
    resizeMode: 'cover',
  },
  details: {
    height: '70%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: '-10%',
  },
  containerTitle: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 7,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: commonStyle.colors.primaryColor,
  },
  containerStar: {
    flexDirection: 'row',
    backgroundColor: commonStyle.colors.backgroundStar,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  rating: {
    color: commonStyle.colors.primaryFontColor,
    paddingRight: 3,
    fontSize: 16,
  },
  comment: {
    textAlign: 'justify',
    color: commonStyle.colors.primaryFontColor,
    paddingHorizontal: 15,
    fontSize: 15,
  },
  btnEdit: {
    backgroundColor: commonStyle.colors.primaryColor,
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  textEdit: {
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  btnDelete: {
    padding: 10,
    flex: 1,
    marginBottom: 20,
  },
  textDelete: {
    color: commonStyle.colors.primaryColor,
    textDecorationLine: 'underline',
  },
});

export default styles;
