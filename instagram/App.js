import React from "react";
import { SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import { View, Text } from "react-native";
import Post from "./src/components/Post";
// Rest of the import statements
import { useFonts } from 'expo-font';
import Feeds from "./src/screens/Feeds";
import Navigator from "./src/Navigator";



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
      <Navigator />
    </View>
  )
}