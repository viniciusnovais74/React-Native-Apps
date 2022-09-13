import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import params from './src/params'
import Field from './src/components/Field'
import Flag from './src/components/Flag'
import { createMinedBoard } from './src/functions'
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Iniciando o Campo Minado</Text>
        <Text >Tamanho da grade:{params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={6} />
        <Field mined opened exploded />
        <Field flagged />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f5fcff"
  }
})