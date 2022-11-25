import {Alert, Platform} from "react-native";
import axios from "axios"
const server = axios.create({
  baseURL: "http://192.168.15.27:3000"
})

function showError(err) {
  if (err.response && err.response.data) {
    Alert.alert("Ops! Ocorreu um Problema!", `Mensagem: ${err.response.data}`);
  } else {
    Alert.alert("Ops! Ocorreu um Problema!", `Mensagem: ${err}`);
  }
}

function showSuccess(msg) {
  Alert.alert("Sucesso!", msg);
}
export {server, showError, showSuccess};