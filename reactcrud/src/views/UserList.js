
import { Avatar, ListItem } from "@rneui/themed";
import React from "react";
import { FlatList, View } from "react-native";
import Users from "../data/Users";

export default ({ navigation }) => {


  function getUserItem({ item: user }) {

    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => navigation.navigate('UserForm', user)}>
        <Avatar rounded source={{ uri: user.photoUrl }} />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: 'bold' }}>
            {user.name}
          </ListItem.Title>
          <ListItem.Subtitle>
            {user.email}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={Users}
        renderItem={getUserItem}
      />
    </View>
  )
}