import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import commonStyle from '../../shared/commonStyle';
import ComentaryBox from '../../components/ComentaryBox';

import placementImage from './placementImage';
import styles from './styles';

const comentaries = [
  {
    id: 1,
    name: 'Vanessa',
    image: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083379_960_720.jpg',
    classification: 4,
    text: 'É importante questionar o quanto a execução dos pontos do programa acarreta um processo de reformulação e modernização das novas proposições.',
    likes: 2,
    date: '24/02/2020',
    responses: [
      {
        id: 2,
        name: 'Thiago',
        text: 'É importante questionar o quanto a execução dos pontos do programa.',
        date: '27/02/2020',
      }
    ]
  },
  {
    id: 3,
    name: 'Julia',
    classification: 5,
    text: 'lorem ipsum',
    responses: [
      {
        id: 1,
        name: 'Thiago',
        text: 'É importante questionar o quanto a execução dos pontos do programa.',
        date: '27/02/2020',
      },
      {
        id: 2,
        name: 'Bruno',
        text: 'É importante questionar o quanto a execução dos pontos do programa.',
        date: '27/02/2020',
      }
    ]
  }

];

const PlaceView = ({ ...props }) => {
  // console.log('P', props)
  return (
    <View>
      <Header goBack={props.navigation.goBack} lightweight />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.placeContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.imageLocation}
                source={{ uri: placementImage }} />
              <TouchableOpacity style={styles.rateLocationButton}>
                <Text style={styles.rateLocationText}>Avaliar local</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.detailLocalContainer}>
              <Text style={styles.detailLocalContainer_title}>Fatec São Roque</Text>
              <View style={styles.reviewContainer}>
                <Text style={styles.reviewContainer}>4.0</Text>
                <View style={{ flexDirection: 'row' }}>
                  {
                    [...Array(Number(4)).keys()]
                      .fill('goldenStar').map((s, i) => <Icon
                        name="star"
                        size={20}
                        key={i}
                        color={
                          commonStyle.colors.FullStar
                        }
                      />)
                  }
                  {
                    [...Array(Number(5 - 4)).keys()].map((e,i) => <Icon
                      name="star"
                      key={i * Math.random()}
                      size={20}
                      color={commonStyle.colors.EmptyStar}
                    />)
                  }
                </View>
                <Text style={styles.reviewContainer}>(10 Avaliações)</Text>
              </View>
              <View>
                <Text style={styles.text}>Rua Marechal Deodoro da Fonseca, 132 - Centro, São Roque - SP, 18130-070 - <Text>Ver no mapa</Text></Text>
              </View>
              <View>
                {
                  comentaries.map(comentary => <ComentaryBox key={comentary.id} {...comentary} />)
                }
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
};

export default PlaceView;