import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from "../views/TelaA";

const Tab = createBottomTabNavigator()

export default () => (
  <Tab.Navigator initialRouteName="TelaA">
    <Tab.Screen options={{ title: "Pagina Inicial" }} name="TelaA" component={TelaA} />
  </Tab.Navigator>
)