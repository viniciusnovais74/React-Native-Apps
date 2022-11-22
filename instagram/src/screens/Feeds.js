import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

export default function () {

  const posts = [
    {
      id: Math.random(),
      nickname: "Joana Elena Silva",
      email: "faker@mail.com",
      image: require("../../assets/imgs/fence.jpg"),
      comments: [
        {
          nickname: "Joana Elena Silva",
          comment: "Excelente foto!"
        }, {
          nickname: "Maria Eduarda",
          comment: "Muito bom!"
        }]
    }]
  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={posts} keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <Post key={item.id} {...item} />} />
    </View>
  )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})