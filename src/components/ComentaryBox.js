import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import commonStyle from '../shared/commonStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ComentaryBox = ({ name, text, classification, date, likes = 0, image, responses, hideClassification = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.comentaryBox}>
        <View style={{ flex: 1, paddingRight: 5 }}>
          <Image source={{ uri: image }} style={styles.imageUser} />
          {!hideClassification && (
            <View style={[styles.iconWithTex, styles.classificationBox]}>
              <Icon name="star" size={20} color={ commonStyle.colors.FullStar }/>
              <Text style={commonStyle.colors.primaryFontColor}>
                {Number(classification).toFixed(1)}
              </Text>
            </View>)}
        </View>
        <View style={{ flex: 5 }}>
          <Text style={styles.comentaryName}>{name}</Text>
          <Text style={styles.comentaryText}>{text}</Text>
          <View style={styles.comentaryBoxFooter}>
            <Text style={styles.secondaryText}>{date}</Text>
            <View style={styles.iconWithTex}>
              <Icon name="chat-bubble-outline" size={18} color={ commonStyle.colors.primaryColor }/>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.principalColorText}> Responder </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.iconWithTex} activeOpacity={0.5}>
              <Icon name="thumb-up" size={18} color={ commonStyle.colors.primaryColor } />
              <Text style={styles.primaryText}> {likes} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {
        responses && (
          <View style={{ width: '85%', alignSelf: 'flex-end' }}>
            {
              <FlatList
                data={responses}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                  <ComentaryBox style={styles.comentaryBoxResponse} key={item.id} {...item} hideClassification />
                }
              />
            }
          </View>
        )
      }
    
    

    </View>
  );
}

export default ComentaryBox;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
    padding: 7,
    backgroundColor: "#fcfcfc"
  },  
  comentaryBox: {
    flexDirection: 'row',
  },
  comentaryBoxResponse: {
    width: '90%',
    justifyContent: 'flex-end',
  },
  imageUser: {
    alignSelf: 'center',
    width: 55,
    height: 55,
    resizeMode: 'cover',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: commonStyle.colors.primaryColor
  },
  comentaryName: {
    fontSize: 18,
    color: commonStyle.colors.primaryColor,
  },
  comentaryText: {
    color: commonStyle.colors.primaryFontColor,
    fontSize: 14,
  },
  comentaryBoxFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  iconWithTex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  primaryText: {
    color: commonStyle.colors.primaryFontColor,
    paddingLeft: 5
  },
  principalColorText: {
    color: commonStyle.colors.primaryColor,
    paddingLeft: 5
  },
  secondaryText: {
    color: commonStyle.colors.secondFontColor,
  },
  classificationBox: {
    backgroundColor: '#FFF6DA',
    width: 55,
    alignSelf: 'center',
    marginTop: 5
  }
});