import React from "react";
import { View, Text } from "react-native";
// Rest of the import statements
import { useFonts } from 'expo-font';

import Login from "./src/screens/Login";



export default function App() {
  let [fontsLoaded] = useFonts({
    'shelter': require('./assets/fonts/shelter.otf'),
  });

  if (!fontsLoaded) {
    return null
  }

  const comments = [
    {
      nickname: "Joana Elena Silva",
      comment: "Excelente foto!"
    }, {
      nickname: "Maria Eduarda",
      comment: "Muito bom!"
    }
  ]
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  )
}