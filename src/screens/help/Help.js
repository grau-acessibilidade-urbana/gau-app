import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import styles from './style';
import commonStyles from '../../shared/commonStyle';
import { setHelpItem } from '../../store/actions/places';

class Help extends Component {
  helpContent = [
    {
      id: '1',
      title: 'Avaliar um local',
      subtitle: 'Não sabe como fazer uma avaliação?',
      text: `Para avaliar é simples, basta encontrar o local através de sua localização ou digitando o nome na barra de pesquisa. Após encontrar o local desejado, clique no botão de avaliar local e respondas as perguntas solicitadas, se não souber uma resposta é só escolher a opção "não sei". Ao final você poderá fazer um comentário para dar mais detalhes sobre a sua avaliação, caso não quiser dizer nada, fique tranquilo que é opcional. Prontinho, só concluir que sua avaliação ja será exibida no aplicativo.`,
    },
    {
      id: '2',
      title: 'Local não encontrado',
      subtitle: 'Não encontrou um local?',
      text:
        'Neste caso pedimos desculpas pelo ocorrido, mas todos os locais são fornecidos pelo Google, ou seja apenas os locais cadastrados no Google serão exibidos no aplicativo',
    },
    {
      id: '3',
      title: 'Editar avaliações',
      subtitle: 'Descubra como editar suas avaliações',
      text: `Para editar uma avaliação, acesse o menu, clique em "Histórico", procure pela local avaliado e clique na opção "Ver mais", em seguida clique em "Editar avaliação". Agora basta fazer as alterações desejadas e ao final, clicar em "Concluir".`,
    },
    {
      id: '4',
      title: 'Resumo de avaliação',
      subtitle: 'Entenda como funciona',
      text:
        'Sempre que você faz uma avaliação de um local, suas respostas são armazenadas em nossa base de dados. Para deixar ainda mais clara a avaliação do local, este resumo informa a resposta dada por um maior número de usuários para cada pergunta. Caso a pergunta obteve mais respostas positivas, um ícone verde positivo será exibido, em caso da maioria das respostas for negativa, um ícone vermelho negativo será exibido.',
    },
    {
      id: '5',
      title: 'Alterar senha',
      subtitle: 'Descubra como alterar sua senha.',
      text:
        'Para alterar sua senha é simples, basta ir até a tela de perfil (acessando pelo menu lateral) e escolher a opção de nova senha. Lembre-se que para alterar a senha é preciso digitar a anterior.',
    },
    {
      id: '6',
      title: 'Comentário do local',
      subtitle: 'Fazer um comentário',
      text:
        'O comentário exibido na página do local é criado no momento em que você fizer uma avaliação, ou seja, não é possível apenas escrever comentários sem fazer uma avaliação. Para fazer um comentário, faça uma pesquisa do local desejado e clique na opção de avaliar o local, responda todas as perguntas e ao final escreva o que desejar.',
    },
  ];

  onSelectOption = (helpItem) => {
    this.props.onSelectOption(helpItem);
    this.props.navigation.navigate('HelpDetails');
  };

  render() {
    return (
      <View style={styles.container}>
        <Header goBack={() => this.props.navigation.navigate('SearchPlaces')} />
        <Text style={styles.title}>Ajuda</Text>

        <FlatList
          style={styles.list}
          data={this.helpContent}
          keyExtractor={(item) => item.id}
          renderItem={({ item, i }) => (
            <TouchableOpacity
              key={i}
              style={styles.box}
              activeOpacity={0.7}
              onPress={() => this.onSelectOption(item)}
            >
              <View>
                <Text style={styles.item}>{item.title}</Text>
                <Text style={styles.subitem}>{item.subtitle} </Text>
              </View>
              <Icon
                name="chevron-right"
                size={40}
                color={commonStyles.colors.secondFontColor}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectOption: (helpItem) => dispatch(setHelpItem(helpItem)),
  };
};

export default connect(null, mapDispatchToProps)(Help);
