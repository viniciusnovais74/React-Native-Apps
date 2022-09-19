import React from 'react';
import * as Font from 'expo-font';
import TaskList from './src/screens/TaskList';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


let customFonts = {
  'Lato': require('./assets/fonts/Lato.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (<GestureHandlerRootView style={{flex:1}}><TaskList /></GestureHandlerRootView>)
  }
}