import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback as TWF,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function AddComment() {
  const [comment, setComment] = React.useState('');
  const [editComment, setEditComment] = React.useState(true);

  function handleAddComment() {
    Alert.alert('Adicionado!', comment);
  }


  let commentArea = null
  if (editComment) {
    commentArea = (
      <View style={styles.container}>
        <TextInput placeholder='Pode comentar...'
          style={styles.input} autoFocus={true}
          value={comment}
          onChangeText={comment => setComment(comment)}
          onSubmitEditing={handleAddComment} />
        <TWF onPress={() => setEditComment(false)}>
          <Icon name='times' size={15} color='#555' />
        </TWF>
      </View>
    )
  } else {
    commentArea = (
      <TWF onPress={() => setEditComment(true)}>
        <View style={styles.container}>
          <Icon name='comment-o' size={25} color='#555' />
          <Text style={styles.caption}>
            Adicione um comentário...
          </Text>
        </View>
      </TWF>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {commentArea}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#CCC'
  },
  input: {
    width: '90%'
  }
})