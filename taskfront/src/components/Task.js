import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import commonStyle from "../commonStyle";
import moment from "moment"
import 'moment/locale/pt-br'
export default ({ id, desc, estimateAt, doneAt, toggleTask }) => {

  function getCheckView(doneAt) {
    if (doneAt != null) {
      return (
        <View style={styles.done}>
          <Icon name="check" size={20} color="#FFF" />
        </View>
      )
    } else {
      return (
        <View style={styles.pending}>
        </View>
      )
    }
  }

  const doneOrNotStyle = doneAt != null ? { textDecorationLine: 'line-through' } : {}
  const date = doneAt ? doneAt : estimateAt
  const formattDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM')
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=> toggleTask(id)}>
        <View style={styles.checkContainer} >
          {getCheckView(doneAt)}
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Text style={[styles.desc, doneOrNotStyle]}>{desc}</Text>
        <Text style={styles.date}>{formattDate}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row", borderColor: "#AAA",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: 10
  },
  checkContainer: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center"
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#555"
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green"

  },
  desc: {
    fontFamily: commonStyle.fontFamily,
    color: commonStyle.colors.mainText,
    fontSize: 15
  },
  date: {
    fontFamily: commonStyle.fontFamily,
    color: commonStyle.colors.subText,
    fontSize: 12
  }
})