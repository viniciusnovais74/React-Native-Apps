import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image
} from "react-native"

import icon from "../../assets/imgs/icon.png"

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.image} source={icon}/>
        <Text style={styles.title}>Instagram</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#BBB"
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain'
  },
  title: {
    color: "#000",
    fontFamily: 'shelter',
    height:30,
    fontSize:28
  }
})