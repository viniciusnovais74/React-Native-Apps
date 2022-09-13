import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Button from './src/components/Button'
import Display from './src/components/Display'
export default class App extends Component {

  state = {
    displayValue: "0"
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" />
          <Button label="/" />
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="*" />
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" />
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  
  buttons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center"
  }
})