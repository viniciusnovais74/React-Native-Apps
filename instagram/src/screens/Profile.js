import React from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions/user";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Gravatar } from "react-native-gravatar";

function Profile({ navigation, onLogout, email, name }) {

  function logout() {
    onLogout();
    navigation.navigate("Login")
  }

  const options = { email, secure: true };

  return (
    <View style={styles.container}>
      <Gravatar options={options} style={styles.avatar} />
      <Text style={styles.nickname}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <TouchableOpacity onPress={() => logout()} style={styles.buttom}>
        <Text style={styles.buttomText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    width: 150,
    height: 150,
    marginTop: 100,
    borderRadius: 75
  },
  nickname: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold'
  },
  email: {
    marginTop: 20,
    fontSize: 25
  },
  buttom: {
    padding: 10,
    backgroundColor: '#4286f4',
    marginTop: 30
  },
  buttomText: {
    color: '#FFF',
    fontSize: 20
  }
})


function mapStateToProps({ user }) {
  return {
    email: user.email,
    name: user.name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)