import React from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/user";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

function Login({ onLogin, navigation }) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  function signIn() {
    onLogin({ email, password, name });
    navigation.navigate("Profile");
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={e => setName(e)}
        style={styles.input}
        placeholder="Name"
      />
      <TextInput
        autoFocus={true}
        value={email}
        onChangeText={e => setEmail(e)}
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
        placeholder="Senha"
        style={styles.input}
      />
      <TouchableOpacity onPress={() => signIn()} style={styles.buttom}>
        <Text style={styles.buttomText}>Login</Text>
      </TouchableOpacity>
    </View >
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (user) => dispatch(login(user))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: "#EEE",
    height: 40,
    borderWidth: 1,
    borderCOlor: "#333"
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#4286f4"
  },
  buttomText: {
    fontSize: 20,
    color: "#FFF"
  }
})

export default connect(null, mapDispatchToProps)(Login);
