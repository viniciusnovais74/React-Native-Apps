import React from "react";
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Provider } from "react-redux";
import storeConfig from "./src/store/storeConfig";
import Navigator from "./src/Navigator";

import axios from "axios";
axios.defaults.baseURL = "https://course-app-s-default-rtdb.firebaseio.com/"



export default function App() {
  let [fontsLoaded] = useFonts({
    'shelter': require('./assets/fonts/shelter.otf'),
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={storeConfig()}>
      <Navigator />
    </Provider>
  )
}