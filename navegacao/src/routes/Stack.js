import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaA from "../views/TelaA";

const Stack = createNativeStackNavigator()

export default () => (
  <Stack.Navigator initialRouteName="TelaA">
    <Stack.Screen options={{ title: "Pagina Inicial" }} name="TelaA" component={TelaA} />
  </Stack.Navigator>
)