import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import TelaA from "../views/TelaA";

const Tab = createBottomTabNavigator()

export default () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'ios-list-box' : 'ios-list';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })} initialRouteName="Home">
    <Tab.Screen options={{ title: "Pagina Inicial" }} name="Home" component={TelaA} />
    <Tab.Screen options={{ title: "Pagina Inicial" }} name="Settings" component={TelaA} />
  </Tab.Navigator>
)