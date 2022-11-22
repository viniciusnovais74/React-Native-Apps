import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

// Screens
import Feeds from "./screens/Feeds";
import { Icon } from "react-native-vector-icons/FontAwesome";


const MenuRoutes = [
  {
    Feed: {
      name: "Feed",
      screen: Feeds,
      navigationOptions: {
        title: "Feed",
        tabBarIcon: ({ color }) => <Icon name="fa-home" size={30} color={color} />
      }
    }
  }, {
    Add: {
      name: "Add Photo",
      screen: Feeds,
      navigationOptions: {
        title: "Add Picture",
        tabBarIcon: ({ color }) => <Icon name="fa-plus-square" size={30} color={color} />
      }
    }
  }, {
    Profile: {
      name: "Profile",
      screen: Feeds,
      navigationOptions: {
        title: "Profile",
        tabBarIcon: ({ color }) => <Icon name="fa-user" size={30} color={color} />
      }
    }
  }
]

const MenuConfig = {
  initialRouteName: "Feed",
  tabBarOptions: {
    showLabel: false
  }
}
export default MenuNavigation = createBottomTabNavigator(menuRoutes, menuConfig);