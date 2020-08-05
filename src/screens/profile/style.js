/* eslint-disable no-dupe-keys */
import { StyleSheet, Dimensions } from 'react-native';
import commonStyles from '../../shared/commonStyle';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  activity: {
    height,
    width,
  },
  contantUser: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  photoContainer: {
    height: 100,
    width: 100,
  },
  photoUser: {
    width: '100%',
    height: '100%',
    borderRadius: 80,
    borderWidth: 4,
    borderColor: commonStyles.colors.primaryColor,
  },
  edit: {
    position: 'absolute',
    backgroundColor: commonStyles.colors.primaryColor,
    width: 36,
    height: 36,
    bottom: -3,
    right: -7,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    padding: 5,
    fontSize: 18,
    color: commonStyles.colors.primaryColor,
  },
  email: {
    fontSize: 16,
    padding: 3,
    fontSize: 18,
    color: commonStyles.colors.secondFontColor,
  },
  containerForm: {
    flex: 1,
  },
  containerInput: {
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  containerInputPassword: {
    width: '73%',
  },
  label: {
    color: commonStyles.colors.secondFontColor,
    marginBottom: 5,
    fontSize: 18,
  },
  input: {
    color: commonStyles.colors.primaryFontColor,
    borderWidth: 1,
    borderColor: commonStyles.colors.thirdColor,
    borderRadius: 5,
    padding: 5,
    fontSize: 18,
  },
  inputDisabled: {
    backgroundColor: '#f7f7f7',
  },
  containerEditPassword: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editPassword: {
    paddingTop: 15,
    color: commonStyles.colors.secondFontColor,
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  btnSave: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    margin: 15,
    backgroundColor: commonStyles.colors.primaryColor,
    borderRadius: 10,
  },
  txtBtnSave: {
    color: '#fff',
    fontSize: 18,
  },
  btnCancel: {
    margin: 15,
    padding: 7,
  },
  txtBtnCancel: {
    color: commonStyles.colors.primaryColor,
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});

export default styles;
