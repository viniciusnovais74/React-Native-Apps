import React from "react";
import { Gravatar } from "react-native-gravatar";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Image } from "react-native"

import icon from "../../assets/imgs/icon.png"

function Header({ name, email }) {

  name = name || "Anonymous"
  const gravatar = email ? (<Gravatar options={{ email, secure: true }} style={styles.avatar} />) : null;
  
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image style={styles.image} source={icon} />
        <Text style={styles.title}>Instagram</Text>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.user}>{name}</Text>
        {gravatar}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#BBB",
    flexDirection: "row",
    justifyContent: "space-between"
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
    height: 30,
    fontSize: 28
  }
})

function mapStateToProps({ user }) {
  return {
    name: user.name,
    email: user.email
  }
}

export default connect(mapStateToProps, null)(Header)