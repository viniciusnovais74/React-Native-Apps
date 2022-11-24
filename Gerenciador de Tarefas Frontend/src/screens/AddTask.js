import React, { Component } from "react";
import { Modal, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput, Text } from "react-native";
import moment from "moment"
import commonStyle from "../commonStyle";
import DateTimePicker from "@react-native-community/datetimepicker"
const initialState = { desc: '', date: new Date(), showDatePicker: false }
export default class AddTask extends Component {

  state = {
    ...initialState,
  }

  save = () => {

    const newTask = {
      ...this.state
    }
    this.props.onSave && this.props.onSave(newTask)
    this.setState({ ...initialState })
  }

  getDatePicker = () => {
    let datePicker = <DateTimePicker value={this.state.date}
      onChange={(_, date) => this.setState({ date, showDatePicker: false })}
      mode='date' />

    const dateString = moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')

    if (Platform.OS === 'android') {
      datePicker = (
        <View>
          <TouchableOpacity onPress={() => this.setState({ showDatePicker: true })}>
            <Text style={styles.date}>
              {dateString}
            </Text>
          </TouchableOpacity>
          {this.state.showDatePicker && datePicker}
        </View>
      )
    }

    return datePicker
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
          {this.getDatePicker()}
          <View style={styles.buttons}>
            <TouchableOpacity onPress={onCancel} >
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.save()}>
              <Text style={styles.button}>Salvar</Text>
            </TouchableOpacity>
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