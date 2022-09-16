import React, { Component, useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, FlatList, Platform } from "react-native";
import todayImage from "../../assets/imgs/today.jpg"
import moment from "moment"
import commonStyle from "../commonStyle";
import Icon from "react-native-vector-icons/FontAwesome"
import Task from "../components/Task";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddTask from "./AddTask";
export default function TaskList() {

  const [showDoneTask, setShowDoneTask] = useState(true);
  const [showAddTask, setShowAddTask] = useState(false)
  const [visibleTasks, setVisibleTasks] = useState()
  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      desc: "Comprar Livro",
      estimateAt: new Date(),
      doneAt: new Date()
    },
    {
      id: Math.random(),
      desc: "Ler Livro",
      estimateAt: new Date(),
      doneAt: null
    },
  ])

  function toggleFilter() {
    setShowDoneTask(!showDoneTask)
    console.log(showDoneTask)
    filterTasks()
  }

  function filterTasks() {
    let data = null
    if (showDoneTask) {
      data = [...tasks]
    } else {
      const pending = task => task.doneAt === null
      data = tasks?.filter(pending)
    }

    setVisibleTasks(data)
  }


  useEffect(() => filterTasks(), [])


  function toggleTask(toggle) {

    let taskList = [...tasks]
    taskList.forEach(tas => {
      if (tas.id === toggle) {
        tas.doneAt = tas.doneAt ? null : new Date()
      }
    })
    setTasks(taskList)
    filterTasks()
  }

  const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
  return (
    <View style={styles.container}>
      <AddTask isVisible={showAddTask} onCancel={() => setShowAddTask(false)} />
      <ImageBackground style={styles.background} source={todayImage}>
        <View style={styles.iconBar}>
          <TouchableOpacity onPress={() => toggleFilter()}>
            <Icon onPress={() => toggleFilter()} name={showDoneTask ? 'eye' : 'eye-slash'} size={20} color={commonStyle.colors.secondary} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Hoje</Text>
          <Text style={styles.subtitle}>{today}</Text>
        </View>
      </ImageBackground>
      <View style={styles.taskList}>
        <FlatList data={visibleTasks} keyExtractor={item => item.id}
          renderItem={({item}) => <Task {...item} toggleTask={toggleTask} />} />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => setShowAddTask(true)}>
        <Icon name="plus" size={20} colors={commonStyle.colors.secondary} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 3
  },
  taskList: {
    flex: 7
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: commonStyle.fontFamily,
    color: commonStyle.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20
  },
  subtitle: {
    fontFamily: commonStyle.fontFamily,
    color: commonStyle.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30
  },
  iconBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: Platform.OS === "ios" ? 40 : 10
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: commonStyle.colors.today,
    alignItems: 'center',
    justifyContent: 'center'
  }
})