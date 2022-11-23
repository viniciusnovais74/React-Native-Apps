import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";
import { connect } from "react-redux"
function Feeds({posts}) {

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

function mapStateToProps({ posts }) {
  console.log(posts)
  return {
    posts: posts.posts
  }
}

export default connect(mapStateToProps)(Feeds)
