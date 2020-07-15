import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, FlatList, Button, TouchableOpacity, Alert } from 'react-native'
import moment from 'moment'
import { Ionicons } from "@expo/vector-icons";
import api from '../../services/api'

import styles from './styles'

export default function Autores({ navigation }) {

  const [text, setText] = useState('');
  const [autores, setAutores] = useState([]);

  async function insereAutor(nome_autor) {
    await api.post('/autor', {nome_autor})
    .catch(({response}) => {
      if(response.status === 409) {
        Alert.alert('Conflict', response.data.msg)
      }
    })
    setText('');
  }

  async function getAutores() {
    const response = await api.get('/autor')

    setAutores(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getAutores()
  }, [text])

  function handleNavigation(id_autor) {
    navigation.navigate('LivrosAutores', { id_autor })
  }
  
  return(
    <View style={styles.container}>
      <View style={styles.container_txt}>
        <TextInput
          onChangeText={e => setText(e)}
          placeholder="Nome do Autor"
          style={styles.txt}
          value={text}
        />
        <TouchableOpacity style={styles.add} onPress={() => insereAutor(text)}>
          <Ionicons name="md-add" size={32} color="white" style={styles.btn_add}/>
        </TouchableOpacity>
      </View>

      <View style={styles.container_autor}>
        <Text style={styles.txt_autores}>Nome</Text>
        <Text style={styles.txt_autores}>Data</Text>
      </View>
      <FlatList
        data={autores}
        keyExtractor={ autor => autor.id_AUTOR }
        horizontal={false}
        style={styles.autor_content}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item: autor }) => (
          <View style={styles.autor_nomes}>
            <TouchableOpacity onPress={() => handleNavigation(autor.id_AUTOR)}>
              <Text style={styles.autor_nomes}>{autor.NOME_AUTOR}</Text>
            </TouchableOpacity>
            <Text style={styles.autor_nomes}>{moment(autor.createdAt).format('DD-MM-YYYY')}</Text>
          </View>
        )}
      />

    </View>
  )
}