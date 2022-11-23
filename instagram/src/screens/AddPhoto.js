import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../store/actions/posts";
import { ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, Image, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
function AddPhoto({ name, email, onAddPost, loading }) {
  const noUser = 'Você precisa estar logado para adicionar imagens'
  const [image, setImage] = useState(null);
  const [comment, setComment] = useState('');

  async function pickImage() {

    if (!name) {
      Alert.alert('Falha!', noUser)
      return
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri, base64: result.assets[0].base64 });
    }
  }

  async function save() {
    if (!name) {
      Alert.alert('Falha!', noUser)
      return
    }
    onAddPost({
      id: Math.random(),
      nickname: name,
      email: email,
      image: image,
      comments: [{
        nickname: name,
        comment: comment || null
      }]
    })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem</Text>
        <View style={styles.imageContainer}>
          <Image source={image}
            style={styles.image} />
        </View>
        <TouchableOpacity
          onPress={() => pickImage()}
          style={styles.buttom}>
          <Text style={styles.buttomText}>Escolha a foto</Text>
        </TouchableOpacity>
        <TextInput
          placeholder='Legenda...'
          style={styles.input}
          value={comment}
          editable={name != null}
          onChangeText={comment => setComment(comment)} />
        <TouchableOpacity
          onPress={() => save()}
          disabled={loading}
          style={[styles.buttom, loading ? styles.buttonDisabled : null]}>
          <Text style={styles.buttomText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold'
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#EEE',
    marginTop: 10
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center'
  },
  buttom: {
    padding: 10,
    marginTop: 30,
    backgroundColor: '#4286f4'
  },
  buttomText: {
    color: '#FFF',
    fontSize: 20
  },
  input: {
    marginTop: 20,
    width: '90%'
  },
  buttonDisabled: {
    backgroundColor: '#AAA'
  }
})

const mapStateToProps = ({ user }) => {
  console.log(user)
  return {
    name: user.name,
    email: user.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => dispatch(addPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)