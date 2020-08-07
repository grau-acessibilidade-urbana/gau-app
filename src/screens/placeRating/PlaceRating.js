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
import _ from 'lodash';
import commonStyle from '../../shared/commonStyle';
import { ratePlace } from '../../store/actions/places';
import {
  optionsQuestion1,
  optionsQuestion2,
  optionsQuestion3,
  optionsQuestion5,
} from './options';
import styles from './style';

class PlaceRating extends Component {
  state = {
    comment: null,
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.submittingRating && !this.props.submittingRating) {
      this.props.navigation.navigate('PlaceView');
    }
  };

  setOption = (selectedOption, optionsList) => {
    selectedOption.buttonStyle = styles.btnOptionsActive;
    selectedOption.textStyle = styles.txtBtnOptionActive;

    optionsList.forEach((option) => {
      if (selectedOption.key !== option.key) {
        option.buttonStyle = styles.btnOptions;
        option.textStyle = styles.txtBtnOption;
      }
    });
  };

  onSubmit = () => {
    this.props.onRatePlace({
      ...this.state,
      placeId: this.props.selectedPlace.id,
    });
  };

  render() {
    return (
      <View style={styles.container}>
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
                        style={item.buttonStyle}
                        onPress={() => {
                          this.setOption(item, optionsQuestion1);
                          this.setState({ question1: item.key });
                        }}
                      >
                        <Text style={item.textStyle}>{item.text}</Text>
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
                        style={item.buttonStyle}
                        onPress={() => {
                          this.setOption(item, optionsQuestion2);
                          this.setState({ question2: item.key });
                        }}
                      >
                        <Text style={item.textStyle}>{item.text}</Text>
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
                        style={item.buttonStyle}
                        onPress={() => {
                          this.setOption(item, optionsQuestion3);
                          this.setState({ question3: item.key });
                        }}
                      >
                        <Text style={item.textStyle}>{item.text}</Text>
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
                    defaultRating={0}
                    size={30}
                    onFinishRating={(rating) =>
                      this.setState({ question4: rating })
                    }
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
                        style={item.buttonStyle}
                        onPress={() => {
                          this.setOption(item, optionsQuestion5);
                          this.setState({ question5: item.key });
                        }}
                      >
                        <Text style={item.textStyle}>{item.text}</Text>
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
                  onChangeText={(comment) => this.setState({ comment })}
                  value={this.state.comment}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRatePlace: (placeRating) => dispatch(ratePlace(placeRating)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceRating);
