import React from "react";
import { ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from "react-native";
import background from "../../assets/imgs/login.jpg";
import commonStyle from "../commonStyle"
import AuthInput from "../components/AuthInput";
import { server, showError, showSuccess } from "../common";
export default function Auth() {

  const [stage, setStage] = React.useState(true);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  function signinOrSignup() {
    if (!stage) {
      signUp();
    } else {
      signIn();
    }
  }
  async function signIn() {
    try {
      const res = await server.post('/signin', { email, password })
      server.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
      showSuccess('Login realizado com sucesso!')
    } catch (error) {
      showError(error)
    }
  }

  async function signUp() {
    try {
      await axios.post(`${server}/signup`, {
        name,
        email,
        password,
        confirmPassword
      })
      showSuccess("Usuário cadastrado!")
      setStage(false)
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    } catch (e) {
      showError(e)
    }
  }

  const validation = [];
  if (stage) {
    validation.push(email && password);
  } else {
    validation.push(name, email, password, confirmPassword);
  }

  return (
    <ImageBackground source={background} style={st.background}>
      <Text style={st.title}>Tasks</Text>
      <View style={st.form}>
        {!stage && (
          <AuthInput
            icon="user"
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Nome"
            textContentType="name"
            style={st.input}
          />
        )}
        <AuthInput
          icon="at"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="E-mail"
          textContentType="emailAddress"
          style={st.input}
        />
        <AuthInput
          icon="lock"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          placeholder="Senha"
          style={st.input}
        />
        {!stage && (
          <AuthInput
            icon="asterisk"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry={true}
            placeholder="Confirme a senha"
            style={st.input}
          />
        )}
        <TouchableOpacity disabled={!validation} onPress={() => signinOrSignup()}>
          <View style={st.button}>
            <Text style={st.buttonText}>{!stage ? "Registrar" : "Entrar"}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setStage(!stage)}>
          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
            <Text style={st.buttonText}>{stage ? "Criar uma conta" : "Fazer login"}</Text>
          </View>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  )
}
const st = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: commonStyle.fontFamily,
    color: commonStyle.colors.secondary,
    fontSize: 70,
    marginBottom: 10
  },
  form: {
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 20,
    width: "90%"
  },
  input: {
    marginTop: 10,
    backgroundColor: "#FFF",
    padding: 10
  },
  button: {
    backgroundColor: "#080",
    marginTop: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 7
  },
  buttonText: {
    fontFamily: commonStyle.fontFamily,
    color: "#FFF",
    fontSize: 20
  }

})