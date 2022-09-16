import React, { Component } from "react";
import { Modal, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput, Text } from "react-native";

import commonStyle from "../commonStyle";
const initialState = { desc: '' }
export default class AddTask extends Component {

  state = {
    ...initialState
  }


  render() {

    const { isVisible, onCancel } = this.props
    return (
      <Modal transparent={true} visible={isVisible} onRequestClose={onCancel} animationType="slide">
        <TouchableWithoutFeedback onPress={onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.header}>Nova Tarefa</Text>
          <TextInput style={styles.input} placeholder="Informe a Descrição" value={this.state.desc} onChangeText={e => this.setState({ desc: e })} />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={onCancel} >
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity><Text style={styles.button}>Salvar</Text></TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  container: {
    backgroundColor: '#FFF'
  },
  header: {
    fontFamily: commonStyle.fontFamily,
    backgroundColor: commonStyle.colors.today,
    color: commonStyle.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 18
  },
  input: {
    fontFamily: commonStyle.fontFamily,
    height: 40,
    margin: 15,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 6
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStyle.colors.today
  },
  date: {
    fontFamily: commonStyle.fontFamily,
    fontSize: 20,
    marginLeft: 15
  }
})