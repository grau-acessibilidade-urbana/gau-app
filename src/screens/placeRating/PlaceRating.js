import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import commonStyle from '../../shared/commonStyle';
import {
  ratePlace,
  setAnswer5,
  setAnswer1,
  setAnswer2,
  setAnswer3,
  setAnswer4,
  setComment,
  updatePlaceRating,
} from '../../store/actions/places';
import {
  optionsQuestion1,
  optionsQuestion2,
  optionsQuestion3,
  optionsQuestion5,
} from './options';
import styles from './style';

class PlaceRating extends Component {
  componentDidUpdate = (prevProps) => {
    if (prevProps.submittingRating && !this.props.submittingRating) {
      if (prevProps.editMode) {
        this.props.navigation.navigate('History');
      } else {
        this.props.navigation.navigate('PlaceView');
      }
    }
  };

  onSubmit = () => {
    if (this.props.editMode) {
      this.props.onUpdatePlaceRating({
        ...this.props,
        placeId: this.props.selectedUserRating.placeId,
      });
    } else {
      this.props.onRatePlace({
        ...this.props,
        placeId: this.props.selectedPlace.id,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header goBack={this.props.navigation.goBack} title="Avaliação" />
        {this.props.submittingRating ? (
          <ActivityIndicator size="large" style={styles.activity} />
        ) : (
          <ProgressSteps
            progressBarColor={commonStyle.colors.secondColor}
            completedProgressBarColor={commonStyle.colors.primaryColor}
            completedStepIconColor={commonStyle.colors.primaryColor}
            activeStepIconColor={commonStyle.colors.secondColor}
            activeStepIconBorderColor={commonStyle.colors.primaryColor}
            disabledStepIconColor={commonStyle.colors.secondColor}
            activeStepNumColor={commonStyle.colors.primaryColor}
          >
            <ProgressStep
              label=""
              previousBtnText="Voltar"
              previousBtnTextStyle={styles.btnSteps}
              nextBtnText="Próximo"
              nextBtnTextStyle={styles.btnSteps}
            >
              <View style={styles.content}>
                <Text style={styles.label}>
                  O local possui obstáculos que impossibilita o deslocamento de
                  qualquer pessoa?
                </Text>
                <View style={styles.containerBtn}>
                  {optionsQuestion1.map((item) => {
                    return (
                      <TouchableOpacity
                        key={item.key}
                        style={
                          this.props.question1 === item.key
                            ? styles.btnOptionsActive
                            : styles.btnOptions
                        }
                        onPress={() => {
                          this.props.onSetAnswer1(item.key);
                        }}
                      >
                        <Text
                          style={
                            this.props.question1 === item.key
                              ? styles.txtBtnOptionActive
                              : styles.txtBtnOption
                          }
                        >
                          {item.text}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              <View style={styles.content}>
                <Text style={styles.label}>
                  O piso do local se encontra em boa qualidade, não apresentando
                  buracos ou elevações?
                </Text>
                <View style={styles.containerBtn}>
                  {optionsQuestion2.map((item) => {
                    return (
                      <TouchableOpacity
                        key={item.key}
                        style={
                          this.props.question2 === item.key
                            ? styles.btnOptionsActive
                            : styles.btnOptions
                        }
                        onPress={() => {
                          this.props.onSetAnswer2(item.key);
                        }}
                      >
                        <Text
                          style={
                            this.props.question2 === item.key
                              ? styles.txtBtnOptionActive
                              : styles.txtBtnOption
                          }
                        >
                          {item.text}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </ProgressStep>

            <ProgressStep
              label=""
              previousBtnText="Voltar"
              previousBtnTextStyle={styles.btnSteps}
              nextBtnText="Próximo"
              nextBtnTextStyle={styles.btnSteps}
            >
              <View>
                <Text style={styles.label}>
                  O sanitário tem área para circulação de uma cadeira de rodas e
                  barras de apoio?
                </Text>
                <View style={styles.containerBtn}>
                  {optionsQuestion3.map((item) => {
                    return (
                      <TouchableOpacity
                        key={item.key}
                        style={
                          this.props.question3 === item.key
                            ? styles.btnOptionsActive
                            : styles.btnOptions
                        }
                        onPress={() => {
                          this.props.onSetAnswer3(item.key);
                        }}
                      >
                        <Text
                          style={
                            this.props.question3 === item.key
                              ? styles.txtBtnOptionActive
                              : styles.txtBtnOption
                          }
                        >
                          {item.text}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              <View>
                <Text style={styles.label}>
                  Um cadeirante consegue se deslocar ou manobrar sua cadeira de
                  rodas no local?
                </Text>
                <View style={styles.containerBtn}>
                  <AirbnbRating
                    reviews={[
                      'Impossível',
                      'Difícil',
                      'Talvez',
                      'Consegue',
                      'Perfeitamente',
                    ]}
                    count={5}
                    defaultRating={this.props.question4}
                    size={30}
                    onFinishRating={(rating) => {
                      this.props.onSetAnswer4(rating);
                    }}
                  />
                </View>
              </View>
            </ProgressStep>

            <ProgressStep
              label=""
              previousBtnText="Voltar"
              previousBtnTextStyle={styles.btnSteps}
              finishBtnText="Concluir"
              finishBtnTextStyle={styles.btnSteps}
              onSubmit={this.onSubmit}
            >
              <View>
                <Text style={styles.label}>
                  O estacionamento dispõe de vagas reservadas para pessoas com
                  deficiência?
                </Text>
                <View style={styles.containerBtn}>
                  {optionsQuestion5.map((item) => {
                    return (
                      <TouchableOpacity
                        key={item.key}
                        style={
                          this.props.question5 === item.key
                            ? styles.btnOptionsActive
                            : styles.btnOptions
                        }
                        onPress={() => {
                          this.props.onSetAnswer5(item.key);
                        }}
                      >
                        <Text
                          style={
                            this.props.question5 === item.key
                              ? styles.txtBtnOptionActive
                              : styles.txtBtnOption
                          }
                        >
                          {item.text}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
              <View style={styles.containerInput}>
                <Text style={styles.label}>
                  Gostaria de dizer algo? Deixe seu comentário.(Opcional)
                </Text>
                <TextInput
                  style={styles.input}
                  numberOfLines={4}
                  onChangeText={(comment) => this.props.onSetComment(comment)}
                  value={this.props.comment}
                  placeholder="Digite seu comentário aqui..."
                />
              </View>
            </ProgressStep>
          </ProgressSteps>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ places }) => {
  return {
    selectedPlace: places.selectedPlace,
    submittingRating: places.submittingRating,
    selectedUserRating: places.selectedUserRating,
    question1: places.question1,
    question2: places.question2,
    question3: places.question3,
    question4: places.question4,
    question5: places.question5,
    comment: places.comment,
    editMode: places.editMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetAnswer1: (answer) => dispatch(setAnswer1(answer)),
    onSetAnswer2: (answer) => dispatch(setAnswer2(answer)),
    onSetAnswer3: (answer) => dispatch(setAnswer3(answer)),
    onSetAnswer4: (answer) => dispatch(setAnswer4(answer)),
    onSetAnswer5: (answer) => dispatch(setAnswer5(answer)),
    onSetComment: (comment) => dispatch(setComment(comment)),
    onRatePlace: (placeRating) => dispatch(ratePlace(placeRating)),
    onUpdatePlaceRating: (placeRating) =>
      dispatch(updatePlaceRating(placeRating)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceRating);
