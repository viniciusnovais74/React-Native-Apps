import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaA from "../views/TelaA";

const Drawer = createDrawerNavigator()

export default () => (
  <Drawer.Navigator initialRouteName="TelaA">
    <Drawer.Screen options={{ title: "Pagina Inicial" }} name="TelaA" component={TelaA} />
  </Drawer.Navigator>
)