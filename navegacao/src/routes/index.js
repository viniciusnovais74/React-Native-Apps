import { SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";
import Tab from "./Tab";
import Drawer from "./Drawer";
import 'react-native-gesture-handler';
import 'react-native-reanimated'

export default function Routes() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <Stack /> */}
        <Drawer/>
        {/* <Tab /> */}
      </NavigationContainer>
    </SafeAreaView>
  )
}