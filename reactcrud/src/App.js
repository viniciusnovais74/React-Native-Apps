import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AntDesign from "react-native-vector-icons/AntDesign"
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";
import { Button } from "@rneui/base";

export default _ => {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
        <Stack.Screen name="UserList" component={UserList} options={({ navigation }) => {
          return {
            title: "Lista de Usuários", headerRight: () => (
              <Button
                onPress={() => navigation.navigate("UserForm")}
                type="clear"
                icon={<AntDesign name="addfile" size={25} color="#FFF" />}
              />
            )
          }
        }
       } />
        <Stack.Screen name="UserForm" component={UserForm} options={{ title: "Formulario de Usuário" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#F4511E'
  },
  headerTintColor: "#FFF",
  headerTitleStyle: {
    fontWeight: "bold"
  }
}