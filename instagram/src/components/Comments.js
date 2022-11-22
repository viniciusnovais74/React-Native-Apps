import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert
} from "react-native";

export default function Comments({ comments }) {

  let view = null
  if (comments) {
    view = comments.map((item, index) => {
      return (
        <View style={styles.commentContainer} key={index}>
          <Text style={styles.nickname}>{item.nickname}</Text>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      )
    })
  }
  return (
    <View style={styles.container}>
      {view}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marign: 10
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  nickname: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#444'
  },
  comment: {
    color: '#555'
  }
})