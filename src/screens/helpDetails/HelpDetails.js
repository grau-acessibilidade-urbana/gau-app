import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import styles from './style';

class HelpDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header goBack={this.props.navigation.goBack} />
        <Text style={styles.title}>Ajuda</Text>
        <Text style={styles.titleQuestion}>{this.props.helpItem.title}</Text>
        <Text style={styles.text}>{this.props.helpItem.text}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ places }) => {
  return {
    helpItem: places.helpItem,
  };
};

export default connect(mapStateToProps)(HelpDetails);
