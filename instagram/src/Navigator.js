import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack"
import Feeds from "./screens/Feeds";

// Screens

import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import AddPhoto from "./screens/AddPhoto";
import Icon from "react-native-vector-icons/FontAwesome";

// const authRouter = createStackNavigator({
//  screen: Login, navigationOptions: { title: 'Login' } },
//   Register: { screen: Register, navigationOptions: { title: 'Register' } }
// }, {
//   initialRouteName: 'Login'
// })

const AuthRoute = createStackNavigator()

// const loginOrProfileRouter = authRouter
// {
//   Profile: Profile,
//   Auth: authRouter
// }, {
//   initialRouteName: 'Auth'
// })

const MenuRoutes = [
  {
    name: 'Feeds',
    screen: Feeds,
    navigationOptions: {
      title: 'Feeds',
      tabBarIcon: ({ color }) =>
        <Icon name='home' size={30} color={color} />
    }
  },
  {
    name: 'AddPhoto',
    screen: AddPhoto,
    navigationOptions: {
      title: 'Add Picture',
      tabBarIcon: ({ color }) =>
        <Icon name='camera' size={30} color={color} />
    }
  },
  {
    name: 'Profile',
    screen: () => {
      return (
        <AuthRoute.Navigator screenOptions={{
          headerShown: false
        }}>
          <AuthRoute.Screen name="Login" component={Login} />
          <AuthRoute.Screen name="Register" component={Register} />
          <AuthRoute.Screen name="Profile" component={Profile} />
        </AuthRoute.Navigator>)
    }
    ,
    navigationOptions: {

      title: 'Profile',
      tabBarIcon: ({ color: color }) =>
        <Icon name='user' size={30} color={color} />
    }
  }
]


const MenuConfig = {
  initialRouteName: 'Feed',
  tabBarOptions: {
    showLabel: false,
  }
}

const Tab = createBottomTabNavigator();
export default function Navigator() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="Feed"  >
        {MenuRoutes.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.screen}
            options={item.navigationOptions}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer >
  );
}
