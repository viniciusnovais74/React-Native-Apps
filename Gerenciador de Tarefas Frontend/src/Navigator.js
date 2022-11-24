import React from "react";
import { createSwitchNavigator } from "@react-navigation/compat"
import { NavigationContainer } from "@react-navigation/native";
import TaskList from "./screens/TaskList";
import Auth from "./screens/Auth";


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

const MainContainer = createSwitchNavigator(mainRoutes, {
  initialRouteName: "Auth"
})

export default props => (
<TaskList/>
)

