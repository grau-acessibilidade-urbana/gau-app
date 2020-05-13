import React from 'react';
import { FlatList, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const autoComplete = props => {

    return (
        <View>
            <View style={props.containerStyle}>
                <TextInput 
                    placeholder='Digite sua pesquisa...' 
                    style={props.inputStyle} 
                    onChangeText={props.onChangeText}
                    value={props.query}
                />
                <TouchableWithoutFeedback onPress={props.onSearch}>
                    <Icon name='search' size={25} color='#3197b5'></Icon>
                </TouchableWithoutFeedback>
            </View>
            { props.visible && <View style={styles.list}>
                <FlatList 
                    data={props.data}
                    renderItem={props.renderItem}
                    keyExtractor={props.keyExtractor}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flexGrow: 1}}
                />
            </View> }
        </View>
    )
}

export default autoComplete;

const styles = StyleSheet.create({
    list: {
        marginTop: 5,
        height: 400,
        backgroundColor: '#FFF',
        padding: 15,
      }
})

