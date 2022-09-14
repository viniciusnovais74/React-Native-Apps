import React from "react";
import { SafeAreaView, Text } from "react-native";
import TextCenter from "./components/TextCenter";
import TelaA from "./views/TelaA";
import TelaB from "./views/TelaB";
export default () => (
  <SafeAreaView style={{ flex: 1 }}>
    <TelaA />
    <TelaB />
  </SafeAreaView>
)