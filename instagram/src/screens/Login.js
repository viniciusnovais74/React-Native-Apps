import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function connect() {

  }

  return (
    <View style={styles.container}>
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
      <TouchableOpacity onPress={() => connect()} style={styles.buttom}>
        <Text style={styles.buttomText}>Login</Text>
      </TouchableOpacity>
    </View >
  )
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