import { StyleSheet } from 'react-native';
import commonStyles from '../../shared/commonStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: commonStyles.colors.primaryColor,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
  box: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#cecece',
    marginLeft: 10,
    marginRight: 10,
    padding: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    color: commonStyles.colors.primaryColor,
    fontSize: 18,
  },
  subitem: {
    color: commonStyles.colors.secondFontColor,
  },
  button: {
    backgroundColor: 'aqua',
  },
});

export default styles;
