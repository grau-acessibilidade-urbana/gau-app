import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import commonStyle from '../../shared/commonStyle';
import styles from './style';

class PlaceHistory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: this.props.selectedUserRating.placeImage }}
        />

        <ScrollView style={styles.details}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>
              {this.props.selectedUserRating.placeName}
            </Text>
            <View style={styles.containerStar}>
              <Icon name="star" size={27} color={commonStyle.colors.FullStar} />
              <Text style={styles.rating}>
                {this.props.selectedUserRating.score}
              </Text>
            </View>
          </View>

          <Text style={styles.comment}>
            {' '}
            {this.props.selectedUserRating.comment.content}{' '}
          </Text>
          <TouchableOpacity style={styles.btnEdit} activeOpacity={0.7}>
            <Text style={styles.textEdit}>Editar avalição</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnDelete} activeOpacity={0.7}>
            <Text style={styles.textDelete}>Excluir avalição</Text>
          </TouchableOpacity>
        </ScrollView>

        <Header goBack={this.props.navigation.goBack} lightweight />
      </View>
    );
  }
}

const mapStateToProps = ({ places }) => {
  return {
    selectedUserRating: places.selectedUserRating,
  };
};

export default connect(mapStateToProps)(PlaceHistory);
