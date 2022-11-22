import React from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import AddComment from "./AddComment";
import Author from "./Author";
import Comments from "./Comments";

export default function Post({ image, comments }) {

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email={"viniciusnovais74@gmail.com"} nickname={"Oi"} />
      <Comments comments={comments} />
      <AddComment/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'contain'
  }
})