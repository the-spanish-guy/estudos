import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, Button, TouchableOpacity, Alert } from 'react-native'
import moment from 'moment'
import { Ionicons } from "@expo/vector-icons";
import api from '../../services/api'

import styles from './styles'

export default function Editoras() {
  const [text, setText] = useState('');
  const [editoras, setEditoras] = useState([]);

  async function insereEditora(nome_editora) {
    try {
      await api.post('/editora', {nome_editora})
    } catch ({ response }) {
      if(response.status === 409) {
        Alert.alert('Conflict', response.data.msg)
      }
    }
    setText('');
  }

  async function getEditoras() {
    const response = await api.get('/editora')

    setEditoras(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getEditoras()
  }, [text])
  
  return(
    <View style={styles.container}>
      <View style={styles.container_txt}>
        <TextInput
          onChangeText={e => setText(e)}
          placeholder="Nome da Editora"
          style={styles.txt}
          value={text}
        />
        <TouchableOpacity style={styles.add} onPress={() => insereEditora(text)}>
          <Ionicons name="md-add" size={32} color="white" style={styles.btn_add}/>
        </TouchableOpacity>
      </View>

      <View style={styles.container_autor}>
        <Text style={styles.txt_autores}>Nome</Text>
        <Text style={styles.txt_autores}>Data</Text>
      </View>
      <FlatList
        data={editoras}
        keyExtractor={ editora => editora.id_LIVRO }
        horizontal={false}
        style={styles.autor_content}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item: editora }) => (
          <View style={styles.editoras_nomes}>
            <Text style={styles.editoras_nomes}>{editora.NOME_EDITORA}</Text>
            <Text style={styles.editoras_nomes}>{moment(editora.createdAt).format('DD-MM-YYYY')}</Text>
          </View>
        )}
      />

    </View>
  )
}