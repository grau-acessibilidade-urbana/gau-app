import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import placementImage from './placementImage';
import styles from './styles';
import commonStyle from '../../shared/commonStyle';

const Header = ({ goBack, lightweight = false }) => {
  // console.log('p', props)

  return (
    <View style={[styles.header, lightweight ? styles.headerLigth :  styles.headerDark]}>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name="chevron-left" size={40} color={ lightweight ? '#000' : "#fff"} />
      </TouchableOpacity>
    </View>
  )
}

const PlaceView = ({ ...props }) => {
  // console.log('P', props)
  return (
    <View style={styles.container}>
      <Header goBack={props.navigation.goBack} lightweight />
      <View style={styles.placeContainer}>
        <View style={styles.imageContainer}>
        <Text>img</Text>
          {/* <Image style={styles.imageLocation} 
            source={{ uri: placementImage }}/> */}
        </View>
        <View style={styles.detailLocalContainer}>
          <Text style={styles.detailLocalContainer_title}>Fatec São Roque</Text>
          <View style={styles.reviewContainer}> 
            <Text style={styles.reviewContainer}>4.0</Text>
            {/* <View>
              
            </View> */}
            <Text style={styles.reviewContainer}>(10 Avaliações)</Text>
          </View>
        </View>
      </View>
    </View>
  )
};

export default PlaceView;