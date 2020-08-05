import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyles from '../shared/commonStyle';

export default class HistoryBox extends Component {
  render() {
    return (
      <View style={styles.containerHistory}>
        <Image style={styles.placeImage} source={{ uri: this.props.photo }} />
        <View style={styles.dataPlace}>
          <View style={styles.titleBox}>
            <Text style={styles.textTitle}>{this.props.place}</Text>
            <View style={styles.containerStar}>
              <Icon
                name="star"
                size={25}
                color={commonStyles.colors.FullStar}
              />
              <Text style={styles.textStar}>{this.props.rating}</Text>
            </View>
          </View>
          <Text style={styles.textDate}>{this.props.date}</Text>
          <TouchableHighlight
            style={styles.more}
            onPress={() => this.props.navigation.navigate('PlaceHistory')}
          >
            <Text style={styles.textMore}>Ver mais</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  textDate: {
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
