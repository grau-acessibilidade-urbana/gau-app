import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Rating } from 'react-native-elements';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import ComentaryBox from '../../components/ComentaryBox';
import Header from '../../components/Header';
import commonStyle from '../../shared/commonStyle';
import { likeComment, replyComment } from '../../store/actions/places';
import styles from './styles';

class PlaceView extends Component {
  state = {
    selectedCommentId: null,
    response: null,
  };

  ratePlace = () => {
    if (this.props.loggedUser) {
      this.props.navigation.navigate('PlaceRating');
    } else {
      this.props.navigation.navigate('Login');
    }
  };

  getThumbsStyle = (question) => {
    if (this.props.selectedPlace.ratingsSummary[question]) {
      return styles.thumbsUp;
    }
    return styles.thumbsDown;
  };

  getThumbsIcon = (question) => {
    if (this.props.selectedPlace.ratingsSummary[question]) {
      return 'thumb-up';
    }
    return 'thumb-down';
  };

  onReplySend = () => {
    this.props.onReplyComment(
      this.props.selectedPlace._id,
      this.state.selectedCommentId,
      {
        content: this.state.response,
      }
    );
    this.setState({ selectedCommentId: null });
  };

  render() {
    return (
      <View style={styles.containerView}>
        <Header goBack={this.props.navigation.goBack} lightweight />
        <ScrollView>
          {this.props.isLoading ? (
            <ActivityIndicator style={styles.activity} size="large" />
          ) : (
            <View style={styles.container}>
              <View style={styles.placeContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.imageLocation}
                    source={{ uri: this.props.selectedPlace.image }}
                  />
                  {this.props.loggedUser &&
                    !this.props.selectedPlace.userReviewed && (
                      <TouchableOpacity
                        style={styles.rateLocationButton}
                        activeOpacity={0.8}
                        onPress={this.ratePlace}
                      >
                        <Text style={styles.rateLocationText}>
                          Avaliar local
                        </Text>
                      </TouchableOpacity>
                    )}
                </View>
                <View style={styles.detailLocalContainer}>
                  <Text style={styles.detailLocalContainer_title}>
                    {this.props.selectedPlace.name}
                  </Text>
                  <View style={styles.reviewContainer}>
                    <Text style={styles.txtReviewNumberContainer}>
                      {' '}
                      {this.props.selectedPlace.averageScore
                        ? this.props.selectedPlace.averageScore.toFixed(1)
                        : 0}{' '}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Rating
                        imageSize={20}
                        readonly
                        startingValue={
                          this.props.selectedPlace.averageScore || 0
                        }
                      />
                    </View>
                    <Text style={styles.txtReviewContainer}>
                      {' '}
                      ({this.props.selectedPlace.reviewers || 0} Avaliações)
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.text}>
                      {this.props.selectedPlace.address + ' '}
                      <TouchableWithoutFeedback
                        onPress={() =>
                          this.props.navigation.navigate('SearchPlaces')
                        }
                      >
                        <Text style={styles.textMaps}>Ver no mapa</Text>
                      </TouchableWithoutFeedback>
                    </Text>
                  </View>
                  {this.props.selectedPlace.reviewers && (
                    <View style={styles.summary}>
                      <Text style={styles.sectionTitle}>
                        Resumo das avaliações
                      </Text>
                      <View style={styles.summaryDetails}>
                        <View
                          style={[
                            styles.thumbsContainer,
                            this.getThumbsStyle('question1'),
                          ]}
                        >
                          <Icon
                            style={styles.thumbs}
                            name={this.getThumbsIcon('question1')}
                            size={15}
                            color="#fff"
                          />
                        </View>
                        <Text style={styles.summaryText}>
                          Local não possui obstáculos
                        </Text>
                      </View>
                      <View style={styles.summaryDetails}>
                        <View
                          style={[
                            styles.thumbsContainer,
                            this.getThumbsStyle('question2'),
                          ]}
                        >
                          <Icon
                            style={styles.thumbs}
                            name={this.getThumbsIcon('question2')}
                            size={15}
                            color="#fff"
                          />
                        </View>
                        <Text style={styles.summaryText}>
                          Piso de qualidade
                        </Text>
                      </View>
                      <View style={styles.summaryDetails}>
                        <View
                          style={[
                            styles.thumbsContainer,
                            this.getThumbsStyle('question3'),
                          ]}
                        >
                          <Icon
                            style={styles.thumbs}
                            name={this.getThumbsIcon('question3')}
                            size={15}
                            color="#fff"
                          />
                        </View>
                        <Text style={styles.summaryText}>
                          Sanitário com área ampla
                        </Text>
                      </View>
                      <View style={styles.summaryDetails}>
                        <View
                          style={[
                            styles.thumbsContainer,
                            this.getThumbsStyle('question4'),
                          ]}
                        >
                          <Icon
                            style={styles.thumbs}
                            name={this.getThumbsIcon('question4')}
                            size={15}
                            color="#fff"
                          />
                        </View>
                        <Text style={styles.summaryText}>
                          Possibilidade de um cadeirante se deslocar
                        </Text>
                      </View>
                      <View style={styles.summaryDetails}>
                        <View
                          style={[
                            styles.thumbsContainer,
                            this.getThumbsStyle('question5'),
                          ]}
                        >
                          <Icon
                            style={styles.thumbs}
                            name={this.getThumbsIcon('question5')}
                            size={15}
                            color="#fff"
                          />
                        </View>
                        <Text style={styles.summaryText}>
                          Vagas reservadas para portadores de deficiência
                        </Text>
                      </View>
                    </View>
                  )}
                  <View style={styles.containerComentaries}>
                    <Text
                      style={[styles.sectionTitle, styles.sectionTitleSpacing]}
                    >
                      Comentários
                    </Text>
                    {this.props.comments && this.props.comments.length > 0 ? (
                      <FlatList
                        data={this.props.comments}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                          <ComentaryBox
                            key={item._id}
                            onLike={(commentId) => {
                              this.props.onLikeComment(
                                this.props.selectedPlace._id,
                                commentId
                              );
                            }}
                            onReply={(commentId) => {
                              this.setState({ selectedCommentId: commentId });
                            }}
                            {...item}
                          />
                        )}
                      />
                    ) : (
                      <View>
                        <Text style={styles.noRatingsText}>
                          O local ainda não possui avaliação, seja o primeiro a
                          avaliar
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          )}
        </ScrollView>

        {this.state.selectedCommentId && (
          <View style={styles.containerInputResponse}>
            <TextInput
              autoFocus
              style={styles.inputResponse}
              placeholder="Digite sua resposta"
              value={this.state.response}
              onChangeText={(value) => this.setState({ response: value })}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btnResponse}
              onPress={this.onReplySend}
            >
              <MatIcon
                name="send"
                size={30}
                color={commonStyle.colors.primaryColor}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ places, users }) => {
  return {
    selectedPlace: places.selectedPlace,
    comments: places.comments,
    currentLocation: places.currentLocation,
    loggedUser: users.loggedUser,
    isLoading: places.loadingRating,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLikeComment: (placeId, commentId) =>
      dispatch(likeComment(placeId, commentId)),
    onReplyComment: (placeId, commentId, response) =>
      dispatch(replyComment(placeId, commentId, response)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceView);
