import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AutoComplete extends Component {
  blur() {
    this.inputRef.blur();
  }

  render() {
    return (
      <View>
        <View style={this.props.containerStyle}>
          <TextInput
            placeholder="Digite sua pesquisa..."
            style={this.props.inputStyle}
            onChangeText={this.props.onChangeText}
            value={this.props.query}
            ref={(input) => {
              this.inputRef = input;
            }}
          />
          <TouchableWithoutFeedback onPress={this.props.onSearch}>
            <Icon name="search" size={25} color="#3197b5" />
          </TouchableWithoutFeedback>
        </View>
        {this.props.data && this.props.data.length > 0 && (
          <View style={styles.list}>
            <FlatList
              data={this.props.data}
              renderItem={this.props.renderItem}
              keyExtractor={this.props.keyExtractor}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="always"
            />
          </View>
        )}
      </View>
    );
  }
}

export default AutoComplete;

const styles = StyleSheet.create({
  list: {
    marginTop: 5,
    height: 400,
    backgroundColor: '#FFF',
    padding: 15,
  },
});
