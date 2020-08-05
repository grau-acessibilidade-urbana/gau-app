import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AirbnbRating } from 'react-native-elements';
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';
import commonStyle from '../../shared/commonStyle';
import styles from './style';

const options = [
  {
    key: 'nao',
    text: 'Não',
  },
  {
    key: 'sim',
    text: 'Sim',
  },
  {
    key: 'naosei',
    text: 'Não sei',
  },
];

export default class PlaceRating extends Component {
  state = {
    text: null,
  };

  // eslint-disable-next-line class-methods-use-this
  ratingCompleted(rating) {
    console.log('------------------------------------------');
    console.log('Rating is: ' + rating);
  }

  render() {
    return (
      <View style={styles.container}>
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
                {options.map((item) => {
                  return (
                    <TouchableOpacity key={item.key} style={styles.btnOptions}>
                      <Text style={styles.txtBtnOption}>{item.text}</Text>
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
                {options.map((item) => {
                  return (
                    <TouchableOpacity key={item.key} style={styles.btnOptions}>
                      <Text style={styles.txtBtnOption}>{item.text}</Text>
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
                {options.map((item) => {
                  return (
                    <TouchableOpacity key={item.key} style={styles.btnOptions}>
                      <Text style={styles.txtBtnOption}>{item.text}</Text>
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
                  onFinishRating={this.ratingCompleted}
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
          >
            <View>
              <Text style={styles.label}>
                O estacionamento dispõe de vagas reservadas para pessoas com
                deficiência?
              </Text>
              <View style={styles.containerBtn}>
                {options.map((item) => {
                  return (
                    <TouchableOpacity key={item.key} style={styles.btnOptions}>
                      <Text style={styles.txtBtnOption}>{item.text}</Text>
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
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
                placeholder="Digite seu comentário aqui..."
              />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}
