import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TaskList from "./screens/TaskList";
import Auth from "./screens/Auth";
import { createStackNavigator } from "@react-navigation/stack";


const mainRoutes = {
  Auth: {
    name: "Auth",
    component: Auth
  },
  Home: {
    name: "Home",
    component: TaskList
  }
}
const Stack = createStackNavigator();
export default props => (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown:false}}>
    <Stack.Screen name="Auth" component={Auth} />
    <Stack.Screen name="Home" component={TaskList} />
  </Stack.Navigator>
</NavigationContainer>
)

