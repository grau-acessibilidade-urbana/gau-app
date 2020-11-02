import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import commonStyle from '../../shared/commonStyle';
import styles from './style';
import { deletePlaceRating } from '../../store/actions/places';

class PlaceHistory extends Component {
  deleteUserRating = () => {
    this.props.navigation.goBack();
    this.props.onDeleteUserRating(this.props.selectedUserRating.placeId);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={
            this.props.selectedUserRating.placeImage
              ? { uri: this.props.selectedUserRating.placeImage }
              : require('../../../assets/imgs/default-image.png')
          }
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
            {this.props.selectedUserRating.comment
              ? ` ${this.props.selectedUserRating.comment.content} `
              : ''}
          </Text>
          <TouchableOpacity
            style={styles.btnEdit}
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('PlaceRating')}
          >
            <Text style={styles.textEdit}>Editar avalição</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.deleteUserRating}
            style={styles.btnDelete}
            activeOpacity={0.7}
          >
            <Text style={styles.textDelete}>Excluir avalição</Text>
          </TouchableOpacity>
        </ScrollView>

        <Header
          goBack={this.props.navigation.goBack}
          lightweight
          title="Detalhes da avaliação"
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUserRating: (placeId) => dispatch(deletePlaceRating(placeId)),
  };
};

const mapStateToProps = ({ places }) => {
  return {
    selectedUserRating: places.selectedUserRating,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceHistory);
